// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$G' to 'getGrammarTypeName'
// - Renamed export 'EL' to 'findContentAtPosition'
// - Renamed export 'UP' to 'hasRuleDefinition'
// - Renamed export 'VD' to 'collectGrammarRules'
// - Renamed export 'eN' to 'getTerminalType'
// - Renamed export 'h7' to 'findAssignmentAncestor'
// - Renamed export 'ib' to 'findNameAssignment'
// - Renamed export 'lA' to 'findKeywordInContent'
// - Renamed export 'mJ' to 'getRuleTypeName'
// - Renamed export 'md' to 'isHiddenNoWhitespace'
// - Renamed export 's1' to 'generateTerminalRegex'
// - Renamed export 'vb' to 'getContentByPosition'
// - Renamed export 'z$' to 'resolveGrammarTypeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 120148
         */
module.exports = function (module, exports, require) {
  var errorHandlingUtil = require("error-handling-util") /*id: 334225*/;
  var grammarTypeValidators = require("grammar-type-validators") /*id: 279057*/;
  var typeGuardValidators = require("type-guard-validators") /*id: 69877*/;
  var astNodeUtils = require("ast-node-utils") /*id: 468838*/;
  var positionRangeUtils_1 = require("position-range-utils_1") /*id: 465350*/;
  var regexpUtilityHelpers = require("regexp-utility-helpers") /*id: 880286*/;
  function u(e, t) {
    let r = new Set();
    let n = e.rules.find(e => grammarTypeValidators.isParserRule(e) && e.entry);
    if (!n) {
      return new Set(e.rules);
    }
    for (let a of [n].concat(e.rules.filter(e => grammarTypeValidators.isTerminalRule(e) && e.hidden))) {
      (function e(t, r, n) {
        r.add(t.name);
        astNodeUtils.traverseTree(t).forEach(t => {
          if (grammarTypeValidators.isRuleCall(t) || n && grammarTypeValidators.isTerminalRuleCall(t)) {
            let i = t.rule.ref;
            if (i && !r.has(i.name)) {
              e(i, r, n);
            }
          }
        });
      })(a, r, t);
    }
    let a = new Set();
    for (let t of e.rules) {
      if (r.has(t.name) || grammarTypeValidators.isTerminalRule(t) && t.hidden) {
        a.add(t);
      }
    }
    return a;
  }
  function c(e) {
    if (e.terminal) {
      return e.terminal;
    }
    if (e.type.ref) {
      let t = y(e.type.ref);
      if (t == null) {
        return undefined;
      } else {
        return t.terminal;
      }
    }
  }
  function d(e) {
    return e.hidden && !regexpUtilityHelpers.hasWhitespaceRegex($(e));
  }
  function h(e, t) {
    if (e && t) {
      return p(e, t, e.astNode, true);
    } else {
      return [];
    }
  }
  function f(e, t, r) {
    if (!e || !t) {
      return;
    }
    let n = p(e, t, e.astNode, true);
    if (n.length !== 0) {
      r = r !== undefined ? Math.max(0, Math.min(r, n.length - 1)) : 0;
      return n[r];
    }
  }
  function p(e, t, r, n) {
    if (!n) {
      let r = astNodeUtils.findAncestor(e.grammarSource, grammarTypeValidators.isAssignment);
      if (r && r.feature === t) {
        return [e];
      }
    }
    if (typeGuardValidators.hasContent(e) && e.astNode === r) {
      return e.content.flatMap(e => p(e, t, r, false));
    } else {
      return [];
    }
  }
  function m(e, t, r) {
    if (!e) {
      return;
    }
    let n = function (e, t, r) {
      let n;
      if (e.astNode !== r) {
        return [];
      }
      if (grammarTypeValidators.isKeyword(e.grammarSource) && e.grammarSource.value === t) {
        return [e];
      }
      let a = positionRangeUtils_1.createRecursiveSequence(e).iterator();
      let s = [];
      do {
        if (!(n = a.next()).done) {
          let e = n.value;
          if (e.astNode === r) {
            if (grammarTypeValidators.isKeyword(e.grammarSource) && e.grammarSource.value === t) {
              s.push(e);
            }
          } else {
            a.prune();
          }
        }
      } while (!n.done);
      return s;
    }(e, t, e == null ? undefined : e.astNode);
    if (n.length !== 0) {
      r = r !== undefined ? Math.max(0, Math.min(r, n.length - 1)) : 0;
      return n[r];
    }
  }
  function g(e) {
    let r = e.astNode;
    while (r === e.container?.astNode) {
      let t = astNodeUtils.findAncestor(e.grammarSource, grammarTypeValidators.isAssignment);
      if (t) {
        return t;
      }
      e = e.container;
    }
  }
  function y(e) {
    let t = e;
    if (grammarTypeValidators.isInferredType(t)) {
      if (grammarTypeValidators.isAction(t.$container)) {
        t = t.$container.$container;
      } else if (grammarTypeValidators.isParserRule(t.$container)) {
        t = t.$container;
      } else {
        errorHandlingUtil.throwUnhandled(t.$container);
      }
    }
    return function e(t, r, n) {
      function o(r, a) {
        let o;
        if (!astNodeUtils.findAncestor(r, grammarTypeValidators.isAssignment)) {
          o = e(a, a, n);
        }
        n.set(t, o);
        return o;
      }
      if (n.has(t)) {
        return n.get(t);
      }
      n.set(t, undefined);
      for (let e of astNodeUtils.traverseTree(r)) {
        if (grammarTypeValidators.isAssignment(e) && e.feature.toLowerCase() === "name") {
          n.set(t, e);
          return e;
        }
        if (grammarTypeValidators.isRuleCall(e) && grammarTypeValidators.isParserRule(e.rule.ref)) {
          return o(e, e.rule.ref);
        }
        if (grammarTypeValidators.isSimpleType(e) && e.typeRef?.ref) {
          return o(e, e.typeRef.ref);
        }
      }
    }(e, t, new Map());
  }
  function T(e) {
    return function e(t, r) {
      if (r.has(t)) {
        return true;
      }
      r.add(t);
      for (let n of astNodeUtils.traverseTree(t)) {
        if (grammarTypeValidators.isRuleCall(n)) {
          if (!n.rule.ref || grammarTypeValidators.isParserRule(n.rule.ref) && !e(n.rule.ref, r)) {
            return false;
          }
        } else if (grammarTypeValidators.isAssignment(n)) {
          return false;
        } else if (grammarTypeValidators.isAction(n)) {
          return false;
        }
      }
      return !!t.definition;
    }(e, new Set());
  }
  function v(e) {
    if (e.inferredType) {
      return e.inferredType.name;
    }
    if (e.dataType) {
      return e.dataType;
    }
    if (e.returnType) {
      let t = e.returnType.ref;
      if (t && (grammarTypeValidators.isParserRule(t) || grammarTypeValidators.isInterface(t) || grammarTypeValidators.isType(t))) {
        return t.name;
      }
    }
  }
  function R(e) {
    if (grammarTypeValidators.isTerminalRule(e)) {
      return e.type?.name ?? "string";
    } else {
      return v(e) ?? e.name;
    }
  }
  function $(e) {
    let t = {
      s: false,
      i: false,
      u: false
    };
    return new RegExp(function e(t, r) {
      var n;
      var a;
      var s;
      var o;
      var l;
      if (grammarTypeValidators.isTerminalAlternatives(t)) {
        return k((n = t).elements.map(t => e(t)).join("|"), {
          cardinality: n.cardinality,
          lookahead: n.lookahead
        });
      }
      if (grammarTypeValidators.isTerminalGroup(t)) {
        return k((a = t).elements.map(t => e(t)).join(""), {
          cardinality: a.cardinality,
          lookahead: a.lookahead
        });
      }
      if (grammarTypeValidators.isCharacterRange(t)) {
        if ((s = t).right) {
          return k(`[${A(s.left)}-${A(s.right)}]`, {
            cardinality: s.cardinality,
            lookahead: s.lookahead,
            wrap: false
          });
        } else {
          return k(A(s.left), {
            cardinality: s.cardinality,
            lookahead: s.lookahead,
            wrap: false
          });
        }
      }
      if (grammarTypeValidators.isTerminalRuleCall(t)) {
        let r = t.rule.ref;
        if (!r) {
          throw Error("Missing rule reference.");
        }
        return k(e(r.definition), {
          cardinality: t.cardinality,
          lookahead: t.lookahead
        });
      }
      if (grammarTypeValidators.isNegatedToken(t)) {
        o = t;
        return k(`(?!${e(o.terminal)})${E}*?`, {
          cardinality: o.cardinality,
          lookahead: o.lookahead
        });
      } else if (grammarTypeValidators.isUntilToken(t)) {
        l = t;
        return k(`${E}*?${e(l.terminal)}`, {
          cardinality: l.cardinality,
          lookahead: l.lookahead
        });
      } else if (grammarTypeValidators.isRegexToken(t)) {
        let e = t.regex.lastIndexOf("/");
        let n = t.regex.substring(1, e);
        let i = t.regex.substring(e + 1);
        if (r) {
          r.i = i.includes("i");
          r.s = i.includes("s");
          r.u = i.includes("u");
        }
        return k(n, {
          cardinality: t.cardinality,
          lookahead: t.lookahead,
          wrap: false
        });
      } else if (grammarTypeValidators.isWildcard(t)) {
        return k(E, {
          cardinality: t.cardinality,
          lookahead: t.lookahead
        });
      } else {
        throw Error(`Invalid terminal element: ${t == null ? undefined : t.$type}`);
      }
    }(e.definition, t), Object.entries(t).filter(([, e]) => e).map(([e]) => e).join(""));
  }
  let E = /[\s\S]/.source;
  function A(e) {
    return regexpUtilityHelpers.escapeRegexChars(e.value);
  }
  function k(e, t) {
    if (t.wrap !== false || t.lookahead) {
      e = `(${t.lookahead ?? ""}${e})`;
    }
    if (t.cardinality) {
      return `${e}${t.cardinality}`;
    } else {
      return e;
    }
  }
  require.d(exports, {
    getGrammarTypeName: function () {
      return v;
    },
    findContentAtPosition: function () {
      return h;
    },
    hasRuleDefinition: function () {
      return T;
    },
    collectGrammarRules: function () {
      return u;
    },
    getTerminalType: function () {
      return c;
    },
    findAssignmentAncestor: function () {
      return g;
    },
    findNameAssignment: function () {
      return y;
    },
    findKeywordInContent: function () {
      return m;
    },
    getRuleTypeName: function () {
      return R;
    },
    isHiddenNoWhitespace: function () {
      return d;
    },
    generateTerminalRegex: function () {
      return $;
    },
    getContentByPosition: function () {
      return f;
    },
    resolveGrammarTypeName: function () {
      return function e(t) {
        var n;
        if (grammarTypeValidators.isParserRule(t)) {
          if (T(t)) {
            return t.name;
          } else {
            return v(t) ?? t.name;
          }
        }
        if (grammarTypeValidators.isInterface(t) || grammarTypeValidators.isType(t) || grammarTypeValidators.isReturnType(t)) {
          return t.name;
        }
        if (grammarTypeValidators.isAction(t)) {
          let r = (n = t).inferredType ? n.inferredType.name : n.type?.ref ? e(n.type.ref) : undefined;
          if (r) {
            return r;
          }
        } else if (grammarTypeValidators.isInferredType(t)) {
          return t.name;
        }
        throw Error("Cannot get name of Unknown Type");
      };
    }
  });
}