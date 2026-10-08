// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cA' to 'convertDeltaSet'
// - Renamed export 'Q7' to 'getInitialAttributedTexts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 69805.3aa70c1d.js
         * chunkId: 69805
         * moduleId: 218394
         */
module.exports = function (module, exports, require) {
  var deltaSetOperations = require("delta-set-operations") /*id: 454622*/;
  var zoneStructConsts = require("zone-struct-consts") /*id: 750205*/;
  function o(t) {
    return t.indexOf("rs") === 0 && t.length === 34;
  }
  var typescriptHelperUtils = require("typescript-helper-utils") /*id: 669540*/;
  require("diff-match-patch") /*id: 183089*/;
  var a = function (t) {
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
    typescriptHelperUtils.extendsClass(e, t);
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
  }(deltaSetOperations.Delta);
  var u = function (t) {
    function e(e) {
      return t.call(this, typescriptHelperUtils.objectAssign({
        zoneType: zoneStructConsts.structTypes.Row
      }, e)) || this;
    }
    typescriptHelperUtils.extendsClass(e, t);
    return e;
  }(a);
  var c = function (t) {
    function e(e) {
      return t.call(this, typescriptHelperUtils.objectAssign({
        zoneType: zoneStructConsts.structTypes.Column
      }, e)) || this;
    }
    typescriptHelperUtils.extendsClass(e, t);
    return e;
  }(a);
  deltaSetOperations.Delta.registerCreator(zoneStructConsts.structTypes.Row, u);
  deltaSetOperations.Delta.registerCreator(zoneStructConsts.structTypes.Column, c);
  var contentDeltaClass = require("content-delta-class") /*id: 381475*/;
  function f(t) {
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
  function p(t, e) {
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
  function l(t, e) {
    return (l = Object.setPrototypeOf || {
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
  function d(t, e) {
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
  var b = function (t) {
    function e(e, n = false) {
      var r = t.call(this, e) || this;
      r.silence = n;
      return r;
    }
    (function (t, e) {
      function n() {
        this.constructor = t;
      }
      l(t, e);
      t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
    })(e, t);
    return e;
  }(Error);
  function v(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = d(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new b("Failed assertion: " + e, n);
    }
  }
  var y = function () {
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
          v(e in t.numToAttrib, "AttribPool: " + e + " is not in this.numToAttrib");
        }
        var n = {};
        for (var r in t.numToAttrib) {
          if (t.numToAttrib.hasOwnProperty(r)) {
            v(Number(r) >= 0 && Number(r) < t.nextNum, "AttribPool: " + r + " is not in range [0," + t.nextNum + "]");
            var i = t.numToAttrib[r];
            v(Object.prototype.toString.call(i) === "[object Array]", "AttribPool: attrib should be an array");
            v(i.length === 2, "AttribPool: attrib length should be 2");
            v(typeof i[0] == "string", "AttribPool: key should be string");
            v(typeof i[1] == "string", "AttribPool: value should be string");
            v(!(String(i) in n), "AttribPool: attrib was already seen");
            n[String(i)] = true;
            v(t.attribToNum[String(i)] === Number(r), "AttribPool: attribToNum does not match");
          }
        }
        for (var o in t.attribToNum) {
          if (t.attribToNum.hasOwnProperty(o)) {
            v(o in n, "AttribPool: attr was not seen");
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
  function g(t) {
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
  function m(t) {
    t.opcode = "";
    t.chars = 0;
    t.lines = 0;
    t.attribs = "";
  }
  function T(t, e) {
    e.opcode = t.opcode;
    e.chars = t.chars;
    e.lines = t.lines;
    e.attribs = t.attribs;
  }
  var x = function () {
    function t(t, e = 0) {
      this.opStr = t;
      this.index = e;
      this.op = g();
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
      m(e);
      return e;
    };
    return t;
  }();
  function k(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = d(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new b("Failed assertion: " + e, n);
    }
  }
  function A(t, e) {
    var n;
    var r;
    if (e === undefined) {
      e = 0;
    }
    n = t || "";
    if ((r = e) === undefined) {
      r = 0;
    }
    return new x(n || "", r);
  }
  function O(t) {
    return t.toString(36).toLowerCase();
  }
  function w(t) {
    return parseInt(t, 36);
  }
  var z = /\*([0-9a-z]+)/g;
  function S(t, e, n) {
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
            r.push("*" + O(n.putAttrib(o)));
          }
        }
        return r.join("");
      }
    }
    return "";
  }
  function j() {
    var t;
    t = [];
    var e = {
      append: function (e) {
        t.push(e.attribs);
        if (e.lines) {
          t.push("|", O(e.lines));
        }
        t.push(e.opcode);
        t.push(O(e.chars));
      },
      toString: function () {
        return t.join("");
      },
      clear: function () {
        t.length = 0;
      }
    };
    var n = g();
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
            T(t, n);
          }
        }
      },
      toString: function () {
        i();
        return e.toString();
      },
      clear: function () {
        e.clear();
        m(n);
      },
      endDocument: function () {
        i(true);
      }
    };
  }
  function N() {
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
  function I() {
    var t = j();
    var e = j();
    var n = j();
    var r = N();
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
    function u(r) {
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
      append: u,
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
        var i = g(t);
        i.attribs = S(t, n, r);
        var o = e.lastIndexOf("\n");
        if (o < 0) {
          i.chars = e.length;
        } else {
          i.chars = o + 1;
          i.lines = e.match(/\n/g).length;
          u(i);
          i.chars = e.length - (o + 1);
        }
        i.lines = 0;
        u(i);
      },
      getLengthChange: function () {
        return o;
      }
    };
  }
  function E(t) {
    if (typeof t == "string") {
      return function (t) {
        var e = 0;
        var n = t.split("\n").length - 1;
        function r(t) {
          v(t <= i(), "!(n <= remaining())", false, {
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
          k(t <= r(), "!(n <= remaining())", false, {
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
  function L(t, e, n, r) {
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
      s.push(r.getAttrib(w(e)));
      return "";
    });
    e.replace(/\*([0-9a-z]+)/g, function (t, e) {
      var i = r.getAttrib(w(e));
      var o = false;
      var a = 0;
      for (; a < s.length; a++) {
        var u = s[a];
        if (u[0] === i[0]) {
          if (i[1] || n) {
            u[1] = i[1];
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
    var a = N();
    try {
      var u = function (t) {
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
      var c = u.next();
      for (; !c.done; c = u.next()) {
        var h = c.value;
        a.append("*");
        a.append(O(r.putAttrib(h)));
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (c && !c.done && (o = u.return)) {
          o.call(u);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a.toString();
  }
  function C(t) {
    v(t, "itemType should be defined");
    if (t === "Z") {
      return N();
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
  function _(t) {
    var e = {};
    var n = 0;
    while (n < t.length) {
      var r = /^(Z|ZR|ZC)([0-9a-z]*):([0-9a-z]+)([><])([0-9a-z]+)|/.exec(t.substring(n));
      if (!r || !r[0]) {
        throw new b("Changeset: Not a changeset: " + t + " at position " + n);
      }
      var i = r[1].charAt(r[1].length - 1);
      var o = r[2] === "" ? "0" : r[2];
      if (o in e) {
        for (var s in e) {
          if (e.hasOwnProperty(s) && e[s].itemType === "Z") {
            e[s].charBank = "obfuscated " + e[s].charBank.length;
          }
        }
        v(false, "zoneIds should be unique", false, {
          zoneId: o,
          cssObj: JSON.stringify(e)
        });
      }
      if (o === "0") {
        v(i === "Z", "itemType must be Z");
      }
      var a = w(r[3]);
      var u = a + (r[4] === ">" ? 1 : -1) * w(r[5]);
      var c = n + r[0].length;
      var h = t.indexOf("$", n);
      var f = t.indexOf("#", n);
      var p = f >= 0 && h >= 0 && f < h;
      var l = t.length;
      if (h >= 0) {
        l = h;
      }
      if (p) {
        l = f;
      }
      var d = h >= 0 ? h + 1 : t.length;
      var y = p ? d + w(t.substring(f + 1, h)) : t.length;
      e[o] = {
        itemType: i,
        oldLen: a,
        newLen: u,
        ops: t.substring(c, l),
        charBank: t.substring(d, y)
      };
      if (i !== "Z") {
        v(e[o].ops.indexOf("|") === -1, "ops must has |");
        e[o].charBank = e[o].charBank === "" ? [] : e[o].charBank.split("|");
      }
      n = y;
    }
    return e;
  }
  function P(t) {
    var e = "";
    var n = Object.keys(t).sort();
    var r = 0;
    for (; r < n.length; r++) {
      var i = n[r];
      k(typeof i == "string", "pack: zoneId must be string");
      k(i !== "", "pack: zoneId cannot be empty string");
      if (r !== 0 && n[r] === n[r - 1]) {
        for (var o in t) {
          if (t.hasOwnProperty(o) && t[o].itemType === "Z") {
            t[o].charBank = "obfuscated " + t[o].charBank.length;
          }
        }
        k(false, "pack: zoneIds must be distinct zoneIds", false, {
          zoneIds: n,
          csMap: JSON.stringify(t)
        });
      }
      var s = t[i];
      (function (t, n, r, i, o, s, a) {
        k(t === "Z" || t === "R" || t === "C", "itemType error");
        if (t !== "Z") {
          o = o.join("|");
        }
        if (t !== "Z") {
          k(i.indexOf("|") === -1, "ops |");
        }
        var u = r - n;
        var c = u >= 0 ? ">" + O(u) : "<" + O(-u);
        e += (t !== "Z" ? "Z" : "") + t + (a === "0" ? "" : a) + ":" + O(n) + c + i;
        if (!s) {
          e += "#" + O(o.length);
        }
        e += "$" + o;
      })(s.itemType, s.oldLen, s.newLen, s.ops, s.charBank, r === n.length - 1, i);
    }
    return e;
  }
  var R = "clientside-";
  function D(t, e) {
    var n = t.attribs;
    var s = t.cols;
    var u = t.rows;
    var c = t.text;
    var f = M(e);
    var p = new deltaSetOperations.DeltaSet({});
    var l = Object.keys(n);
    var d = 0;
    for (; d < l.length; d++) {
      var b = l[d];
      var v = n[b];
      var y = (s == null ? undefined : s[b]) || (u == null ? undefined : u[b]) || c[b];
      var g = function (t, e, n, r) {
        var s = o(t) || t.indexOf("cs") === 0 && t.length === 34;
        var u = s ? zoneStructConsts.structKeyMap[t.substr(0, 2)] : zoneStructConsts.structKeyMap.content;
        var c = [];
        var f = null;
        var p = A(e);
        var l = 0;
        while (p.hasNext()) {
          (function () {
            var t = p.next();
            var e = {};
            var i = t.attribs;
            var o = t.chars;
            var s = t.opcode;
            if (i) {
              (function (t, e) {
                var n = t.indexOf("$");
                if (n < 0) {
                  n = t.length;
                }
                var r = t.substring(0, n).match(z) || [];
                var i = 0;
                for (; i < r.length; i++) {
                  e(w(r[i].substring(1)));
                }
              })(i, function (t) {
                e[r.getAttribKey(t)] = r.getAttribValue(t);
              });
            }
            if (s === "+") {
              if (Array.isArray(n)) {
                n.slice(l, l + o).forEach(function (t) {
                  var n = {
                    insert: {
                      id: t
                    }
                  };
                  if (Object.keys(e).length) {
                    n.attributes = e;
                  }
                  c.push(n);
                  l += 1;
                });
              } else {
                var a = n.substr(l, o);
                var u = {
                  insert: a
                };
                if (Object.keys(e).length) {
                  u.attributes = e;
                }
                if (f && u.attributes && function (t, e) {
                  if (t && e) {
                    var n = Object.keys(t);
                    var r = Object.keys(e);
                    return n.length === r.length && n.every(function (n) {
                      return t[n] === e[n];
                    });
                  }
                  return t === e;
                }(u.attributes, f.attributes)) {
                  f.insert += u.insert;
                } else {
                  c.push(u);
                  f = u;
                }
                l += a.length;
              }
            }
          })();
        }
        if (s) {
          return new a({
            zoneId: t,
            zoneType: u,
            ops: c
          });
        } else {
          return new contentDeltaClass.ContentDelta({
            zoneId: t,
            ops: c
          });
        }
      }(b, v, y, f);
      p.add(b, g);
    }
    return p;
  }
  function Z(t, e, n) {
    t.forEach(function (t) {
      if (t.attributes) {
        Object.entries(t.attributes).forEach(function (t) {
          if (!(n == null ? undefined : n.filterLocalAttributes) || !t[0].startsWith(R)) {
            e.putAttrib(t);
          }
        });
      }
    });
  }
  function B(t) {
    if (t) {
      var e = {};
      Object.keys(t).forEach(function (n) {
        if (!n.startsWith(R)) {
          e[n] = t[n];
        }
      });
      return e;
    }
  }
  var H = function () {
    function t(t, e, n = "\n", r, o) {
      this.zoneId = t;
      this.repText = n;
      this.apool = r;
      this.options = o;
      this.pointer = 0;
      this.builder = this.createBuilder();
      this.zoneType = e.zoneType || zoneStructConsts.structTypes.Content;
      this.zoneId = e.zoneId || zoneStructConsts.defaultZero;
      this.deltaOps = e.ops;
      Z(this.deltaOps, r, o);
    }
    var e = t.prototype;
    e.getChangeset = function () {
      this.pointer = 0;
      if (this.deltaOps) {
        var e = this.deltaOps.length;
        if (this.builder) {
          for (var n = 0; n < e; n++) {
            var i = this.deltaOps[n];
            var o = deltaSetOperations.getOperationType(i);
            if (!o) {
              return;
            }
            var s = i.attributes;
            if (this.options?.filterLocalAttributes) {
              s = B(i.attributes);
            }
            this.opTransform(o, i[o], s);
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
      var u;
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
      o = I();
      s = g();
      a = C(r);
      return u = {
        keepOverOp: function (t) {
          u.keep(t.chars, t.lines);
        },
        keepOverOpWithNewAttributes: function (t, e, n) {
          u.keep(t.chars, t.lines, e, n);
        },
        keepOverOpWithoutAttribute: function (t, e, n) {
          u.keep(t.chars, t.lines, [[e, ""]], n);
        },
        keep: function (t, e, n, r) {
          s.opcode = "=";
          s.attribs = n && S("=", n, r) || "";
          s.chars = t;
          s.lines = e || 0;
          o.append(s);
          return u;
        },
        keepText: function (t, e, n) {
          o.appendOpWithText("=", t, e, n);
          return u;
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
          return u;
        },
        remove: function (t, e) {
          s.opcode = "-";
          s.attribs = "";
          s.chars = t;
          s.lines = e || 0;
          o.append(s);
          return u;
        },
        removeText: function (t) {
          o.appendOpWithText("-", t);
        },
        insertAText: function (t) {
          if (t.text.charAt(t.text.length - 1) !== "\n") {
            throw new b("insertAText: text must end in newline");
          }
          (function (t, e) {
            var n = A(t.attribs);
            var r = g();
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
          return u;
        },
        toChangeset: function () {
          if (!i) {
            throw new b("Changeset: zoneId should be non-trivial");
          }
          var t = {};
          t[i] = u.toUnpacked();
          return P(t);
        },
        toString: function () {
          if (!i) {
            throw new b("Changeset: zoneId should be non-trivial");
          }
          var t = {};
          t[i] = u.toUnpacked();
          return P(t);
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
        case zoneStructConsts.operationTypes.INSERT:
          this.insert(e, n);
          break;
        case zoneStructConsts.operationTypes.RETAIN:
          this.retain(e, n);
          break;
        case zoneStructConsts.operationTypes.DELETE:
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
  var F = function () {
    function t(t, e, n, r, i) {
      this.zoneId = t;
      this.delta = e;
      this.apool = n;
      this.vectorIds = r;
      this.options = i;
      this.charBank = [];
      this.isForRow = o(t);
      this.zoneObj = {};
      this.oldLen = this.vectorIds.length;
      this.assembler = I();
      this.pointer = this.oldLen;
      Z(e.ops, n, i);
    }
    var e = t.prototype;
    e.getChangeset = function () {
      var e = this.delta.ops.length;
      var n = 0;
      for (; n < e; n++) {
        var i = this.delta.ops[n];
        var o = deltaSetOperations.getOperationType(i);
        if (!o) {
          return;
        }
        var s = i[o].id || i[o];
        var a = i.attributes;
        if (this.options?.filterLocalAttributes) {
          a = B(i.attributes);
        }
        this.opTransform(o, s, a);
      }
      return this.toChangeset();
    };
    e.opTransform = function (t, e, n) {
      switch (t) {
        case zoneStructConsts.operationTypes.INSERT:
          this.insert(e, n);
          break;
        case zoneStructConsts.operationTypes.RETAIN:
          this.retain(e, n);
          break;
        case zoneStructConsts.operationTypes.DELETE:
          this.delete(e);
      }
    };
    e.insert = function (t, e = {}) {
      var n = S("=", Object.entries(e), this.apool);
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
      var n = S("=", Object.entries(e), this.apool);
      this.assembler.append({
        opcode: "=",
        attribs: n,
        lines: 0,
        chars: t
      });
    };
    e.toChangeset = function () {
      this.zoneObj[this.zoneId] = {
        itemType: this.isForRow ? zoneStructConsts.structTypes.Row : zoneStructConsts.structTypes.Column,
        oldLen: this.oldLen,
        newLen: this.pointer,
        ops: this.assembler.toString(),
        charBank: this.charBank
      };
      return P(this.zoneObj);
    };
    return t;
  }();
  function M(t) {
    if (t.putAttrib !== undefined) {
      return t;
    } else {
      return new y().fromJsonable(t);
    }
  }
  var K = function () {
    function t(t) {
      this.props = t;
      this.zoneCs = [];
      var e = this.props;
      var n = e.deltaSet;
      var r = e.apool;
      var i = e.texts;
      var o = e.vectorReps;
      this.deltaSet = n;
      this.apool = M(r);
      this.texts = i;
      this.vectorReps = o;
    }
    var e = t.prototype;
    e.parseDeltaSet = function () {
      var e = Object.keys(this.deltaSet.deltas);
      var n = Object.values(this.deltaSet.deltas);
      var r = 0;
      for (; r < e.length; r++) {
        var o = e[r];
        var s = n[r][zoneStructConsts.zoneType];
        var a = n[r];
        var u = undefined;
        if (s === zoneStructConsts.structTypes.Content) {
          var c = this.texts && this.texts[o];
          u = new H(o, a, c, this.apool, this.props.options);
        } else {
          var h = this.vectorReps?.[o] || [];
          u = new F(o, a, this.apool, h, this.props.options);
        }
        this.zoneCs.push(u.getChangeset());
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
          var u;
          r = t.apool;
          if (i === undefined) {
            i = false;
          }
          o = e;
          s = n;
          a = r;
          if ((u = i) === undefined) {
            u = false;
          }
          return P(function (t, e, n, r) {
            function i(t, e, i) {
              if (!e) {
                return i;
              }
              if (!i) {
                return e;
              }
              var o = e.oldLen;
              v(e.newLen === i.oldLen, "mismatched composition");
              var s = i.newLen;
              var a = E(e.charBank);
              var u = E(i.charBank);
              var c = C(e.itemType);
              var h = function (t, e, n, r, i) {
                var o = A(t, 0);
                var s = A(n, 0);
                var a = I();
                var u = g();
                var c = g();
                var h = g();
                while (u.opcode || o.hasNext() || c.opcode || s.hasNext()) {
                  if (!u.opcode && o.hasNext()) {
                    o.next(u);
                  }
                  if (!c.opcode && s.hasNext()) {
                    s.next(c);
                  }
                  i(u, c, h);
                  if (h.opcode) {
                    a.append(h);
                    h.opcode = "";
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
                    T(t, n);
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
                        T(e, n);
                        e.opcode = "";
                        break;
                      case "=":
                        if (e.chars <= t.chars) {
                          n.opcode = t.opcode;
                          n.chars = e.chars;
                          n.lines = e.lines;
                          n.attribs = L(t.attribs, e.attribs, t.opcode === "=", r);
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
                          n.attribs = L(t.attribs, e.attribs, t.opcode === "=", r);
                          t.opcode = "";
                          e.chars -= t.chars;
                          e.lines -= t.lines;
                        }
                        break;
                      case "":
                        T(t, n);
                        t.opcode = "";
                    }
                  } else {
                    T(e, n);
                    e.opcode = "";
                  }
                })(t, e, i, n, r);
                if (i.opcode === "+") {
                  if (s === "+") {
                    c.append(u.take(i.chars));
                  } else {
                    c.append(a.take(i.chars));
                  }
                }
              });
              var f = c.toResult();
              return {
                itemType: e.itemType,
                oldLen: o,
                newLen: s,
                ops: h,
                charBank: f
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
                  v(t[a].itemType === e[a].itemType, "cs1 and cs2 itemType error");
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
          }(_(o), _(s), a, u));
        });
      } else {
        return "";
      }
    };
    return t;
  }();
  function W(t, e) {
    var n;
    var r;
    var o;
    var s;
    var a;
    var u;
    var l = {};
    var d = 0;
    var b = new Set();
    var v = Object.keys(t.deltas);
    var y = Object.values(t.deltas);
    var g = 0;
    for (; g < v.length; g++) {
      var m = y[g];
      try {
        n = undefined;
        var T = f(m.ops);
        var x = T.next();
        for (; !x.done; x = T.next()) {
          var k = x.value;
          if (k.attributes) {
            try {
              o = undefined;
              var A = f(Object.entries(k.attributes));
              var O = A.next();
              for (; !O.done; O = A.next()) {
                var w = p(O.value, 2);
                var z = w[0];
                var S = w[1];
                if (!(e == null ? undefined : e.filterLocalAttributes) || !z.startsWith(R)) {
                  var j = z + "," + S;
                  if (!b.has(j)) {
                    b.add(j);
                    l[d++] = [z, S];
                  }
                }
              }
            } catch (t) {
              o = {
                error: t
              };
            } finally {
              try {
                if (O && !O.done && (s = A.return)) {
                  s.call(A);
                }
              } finally {
                if (o) {
                  throw o.error;
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
          if (x && !x.done && (r = T.return)) {
            r.call(T);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    }
    var N = {
      numToAttrib: l,
      nextNum: d
    };
    var I = _(new K({
      deltaSet: t,
      apool: N,
      options: e
    }).toChangeset());
    var E = {
      cols: {},
      rows: {},
      text: {},
      attribs: {}
    };
    try {
      var L = f(Object.entries(I));
      var C = L.next();
      for (; !C.done; C = L.next()) {
        var P = p(C.value, 2);
        var D = P[0];
        var Z = P[1];
        switch (Z.itemType) {
          case "Z":
            E.text[D] = Z.charBank;
            break;
          case "C":
            E.cols[D] = Z.charBank;
            break;
          case "R":
            E.rows[D] = Z.charBank;
        }
        E.attribs[D] = Z.ops;
      }
    } catch (t) {
      a = {
        error: t
      };
    } finally {
      try {
        if (C && !C.done && (u = L.return)) {
          u.call(L);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    var B = {
      initialAttributedTexts: E,
      apool: N
    };
    if (e == null ? undefined : e.filterInitialAttributedText) {
      delete E.rows;
      delete E.cols;
    } else {
      B.initialAttributedText = {
        attribs: E.attribs[zoneStructConsts.defaultZero] ?? {},
        text: E.text[zoneStructConsts.defaultZero] ?? {}
      };
    }
    return B;
  }
  require.d(exports, {
    convertDeltaSet: function () {
      return D;
    },
    getInitialAttributedTexts: function () {
      return W;
    }
  });
}