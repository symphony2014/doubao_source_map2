// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rn' to 'updatePreviewData'
// - Renamed export 'wF' to 'getPreviewData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 930637
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var filePreviewSdkConstants = require("file-preview-sdk-constants") /*id: 842643*/;
  function s(e) {
    try {
      let t = storageWrapperWithFallback.LocalStorageWrapper.getItem(e) || "[]";
      return JSON.parse(t);
    } catch (e) {
      return [];
    }
  }
  function a(e) {
    let {
      key: t,
      info: i
    } = e;
    try {
      if ((storageWrapperWithFallback.LocalStorageWrapper.getItem(t) ? Number((((storageWrapperWithFallback.LocalStorageWrapper.getItem(t)?.length || 0) + t.length) * 2 / 1024).toFixed(2)) : 0) > filePreviewSdkConstants.maxBufferSize) {
        storageWrapperWithFallback.LocalStorageWrapper.removeItem(t);
      }
      let {
        token: e,
        version: l
      } = i;
      let c = s(t);
      let d = c.findIndex(t => l ? t.token === e && t.version === l : t.token === e);
      if (d !== -1) {
        c[d] = i;
      } else if (isObjectOrFunction_1_1.isObjectOrFunction(i) && i.token && (i.time || i.pageIndex > 1 || i.tabIndex > 0)) {
        c.push(i);
      }
      storageWrapperWithFallback.LocalStorageWrapper.setItem(t, JSON.stringify(c));
    } catch (e) {}
  }
  function l(e) {
    let {
      key: t,
      fileToken: i,
      dataVersion: n
    } = e;
    return s(t).find(e => n ? e.token === i && e.version === n : e.token === i);
  }
  require.d(exports, {
    updatePreviewData: function () {
      return a;
    },
    getPreviewData: function () {
      return l;
    }
  });
}