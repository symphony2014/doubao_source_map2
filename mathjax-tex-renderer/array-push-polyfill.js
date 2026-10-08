// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'T' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'n' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// - Renamed variable 'o' to 'setArrayLengthWithWritableCheck'
// - Resolved require(62132) to 'set-array-length-with-writable-check'
// - Renamed variable 'i' to 'validateMaxIndex'
// - Resolved require(952098) to 'validate-max-index'
// - Resolved require(4842) to 'safe-function-executor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 998259
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  var setArrayLengthWithWritableCheck = require("set-array-length-with-writable-check") /*id: 62132*/;
  var validateMaxIndex = require("validate-max-index") /*id: 952098*/;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    arity: 1,
    forced: require("safe-function-executor") /*id: 4842*/(function () {
      return [].push.call({
        length: 4294967296
      }, 1) !== 4294967297;
    }) || !function () {
      try {
        Object.defineProperty([], "length", {
          writable: false
        }).push();
      } catch (t) {
        return t instanceof TypeError;
      }
    }()
  }, {
    push: function (t) {
      var e = toObjectUtil(this);
      var Q = clampLengthToSafe(e);
      var r = arguments.length;
      validateMaxIndex(Q + r);
      for (var a = 0; a < r; a++) {
        e[Q] = arguments[a];
        Q++;
      }
      setArrayLengthWithWritableCheck(e, Q);
      return Q;
    }
  });
}