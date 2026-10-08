// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HJ' to 'updateDocMetaMap'
// - Renamed export 'ZZ' to 'updateDocTitle'
// - Renamed export 'ob' to 'updateVarErrorCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 567140
         */
module.exports = function (module, exports, require) {
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  let o = (e, i) => ({
    type: storeActionConstants.actionTypes.UPDATE_DOC_META_MAP,
    payload: {
      token: e,
      meta: i
    }
  });
  let l = e => ({
    type: storeActionConstants.actionTypes.UPDATE_CLIENT_VAR_ERROR_CODE,
    payload: e
  });
  let s = e => ({
    type: storeActionConstants.actionTypes.UPDATE_DOC_TITLE,
    payload: e
  });
  require.d(exports, {
    updateDocMetaMap: function () {
      return o;
    },
    updateDocTitle: function () {
      return s;
    },
    updateVarErrorCode: function () {
      return l;
    }
  });
}