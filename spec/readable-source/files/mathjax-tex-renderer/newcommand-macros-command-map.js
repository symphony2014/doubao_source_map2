// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(683268) to 'tex-macro-config'
// - Resolved require(664746) to 'symbol-parse-maps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 516934
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
  var T = r(require("tex-macro-config") /*id: 683268*/);
  new (require("symbol-parse-maps") /*id: 664746*/.CommandMap)("Newcommand-macros", {
    newcommand: "NewCommand",
    renewcommand: "NewCommand",
    newenvironment: "NewEnvironment",
    renewenvironment: "NewEnvironment",
    def: "MacroDef",
    let: "Let"
  }, T.default);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}