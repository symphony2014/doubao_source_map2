// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledDeepClone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 891816
         */
module.exports = function (module, exports, require) {
  var functionCallHelper = require("function-call-helper") /*id: 296477*/;
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var deepCloneUtil_1 = require("deep-clone-util_1") /*id: 793497*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var s = function e(t, n, i, r, s, l) {
    if (isObjectOrFunction_1_1.isObjectOrFunction(t) && isObjectOrFunction_1_1.isObjectOrFunction(n)) {
      l.set(n, t);
      deepCloneUtil_1.cloneDeep(t, n, undefined, e, l);
      l.delete(n);
    }
    return t;
  };
  var throttledDeepCloneUtil_2 = require("throttled-deep-clone-util_2") /*id: 739988*/;
  var c = throttledArgStringUtil.throttledStringify(function (e) {
    e.push(undefined, s);
    return functionCallHelper.callHelper(throttledDeepCloneUtil_2.throttledCloneDeep, undefined, e);
  });
  require.d(exports, {
    throttledDeepClone: function () {
      return c;
    }
  });
}