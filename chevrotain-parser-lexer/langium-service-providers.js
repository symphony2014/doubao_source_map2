// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'getLanguageServices'
// - Renamed export 'T' to 'getSharedServices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 425478
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
  var d;
  var h;
  var f;
  var p;
  var m;
  var g;
  var y;
  var T;
  var v;
  var R;
  var $;
  var E;
  var A;
  var k;
  var x;
  var I;
  var S;
  var C;
  var N;
  var w;
  var L;
  var b;
  var _;
  var O;
  var P;
  var M;
  var D;
  var Z;
  var F;
  var U;
  var G;
  var B;
  var K;
  var V;
  var W;
  var j;
  var H;
  var z;
  var Y;
  var q;
  var X;
  var Q;
  var J;
  var ee;
  var et;
  var er;
  var en;
  var ei;
  var ea;
  var es;
  var eo;
  var el;
  var eu;
  var ec;
  var ed;
  var eh;
  var ef;
  var ep;
  var em;
  var eg;
  var ey;
  var eT;
  var ev;
  var eR;
  var e$;
  var eE;
  var eA;
  var ek;
  var ex;
  var eI;
  var eS;
  var eC;
  var eN;
  var ew;
  var eL;
  var eb;
  var e_;
  var eO;
  var eP;
  var eM;
  var eD;
  var eZ;
  var eF;
  var eU;
  var eG;
  var eB;
  var eK;
  var eV;
  var eW;
  var ej;
  var eH;
  var ez;
  var eY;
  var eq;
  var eX;
  var eQ;
  var eJ;
  var e0;
  var e1;
  var e2;
  var e7;
  var e4;
  var e9;
  var e8;
  var e3;
  var e6;
  var e5;
  var te;
  var tt;
  var tr;
  var tn;
  var ti;
  var ta;
  var ts;
  var to;
  var tl;
  var tu;
  var tc;
  var td;
  var th;
  var tf;
  var tp;
  var tm;
  var tg;
  var ty;
  var tT;
  var tv;
  var tR;
  var t$;
  var tE;
  var tA;
  var tk;
  var tx;
  var tI;
  var tS;
  var tC;
  var tN;
  var positionRangeUtils_1 = require("position-range-utils_1") /*id: 465350*/;
  var grammarTypeNameResolver = require("grammar-type-name-resolver") /*id: 120148*/;
  var regexpUtilityHelpers = require("regexp-utility-helpers") /*id: 880286*/;
  var grammarTypeValidators = require("grammar-type-validators") /*id: 279057*/;
  var chevrotainParserLexerUtilities = require("chevrotain-parser-lexer-utilities") /*id: 917158*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  function tD(e, t, r) {
    return `${e.name}_${t}_${r}`;
  }
  class tZ {
    constructor(e) {
      this.target = e;
    }
    isEpsilon() {
      return false;
    }
  }
  class tF extends tZ {
    constructor(e, t) {
      super(e);
      this.tokenType = t;
    }
  }
  class tU extends tZ {
    constructor(e) {
      super(e);
    }
    isEpsilon() {
      return true;
    }
  }
  class tG extends tZ {
    constructor(e, t, r) {
      super(e);
      this.rule = t;
      this.followState = r;
    }
    isEpsilon() {
      return true;
    }
  }
  function tB(e, t, r) {
    let n = genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(r.definition, r => function e(t, r, n) {
      if (n instanceof chevrotainParserLexerUtilities.Alternation_1) {
        return tH(t, r, n.terminalType, n);
      }
      if (n instanceof chevrotainParserLexerUtilities.NonTerminal) {
        return function (e, t, r) {
          let n = r.referencedRule;
          let i = e.ruleToStartState.get(n);
          let a = tY(e, t, r, {
            type: 1
          });
          let s = tY(e, t, r, {
            type: 1
          });
          tq(a, new tG(i, n, s));
          return {
            left: a,
            right: s
          };
        }(t, r, n);
      }
      if (n instanceof chevrotainParserLexerUtilities.Alternation) {
        return function (t, r, n) {
          let i = tY(t, r, n, {
            type: 1
          });
          tW(t, i);
          let a = collectionMapMatcher.mapWithMatcher(n.definition, n => e(t, r, n));
          return tj(t, r, i, n, ...a);
        }(t, r, n);
      }
      if (n instanceof chevrotainParserLexerUtilities.Option) {
        return function (e, t, r) {
          let n = tY(e, t, r, {
            type: 1
          });
          tW(e, n);
          let i = tj(e, t, n, r, tB(e, t, r));
          return function (e, t, r, n) {
            let i = n.left;
            tz(i, n.right);
            e.decisionMap[tD(t, "Option", r.idx)] = i;
            return n;
          }(e, t, r, i);
        }(t, r, n);
      }
      if (n instanceof chevrotainParserLexerUtilities.RepetitionMandatoryWithSeparator) {
        return function (e, t, r) {
          let n = tY(e, t, r, {
            type: 5
          });
          tW(e, n);
          let i = tj(e, t, n, r, tB(e, t, r));
          return tV(e, t, r, i);
        }(t, r, n);
      } else if (n instanceof chevrotainParserLexerUtilities.Repetition) {
        return function (e, t, r) {
          let n = tY(e, t, r, {
            type: 5
          });
          tW(e, n);
          let i = tj(e, t, n, r, tB(e, t, r));
          let a = tH(e, t, r.separator, r);
          return tV(e, t, r, i, a);
        }(t, r, n);
      } else if (n instanceof chevrotainParserLexerUtilities.RepetitionMandatory) {
        return function (e, t, r) {
          let n = tY(e, t, r, {
            type: 4
          });
          tW(e, n);
          let i = tj(e, t, n, r, tB(e, t, r));
          return tK(e, t, r, i);
        }(t, r, n);
      } else if (n instanceof chevrotainParserLexerUtilities.RepetitionWithSeparator) {
        return function (e, t, r) {
          let n = tY(e, t, r, {
            type: 4
          });
          tW(e, n);
          let i = tj(e, t, n, r, tB(e, t, r));
          let a = tH(e, t, r.separator, r);
          return tK(e, t, r, i, a);
        }(t, r, n);
      } else {
        return tB(t, r, n);
      }
    }(e, t, r)), e => e !== undefined);
    if (n.length === 1) {
      return n[0];
    } else if (n.length === 0) {
      return undefined;
    } else {
      return function (e, t) {
        let r = t.length;
        for (let n = 0; n < r - 1; n++) {
          let r;
          let i = t[n];
          if (i.left.transitions.length === 1) {
            r = i.left.transitions[0];
          }
          let a = r instanceof tG;
          let s = r;
          let o = t[n + 1].left;
          if (i.left.type === 1 && i.right.type === 1 && r !== undefined && (a && s.followState === i.right || r.target === i.right)) {
            if (a) {
              s.followState = o;
            } else {
              r.target = o;
            }
            (function (e, t) {
              e.states.splice(e.states.indexOf(t), 1);
            })(e, i.right);
          } else {
            tz(i.right, o);
          }
        }
        let n = t[0];
        let i = t[r - 1];
        return {
          left: n.left,
          right: i.right
        };
      }(e, n);
    }
  }
  function tK(e, t, r, n, i) {
    let a = n.left;
    let s = n.right;
    let o = tY(e, t, r, {
      type: 11
    });
    tW(e, o);
    let l = tY(e, t, r, {
      type: 12
    });
    a.loopback = o;
    l.loopback = o;
    e.decisionMap[tD(t, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", r.idx)] = o;
    tz(s, o);
    if (i === undefined) {
      tz(o, a);
      tz(o, l);
    } else {
      tz(o, l);
      tz(o, i.left);
      tz(i.right, a);
    }
    return {
      left: a,
      right: l
    };
  }
  function tV(e, t, r, n, i) {
    let a = n.left;
    let s = n.right;
    let o = tY(e, t, r, {
      type: 10
    });
    tW(e, o);
    let l = tY(e, t, r, {
      type: 12
    });
    let u = tY(e, t, r, {
      type: 9
    });
    o.loopback = u;
    l.loopback = u;
    tz(o, a);
    tz(o, l);
    tz(s, u);
    if (i !== undefined) {
      tz(u, l);
      tz(u, i.left);
      tz(i.right, a);
    } else {
      tz(u, o);
    }
    e.decisionMap[tD(t, i ? "RepetitionWithSeparator" : "Repetition", r.idx)] = o;
    return {
      left: o,
      right: l
    };
  }
  function tW(e, t) {
    e.decisionStates.push(t);
    t.decision = e.decisionStates.length - 1;
    return t.decision;
  }
  function tj(e, t, r, n, ...i) {
    let a = tY(e, t, n, {
      type: 8,
      start: r
    });
    r.end = a;
    for (let e of i) {
      if (e !== undefined) {
        tz(r, e.left);
        tz(e.right, a);
      } else {
        tz(r, a);
      }
    }
    e.decisionMap[tD(t, function (e) {
      if (e instanceof chevrotainParserLexerUtilities.Alternation) {
        return "Alternation";
      }
      if (e instanceof chevrotainParserLexerUtilities.Option) {
        return "Option";
      }
      if (e instanceof chevrotainParserLexerUtilities.RepetitionMandatoryWithSeparator) {
        return "Repetition";
      }
      if (e instanceof chevrotainParserLexerUtilities.Repetition) {
        return "RepetitionWithSeparator";
      }
      if (e instanceof chevrotainParserLexerUtilities.RepetitionMandatory) {
        return "RepetitionMandatory";
      } else if (e instanceof chevrotainParserLexerUtilities.RepetitionWithSeparator) {
        return "RepetitionMandatoryWithSeparator";
      } else {
        throw Error("Invalid production type encountered");
      }
    }(n), n.idx)] = r;
    return {
      left: r,
      right: a
    };
  }
  function tH(e, t, r, n) {
    let i = tY(e, t, n, {
      type: 1
    });
    let a = tY(e, t, n, {
      type: 1
    });
    tq(i, new tF(a, r));
    return {
      left: i,
      right: a
    };
  }
  function tz(e, t) {
    tq(e, new tU(t));
  }
  function tY(e, t, r, n) {
    let i = Object.assign({
      atn: e,
      production: r,
      epsilonOnlyTransitions: false,
      rule: t,
      transitions: [],
      nextTokenWithinRule: [],
      stateNumber: e.states.length
    }, n);
    e.states.push(i);
    return i;
  }
  function tq(e, t) {
    if (e.transitions.length === 0) {
      e.epsilonOnlyTransitions = t.isEpsilon();
    }
    e.transitions.push(t);
  }
  let tX = {};
  class tQ {
    constructor() {
      this.map = {};
      this.configs = [];
    }
    get size() {
      return this.configs.length;
    }
    finalize() {
      this.map = {};
    }
    add(e) {
      let t = tJ(e);
      if (!(t in this.map)) {
        this.map[t] = this.configs.length;
        this.configs.push(e);
      }
    }
    get elements() {
      return this.configs;
    }
    get alts() {
      return collectionMapMatcher.mapWithMatcher(this.configs, e => e.alt);
    }
    get key() {
      let e = "";
      for (let t in this.map) {
        e += t + ":";
      }
      return e;
    }
  }
  function tJ(e, t = true) {
    return `${t ? `a${e.alt}` : ""}s${e.state.stateNumber}:${e.stack.map(e => e.stateNumber.toString()).join("_")}`;
  }
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var collectionMapFlatten = require("collection-map-flatten") /*id: 378218*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  class t3 {
    constructor() {
      this.predicates = [];
    }
    is(e) {
      return e >= this.predicates.length || this.predicates[e];
    }
    set(e, t) {
      this.predicates[e] = t;
    }
    toString() {
      let e = "";
      let t = this.predicates.length;
      for (let r = 0; r < t; r++) {
        e += this.predicates[r] === true ? "1" : "0";
      }
      return e;
    }
  }
  let t6 = new t3();
  class t5 extends chevrotainParserLexerUtilities.DefaultGrammarValidator {
    constructor(e) {
      super();
      this.logging = (e == null ? undefined : e.logging) ?? (e => undefined);
    }
    initialize(e) {
      this.atn = function (e) {
        let t = {
          decisionMap: {},
          decisionStates: [],
          ruleToStartState: new Map(),
          ruleToStopState: new Map(),
          states: []
        };
        (function (e, t) {
          let r = t.length;
          for (let n = 0; n < r; n++) {
            let r = t[n];
            let i = tY(e, r, undefined, {
              type: 2
            });
            let a = tY(e, r, undefined, {
              type: 7
            });
            i.stop = a;
            e.ruleToStartState.set(r, i);
            e.ruleToStopState.set(r, a);
          }
        })(t, e);
        let r = e.length;
        for (let n = 0; n < r; n++) {
          let r = e[n];
          let i = tB(t, r, r);
          if (i !== undefined) {
            (function (e, t, r) {
              tz(e.ruleToStartState.get(t), r.left);
              let n = e.ruleToStopState.get(t);
              tz(r.right, n);
            })(t, r, i);
          }
        }
        return t;
      }(e.rules);
      this.dfas = function (e) {
        let t = e.decisionStates.length;
        let r = Array(t);
        for (let n = 0; n < t; n++) {
          r[n] = function (e, t) {
            let r = {};
            return n => {
              let i = n.toString();
              let a = r[i];
              if (a === undefined) {
                a = {
                  atnStartState: e,
                  decision: t,
                  states: {}
                };
                r[i] = a;
              }
              return a;
            };
          }(e.decisionStates[n], n);
        }
        return r;
      }(this.atn);
    }
    validateAmbiguousAlternationAlternatives() {
      return [];
    }
    validateEmptyOrAlternatives() {
      return [];
    }
    buildLookaheadForAlternation(e) {
      let {
        prodOccurrence: t,
        rule: r,
        hasPredicates: n,
        dynamicTokensEnabled: i
      } = e;
      let a = this.dfas;
      let s = this.logging;
      let o = tD(r, "Alternation", t);
      let l = this.atn.decisionMap[o].decision;
      let u = collectionMapMatcher.mapWithMatcher(chevrotainParserLexerUtilities.buildLookaheadFuncForOr({
        maxLookahead: 1,
        occurrence: t,
        prodType: "Alternation",
        rule: r
      }), e => collectionMapMatcher.mapWithMatcher(e, e => e[0]));
      if (re(u, false) && !i) {
        let e = genericReduceUtil.genericReduce(u, (e, t, r) => {
          arrayObjectForeach.arrayObjectForeach(t, t => {
            if (t) {
              e[t.tokenTypeIdx] = r;
              arrayObjectForeach.arrayObjectForeach(t.categoryMatches, t => {
                e[t] = r;
              });
            }
          });
          return e;
        }, {});
        if (n) {
          return function (t) {
            let n = e[this.LA(1).tokenTypeIdx];
            if (t !== undefined && n !== undefined) {
              let e = t[n]?.GATE;
              if (e !== undefined && e.call(this) === false) {
                return;
              }
            }
            return n;
          };
        } else {
          return function () {
            return e[this.LA(1).tokenTypeIdx];
          };
        }
      }
      if (n) {
        return function (e) {
          let t = new t3();
          let r = e === undefined ? 0 : e.length;
          for (let n = 0; n < r; n++) {
            let r = e == null ? undefined : e[n].GATE;
            t.set(n, r === undefined || r.call(this));
          }
          let n = rt.call(this, a, l, t, s);
          if (typeof n == "number") {
            return n;
          } else {
            return undefined;
          }
        };
      } else {
        return function () {
          let e = rt.call(this, a, l, t6, s);
          if (typeof e == "number") {
            return e;
          } else {
            return undefined;
          }
        };
      }
    }
    buildLookaheadForOptional(e) {
      let {
        prodOccurrence: t,
        rule: r,
        prodType: n,
        dynamicTokensEnabled: i
      } = e;
      let a = this.dfas;
      let s = this.logging;
      let o = tD(r, n, t);
      let l = this.atn.decisionMap[o].decision;
      let u = collectionMapMatcher.mapWithMatcher(chevrotainParserLexerUtilities.buildLookaheadFuncForOr({
        maxLookahead: 1,
        occurrence: t,
        prodType: n,
        rule: r
      }), e => collectionMapMatcher.mapWithMatcher(e, e => e[0]));
      if (re(u) && u[0][0] && !i) {
        let e = u[0];
        let t = safeArrayFlattenUtil.safeFlattenArray(e);
        if (t.length === 1 && isEmptyUtil.isEmpty(t[0].categoryMatches)) {
          let e = t[0].tokenTypeIdx;
          return function () {
            return this.LA(1).tokenTypeIdx === e;
          };
        }
        {
          let e = genericReduceUtil.genericReduce(t, (e, t) => {
            if (t !== undefined) {
              e[t.tokenTypeIdx] = true;
              arrayObjectForeach.arrayObjectForeach(t.categoryMatches, t => {
                e[t] = true;
              });
            }
            return e;
          }, {});
          return function () {
            return e[this.LA(1).tokenTypeIdx] === true;
          };
        }
      }
      return function () {
        let e = rt.call(this, a, l, t6, s);
        return typeof e != "object" && e === 0;
      };
    }
  }
  function re(e, t = true) {
    let r = new Set();
    for (let n of e) {
      let e = new Set();
      for (let i of n) {
        if (i === undefined) {
          if (!t) {
            return false;
          }
          break;
        }
        for (let t of [i.tokenTypeIdx].concat(i.categoryMatches)) {
          if (r.has(t)) {
            if (!e.has(t)) {
              return false;
            }
          } else {
            r.add(t);
            e.add(t);
          }
        }
      }
    }
    return true;
  }
  function rt(e, t, r, n) {
    let i = e[t](r);
    let a = i.start;
    if (a === undefined) {
      let e = function (e) {
        let t = new tQ();
        let r = e.transitions.length;
        for (let n = 0; n < r; n++) {
          rl({
            state: e.transitions[n].target,
            alt: n,
            stack: []
          }, t);
        }
        return t;
      }(i.atnStartState);
      a = ro(i, ra(e));
      i.start = a;
    }
    return rr.apply(this, [i, a, r, n]);
  }
  function rr(e, t, r, n) {
    let i = t;
    let a = 1;
    let s = [];
    let o = this.LA(a++);
    while (true) {
      var l;
      var u;
      l = i;
      u = o;
      let t = l.edges[u.tokenTypeIdx];
      if (t === undefined) {
        t = rn.apply(this, [e, i, o, a, r, n]);
      }
      if (t === tX) {
        return function (e, t, r) {
          let n = collectionMapFlatten.mapAndFlatten(t.configs.elements, e => e.state.transitions);
          return {
            actualToken: r,
            possibleTokenTypes: arrayUniqByMatcher.uniqByMatcher(n.filter(e => e instanceof tF).map(e => e.tokenType), e => e.tokenTypeIdx),
            tokenPath: e
          };
        }(s, i, o);
      }
      if (t.isAcceptState === true) {
        return t.prediction;
      }
      i = t;
      s.push(o);
      o = this.LA(a++);
    }
  }
  function rn(e, t, r, n, i, a) {
    let s = function (e, t, r) {
      let n;
      let i = new tQ();
      let a = [];
      for (let n of e.elements) {
        if (r.is(n.alt) === false) {
          continue;
        }
        if (n.state.type === 7) {
          a.push(n);
          continue;
        }
        let e = n.state.transitions.length;
        for (let r = 0; r < e; r++) {
          let e = function (e, t) {
            if (e instanceof tF && chevrotainParserLexerUtilities.tokenMatcher(t, e.tokenType)) {
              return e.target;
            }
          }(n.state.transitions[r], t);
          if (e !== undefined) {
            i.add({
              state: e,
              alt: n.alt,
              stack: n.stack
            });
          }
        }
      }
      if (a.length === 0 && i.size === 1) {
        n = i;
      }
      if (n === undefined) {
        n = new tQ();
        for (let e of i.elements) {
          rl(e, n);
        }
      }
      if (a.length > 0 && !function (e) {
        for (let t of e.elements) {
          if (t.state.type === 7) {
            return true;
          }
        }
        return false;
      }(n)) {
        for (let e of a) {
          n.add(e);
        }
      }
      return n;
    }(t.configs, r, i);
    if (s.size === 0) {
      rs(e, t, r, tX);
      return tX;
    }
    let o = ra(s);
    let l = function (e, t) {
      let r;
      for (let n of e.elements) {
        if (t.is(n.alt) === true) {
          if (r === undefined) {
            r = n.alt;
          } else if (r !== n.alt) {
            return;
          }
        }
      }
      return r;
    }(s, i);
    if (l !== undefined) {
      o.isAcceptState = true;
      o.prediction = l;
      o.configs.uniqueAlt = l;
    } else if (function (e) {
      if (function (e) {
        for (let t of e.elements) {
          if (t.state.type !== 7) {
            return false;
          }
        }
        return true;
      }(e)) {
        return true;
      }
      let t = function (e) {
        let t = new Map();
        for (let r of e) {
          let e = tJ(r, false);
          let n = t.get(e);
          if (n === undefined) {
            n = {};
            t.set(e, n);
          }
          n[r.alt] = true;
        }
        return t;
      }(e.elements);
      return function (e) {
        for (let t of Array.from(e.values())) {
          if (Object.keys(t).length > 1) {
            return true;
          }
        }
        return false;
      }(t) && !function (e) {
        for (let t of Array.from(e.values())) {
          if (Object.keys(t).length === 1) {
            return true;
          }
        }
        return false;
      }(t);
    }(s)) {
      let t = findMaxByUtilValue.findMaxByUtilValue(s.alts);
      o.isAcceptState = true;
      o.prediction = t;
      o.configs.uniqueAlt = t;
      ri.apply(this, [e, n, s.alts, a]);
    }
    return rs(e, t, r, o);
  }
  function ri(e, t, r, n) {
    let i = [];
    for (let e = 1; e <= t; e++) {
      i.push(this.LA(e).tokenType);
    }
    let a = e.atnStartState;
    n(function (e) {
      let t = collectionMapMatcher.mapWithMatcher(e.prefixPath, e => chevrotainParserLexerUtilities.createToken(e)).join(", ");
      let r = e.production.idx === 0 ? "" : e.production.idx;
      let n = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(", ")}> in <${function (e) {
        if (e instanceof chevrotainParserLexerUtilities.NonTerminal) {
          return "SUBRULE";
        }
        if (e instanceof chevrotainParserLexerUtilities.Option) {
          return "OPTION";
        }
        if (e instanceof chevrotainParserLexerUtilities.Alternation) {
          return "OR";
        }
        if (e instanceof chevrotainParserLexerUtilities.RepetitionMandatory) {
          return "AT_LEAST_ONE";
        }
        if (e instanceof chevrotainParserLexerUtilities.RepetitionWithSeparator) {
          return "AT_LEAST_ONE_SEP";
        } else if (e instanceof chevrotainParserLexerUtilities.Repetition) {
          return "MANY_SEP";
        } else if (e instanceof chevrotainParserLexerUtilities.RepetitionMandatoryWithSeparator) {
          return "MANY";
        } else if (e instanceof chevrotainParserLexerUtilities.Alternation_1) {
          return "CONSUME";
        } else {
          throw Error("non exhaustive match");
        }
      }(e.production)}${r}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
`;
      return `${n}See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
    }({
      topLevelRule: a.rule,
      ambiguityIndices: r,
      production: a.production,
      prefixPath: i
    }));
  }
  function ra(e) {
    return {
      configs: e,
      edges: {},
      isAcceptState: false,
      prediction: -1
    };
  }
  function rs(e, t, r, n) {
    n = ro(e, n);
    t.edges[r.tokenTypeIdx] = n;
    return n;
  }
  function ro(e, t) {
    if (t === tX) {
      return t;
    }
    let r = t.configs.key;
    let n = e.states[r];
    if (n !== undefined) {
      return n;
    } else {
      t.configs.finalize();
      e.states[r] = t;
      return t;
    }
  }
  function rl(e, t) {
    let r = e.state;
    if (r.type === 7) {
      if (e.stack.length > 0) {
        let r = [...e.stack];
        rl({
          state: r.pop(),
          alt: e.alt,
          stack: r
        }, t);
      } else {
        t.add(e);
      }
      return;
    }
    if (!r.epsilonOnlyTransitions) {
      t.add(e);
    }
    let n = r.transitions.length;
    for (let i = 0; i < n; i++) {
      let n = function (e, t) {
        if (t instanceof tU) {
          return {
            state: t.target,
            alt: e.alt,
            stack: e.stack
          };
        }
        if (t instanceof tG) {
          let r = [...e.stack, t.followState];
          return {
            state: t.target,
            alt: e.alt,
            stack: r
          };
        }
      }(e, r.transitions[i]);
      if (n !== undefined) {
        rl(n, t);
      }
    }
  }
  var astNodeUtils = require("ast-node-utils") /*id: 468838*/;
  (el ||= {}).is = function (e) {
    return typeof e == "string";
  };
  (eu ||= {}).is = function (e) {
    return typeof e == "string";
  };
  (n = ec ||= {}).MIN_VALUE = -2147483648;
  n.MAX_VALUE = 2147483647;
  n.is = function (e) {
    return typeof e == "number" && n.MIN_VALUE <= e && e <= n.MAX_VALUE;
  };
  (i = ed ||= {}).MIN_VALUE = 0;
  i.MAX_VALUE = 2147483647;
  i.is = function (e) {
    return typeof e == "number" && i.MIN_VALUE <= e && e <= i.MAX_VALUE;
  };
  (a = eh ||= {}).create = function (e, t) {
    if (e === Number.MAX_VALUE) {
      e = ed.MAX_VALUE;
    }
    if (t === Number.MAX_VALUE) {
      t = ed.MAX_VALUE;
    }
    return {
      line: e,
      character: t
    };
  };
  a.is = function (e) {
    return tA.objectLiteral(e) && tA.uinteger(e.line) && tA.uinteger(e.character);
  };
  (s = ef ||= {}).create = function (e, t, r, n) {
    if (tA.uinteger(e) && tA.uinteger(t) && tA.uinteger(r) && tA.uinteger(n)) {
      return {
        start: eh.create(e, t),
        end: eh.create(r, n)
      };
    }
    if (eh.is(e) && eh.is(t)) {
      return {
        start: e,
        end: t
      };
    }
    throw Error(`Range#create called with invalid arguments[${e}, ${t}, ${r}, ${n}]`);
  };
  s.is = function (e) {
    return tA.objectLiteral(e) && eh.is(e.start) && eh.is(e.end);
  };
  (o = ep ||= {}).create = function (e, t) {
    return {
      uri: e,
      range: t
    };
  };
  o.is = function (e) {
    return tA.objectLiteral(e) && ef.is(e.range) && (tA.string(e.uri) || tA.undefined(e.uri));
  };
  (l = em ||= {}).create = function (e, t, r, n) {
    return {
      targetUri: e,
      targetRange: t,
      targetSelectionRange: r,
      originSelectionRange: n
    };
  };
  l.is = function (e) {
    return tA.objectLiteral(e) && ef.is(e.targetRange) && tA.string(e.targetUri) && ef.is(e.targetSelectionRange) && (ef.is(e.originSelectionRange) || tA.undefined(e.originSelectionRange));
  };
  (u = eg ||= {}).create = function (e, t, r, n) {
    return {
      red: e,
      green: t,
      blue: r,
      alpha: n
    };
  };
  u.is = function (e) {
    return tA.objectLiteral(e) && tA.numberRange(e.red, 0, 1) && tA.numberRange(e.green, 0, 1) && tA.numberRange(e.blue, 0, 1) && tA.numberRange(e.alpha, 0, 1);
  };
  (c = ey ||= {}).create = function (e, t) {
    return {
      range: e,
      color: t
    };
  };
  c.is = function (e) {
    return tA.objectLiteral(e) && ef.is(e.range) && eg.is(e.color);
  };
  (d = eT ||= {}).create = function (e, t, r) {
    return {
      label: e,
      textEdit: t,
      additionalTextEdits: r
    };
  };
  d.is = function (e) {
    return tA.objectLiteral(e) && tA.string(e.label) && (tA.undefined(e.textEdit) || eS.is(e)) && (tA.undefined(e.additionalTextEdits) || tA.typedArray(e.additionalTextEdits, eS.is));
  };
  (h = ev ||= {}).Comment = "comment";
  h.Imports = "imports";
  h.Region = "region";
  (f = eR ||= {}).create = function (e, t, r, n, i, a) {
    let s = {
      startLine: e,
      endLine: t
    };
    if (tA.defined(r)) {
      s.startCharacter = r;
    }
    if (tA.defined(n)) {
      s.endCharacter = n;
    }
    if (tA.defined(i)) {
      s.kind = i;
    }
    if (tA.defined(a)) {
      s.collapsedText = a;
    }
    return s;
  };
  f.is = function (e) {
    return tA.objectLiteral(e) && tA.uinteger(e.startLine) && tA.uinteger(e.startLine) && (tA.undefined(e.startCharacter) || tA.uinteger(e.startCharacter)) && (tA.undefined(e.endCharacter) || tA.uinteger(e.endCharacter)) && (tA.undefined(e.kind) || tA.string(e.kind));
  };
  (p = e$ ||= {}).create = function (e, t) {
    return {
      location: e,
      message: t
    };
  };
  p.is = function (e) {
    return tA.defined(e) && ep.is(e.location) && tA.string(e.message);
  };
  (m = eE ||= {}).Error = 1;
  m.Warning = 2;
  m.Information = 3;
  m.Hint = 4;
  (g = eA ||= {}).Unnecessary = 1;
  g.Deprecated = 2;
  (ek ||= {}).is = function (e) {
    return tA.objectLiteral(e) && tA.string(e.href);
  };
  (y = ex ||= {}).create = function (e, t, r, n, i, a) {
    let s = {
      range: e,
      message: t
    };
    if (tA.defined(r)) {
      s.severity = r;
    }
    if (tA.defined(n)) {
      s.code = n;
    }
    if (tA.defined(i)) {
      s.source = i;
    }
    if (tA.defined(a)) {
      s.relatedInformation = a;
    }
    return s;
  };
  y.is = function (e) {
    return tA.defined(e) && ef.is(e.range) && tA.string(e.message) && (tA.number(e.severity) || tA.undefined(e.severity)) && (tA.integer(e.code) || tA.string(e.code) || tA.undefined(e.code)) && (tA.undefined(e.codeDescription) || tA.string(e.codeDescription?.href)) && (tA.string(e.source) || tA.undefined(e.source)) && (tA.undefined(e.relatedInformation) || tA.typedArray(e.relatedInformation, e$.is));
  };
  (T = eI ||= {}).create = function (e, t, ...r) {
    let n = {
      title: e,
      command: t
    };
    if (tA.defined(r) && r.length > 0) {
      n.arguments = r;
    }
    return n;
  };
  T.is = function (e) {
    return tA.defined(e) && tA.string(e.title) && tA.string(e.command);
  };
  (v = eS ||= {}).replace = function (e, t) {
    return {
      range: e,
      newText: t
    };
  };
  v.insert = function (e, t) {
    return {
      range: {
        start: e,
        end: e
      },
      newText: t
    };
  };
  v.del = function (e) {
    return {
      range: e,
      newText: ""
    };
  };
  v.is = function (e) {
    return tA.objectLiteral(e) && tA.string(e.newText) && ef.is(e.range);
  };
  (R = eC ||= {}).create = function (e, t, r) {
    let n = {
      label: e
    };
    if (t !== undefined) {
      n.needsConfirmation = t;
    }
    if (r !== undefined) {
      n.description = r;
    }
    return n;
  };
  R.is = function (e) {
    return tA.objectLiteral(e) && tA.string(e.label) && (tA.boolean(e.needsConfirmation) || e.needsConfirmation === undefined) && (tA.string(e.description) || e.description === undefined);
  };
  (eN ||= {}).is = function (e) {
    return tA.string(e);
  };
  ($ = ew ||= {}).replace = function (e, t, r) {
    return {
      range: e,
      newText: t,
      annotationId: r
    };
  };
  $.insert = function (e, t, r) {
    return {
      range: {
        start: e,
        end: e
      },
      newText: t,
      annotationId: r
    };
  };
  $.del = function (e, t) {
    return {
      range: e,
      newText: "",
      annotationId: t
    };
  };
  $.is = function (e) {
    return eS.is(e) && (eC.is(e.annotationId) || eN.is(e.annotationId));
  };
  (E = eL ||= {}).create = function (e, t) {
    return {
      textDocument: e,
      edits: t
    };
  };
  E.is = function (e) {
    return tA.defined(e) && eZ.is(e.textDocument) && Array.isArray(e.edits);
  };
  (A = eb ||= {}).create = function (e, t, r) {
    let n = {
      kind: "create",
      uri: e
    };
    if (t !== undefined && (t.overwrite !== undefined || t.ignoreIfExists !== undefined)) {
      n.options = t;
    }
    if (r !== undefined) {
      n.annotationId = r;
    }
    return n;
  };
  A.is = function (e) {
    return e && e.kind === "create" && tA.string(e.uri) && (e.options === undefined || (e.options.overwrite === undefined || tA.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === undefined || tA.boolean(e.options.ignoreIfExists))) && (e.annotationId === undefined || eN.is(e.annotationId));
  };
  (k = e_ ||= {}).create = function (e, t, r, n) {
    let i = {
      kind: "rename",
      oldUri: e,
      newUri: t
    };
    if (r !== undefined && (r.overwrite !== undefined || r.ignoreIfExists !== undefined)) {
      i.options = r;
    }
    if (n !== undefined) {
      i.annotationId = n;
    }
    return i;
  };
  k.is = function (e) {
    return e && e.kind === "rename" && tA.string(e.oldUri) && tA.string(e.newUri) && (e.options === undefined || (e.options.overwrite === undefined || tA.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === undefined || tA.boolean(e.options.ignoreIfExists))) && (e.annotationId === undefined || eN.is(e.annotationId));
  };
  (x = eO ||= {}).create = function (e, t, r) {
    let n = {
      kind: "delete",
      uri: e
    };
    if (t !== undefined && (t.recursive !== undefined || t.ignoreIfNotExists !== undefined)) {
      n.options = t;
    }
    if (r !== undefined) {
      n.annotationId = r;
    }
    return n;
  };
  x.is = function (e) {
    return e && e.kind === "delete" && tA.string(e.uri) && (e.options === undefined || (e.options.recursive === undefined || tA.boolean(e.options.recursive)) && (e.options.ignoreIfNotExists === undefined || tA.boolean(e.options.ignoreIfNotExists))) && (e.annotationId === undefined || eN.is(e.annotationId));
  };
  (eP ||= {}).is = function (e) {
    return e && (e.changes !== undefined || e.documentChanges !== undefined) && (e.documentChanges === undefined || e.documentChanges.every(e => tA.string(e.kind) ? eb.is(e) || e_.is(e) || eO.is(e) : eL.is(e)));
  };
  (I = eM ||= {}).create = function (e) {
    return {
      uri: e
    };
  };
  I.is = function (e) {
    return tA.defined(e) && tA.string(e.uri);
  };
  (S = eD ||= {}).create = function (e, t) {
    return {
      uri: e,
      version: t
    };
  };
  S.is = function (e) {
    return tA.defined(e) && tA.string(e.uri) && tA.integer(e.version);
  };
  (C = eZ ||= {}).create = function (e, t) {
    return {
      uri: e,
      version: t
    };
  };
  C.is = function (e) {
    return tA.defined(e) && tA.string(e.uri) && (e.version === null || tA.integer(e.version));
  };
  (N = eF ||= {}).create = function (e, t, r, n) {
    return {
      uri: e,
      languageId: t,
      version: r,
      text: n
    };
  };
  N.is = function (e) {
    return tA.defined(e) && tA.string(e.uri) && tA.string(e.languageId) && tA.integer(e.version) && tA.string(e.text);
  };
  (w = eU ||= {}).PlainText = "plaintext";
  w.Markdown = "markdown";
  w.is = function (e) {
    return e === w.PlainText || e === w.Markdown;
  };
  (eG ||= {}).is = function (e) {
    return tA.objectLiteral(e) && eU.is(e.kind) && tA.string(e.value);
  };
  (L = eB ||= {}).Text = 1;
  L.Method = 2;
  L.Function = 3;
  L.Constructor = 4;
  L.Field = 5;
  L.Variable = 6;
  L.Class = 7;
  L.Interface = 8;
  L.Module = 9;
  L.Property = 10;
  L.Unit = 11;
  L.Value = 12;
  L.Enum = 13;
  L.Keyword = 14;
  L.Snippet = 15;
  L.Color = 16;
  L.File = 17;
  L.Reference = 18;
  L.Folder = 19;
  L.EnumMember = 20;
  L.Constant = 21;
  L.Struct = 22;
  L.Event = 23;
  L.Operator = 24;
  L.TypeParameter = 25;
  (b = eK ||= {}).PlainText = 1;
  b.Snippet = 2;
  (eV ||= {}).Deprecated = 1;
  (_ = eW ||= {}).create = function (e, t, r) {
    return {
      newText: e,
      insert: t,
      replace: r
    };
  };
  _.is = function (e) {
    return e && tA.string(e.newText) && ef.is(e.insert) && ef.is(e.replace);
  };
  (O = ej ||= {}).asIs = 1;
  O.adjustIndentation = 2;
  (eH ||= {}).is = function (e) {
    return e && (tA.string(e.detail) || e.detail === undefined) && (tA.string(e.description) || e.description === undefined);
  };
  (ez ||= {}).create = function (e) {
    return {
      label: e
    };
  };
  (eY ||= {}).create = function (e, t) {
    return {
      items: e || [],
      isIncomplete: !!t
    };
  };
  (P = eq ||= {}).fromPlainText = function (e) {
    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  };
  P.is = function (e) {
    return tA.string(e) || tA.objectLiteral(e) && tA.string(e.language) && tA.string(e.value);
  };
  (eX ||= {}).is = function (e) {
    return !!e && tA.objectLiteral(e) && (eG.is(e.contents) || eq.is(e.contents) || tA.typedArray(e.contents, eq.is)) && (e.range === undefined || ef.is(e.range));
  };
  (eQ ||= {}).create = function (e, t) {
    if (t) {
      return {
        label: e,
        documentation: t
      };
    } else {
      return {
        label: e
      };
    }
  };
  (eJ ||= {}).create = function (e, t, ...r) {
    let n = {
      label: e
    };
    if (tA.defined(t)) {
      n.documentation = t;
    }
    if (tA.defined(r)) {
      n.parameters = r;
    } else {
      n.parameters = [];
    }
    return n;
  };
  (M = e0 ||= {}).Text = 1;
  M.Read = 2;
  M.Write = 3;
  (e1 ||= {}).create = function (e, t) {
    let r = {
      range: e
    };
    if (tA.number(t)) {
      r.kind = t;
    }
    return r;
  };
  (D = e2 ||= {}).File = 1;
  D.Module = 2;
  D.Namespace = 3;
  D.Package = 4;
  D.Class = 5;
  D.Method = 6;
  D.Property = 7;
  D.Field = 8;
  D.Constructor = 9;
  D.Enum = 10;
  D.Interface = 11;
  D.Function = 12;
  D.Variable = 13;
  D.Constant = 14;
  D.String = 15;
  D.Number = 16;
  D.Boolean = 17;
  D.Array = 18;
  D.Object = 19;
  D.Key = 20;
  D.Null = 21;
  D.EnumMember = 22;
  D.Struct = 23;
  D.Event = 24;
  D.Operator = 25;
  D.TypeParameter = 26;
  (e7 ||= {}).Deprecated = 1;
  (e4 ||= {}).create = function (e, t, r, n, i) {
    let a = {
      name: e,
      kind: t,
      location: {
        uri: n,
        range: r
      }
    };
    if (i) {
      a.containerName = i;
    }
    return a;
  };
  (e9 ||= {}).create = function (e, t, r, n) {
    if (n !== undefined) {
      return {
        name: e,
        kind: t,
        location: {
          uri: r,
          range: n
        }
      };
    } else {
      return {
        name: e,
        kind: t,
        location: {
          uri: r
        }
      };
    }
  };
  (Z = e8 ||= {}).create = function (e, t, r, n, i, a) {
    let s = {
      name: e,
      detail: t,
      kind: r,
      range: n,
      selectionRange: i
    };
    if (a !== undefined) {
      s.children = a;
    }
    return s;
  };
  Z.is = function (e) {
    return e && tA.string(e.name) && tA.number(e.kind) && ef.is(e.range) && ef.is(e.selectionRange) && (e.detail === undefined || tA.string(e.detail)) && (e.deprecated === undefined || tA.boolean(e.deprecated)) && (e.children === undefined || Array.isArray(e.children)) && (e.tags === undefined || Array.isArray(e.tags));
  };
  (F = e3 ||= {}).Empty = "";
  F.QuickFix = "quickfix";
  F.Refactor = "refactor";
  F.RefactorExtract = "refactor.extract";
  F.RefactorInline = "refactor.inline";
  F.RefactorRewrite = "refactor.rewrite";
  F.Source = "source";
  F.SourceOrganizeImports = "source.organizeImports";
  F.SourceFixAll = "source.fixAll";
  (U = e6 ||= {}).Invoked = 1;
  U.Automatic = 2;
  (G = e5 ||= {}).create = function (e, t, r) {
    let n = {
      diagnostics: e
    };
    if (t != null) {
      n.only = t;
    }
    if (r != null) {
      n.triggerKind = r;
    }
    return n;
  };
  G.is = function (e) {
    return tA.defined(e) && tA.typedArray(e.diagnostics, ex.is) && (e.only === undefined || tA.typedArray(e.only, tA.string)) && (e.triggerKind === undefined || e.triggerKind === e6.Invoked || e.triggerKind === e6.Automatic);
  };
  (B = te ||= {}).create = function (e, t, r) {
    let n = {
      title: e
    };
    let i = true;
    if (typeof t == "string") {
      i = false;
      n.kind = t;
    } else if (eI.is(t)) {
      n.command = t;
    } else {
      n.edit = t;
    }
    if (i && r !== undefined) {
      n.kind = r;
    }
    return n;
  };
  B.is = function (e) {
    return e && tA.string(e.title) && (e.diagnostics === undefined || tA.typedArray(e.diagnostics, ex.is)) && (e.kind === undefined || tA.string(e.kind)) && (e.edit !== undefined || e.command !== undefined) && (e.command === undefined || eI.is(e.command)) && (e.isPreferred === undefined || tA.boolean(e.isPreferred)) && (e.edit === undefined || eP.is(e.edit));
  };
  (K = tt ||= {}).create = function (e, t) {
    let r = {
      range: e
    };
    if (tA.defined(t)) {
      r.data = t;
    }
    return r;
  };
  K.is = function (e) {
    return tA.defined(e) && ef.is(e.range) && (tA.undefined(e.command) || eI.is(e.command));
  };
  (V = tr ||= {}).create = function (e, t) {
    return {
      tabSize: e,
      insertSpaces: t
    };
  };
  V.is = function (e) {
    return tA.defined(e) && tA.uinteger(e.tabSize) && tA.boolean(e.insertSpaces);
  };
  (W = tn ||= {}).create = function (e, t, r) {
    return {
      range: e,
      target: t,
      data: r
    };
  };
  W.is = function (e) {
    return tA.defined(e) && ef.is(e.range) && (tA.undefined(e.target) || tA.string(e.target));
  };
  (j = ti ||= {}).create = function (e, t) {
    return {
      range: e,
      parent: t
    };
  };
  j.is = function (e) {
    return tA.objectLiteral(e) && ef.is(e.range) && (e.parent === undefined || j.is(e.parent));
  };
  (H = ta ||= {}).namespace = "namespace";
  H.type = "type";
  H.class = "class";
  H.enum = "enum";
  H.interface = "interface";
  H.struct = "struct";
  H.typeParameter = "typeParameter";
  H.parameter = "parameter";
  H.variable = "variable";
  H.property = "property";
  H.enumMember = "enumMember";
  H.event = "event";
  H.function = "function";
  H.method = "method";
  H.macro = "macro";
  H.keyword = "keyword";
  H.modifier = "modifier";
  H.comment = "comment";
  H.string = "string";
  H.number = "number";
  H.regexp = "regexp";
  H.operator = "operator";
  H.decorator = "decorator";
  (z = ts ||= {}).declaration = "declaration";
  z.definition = "definition";
  z.readonly = "readonly";
  z.static = "static";
  z.deprecated = "deprecated";
  z.abstract = "abstract";
  z.async = "async";
  z.modification = "modification";
  z.documentation = "documentation";
  z.defaultLibrary = "defaultLibrary";
  (to ||= {}).is = function (e) {
    return tA.objectLiteral(e) && (e.resultId === undefined || typeof e.resultId == "string") && Array.isArray(e.data) && (e.data.length === 0 || typeof e.data[0] == "number");
  };
  (Y = tl ||= {}).create = function (e, t) {
    return {
      range: e,
      text: t
    };
  };
  Y.is = function (e) {
    return e != null && ef.is(e.range) && tA.string(e.text);
  };
  (q = tu ||= {}).create = function (e, t, r) {
    return {
      range: e,
      variableName: t,
      caseSensitiveLookup: r
    };
  };
  q.is = function (e) {
    return e != null && ef.is(e.range) && tA.boolean(e.caseSensitiveLookup) && (tA.string(e.variableName) || e.variableName === undefined);
  };
  (X = tc ||= {}).create = function (e, t) {
    return {
      range: e,
      expression: t
    };
  };
  X.is = function (e) {
    return e != null && ef.is(e.range) && (tA.string(e.expression) || e.expression === undefined);
  };
  (Q = td ||= {}).create = function (e, t) {
    return {
      frameId: e,
      stoppedLocation: t
    };
  };
  Q.is = function (e) {
    return tA.defined(e) && ef.is(e.stoppedLocation);
  };
  (J = th ||= {}).Type = 1;
  J.Parameter = 2;
  J.is = function (e) {
    return e === 1 || e === 2;
  };
  (ee = tf ||= {}).create = function (e) {
    return {
      value: e
    };
  };
  ee.is = function (e) {
    return tA.objectLiteral(e) && (e.tooltip === undefined || tA.string(e.tooltip) || eG.is(e.tooltip)) && (e.location === undefined || ep.is(e.location)) && (e.command === undefined || eI.is(e.command));
  };
  (et = tp ||= {}).create = function (e, t, r) {
    let n = {
      position: e,
      label: t
    };
    if (r !== undefined) {
      n.kind = r;
    }
    return n;
  };
  et.is = function (e) {
    return tA.objectLiteral(e) && eh.is(e.position) && (tA.string(e.label) || tA.typedArray(e.label, tf.is)) && (e.kind === undefined || th.is(e.kind)) && e.textEdits === undefined || tA.typedArray(e.textEdits, eS.is) && (e.tooltip === undefined || tA.string(e.tooltip) || eG.is(e.tooltip)) && (e.paddingLeft === undefined || tA.boolean(e.paddingLeft)) && (e.paddingRight === undefined || tA.boolean(e.paddingRight));
  };
  (tm ||= {}).createSnippet = function (e) {
    return {
      kind: "snippet",
      value: e
    };
  };
  (tg ||= {}).create = function (e, t, r, n) {
    return {
      insertText: e,
      filterText: t,
      range: r,
      command: n
    };
  };
  (ty ||= {}).create = function (e) {
    return {
      items: e
    };
  };
  (er = tT ||= {}).Invoked = 0;
  er.Automatic = 1;
  (tv ||= {}).create = function (e, t) {
    return {
      range: e,
      text: t
    };
  };
  (tR ||= {}).create = function (e, t) {
    return {
      triggerKind: e,
      selectedCompletionInfo: t
    };
  };
  (t$ ||= {}).is = function (e) {
    return tA.objectLiteral(e) && eu.is(e.uri) && tA.string(e.name);
  };
  (en = tE ||= {}).create = function (e, t, r, n) {
    return new rc(e, t, r, n);
  };
  en.is = function (e) {
    return !!tA.defined(e) && !!tA.string(e.uri) && (!!tA.undefined(e.languageId) || !!tA.string(e.languageId)) && !!tA.uinteger(e.lineCount) && !!tA.func(e.getText) && !!tA.func(e.positionAt) && !!tA.func(e.offsetAt);
  };
  en.applyEdits = function (e, t) {
    let r = e.getText();
    let n = function e(t, r) {
      if (t.length <= 1) {
        return t;
      }
      let n = t.length / 2 | 0;
      let i = t.slice(0, n);
      let a = t.slice(n);
      e(i, r);
      e(a, r);
      let s = 0;
      let o = 0;
      let l = 0;
      while (s < i.length && o < a.length) {
        if (r(i[s], a[o]) <= 0) {
          t[l++] = i[s++];
        } else {
          t[l++] = a[o++];
        }
      }
      while (s < i.length) {
        t[l++] = i[s++];
      }
      while (o < a.length) {
        t[l++] = a[o++];
      }
      return t;
    }(t, (e, t) => {
      let r = e.range.start.line - t.range.start.line;
      if (r === 0) {
        return e.range.start.character - t.range.start.character;
      } else {
        return r;
      }
    });
    let i = r.length;
    for (let t = n.length - 1; t >= 0; t--) {
      let a = n[t];
      let s = e.offsetAt(a.range.start);
      let o = e.offsetAt(a.range.end);
      if (o <= i) {
        r = r.substring(0, s) + a.newText + r.substring(o, r.length);
      } else {
        throw Error("Overlapping edit");
      }
      i = s;
    }
    return r;
  };
  class rc {
    constructor(e, t, r, n) {
      this._uri = e;
      this._languageId = t;
      this._version = r;
      this._content = n;
      this._lineOffsets = undefined;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(e) {
      if (e) {
        let t = this.offsetAt(e.start);
        let r = this.offsetAt(e.end);
        return this._content.substring(t, r);
      }
      return this._content;
    }
    update(e, t) {
      this._content = e.text;
      this._version = t;
      this._lineOffsets = undefined;
    }
    getLineOffsets() {
      if (this._lineOffsets === undefined) {
        let e = [];
        let t = this._content;
        let r = true;
        for (let n = 0; n < t.length; n++) {
          if (r) {
            e.push(n);
            r = false;
          }
          let i = t.charAt(n);
          r = i === "\r" || i === "\n";
          if (i === "\r" && n + 1 < t.length && t.charAt(n + 1) === "\n") {
            n++;
          }
        }
        if (r && t.length > 0) {
          e.push(t.length);
        }
        this._lineOffsets = e;
      }
      return this._lineOffsets;
    }
    positionAt(e) {
      e = Math.max(Math.min(e, this._content.length), 0);
      let t = this.getLineOffsets();
      let r = 0;
      let n = t.length;
      if (n === 0) {
        return eh.create(0, e);
      }
      while (r < n) {
        let i = Math.floor((r + n) / 2);
        if (t[i] > e) {
          n = i;
        } else {
          r = i + 1;
        }
      }
      let i = r - 1;
      return eh.create(i, e - t[i]);
    }
    offsetAt(e) {
      let t = this.getLineOffsets();
      if (e.line >= t.length) {
        return this._content.length;
      }
      if (e.line < 0) {
        return 0;
      }
      let r = t[e.line];
      let n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
      return Math.max(Math.min(r + e.character, n), r);
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
  }
  (function (e) {
    let t = Object.prototype.toString;
    e.defined = function (e) {
      return e !== undefined;
    };
    e.undefined = function (e) {
      return e === undefined;
    };
    e.boolean = function (e) {
      return e === true || e === false;
    };
    e.string = function (e) {
      return t.call(e) === "[object String]";
    };
    e.number = function (e) {
      return t.call(e) === "[object Number]";
    };
    e.numberRange = function (e, r, n) {
      return t.call(e) === "[object Number]" && r <= e && e <= n;
    };
    e.integer = function (e) {
      return t.call(e) === "[object Number]" && e >= -2147483648 && e <= 2147483647;
    };
    e.uinteger = function (e) {
      return t.call(e) === "[object Number]" && e >= 0 && e <= 2147483647;
    };
    e.func = function (e) {
      return t.call(e) === "[object Function]";
    };
    e.objectLiteral = function (e) {
      return e !== null && typeof e == "object";
    };
    e.typedArray = function (e, t) {
      return Array.isArray(e) && e.every(t);
    };
  })(tA ||= {});
  class rd {
    constructor() {
      this.nodeStack = [];
    }
    get current() {
      return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
    }
    buildRootNode(e) {
      this.rootNode = new rg(e);
      this.rootNode.root = this.rootNode;
      this.nodeStack = [this.rootNode];
      return this.rootNode;
    }
    buildCompositeNode(e) {
      let t = new rp();
      t.grammarSource = e;
      t.root = this.rootNode;
      this.current.content.push(t);
      this.nodeStack.push(t);
      return t;
    }
    buildLeafNode(e, t) {
      let r = new rf(e.startOffset, e.image.length, positionRangeUtils_1.convertPosition(e), e.tokenType, !t);
      r.grammarSource = t;
      r.root = this.rootNode;
      this.current.content.push(r);
      return r;
    }
    removeNode(e) {
      let t = e.container;
      if (t) {
        let r = t.content.indexOf(e);
        if (r >= 0) {
          t.content.splice(r, 1);
        }
      }
    }
    addHiddenNodes(e) {
      let t = [];
      for (let r of e) {
        let e = new rf(r.startOffset, r.image.length, positionRangeUtils_1.convertPosition(r), r.tokenType, true);
        e.root = this.rootNode;
        t.push(e);
      }
      let r = this.current;
      let n = false;
      if (r.content.length > 0) {
        r.content.push(...t);
        return;
      }
      while (r.container) {
        let e = r.container.content.indexOf(r);
        if (e > 0) {
          r.container.content.splice(e, 0, ...t);
          n = true;
          break;
        }
        r = r.container;
      }
      if (!n) {
        this.rootNode.content.unshift(...t);
      }
    }
    construct(e) {
      let t = this.current;
      if (typeof e.$type == "string") {
        this.current.astNode = e;
      }
      e.$cstNode = t;
      let r = this.nodeStack.pop();
      if ((r == null ? undefined : r.content.length) === 0) {
        this.removeNode(r);
      }
    }
  }
  class rh {
    get parent() {
      return this.container;
    }
    get feature() {
      return this.grammarSource;
    }
    get hidden() {
      return false;
    }
    get astNode() {
      let r = typeof this._astNode?.$type == "string" ? this._astNode : this.container?.astNode;
      if (!r) {
        throw Error("This node has no associated AST element");
      }
      return r;
    }
    set astNode(e) {
      this._astNode = e;
    }
    get element() {
      return this.astNode;
    }
    get text() {
      return this.root.fullText.substring(this.offset, this.end);
    }
  }
  class rf extends rh {
    get offset() {
      return this._offset;
    }
    get length() {
      return this._length;
    }
    get end() {
      return this._offset + this._length;
    }
    get hidden() {
      return this._hidden;
    }
    get tokenType() {
      return this._tokenType;
    }
    get range() {
      return this._range;
    }
    constructor(e, t, r, n, i = false) {
      super();
      this._hidden = i;
      this._offset = e;
      this._tokenType = n;
      this._length = t;
      this._range = r;
    }
  }
  class rp extends rh {
    constructor() {
      super(...arguments);
      this.content = new rm(this);
    }
    get children() {
      return this.content;
    }
    get offset() {
      return this.firstNonHiddenNode?.offset ?? 0;
    }
    get length() {
      return this.end - this.offset;
    }
    get end() {
      return this.lastNonHiddenNode?.end ?? 0;
    }
    get range() {
      let e = this.firstNonHiddenNode;
      let t = this.lastNonHiddenNode;
      if (!e || !t) {
        return {
          start: eh.create(0, 0),
          end: eh.create(0, 0)
        };
      }
      if (this._rangeCache === undefined) {
        let {
          range: r
        } = e;
        let {
          range: n
        } = t;
        this._rangeCache = {
          start: r.start,
          end: n.end.line < r.start.line ? r.start : n.end
        };
      }
      return this._rangeCache;
    }
    get firstNonHiddenNode() {
      for (let e of this.content) {
        if (!e.hidden) {
          return e;
        }
      }
      return this.content[0];
    }
    get lastNonHiddenNode() {
      for (let e = this.content.length - 1; e >= 0; e--) {
        let t = this.content[e];
        if (!t.hidden) {
          return t;
        }
      }
      return this.content[this.content.length - 1];
    }
  }
  class rm extends Array {
    constructor(e) {
      super();
      this.parent = e;
      Object.setPrototypeOf(this, rm.prototype);
    }
    push(...e) {
      this.addParents(e);
      return super.push(...e);
    }
    unshift(...e) {
      this.addParents(e);
      return super.unshift(...e);
    }
    splice(e, t, ...r) {
      this.addParents(r);
      return super.splice(e, t, ...r);
    }
    addParents(e) {
      for (let t of e) {
        t.container = this.parent;
      }
    }
  }
  class rg extends rp {
    get text() {
      return this._text.substring(this.offset, this.end);
    }
    get fullText() {
      return this._text;
    }
    constructor(e) {
      super();
      this._text = "";
      this._text = e ?? "";
    }
  }
  let ry = Symbol("Datatype");
  function rT(e) {
    return e.$type === ry;
  }
  let rv = e => e.endsWith("​") ? e : e + "​";
  class rR {
    constructor(e) {
      this._unorderedGroups = new Map();
      this.allRules = new Map();
      this.lexer = e.parser.Lexer;
      let t = this.lexer.definition;
      let r = e.LanguageMetaData.mode === "production";
      this.wrapper = new rI(t, Object.assign(Object.assign({}, e.parser.ParserConfig), {
        skipValidations: r,
        errorMessageProvider: e.parser.ParserErrorMessageProvider
      }));
    }
    alternatives(e, t) {
      this.wrapper.wrapOr(e, t);
    }
    optional(e, t) {
      this.wrapper.wrapOption(e, t);
    }
    many(e, t) {
      this.wrapper.wrapMany(e, t);
    }
    atLeastOne(e, t) {
      this.wrapper.wrapAtLeastOne(e, t);
    }
    getRule(e) {
      return this.allRules.get(e);
    }
    isRecording() {
      return this.wrapper.IS_RECORDING;
    }
    get unorderedGroups() {
      return this._unorderedGroups;
    }
    getRuleStack() {
      return this.wrapper.RULE_STACK;
    }
    finalize() {
      this.wrapper.wrapSelfAnalysis();
    }
  }
  class r$ extends rR {
    get current() {
      return this.stack[this.stack.length - 1];
    }
    constructor(e) {
      super(e);
      this.nodeBuilder = new rd();
      this.stack = [];
      this.assignmentMap = new Map();
      this.linker = e.references.Linker;
      this.converter = e.parser.ValueConverter;
      this.astReflection = e.shared.AstReflection;
    }
    rule(e, t) {
      let r = this.computeRuleType(e);
      let n = this.wrapper.DEFINE_RULE(rv(e.name), this.startImplementation(r, t).bind(this));
      this.allRules.set(e.name, n);
      if (e.entry) {
        this.mainRule = n;
      }
      return n;
    }
    computeRuleType(e) {
      if (!e.fragment) {
        if (grammarTypeNameResolver.hasRuleDefinition(e)) {
          return ry;
        }
        {
          let t = grammarTypeNameResolver.getGrammarTypeName(e);
          return t ?? e.name;
        }
      }
    }
    parse(e, t = {}) {
      this.nodeBuilder.buildRootNode(e);
      let r = this.lexerResult = this.lexer.tokenize(e);
      this.wrapper.input = r.tokens;
      let n = t.rule ? this.allRules.get(t.rule) : this.mainRule;
      if (!n) {
        throw Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
      }
      let i = n.call(this.wrapper, {});
      this.nodeBuilder.addHiddenNodes(r.hidden);
      this.unorderedGroups.clear();
      this.lexerResult = undefined;
      return {
        value: i,
        lexerErrors: r.errors,
        lexerReport: r.report,
        parserErrors: this.wrapper.errors
      };
    }
    startImplementation(e, t) {
      return r => {
        let n;
        let i = !this.isRecording() && e !== undefined;
        if (i) {
          let t = {
            $type: e
          };
          this.stack.push(t);
          if (e === ry) {
            t.value = "";
          }
        }
        try {
          n = t(r);
        } catch (e) {
          n = undefined;
        }
        if (n === undefined && i) {
          n = this.construct();
        }
        return n;
      };
    }
    extractHiddenTokens(e) {
      let t = this.lexerResult.hidden;
      if (!t.length) {
        return [];
      }
      let r = e.startOffset;
      for (let e = 0; e < t.length; e++) {
        if (t[e].startOffset > r) {
          return t.splice(0, e);
        }
      }
      return t.splice(0, t.length);
    }
    consume(e, t, r) {
      let n = this.wrapper.wrapConsume(e, t);
      if (!this.isRecording() && this.isValidToken(n)) {
        let e = this.extractHiddenTokens(n);
        this.nodeBuilder.addHiddenNodes(e);
        let t = this.nodeBuilder.buildLeafNode(n, r);
        let {
          assignment: i,
          isCrossRef: a
        } = this.getAssignment(r);
        let s = this.current;
        if (i) {
          let e = grammarTypeValidators.isKeyword(r) ? n.image : this.converter.convert(n.image, t);
          this.assign(i.operator, i.feature, e, t, a);
        } else if (rT(s)) {
          let e = n.image;
          if (!grammarTypeValidators.isKeyword(r)) {
            e = this.converter.convert(e, t).toString();
          }
          s.value += e;
        }
      }
    }
    isValidToken(e) {
      return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
    }
    subrule(e, t, r, n, i) {
      let a;
      if (!this.isRecording() && !r) {
        a = this.nodeBuilder.buildCompositeNode(n);
      }
      let s = this.wrapper.wrapSubrule(e, t, i);
      if (!this.isRecording() && a && a.length > 0) {
        this.performSubruleAssignment(s, n, a);
      }
    }
    performSubruleAssignment(e, t, r) {
      let {
        assignment: n,
        isCrossRef: i
      } = this.getAssignment(t);
      if (n) {
        this.assign(n.operator, n.feature, e, r, i);
      } else if (!n) {
        let t = this.current;
        if (rT(t)) {
          t.value += e.toString();
        } else if (typeof e == "object" && e) {
          let r = this.assignWithoutOverride(e, t);
          this.stack.pop();
          this.stack.push(r);
        }
      }
    }
    action(e, t) {
      if (!this.isRecording()) {
        let r = this.current;
        if (t.feature && t.operator) {
          r = this.construct();
          this.nodeBuilder.removeNode(r.$cstNode);
          this.nodeBuilder.buildCompositeNode(t).content.push(r.$cstNode);
          this.stack.push({
            $type: e
          });
          this.assign(t.operator, t.feature, r, r.$cstNode, false);
        } else {
          r.$type = e;
        }
      }
    }
    construct() {
      if (this.isRecording()) {
        return;
      }
      let e = this.current;
      astNodeUtils.linkContainerRefs(e);
      this.nodeBuilder.construct(e);
      this.stack.pop();
      if (rT(e)) {
        return this.converter.convert(e.value, e.$cstNode);
      } else {
        astNodeUtils.applyTypeDefaults(this.astReflection, e);
        return e;
      }
    }
    getAssignment(e) {
      if (!this.assignmentMap.has(e)) {
        let t = astNodeUtils.findAncestor(e, grammarTypeValidators.isAssignment);
        this.assignmentMap.set(e, {
          assignment: t,
          isCrossRef: !!t && grammarTypeValidators.isCrossReference(t.terminal)
        });
      }
      return this.assignmentMap.get(e);
    }
    assign(e, t, r, n, i) {
      let a;
      let s = this.current;
      a = i && typeof r == "string" ? this.linker.buildReference(s, t, n, r) : r;
      switch (e) {
        case "=":
          s[t] = a;
          break;
        case "?=":
          s[t] = true;
          break;
        case "+=":
          if (!Array.isArray(s[t])) {
            s[t] = [];
          }
          s[t].push(a);
      }
    }
    assignWithoutOverride(e, t) {
      for (let [r, n] of Object.entries(t)) {
        let t = e[r];
        if (t === undefined) {
          e[r] = n;
        } else if (Array.isArray(t) && Array.isArray(n)) {
          n.push(...t);
          e[r] = n;
        }
      }
      let r = e.$cstNode;
      if (r) {
        r.astNode = undefined;
        e.$cstNode = undefined;
      }
      return e;
    }
    get definitionErrors() {
      return this.wrapper.definitionErrors;
    }
  }
  class rE {
    buildMismatchTokenMessage(e) {
      return chevrotainParserLexerUtilities.defaultParserErrorProvider.buildMismatchTokenMessage(e);
    }
    buildNotAllInputParsedMessage(e) {
      return chevrotainParserLexerUtilities.defaultParserErrorProvider.buildNotAllInputParsedMessage(e);
    }
    buildNoViableAltMessage(e) {
      return chevrotainParserLexerUtilities.defaultParserErrorProvider.buildNoViableAltMessage(e);
    }
    buildEarlyExitMessage(e) {
      return chevrotainParserLexerUtilities.defaultParserErrorProvider.buildEarlyExitMessage(e);
    }
  }
  class rA extends rE {
    buildMismatchTokenMessage({
      expected: e,
      actual: t
    }) {
      let r = e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`;
      return `Expecting ${r} but found \`${t.image}\`.`;
    }
    buildNotAllInputParsedMessage({
      firstRedundant: e
    }) {
      return `Expecting end of file but found \`${e.image}\`.`;
    }
  }
  class rk extends rR {
    constructor() {
      super(...arguments);
      this.tokens = [];
      this.elementStack = [];
      this.lastElementStack = [];
      this.nextTokenIndex = 0;
      this.stackSize = 0;
    }
    action() {}
    construct() {}
    parse(e) {
      this.resetState();
      let t = this.lexer.tokenize(e, {
        mode: "partial"
      });
      this.tokens = t.tokens;
      this.wrapper.input = [...this.tokens];
      this.mainRule.call(this.wrapper, {});
      this.unorderedGroups.clear();
      return {
        tokens: this.tokens,
        elementStack: [...this.lastElementStack],
        tokenIndex: this.nextTokenIndex
      };
    }
    rule(e, t) {
      let r = this.wrapper.DEFINE_RULE(rv(e.name), this.startImplementation(t).bind(this));
      this.allRules.set(e.name, r);
      if (e.entry) {
        this.mainRule = r;
      }
      return r;
    }
    resetState() {
      this.elementStack = [];
      this.lastElementStack = [];
      this.nextTokenIndex = 0;
      this.stackSize = 0;
    }
    startImplementation(e) {
      return t => {
        let r = this.keepStackSize();
        try {
          e(t);
        } finally {
          this.resetStackSize(r);
        }
      };
    }
    removeUnexpectedElements() {
      this.elementStack.splice(this.stackSize);
    }
    keepStackSize() {
      let e = this.elementStack.length;
      this.stackSize = e;
      return e;
    }
    resetStackSize(e) {
      this.removeUnexpectedElements();
      this.stackSize = e;
    }
    consume(e, t, r) {
      this.wrapper.wrapConsume(e, t);
      if (!this.isRecording()) {
        this.lastElementStack = [...this.elementStack, r];
        this.nextTokenIndex = this.currIdx + 1;
      }
    }
    subrule(e, t, r, n, i) {
      this.before(n);
      this.wrapper.wrapSubrule(e, t, i);
      this.after(n);
    }
    before(e) {
      if (!this.isRecording()) {
        this.elementStack.push(e);
      }
    }
    after(e) {
      if (!this.isRecording()) {
        let t = this.elementStack.lastIndexOf(e);
        if (t >= 0) {
          this.elementStack.splice(t);
        }
      }
    }
    get currIdx() {
      return this.wrapper.currIdx;
    }
  }
  let rx = {
    recoveryEnabled: true,
    nodeLocationTracking: "full",
    skipValidations: true,
    errorMessageProvider: new rA()
  };
  class rI extends chevrotainParserLexerUtilities.EmbeddedActionsParser {
    constructor(e, t) {
      super(e, Object.assign(Object.assign(Object.assign({}, rx), {
        lookaheadStrategy: t && "maxLookahead" in t ? new chevrotainParserLexerUtilities.DefaultGrammarValidator({
          maxLookahead: t.maxLookahead
        }) : new t5({
          logging: t.skipValidations ? () => {} : undefined
        })
      }), t));
    }
    get IS_RECORDING() {
      return this.RECORDING_PHASE;
    }
    DEFINE_RULE(e, t) {
      return this.RULE(e, t);
    }
    wrapSelfAnalysis() {
      this.performSelfAnalysis();
    }
    wrapConsume(e, t) {
      return this.consume(e, t);
    }
    wrapSubrule(e, t, r) {
      return this.subrule(e, t, {
        ARGS: [r]
      });
    }
    wrapOr(e, t) {
      this.or(e, t);
    }
    wrapOption(e, t) {
      this.option(e, t);
    }
    wrapMany(e, t) {
      this.many(e, t);
    }
    wrapAtLeastOne(e, t) {
      this.atLeastOne(e, t);
    }
  }
  var errorHandlingUtil = require("error-handling-util") /*id: 334225*/;
  var lazyCollectionIterator = require("lazy-collection-iterator") /*id: 734269*/;
  function rN(e, t, r) {
    (function (e, t) {
      let r = grammarTypeNameResolver.collectGrammarRules(t, false);
      for (let n of lazyCollectionIterator.createSequence(t.rules).filter(grammarTypeValidators.isParserRule).filter(e => r.has(e))) {
        let t = Object.assign(Object.assign({}, e), {
          consume: 1,
          optional: 1,
          subrule: 1,
          many: 1,
          or: 1
        });
        e.parser.rule(n, function e(t, r, n = false) {
          let i;
          if (grammarTypeValidators.isKeyword(r)) {
            i = function (e, t) {
              let r = e.consume++;
              let n = e.tokens[t.value];
              if (!n) {
                throw Error("Could not find token for keyword: " + t.value);
              }
              return () => e.parser.consume(r, n, t);
            }(t, r);
          } else if (grammarTypeValidators.isAction(r)) {
            i = function (e, t) {
              let r = grammarTypeNameResolver.resolveGrammarTypeName(t);
              return () => e.parser.action(r, t);
            }(t, r);
          } else if (grammarTypeValidators.isAssignment(r)) {
            i = e(t, r.terminal);
          } else if (grammarTypeValidators.isCrossReference(r)) {
            i = function e(t, r, n = r.terminal) {
              if (n) {
                if (grammarTypeValidators.isRuleCall(n) && grammarTypeValidators.isParserRule(n.rule.ref)) {
                  let e = n.rule.ref;
                  let i = t.subrule++;
                  return n => t.parser.subrule(i, r_(t, e), false, r, n);
                }
                if (grammarTypeValidators.isRuleCall(n) && grammarTypeValidators.isTerminalRule(n.rule.ref)) {
                  let e = t.consume++;
                  let i = rO(t, n.rule.ref.name);
                  return () => t.parser.consume(e, i, r);
                } else if (grammarTypeValidators.isKeyword(n)) {
                  let e = t.consume++;
                  let i = rO(t, n.value);
                  return () => t.parser.consume(e, i, r);
                } else {
                  throw Error("Could not build cross reference parser");
                }
              }
              {
                if (!r.type.ref) {
                  throw Error("Could not resolve reference to type: " + r.type.$refText);
                }
                let n = grammarTypeNameResolver.findNameAssignment(r.type.ref);
                let i = n == null ? undefined : n.terminal;
                if (!i) {
                  throw Error("Could not find name assignment for type: " + grammarTypeNameResolver.resolveGrammarTypeName(r.type.ref));
                }
                return e(t, r, i);
              }
            }(t, r);
          } else if (grammarTypeValidators.isRuleCall(r)) {
            i = function (e, t) {
              let r = t.rule.ref;
              if (grammarTypeValidators.isParserRule(r)) {
                let n = e.subrule++;
                let i = r.fragment;
                let a = t.arguments.length > 0 ? function (e, t) {
                  let r = t.map(e => rw(e.value));
                  return t => {
                    let n = {};
                    for (let i = 0; i < r.length; i++) {
                      let a = e.parameters[i];
                      let s = r[i];
                      n[a.name] = s(t);
                    }
                    return n;
                  };
                }(r, t.arguments) : () => ({});
                return s => e.parser.subrule(n, r_(e, r), i, t, a(s));
              }
              if (grammarTypeValidators.isTerminalRule(r)) {
                let n = e.consume++;
                let i = rO(e, r.name);
                return () => e.parser.consume(n, i, t);
              }
              if (r) {
                errorHandlingUtil.throwUnhandled(r);
              } else {
                throw new errorHandlingUtil.ParseError(t.$cstNode, `Undefined rule: ${t.rule.$refText}`);
              }
            }(t, r);
          } else if (grammarTypeValidators.isAlternatives(r)) {
            i = function (t, r) {
              if (r.elements.length === 1) {
                return e(t, r.elements[0]);
              }
              {
                let n = [];
                for (let i of r.elements) {
                  let r = {
                    ALT: e(t, i, true)
                  };
                  let a = rL(i);
                  if (a) {
                    r.GATE = rw(a);
                  }
                  n.push(r);
                }
                let i = t.or++;
                return e => t.parser.alternatives(i, n.map(t => {
                  let r = {
                    ALT: () => t.ALT(e)
                  };
                  let n = t.GATE;
                  if (n) {
                    r.GATE = () => n(e);
                  }
                  return r;
                }));
              }
            }(t, r);
          } else if (grammarTypeValidators.isUnorderedGroup(r)) {
            i = function (t, r) {
              if (r.elements.length === 1) {
                return e(t, r.elements[0]);
              }
              let n = [];
              for (let i of r.elements) {
                let r = {
                  ALT: e(t, i, true)
                };
                let a = rL(i);
                if (a) {
                  r.GATE = rw(a);
                }
                n.push(r);
              }
              let i = t.or++;
              let a = (e, t) => {
                let r = t.getRuleStack().join("-");
                return `uGroup_${e}_${r}`;
              };
              let s = rb(t, rL(r), e => t.parser.alternatives(i, n.map((r, n) => {
                let s = {
                  ALT: () => true
                };
                let o = t.parser;
                s.ALT = () => {
                  r.ALT(e);
                  if (!o.isRecording()) {
                    let e = a(i, o);
                    if (!o.unorderedGroups.get(e)) {
                      o.unorderedGroups.set(e, []);
                    }
                    let t = o.unorderedGroups.get(e);
                    if ((t == null ? undefined : t[n]) === undefined) {
                      t[n] = true;
                    }
                  }
                };
                let l = r.GATE;
                if (l) {
                  s.GATE = () => l(e);
                } else {
                  s.GATE = () => {
                    let e = o.unorderedGroups.get(a(i, o));
                    return !(e == null ? undefined : e[n]);
                  };
                }
                return s;
              })), "*");
              return e => {
                s(e);
                if (!t.parser.isRecording()) {
                  t.parser.unorderedGroups.delete(a(i, t.parser));
                }
              };
            }(t, r);
          } else if (grammarTypeValidators.isGroup(r)) {
            i = function (t, r) {
              let n = r.elements.map(r => e(t, r));
              return e => n.forEach(t => t(e));
            }(t, r);
          } else if (grammarTypeValidators.isEndOfFile(r)) {
            let e = t.consume++;
            i = () => t.parser.consume(e, chevrotainParserLexerUtilities.EOF, r);
          } else {
            throw new errorHandlingUtil.ParseError(r.$cstNode, `Unexpected element type: ${r.$type}`);
          }
          return rb(t, n ? undefined : rL(r), i, r.cardinality);
        }(t, n.definition));
      }
    })({
      parser: t,
      tokens: r,
      ruleNames: new Map()
    }, e);
    return t;
  }
  function rw(e) {
    if (grammarTypeValidators.isDisjunction(e)) {
      let t = rw(e.left);
      let r = rw(e.right);
      return e => t(e) || r(e);
    }
    if (grammarTypeValidators.isConjunction(e)) {
      let t = rw(e.left);
      let r = rw(e.right);
      return e => t(e) && r(e);
    }
    if (grammarTypeValidators.isNegation(e)) {
      let t = rw(e.value);
      return e => !t(e);
    }
    if (grammarTypeValidators.isParameterReference(e)) {
      let t = e.parameter.ref.name;
      return e => e !== undefined && e[t] === true;
    }
    if (grammarTypeValidators.isBooleanLiteral(e)) {
      let t = !!e.true;
      return () => t;
    }
    errorHandlingUtil.throwUnhandled(e);
  }
  function rL(e) {
    if (grammarTypeValidators.isGroup(e)) {
      return e.guardCondition;
    }
  }
  function rb(e, t, r, n) {
    let i = t && rw(t);
    if (!n) {
      if (!i) {
        return r;
      }
      {
        let t = e.or++;
        return n => e.parser.alternatives(t, [{
          ALT: () => r(n),
          GATE: () => i(n)
        }, {
          ALT: chevrotainParserLexerUtilities.createTokenInstance(),
          GATE: () => !i(n)
        }]);
      }
    }
    if (n === "*") {
      let t = e.many++;
      return n => e.parser.many(t, {
        DEF: () => r(n),
        GATE: i ? () => i(n) : undefined
      });
    }
    if (n === "+") {
      let t = e.many++;
      if (!i) {
        return n => e.parser.atLeastOne(t, {
          DEF: () => r(n)
        });
      }
      {
        let n = e.or++;
        return a => e.parser.alternatives(n, [{
          ALT: () => e.parser.atLeastOne(t, {
            DEF: () => r(a)
          }),
          GATE: () => i(a)
        }, {
          ALT: chevrotainParserLexerUtilities.createTokenInstance(),
          GATE: () => !i(a)
        }]);
      }
    }
    if (n === "?") {
      let t = e.optional++;
      return n => e.parser.optional(t, {
        DEF: () => r(n),
        GATE: i ? () => i(n) : undefined
      });
    }
    errorHandlingUtil.throwUnhandled(n);
  }
  function r_(e, t) {
    let r = function (e, t) {
      if (grammarTypeValidators.isParserRule(t)) {
        return t.name;
      }
      if (e.ruleNames.has(t)) {
        return e.ruleNames.get(t);
      }
      {
        let r = t;
        let n = r.$container;
        let i = t.$type;
        while (!grammarTypeValidators.isParserRule(n)) {
          if (grammarTypeValidators.isGroup(n) || grammarTypeValidators.isAlternatives(n) || grammarTypeValidators.isUnorderedGroup(n)) {
            i = n.elements.indexOf(r).toString() + ":" + i;
          }
          r = n;
          n = n.$container;
        }
        i = n.name + ":" + i;
        e.ruleNames.set(t, i);
        return i;
      }
    }(e, t);
    let n = e.parser.getRule(r);
    if (!n) {
      throw Error(`Rule "${r}" not found."`);
    }
    return n;
  }
  function rO(e, t) {
    let r = e.tokens[t];
    if (!r) {
      throw Error(`Token "${t}" not found."`);
    }
    return r;
  }
  var lexerTokenBuilder = require("lexer-token-builder") /*id: 736338*/;
  var grammarTypeConverter = require("grammar-type-converter") /*id: 467186*/;
  var cancellationTokenUtils = require("cancellation-token-utils") /*id: 79444*/;
  var typeGuardValidators = require("type-guard-validators") /*id: 69877*/;
  let rF = 0;
  let rU = Symbol("OperationCancelled");
  async function rG(e) {
    if (e === cancellationTokenUtils.CancellationToken.None) {
      return;
    }
    let t = performance.now();
    if (t - rF >= 10) {
      rF = t;
      await new Promise(e => {
        if (typeof setImmediate == "undefined") {
          setTimeout(e, 0);
        } else {
          setImmediate(e);
        }
      });
      rF = performance.now();
    }
    if (e.isCancellationRequested) {
      throw rU;
    }
  }
  class rB {
    constructor() {
      this.promise = new Promise((e, t) => {
        this.resolve = t => {
          e(t);
          return this;
        };
        this.reject = e => {
          t(e);
          return this;
        };
      });
    }
  }
  class rK {
    constructor(e, t, r, n) {
      this._uri = e;
      this._languageId = t;
      this._version = r;
      this._content = n;
      this._lineOffsets = undefined;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(e) {
      if (e) {
        let t = this.offsetAt(e.start);
        let r = this.offsetAt(e.end);
        return this._content.substring(t, r);
      }
      return this._content;
    }
    update(e, t) {
      for (let t of e) {
        if (rK.isIncremental(t)) {
          let e = rj(t.range);
          let r = this.offsetAt(e.start);
          let n = this.offsetAt(e.end);
          this._content = this._content.substring(0, r) + t.text + this._content.substring(n, this._content.length);
          let i = Math.max(e.start.line, 0);
          let a = Math.max(e.end.line, 0);
          let s = this._lineOffsets;
          let o = rV(t.text, false, r);
          if (a - i === o.length) {
            for (let e = 0, t = o.length; e < t; e++) {
              s[e + i + 1] = o[e];
            }
          } else if (o.length < 10000) {
            s.splice(i + 1, a - i, ...o);
          } else {
            this._lineOffsets = s = s.slice(0, i + 1).concat(o, s.slice(a + 1));
          }
          let l = t.text.length - (n - r);
          if (l !== 0) {
            for (let e = i + 1 + o.length, t = s.length; e < t; e++) {
              s[e] = s[e] + l;
            }
          }
        } else if (rK.isFull(t)) {
          this._content = t.text;
          this._lineOffsets = undefined;
        } else {
          throw Error("Unknown change event received");
        }
      }
      this._version = t;
    }
    getLineOffsets() {
      if (this._lineOffsets === undefined) {
        this._lineOffsets = rV(this._content, true);
      }
      return this._lineOffsets;
    }
    positionAt(e) {
      e = Math.max(Math.min(e, this._content.length), 0);
      let t = this.getLineOffsets();
      let r = 0;
      let n = t.length;
      if (n === 0) {
        return {
          line: 0,
          character: e
        };
      }
      while (r < n) {
        let i = Math.floor((r + n) / 2);
        if (t[i] > e) {
          n = i;
        } else {
          r = i + 1;
        }
      }
      let i = r - 1;
      e = this.ensureBeforeEOL(e, t[i]);
      return {
        line: i,
        character: e - t[i]
      };
    }
    offsetAt(e) {
      let t = this.getLineOffsets();
      if (e.line >= t.length) {
        return this._content.length;
      }
      if (e.line < 0) {
        return 0;
      }
      let r = t[e.line];
      if (e.character <= 0) {
        return r;
      }
      let n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
      let i = Math.min(r + e.character, n);
      return this.ensureBeforeEOL(i, r);
    }
    ensureBeforeEOL(e, t) {
      while (e > t && rW(this._content.charCodeAt(e - 1))) {
        e--;
      }
      return e;
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
    static isIncremental(e) {
      return e != null && typeof e.text == "string" && e.range !== undefined && (e.rangeLength === undefined || typeof e.rangeLength == "number");
    }
    static isFull(e) {
      return e != null && typeof e.text == "string" && e.range === undefined && e.rangeLength === undefined;
    }
  }
  function rV(e, t, r = 0) {
    let n = t ? [r] : [];
    for (let t = 0; t < e.length; t++) {
      let i = e.charCodeAt(t);
      if (rW(i)) {
        if (i === 13 && t + 1 < e.length && e.charCodeAt(t + 1) === 10) {
          t++;
        }
        n.push(r + t + 1);
      }
    }
    return n;
  }
  function rW(e) {
    return e === 13 || e === 10;
  }
  function rj(e) {
    let t = e.start;
    let r = e.end;
    if (t.line > r.line || t.line === r.line && t.character > r.character) {
      return {
        start: r,
        end: t
      };
    } else {
      return e;
    }
  }
  function rH(e) {
    let t = rj(e.range);
    if (t !== e.range) {
      return {
        newText: e.newText,
        range: t
      };
    } else {
      return e;
    }
  }
  (ei = tk ||= {}).create = function (e, t, r, n) {
    return new rK(e, t, r, n);
  };
  ei.update = function (e, t, r) {
    if (e instanceof rK) {
      e.update(t, r);
      return e;
    }
    throw Error("TextDocument.update: document must be created by TextDocument.create");
  };
  ei.applyEdits = function (e, t) {
    let r = e.getText();
    let n = function e(t, r) {
      if (t.length <= 1) {
        return t;
      }
      let n = t.length / 2 | 0;
      let i = t.slice(0, n);
      let a = t.slice(n);
      e(i, r);
      e(a, r);
      let s = 0;
      let o = 0;
      let l = 0;
      while (s < i.length && o < a.length) {
        if (r(i[s], a[o]) <= 0) {
          t[l++] = i[s++];
        } else {
          t[l++] = a[o++];
        }
      }
      while (s < i.length) {
        t[l++] = i[s++];
      }
      while (o < a.length) {
        t[l++] = a[o++];
      }
      return t;
    }(t.map(rH), (e, t) => {
      let r = e.range.start.line - t.range.start.line;
      if (r === 0) {
        return e.range.start.character - t.range.start.character;
      } else {
        return r;
      }
    });
    let i = 0;
    let a = [];
    for (let t of n) {
      let n = e.offsetAt(t.range.start);
      if (n < i) {
        throw Error("Overlapping edit");
      }
      if (n > i) {
        a.push(r.substring(i, n));
      }
      if (t.newText.length) {
        a.push(t.newText);
      }
      i = e.offsetAt(t.range.end);
    }
    a.push(r.substr(i));
    return a.join("");
  };
  var uriPathUtilities = require("uri-path-utilities") /*id: 851891*/;
  (ea = tx ||= {})[ea.Changed = 0] = "Changed";
  ea[ea.Parsed = 1] = "Parsed";
  ea[ea.IndexedContent = 2] = "IndexedContent";
  ea[ea.ComputedScopes = 3] = "ComputedScopes";
  ea[ea.Linked = 4] = "Linked";
  ea[ea.IndexedReferences = 5] = "IndexedReferences";
  ea[ea.Validated = 6] = "Validated";
  class rY {
    constructor(e) {
      this.serviceRegistry = e.ServiceRegistry;
      this.textDocuments = e.workspace.TextDocuments;
      this.fileSystemProvider = e.workspace.FileSystemProvider;
    }
    async fromUri(e, t = cancellationTokenUtils.CancellationToken.None) {
      let r = await this.fileSystemProvider.readFile(e);
      return this.createAsync(e, r, t);
    }
    fromTextDocument(e, t, r) {
      t = t ?? uriPathUtilities.Uri.parse(e.uri);
      if (cancellationTokenUtils.CancellationToken.is(r)) {
        return this.createAsync(t, e, r);
      } else {
        return this.create(t, e, r);
      }
    }
    fromString(e, t, r) {
      if (cancellationTokenUtils.CancellationToken.is(r)) {
        return this.createAsync(t, e, r);
      } else {
        return this.create(t, e, r);
      }
    }
    fromModel(e, t) {
      return this.create(t, {
        $model: e
      });
    }
    create(e, t, r) {
      if (typeof t == "string") {
        let n = this.parse(e, t, r);
        return this.createLangiumDocument(n, e, undefined, t);
      }
      if ("$model" in t) {
        let r = {
          value: t.$model,
          parserErrors: [],
          lexerErrors: []
        };
        return this.createLangiumDocument(r, e);
      }
      {
        let n = this.parse(e, t.getText(), r);
        return this.createLangiumDocument(n, e, t);
      }
    }
    async createAsync(e, t, r) {
      if (typeof t == "string") {
        let n = await this.parseAsync(e, t, r);
        return this.createLangiumDocument(n, e, undefined, t);
      }
      {
        let n = await this.parseAsync(e, t.getText(), r);
        return this.createLangiumDocument(n, e, t);
      }
    }
    createLangiumDocument(e, t, r, n) {
      let i;
      if (r) {
        i = {
          parseResult: e,
          uri: t,
          state: tx.Parsed,
          references: [],
          textDocument: r
        };
      } else {
        let r = this.createTextDocumentGetter(t, n);
        i = {
          parseResult: e,
          uri: t,
          state: tx.Parsed,
          references: [],
          get textDocument() {
            return r();
          }
        };
      }
      e.value.$document = i;
      return i;
    }
    async update(e, t) {
      var r;
      var n;
      let i = (r = e.parseResult.value.$cstNode) === null || r === undefined ? undefined : r.root.fullText;
      let a = (n = this.textDocuments) === null || n === undefined ? undefined : n.get(e.uri.toString());
      let s = a ? a.getText() : await this.fileSystemProvider.readFile(e.uri);
      if (a) {
        Object.defineProperty(e, "textDocument", {
          value: a
        });
      } else {
        let t = this.createTextDocumentGetter(e.uri, s);
        Object.defineProperty(e, "textDocument", {
          get: t
        });
      }
      if (i !== s) {
        e.parseResult = await this.parseAsync(e.uri, s, t);
        e.parseResult.value.$document = e;
      }
      e.state = tx.Parsed;
      return e;
    }
    parse(e, t, r) {
      return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, r);
    }
    parseAsync(e, t, r) {
      return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, r);
    }
    createTextDocumentGetter(e, t) {
      let r;
      let n = this.serviceRegistry;
      return () => r ??= tk.create(e.toString(), n.getServices(e).LanguageMetaData.languageId, 0, t ?? "");
    }
  }
  class rq {
    constructor(e) {
      this.documentMap = new Map();
      this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory;
      this.serviceRegistry = e.ServiceRegistry;
    }
    get all() {
      return lazyCollectionIterator.createSequence(this.documentMap.values());
    }
    addDocument(e) {
      let t = e.uri.toString();
      if (this.documentMap.has(t)) {
        throw Error(`A document with the URI '${t}' is already present.`);
      }
      this.documentMap.set(t, e);
    }
    getDocument(e) {
      let t = e.toString();
      return this.documentMap.get(t);
    }
    async getOrCreateDocument(e, t) {
      let r = this.getDocument(e);
      if (!r) {
        r = await this.langiumDocumentFactory.fromUri(e, t);
        this.addDocument(r);
      }
      return r;
    }
    createDocument(e, t, r) {
      if (r) {
        return this.langiumDocumentFactory.fromString(t, e, r).then(e => {
          this.addDocument(e);
          return e;
        });
      }
      {
        let r = this.langiumDocumentFactory.fromString(t, e);
        this.addDocument(r);
        return r;
      }
    }
    hasDocument(e) {
      return this.documentMap.has(e.toString());
    }
    invalidateDocument(e) {
      let t = e.toString();
      let r = this.documentMap.get(t);
      if (r) {
        this.serviceRegistry.getServices(e).references.Linker.unlink(r);
        r.state = tx.Changed;
        r.precomputedScopes = undefined;
        r.diagnostics = undefined;
      }
      return r;
    }
    deleteDocument(e) {
      let t = e.toString();
      let r = this.documentMap.get(t);
      if (r) {
        r.state = tx.Changed;
        this.documentMap.delete(t);
      }
      return r;
    }
  }
  let rX = Symbol("ref_resolving");
  class rQ {
    constructor(e) {
      this.reflection = e.shared.AstReflection;
      this.langiumDocuments = () => e.shared.workspace.LangiumDocuments;
      this.scopeProvider = e.references.ScopeProvider;
      this.astNodeLocator = e.workspace.AstNodeLocator;
    }
    async link(e, t = cancellationTokenUtils.CancellationToken.None) {
      for (let r of astNodeUtils.recursiveTraverse(e.parseResult.value)) {
        await rG(t);
        astNodeUtils.findReferences(r).forEach(t => this.doLink(t, e));
      }
    }
    doLink(e, t) {
      let n = e.reference;
      if (n._ref === undefined) {
        n._ref = rX;
        try {
          let t = this.getCandidate(e);
          if (typeGuardValidators.isRefMessage(t)) {
            n._ref = t;
          } else {
            n._nodeDescription = t;
            if (this.langiumDocuments().hasDocument(t.documentUri)) {
              let r = this.loadAstNode(t);
              n._ref = r ?? this.createLinkingError(e, t);
            } else {
              n._ref = undefined;
            }
          }
        } catch (i) {
          let t = i.message ?? String(i);
          n._ref = Object.assign(Object.assign({}, e), {
            message: `An error occurred while resolving reference to '${n.$refText}': ${t}`
          });
        }
        t.references.push(n);
      }
    }
    unlink(e) {
      for (let t of e.references) {
        delete t._ref;
        delete t._nodeDescription;
      }
      e.references = [];
    }
    getCandidate(e) {
      let t = this.scopeProvider.getScope(e).getElement(e.reference.$refText);
      return t ?? this.createLinkingError(e);
    }
    buildReference(e, t, r, n) {
      let i = this;
      let a = {
        $refNode: r,
        $refText: n,
        get ref() {
          if (typeGuardValidators.isTypeObject(this._ref)) {
            return this._ref;
          }
          if (typeGuardValidators.isNodeInfo(this._nodeDescription)) {
            let r = i.loadAstNode(this._nodeDescription);
            this._ref = r ?? i.createLinkingError({
              reference: a,
              container: e,
              property: t
            }, this._nodeDescription);
          } else if (this._ref === undefined) {
            this._ref = rX;
            let r = astNodeUtils.getRootNode(e).$document;
            let n = i.getLinkedNode({
              reference: a,
              container: e,
              property: t
            });
            if (n.error && r && r.state < tx.ComputedScopes) {
              return this._ref = undefined;
            }
            this._ref = n.node ?? n.error;
            this._nodeDescription = n.descr;
            if (r != null) {
              r.references.push(this);
            }
          } else if (this._ref === rX) {
            throw Error(`Cyclic reference resolution detected: ${i.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${n}')`);
          }
          if (typeGuardValidators.isTypeObject(this._ref)) {
            return this._ref;
          } else {
            return undefined;
          }
        },
        get $nodeDescription() {
          return this._nodeDescription;
        },
        get error() {
          if (typeGuardValidators.isRefMessage(this._ref)) {
            return this._ref;
          } else {
            return undefined;
          }
        }
      };
      return a;
    }
    getLinkedNode(e) {
      try {
        let t = this.getCandidate(e);
        if (typeGuardValidators.isRefMessage(t)) {
          return {
            error: t
          };
        }
        let r = this.loadAstNode(t);
        if (r) {
          return {
            node: r,
            descr: t
          };
        }
        return {
          descr: t,
          error: this.createLinkingError(e, t)
        };
      } catch (n) {
        let r = n.message ?? String(n);
        return {
          error: Object.assign(Object.assign({}, e), {
            message: `An error occurred while resolving reference to '${e.reference.$refText}': ${r}`
          })
        };
      }
    }
    loadAstNode(e) {
      if (e.node) {
        return e.node;
      }
      let t = this.langiumDocuments().getDocument(e.documentUri);
      if (t) {
        return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
      }
    }
    createLinkingError(e, t) {
      let r = astNodeUtils.getRootNode(e.container).$document;
      if (r) {
        r.state;
        tx.ComputedScopes;
      }
      let n = this.reflection.getReferenceType(e);
      return Object.assign(Object.assign({}, e), {
        message: `Could not resolve reference to ${n} named '${e.reference.$refText}'.`,
        targetDescription: t
      });
    }
  }
  class rJ {
    getName(e) {
      if (typeof e.name == "string") {
        return e.name;
      }
    }
    getNameNode(e) {
      return grammarTypeNameResolver.getContentByPosition(e.$cstNode, "name");
    }
  }
  (es = tI ||= {}).basename = uriPathUtilities.uriUtils.basename;
  es.dirname = uriPathUtilities.uriUtils.dirname;
  es.extname = uriPathUtilities.uriUtils.extname;
  es.joinPath = uriPathUtilities.uriUtils.joinPath;
  es.resolvePath = uriPathUtilities.uriUtils.resolvePath;
  es.equals = function (e, t) {
    return (e == null ? undefined : e.toString()) === (t == null ? undefined : t.toString());
  };
  es.relative = function (e, t) {
    let r = typeof e == "string" ? e : e.path;
    let n = typeof t == "string" ? t : t.path;
    let i = r.split("/").filter(e => e.length > 0);
    let a = n.split("/").filter(e => e.length > 0);
    let s = 0;
    for (; s < i.length && i[s] === a[s]; s++);
    return "../".repeat(i.length - s) + a.slice(s).join("/");
  };
  es.normalize = function (e) {
    return uriPathUtilities.Uri.parse(e.toString()).toString();
  };
  class r0 {
    constructor(e) {
      this.nameProvider = e.references.NameProvider;
      this.index = e.shared.workspace.IndexManager;
      this.nodeLocator = e.workspace.AstNodeLocator;
    }
    findDeclaration(e) {
      if (e) {
        let t = grammarTypeNameResolver.findAssignmentAncestor(e);
        let r = e.astNode;
        if (t && r) {
          let n = r[t.feature];
          if (typeGuardValidators.isRefText(n)) {
            return n.ref;
          }
          if (Array.isArray(n)) {
            for (let t of n) {
              if (typeGuardValidators.isRefText(t) && t.$refNode && t.$refNode.offset <= e.offset && t.$refNode.end >= e.end) {
                return t.ref;
              }
            }
          }
        }
        if (r) {
          let t = this.nameProvider.getNameNode(r);
          if (t && (t === e || positionRangeUtils_1.isContainerOf(e, t))) {
            return r;
          }
        }
      }
    }
    findDeclarationNode(e) {
      let t = this.findDeclaration(e);
      if (t == null ? undefined : t.$cstNode) {
        let e = this.nameProvider.getNameNode(t);
        return e ?? t.$cstNode;
      }
    }
    findReferences(e, t) {
      let r = [];
      if (t.includeDeclaration) {
        let t = this.getReferenceToSelf(e);
        if (t) {
          r.push(t);
        }
      }
      let n = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
      if (t.documentUri) {
        n = n.filter(e => tI.equals(e.sourceUri, t.documentUri));
      }
      r.push(...n);
      return lazyCollectionIterator.createSequence(r);
    }
    getReferenceToSelf(e) {
      let t = this.nameProvider.getNameNode(e);
      if (t) {
        let r = astNodeUtils.getNodeDocument(e);
        let n = this.nodeLocator.getAstNodePath(e);
        return {
          sourceUri: r.uri,
          sourcePath: n,
          targetUri: r.uri,
          targetPath: n,
          segment: positionRangeUtils_1.extractPositionInfo(t),
          local: true
        };
      }
    }
  }
  class r1 {
    constructor(e) {
      this.map = new Map();
      if (e) {
        for (let [t, r] of e) {
          this.add(t, r);
        }
      }
    }
    get size() {
      return lazyCollectionIterator.collectionUtils.sum(lazyCollectionIterator.createSequence(this.map.values()).map(e => e.length));
    }
    clear() {
      this.map.clear();
    }
    delete(e, t) {
      if (t === undefined) {
        return this.map.delete(e);
      }
      {
        let r = this.map.get(e);
        if (r) {
          let n = r.indexOf(t);
          if (n >= 0) {
            if (r.length === 1) {
              this.map.delete(e);
            } else {
              r.splice(n, 1);
            }
            return true;
          }
        }
        return false;
      }
    }
    get(e) {
      return this.map.get(e) ?? [];
    }
    has(e, t) {
      if (t === undefined) {
        return this.map.has(e);
      }
      {
        let r = this.map.get(e);
        return !!r && r.indexOf(t) >= 0;
      }
    }
    add(e, t) {
      if (this.map.has(e)) {
        this.map.get(e).push(t);
      } else {
        this.map.set(e, [t]);
      }
      return this;
    }
    addAll(e, t) {
      if (this.map.has(e)) {
        this.map.get(e).push(...t);
      } else {
        this.map.set(e, Array.from(t));
      }
      return this;
    }
    forEach(e) {
      this.map.forEach((t, r) => t.forEach(t => e(t, r, this)));
    }
    [Symbol.iterator]() {
      return this.entries().iterator();
    }
    entries() {
      return lazyCollectionIterator.createSequence(this.map.entries()).flatMap(([e, t]) => t.map(t => [e, t]));
    }
    keys() {
      return lazyCollectionIterator.createSequence(this.map.keys());
    }
    values() {
      return lazyCollectionIterator.createSequence(this.map.values()).flat();
    }
    entriesGroupedByKey() {
      return lazyCollectionIterator.createSequence(this.map.entries());
    }
  }
  class r2 {
    get size() {
      return this.map.size;
    }
    constructor(e) {
      this.map = new Map();
      this.inverse = new Map();
      if (e) {
        for (let [t, r] of e) {
          this.set(t, r);
        }
      }
    }
    clear() {
      this.map.clear();
      this.inverse.clear();
    }
    set(e, t) {
      this.map.set(e, t);
      this.inverse.set(t, e);
      return this;
    }
    get(e) {
      return this.map.get(e);
    }
    getKey(e) {
      return this.inverse.get(e);
    }
    delete(e) {
      let t = this.map.get(e);
      return t !== undefined && (this.map.delete(e), this.inverse.delete(t), true);
    }
  }
  class r7 {
    constructor(e) {
      this.nameProvider = e.references.NameProvider;
      this.descriptions = e.workspace.AstNodeDescriptionProvider;
    }
    async computeExports(e, t = cancellationTokenUtils.CancellationToken.None) {
      return this.computeExportsForNode(e.parseResult.value, e, undefined, t);
    }
    async computeExportsForNode(e, t, r = astNodeUtils.iterateChildren, n = cancellationTokenUtils.CancellationToken.None) {
      let i = [];
      this.exportNode(e, i, t);
      for (let a of r(e)) {
        await rG(n);
        this.exportNode(a, i, t);
      }
      return i;
    }
    exportNode(e, t, r) {
      let n = this.nameProvider.getName(e);
      if (n) {
        t.push(this.descriptions.createDescription(e, n, r));
      }
    }
    async computeLocalScopes(e, t = cancellationTokenUtils.CancellationToken.None) {
      let r = e.parseResult.value;
      let n = new r1();
      for (let i of astNodeUtils.traverseTree(r)) {
        await rG(t);
        this.processNode(i, e, n);
      }
      return n;
    }
    processNode(e, t, r) {
      let n = e.$container;
      if (n) {
        let i = this.nameProvider.getName(e);
        if (i) {
          r.add(n, this.descriptions.createDescription(e, i, t));
        }
      }
    }
  }
  class r4 {
    constructor(e, t, r) {
      var n;
      this.elements = e;
      this.outerScope = t;
      this.caseInsensitive = (n = r == null ? undefined : r.caseInsensitive) !== null && n !== undefined && n;
    }
    getAllElements() {
      if (this.outerScope) {
        return this.elements.concat(this.outerScope.getAllElements());
      } else {
        return this.elements;
      }
    }
    getElement(e) {
      let t = this.caseInsensitive ? this.elements.find(t => t.name.toLowerCase() === e.toLowerCase()) : this.elements.find(t => t.name === e);
      return t || (this.outerScope ? this.outerScope.getElement(e) : undefined);
    }
  }
  class r9 {
    constructor(e, t, r) {
      var n;
      this.elements = new Map();
      this.caseInsensitive = (n = r == null ? undefined : r.caseInsensitive) !== null && n !== undefined && n;
      for (let t of e) {
        let e = this.caseInsensitive ? t.name.toLowerCase() : t.name;
        this.elements.set(e, t);
      }
      this.outerScope = t;
    }
    getElement(e) {
      let t = this.caseInsensitive ? e.toLowerCase() : e;
      let r = this.elements.get(t);
      return r || (this.outerScope ? this.outerScope.getElement(e) : undefined);
    }
    getAllElements() {
      let e = lazyCollectionIterator.createSequence(this.elements.values());
      if (this.outerScope) {
        e = e.concat(this.outerScope.getAllElements());
      }
      return e;
    }
  }
  class r8 {
    constructor() {
      this.toDispose = [];
      this.isDisposed = false;
    }
    onDispose(e) {
      this.toDispose.push(e);
    }
    dispose() {
      this.throwIfDisposed();
      this.clear();
      this.isDisposed = true;
      this.toDispose.forEach(e => e.dispose());
    }
    throwIfDisposed() {
      if (this.isDisposed) {
        throw Error("This cache has already been disposed");
      }
    }
  }
  class r3 extends r8 {
    constructor() {
      super(...arguments);
      this.cache = new Map();
    }
    has(e) {
      this.throwIfDisposed();
      return this.cache.has(e);
    }
    set(e, t) {
      this.throwIfDisposed();
      this.cache.set(e, t);
    }
    get(e, t) {
      this.throwIfDisposed();
      if (this.cache.has(e)) {
        return this.cache.get(e);
      }
      if (t) {
        let r = t();
        this.cache.set(e, r);
        return r;
      }
    }
    delete(e) {
      this.throwIfDisposed();
      return this.cache.delete(e);
    }
    clear() {
      this.throwIfDisposed();
      this.cache.clear();
    }
  }
  class r6 extends r8 {
    constructor(e) {
      super();
      this.cache = new Map();
      this.converter = e ?? (e => e);
    }
    has(e, t) {
      this.throwIfDisposed();
      return this.cacheForContext(e).has(t);
    }
    set(e, t, r) {
      this.throwIfDisposed();
      this.cacheForContext(e).set(t, r);
    }
    get(e, t, r) {
      this.throwIfDisposed();
      let n = this.cacheForContext(e);
      if (n.has(t)) {
        return n.get(t);
      }
      if (r) {
        let e = r();
        n.set(t, e);
        return e;
      }
    }
    delete(e, t) {
      this.throwIfDisposed();
      return this.cacheForContext(e).delete(t);
    }
    clear(e) {
      this.throwIfDisposed();
      if (e) {
        let t = this.converter(e);
        this.cache.delete(t);
      } else {
        this.cache.clear();
      }
    }
    cacheForContext(e) {
      let t = this.converter(e);
      let r = this.cache.get(t);
      if (!r) {
        r = new Map();
        this.cache.set(t, r);
      }
      return r;
    }
  }
  class r5 extends r3 {
    constructor(e, t) {
      super();
      if (t) {
        this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
          this.clear();
        }));
        this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, t) => {
          if (t.length > 0) {
            this.clear();
          }
        }));
      } else {
        this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
          this.clear();
        }));
      }
    }
  }
  class ne {
    constructor(e) {
      this.reflection = e.shared.AstReflection;
      this.nameProvider = e.references.NameProvider;
      this.descriptions = e.workspace.AstNodeDescriptionProvider;
      this.indexManager = e.shared.workspace.IndexManager;
      this.globalScopeCache = new r5(e.shared);
    }
    getScope(e) {
      let t = [];
      let r = this.reflection.getReferenceType(e);
      let n = astNodeUtils.getNodeDocument(e.container).precomputedScopes;
      if (n) {
        let i = e.container;
        do {
          let e = n.get(i);
          if (e.length > 0) {
            t.push(lazyCollectionIterator.createSequence(e).filter(e => this.reflection.isSubtype(e.type, r)));
          }
          i = i.$container;
        } while (i);
      }
      let i = this.getGlobalScope(r, e);
      for (let e = t.length - 1; e >= 0; e--) {
        i = this.createScope(t[e], i);
      }
      return i;
    }
    createScope(e, t, r) {
      return new r4(lazyCollectionIterator.createSequence(e), t, r);
    }
    createScopeForNodes(e, t, r) {
      return new r4(lazyCollectionIterator.createSequence(e).map(e => {
        let t = this.nameProvider.getName(e);
        if (t) {
          return this.descriptions.createDescription(e, t);
        }
      }).nonNullable(), t, r);
    }
    getGlobalScope(e, t) {
      return this.globalScopeCache.get(e, () => new r9(this.indexManager.allElements(e)));
    }
  }
  function nt(e) {
    return typeof e == "object" && !!e && ("$ref" in e || "$error" in e);
  }
  class nr {
    constructor(e) {
      this.ignoreProperties = new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]);
      this.langiumDocuments = e.shared.workspace.LangiumDocuments;
      this.astNodeLocator = e.workspace.AstNodeLocator;
      this.nameProvider = e.references.NameProvider;
      this.commentProvider = e.documentation.CommentProvider;
    }
    serialize(e, t) {
      let r = t ?? {};
      let n = t == null ? undefined : t.replacer;
      let i = (e, t) => this.replacer(e, t, r);
      let a = n ? (e, t) => n(e, t, i) : i;
      try {
        this.currentDocument = astNodeUtils.getNodeDocument(e);
        return JSON.stringify(e, a, t == null ? undefined : t.space);
      } finally {
        this.currentDocument = undefined;
      }
    }
    deserialize(e, t) {
      let r = JSON.parse(e);
      this.linkNode(r, r, t ?? {});
      return r;
    }
    replacer(e, t, {
      refText: r,
      sourceText: n,
      textRegions: i,
      comments: a,
      uriConverter: s
    }) {
      var u;
      if (!this.ignoreProperties.has(e)) {
        if (typeGuardValidators.isRefText(t)) {
          let e = t.ref;
          let n = r ? t.$refText : undefined;
          if (!e) {
            return {
              $error: t.error?.message ?? "Could not resolve reference",
              $refText: n
            };
          }
          {
            let r = astNodeUtils.getNodeDocument(e);
            let i = "";
            if (this.currentDocument && this.currentDocument !== r) {
              i = s ? s(r.uri, t) : r.uri.toString();
            }
            let a = this.astNodeLocator.getAstNodePath(e);
            return {
              $ref: `${i}#${a}`,
              $refText: n
            };
          }
        }
        if (!typeGuardValidators.isTypeObject(t)) {
          return t;
        }
        {
          let r;
          if (i) {
            r = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t));
            if ((!e || t.$document) && (r == null ? undefined : r.$textRegion)) {
              r.$textRegion.documentURI = (u = this.currentDocument) === null || u === undefined ? undefined : u.uri.toString();
            }
          }
          if (n && !e) {
            if (r == null) {
              r = Object.assign({}, t);
            }
            r.$sourceText = t.$cstNode?.text;
          }
          if (a) {
            if (r == null) {
              r = Object.assign({}, t);
            }
            let e = this.commentProvider.getComment(t);
            if (e) {
              r.$comment = e.replace(/\r/g, "");
            }
          }
          return r ?? t;
        }
      }
    }
    addAstNodeRegionWithAssignmentsTo(e) {
      let t = e => ({
        offset: e.offset,
        end: e.end,
        length: e.length,
        range: e.range
      });
      if (e.$cstNode) {
        let r = (e.$textRegion = t(e.$cstNode)).assignments = {};
        Object.keys(e).filter(e => !e.startsWith("$")).forEach(n => {
          let i = grammarTypeNameResolver.findContentAtPosition(e.$cstNode, n).map(t);
          if (i.length !== 0) {
            r[n] = i;
          }
        });
        return e;
      }
    }
    linkNode(e, t, r, n, i, a) {
      for (let [n, i] of Object.entries(e)) {
        if (Array.isArray(i)) {
          for (let a = 0; a < i.length; a++) {
            let s = i[a];
            if (nt(s)) {
              i[a] = this.reviveReference(e, n, t, s, r);
            } else if (typeGuardValidators.isTypeObject(s)) {
              this.linkNode(s, t, r, e, n, a);
            }
          }
        } else if (nt(i)) {
          e[n] = this.reviveReference(e, n, t, i, r);
        } else if (typeGuardValidators.isTypeObject(i)) {
          this.linkNode(i, t, r, e, n);
        }
      }
      e.$container = n;
      e.$containerProperty = i;
      e.$containerIndex = a;
    }
    reviveReference(e, t, r, n, i) {
      let a = n.$refText;
      let s = n.$error;
      if (n.$ref) {
        let e = this.getRefNode(r, n.$ref, i.uriConverter);
        if (typeGuardValidators.isTypeObject(e)) {
          a ||= this.nameProvider.getName(e);
          return {
            $refText: a ?? "",
            ref: e
          };
        }
        s = e;
      }
      if (s) {
        let r = {
          $refText: a ?? ""
        };
        r.error = {
          container: e,
          property: t,
          message: s,
          reference: r
        };
        return r;
      }
    }
    getRefNode(e, t, r) {
      try {
        let n = t.indexOf("#");
        if (n === 0) {
          let r = this.astNodeLocator.getAstNode(e, t.substring(1));
          if (!r) {
            return "Could not resolve path: " + t;
          }
          return r;
        }
        if (n < 0) {
          let e = r ? r(t) : uriPathUtilities.Uri.parse(t);
          let n = this.langiumDocuments.getDocument(e);
          if (!n) {
            return "Could not find document for URI: " + t;
          }
          return n.parseResult.value;
        }
        let i = r ? r(t.substring(0, n)) : uriPathUtilities.Uri.parse(t.substring(0, n));
        let a = this.langiumDocuments.getDocument(i);
        if (!a) {
          return "Could not find document for URI: " + t;
        }
        if (n === t.length - 1) {
          return a.parseResult.value;
        }
        let s = this.astNodeLocator.getAstNode(a.parseResult.value, t.substring(n + 1));
        if (!s) {
          return "Could not resolve URI: " + t;
        }
        return s;
      } catch (e) {
        return String(e);
      }
    }
  }
  class nn {
    get map() {
      return this.fileExtensionMap;
    }
    constructor(e) {
      this.languageIdMap = new Map();
      this.fileExtensionMap = new Map();
      this.textDocuments = e == null ? undefined : e.workspace.TextDocuments;
    }
    register(e) {
      let t = e.LanguageMetaData;
      for (let r of t.fileExtensions) {
        this.fileExtensionMap.has(r);
        this.fileExtensionMap.set(r, e);
      }
      this.languageIdMap.set(t.languageId, e);
      if (this.languageIdMap.size === 1) {
        this.singleton = e;
      } else {
        this.singleton = undefined;
      }
    }
    getServices(e) {
      var t;
      if (this.singleton !== undefined) {
        return this.singleton;
      }
      if (this.languageIdMap.size === 0) {
        throw Error("The service registry is empty. Use `register` to register the services of a language.");
      }
      let n = ((t = this.textDocuments) === null || t === undefined ? undefined : t.get(e))?.languageId;
      if (n !== undefined) {
        let e = this.languageIdMap.get(n);
        if (e) {
          return e;
        }
      }
      let i = tI.extname(e);
      let a = this.fileExtensionMap.get(i);
      if (!a) {
        if (n) {
          throw Error(`The service registry contains no services for the extension '${i}' for language '${n}'.`);
        }
        throw Error(`The service registry contains no services for the extension '${i}'.`);
      }
      return a;
    }
    hasServices(e) {
      try {
        this.getServices(e);
        return true;
      } catch (e) {
        return false;
      }
    }
    get all() {
      return Array.from(this.languageIdMap.values());
    }
  }
  (tS ||= {}).all = ["fast", "slow", "built-in"];
  class ni {
    constructor(e) {
      this.entries = new r1();
      this.entriesBefore = [];
      this.entriesAfter = [];
      this.reflection = e.shared.AstReflection;
    }
    register(e, t = this, r = "fast") {
      if (r === "built-in") {
        throw Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
      }
      for (let [n, i] of Object.entries(e)) {
        if (Array.isArray(i)) {
          for (let e of i) {
            let i = {
              check: this.wrapValidationException(e, t),
              category: r
            };
            this.addEntry(n, i);
          }
        } else if (typeof i == "function") {
          let e = {
            check: this.wrapValidationException(i, t),
            category: r
          };
          this.addEntry(n, e);
        } else {
          errorHandlingUtil.throwUnhandled(i);
        }
      }
    }
    wrapValidationException(e, t) {
      return async (r, n, i) => {
        await this.handleException(() => e.call(t, r, n, i), "An error occurred during validation", n, r);
      };
    }
    async handleException(e, t, r, n) {
      try {
        await e();
      } catch (i) {
        if (i === rU) {
          throw i;
        }
        if (i instanceof Error) {
          i.stack;
        }
        let e = i instanceof Error ? i.message : String(i);
        r("error", `${t}: ${e}`, {
          node: n
        });
      }
    }
    addEntry(e, t) {
      if (e === "AstNode") {
        this.entries.add("AstNode", t);
        return;
      }
      for (let r of this.reflection.getAllSubTypes(e)) {
        this.entries.add(r, t);
      }
    }
    getChecks(e, t) {
      let r = lazyCollectionIterator.createSequence(this.entries.get(e)).concat(this.entries.get("AstNode"));
      if (t) {
        r = r.filter(e => t.includes(e.category));
      }
      return r.map(e => e.check);
    }
    registerBeforeDocument(e, t = this) {
      this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
    }
    registerAfterDocument(e, t = this) {
      this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
    }
    wrapPreparationException(e, t, r) {
      return async (n, i, a, s) => {
        await this.handleException(() => e.call(r, n, i, a, s), t, i, n);
      };
    }
    get checksBefore() {
      return this.entriesBefore;
    }
    get checksAfter() {
      return this.entriesAfter;
    }
  }
  class na {
    constructor(e) {
      this.validationRegistry = e.validation.ValidationRegistry;
      this.metadata = e.LanguageMetaData;
    }
    async validateDocument(e, t = {}, r = cancellationTokenUtils.CancellationToken.None) {
      let n = e.parseResult;
      let i = [];
      await rG(r);
      if ((!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(n, i, t), t.stopAfterLexingErrors && i.some(e => {
        return e.data?.code === tC.LexingError;
      }) || (this.processParsingErrors(n, i, t), t.stopAfterParsingErrors && i.some(e => {
        return e.data?.code === tC.ParsingError;
      })) || (this.processLinkingErrors(e, i, t), t.stopAfterLinkingErrors && i.some(e => {
        return e.data?.code === tC.LinkingError;
      })))) {
        return i;
      }
      try {
        i.push(...(await this.validateAst(n.value, t, r)));
      } catch (e) {
        if (e === rU) {
          throw e;
        }
      }
      await rG(r);
      return i;
    }
    processLexingErrors(e, t, r) {
      for (let r of [...e.lexerErrors, ...(e.lexerReport?.diagnostics ?? [])]) {
        let e = r.severity ?? "error";
        let n = {
          severity: ns(e),
          range: {
            start: {
              line: r.line - 1,
              character: r.column - 1
            },
            end: {
              line: r.line - 1,
              character: r.column + r.length - 1
            }
          },
          message: r.message,
          data: function (e) {
            switch (e) {
              case "error":
                return {
                  code: tC.LexingError
                };
              case "warning":
                return {
                  code: tC.LexingWarning
                };
              case "info":
                return {
                  code: tC.LexingInfo
                };
              case "hint":
                return {
                  code: tC.LexingHint
                };
              default:
                throw Error("Invalid diagnostic severity: " + e);
            }
          }(e),
          source: this.getSource()
        };
        t.push(n);
      }
    }
    processParsingErrors(e, t, r) {
      for (let r of e.parserErrors) {
        let e;
        if (isNaN(r.token.startOffset)) {
          if ("previousToken" in r) {
            let t = r.previousToken;
            if (isNaN(t.startOffset)) {
              let t = {
                line: 0,
                character: 0
              };
              e = {
                start: t,
                end: t
              };
            } else {
              let r = {
                line: t.endLine - 1,
                character: t.endColumn
              };
              e = {
                start: r,
                end: r
              };
            }
          }
        } else {
          e = positionRangeUtils_1.convertPosition(r.token);
        }
        if (e) {
          let n = {
            severity: ns("error"),
            range: e,
            message: r.message,
            data: {
              code: tC.ParsingError
            },
            source: this.getSource()
          };
          t.push(n);
        }
      }
    }
    processLinkingErrors(e, t, r) {
      for (let r of e.references) {
        let e = r.error;
        if (e) {
          let r = {
            node: e.container,
            property: e.property,
            index: e.index,
            data: {
              code: tC.LinkingError,
              containerType: e.container.$type,
              property: e.property,
              refText: e.reference.$refText
            }
          };
          t.push(this.toDiagnostic("error", e.message, r));
        }
      }
    }
    async validateAst(e, t, r = cancellationTokenUtils.CancellationToken.None) {
      let n = [];
      let i = (e, t, r) => {
        n.push(this.toDiagnostic(e, t, r));
      };
      await this.validateAstBefore(e, t, i, r);
      await this.validateAstNodes(e, t, i, r);
      await this.validateAstAfter(e, t, i, r);
      return n;
    }
    async validateAstBefore(e, t, r, n = cancellationTokenUtils.CancellationToken.None) {
      for (let a of this.validationRegistry.checksBefore) {
        await rG(n);
        await a(e, r, t.categories ?? [], n);
      }
    }
    async validateAstNodes(e, t, r, n = cancellationTokenUtils.CancellationToken.None) {
      await Promise.all(astNodeUtils.recursiveTraverse(e).map(async e => {
        await rG(n);
        for (let i of this.validationRegistry.getChecks(e.$type, t.categories)) {
          await i(e, r, n);
        }
      }));
    }
    async validateAstAfter(e, t, r, n = cancellationTokenUtils.CancellationToken.None) {
      for (let a of this.validationRegistry.checksAfter) {
        await rG(n);
        await a(e, r, t.categories ?? [], n);
      }
    }
    toDiagnostic(e, t, r) {
      var n;
      let i;
      return {
        message: t,
        range: (n = r).range ? n.range : (typeof n.property == "string" ? i = grammarTypeNameResolver.getContentByPosition(n.node.$cstNode, n.property, n.index) : typeof n.keyword == "string" && (i = grammarTypeNameResolver.findKeywordInContent(n.node.$cstNode, n.keyword, n.index)), i != null || (i = n.node.$cstNode), i) ? i.range : {
          start: {
            line: 0,
            character: 0
          },
          end: {
            line: 0,
            character: 0
          }
        },
        severity: ns(e),
        code: r.code,
        codeDescription: r.codeDescription,
        tags: r.tags,
        relatedInformation: r.relatedInformation,
        data: r.data,
        source: this.getSource()
      };
    }
    getSource() {
      return this.metadata.languageId;
    }
  }
  function ns(e) {
    switch (e) {
      case "error":
        return 1;
      case "warning":
        return 2;
      case "info":
        return 3;
      case "hint":
        return 4;
      default:
        throw Error("Invalid diagnostic severity: " + e);
    }
  }
  (eo = tC ||= {}).LexingError = "lexing-error";
  eo.LexingWarning = "lexing-warning";
  eo.LexingInfo = "lexing-info";
  eo.LexingHint = "lexing-hint";
  eo.ParsingError = "parsing-error";
  eo.LinkingError = "linking-error";
  class no {
    constructor(e) {
      this.astNodeLocator = e.workspace.AstNodeLocator;
      this.nameProvider = e.references.NameProvider;
    }
    createDescription(e, t, r) {
      let n;
      let i = r ?? astNodeUtils.getNodeDocument(e);
      if (t == null) {
        t = this.nameProvider.getName(e);
      }
      let a = this.astNodeLocator.getAstNodePath(e);
      if (!t) {
        throw Error(`Node at path ${a} has no name.`);
      }
      let s = () => {
        return n ??= positionRangeUtils_1.extractPositionInfo(this.nameProvider.getNameNode(e) ?? e.$cstNode);
      };
      return {
        node: e,
        name: t,
        get nameSegment() {
          return s();
        },
        selectionSegment: positionRangeUtils_1.extractPositionInfo(e.$cstNode),
        type: e.$type,
        documentUri: i.uri,
        path: a
      };
    }
  }
  class nl {
    constructor(e) {
      this.nodeLocator = e.workspace.AstNodeLocator;
    }
    async createDescriptions(e, t = cancellationTokenUtils.CancellationToken.None) {
      let r = [];
      let n = e.parseResult.value;
      for (let e of astNodeUtils.recursiveTraverse(n)) {
        await rG(t);
        astNodeUtils.findReferences(e).filter(e => !typeGuardValidators.isRefMessage(e)).forEach(e => {
          let t = this.createDescription(e);
          if (t) {
            r.push(t);
          }
        });
      }
      return r;
    }
    createDescription(e) {
      let t = e.reference.$nodeDescription;
      let r = e.reference.$refNode;
      if (!t || !r) {
        return;
      }
      let n = astNodeUtils.getNodeDocument(e.container).uri;
      return {
        sourceUri: n,
        sourcePath: this.nodeLocator.getAstNodePath(e.container),
        targetUri: t.documentUri,
        targetPath: t.path,
        segment: positionRangeUtils_1.extractPositionInfo(r),
        local: tI.equals(t.documentUri, n)
      };
    }
  }
  class nu {
    constructor() {
      this.segmentSeparator = "/";
      this.indexSeparator = "@";
    }
    getAstNodePath(e) {
      if (e.$container) {
        let t = this.getAstNodePath(e.$container);
        let r = this.getPathSegment(e);
        return t + this.segmentSeparator + r;
      }
      return "";
    }
    getPathSegment({
      $containerProperty: e,
      $containerIndex: t
    }) {
      if (!e) {
        throw Error("Missing '$containerProperty' in AST node.");
      }
      if (t !== undefined) {
        return e + this.indexSeparator + t;
      } else {
        return e;
      }
    }
    getAstNode(e, t) {
      return t.split(this.segmentSeparator).reduce((e, t) => {
        if (!e || t.length === 0) {
          return e;
        }
        let r = t.indexOf(this.indexSeparator);
        if (r > 0) {
          let n = t.substring(0, r);
          let i = parseInt(t.substring(r + 1));
          let a = e[n];
          if (a == null) {
            return undefined;
          } else {
            return a[i];
          }
        }
        return e[t];
      }, e);
    }
  }
  var eventEmitterUtils = require("event-emitter-utils") /*id: 992951*/;
  class nd {
    constructor(e) {
      this._ready = new rB();
      this.settings = {};
      this.workspaceConfig = false;
      this.onConfigurationSectionUpdateEmitter = new eventEmitterUtils.Emitter();
      this.serviceRegistry = e.ServiceRegistry;
    }
    get ready() {
      return this._ready.promise;
    }
    initialize(e) {
      var r;
      this.workspaceConfig = (r = e.capabilities.workspace?.configuration) !== null && r !== undefined && r;
    }
    async initialized(e) {
      if (this.workspaceConfig) {
        if (e.register) {
          let t = this.serviceRegistry.all;
          e.register({
            section: t.map(e => this.toSectionName(e.LanguageMetaData.languageId))
          });
        }
        if (e.fetchConfiguration) {
          let t = this.serviceRegistry.all.map(e => ({
            section: this.toSectionName(e.LanguageMetaData.languageId)
          }));
          let r = await e.fetchConfiguration(t);
          t.forEach((e, t) => {
            this.updateSectionConfiguration(e.section, r[t]);
          });
        }
      }
      this._ready.resolve();
    }
    updateConfiguration(e) {
      if (e.settings) {
        Object.keys(e.settings).forEach(t => {
          let r = e.settings[t];
          this.updateSectionConfiguration(t, r);
          this.onConfigurationSectionUpdateEmitter.fire({
            section: t,
            configuration: r
          });
        });
      }
    }
    updateSectionConfiguration(e, t) {
      this.settings[e] = t;
    }
    async getConfiguration(e, t) {
      await this.ready;
      let r = this.toSectionName(e);
      if (this.settings[r]) {
        return this.settings[r][t];
      }
    }
    toSectionName(e) {
      return `${e}`;
    }
    get onConfigurationSectionUpdate() {
      return this.onConfigurationSectionUpdateEmitter.event;
    }
  }
  (tN ||= {}).create = function (e) {
    return {
      dispose: async () => await e()
    };
  };
  class nh {
    constructor(e) {
      this.updateBuildOptions = {
        validation: {
          categories: ["built-in", "fast"]
        }
      };
      this.updateListeners = [];
      this.buildPhaseListeners = new r1();
      this.documentPhaseListeners = new r1();
      this.buildState = new Map();
      this.documentBuildWaiters = new Map();
      this.currentState = tx.Changed;
      this.langiumDocuments = e.workspace.LangiumDocuments;
      this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory;
      this.textDocuments = e.workspace.TextDocuments;
      this.indexManager = e.workspace.IndexManager;
      this.serviceRegistry = e.ServiceRegistry;
    }
    async build(e, t = {}, r = cancellationTokenUtils.CancellationToken.None) {
      for (let r of e) {
        let e = r.uri.toString();
        if (r.state === tx.Validated) {
          if (typeof t.validation == "boolean" && t.validation) {
            r.state = tx.IndexedReferences;
            r.diagnostics = undefined;
            this.buildState.delete(e);
          } else if (typeof t.validation == "object") {
            let a = this.buildState.get(e);
            let s = (a == null ? undefined : a.result)?.validationChecks;
            if (s) {
              let n = (t.validation.categories ?? tS.all).filter(e => !s.includes(e));
              if (n.length > 0) {
                this.buildState.set(e, {
                  completed: false,
                  options: {
                    validation: Object.assign(Object.assign({}, t.validation), {
                      categories: n
                    })
                  },
                  result: a.result
                });
                r.state = tx.IndexedReferences;
              }
            }
          }
        } else {
          this.buildState.delete(e);
        }
      }
      this.currentState = tx.Changed;
      await this.emitUpdate(e.map(e => e.uri), []);
      await this.buildDocuments(e, t, r);
    }
    async update(e, t, r = cancellationTokenUtils.CancellationToken.None) {
      this.currentState = tx.Changed;
      for (let e of t) {
        this.langiumDocuments.deleteDocument(e);
        this.buildState.delete(e.toString());
        this.indexManager.remove(e);
      }
      for (let t of e) {
        if (!this.langiumDocuments.invalidateDocument(t)) {
          let e = this.langiumDocumentFactory.fromModel({
            $type: "INVALID"
          }, t);
          e.state = tx.Changed;
          this.langiumDocuments.addDocument(e);
        }
        this.buildState.delete(t.toString());
      }
      let n = lazyCollectionIterator.createSequence(e).concat(t).map(e => e.toString()).toSet();
      this.langiumDocuments.all.filter(e => !n.has(e.uri.toString()) && this.shouldRelink(e, n)).forEach(e => {
        this.serviceRegistry.getServices(e.uri).references.Linker.unlink(e);
        e.state = Math.min(e.state, tx.ComputedScopes);
        e.diagnostics = undefined;
      });
      await this.emitUpdate(e, t);
      await rG(r);
      let i = this.sortDocuments(this.langiumDocuments.all.filter(e => {
        return e.state < tx.Linked || !this.buildState.get(e.uri.toString())?.completed;
      }).toArray());
      await this.buildDocuments(i, this.updateBuildOptions, r);
    }
    async emitUpdate(e, t) {
      await Promise.all(this.updateListeners.map(r => r(e, t)));
    }
    sortDocuments(e) {
      let t = 0;
      let r = e.length - 1;
      while (t < r) {
        while (t < e.length && this.hasTextDocument(e[t])) {
          t++;
        }
        while (r >= 0 && !this.hasTextDocument(e[r])) {
          r--;
        }
        if (t < r) {
          [e[t], e[r]] = [e[r], e[t]];
        }
      }
      return e;
    }
    hasTextDocument(e) {
      var t;
      return !!((t = this.textDocuments) === null || t === undefined ? undefined : t.get(e.uri));
    }
    shouldRelink(e, t) {
      return !!e.references.some(e => e.error !== undefined) || this.indexManager.isAffected(e, t);
    }
    onUpdate(e) {
      this.updateListeners.push(e);
      return tN.create(() => {
        let t = this.updateListeners.indexOf(e);
        if (t >= 0) {
          this.updateListeners.splice(t, 1);
        }
      });
    }
    async buildDocuments(e, t, r) {
      this.prepareBuild(e, t);
      await this.runCancelable(e, tx.Parsed, r, e => this.langiumDocumentFactory.update(e, r));
      await this.runCancelable(e, tx.IndexedContent, r, e => this.indexManager.updateContent(e, r));
      await this.runCancelable(e, tx.ComputedScopes, r, async e => {
        let t = this.serviceRegistry.getServices(e.uri).references.ScopeComputation;
        e.precomputedScopes = await t.computeLocalScopes(e, r);
      });
      await this.runCancelable(e, tx.Linked, r, e => this.serviceRegistry.getServices(e.uri).references.Linker.link(e, r));
      await this.runCancelable(e, tx.IndexedReferences, r, e => this.indexManager.updateReferences(e, r));
      let n = e.filter(e => this.shouldValidate(e));
      await this.runCancelable(n, tx.Validated, r, e => this.validate(e, r));
      for (let t of e) {
        let e = this.buildState.get(t.uri.toString());
        if (e) {
          e.completed = true;
        }
      }
    }
    prepareBuild(e, t) {
      for (let r of e) {
        let e = r.uri.toString();
        let n = this.buildState.get(e);
        if (!n || n.completed) {
          this.buildState.set(e, {
            completed: false,
            options: t,
            result: n == null ? undefined : n.result
          });
        }
      }
    }
    async runCancelable(e, t, r, n) {
      for (let i of e.filter(e => e.state < t)) {
        await rG(r);
        await n(i);
        i.state = t;
        await this.notifyDocumentPhase(i, t, r);
      }
      let i = e.filter(e => e.state === t);
      await this.notifyBuildPhase(i, t, r);
      this.currentState = t;
    }
    onBuildPhase(e, t) {
      this.buildPhaseListeners.add(e, t);
      return tN.create(() => {
        this.buildPhaseListeners.delete(e, t);
      });
    }
    onDocumentPhase(e, t) {
      this.documentPhaseListeners.add(e, t);
      return tN.create(() => {
        this.documentPhaseListeners.delete(e, t);
      });
    }
    waitUntil(e, t, r) {
      let n;
      if (t && "path" in t) {
        n = t;
      } else {
        r = t;
      }
      if (r == null) {
        r = cancellationTokenUtils.CancellationToken.None;
      }
      if (n) {
        let t = this.langiumDocuments.getDocument(n);
        if (t && t.state > e) {
          return Promise.resolve(n);
        }
      }
      if (this.currentState >= e) {
        return Promise.resolve(undefined);
      } else if (r.isCancellationRequested) {
        return Promise.reject(rU);
      } else {
        return new Promise((t, i) => {
          let a = this.onBuildPhase(e, () => {
            a.dispose();
            s.dispose();
            if (n) {
              let e = this.langiumDocuments.getDocument(n);
              t(e == null ? undefined : e.uri);
            } else {
              t(undefined);
            }
          });
          let s = r.onCancellationRequested(() => {
            a.dispose();
            s.dispose();
            i(rU);
          });
        });
      }
    }
    async notifyDocumentPhase(e, t, r) {
      for (let n of this.documentPhaseListeners.get(t).slice()) {
        try {
          await n(e, r);
        } catch (e) {
          if (e !== rU) {
            throw e;
          }
        }
      }
    }
    async notifyBuildPhase(e, t, r) {
      if (e.length !== 0) {
        for (let n of this.buildPhaseListeners.get(t).slice()) {
          await rG(r);
          await n(e, r);
        }
      }
    }
    shouldValidate(e) {
      return !!this.getBuildOptions(e).validation;
    }
    async validate(e, t) {
      var r;
      let i = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator;
      let a = this.getBuildOptions(e).validation;
      let s = typeof a == "object" ? a : undefined;
      let o = await i.validateDocument(e, s, t);
      if (e.diagnostics) {
        e.diagnostics.push(...o);
      } else {
        e.diagnostics = o;
      }
      let l = this.buildState.get(e.uri.toString());
      if (l) {
        if ((r = l.result) === null || r === undefined) {
          l.result = {};
        }
        let e = (s == null ? undefined : s.categories) ?? tS.all;
        if (l.result.validationChecks) {
          l.result.validationChecks.push(...e);
        } else {
          l.result.validationChecks = [...e];
        }
      }
    }
    getBuildOptions(e) {
      return this.buildState.get(e.uri.toString())?.options ?? {};
    }
  }
  class nf {
    constructor(e) {
      this.symbolIndex = new Map();
      this.symbolByTypeIndex = new r6();
      this.referenceIndex = new Map();
      this.documents = e.workspace.LangiumDocuments;
      this.serviceRegistry = e.ServiceRegistry;
      this.astReflection = e.AstReflection;
    }
    findAllReferences(e, t) {
      let r = astNodeUtils.getNodeDocument(e).uri;
      let n = [];
      this.referenceIndex.forEach(e => {
        e.forEach(e => {
          if (tI.equals(e.targetUri, r) && e.targetPath === t) {
            n.push(e);
          }
        });
      });
      return lazyCollectionIterator.createSequence(n);
    }
    allElements(e, t) {
      let r = lazyCollectionIterator.createSequence(this.symbolIndex.keys());
      if (t) {
        r = r.filter(e => !t || t.has(e));
      }
      return r.map(t => this.getFileDescriptions(t, e)).flat();
    }
    getFileDescriptions(e, t) {
      if (t) {
        return this.symbolByTypeIndex.get(e, t, () => {
          return (this.symbolIndex.get(e) ?? []).filter(e => this.astReflection.isSubtype(e.type, t));
        });
      } else {
        return this.symbolIndex.get(e) ?? [];
      }
    }
    remove(e) {
      let t = e.toString();
      this.symbolIndex.delete(t);
      this.symbolByTypeIndex.clear(t);
      this.referenceIndex.delete(t);
    }
    async updateContent(e, t = cancellationTokenUtils.CancellationToken.None) {
      let r = this.serviceRegistry.getServices(e.uri);
      let n = await r.references.ScopeComputation.computeExports(e, t);
      let i = e.uri.toString();
      this.symbolIndex.set(i, n);
      this.symbolByTypeIndex.clear(i);
    }
    async updateReferences(e, t = cancellationTokenUtils.CancellationToken.None) {
      let r = this.serviceRegistry.getServices(e.uri);
      let n = await r.workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
      this.referenceIndex.set(e.uri.toString(), n);
    }
    isAffected(e, t) {
      let r = this.referenceIndex.get(e.uri.toString());
      return !!r && r.some(e => !e.local && t.has(e.targetUri.toString()));
    }
  }
  class np {
    constructor(e) {
      this.initialBuildOptions = {};
      this._ready = new rB();
      this.serviceRegistry = e.ServiceRegistry;
      this.langiumDocuments = e.workspace.LangiumDocuments;
      this.documentBuilder = e.workspace.DocumentBuilder;
      this.fileSystemProvider = e.workspace.FileSystemProvider;
      this.mutex = e.workspace.WorkspaceLock;
    }
    get ready() {
      return this._ready.promise;
    }
    get workspaceFolders() {
      return this.folders;
    }
    initialize(e) {
      this.folders = e.workspaceFolders ?? undefined;
    }
    initialized(e) {
      return this.mutex.write(e => {
        return this.initializeWorkspace(this.folders ?? [], e);
      });
    }
    async initializeWorkspace(e, t = cancellationTokenUtils.CancellationToken.None) {
      let r = await this.performStartup(e);
      await rG(t);
      await this.documentBuilder.build(r, this.initialBuildOptions, t);
    }
    async performStartup(e) {
      let t = this.serviceRegistry.all.flatMap(e => e.LanguageMetaData.fileExtensions);
      let r = [];
      let n = e => {
        r.push(e);
        if (!this.langiumDocuments.hasDocument(e.uri)) {
          this.langiumDocuments.addDocument(e);
        }
      };
      await this.loadAdditionalDocuments(e, n);
      await Promise.all(e.map(e => [e, this.getRootFolder(e)]).map(async e => this.traverseFolder(...e, t, n)));
      this._ready.resolve();
      return r;
    }
    loadAdditionalDocuments(e, t) {
      return Promise.resolve();
    }
    getRootFolder(e) {
      return uriPathUtilities.Uri.parse(e.uri);
    }
    async traverseFolder(e, t, r, n) {
      let i = await this.fileSystemProvider.readDirectory(t);
      await Promise.all(i.map(async t => {
        if (this.includeEntry(e, t, r)) {
          if (t.isDirectory) {
            await this.traverseFolder(e, t.uri, r, n);
          } else if (t.isFile) {
            n(await this.langiumDocuments.getOrCreateDocument(t.uri));
          }
        }
      }));
    }
    includeEntry(e, t, r) {
      let n = tI.basename(t.uri);
      if (n.startsWith(".")) {
        return false;
      }
      if (t.isDirectory) {
        return n !== "node_modules" && n !== "out";
      }
      if (t.isFile) {
        let e = tI.extname(t.uri);
        return r.includes(e);
      }
      return false;
    }
  }
  class nm {
    buildUnexpectedCharactersMessage(e, t, r, n, i) {
      return chevrotainParserLexerUtilities.errorMessageProvider.buildUnexpectedCharactersMessage(e, t, r, n, i);
    }
    buildUnableToPopLexerModeMessage(e) {
      return chevrotainParserLexerUtilities.errorMessageProvider.buildUnableToPopLexerModeMessage(e);
    }
  }
  let ng = {
    mode: "full"
  };
  class ny {
    constructor(e) {
      this.errorMessageProvider = e.parser.LexerErrorMessageProvider;
      this.tokenBuilder = e.parser.TokenBuilder;
      let t = this.tokenBuilder.buildTokens(e.Grammar, {
        caseInsensitive: e.LanguageMetaData.caseInsensitive
      });
      this.tokenTypes = this.toTokenTypeDictionary(t);
      let r = nv(t) ? Object.values(t) : t;
      let n = e.LanguageMetaData.mode === "production";
      this.chevrotainLexer = new chevrotainParserLexerUtilities.Lexer(r, {
        positionTracking: "full",
        skipValidations: n,
        errorMessageProvider: this.errorMessageProvider
      });
    }
    get definition() {
      return this.tokenTypes;
    }
    tokenize(e, t = ng) {
      var n;
      var i;
      let a = this.chevrotainLexer.tokenize(e);
      return {
        tokens: a.tokens,
        errors: a.errors,
        hidden: a.groups.hidden ?? [],
        report: (i = (n = this.tokenBuilder).flushLexingReport) === null || i === undefined ? undefined : i.call(n, e)
      };
    }
    toTokenTypeDictionary(e) {
      if (nv(e)) {
        return e;
      }
      let t = nT(e) ? Object.values(e.modes).flat() : e;
      let r = {};
      t.forEach(e => r[e.name] = e);
      return r;
    }
  }
  function nT(e) {
    return e && "modes" in e && "defaultMode" in e;
  }
  function nv(e) {
    return (!Array.isArray(e) || e.length !== 0 && !("name" in e[0])) && !nT(e);
  }
  function nR(e) {
    let t = "";
    return (typeof e == "string" ? e : e.text).split(regexpUtilityHelpers.lineBreakRegex);
  }
  let n$ = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy;
  let nE = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
  let nA = /\S/;
  let nk = /\s*$/;
  function nx(e, t) {
    let r = e.substring(t).match(nA);
    if (r) {
      return t + r.index;
    } else {
      return e.length;
    }
  }
  function nI(e) {
    let t = e.tokens[e.index];
    let r = t;
    let n = t;
    let i = [];
    while (t && t.type !== "break" && t.type !== "tag") {
      var a;
      i.push((a = e).tokens[a.index].type === "inline-tag" ? nS(a, true) : nC(a));
      n = t;
      t = e.tokens[e.index];
    }
    return new n_(i, ef.create(r.range.start, n.range.end));
  }
  function nS(e, t) {
    let r = e.tokens[e.index++];
    let n = r.content.substring(1);
    let i = e.tokens[e.index];
    if ((i == null ? undefined : i.type) === "text") {
      if (t) {
        let i = nC(e);
        return new nb(n, new n_([i], i.range), t, ef.create(r.range.start, i.range.end));
      }
      {
        let i = nI(e);
        return new nb(n, i, t, ef.create(r.range.start, i.range.end));
      }
    }
    {
      let e = r.range;
      return new nb(n, new n_([], e), t, e);
    }
  }
  function nC(e) {
    let t = e.tokens[e.index++];
    return new nO(t.content, t.range);
  }
  function nN(e) {
    if (!e) {
      return nN({
        start: "/**",
        end: "*/",
        line: "*"
      });
    }
    let {
      start: t,
      end: r,
      line: n
    } = e;
    return {
      start: nw(t, true),
      end: nw(r, false),
      line: nw(n, true)
    };
  }
  function nw(e, t) {
    if (typeof e != "string" && typeof e != "object") {
      return e;
    }
    {
      let r = typeof e == "string" ? regexpUtilityHelpers.escapeRegexChars(e) : e.source;
      if (t) {
        return RegExp(`^\\s*${r}`);
      } else {
        return RegExp(`\\s*${r}\\s*$`);
      }
    }
  }
  class nL {
    constructor(e, t) {
      this.elements = e;
      this.range = t;
    }
    getTag(e) {
      return this.getAllTags().find(t => t.name === e);
    }
    getTags(e) {
      return this.getAllTags().filter(t => t.name === e);
    }
    getAllTags() {
      return this.elements.filter(e => "name" in e);
    }
    toString() {
      let e = "";
      for (let t of this.elements) {
        if (e.length === 0) {
          e = t.toString();
        } else {
          let r = t.toString();
          e += nP(e) + r;
        }
      }
      return e.trim();
    }
    toMarkdown(e) {
      let t = "";
      for (let r of this.elements) {
        if (t.length === 0) {
          t = r.toMarkdown(e);
        } else {
          let n = r.toMarkdown(e);
          t += nP(t) + n;
        }
      }
      return t.trim();
    }
  }
  class nb {
    constructor(e, t, r, n) {
      this.name = e;
      this.content = t;
      this.inline = r;
      this.range = n;
    }
    toString() {
      let e = `@${this.name}`;
      let t = this.content.toString();
      if (this.content.inlines.length === 1) {
        e = `${e} ${t}`;
      } else if (this.content.inlines.length > 1) {
        e = `${e}
${t}`;
      }
      if (this.inline) {
        return `{${e}}`;
      } else {
        return e;
      }
    }
    toMarkdown(e) {
      var t;
      return ((t = e == null ? undefined : e.renderTag) === null || t === undefined ? undefined : t.call(e, this)) ?? this.toMarkdownDefault(e);
    }
    toMarkdownDefault(e) {
      let t = this.content.toMarkdown(e);
      if (this.inline) {
        let r = function (e, t, r) {
          var n;
          if (e === "linkplain" || e === "linkcode" || e === "link") {
            let a = t.indexOf(" ");
            let s = t;
            if (a > 0) {
              let e = nx(t, a);
              s = t.substring(e);
              t = t.substring(0, a);
            }
            if (e === "linkcode" || e === "link" && r.link === "code") {
              s = `\`${s}\``;
            }
            return ((n = r.renderLink) === null || n === undefined ? undefined : n.call(r, t, s)) ?? function (e, t) {
              try {
                uriPathUtilities.Uri.parse(e, true);
                return `[${t}](${e})`;
              } catch (t) {
                return e;
              }
            }(t, s);
          }
        }(this.name, t, e ?? {});
        if (typeof r == "string") {
          return r;
        }
      }
      let r = "";
      if ((e == null ? undefined : e.tag) === "italic" || (e == null ? undefined : e.tag) === undefined) {
        r = "*";
      } else if ((e == null ? undefined : e.tag) === "bold") {
        r = "**";
      } else if ((e == null ? undefined : e.tag) === "bold-italic") {
        r = "***";
      }
      let n = `${r}@${this.name}${r}`;
      if (this.content.inlines.length === 1) {
        n = `${n} \u{2014} ${t}`;
      } else if (this.content.inlines.length > 1) {
        n = `${n}
${t}`;
      }
      if (this.inline) {
        return `{${n}}`;
      } else {
        return n;
      }
    }
  }
  class n_ {
    constructor(e, t) {
      this.inlines = e;
      this.range = t;
    }
    toString() {
      let e = "";
      for (let t = 0; t < this.inlines.length; t++) {
        let r = this.inlines[t];
        let n = this.inlines[t + 1];
        e += r.toString();
        if (n && n.range.start.line > r.range.start.line) {
          e += "\n";
        }
      }
      return e;
    }
    toMarkdown(e) {
      let t = "";
      for (let r = 0; r < this.inlines.length; r++) {
        let n = this.inlines[r];
        let i = this.inlines[r + 1];
        t += n.toMarkdown(e);
        if (i && i.range.start.line > n.range.start.line) {
          t += "\n";
        }
      }
      return t;
    }
  }
  class nO {
    constructor(e, t) {
      this.text = e;
      this.range = t;
    }
    toString() {
      return this.text;
    }
    toMarkdown() {
      return this.text;
    }
  }
  function nP(e) {
    if (e.endsWith("\n")) {
      return "\n";
    } else {
      return "\n\n";
    }
  }
  class nM {
    constructor(e) {
      this.indexManager = e.shared.workspace.IndexManager;
      this.commentProvider = e.documentation.CommentProvider;
    }
    getDocumentation(e) {
      let t = this.commentProvider.getComment(e);
      if (t && function (e, t) {
        let r = nN(undefined);
        let n = nR(e);
        if (n.length === 0) {
          return false;
        }
        let i = n[0];
        let a = n[n.length - 1];
        let s = r.start;
        let o = r.end;
        return !!(s == null ? undefined : s.exec(i)) && !!(o == null ? undefined : o.exec(a));
      }(t)) {
        var r;
        var n;
        var i;
        let a;
        let s;
        return (typeof (r = t) == "string" ? (s = undefined, a = undefined) : (s = r.range.start, a = undefined), s ||= eh.create(0, 0), function (e) {
          var t;
          var n;
          let a = eh.create(e.position.line, e.position.character);
          if (e.tokens.length === 0) {
            return new nL([], ef.create(a, a));
          }
          let s = [];
          while (e.index < e.tokens.length) {
            let t = function (e, t) {
              let r = e.tokens[e.index];
              if (r.type === "tag") {
                return nS(e, false);
              } else if (r.type === "text" || r.type === "inline-tag") {
                return nI(e);
              } else {
                (function (e, t) {
                  if (t) {
                    let r = new nO("", e.range);
                    if ("inlines" in t) {
                      t.inlines.push(r);
                    } else {
                      t.content.inlines.push(r);
                    }
                  }
                })(r, t);
                e.index++;
                return;
              }
            }(e, s[s.length - 1]);
            if (t) {
              s.push(t);
            }
          }
          let o = ((t = s[0]) === null || t === undefined ? undefined : t.range.start) ?? a;
          let l = ((n = s[s.length - 1]) === null || n === undefined ? undefined : n.range.end) ?? a;
          return new nL(s, ef.create(o, l));
        }({
          index: 0,
          tokens: function (e) {
            var t;
            var r;
            var n;
            let i = [];
            let a = e.position.line;
            let s = e.position.character;
            for (let o = 0; o < e.lines.length; o++) {
              let l = o === 0;
              let u = o === e.lines.length - 1;
              let c = e.lines[o];
              let d = 0;
              if (l && e.options.start) {
                let r = (t = e.options.start) === null || t === undefined ? undefined : t.exec(c);
                if (r) {
                  d = r.index + r[0].length;
                }
              } else {
                let t = (r = e.options.line) === null || r === undefined ? undefined : r.exec(c);
                if (t) {
                  d = t.index + t[0].length;
                }
              }
              if (u) {
                let t = (n = e.options.end) === null || n === undefined ? undefined : n.exec(c);
                if (t) {
                  c = c.substring(0, t.index);
                }
              }
              if (nx(c = c.substring(0, function (e) {
                let t = e.match(nk);
                if (t && typeof t.index == "number") {
                  return t.index;
                }
              }(c)), d) >= c.length) {
                if (i.length > 0) {
                  let e = eh.create(a, s);
                  i.push({
                    type: "break",
                    content: "",
                    range: ef.create(e, e)
                  });
                }
              } else {
                n$.lastIndex = d;
                let e = n$.exec(c);
                if (e) {
                  let t = e[0];
                  let r = e[1];
                  let n = eh.create(a, s + d);
                  let o = eh.create(a, s + d + t.length);
                  i.push({
                    type: "tag",
                    content: r,
                    range: ef.create(n, o)
                  });
                  d += t.length;
                  d = nx(c, d);
                }
                if (d < c.length) {
                  let e = c.substring(d);
                  let t = Array.from(e.matchAll(nE));
                  i.push(...function (e, t, r, n) {
                    let i = [];
                    if (e.length === 0) {
                      let e = eh.create(r, n);
                      let a = eh.create(r, n + t.length);
                      i.push({
                        type: "text",
                        content: t,
                        range: ef.create(e, a)
                      });
                    } else {
                      let a = 0;
                      for (let s of e) {
                        let e = s.index;
                        let o = t.substring(a, e);
                        if (o.length > 0) {
                          i.push({
                            type: "text",
                            content: t.substring(a, e),
                            range: ef.create(eh.create(r, a + n), eh.create(r, e + n))
                          });
                        }
                        let l = o.length + 1;
                        let u = s[1];
                        i.push({
                          type: "inline-tag",
                          content: u,
                          range: ef.create(eh.create(r, a + l + n), eh.create(r, a + l + u.length + n))
                        });
                        l += u.length;
                        if (s.length === 4) {
                          l += s[2].length;
                          let e = s[3];
                          i.push({
                            type: "text",
                            content: e,
                            range: ef.create(eh.create(r, a + l + n), eh.create(r, a + l + e.length + n))
                          });
                        } else {
                          i.push({
                            type: "text",
                            content: "",
                            range: ef.create(eh.create(r, a + l + n), eh.create(r, a + l + n))
                          });
                        }
                        a = e + s[0].length;
                      }
                      let s = t.substring(a);
                      if (s.length > 0) {
                        i.push({
                          type: "text",
                          content: s,
                          range: ef.create(eh.create(r, a + n), eh.create(r, a + n + s.length))
                        });
                      }
                    }
                    return i;
                  }(t, e, a, s + d));
                }
              }
              a++;
              s = 0;
            }
            if (i.length > 0 && i[i.length - 1].type === "break") {
              return i.slice(0, -1);
            } else {
              return i;
            }
          }({
            lines: nR(r),
            position: s,
            options: nN(a)
          }),
          position: s
        })).toMarkdown({
          renderLink: (t, r) => this.documentationLinkRenderer(e, t, r),
          renderTag: t => this.documentationTagRenderer(e, t)
        });
      }
    }
    documentationLinkRenderer(e, t, r) {
      let i = this.findNameInPrecomputedScopes(e, t) ?? this.findNameInGlobalScope(e, t);
      if (i && i.nameSegment) {
        let e = i.nameSegment.range.start.line + 1;
        let t = i.nameSegment.range.start.character + 1;
        let n = i.documentUri.with({
          fragment: `L${e},${t}`
        });
        return `[${r}](${n.toString()})`;
      }
    }
    documentationTagRenderer(e, t) {}
    findNameInPrecomputedScopes(e, t) {
      let r = astNodeUtils.getNodeDocument(e).precomputedScopes;
      if (!r) {
        return;
      }
      let n = e;
      do {
        let e = r.get(n).find(e => e.name === t);
        if (e) {
          return e;
        }
        n = n.$container;
      } while (n);
    }
    findNameInGlobalScope(e, t) {
      return this.indexManager.allElements().find(e => e.name === t);
    }
  }
  class nD {
    constructor(e) {
      this.grammarConfig = () => e.parser.GrammarConfig;
    }
    getComment(e) {
      if (typeof e.$comment == "string") {
        return e.$comment;
      } else {
        return positionRangeUtils_1.findPreviousToken(e.$cstNode, this.grammarConfig().multilineCommentRules)?.text;
      }
    }
  }
  class nZ {
    constructor(e) {
      this.syncParser = e.parser.LangiumParser;
    }
    parse(e, t) {
      return Promise.resolve(this.syncParser.parse(e));
    }
  }
  class nF {
    constructor() {
      this.previousTokenSource = new cancellationTokenUtils.CancellationTokenSource();
      this.writeQueue = [];
      this.readQueue = [];
      this.done = true;
    }
    write(e) {
      this.cancelWrite();
      rF = performance.now();
      let t = new cancellationTokenUtils.CancellationTokenSource();
      this.previousTokenSource = t;
      return this.enqueue(this.writeQueue, e, t.token);
    }
    read(e) {
      return this.enqueue(this.readQueue, e);
    }
    enqueue(e, t, r = cancellationTokenUtils.CancellationToken.None) {
      let n = new rB();
      e.push({
        action: t,
        deferred: n,
        cancellationToken: r
      });
      this.performNextOperation();
      return n.promise;
    }
    async performNextOperation() {
      if (!this.done) {
        return;
      }
      let e = [];
      if (this.writeQueue.length > 0) {
        e.push(this.writeQueue.shift());
      } else {
        if (!(this.readQueue.length > 0)) {
          return;
        }
        e.push(...this.readQueue.splice(0, this.readQueue.length));
      }
      this.done = false;
      await Promise.all(e.map(async ({
        action: e,
        deferred: t,
        cancellationToken: r
      }) => {
        try {
          let n = await Promise.resolve().then(() => e(r));
          t.resolve(n);
        } catch (e) {
          if (e === rU) {
            t.resolve(undefined);
          } else {
            t.reject(e);
          }
        }
      }));
      this.done = true;
      this.performNextOperation();
    }
    cancelWrite() {
      this.previousTokenSource.cancel();
    }
  }
  class nU {
    constructor(e) {
      this.grammarElementIdMap = new r2();
      this.tokenTypeIdMap = new r2();
      this.grammar = e.Grammar;
      this.lexer = e.parser.Lexer;
      this.linker = e.references.Linker;
    }
    dehydrate(e) {
      return {
        lexerErrors: e.lexerErrors,
        lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : undefined,
        parserErrors: e.parserErrors.map(e => Object.assign(Object.assign({}, e), {
          message: e.message
        })),
        value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
      };
    }
    dehydrateLexerReport(e) {
      return e;
    }
    createDehyrationContext(e) {
      let t = new Map();
      let r = new Map();
      for (let r of astNodeUtils.recursiveTraverse(e)) {
        t.set(r, {});
      }
      if (e.$cstNode) {
        for (let t of positionRangeUtils_1.createRecursiveSequence(e.$cstNode)) {
          r.set(t, {});
        }
      }
      return {
        astNodes: t,
        cstNodes: r
      };
    }
    dehydrateAstNode(e, t) {
      let r = t.astNodes.get(e);
      r.$type = e.$type;
      r.$containerIndex = e.$containerIndex;
      r.$containerProperty = e.$containerProperty;
      if (e.$cstNode !== undefined) {
        r.$cstNode = this.dehydrateCstNode(e.$cstNode, t);
      }
      for (let [n, i] of Object.entries(e)) {
        if (!n.startsWith("$")) {
          if (Array.isArray(i)) {
            let e = [];
            r[n] = e;
            for (let a of i) {
              if (typeGuardValidators.isTypeObject(a)) {
                e.push(this.dehydrateAstNode(a, t));
              } else if (typeGuardValidators.isRefText(a)) {
                e.push(this.dehydrateReference(a, t));
              } else {
                e.push(a);
              }
            }
          } else if (typeGuardValidators.isTypeObject(i)) {
            r[n] = this.dehydrateAstNode(i, t);
          } else if (typeGuardValidators.isRefText(i)) {
            r[n] = this.dehydrateReference(i, t);
          } else if (i !== undefined) {
            r[n] = i;
          }
        }
      }
      return r;
    }
    dehydrateReference(e, t) {
      let r = {
        $refText: e.$refText
      };
      if (e.$refNode) {
        r.$refNode = t.cstNodes.get(e.$refNode);
      }
      return r;
    }
    dehydrateCstNode(e, t) {
      let r = t.cstNodes.get(e);
      if (typeGuardValidators.isFullText(e)) {
        r.fullText = e.fullText;
      } else {
        r.grammarSource = this.getGrammarElementId(e.grammarSource);
      }
      r.hidden = e.hidden;
      r.astNode = t.astNodes.get(e.astNode);
      if (typeGuardValidators.hasContent(e)) {
        r.content = e.content.map(e => this.dehydrateCstNode(e, t));
      } else if (typeGuardValidators.isTokenType(e)) {
        r.tokenType = e.tokenType.name;
        r.offset = e.offset;
        r.length = e.length;
        r.startLine = e.range.start.line;
        r.startColumn = e.range.start.character;
        r.endLine = e.range.end.line;
        r.endColumn = e.range.end.character;
      }
      return r;
    }
    hydrate(e) {
      let t = e.value;
      let r = this.createHydrationContext(t);
      if ("$cstNode" in t) {
        this.hydrateCstNode(t.$cstNode, r);
      }
      return {
        lexerErrors: e.lexerErrors,
        lexerReport: e.lexerReport,
        parserErrors: e.parserErrors,
        value: this.hydrateAstNode(t, r)
      };
    }
    createHydrationContext(e) {
      let t;
      let r = new Map();
      let n = new Map();
      for (let t of astNodeUtils.recursiveTraverse(e)) {
        r.set(t, {});
      }
      if (e.$cstNode) {
        for (let r of positionRangeUtils_1.createRecursiveSequence(e.$cstNode)) {
          let e;
          if ("fullText" in r) {
            t = e = new rg(r.fullText);
          } else if ("content" in r) {
            e = new rp();
          } else if ("tokenType" in r) {
            e = this.hydrateCstLeafNode(r);
          }
          if (e) {
            n.set(r, e);
            e.root = t;
          }
        }
      }
      return {
        astNodes: r,
        cstNodes: n
      };
    }
    hydrateAstNode(e, t) {
      let r = t.astNodes.get(e);
      r.$type = e.$type;
      r.$containerIndex = e.$containerIndex;
      r.$containerProperty = e.$containerProperty;
      if (e.$cstNode) {
        r.$cstNode = t.cstNodes.get(e.$cstNode);
      }
      for (let [n, i] of Object.entries(e)) {
        if (!n.startsWith("$")) {
          if (Array.isArray(i)) {
            let e = [];
            r[n] = e;
            for (let a of i) {
              if (typeGuardValidators.isTypeObject(a)) {
                e.push(this.setParent(this.hydrateAstNode(a, t), r));
              } else if (typeGuardValidators.isRefText(a)) {
                e.push(this.hydrateReference(a, r, n, t));
              } else {
                e.push(a);
              }
            }
          } else if (typeGuardValidators.isTypeObject(i)) {
            r[n] = this.setParent(this.hydrateAstNode(i, t), r);
          } else if (typeGuardValidators.isRefText(i)) {
            r[n] = this.hydrateReference(i, r, n, t);
          } else if (i !== undefined) {
            r[n] = i;
          }
        }
      }
      return r;
    }
    setParent(e, t) {
      e.$container = t;
      return e;
    }
    hydrateReference(e, t, r, n) {
      return this.linker.buildReference(t, r, n.cstNodes.get(e.$refNode), e.$refText);
    }
    hydrateCstNode(e, t, r = 0) {
      let n = t.cstNodes.get(e);
      if (typeof e.grammarSource == "number") {
        n.grammarSource = this.getGrammarElement(e.grammarSource);
      }
      n.astNode = t.astNodes.get(e.astNode);
      if (typeGuardValidators.hasContent(n)) {
        for (let i of e.content) {
          let e = this.hydrateCstNode(i, t, r++);
          n.content.push(e);
        }
      }
      return n;
    }
    hydrateCstLeafNode(e) {
      let t = this.getTokenType(e.tokenType);
      let r = e.offset;
      let n = e.length;
      let i = e.startLine;
      let a = e.startColumn;
      let s = e.endLine;
      return new rf(r, n, {
        start: {
          line: i,
          character: a
        },
        end: {
          line: s,
          character: e.endColumn
        }
      }, t, e.hidden);
    }
    getTokenType(e) {
      return this.lexer.definition[e];
    }
    getGrammarElementId(e) {
      if (e) {
        if (this.grammarElementIdMap.size === 0) {
          this.createGrammarElementIdMap();
        }
        return this.grammarElementIdMap.get(e);
      }
    }
    getGrammarElement(e) {
      if (this.grammarElementIdMap.size === 0) {
        this.createGrammarElementIdMap();
      }
      return this.grammarElementIdMap.getKey(e);
    }
    createGrammarElementIdMap() {
      let e = 0;
      for (let t of astNodeUtils.recursiveTraverse(this.grammar)) {
        if (grammarTypeValidators.isAbstractElement(t)) {
          this.grammarElementIdMap.set(t, e++);
        }
      }
    }
  }
  function nG(e) {
    return {
      documentation: {
        CommentProvider: e => new nD(e),
        DocumentationProvider: e => new nM(e)
      },
      parser: {
        AsyncParser: e => new nZ(e),
        GrammarConfig: e => function (e) {
          let t = [];
          for (let r of e.Grammar.rules) {
            if (grammarTypeValidators.isTerminalRule(r) && grammarTypeNameResolver.isHiddenNoWhitespace(r) && regexpUtilityHelpers.isMultilineRegex(grammarTypeNameResolver.generateTerminalRegex(r))) {
              t.push(r.name);
            }
          }
          return {
            multilineCommentRules: t,
            nameRegexp: positionRangeUtils_1.wordCharRegex
          };
        }(e),
        LangiumParser: e => function (e) {
          let t = function (e) {
            let t = e.Grammar;
            let r = e.parser.Lexer;
            return rN(t, new r$(e), r.definition);
          }(e);
          t.finalize();
          return t;
        }(e),
        CompletionParser: e => function (e) {
          let t = e.Grammar;
          let r = e.parser.Lexer;
          let n = new rk(e);
          rN(t, n, r.definition);
          n.finalize();
          return n;
        }(e),
        ValueConverter: () => new grammarTypeConverter.GrammarConverter(),
        TokenBuilder: () => new lexerTokenBuilder.LexerTokenBuilder(),
        Lexer: e => new ny(e),
        ParserErrorMessageProvider: () => new rA(),
        LexerErrorMessageProvider: () => new nm()
      },
      workspace: {
        AstNodeLocator: () => new nu(),
        AstNodeDescriptionProvider: e => new no(e),
        ReferenceDescriptionProvider: e => new nl(e)
      },
      references: {
        Linker: e => new rQ(e),
        NameProvider: () => new rJ(),
        ScopeProvider: e => new ne(e),
        ScopeComputation: e => new r7(e),
        References: e => new r0(e)
      },
      serializer: {
        Hydrator: e => new nU(e),
        JsonSerializer: e => new nr(e)
      },
      validation: {
        DocumentValidator: e => new na(e),
        ValidationRegistry: e => new ni(e)
      },
      shared: () => e.shared
    };
  }
  function nB(e) {
    return {
      ServiceRegistry: e => new nn(e),
      workspace: {
        LangiumDocuments: e => new rq(e),
        LangiumDocumentFactory: e => new rY(e),
        DocumentBuilder: e => new nh(e),
        IndexManager: e => new nf(e),
        WorkspaceManager: e => new np(e),
        FileSystemProvider: t => e.fileSystemProvider(t),
        WorkspaceLock: () => new nF(),
        ConfigurationProvider: e => new nd(e)
      }
    };
  }
  require.d(exports, {
    getLanguageServices: function () {
      return nG;
    },
    getSharedServices: function () {
      return nB;
    }
  });
}