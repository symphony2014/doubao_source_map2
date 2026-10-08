// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(60708) to 'tex-physics-macros'
// - Renamed variable 'o' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Renamed variable 'a' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 91210
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
  var n = r(require("tex-physics-macros") /*id: 60708*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var i = r(require("tex-parser-handlers") /*id: 921652*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  new symbolParseMaps.CommandMap("Physics-automatic-bracing-macros", {
    quantity: "Quantity",
    qty: "Quantity",
    pqty: ["Quantity", "(", ")", true],
    bqty: ["Quantity", "[", "]", true],
    vqty: ["Quantity", "|", "|", true],
    Bqty: ["Quantity", "\\{", "\\}", true],
    absolutevalue: ["Quantity", "|", "|", true],
    abs: ["Quantity", "|", "|", true],
    norm: ["Quantity", "\\|", "\\|", true],
    evaluated: "Eval",
    eval: "Eval",
    order: ["Quantity", "(", ")", true, "O", texConstantDefinitions.TexConstant.Variant.CALLIGRAPHIC],
    commutator: "Commutator",
    comm: "Commutator",
    anticommutator: ["Commutator", "\\{", "\\}"],
    acomm: ["Commutator", "\\{", "\\}"],
    poissonbracket: ["Commutator", "\\{", "\\}"],
    pb: ["Commutator", "\\{", "\\}"]
  }, n.default);
  new symbolParseMaps.CharacterMap("Physics-vector-mo", i.default.mathchar0mo, {
    dotproduct: ["⋅", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.BOLD
    }],
    vdot: ["⋅", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.BOLD
    }],
    crossproduct: "×",
    cross: "×",
    cp: "×",
    gradientnabla: ["∇", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.BOLD
    }]
  });
  new symbolParseMaps.CharacterMap("Physics-vector-mi", i.default.mathchar0mi, {
    real: ["ℜ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }],
    imaginary: ["ℑ", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    }]
  });
  new symbolParseMaps.CommandMap("Physics-vector-macros", {
    vnabla: "Vnabla",
    vectorbold: "VectorBold",
    vb: "VectorBold",
    vectorarrow: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
    va: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
    vectorunit: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
    vu: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
    gradient: ["OperatorApplication", "\\vnabla", "(", "["],
    grad: ["OperatorApplication", "\\vnabla", "(", "["],
    divergence: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
    div: ["VectorOperator", "\\vnabla\\vdot", "(", "["],
    curl: ["VectorOperator", "\\vnabla\\crossproduct", "(", "["],
    laplacian: ["OperatorApplication", "\\nabla^2", "(", "["]
  }, n.default);
  new symbolParseMaps.CommandMap("Physics-expressions-macros", {
    sin: "Expression",
    sinh: "Expression",
    arcsin: "Expression",
    asin: "Expression",
    cos: "Expression",
    cosh: "Expression",
    arccos: "Expression",
    acos: "Expression",
    tan: "Expression",
    tanh: "Expression",
    arctan: "Expression",
    atan: "Expression",
    csc: "Expression",
    csch: "Expression",
    arccsc: "Expression",
    acsc: "Expression",
    sec: "Expression",
    sech: "Expression",
    arcsec: "Expression",
    asec: "Expression",
    cot: "Expression",
    coth: "Expression",
    arccot: "Expression",
    acot: "Expression",
    exp: ["Expression", false],
    log: "Expression",
    ln: "Expression",
    det: ["Expression", false],
    Pr: ["Expression", false],
    tr: ["Expression", false],
    trace: ["Expression", false, "tr"],
    Tr: ["Expression", false],
    Trace: ["Expression", false, "Tr"],
    rank: "NamedFn",
    erf: ["Expression", false],
    Residue: ["Macro", "\\mathrm{Res}"],
    Res: ["OperatorApplication", "\\Residue", "(", "[", "{"],
    principalvalue: ["OperatorApplication", "{\\cal P}"],
    pv: ["OperatorApplication", "{\\cal P}"],
    PV: ["OperatorApplication", "{\\rm P.V.}"],
    Re: ["OperatorApplication", "\\mathrm{Re}", "{"],
    Im: ["OperatorApplication", "\\mathrm{Im}", "{"],
    sine: ["NamedFn", "sin"],
    hypsine: ["NamedFn", "sinh"],
    arcsine: ["NamedFn", "arcsin"],
    asine: ["NamedFn", "asin"],
    cosine: ["NamedFn", "cos"],
    hypcosine: ["NamedFn", "cosh"],
    arccosine: ["NamedFn", "arccos"],
    acosine: ["NamedFn", "acos"],
    tangent: ["NamedFn", "tan"],
    hyptangent: ["NamedFn", "tanh"],
    arctangent: ["NamedFn", "arctan"],
    atangent: ["NamedFn", "atan"],
    cosecant: ["NamedFn", "csc"],
    hypcosecant: ["NamedFn", "csch"],
    arccosecant: ["NamedFn", "arccsc"],
    acosecant: ["NamedFn", "acsc"],
    secant: ["NamedFn", "sec"],
    hypsecant: ["NamedFn", "sech"],
    arcsecant: ["NamedFn", "arcsec"],
    asecant: ["NamedFn", "asec"],
    cotangent: ["NamedFn", "cot"],
    hypcotangent: ["NamedFn", "coth"],
    arccotangent: ["NamedFn", "arccot"],
    acotangent: ["NamedFn", "acot"],
    exponential: ["NamedFn", "exp"],
    logarithm: ["NamedFn", "log"],
    naturallogarithm: ["NamedFn", "ln"],
    determinant: ["NamedFn", "det"],
    Probability: ["NamedFn", "Pr"]
  }, n.default);
  new symbolParseMaps.CommandMap("Physics-quick-quad-macros", {
    qqtext: "Qqtext",
    qq: "Qqtext",
    qcomma: ["Macro", "\\qqtext*{,}"],
    qc: ["Macro", "\\qqtext*{,}"],
    qcc: ["Qqtext", "c.c."],
    qif: ["Qqtext", "if"],
    qthen: ["Qqtext", "then"],
    qelse: ["Qqtext", "else"],
    qotherwise: ["Qqtext", "otherwise"],
    qunless: ["Qqtext", "unless"],
    qgiven: ["Qqtext", "given"],
    qusing: ["Qqtext", "using"],
    qassume: ["Qqtext", "assume"],
    qsince: ["Qqtext", "since"],
    qlet: ["Qqtext", "let"],
    qfor: ["Qqtext", "for"],
    qall: ["Qqtext", "all"],
    qeven: ["Qqtext", "even"],
    qodd: ["Qqtext", "odd"],
    qinteger: ["Qqtext", "integer"],
    qand: ["Qqtext", "and"],
    qor: ["Qqtext", "or"],
    qas: ["Qqtext", "as"],
    qin: ["Qqtext", "in"]
  }, n.default);
  new symbolParseMaps.CommandMap("Physics-derivative-macros", {
    diffd: "DiffD",
    flatfrac: ["Macro", "\\left.#1\\middle/#2\\right.", 2],
    differential: ["Differential", "\\diffd"],
    dd: ["Differential", "\\diffd"],
    variation: ["Differential", "\\delta"],
    var: ["Differential", "\\delta"],
    derivative: ["Derivative", 2, "\\diffd"],
    dv: ["Derivative", 2, "\\diffd"],
    partialderivative: ["Derivative", 3, "\\partial"],
    pderivative: ["Derivative", 3, "\\partial"],
    pdv: ["Derivative", 3, "\\partial"],
    functionalderivative: ["Derivative", 2, "\\delta"],
    fderivative: ["Derivative", 2, "\\delta"],
    fdv: ["Derivative", 2, "\\delta"]
  }, n.default);
  new symbolParseMaps.CommandMap("Physics-bra-ket-macros", {
    bra: "Bra",
    ket: "Ket",
    innerproduct: "BraKet",
    ip: "BraKet",
    braket: "BraKet",
    outerproduct: "KetBra",
    dyad: "KetBra",
    ketbra: "KetBra",
    op: "KetBra",
    expectationvalue: "Expectation",
    expval: "Expectation",
    ev: "Expectation",
    matrixelement: "MatrixElement",
    matrixel: "MatrixElement",
    mel: "MatrixElement"
  }, n.default);
  new symbolParseMaps.CommandMap("Physics-matrix-macros", {
    matrixquantity: "MatrixQuantity",
    mqty: "MatrixQuantity",
    pmqty: ["Macro", "\\mqty(#1)", 1],
    Pmqty: ["Macro", "\\mqty*(#1)", 1],
    bmqty: ["Macro", "\\mqty[#1]", 1],
    vmqty: ["Macro", "\\mqty|#1|", 1],
    smallmatrixquantity: ["MatrixQuantity", true],
    smqty: ["MatrixQuantity", true],
    spmqty: ["Macro", "\\smqty(#1)", 1],
    sPmqty: ["Macro", "\\smqty*(#1)", 1],
    sbmqty: ["Macro", "\\smqty[#1]", 1],
    svmqty: ["Macro", "\\smqty|#1|", 1],
    matrixdeterminant: ["Macro", "\\vmqty{#1}", 1],
    mdet: ["Macro", "\\vmqty{#1}", 1],
    smdet: ["Macro", "\\svmqty{#1}", 1],
    identitymatrix: "IdentityMatrix",
    imat: "IdentityMatrix",
    xmatrix: "XMatrix",
    xmat: "XMatrix",
    zeromatrix: ["Macro", "\\xmat{0}{#1}{#2}", 2],
    zmat: ["Macro", "\\xmat{0}{#1}{#2}", 2],
    paulimatrix: "PauliMatrix",
    pmat: "PauliMatrix",
    diagonalmatrix: "DiagonalMatrix",
    dmat: "DiagonalMatrix",
    antidiagonalmatrix: ["DiagonalMatrix", true],
    admat: ["DiagonalMatrix", true]
  }, n.default);
  new symbolParseMaps.EnvironmentMap("Physics-aux-envs", i.default.environment, {
    smallmatrix: ["Array", null, null, null, "c", "0.333em", ".2em", "S", 1]
  }, n.default);
  new symbolParseMaps.MacroMap("Physics-characters", {
    "|": ["AutoClose", mathmlAbstractNodeClasses.TEXCLASS.ORD],
    ")": "AutoClose",
    "]": "AutoClose"
  }, n.default);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}