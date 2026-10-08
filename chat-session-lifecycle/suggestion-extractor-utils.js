// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y4' to 'suggestionVersion'
// - Renamed export 'zI' to 'extractSuggestions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 636335
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let a = 3;
  let o = e => {
    var s;
    var n;
    var i;
    if ((i = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.sp_v2, undefined)) === null || i === undefined) {
      return undefined;
    } else if ((n = i.filter(e => e.suggest_type === 1)) === null || n === undefined) {
      return undefined;
    } else if ((s = n.filter(e => e.content)) === null || s === undefined) {
      return undefined;
    } else {
      return s.map(e => ({
        content: e.content,
        extra: e.extra
      }));
    }
  };
  let r = e => {
    var s;
    var n;
    if ((n = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.sp, undefined)) === null || n === undefined) {
      return undefined;
    } else if ((s = n.filter(e => e)) === null || s === undefined) {
      return undefined;
    } else {
      return s.map(e => ({
        content: e
      }));
    }
  };
  let l = e => {
    var s;
    var n;
    var t;
    var a;
    var o;
    if (e == null) {
      return undefined;
    } else if ((o = e.content_blocks) === null || o === undefined) {
      return undefined;
    } else if ((a = o.find(e => e.block_type === chatConstantsEnum.messageContentType.SAMANTHA_SUGGEST)) === null || a === undefined) {
      return undefined;
    } else if ((t = a.content_obj) === null || t === undefined) {
      return undefined;
    } else if ((n = t.suggestions) === null || n === undefined) {
      return undefined;
    } else if ((s = n.filter(e => e)) === null || s === undefined) {
      return undefined;
    } else {
      return s.map(e => ({
        content: e
      }));
    }
  };
  let c = e => {
    let n = r(e);
    let i = o(e);
    let t = l(e);
    return n ?? i ?? t;
  };
  require.d(exports, {
    suggestionVersion: function () {
      return a;
    },
    extractSuggestions: function () {
      return c;
    }
  });
}