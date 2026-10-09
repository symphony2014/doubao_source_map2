// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reduxDynamicMiddlewares'
// - Resolved require(523198) to 'redux-dynamic-middlewares'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 286768
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
  var reduxDynamicMiddlewares = require("redux-dynamic-middlewares") /*id: 523198*/;
  exports.getMiddlewareManager = function () {
    var t = reduxDynamicMiddlewares.createDynamicMiddlewares();
    return {
      getItems: function () {
        return [];
      },
      enhancer: t.enhancer,
      add: function (e) {
        t.addMiddleware.apply(t, e);
        return e;
      },
      remove: function (e) {
        e.forEach(t.removeMiddleware);
        return e;
      },
      dispose: function () {
        t.resetMiddlewares();
      }
    };
  };
}