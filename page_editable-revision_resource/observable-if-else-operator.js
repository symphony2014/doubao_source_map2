// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'observableIfElse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 300790
         */
module.exports = function (module, exports, require) {
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  function l(e, i, o) {
    var l;
    l = function () {
      if (e()) {
        return i;
      } else {
        return o;
      }
    };
    return new observableCoreClass.Observable(function (e) {
      observableFromAnySource.fromAnySource(l()).subscribe(e);
    });
  }
  require.d(exports, {
    observableIfElse: function () {
      return l;
    }
  });
}