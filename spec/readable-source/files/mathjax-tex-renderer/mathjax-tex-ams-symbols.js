// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'texAmsMethodsHandler'
// - Resolved require(528581) to 'tex-ams-methods-handler'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'u' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'c' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'p' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 836207
         */
module.exports = function (module, exports, require) {
  var r = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var T = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var n = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          r(e, t, Q);
        }
      }
    }
    T(e, t);
    return e;
  };
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var texAmsMethodsHandler = require("tex-ams-methods-handler") /*id: 528581*/;
  var a = n(require("symbol-parse-maps") /*id: 664746*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var s = o(require("tex-parser-handlers") /*id: 921652*/);
  var l = o(require("mathjax-utilities") /*id: 142412*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  new a.CharacterMap("AMSmath-mathchar0mo", s.default.mathchar0mo, {
    iiiint: ["⨌", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }]
  });
  new a.RegExpMap("AMSmath-operatorLetter", texAmsMethodsHandler.AmsMethods.operatorLetter, /[-*]/i);
  new a.CommandMap("AMSmath-macros", {
    mathring: ["Accent", "02DA"],
    nobreakspace: "Tilde",
    negmedspace: ["Spacer", cssUnitFormatters.MATHSPACE.negativemediummathspace],
    negthickspace: ["Spacer", cssUnitFormatters.MATHSPACE.negativethickmathspace],
    idotsint: ["MultiIntegral", "\\int\\cdots\\int"],
    dddot: ["Accent", "20DB"],
    ddddot: ["Accent", "20DC"],
    sideset: "SideSet",
    boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
    tag: "HandleTag",
    notag: "HandleNoTag",
    eqref: ["HandleRef", true],
    substack: ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1],
    injlim: ["NamedOp", "inj&thinsp;lim"],
    projlim: ["NamedOp", "proj&thinsp;lim"],
    varliminf: ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],
    varlimsup: ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],
    varinjlim: ["Macro", "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"],
    varprojlim: ["Macro", "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"],
    DeclareMathOperator: "HandleDeclareOp",
    operatorname: "HandleOperatorName",
    genfrac: "Genfrac",
    frac: ["Genfrac", "", "", "", ""],
    tfrac: ["Genfrac", "", "", "", "1"],
    dfrac: ["Genfrac", "", "", "", "0"],
    binom: ["Genfrac", "(", ")", "0", ""],
    tbinom: ["Genfrac", "(", ")", "0", "1"],
    dbinom: ["Genfrac", "(", ")", "0", "0"],
    cfrac: "CFrac",
    shoveleft: ["HandleShove", texConstantDefinitions.TexConstant.Align.LEFT],
    shoveright: ["HandleShove", texConstantDefinitions.TexConstant.Align.RIGHT],
    xrightarrow: ["xArrow", 8594, 5, 10],
    xleftarrow: ["xArrow", 8592, 10, 5]
  }, texAmsMethodsHandler.AmsMethods);
  new a.EnvironmentMap("AMSmath-environment", s.default.environment, {
    "equation*": ["Equation", null, false],
    "eqnarray*": ["EqnArray", null, false, true, "rcl", l.default.cols(0, cssUnitFormatters.MATHSPACE.thickmathspace), ".5em"],
    align: ["EqnArray", null, true, true, "rl", l.default.cols(0, 2)],
    "align*": ["EqnArray", null, false, true, "rl", l.default.cols(0, 2)],
    multline: ["Multline", null, true],
    "multline*": ["Multline", null, false],
    split: ["EqnArray", null, false, false, "rl", l.default.cols(0)],
    gather: ["EqnArray", null, true, true, "c"],
    "gather*": ["EqnArray", null, false, true, "c"],
    alignat: ["AlignAt", null, true, true],
    "alignat*": ["AlignAt", null, false, true],
    alignedat: ["AlignAt", null, false, false],
    aligned: ["AmsEqnArray", null, null, null, "rl", l.default.cols(0, 2), ".5em", "D"],
    gathered: ["AmsEqnArray", null, null, null, "c", null, ".5em", "D"],
    xalignat: ["XalignAt", null, true, true],
    "xalignat*": ["XalignAt", null, false, true],
    xxalignat: ["XalignAt", null, false, false],
    flalign: ["FlalignArray", null, true, false, true, "rlc", "auto auto fit"],
    "flalign*": ["FlalignArray", null, false, false, true, "rlc", "auto auto fit"],
    subarray: ["Array", null, null, null, null, l.default.cols(0), "0.1em", "S", 1],
    smallmatrix: ["Array", null, null, null, "c", l.default.cols(1 / 3), ".2em", "S", 1],
    matrix: ["Array", null, null, null, "c"],
    pmatrix: ["Array", null, "(", ")", "c"],
    bmatrix: ["Array", null, "[", "]", "c"],
    Bmatrix: ["Array", null, "\\{", "\\}", "c"],
    vmatrix: ["Array", null, "\\vert", "\\vert", "c"],
    Vmatrix: ["Array", null, "\\Vert", "\\Vert", "c"],
    cases: ["Array", null, "\\{", ".", "ll", null, ".2em", "T"]
  }, texAmsMethodsHandler.AmsMethods);
  new a.DelimiterMap("AMSmath-delimiter", s.default.delimiter, {
    "\\lvert": ["|", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OPEN
    }],
    "\\rvert": ["|", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.CLOSE
    }],
    "\\lVert": ["‖", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OPEN
    }],
    "\\rVert": ["‖", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.CLOSE
    }]
  });
  new a.CharacterMap("AMSsymbols-mathchar0mi", s.default.mathchar0mi, {
    digamma: "ϝ",
    varkappa: "ϰ",
    varGamma: ["Γ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varDelta: ["Δ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varTheta: ["Θ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varLambda: ["Λ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varXi: ["Ξ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varPi: ["Π", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varSigma: ["Σ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varUpsilon: ["Υ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varPhi: ["Φ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varPsi: ["Ψ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    varOmega: ["Ω", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    beth: "ℶ",
    gimel: "ℷ",
    daleth: "ℸ",
    backprime: ["‵", {
      variantForm: true
    }],
    hslash: "ℏ",
    varnothing: ["∅", {
      variantForm: true
    }],
    blacktriangle: "▴",
    triangledown: ["▽", {
      variantForm: true
    }],
    blacktriangledown: "▾",
    square: "◻",
    Box: "◻",
    blacksquare: "◼",
    lozenge: "◊",
    Diamond: "◊",
    blacklozenge: "⧫",
    circledS: ["Ⓢ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    bigstar: "★",
    sphericalangle: "∢",
    measuredangle: "∡",
    nexists: "∄",
    complement: "∁",
    mho: "℧",
    eth: ["ð", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    Finv: "Ⅎ",
    diagup: "╱",
    Game: "⅁",
    diagdown: "╲",
    Bbbk: ["k", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.DOUBLESTRUCK
    }],
    yen: "¥",
    circledR: "®",
    checkmark: "✓",
    maltese: "✠"
  });
  new a.CharacterMap("AMSsymbols-mathchar0mo", s.default.mathchar0mo, {
    dotplus: "∔",
    ltimes: "⋉",
    smallsetminus: ["∖", {
      variantForm: true
    }],
    rtimes: "⋊",
    Cap: "⋒",
    doublecap: "⋒",
    leftthreetimes: "⋋",
    Cup: "⋓",
    doublecup: "⋓",
    rightthreetimes: "⋌",
    barwedge: "⊼",
    curlywedge: "⋏",
    veebar: "⊻",
    curlyvee: "⋎",
    doublebarwedge: "⩞",
    boxminus: "⊟",
    circleddash: "⊝",
    boxtimes: "⊠",
    circledast: "⊛",
    boxdot: "⊡",
    circledcirc: "⊚",
    boxplus: "⊞",
    centerdot: ["⋅", {
      variantForm: true
    }],
    divideontimes: "⋇",
    intercal: "⊺",
    leqq: "≦",
    geqq: "≧",
    leqslant: "⩽",
    geqslant: "⩾",
    eqslantless: "⪕",
    eqslantgtr: "⪖",
    lesssim: "≲",
    gtrsim: "≳",
    lessapprox: "⪅",
    gtrapprox: "⪆",
    approxeq: "≊",
    lessdot: "⋖",
    gtrdot: "⋗",
    lll: "⋘",
    llless: "⋘",
    ggg: "⋙",
    gggtr: "⋙",
    lessgtr: "≶",
    gtrless: "≷",
    lesseqgtr: "⋚",
    gtreqless: "⋛",
    lesseqqgtr: "⪋",
    gtreqqless: "⪌",
    doteqdot: "≑",
    Doteq: "≑",
    eqcirc: "≖",
    risingdotseq: "≓",
    circeq: "≗",
    fallingdotseq: "≒",
    triangleq: "≜",
    backsim: "∽",
    thicksim: ["∼", {
      variantForm: true
    }],
    backsimeq: "⋍",
    thickapprox: ["≈", {
      variantForm: true
    }],
    subseteqq: "⫅",
    supseteqq: "⫆",
    Subset: "⋐",
    Supset: "⋑",
    sqsubset: "⊏",
    sqsupset: "⊐",
    preccurlyeq: "≼",
    succcurlyeq: "≽",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    precsim: "≾",
    succsim: "≿",
    precapprox: "⪷",
    succapprox: "⪸",
    vartriangleleft: "⊲",
    lhd: "⊲",
    vartriangleright: "⊳",
    rhd: "⊳",
    trianglelefteq: "⊴",
    unlhd: "⊴",
    trianglerighteq: "⊵",
    unrhd: "⊵",
    vDash: ["⊨", {
      variantForm: true
    }],
    Vdash: "⊩",
    Vvdash: "⊪",
    smallsmile: ["⌣", {
      variantForm: true
    }],
    shortmid: ["∣", {
      variantForm: true
    }],
    smallfrown: ["⌢", {
      variantForm: true
    }],
    shortparallel: ["∥", {
      variantForm: true
    }],
    bumpeq: "≏",
    between: "≬",
    Bumpeq: "≎",
    pitchfork: "⋔",
    varpropto: ["∝", {
      variantForm: true
    }],
    backepsilon: "∍",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    therefore: "∴",
    because: "∵",
    eqsim: "≂",
    vartriangle: ["△", {
      variantForm: true
    }],
    Join: "⋈",
    nless: "≮",
    ngtr: "≯",
    nleq: "≰",
    ngeq: "≱",
    nleqslant: ["⪇", {
      variantForm: true
    }],
    ngeqslant: ["⪈", {
      variantForm: true
    }],
    nleqq: ["≰", {
      variantForm: true
    }],
    ngeqq: ["≱", {
      variantForm: true
    }],
    lneq: "⪇",
    gneq: "⪈",
    lneqq: "≨",
    gneqq: "≩",
    lvertneqq: ["≨", {
      variantForm: true
    }],
    gvertneqq: ["≩", {
      variantForm: true
    }],
    lnsim: "⋦",
    gnsim: "⋧",
    lnapprox: "⪉",
    gnapprox: "⪊",
    nprec: "⊀",
    nsucc: "⊁",
    npreceq: ["⋠", {
      variantForm: true
    }],
    nsucceq: ["⋡", {
      variantForm: true
    }],
    precneqq: "⪵",
    succneqq: "⪶",
    precnsim: "⋨",
    succnsim: "⋩",
    precnapprox: "⪹",
    succnapprox: "⪺",
    nsim: "≁",
    ncong: "≇",
    nshortmid: ["∤", {
      variantForm: true
    }],
    nshortparallel: ["∦", {
      variantForm: true
    }],
    nmid: "∤",
    nparallel: "∦",
    nvdash: "⊬",
    nvDash: "⊭",
    nVdash: "⊮",
    nVDash: "⊯",
    ntriangleleft: "⋪",
    ntriangleright: "⋫",
    ntrianglelefteq: "⋬",
    ntrianglerighteq: "⋭",
    nsubseteq: "⊈",
    nsupseteq: "⊉",
    nsubseteqq: ["⊈", {
      variantForm: true
    }],
    nsupseteqq: ["⊉", {
      variantForm: true
    }],
    subsetneq: "⊊",
    supsetneq: "⊋",
    varsubsetneq: ["⊊", {
      variantForm: true
    }],
    varsupsetneq: ["⊋", {
      variantForm: true
    }],
    subsetneqq: "⫋",
    supsetneqq: "⫌",
    varsubsetneqq: ["⫋", {
      variantForm: true
    }],
    varsupsetneqq: ["⫌", {
      variantForm: true
    }],
    leftleftarrows: "⇇",
    rightrightarrows: "⇉",
    leftrightarrows: "⇆",
    rightleftarrows: "⇄",
    Lleftarrow: "⇚",
    Rrightarrow: "⇛",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    leftarrowtail: "↢",
    rightarrowtail: "↣",
    looparrowleft: "↫",
    looparrowright: "↬",
    leftrightharpoons: "⇋",
    rightleftharpoons: ["⇌", {
      variantForm: true
    }],
    curvearrowleft: "↶",
    curvearrowright: "↷",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    Lsh: "↰",
    Rsh: "↱",
    upuparrows: "⇈",
    downdownarrows: "⇊",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    downharpoonleft: "⇃",
    restriction: "↾",
    multimap: "⊸",
    downharpoonright: "⇂",
    leftrightsquigarrow: "↭",
    rightsquigarrow: "⇝",
    leadsto: "⇝",
    dashrightarrow: "⇢",
    dashleftarrow: "⇠",
    nleftarrow: "↚",
    nrightarrow: "↛",
    nLeftarrow: "⇍",
    nRightarrow: "⇏",
    nleftrightarrow: "↮",
    nLeftrightarrow: "⇎"
  });
  new a.DelimiterMap("AMSsymbols-delimiter", s.default.delimiter, {
    "\\ulcorner": "⌜",
    "\\urcorner": "⌝",
    "\\llcorner": "⌞",
    "\\lrcorner": "⌟"
  });
  new a.CommandMap("AMSsymbols-macros", {
    implies: ["Macro", "\\;\\Longrightarrow\\;"],
    impliedby: ["Macro", "\\;\\Longleftarrow\\;"]
  }, texAmsMethodsHandler.AmsMethods);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}