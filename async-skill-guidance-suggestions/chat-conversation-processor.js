// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'dateComparator'
// - Renamed export 'r' to 'processConversations'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-skill-guidance-page-v2.2be10363.js
         * chunkId: 92219
         * moduleId: 118650
         */
module.exports = function (module, exports, require) {
  var chatBotStateConstants = require("chat-bot-state-constants") /*id: 924042*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let s = (e, t) => {
    e.sort(t);
    return e;
  };
  var dateTimestampParser = require("date-timestamp-parser") /*id: 37495*/;
  let a = (e, t) => e.date ? t.date ? e.date && t.date ? t.date.getTime() - e.date.getTime() : 0 : 1 : -1;
  let o = e => s(e.map(e => {
    var t;
    return {
      ...e,
      items: (t = e.items) === null || t === undefined ? undefined : t.filter(e => e.name_review_status !== chatBotStateConstants.reviewStates.ReviewState_NotCompliant)
    };
  }).map(e => {
    var n;
    var i;
    var c;
    var u;
    var p;
    var f;
    var h;
    return {
      date: dateTimestampParser.timestampToDate((n = e.items) === null || n === undefined ? undefined : n[0]?.last_chat_time),
      charCount: (i = e.items) === null || i === undefined ? undefined : i.reduce((e, t) => {
        return e + (dateTimestampParser.parseTimestampInt(t.char_count) ?? 0);
      }, 0),
      title: ((c = e.items) === null || c === undefined ? undefined : c[0]?.title) || ((u = e.items) === null || u === undefined ? undefined : u[0]?.uri) || "",
      assets: s(((p = e.items) === null || p === undefined ? undefined : p.map(e => {
        return {
          prompt: e.prompt,
          charCount: dateTimestampParser.parseTimestampInt(e.char_count),
          date: dateTimestampParser.timestampToDate(e.last_chat_time),
          bytes: dateTimestampParser.parseTimestampInt(e.size),
          size: dateTimestampParser.parseTimestampInt(e.size),
          ...(e.document_type === chatAppEnums.DocumentType.File ? {
            fileName: e.title ?? "",
            fileKey: e.uri ?? "",
            title: e.title
          } : {
            link: e.uri ?? "",
            title: e.title || e.uri,
            fileType: "PDF"
          })
        };
      })) ?? [], a),
      conversationId: (h = e.conversation) === null || h === undefined ? undefined : (f = h.conversation_id) === null || f === undefined ? undefined : f.toString()
    };
  }), a);
  require.d(exports, {
    dateComparator: function () {
      return a;
    },
    processConversations: function () {
      return o;
    }
  });
}