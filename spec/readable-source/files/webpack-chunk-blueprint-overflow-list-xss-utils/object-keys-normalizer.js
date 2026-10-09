// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'normalizeObjectKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 585390
         */
module.exports = function (module, exports, require) {
  var arrayNormalizeUtil = require("array-normalize-util") /*id: 465173*/;
  var getPrototypeSymbolsUtil = require("get-prototype-symbols-util") /*id: 951213*/;
  var getOwnKeysUtil_1 = require("get-own-keys-util_1") /*id: 144417*/;
  exports.normalizeObjectKeys = function (e) {
    return arrayNormalizeUtil.normalizeArrayData(e, getOwnKeysUtil_1.getOwnKeys, getPrototypeSymbolsUtil.getPrototypeSymbols);
  };
}