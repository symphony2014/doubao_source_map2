// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(559929) to 'tex-base-command-map'
// - Renamed variable 'a' to 'texAmsMethodsHandler'
// - Resolved require(528581) to 'tex-ams-methods-handler'
// - Renamed variable 'u' to 'mhchemParser'
// - Resolved require(111891) to 'mhchem-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 595655
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
  exports.MhchemConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var o = r(require("message-format-util") /*id: 342117*/);
  var i = r(require("tex-base-command-map") /*id: 559929*/);
  var texAmsMethodsHandler = require("tex-ams-methods-handler") /*id: 528581*/;
  var mhchemParser = require("mhchem-parser") /*id: 111891*/;
  var s = {
    Macro: i.default.Macro,
    xArrow: texAmsMethodsHandler.AmsMethods.xArrow
  };
  s.Machine = function (t, e, Q) {
    var r;
    var T = t.GetArgument(e);
    try {
      r = mhchemParser.mhchemParser.toTex(T, Q);
    } catch (t) {
      throw new o.default(t[0], t[1]);
    }
    t.string = r + t.string.substr(t.i);
    t.i = 0;
  };
  new symbolParseMaps.CommandMap("mhchem", {
    ce: ["Machine", "ce"],
    pu: ["Machine", "pu"],
    longrightleftharpoons: ["Macro", "\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],
    longRightleftharpoons: ["Macro", "\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{\\leftharpoondown}}"],
    longLeftrightharpoons: ["Macro", "\\stackrel{\\textstyle\\vphantom{{-}}{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],
    longleftrightarrows: ["Macro", "\\stackrel{\\longrightarrow}{\\smash{\\longleftarrow}\\Rule{0px}{.25em}{0px}}"],
    tripledash: ["Macro", "\\vphantom{-}\\raise2mu{\\kern2mu\\tiny\\text{-}\\kern1mu\\text{-}\\kern1mu\\text{-}\\kern2mu}"],
    xleftrightarrow: ["xArrow", 8596, 6, 6],
    xrightleftharpoons: ["xArrow", 8652, 5, 7],
    xRightleftharpoons: ["xArrow", 8652, 5, 7],
    xLeftrightharpoons: ["xArrow", 8652, 5, 7]
  }, s);
  exports.MhchemConfiguration = mathjaxParserConfiguration.Configuration.create("mhchem", {
    handler: {
      macro: ["mhchem"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}