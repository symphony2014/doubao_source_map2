// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getPrototypeSymbols'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 951213
         */
module.exports = function (module, exports, require) {
  var arrayAppendUtil = require("array-append-util") /*id: 332715*/;
  var prototypeCompositionUtil = require("prototype-composition-util") /*id: 507931*/;
  var enumerableSymbolsUtil = require("enumerable-symbols-util") /*id: 705042*/;
  var emptyArrayFactory = require("empty-array-factory") /*id: 743711*/;
  var s = Object.getOwnPropertySymbols ? function (e) {
    var t = [];
    for (; e;) {
      arrayAppendUtil.appendArrayElements(t, enumerableSymbolsUtil.getOwnEnumSymbols(e));
      e = prototypeCompositionUtil.getPrototype(e);
    }
    return t;
  } : emptyArrayFactory.createEmptyArray;
  exports.getPrototypeSymbols = s;
}