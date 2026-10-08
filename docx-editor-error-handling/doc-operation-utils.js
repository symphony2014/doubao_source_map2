// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BC' to 'isFixEnterOp'
// - Renamed export 'HE' to 'filterRevisionIds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 558255
         */
module.exports = function (module, exports, require) {
  let n = e => {
    return e.insert === "\n" && e.attributes?.fixEnter === "true";
  };
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  function l(e) {
    let {
      revision_ids: i
    } = e;
    if (Array.isArray(i)) {
      return i.filter(e => isStringTypeCheck.isString(e) && !!e);
    } else {
      return [];
    }
  }
  require.d(exports, {
    isFixEnterOp: function () {
      return n;
    },
    filterRevisionIds: function () {
      return l;
    }
  });
}