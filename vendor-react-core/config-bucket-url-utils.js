// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getGlobalBucketUrl'
// - Renamed export '_' to 'extractBucketUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 361194
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var globalConfigUtils = require("global-config-utils") /*id: 115973*/;
  function a() {
    let e = globalConfigUtils.isDisabled() ? "http" : "https";
    let n = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig");
    let i = objectPathGetDefault.getObjectPathDefault(n, "biz_domain_config");
    let a = objectPathGetDefault.getObjectPathDefault(i, "reaction_bucket_prex.0");
    return `${e}://${a}`;
  }
  function l(e) {
    var n;
    try {
      return `https://${(n = e.biz_domain_config) === null || n === undefined ? undefined : n.reaction_bucket_prex[0]}`;
    } catch (e) {
      return "";
    }
  }
  require.d(exports, {
    getGlobalBucketUrl: function () {
      return a;
    },
    extractBucketUrl: function () {
      return l;
    }
  });
}