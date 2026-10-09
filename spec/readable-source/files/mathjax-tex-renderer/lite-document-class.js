// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'liteElementClass'
// - Resolved require(771714) to 'lite-element-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 873034
         */
module.exports = function (module, exports, require) {
  exports.LiteDocument = undefined;
  var liteElementClass = require("lite-element-class") /*id: 771714*/;
  var T = function () {
    function t() {
      this.root = new liteElementClass.LiteElement("html", {}, [this.head = new liteElementClass.LiteElement("head"), this.body = new liteElementClass.LiteElement("body")]);
      this.type = "";
    }
    Object.defineProperty(t.prototype, "kind", {
      get: function () {
        return "#document";
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }();
  exports.LiteDocument = T;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}