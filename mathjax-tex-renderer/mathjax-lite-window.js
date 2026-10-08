// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'liteElementClass'
// - Resolved require(771714) to 'lite-element-class'
// - Renamed variable 'T' to 'liteDocumentClass'
// - Resolved require(873034) to 'lite-document-class'
// - Renamed variable 'n' to 'liteListClass'
// - Resolved require(295727) to 'lite-list-class'
// - Renamed variable 'o' to 'mathjaxLiteParser'
// - Resolved require(534479) to 'mathjax-lite-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 655226
         */
module.exports = function (module, exports, require) {
  exports.LiteWindow = undefined;
  var liteElementClass = require("lite-element-class") /*id: 771714*/;
  var liteDocumentClass = require("lite-document-class") /*id: 873034*/;
  var liteListClass = require("lite-list-class") /*id: 295727*/;
  var mathjaxLiteParser = require("mathjax-lite-parser") /*id: 534479*/;
  exports.LiteWindow = function () {
    this.DOMParser = mathjaxLiteParser.LiteParser;
    this.NodeList = liteListClass.LiteList;
    this.HTMLCollection = liteListClass.LiteList;
    this.HTMLElement = liteElementClass.LiteElement;
    this.DocumentFragment = liteListClass.LiteList;
    this.Document = liteDocumentClass.LiteDocument;
    this.document = new liteDocumentClass.LiteDocument();
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}