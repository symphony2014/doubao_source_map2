// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'c' to 'objectKeysPolyfill_2'
// - Resolved require(132591) to 'object-keys-polyfill_2'
// - Resolved require(4842) to 'safe-function-executor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 228186
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var objectKeysPolyfill_2 = require("object-keys-polyfill_2") /*id: 132591*/;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    forced: require("safe-function-executor") /*id: 4842*/(function () {
      objectKeysPolyfill_2(1);
    })
  }, {
    keys: function (e) {
      return objectKeysPolyfill_2(toObjectUtil(e));
    }
  });
}