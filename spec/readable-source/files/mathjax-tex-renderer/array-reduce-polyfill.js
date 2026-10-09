// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Resolved require(628487) to 'array-reduce-directional-implementations'
// - Renamed variable 'n' to 'safeArrayMethodCheck'
// - Resolved require(985761) to 'safe-array-method-check'
// - Renamed variable 'o' to 'chromeV8VersionDetect'
// - Resolved require(968349) to 'chrome-v8-version-detect'
// - Resolved require(57561) to 'is-node-runtime-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 243593
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var T = require("array-reduce-directional-implementations") /*id: 628487*/.left;
  var safeArrayMethodCheck = require("safe-array-method-check") /*id: 985761*/;
  var chromeV8VersionDetect = require("chrome-v8-version-detect") /*id: 968349*/;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: !require("is-node-runtime-check") /*id: 57561*/ && chromeV8VersionDetect > 79 && chromeV8VersionDetect < 83 || !safeArrayMethodCheck("reduce")
  }, {
    reduce: function (t) {
      var e = arguments.length;
      return T(this, t, e, e > 1 ? arguments[1] : undefined);
    }
  });
}