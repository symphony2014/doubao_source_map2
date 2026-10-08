// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'T' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Renamed variable 'n' to 'textMacrosMethods'
// - Resolved require(259813) to 'text-macros-methods'
// - Renamed variable 'o' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 265364
         */
module.exports = function (module, exports, require) {
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var textMacrosMethods = require("text-macros-methods") /*id: 259813*/;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  new symbolParseMaps.MacroMap("text-special", {
    $: "Math",
    "%": "Comment",
    "^": "MathModeOnly",
    _: "MathModeOnly",
    "&": "Misplaced",
    "#": "Misplaced",
    "~": "Tilde",
    " ": "Space",
    "\t": "Space",
    "\r": "Space",
    "\n": "Space",
    "\xA0": "Tilde",
    "{": "OpenBrace",
    "}": "CloseBrace",
    "`": "OpenQuote",
    "'": "CloseQuote"
  }, textMacrosMethods.TextMacrosMethods);
  new symbolParseMaps.CommandMap("text-macros", {
    "(": "Math",
    $: "SelfQuote",
    _: "SelfQuote",
    "%": "SelfQuote",
    "{": "SelfQuote",
    "}": "SelfQuote",
    " ": "SelfQuote",
    "&": "SelfQuote",
    "#": "SelfQuote",
    "\\": "SelfQuote",
    "'": ["Accent", "´"],
    "’": ["Accent", "´"],
    "`": ["Accent", "`"],
    "‘": ["Accent", "`"],
    "^": ["Accent", "^"],
    "\"": ["Accent", "¨"],
    "~": ["Accent", "~"],
    "=": ["Accent", "¯"],
    ".": ["Accent", "˙"],
    u: ["Accent", "˘"],
    v: ["Accent", "ˇ"],
    emph: "Emph",
    rm: ["SetFont", texConstantDefinitions.TexConstant.Variant.NORMAL],
    mit: ["SetFont", texConstantDefinitions.TexConstant.Variant.ITALIC],
    oldstyle: ["SetFont", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    cal: ["SetFont", texConstantDefinitions.TexConstant.Variant.CALLIGRAPHIC],
    it: ["SetFont", "-tex-mathit"],
    bf: ["SetFont", texConstantDefinitions.TexConstant.Variant.BOLD],
    bbFont: ["SetFont", texConstantDefinitions.TexConstant.Variant.DOUBLESTRUCK],
    scr: ["SetFont", texConstantDefinitions.TexConstant.Variant.SCRIPT],
    frak: ["SetFont", texConstantDefinitions.TexConstant.Variant.FRAKTUR],
    sf: ["SetFont", texConstantDefinitions.TexConstant.Variant.SANSSERIF],
    tt: ["SetFont", texConstantDefinitions.TexConstant.Variant.MONOSPACE],
    tiny: ["SetSize", 0.5],
    Tiny: ["SetSize", 0.6],
    scriptsize: ["SetSize", 0.7],
    small: ["SetSize", 0.85],
    normalsize: ["SetSize", 1],
    large: ["SetSize", 1.2],
    Large: ["SetSize", 1.44],
    LARGE: ["SetSize", 1.73],
    huge: ["SetSize", 2.07],
    Huge: ["SetSize", 2.49],
    Bbb: ["Macro", "{\\bbFont #1}", 1],
    textnormal: ["Macro", "{\\rm #1}", 1],
    textup: ["Macro", "{\\rm #1}", 1],
    textrm: ["Macro", "{\\rm #1}", 1],
    textit: ["Macro", "{\\it #1}", 1],
    textbf: ["Macro", "{\\bf #1}", 1],
    textsf: ["Macro", "{\\sf #1}", 1],
    texttt: ["Macro", "{\\tt #1}", 1],
    dagger: ["Insert", "†"],
    ddagger: ["Insert", "‡"],
    S: ["Insert", "§"],
    ",": ["Spacer", cssUnitFormatters.MATHSPACE.thinmathspace],
    ":": ["Spacer", cssUnitFormatters.MATHSPACE.mediummathspace],
    ">": ["Spacer", cssUnitFormatters.MATHSPACE.mediummathspace],
    ";": ["Spacer", cssUnitFormatters.MATHSPACE.thickmathspace],
    "!": ["Spacer", cssUnitFormatters.MATHSPACE.negativethinmathspace],
    enspace: ["Spacer", 0.5],
    quad: ["Spacer", 1],
    qquad: ["Spacer", 2],
    thinspace: ["Spacer", cssUnitFormatters.MATHSPACE.thinmathspace],
    negthinspace: ["Spacer", cssUnitFormatters.MATHSPACE.negativethinmathspace],
    hskip: "Hskip",
    hspace: "Hskip",
    kern: "Hskip",
    mskip: "Hskip",
    mspace: "Hskip",
    mkern: "Hskip",
    rule: "rule",
    Rule: ["Rule"],
    Space: ["Rule", "blank"],
    color: "CheckAutoload",
    textcolor: "CheckAutoload",
    colorbox: "CheckAutoload",
    fcolorbox: "CheckAutoload",
    href: "CheckAutoload",
    style: "CheckAutoload",
    class: "CheckAutoload",
    cssId: "CheckAutoload",
    unicode: "CheckAutoload",
    ref: ["HandleRef", false],
    eqref: ["HandleRef", true]
  }, textMacrosMethods.TextMacrosMethods);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}