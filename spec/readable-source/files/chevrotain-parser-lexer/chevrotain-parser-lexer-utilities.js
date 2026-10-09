// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ol' to 'tokenMatcher'
// - Renamed export 'ue' to 'Alternation'
// - Renamed export 'sd' to 'EOF'
// - Renamed export 'Wx' to 'Option'
// - Renamed export 'l$' to 'createToken'
// - Renamed export 'ej' to 'RepetitionMandatory'
// - Renamed export 'pT' to 'Repetition'
// - Renamed export 'oC' to 'buildLookaheadFuncForOr'
// - Renamed export 'nu' to 'EmbeddedActionsParser'
// - Renamed export 'ZW' to 'errorMessageProvider'
// - Renamed export 'hI' to 'RepetitionMandatoryWithSeparator'
// - Renamed export 'Hs' to 'defaultParserErrorProvider'
// - Renamed export 'oI' to 'Alternation_1'
// - Renamed export 'hW' to 'Lexer'
// - Renamed export 'fK' to 'RepetitionWithSeparator'
// - Renamed export '_o' to 'createTokenInstance'
// - Renamed export 'dV' to 'DefaultGrammarValidator'
// - Renamed export 'Sj' to 'NonTerminal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 917158
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var a;
  var s;
  var o;
  var l;
  var u;
  var c;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var pathArrayValidation = require("path-array-validation") /*id: 75446*/;
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  function y(e) {
    function t() {}
    t.prototype = e;
    let r = new t();
    function n() {
      return typeof r.bar;
    }
    n();
    n();
    return e;
  }
  var arraySliceHelper = require("array-slice-helper") /*id: 728245*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  function R(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (n) {
      t = r || t === undefined ? 1 : toIntegerUtil_1.toInteger(t);
      return arraySliceHelper.arraySlice(e, t < 0 ? 0 : t, n);
    } else {
      return [];
    }
  }
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var objectPathFilterUtil = require("object-path-filter-util") /*id: 213469*/;
  var isRegexpCheck = require("is-regexp-check") /*id: 600396*/;
  class x {
    get definition() {
      return this._definition;
    }
    set definition(e) {
      this._definition = e;
    }
    constructor(e) {
      this._definition = e;
    }
    accept(e) {
      e.visit(this);
      arrayObjectForeach.arrayObjectForeach(this.definition, t => {
        t.accept(e);
      });
    }
  }
  class I extends x {
    constructor(e) {
      super([]);
      this.idx = 1;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
    set definition(e) {}
    get definition() {
      if (this.referencedRule !== undefined) {
        return this.referencedRule.definition;
      } else {
        return [];
      }
    }
    accept(e) {
      e.visit(this);
    }
  }
  class S extends x {
    constructor(e) {
      super(e.definition);
      this.orgText = "";
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class C extends x {
    constructor(e) {
      super(e.definition);
      this.ignoreAmbiguities = false;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class N extends x {
    constructor(e) {
      super(e.definition);
      this.idx = 1;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class w extends x {
    constructor(e) {
      super(e.definition);
      this.idx = 1;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class L extends x {
    constructor(e) {
      super(e.definition);
      this.idx = 1;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class b extends x {
    constructor(e) {
      super(e.definition);
      this.idx = 1;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class _ extends x {
    constructor(e) {
      super(e.definition);
      this.idx = 1;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class O extends x {
    get definition() {
      return this._definition;
    }
    set definition(e) {
      this._definition = e;
    }
    constructor(e) {
      super(e.definition);
      this.idx = 1;
      this.ignoreAmbiguities = false;
      this.hasPredicates = false;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
  }
  class P {
    constructor(e) {
      this.idx = 1;
      safePropertyAssignUtil.safePropertyAssign(this, objectPathFilterUtil.filterObjectByPaths(e, e => e !== undefined));
    }
    accept(e) {
      e.visit(this);
    }
  }
  class M {
    visit(e) {
      switch (e.constructor) {
        case I:
          return this.visitNonTerminal(e);
        case C:
          return this.visitAlternative(e);
        case N:
          return this.visitOption(e);
        case w:
          return this.visitRepetitionMandatory(e);
        case L:
          return this.visitRepetitionMandatoryWithSeparator(e);
        case _:
          return this.visitRepetitionWithSeparator(e);
        case b:
          return this.visitRepetition(e);
        case O:
          return this.visitAlternation(e);
        case P:
          return this.visitTerminal(e);
        case S:
          return this.visitRule(e);
        default:
          throw Error("non exhaustive match");
      }
    }
    visitNonTerminal(e) {}
    visitAlternative(e) {}
    visitOption(e) {}
    visitRepetition(e) {}
    visitRepetitionMandatory(e) {}
    visitRepetitionMandatoryWithSeparator(e) {}
    visitRepetitionWithSeparator(e) {}
    visitAlternation(e) {}
    visitTerminal(e) {}
    visitRule(e) {}
  }
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var collectionMatchUtil = require("collection-match-util") /*id: 394199*/;
  function U(e, t = []) {
    return e instanceof N || e instanceof b || e instanceof _ || (e instanceof O ? objectMatchUtil.checkObjectMatch(e.definition, e => U(e, t)) : (!(e instanceof I) || !collectionIncludesUtil.includes(t, e)) && e instanceof x && (e instanceof I && t.push(e), collectionMatchUtil.checkCollectionMatch(e.definition, e => U(e, t))));
  }
  function G(e) {
    if (e instanceof I) {
      return "SUBRULE";
    }
    if (e instanceof N) {
      return "OPTION";
    }
    if (e instanceof O) {
      return "OR";
    }
    if (e instanceof w) {
      return "AT_LEAST_ONE";
    }
    if (e instanceof L) {
      return "AT_LEAST_ONE_SEP";
    } else if (e instanceof _) {
      return "MANY_SEP";
    } else if (e instanceof b) {
      return "MANY";
    } else if (e instanceof P) {
      return "CONSUME";
    } else {
      throw Error("non exhaustive match");
    }
  }
  class B {
    walk(e, t = []) {
      arrayObjectForeach.arrayObjectForeach(e.definition, (r, n) => {
        let i = R(e.definition, n + 1);
        if (r instanceof I) {
          this.walkProdRef(r, i, t);
        } else if (r instanceof P) {
          this.walkTerminal(r, i, t);
        } else if (r instanceof C) {
          this.walkFlat(r, i, t);
        } else if (r instanceof N) {
          this.walkOption(r, i, t);
        } else if (r instanceof w) {
          this.walkAtLeastOne(r, i, t);
        } else if (r instanceof L) {
          this.walkAtLeastOneSep(r, i, t);
        } else if (r instanceof _) {
          this.walkManySep(r, i, t);
        } else if (r instanceof b) {
          this.walkMany(r, i, t);
        } else if (r instanceof O) {
          this.walkOr(r, i, t);
        } else {
          throw Error("non exhaustive match");
        }
      });
    }
    walkTerminal(e, t, r) {}
    walkProdRef(e, t, r) {}
    walkFlat(e, t, r) {
      let n = t.concat(r);
      this.walk(e, n);
    }
    walkOption(e, t, r) {
      let n = t.concat(r);
      this.walk(e, n);
    }
    walkAtLeastOne(e, t, r) {
      let n = [new N({
        definition: e.definition
      })].concat(t, r);
      this.walk(e, n);
    }
    walkAtLeastOneSep(e, t, r) {
      let n = K(e, t, r);
      this.walk(e, n);
    }
    walkMany(e, t, r) {
      let n = [new N({
        definition: e.definition
      })].concat(t, r);
      this.walk(e, n);
    }
    walkManySep(e, t, r) {
      let n = K(e, t, r);
      this.walk(e, n);
    }
    walkOr(e, t, r) {
      let n = t.concat(r);
      arrayObjectForeach.arrayObjectForeach(e.definition, e => {
        let t = new C({
          definition: [e]
        });
        this.walk(t, n);
      });
    }
  }
  function K(e, t, r) {
    return [new N({
      definition: [new P({
        terminalType: e.separator
      })].concat(e.definition)
    })].concat(t, r);
  }
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  function j(e) {
    if (e instanceof I) {
      return j(e.referencedRule);
    }
    if (e instanceof P) {
      return [e.terminalType];
    }
    if (e instanceof C || e instanceof N || e instanceof b || e instanceof w || e instanceof L || e instanceof _ || e instanceof P || e instanceof S) {
      return function (e) {
        let t;
        let r = [];
        let n = e.definition;
        let i = 0;
        let a = n.length > i;
        let s = true;
        while (a && s) {
          s = U(t = n[i]);
          r = r.concat(j(t));
          i += 1;
          a = n.length > i;
        }
        return dataProcessor.processData(r);
      }(e);
    }
    if (e instanceof O) {
      return function (e) {
        let t = collectionMapMatcher.mapWithMatcher(e.definition, e => j(e));
        return dataProcessor.processData(safeArrayFlattenUtil.safeFlattenArray(t));
      }(e);
    }
    throw Error("non exhaustive match");
  }
  let H = "_~IN~_";
  class z extends B {
    constructor(e) {
      super();
      this.topProd = e;
      this.follows = {};
    }
    startWalking() {
      this.walk(this.topProd);
      return this.follows;
    }
    walkTerminal(e, t, r) {}
    walkProdRef(e, t, r) {
      var n;
      var i;
      n = e.referencedRule;
      i = e.idx;
      let a = n.name + i + H + this.topProd.name;
      let s = j(new C({
        definition: t.concat(r)
      }));
      this.follows[a] = s;
    }
  }
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var regexpParserVisitor = require("regexp-parser-visitor") /*id: 582787*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var arrayFilterUtil = require("array-filter-util") /*id: 68536*/;
  var objectFilterUtil = require("object-filter-util") /*id: 560369*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var functionNegateUtil = require("function-negate-util") /*id: 278243*/;
  function en(e, t) {
    return (arrayIsArrayUtil.isArray(e) ? arrayFilterUtil.arrayFilter : objectFilterUtil.objectFilter)(e, functionNegateUtil.negate(objectMatcherFactory.createMatcher(t, 3)));
  }
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var arrayFindIndexNan = require("array-find-index-nan") /*id: 806028*/;
  var es = Math.max;
  function eo(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (!n) {
      return -1;
    }
    var i = r == null ? 0 : toIntegerUtil_1.toInteger(r);
    if (i < 0) {
      i = es(n + i, 0);
    }
    return arrayFindIndexNan.findIndexWithNaN(e, t, i);
  }
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  var arrayCompactUtil = require("array-compact-util") /*id: 571426*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  function em(e) {}
  function eg(e) {}
  let ey = {};
  let eT = new regexpParserVisitor.RegExpParser();
  function ev(e) {
    let t = e.toString();
    if (ey.hasOwnProperty(t)) {
      return ey[t];
    }
    {
      let e = eT.pattern(t);
      ey[t] = e;
      return e;
    }
  }
  let eR = "Complement Sets are not supported for first char optimization";
  let e$ = "Unable to use \"first char\" lexer optimizations:\n";
  function eE(e, t, r) {
    let n = eG(e);
    t[n] = n;
    if (r === true) {
      (function (e, t) {
        let r = String.fromCharCode(e);
        let n = r.toUpperCase();
        if (n !== r) {
          let e = eG(n.charCodeAt(0));
          t[e] = e;
        } else {
          let e = r.toLowerCase();
          if (e !== r) {
            let r = eG(e.charCodeAt(0));
            t[r] = r;
          }
        }
      })(e, t);
    }
  }
  function eA(e, t) {
    return arrayValueFinder.valueFinder(e.value, e => typeof e == "number" ? collectionIncludesUtil.includes(t, e) : arrayValueFinder.valueFinder(t, t => e.from <= t && t <= e.to) !== undefined);
  }
  class ek extends regexpParserVisitor.RegExpVisitor {
    constructor(e) {
      super();
      this.targetCharCodes = e;
      this.found = false;
    }
    visitChildren(e) {
      if (this.found !== true) {
        switch (e.type) {
          case "Lookahead":
            this.visitLookahead(e);
            return;
          case "NegativeLookahead":
            this.visitNegativeLookahead(e);
            return;
        }
        super.visitChildren(e);
      }
    }
    visitCharacter(e) {
      if (collectionIncludesUtil.includes(this.targetCharCodes, e.value)) {
        this.found = true;
      }
    }
    visitSet(e) {
      if (e.complement) {
        if (eA(e, this.targetCharCodes) === undefined) {
          this.found = true;
        }
      } else if (eA(e, this.targetCharCodes) !== undefined) {
        this.found = true;
      }
    }
  }
  function ex(e, t) {
    if (!(t instanceof RegExp)) {
      return arrayValueFinder.valueFinder(t, t => collectionIncludesUtil.includes(e, t.charCodeAt(0))) !== undefined;
    }
    {
      let r = ev(t);
      let n = new ek(e);
      n.visit(r);
      return n.found;
    }
  }
  let eI = "PATTERN";
  let eS = "defaultMode";
  let eC = "modes";
  let eN = typeof RegExp("(?:)").sticky == "boolean";
  let ew = /[^\\][$]/;
  let eL = /[^\\[][\^]|^\^/;
  function eb(e) {
    let t = e.ignoreCase ? "i" : "";
    return RegExp(`^(?:${e.source})`, t);
  }
  function e_(e) {
    let t = e.ignoreCase ? "iy" : "y";
    return RegExp(`${e.source}`, t);
  }
  function eO(e) {
    let t = e.PATTERN;
    if (isRegexpCheck.isRegExp(t)) {
      return false;
    }
    if (isFunctionUtil_1.isFunction(t)) {
      return true;
    }
    if (pathArrayValidation.validatePathArray(t, "exec")) {
      return true;
    }
    if (isStringTypeCheck.isString(t)) {
      return false;
    }
    throw Error("non exhaustive match");
  }
  function eP(e) {
    return !!isStringTypeCheck.isString(e) && e.length === 1 && e.charCodeAt(0);
  }
  let eM = {
    test: function (e) {
      let t = e.length;
      for (let r = this.lastIndex; r < t; r++) {
        let t = e.charCodeAt(r);
        if (t === 10) {
          this.lastIndex = r + 1;
          return true;
        }
        if (t === 13) {
          if (e.charCodeAt(r + 1) === 10) {
            this.lastIndex = r + 2;
          } else {
            this.lastIndex = r + 1;
          }
          return true;
        }
      }
      return false;
    },
    lastIndex: 0
  };
  function eD(e, t) {
    if (pathArrayValidation.validatePathArray(e, "LINE_BREAKS")) {
      return false;
    }
    if (isRegexpCheck.isRegExp(e.PATTERN)) {
      try {
        ex(t, e.PATTERN);
      } catch (e) {
        return {
          issue: o.IDENTIFY_TERMINATOR,
          errMsg: e.message
        };
      }
      return false;
    }
    if (isStringTypeCheck.isString(e.PATTERN)) {
      return false;
    }
    if (eO(e)) {
      return {
        issue: o.CUSTOM_LINE_BREAK
      };
    }
    throw Error("non exhaustive match");
  }
  function eZ(e) {
    return collectionMapMatcher.mapWithMatcher(e, e => isStringTypeCheck.isString(e) ? e.charCodeAt(0) : e);
  }
  function eF(e, t, r) {
    if (e[t] === undefined) {
      e[t] = [r];
    } else {
      e[t].push(r);
    }
  }
  let eU = [];
  function eG(e) {
    if (e < 256) {
      return e;
    } else {
      return eU[e];
    }
  }
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  function eW(e) {
    let t = new Date().getTime();
    let r = e();
    return {
      time: new Date().getTime() - t,
      value: r
    };
  }
  function ej(e, t) {
    let r = e.tokenTypeIdx;
    return r === t.tokenTypeIdx || t.isParent === true && t.categoryMatchesMap[r] === true;
  }
  function eH(e, t) {
    return e.tokenTypeIdx === t.tokenTypeIdx;
  }
  let ez = 1;
  let eY = {};
  function eq(e) {
    var t;
    var r;
    var n;
    let i = function (e) {
      let t = syncedReferenceBlockManager.syncReferenceBlock(e);
      let r = e;
      let n = true;
      while (n) {
        r = arrayCompactUtil.compactArray(safeArrayFlattenUtil.safeFlattenArray(collectionMapMatcher.mapWithMatcher(r, e => e.CATEGORIES)));
        let e = throttledArrayDiffUtil.throttledArrayDiff(r, t);
        t = t.concat(e);
        if (isEmptyUtil.isEmpty(e)) {
          n = false;
        } else {
          r = e;
        }
      }
      return t;
    }(e);
    t = i;
    arrayObjectForeach.arrayObjectForeach(t, e => {
      var t;
      var r;
      if (!eX(e)) {
        eY[ez] = e;
        e.tokenTypeIdx = ez++;
      }
      if (eQ(e) && !arrayIsArrayUtil.isArray(e.CATEGORIES)) {
        e.CATEGORIES = [e.CATEGORIES];
      }
      if (!eQ(e)) {
        e.CATEGORIES = [];
      }
      t = e;
      if (!pathArrayValidation.validatePathArray(t, "categoryMatches")) {
        e.categoryMatches = [];
      }
      r = e;
      if (!pathArrayValidation.validatePathArray(r, "categoryMatchesMap")) {
        e.categoryMatchesMap = {};
      }
    });
    r = i;
    arrayObjectForeach.arrayObjectForeach(r, e => {
      (function e(t, r) {
        arrayObjectForeach.arrayObjectForeach(t, e => {
          r.categoryMatchesMap[e.tokenTypeIdx] = true;
        });
        arrayObjectForeach.arrayObjectForeach(r.CATEGORIES, n => {
          let i = t.concat(r);
          if (!collectionIncludesUtil.includes(i, n)) {
            e(i, n);
          }
        });
      })([], e);
    });
    n = i;
    arrayObjectForeach.arrayObjectForeach(n, e => {
      e.categoryMatches = [];
      arrayObjectForeach.arrayObjectForeach(e.categoryMatchesMap, (t, r) => {
        e.categoryMatches.push(eY[r].tokenTypeIdx);
      });
    });
    arrayObjectForeach.arrayObjectForeach(i, e => {
      e.isParent = e.categoryMatches.length > 0;
    });
  }
  function eX(e) {
    return pathArrayValidation.validatePathArray(e, "tokenTypeIdx");
  }
  function eQ(e) {
    return pathArrayValidation.validatePathArray(e, "CATEGORIES");
  }
  function eJ(e) {
    return pathArrayValidation.validatePathArray(e, "tokenTypeIdx");
  }
  let e0 = {
    buildUnableToPopLexerModeMessage: e => `Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`,
    buildUnexpectedCharactersMessage: (e, t, r, n, i) => `unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${r} characters.`
  };
  (n = o ||= {})[n.MISSING_PATTERN = 0] = "MISSING_PATTERN";
  n[n.INVALID_PATTERN = 1] = "INVALID_PATTERN";
  n[n.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND";
  n[n.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND";
  n[n.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND";
  n[n.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND";
  n[n.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST";
  n[n.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
  n[n.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
  n[n.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
  n[n.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
  n[n.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND";
  n[n.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN";
  n[n.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS";
  n[n.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN";
  n[n.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR";
  n[n.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK";
  n[n.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
  let e1 = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: ["\n", "\r"],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: e0,
    traceInitPerf: false,
    skipValidations: false,
    recoveryEnabled: true
  };
  Object.freeze(e1);
  class e2 {
    constructor(e, t = e1) {
      this.lexerDefinition = e;
      this.lexerDefinitionErrors = [];
      this.lexerDefinitionWarning = [];
      this.patternIdxToConfig = {};
      this.charCodeToPatternIdxToConfig = {};
      this.modes = [];
      this.emptyGroups = {};
      this.trackStartLines = true;
      this.trackEndLines = true;
      this.hasCustom = false;
      this.canModeBeOptimized = {};
      this.TRACE_INIT = (e, t) => {
        if (this.traceInitPerf !== true) {
          return t();
        }
        {
          this.traceInitIndent++;
          let r = Array(this.traceInitIndent + 1).join("\t");
          this.traceInitIndent;
          this.traceInitMaxIdent;
          let {
            time: n,
            value: i
          } = eW(t);
          let a = n > 10 ? console.warn : console.log;
          if (this.traceInitIndent < this.traceInitMaxIdent) {
            a(`${r}<-- <${e}> time: ${n}ms`);
          }
          this.traceInitIndent--;
          return i;
        }
      };
      if (typeof t == "boolean") {
        throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
      }
      this.config = safePropertyAssignUtil.safePropertyAssign({}, e1, t);
      let r = this.config.traceInitPerf;
      if (r === true) {
        this.traceInitMaxIdent = Infinity;
        this.traceInitPerf = true;
      } else if (typeof r == "number") {
        this.traceInitMaxIdent = r;
        this.traceInitPerf = true;
      }
      this.traceInitIndent = -1;
      this.TRACE_INIT("Lexer Constructor", () => {
        let r;
        let n = true;
        this.TRACE_INIT("Lexer Config handling", () => {
          if (this.config.lineTerminatorsPattern === e1.lineTerminatorsPattern) {
            this.config.lineTerminatorsPattern = eM;
          } else if (this.config.lineTerminatorCharacters === e1.lineTerminatorCharacters) {
            throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
          }
          if (t.safeMode && t.ensureOptimizations) {
            throw Error("\"safeMode\" and \"ensureOptimizations\" flags are mutually exclusive.");
          }
          this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
          this.trackEndLines = /full/i.test(this.config.positionTracking);
          if (arrayIsArrayUtil.isArray(e)) {
            r = {
              modes: {
                defaultMode: syncedReferenceBlockManager.syncReferenceBlock(e)
              },
              defaultMode: eS
            };
          } else {
            n = false;
            r = syncedReferenceBlockManager.syncReferenceBlock(e);
          }
        });
        if (this.config.skipValidations === false) {
          this.TRACE_INIT("performRuntimeChecks", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(function (e, t, r) {
              let n = [];
              if (!pathArrayValidation.validatePathArray(e, eS)) {
                n.push({
                  message: "A MultiMode Lexer cannot be initialized without a <" + eS + "> property in its definition\n",
                  type: o.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
                });
              }
              if (!pathArrayValidation.validatePathArray(e, eC)) {
                n.push({
                  message: "A MultiMode Lexer cannot be initialized without a <" + eC + "> property in its definition\n",
                  type: o.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
                });
              }
              if (pathArrayValidation.validatePathArray(e, eC) && pathArrayValidation.validatePathArray(e, eS) && !pathArrayValidation.validatePathArray(e.modes, e.defaultMode)) {
                n.push({
                  message: `A MultiMode Lexer cannot be initialized with a ${eS}: <${e.defaultMode}>which does not exist
`,
                  type: o.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
                });
              }
              if (pathArrayValidation.validatePathArray(e, eC)) {
                arrayObjectForeach.arrayObjectForeach(e.modes, (e, t) => {
                  arrayObjectForeach.arrayObjectForeach(e, (r, i) => {
                    if (isUndefinedCheck.isUndefined(r)) {
                      n.push({
                        message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${t}> at index: <${i}>
`,
                        type: o.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
                      });
                    } else if (pathArrayValidation.validatePathArray(r, "LONGER_ALT")) {
                      let i = arrayIsArrayUtil.isArray(r.LONGER_ALT) ? r.LONGER_ALT : [r.LONGER_ALT];
                      arrayObjectForeach.arrayObjectForeach(i, i => {
                        if (!isUndefinedCheck.isUndefined(i) && !collectionIncludesUtil.includes(e, i)) {
                          n.push({
                            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${i.name}> on token <${r.name}> outside of mode <${t}>
`,
                            type: o.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
                          });
                        }
                      });
                    }
                  });
                });
              }
              return n;
            }(r, this.trackStartLines, this.config.lineTerminatorCharacters));
          });
          this.TRACE_INIT("performWarningRuntimeChecks", () => {
            this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(function (e, t, r) {
              let n = [];
              let i = false;
              let a = en(arrayCompactUtil.compactArray(safeArrayFlattenUtil.safeFlattenArray(objectValuesHelper.getObjectValues(e.modes))), e => e[eI] === e2.NA);
              let s = eZ(r);
              if (t) {
                arrayObjectForeach.arrayObjectForeach(a, e => {
                  let t = eD(e, s);
                  if (t !== false) {
                    let r = {
                      message: function (e, t) {
                        if (t.issue === o.IDENTIFY_TERMINATOR) {
                          return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e.name}> Token Type
	 Root cause: ${t.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
                        }
                        if (t.issue === o.CUSTOM_LINE_BREAK) {
                          return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
                        }
                        throw Error("non exhaustive match");
                      }(e, t),
                      type: t.issue,
                      tokenType: e
                    };
                    n.push(r);
                  } else if (pathArrayValidation.validatePathArray(e, "LINE_BREAKS")) {
                    if (e.LINE_BREAKS === true) {
                      i = true;
                    }
                  } else if (ex(s, e.PATTERN)) {
                    i = true;
                  }
                });
              }
              if (t && !i) {
                n.push({
                  message: "Warning: No LINE_BREAKS Found.\n\tThis Lexer has been defined to track line and column information,\n\tBut none of the Token Types can be identified as matching a line terminator.\n\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n\tfor details.",
                  type: o.NO_LINE_BREAKS_FLAGS
                });
              }
              return n;
            }(r, this.trackStartLines, this.config.lineTerminatorCharacters));
          });
        }
        r.modes = r.modes ? r.modes : {};
        arrayObjectForeach.arrayObjectForeach(r.modes, (e, t) => {
          r.modes[t] = en(e, e => isUndefinedCheck.isUndefined(e));
        });
        let i = getOwnKeys.getOwnKeys(r.modes);
        arrayObjectForeach.arrayObjectForeach(r.modes, (e, r) => {
          this.TRACE_INIT(`Mode: <${r}> processing`, () => {
            this.modes.push(r);
            if (this.config.skipValidations === false) {
              this.TRACE_INIT("validatePatterns", () => {
                this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(function (e, t) {
                  let r = [];
                  let n = function (e) {
                    let t = genericFilterUtil.genericFilter(e, e => !pathArrayValidation.validatePathArray(e, eI));
                    return {
                      errors: collectionMapMatcher.mapWithMatcher(t, e => ({
                        message: "Token Type: ->" + e.name + "<- missing static 'PATTERN' property",
                        type: o.MISSING_PATTERN,
                        tokenTypes: [e]
                      })),
                      valid: throttledArrayDiffUtil.throttledArrayDiff(e, t)
                    };
                  }(e);
                  r = r.concat(n.errors);
                  let i = function (e) {
                    let t = genericFilterUtil.genericFilter(e, e => {
                      let t = e[eI];
                      return !isRegexpCheck.isRegExp(t) && !isFunctionUtil_1.isFunction(t) && !pathArrayValidation.validatePathArray(t, "exec") && !isStringTypeCheck.isString(t);
                    });
                    return {
                      errors: collectionMapMatcher.mapWithMatcher(t, e => ({
                        message: "Token Type: ->" + e.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
                        type: o.INVALID_PATTERN,
                        tokenTypes: [e]
                      })),
                      valid: throttledArrayDiffUtil.throttledArrayDiff(e, t)
                    };
                  }(n.valid);
                  let a = i.valid;
                  return (r = (r = (r = (r = r.concat(i.errors)).concat(function (e) {
                    let t = [];
                    let r = genericFilterUtil.genericFilter(e, e => isRegexpCheck.isRegExp(e[eI]));
                    return (t = (t = (t = (t = t.concat(function (e) {
                      class t extends regexpParserVisitor.RegExpVisitor {
                        constructor() {
                          super(...arguments);
                          this.found = false;
                        }
                        visitEndAnchor(e) {
                          this.found = true;
                        }
                      }
                      let r = genericFilterUtil.genericFilter(e, e => {
                        let r = e.PATTERN;
                        try {
                          let e = ev(r);
                          let n = new t();
                          n.visit(e);
                          return n.found;
                        } catch (e) {
                          return ew.test(r.source);
                        }
                      });
                      return collectionMapMatcher.mapWithMatcher(r, e => ({
                        message: "Unexpected RegExp Anchor Error:\n\tToken Type: ->" + e.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n\tSee chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS\tfor details.",
                        type: o.EOI_ANCHOR_FOUND,
                        tokenTypes: [e]
                      }));
                    }(r))).concat(function (e) {
                      class t extends regexpParserVisitor.RegExpVisitor {
                        constructor() {
                          super(...arguments);
                          this.found = false;
                        }
                        visitStartAnchor(e) {
                          this.found = true;
                        }
                      }
                      let r = genericFilterUtil.genericFilter(e, e => {
                        let r = e.PATTERN;
                        try {
                          let e = ev(r);
                          let n = new t();
                          n.visit(e);
                          return n.found;
                        } catch (e) {
                          return eL.test(r.source);
                        }
                      });
                      return collectionMapMatcher.mapWithMatcher(r, e => ({
                        message: "Unexpected RegExp Anchor Error:\n\tToken Type: ->" + e.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS\tfor details.",
                        type: o.SOI_ANCHOR_FOUND,
                        tokenTypes: [e]
                      }));
                    }(r))).concat(function (e) {
                      let t = genericFilterUtil.genericFilter(e, e => {
                        let t = e[eI];
                        return t instanceof RegExp && (t.multiline || t.global);
                      });
                      return collectionMapMatcher.mapWithMatcher(t, e => ({
                        message: "Token Type: ->" + e.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
                        type: o.UNSUPPORTED_FLAGS_FOUND,
                        tokenTypes: [e]
                      }));
                    }(r))).concat(function (e) {
                      let t = [];
                      let r = collectionMapMatcher.mapWithMatcher(e, r => genericReduceUtil.genericReduce(e, (e, n) => {
                        if (r.PATTERN.source === n.PATTERN.source && !collectionIncludesUtil.includes(t, n) && n.PATTERN !== e2.NA) {
                          t.push(n);
                          e.push(n);
                        }
                        return e;
                      }, []));
                      r = arrayCompactUtil.compactArray(r);
                      let n = genericFilterUtil.genericFilter(r, e => e.length > 1);
                      return collectionMapMatcher.mapWithMatcher(n, e => {
                        let t = collectionMapMatcher.mapWithMatcher(e, e => e.name);
                        let r = arrayFirstElement.getFirstElement(e).PATTERN;
                        return {
                          message: `The same RegExp pattern ->${r}<-has been used in all of the following Token Types: ${t.join(", ")} <-`,
                          type: o.DUPLICATE_PATTERNS_FOUND,
                          tokenTypes: e
                        };
                      });
                    }(r))).concat(function (e) {
                      let t = genericFilterUtil.genericFilter(e, e => e.PATTERN.test(""));
                      return collectionMapMatcher.mapWithMatcher(t, e => ({
                        message: "Token Type: ->" + e.name + "<- static 'PATTERN' must not match an empty string",
                        type: o.EMPTY_MATCH_PATTERN,
                        tokenTypes: [e]
                      }));
                    }(r));
                  }(a))).concat(function (e) {
                    let t = genericFilterUtil.genericFilter(e, e => {
                      if (!pathArrayValidation.validatePathArray(e, "GROUP")) {
                        return false;
                      }
                      let t = e.GROUP;
                      return t !== e2.SKIPPED && t !== e2.NA && !isStringTypeCheck.isString(t);
                    });
                    return collectionMapMatcher.mapWithMatcher(t, e => ({
                      message: "Token Type: ->" + e.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
                      type: o.INVALID_GROUP_TYPE_FOUND,
                      tokenTypes: [e]
                    }));
                  }(a))).concat(function (e, t) {
                    let r = genericFilterUtil.genericFilter(e, e => e.PUSH_MODE !== undefined && !collectionIncludesUtil.includes(t, e.PUSH_MODE));
                    return collectionMapMatcher.mapWithMatcher(r, e => ({
                      message: `Token Type: ->${e.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${e.PUSH_MODE}<-which does not exist`,
                      type: o.PUSH_MODE_DOES_NOT_EXIST,
                      tokenTypes: [e]
                    }));
                  }(a, t))).concat(function (e) {
                    let t = [];
                    let r = genericReduceUtil.genericReduce(e, (e, t, r) => {
                      var n;
                      let i = t.PATTERN;
                      if (i !== e2.NA) {
                        if (isStringTypeCheck.isString(i)) {
                          e.push({
                            str: i,
                            idx: r,
                            tokenType: t
                          });
                        } else if (isRegexpCheck.isRegExp(i) && (n = i, arrayValueFinder.valueFinder([".", "\\", "[", "]", "|", "^", "$", "(", ")", "?", "*", "+", "{"], e => n.source.indexOf(e) !== -1) === undefined)) {
                          e.push({
                            str: i.source,
                            idx: r,
                            tokenType: t
                          });
                        }
                      }
                      return e;
                    }, []);
                    arrayObjectForeach.arrayObjectForeach(e, (e, n) => {
                      arrayObjectForeach.arrayObjectForeach(r, ({
                        str: r,
                        idx: i,
                        tokenType: a
                      }) => {
                        if (n < i && function (e, t) {
                          if (isRegexpCheck.isRegExp(t)) {
                            let r = t.exec(e);
                            return r !== null && r.index === 0;
                          }
                          if (isFunctionUtil_1.isFunction(t)) {
                            return t(e, 0, [], {});
                          }
                          if (pathArrayValidation.validatePathArray(t, "exec")) {
                            return t.exec(e, 0, [], {});
                          }
                          if (typeof t == "string") {
                            return t === e;
                          }
                          throw Error("non exhaustive match");
                        }(r, e.PATTERN)) {
                          let r = `Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${e.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
                          t.push({
                            message: r,
                            type: o.UNREACHABLE_PATTERN,
                            tokenTypes: [e, a]
                          });
                        }
                      });
                    });
                    return t;
                  }(a));
                }(e, i));
              });
            }
            if (isEmptyUtil.isEmpty(this.lexerDefinitionErrors)) {
              let n;
              eq(e);
              this.TRACE_INIT("analyzeTokenTypes", () => {
                n = function (e, t) {
                  let r;
                  let n;
                  let i;
                  let a;
                  let s;
                  let o;
                  let l;
                  let u;
                  let c;
                  let g;
                  let y;
                  let T;
                  let v = (t = objectDefaultsUtil.defaults(t, {
                    useSticky: eN,
                    debug: false,
                    safeMode: false,
                    positionTracking: "full",
                    lineTerminatorCharacters: ["\r", "\n"],
                    tracer: (e, t) => t()
                  })).tracer;
                  v("initCharCodeToOptimizedIndexMap", () => {
                    (function () {
                      if (isEmptyUtil.isEmpty(eU)) {
                        eU = Array(65536);
                        for (let e = 0; e < 65536; e++) {
                          eU[e] = e > 255 ? 255 + ~~(e / 255) : e;
                        }
                      }
                    })();
                  });
                  v("Reject Lexer.NA", () => {
                    r = en(e, e => e[eI] === e2.NA);
                  });
                  let R = false;
                  v("Transform Patterns", () => {
                    R = false;
                    n = collectionMapMatcher.mapWithMatcher(r, e => {
                      let r = e[eI];
                      if (isRegexpCheck.isRegExp(r)) {
                        let e = r.source;
                        if (e.length !== 1 || e === "^" || e === "$" || e === "." || r.ignoreCase) {
                          if (e.length !== 2 || e[0] !== "\\" || collectionIncludesUtil.includes(["d", "D", "s", "S", "t", "r", "n", "t", "0", "c", "b", "B", "f", "v", "w", "W"], e[1])) {
                            if (t.useSticky) {
                              return e_(r);
                            } else {
                              return eb(r);
                            }
                          } else {
                            return e[1];
                          }
                        } else {
                          return e;
                        }
                      }
                      if (isFunctionUtil_1.isFunction(r)) {
                        R = true;
                        return {
                          exec: r
                        };
                      }
                      if (typeof r == "object") {
                        R = true;
                        return r;
                      }
                      if (typeof r == "string") {
                        if (r.length === 1) {
                          return r;
                        }
                        {
                          let e = new RegExp(r.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"));
                          if (t.useSticky) {
                            return e_(e);
                          } else {
                            return eb(e);
                          }
                        }
                      }
                      throw Error("non exhaustive match");
                    });
                  });
                  v("misc mapping", () => {
                    i = collectionMapMatcher.mapWithMatcher(r, e => e.tokenTypeIdx);
                    a = collectionMapMatcher.mapWithMatcher(r, e => {
                      let t = e.GROUP;
                      if (t !== e2.SKIPPED) {
                        if (isStringTypeCheck.isString(t)) {
                          return t;
                        }
                        if (isUndefinedCheck.isUndefined(t)) {
                          return false;
                        }
                        throw Error("non exhaustive match");
                      }
                    });
                    s = collectionMapMatcher.mapWithMatcher(r, e => {
                      let t = e.LONGER_ALT;
                      if (t) {
                        if (arrayIsArrayUtil.isArray(t)) {
                          return collectionMapMatcher.mapWithMatcher(t, e => eo(r, e));
                        } else {
                          return [eo(r, t)];
                        }
                      }
                    });
                    o = collectionMapMatcher.mapWithMatcher(r, e => e.PUSH_MODE);
                    l = collectionMapMatcher.mapWithMatcher(r, e => pathArrayValidation.validatePathArray(e, "POP_MODE"));
                  });
                  v("Line Terminator Handling", () => {
                    let e = eZ(t.lineTerminatorCharacters);
                    u = collectionMapMatcher.mapWithMatcher(r, e => false);
                    if (t.positionTracking !== "onlyOffset") {
                      u = collectionMapMatcher.mapWithMatcher(r, t => pathArrayValidation.validatePathArray(t, "LINE_BREAKS") ? !!t.LINE_BREAKS : eD(t, e) === false && ex(e, t.PATTERN));
                    }
                  });
                  v("Misc Mapping #2", () => {
                    c = collectionMapMatcher.mapWithMatcher(r, eO);
                    g = collectionMapMatcher.mapWithMatcher(n, eP);
                    y = genericReduceUtil.genericReduce(r, (e, t) => {
                      let r = t.GROUP;
                      if (isStringTypeCheck.isString(r) && r !== e2.SKIPPED) {
                        e[r] = [];
                      }
                      return e;
                    }, {});
                    T = collectionMapMatcher.mapWithMatcher(n, (e, t) => ({
                      pattern: n[t],
                      longerAlt: s[t],
                      canLineTerminator: u[t],
                      isCustom: c[t],
                      short: g[t],
                      group: a[t],
                      push: o[t],
                      pop: l[t],
                      tokenTypeIdx: i[t],
                      tokenType: r[t]
                    }));
                  });
                  let E = true;
                  let A = [];
                  if (!t.safeMode) {
                    v("First Char Optimization", () => {
                      A = genericReduceUtil.genericReduce(r, (e, r, n) => {
                        var i;
                        var a;
                        if (typeof r.PATTERN == "string") {
                          eF(e, eG(r.PATTERN.charCodeAt(0)), T[n]);
                        } else if (arrayIsArrayUtil.isArray(r.START_CHARS_HINT)) {
                          let t;
                          arrayObjectForeach.arrayObjectForeach(r.START_CHARS_HINT, r => {
                            let i = eG(typeof r == "string" ? r.charCodeAt(0) : r);
                            if (t !== i) {
                              t = i;
                              eF(e, i, T[n]);
                            }
                          });
                        } else if (isRegexpCheck.isRegExp(r.PATTERN)) {
                          if (r.PATTERN.unicode) {
                            E = false;
                            if (t.ensureOptimizations) {
                              i = `${e$}	Unable to analyze < ${r.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`;
                            }
                          } else {
                            let i = function (e, t = false) {
                              try {
                                let t = ev(e);
                                return function e(t, r, n) {
                                  switch (t.type) {
                                    case "Disjunction":
                                      for (let i = 0; i < t.value.length; i++) {
                                        e(t.value[i], r, n);
                                      }
                                      break;
                                    case "Alternative":
                                      let i = t.value;
                                      for (let t = 0; t < i.length; t++) {
                                        let a = i[t];
                                        switch (a.type) {
                                          case "EndAnchor":
                                          case "GroupBackReference":
                                          case "Lookahead":
                                          case "NegativeLookahead":
                                          case "StartAnchor":
                                          case "WordBoundary":
                                          case "NonWordBoundary":
                                            continue;
                                        }
                                        switch (a.type) {
                                          case "Character":
                                            eE(a.value, r, n);
                                            break;
                                          case "Set":
                                            if (a.complement === true) {
                                              throw Error(eR);
                                            }
                                            arrayObjectForeach.arrayObjectForeach(a.value, e => {
                                              if (typeof e == "number") {
                                                eE(e, r, n);
                                              } else if (n === true) {
                                                for (let t = e.from; t <= e.to; t++) {
                                                  eE(t, r, n);
                                                }
                                              } else {
                                                for (let t = e.from; t <= e.to && t < 256; t++) {
                                                  eE(t, r, n);
                                                }
                                                if (e.to >= 256) {
                                                  let t = e.from >= 256 ? e.from : 256;
                                                  let n = e.to;
                                                  let i = eG(t);
                                                  let a = eG(n);
                                                  for (let e = i; e <= a; e++) {
                                                    r[e] = e;
                                                  }
                                                }
                                              }
                                            });
                                            break;
                                          case "Group":
                                            e(a.value, r, n);
                                            break;
                                          default:
                                            throw Error("Non Exhaustive Match");
                                        }
                                        let s = a.quantifier !== undefined && a.quantifier.atLeast === 0;
                                        if (a.type === "Group" && function e(t) {
                                          let r = t.quantifier;
                                          return !!r && r.atLeast === 0 || !!t.value && (arrayIsArrayUtil.isArray(t.value) ? collectionMatchUtil.checkCollectionMatch(t.value, e) : e(t.value));
                                        }(a) === false || a.type !== "Group" && s === false) {
                                          break;
                                        }
                                      }
                                      break;
                                    default:
                                      throw Error("non exhaustive match!");
                                  }
                                  return objectValuesHelper.getObjectValues(r);
                                }(t.value, {}, t.flags.ignoreCase);
                              } catch (i) {
                                var r;
                                var n;
                                if (i.message === eR) {
                                  if (t) {
                                    r = `${e$}	Unable to optimize: < ${e.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`;
                                  }
                                } else {
                                  let r = "";
                                  if (t) {
                                    r = "\n\tThis will disable the lexer's first char optimizations.\n\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
                                  }
                                  n = `${e$}
	Failed parsing: < ${e.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`;
                                }
                              }
                              return [];
                            }(r.PATTERN, t.ensureOptimizations);
                            if (isEmptyUtil.isEmpty(i)) {
                              E = false;
                            }
                            arrayObjectForeach.arrayObjectForeach(i, t => {
                              eF(e, t, T[n]);
                            });
                          }
                        } else {
                          if (t.ensureOptimizations) {
                            a = `${e$}	TokenType: <${r.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`;
                          }
                          E = false;
                        }
                        return e;
                      }, []);
                    });
                  }
                  return {
                    emptyGroups: y,
                    patternIdxToConfig: T,
                    charCodeToPatternIdxToConfig: A,
                    hasCustom: R,
                    canBeOptimized: E
                  };
                }(e, {
                  lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                  positionTracking: t.positionTracking,
                  ensureOptimizations: t.ensureOptimizations,
                  safeMode: t.safeMode,
                  tracer: this.TRACE_INIT
                });
              });
              this.patternIdxToConfig[r] = n.patternIdxToConfig;
              this.charCodeToPatternIdxToConfig[r] = n.charCodeToPatternIdxToConfig;
              this.emptyGroups = safePropertyAssignUtil.safePropertyAssign({}, this.emptyGroups, n.emptyGroups);
              this.hasCustom = n.hasCustom || this.hasCustom;
              this.canModeBeOptimized[r] = n.canBeOptimized;
            }
          });
        });
        this.defaultMode = r.defaultMode;
        if (!isEmptyUtil.isEmpty(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
          throw Error("Errors detected in definition of Lexer:\n" + collectionMapMatcher.mapWithMatcher(this.lexerDefinitionErrors, e => e.message).join("-----------------------\n"));
        }
        arrayObjectForeach.arrayObjectForeach(this.lexerDefinitionWarning, e => {
          var t;
          t = e.message;
        });
        this.TRACE_INIT("Choosing sub-methods implementations", () => {
          if (eN) {
            this.chopInput = identityFunctionUtil_1.identity;
            this.match = this.matchWithTest;
          } else {
            this.updateLastIndex = emptyExportFunction.emptyFunction;
            this.match = this.matchWithExec;
          }
          if (n) {
            this.handleModes = emptyExportFunction.emptyFunction;
          }
          if (this.trackStartLines === false) {
            this.computeNewColumn = identityFunctionUtil_1.identity;
          }
          if (this.trackEndLines === false) {
            this.updateTokenEndLineColumnLocation = emptyExportFunction.emptyFunction;
          }
          if (/full/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createFullToken;
          } else if (/onlyStart/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createStartOnlyToken;
          } else if (/onlyOffset/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createOffsetOnlyToken;
          } else {
            throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
          }
          if (this.hasCustom) {
            this.addToken = this.addTokenUsingPush;
            this.handlePayload = this.handlePayloadWithCustom;
          } else {
            this.addToken = this.addTokenUsingMemberAccess;
            this.handlePayload = this.handlePayloadNoCustom;
          }
        });
        this.TRACE_INIT("Failed Optimization Warnings", () => {
          let e = genericReduceUtil.genericReduce(this.canModeBeOptimized, (e, t, r) => {
            if (t === false) {
              e.push(r);
            }
            return e;
          }, []);
          if (t.ensureOptimizations && !isEmptyUtil.isEmpty(e)) {
            throw Error(`Lexer Modes: < ${e.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
          }
        });
        this.TRACE_INIT("clearRegExpParserCache", () => {
          ey = {};
        });
        this.TRACE_INIT("toFastProperties", () => {
          y(this);
        });
      });
    }
    tokenize(e, t = this.defaultMode) {
      if (!isEmptyUtil.isEmpty(this.lexerDefinitionErrors)) {
        throw Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + collectionMapMatcher.mapWithMatcher(this.lexerDefinitionErrors, e => e.message).join("-----------------------\n"));
      }
      return this.tokenizeInternal(e, t);
    }
    tokenizeInternal(e, t) {
      let r;
      let n;
      let i;
      let a;
      let s;
      let o;
      let l;
      let u;
      let c;
      let h;
      let f;
      let p;
      let m;
      let g;
      let y;
      let T;
      let v;
      let R = e;
      let $ = R.length;
      let E = 0;
      let A = 0;
      let k = Array(this.hasCustom ? 0 : Math.floor(e.length / 10));
      let x = [];
      let I = this.trackStartLines ? 1 : undefined;
      let S = this.trackStartLines ? 1 : undefined;
      let C = function (e) {
        let t = {};
        let r = getOwnKeys.getOwnKeys(e);
        arrayObjectForeach.arrayObjectForeach(r, r => {
          let n = e[r];
          if (arrayIsArrayUtil.isArray(n)) {
            t[r] = [];
          } else {
            throw Error("non exhaustive match");
          }
        });
        return t;
      }(this.emptyGroups);
      let N = this.trackStartLines;
      let w = this.config.lineTerminatorsPattern;
      let L = 0;
      let b = [];
      let _ = [];
      let O = [];
      let P = [];
      function M() {
        return b;
      }
      function D(e) {
        let t = _[eG(e)];
        if (t === undefined) {
          return P;
        } else {
          return t;
        }
      }
      Object.freeze(P);
      let Z = e => {
        if (O.length === 1 && e.tokenType.PUSH_MODE === undefined) {
          let t = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(e);
          x.push({
            offset: e.startOffset,
            line: e.startLine,
            column: e.startColumn,
            length: e.image.length,
            message: t
          });
        } else {
          O.pop();
          let e = lastElementHelper.getLastElement(O);
          b = this.patternIdxToConfig[e];
          _ = this.charCodeToPatternIdxToConfig[e];
          L = b.length;
          let t = this.canModeBeOptimized[e] && this.config.safeMode === false;
          T = _ && t ? D : M;
        }
      };
      function F(e) {
        O.push(e);
        _ = this.charCodeToPatternIdxToConfig[e];
        L = (b = this.patternIdxToConfig[e]).length;
        L = b.length;
        let t = this.canModeBeOptimized[e] && this.config.safeMode === false;
        T = _ && t ? D : M;
      }
      F.call(this, t);
      let U = this.config.recoveryEnabled;
      while (E < $) {
        o = null;
        let t = R.charCodeAt(E);
        let d = T(t);
        let _ = d.length;
        for (r = 0; r < _; r++) {
          let n = (v = d[r]).pattern;
          l = null;
          let c = v.short;
          if (c !== false) {
            if (t === c) {
              o = n;
            }
          } else if (v.isCustom === true) {
            if ((y = n.exec(R, E, k, C)) !== null) {
              o = y[0];
              if (y.payload !== undefined) {
                l = y.payload;
              }
            } else {
              o = null;
            }
          } else {
            this.updateLastIndex(n, E);
            o = this.match(n, e, E);
          }
          if (o !== null) {
            if ((s = v.longerAlt) !== undefined) {
              let t = s.length;
              for (i = 0; i < t; i++) {
                let t = b[s[i]];
                let r = t.pattern;
                u = null;
                if (t.isCustom === true) {
                  if ((y = r.exec(R, E, k, C)) !== null) {
                    a = y[0];
                    if (y.payload !== undefined) {
                      u = y.payload;
                    }
                  } else {
                    a = null;
                  }
                } else {
                  this.updateLastIndex(r, E);
                  a = this.match(r, e, E);
                }
                if (a && a.length > o.length) {
                  o = a;
                  l = u;
                  v = t;
                  break;
                }
              }
            }
            break;
          }
        }
        if (o !== null) {
          c = o.length;
          if ((h = v.group) !== undefined) {
            f = v.tokenTypeIdx;
            p = this.createTokenInstance(o, E, f, v.tokenType, I, S, c);
            this.handlePayload(p, l);
            if (h === false) {
              A = this.addToken(k, A, p);
            } else {
              C[h].push(p);
            }
          }
          e = this.chopInput(e, c);
          E += c;
          S = this.computeNewColumn(S, c);
          if (N === true && v.canLineTerminator === true) {
            let e;
            let t;
            let r = 0;
            w.lastIndex = 0;
            do {
              if ((e = w.test(o)) === true) {
                t = w.lastIndex - 1;
                r++;
              }
            } while (e === true);
            if (r !== 0) {
              I += r;
              S = c - t;
              this.updateTokenEndLineColumnLocation(p, h, t, r, I, S, c);
            }
          }
          this.handleModes(v, Z, F, p);
        } else {
          let t = E;
          let r = I;
          let i = S;
          let a = U === false;
          while (a === false && E < $) {
            e = this.chopInput(e, 1);
            E++;
            n = 0;
            for (; n < L; n++) {
              let t = b[n];
              let r = t.pattern;
              let i = t.short;
              if (i !== false) {
                if (R.charCodeAt(E) === i) {
                  a = true;
                }
              } else if (t.isCustom === true) {
                a = r.exec(R, E, k, C) !== null;
              } else {
                this.updateLastIndex(r, E);
                a = r.exec(e) !== null;
              }
              if (a === true) {
                break;
              }
            }
          }
          m = E - t;
          S = this.computeNewColumn(S, m);
          g = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(R, t, m, r, i);
          x.push({
            offset: t,
            line: r,
            column: i,
            length: m,
            message: g
          });
          if (U === false) {
            break;
          }
        }
      }
      if (!this.hasCustom) {
        k.length = A;
      }
      return {
        tokens: k,
        groups: C,
        errors: x
      };
    }
    handleModes(e, t, r, n) {
      if (e.pop === true) {
        let i = e.push;
        t(n);
        if (i !== undefined) {
          r.call(this, i);
        }
      } else if (e.push !== undefined) {
        r.call(this, e.push);
      }
    }
    chopInput(e, t) {
      return e.substring(t);
    }
    updateLastIndex(e, t) {
      e.lastIndex = t;
    }
    updateTokenEndLineColumnLocation(e, t, r, n, i, a, s) {
      let o;
      let l;
      if (t !== undefined) {
        l = (o = r === s - 1) ? -1 : 0;
        if (n !== 1 || o !== true) {
          e.endLine = i + l;
          e.endColumn = a - 1 + -l;
        }
      }
    }
    computeNewColumn(e, t) {
      return e + t;
    }
    createOffsetOnlyToken(e, t, r, n) {
      return {
        image: e,
        startOffset: t,
        tokenTypeIdx: r,
        tokenType: n
      };
    }
    createStartOnlyToken(e, t, r, n, i, a) {
      return {
        image: e,
        startOffset: t,
        startLine: i,
        startColumn: a,
        tokenTypeIdx: r,
        tokenType: n
      };
    }
    createFullToken(e, t, r, n, i, a, s) {
      return {
        image: e,
        startOffset: t,
        endOffset: t + s - 1,
        startLine: i,
        endLine: i,
        startColumn: a,
        endColumn: a + s - 1,
        tokenTypeIdx: r,
        tokenType: n
      };
    }
    addTokenUsingPush(e, t, r) {
      e.push(r);
      return t;
    }
    addTokenUsingMemberAccess(e, t, r) {
      e[t] = r;
      return ++t;
    }
    handlePayloadNoCustom(e, t) {}
    handlePayloadWithCustom(e, t) {
      if (t !== null) {
        e.payload = t;
      }
    }
    matchWithTest(e, t, r) {
      if (e.test(t) === true) {
        return t.substring(r, e.lastIndex);
      } else {
        return null;
      }
    }
    matchWithExec(e, t) {
      let r = e.exec(t);
      if (r !== null) {
        return r[0];
      } else {
        return null;
      }
    }
  }
  function e7(e) {
    if (e4(e)) {
      return e.LABEL;
    } else {
      return e.name;
    }
  }
  function e4(e) {
    return isStringTypeCheck.isString(e.LABEL) && e.LABEL !== "";
  }
  e2.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
  e2.NA = /NOT_APPLICABLE/;
  let e9 = "categories";
  let e8 = "label";
  let e3 = "group";
  let e6 = "push_mode";
  let e5 = "pop_mode";
  let te = "longer_alt";
  let tt = "line_breaks";
  let tr = "start_chars_hint";
  function tn(e) {
    let t = e.pattern;
    let r = {
      name: e.name
    };
    if (!isUndefinedCheck.isUndefined(t)) {
      r.PATTERN = t;
    }
    if (pathArrayValidation.validatePathArray(e, "parent")) {
      throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
    }
    if (pathArrayValidation.validatePathArray(e, e9)) {
      r.CATEGORIES = e[e9];
    }
    eq([r]);
    if (pathArrayValidation.validatePathArray(e, e8)) {
      r.LABEL = e[e8];
    }
    if (pathArrayValidation.validatePathArray(e, e3)) {
      r.GROUP = e[e3];
    }
    if (pathArrayValidation.validatePathArray(e, e5)) {
      r.POP_MODE = e[e5];
    }
    if (pathArrayValidation.validatePathArray(e, e6)) {
      r.PUSH_MODE = e[e6];
    }
    if (pathArrayValidation.validatePathArray(e, te)) {
      r.LONGER_ALT = e[te];
    }
    if (pathArrayValidation.validatePathArray(e, tt)) {
      r.LINE_BREAKS = e[tt];
    }
    if (pathArrayValidation.validatePathArray(e, tr)) {
      r.START_CHARS_HINT = e[tr];
    }
    return r;
  }
  let ti = tn({
    name: "EOF",
    pattern: e2.NA
  });
  function ta(e, t, r, n, i, a, s, o) {
    return {
      image: t,
      startOffset: r,
      endOffset: n,
      startLine: i,
      endLine: a,
      startColumn: s,
      endColumn: o,
      tokenTypeIdx: e.tokenTypeIdx,
      tokenType: e
    };
  }
  function ts(e, t) {
    return ej(e, t);
  }
  eq([ti]);
  let to = {
    buildMismatchTokenMessage({
      expected: e,
      actual: t,
      previous: r,
      ruleName: n
    }) {
      let i = e4(e) ? `--> ${e7(e)} <--` : `token of type --> ${e.name} <--`;
      return `Expecting ${i} but found --> '${t.image}' <--`;
    },
    buildNotAllInputParsedMessage: ({
      firstRedundant: e,
      ruleName: t
    }) => "Redundant input, expecting EOF but found: " + e.image,
    buildNoViableAltMessage({
      expectedPathsPerAlt: e,
      actual: t,
      previous: r,
      customUserDescription: n,
      ruleName: i
    }) {
      let a = "Expecting: ";
      let s = "\nbut found: '" + arrayFirstElement.getFirstElement(t).image + "'";
      if (n) {
        return a + n + s;
      }
      {
        let t = genericReduceUtil.genericReduce(e, (e, t) => e.concat(t), []);
        let r = collectionMapMatcher.mapWithMatcher(t, e => `[${collectionMapMatcher.mapWithMatcher(e, e => e7(e)).join(", ")}]`);
        let n = collectionMapMatcher.mapWithMatcher(r, (e, t) => `  ${t + 1}. ${e}`);
        return `${a}one of these possible Token sequences:
${n.join("\n")}${s}`;
      }
    },
    buildEarlyExitMessage({
      expectedIterationPaths: e,
      actual: t,
      customUserDescription: r,
      ruleName: n
    }) {
      let i = "Expecting: ";
      let a = "\nbut found: '" + arrayFirstElement.getFirstElement(t).image + "'";
      if (r) {
        return i + r + a;
      }
      {
        let t = collectionMapMatcher.mapWithMatcher(e, e => `[${collectionMapMatcher.mapWithMatcher(e, e => e7(e)).join(",")}]`);
        return `${i}expecting at least one iteration which starts with one of these possible Token sequences::
  <${t.join(" ,")}>${a}`;
      }
    }
  };
  Object.freeze(to);
  let tl = {
    buildRuleNotFoundError: (e, t) => "Invalid grammar, reference to a rule which is not defined: ->" + t.nonTerminalName + "<-\ninside top level rule: ->" + e.name + "<-"
  };
  let tu = {
    buildDuplicateFoundError(e, t) {
      let r = e.name;
      let n = arrayFirstElement.getFirstElement(t);
      let i = n.idx;
      let a = G(n);
      let s = n instanceof P ? n.terminalType.name : n instanceof I ? n.nonTerminalName : "";
      let o = `->${a}${i > 0 ? i : ""}<- ${s ? `with argument: ->${s}<-` : ""}
                  appears more than once (${t.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
      return (o = o.replace(/[ \t]+/g, " ")).replace(/\s\s+/g, "\n");
    },
    buildNamespaceConflictError: e => `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`,
    buildAlternationPrefixAmbiguityError(e) {
      let t = collectionMapMatcher.mapWithMatcher(e.prefixPath, e => e7(e)).join(", ");
      let r = e.alternation.idx === 0 ? "" : e.alternation.idx;
      return `Ambiguous alternatives: <${e.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
    },
    buildAlternationAmbiguityError(e) {
      let t = collectionMapMatcher.mapWithMatcher(e.prefixPath, e => e7(e)).join(", ");
      let r = e.alternation.idx === 0 ? "" : e.alternation.idx;
      let n = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
`;
      return `${n}See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
    },
    buildEmptyRepetitionError(e) {
      let t = G(e.repetition);
      if (e.repetition.idx !== 0) {
        t += e.repetition.idx;
      }
      return `The repetition <${t}> within Rule <${e.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
    },
    buildTokenNameError: e => "deprecated",
    buildEmptyAlternationError: e => `Ambiguous empty alternative: <${e.emptyChoiceIdx + 1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`,
    buildTooManyAlternativesError: e => `An Alternation cannot have more than 256 alternatives:
<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
 has ${e.alternation.definition.length + 1} alternatives.`,
    buildLeftRecursionError(e) {
      let t = e.topLevelRule.name;
      let r = collectionMapMatcher.mapWithMatcher(e.leftRecursionPath, e => e.name);
      let n = `${t} --> ${r.concat([t]).join(" --> ")}`;
      return `Left Recursion found in grammar.
rule: <${t}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
    },
    buildInvalidRuleNameError: e => "deprecated",
    buildDuplicateRuleNameError(e) {
      let t;
      t = e.topLevelRule instanceof S ? e.topLevelRule.name : e.topLevelRule;
      return `Duplicate definition, rule: ->${t}<- is already defined in the grammar: ->${e.grammarName}<-`;
    }
  };
  class tc extends M {
    constructor(e, t) {
      super();
      this.nameToTopRule = e;
      this.errMsgProvider = t;
      this.errors = [];
    }
    resolveRefs() {
      arrayObjectForeach.arrayObjectForeach(objectValuesHelper.getObjectValues(this.nameToTopRule), e => {
        this.currTopLevel = e;
        e.accept(this);
      });
    }
    visitNonTerminal(e) {
      let t = this.nameToTopRule[e.nonTerminalName];
      if (t) {
        e.referencedRule = t;
      } else {
        let t = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
        this.errors.push({
          message: t,
          type: c.UNRESOLVED_SUBRULE_REF,
          ruleName: this.currTopLevel.name,
          unresolvedRefName: e.nonTerminalName
        });
      }
    }
  }
  var collectionMapFlatten = require("collection-map-flatten") /*id: 378218*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  function tf(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (n) {
      t = n - (t = r || t === undefined ? 1 : toIntegerUtil_1.toInteger(t));
      return arraySliceHelper.arraySlice(e, 0, t < 0 ? 0 : t);
    } else {
      return [];
    }
  }
  class tp extends B {
    constructor(e, t) {
      super();
      this.topProd = e;
      this.path = t;
      this.possibleTokTypes = [];
      this.nextProductionName = "";
      this.nextProductionOccurrence = 0;
      this.found = false;
      this.isAtEndOfPath = false;
    }
    startWalking() {
      this.found = false;
      if (this.path.ruleStack[0] !== this.topProd.name) {
        throw Error("The path does not start with the walker's top Rule!");
      }
      this.ruleStack = syncedReferenceBlockManager.syncReferenceBlock(this.path.ruleStack).reverse();
      this.occurrenceStack = syncedReferenceBlockManager.syncReferenceBlock(this.path.occurrenceStack).reverse();
      this.ruleStack.pop();
      this.occurrenceStack.pop();
      this.updateExpectedNext();
      this.walk(this.topProd);
      return this.possibleTokTypes;
    }
    walk(e, t = []) {
      if (!this.found) {
        super.walk(e, t);
      }
    }
    walkProdRef(e, t, r) {
      if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
        let n = t.concat(r);
        this.updateExpectedNext();
        this.walk(e.referencedRule, n);
      }
    }
    updateExpectedNext() {
      if (isEmptyUtil.isEmpty(this.ruleStack)) {
        this.nextProductionName = "";
        this.nextProductionOccurrence = 0;
        this.isAtEndOfPath = true;
      } else {
        this.nextProductionName = this.ruleStack.pop();
        this.nextProductionOccurrence = this.occurrenceStack.pop();
      }
    }
  }
  class tm extends tp {
    constructor(e, t) {
      super(e, t);
      this.path = t;
      this.nextTerminalName = "";
      this.nextTerminalOccurrence = 0;
      this.nextTerminalName = this.path.lastTok.name;
      this.nextTerminalOccurrence = this.path.lastTokOccurrence;
    }
    walkTerminal(e, t, r) {
      if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
        let e = new C({
          definition: t.concat(r)
        });
        this.possibleTokTypes = j(e);
        this.found = true;
      }
    }
  }
  class tg extends B {
    constructor(e, t) {
      super();
      this.topRule = e;
      this.occurrence = t;
      this.result = {
        token: undefined,
        occurrence: undefined,
        isEndOfRule: undefined
      };
    }
    startWalking() {
      this.walk(this.topRule);
      return this.result;
    }
  }
  class ty extends tg {
    walkMany(e, t, r) {
      if (e.idx === this.occurrence) {
        let e = arrayFirstElement.getFirstElement(t.concat(r));
        this.result.isEndOfRule = e === undefined;
        if (e instanceof P) {
          this.result.token = e.terminalType;
          this.result.occurrence = e.idx;
        }
      } else {
        super.walkMany(e, t, r);
      }
    }
  }
  class tT extends tg {
    walkManySep(e, t, r) {
      if (e.idx === this.occurrence) {
        let e = arrayFirstElement.getFirstElement(t.concat(r));
        this.result.isEndOfRule = e === undefined;
        if (e instanceof P) {
          this.result.token = e.terminalType;
          this.result.occurrence = e.idx;
        }
      } else {
        super.walkManySep(e, t, r);
      }
    }
  }
  class tv extends tg {
    walkAtLeastOne(e, t, r) {
      if (e.idx === this.occurrence) {
        let e = arrayFirstElement.getFirstElement(t.concat(r));
        this.result.isEndOfRule = e === undefined;
        if (e instanceof P) {
          this.result.token = e.terminalType;
          this.result.occurrence = e.idx;
        }
      } else {
        super.walkAtLeastOne(e, t, r);
      }
    }
  }
  class tR extends tg {
    walkAtLeastOneSep(e, t, r) {
      if (e.idx === this.occurrence) {
        let e = arrayFirstElement.getFirstElement(t.concat(r));
        this.result.isEndOfRule = e === undefined;
        if (e instanceof P) {
          this.result.token = e.terminalType;
          this.result.occurrence = e.idx;
        }
      } else {
        super.walkAtLeastOneSep(e, t, r);
      }
    }
  }
  function t$(e, t, r = []) {
    r = syncedReferenceBlockManager.syncReferenceBlock(r);
    let n = [];
    let i = 0;
    function a(a) {
      let s = t$(a.concat(R(e, i + 1)), t, r);
      return n.concat(s);
    }
    while (r.length < t && i < e.length) {
      let t = e[i];
      if (t instanceof C) {
        return a(t.definition);
      }
      if (t instanceof I) {
        return a(t.definition);
      }
      if (t instanceof N) {
        n = a(t.definition);
      } else if (t instanceof w) {
        return a(t.definition.concat([new b({
          definition: t.definition
        })]));
      } else if (t instanceof L) {
        return a([new C({
          definition: t.definition
        }), new b({
          definition: [new P({
            terminalType: t.separator
          })].concat(t.definition)
        })]);
      } else if (t instanceof _) {
        n = a(t.definition.concat([new b({
          definition: [new P({
            terminalType: t.separator
          })].concat(t.definition)
        })]));
      } else if (t instanceof b) {
        n = a(t.definition.concat([new b({
          definition: t.definition
        })]));
      } else if (t instanceof O) {
        arrayObjectForeach.arrayObjectForeach(t.definition, e => {
          if (isEmptyUtil.isEmpty(e.definition) === false) {
            n = a(e.definition);
          }
        });
        return n;
      } else if (t instanceof P) {
        r.push(t.terminalType);
      } else {
        throw Error("non exhaustive match");
      }
      i++;
    }
    n.push({
      partialPath: r,
      suffixDef: R(e, i)
    });
    return n;
  }
  function tE(e, t, r, n) {
    let i = "EXIT_NONE_TERMINAL";
    let a = [i];
    let s = "EXIT_ALTERNATIVE";
    let o = false;
    let l = t.length;
    let u = l - n - 1;
    let c = [];
    let d = [];
    for (d.push({
      idx: -1,
      def: e,
      ruleStack: [],
      occurrenceStack: []
    }); !isEmptyUtil.isEmpty(d);) {
      let e = d.pop();
      if (e === s) {
        if (o && lastElementHelper.getLastElement(d).idx <= u) {
          d.pop();
        }
        continue;
      }
      let n = e.def;
      let h = e.idx;
      let p = e.ruleStack;
      let m = e.occurrenceStack;
      if (isEmptyUtil.isEmpty(n)) {
        continue;
      }
      let y = n[0];
      if (y === i) {
        let e = {
          idx: h,
          def: R(n),
          ruleStack: tf(p),
          occurrenceStack: tf(m)
        };
        d.push(e);
      } else if (y instanceof P) {
        if (h < l - 1) {
          let e = h + 1;
          if (r(t[e], y.terminalType)) {
            let t = {
              idx: e,
              def: R(n),
              ruleStack: p,
              occurrenceStack: m
            };
            d.push(t);
          }
        } else if (h === l - 1) {
          c.push({
            nextTokenType: y.terminalType,
            nextTokenOccurrence: y.idx,
            ruleStack: p,
            occurrenceStack: m
          });
          o = true;
        } else {
          throw Error("non exhaustive match");
        }
      } else if (y instanceof I) {
        let e = syncedReferenceBlockManager.syncReferenceBlock(p);
        e.push(y.nonTerminalName);
        let t = syncedReferenceBlockManager.syncReferenceBlock(m);
        t.push(y.idx);
        let r = {
          idx: h,
          def: y.definition.concat(a, R(n)),
          ruleStack: e,
          occurrenceStack: t
        };
        d.push(r);
      } else if (y instanceof N) {
        let e = {
          idx: h,
          def: R(n),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(e);
        d.push(s);
        let t = {
          idx: h,
          def: y.definition.concat(R(n)),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(t);
      } else if (y instanceof w) {
        let e = new b({
          definition: y.definition,
          idx: y.idx
        });
        let t = {
          idx: h,
          def: y.definition.concat([e], R(n)),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(t);
      } else if (y instanceof L) {
        let e = new b({
          definition: [new P({
            terminalType: y.separator
          })].concat(y.definition),
          idx: y.idx
        });
        let t = {
          idx: h,
          def: y.definition.concat([e], R(n)),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(t);
      } else if (y instanceof _) {
        let e = {
          idx: h,
          def: R(n),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(e);
        d.push(s);
        let t = new b({
          definition: [new P({
            terminalType: y.separator
          })].concat(y.definition),
          idx: y.idx
        });
        let r = {
          idx: h,
          def: y.definition.concat([t], R(n)),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(r);
      } else if (y instanceof b) {
        let e = {
          idx: h,
          def: R(n),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(e);
        d.push(s);
        let t = new b({
          definition: y.definition,
          idx: y.idx
        });
        let r = {
          idx: h,
          def: y.definition.concat([t], R(n)),
          ruleStack: p,
          occurrenceStack: m
        };
        d.push(r);
      } else if (y instanceof O) {
        for (let e = y.definition.length - 1; e >= 0; e--) {
          let t = {
            idx: h,
            def: y.definition[e].definition.concat(R(n)),
            ruleStack: p,
            occurrenceStack: m
          };
          d.push(t);
          d.push(s);
        }
      } else if (y instanceof C) {
        d.push({
          idx: h,
          def: y.definition.concat(R(n)),
          ruleStack: p,
          occurrenceStack: m
        });
      } else if (y instanceof S) {
        d.push(function (e, t, r, n) {
          let i = syncedReferenceBlockManager.syncReferenceBlock(r);
          i.push(e.name);
          let a = syncedReferenceBlockManager.syncReferenceBlock(n);
          a.push(1);
          return {
            idx: t,
            def: e.definition,
            ruleStack: i,
            occurrenceStack: a
          };
        }(y, h, p, m));
      } else {
        throw Error("non exhaustive match");
      }
    }
    return c;
  }
  function tA(e) {
    if (e instanceof N || e === "Option") {
      return l.OPTION;
    }
    if (e instanceof b || e === "Repetition") {
      return l.REPETITION;
    }
    if (e instanceof w || e === "RepetitionMandatory") {
      return l.REPETITION_MANDATORY;
    }
    if (e instanceof L || e === "RepetitionMandatoryWithSeparator") {
      return l.REPETITION_MANDATORY_WITH_SEPARATOR;
    }
    if (e instanceof _ || e === "RepetitionWithSeparator") {
      return l.REPETITION_WITH_SEPARATOR;
    } else if (e instanceof O || e === "Alternation") {
      return l.ALTERNATION;
    } else {
      throw Error("non exhaustive match");
    }
  }
  function tk(e) {
    let {
      occurrence: t,
      rule: r,
      prodType: n,
      maxLookahead: i
    } = e;
    let a = tA(n);
    if (a === l.ALTERNATION) {
      return tb(t, r, i);
    } else {
      return t_(t, r, a, i);
    }
  }
  function tx(e, t, r, n) {
    let i = e.length;
    let a = collectionMatchUtil.checkCollectionMatch(e, e => collectionMatchUtil.checkCollectionMatch(e, e => e.length === 1));
    if (t) {
      return function (t) {
        let n = collectionMapMatcher.mapWithMatcher(t, e => e.GATE);
        for (let t = 0; t < i; t++) {
          let i = e[t];
          let a = i.length;
          let s = n[t];
          if (s === undefined || s.call(this) !== false) {
            e: for (let e = 0; e < a; e++) {
              let n = i[e];
              let a = n.length;
              for (let e = 0; e < a; e++) {
                if (r(this.LA(e + 1), n[e]) === false) {
                  continue e;
                }
              }
              return t;
            }
          }
        }
      };
    }
    if (!a || n) {
      return function () {
        for (let t = 0; t < i; t++) {
          let n = e[t];
          let i = n.length;
          e: for (let e = 0; e < i; e++) {
            let i = n[e];
            let a = i.length;
            for (let e = 0; e < a; e++) {
              if (r(this.LA(e + 1), i[e]) === false) {
                continue e;
              }
            }
            return t;
          }
        }
      };
    }
    {
      let t = collectionMapMatcher.mapWithMatcher(e, e => safeArrayFlattenUtil.safeFlattenArray(e));
      let r = genericReduceUtil.genericReduce(t, (e, t, r) => {
        arrayObjectForeach.arrayObjectForeach(t, t => {
          if (!pathArrayValidation.validatePathArray(e, t.tokenTypeIdx)) {
            e[t.tokenTypeIdx] = r;
          }
          arrayObjectForeach.arrayObjectForeach(t.categoryMatches, t => {
            if (!pathArrayValidation.validatePathArray(e, t)) {
              e[t] = r;
            }
          });
        });
        return e;
      }, {});
      return function () {
        return r[this.LA(1).tokenTypeIdx];
      };
    }
  }
  function tI(e, t, r) {
    let n = collectionMatchUtil.checkCollectionMatch(e, e => e.length === 1);
    let i = e.length;
    if (!n || r) {
      return function () {
        e: for (let r = 0; r < i; r++) {
          let n = e[r];
          let i = n.length;
          for (let e = 0; e < i; e++) {
            if (t(this.LA(e + 1), n[e]) === false) {
              continue e;
            }
          }
          return true;
        }
        return false;
      };
    }
    {
      let t = safeArrayFlattenUtil.safeFlattenArray(e);
      if (t.length === 1 && isEmptyUtil.isEmpty(t[0].categoryMatches)) {
        let e = t[0].tokenTypeIdx;
        return function () {
          return this.LA(1).tokenTypeIdx === e;
        };
      }
      {
        let e = genericReduceUtil.genericReduce(t, (e, t, r) => {
          e[t.tokenTypeIdx] = true;
          arrayObjectForeach.arrayObjectForeach(t.categoryMatches, t => {
            e[t] = true;
          });
          return e;
        }, []);
        return function () {
          return e[this.LA(1).tokenTypeIdx] === true;
        };
      }
    }
  }
  (i = l ||= {})[i.OPTION = 0] = "OPTION";
  i[i.REPETITION = 1] = "REPETITION";
  i[i.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY";
  i[i.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
  i[i.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR";
  i[i.ALTERNATION = 5] = "ALTERNATION";
  class tS extends B {
    constructor(e, t, r) {
      super();
      this.topProd = e;
      this.targetOccurrence = t;
      this.targetProdType = r;
    }
    startWalking() {
      this.walk(this.topProd);
      return this.restDef;
    }
    checkIsTarget(e, t, r, n) {
      return e.idx === this.targetOccurrence && this.targetProdType === t && (this.restDef = r.concat(n), true);
    }
    walkOption(e, t, r) {
      if (!this.checkIsTarget(e, l.OPTION, t, r)) {
        super.walkOption(e, t, r);
      }
    }
    walkAtLeastOne(e, t, r) {
      if (!this.checkIsTarget(e, l.REPETITION_MANDATORY, t, r)) {
        super.walkOption(e, t, r);
      }
    }
    walkAtLeastOneSep(e, t, r) {
      if (!this.checkIsTarget(e, l.REPETITION_MANDATORY_WITH_SEPARATOR, t, r)) {
        super.walkOption(e, t, r);
      }
    }
    walkMany(e, t, r) {
      if (!this.checkIsTarget(e, l.REPETITION, t, r)) {
        super.walkOption(e, t, r);
      }
    }
    walkManySep(e, t, r) {
      if (!this.checkIsTarget(e, l.REPETITION_WITH_SEPARATOR, t, r)) {
        super.walkOption(e, t, r);
      }
    }
  }
  class tC extends M {
    constructor(e, t, r) {
      super();
      this.targetOccurrence = e;
      this.targetProdType = t;
      this.targetRef = r;
      this.result = [];
    }
    checkIsTarget(e, t) {
      if (e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === undefined || e === this.targetRef)) {
        this.result = e.definition;
      }
    }
    visitOption(e) {
      this.checkIsTarget(e, l.OPTION);
    }
    visitRepetition(e) {
      this.checkIsTarget(e, l.REPETITION);
    }
    visitRepetitionMandatory(e) {
      this.checkIsTarget(e, l.REPETITION_MANDATORY);
    }
    visitRepetitionMandatoryWithSeparator(e) {
      this.checkIsTarget(e, l.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    visitRepetitionWithSeparator(e) {
      this.checkIsTarget(e, l.REPETITION_WITH_SEPARATOR);
    }
    visitAlternation(e) {
      this.checkIsTarget(e, l.ALTERNATION);
    }
  }
  function tN(e) {
    let t = Array(e);
    for (let r = 0; r < e; r++) {
      t[r] = [];
    }
    return t;
  }
  function tw(e) {
    let t = [""];
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      let i = [];
      for (let e = 0; e < t.length; e++) {
        let r = t[e];
        i.push(r + "_" + n.tokenTypeIdx);
        for (let e = 0; e < n.categoryMatches.length; e++) {
          let t = "_" + n.categoryMatches[e];
          i.push(r + t);
        }
      }
      t = i;
    }
    return t;
  }
  function tL(e, t) {
    let r = collectionMapMatcher.mapWithMatcher(e, e => t$([e], 1));
    let n = tN(r.length);
    let i = collectionMapMatcher.mapWithMatcher(r, e => {
      let t = {};
      arrayObjectForeach.arrayObjectForeach(e, e => {
        let r = tw(e.partialPath);
        arrayObjectForeach.arrayObjectForeach(r, e => {
          t[e] = true;
        });
      });
      return t;
    });
    let a = r;
    for (let e = 1; e <= t; e++) {
      let r = a;
      a = tN(r.length);
      for (let s = 0; s < r.length; s++) {
        let o = r[s];
        for (let r = 0; r < o.length; r++) {
          let l = o[r].partialPath;
          let u = o[r].suffixDef;
          let c = tw(l);
          if (function (e, t, r) {
            for (let n = 0; n < e.length; n++) {
              if (n === r) {
                continue;
              }
              let i = e[n];
              for (let e = 0; e < t.length; e++) {
                if (i[t[e]] === true) {
                  return false;
                }
              }
            }
            return true;
          }(i, c, s) || isEmptyUtil.isEmpty(u) || l.length === t) {
            let e = n[s];
            if (tO(e, l) === false) {
              e.push(l);
              for (let e = 0; e < c.length; e++) {
                let t = c[e];
                i[s][t] = true;
              }
            }
          } else {
            let t = t$(u, e + 1, l);
            a[s] = a[s].concat(t);
            arrayObjectForeach.arrayObjectForeach(t, e => {
              let t = tw(e.partialPath);
              arrayObjectForeach.arrayObjectForeach(t, e => {
                i[s][e] = true;
              });
            });
          }
        }
      }
    }
    return n;
  }
  function tb(e, t, r, n) {
    let i = new tC(e, l.ALTERNATION, n);
    t.accept(i);
    return tL(i.result, r);
  }
  function t_(e, t, r, n) {
    let i = new tC(e, r);
    t.accept(i);
    let a = i.result;
    let s = new tS(t, e, r).startWalking();
    return tL([new C({
      definition: a
    }), new C({
      definition: s
    })], n);
  }
  function tO(e, t) {
    t: for (let r = 0; r < e.length; r++) {
      let n = e[r];
      if (n.length === t.length) {
        for (let e = 0; e < n.length; e++) {
          let r = t[e];
          let i = n[e];
          if ((r === i || i.categoryMatchesMap[r.tokenTypeIdx] !== undefined) == false) {
            continue t;
          }
        }
        return true;
      }
    }
    return false;
  }
  function tP(e) {
    return collectionMatchUtil.checkCollectionMatch(e, e => collectionMatchUtil.checkCollectionMatch(e, e => collectionMatchUtil.checkCollectionMatch(e, e => isEmptyUtil.isEmpty(e.categoryMatches))));
  }
  function tM(e) {
    return `${G(e)}_#_${e.idx}_#_${tD(e)}`;
  }
  function tD(e) {
    if (e instanceof P) {
      return e.terminalType.name;
    } else if (e instanceof I) {
      return e.nonTerminalName;
    } else {
      return "";
    }
  }
  class tZ extends M {
    constructor() {
      super(...arguments);
      this.allProductions = [];
    }
    visitNonTerminal(e) {
      this.allProductions.push(e);
    }
    visitOption(e) {
      this.allProductions.push(e);
    }
    visitRepetitionWithSeparator(e) {
      this.allProductions.push(e);
    }
    visitRepetitionMandatory(e) {
      this.allProductions.push(e);
    }
    visitRepetitionMandatoryWithSeparator(e) {
      this.allProductions.push(e);
    }
    visitRepetition(e) {
      this.allProductions.push(e);
    }
    visitAlternation(e) {
      this.allProductions.push(e);
    }
    visitTerminal(e) {
      this.allProductions.push(e);
    }
  }
  class tF extends M {
    constructor() {
      super(...arguments);
      this.alternations = [];
    }
    visitAlternation(e) {
      this.alternations.push(e);
    }
  }
  class tU extends M {
    constructor() {
      super(...arguments);
      this.allProductions = [];
    }
    visitRepetitionWithSeparator(e) {
      this.allProductions.push(e);
    }
    visitRepetitionMandatory(e) {
      this.allProductions.push(e);
    }
    visitRepetitionMandatoryWithSeparator(e) {
      this.allProductions.push(e);
    }
    visitRepetition(e) {
      this.allProductions.push(e);
    }
  }
  let tG = "MismatchedTokenException";
  let tB = "NoViableAltException";
  let tK = "EarlyExitException";
  let tV = "NotAllInputParsedException";
  let tW = [tG, tB, tK, tV];
  function tj(e) {
    return collectionIncludesUtil.includes(tW, e.name);
  }
  Object.freeze(tW);
  class tH extends Error {
    constructor(e, t) {
      super(e);
      this.token = t;
      this.resyncedTokens = [];
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  class tz extends tH {
    constructor(e, t, r) {
      super(e, t);
      this.previousToken = r;
      this.name = tG;
    }
  }
  class tY extends tH {
    constructor(e, t, r) {
      super(e, t);
      this.previousToken = r;
      this.name = tB;
    }
  }
  class tq extends tH {
    constructor(e, t) {
      super(e, t);
      this.name = tV;
    }
  }
  class tX extends tH {
    constructor(e, t, r) {
      super(e, t);
      this.previousToken = r;
      this.name = tK;
    }
  }
  let tQ = {};
  let tJ = "InRuleRecoveryException";
  class t0 extends Error {
    constructor(e) {
      super(e);
      this.name = tJ;
    }
  }
  function t1(e, t, r, n, i, a, s) {
    let o = this.getKeyForAutomaticLookahead(n, i);
    let l = this.firstAfterRepMap[o];
    if (l === undefined) {
      let e = this.getCurrRuleFullName();
      l = new a(this.getGAstProductions()[e], i).startWalking();
      this.firstAfterRepMap[o] = l;
    }
    let u = l.token;
    let c = l.occurrence;
    let d = l.isEndOfRule;
    if (this.RULE_STACK.length === 1 && d && u === undefined) {
      u = ti;
      c = 1;
    }
    if (u !== undefined && c !== undefined && this.shouldInRepetitionRecoveryBeTried(u, c, s)) {
      this.tryInRepetitionRecovery(e, t, r, u);
    }
  }
  class t2 {
    constructor(e) {
      this.maxLookahead = (e == null ? undefined : e.maxLookahead) ?? rl.maxLookahead;
    }
    validate(e) {
      let t = this.validateNoLeftRecursion(e.rules);
      if (isEmptyUtil.isEmpty(t)) {
        let r = this.validateEmptyOrAlternatives(e.rules);
        return [...t, ...r, ...this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), ...this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead)];
      }
      return t;
    }
    validateNoLeftRecursion(e) {
      return collectionMapFlatten.mapAndFlatten(e, e => function e(t, r, n, i = []) {
        let a = [];
        let s = function e(t) {
          let r = [];
          if (isEmptyUtil.isEmpty(t)) {
            return r;
          }
          let n = arrayFirstElement.getFirstElement(t);
          if (n instanceof I) {
            r.push(n.referencedRule);
          } else if (n instanceof C || n instanceof N || n instanceof w || n instanceof L || n instanceof _ || n instanceof b) {
            r = r.concat(e(n.definition));
          } else if (n instanceof O) {
            r = safeArrayFlattenUtil.safeFlattenArray(collectionMapMatcher.mapWithMatcher(n.definition, t => e(t.definition)));
          } else if (n instanceof P) ;else {
            throw Error("non exhaustive match");
          }
          let i = U(n);
          let a = t.length > 1;
          if (!i || !a) {
            return r;
          }
          {
            let n = R(t);
            return r.concat(e(n));
          }
        }(r.definition);
        if (isEmptyUtil.isEmpty(s)) {
          return [];
        }
        {
          let r = t.name;
          if (collectionIncludesUtil.includes(s, t)) {
            a.push({
              message: n.buildLeftRecursionError({
                topLevelRule: t,
                leftRecursionPath: i
              }),
              type: c.LEFT_RECURSION,
              ruleName: r
            });
          }
          let o = throttledArrayDiffUtil.throttledArrayDiff(s, i.concat([t]));
          let l = collectionMapFlatten.mapAndFlatten(o, r => {
            let a = syncedReferenceBlockManager.syncReferenceBlock(i);
            a.push(r);
            return e(t, r, n, a);
          });
          return a.concat(l);
        }
      }(e, e, tu));
    }
    validateEmptyOrAlternatives(e) {
      return collectionMapFlatten.mapAndFlatten(e, e => function (e, t) {
        let r = new tF();
        e.accept(r);
        let n = r.alternations;
        return collectionMapFlatten.mapAndFlatten(n, r => {
          let n = tf(r.definition);
          return collectionMapFlatten.mapAndFlatten(n, (n, i) => {
            let a = tE([n], [], ej, 1);
            if (isEmptyUtil.isEmpty(a)) {
              return [{
                message: t.buildEmptyAlternationError({
                  topLevelRule: e,
                  alternation: r,
                  emptyChoiceIdx: i
                }),
                type: c.NONE_LAST_EMPTY_ALT,
                ruleName: e.name,
                occurrence: r.idx,
                alternative: i + 1
              }];
            } else {
              return [];
            }
          });
        });
      }(e, tu));
    }
    validateAmbiguousAlternationAlternatives(e, t) {
      return collectionMapFlatten.mapAndFlatten(e, e => function (e, t, r) {
        let n = new tF();
        e.accept(n);
        let i = n.alternations;
        i = en(i, e => e.ignoreAmbiguities === true);
        return collectionMapFlatten.mapAndFlatten(i, n => {
          let i = tb(n.idx, e, n.maxLookahead || t, n);
          let a = function (e, t, r, n) {
            let i = [];
            let a = genericReduceUtil.genericReduce(e, (r, n, a) => {
              if (t.definition[a].ignoreAmbiguities !== true) {
                arrayObjectForeach.arrayObjectForeach(n, n => {
                  let s = [a];
                  arrayObjectForeach.arrayObjectForeach(e, (e, r) => {
                    if (a !== r && tO(e, n) && t.definition[r].ignoreAmbiguities !== true) {
                      s.push(r);
                    }
                  });
                  if (s.length > 1 && !tO(i, n)) {
                    i.push(n);
                    r.push({
                      alts: s,
                      path: n
                    });
                  }
                });
              }
              return r;
            }, []);
            return collectionMapMatcher.mapWithMatcher(a, e => {
              let i = collectionMapMatcher.mapWithMatcher(e.alts, e => e + 1);
              return {
                message: n.buildAlternationAmbiguityError({
                  topLevelRule: r,
                  alternation: t,
                  ambiguityIndices: i,
                  prefixPath: e.path
                }),
                type: c.AMBIGUOUS_ALTS,
                ruleName: r.name,
                occurrence: t.idx,
                alternatives: e.alts
              };
            });
          }(i, n, e, r);
          let s = function (e, t, r, n) {
            let i = genericReduceUtil.genericReduce(e, (e, t, r) => {
              let n = collectionMapMatcher.mapWithMatcher(t, e => ({
                idx: r,
                path: e
              }));
              return e.concat(n);
            }, []);
            return arrayCompactUtil.compactArray(collectionMapFlatten.mapAndFlatten(i, e => {
              if (t.definition[e.idx].ignoreAmbiguities === true) {
                return [];
              }
              let a = e.idx;
              let s = e.path;
              let o = genericFilterUtil.genericFilter(i, e => {
                var r;
                return t.definition[e.idx].ignoreAmbiguities !== true && e.idx < a && (r = e.path).length < s.length && collectionMatchUtil.checkCollectionMatch(r, (e, t) => {
                  let r = s[t];
                  return e === r || r.categoryMatchesMap[e.tokenTypeIdx];
                });
              });
              return collectionMapMatcher.mapWithMatcher(o, e => {
                let i = [e.idx + 1, a + 1];
                let s = t.idx === 0 ? "" : t.idx;
                return {
                  message: n.buildAlternationPrefixAmbiguityError({
                    topLevelRule: r,
                    alternation: t,
                    ambiguityIndices: i,
                    prefixPath: e.path
                  }),
                  type: c.AMBIGUOUS_PREFIX_ALTS,
                  ruleName: r.name,
                  occurrence: s,
                  alternatives: i
                };
              });
            }));
          }(i, n, e, r);
          return a.concat(s);
        });
      }(e, t, tu));
    }
    validateSomeNonEmptyLookaheadPath(e, t) {
      return function (e, t, r) {
        let n = [];
        arrayObjectForeach.arrayObjectForeach(e, e => {
          let i = new tU();
          e.accept(i);
          let a = i.allProductions;
          arrayObjectForeach.arrayObjectForeach(a, i => {
            let a = tA(i);
            let s = i.maxLookahead || t;
            let o = t_(i.idx, e, a, s)[0];
            if (isEmptyUtil.isEmpty(safeArrayFlattenUtil.safeFlattenArray(o))) {
              let t = r.buildEmptyRepetitionError({
                topLevelRule: e,
                repetition: i
              });
              n.push({
                message: t,
                type: c.NO_NON_EMPTY_LOOKAHEAD,
                ruleName: e.name
              });
            }
          });
        });
        return n;
      }(e, t, tu);
    }
    buildLookaheadForAlternation(e) {
      return function (e, t, r, n, i, a) {
        let s = tb(e, t, r);
        let o = tP(s) ? eH : ej;
        return a(s, n, o, i);
      }(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, tx);
    }
    buildLookaheadForOptional(e) {
      return function (e, t, r, n, i, a) {
        let s = t_(e, t, i, r);
        let o = tP(s) ? eH : ej;
        return a(s[0], o, n);
      }(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, tA(e.prodType), tI);
    }
  }
  let t7 = new class extends M {
    constructor() {
      super(...arguments);
      this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: []
      };
    }
    reset() {
      this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: []
      };
    }
    visitOption(e) {
      this.dslMethods.option.push(e);
    }
    visitRepetitionWithSeparator(e) {
      this.dslMethods.repetitionWithSeparator.push(e);
    }
    visitRepetitionMandatory(e) {
      this.dslMethods.repetitionMandatory.push(e);
    }
    visitRepetitionMandatoryWithSeparator(e) {
      this.dslMethods.repetitionMandatoryWithSeparator.push(e);
    }
    visitRepetition(e) {
      this.dslMethods.repetition.push(e);
    }
    visitAlternation(e) {
      this.dslMethods.alternation.push(e);
    }
  }();
  function t4(e, t) {
    if (isNaN(e.startOffset) === true) {
      e.startOffset = t.startOffset;
      e.endOffset = t.endOffset;
    } else if (e.endOffset < t.endOffset == true) {
      e.endOffset = t.endOffset;
    }
  }
  function t9(e, t) {
    if (isNaN(e.startOffset) === true) {
      e.startOffset = t.startOffset;
      e.startColumn = t.startColumn;
      e.startLine = t.startLine;
      e.endOffset = t.endOffset;
      e.endColumn = t.endColumn;
      e.endLine = t.endLine;
    } else if (e.endOffset < t.endOffset == true) {
      e.endOffset = t.endOffset;
      e.endColumn = t.endColumn;
      e.endLine = t.endLine;
    }
  }
  function t8(e, t) {
    Object.defineProperty(e, "name", {
      enumerable: false,
      configurable: true,
      writable: false,
      value: t
    });
  }
  function t3(e, t) {
    let r = getOwnKeys.getOwnKeys(e);
    let n = r.length;
    for (let i = 0; i < n; i++) {
      let n = e[r[i]];
      let a = n.length;
      for (let e = 0; e < a; e++) {
        let r = n[e];
        if (r.tokenTypeIdx === undefined) {
          this[r.name](r.children, t);
        }
      }
    }
  }
  (a = u ||= {})[a.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD";
  a[a.MISSING_METHOD = 1] = "MISSING_METHOD";
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  let t5 = {
    description: "This Object indicates the Parser is during Recording Phase"
  };
  Object.freeze(t5);
  let re = tn({
    name: "RECORDING_PHASE_TOKEN",
    pattern: e2.NA
  });
  eq([re]);
  let rt = ta(re, "This IToken indicates the Parser is in Recording Phase\n\tSee: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", -1, -1, -1, -1, -1, -1);
  Object.freeze(rt);
  let rr = {
    name: "This CSTNode indicates the Parser is in Recording Phase\n\tSee: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
    children: {}
  };
  function rn(e, t, r, n = false) {
    rs(r);
    let i = lastElementHelper.getLastElement(this.recordingProdStack);
    let a = isFunctionUtil_1.isFunction(t) ? t : t.DEF;
    let s = new e({
      definition: [],
      idx: r
    });
    if (n) {
      s.separator = t.SEP;
    }
    if (pathArrayValidation.validatePathArray(t, "MAX_LOOKAHEAD")) {
      s.maxLookahead = t.MAX_LOOKAHEAD;
    }
    this.recordingProdStack.push(s);
    a.call(this);
    i.definition.push(s);
    this.recordingProdStack.pop();
    return t5;
  }
  function ri(e, t) {
    rs(t);
    let r = lastElementHelper.getLastElement(this.recordingProdStack);
    let n = arrayIsArrayUtil.isArray(e) === false;
    let i = n === false ? e : e.DEF;
    let a = new O({
      definition: [],
      idx: t,
      ignoreAmbiguities: n && e.IGNORE_AMBIGUITIES === true
    });
    if (pathArrayValidation.validatePathArray(e, "MAX_LOOKAHEAD")) {
      a.maxLookahead = e.MAX_LOOKAHEAD;
    }
    let s = objectMatchUtil.checkObjectMatch(i, e => isFunctionUtil_1.isFunction(e.GATE));
    a.hasPredicates = s;
    r.definition.push(a);
    arrayObjectForeach.arrayObjectForeach(i, e => {
      let t = new C({
        definition: []
      });
      a.definition.push(t);
      if (pathArrayValidation.validatePathArray(e, "IGNORE_AMBIGUITIES")) {
        t.ignoreAmbiguities = e.IGNORE_AMBIGUITIES;
      } else if (pathArrayValidation.validatePathArray(e, "GATE")) {
        t.ignoreAmbiguities = true;
      }
      this.recordingProdStack.push(t);
      e.ALT.call(this);
      this.recordingProdStack.pop();
    });
    return t5;
  }
  function ra(e) {
    if (e === 0) {
      return "";
    } else {
      return `${e}`;
    }
  }
  function rs(e) {
    if (e < 0 || e > 255) {
      let t = Error(`Invalid DSL Method idx value: <${e}>
	Idx value must be a none negative value smaller than ${256}`);
      t.KNOWN_RECORDER_ERROR = true;
      throw t;
    }
  }
  let ro = ta(ti, "", NaN, NaN, NaN, NaN, NaN, NaN);
  Object.freeze(ro);
  let rl = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: to,
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false
  });
  let ru = Object.freeze({
    recoveryValueFunc: () => undefined,
    resyncEnabled: true
  });
  function rc(e) {
    return function () {
      return e;
    };
  }
  (s = c ||= {})[s.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME";
  s[s.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME";
  s[s.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE";
  s[s.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS";
  s[s.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF";
  s[s.LEFT_RECURSION = 5] = "LEFT_RECURSION";
  s[s.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT";
  s[s.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS";
  s[s.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
  s[s.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME";
  s[s.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD";
  s[s.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS";
  s[s.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS";
  s[s.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
  class rd {
    static performSelfAnalysis(e) {
      throw Error("The **static** `performSelfAnalysis` method has been deprecated.\t\nUse the **instance** method with the same name instead.");
    }
    performSelfAnalysis() {
      this.TRACE_INIT("performSelfAnalysis", () => {
        let e;
        this.selfAnalysisDone = true;
        let t = this.className;
        this.TRACE_INIT("toFastProps", () => {
          y(this);
        });
        this.TRACE_INIT("Grammar Recording", () => {
          try {
            this.enableRecording();
            arrayObjectForeach.arrayObjectForeach(this.definedRulesNames, e => {
              let t;
              let r = this[e].originalGrammarAction;
              this.TRACE_INIT(`${e} Rule`, () => {
                t = this.topLevelRuleRecord(e, r);
              });
              this.gastProductionsCache[e] = t;
            });
          } finally {
            this.disableRecording();
          }
        });
        let r = [];
        this.TRACE_INIT("Grammar Resolving", () => {
          r = function (e) {
            let t = objectDefaultsUtil.defaults(e, {
              errMsgProvider: tl
            });
            let r = {};
            arrayObjectForeach.arrayObjectForeach(e.rules, e => {
              r[e.name] = e;
            });
            return function (e, t) {
              let r = new tc(e, t);
              r.resolveRefs();
              return r.errors;
            }(r, t.errMsgProvider);
          }({
            rules: objectValuesHelper.getObjectValues(this.gastProductionsCache)
          });
          this.definitionErrors = this.definitionErrors.concat(r);
        });
        this.TRACE_INIT("Grammar Validations", () => {
          if (isEmptyUtil.isEmpty(r) && this.skipValidations === false) {
            var e;
            e = {
              rules: objectValuesHelper.getObjectValues(this.gastProductionsCache),
              tokenTypes: objectValuesHelper.getObjectValues(this.tokensMap),
              errMsgProvider: tu,
              grammarName: t
            };
            let r = function (e, t, r, n) {
              let i = collectionMapFlatten.mapAndFlatten(e, e => function (e, t) {
                let r = new tZ();
                e.accept(r);
                let n = r.allProductions;
                let i = collectionArrayGrouper.groupValuesToArray(n, tM);
                let a = objectPathFilterUtil.filterObjectByPaths(i, e => e.length > 1);
                return collectionMapMatcher.mapWithMatcher(objectValuesHelper.getObjectValues(a), r => {
                  let n = arrayFirstElement.getFirstElement(r);
                  let i = t.buildDuplicateFoundError(e, r);
                  let a = G(n);
                  let s = {
                    message: i,
                    type: c.DUPLICATE_PRODUCTIONS,
                    ruleName: e.name,
                    dslName: a,
                    occurrence: n.idx
                  };
                  let o = tD(n);
                  if (o) {
                    s.parameter = o;
                  }
                  return s;
                });
              }(e, r));
              let a = function (e, t, r) {
                let n = [];
                let i = collectionMapMatcher.mapWithMatcher(t, e => e.name);
                arrayObjectForeach.arrayObjectForeach(e, e => {
                  let t = e.name;
                  if (collectionIncludesUtil.includes(i, t)) {
                    let i = r.buildNamespaceConflictError(e);
                    n.push({
                      message: i,
                      type: c.CONFLICT_TOKENS_RULES_NAMESPACE,
                      ruleName: t
                    });
                  }
                });
                return n;
              }(e, t, r);
              let s = collectionMapFlatten.mapAndFlatten(e, e => function (e, t) {
                let r = new tF();
                e.accept(r);
                let n = r.alternations;
                return collectionMapFlatten.mapAndFlatten(n, r => r.definition.length > 255 ? [{
                  message: t.buildTooManyAlternativesError({
                    topLevelRule: e,
                    alternation: r
                  }),
                  type: c.TOO_MANY_ALTS,
                  ruleName: e.name,
                  occurrence: r.idx
                }] : []);
              }(e, r));
              let o = collectionMapFlatten.mapAndFlatten(e, t => function (e, t, r, n) {
                let i = [];
                if (genericReduceUtil.genericReduce(t, (t, r) => r.name === e.name ? t + 1 : t, 0) > 1) {
                  let t = n.buildDuplicateRuleNameError({
                    topLevelRule: e,
                    grammarName: r
                  });
                  i.push({
                    message: t,
                    type: c.DUPLICATE_RULE_NAME,
                    ruleName: e.name
                  });
                }
                return i;
              }(t, e, n, r));
              return i.concat(a, s, o);
            }((e = objectDefaultsUtil.defaults(e, {
              errMsgProvider: tu
            })).rules, e.tokenTypes, e.errMsgProvider, e.grammarName);
            let n = function (e) {
              let t = e.lookaheadStrategy.validate({
                rules: e.rules,
                tokenTypes: e.tokenTypes,
                grammarName: e.grammarName
              });
              return collectionMapMatcher.mapWithMatcher(t, e => Object.assign({
                type: c.CUSTOM_LOOKAHEAD_VALIDATION
              }, e));
            }({
              lookaheadStrategy: this.lookaheadStrategy,
              rules: objectValuesHelper.getObjectValues(this.gastProductionsCache),
              tokenTypes: objectValuesHelper.getObjectValues(this.tokensMap),
              grammarName: t
            });
            this.definitionErrors = this.definitionErrors.concat(r, n);
          }
        });
        if (isEmptyUtil.isEmpty(this.definitionErrors)) {
          if (this.recoveryEnabled) {
            this.TRACE_INIT("computeAllProdsFollows", () => {
              let e = function (e) {
                let t = {};
                arrayObjectForeach.arrayObjectForeach(e, e => {
                  let r = new z(e).startWalking();
                  safePropertyAssignUtil.safePropertyAssign(t, r);
                });
                return t;
              }(objectValuesHelper.getObjectValues(this.gastProductionsCache));
              this.resyncFollows = e;
            });
          }
          this.TRACE_INIT("ComputeLookaheadFunctions", () => {
            var e;
            var t;
            if ((t = (e = this.lookaheadStrategy).initialize) !== null && t !== undefined) {
              t.call(e, {
                rules: objectValuesHelper.getObjectValues(this.gastProductionsCache)
              });
            }
            this.preComputeLookaheadFunctions(objectValuesHelper.getObjectValues(this.gastProductionsCache));
          });
        }
        if (!rd.DEFER_DEFINITION_ERRORS_HANDLING && !isEmptyUtil.isEmpty(this.definitionErrors)) {
          e = collectionMapMatcher.mapWithMatcher(this.definitionErrors, e => e.message);
          throw Error(`Parser Definition Errors detected:
 ${e.join("\n-------------------------------\n")}`);
        }
      });
    }
    constructor(e, t) {
      this.definitionErrors = [];
      this.selfAnalysisDone = false;
      this.initErrorHandler(t);
      this.initLexerAdapter();
      this.initLooksAhead(t);
      this.initRecognizerEngine(e, t);
      this.initRecoverable(t);
      this.initTreeBuilder(t);
      this.initContentAssist();
      this.initGastRecorder(t);
      this.initPerformanceTracer(t);
      if (pathArrayValidation.validatePathArray(t, "ignoredIssues")) {
        throw Error("The <ignoredIssues> IParserConfig property has been deprecated.\n\tPlease use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n\tSee: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n\tFor further details.");
      }
      this.skipValidations = pathArrayValidation.validatePathArray(t, "skipValidations") ? t.skipValidations : rl.skipValidations;
    }
  }
  rd.DEFER_DEFINITION_ERRORS_HANDLING = false;
  (function (e, t) {
    t.forEach(t => {
      let r = t.prototype;
      Object.getOwnPropertyNames(r).forEach(n => {
        if (n === "constructor") {
          return;
        }
        let i = Object.getOwnPropertyDescriptor(r, n);
        if (i && (i.get || i.set)) {
          Object.defineProperty(e.prototype, n, i);
        } else {
          e.prototype[n] = t.prototype[n];
        }
      });
    });
  })(rd, [class {
    initRecoverable(e) {
      this.firstAfterRepMap = {};
      this.resyncFollows = {};
      this.recoveryEnabled = pathArrayValidation.validatePathArray(e, "recoveryEnabled") ? e.recoveryEnabled : rl.recoveryEnabled;
      if (this.recoveryEnabled) {
        this.attemptInRepetitionRecovery = t1;
      }
    }
    getTokenToInsert(e) {
      let t = ta(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
      t.isInsertedInRecovery = true;
      return t;
    }
    canTokenTypeBeInsertedInRecovery(e) {
      return true;
    }
    canTokenTypeBeDeletedInRecovery(e) {
      return true;
    }
    tryInRepetitionRecovery(e, t, r, n) {
      let i = this.findReSyncTokenType();
      let a = this.exportLexerState();
      let s = [];
      let o = false;
      let l = this.LA(1);
      let u = this.LA(1);
      let c = () => {
        let e = this.LA(0);
        let t = new tz(this.errorMessageProvider.buildMismatchTokenMessage({
          expected: n,
          actual: l,
          previous: e,
          ruleName: this.getCurrRuleFullName()
        }), l, this.LA(0));
        t.resyncedTokens = tf(s);
        this.SAVE_ERROR(t);
      };
      while (!o) {
        if (this.tokenMatcher(u, n)) {
          c();
          return;
        }
        if (r.call(this)) {
          c();
          e.apply(this, t);
          return;
        }
        if (this.tokenMatcher(u, i)) {
          o = true;
        } else {
          u = this.SKIP_TOKEN();
          this.addToResyncTokens(u, s);
        }
      }
      this.importLexerState(a);
    }
    shouldInRepetitionRecoveryBeTried(e, t, r) {
      return r !== false && !this.tokenMatcher(this.LA(1), e) && !this.isBackTracking() && !this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t));
    }
    getFollowsForInRuleRecovery(e, t) {
      let r = this.getCurrentGrammarPath(e, t);
      return this.getNextPossibleTokenTypes(r);
    }
    tryInRuleRecovery(e, t) {
      if (this.canRecoverWithSingleTokenInsertion(e, t)) {
        return this.getTokenToInsert(e);
      }
      if (this.canRecoverWithSingleTokenDeletion(e)) {
        let e = this.SKIP_TOKEN();
        this.consumeToken();
        return e;
      }
      throw new t0("sad sad panda");
    }
    canPerformInRuleRecovery(e, t) {
      return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
    }
    canRecoverWithSingleTokenInsertion(e, t) {
      if (!this.canTokenTypeBeInsertedInRecovery(e) || isEmptyUtil.isEmpty(t)) {
        return false;
      }
      let r = this.LA(1);
      return arrayValueFinder.valueFinder(t, e => this.tokenMatcher(r, e)) !== undefined;
    }
    canRecoverWithSingleTokenDeletion(e) {
      return !!this.canTokenTypeBeDeletedInRecovery(e) && this.tokenMatcher(this.LA(2), e);
    }
    isInCurrentRuleReSyncSet(e) {
      let t = this.getCurrFollowKey();
      let r = this.getFollowSetFromFollowKey(t);
      return collectionIncludesUtil.includes(r, e);
    }
    findReSyncTokenType() {
      let e = this.flattenFollowSet();
      let t = this.LA(1);
      let r = 2;
      while (true) {
        let n = arrayValueFinder.valueFinder(e, e => ej(t, e));
        if (n !== undefined) {
          return n;
        }
        t = this.LA(r);
        r++;
      }
    }
    getCurrFollowKey() {
      if (this.RULE_STACK.length === 1) {
        return tQ;
      }
      let e = this.getLastExplicitRuleShortName();
      let t = this.getLastExplicitRuleOccurrenceIndex();
      let r = this.getPreviousExplicitRuleShortName();
      return {
        ruleName: this.shortRuleNameToFullName(e),
        idxInCallingRule: t,
        inRule: this.shortRuleNameToFullName(r)
      };
    }
    buildFullFollowKeyStack() {
      let e = this.RULE_STACK;
      let t = this.RULE_OCCURRENCE_STACK;
      return collectionMapMatcher.mapWithMatcher(e, (r, n) => n === 0 ? tQ : {
        ruleName: this.shortRuleNameToFullName(r),
        idxInCallingRule: t[n],
        inRule: this.shortRuleNameToFullName(e[n - 1])
      });
    }
    flattenFollowSet() {
      let e = collectionMapMatcher.mapWithMatcher(this.buildFullFollowKeyStack(), e => this.getFollowSetFromFollowKey(e));
      return safeArrayFlattenUtil.safeFlattenArray(e);
    }
    getFollowSetFromFollowKey(e) {
      if (e === tQ) {
        return [ti];
      }
      let t = e.ruleName + e.idxInCallingRule + H + e.inRule;
      return this.resyncFollows[t];
    }
    addToResyncTokens(e, t) {
      if (!this.tokenMatcher(e, ti)) {
        t.push(e);
      }
      return t;
    }
    reSyncTo(e) {
      let t = [];
      let r = this.LA(1);
      while (this.tokenMatcher(r, e) === false) {
        r = this.SKIP_TOKEN();
        this.addToResyncTokens(r, t);
      }
      return tf(t);
    }
    attemptInRepetitionRecovery(e, t, r, n, i, a, s) {}
    getCurrentGrammarPath(e, t) {
      let r = this.getHumanReadableRuleStack();
      return {
        ruleStack: r,
        occurrenceStack: syncedReferenceBlockManager.syncReferenceBlock(this.RULE_OCCURRENCE_STACK),
        lastTok: e,
        lastTokOccurrence: t
      };
    }
    getHumanReadableRuleStack() {
      return collectionMapMatcher.mapWithMatcher(this.RULE_STACK, e => this.shortRuleNameToFullName(e));
    }
  }, class {
    initLooksAhead(e) {
      this.dynamicTokensEnabled = pathArrayValidation.validatePathArray(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : rl.dynamicTokensEnabled;
      this.maxLookahead = pathArrayValidation.validatePathArray(e, "maxLookahead") ? e.maxLookahead : rl.maxLookahead;
      this.lookaheadStrategy = pathArrayValidation.validatePathArray(e, "lookaheadStrategy") ? e.lookaheadStrategy : new t2({
        maxLookahead: this.maxLookahead
      });
      this.lookAheadFuncsCache = new Map();
    }
    preComputeLookaheadFunctions(e) {
      arrayObjectForeach.arrayObjectForeach(e, e => {
        this.TRACE_INIT(`${e.name} Rule Lookahead`, () => {
          let {
            alternation: t,
            repetition: r,
            option: n,
            repetitionMandatory: i,
            repetitionMandatoryWithSeparator: a,
            repetitionWithSeparator: s
          } = function (e) {
            t7.reset();
            e.accept(t7);
            let t = t7.dslMethods;
            t7.reset();
            return t;
          }(e);
          arrayObjectForeach.arrayObjectForeach(t, t => {
            let r = t.idx === 0 ? "" : t.idx;
            this.TRACE_INIT(`${G(t)}${r}`, () => {
              var r;
              let n = this.lookaheadStrategy.buildLookaheadForAlternation({
                prodOccurrence: t.idx,
                rule: e,
                maxLookahead: t.maxLookahead || this.maxLookahead,
                hasPredicates: t.hasPredicates,
                dynamicTokensEnabled: this.dynamicTokensEnabled
              });
              r = this.fullRuleNameToShort[e.name];
              let i = t.idx | 256 | r;
              this.setLaFuncCache(i, n);
            });
          });
          arrayObjectForeach.arrayObjectForeach(r, t => {
            this.computeLookaheadFunc(e, t.idx, 768, "Repetition", t.maxLookahead, G(t));
          });
          arrayObjectForeach.arrayObjectForeach(n, t => {
            this.computeLookaheadFunc(e, t.idx, 512, "Option", t.maxLookahead, G(t));
          });
          arrayObjectForeach.arrayObjectForeach(i, t => {
            this.computeLookaheadFunc(e, t.idx, 1024, "RepetitionMandatory", t.maxLookahead, G(t));
          });
          arrayObjectForeach.arrayObjectForeach(a, t => {
            this.computeLookaheadFunc(e, t.idx, 1536, "RepetitionMandatoryWithSeparator", t.maxLookahead, G(t));
          });
          arrayObjectForeach.arrayObjectForeach(s, t => {
            this.computeLookaheadFunc(e, t.idx, 1280, "RepetitionWithSeparator", t.maxLookahead, G(t));
          });
        });
      });
    }
    computeLookaheadFunc(e, t, r, n, i, a) {
      this.TRACE_INIT(`${a}${t === 0 ? "" : t}`, () => {
        let a = this.lookaheadStrategy.buildLookaheadForOptional({
          prodOccurrence: t,
          rule: e,
          maxLookahead: i || this.maxLookahead,
          dynamicTokensEnabled: this.dynamicTokensEnabled,
          prodType: n
        });
        let s = t | r | this.fullRuleNameToShort[e.name];
        this.setLaFuncCache(s, a);
      });
    }
    getKeyForAutomaticLookahead(e, t) {
      return t | e | this.getLastExplicitRuleShortName();
    }
    getLaFuncFromCache(e) {
      return this.lookAheadFuncsCache.get(e);
    }
    setLaFuncCache(e, t) {
      this.lookAheadFuncsCache.set(e, t);
    }
  }, class {
    initTreeBuilder(e) {
      this.CST_STACK = [];
      this.outputCst = e.outputCst;
      this.nodeLocationTracking = pathArrayValidation.validatePathArray(e, "nodeLocationTracking") ? e.nodeLocationTracking : rl.nodeLocationTracking;
      if (this.outputCst) {
        if (/full/i.test(this.nodeLocationTracking)) {
          if (this.recoveryEnabled) {
            this.setNodeLocationFromToken = t9;
            this.setNodeLocationFromNode = t9;
            this.cstPostRule = emptyExportFunction.emptyFunction;
            this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
          } else {
            this.setNodeLocationFromToken = emptyExportFunction.emptyFunction;
            this.setNodeLocationFromNode = emptyExportFunction.emptyFunction;
            this.cstPostRule = this.cstPostRuleFull;
            this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
          }
        } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
          if (this.recoveryEnabled) {
            this.setNodeLocationFromToken = t4;
            this.setNodeLocationFromNode = t4;
            this.cstPostRule = emptyExportFunction.emptyFunction;
            this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
          } else {
            this.setNodeLocationFromToken = emptyExportFunction.emptyFunction;
            this.setNodeLocationFromNode = emptyExportFunction.emptyFunction;
            this.cstPostRule = this.cstPostRuleOnlyOffset;
            this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
          }
        } else if (/none/i.test(this.nodeLocationTracking)) {
          this.setNodeLocationFromToken = emptyExportFunction.emptyFunction;
          this.setNodeLocationFromNode = emptyExportFunction.emptyFunction;
          this.cstPostRule = emptyExportFunction.emptyFunction;
          this.setInitialNodeLocation = emptyExportFunction.emptyFunction;
        } else {
          throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
        }
      } else {
        this.cstInvocationStateUpdate = emptyExportFunction.emptyFunction;
        this.cstFinallyStateUpdate = emptyExportFunction.emptyFunction;
        this.cstPostTerminal = emptyExportFunction.emptyFunction;
        this.cstPostNonTerminal = emptyExportFunction.emptyFunction;
        this.cstPostRule = emptyExportFunction.emptyFunction;
      }
    }
    setInitialNodeLocationOnlyOffsetRecovery(e) {
      e.location = {
        startOffset: NaN,
        endOffset: NaN
      };
    }
    setInitialNodeLocationOnlyOffsetRegular(e) {
      e.location = {
        startOffset: this.LA(1).startOffset,
        endOffset: NaN
      };
    }
    setInitialNodeLocationFullRecovery(e) {
      e.location = {
        startOffset: NaN,
        startLine: NaN,
        startColumn: NaN,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN
      };
    }
    setInitialNodeLocationFullRegular(e) {
      let t = this.LA(1);
      e.location = {
        startOffset: t.startOffset,
        startLine: t.startLine,
        startColumn: t.startColumn,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN
      };
    }
    cstInvocationStateUpdate(e) {
      let t = {
        name: e,
        children: Object.create(null)
      };
      this.setInitialNodeLocation(t);
      this.CST_STACK.push(t);
    }
    cstFinallyStateUpdate() {
      this.CST_STACK.pop();
    }
    cstPostRuleFull(e) {
      let t = this.LA(0);
      let r = e.location;
      if (r.startOffset <= t.startOffset == true) {
        r.endOffset = t.endOffset;
        r.endLine = t.endLine;
        r.endColumn = t.endColumn;
      } else {
        r.startOffset = NaN;
        r.startLine = NaN;
        r.startColumn = NaN;
      }
    }
    cstPostRuleOnlyOffset(e) {
      let t = this.LA(0);
      let r = e.location;
      if (r.startOffset <= t.startOffset == true) {
        r.endOffset = t.endOffset;
      } else {
        r.startOffset = NaN;
      }
    }
    cstPostTerminal(e, t) {
      let r = this.CST_STACK[this.CST_STACK.length - 1];
      if (r.children[e] === undefined) {
        r.children[e] = [t];
      } else {
        r.children[e].push(t);
      }
      this.setNodeLocationFromToken(r.location, t);
    }
    cstPostNonTerminal(e, t) {
      let r = this.CST_STACK[this.CST_STACK.length - 1];
      if (r.children[t] === undefined) {
        r.children[t] = [e];
      } else {
        r.children[t].push(e);
      }
      this.setNodeLocationFromNode(r.location, e.location);
    }
    getBaseCstVisitorConstructor() {
      if (isUndefinedCheck.isUndefined(this.baseCstVisitorConstructor)) {
        let e = function (e, t) {
          let r = function () {};
          t8(r, e + "BaseSemantics");
          r.prototype = {
            visit: function (e, t) {
              if (arrayIsArrayUtil.isArray(e)) {
                e = e[0];
              }
              if (!isUndefinedCheck.isUndefined(e)) {
                return this[e.name](e.children, t);
              }
            },
            validateVisitor: function () {
              var e;
              e = this;
              let r = function (e, t) {
                let r = genericFilterUtil.genericFilter(t, t => isFunctionUtil_1.isFunction(e[t]) === false);
                let n = collectionMapMatcher.mapWithMatcher(r, t => ({
                  msg: `Missing visitor method: <${t}> on ${e.constructor.name} CST Visitor.`,
                  type: u.MISSING_METHOD,
                  methodName: t
                }));
                return arrayCompactUtil.compactArray(n);
              }(e, t);
              if (!isEmptyUtil.isEmpty(r)) {
                let e = collectionMapMatcher.mapWithMatcher(r, e => e.msg);
                throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${e.join("\n\n").replace(/\n/g, "\n\t")}`);
              }
            }
          };
          r.prototype.constructor = r;
          r._RULE_NAMES = t;
          return r;
        }(this.className, getOwnKeys.getOwnKeys(this.gastProductionsCache));
        this.baseCstVisitorConstructor = e;
        return e;
      }
      return this.baseCstVisitorConstructor;
    }
    getBaseCstVisitorConstructorWithDefaults() {
      if (isUndefinedCheck.isUndefined(this.baseCstVisitorWithDefaultsConstructor)) {
        let e = function (e, t, r) {
          let n = function () {};
          t8(n, e + "BaseSemanticsWithDefaults");
          let i = Object.create(r.prototype);
          arrayObjectForeach.arrayObjectForeach(t, e => {
            i[e] = t3;
          });
          n.prototype = i;
          n.prototype.constructor = n;
          return n;
        }(this.className, getOwnKeys.getOwnKeys(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
        this.baseCstVisitorWithDefaultsConstructor = e;
        return e;
      }
      return this.baseCstVisitorWithDefaultsConstructor;
    }
    getLastExplicitRuleShortName() {
      let e = this.RULE_STACK;
      return e[e.length - 1];
    }
    getPreviousExplicitRuleShortName() {
      let e = this.RULE_STACK;
      return e[e.length - 2];
    }
    getLastExplicitRuleOccurrenceIndex() {
      let e = this.RULE_OCCURRENCE_STACK;
      return e[e.length - 1];
    }
  }, class {
    initLexerAdapter() {
      this.tokVector = [];
      this.tokVectorLength = 0;
      this.currIdx = -1;
    }
    set input(e) {
      if (this.selfAnalysisDone !== true) {
        throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
      }
      this.reset();
      this.tokVector = e;
      this.tokVectorLength = e.length;
    }
    get input() {
      return this.tokVector;
    }
    SKIP_TOKEN() {
      if (this.currIdx <= this.tokVector.length - 2) {
        this.consumeToken();
        return this.LA(1);
      } else {
        return ro;
      }
    }
    LA(e) {
      let t = this.currIdx + e;
      if (t < 0 || this.tokVectorLength <= t) {
        return ro;
      } else {
        return this.tokVector[t];
      }
    }
    consumeToken() {
      this.currIdx++;
    }
    exportLexerState() {
      return this.currIdx;
    }
    importLexerState(e) {
      this.currIdx = e;
    }
    resetLexerState() {
      this.currIdx = -1;
    }
    moveToTerminatedState() {
      this.currIdx = this.tokVector.length - 1;
    }
    getLexerPosition() {
      return this.exportLexerState();
    }
  }, class {
    initRecognizerEngine(e, t) {
      this.className = this.constructor.name;
      this.shortRuleNameToFull = {};
      this.fullRuleNameToShort = {};
      this.ruleShortNameIdx = 256;
      this.tokenMatcher = eH;
      this.subruleIdx = 0;
      this.definedRulesNames = [];
      this.tokensMap = {};
      this.isBackTrackingStack = [];
      this.RULE_STACK = [];
      this.RULE_OCCURRENCE_STACK = [];
      this.gastProductionsCache = {};
      if (pathArrayValidation.validatePathArray(t, "serializedGrammar")) {
        throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n\tFor Further details.");
      }
      if (arrayIsArrayUtil.isArray(e)) {
        if (isEmptyUtil.isEmpty(e)) {
          throw Error("A Token Vocabulary cannot be empty.\n\tNote that the first argument for the parser constructor\n\tis no longer a Token vector (since v4.0).");
        }
        if (typeof e[0].startOffset == "number") {
          throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n\tFor Further details.");
        }
      }
      if (arrayIsArrayUtil.isArray(e)) {
        this.tokensMap = genericReduceUtil.genericReduce(e, (e, t) => {
          e[t.name] = t;
          return e;
        }, {});
      } else if (pathArrayValidation.validatePathArray(e, "modes") && collectionMatchUtil.checkCollectionMatch(safeArrayFlattenUtil.safeFlattenArray(objectValuesHelper.getObjectValues(e.modes)), eJ)) {
        let t = safeArrayFlattenUtil.safeFlattenArray(objectValuesHelper.getObjectValues(e.modes));
        let r = dataProcessor.processData(t);
        this.tokensMap = genericReduceUtil.genericReduce(r, (e, t) => {
          e[t.name] = t;
          return e;
        }, {});
      } else if (isObjectOrFunction_1_1.isObjectOrFunction(e)) {
        this.tokensMap = syncedReferenceBlockManager.syncReferenceBlock(e);
      } else {
        throw Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
      }
      this.tokensMap.EOF = ti;
      let r = pathArrayValidation.validatePathArray(e, "modes") ? safeArrayFlattenUtil.safeFlattenArray(objectValuesHelper.getObjectValues(e.modes)) : objectValuesHelper.getObjectValues(e);
      let n = collectionMatchUtil.checkCollectionMatch(r, e => isEmptyUtil.isEmpty(e.categoryMatches));
      this.tokenMatcher = n ? eH : ej;
      eq(objectValuesHelper.getObjectValues(this.tokensMap));
    }
    defineRule(e, t, r) {
      let n;
      if (this.selfAnalysisDone) {
        throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
      }
      let i = pathArrayValidation.validatePathArray(r, "resyncEnabled") ? r.resyncEnabled : ru.resyncEnabled;
      let a = pathArrayValidation.validatePathArray(r, "recoveryValueFunc") ? r.recoveryValueFunc : ru.recoveryValueFunc;
      let s = this.ruleShortNameIdx << 12;
      this.ruleShortNameIdx++;
      this.shortRuleNameToFull[s] = e;
      this.fullRuleNameToShort[e] = s;
      return Object.assign(this.outputCst === true ? function (...r) {
        try {
          this.ruleInvocationStateUpdate(s, e, this.subruleIdx);
          t.apply(this, r);
          let n = this.CST_STACK[this.CST_STACK.length - 1];
          this.cstPostRule(n);
          return n;
        } catch (e) {
          return this.invokeRuleCatch(e, i, a);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      } : function (...r) {
        try {
          this.ruleInvocationStateUpdate(s, e, this.subruleIdx);
          return t.apply(this, r);
        } catch (e) {
          return this.invokeRuleCatch(e, i, a);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      }, {
        ruleName: e,
        originalGrammarAction: t
      });
    }
    invokeRuleCatch(e, t, r) {
      let n = this.RULE_STACK.length === 1;
      let i = t && !this.isBackTracking() && this.recoveryEnabled;
      if (tj(e)) {
        if (i) {
          let t = this.findReSyncTokenType();
          if (this.isInCurrentRuleReSyncSet(t)) {
            e.resyncedTokens = this.reSyncTo(t);
            if (!this.outputCst) {
              return r(e);
            }
            {
              let e = this.CST_STACK[this.CST_STACK.length - 1];
              e.recoveredNode = true;
              return e;
            }
          }
          if (this.outputCst) {
            let t = this.CST_STACK[this.CST_STACK.length - 1];
            t.recoveredNode = true;
            e.partialCstResult = t;
          }
          throw e;
        }
        if (n) {
          this.moveToTerminatedState();
          return r(e);
        }
      }
      throw e;
    }
    optionInternal(e, t) {
      let r = this.getKeyForAutomaticLookahead(512, t);
      return this.optionInternalLogic(e, t, r);
    }
    optionInternalLogic(e, t, r) {
      let n;
      let i = this.getLaFuncFromCache(r);
      if (typeof e != "function") {
        n = e.DEF;
        let t = e.GATE;
        if (t !== undefined) {
          let e = i;
          i = () => t.call(this) && e.call(this);
        }
      } else {
        n = e;
      }
      if (i.call(this) === true) {
        return n.call(this);
      }
    }
    atLeastOneInternal(e, t) {
      let r = this.getKeyForAutomaticLookahead(1024, e);
      return this.atLeastOneInternalLogic(e, t, r);
    }
    atLeastOneInternalLogic(e, t, r) {
      let n;
      let i = this.getLaFuncFromCache(r);
      if (typeof t != "function") {
        n = t.DEF;
        let e = t.GATE;
        if (e !== undefined) {
          let t = i;
          i = () => e.call(this) && t.call(this);
        }
      } else {
        n = t;
      }
      if (i.call(this) === true) {
        let e = this.doSingleRepetition(n);
        while (i.call(this) === true && e === true) {
          e = this.doSingleRepetition(n);
        }
      } else {
        throw this.raiseEarlyExitException(e, l.REPETITION_MANDATORY, t.ERR_MSG);
      }
      this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], i, 1024, e, tv);
    }
    atLeastOneSepFirstInternal(e, t) {
      let r = this.getKeyForAutomaticLookahead(1536, e);
      this.atLeastOneSepFirstInternalLogic(e, t, r);
    }
    atLeastOneSepFirstInternalLogic(e, t, r) {
      let n = t.DEF;
      let i = t.SEP;
      if (this.getLaFuncFromCache(r).call(this) === true) {
        n.call(this);
        let t = () => this.tokenMatcher(this.LA(1), i);
        while (this.tokenMatcher(this.LA(1), i) === true) {
          this.CONSUME(i);
          n.call(this);
        }
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e, i, t, n, tR], t, 1536, e, tR);
      } else {
        throw this.raiseEarlyExitException(e, l.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
      }
    }
    manyInternal(e, t) {
      let r = this.getKeyForAutomaticLookahead(768, e);
      return this.manyInternalLogic(e, t, r);
    }
    manyInternalLogic(e, t, r) {
      let n;
      let i = this.getLaFuncFromCache(r);
      if (typeof t != "function") {
        n = t.DEF;
        let e = t.GATE;
        if (e !== undefined) {
          let t = i;
          i = () => e.call(this) && t.call(this);
        }
      } else {
        n = t;
      }
      let a = true;
      while (i.call(this) === true && a === true) {
        a = this.doSingleRepetition(n);
      }
      this.attemptInRepetitionRecovery(this.manyInternal, [e, t], i, 768, e, ty, a);
    }
    manySepFirstInternal(e, t) {
      let r = this.getKeyForAutomaticLookahead(1280, e);
      this.manySepFirstInternalLogic(e, t, r);
    }
    manySepFirstInternalLogic(e, t, r) {
      let n = t.DEF;
      let i = t.SEP;
      if (this.getLaFuncFromCache(r).call(this) === true) {
        n.call(this);
        let t = () => this.tokenMatcher(this.LA(1), i);
        while (this.tokenMatcher(this.LA(1), i) === true) {
          this.CONSUME(i);
          n.call(this);
        }
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e, i, t, n, tT], t, 1280, e, tT);
      }
    }
    repetitionSepSecondInternal(e, t, r, n, i) {
      while (r()) {
        this.CONSUME(t);
        n.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [e, t, r, n, i], r, 1536, e, i);
    }
    doSingleRepetition(e) {
      let t = this.getLexerPosition();
      e.call(this);
      return this.getLexerPosition() > t;
    }
    orInternal(e, t) {
      let r = this.getKeyForAutomaticLookahead(256, t);
      let n = arrayIsArrayUtil.isArray(e) ? e : e.DEF;
      let i = this.getLaFuncFromCache(r).call(this, n);
      if (i !== undefined) {
        return n[i].ALT.call(this);
      }
      this.raiseNoAltException(t, e.ERR_MSG);
    }
    ruleFinallyStateUpdate() {
      this.RULE_STACK.pop();
      this.RULE_OCCURRENCE_STACK.pop();
      this.cstFinallyStateUpdate();
      if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
        let e = this.LA(1);
        let t = this.errorMessageProvider.buildNotAllInputParsedMessage({
          firstRedundant: e,
          ruleName: this.getCurrRuleFullName()
        });
        this.SAVE_ERROR(new tq(t, e));
      }
    }
    subruleInternal(e, t, r) {
      let n;
      try {
        let i = r !== undefined ? r.ARGS : undefined;
        this.subruleIdx = t;
        n = e.apply(this, i);
        this.cstPostNonTerminal(n, r !== undefined && r.LABEL !== undefined ? r.LABEL : e.ruleName);
        return n;
      } catch (t) {
        throw this.subruleInternalError(t, r, e.ruleName);
      }
    }
    subruleInternalError(e, t, r) {
      if (tj(e) && e.partialCstResult !== undefined) {
        this.cstPostNonTerminal(e.partialCstResult, t !== undefined && t.LABEL !== undefined ? t.LABEL : r);
        delete e.partialCstResult;
      }
      throw e;
    }
    consumeInternal(e, t, r) {
      let n;
      try {
        let t = this.LA(1);
        if (this.tokenMatcher(t, e) === true) {
          this.consumeToken();
          n = t;
        } else {
          this.consumeInternalError(e, t, r);
        }
      } catch (r) {
        n = this.consumeInternalRecovery(e, t, r);
      }
      this.cstPostTerminal(r !== undefined && r.LABEL !== undefined ? r.LABEL : e.name, n);
      return n;
    }
    consumeInternalError(e, t, r) {
      let n;
      let i = this.LA(0);
      n = r !== undefined && r.ERR_MSG ? r.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({
        expected: e,
        actual: t,
        previous: i,
        ruleName: this.getCurrRuleFullName()
      });
      throw this.SAVE_ERROR(new tz(n, t, i));
    }
    consumeInternalRecovery(e, t, r) {
      if (this.recoveryEnabled && r.name === "MismatchedTokenException" && !this.isBackTracking()) {
        let n = this.getFollowsForInRuleRecovery(e, t);
        try {
          return this.tryInRuleRecovery(e, n);
        } catch (e) {
          if (e.name === tJ) {
            throw r;
          }
          throw e;
        }
      } else {
        throw r;
      }
    }
    saveRecogState() {
      let e = this.errors;
      let t = syncedReferenceBlockManager.syncReferenceBlock(this.RULE_STACK);
      return {
        errors: e,
        lexerState: this.exportLexerState(),
        RULE_STACK: t,
        CST_STACK: this.CST_STACK
      };
    }
    reloadRecogState(e) {
      this.errors = e.errors;
      this.importLexerState(e.lexerState);
      this.RULE_STACK = e.RULE_STACK;
    }
    ruleInvocationStateUpdate(e, t, r) {
      this.RULE_OCCURRENCE_STACK.push(r);
      this.RULE_STACK.push(e);
      this.cstInvocationStateUpdate(t);
    }
    isBackTracking() {
      return this.isBackTrackingStack.length !== 0;
    }
    getCurrRuleFullName() {
      let e = this.getLastExplicitRuleShortName();
      return this.shortRuleNameToFull[e];
    }
    shortRuleNameToFullName(e) {
      return this.shortRuleNameToFull[e];
    }
    isAtEndOfInput() {
      return this.tokenMatcher(this.LA(1), ti);
    }
    reset() {
      this.resetLexerState();
      this.subruleIdx = 0;
      this.isBackTrackingStack = [];
      this.errors = [];
      this.RULE_STACK = [];
      this.CST_STACK = [];
      this.RULE_OCCURRENCE_STACK = [];
    }
  }, class {
    ACTION(e) {
      return e.call(this);
    }
    consume(e, t, r) {
      return this.consumeInternal(t, e, r);
    }
    subrule(e, t, r) {
      return this.subruleInternal(t, e, r);
    }
    option(e, t) {
      return this.optionInternal(t, e);
    }
    or(e, t) {
      return this.orInternal(t, e);
    }
    many(e, t) {
      return this.manyInternal(e, t);
    }
    atLeastOne(e, t) {
      return this.atLeastOneInternal(e, t);
    }
    CONSUME(e, t) {
      return this.consumeInternal(e, 0, t);
    }
    CONSUME1(e, t) {
      return this.consumeInternal(e, 1, t);
    }
    CONSUME2(e, t) {
      return this.consumeInternal(e, 2, t);
    }
    CONSUME3(e, t) {
      return this.consumeInternal(e, 3, t);
    }
    CONSUME4(e, t) {
      return this.consumeInternal(e, 4, t);
    }
    CONSUME5(e, t) {
      return this.consumeInternal(e, 5, t);
    }
    CONSUME6(e, t) {
      return this.consumeInternal(e, 6, t);
    }
    CONSUME7(e, t) {
      return this.consumeInternal(e, 7, t);
    }
    CONSUME8(e, t) {
      return this.consumeInternal(e, 8, t);
    }
    CONSUME9(e, t) {
      return this.consumeInternal(e, 9, t);
    }
    SUBRULE(e, t) {
      return this.subruleInternal(e, 0, t);
    }
    SUBRULE1(e, t) {
      return this.subruleInternal(e, 1, t);
    }
    SUBRULE2(e, t) {
      return this.subruleInternal(e, 2, t);
    }
    SUBRULE3(e, t) {
      return this.subruleInternal(e, 3, t);
    }
    SUBRULE4(e, t) {
      return this.subruleInternal(e, 4, t);
    }
    SUBRULE5(e, t) {
      return this.subruleInternal(e, 5, t);
    }
    SUBRULE6(e, t) {
      return this.subruleInternal(e, 6, t);
    }
    SUBRULE7(e, t) {
      return this.subruleInternal(e, 7, t);
    }
    SUBRULE8(e, t) {
      return this.subruleInternal(e, 8, t);
    }
    SUBRULE9(e, t) {
      return this.subruleInternal(e, 9, t);
    }
    OPTION(e) {
      return this.optionInternal(e, 0);
    }
    OPTION1(e) {
      return this.optionInternal(e, 1);
    }
    OPTION2(e) {
      return this.optionInternal(e, 2);
    }
    OPTION3(e) {
      return this.optionInternal(e, 3);
    }
    OPTION4(e) {
      return this.optionInternal(e, 4);
    }
    OPTION5(e) {
      return this.optionInternal(e, 5);
    }
    OPTION6(e) {
      return this.optionInternal(e, 6);
    }
    OPTION7(e) {
      return this.optionInternal(e, 7);
    }
    OPTION8(e) {
      return this.optionInternal(e, 8);
    }
    OPTION9(e) {
      return this.optionInternal(e, 9);
    }
    OR(e) {
      return this.orInternal(e, 0);
    }
    OR1(e) {
      return this.orInternal(e, 1);
    }
    OR2(e) {
      return this.orInternal(e, 2);
    }
    OR3(e) {
      return this.orInternal(e, 3);
    }
    OR4(e) {
      return this.orInternal(e, 4);
    }
    OR5(e) {
      return this.orInternal(e, 5);
    }
    OR6(e) {
      return this.orInternal(e, 6);
    }
    OR7(e) {
      return this.orInternal(e, 7);
    }
    OR8(e) {
      return this.orInternal(e, 8);
    }
    OR9(e) {
      return this.orInternal(e, 9);
    }
    MANY(e) {
      this.manyInternal(0, e);
    }
    MANY1(e) {
      this.manyInternal(1, e);
    }
    MANY2(e) {
      this.manyInternal(2, e);
    }
    MANY3(e) {
      this.manyInternal(3, e);
    }
    MANY4(e) {
      this.manyInternal(4, e);
    }
    MANY5(e) {
      this.manyInternal(5, e);
    }
    MANY6(e) {
      this.manyInternal(6, e);
    }
    MANY7(e) {
      this.manyInternal(7, e);
    }
    MANY8(e) {
      this.manyInternal(8, e);
    }
    MANY9(e) {
      this.manyInternal(9, e);
    }
    MANY_SEP(e) {
      this.manySepFirstInternal(0, e);
    }
    MANY_SEP1(e) {
      this.manySepFirstInternal(1, e);
    }
    MANY_SEP2(e) {
      this.manySepFirstInternal(2, e);
    }
    MANY_SEP3(e) {
      this.manySepFirstInternal(3, e);
    }
    MANY_SEP4(e) {
      this.manySepFirstInternal(4, e);
    }
    MANY_SEP5(e) {
      this.manySepFirstInternal(5, e);
    }
    MANY_SEP6(e) {
      this.manySepFirstInternal(6, e);
    }
    MANY_SEP7(e) {
      this.manySepFirstInternal(7, e);
    }
    MANY_SEP8(e) {
      this.manySepFirstInternal(8, e);
    }
    MANY_SEP9(e) {
      this.manySepFirstInternal(9, e);
    }
    AT_LEAST_ONE(e) {
      this.atLeastOneInternal(0, e);
    }
    AT_LEAST_ONE1(e) {
      return this.atLeastOneInternal(1, e);
    }
    AT_LEAST_ONE2(e) {
      this.atLeastOneInternal(2, e);
    }
    AT_LEAST_ONE3(e) {
      this.atLeastOneInternal(3, e);
    }
    AT_LEAST_ONE4(e) {
      this.atLeastOneInternal(4, e);
    }
    AT_LEAST_ONE5(e) {
      this.atLeastOneInternal(5, e);
    }
    AT_LEAST_ONE6(e) {
      this.atLeastOneInternal(6, e);
    }
    AT_LEAST_ONE7(e) {
      this.atLeastOneInternal(7, e);
    }
    AT_LEAST_ONE8(e) {
      this.atLeastOneInternal(8, e);
    }
    AT_LEAST_ONE9(e) {
      this.atLeastOneInternal(9, e);
    }
    AT_LEAST_ONE_SEP(e) {
      this.atLeastOneSepFirstInternal(0, e);
    }
    AT_LEAST_ONE_SEP1(e) {
      this.atLeastOneSepFirstInternal(1, e);
    }
    AT_LEAST_ONE_SEP2(e) {
      this.atLeastOneSepFirstInternal(2, e);
    }
    AT_LEAST_ONE_SEP3(e) {
      this.atLeastOneSepFirstInternal(3, e);
    }
    AT_LEAST_ONE_SEP4(e) {
      this.atLeastOneSepFirstInternal(4, e);
    }
    AT_LEAST_ONE_SEP5(e) {
      this.atLeastOneSepFirstInternal(5, e);
    }
    AT_LEAST_ONE_SEP6(e) {
      this.atLeastOneSepFirstInternal(6, e);
    }
    AT_LEAST_ONE_SEP7(e) {
      this.atLeastOneSepFirstInternal(7, e);
    }
    AT_LEAST_ONE_SEP8(e) {
      this.atLeastOneSepFirstInternal(8, e);
    }
    AT_LEAST_ONE_SEP9(e) {
      this.atLeastOneSepFirstInternal(9, e);
    }
    RULE(e, t, r = ru) {
      if (collectionIncludesUtil.includes(this.definedRulesNames, e)) {
        let t = {
          message: tu.buildDuplicateRuleNameError({
            topLevelRule: e,
            grammarName: this.className
          }),
          type: c.DUPLICATE_RULE_NAME,
          ruleName: e
        };
        this.definitionErrors.push(t);
      }
      this.definedRulesNames.push(e);
      let n = this.defineRule(e, t, r);
      this[e] = n;
      return n;
    }
    OVERRIDE_RULE(e, t, r = ru) {
      let n = function (e, t, r) {
        let n = [];
        if (!collectionIncludesUtil.includes(t, e)) {
          n.push({
            message: `Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,
            type: c.INVALID_RULE_OVERRIDE,
            ruleName: e
          });
        }
        return n;
      }(e, this.definedRulesNames, this.className);
      this.definitionErrors = this.definitionErrors.concat(n);
      let i = this.defineRule(e, t, r);
      this[e] = i;
      return i;
    }
    BACKTRACK(e, t) {
      return function () {
        this.isBackTrackingStack.push(1);
        let r = this.saveRecogState();
        try {
          e.apply(this, t);
          return true;
        } catch (e) {
          if (tj(e)) {
            return false;
          }
          throw e;
        } finally {
          this.reloadRecogState(r);
          this.isBackTrackingStack.pop();
        }
      };
    }
    getGAstProductions() {
      return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
      var e;
      e = objectValuesHelper.getObjectValues(this.gastProductionsCache);
      return collectionMapMatcher.mapWithMatcher(e, function e(t) {
        function r(t) {
          return collectionMapMatcher.mapWithMatcher(t, e);
        }
        if (t instanceof I) {
          let e = {
            type: "NonTerminal",
            name: t.nonTerminalName,
            idx: t.idx
          };
          if (isStringTypeCheck.isString(t.label)) {
            e.label = t.label;
          }
          return e;
        }
        if (t instanceof C) {
          return {
            type: "Alternative",
            definition: r(t.definition)
          };
        }
        if (t instanceof N) {
          return {
            type: "Option",
            idx: t.idx,
            definition: r(t.definition)
          };
        }
        if (t instanceof w) {
          return {
            type: "RepetitionMandatory",
            idx: t.idx,
            definition: r(t.definition)
          };
        }
        if (t instanceof L) {
          return {
            type: "RepetitionMandatoryWithSeparator",
            idx: t.idx,
            separator: e(new P({
              terminalType: t.separator
            })),
            definition: r(t.definition)
          };
        } else if (t instanceof _) {
          return {
            type: "RepetitionWithSeparator",
            idx: t.idx,
            separator: e(new P({
              terminalType: t.separator
            })),
            definition: r(t.definition)
          };
        } else if (t instanceof b) {
          return {
            type: "Repetition",
            idx: t.idx,
            definition: r(t.definition)
          };
        } else if (t instanceof O) {
          return {
            type: "Alternation",
            idx: t.idx,
            definition: r(t.definition)
          };
        } else if (t instanceof P) {
          var n;
          var i;
          let e = {
            type: "Terminal",
            name: t.terminalType.name,
            label: (i = n = t.terminalType, isStringTypeCheck.isString(i.LABEL) && i.LABEL !== "") ? n.LABEL : n.name,
            idx: t.idx
          };
          if (isStringTypeCheck.isString(t.label)) {
            e.terminalLabel = t.label;
          }
          let r = t.terminalType.PATTERN;
          if (t.terminalType.PATTERN) {
            e.pattern = isRegexpCheck.isRegExp(r) ? r.source : r;
          }
          return e;
        } else if (t instanceof S) {
          return {
            type: "Rule",
            name: t.name,
            orgText: t.orgText,
            definition: r(t.definition)
          };
        } else {
          throw Error("non exhaustive match");
        }
      });
    }
  }, class {
    initErrorHandler(e) {
      this._errors = [];
      this.errorMessageProvider = pathArrayValidation.validatePathArray(e, "errorMessageProvider") ? e.errorMessageProvider : rl.errorMessageProvider;
    }
    SAVE_ERROR(e) {
      if (tj(e)) {
        e.context = {
          ruleStack: this.getHumanReadableRuleStack(),
          ruleOccurrenceStack: syncedReferenceBlockManager.syncReferenceBlock(this.RULE_OCCURRENCE_STACK)
        };
        this._errors.push(e);
        return e;
      }
      throw Error("Trying to save an Error which is not a RecognitionException");
    }
    get errors() {
      return syncedReferenceBlockManager.syncReferenceBlock(this._errors);
    }
    set errors(e) {
      this._errors = e;
    }
    raiseEarlyExitException(e, t, r) {
      let n = this.getCurrRuleFullName();
      let i = t_(e, this.getGAstProductions()[n], t, this.maxLookahead)[0];
      let a = [];
      for (let e = 1; e <= this.maxLookahead; e++) {
        a.push(this.LA(e));
      }
      let s = this.errorMessageProvider.buildEarlyExitMessage({
        expectedIterationPaths: i,
        actual: a,
        previous: this.LA(0),
        customUserDescription: r,
        ruleName: n
      });
      throw this.SAVE_ERROR(new tX(s, this.LA(1), this.LA(0)));
    }
    raiseNoAltException(e, t) {
      let r = this.getCurrRuleFullName();
      let n = tb(e, this.getGAstProductions()[r], this.maxLookahead);
      let i = [];
      for (let e = 1; e <= this.maxLookahead; e++) {
        i.push(this.LA(e));
      }
      let a = this.LA(0);
      let s = this.errorMessageProvider.buildNoViableAltMessage({
        expectedPathsPerAlt: n,
        actual: i,
        previous: a,
        customUserDescription: t,
        ruleName: this.getCurrRuleFullName()
      });
      throw this.SAVE_ERROR(new tY(s, this.LA(1), a));
    }
  }, class {
    initContentAssist() {}
    computeContentAssist(e, t) {
      let r = this.gastProductionsCache[e];
      if (isUndefinedCheck.isUndefined(r)) {
        throw Error(`Rule ->${e}<- does not exist in this grammar.`);
      }
      return tE([r], t, this.tokenMatcher, this.maxLookahead);
    }
    getNextPossibleTokenTypes(e) {
      let t = arrayFirstElement.getFirstElement(e.ruleStack);
      return new tm(this.getGAstProductions()[t], e).startWalking();
    }
  }, class {
    initGastRecorder(e) {
      this.recordingProdStack = [];
      this.RECORDING_PHASE = false;
    }
    enableRecording() {
      this.RECORDING_PHASE = true;
      this.TRACE_INIT("Enable Recording", () => {
        for (let e = 0; e < 10; e++) {
          let t = e > 0 ? e : "";
          this[`CONSUME${t}`] = function (t, r) {
            return this.consumeInternalRecord(t, e, r);
          };
          this[`SUBRULE${t}`] = function (t, r) {
            return this.subruleInternalRecord(t, e, r);
          };
          this[`OPTION${t}`] = function (t) {
            return this.optionInternalRecord(t, e);
          };
          this[`OR${t}`] = function (t) {
            return this.orInternalRecord(t, e);
          };
          this[`MANY${t}`] = function (t) {
            this.manyInternalRecord(e, t);
          };
          this[`MANY_SEP${t}`] = function (t) {
            this.manySepFirstInternalRecord(e, t);
          };
          this[`AT_LEAST_ONE${t}`] = function (t) {
            this.atLeastOneInternalRecord(e, t);
          };
          this[`AT_LEAST_ONE_SEP${t}`] = function (t) {
            this.atLeastOneSepFirstInternalRecord(e, t);
          };
        }
        this.consume = function (e, t, r) {
          return this.consumeInternalRecord(t, e, r);
        };
        this.subrule = function (e, t, r) {
          return this.subruleInternalRecord(t, e, r);
        };
        this.option = function (e, t) {
          return this.optionInternalRecord(t, e);
        };
        this.or = function (e, t) {
          return this.orInternalRecord(t, e);
        };
        this.many = function (e, t) {
          this.manyInternalRecord(e, t);
        };
        this.atLeastOne = function (e, t) {
          this.atLeastOneInternalRecord(e, t);
        };
        this.ACTION = this.ACTION_RECORD;
        this.BACKTRACK = this.BACKTRACK_RECORD;
        this.LA = this.LA_RECORD;
      });
    }
    disableRecording() {
      this.RECORDING_PHASE = false;
      this.TRACE_INIT("Deleting Recording methods", () => {
        for (let e = 0; e < 10; e++) {
          let t = e > 0 ? e : "";
          delete this[`CONSUME${t}`];
          delete this[`SUBRULE${t}`];
          delete this[`OPTION${t}`];
          delete this[`OR${t}`];
          delete this[`MANY${t}`];
          delete this[`MANY_SEP${t}`];
          delete this[`AT_LEAST_ONE${t}`];
          delete this[`AT_LEAST_ONE_SEP${t}`];
        }
        delete this.consume;
        delete this.subrule;
        delete this.option;
        delete this.or;
        delete this.many;
        delete this.atLeastOne;
        delete this.ACTION;
        delete this.BACKTRACK;
        delete this.LA;
      });
    }
    ACTION_RECORD(e) {}
    BACKTRACK_RECORD(e, t) {
      return () => true;
    }
    LA_RECORD(e) {
      return ro;
    }
    topLevelRuleRecord(e, t) {
      try {
        let r = new S({
          definition: [],
          name: e
        });
        r.name = e;
        this.recordingProdStack.push(r);
        t.call(this);
        this.recordingProdStack.pop();
        return r;
      } catch (e) {
        if (e.KNOWN_RECORDER_ERROR !== true) {
          try {
            e.message = e.message + "\n\t This error was thrown during the \"grammar recording phase\" For more info see:\n\thttps://chevrotain.io/docs/guide/internals.html#grammar-recording";
          } catch (e) {}
        }
        throw e;
      }
    }
    optionInternalRecord(e, t) {
      return rn.call(this, N, e, t);
    }
    atLeastOneInternalRecord(e, t) {
      rn.call(this, w, t, e);
    }
    atLeastOneSepFirstInternalRecord(e, t) {
      rn.call(this, L, t, e, true);
    }
    manyInternalRecord(e, t) {
      rn.call(this, b, t, e);
    }
    manySepFirstInternalRecord(e, t) {
      rn.call(this, _, t, e, true);
    }
    orInternalRecord(e, t) {
      return ri.call(this, e, t);
    }
    subruleInternalRecord(e, t, r) {
      rs(t);
      if (!e || pathArrayValidation.validatePathArray(e, "ruleName") === false) {
        let r = Error(`<SUBRULE${ra(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
        r.KNOWN_RECORDER_ERROR = true;
        throw r;
      }
      let n = lastElementHelper.getLastElement(this.recordingProdStack);
      let i = new I({
        idx: t,
        nonTerminalName: e.ruleName,
        label: r == null ? undefined : r.LABEL,
        referencedRule: undefined
      });
      n.definition.push(i);
      if (this.outputCst) {
        return rr;
      } else {
        return t5;
      }
    }
    consumeInternalRecord(e, t, r) {
      rs(t);
      if (!eX(e)) {
        let r = Error(`<CONSUME${ra(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
        r.KNOWN_RECORDER_ERROR = true;
        throw r;
      }
      let n = lastElementHelper.getLastElement(this.recordingProdStack);
      let i = new P({
        idx: t,
        terminalType: e,
        label: r == null ? undefined : r.LABEL
      });
      n.definition.push(i);
      return rt;
    }
  }, class {
    initPerformanceTracer(e) {
      if (pathArrayValidation.validatePathArray(e, "traceInitPerf")) {
        let t = e.traceInitPerf;
        let r = typeof t == "number";
        this.traceInitMaxIdent = r ? t : Infinity;
        this.traceInitPerf = r ? t > 0 : t;
      } else {
        this.traceInitMaxIdent = 0;
        this.traceInitPerf = rl.traceInitPerf;
      }
      this.traceInitIndent = -1;
    }
    TRACE_INIT(e, t) {
      if (this.traceInitPerf !== true) {
        return t();
      }
      {
        this.traceInitIndent++;
        let r = Array(this.traceInitIndent + 1).join("\t");
        this.traceInitIndent;
        this.traceInitMaxIdent;
        let {
          time: n,
          value: i
        } = eW(t);
        let a = n > 10 ? console.warn : console.log;
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          a(`${r}<-- <${e}> time: ${n}ms`);
        }
        this.traceInitIndent--;
        return i;
      }
    }
  }]);
  class rh extends rd {
    constructor(e, t = rl) {
      let r = syncedReferenceBlockManager.syncReferenceBlock(t);
      r.outputCst = false;
      super(e, r);
    }
  }
  require.d(exports, {
    tokenMatcher: function () {
      return ts;
    },
    Alternation: function () {
      return O;
    },
    EOF: function () {
      return ti;
    },
    Option: function () {
      return N;
    },
    createToken: function () {
      return e7;
    },
    RepetitionMandatory: function () {
      return w;
    },
    Repetition: function () {
      return _;
    },
    buildLookaheadFuncForOr: function () {
      return tk;
    },
    EmbeddedActionsParser: function () {
      return rh;
    },
    errorMessageProvider: function () {
      return e0;
    },
    RepetitionMandatoryWithSeparator: function () {
      return b;
    },
    defaultParserErrorProvider: function () {
      return to;
    },
    Alternation_1: function () {
      return P;
    },
    Lexer: function () {
      return e2;
    },
    RepetitionWithSeparator: function () {
      return L;
    },
    createTokenInstance: function () {
      return rc;
    },
    DefaultGrammarValidator: function () {
      return t2;
    },
    NonTerminal: function () {
      return I;
    }
  });
}