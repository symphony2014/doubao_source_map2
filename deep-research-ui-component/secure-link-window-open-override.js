// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OL' to 'overrideWindowOpen'
// - Renamed export 'sD' to 'isValidUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 913157
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  let a = "link.wtturl.cn";
  let s = "";
  let c = e => {
    let t = e.toLowerCase();
    return t.startsWith("http://") || t.startsWith("https://") || t.startsWith("//");
  };
  let d = e => {
    try {
      return new URL(e).hostname.split(".").slice(-2).join(".");
    } catch (e) {}
    return "";
  };
  let u = e => {
    let t = ["wtturl.cn", d(location.href)];
    return !!c(e) && !t.includes(d(e));
  };
  let p = e => {
    s = s || chatFgStoreHooks.getSourceKeySync("sec_link", {
      source: chatStorageKeys.chatStorageKeys.setting,
      defaultValue: a
    }) || "";
    let t = `${location.protocol}//${s || a}`;
    return `${t}/?target=${encodeURIComponent(e)}&scene=im&aid=${uniParamsManager.uniParamsManager.getParam("aid")}&lang=zh`;
  };
  let h = async () => {
    try {
      let t = await apiServicesCollection.SamanthaApiService.GetSetting();
      let n = t == null ? undefined : t.data?.sec_link;
      if (n) {
        s = n;
      }
    } catch (e) {}
  };
  let m = () => {
    if (typeof window == "undefined") {
      return;
    }
    let e = window.open;
    window.open = function (t, n, i) {
      let r = typeof t == "string" ? t : t == null ? undefined : t.toString();
      h();
      if (u(r ?? "")) {
        return e(p(r ?? ""), n, i);
      } else {
        return e(t, n, i);
      }
    };
  };
  require.d(exports, {
    overrideWindowOpen: function () {
      return m;
    },
    isValidUrl: function () {
      return c;
    }
  });
}