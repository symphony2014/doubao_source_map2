// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$o' to 'getStorageItem'
// - Renamed export 'Ce' to 'getStorageObject'
// - Renamed export 'Fe' to 'StorageKeys'
// - Renamed export 'qQ' to 'setStorageItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 378345
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {}).SpaceResourceViewType = "space_resource_view";
  o.CalloutSetting = "callout_setting";
  o.LocalHistoryTokens = "docx_local_history_tokens";
  let i = o;
  function l(e, n = null) {
    try {
      let r = localStorage.getItem(e);
      if (r === null) {
        return n;
      } else {
        return r;
      }
    } catch (e) {
      return n;
    }
  }
  function c(e, n = null) {
    try {
      let r = localStorage.getItem(e);
      r = r ? JSON.parse(r) : null;
      if (r === null || typeof r != "object") {
        return n;
      } else {
        return r;
      }
    } catch (e) {
      return n;
    }
  }
  function u(e, n = null) {
    try {
      if (n === null) {
        localStorage.removeItem(e);
      } else {
        localStorage.setItem(e, n);
      }
    } catch (e) {}
  }
  require.d(exports, {
    getStorageItem: function () {
      return l;
    },
    getStorageObject: function () {
      return c;
    },
    StorageKeys: function () {
      return i;
    },
    setStorageItem: function () {
      return u;
    }
  });
}