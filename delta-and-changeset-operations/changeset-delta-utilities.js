// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z5' to 'unpackZoneChangesets'
// - Renamed export 'je' to 'isClientSideOnly'
// - Renamed export '_i' to 'packToZoneChangesets'
// - Renamed export 'RE' to 'composeDeltas'
// - Renamed export 'Vs' to 'isInitialAttributedTexts'
// - Renamed export 'am' to 'sliceZoneDelta'
// - Renamed export '_1' to 'deltaSetToInitialTexts'
// - Renamed export 'GM' to 'getContentDelta'
// - Renamed export 'Eh' to 'isZoneChangesets'
// - Renamed export 'v2' to 'createChangeset'
// - Renamed export 'xe' to 'getTotalOpLength'
// - Renamed export 'lN' to 'changesetToDelta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 803911
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var zeroConstantModule = require("zero-constant-module") /*id: 785143*/;
  var deltaPatchOperations = require("delta-patch-operations") /*id: 713456*/;
  var patchOperationConstants = require("patch-operation-constants") /*id: 329334*/;
  function p(t) {
    return t.indexOf("rs") === 0 && t.length === 34;
  }
  function f(t) {
    return t.indexOf("cs") === 0 && t.length === 34;
  }
  var typescriptHelperUtils_1 = require("typescript-helper-utils_1") /*id: 712698*/;
  require("diff-match-patch") /*id: 183089*/;
  var b = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      n.ops = [];
      var r = e.zoneId;
      var i = e.ops;
      var o = e.zoneType;
      n.zoneId = r;
      n.zoneType = o;
      if (i && i.length > 0) {
        n.ops = i;
      }
      return n;
    }
    typescriptHelperUtils_1.extendsClass(e, t);
    var n = e.prototype;
    n.insert = function (e, n) {
      if (e) {
        return t.prototype.insert.call(this, {
          id: e
        }, n, false);
      } else {
        return this;
      }
    };
    n.create = function (t) {
      t.zoneType = t.zoneType || this.zoneType;
      return new e(t);
    };
    return e;
  }(deltaPatchOperations.Delta);
  var v = function (t) {
    function e(e) {
      return t.call(this, typescriptHelperUtils_1.objectAssign({
        zoneType: patchOperationConstants.patchTypes.Row
      }, e)) || this;
    }
    typescriptHelperUtils_1.extendsClass(e, t);
    return e;
  }(b);
  var g = function (t) {
    function e(e) {
      return t.call(this, typescriptHelperUtils_1.objectAssign({
        zoneType: patchOperationConstants.patchTypes.Column
      }, e)) || this;
    }
    typescriptHelperUtils_1.extendsClass(e, t);
    return e;
  }(b);
  deltaPatchOperations.Delta.registerCreator(patchOperationConstants.patchTypes.Row, v);
  deltaPatchOperations.Delta.registerCreator(patchOperationConstants.patchTypes.Column, g);
  var contentDeltaClass_1 = require("content-delta-class_1") /*id: 564245*/;
  function m(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var n = e && t[e];
    var r = 0;
    if (n) {
      return n.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function x(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var i;
    var o = n.call(t);
    var s = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
        s.push(r.value);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return s;
  }
  function T(t, e) {
    return (T = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  }
  function w(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var i;
    var o = n.call(t);
    var s = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
        s.push(r.value);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return s;
  }
  var S = function (t) {
    function e(e, n = false) {
      var r = t.call(this, e) || this;
      r.silence = n;
      return r;
    }
    (function (t, e) {
      function n() {
        this.constructor = t;
      }
      T(t, e);
      t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
    })(e, t);
    return e;
  }(Error);
  function k(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = w(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new S("Failed assertion: " + e, n);
    }
  }
  var A = function () {
    function t() {
      var t = this;
      this.toJsonable = function () {
        var e = {};
        for (var n in t.numToAttrib) {
          if (t.numToAttrib.hasOwnProperty(n)) {
            var r = t.numToAttrib[n];
            e[n] = [r[0], r[1]];
          }
        }
        return {
          numToAttrib: e,
          nextNum: t.nextNum,
          attribToNum: t.attribToNum
        };
      };
      this.fromJsonable = function (e) {
        t.numToAttrib = {};
        t.nextNum = e.nextNum;
        t.attribToNum = {};
        for (var n in e.numToAttrib) {
          if (e.numToAttrib.hasOwnProperty(n)) {
            var r = e.numToAttrib[n];
            t.attribToNum[String(r)] = Number(n);
            t.numToAttrib[n] = [r[0], r[1]];
          }
        }
        try {
          t.checkConsistent();
        } catch (e) {
          t.handleError(e);
        }
        t.dirty = true;
        return t;
      };
      this.checkConsistent = function () {
        for (var e = 0; e < t.nextNum; e++) {
          k(e in t.numToAttrib, "AttribPool: " + e + " is not in this.numToAttrib");
        }
        var n = {};
        for (var r in t.numToAttrib) {
          if (t.numToAttrib.hasOwnProperty(r)) {
            k(Number(r) >= 0 && Number(r) < t.nextNum, "AttribPool: " + r + " is not in range [0," + t.nextNum + "]");
            var i = t.numToAttrib[r];
            k(Object.prototype.toString.call(i) === "[object Array]", "AttribPool: attrib should be an array");
            k(i.length === 2, "AttribPool: attrib length should be 2");
            k(typeof i[0] == "string", "AttribPool: key should be string");
            k(typeof i[1] == "string", "AttribPool: value should be string");
            k(!(String(i) in n), "AttribPool: attrib was already seen");
            n[String(i)] = true;
            k(t.attribToNum[String(i)] === Number(r), "AttribPool: attribToNum does not match");
          }
        }
        for (var o in t.attribToNum) {
          if (t.attribToNum.hasOwnProperty(o)) {
            k(o in n, "AttribPool: attr was not seen");
          }
        }
      };
      this.numToAttrib = {};
      this.attribToNum = {};
      this.nextNum = 0;
      this.dirty = false;
    }
    t.prototype.putAttrib = function (t, e) {
      var n = [String(t[0] || ""), String(t[1] || "")];
      var r = String(n);
      if (r in this.attribToNum) {
        return this.attribToNum[r];
      }
      if (e) {
        return -1;
      }
      var i = this.nextNum++;
      this.attribToNum[r] = i;
      this.numToAttrib[i] = n;
      this.dirty = true;
      return i;
    };
    t.prototype.getAttrib = function (t) {
      var e = this.numToAttrib[t];
      if (e) {
        return [e[0], e[1]];
      } else {
        return e;
      }
    };
    t.prototype.updateAttrib = function (t, e) {
      var n = this.getAttrib(t);
      if (n) {
        var r = String(n);
        var i = String(e);
        if (this.attribToNum[r] != null) {
          delete this.attribToNum[r];
        }
        this.attribToNum[i] = t;
        this.numToAttrib[t] = e;
      }
    };
    t.prototype.getAttribKey = function (t) {
      var e = this.numToAttrib[t];
      if (e) {
        return e[0];
      } else {
        return "";
      }
    };
    t.prototype.getAttribValue = function (t) {
      var e = this.numToAttrib[t];
      if (e) {
        return e[1];
      } else {
        return "";
      }
    };
    t.prototype.getAttribNum = function (t) {
      var e = t;
      if (typeof e != "string") {
        e = String(e);
      }
      return this.attribToNum[e];
    };
    t.prototype.eachAttrib = function (t) {
      for (var e in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(e)) {
          var n = this.numToAttrib[e];
          t(n[0], n[1]);
        }
      }
    };
    t.prototype.toJsonableNoCloning = function () {
      return {
        numToAttrib: this.numToAttrib,
        nextNum: this.nextNum
      };
    };
    t.prototype.fromJsonableNoCloning = function (t) {
      this.numToAttrib = t.numToAttrib;
      this.nextNum = t.nextNum;
      this.attribToNum = {};
      for (var e in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(e)) {
          this.attribToNum[String(this.numToAttrib[e])] = Number(e);
        }
      }
      try {
        this.checkConsistent();
      } catch (t) {
        this.handleError(t);
      }
      return this;
    };
    t.prototype.handleError = function (t) {
      throw t;
    };
    t.prototype.copy = function () {
      var e = new t();
      for (var n in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(n)) {
          var r = this.numToAttrib[n];
          e.numToAttrib[n] = [r[0], r[1]];
        }
      }
      for (var i in this.attribToNum) {
        if (this.attribToNum.hasOwnProperty(i)) {
          e.attribToNum[i] = this.attribToNum[i];
        }
      }
      e.nextNum = this.nextNum;
      return e;
    };
    return t;
  }();
  function N(t) {
    return {
      opcode: t || "",
      chars: 0,
      lines: 0,
      attribs: "",
      getAttribute: function (t, e) {
        return function (t, e, n) {
          var r = function (t) {
            var e = [];
            var n = false;
            var r = false;
            var i = 0;
            var o = 0;
            for (; o < t.length; o++) {
              var s = t.charCodeAt(o);
              if (n || r) {
                if (s >= 48 && s <= 57) {
                  i *= 36;
                  i += s - 48;
                } else if (s >= 97 && s <= 122) {
                  i *= 36;
                  i += s - 97 + 10;
                } else if (s >= 65 && s <= 90) {
                  i *= 36;
                  i += s - 65 + 10;
                } else {
                  if (!n) {
                    o += i;
                    i = 0;
                    r = false;
                    continue;
                  }
                  e.push(i);
                  i = 0;
                  n = false;
                }
              }
              switch (s) {
                case 42:
                  n = true;
                  break;
                case 36:
                  return e;
                case 35:
                  r = true;
              }
            }
            if (n) {
              e.push(i);
            }
            return e;
          }(t);
          var i = r.length - 1;
          for (; i >= 0; i--) {
            var o = r[i];
            if (n.getAttribKey(o) === e) {
              return n.getAttribValue(o);
            }
          }
          return "";
        }(this.attribs, t, e);
      }
    };
  }
  function O(t) {
    t.opcode = "";
    t.chars = 0;
    t.lines = 0;
    t.attribs = "";
  }
  function L(t, e) {
    e.opcode = t.opcode;
    e.chars = t.chars;
    e.lines = t.lines;
    e.attribs = t.attribs;
  }
  var C = function () {
    function t(t, e = 0) {
      this.opStr = t;
      this.index = e;
      this.op = N();
    }
    t.prototype.hasNext = function () {
      return this.index < this.opStr.length;
    };
    t.prototype.next = function (t) {
      var e = t || this.op;
      if (this.index !== this.opStr.length) {
        e.lines = 0;
        var n = undefined;
        var r = this.index;
        while (this.index < this.opStr.length) {
          var i = this.opStr.charCodeAt(this.index);
          if (i === 124) {
            n = this.index;
            this.index++;
            while (this.index < this.opStr.length) {
              var o = this.opStr.charCodeAt(this.index);
              if (o === 43 || o === 45 || o === 61) {
                e.opcode = this.opStr.charAt(this.index);
                break;
              }
              if (o >= 48 && o <= 57) {
                e.lines *= 36;
                e.lines += o - 48;
              } else if (o >= 97 && o <= 122) {
                e.lines *= 36;
                e.lines += o - 97 + 10;
              }
              this.index++;
            }
            break;
          }
          if (i === 43 || i === 45 || i === 61) {
            n = this.index;
            e.opcode = this.opStr.charAt(this.index);
            break;
          }
          this.index++;
        }
        e.attribs = this.opStr.substring(r, n);
        e.chars = 0;
        this.index++;
        while (this.index < this.opStr.length) {
          var o = this.opStr.charCodeAt(this.index);
          if (o >= 48 && o <= 57) {
            e.chars *= 36;
            e.chars += o - 48;
          } else {
            if (!(o >= 97) || !(o <= 122)) {
              break;
            }
            e.chars *= 36;
            e.chars += o - 97 + 10;
          }
          this.index++;
        }
        return e;
      }
      O(e);
      return e;
    };
    return t;
  }();
  function z(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = w(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new S("Failed assertion: " + e, n);
    }
  }
  function j(t, e) {
    var n;
    var r;
    if (e === undefined) {
      e = 0;
    }
    n = t || "";
    if ((r = e) === undefined) {
      r = 0;
    }
    return new C(n || "", r);
  }
  function E(t) {
    return t.toString(36).toLowerCase();
  }
  function I(t) {
    return parseInt(t, 36);
  }
  var _ = /\*([0-9a-z]+)/g;
  function Z(t, e) {
    var n = t.indexOf("$");
    if (n < 0) {
      n = t.length;
    }
    var r = t.substring(0, n).match(_) || [];
    var i = 0;
    for (; i < r.length; i++) {
      e(I(r[i].substring(1)));
    }
  }
  function P(t, e, n) {
    if (e) {
      if (typeof e == "string") {
        return e;
      }
      if (n && e && e.length) {
        if (e.length > 1) {
          (e = e.slice()).sort();
        }
        var r = [];
        var i = 0;
        for (; i < e.length; i++) {
          var o = e[i];
          if (t === "=" || t === "+" && o[1]) {
            r.push("*" + E(n.putAttrib(o)));
          }
        }
        return r.join("");
      }
    }
    return "";
  }
  function B() {
    var t;
    t = [];
    var e = {
      append: function (e) {
        t.push(e.attribs);
        if (e.lines) {
          t.push("|", E(e.lines));
        }
        t.push(e.opcode);
        t.push(E(e.chars));
      },
      toString: function () {
        return t.join("");
      },
      clear: function () {
        t.length = 0;
      }
    };
    var n = N();
    var r = 0;
    function i(t) {
      if (n.opcode) {
        if (!t || n.opcode !== "=" || !!n.attribs) {
          e.append(n);
          if (r) {
            n.chars = r;
            n.lines = 0;
            e.append(n);
            r = 0;
          }
        }
        n.opcode = "";
      }
    }
    return {
      append: function (t) {
        if (t.chars > 0) {
          if (n.opcode === t.opcode && n.attribs === t.attribs) {
            if (t.lines > 0) {
              n.chars += r + t.chars;
              n.lines += t.lines;
              r = 0;
            } else if (n.lines === 0) {
              n.chars += t.chars;
            } else {
              r += t.chars;
            }
          } else {
            i();
            L(t, n);
          }
        }
      },
      toString: function () {
        i();
        return e.toString();
      },
      clear: function () {
        e.clear();
        O(n);
      },
      endDocument: function () {
        i(true);
      }
    };
  }
  function R() {
    var t = [];
    function e() {
      return t.join("");
    }
    return {
      append: function (e) {
        t.push(String(e));
      },
      toString: e,
      toResult: e
    };
  }
  function D() {
    var t = B();
    var e = B();
    var n = B();
    var r = R();
    var i = "";
    var o = 0;
    function s() {
      r.append(n.toString());
      n.clear();
    }
    function a() {
      r.append(t.toString());
      t.clear();
      r.append(e.toString());
      e.clear();
    }
    function c(r) {
      if (r.opcode && r.chars) {
        if (r.opcode === "-") {
          if (i === "=") {
            s();
          }
          t.append(r);
          o -= r.chars;
        } else if (r.opcode === "+") {
          if (i === "=") {
            s();
          }
          e.append(r);
          o += r.chars;
        } else if (r.opcode === "=") {
          if (i !== "=") {
            a();
          }
          n.append(r);
        }
        i = r.opcode;
      }
    }
    return {
      append: c,
      toString: function () {
        a();
        s();
        return r.toString();
      },
      clear: function () {
        t.clear();
        e.clear();
        n.clear();
        o = 0;
      },
      endDocument: function () {
        n.endDocument();
      },
      appendOpWithText: function (t, e, n, r) {
        var i = N(t);
        i.attribs = P(t, n, r);
        var o = e.lastIndexOf("\n");
        if (o < 0) {
          i.chars = e.length;
        } else {
          i.chars = o + 1;
          i.lines = e.match(/\n/g).length;
          c(i);
          i.chars = e.length - (o + 1);
        }
        i.lines = 0;
        c(i);
      },
      getLengthChange: function () {
        return o;
      }
    };
  }
  function V(t) {
    if (typeof t == "string") {
      return function (t) {
        var e = 0;
        var n = t.split("\n").length - 1;
        function r(t) {
          k(t <= i(), "!(n <= remaining())", false, {
            n: t,
            remaining: i()
          });
        }
        function i() {
          return t.length - e;
        }
        return {
          take: function (i) {
            r(i);
            var o = t.substr(e, i);
            n -= o.split("\n").length - 1;
            e += i;
            return o;
          },
          skip: function (t) {
            r(t);
            e += t;
          },
          remaining: i,
          peek: function (n) {
            r(n);
            return t.substr(e, n);
          },
          newlines: function () {
            return n;
          }
        };
      }(t);
    } else {
      return function (t) {
        function e(t) {
          z(t <= r(), "!(n <= remaining())", false, {
            n: t,
            remaining: r()
          });
        }
        var n = 0;
        function r() {
          return t.length - n;
        }
        return {
          take: function (r) {
            e(r);
            var i = t.slice(n, n + r);
            n += r;
            return i;
          },
          skip: function (t) {
            e(t);
            n += t;
          },
          remaining: r,
          peek: function (r) {
            e(r);
            return t.slice(n, n + r);
          }
        };
      }(t);
    }
  }
  function J(t, e, n, r) {
    if (!t && n) {
      return e;
    }
    if (!e) {
      return t;
    }
    var i;
    var o;
    var s = [];
    t.replace(/\*([0-9a-z]+)/g, function (t, e) {
      s.push(r.getAttrib(I(e)));
      return "";
    });
    e.replace(/\*([0-9a-z]+)/g, function (t, e) {
      var i = r.getAttrib(I(e));
      var o = false;
      var a = 0;
      for (; a < s.length; a++) {
        var c = s[a];
        if (c[0] === i[0]) {
          if (i[1] || n) {
            c[1] = i[1];
          } else {
            s.splice(a, 1);
          }
          o = true;
          break;
        }
      }
      if (!o && (i[1] || n)) {
        s.push(i);
      }
      return "";
    });
    s.sort();
    var a = R();
    try {
      var c = function (t) {
        var e = typeof Symbol == "function" && Symbol.iterator;
        var n = e && t[e];
        var r = 0;
        if (n) {
          return n.call(t);
        }
        if (t && typeof t.length == "number") {
          return {
            next: function () {
              if (t && r >= t.length) {
                t = undefined;
              }
              return {
                value: t && t[r++],
                done: !t
              };
            }
          };
        }
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }(s);
      var u = c.next();
      for (; !u.done; u = c.next()) {
        var l = u.value;
        a.append("*");
        a.append(E(r.putAttrib(l)));
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (o = c.return)) {
          o.call(c);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a.toString();
  }
  function M(t) {
    k(t, "itemType should be defined");
    if (t === "Z") {
      return R();
    } else {
      return function () {
        var t = [];
        function e() {
          return t;
        }
        return {
          append: function (e) {
            t = t.concat(e);
          },
          toList: e,
          toResult: e
        };
      }();
    }
  }
  function F(t) {
    var e = {};
    var n = 0;
    while (n < t.length) {
      var r = /^(Z|ZR|ZC)([0-9a-z]*):([0-9a-z]+)([><])([0-9a-z]+)|/.exec(t.substring(n));
      if (!r || !r[0]) {
        throw new S("Changeset: Not a changeset: " + t + " at position " + n);
      }
      var i = r[1].charAt(r[1].length - 1);
      var o = r[2] === "" ? "0" : r[2];
      if (o in e) {
        for (var s in e) {
          if (e.hasOwnProperty(s) && e[s].itemType === "Z") {
            e[s].charBank = "obfuscated " + e[s].charBank.length;
          }
        }
        k(false, "zoneIds should be unique", false, {
          zoneId: o,
          cssObj: JSON.stringify(e)
        });
      }
      if (o === "0") {
        k(i === "Z", "itemType must be Z");
      }
      var a = I(r[3]);
      var c = a + (r[4] === ">" ? 1 : -1) * I(r[5]);
      var u = n + r[0].length;
      var l = t.indexOf("$", n);
      var h = t.indexOf("#", n);
      var p = h >= 0 && l >= 0 && h < l;
      var f = t.length;
      if (l >= 0) {
        f = l;
      }
      if (p) {
        f = h;
      }
      var d = l >= 0 ? l + 1 : t.length;
      var b = p ? d + I(t.substring(h + 1, l)) : t.length;
      e[o] = {
        itemType: i,
        oldLen: a,
        newLen: c,
        ops: t.substring(u, f),
        charBank: t.substring(d, b)
      };
      if (i !== "Z") {
        k(e[o].ops.indexOf("|") === -1, "ops must has |");
        e[o].charBank = e[o].charBank === "" ? [] : e[o].charBank.split("|");
      }
      n = b;
    }
    return e;
  }
  function H(t) {
    var e = "";
    var n = Object.keys(t).sort();
    var r = 0;
    for (; r < n.length; r++) {
      var i = n[r];
      z(typeof i == "string", "pack: zoneId must be string");
      z(i !== "", "pack: zoneId cannot be empty string");
      if (r !== 0 && n[r] === n[r - 1]) {
        for (var o in t) {
          if (t.hasOwnProperty(o) && t[o].itemType === "Z") {
            t[o].charBank = "obfuscated " + t[o].charBank.length;
          }
        }
        z(false, "pack: zoneIds must be distinct zoneIds", false, {
          zoneIds: n,
          csMap: JSON.stringify(t)
        });
      }
      var s = t[i];
      (function (t, n, r, i, o, s, a) {
        z(t === "Z" || t === "R" || t === "C", "itemType error");
        if (t !== "Z") {
          o = o.join("|");
        }
        if (t !== "Z") {
          z(i.indexOf("|") === -1, "ops |");
        }
        var c = r - n;
        var u = c >= 0 ? ">" + E(c) : "<" + E(-c);
        e += (t !== "Z" ? "Z" : "") + t + (a === "0" ? "" : a) + ":" + E(n) + u + i;
        if (!s) {
          e += "#" + E(o.length);
        }
        e += "$" + o;
      })(s.itemType, s.oldLen, s.newLen, s.ops, s.charBank, r === n.length - 1, i);
    }
    return e;
  }
  var W = "clientside-";
  function $(t, e, n) {
    t.forEach(function (t) {
      if (t.attributes) {
        Object.entries(t.attributes).forEach(function (t) {
          if (!(n == null ? undefined : n.filterLocalAttributes) || !t[0].startsWith(W)) {
            e.putAttrib(t);
          }
        });
      }
    });
  }
  function K(t) {
    if (t) {
      var e = {};
      Object.keys(t).forEach(function (n) {
        if (!n.startsWith(W)) {
          e[n] = t[n];
        }
      });
      return e;
    }
  }
  var U = function () {
    function t(t, e, n = "\n", r, i) {
      this.zoneId = t;
      this.repText = n;
      this.apool = r;
      this.options = i;
      this.pointer = 0;
      this.builder = this.createBuilder();
      this.zoneType = e.zoneType || patchOperationConstants.patchTypes.Content;
      this.zoneId = e.zoneId || patchOperationConstants.zero;
      this.deltaOps = e.ops;
      $(this.deltaOps, r, i);
    }
    var e = t.prototype;
    e.getChangeset = function () {
      this.pointer = 0;
      if (this.deltaOps) {
        var e = this.deltaOps.length;
        if (this.builder) {
          for (var n = 0; n < e; n++) {
            var r = this.deltaOps[n];
            var i = deltaPatchOperations.getOpKind(r);
            if (!i) {
              return;
            }
            var o = r.attributes;
            if (this.options?.filterLocalAttributes) {
              o = K(r.attributes);
            }
            this.opTransform(i, r[i], o);
          }
          return this.builder.toString();
        }
      }
    };
    e.createBuilder = function () {
      var t;
      var e;
      var n;
      var r;
      var i;
      var o;
      var s;
      var a;
      var c;
      t = this.repText.length;
      e = this.zoneType;
      n = this.zoneId;
      if (e === undefined) {
        e = "Z";
      }
      if (n === undefined) {
        n = "0";
      }
      if ((r = e) === undefined) {
        r = "Z";
      }
      if ((i = n) === undefined) {
        i = "0";
      }
      r = r || "Z";
      o = D();
      s = N();
      a = M(r);
      return c = {
        keepOverOp: function (t) {
          c.keep(t.chars, t.lines);
        },
        keepOverOpWithNewAttributes: function (t, e, n) {
          c.keep(t.chars, t.lines, e, n);
        },
        keepOverOpWithoutAttribute: function (t, e, n) {
          c.keep(t.chars, t.lines, [[e, ""]], n);
        },
        keep: function (t, e, n, r) {
          s.opcode = "=";
          s.attribs = n && P("=", n, r) || "";
          s.chars = t;
          s.lines = e || 0;
          o.append(s);
          return c;
        },
        keepText: function (t, e, n) {
          o.appendOpWithText("=", t, e, n);
          return c;
        },
        insert: function (t, e, n) {
          if (r === "Z") {
            o.appendOpWithText("+", t, e, n);
          } else {
            o.append({
              opcode: "+",
              chars: t.length,
              attribs: e,
              lines: 0
            });
          }
          a.append(t);
          return c;
        },
        remove: function (t, e) {
          s.opcode = "-";
          s.attribs = "";
          s.chars = t;
          s.lines = e || 0;
          o.append(s);
          return c;
        },
        removeText: function (t) {
          o.appendOpWithText("-", t);
        },
        insertAText: function (t) {
          if (t.text.charAt(t.text.length - 1) !== "\n") {
            throw new S("insertAText: text must end in newline");
          }
          (function (t, e) {
            var n = j(t.attribs);
            var r = N();
            while (n.hasNext()) {
              n.next(r);
              if (n.hasNext()) {
                e.append(r);
              } else if (r.lines <= 1) {
                r.lines = 0;
                r.chars--;
                if (r.chars) {
                  e.append(r);
                }
              } else {
                var i = t.text.lastIndexOf("\n", t.text.length - 2) + 1;
                var o = t.text.length - i - 1;
                r.lines--;
                r.chars -= o + 1;
                e.append(r);
                r.lines = 0;
                r.chars = o;
                if (r.chars) {
                  e.append(r);
                }
              }
            }
          })(t, o);
          a.append(t.text.slice(0, -1));
          return c;
        },
        toChangeset: function () {
          if (!i) {
            throw new S("Changeset: zoneId should be non-trivial");
          }
          var t = {};
          t[i] = c.toUnpacked();
          return H(t);
        },
        toString: function () {
          if (!i) {
            throw new S("Changeset: zoneId should be non-trivial");
          }
          var t = {};
          t[i] = c.toUnpacked();
          return H(t);
        },
        toUnpacked: function () {
          o.endDocument();
          var e = t + o.getLengthChange();
          return {
            itemType: r,
            oldLen: t,
            newLen: e,
            ops: o.toString(),
            charBank: a.toResult()
          };
        }
      };
    };
    e.opTransform = function (t, e, n) {
      switch (t) {
        case patchOperationConstants.operationKind.INSERT:
          this.insert(e, n);
          break;
        case patchOperationConstants.operationKind.RETAIN:
          this.retain(e, n);
          break;
        case patchOperationConstants.operationKind.DELETE:
          this.delete(e);
      }
    };
    e.insert = function (t, e = {}) {
      var n = Object.entries(e);
      this.builder.insert(t, n, this.apool);
    };
    e.retain = function (t, e = {}) {
      var n = Object.entries(e);
      var r = this.repText.slice(this.pointer, this.pointer + t);
      if (r.length !== t) {
        throw Error("The content of the operation does not exist");
      }
      var i = r.match(/\n/g);
      var o = i && i.length;
      var s = r.lastIndexOf("\n");
      if (s > -1 && s !== r.length - 1) {
        var a = t - s - 1;
        this.builder.keep(t - a, o, n, this.apool);
        this.builder.keep(a, 0, n, this.apool);
      } else {
        this.builder.keep(t, o, n, this.apool);
      }
      this.pointer += t;
    };
    e.delete = function (t) {
      var e = this.repText.slice(this.pointer, this.pointer + t);
      if (e.length !== t) {
        throw Error("The deleted content does not exist");
      }
      var n = e.match(/\n/g);
      var r = n && n.length;
      var i = e.lastIndexOf("\n");
      if (i > -1 && i !== e.length - 1) {
        var o = t - i - 1;
        this.builder.remove(t - o, r || 0);
        this.builder.remove(o, 0);
      } else {
        this.builder.remove(t, r || 0);
      }
      this.pointer += t;
    };
    return t;
  }();
  var q = function () {
    function t(t, e, n, r, i) {
      this.zoneId = t;
      this.delta = e;
      this.apool = n;
      this.vectorIds = r;
      this.options = i;
      this.charBank = [];
      this.isForRow = p(t);
      this.zoneObj = {};
      this.oldLen = this.vectorIds.length;
      this.assembler = D();
      this.pointer = this.oldLen;
      $(e.ops, n, i);
    }
    var e = t.prototype;
    e.getChangeset = function () {
      var e = this.delta.ops.length;
      var n = 0;
      for (; n < e; n++) {
        var r = this.delta.ops[n];
        var i = deltaPatchOperations.getOpKind(r);
        if (!i) {
          return;
        }
        var o = r[i].id || r[i];
        var s = r.attributes;
        if (this.options?.filterLocalAttributes) {
          s = K(r.attributes);
        }
        this.opTransform(i, o, s);
      }
      return this.toChangeset();
    };
    e.opTransform = function (t, e, n) {
      switch (t) {
        case patchOperationConstants.operationKind.INSERT:
          this.insert(e, n);
          break;
        case patchOperationConstants.operationKind.RETAIN:
          this.retain(e, n);
          break;
        case patchOperationConstants.operationKind.DELETE:
          this.delete(e);
      }
    };
    e.insert = function (t, e = {}) {
      var n = P("=", Object.entries(e), this.apool);
      this.charBank.push(t);
      this.pointer += 1;
      this.append(n);
    };
    e.append = function (t) {
      this.assembler.append({
        opcode: "+",
        attribs: t,
        lines: 0,
        chars: 1
      });
    };
    e.delete = function (t) {
      this.assembler.append({
        opcode: "-",
        attribs: "",
        lines: 0,
        chars: t
      });
      this.pointer -= t;
    };
    e.retain = function (t, e = {}) {
      var n = P("=", Object.entries(e), this.apool);
      this.assembler.append({
        opcode: "=",
        attribs: n,
        lines: 0,
        chars: t
      });
    };
    e.toChangeset = function () {
      this.zoneObj[this.zoneId] = {
        itemType: this.isForRow ? patchOperationConstants.patchTypes.Row : patchOperationConstants.patchTypes.Column,
        oldLen: this.oldLen,
        newLen: this.pointer,
        ops: this.assembler.toString(),
        charBank: this.charBank
      };
      return H(this.zoneObj);
    };
    return t;
  }();
  function G(t) {
    if (t.putAttrib !== undefined) {
      return t;
    } else {
      return new A().fromJsonable(t);
    }
  }
  var Q = function () {
    function t(t) {
      this.props = t;
      this.zoneCs = [];
      var e = this.props;
      var n = e.deltaSet;
      var r = e.apool;
      var i = e.texts;
      var o = e.vectorReps;
      this.deltaSet = n;
      this.apool = G(r);
      this.texts = i;
      this.vectorReps = o;
    }
    var e = t.prototype;
    e.parseDeltaSet = function () {
      var e = Object.keys(this.deltaSet.deltas);
      var n = Object.values(this.deltaSet.deltas);
      var r = 0;
      for (; r < e.length; r++) {
        var i = e[r];
        var o = n[r][patchOperationConstants.zoneType];
        var s = n[r];
        var a = undefined;
        if (o === patchOperationConstants.patchTypes.Content) {
          var c = this.texts && this.texts[i];
          a = new U(i, s, c, this.apool, this.props.options);
        } else {
          var u = this.vectorReps?.[i] || [];
          a = new q(i, s, this.apool, u, this.props.options);
        }
        this.zoneCs.push(a.getChangeset());
      }
    };
    e.toChangeset = function () {
      var t = this;
      if (this.deltaSet && (this.parseDeltaSet(), this.zoneCs.length)) {
        return this.zoneCs.reduce(function (e, n) {
          var r;
          var i;
          var o;
          var s;
          var a;
          var c;
          r = t.apool;
          if (i === undefined) {
            i = false;
          }
          o = e;
          s = n;
          a = r;
          if ((c = i) === undefined) {
            c = false;
          }
          return H(function (t, e, n, r) {
            function i(t, e, i) {
              if (!e) {
                return i;
              }
              if (!i) {
                return e;
              }
              var o = e.oldLen;
              k(e.newLen === i.oldLen, "mismatched composition");
              var s = i.newLen;
              var a = V(e.charBank);
              var c = V(i.charBank);
              var u = M(e.itemType);
              var l = function (t, e, n, r, i) {
                var o = j(t, 0);
                var s = j(n, 0);
                var a = D();
                var c = N();
                var u = N();
                var l = N();
                while (c.opcode || o.hasNext() || u.opcode || s.hasNext()) {
                  if (!c.opcode && o.hasNext()) {
                    o.next(c);
                  }
                  if (!u.opcode && s.hasNext()) {
                    s.next(u);
                  }
                  i(c, u, l);
                  if (l.opcode) {
                    a.append(l);
                    l.opcode = "";
                  }
                }
                a.endDocument();
                return a.toString();
              }(e.ops, 0, i.ops, 0, function (t, e, i) {
                var o = t.opcode;
                var s = e.opcode;
                if (o === "+" && s === "-") {
                  a.skip(Math.min(t.chars, e.chars));
                }
                (function (t, e, n, r, i = false) {
                  if (t.opcode === "-") {
                    L(t, n);
                    t.opcode = "";
                  } else if (t.opcode) {
                    switch (e.opcode) {
                      case "-":
                        if (e.chars <= t.chars) {
                          if (t.opcode === "=") {
                            n.opcode = "-";
                            n.chars = e.chars;
                            n.lines = e.lines;
                            n.attribs = i ? e.attribs : "";
                          }
                          t.chars -= e.chars;
                          t.lines -= e.lines;
                          e.opcode = "";
                          if (!t.chars) {
                            t.opcode = "";
                          }
                        } else {
                          if (t.opcode === "=") {
                            n.opcode = "-";
                            n.chars = t.chars;
                            n.lines = t.lines;
                            n.attribs = i ? e.attribs : "";
                          }
                          e.chars -= t.chars;
                          e.lines -= t.lines;
                          t.opcode = "";
                        }
                        break;
                      case "+":
                        L(e, n);
                        e.opcode = "";
                        break;
                      case "=":
                        if (e.chars <= t.chars) {
                          n.opcode = t.opcode;
                          n.chars = e.chars;
                          n.lines = e.lines;
                          n.attribs = J(t.attribs, e.attribs, t.opcode === "=", r);
                          e.opcode = "";
                          t.chars -= e.chars;
                          t.lines -= e.lines;
                          if (!t.chars) {
                            t.opcode = "";
                          }
                        } else {
                          n.opcode = t.opcode;
                          n.chars = t.chars;
                          n.lines = t.lines;
                          n.attribs = J(t.attribs, e.attribs, t.opcode === "=", r);
                          t.opcode = "";
                          e.chars -= t.chars;
                          e.lines -= t.lines;
                        }
                        break;
                      case "":
                        L(t, n);
                        t.opcode = "";
                    }
                  } else {
                    L(e, n);
                    e.opcode = "";
                  }
                })(t, e, i, n, r);
                if (i.opcode === "+") {
                  if (s === "+") {
                    u.append(c.take(i.chars));
                  } else {
                    u.append(a.take(i.chars));
                  }
                }
              });
              var h = u.toResult();
              return {
                itemType: e.itemType,
                oldLen: o,
                newLen: s,
                ops: l,
                charBank: h
              };
            }
            if (r === undefined) {
              r = false;
            }
            var o;
            var s = {};
            for (var a in t) {
              if (t.hasOwnProperty(a)) {
                if (e[a]) {
                  k(t[a].itemType === e[a].itemType, "cs1 and cs2 itemType error");
                }
                if ((o = i(a, t[a], e[a] || null)) !== null) {
                  s[a] = o;
                }
              }
            }
            for (var a in e) {
              if (!!e.hasOwnProperty(a) && !(a in t) && (o = i(a, null, e[a])) !== null) {
                s[a] = o;
              }
            }
            return s;
          }(F(o), F(s), a, c));
        });
      } else {
        return "";
      }
    };
    return t;
  }();
  function X(t) {
    return new Q(t).toChangeset();
  }
  var deltaTypeCheckers = require("delta-type-checkers") /*id: 914545*/;
  let tt = t => {
    if (!t.apool || !t.initialAttributedTexts) {
      return {
        clientVars: t,
        hasInlineBlock: false
      };
    }
    let {
      apool: e,
      initialAttributedTexts: n
    } = t;
    let {
      nextNum: i,
      numToAttrib: o
    } = e;
    let {
      attribs: s
    } = n;
    let a = ["inlineblock", "inline-component"];
    let c = {};
    let u = {};
    let l = {};
    let h = 0;
    let p = false;
    Object.keys(o).forEach(t => {
      let e = Number(t);
      let n = o[t][0] + o[t][1];
      if (!p && a.includes(o[t][0])) {
        p = true;
      }
      if (o[t][0] === "inline-component" && u[n] !== undefined) {
        l[e] = u[n];
        h++;
        return;
      }
      l[e] = e - h;
      c[e - h] = o[t];
      u[n] = e - h;
    });
    if (!h) {
      return {
        clientVars: t,
        hasInlineBlock: p
      };
    }
    let f = deepCloneWrapper_1.deepClone(t);
    let d = s[0].replace(/\*[0-9a-z\*]+\+/g, t => {
      let e = {};
      return t.replace(/\*[0-9a-z]+/g, t => {
        let n = l[parseInt(t.slice(1), 36)].toString(36);
        if (e[n]) {
          return "";
        } else {
          e[n] = true;
          return `*${n}`;
        }
      });
    });
    f.apool.numToAttrib = c;
    f.apool.nextNum = i - h;
    f.initialAttributedTexts.attribs[0] = d;
    return {
      clientVars: f,
      hasInlineBlock: p
    };
  };
  let te = t => {
    if (t.get(zeroConstantModule.versionValue)) {
      t.get(zeroConstantModule.versionValue).insert("\n", {
        fixEnter: "true"
      });
    } else {
      let e = new contentDeltaClass_1.ContentDelta().insertEnter({
        fixEnter: "true"
      });
      t.add(e);
    }
  };
  let tn = (t, e = zeroConstantModule.versionValue) => {
    var n;
    let {
      ops: r
    } = t.get(e);
    let i = r.length - 1;
    if (r[i].insert === "\n" && ((n = r[i].attributes) == null ? undefined : n.fixEnter)) {
      t = new deltaPatchOperations.DeltaSet({
        [e]: new contentDeltaClass_1.ContentDelta({
          zoneId: e,
          ops: r.slice(0, -1)
        })
      });
    }
    return t;
  };
  let tr = t => {
    let e = tt(t).clientVars;
    let n = function (t, e) {
      var n = t.attribs;
      var r = t.cols;
      var i = t.rows;
      var o = t.text;
      var s = G(e);
      var a = new deltaPatchOperations.DeltaSet({});
      var c = Object.keys(n);
      var u = 0;
      for (; u < c.length; u++) {
        var d = c[u];
        var v = n[d];
        var g = (r == null ? undefined : r[d]) || (i == null ? undefined : i[d]) || o[d];
        var m = function (t, e, n, r) {
          var i = p(t) || f(t);
          var o = i ? patchOperationConstants.cellType[t.substr(0, 2)] : patchOperationConstants.cellType.content;
          var s = [];
          var a = null;
          var c = j(e);
          var u = 0;
          while (c.hasNext()) {
            (function () {
              var t = c.next();
              var e = {};
              var i = t.attribs;
              var o = t.chars;
              var l = t.opcode;
              if (i) {
                Z(i, function (t) {
                  e[r.getAttribKey(t)] = r.getAttribValue(t);
                });
              }
              if (l === "+") {
                if (Array.isArray(n)) {
                  n.slice(u, u + o).forEach(function (t) {
                    var n = {
                      insert: {
                        id: t
                      }
                    };
                    if (Object.keys(e).length) {
                      n.attributes = e;
                    }
                    s.push(n);
                    u += 1;
                  });
                } else {
                  var h = n.substr(u, o);
                  var p = {
                    insert: h
                  };
                  if (Object.keys(e).length) {
                    p.attributes = e;
                  }
                  if (a && p.attributes && function (t, e) {
                    if (t && e) {
                      var n = Object.keys(t);
                      var r = Object.keys(e);
                      return n.length === r.length && n.every(function (n) {
                        return t[n] === e[n];
                      });
                    }
                    return t === e;
                  }(p.attributes, a.attributes)) {
                    a.insert += p.insert;
                  } else {
                    s.push(p);
                    a = p;
                  }
                  u += h.length;
                }
              }
            })();
          }
          if (i) {
            return new b({
              zoneId: t,
              zoneType: o,
              ops: s
            });
          } else {
            return new contentDeltaClass_1.ContentDelta({
              zoneId: t,
              ops: s
            });
          }
        }(d, v, g, s);
        a.add(d, m);
      }
      return a;
    }(e.initialAttributedTexts, e.apool);
    te(n);
    return tn(n);
  };
  let ti = t => tr(t).get(zeroConstantModule.versionValue);
  let to = (t, e) => {
    let n = {};
    let r = 0;
    let i = new Set();
    let o = Object.keys(t.deltas);
    let s = Object.values(t.deltas);
    for (let t = 0; t < o.length; t++) {
      for (let o of s[t].ops) {
        if (o.attributes) {
          for (let [t, s] of Object.entries(o.attributes)) {
            if ((e == null ? undefined : e.filterLocalAttributes) && t.startsWith("clientside-")) {
              continue;
            }
            let o = `${t},${s}`;
            if (!i.has(o)) {
              i.add(o);
              n[r++] = [t, s];
            }
          }
        }
      }
    }
    return {
      numToAttrib: n,
      nextNum: r
    };
  };
  let ts = t => {
    if (!t) {
      return null;
    }
    let {
      cs: e,
      apool: n
    } = t;
    return {
      zone_changesets: {
        0: e
      },
      apool: n
    };
  };
  let ta = t => {
    if (!t) {
      return null;
    }
    let {
      zone_changesets: e,
      apool: n
    } = t;
    let r = e["0"];
    if (isUndefinedCheck.isUndefined(r)) {
      throw Error("Bad text zone change set, no main zone with id '0'");
    }
    return {
      cs: r,
      apool: n
    };
  };
  let tc = ({
    base: t,
    delta: e
  }) => {
    let n = new deltaPatchOperations.DeltaSet();
    n.add(zeroConstantModule.versionValue, e);
    let r = to(n, {
      filterLocalAttributes: true
    });
    return {
      cs: X({
        deltaSet: n,
        apool: r,
        texts: t.initialAttributedTexts.text,
        options: {
          filterLocalAttributes: true
        }
      }),
      apool: r
    };
  };
  let tu = (t, ...e) => {
    let n = null;
    for (let t of e) {
      if (!t) {
        continue;
      }
      let e = tf(t);
      n = n ? n.compose(e) : e;
    }
    if (n) {
      return tc({
        base: t,
        delta: n
      });
    } else {
      return null;
    }
  };
  let tl = t => {
    if (deltaTypeCheckers.isDeltaSet(t)) {
      return t;
    }
    let e = new deltaPatchOperations.DeltaSet();
    e.add(zeroConstantModule.versionValue, t);
    return e;
  };
  let th = t => {
    let {
      apool: e,
      initialAttributedText: n
    } = function (t, e) {
      var n;
      var r;
      var i;
      var o;
      var s;
      var a;
      var l = {};
      var p = 0;
      var f = new Set();
      var d = Object.keys(t.deltas);
      var b = Object.values(t.deltas);
      var v = 0;
      for (; v < d.length; v++) {
        var g = b[v];
        try {
          n = undefined;
          var y = m(g.ops);
          var T = y.next();
          for (; !T.done; T = y.next()) {
            var w = T.value;
            if (w.attributes) {
              try {
                i = undefined;
                var S = m(Object.entries(w.attributes));
                var k = S.next();
                for (; !k.done; k = S.next()) {
                  var A = x(k.value, 2);
                  var N = A[0];
                  var O = A[1];
                  if (!(e == null ? undefined : e.filterLocalAttributes) || !N.startsWith(W)) {
                    var L = N + "," + O;
                    if (!f.has(L)) {
                      f.add(L);
                      l[p++] = [N, O];
                    }
                  }
                }
              } catch (t) {
                i = {
                  error: t
                };
              } finally {
                try {
                  if (k && !k.done && (o = S.return)) {
                    o.call(S);
                  }
                } finally {
                  if (i) {
                    throw i.error;
                  }
                }
              }
            }
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (T && !T.done && (r = y.return)) {
              r.call(y);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
      var C = {
        numToAttrib: l,
        nextNum: p
      };
      var z = F(X({
        deltaSet: t,
        apool: C,
        options: e
      }));
      var j = {
        cols: {},
        rows: {},
        text: {},
        attribs: {}
      };
      try {
        var E = m(Object.entries(z));
        var I = E.next();
        for (; !I.done; I = E.next()) {
          var _ = x(I.value, 2);
          var Z = _[0];
          var P = _[1];
          switch (P.itemType) {
            case "Z":
              j.text[Z] = P.charBank;
              break;
            case "C":
              j.cols[Z] = P.charBank;
              break;
            case "R":
              j.rows[Z] = P.charBank;
          }
          j.attribs[Z] = P.ops;
        }
      } catch (t) {
        s = {
          error: t
        };
      } finally {
        try {
          if (I && !I.done && (a = E.return)) {
            a.call(E);
          }
        } finally {
          if (s) {
            throw s.error;
          }
        }
      }
      var B = {
        initialAttributedTexts: j,
        apool: C
      };
      if (e == null ? undefined : e.filterInitialAttributedText) {
        delete j.rows;
        delete j.cols;
      } else {
        B.initialAttributedText = {
          attribs: j.attribs[patchOperationConstants.zero] ?? {},
          text: j.text[patchOperationConstants.zero] ?? {}
        };
      }
      return B;
    }(tl(t), {
      filterLocalAttributes: true
    });
    return {
      apool: e,
      initialAttributedTexts: {
        text: {
          [zeroConstantModule.versionValue]: n.text
        },
        attribs: {
          [zeroConstantModule.versionValue]: n.attribs
        }
      }
    };
  };
  let tp = t => {
    let {
      cs: e,
      apool: n
    } = t;
    return function (t, e) {
      var n = Object.keys(t);
      var r = G(e);
      var i = new deltaPatchOperations.DeltaSet({});
      var o = 0;
      for (; o < n.length; o++) {
        var s = n[o];
        var a = F(t[s])[s];
        var c = function (t, e, n, r) {
          var i = p(t) || f(t);
          var o = i ? patchOperationConstants.cellType[t.substr(0, 2)] : patchOperationConstants.cellType.content;
          var s = i ? new b({
            zoneId: t,
            zoneType: o
          }) : new contentDeltaClass_1.ContentDelta({
            zoneId: t
          });
          var a = j(e);
          var c = 0;
          while (a.hasNext()) {
            (function () {
              var t = a.next();
              var e = {};
              var i = t.attribs;
              var o = t.chars;
              var u = t.opcode;
              if (i) {
                Z(i, function (t) {
                  e[r.getAttribKey(t)] = r.getAttribValue(t);
                });
              }
              if (u === "=") {
                s.retain(o, e);
              }
              if (u === "-") {
                s.delete(o);
              }
              if (u === "+") {
                if (Array.isArray(n)) {
                  n.slice(c, c + o).forEach(function (t) {
                    s.insert(t, e);
                    c += 1;
                  });
                } else {
                  var l = n.substr(c, o);
                  s.insert(l, e);
                  c += l.length;
                }
              }
            })();
          }
          return s;
        }(s, a.ops, a.charBank, r);
        i = i.compose(c);
      }
      return i;
    }(function (t) {
      var e = F(t);
      var n = {};
      for (var r in e) {
        if (e.hasOwnProperty(r)) {
          var i = e[r];
          var o = i.oldLen;
          var s = i.newLen;
          var a = i.ops;
          var c = i.itemType;
          var u = i.charBank;
          n[r] = function (t, e, n, r, i, o) {
            var s;
            if (i === undefined) {
              i = "0";
            }
            if (o === undefined) {
              o = "Z";
            }
            return H(((s = {})[i] = {
              charBank: r,
              itemType: o,
              newLen: e,
              oldLen: t,
              ops: n
            }, s));
          }(o, s, a, u, r, c);
        }
      }
      return n;
    }(e), n);
  };
  let tf = t => tp(t).get(zeroConstantModule.versionValue);
  let td = t => t.ops.every(t => !isUndefinedCheck.isUndefined(t.retain) && isEmptyUtil.isEmpty(objectExcludeFilterUtil.filterObjectExclude(t.attributes, (t, e) => e.startsWith("clientside-"))));
  let tb = t => arraySumByMatcher.sumByMatcher(t.ops, deltaPatchOperations.getOpLength);
  let tv = ({
    target: t,
    start: e,
    end: n
  }) => {
    let r = new contentDeltaClass_1.ContentDelta();
    let o = 0;
    for (let s of t.ops) {
      let t = s[patchOperationConstants.operationKind.INSERT];
      if (isUndefinedCheck.isUndefined(t)) {
        throw Error("Cannot slice ZoneDelta not only contains insert op");
      }
      let a = t.length;
      let c = o;
      let u = o + a;
      if (u <= e || c >= n) {
        o += a;
        continue;
      }
      let l = t.slice(Math.max(e - c, 0), a - Math.max(u - n, 0));
      if (!l) {
        o += a;
        continue;
      }
      r.insert(l, s.attributes);
      o += a;
    }
    return r;
  };
  let tg = t => !!t && isObjectOrFunction_1_1.isObjectOrFunction(t) && "initialAttributedTexts" in t && "apool" in t;
  let ty = t => !!t && isObjectOrFunction_1_1.isObjectOrFunction(t) && "zone_changesets" in t && "apool" in t;
  require.d(exports, {
    unpackZoneChangesets: function () {
      return ta;
    },
    isClientSideOnly: function () {
      return td;
    },
    packToZoneChangesets: function () {
      return ts;
    },
    composeDeltas: function () {
      return tu;
    },
    isInitialAttributedTexts: function () {
      return tg;
    },
    sliceZoneDelta: function () {
      return tv;
    },
    deltaSetToInitialTexts: function () {
      return th;
    },
    getContentDelta: function () {
      return ti;
    },
    isZoneChangesets: function () {
      return ty;
    },
    createChangeset: function () {
      return tc;
    },
    getTotalOpLength: function () {
      return tb;
    },
    changesetToDelta: function () {
      return tf;
    }
  });
}