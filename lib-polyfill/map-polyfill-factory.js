// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(312491) to 'map-weakmap-polyfill-factory'
// - Resolved require(75084) to 'collection-constructor-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 701592
         */
module.exports = function (module, exports, require) {
  require("map-weakmap-polyfill-factory") /*id: 312491*/("Map", function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : undefined);
    };
  }, require("collection-constructor-factory") /*id: 75084*/);
}