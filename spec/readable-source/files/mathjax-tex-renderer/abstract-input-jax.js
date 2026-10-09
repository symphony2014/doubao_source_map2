// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 'T' to 'priorityFunctionList'
// - Resolved require(238191) to 'priority-function-list'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 335857
         */
module.exports = function (module, exports, require) {
  exports.AbstractInputJax = undefined;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var priorityFunctionList = require("priority-function-list") /*id: 238191*/;
  var n = function () {
    function t(t = {}) {
      this.adaptor = null;
      this.mmlFactory = null;
      var e = this.constructor;
      this.options = optionsMergeUtils.userOptions(optionsMergeUtils.defaultOptions({}, e.OPTIONS), t);
      this.preFilters = new priorityFunctionList.FunctionList();
      this.postFilters = new priorityFunctionList.FunctionList();
    }
    Object.defineProperty(t.prototype, "name", {
      get: function () {
        return this.constructor.NAME;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.setAdaptor = function (t) {
      this.adaptor = t;
    };
    t.prototype.setMmlFactory = function (t) {
      this.mmlFactory = t;
    };
    t.prototype.initialize = function () {};
    t.prototype.reset = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
    };
    Object.defineProperty(t.prototype, "processStrings", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.findMath = function (t, e) {
      return [];
    };
    t.prototype.executeFilters = function (t, e, Q, r) {
      var T = {
        math: e,
        document: Q,
        data: r
      };
      t.execute(T);
      return T.data;
    };
    t.NAME = "generic";
    t.OPTIONS = {};
    return t;
  }();
  exports.AbstractInputJax = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}