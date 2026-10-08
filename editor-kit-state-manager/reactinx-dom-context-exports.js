// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x5' to 'withContextConsumer'
// - Renamed export 'ZP' to 'ReactInXExports'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 327577
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  exports.ReactInXExports = reactinxDomReconciler.ReactInXExports;
  require.d(exports, {
    withContextConsumer: function () {
      return reactDomContextDecorator.withContextConsumer;
    }
  });
}