// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F1' to 'hasSyncedRecord'
// - Renamed export 'HG' to 'hasTranslateSnapshot'
// - Renamed export 'Lu' to 'getTranslationData'
// - Renamed export 'gP' to 'hasModelTranslate'
// - Renamed export 'u_' to 'isTranslationSuffix'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 956836
         */
module.exports = function (module, exports, require) {
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  require("translation-enums") /*id: 421780*/;
  var translationSuffixUtils = require("translation-suffix-utils") /*id: 203170*/;
  function l(e) {
    return !!e && !!e.snapshot.translate;
  }
  function c(e) {
    return !!e && !!l(e.model);
  }
  function u(e) {
    var n;
    let r = syncedReferenceBlockUtils.getSyncedBlockDataManager(e.blockManager.editorAPI);
    if (r) {
      return r.dataProvider.has(e.record.id);
    } else {
      return !!((n = e.blockManager.editorAPI.config.get("originalDataProvider")) === null || n === undefined ? undefined : n.has(e.record.id));
    }
  }
  function a(e, n) {
    if (e) {
      if (l(e)) {
        return function e(n, r) {
          let o = n[r];
          if (o) {
            if (l(o)) {
              return e(o, r);
            } else {
              return o;
            }
          } else {
            return null;
          }
        }(e, n);
      } else {
        return e;
      }
    } else {
      return null;
    }
  }
  function s(e) {
    return !!e && !!e.next && translationSuffixUtils.appendTranslation(e.recordId) === e.next.recordId;
  }
  require.d(exports, {
    hasSyncedRecord: function () {
      return u;
    },
    hasTranslateSnapshot: function () {
      return l;
    },
    getTranslationData: function () {
      return a;
    },
    hasModelTranslate: function () {
      return c;
    },
    isTranslationSuffix: function () {
      return s;
    }
  });
}