// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'mergeObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 746368
         */
module.exports = function (module, exports, require) {
  var safeMergeMapOperator_1 = require("safe-merge-map-operator_1") /*id: 189311*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var emptyObservableInstance = require("empty-observable-instance") /*id: 724888*/;
  var arrayPopUtils = require("array-pop-utils") /*id: 451401*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  function s() {
    var e = [];
    var n = 0;
    for (; n < arguments.length; n++) {
      e[n] = arguments[n];
    }
    var i = arrayPopUtils.popSchedulable(e);
    var s = arrayPopUtils.popNumber(e, Infinity);
    if (e.length) {
      if (e.length === 1) {
        return observableFromAnySource.fromAnySource(e[0]);
      } else {
        return safeMergeMapOperator_1.createSafeMergeMap(s)(observableFromSource.fromAnySource(e, i));
      }
    } else {
      return emptyObservableInstance.emptyObservable;
    }
  }
  require.d(exports, {
    mergeObservable: function () {
      return s;
    }
  });
}