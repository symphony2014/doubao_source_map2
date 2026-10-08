// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'isObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 279182
         */
module.exports = function (module, exports, require) {
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  function a(e) {
    return !!e && (e instanceof observableCoreClass.Observable || isFunctionUtil.isFunction(e.lift) && isFunctionUtil.isFunction(e.subscribe));
  }
  require.d(exports, {
    isObservable: function () {
      return a;
    }
  });
}