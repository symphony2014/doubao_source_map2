// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B7' to 'isAssignment'
// - Renamed export 'Bf' to 'isCharacterRange'
// - Renamed export 'Bi' to 'isNegatedToken'
// - Renamed export 'F8' to 'isDisjunction'
// - Renamed export 'F9' to 'isParserRule'
// - Renamed export 'Ii' to 'isNegation'
// - Renamed export 'Iy' to 'isSimpleType'
// - Renamed export 'Ki' to 'isCrossReference'
// - Renamed export 'L' to 'isBooleanLiteral'
// - Renamed export 'LG' to 'isAction'
// - Renamed export 'MS' to 'isTerminalRule'
// - Renamed export 'MZ' to 'isAlternatives'
// - Renamed export 'Mp' to 'isReturnType'
// - Renamed export 'OG' to 'isUntilToken'
// - Renamed export 'P9' to 'isType'
// - Renamed export 'QV' to 'isInterface'
// - Renamed export 'SV' to 'TypeRegistry'
// - Renamed export 'S_' to 'isInferredType'
// - Renamed export 'Sg' to 'isRegexToken'
// - Renamed export 'TB' to 'isConjunction'
// - Renamed export 'V7' to 'isTerminalAlternatives'
// - Renamed export 'W1' to 'isUnorderedGroup'
// - Renamed export 'X9' to 'isTerminalGroup'
// - Renamed export 'gf' to 'isTerminalRuleCall'
// - Renamed export 'p1' to 'isKeyword'
// - Renamed export 'qm' to 'isWildcard'
// - Renamed export 'rT' to 'isEndOfFile'
// - Renamed export 't3' to 'isRuleCall'
// - Renamed export 'ty' to 'isGroup'
// - Renamed export 'yW' to 'isParameterReference'
// - Renamed export 'zJ' to 'isAbstractElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 279057
         */
