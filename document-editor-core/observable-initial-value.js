// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'nc' to 'setInitialValue'
// - Renamed export 'vp' to 'hasInitialValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 509357
         */
module.exports = function (module, exports, require) {
  var observableTypeCheck = require("observable-type-check") /*id: 279182*/;
  let o = e => observableTypeCheck.isObservable(e) && "initialValue" in e;
  let l = (e, i) => {
    e.initialValue = i;
    return e;
  };
  require.d(exports, {
    setInitialValue: function () {
      return l;
    },
    hasInitialValue: function () {
      return o;
    }
  });
}