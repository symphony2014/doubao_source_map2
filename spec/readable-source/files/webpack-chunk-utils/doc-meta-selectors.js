// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kt' to 'getDocMeta'
// - Renamed export 'M5' to 'selectDocTitle'
// - Renamed export 'gO' to 'selectEditTime'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 359612
         */
module.exports = function (module, exports, require) {
  var createSelector = require("create-selector") /*id: 228436*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  function a(e) {
    if (e == null) {
      return undefined;
    } else {
      return e.docx?.docMeta;
    }
  }
  let u = createSelector.createSelector(a, e => {
    let r = docTokenManager.getDocToken();
    let i = e == null ? undefined : e.docMetaMap?.[r];
    if (i == null) {
      return undefined;
    } else {
      return i.edit_time;
    }
  });
  let c = createSelector.createSelector(a, e => e == null ? undefined : e.docTitle);
  createSelector.createSelector(a, e => {
    let n = docTokenManager.getDocToken();
    let r = e.docMetaMap[n];
    if (r == null) {
      return undefined;
    } else {
      return r.content_security;
    }
  });
  require.d(exports, {
    getDocMeta: function () {
      return a;
    },
    selectDocTitle: function () {
      return c;
    },
    selectEditTime: function () {
      return u;
    }
  });
}