module.exports = function (module, exports, require) {
  var typeGuardValidators = require("type-guard-validators") /*id: 69877*/;
  let i = "AbstractRule";
  let a = "AbstractType";
  let s = "Condition";
  let o = "TypeDefinition";
  let l = "ValueLiteral";
  let u = "AbstractElement";
  function c(e) {
    return eS.isInstance(e, u);
  }
  let d = "ArrayLiteral";
  let h = "ArrayType";
  let f = "BooleanLiteral";
  function p(e) {
    return eS.isInstance(e, f);
  }
  let m = "Conjunction";
  function g(e) {
    return eS.isInstance(e, m);
  }
  let y = "Disjunction";
  function T(e) {
    return eS.isInstance(e, y);
  }
  let v = "Grammar";
  let R = "GrammarImport";
  let $ = "InferredType";
  function E(e) {
    return eS.isInstance(e, $);
  }
  let A = "Interface";
  function k(e) {
    return eS.isInstance(e, A);
  }
  let x = "NamedArgument";
  let I = "Negation";
  function S(e) {
    return eS.isInstance(e, I);
  }
  let C = "NumberLiteral";
  let N = "Parameter";
  let w = "ParameterReference";
  function L(e) {
    return eS.isInstance(e, w);
  }
  let b = "ParserRule";
  function _(e) {
    return eS.isInstance(e, b);
  }
  let O = "ReferenceType";
  let P = "ReturnType";
  function M(e) {
    return eS.isInstance(e, P);
  }
  let D = "SimpleType";
  function Z(e) {
    return eS.isInstance(e, D);
  }
  let F = "StringLiteral";
  let U = "TerminalRule";
  function G(e) {
    return eS.isInstance(e, U);
  }
  let B = "Type";
  function K(e) {
    return eS.isInstance(e, B);
  }
  let V = "TypeAttribute";
  let W = "UnionType";
  let j = "Action";
  function H(e) {
    return eS.isInstance(e, j);
  }
  let z = "Alternatives";
  function Y(e) {
    return eS.isInstance(e, z);
  }
  let q = "Assignment";
  function X(e) {
    return eS.isInstance(e, q);
  }
  let Q = "CharacterRange";
  function J(e) {
    return eS.isInstance(e, Q);
  }
  let ee = "CrossReference";
  function et(e) {
    return eS.isInstance(e, ee);
  }
  let er = "EndOfFile";
  function en(e) {
    return eS.isInstance(e, er);
  }
  let ei = "Group";
  function ea(e) {
    return eS.isInstance(e, ei);
  }
  let es = "Keyword";
  function eo(e) {
    return eS.isInstance(e, es);
  }
  let el = "NegatedToken";
  function eu(e) {
    return eS.isInstance(e, el);
  }
  let ec = "RegexToken";
  function ed(e) {
    return eS.isInstance(e, ec);
  }
  let eh = "RuleCall";
  function ef(e) {
    return eS.isInstance(e, eh);
  }
  let ep = "TerminalAlternatives";
  function em(e) {
    return eS.isInstance(e, ep);
  }
  let eg = "TerminalGroup";
  function ey(e) {
    return eS.isInstance(e, eg);
  }
  let eT = "TerminalRuleCall";
  function ev(e) {
    return eS.isInstance(e, eT);
  }
  let eR = "UnorderedGroup";
  function e$(e) {
    return eS.isInstance(e, eR);
  }
  let eE = "UntilToken";
  function eA(e) {
    return eS.isInstance(e, eE);
  }
  let ek = "Wildcard";
  function ex(e) {
    return eS.isInstance(e, ek);
  }
  class eI extends typeGuardValidators.TypeRegistry {
    getAllTypes() {
      return [u, i, a, j, z, d, h, q, f, Q, s, m, ee, y, er, v, R, ei, $, A, es, x, el, I, C, N, w, b, O, ec, P, eh, D, F, ep, eg, U, eT, B, V, o, W, eR, eE, l, ek];
    }
    computeIsSubtype(e, t) {
      switch (e) {
        case j:
        case z:
        case q:
        case Q:
        case ee:
        case er:
        case ei:
        case es:
        case el:
        case ec:
        case eh:
        case ep:
        case eg:
        case eT:
        case eR:
        case eE:
        case ek:
          return this.isSubtype(u, t);
        case d:
        case C:
        case F:
          return this.isSubtype(l, t);
        case h:
        case O:
        case D:
        case W:
          return this.isSubtype(o, t);
        case f:
          return this.isSubtype(s, t) || this.isSubtype(l, t);
        case m:
        case y:
        case I:
        case w:
          return this.isSubtype(s, t);
        case $:
        case A:
        case B:
          return this.isSubtype(a, t);
        case b:
          return this.isSubtype(i, t) || this.isSubtype(a, t);
        case U:
          return this.isSubtype(i, t);
        default:
          return false;
      }
    }
    getReferenceType(e) {
      let t = `${e.container.$type}:${e.property}`;
      switch (t) {
        case "Action:type":
        case "CrossReference:type":
        case "Interface:superTypes":
        case "ParserRule:returnType":
        case "SimpleType:typeRef":
          return a;
        case "Grammar:hiddenTokens":
        case "ParserRule:hiddenTokens":
        case "RuleCall:rule":
          return i;
        case "Grammar:usedGrammars":
          return v;
        case "NamedArgument:parameter":
        case "ParameterReference:parameter":
          return N;
        case "TerminalRuleCall:rule":
          return U;
        default:
          throw Error(`${t} is not a valid reference id.`);
      }
    }
    getTypeMetaData(e) {
      switch (e) {
        case u:
          return {
            name: u,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }]
          };
        case d:
          return {
            name: d,
            properties: [{
              name: "elements",
              defaultValue: []
            }]
          };
        case h:
          return {
            name: h,
            properties: [{
              name: "elementType"
            }]
          };
        case f:
          return {
            name: f,
            properties: [{
              name: "true",
              defaultValue: false
            }]
          };
        case m:
          return {
            name: m,
            properties: [{
              name: "left"
            }, {
              name: "right"
            }]
          };
        case y:
          return {
            name: y,
            properties: [{
              name: "left"
            }, {
              name: "right"
            }]
          };
        case v:
          return {
            name: v,
            properties: [{
              name: "definesHiddenTokens",
              defaultValue: false
            }, {
              name: "hiddenTokens",
              defaultValue: []
            }, {
              name: "imports",
              defaultValue: []
            }, {
              name: "interfaces",
              defaultValue: []
            }, {
              name: "isDeclared",
              defaultValue: false
            }, {
              name: "name"
            }, {
              name: "rules",
              defaultValue: []
            }, {
              name: "types",
              defaultValue: []
            }, {
              name: "usedGrammars",
              defaultValue: []
            }]
          };
        case R:
          return {
            name: R,
            properties: [{
              name: "path"
            }]
          };
        case $:
          return {
            name: $,
            properties: [{
              name: "name"
            }]
          };
        case A:
          return {
            name: A,
            properties: [{
              name: "attributes",
              defaultValue: []
            }, {
              name: "name"
            }, {
              name: "superTypes",
              defaultValue: []
            }]
          };
        case x:
          return {
            name: x,
            properties: [{
              name: "calledByName",
              defaultValue: false
            }, {
              name: "parameter"
            }, {
              name: "value"
            }]
          };
        case I:
          return {
            name: I,
            properties: [{
              name: "value"
            }]
          };
        case C:
          return {
            name: C,
            properties: [{
              name: "value"
            }]
          };
        case N:
          return {
            name: N,
            properties: [{
              name: "name"
            }]
          };
        case w:
          return {
            name: w,
            properties: [{
              name: "parameter"
            }]
          };
        case b:
          return {
            name: b,
            properties: [{
              name: "dataType"
            }, {
              name: "definesHiddenTokens",
              defaultValue: false
            }, {
              name: "definition"
            }, {
              name: "entry",
              defaultValue: false
            }, {
              name: "fragment",
              defaultValue: false
            }, {
              name: "hiddenTokens",
              defaultValue: []
            }, {
              name: "inferredType"
            }, {
              name: "name"
            }, {
              name: "parameters",
              defaultValue: []
            }, {
              name: "returnType"
            }, {
              name: "wildcard",
              defaultValue: false
            }]
          };
        case O:
          return {
            name: O,
            properties: [{
              name: "referenceType"
            }]
          };
        case P:
          return {
            name: P,
            properties: [{
              name: "name"
            }]
          };
        case D:
          return {
            name: D,
            properties: [{
              name: "primitiveType"
            }, {
              name: "stringType"
            }, {
              name: "typeRef"
            }]
          };
        case F:
          return {
            name: F,
            properties: [{
              name: "value"
            }]
          };
        case U:
          return {
            name: U,
            properties: [{
              name: "definition"
            }, {
              name: "fragment",
              defaultValue: false
            }, {
              name: "hidden",
              defaultValue: false
            }, {
              name: "name"
            }, {
              name: "type"
            }]
          };
        case B:
          return {
            name: B,
            properties: [{
              name: "name"
            }, {
              name: "type"
            }]
          };
        case V:
          return {
            name: V,
            properties: [{
              name: "defaultValue"
            }, {
              name: "isOptional",
              defaultValue: false
            }, {
              name: "name"
            }, {
              name: "type"
            }]
          };
        case W:
          return {
            name: W,
            properties: [{
              name: "types",
              defaultValue: []
            }]
          };
        case j:
          return {
            name: j,
            properties: [{
              name: "cardinality"
            }, {
              name: "feature"
            }, {
              name: "inferredType"
            }, {
              name: "lookahead"
            }, {
              name: "operator"
            }, {
              name: "type"
            }]
          };
        case z:
          return {
            name: z,
            properties: [{
              name: "cardinality"
            }, {
              name: "elements",
              defaultValue: []
            }, {
              name: "lookahead"
            }]
          };
        case q:
          return {
            name: q,
            properties: [{
              name: "cardinality"
            }, {
              name: "feature"
            }, {
              name: "lookahead"
            }, {
              name: "operator"
            }, {
              name: "terminal"
            }]
          };
        case Q:
          return {
            name: Q,
            properties: [{
              name: "cardinality"
            }, {
              name: "left"
            }, {
              name: "lookahead"
            }, {
              name: "right"
            }]
          };
        case ee:
          return {
            name: ee,
            properties: [{
              name: "cardinality"
            }, {
              name: "deprecatedSyntax",
              defaultValue: false
            }, {
              name: "lookahead"
            }, {
              name: "terminal"
            }, {
              name: "type"
            }]
          };
        case er:
          return {
            name: er,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }]
          };
        case ei:
          return {
            name: ei,
            properties: [{
              name: "cardinality"
            }, {
              name: "elements",
              defaultValue: []
            }, {
              name: "guardCondition"
            }, {
              name: "lookahead"
            }]
          };
        case es:
          return {
            name: es,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }, {
              name: "value"
            }]
          };
        case el:
          return {
            name: el,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }, {
              name: "terminal"
            }]
          };
        case ec:
          return {
            name: ec,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }, {
              name: "regex"
            }]
          };
        case eh:
          return {
            name: eh,
            properties: [{
              name: "arguments",
              defaultValue: []
            }, {
              name: "cardinality"
            }, {
              name: "lookahead"
            }, {
              name: "rule"
            }]
          };
        case ep:
          return {
            name: ep,
            properties: [{
              name: "cardinality"
            }, {
              name: "elements",
              defaultValue: []
            }, {
              name: "lookahead"
            }]
          };
        case eg:
          return {
            name: eg,
            properties: [{
              name: "cardinality"
            }, {
              name: "elements",
              defaultValue: []
            }, {
              name: "lookahead"
            }]
          };
        case eT:
          return {
            name: eT,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }, {
              name: "rule"
            }]
          };
        case eR:
          return {
            name: eR,
            properties: [{
              name: "cardinality"
            }, {
              name: "elements",
              defaultValue: []
            }, {
              name: "lookahead"
            }]
          };
        case eE:
          return {
            name: eE,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }, {
              name: "terminal"
            }]
          };
        case ek:
          return {
            name: ek,
            properties: [{
              name: "cardinality"
            }, {
              name: "lookahead"
            }]
          };
        default:
          return {
            name: e,
            properties: []
          };
      }
    }
  }
  let eS = new eI();
  require.d(exports, {
    isAssignment: function () {
      return X;
    },
    isCharacterRange: function () {
      return J;
    },
    isNegatedToken: function () {
      return eu;
    },
    isDisjunction: function () {
      return T;
    },
    isParserRule: function () {
      return _;
    },
    isNegation: function () {
      return S;
    },
    isSimpleType: function () {
      return Z;
    },
    isCrossReference: function () {
      return et;
    },
    isBooleanLiteral: function () {
      return p;
    },
    isAction: function () {
      return H;
    },
    isTerminalRule: function () {
      return G;
    },
    isAlternatives: function () {
      return Y;
    },
    isReturnType: function () {
      return M;
    },
    isUntilToken: function () {
      return eA;
    },
    isType: function () {
      return K;
    },
    isInterface: function () {
      return k;
    },
    TypeRegistry: function () {
      return eI;
    },
    isInferredType: function () {
      return E;
    },
    isRegexToken: function () {
      return ed;
    },
    isConjunction: function () {
      return g;
    },
    isTerminalAlternatives: function () {
      return em;
    },
    isUnorderedGroup: function () {
      return e$;
    },
    isTerminalGroup: function () {
      return ey;
    },
    isTerminalRuleCall: function () {
      return ev;
    },
    isKeyword: function () {
      return eo;
    },
    isWildcard: function () {
      return ex;
    },
    isEndOfFile: function () {
      return en;
    },
    isRuleCall: function () {
      return ef;
    },
    isGroup: function () {
      return ea;
    },
    isParameterReference: function () {
      return L;
    },
    isAbstractElement: function () {
      return c;
    }
  });
}