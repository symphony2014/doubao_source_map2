// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fz' to 'ChatSourceTypes'
// - Renamed export 'LL' to 'ThinkModes'
// - Renamed export 'NT' to 'StreamEvents'
// - Renamed export 'Ub' to 'ContentTypes'
// - Renamed export 'VI' to 'BotTypes'
// - Renamed export '_P' to 'MessageStates'
// - Renamed export 'iz' to 'MessageActions'
// - Renamed export 'jK' to 'ErrorCodes'
// - Renamed export 'qg' to 'MediaModes'
// - Renamed export 'xP' to 'StreamActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 746101
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a = {
    Original: "original",
    UseTemplate: "use_template",
    ChangeTemplate: "change_template",
    Paste: "paste",
    Other: "other",
    NotMessage: "notMessage"
  };
  (i = {})[i.PRE_SEND = -1] = "PRE_SEND";
  i[i.SENDING = 0] = "SENDING";
  i[i.RECEIVING_SYNC = 1] = "RECEIVING_SYNC";
  i[i.RECEIVING_ASYNC = 2] = "RECEIVING_ASYNC";
  i[i.SUGGESTING = 3] = "SUGGESTING";
  i[i.FINALLY = 4] = "FINALLY";
  let l = i;
  (r = {})[r.StartThink = 0] = "StartThink";
  r[r.StartText = 1] = "StartText";
  r[r.StartReference = 2] = "StartReference";
  r[r.EndThink = 3] = "EndThink";
  let s = r;
  (o = {})[o.Init = -1] = "Init";
  o[o.ThinkStart = 5] = "ThinkStart";
  o[o.Text = 1] = "Text";
  o[o.Reference = 3] = "Reference";
  o[o.ThinkEnd = 6] = "ThinkEnd";
  let u = o;
  var c = {
    Unknown: "Unknown",
    Api: "Api",
    AliceChatSocket: "AliceChatSocket",
    AliceChatStream: "AliceChatStream",
    AliceChatFallback: "AliceChatFallback",
    SamanthaChat: "SamanthaChat",
    AsyncFetch: "AsyncFetch",
    AsyncTask: "AsyncTask",
    LocalLLM: "LocalLLM"
  };
  var d = {
    FetchFailed: 1001,
    ResponseIsInvalid: 1002,
    StreamParseFailed: 1003,
    ServerError: 1004,
    AbortFetch: 1005
  };
  var h = {
    Unknown: "unknown",
    File: "file",
    Image: "image",
    Text: "text",
    Link: "link",
    Directory: "directory",
    VlmImage: "vlm_image",
    ResourceContent: "resource_content",
    Video: "video",
    Audio: "audio",
    LarkDoc: "lark_doc",
    PPTTemplate: "ppt_template"
  };
  var m = {
    Coco: 1,
    Bot: 2,
    CocoSub: 3,
    CocoWeb: 4,
    CocoWebSub: 5,
    LocalLLM: 1000
  };
  var g = {
    ThinkReasonR1: "11000201",
    ThinkExpand: "11000301"
  };
  var f = {
    OnlyImage: 3,
    OnlyVideo: 2
  };
  require.d(exports, {
    ChatSourceTypes: function () {
      return c;
    },
    ThinkModes: function () {
      return g;
    },
    StreamEvents: function () {
      return u;
    },
    ContentTypes: function () {
      return h;
    },
    BotTypes: function () {
      return m;
    },
    MessageStates: function () {
      return l;
    },
    MessageActions: function () {
      return a;
    },
    ErrorCodes: function () {
      return d;
    },
    MediaModes: function () {
      return f;
    },
    StreamActions: function () {
      return s;
    }
  });
}