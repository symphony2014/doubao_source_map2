// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'webUtilsEnvDomain'
// - Resolved require(343258) to 'web-utils-env-domain'
// - Renamed variable 'o' to 'globalConfigHttpClient'
// - Resolved require(677269) to 'global-config-http-client'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 393845
         */
module.exports = function (module, exports, require) {
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var i in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  };
  var webUtilsEnvDomain = require("web-utils-env-domain") /*id: 343258*/;
  var globalConfigHttpClient = require("global-config-http-client") /*id: 677269*/;
  exports.default = function (e) {
    return globalConfigHttpClient.getRequest().post(webUtilsEnvDomain.getAccountUrl("/logout/web"), n({
      scope: "all"
    }, e ?? {}));
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}