// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ER' to 'asyncJobStatus'
// - Renamed export 'F_' to 'requestSceneType'
// - Renamed export 'Fz' to 'inputSourceType'
// - Renamed export 'Rv' to 'independentSiteType'
// - Renamed export 'b8' to 'patchObjectType'
// - Renamed export 'p0' to 'fetchStreamType'
// - Renamed export 'rn' to 'deepThinkSwitch'
// - Renamed export 'tk' to 'patchType'
// - Renamed export 'wZ' to 'replyEndType'
// - Renamed export 'zo' to 'skillTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 458113
         */
module.exports = function (module, exports, require) {
  var i = {
    ReqSceneType_Default: 0,
    ReqSceneType_Vui: 1,
    ReqSceneType_OAPI: 2,
    ReqSceneType_Inner: 3,
    ReqSceneType_VuiV3: 4
  };
  var r = {
    DeepThinkSwitchFalse: 0,
    DeepThinkSwitchTrue: 1,
    DeepThinkSwitchAuto: 2,
    DeepThinkSwitchPro: 3
  };
  var s = {
    InputBox: 0,
    GuidanceOrSuggestion: 1,
    Guidance: 2,
    Suggestion: 3,
    DesktopPush: 4,
    DesktopAskAssistant: 5,
    DesktopLauncher: 6,
    SharedApp: 7,
    CanvasActionbar: 8
  };
  var a = {
    INDEPENDENT_SITE_UNKNOWN: 0,
    INDEPENDENT_SITE_CODE: 1,
    INDEPENDENT_SITE_AI_PLAYGROUND: 2
  };
  var o = {
    FreeChat: 0,
    SkillWrite: 2,
    SkillImageGen: 3,
    SkillSearch: 4,
    SkillTranslate: 5,
    SkillRead: 6,
    SkillWebpage: 7,
    SkillDeepSearch: 8,
    SkillMusicGen: 9,
    SkillEdu: 11,
    SkillCodeInterpreter: 13,
    SkillCodeAssistant: 16,
    SkillVideoGeneration: 17,
    SkillType_AiPPT: 18,
    SkillTypeMediaUnderstandingByAsr: 19,
    SkillSearchEngine: 20,
    SkillDeepResearch: 25,
    SkillAiPodcast: 26,
    CustomSkill: 27,
    DesExtSkillMultiWebsites: 12,
    DesExtSkillReferenceAsk: 14,
    DesExtChatSkillPlaceholder: 100,
    DesExtSkillTranslate: 101,
    DesExtSkillSummaryHighlight: 102,
    DesExtSkillExplain: 103,
    DesExtSkillDesExtSearchCard: 104,
    DesExtSkillLinkPreview: 105,
    DesExtSkillDesExtSuggest: 106,
    DesExtSkillAIToolSummary: 107,
    DesExtSkillVideoSummary: 108,
    DesExtSkillOneLevelVideoSummary: 109,
    DesExtSkillRewriteWithTone: 110,
    DesExtSkillCustomSkill: 111,
    DesExtSkillSearchMindNote: 112,
    DesExtSkillTextToMindNote: 113,
    DesExtSkillBilingualSentence: 114,
    DesExtSkillAITitle: 115,
    DesExtPodcastTranscript: 116,
    DesExtSkillWebsiteDetail: 117,
    DesExtSkillSummary: 118,
    DesExtSkillVideoListSummary: 119,
    DesExtSkillCommentAnalyze: 120,
    DesExtSkillVideoDeepAnalyze: 121,
    DesExtSkillTopicTrendAnalyze: 122,
    DesExtSkillMindMap: 125,
    DesExtSkillSimplifiedRead: 126,
    DesExtSkillGrammar: 127,
    DesExtSkillReply: 128,
    DesExtSkillSharedAppAssistant: 131,
    DesExtSkillPageTranslate: 132,
    DesExtSkillMeetingSummary: 133,
    DesExtSkillGrammarCorrection: 136,
    DesExtSkillPodcastReading: 137,
    DesExtSkillSuperTask: 138,
    DesExtSkillMindMapGenerate: 140,
    SKILL_CALL: 1001,
    SKILL_NEWS_ACTIONBAR_NAME: 1002,
    SKILL_HEALTH_CONSULTATION: 1003,
    SKILL_MUSIC_RANDOM_PLAY: 1004,
    SKILL_RECORD: 1005,
    SKILL_CALL_ENGLISH_LEARNING: 1006,
    SKILL_CALL_IDIOM: 1007,
    SKILL_CALL_INTERVIEW: 1008,
    SKILL_CALL_TREE_HOLE: 1009,
    SKILL_COMMAND: 1010,
    SKILL_DAILY_NEWS: 1011,
    SKILL_OLYMPIC_DAILY_CARD: 1012,
    SKILL_SPEAKER: 1013,
    SKILL_COMPLEX_SEARCH: 1014,
    SKILL_LISTEN_PODCAST: 1015,
    SKILL_CALL_VIDEO: 1016,
    SKILL_CREATION_TEMPLATE_AIGENIMG: 1017,
    SKILL_CREATION_TEMPLATE_AIREPLICA: 1018,
    SKILL_DEEP_THINKING: 1019,
    SKILL_SINGER: 1020,
    SKILL_INMATE: 1021,
    SKILL_ENGLISH_LEARNING: 1022,
    SKILL_PODCAST_GENERATION: 1023,
    SKILL_PROBLEM_SOLVING: 2000,
    SKILL_IMAGE_GENERATION: 2001,
    SKILL_VIDEO_GENERATION: 2002,
    SKILL_AI_PHOTO: 2003,
    SKILL_WRITING_ASSISTANCE: 2004,
    SKILL_MUSIC_GENERATION: 2005,
    SKILL_TRANSLATION: 2006,
    SKILL_FPA_REMINDER: 2007,
    SKILL_DOCUMENT_READING: 2008,
    SKILL_WEB_PAGE_READING: 2009,
    SKILL_REPLY_ASSISTANCE: 2010,
    SKILL_HEALTH_CONSULTATION_OLD: 2011,
    SKILL_SEARCH: 2013,
    SKILL_COMPOSITION_CORRECTION: 2014,
    SKILL_ORAL_CALCULATION_CORRECTION: 2015,
    SKILL_AI_IMAGE_EDITING: 2016,
    SKILL_AI_NOTE: 2017,
    SKILL_CONTINUOUS_VOICE: 2018,
    SKILL_HEALTH_CONSULTATION_NEW: 2019,
    SKILL_IN_DEPTH_RESEARCH: 2020,
    SKILL_VIDEO_UNDERSTANDING: 2021,
    SKILL_COLLEGE_ENTRANCE_EXAM: 2022,
    SKILL_PHOTO_ANIMATION: 2023,
    SKILL_AI_PODCAST_NEW: 2024,
    SKILL_CREATION_MERGE: 2025,
    SKILL_HOMEWORK_CORRECTION: 2026,
    SKILL_MINI_APP: 2027,
    SkillPPTGen: 5000
  };
  var l = {
    PatchObject_Default: 0,
    PatchObject_ContentBlock: 1,
    PatchObject_MessageStatus: 2,
    PatchObject_ContentStatus: 3,
    PatchObject_Brief: 4,
    PatchObject_Suggest: 5,
    PatchObject_Ext: 50,
    PatchObject_DownstreamVerboseInfo: 60,
    PatchObject_ContentType: 100,
    PatchObject_BizContentType: 101,
    PatchObject_Content: 102,
    PatchObject_ThinkingContent: 103,
    PatchObject_ModelContent: 110,
    PatchObject_TtsContent: 111,
    PatchObject_MetaInfos: 112
  };
  var u = {
    PatchType_Unknown: 0,
    PatchType_Append: 1,
    PatchType_Replace: 2,
    PatchType_Delete: 3
  };
  var c = {
    ReplyEndType_Unknown: 0,
    ReplyEndType_MsgFinish: 1,
    ReplyEndType_AnswerFinish: 2,
    ReplyEndType_ReplyFinish: 3
  };
  var d = {
    FetchStreamTypeUnknown: 0,
    FetchStreamTypeFetchMsgChatNext: 1,
    FetchStreamTypeAsyncTask: 2,
    FetchStreamTypeFetchMsgLegacy: 3
  };
  var f = {
    AsyncJobStatus_Unknown: 0,
    AsyncJobStatus_Success: 1,
    AsyncJobStatus_Streaming: 2,
    AsyncJobStatus_Failed: 3
  };
  require.d(exports, {
    asyncJobStatus: function () {
      return f;
    },
    requestSceneType: function () {
      return i;
    },
    inputSourceType: function () {
      return s;
    },
    independentSiteType: function () {
      return a;
    },
    patchObjectType: function () {
      return l;
    },
    fetchStreamType: function () {
      return d;
    },
    deepThinkSwitch: function () {
      return r;
    },
    patchType: function () {
      return u;
    },
    replyEndType: function () {
      return c;
    },
    skillTypes: function () {
      return o;
    }
  });
}