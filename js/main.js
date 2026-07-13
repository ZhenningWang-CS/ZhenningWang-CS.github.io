/* =========================================================================
 *  页面渲染脚本 —— 从 data/content.js 读取内容并生成页面
 *  日常更新内容不需要修改本文件，改 data/content.js 即可
 * ========================================================================= */
(function () {
  "use strict";

  var S = window.SITE;
  var LANG_KEY = "site-lang";

  /* 当前语言：默认英文，用户切换后记住选择 */
  var lang = "en";
  try {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved === "zh" || saved === "en") lang = saved;
  } catch (e) { /* localStorage 不可用时保持默认英文 */ }

  /* 支持用链接直接指定语言：index.html?lang=zh 打开中文版 */
  try {
    var qs = new URLSearchParams(window.location.search).get("lang");
    if (qs === "zh" || qs === "en") lang = qs;
  } catch (e) { /* 旧浏览器忽略 */ }

  /* 交互状态（切换语言重新渲染时保持不变） */
  var newsExpanded = false;
  var activeTab = "journal";

  /* 取字段的当前语言文本：支持纯字符串或 {en, zh} 对象 */
  function t(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[lang] != null ? field[lang] : (field.en || field.zh || "");
  }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  /* 徽章自动配色：ESI→金色，CCF→深色，IF→描边，通讯作者→描边强调，其余→期刊蓝 */
  function badgeClass(text) {
    if (/ESI/i.test(text)) return "badge badge-esi";
    if (/^CCF/i.test(text)) return "badge badge-ccf";
    if (/^IF[:：\s]/i.test(text)) return "badge badge-if";
    if (/Corresponding|通讯/i.test(text)) return "badge badge-corr";
    return "badge badge-venue";
  }

  /* ---------------- 左侧栏 ---------------- */
  function renderSidebar() {
    var p = S.profile;
    var box = document.getElementById("sidebar-inner");
    box.innerHTML = "";

    box.appendChild(el("div", "side-photo",
      "<img src='" + p.photo + "' alt='" + t(p.name) + "'>"));

    box.appendChild(el("h1", "side-name", t(p.name)));
    var subname = el("p", "side-subname", t(p.subname));
    /* 小字姓名与页面语言相反，标注语言便于屏幕阅读器正确朗读 */
    subname.setAttribute("lang", lang === "en" ? "zh-CN" : "en");
    box.appendChild(subname);

    /* 姓名下的信号波纹 —— 页面的小签名 */
    box.appendChild(el("div", "side-wave",
      "<svg viewBox='0 0 120 16' aria-hidden='true'><path d='M0 8 H28 L34 2 L42 14 L48 5 L54 11 L60 8 H120' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>"));

    box.appendChild(el("p", "side-title", t(p.title)));
    // box.appendChild(el("p", "side-affil",
    //   "<a href='" + p.affiliation.url + "' target='_blank' rel='noopener'>" + t(p.affiliation.text) + "</a>"));
    box.appendChild(el("p", "side-affil",
  lang === "en"
    ? "School of Computer Science and Engineering<br>" +
      "<a href='" + p.affiliation.url + "' target='_blank' rel='noopener'>Nanjing University of Science and Technology</a>"
    : "<a href='" + p.affiliation.url + "' target='_blank' rel='noopener'>南京理工大学</a><br>计算机科学与工程学院"
));
    box.appendChild(el("p", "side-loc",
      "<i class='fas fa-map-marker-alt' aria-hidden='true'></i> " + t(p.location)));

    var contact = el("div", "side-contact");
    contact.appendChild(el("p", "side-contact-row",
      "<i class='fas fa-envelope' aria-hidden='true'></i> <a href='mailto:" + p.email + "'>" + p.email + "</a>"));
    if (p.phone) {
      contact.appendChild(el("p", "side-contact-row",
        "<i class='fas fa-phone' aria-hidden='true'></i> <span>" + p.phone + "</span>"));
    }
    contact.appendChild(el("p", "side-contact-row",
      "<i class='fas fa-building' aria-hidden='true'></i> <span>" + t(p.office) + "</span>"));
    box.appendChild(contact);

    if (S.links && S.links.length) {
      var links = el("div", "side-links");
      S.links.forEach(function (lk) {
        var a = el("a", "side-link",
          "<i class='" + lk.icon + "' aria-hidden='true'></i> <span>" + lk.label + "</span>");
        a.href = lk.url;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      });
      box.appendChild(links);
    }
  }

  /* ---------------- 顶部导航 ---------------- */
  function renderNav() {
    var items = [
      ["about", S.ui.navAbout],
      ["experience", S.ui.navExperience],
      ["news", S.ui.navNews],
      ["publications", S.ui.navPublications],
      ["projects", S.ui.navProjects],
      ["awards", S.ui.navAwards],
      ["visits", S.ui.navVisits]
    ];
    var nav = document.getElementById("nav-links");
    nav.innerHTML = "";
    items.forEach(function (it) {
      var a = el("a", null, t(it[1]));
      a.href = "#" + it[0];
      nav.appendChild(a);
    });

    var btn = document.getElementById("lang-toggle");
    btn.textContent = lang === "en" ? "中文" : "EN";
    btn.setAttribute("lang", lang === "en" ? "zh-CN" : "en");
    btn.setAttribute("aria-label", lang === "en" ? "Switch to Chinese" : "切换到英文");

    document.getElementById("nav-name").textContent = t(S.profile.name);
  }

  /* ---------------- 简介 + 研究方向 ---------------- */
  function renderAbout() {
    document.getElementById("about-title").innerHTML = t(S.ui.secAbout);
    document.getElementById("bio").innerHTML = t(S.bio);

    document.getElementById("interests-title").innerHTML = t(S.ui.interestsTitle);
    var tags = document.getElementById("interest-tags");
    tags.innerHTML = "";
    S.interests.forEach(function (item) {
      tags.appendChild(el("span", "tag", t(item)));
    });
  }

  /* ---------------- 履历 ---------------- */
  function renderExperience() {
    document.getElementById("experience-title").innerHTML = t(S.ui.secExperience);
    var list = document.getElementById("experience-list");
    list.innerHTML = "";
    S.experience.forEach(function (item) {
      var row = el("div", "exp-row");
      row.appendChild(el("span", "exp-period", t(item.period)));
      var body = el("div", "exp-body");
      body.appendChild(el("p", "exp-title", t(item.title)));
      body.appendChild(el("p", "exp-place", t(item.place)));
      if (item.note) body.appendChild(el("p", "exp-note", t(item.note)));
      row.appendChild(body);
      list.appendChild(row);
    });
  }

  /* ---------------- 新闻（默认显示 N 条，其余可展开/收起） ---------------- */
  function renderNews(restoreFocus) {
    document.getElementById("news-title").innerHTML = t(S.ui.secNews);
    var list = document.getElementById("news-list");
    list.innerHTML = "";
    var showCount = S.newsShowCount || 5;

    S.news.forEach(function (item, i) {
      var row = el("div", "news-row" + (i >= showCount && !newsExpanded ? " news-row-hidden" : ""));
      row.appendChild(el("span", "news-date", item.date));
      row.appendChild(el("span", "news-text", t(item)));
      list.appendChild(row);
    });

    var btnBox = document.getElementById("news-more");
    btnBox.innerHTML = "";
    var hiddenCount = S.news.length - showCount;
    if (hiddenCount > 0) {
      var btn = el("button", "link-btn");
      btn.type = "button";
      btn.innerHTML = newsExpanded
        ? "<i class='fas fa-chevron-up' aria-hidden='true'></i> " + t(S.ui.showLess)
        : "<i class='fas fa-chevron-down' aria-hidden='true'></i> " + t(S.ui.showMore) + " (" + hiddenCount + ")";
      btn.setAttribute("aria-expanded", newsExpanded ? "true" : "false");
      btn.addEventListener("click", function () {
        newsExpanded = !newsExpanded;
        renderNews(true);
      });
      btnBox.appendChild(btn);
      if (restoreFocus) btn.focus();
    }
  }

  /* ---------------- 论文（标签页切换） ---------------- */
  function renderPublications(restoreFocus) {
    document.getElementById("publications-title").innerHTML = t(S.ui.secPublications);
    document.getElementById("pub-note").innerHTML = t(S.pubNote);

    var tabsBox = document.getElementById("pub-tabs");
    tabsBox.innerHTML = "";
    var keys = Object.keys(S.publications);
    if (keys.indexOf(activeTab) === -1) activeTab = keys[0];

    keys.forEach(function (key) {
      var cat = S.publications[key];
      var btn = el("button", "pub-tab" + (key === activeTab ? " pub-tab-active" : ""));
      btn.type = "button";
      btn.innerHTML = t(cat.label) + " <span class='pub-count'>" + cat.items.length + "</span>";
      btn.setAttribute("aria-pressed", key === activeTab ? "true" : "false");
      btn.addEventListener("click", function () {
        activeTab = key;
        renderPublications(true);
      });
      tabsBox.appendChild(btn);
      if (restoreFocus && key === activeTab) btn.focus();
    });

    var list = document.getElementById("pub-list");
    list.innerHTML = "";
    S.publications[activeTab].items.forEach(function (item, i) {
      var li = el("li", "pub-item");
      var badges = el("div", "pub-badges");
      badges.appendChild(el("span", "pub-index", String(i + 1)));
      (item.badges || []).forEach(function (b) {
        var text = t(b);
        badges.appendChild(el("span", badgeClass(text), text));
      });
      li.appendChild(badges);
      li.appendChild(el("p", "pub-text", t(item.text)));
      list.appendChild(li);
    });
  }

  /* ---------------- 项目 ---------------- */
  function renderProjects() {
    document.getElementById("projects-title").innerHTML = t(S.ui.secProjects);
    var list = document.getElementById("project-list");
    list.innerHTML = "";
    S.projects.forEach(function (item) {
      var row = el("div", "proj-row");
      var head = el("div", "proj-head");
      head.appendChild(el("h3", "proj-title", t(item.title)));
      head.appendChild(el("span", "proj-period", item.period));
      row.appendChild(head);
      row.appendChild(el("p", "proj-desc", t(item.desc)));
      list.appendChild(row);
    });
  }

  /* ---------------- 荣誉获奖 ---------------- */
  function renderAwards() {
    document.getElementById("awards-title").innerHTML = t(S.ui.secAwards);
    var box = document.getElementById("awards-box");
    box.innerHTML = "";
    ["honors", "competitions"].forEach(function (key) {
      var group = S.awards[key];
      if (!group || !group.items.length) return;
      box.appendChild(el("h3", "award-group", t(group.label)));
      group.items.forEach(function (item) {
        var row = el("div", "award-row");
        row.appendChild(el("span", "award-year", item.year || "—"));
        var body = el("div", "award-body");
        body.appendChild(el("span", "award-name", t(item.name)));
        if (item.detail) body.appendChild(el("span", "award-detail", t(item.detail)));
        row.appendChild(body);
        box.appendChild(row);
      });
    });
  }

  /* ---------------- 交流访问 ---------------- */
  function renderVisits() {
    document.getElementById("visits-title").innerHTML = t(S.ui.secVisits);
    var list = document.getElementById("visits-list");
    list.innerHTML = "";
    S.visits.forEach(function (item) {
      var row = el("div", "news-row");
      row.appendChild(el("span", "news-date", item.date));
      row.appendChild(el("span", "news-text",
        t(item.place) + (item.note ? " <span class='visit-note'>· " + t(item.note) + "</span>" : "")));
      list.appendChild(row);
    });
  }

  function renderFooter() {

    var today = new Date();

    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var dd = String(today.getDate()).padStart(2, "0");

    var date = yyyy + "-" + mm + "-" + dd;

    var html = t(S.footer);

    html += "<br><span style='font-size:0.9em;color:#777;'>"
          + (lang === "en"
              ? "Last updated: " + date
              : "最后更新：" + date)
          + "</span>";

    document.getElementById("footer-text").innerHTML = html;
}

  /* ---------------- 总渲染 ---------------- */
  function renderAll() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = lang === "zh" ? "王振宁 | Zhenning Wang" : "Zhenning Wang | 王振宁";
    renderSidebar();
    renderNav();
    renderAbout();
    renderExperience();
    renderNews();
    renderPublications();
    renderProjects();
    renderAwards();
    renderVisits();
    renderFooter();
  }

  /* ---------------- 事件绑定（只绑定一次） ---------------- */
  document.getElementById("lang-toggle").addEventListener("click", function () {
    lang = lang === "en" ? "zh" : "en";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* 忽略 */ }
    /* 去掉网址里的 ?lang= 参数，避免刷新后覆盖用户手动选择的语言 */
    try {
      var url = new URL(window.location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.delete("lang");
        history.replaceState(null, "", url.pathname + url.search + url.hash);
      }
    } catch (e) { /* 旧浏览器忽略 */ }
    renderAll();
  });

  var backBtn = document.getElementById("back-to-top");
  backBtn.addEventListener("click", function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
  window.addEventListener("scroll", function () {
    backBtn.classList.toggle("show", window.scrollY > 480);
  }, { passive: true });

  renderAll();
})();
