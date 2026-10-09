// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'i' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'u' to 'getObjectType'
// - Resolved require(786910) to 'get-object-type'
// - Renamed variable 'c' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 's' to 'inspectSourceFunction'
// - Resolved require(491638) to 'inspect-source-function'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 275428
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var getObjectType = require("get-object-type") /*id: 786910*/;
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var inspectSourceFunction = require("inspect-source-function") /*id: 491638*/;
  function f() {}
  var a = globalNamespaceUtil("Reflect", "construct");
  var p = /^\s*(?:class|function)\b/;
  var l = functionBindPrototypeCheckWrapper(p.exec);
  var v = !p.test(f);
  function y(t) {
    if (!isFunctionCheck(t)) {
      return false;
    }
    try {
      a(f, [], t);
      return true;
    } catch (t) {
      return false;
    }
  }
  function h(t) {
    if (!isFunctionCheck(t)) {
      return false;
    }
    switch (getObjectType(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return v || !!l(p, inspectSourceFunction(t));
    } catch (t) {
      return true;
    }
  }
  h.sham = true;
  module.exports = !a || safeFunctionExecutor(function () {
    var t;
    return y(y.call) || !y(Object) || !y(function () {
      t = true;
    }) || t;
  }) ? h : y;
}