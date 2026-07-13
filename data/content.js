/* =========================================================================
 *  网站内容数据文件 —— 以后更新网站，只需要改这一个文件！
 *  ========================================================================
 *  说明：
 *  1. 每个文字字段都是 { en: "英文", zh: "中文" } 的格式；
 *     如果某条内容中英文相同（比如英文论文），直接写一个字符串即可。
 *  2. 想加一条新闻 / 一篇论文 / 一个奖项：复制一条现有的，改掉内容即可。
 *  3. 改完保存，刷新浏览器就能看到效果（无需其他操作）。
 *  4. 详细图文说明见仓库根目录《如何更新网站内容.md》。
 * ========================================================================= */

window.SITE = {

  /* ------------------------------------------------------------------
   * 一、个人基本信息（左侧栏）
   * ------------------------------------------------------------------ */
  profile: {
    name:    { en: "Zhenning Wang", zh: "王振宁" },
    subname: { en: "王振宁",         zh: "Zhenning Wang" },   // 姓名下方的小字
    title:   { en: "Associate Professor", zh: "副教授" },
    affiliation: {
      text: {
        en: "School of Computer Science and Engineering<br>Nanjing University of Science and Technology",
        zh: "南京理工大学<br>计算机科学与工程学院"
      },
      url: "https://www.njust.edu.cn/"
    },
    location: { en: "Nanjing, China", zh: "中国 · 南京" },
    photo: "assets/img/profile.jpg",

    email: "wzn0115@163.com",          // ← 换学校邮箱时改这里
    phone: "",                          // 电话：留空则不在页面上显示
    office: {
      en: "Room 4038, Dingxin Building, NJUST",
      zh: "南京理工大学鼎新楼 4038"
    }
  },

  /* ------------------------------------------------------------------
   * 二、学术链接（左侧栏底部的图标链接）
   *  ★ 下面两个是占位链接，请换成你自己的真实主页地址！
   *  想加别的（ResearchGate / DBLP / GitHub），复制一行改一下即可。
   *  常用图标：
   *    Google Scholar: "fas fa-graduation-cap"   ORCID: "fab fa-orcid"
   *    ResearchGate:   "fab fa-researchgate"     GitHub: "fab fa-github"
   *    DBLP:           "fas fa-database"
   * ------------------------------------------------------------------ */
  links: [
    { label: "Google Scholar", icon: "fas fa-graduation-cap", url: "https://scholar.google.com/citations?user=wzn" },  /* ★ 请替换为真实 Scholar 链接 */
    { label: "ORCID",          icon: "fab fa-orcid",          url: "https://orcid.org/0000-0003-3831-987X" }           /* ★ 请替换为真实 ORCID 链接 */
    // { label: "ResearchGate", icon: "fab fa-researchgate",  url: "https://www.researchgate.net/profile/xxx" },
    // { label: "GitHub",       icon: "fab fa-github",        url: "https://github.com/xxx" },
  ],

  /* ------------------------------------------------------------------
   * 三、研究方向标签
   * ------------------------------------------------------------------ */
  interests: [
    { en: "Crowdsensing",  zh: "群智感知" },
    { en: "Mobile Computing",  zh: "移动计算" },
    { en: "Edge Intelligence",    zh: "边缘智能" },
    { en: "Internet of Vehicles", zh: "车联网" },
    { en: "cybersecurity", zh: "网络安全" },
  ],

  /* ------------------------------------------------------------------
   * 四、个人简介（About）—— 可以直接写 HTML，<a> 是超链接
   * ------------------------------------------------------------------ */
  bio: {
    en: "I am an Associate Professor at <a href='https://cs.njust.edu.cn/' target='_blank' rel='noopener'> the School of Computer Science and Engineering</a>, <a href='https://www.njust.edu.cn/' target='_blank' rel='noopener'>Nanjing University of Science and Technology (NJUST)</a>, which I joined in July 2026 as a member of <a href='https://www.junlongzhou.team/' target='_blank' rel='noopener'>Prof. Junlong Zhou</a>'s research team. I received my Ph.D. degree from the School of Cyber Science and Engineering, Wuhan University, China, in June 2026, under the supervision of <a href='http://yuecao.e.zwz.hk/zh' target='_blank' rel='noopener'>Prof. Yue Cao</a>. Prior to that, I received my Master's degree in 2022, under the supervision of <a href='https://www.scholat.com/huanzhou' target='_blank' rel='noopener'>Prof. Huan Zhou</a> (Northwestern Polytechnical University). I have published 16 papers in premier journals and conferences such as IEEE TMC and IEEE COMST, including two ESI Highly Cited Papers. My research interests include mobile crowdsensing, edge intelligence,  Internet of Vehicles and so on.",
    zh: "我于 2026 年 7 月加入<a href='https://cs.njust.edu.cn/' target='_blank' rel='noopener'>计算机科学与工程学院</a>，<a href='https://www.njust.edu.cn/' target='_blank' rel='noopener'>南京理工大学</a>，担任副教授，隶属于<a href='https://www.junlongzhou.team/' target='_blank' rel='noopener'>周俊龙教授</a>的研究团队。2026 年 6 月，我在武汉大学国家网络安全学院获得博士学位，导师为<a href='http://yuecao.e.zwz.hk/zh' target='_blank' rel='noopener'>曹越教授</a>。在此之前，我于 2022 年获得硕士学位，导师为西北工业大学<a href='https://www.scholat.com/huanzhou' target='_blank' rel='noopener'>周欢教授</a>。我已在 IEEE TMC、IEEE COMST 等顶级期刊和会议发表 16 篇论文，含两篇 ESI 高被引论文。我的研究方向包括移动群智感知、边缘智能和车联网等。"
  },

  /* ------------------------------------------------------------------
   * 五、个人履历（Experience）—— 只列博士及以后
   * ------------------------------------------------------------------ */
  experience: [
    {
      period: { en: "2026.07 – Present", zh: "2026.07 – 至今" },
      title:  { en: "Associate Professor", zh: "副教授" },
      place:  { en: "School of Computer Science and Engineering, Nanjing University of Science and Technology", zh: "南京理工大学 计算机科学与工程学院" },
      note:   { en: "Member of <a href='https://www.junlongzhou.team/' target='_blank' rel='noopener'>Prof. Junlong Zhou</a>'s research team", zh: "<a href='https://www.junlongzhou.team/' target='_blank' rel='noopener'>周俊龙教授</a>研究团队" }
    },
    {
      period: { en: "2022.09 – 2026.06", zh: "2022.09 – 2026.06" },
      title:  { en: "Ph.D. in Cyberspace Security", zh: "博士 · 网络空间安全" },
      place:  { en: "School of Cyber Science and Engineering, Wuhan University", zh: "武汉大学 国家网络安全学院" },
      note:   { en: "Advisor: <a href='http://yuecao.e.zwz.hk/zh' target='_blank' rel='noopener'>Prof. Yue Cao</a>", zh: "导师：<a href='http://yuecao.e.zwz.hk/zh' target='_blank' rel='noopener'>曹越教授</a>" }
    }
  ],

  /* ------------------------------------------------------------------
   * 六、最新动态（News）
   *  newsShowCount：默认显示几条，其余折叠（点"展开"查看）
   *  新条目加在最上面即可
   * ------------------------------------------------------------------ */
  newsShowCount: 5,
  news: [
    { date: "2026.07", en: "Joined the School of Computer Science and Engineering, NJUST, as an Associate Professor.", zh: "加入南京理工大学计算机科学与工程学院，担任副教授。" },
    { date: "2026.05", en: "Paper accepted by IEEE Transactions on Mobile Computing.", zh: "论文被 IEEE Transactions on Mobile Computing 录用。" },
    { date: "2025.12", en: "Paper accepted by IEEE Transactions on Mobile Computing.", zh: "论文被 IEEE Transactions on Mobile Computing 录用。" },
    { date: "2025.11", en: "Received the Yu Gang &amp; Song Xiao Special Scholarship, Wuhan University.", zh: "获得武汉大学于刚宋晓专项奖学金。" },
    { date: "2025.07", en: "Our IEEE COMST survey paper was selected as an ESI Highly Cited Paper.", zh: "IEEE COMST 综述论文入选 ESI 高被引论文。" },
    { date: "2025.07", en: "Visited Sungkyunkwan University, South Korea.", zh: "前往韩国成均馆大学交流访问。" },
    { date: "2025.01", en: "Selected for the inaugural Young Elite Scientists Sponsorship Program by CAST — Doctoral Student Special Plan (Sponsoring Society: China SAE).", zh: "入选首届中国科协青年人才托举工程博士生专项计划（托举学会：中国汽车工程学会）。" }
  ],

  /* ------------------------------------------------------------------
   * 七、论文成果（Publications）—— 只放已录用/已发表的
   *  分三个标签页：期刊论文 / 会议论文 / 专著章节
   *  · badges 里的标签会自动配色："CCF-x" 深色，"IF: x" 描边，
   *    含 "ESI" 金色，其余（期刊简称）蓝色
   *  · text 直接写 HTML：<b>加粗自己</b>，<em>斜体论文题目</em>
   *  · 英文论文中英文页面显示相同，写一个字符串即可；
   *    中文论文才需要写 { en: "...", zh: "..." } 两份
   * ------------------------------------------------------------------ */
  pubNote: {
    en: "<b>Bold</b> denotes Zhenning Wang; * denotes corresponding author.",
    zh: "注：<b>加粗</b>为王振宁本人，* 为通讯作者。"
  },
  publications: {
    journal: {
      label: { en: "Journal Articles", zh: "期刊论文" },
      items: [
        {
          badges: ["TMC", "CCF-A", { en: "Corresponding Author", zh: "通讯作者" }, "IF: 9.2"],
          text: "Yujie Song, Yue Cao, <b>Zhenning Wang</b>*, Chi-Hung Chi, Wei Ren, and Wei Wang, “<em>TTACO: Trusted Time-Aware Computing Offloading in Air-Ground Integrated Networks</em>,” <strong>IEEE Transactions on Mobile Computing</strong>, DOI: 10.1109/TMC.2026.3696251, 2026."
        },
        {
          badges: ["TMC", "CCF-A", "IF: 9.2"],
          text: "<b>Zhenning Wang</b>, Yue Cao*, Huan Zhou, Kai Jiang, Yujie Song, and Liang Zhao, “<em>Reputation-based Sensing Data Collection in Vehicular Crowdsensing: A Hybrid Incentive Approach</em>,” <strong>IEEE Transactions on Mobile Computing</strong>, vol. 25, no. 6, pp. 8977-8995, 2026."
        },
        {
          badges: ["TMC", "CCF-A", "IF: 9.2"],
          text: "<b>Zhenning Wang</b>, Yue Cao*, Huan Zhou, Libing Wu, Wei Wang, and Geyong Min, “<em>Fairness-aware Two-stage Hybrid Sensing Method in Vehicular Crowdsensing</em>,” <strong>IEEE Transactions on Mobile Computing</strong>, vol. 23, no. 12, pp. 11971-11988, 2024."
        },
        {
          badges: ["COMST", "ESI Highly Cited", "IF: 46.7"],
          text: "<b>Zhenning Wang</b>, Yue Cao*, Kai Jiang, Huan Zhou, Jiawen Kang, Yuan Zhuang, Daxin Tian, and Victor C. M. Leung, “<em>When Crowdsensing Meets Smart Cities: A Comprehensive Survey and New Perspectives</em>,” <strong>IEEE Communications Surveys &amp; Tutorials</strong>, vol. 27, no. 2, pp. 1101-1151, 2025."
        },   
        {
          badges: ["IEEE Network", "IF: 6.3"],
          text: "Kai Jiang, Yue Cao, <b>Zhenning Wang</b>, Huan Zhou, Hong Zhu, Zhi Liu, and Lexi Xu, “<em>Reinforcement Learning for Digital Twin Empowered Ride-Sharing System Optimization</em>,” <strong>IEEE Network</strong>, vol. 39, no. 2, pp. 184-193, 2025."
        },
        {
          badges: ["TMC", "CCF-A", "IF: 9.2"],
          text: "<b>Zhenning Wang</b>, Yue Cao*, Huan Zhou, Xiaokang Zhou, Jiawen Kang, and H. Herbert Song, “<em>DRAM: Digital Twin-Driven Double-Layer Reverse Auction Method for Multi-Platform Vehicular Crowdsensing</em>,” <strong>IEEE Transactions on Mobile Computing</strong>, vol. 24, no. 12, pp. 13725-13742, 2025."
        },   
        {
          badges: ["JCRD", "CCF-T1/A"],
          text: {
            en: "<b>Zhenning Wang</b>, Yue Cao*, Kai Jiang, Hai Lin, and Huan Zhou, “<em>Incentive-Driven Vehicle Selection and Scheduling Method in Vehicular Crowdsensing</em>,” <strong>Journal of Computer Research and Development</strong>, vol. 61, no. 9, pp. 2213-2228, 2024.",
            zh: "<b>王振宁</b>, 曹越*, 江恺, 林海, 周欢, “<em>车辆群智感知中激励驱动的车辆选择与调度方法</em>,” <strong>计算机研究与发展</strong>, vol. 61, no. 9, pp. 2213-2228, 2024."
          }
        },
        {
          badges: ["IoTJ", { en: "Corresponding Author", zh: "通讯作者" }, "IF: 8.9"],
          text: "Huan Zhou, <b>Zhenning Wang</b>*, Geyong Min, and Haijun Zhang, “<em>UAV-aided Computation Offloading in Mobile Edge Computing Networks: A Stackelberg Game Approach</em>,” <strong>IEEE Internet of Things Journal</strong>, vol. 10, no. 8, pp. 6622-6633, 2023."
        },
        {
          badges: ["TNSE", "ESI Highly Cited", "IF: 7.9"],
          text: "Huan Zhou, <b>Zhenning Wang</b>, Hantong Zheng, Shibo He, and Mianxiong Dong, “<em>Cost Minimization-Oriented Computation Offloading and Service Caching in Mobile Cloud-Edge Computing: An A3C-based Approach</em>,” <strong>IEEE Transactions on Network Science and Engineering</strong>, vol. 10, no. 3, pp. 1326-1338, 2023."
        },
        {
          badges: ["IoTJ", "IF: 8.9"],
          text: "Huan Zhou, <b>Zhenning Wang</b>, Nan Cheng, Deze Zeng, and Pingzhi Fan, “<em>Stackelberg Game-based Computation Offloading in Cloud-Edge Computing Networks</em>,” <strong>IEEE Internet of Things Journal</strong>, vol. 9, no. 17, pp. 16510-16520, 2022."
        },
        
      ]
    },
    conference: {
      label: { en: "Conference Papers", zh: "会议论文" },
      items: [
        {
          badges: ["ICPADS", "CCF-C"],
          text: "Yuqian He, Deng Meng, Huan Zhou, <b>Zhenning Wang</b>, Liang Zhao, and Xinggang Fan, “<em>FedKDC: Toward Efficient Federated Learning via Knowledge Distillation and Data Compression for Heterogeneous Devices</em>,” in Proc. IEEE ICPADS, 2025."
        },
        {
          badges: ["MobiCom Poster", "CCF-A Poster"],
          text: "Hengtao Wang, Huan Zhou, <b>Zhenning Wang</b>, and Xinggang Fan, “<em>Diffusion-Driven Stackelberg Games for Semantic Information Trading in Metaverse Systems</em>,” in Proc. ACM MobiCom, 2025."
        },
        {
          badges: ["WCNC", "CCF-C"],
          text: "Yuchen Lei, Kai Jiang, <b>Zhenning Wang</b>, Yue Cao, Hai Lin, and Liang Chen, “<em>Multi-Agent Reinforcement Learning for Cooperative Task Offloading in Internet-of-Vehicles</em>,” in Proc. IEEE WCNC, 2024."
        },
        {
          badges: ["INFOCOM Poster", "CCF-A Poster"],
          text: "<b>Zhenning Wang</b>, Mingze Li, Liang Zhao, Huan Zhou, and Ning Wang, “<em>A3C-based Computation Offloading and Service Caching in Cloud-Edge Computing Networks</em>,” in Proc. IEEE INFOCOM WKSHPS, 2022."
        },
        {
          badges: ["ICCCN", "CCF-C"],
          text: "<b>Zhenning Wang</b>, Tong Wu, Zhenyu Zhang, and Huan Zhou, “<em>A Game theory-based Computation Offloading Method in Cloud-Edge Computing Networks</em>,” in Proc. IEEE ICCCN, 2021."
        }
        
        
        
        
      ]
    },
    books: {
      label: { en: "Books & Chapters", zh: "专著章节" },
      items: [
        {
          badges: ["IET Book"],
          text: "<b>Zhenning Wang</b>, Yue Cao, Hai Lin, and Bo Zhao, “<em>Edge Computing</em>,” pp. 209-242, IET - Advanced Networking Technologies, 2025. <a href='https://doi.org/10.1049/PBPC079E_ch8' target='_blank' rel='noopener'>[DOI]</a>"
        }
      ]
    }
  },

  /* ------------------------------------------------------------------
   * 八、科研项目（参与）
   * ------------------------------------------------------------------ */
  projects: [
    {
      title:  { en: "National Natural Science Foundation of China (NSFC) - General Program", zh: "国家自然科学基金 · 面上项目" },
      period: "2022 – 2025",
      desc:   { en: "Research on Resource Optimization and Incentive Mechanism in Mobile Edge Computing", zh: "移动边缘计算中的资源优化和激励机制研究" }
    },
    {
      title:  { en: "National Key R&D Program of China (Young Scientist Project), MOST", zh: "科技部 · 国家重点研发计划（青年科学家项目）" },
      period: "2025 – 2027",
      desc:   { en: "Cyberspace Security Governance: Key Technologies for Cross-Domain Collaborative Defense of Critical Infrastructure in Large Hub Navigation", zh: "网络空间安全治理专项：大型枢纽通航关基设施跨域联动防御关键技术" }
    },
    {
      title:  { en: "Hubei Province Major Consultancy Program", zh: "湖北省重大调研课题基金项目" },
      period: "2024",
      desc:   { en: "Research on Coordinated Development of Intelligent Connected Vehicles and Smart Cities", zh: "推动智能网联汽车与智慧城市协同发展研究" }
    },
    {
      title:  { en: "Sakura Science Program, Japan Science and Technology Agency (JST)", zh: "日本科学技术振兴机构 · 樱花科技计划" },
      period: "2024",
      desc:   { en: "Asian Youth Science and Technology Exchange Program, Joint Research Activities (Category B)", zh: "亚洲青少年科技交流项目，共同研究活动类（B类）" }
    },
    {
      title:  { en: "“Unveiling the List” Project, Ministry of Industry and Information Technology (MIIT)", zh: "工业和信息化部 · “揭榜挂帅”项目" },
      period: "2025 – 2026",
      desc:   { en: "Basic Telecom Network Security S&amp;T Innovation Task: Research on 5G-A Communication-Sensing Integrated Lightweight Security Technology", zh: "基础电信网络安全科技创新任务：5G-A通信感知一体轻量化安全技术研究" }
    }
  ],

  /* ------------------------------------------------------------------
   * 九、荣誉获奖
   * ------------------------------------------------------------------ */
  awards: {
    honors: {
      label: { en: "Honors & Fellowships", zh: "荣誉" },
      items: [
        {
          year: "2025–2026",
          name:   { en: "Young Elite Scientists Sponsorship Program by CAST — Doctoral Student Special Plan (Inaugural Cohort)", zh: "入选首届中国科协青年人才托举工程博士生专项计划" },
          detail: { en: "Sponsoring Society: China SAE; Mentor: Prof. Daxin Tian (Beihang University, IEEE Fellow)", zh: "托举学会：中国汽车工程学会；托举导师：北京航空航天大学 田大新教授（IEEE Fellow）" }
        },
        { year: "2025",       name: { en: "Yu Gang &amp; Song Xiao Special Scholarship, Wuhan University", zh: "武汉大学于刚宋晓专项奖学金" } },
        { year: "2025–2026",  name: { en: "Outstanding Doctoral Candidate Extension Grant (Top 20%), Wuhan University", zh: "武汉大学优秀博士延期资助（前 20%）" } },
        { year: "2026",       name: { en: "Outstanding Graduate Student (Graduation Honor), Wuhan University", zh: "武汉大学优秀毕业研究生" } },
        { year: "2024",       name: { en: "First Prize of Excellent Academic Scholarship, Wuhan University", zh: "武汉大学优秀学业奖学金一等奖" } },
        { year: "2024",       name: { en: "Outstanding Graduate Student, Wuhan University", zh: "武汉大学优秀研究生" } },
        { year: "2021",       name: { en: "National Scholarship for Master's Students", zh: "硕士研究生国家奖学金" } },
        { year: "2022",       name: { en: "Outstanding Graduate &amp; Outstanding Master's Thesis, China Three Gorges University", zh: "三峡大学优秀毕业生、优秀硕士毕业论文" } },
        { year: "2024, 2025", name: { en: "ESI Highly Cited Papers (×2)", zh: "ESI 高被引论文（2 篇）" } }
      ]
    },
    competitions: {
      label: { en: "Competition Awards", zh: "获奖" },
      items: [
        { year: "", name: { en: "Second Prize, the 2nd “New Green Cup” ICT Industry Carbon Peaking &amp; Carbon Neutrality Innovation Competition", zh: "第二届“新绿杯”信息通信行业赋能碳达峰碳中和创新大赛二等奖" } },
        { year: "", name: { en: "ICT China Innovation Award (Outstanding Case), China Communications Enterprise Association", zh: "中国通信企业协会 · ICT 中国创新奖（卓越案例）" } }
      ]
    }
  },

  /* ------------------------------------------------------------------
   * 十、交流访问经历
   * ------------------------------------------------------------------ */
  visits: [
    {
      date: "2025.07",
      place: { en: "Sungkyunkwan University, South Korea", zh: "韩国 · 成均馆大学" },
      note:  { en: "Academic visit", zh: "交流访问" }
    },
    {
      date: "2024.12",
      place: { en: "The University of Electro-Communications, Japan", zh: "日本 · 电气通信大学" },
      note:  { en: "Sakura Science Program", zh: "樱花科技计划（Sakura Science Program）" }
    }
  ],

  /* ------------------------------------------------------------------
   * 十一、界面文字（栏目标题、按钮等）—— 一般不用改
   * ------------------------------------------------------------------ */
  ui: {
    navAbout:        { en: "About",        zh: "简介" },
    navExperience:   { en: "Experience",   zh: "履历" },
    navNews:         { en: "News",         zh: "动态" },
    navPublications: { en: "Publications", zh: "论文" },
    navProjects:     { en: "Projects",     zh: "项目" },
    navAwards:       { en: "Awards",       zh: "获奖" },
    navVisits:       { en: "Visits",       zh: "访问" },

    secAbout:        { en: "About Me",                        zh: "个人简介" },
    secExperience:   { en: "Experience",                      zh: "个人履历" },
    secNews:         { en: "News",                            zh: "最新动态" },
    secPublications: { en: "Publications",                    zh: "论文成果" },
    secProjects:     { en: "Research Projects (Participant)", zh: "科研项目（参与）" },
    secAwards:       { en: "Honors & Awards",                 zh: "荣誉获奖" },
    secVisits:       { en: "Academic Visits",                 zh: "交流访问" },

    interestsTitle:  { en: "Research Interests", zh: "研究方向" },
    showMore:        { en: "Show more",  zh: "展开更多" },
    showLess:        { en: "Show less",  zh: "收起" },
    emailLabel:      { en: "Email",  zh: "邮箱" },
    officeLabel:     { en: "Office", zh: "办公室" },
    phoneLabel:      { en: "Phone",  zh: "电话" }
  },

  footer: {
    en: "© 2026 Zhenning Wang · School of Computer Science and Engineering, NJUST",
    zh: "© 2026 王振宁 · 南京理工大学计算机科学与工程学院"
  }
};
