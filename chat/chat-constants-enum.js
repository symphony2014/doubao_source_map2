// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$m' to 'messageState'
// - Renamed export 'Bq' to 'convOperateType'
// - Renamed export 'FW' to 'userType'
// - Renamed export 'J4' to 'botMode'
// - Renamed export 'L6' to 'realityType'
// - Renamed export 'P7' to 'messageRole'
// - Renamed export 'Tk' to 'msgDirection'
// - Renamed export 'W8' to 'botActionType'
// - Renamed export 'XQ' to 'participantOpType'
// - Renamed export 'Xz' to 'pinQueryType'
// - Renamed export '_b' to 'memberRole'
// - Renamed export 'dm' to 'internalBotType'
// - Renamed export 'i1' to 'convType'
// - Renamed export 'iz' to 'contentSource'
// - Renamed export 'p1' to 'specificBotType'
// - Renamed export 'rJ' to 'messageStatus'
// - Renamed export 'su' to 'convStatus'
// - Renamed export 'vP' to 'artifactType'
// - Renamed export 'xX' to 'blockPatchType'
// - Renamed export 'yP' to 'deleteMode'
// - Renamed export 'z_' to 'privacyStatus'
// - Renamed export 'zc' to 'messageContentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 876559
         */
module.exports = function (module, exports, require) {
  var i = {
    BlockPatchType_Unknown: 0,
    BlockPatchType_Append: 1,
    BlockPatchType_Replace: 2,
    BlockPatchType_Delete: 3
  };
  var r = {
    User: 0,
    System: 1
  };
  var o = {
    NORMAL: 0,
    UPDATED: 1,
    CONTENT_IN_STREAMING: 100,
    SEARCHING: 101,
    CONTENT_FINISH_SUG_QUESTION_IN_STREAMING: 110,
    INTERRUPT: 120,
    FAILED: 500
  };
  var a = {
    MessageStatus_AVAILABLE: 0,
    MessageStatus_INVISIBLE: 1,
    MessageStatus_NOT_EXIST: 3,
    MessageStatus_DELETED: 5,
    MessageStatus_BEFOREEDIT: 7,
    MessageStatus_PLACE_HOLD: 19,
    MessageStatus_REGEN_ROOT: 8,
    MessageStatus_UNSELECTED: 9,
    MessageStatus_REGENATED: 10,
    MessageStatus_NotCompliant: 11
  };
  var l = {
    USER_TYPE_UNKNOWN: 0,
    HUMAN: 1,
    AIBOT: 2,
    SYSTEM: 3
  };
  var s = {
    CONVERSATION_TYPE_UNKNOWN: 0,
    ONE_TO_ONE_CHAT: 1,
    GROUP_CHAT: 2,
    ONE_TO_BOT_CHAT: 3
  };
  var u = {
    BOT_TYPE_UNKNOWN: 0,
    COCO: 1,
    BOT: 2,
    COCO_SUB: 3,
    AWEME_BOT: 4
  };
  var c = {
    MSG_DIRECTION_UNKNOWN: 0,
    OLDER: 1,
    NEWER: 2,
    FROM_LATEST: 3
  };
  var d = {
    OPERATE_TYPE_UNKNOWN: 0,
    TOP: 1,
    CANCEL_TOP: 2
  };
  var h = {
    CONV_STATUS_UNKNOWN: 0,
    AVAILABLE: 1,
    DELETED: 2,
    DISSOLVED_CAN_RECOVER: 3,
    DISSOLVED_CAN_NOT_RECOVER: 4
  };
  var m = {
    ROLE_UNKNOWN: 0,
    MEMBER: 1,
    CREATOR: 10,
    OWNER: 20,
    ADMIN: 21
  };
  var g = {
    UPDATE_CONVERSATION_PARTICIPANT_TYPE_UNKNOWN: 0,
    OPERATE_CONVERSATION_PARTICIPANT_CREATE_CONV: 1,
    OPERATE_CONVERSATION_PARTICIPANT_ADD_FROM_CONV: 2,
    OPERATE_CONVERSATION_PARTICIPANT_QUIT: 3
  };
  var f = {
    UNSPECIFIED: 0,
    TXT: 1,
    SUGGEST: 2,
    MUSIC: 3,
    WEBVIEW: 4,
    VIDEO: 5,
    IMAGE: 6,
    FILE: 7,
    SEARCH_CARDS: 8,
    AWEME_VIDEO_LIST: 9,
    COMPOSITE: 10,
    AUDIO_TXT: 11,
    NESTED: 20,
    CARD: 50,
    BotCARD: 51,
    FORM_MSG: 53,
    COPILOT_CARD: 60,
    DEEP_SEARCH_CARD: 61,
    MULTI_CONTENT: 66,
    AGGREGATED_MSG: 67,
    LYRICS_TO_SONG_MUSIC: 70,
    LYRICS_TO_SONG_LYRIC: 71,
    LYRICS_TO_SONGS_MUSIC: 72,
    AI_PPT: 83,
    Widget: 100,
    Record: 101,
    OTHER: 800,
    MULTI: 900,
    SYS_MSG: 1001,
    SAMANTHA_SUGGEST: 2002,
    SAMANTHA_SEARCH_TEXT: 2008,
    UGC_VIDEO: 2021,
    CREATION_MULTI: 2022,
    SEARCH_ENGINE: 2073,
    BLOCK_CREATION: 2074,
    UNSUPPORT: 9998,
    BLOCK: 9999,
    BLOCK_TEXT: 10000,
    BLOCK_RESEARCH_PROCESS_CARD: 10001,
    BLOCK_BANNER: 10002,
    BLOCK_HEADER_TEXT: 10003,
    BLOCK_SEARCH_QUERY: 10004,
    BLOCK_SEARCH_RESULT: 10005,
    BLOCK_LINKER_READER: 10006,
    BLOCK_VIDEO_READER: 10007,
    BLOCK_CODE: 10008,
    BLOCK_LOCAL_LIFE: 10009,
    BLOCK_GEN_IMAGE: 10010,
    BLOCK_RESEARCH: 10011,
    BLOCK_IMAGE: 10012,
    BLOCK_RESEARCH_WEBPAGE: 10013,
    BLOCK_RESEARCH_STATUS: 10014,
    BLOCK_SUPERTASK: 10015,
    BLOCK_SUPERTASK_TOOL: 10016,
    BLOCK_APPLET: 10017,
    BLOCK_CREATION_LOADING: 10018,
    BLOCK_FILE_OPERATION: 10019,
    BLOCK_FILE: 10020,
    BLOCK_SEARCH_QUERY_RESULT: 10025,
    BLOCK_ARTIFACT_CODE_FILE: 10021,
    BLOCK_CODE_ASSIST_PROCESS_BLOCK: 10022,
    BLOCK_REQUIREMENT_CLARIFY: 10023,
    BLOCK_GENERICTOOL: 10024,
    BLOCK_ROUTE_PLAN: 10026,
    BLOCK_IMAGE_ANALYSIS: 10027,
    BLOCK_CLIENT_FOLDER: 10028,
    BLOCK_ARTIFACT: 10030,
    BLOCK_THINKING: 10040,
    BLOCK_O_CALL_CONFIRM: 10041,
    BLOCK_O_SEARCH_QUERY_RESULT: 10042,
    BLOCK_O_USER_SELECT: 10043,
    BLOCK_O_LOADING: 10044,
    BLOCK_SEARCH_RICH_MEDIA: 10050,
    BLOCK_LINK: 10051,
    BLOCK_ATTACHMENT: 10052,
    BLOCK_TIPS: 10053,
    BLOCK_AUTH_IDENTITY: 10054,
    BLOCK_MEMORY_TAG: 10055,
    BLOCK_REFERENCE: 10056,
    BLOCK_CREDIT: 10057,
    BLOCK_ARTIFACT_OP: 10058,
    BLOCK_PPT_TEMPLATE: 10059,
    BLOCK_OUTLINE: 10060,
    BLOCK_PC_EVENT: 10100,
    BLOCK_LOADING: 10101,
    BLOCK_SPLIT: 10102,
    SPRING_LYNX: 20000
  };
  var p = {
    BotMode_Unknown: 0,
    BotMode_Subject: 1,
    BotMode_Guest: 2
  };
  var _ = {
    BotType_Unknown: 0,
    BotType_User: 1,
    BotType_Coco: 2,
    BotType_GuanFang: 3,
    BotType_CocoWeb: 4
  };
  var v = {
    UnknownBotActionType: 0,
    CreateConversation: 1,
    ArchiveConversation: 2
  };
  var b = {
    UnknownContentSource: 0,
    ContentPool: 1,
    Preset: 2
  };
  var S = {
    None: 0,
    Real: 1,
    RealNone: 2
  };
  var P = {
    UnknownPrivateStatus: 0,
    Public: 1,
    Private: 2,
    Unlisted: 3
  };
  var C = {
    DeleteMode_Unknown: 0,
    DeleteMode_RemoveFromChain: 1,
    DeleteMode_RealDelete: 2
  };
  var y = {
    Unknown: 0,
    NoArtifact: 1,
    Document: 2,
    Photo: 3,
    Code: 4,
    Meeting: 5,
    Video: 6,
    PPT: 7
  };
  var E = {
    QueryPin: 0,
    QueryUnpin: 1
  };
  require.d(exports, {
    messageState: function () {
      return o;
    },
    convOperateType: function () {
      return d;
    },
    userType: function () {
      return l;
    },
    botMode: function () {
      return p;
    },
    realityType: function () {
      return S;
    },
    messageRole: function () {
      return r;
    },
    msgDirection: function () {
      return c;
    },
    botActionType: function () {
      return v;
    },
    participantOpType: function () {
      return g;
    },
    pinQueryType: function () {
      return E;
    },
    memberRole: function () {
      return m;
    },
    internalBotType: function () {
      return _;
    },
    convType: function () {
      return s;
    },
    contentSource: function () {
      return b;
    },
    specificBotType: function () {
      return u;
    },
    messageStatus: function () {
      return a;
    },
    convStatus: function () {
      return h;
    },
    artifactType: function () {
      return y;
    },
    blockPatchType: function () {
      return i;
    },
    deleteMode: function () {
      return C;
    },
    privacyStatus: function () {
      return P;
    },
    messageContentType: function () {
      return f;
    }
  });
}