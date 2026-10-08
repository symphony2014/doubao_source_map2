// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'commentLexerUtil'
// - Resolved require(810513) to 'comment-lexer-util'
// - Renamed variable 'i' to 'protobufNamespaceRoot'
// - Resolved require(259225) to 'protobuf-namespace-root'
// - Renamed variable 's' to 'protobufTypeClass'
// - Resolved require(480559) to 'protobuf-type-class'
// - Renamed variable 'o' to 'protobufFieldDefinition'
// - Resolved require(62763) to 'protobuf-field-definition'
// - Renamed variable 'a' to 'mapFieldClass'
// - Resolved require(11234) to 'map-field-class'
// - Renamed variable 'c' to 'protobufOneofDefinition'
// - Resolved require(299216) to 'protobuf-oneof-definition'
// - Renamed variable 'l' to 'protobufEnumClass'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Renamed variable 'h' to 'protobufServiceClass'
// - Resolved require(658249) to 'protobuf-service-class'
// - Renamed variable 'u' to 'rpcMethodClass'
// - Resolved require(627278) to 'rpc-method-class'
// - Renamed variable 'f' to 'protobufTypeDefaults'
// - Resolved require(673143) to 'protobuf-type-defaults'
// - Renamed variable 'p' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 442242
         */
module.exports = function (module, exports, require) {
  module.exports = S;
  S.filename = null;
  S.defaults = {
    keepCase: false
  };
  var commentLexerUtil = require("comment-lexer-util") /*id: 810513*/;
  var protobufNamespaceRoot = require("protobuf-namespace-root") /*id: 259225*/;
  var protobufTypeClass = require("protobuf-type-class") /*id: 480559*/;
  var protobufFieldDefinition = require("protobuf-field-definition") /*id: 62763*/;
  var mapFieldClass = require("map-field-class") /*id: 11234*/;
  var protobufOneofDefinition = require("protobuf-oneof-definition") /*id: 299216*/;
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufServiceClass = require("protobuf-service-class") /*id: 658249*/;
  var rpcMethodClass = require("rpc-method-class") /*id: 627278*/;
  var protobufTypeDefaults = require("protobuf-type-defaults") /*id: 673143*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  var d = /^[1-9][0-9]*$/;
  var y = /^-?[1-9][0-9]*$/;
  var g = /^0[x][0-9a-fA-F]+$/;
  var v = /^-?0[x][0-9a-fA-F]+$/;
  var m = /^0[0-7]+$/;
  var b = /^-?0[0-7]+$/;
  var O = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  var w = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
  var k = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  var E = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
  function S(e, t, r) {
    if (!(t instanceof protobufNamespaceRoot)) {
      r = t;
      t = new protobufNamespaceRoot();
    }
    r ||= S.defaults;
    var I;
    var T;
    var x;
    var A;
    var C;
    var _ = commentLexerUtil(e, r.alternateCommentMode || false);
    var N = _.next;
    var j = _.push;
    var P = _.peek;
    var R = _.skip;
    var $ = _.cmnt;
    var L = true;
    var B = false;
    var F = t;
    var M = r.keepCase ? function (e) {
      return e;
    } : protobufUtilityModule_1.camelCase;
    function H(e, t, r) {
      var n = S.filename;
      if (!r) {
        S.filename = null;
      }
      return Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + _.line + ")");
    }
    function D() {
      var e;
      var t = [];
      do {
        if ((e = N()) !== "\"" && e !== "'") {
          throw H(e);
        }
        t.push(N());
        R(e);
        e = P();
      } while (e === "\"" || e === "'");
      return t.join("");
    }
    function q(e) {
      var t = N();
      switch (t) {
        case "'":
        case "\"":
          j(t);
          return D();
        case "true":
        case "TRUE":
          return true;
        case "false":
        case "FALSE":
          return false;
      }
      try {
        return J(t, true);
      } catch (r) {
        if (e && k.test(t)) {
          return t;
        }
        throw H(t, "value");
      }
    }
    function U(e, t) {
      var r;
      var n;
      do {
        if (t && ((r = P()) === "\"" || r === "'")) {
          e.push(D());
        } else {
          e.push([n = Z(N()), R("to", true) ? Z(N()) : n]);
        }
      } while (R(",", true));
      R(";");
    }
    function J(e, t) {
      var r = 1;
      if (e.charAt(0) === "-") {
        r = -1;
        e = e.substring(1);
      }
      switch (e) {
        case "inf":
        case "INF":
        case "Inf":
          return r * Infinity;
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (d.test(e)) {
        return r * parseInt(e, 10);
      }
      if (g.test(e)) {
        return r * parseInt(e, 16);
      }
      if (m.test(e)) {
        return r * parseInt(e, 8);
      }
      if (O.test(e)) {
        return r * parseFloat(e);
      }
      throw H(e, "number", t);
    }
    function Z(e, t) {
      switch (e) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!t && e.charAt(0) === "-") {
        throw H(e, "id");
      }
      if (y.test(e)) {
        return parseInt(e, 10);
      }
      if (v.test(e)) {
        return parseInt(e, 16);
      }
      if (b.test(e)) {
        return parseInt(e, 8);
      }
      throw H(e, "id");
    }
    function V() {
      if (T !== undefined) {
        throw H("package");
      }
      T = N();
      if (!k.test(T)) {
        throw H(T, "name");
      }
      F = F.define(T);
      R(";");
    }
    function z() {
      var e;
      var t = P();
      switch (t) {
        case "weak":
          e = A ||= [];
          N();
          break;
        case "public":
          N();
        default:
          e = x ||= [];
      }
      t = D();
      R(";");
      e.push(t);
    }
    function W() {
      R("=");
      if (!(B = (C = D()) === "proto3") && C !== "proto2") {
        throw H(C, "syntax");
      }
      R(";");
    }
    function G(e, t) {
      switch (t) {
        case "option":
          ei(e, t);
          R(";");
          return true;
        case "message":
          X(e, t);
          return true;
        case "enum":
          er(e, t);
          return true;
        case "service":
          ec(e, t);
          return true;
        case "extend":
          eh(e, t);
          return true;
      }
      return false;
    }
    function K(e, t, r) {
      var n;
      var i = _.line;
      if (e) {
        e.comment = $();
        e.filename = S.filename;
      }
      if (R("{", true)) {
        while ((n = N()) !== "}") {
          t(n);
        }
        R(";", true);
      } else {
        if (r) {
          r();
        }
        R(";");
        if (e && typeof e.comment != "string") {
          e.comment = $(i);
        }
      }
    }
    function X(e, t) {
      if (!w.test(t = N())) {
        throw H(t, "type name");
      }
      var r = new protobufTypeClass(t);
      K(r, function (e) {
        if (!G(r, e)) {
          switch (e) {
            case "map":
              ee(r, e);
              break;
            case "required":
            case "optional":
            case "repeated":
              Q(r, e);
              break;
            case "oneof":
              et(r, e);
              break;
            case "extensions":
              U(r.extensions ||= []);
              break;
            case "reserved":
              U(r.reserved ||= [], true);
              break;
            default:
              if (!B || !k.test(e)) {
                throw H(e);
              }
              j(e);
              Q(r, "optional");
          }
        }
      });
      e.add(r);
    }
    function Q(e, t, r) {
      var n = N();
      if (n === "group") {
        Y(e, t);
        return;
      }
      if (!k.test(n)) {
        throw H(n, "type");
      }
      var i = N();
      if (!w.test(i)) {
        throw H(i, "name");
      }
      i = M(i);
      R("=");
      var s = new protobufFieldDefinition(i, Z(N()), n, t, r);
      K(s, function (e) {
        if (e === "option") {
          ei(s, e);
          R(";");
        } else {
          throw H(e);
        }
      }, function () {
        ea(s);
      });
      e.add(s);
      if (!B && s.repeated && (protobufTypeDefaults.packed[n] !== undefined || protobufTypeDefaults.basic[n] === undefined)) {
        s.setOption("packed", false, true);
      }
    }
    function Y(e, t) {
      var r = N();
      if (!w.test(r)) {
        throw H(r, "name");
      }
      var n = protobufUtilityModule_1.lcFirst(r);
      if (r === n) {
        r = protobufUtilityModule_1.ucFirst(r);
      }
      R("=");
      var i = Z(N());
      var a = new protobufTypeClass(r);
      a.group = true;
      var c = new protobufFieldDefinition(n, i, r, t);
      c.filename = S.filename;
      K(a, function (e) {
        switch (e) {
          case "option":
            ei(a, e);
            R(";");
            break;
          case "required":
          case "optional":
          case "repeated":
            Q(a, e);
            break;
          default:
            throw H(e);
        }
      });
      e.add(a).add(c);
    }
    function ee(e) {
      R("<");
      var t = N();
      if (protobufTypeDefaults.mapKey[t] === undefined) {
        throw H(t, "type");
      }
      R(",");
      var r = N();
      if (!k.test(r)) {
        throw H(r, "type");
      }
      R(">");
      var n = N();
      if (!w.test(n)) {
        throw H(n, "name");
      }
      R("=");
      var i = new mapFieldClass(M(n), Z(N()), t, r);
      K(i, function (e) {
        if (e === "option") {
          ei(i, e);
          R(";");
        } else {
          throw H(e);
        }
      }, function () {
        ea(i);
      });
      e.add(i);
    }
    function et(e, t) {
      if (!w.test(t = N())) {
        throw H(t, "name");
      }
      var r = new protobufOneofDefinition(M(t));
      K(r, function (e) {
        if (e === "option") {
          ei(r, e);
          R(";");
        } else {
          j(e);
          Q(r, "optional");
        }
      });
      e.add(r);
    }
    function er(e, t) {
      if (!w.test(t = N())) {
        throw H(t, "name");
      }
      var r = new protobufEnumClass(t);
      K(r, function (e) {
        switch (e) {
          case "option":
            ei(r, e);
            R(";");
            break;
          case "reserved":
            U(r.reserved ||= [], true);
            break;
          default:
            en(r, e);
        }
      });
      e.add(r);
    }
    function en(e, t) {
      if (!w.test(t)) {
        throw H(t, "name");
      }
      R("=");
      var r = Z(N(), true);
      var n = {};
      K(n, function (e) {
        if (e === "option") {
          ei(n, e);
          R(";");
        } else {
          throw H(e);
        }
      }, function () {
        ea(n);
      });
      e.add(t, r, n.comment);
    }
    function ei(e, t) {
      var r = R("(", true);
      if (!k.test(t = N())) {
        throw H(t, "name");
      }
      var n = t;
      if (r) {
        R(")");
        n = "(" + n + ")";
        t = P();
        if (E.test(t)) {
          n += t;
          N();
        }
      }
      R("=");
      es(e, n);
    }
    function es(e, t) {
      if (R("{", true)) {
        do {
          if (!w.test(I = N())) {
            throw H(I, "name");
          }
          if (P() === "{") {
            es(e, t + "." + I);
          } else {
            R(":");
            if (P() === "{") {
              es(e, t + "." + I);
            } else {
              eo(e, t + "." + I, q(true));
            }
          }
          R(",", true);
        } while (!R("}", true));
      } else {
        eo(e, t, q(true));
      }
    }
    function eo(e, t, r) {
      if (e.setOption) {
        e.setOption(t, r);
      }
    }
    function ea(e) {
      if (R("[", true)) {
        do {
          ei(e, "option");
        } while (R(",", true));
        R("]");
      }
      return e;
    }
    function ec(e, t) {
      if (!w.test(t = N())) {
        throw H(t, "service name");
      }
      var r = new protobufServiceClass(t);
      K(r, function (e) {
        if (!G(r, e)) {
          if (e === "rpc") {
            el(r, e);
          } else {
            throw H(e);
          }
        }
      });
      e.add(r);
    }
    function el(e, t) {
      var r = t;
      if (!w.test(t = N())) {
        throw H(t, "name");
      }
      var n;
      var i;
      var s;
      var o;
      var a = t;
      R("(");
      if (R("stream", true)) {
        i = true;
      }
      if (!k.test(t = N()) || (n = t, R(")"), R("returns"), R("("), R("stream", true) && (o = true), !k.test(t = N()))) {
        throw H(t);
      }
      s = t;
      R(")");
      var c = new rpcMethodClass(a, r, n, s, i, o);
      K(c, function (e) {
        if (e === "option") {
          ei(c, e);
          R(";");
        } else {
          throw H(e);
        }
      });
      e.add(c);
    }
    function eh(e, t) {
      if (!k.test(t = N())) {
        throw H(t, "reference");
      }
      var r = t;
      K(null, function (t) {
        switch (t) {
          case "required":
          case "repeated":
          case "optional":
            Q(e, t, r);
            break;
          default:
            if (!B || !k.test(t)) {
              throw H(t);
            }
            j(t);
            Q(e, "optional", r);
        }
      });
    }
    while ((I = N()) !== null) {
      switch (I) {
        case "package":
          if (!L) {
            throw H(I);
          }
          V();
          break;
        case "import":
          if (!L) {
            throw H(I);
          }
          z();
          break;
        case "syntax":
          if (!L) {
            throw H(I);
          }
          W();
          break;
        case "option":
          if (!L) {
            throw H(I);
          }
          ei(F, I);
          R(";");
          break;
        default:
          if (G(F, I)) {
            L = false;
            continue;
          }
          throw H(I);
      }
    }
    S.filename = null;
    return {
      package: T,
      imports: x,
      weakImports: A,
      syntax: C,
      root: t
    };
  }
}