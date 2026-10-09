// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'getChatParams'
// - Renamed export 'c' to 'initChatParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 320602
         */
module.exports = function (module, exports, require) {
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var ttWidManager = require("tt-wid-manager") /*id: 155324*/;
  var chatConfigConstants = require("chat-config-constants") /*id: 577013*/;
  var cookieManagementUtils = require("cookie-management-utils") /*id: 688115*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let s = () => "release_version";
  let u = () => chatConfigConstants.platformType;
  let c = () => chatConfigConstants.chatIdHi;
  let d = () => typeof window == "undefined" ? "" : document.cookie ? cookieManagementUtils.CookieManager.get("i18next") || "" : storageWrapperWithFallback.LocalStorageWrapper.getItem("i18nextLng") || "";
  let h = () => typeof window == "undefined" ? "" : document.cookie ? cookieManagementUtils.CookieManager.get("flow_user_country") || "" : storageWrapperWithFallback.LocalStorageWrapper.getItem("flow_user_country") || "";
  let m = () => ({
    aid: () => chatConfigConstants.chatIdXi,
    device_id: () => {
      if (typeof window == "undefined") {
        return "";
      }
      let {
        ttWidConfig: e
      } = ttWidManager.ttWidManager;
      if (e.web_id && e.web_id !== "0") {
        return e.web_id;
      } else {
        return "";
      }
    },
    pc_version: () => "3.10.0",
    pkg_type: s,
    device_platform: u,
    version_code: c,
    language: d,
    region: h
  });
  let g = () => {
    uniParamsManager.uniParamsManager.setParams(m());
  };
  require.d(exports, {
    getChatParams: function () {
      return m;
    },
    initChatParams: function () {
      return g;
    }
  });
}