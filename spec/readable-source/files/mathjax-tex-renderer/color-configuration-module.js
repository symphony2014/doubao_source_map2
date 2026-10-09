// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'colorMathjaxMethods'
// - Resolved require(298081) to 'color-mathjax-methods'
// - Renamed variable 'o' to 'colorModelUtil'
// - Resolved require(734308) to 'color-model-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 510833
         */
module.exports = function (module, exports, require) {
  exports.ColorConfiguration = undefined;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var colorMathjaxMethods = require("color-mathjax-methods") /*id: 298081*/;
  var colorModelUtil = require("color-model-util") /*id: 734308*/;
  new symbolParseMaps.CommandMap("color", {
    color: "Color",
    textcolor: "TextColor",
    definecolor: "DefineColor",
    colorbox: "ColorBox",
    fcolorbox: "FColorBox"
  }, colorMathjaxMethods.ColorMethods);
  exports.ColorConfiguration = mathjaxParserConfiguration.Configuration.create("color", {
    handler: {
      macro: ["color"]
    },
    options: {
      color: {
        padding: "5px",
        borderWidth: "2px"
      }
    },
    config: function (t, e) {
      e.parseOptions.packageData.set("color", {
        model: new colorModelUtil.ColorModel()
      });
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}