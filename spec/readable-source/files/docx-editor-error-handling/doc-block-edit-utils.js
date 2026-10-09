// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'eu' to 'validateBlockProps'
// - Renamed export 'WI' to 'getEditType'
// - Renamed export 'Pn' to 'isMediaBlockDlp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 546333
         */
module.exports = function (module, exports, require) {
  var docBlockConstants_1 = require("doc-block-constants_1") /*id: 329056*/;
  function o(e) {
    let i = e.type;
    if (!docBlockConstants_1.mediaBlockTypes.includes(i)) {
      return false;
    }
    let r = e[i];
    return !!r && r.dlp_status;
  }
  function l(e) {
    if (e) {
      if (e[docBlockConstants_1.editTypeConstants.add]) {
        return docBlockConstants_1.editTypeConstants.add;
      } else if (e[docBlockConstants_1.editTypeConstants.del] || o(e) && e[docBlockConstants_1.editTypeConstants.change]) {
        return docBlockConstants_1.editTypeConstants.del;
      } else if (e[docBlockConstants_1.editTypeConstants.change]) {
        return docBlockConstants_1.editTypeConstants.change;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  function s(e, i, r) {
    if (!e || !i || i.hasOwnProperty("type")) {
      return null;
    }
    let n = null;
    for (let e in i) {
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        if (i[e] != null) {
          if (r.indexOf(e) === -1) {
            return null;
          }
          n = e;
        }
      }
    }
    return n;
  }
  require.d(exports, {
    validateBlockProps: function () {
      return s;
    },
    getEditType: function () {
      return l;
    },
    isMediaBlockDlp: function () {
      return o;
    }
  });
}