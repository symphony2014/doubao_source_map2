// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dx' to 'skillTypeToRouteMap'
// - Renamed export 'Og' to 'getSkillTypeFromRoute'
// - Renamed export 'o4' to 'routePathMap'
// - Renamed export 'qc' to 'getSkillTypeFromKey'
// - Renamed export 'rF' to 'skillTypeKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 467072
         */
module.exports = function (module, exports, require) {
  var i;
  var chatPageRouteConstants = require("chat-page-route-constants") /*id: 628768*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  (i = {}).Search = "search";
  i.Image = "create-image";
  i.Write = "write";
  i.Pdf = "chat-with-doc";
  i.Music = "music";
  i.Translate = "translate";
  i.ReadWeb = "read-web";
  i.Academic = "academic-search";
  i.DeepSearch = "deep-search";
  i.Exercise = "edu-exercise";
  i.CodeInterpreter = "code-interpreter";
  i.Coding = "coding";
  i.Voice = "voice";
  i.VideoGeneration = "create-video";
  i.AiPPT = "aippt";
  i.SuperTask = "complex";
  i.Other = "other";
  let l = i;
  let s = Object.fromEntries(Object.entries(l).map(e => {
    let [, t] = e;
    return [t, `${chatRouteConstants.routeChatRoot}${t}`];
  }));
  l.Search;
  chatPageRouteConstants.pageRoutes.SEARCH_DETAIL_PAGE;
  l.Image;
  chatPageRouteConstants.pageRoutes.IMAGE_DETAIL_PAGE;
  l.Write;
  chatPageRouteConstants.pageRoutes.WRITE_DETAIL_PAGE;
  l.Pdf;
  chatPageRouteConstants.pageRoutes.PDF_READ_DETAIL_PAGE;
  l.Music;
  chatPageRouteConstants.pageRoutes.MUSIC_DETAIL_PAGE;
  l.Translate;
  chatPageRouteConstants.pageRoutes.TRANSLATE_DETAIL_PAGE;
  l.ReadWeb;
  chatPageRouteConstants.pageRoutes.READ_WEB_DETAIL_PAGE;
  l.Academic;
  chatPageRouteConstants.pageRoutes.ACADEMIC_SEARCH_DETAIL_PAGE;
  l.DeepSearch;
  chatPageRouteConstants.pageRoutes.ACADEMIC_SEARCH_DETAIL_PAGE;
  l.Exercise;
  chatPageRouteConstants.pageRoutes.EXERCISE_DETAIL_PAGE;
  l.CodeInterpreter;
  chatPageRouteConstants.pageRoutes.CODE_INTERPRETER;
  l.Coding;
  chatPageRouteConstants.pageRoutes.CODING_ASSISTANT_DETAIL_PAGE;
  l.Voice;
  chatPageRouteConstants.pageRoutes.CHAT;
  l.VideoGeneration;
  chatPageRouteConstants.pageRoutes.VIDEO_DETAIL_PAGE;
  l.AiPPT;
  chatPageRouteConstants.pageRoutes.PPT_DETAIL_PAGE;
  l.SuperTask;
  chatPageRouteConstants.pageRoutes.Complex_Task;
  l.Other;
  chatPageRouteConstants.pageRoutes.OTHER;
  chatAppEnums.SkillType.WriteAssistant;
  chatPageRouteConstants.pageRoutes.WRITE_DETAIL_PAGE;
  chatAppEnums.SkillType.ImageGeneration;
  chatPageRouteConstants.pageRoutes.IMAGE_DETAIL_PAGE;
  chatAppEnums.SkillType.Search;
  chatPageRouteConstants.pageRoutes.SEARCH_DETAIL_PAGE;
  chatAppEnums.SkillType.ReadPDF;
  chatPageRouteConstants.pageRoutes.PDF_READ_DETAIL_PAGE;
  chatAppEnums.SkillType.Translate;
  chatPageRouteConstants.pageRoutes.TRANSLATE_DETAIL_PAGE;
  chatAppEnums.SkillType.MusicAssistant;
  chatPageRouteConstants.pageRoutes.MUSIC_DETAIL_PAGE;
  chatAppEnums.SkillType.ReadWebsite;
  chatPageRouteConstants.pageRoutes.READ_WEB_DETAIL_PAGE;
  chatAppEnums.SkillType.AcademicSearch;
  chatPageRouteConstants.pageRoutes.ACADEMIC_SEARCH_DETAIL_PAGE;
  chatAppEnums.SkillType.ExerciseAssistant;
  chatPageRouteConstants.pageRoutes.EXERCISE_DETAIL_PAGE;
  chatAppEnums.SkillType.CodeInterpreter;
  chatPageRouteConstants.pageRoutes.CODE_INTERPRETER;
  chatAppEnums.SkillType.DeepSearch;
  chatPageRouteConstants.pageRoutes.DEEP_SEARCH_DETAIL_PAGE;
  chatAppEnums.SkillType.CodeAssistant;
  chatPageRouteConstants.pageRoutes.CODING_ASSISTANT_DETAIL_PAGE;
  chatAppEnums.SkillType.VideoGeneration;
  chatPageRouteConstants.pageRoutes.VIDEO_DETAIL_PAGE;
  chatAppEnums.SkillType.AiPPT;
  chatPageRouteConstants.pageRoutes.PPT_DETAIL_PAGE;
  chatAppEnums.SkillType.AIPPTSlides;
  chatPageRouteConstants.pageRoutes.PPT_SLIDES_DETAIL_PAGE;
  chatAppEnums.SkillType.DesExtSkillTranslate;
  chatPageRouteConstants.pageRoutes.OTHER;
  chatAppEnums.SkillType.DesExtSkillCustomSkill;
  chatPageRouteConstants.pageRoutes.OTHER;
  chatAppEnums.SkillType.SkillDeepResearch;
  chatPageRouteConstants.pageRoutes.DEEP_RESEARCH_PAGE;
  chatAppEnums.SkillType.SearchEngine;
  chatPageRouteConstants.pageRoutes.OTHER;
  chatAppEnums.SkillType.DesExtChatSkillPlaceholder;
  chatPageRouteConstants.pageRoutes.OTHER;
  let u = {
    [l.Write]: chatAppEnums.SkillType.WriteAssistant,
    [l.Image]: chatAppEnums.SkillType.ImageGeneration,
    [l.Search]: chatAppEnums.SkillType.Search,
    [l.Academic]: chatAppEnums.SkillType.AcademicSearch,
    [l.Pdf]: chatAppEnums.SkillType.ReadPDF,
    [l.Translate]: chatAppEnums.SkillType.Translate,
    [l.Music]: chatAppEnums.SkillType.MusicAssistant,
    [l.ReadWeb]: chatAppEnums.SkillType.ReadWebsite,
    [l.Exercise]: chatAppEnums.SkillType.ExerciseAssistant,
    [l.CodeInterpreter]: chatAppEnums.SkillType.CodeInterpreter,
    [l.DeepSearch]: chatAppEnums.SkillType.DeepSearch,
    [l.Coding]: chatAppEnums.SkillType.CodeAssistant,
    [l.VideoGeneration]: chatAppEnums.SkillType.VideoGeneration,
    [l.AiPPT]: chatAppEnums.SkillType.AiPPT,
    [l.SuperTask]: chatAppEnums.SkillType.DesExtSkillSuperTask
  };
  let c = e => {
    if (e && e in u) {
      return u[e];
    }
  };
  let d = {
    [l.Write]: chatAppEnums.SkillType.WriteAssistant,
    [l.Image]: chatAppEnums.SkillType.ImageGeneration,
    [l.Search]: chatAppEnums.SkillType.Search,
    [l.Academic]: chatAppEnums.SkillType.AcademicSearch,
    [l.Pdf]: chatAppEnums.SkillType.ReadPDF,
    [l.Translate]: chatAppEnums.SkillType.Translate,
    [l.Music]: chatAppEnums.SkillType.MusicAssistant,
    [l.ReadWeb]: chatAppEnums.SkillType.ReadWebsite,
    [l.Exercise]: chatAppEnums.SkillType.ExerciseAssistant,
    [l.CodeInterpreter]: chatAppEnums.SkillType.CodeInterpreter,
    [l.DeepSearch]: chatAppEnums.SkillType.DeepSearch,
    [l.Coding]: chatAppEnums.SkillType.CodeAssistant,
    [l.VideoGeneration]: chatAppEnums.SkillType.VideoGeneration,
    [l.AiPPT]: chatAppEnums.SkillType.AiPPT,
    [l.SuperTask]: chatAppEnums.SkillType.DesExtSkillSuperTask
  };
  let h = e => {
    if (e && e in d) {
      return d[e];
    }
  };
  let m = Object.entries(d).reduce((e, t) => {
    let [n, i] = t;
    if (!(i in e)) {
      e[i] = s[n];
    }
    return e;
  }, {});
  require.d(exports, {
    skillTypeToRouteMap: function () {
      return m;
    },
    getSkillTypeFromRoute: function () {
      return c;
    },
    routePathMap: function () {
      return s;
    },
    getSkillTypeFromKey: function () {
      return h;
    },
    skillTypeKeys: function () {
      return l;
    }
  });
}