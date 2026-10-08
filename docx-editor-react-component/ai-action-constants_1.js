// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OG' to 'toneStyles'
// - Renamed export 'Pi' to 'docCategories'
// - Renamed export 'Rb' to 'docTypeMap'
// - Renamed export 'jK' to 'chineseCharRegex'
// - Renamed export 'jp' to 'aiActions'
// - Renamed export 'lc' to 'actionCommands'
// - Renamed export 'sL' to 'aiClassConstants'
// - Renamed export 'zg' to 'menuItemTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 893977
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var aiBgSelectionClasses = require("ai-bg-selection-classes") /*id: 281313*/;
  (n = {}).Normal = "normal";
  n.Group = "group";
  n.SubMenu = "sub-menu";
  let u = n;
  (o = {})[o.IM = 1] = "IM";
  o[o.DOC = 2] = "DOC";
  o[o.SHEET = 3] = "SHEET";
  o[o.EMIAL = 4] = "EMIAL";
  o[o.CALENDAR = 5] = "CALENDAR";
  let h = o;
  (l = {}).continueWriting = "continue_writing";
  l.improveWriting = "improve_writing";
  l.summarize = "summarize";
  l.explain = "explain";
  l.makeShorter = "make_shorter";
  l.makeLonger = "make_longer";
  l.changeTone = "change_tone";
  l.translate = "translate";
  l.translateMenu = "translateMenu";
  l.findActionItems = "find_action_items";
  l.draft = "draft";
  l.generateIllustrations = "image_gc";
  l.redo = "redo";
  l.historyPrompt = "history_prompt";
  l.userPrompt = "user_prompt";
  l.writeFollowup = "write_follow_up";
  l.changeImgStyle = "change_img_style";
  l.lingoDifficultSentence = "lingo_difficult_sentence";
  l.lingoExplain = "lingo_explain";
  l.lingoRewrite = "lingo_rewrite";
  l.normal = "normal";
  l.grammerFix = "grammerFix";
  l.generateTable = "generate_table";
  l.visualizeAsTable = "visualize_as_table";
  l.moreTemplate = "more_template";
  l.moreHistory = "more_history";
  l.changeSearchScope = "change_search_scope";
  l.enterpriseQA = "enterprise_qa";
  l.headerEnterpriseQA = "header_enterprise_qa";
  l.askDeepseek = "ask_deepseek";
  l.askDoubao15 = "ask_doubao_1.5";
  let f = l;
  (s = {}).doc = "doc";
  s.message = "message";
  s.reception = "reception";
  s.recentlyDoc = "recently_doc";
  let m = s;
  f.explain;
  f.lingoExplain;
  f.improveWriting;
  f.makeLonger;
  f.draft;
  f.generateIllustrations;
  f.generateTable;
  f.askDeepseek;
  (a = {}).makeItFormal = "formal";
  a.makeItLively = "lively";
  a.makeItCasual = "casual";
  a.makeItStraightforward = "straightforward";
  a.makeItProfessional = "professional";
  a.makeItGovernmentStyle = "government style";
  a.makeItArtisticStyle = "artistic style";
  a.makeItAcademicStyle = "academic style";
  a.makeItBusinessStyle = "business style";
  a.makeItJournalisticStyle = "journalistic style";
  a.moreLively = "more_lively";
  a.moreDirect = "more_direct";
  a.moreConfident = "more_confident";
  a.moreFriendly = "more_friendly";
  let v = a;
  (c = {}).finish = "finish";
  c.replace = "replace";
  c.insert = "insert";
  c.copy = "copy";
  c.delete = "delete";
  c.close = "close";
  c.ignore = "ignore";
  c.copyDebug = "copyDebug";
  c.insertDoc = "insertDoc";
  c.insertComment = "insertComment";
  let p = c;
  window.location.href.indexOf("-boe");
  let g = /[\u4e00-\u9fa5|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
  require.d(exports, {
    toneStyles: function () {
      return v;
    },
    docCategories: function () {
      return m;
    },
    docTypeMap: function () {
      return h;
    },
    chineseCharRegex: function () {
      return g;
    },
    aiActions: function () {
      return f;
    },
    actionCommands: function () {
      return p;
    },
    aiClassConstants: function () {
      return aiBgSelectionClasses.aiClassConstants;
    },
    menuItemTypes: function () {
      return u;
    }
  });
}