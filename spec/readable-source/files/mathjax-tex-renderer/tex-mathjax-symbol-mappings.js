// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'a' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Resolved require(559929) to 'tex-base-command-map'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'c' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'p' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// - Updated imported property 'em' to 'formatEm' (module 839822)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 94937
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
  var i = n(require("symbol-parse-maps") /*id: 664746*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var u = o(require("tex-base-command-map") /*id: 559929*/);
  var s = o(require("tex-parser-handlers") /*id: 921652*/);
  var l = o(require("mathjax-utilities") /*id: 142412*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  new i.RegExpMap("letter", s.default.variable, /[a-z]/i);
  new i.RegExpMap("digit", s.default.digit, /[0-9.,]/);
  new i.RegExpMap("command", s.default.controlSequence, /^\\/);
  new i.MacroMap("special", {
    "{": "Open",
    "}": "Close",
    "~": "Tilde",
    "^": "Superscript",
    _: "Subscript",
    " ": "Space",
    "\t": "Space",
    "\r": "Space",
    "\n": "Space",
    "'": "Prime",
    "%": "Comment",
    "&": "Entry",
    "#": "Hash",
    "\xA0": "Space",
    "’": "Prime"
  }, u.default);
  new i.CharacterMap("mathchar0mi", s.default.mathchar0mi, {
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ϵ",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "ϕ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    varepsilon: "ε",
    vartheta: "ϑ",
    varpi: "ϖ",
    varrho: "ϱ",
    varsigma: "ς",
    varphi: "φ",
    S: ["§", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    aleph: ["ℵ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    hbar: ["ℏ", {
      variantForm: true
    }],
    imath: "ı",
    jmath: "ȷ",
    ell: "ℓ",
    wp: ["℘", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    Re: ["ℜ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    Im: ["ℑ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    partial: ["∂", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    }],
    infty: ["∞", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    prime: ["′", {
      variantForm: true
    }],
    emptyset: ["∅", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    nabla: ["∇", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    top: ["⊤", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    bot: ["⊥", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    angle: ["∠", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    triangle: ["△", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    backslash: ["∖", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    forall: ["∀", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    exists: ["∃", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    neg: ["¬", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    lnot: ["¬", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    flat: ["♭", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    natural: ["♮", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    sharp: ["♯", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    clubsuit: ["♣", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    diamondsuit: ["♢", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    heartsuit: ["♡", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    spadesuit: ["♠", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }]
  });
  new i.CharacterMap("mathchar0mo", s.default.mathchar0mo, {
    surd: "√",
    coprod: ["∐", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    bigvee: ["⋁", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    bigwedge: ["⋀", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    biguplus: ["⨄", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    bigcap: ["⋂", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    bigcup: ["⋃", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    int: ["∫", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }],
    intop: ["∫", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true,
      movablelimits: true
    }],
    iint: ["∬", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }],
    iiint: ["∭", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }],
    prod: ["∏", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    sum: ["∑", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    bigotimes: ["⨂", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    bigoplus: ["⨁", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    bigodot: ["⨀", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    oint: ["∮", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }],
    bigsqcup: ["⨆", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true
    }],
    smallint: ["∫", {
      largeop: false
    }],
    triangleleft: "◃",
    triangleright: "▹",
    bigtriangleup: "△",
    bigtriangledown: "▽",
    wedge: "∧",
    land: "∧",
    vee: "∨",
    lor: "∨",
    cap: "∩",
    cup: "∪",
    ddagger: "‡",
    dagger: "†",
    sqcap: "⊓",
    sqcup: "⊔",
    uplus: "⊎",
    amalg: "⨿",
    diamond: "⋄",
    bullet: "∙",
    wr: "≀",
    div: "÷",
    divsymbol: "÷",
    odot: ["⊙", {
      largeop: false
    }],
    oslash: ["⊘", {
      largeop: false
    }],
    otimes: ["⊗", {
      largeop: false
    }],
    ominus: ["⊖", {
      largeop: false
    }],
    oplus: ["⊕", {
      largeop: false
    }],
    mp: "∓",
    pm: "±",
    circ: "∘",
    bigcirc: "◯",
    setminus: "∖",
    cdot: "⋅",
    ast: "∗",
    times: "×",
    star: "⋆",
    propto: "∝",
    sqsubseteq: "⊑",
    sqsupseteq: "⊒",
    parallel: "∥",
    mid: "∣",
    dashv: "⊣",
    vdash: "⊢",
    leq: "≤",
    le: "≤",
    geq: "≥",
    ge: "≥",
    lt: "<",
    gt: ">",
    succ: "≻",
    prec: "≺",
    approx: "≈",
    succeq: "⪰",
    preceq: "⪯",
    supset: "⊃",
    subset: "⊂",
    supseteq: "⊇",
    subseteq: "⊆",
    in: "∈",
    ni: "∋",
    notin: "∉",
    owns: "∋",
    gg: "≫",
    ll: "≪",
    sim: "∼",
    simeq: "≃",
    perp: "⊥",
    equiv: "≡",
    asymp: "≍",
    smile: "⌣",
    frown: "⌢",
    ne: "≠",
    neq: "≠",
    cong: "≅",
    doteq: "≐",
    bowtie: "⋈",
    models: "⊨",
    notChar: "⧸",
    Leftrightarrow: "⇔",
    Leftarrow: "⇐",
    Rightarrow: "⇒",
    leftrightarrow: "↔",
    leftarrow: "←",
    gets: "←",
    rightarrow: "→",
    to: ["→", {
      accent: false
    }],
    mapsto: "↦",
    leftharpoonup: "↼",
    leftharpoondown: "↽",
    rightharpoonup: "⇀",
    rightharpoondown: "⇁",
    nearrow: "↗",
    searrow: "↘",
    nwarrow: "↖",
    swarrow: "↙",
    rightleftharpoons: "⇌",
    hookrightarrow: "↪",
    hookleftarrow: "↩",
    longleftarrow: "⟵",
    Longleftarrow: "⟸",
    longrightarrow: "⟶",
    Longrightarrow: "⟹",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    ldots: "…",
    cdots: "⋯",
    vdots: "⋮",
    ddots: "⋱",
    dotsc: "…",
    dotsb: "⋯",
    dotsm: "⋯",
    dotsi: "⋯",
    dotso: "…",
    ldotp: [".", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.PUNCT
    }],
    cdotp: ["⋅", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.PUNCT
    }],
    colon: [":", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.PUNCT
    }]
  });
  new i.CharacterMap("mathchar7", s.default.mathchar7, {
    Gamma: "Γ",
    Delta: "Δ",
    Theta: "Θ",
    Lambda: "Λ",
    Xi: "Ξ",
    Pi: "Π",
    Sigma: "Σ",
    Upsilon: "Υ",
    Phi: "Φ",
    Psi: "Ψ",
    Omega: "Ω",
    _: "_",
    "#": "#",
    $: "$",
    "%": "%",
    "&": "&",
    And: "&"
  });
  new i.DelimiterMap("delimiter", s.default.delimiter, {
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    "<": "⟨",
    ">": "⟩",
    "\\lt": "⟨",
    "\\gt": "⟩",
    "/": "/",
    "|": ["|", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD
    }],
    ".": "",
    "\\\\": "\\",
    "\\lmoustache": "⎰",
    "\\rmoustache": "⎱",
    "\\lgroup": "⟮",
    "\\rgroup": "⟯",
    "\\arrowvert": "⏐",
    "\\Arrowvert": "‖",
    "\\bracevert": "⎪",
    "\\Vert": ["‖", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD
    }],
    "\\|": ["‖", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD
    }],
    "\\vert": ["|", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD
    }],
    "\\uparrow": "↑",
    "\\downarrow": "↓",
    "\\updownarrow": "↕",
    "\\Uparrow": "⇑",
    "\\Downarrow": "⇓",
    "\\Updownarrow": "⇕",
    "\\backslash": "\\",
    "\\rangle": "⟩",
    "\\langle": "⟨",
    "\\rbrace": "}",
    "\\lbrace": "{",
    "\\}": "}",
    "\\{": "{",
    "\\rceil": "⌉",
    "\\lceil": "⌈",
    "\\rfloor": "⌋",
    "\\lfloor": "⌊",
    "\\lbrack": "[",
    "\\rbrack": "]"
  });
  new i.CommandMap("macros", {
    displaystyle: ["SetStyle", "D", true, 0],
    textstyle: ["SetStyle", "T", false, 0],
    scriptstyle: ["SetStyle", "S", false, 1],
    scriptscriptstyle: ["SetStyle", "SS", false, 2],
    rm: ["SetFont", texConstantDefinitions.TexConstant.Variant.NORMAL],
    mit: ["SetFont", texConstantDefinitions.TexConstant.Variant.ITALIC],
    oldstyle: ["SetFont", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    cal: ["SetFont", texConstantDefinitions.TexConstant.Variant.CALLIGRAPHIC],
    it: ["SetFont", texConstantDefinitions.TexConstant.Variant.MATHITALIC],
    bf: ["SetFont", texConstantDefinitions.TexConstant.Variant.BOLD],
    bbFont: ["SetFont", texConstantDefinitions.TexConstant.Variant.DOUBLESTRUCK],
    scr: ["SetFont", texConstantDefinitions.TexConstant.Variant.SCRIPT],
    frak: ["SetFont", texConstantDefinitions.TexConstant.Variant.FRAKTUR],
    sf: ["SetFont", texConstantDefinitions.TexConstant.Variant.SANSSERIF],
    tt: ["SetFont", texConstantDefinitions.TexConstant.Variant.MONOSPACE],
    mathrm: ["MathFont", texConstantDefinitions.TexConstant.Variant.NORMAL],
    mathup: ["MathFont", texConstantDefinitions.TexConstant.Variant.NORMAL],
    mathnormal: ["MathFont", ""],
    mathbf: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLD],
    mathbfup: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLD],
    mathit: ["MathFont", texConstantDefinitions.TexConstant.Variant.MATHITALIC],
    mathbfit: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDITALIC],
    mathbb: ["MathFont", texConstantDefinitions.TexConstant.Variant.DOUBLESTRUCK],
    Bbb: ["MathFont", texConstantDefinitions.TexConstant.Variant.DOUBLESTRUCK],
    mathfrak: ["MathFont", texConstantDefinitions.TexConstant.Variant.FRAKTUR],
    mathbffrak: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDFRAKTUR],
    mathscr: ["MathFont", texConstantDefinitions.TexConstant.Variant.SCRIPT],
    mathbfscr: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDSCRIPT],
    mathsf: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIF],
    mathsfup: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIF],
    mathbfsf: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDSANSSERIF],
    mathbfsfup: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDSANSSERIF],
    mathsfit: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIFITALIC],
    mathbfsfit: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIFBOLDITALIC],
    mathtt: ["MathFont", texConstantDefinitions.TexConstant.Variant.MONOSPACE],
    mathcal: ["MathFont", texConstantDefinitions.TexConstant.Variant.CALLIGRAPHIC],
    mathbfcal: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDCALLIGRAPHIC],
    symrm: ["MathFont", texConstantDefinitions.TexConstant.Variant.NORMAL],
    symup: ["MathFont", texConstantDefinitions.TexConstant.Variant.NORMAL],
    symnormal: ["MathFont", ""],
    symbf: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLD],
    symbfup: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLD],
    symit: ["MathFont", texConstantDefinitions.TexConstant.Variant.ITALIC],
    symbfit: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDITALIC],
    symbb: ["MathFont", texConstantDefinitions.TexConstant.Variant.DOUBLESTRUCK],
    symfrak: ["MathFont", texConstantDefinitions.TexConstant.Variant.FRAKTUR],
    symbffrak: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDFRAKTUR],
    symscr: ["MathFont", texConstantDefinitions.TexConstant.Variant.SCRIPT],
    symbfscr: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDSCRIPT],
    symsf: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIF],
    symsfup: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIF],
    symbfsf: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDSANSSERIF],
    symbfsfup: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDSANSSERIF],
    symsfit: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIFITALIC],
    symbfsfit: ["MathFont", texConstantDefinitions.TexConstant.Variant.SANSSERIFBOLDITALIC],
    symtt: ["MathFont", texConstantDefinitions.TexConstant.Variant.MONOSPACE],
    symcal: ["MathFont", texConstantDefinitions.TexConstant.Variant.CALLIGRAPHIC],
    symbfcal: ["MathFont", texConstantDefinitions.TexConstant.Variant.BOLDCALLIGRAPHIC],
    textrm: ["HBox", null, texConstantDefinitions.TexConstant.Variant.NORMAL],
    textup: ["HBox", null, texConstantDefinitions.TexConstant.Variant.NORMAL],
    textnormal: ["HBox"],
    textit: ["HBox", null, texConstantDefinitions.TexConstant.Variant.ITALIC],
    textbf: ["HBox", null, texConstantDefinitions.TexConstant.Variant.BOLD],
    textsf: ["HBox", null, texConstantDefinitions.TexConstant.Variant.SANSSERIF],
    texttt: ["HBox", null, texConstantDefinitions.TexConstant.Variant.MONOSPACE],
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
    arcsin: "NamedFn",
    arccos: "NamedFn",
    arctan: "NamedFn",
    arg: "NamedFn",
    cos: "NamedFn",
    cosh: "NamedFn",
    cot: "NamedFn",
    coth: "NamedFn",
    csc: "NamedFn",
    deg: "NamedFn",
    det: "NamedOp",
    dim: "NamedFn",
    exp: "NamedFn",
    gcd: "NamedOp",
    hom: "NamedFn",
    inf: "NamedOp",
    ker: "NamedFn",
    lg: "NamedFn",
    lim: "NamedOp",
    liminf: ["NamedOp", "lim&thinsp;inf"],
    limsup: ["NamedOp", "lim&thinsp;sup"],
    ln: "NamedFn",
    log: "NamedFn",
    max: "NamedOp",
    min: "NamedOp",
    Pr: "NamedOp",
    sec: "NamedFn",
    sin: "NamedFn",
    sinh: "NamedFn",
    sup: "NamedOp",
    tan: "NamedFn",
    tanh: "NamedFn",
    limits: ["Limits", 1],
    nolimits: ["Limits", 0],
    overline: ["UnderOver", "2015"],
    underline: ["UnderOver", "2015"],
    overbrace: ["UnderOver", "23DE", 1],
    underbrace: ["UnderOver", "23DF", 1],
    overparen: ["UnderOver", "23DC"],
    underparen: ["UnderOver", "23DD"],
    overrightarrow: ["UnderOver", "2192"],
    underrightarrow: ["UnderOver", "2192"],
    overleftarrow: ["UnderOver", "2190"],
    underleftarrow: ["UnderOver", "2190"],
    overleftrightarrow: ["UnderOver", "2194"],
    underleftrightarrow: ["UnderOver", "2194"],
    overset: "Overset",
    underset: "Underset",
    overunderset: "Overunderset",
    stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
    stackbin: ["Macro", "\\mathbin{\\mathop{#2}\\limits^{#1}}", 2],
    over: "Over",
    overwithdelims: "Over",
    atop: "Over",
    atopwithdelims: "Over",
    above: "Over",
    abovewithdelims: "Over",
    brace: ["Over", "{", "}"],
    brack: ["Over", "[", "]"],
    choose: ["Over", "(", ")"],
    frac: "Frac",
    sqrt: "Sqrt",
    root: "Root",
    uproot: ["MoveRoot", "upRoot"],
    leftroot: ["MoveRoot", "leftRoot"],
    left: "LeftRight",
    right: "LeftRight",
    middle: "LeftRight",
    llap: "Lap",
    rlap: "Lap",
    raise: "RaiseLower",
    lower: "RaiseLower",
    moveleft: "MoveLeftRight",
    moveright: "MoveLeftRight",
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
    nonscript: "Nonscript",
    big: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.ORD, 0.85],
    Big: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.ORD, 1.15],
    bigg: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.ORD, 1.45],
    Bigg: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.ORD, 1.75],
    bigl: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.OPEN, 0.85],
    Bigl: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.OPEN, 1.15],
    biggl: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.OPEN, 1.45],
    Biggl: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.OPEN, 1.75],
    bigr: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.CLOSE, 0.85],
    Bigr: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.CLOSE, 1.15],
    biggr: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.CLOSE, 1.45],
    Biggr: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.CLOSE, 1.75],
    bigm: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.REL, 0.85],
    Bigm: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.REL, 1.15],
    biggm: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.REL, 1.45],
    Biggm: ["MakeBig", mathmlAbstractNodeClasses.TEXCLASS.REL, 1.75],
    mathord: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.ORD],
    mathop: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.OP],
    mathopen: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.OPEN],
    mathclose: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.CLOSE],
    mathbin: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.BIN],
    mathrel: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.REL],
    mathpunct: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.PUNCT],
    mathinner: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.INNER],
    vcenter: ["TeXAtom", mathmlAbstractNodeClasses.TEXCLASS.VCENTER],
    buildrel: "BuildRel",
    hbox: ["HBox", 0],
    text: "HBox",
    mbox: ["HBox", 0],
    fbox: "FBox",
    boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
    framebox: "FrameBox",
    strut: "Strut",
    mathstrut: ["Macro", "\\vphantom{(}"],
    phantom: "Phantom",
    vphantom: ["Phantom", 1, 0],
    hphantom: ["Phantom", 0, 1],
    smash: "Smash",
    acute: ["Accent", "00B4"],
    grave: ["Accent", "0060"],
    ddot: ["Accent", "00A8"],
    tilde: ["Accent", "007E"],
    bar: ["Accent", "00AF"],
    breve: ["Accent", "02D8"],
    check: ["Accent", "02C7"],
    hat: ["Accent", "005E"],
    vec: ["Accent", "2192"],
    dot: ["Accent", "02D9"],
    widetilde: ["Accent", "007E", 1],
    widehat: ["Accent", "005E", 1],
    matrix: "Matrix",
    array: "Matrix",
    pmatrix: ["Matrix", "(", ")"],
    cases: ["Matrix", "{", "", "left left", null, ".1em", null, true],
    eqalign: ["Matrix", null, null, "right left", cssUnitFormatters.formatEm(cssUnitFormatters.MATHSPACE.thickmathspace), ".5em", "D"],
    displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
    cr: "Cr",
    "\\": "CrLaTeX",
    newline: ["CrLaTeX", true],
    hline: ["HLine", "solid"],
    hdashline: ["HLine", "dashed"],
    eqalignno: ["Matrix", null, null, "right left", cssUnitFormatters.formatEm(cssUnitFormatters.MATHSPACE.thickmathspace), ".5em", "D", null, "right"],
    leqalignno: ["Matrix", null, null, "right left", cssUnitFormatters.formatEm(cssUnitFormatters.MATHSPACE.thickmathspace), ".5em", "D", null, "left"],
    hfill: "HFill",
    hfil: "HFill",
    hfilll: "HFill",
    bmod: ["Macro", "\\mmlToken{mo}[lspace=\"thickmathspace\" rspace=\"thickmathspace\"]{mod}"],
    pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
    mod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1", 1],
    pod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)", 1],
    iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
    skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
    pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
    TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
    LaTeX: ["Macro", "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"],
    " ": ["Macro", "\\text{ }"],
    not: "Not",
    dots: "Dots",
    space: "Tilde",
    "\xA0": "Tilde",
    begin: "BeginEnd",
    end: "BeginEnd",
    label: "HandleLabel",
    ref: "HandleRef",
    nonumber: "HandleNoTag",
    mathchoice: "MathChoice",
    mmlToken: "MmlToken"
  }, u.default);
  new i.EnvironmentMap("environment", s.default.environment, {
    array: ["AlignedArray"],
    equation: ["Equation", null, true],
    eqnarray: ["EqnArray", null, true, true, "rcl", l.default.cols(0, cssUnitFormatters.MATHSPACE.thickmathspace), ".5em"]
  }, u.default);
  new i.CharacterMap("not_remap", null, {
    "←": "↚",
    "→": "↛",
    "↔": "↮",
    "⇐": "⇍",
    "⇒": "⇏",
    "⇔": "⇎",
    "∈": "∉",
    "∋": "∌",
    "∣": "∤",
    "∥": "∦",
    "∼": "≁",
    "~": "≁",
    "≃": "≄",
    "≅": "≇",
    "≈": "≉",
    "≍": "≭",
    "=": "≠",
    "≡": "≢",
    "<": "≮",
    ">": "≯",
    "≤": "≰",
    "≥": "≱",
    "≲": "≴",
    "≳": "≵",
    "≶": "≸",
    "≷": "≹",
    "≺": "⊀",
    "≻": "⊁",
    "⊂": "⊄",
    "⊃": "⊅",
    "⊆": "⊈",
    "⊇": "⊉",
    "⊢": "⊬",
    "⊨": "⊭",
    "⊩": "⊮",
    "⊫": "⊯",
    "≼": "⋠",
    "≽": "⋡",
    "⊑": "⋢",
    "⊒": "⋣",
    "⊲": "⋪",
    "⊳": "⋫",
    "⊴": "⋬",
    "⊵": "⋭",
    "∃": "∄"
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}