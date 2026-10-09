// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(921652) to 'tex-parser-handlers'
// - Renamed variable 'n' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'o' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Renamed variable 'i' to 'mathtoolsMethodsHandler'
// - Resolved require(588022) to 'mathtools-methods-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 476838
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
  var T = r(require("tex-parser-handlers") /*id: 921652*/);
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var mathtoolsMethodsHandler = require("mathtools-methods-handler") /*id: 588022*/;
  new symbolParseMaps.CommandMap("mathtools-macros", {
    shoveleft: ["HandleShove", texConstantDefinitions.TexConstant.Align.LEFT],
    shoveright: ["HandleShove", texConstantDefinitions.TexConstant.Align.RIGHT],
    xleftrightarrow: ["xArrow", 8596, 10, 10],
    xLeftarrow: ["xArrow", 8656, 12, 7],
    xRightarrow: ["xArrow", 8658, 7, 12],
    xLeftrightarrow: ["xArrow", 8660, 12, 12],
    xhookleftarrow: ["xArrow", 8617, 10, 5],
    xhookrightarrow: ["xArrow", 8618, 5, 10],
    xmapsto: ["xArrow", 8614, 10, 10],
    xrightharpoondown: ["xArrow", 8641, 5, 10],
    xleftharpoondown: ["xArrow", 8637, 10, 5],
    xrightleftharpoons: ["xArrow", 8652, 10, 10],
    xrightharpoonup: ["xArrow", 8640, 5, 10],
    xleftharpoonup: ["xArrow", 8636, 10, 5],
    xleftrightharpoons: ["xArrow", 8651, 10, 10],
    mathllap: ["MathLap", "l", false],
    mathrlap: ["MathLap", "r", false],
    mathclap: ["MathLap", "c", false],
    clap: ["MtLap", "c"],
    textllap: ["MtLap", "l"],
    textrlap: ["MtLap", "r"],
    textclap: ["MtLap", "c"],
    cramped: "Cramped",
    crampedllap: ["MathLap", "l", true],
    crampedrlap: ["MathLap", "r", true],
    crampedclap: ["MathLap", "c", true],
    crampedsubstack: ["Macro", "\\begin{crampedsubarray}{c}#1\\end{crampedsubarray}", 1],
    mathmbox: "MathMBox",
    mathmakebox: "MathMakeBox",
    overbracket: "UnderOverBracket",
    underbracket: "UnderOverBracket",
    refeq: "HandleRef",
    MoveEqLeft: ["Macro", "\\hspace{#1em}&\\hspace{-#1em}", 1, "2"],
    Aboxed: "Aboxed",
    ArrowBetweenLines: "ArrowBetweenLines",
    vdotswithin: "VDotsWithin",
    shortvdotswithin: "ShortVDotsWithin",
    MTFlushSpaceAbove: "FlushSpaceAbove",
    MTFlushSpaceBelow: "FlushSpaceBelow",
    DeclarePairedDelimiter: "DeclarePairedDelimiter",
    DeclarePairedDelimiterX: "DeclarePairedDelimiterX",
    DeclarePairedDelimiterXPP: "DeclarePairedDelimiterXPP",
    DeclarePairedDelimiters: "DeclarePairedDelimiter",
    DeclarePairedDelimitersX: "DeclarePairedDelimiterX",
    DeclarePairedDelimitersXPP: "DeclarePairedDelimiterXPP",
    centercolon: ["CenterColon", true, true],
    ordinarycolon: ["CenterColon", false],
    MTThinColon: ["CenterColon", true, true, true],
    coloneqq: ["Relation", ":=", "≔"],
    Coloneqq: ["Relation", "::=", "⩴"],
    coloneq: ["Relation", ":-"],
    Coloneq: ["Relation", "::-"],
    eqqcolon: ["Relation", "=:", "≕"],
    Eqqcolon: ["Relation", "=::"],
    eqcolon: ["Relation", "-:", "∹"],
    Eqcolon: ["Relation", "-::"],
    colonapprox: ["Relation", ":\\approx"],
    Colonapprox: ["Relation", "::\\approx"],
    colonsim: ["Relation", ":\\sim"],
    Colonsim: ["Relation", "::\\sim"],
    dblcolon: ["Relation", "::", "∷"],
    nuparrow: ["NArrow", "↑", ".06em"],
    ndownarrow: ["NArrow", "↓", ".25em"],
    bigtimes: ["Macro", "\\mathop{\\Large\\kern-.1em\\boldsymbol{\\times}\\kern-.1em}"],
    splitfrac: ["SplitFrac", false],
    splitdfrac: ["SplitFrac", true],
    xmathstrut: "XMathStrut",
    prescript: "Prescript",
    newtagform: ["NewTagForm", false],
    renewtagform: ["NewTagForm", true],
    usetagform: "UseTagForm",
    adjustlimits: ["MacroWithTemplate", "\\mathop{{#1}\\vphantom{{#3}}}_{{#2}\\vphantom{{#4}}}\\mathop{{#3}\\vphantom{{#1}}}_{{#4}\\vphantom{{#2}}}", 4,, "_",, "_"],
    mathtoolsset: "SetOptions"
  }, mathtoolsMethodsHandler.MathtoolsMethods);
  new symbolParseMaps.EnvironmentMap("mathtools-environments", T.default.environment, {
    dcases: ["Array", null, "\\{", "", "ll", null, ".2em", "D"],
    rcases: ["Array", null, "", "\\}", "ll", null, ".2em"],
    drcases: ["Array", null, "", "\\}", "ll", null, ".2em", "D"],
    "dcases*": ["Cases", null, "{", "", "D"],
    "rcases*": ["Cases", null, "", "}"],
    "drcases*": ["Cases", null, "", "}", "D"],
    "cases*": ["Cases", null, "{", ""],
    "matrix*": ["MtMatrix", null, null, null],
    "pmatrix*": ["MtMatrix", null, "(", ")"],
    "bmatrix*": ["MtMatrix", null, "[", "]"],
    "Bmatrix*": ["MtMatrix", null, "\\{", "\\}"],
    "vmatrix*": ["MtMatrix", null, "\\vert", "\\vert"],
    "Vmatrix*": ["MtMatrix", null, "\\Vert", "\\Vert"],
    "smallmatrix*": ["MtSmallMatrix", null, null, null],
    psmallmatrix: ["MtSmallMatrix", null, "(", ")", "c"],
    "psmallmatrix*": ["MtSmallMatrix", null, "(", ")"],
    bsmallmatrix: ["MtSmallMatrix", null, "[", "]", "c"],
    "bsmallmatrix*": ["MtSmallMatrix", null, "[", "]"],
    Bsmallmatrix: ["MtSmallMatrix", null, "\\{", "\\}", "c"],
    "Bsmallmatrix*": ["MtSmallMatrix", null, "\\{", "\\}"],
    vsmallmatrix: ["MtSmallMatrix", null, "\\vert", "\\vert", "c"],
    "vsmallmatrix*": ["MtSmallMatrix", null, "\\vert", "\\vert"],
    Vsmallmatrix: ["MtSmallMatrix", null, "\\Vert", "\\Vert", "c"],
    "Vsmallmatrix*": ["MtSmallMatrix", null, "\\Vert", "\\Vert"],
    crampedsubarray: ["Array", null, null, null, null, "0em", "0.1em", "S'", 1],
    multlined: "MtMultlined",
    spreadlines: ["SpreadLines", true],
    lgathered: ["AmsEqnArray", null, null, null, "l", null, ".5em", "D"],
    rgathered: ["AmsEqnArray", null, null, null, "r", null, ".5em", "D"]
  }, mathtoolsMethodsHandler.MathtoolsMethods);
  new symbolParseMaps.DelimiterMap("mathtools-delimiters", T.default.delimiter, {
    "\\lparen": "(",
    "\\rparen": ")"
  });
  new symbolParseMaps.CommandMap("mathtools-characters", {
    ":": ["CenterColon", true]
  }, mathtoolsMethodsHandler.MathtoolsMethods);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}