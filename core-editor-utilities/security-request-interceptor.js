// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WB' to 'setupSecurityInterceptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 369539
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function o(e) {
    let {
      url: t = "",
      baseURL: r = ""
    } = e;
    if (t || r) {
      if (function (e = "", t = "") {
        let r = ["feishu.cn", "feishu-boe.cn"];
        let n = window.location.origin;
        let o = (e = "") => /^https:\/\//.test(e);
        let a = e => RegExp(`^${n}`).test(e);
        let i = e => RegExp(`^https://(.*)(?:)(.${r.join("|")})`).test(e);
        if ([e, t].every(o)) {
          return a(e) && i(e);
        } else if ([e, t].some(o)) {
          return [e, t].some(e => a(e) && i(e));
        } else {
          return i(n);
        }
      }(t, r)) {
        let t = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig");
        if (t && t.gray_policy) {
          e.headers = Object.assign(e.headers, t.gray_policy);
        }
      }
      return e;
    }
  }
  function a(e) {
    e.interceptors.request.use(o);
  }
  require.d(exports, {
    setupSecurityInterceptor: function () {
      return a;
    }
  });
}