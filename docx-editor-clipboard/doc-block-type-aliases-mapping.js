// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qd' to 'blockTypeAliases'
// - Renamed export 'Wl' to 'uiComponentKeywords'
// - Renamed export 'xr' to 'blockTypeKeywords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 322889
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var docTaskBlockFlags = require("doc-task-block-flags") /*id: 46259*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  var docxToolboxUtility = require("docx-toolbox-utility") /*id: 64748*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var aiConstants = require("ai-constants") /*id: 447212*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  let h = {
    ...docBlockTypeConstants.blockTypeConstants,
    TEMPLATE: "template",
    MENTION_PEOPLE: "mention_people",
    CHAT_CARD: "chat_card",
    MENTION_PAGE: "mention_page",
    MENTION_DOC: "mention_doc",
    POLL: "poll",
    NEW_CHILD_DOC: "new_child_doc",
    ...iframeLayoutConstants.IframeTypes,
    LINK: "link",
    ADD_COLUMN: "add_column",
    REMINDER: "reminder",
    OKR: "okr",
    EQUATION: "equation",
    SYNCED: "synced",
    AI: "ai",
    AI_SEARCH: "ai_search"
  };
  let f = {
    [editorUiComponentConstants.uiComponentConstants.Basic]: ["基础", "basic", "jichu", "jc"],
    [editorUiComponentConstants.uiComponentConstants.Common]: ["常用", "common", "changyong", "cy"],
    [editorUiComponentConstants.uiComponentConstants.Wiki]: ["知识库", "wiki", "zhishiku", "zsk"],
    [editorUiComponentConstants.uiComponentConstants.Drawing]: ["绘图", "draw", "huitu", "ht"],
    [editorUiComponentConstants.uiComponentConstants.Data]: ["数据", "data", "shuju", "sj"],
    [editorUiComponentConstants.uiComponentConstants.Bitable]: ["多维表格", "bitable", "duoweibiaoge", "dwbg", "smartable", "数据"],
    [editorUiComponentConstants.uiComponentConstants.ProjectManage]: ["项目管理", "xiangmuguanli", "xmgl"],
    [editorUiComponentConstants.uiComponentConstants.TeamCooperation]: ["团队协作", "collaboration", "tuanduixiezuo", "tdxz"],
    [editorUiComponentConstants.uiComponentConstants.Vote]: ["投票", "toupiao", "tp"],
    [editorUiComponentConstants.uiComponentConstants.Collection]: ["信息收集", "xinxishouji", "xxsj"],
    [editorUiComponentConstants.uiComponentConstants.ThirdPartyContent]: ["第三方内容", "disanfangneirong", "dsfnr"],
    [editorUiComponentConstants.uiComponentConstants.Embed]: ["内嵌网页", "embeds", "neiqianwangye", "nqwy", "embeds", "iframe"],
    [editorUiComponentConstants.uiComponentConstants.Application]: ["应用连接", "yingyonglianjie", "yylj"],
    [editorUiComponentConstants.uiComponentConstants.Advanced]: ["进阶", "advanced", "jinjie", "jj"],
    [editorUiComponentConstants.uiComponentConstants.DocMiniApp]: ["小应用", "miniapp", "xiaoyingyong", "xyy"],
    [editorUiComponentConstants.uiComponentConstants.Button]: ["按钮", "anniu", "an", "button"]
  };
  let p = {
    [h.TEXT]: ["文本", "zhengwen", "zw", "wenben", "wb", "正文", "text", "文字", "wenzi", "wz"],
    [h.HEADING1]: ["一级标题", "h1", "yijibiaoti", "yjbt", "大标题", "标题1", "一号标题", "1号标题", "heading1", "header1", "Large Heading", "one", "first"],
    [h.HEADING2]: ["二级标题", "h2", "erjibiaoti", "ejbt", "中标题", "标题2", "二号标题", "2号标题", "heading2", "header2", "Medium Heading", "two", "second"],
    [h.HEADING3]: ["三级标题", "h3", "sanjibiaoti", "sjbt", "小标题", "标题3", "三号标题", "3号标题", "heading3", "header3", "Small Heading", "three", "third"],
    [h.HEADING4]: ["四级标题", "h4", "sijibiaoti", "sjbt", "标题4", "四号标题", "4号标题", "heading4", "header4", "fourth"],
    [h.HEADING5]: ["五级标题", "h5", "wujibiaoti", "wjbt", "标题5", "五号标题", "5号标题", "heading5", "header5", "five", "fifth"],
    [h.HEADING6]: ["六级标题", "h6", "liujibiaoti", "ljbt", "标题6", "六号标题", "6号标题", "heading6", "header6", "six", "sixth"],
    [h.HEADING7]: ["七级标题", "h7", "qijibiaoti", "qjbt", "标题7", "七号标题", "7号标题", "heading7", "header7", "seven", "seventh"],
    [h.HEADING8]: ["八级标题", "h8", "bajibiaoti", "bjbt", "标题8", "八号标题", "8号标题", "heading8", "header8", "eight", "eighth"],
    [h.HEADING9]: ["九级标题", "h9", "jiujibiaoti", "jjbt", "标题9", "九号标题", "9号标题", "heading9", "header9", "nine", "ninth"],
    [h.ORDERED]: ["有序列表", "numbered list", "youxuliebiao", "yxlb", "数字编号", "shuzibianhao", "szbh", "多级列表", "ordered list", "list"],
    [h.BULLET]: ["无序列表", "bulleted list", "wuxuliebiao", "wxlb", "项目符号", "xiangmufuhao", "xmfh", "多级列表", "unordered list", "list", "bullet point"],
    [h.TODO]: docTaskBlockFlags.isFeishuTodoEnabled() ? ["任务", "renwu", "rw", "db", "todo", "to do", "to-do", "To-do list", "renwuliebiao", "rwlb", "todo list", "task"] : ["任务列表", "To-do list", "renwuliebiao", "rwlb", "待办事项", "列表", "todo", "checkbox", "todolist", "to-do", "task list"],
    [h.TASK]: ["任务", "待办", "任务列表", "renwu", "rw", "daiban", "db", "todo", "to do", "to-do", "task", "To-do list", "renwuliebiao", "rwlb", "todo list", "task list"],
    [h.AGENDA]: ["会议议程", "会议", "议程", "huiyiyicheng", "huiyi", "yicheng", "yc", "hyyc", "agenda", "meeting agenda"],
    [h.TASK_LIST]: ["清单", "协作", "协作清单", "xz", "xzqd", "xiezuo", "xiezuoqingdan", "qingdan", "task", "tasklist", "task list", "todo", "todolist", "todo list"],
    [h.QUOTE]: ["引用", "quote", "yinyong", "yy", "引述", "引文", "摘引", "摘抄", "摘选", "cite", "citation", "'", "\"", "“", "”"],
    [h.DIVIDER]: ["分隔线", "divider", "fengexian", "fgx", "横线", "分割线", "分割符", "分隔符", "dividing line", "line", "separate", "divide"],
    [h.MENTION_PEOPLE]: ["人员", "person", "renyuan", "ry", "成员", "people", "adult", "mention", "human", "member", "collaborator", "@"],
    [h.CHAT_CARD]: ["群名片", "group card", "qunmingpian", "qmp", "群聊", "小组", "话题", "group chat", "mention", "card", "@"],
    [h.MENTION_PAGE]: ["云文档", "space file", "yunwendang", "ywd", "cloud file", "docs", "document", "mention", "@"],
    [h.CALLOUT]: ["高亮块", "callout", "gaoliangkuai", "glk", "强调", "qiangdiao", "突出", "highlight", "emphasize"],
    [h.CODE]: ["代码块", "code", "daimakuai", "dmk", "行内代码", "code block"],
    [h.UML]: ["umltu", "uml 图", "绘图", "画图", "process", "uml diagram", "flowchart", "graph", "draw"],
    [h.FLOWCHART]: ["流程图", "flowchart", "liuchengtu", "lct", "图形", "绘图", "画图", "flow", "process", "diagram", "graph", "draw"],
    [h.MERMAID]: ["甘特图", "流程图", "mermaid", "脑图", "饼图", "mindmap", "markmap", "ganttu", "gt", "甘特", "甘特图", "甘特", "gantt chart", "chart", "gantt", "gantt diagram", "diagram", "flow", "process"],
    [h.WHITEBOARD]: ["画板", "board", "whiteboard", "huaban", "hb", "图形", "绘图", "画图", "白板", "flow", "process", "diagram", "graph", "draw"],
    [h.IMAGE]: ["图片", "image", "tupian", "tp", "照片", "多媒体", "配图", "相片", "picture", "photo", "jpg", "jpeg", "png"],
    [h.FILE]: ["视频或文件", "video or file", "file", "local file", "wenjian", "wj", "附件", "word", "excel", "ppt", "pdf", "上传", "document", "attachment", "shipin", "video", "sp", "视频", "shipinhuowenjian", "sphwj"],
    [h.BOOKMARK]: ["Web Card", "Web Bookmark", "网页卡片", "wangyekapian", "wykp", "wangye", "book", "bookmark", "mark", "web", "网", "网页", "卡", "卡片"],
    [h.SHEET]: ["电子表格", "dianzibiaoge", "dzbg", "数据", "sheet", "excel", "Spreadsheets"],
    [h.BITABLE]: ["多维表格", "duoweibiaoge", "dwbg", "bitable", "smartable"],
    [h.BASE_REFER]: ["多维表格", "duoweibiaoge", "dwbg", "bitable", "smartable"],
    [h.NEW_CHILD_DOC]: ["子文档", "zwd", "ziwendang"],
    [platformDocUtils.NQQ.GridView]: ["表格视图", "grid view", "gridview", "biaogeshitu", "bgst", "shujubiao", "sjb", "database", "data table", "view", "sheet"],
    [platformDocUtils.NQQ.Kanban]: ["看板视图", "kanbanshitu", "kbst", "kanban view", "view", "kb", "view board", "卡片"],
    [platformDocUtils.NQQ.Gantt]: ["甘特视图", "ganteshitu", "gtst", "甘特图", "gantetu", "gante view", "view", "gtt", "view board"],
    [platformDocUtils.NQQ.Gallery]: ["画册视图", "huaceshitu", "hcst", "gallery view", "view", "view board", "卡片"],
    [h.MINDMAP]: ["思维导图", "mindmap", "mind map", "siweidaotu", "swdt", "思维笔记", "siweibiji", "swbj", "脑图", "naotu", "nt", "mindnote", "xmind", "mubu"],
    [h.SYNCED]: ["同步块", "tongbukuai", "tbk", "synced block"],
    [h.EQUATION]: docxToolboxUtility.isDocxEnabled() ? ["gongshi", "gs", "数学公式", "方程", "LaTeX", "TeX", "formula", "equation", "math"] : [],
    [h.TEMPLATE]: ["模板", "template", "tmp", "muban", "mb", "模版", "moban"],
    [h.TABLE]: ["表格", "table", "biaoge", "bg", "排版格子", "文字表格", "排版表格", "form", "tabulation"],
    [h.bilibili]: ["哔哩哔哩", "Bilibili", "视频", "B站", "video"],
    [h.bilibiliBv]: ["哔哩哔哩", "Bilibili", "视频", "B站", "video"],
    [h.bilibiliBp]: ["哔哩哔哩", "Bilibili", "视频", "B站", "video"],
    [h.bilibilip]: ["哔哩哔哩", "Bilibili", "视频", "B站", "video"],
    [h.xigua]: ["西瓜视频", "xigua video", "Buzzvideo", "xiguashipin", "xgsp", "视频", "video"],
    [h.youku]: ["优酷视频", "youkushipin", "youku", "yksp", "视频", "video"],
    [h.airtable]: ["airtable", "表格", "table"],
    [h.baidumap]: ["百度地图", "baidu maps", "baiduditu", "bddt", "map"],
    [h.autonavi]: ["高德地图", "AutoNavi Maps", "gaodeditu", "gddt", "map", "gaode map"],
    [h.gmaps]: ["Google 地图", "google maps", "gugeditu", "ggdt", "map"],
    [h.tiktok]: ["TikTok", "视频", "video", "site", "website", "web video"],
    [h.douyin]: ["douyin", "dy", "抖音"],
    [h.iqiyi]: ["aiqiyi", "aqy", "爱奇艺"],
    [h.ByteJimeng]: ["即梦AI", "jimengai", "dreamina"],
    [h.LINK]: ["链接", "lianjie", "lj", "hyperlink", "网址", "url", "link", "www"],
    [h.ADD_COLUMN]: ["分栏", "column", "fenlan", "fl", "布局", "buju", "排版", "paiban", "grid"],
    [h.REMINDER]: ["日期提醒", "提醒", "date reminder", "riqitixing", "tixing", "time", "today", "时间", "shijian", "sj", "tx", "日期", "riqi", "rq", "通知", "闹钟", "到期", "date", "mention", "reminder", "now", "tomorrow", "/", "、"],
    [h.figma]: ["设计", "figma", "sheji", "原型", "yuanxing"],
    [h.modao]: ["墨刀", "mockingbot", "modao", "md", "原型", "yuanxing"],
    [h.canva]: ["设计", "sheji", "可画", "canva", "kehua"],
    [h.jcode]: ["mashangjuejin", "juejin", "msjj", "jj", "码上掘金", "掘金", "code", "jcode"],
    [h.codepen]: ["codepen"],
    [h.feishu_survey]: ["飞书问卷", "feishuwenjuan", "feishu survey", "fswj", "wj", "survey", "表单", "biaodan"],
    [h.jinshuju]: ["金数据", "jinshuju", "jsj", "survey", "表单", "biaodan"],
    [h.youtube]: ["youtube", "视频", "video"],
    [h.OKR]: ["jinzhanbaogao", "okr"],
    [h.POLL]: ["投票", "poll", "vote", "toupiao", "tp", "单选", "单选投票", "single", "single vote", "danxuan", "danxuantoupiao", "dxtp", "cast a vote", "single choice poll", "多选", "多选投票", "multiple", "multiple vote", "duoxuan", "duoxuantoupiao", "dxtp", "multiple choice poll", "匿名", "匿名投票", "匿名单选", "匿名单选投票", "匿名多选", "匿名多选投票"],
    [h.JIRA_ISSUE]: ["jira", "issue", "问题", "jira issue", "jiraissue", "jira问题"],
    [h.JIRA_FILTER]: ["jira", "filter", "过滤器", "jira filter", "jirafilter", "jira过滤器"],
    [h.WIKI_RECENT]: ["空间动态", "kongjiandongtai", "kjdt", "workspace", "updates"],
    [h.WIKI_CATALOG]: ["子页面目录", "ziyemianmulu", "zymml", "subpage", "contents"],
    [h.FOLDER_MANAGER]: ["文件夹视图", "wenjianjiashitu", "wjjst", "folder", "foldermgr", "子页面列表", "ziyemianliebiao", "ziyemian", "zymlb", "subpage", "list"],
    [h.AI]: ["Ask AI", "ai", "续写", "xx", "continue writing", "continue", "润色", "rs", "Improve writing", "缩写", "sx", "Make it shorter", "扩写", "kx", "Make it longer", "总结", "zj", "summarize", "头脑风暴", "创意", "idea", "Brainstorming", "文档大纲", "Outlines", "优劣势分析", "Pros and cons list"],
    [h.AI_SEARCH]: ["ai", "search", "draft", "查资料", "起草"],
    [h.CALENDAR_EVENT]: ["日程", "richeng", "rc", "event", "calendar", "calendar event", "日历", "rili", "rl", "timer"],
    [inlineComponentFacade.actionTypes.OpenLink]: ["打开超链接", "dakaichaolianjie", "dkclj", "open links", "openlinks", "open hyperlink", "openhyperlink"],
    [inlineComponentFacade.actionTypes.DuplicatePage]: ["创建副本", "chuangjianfuben", "cjfb", "make a copy", "make copys", "makeacopy"],
    [inlineComponentFacade.actionTypes.FollowPage]: ["订阅文档更新", "关注文档更新", "dingyuewendanggengxin", "dywdgx", "follow doc", "guanzhuwendanggengxin", "gzwdgx"],
    [aiConstants.aiConstants.AI_BLOCK]: ["ai", "ai模板", "模板", "模版", "aimoban", "aimuban", "moban", "muban", "mb", "aimb", "ai template", "ai block", "自定义", "Custom", "zidingyi"],
    [aiConstants.aiConstants.EDIT_DISCRIPTION]: ["总结", "zj", "zongjie", "summarize", "ai"],
    [aiConstants.aiConstants.TODO]: ["提取待办", "daiban", "tiqudaiban", "db", "td", "todo", "find action items", "action items", "ai"],
    [aiConstants.aiConstants.TRANSLATE]: ["翻译", "fanyi", "fy", "translate", "ai"]
  };
  require.d(exports, {
    blockTypeAliases: function () {
      return h;
    },
    uiComponentKeywords: function () {
      return f;
    },
    blockTypeKeywords: function () {
      return p;
    }
  });
}