// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(917139) to 'tex-braket-bar-commands'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 352735
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
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var n = r(require("tex-braket-bar-commands") /*id: 917139*/);
  new symbolParseMaps.CommandMap("Braket-macros", {
    bra: ["Macro", "{\\langle {#1} \\vert}", 1],
    ket: ["Macro", "{\\vert {#1} \\rangle}", 1],
    braket: ["Braket", "⟨", "⟩", false, Infinity],
    set: ["Braket", "{", "}", false, 1],
    Bra: ["Macro", "{\\left\\langle {#1} \\right\\vert}", 1],
    Ket: ["Macro", "{\\left\\vert {#1} \\right\\rangle}", 1],
    Braket: ["Braket", "⟨", "⟩", true, Infinity],
    Set: ["Braket", "{", "}", true, 1],
    ketbra: ["Macro", "{\\vert {#1} \\rangle\\langle {#2} \\vert}", 2],
    Ketbra: ["Macro", "{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}", 2],
    "|": "Bar"
  }, n.default);
  new symbolParseMaps.MacroMap("Braket-characters", {
    "|": "Bar"
  }, n.default);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}