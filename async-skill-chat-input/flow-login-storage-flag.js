// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IC' to 'loginFlagKey'
// - Renamed export 'J6' to 'watchLoginFlagChange'
// - Renamed export 'N6' to 'removeLoginFlag'
// - Renamed export 'dM' to 'checkLoginFlag'
// - Renamed export 'vd' to 'setLoginFlag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 966634
         */
module.exports = function (module, exports, require) {
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let r = "flow_web_has_login";
  let o = () => {
    storageWrapperWithFallback.LocalStorageWrapper.setItem(r, "true");
  };
  let a = () => {
    storageWrapperWithFallback.LocalStorageWrapper.removeItem(r);
  };
  let s = () => storageWrapperWithFallback.LocalStorageWrapper.getItem(r) === "true";
  let l = e => {
    if (e.key === r) {
      location.reload();
    }
  };
  let u = () => {
    window.addEventListener("storage", l);
    return () => {
      window.removeEventListener("storage", l);
    };
  };
  require.d(exports, {
    loginFlagKey: function () {
      return r;
    },
    watchLoginFlagChange: function () {
      return u;
    },
    removeLoginFlag: function () {
      return a;
    },
    checkLoginFlag: function () {
      return s;
    },
    setLoginFlag: function () {
      return o;
    }
  });
}