// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(408525) to 'mathml-attribute-handlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 598349
         */
module.exports = function (module, exports, require) {
  var r = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.HtmlConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var o = r(require("mathml-attribute-handlers") /*id: 408525*/);
  new symbolParseMaps.CommandMap("html_macros", {
    href: "Href",
    class: "Class",
    style: "Style",
    cssId: "Id"
  }, o.default);
  exports.HtmlConfiguration = mathjaxParserConfiguration.Configuration.create("html", {
    handler: {
      macro: ["html_macros"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}