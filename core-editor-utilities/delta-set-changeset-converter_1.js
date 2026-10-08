// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q7' to 'extractAttributedTexts'
// - Renamed export '_N' to 'changesetToDeltaSet'
// - Renamed export 'cA' to 'attributedTextToDeltaSet'
// - Renamed export 'p' to 'deltaSetToChangeset'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 193797
         */
module.exports = function (module, exports, require) {
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var diffOperationValidators = require("diff-operation-validators") /*id: 735530*/;
  var zoneDeltaClasses = require("zone-delta-classes") /*id: 240236*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  function s(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var r = t && e[t];
    var n = 0;
    if (r) {
      return r.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && n >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[n++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function l(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) {
      return e;
    }
    var n;
    var o;
    var a = r.call(e);
    var i = [];
    try {
      while ((t === undefined || t-- > 0) && !(n = a.next()).done) {
        i.push(n.value);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        if (n && !n.done && (r = a.return)) {
          r.call(a);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return i;
  }
  function u(e, t) {
    return (u = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) {
        if (t.hasOwnProperty(r)) {
          e[r] = t[r];
        }
      }
    })(e, t);
  }
  function d(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) {
      return e;
    }
    var n;
    var o;
    var a = r.call(e);
    var i = [];
    try {
      while ((t === undefined || t-- > 0) && !(n = a.next()).done) {
        i.push(n.value);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        if (n && !n.done && (r = a.return)) {
          r.call(a);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return i;
  }
  var f = function (e) {
    function t(t, r = false) {
      var n = e.call(this, t) || this;
      n.silence = r;
      return n;
    }
    (function (e, t) {
      function r() {
        this.constructor = e;
      }
      u(e, t);
      e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
    })(t, e);
    return t;
  }(Error);
  function g(e, t, r = false, n = {}) {
    if (!e) {
      if (typeof n == "object" && Object.keys(n).length) {
        Object.entries(n).map(function (e) {
          var t = d(e, 2);
          return t[0] + ": " + t[1];
        }).join(", ");
      }
      throw new f("Failed assertion: " + t, r);
    }
  }
  var b = function () {
    function e() {
      var e = this;
      this.toJsonable = function () {
        var t = {};
        for (var r in e.numToAttrib) {
          if (e.numToAttrib.hasOwnProperty(r)) {
            var n = e.numToAttrib[r];
            t[r] = [n[0], n[1]];
          }
        }
        return {
          numToAttrib: t,
          nextNum: e.nextNum,
          attribToNum: e.attribToNum
        };
      };
      this.fromJsonable = function (t) {
        e.numToAttrib = {};
        e.nextNum = t.nextNum;
        e.attribToNum = {};
        for (var r in t.numToAttrib) {
          if (t.numToAttrib.hasOwnProperty(r)) {
            var n = t.numToAttrib[r];
            e.attribToNum[String(n)] = Number(r);
            e.numToAttrib[r] = [n[0], n[1]];
          }
        }
        try {
          e.checkConsistent();
        } catch (t) {
          e.handleError(t);
        }
        e.dirty = true;
        return e;
      };
      this.checkConsistent = function () {
        for (var t = 0; t < e.nextNum; t++) {
          g(t in e.numToAttrib, "AttribPool: " + t + " is not in this.numToAttrib");
        }
        var r = {};
        for (var n in e.numToAttrib) {
          if (e.numToAttrib.hasOwnProperty(n)) {
            g(Number(n) >= 0 && Number(n) < e.nextNum, "AttribPool: " + n + " is not in range [0," + e.nextNum + "]");
            var o = e.numToAttrib[n];
            g(Object.prototype.toString.call(o) === "[object Array]", "AttribPool: attrib should be an array");
            g(o.length === 2, "AttribPool: attrib length should be 2");
            g(typeof o[0] == "string", "AttribPool: key should be string");
            g(typeof o[1] == "string", "AttribPool: value should be string");
            g(!(String(o) in r), "AttribPool: attrib was already seen");
            r[String(o)] = true;
            g(e.attribToNum[String(o)] === Number(n), "AttribPool: attribToNum does not match");
          }
        }
        for (var a in e.attribToNum) {
          if (e.attribToNum.hasOwnProperty(a)) {
            g(a in r, "AttribPool: attr was not seen");
          }
        }
      };
      this.numToAttrib = {};
      this.attribToNum = {};
      this.nextNum = 0;
      this.dirty = false;
    }
    e.prototype.putAttrib = function (e, t) {
      var r = [String(e[0] || ""), String(e[1] || "")];
      var n = String(r);
      if (n in this.attribToNum) {
        return this.attribToNum[n];
      }
      if (t) {
        return -1;
      }
      var o = this.nextNum++;
      this.attribToNum[n] = o;
      this.numToAttrib[o] = r;
      this.dirty = true;
      return o;
    };
    e.prototype.getAttrib = function (e) {
      var t = this.numToAttrib[e];
      if (t) {
        return [t[0], t[1]];
      } else {
        return t;
      }
    };
    e.prototype.updateAttrib = function (e, t) {
      var r = this.getAttrib(e);
      if (r) {
        var n = String(r);
        var o = String(t);
        if (this.attribToNum[n] != null) {
          delete this.attribToNum[n];
        }
        this.attribToNum[o] = e;
        this.numToAttrib[e] = t;
      }
    };
    e.prototype.getAttribKey = function (e) {
      var t = this.numToAttrib[e];
      if (t) {
        return t[0];
      } else {
        return "";
      }
    };
    e.prototype.getAttribValue = function (e) {
      var t = this.numToAttrib[e];
      if (t) {
        return t[1];
      } else {
        return "";
      }
    };
    e.prototype.getAttribNum = function (e) {
      var t = e;
      if (typeof t != "string") {
        t = String(t);
      }
      return this.attribToNum[t];
    };
    e.prototype.eachAttrib = function (e) {
      for (var t in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(t)) {
          var r = this.numToAttrib[t];
          e(r[0], r[1]);
        }
      }
    };
    e.prototype.toJsonableNoCloning = function () {
      return {
        numToAttrib: this.numToAttrib,
        nextNum: this.nextNum
      };
    };
    e.prototype.fromJsonableNoCloning = function (e) {
      this.numToAttrib = e.numToAttrib;
      this.nextNum = e.nextNum;
      this.attribToNum = {};
      for (var t in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(t)) {
          this.attribToNum[String(this.numToAttrib[t])] = Number(t);
        }
      }
      try {
        this.checkConsistent();
      } catch (e) {
        this.handleError(e);
      }
      return this;
    };
    e.prototype.handleError = function (e) {
      throw e;
    };
    e.prototype.copy = function () {
      var t = new e();
      for (var r in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(r)) {
          var n = this.numToAttrib[r];
          t.numToAttrib[r] = [n[0], n[1]];
        }
      }
      for (var o in this.attribToNum) {
        if (this.attribToNum.hasOwnProperty(o)) {
          t.attribToNum[o] = this.attribToNum[o];
        }
      }
      t.nextNum = this.nextNum;
      return t;
    };
    return e;
  }();
  function p(e) {
    return {
      opcode: e || "",
      chars: 0,
      lines: 0,
      attribs: "",
      getAttribute: function (e, t) {
        return function (e, t, r) {
          var n = function (e) {
            var t = [];
            var r = false;
            var n = false;
            var o = 0;
            var a = 0;
            for (; a < e.length; a++) {
              var i = e.charCodeAt(a);
              if (r || n) {
                if (i >= 48 && i <= 57) {
                  o *= 36;
                  o += i - 48;
                } else if (i >= 97 && i <= 122) {
                  o *= 36;
                  o += i - 97 + 10;
                } else if (i >= 65 && i <= 90) {
                  o *= 36;
                  o += i - 65 + 10;
                } else {
                  if (!r) {
                    a += o;
                    o = 0;
                    n = false;
                    continue;
                  }
                  t.push(o);
                  o = 0;
                  r = false;
                }
              }
              switch (i) {
                case 42:
                  r = true;
                  break;
                case 36:
                  return t;
                case 35:
                  n = true;
              }
            }
            if (r) {
              t.push(o);
            }
            return t;
          }(e);
          var o = n.length - 1;
          for (; o >= 0; o--) {
            var a = n[o];
            if (r.getAttribKey(a) === t) {
              return r.getAttribValue(a);
            }
          }
          return "";
        }(this.attribs, e, t);
      }
    };
  }
  function h(e) {
    e.opcode = "";
    e.chars = 0;
    e.lines = 0;
    e.attribs = "";
  }
  function m(e, t) {
    t.opcode = e.opcode;
    t.chars = e.chars;
    t.lines = e.lines;
    t.attribs = e.attribs;
  }
  var w = function () {
    function e(e, t = 0) {
      this.opStr = e;
      this.index = t;
      this.op = p();
    }
    e.prototype.hasNext = function () {
      return this.index < this.opStr.length;
    };
    e.prototype.next = function (e) {
      var t = e || this.op;
      if (this.index !== this.opStr.length) {
        t.lines = 0;
        var r = undefined;
        var n = this.index;
        while (this.index < this.opStr.length) {
          var o = this.opStr.charCodeAt(this.index);
          if (o === 124) {
            r = this.index;
            this.index++;
            while (this.index < this.opStr.length) {
              var a = this.opStr.charCodeAt(this.index);
              if (a === 43 || a === 45 || a === 61) {
                t.opcode = this.opStr.charAt(this.index);
                break;
              }
              if (a >= 48 && a <= 57) {
                t.lines *= 36;
                t.lines += a - 48;
              } else if (a >= 97 && a <= 122) {
                t.lines *= 36;
                t.lines += a - 97 + 10;
              }
              this.index++;
            }
            break;
          }
          if (o === 43 || o === 45 || o === 61) {
            r = this.index;
            t.opcode = this.opStr.charAt(this.index);
            break;
          }
          this.index++;
        }
        t.attribs = this.opStr.substring(n, r);
        t.chars = 0;
        this.index++;
        while (this.index < this.opStr.length) {
          var a = this.opStr.charCodeAt(this.index);
          if (a >= 48 && a <= 57) {
            t.chars *= 36;
            t.chars += a - 48;
          } else {
            if (!(a >= 97) || !(a <= 122)) {
              break;
            }
            t.chars *= 36;
            t.chars += a - 97 + 10;
          }
          this.index++;
        }
        return t;
      }
      h(t);
      return t;
    };
    return e;
  }();
  function E(e, t, r = false, n = {}) {
    if (!e) {
      if (typeof n == "object" && Object.keys(n).length) {
        Object.entries(n).map(function (e) {
          var t = d(e, 2);
          return t[0] + ": " + t[1];
        }).join(", ");
      }
      throw new f("Failed assertion: " + t, r);
    }
  }
  function k(e, t) {
    var r;
    var n;
    if (t === undefined) {
      t = 0;
    }
    r = e || "";
    if ((n = t) === undefined) {
      n = 0;
    }
    return new w(r || "", n);
  }
  function v(e) {
    return e.toString(36).toLowerCase();
  }
  function x(e) {
    return parseInt(e, 36);
  }
  var y = /\*([0-9a-z]+)/g;
  function _(e, t) {
    var r = e.indexOf("$");
    if (r < 0) {
      r = e.length;
    }
    var n = e.substring(0, r).match(y) || [];
    var o = 0;
    for (; o < n.length; o++) {
      t(x(n[o].substring(1)));
    }
  }
  function T(e, t, r) {
    if (t) {
      if (typeof t == "string") {
        return t;
      }
      if (r && t && t.length) {
        if (t.length > 1) {
          (t = t.slice()).sort();
        }
        var n = [];
        var o = 0;
        for (; o < t.length; o++) {
          var a = t[o];
          if (e === "=" || e === "+" && a[1]) {
            n.push("*" + v(r.putAttrib(a)));
          }
        }
        return n.join("");
      }
    }
    return "";
  }
  function A() {
    var e;
    e = [];
    var t = {
      append: function (t) {
        e.push(t.attribs);
        if (t.lines) {
          e.push("|", v(t.lines));
        }
        e.push(t.opcode);
        e.push(v(t.chars));
      },
      toString: function () {
        return e.join("");
      },
      clear: function () {
        e.length = 0;
      }
    };
    var r = p();
    var n = 0;
    function o(e) {
      if (r.opcode) {
        if (!e || r.opcode !== "=" || !!r.attribs) {
          t.append(r);
          if (n) {
            r.chars = n;
            r.lines = 0;
            t.append(r);
            n = 0;
          }
        }
        r.opcode = "";
      }
    }
    return {
      append: function (e) {
        if (e.chars > 0) {
          if (r.opcode === e.opcode && r.attribs === e.attribs) {
            if (e.lines > 0) {
              r.chars += n + e.chars;
              r.lines += e.lines;
              n = 0;
            } else if (r.lines === 0) {
              r.chars += e.chars;
            } else {
              n += e.chars;
            }
          } else {
            o();
            m(e, r);
          }
        }
      },
      toString: function () {
        o();
        return t.toString();
      },
      clear: function () {
        t.clear();
        h(r);
      },
      endDocument: function () {
        o(true);
      }
    };
  }
  function O() {
    var e = [];
    function t() {
      return e.join("");
    }
    return {
      append: function (t) {
        e.push(String(t));
      },
      toString: t,
      toResult: t
    };
  }
  function B() {
    var e = A();
    var t = A();
    var r = A();
    var n = O();
    var o = "";
    var a = 0;
    function i() {
      n.append(r.toString());
      r.clear();
    }
    function c() {
      n.append(e.toString());
      e.clear();
      n.append(t.toString());
      t.clear();
    }
    function s(n) {
      if (n.opcode && n.chars) {
        if (n.opcode === "-") {
          if (o === "=") {
            i();
          }
          e.append(n);
          a -= n.chars;
        } else if (n.opcode === "+") {
          if (o === "=") {
            i();
          }
          t.append(n);
          a += n.chars;
        } else if (n.opcode === "=") {
          if (o !== "=") {
            c();
          }
          r.append(n);
        }
        o = n.opcode;
      }
    }
    return {
      append: s,
      toString: function () {
        c();
        i();
        return n.toString();
      },
      clear: function () {
        e.clear();
        t.clear();
        r.clear();
        a = 0;
      },
      endDocument: function () {
        r.endDocument();
      },
      appendOpWithText: function (e, t, r, n) {
        var o = p(e);
        o.attribs = T(e, r, n);
        var a = t.lastIndexOf("\n");
        if (a < 0) {
          o.chars = t.length;
        } else {
          o.chars = a + 1;
          o.lines = t.match(/\n/g).length;
          s(o);
          o.chars = t.length - (a + 1);
        }
        o.lines = 0;
        s(o);
      },
      getLengthChange: function () {
        return a;
      }
    };
  }
  function N(e) {
    if (typeof e == "string") {
      return function (e) {
        var t = 0;
        var r = e.split("\n").length - 1;
        function n(e) {
          g(e <= o(), "!(n <= remaining())", false, {
            n: e,
            remaining: o()
          });
        }
        function o() {
          return e.length - t;
        }
        return {
          take: function (o) {
            n(o);
            var a = e.substr(t, o);
            r -= a.split("\n").length - 1;
            t += o;
            return a;
          },
          skip: function (e) {
            n(e);
            t += e;
          },
          remaining: o,
          peek: function (r) {
            n(r);
            return e.substr(t, r);
          },
          newlines: function () {
            return r;
          }
        };
      }(e);
    } else {
      return function (e) {
        function t(e) {
          E(e <= n(), "!(n <= remaining())", false, {
            n: e,
            remaining: n()
          });
        }
        var r = 0;
        function n() {
          return e.length - r;
        }
        return {
          take: function (n) {
            t(n);
            var o = e.slice(r, r + n);
            r += n;
            return o;
          },
          skip: function (e) {
            t(e);
            r += e;
          },
          remaining: n,
          peek: function (n) {
            t(n);
            return e.slice(r, r + n);
          }
        };
      }(e);
    }
  }
  function R(e, t, r, n) {
    if (!e && r) {
      return t;
    }
    if (!t) {
      return e;
    }
    var o;
    var a;
    var i = [];
    e.replace(/\*([0-9a-z]+)/g, function (e, t) {
      i.push(n.getAttrib(x(t)));
      return "";
    });
    t.replace(/\*([0-9a-z]+)/g, function (e, t) {
      var o = n.getAttrib(x(t));
      var a = false;
      var c = 0;
      for (; c < i.length; c++) {
        var s = i[c];
        if (s[0] === o[0]) {
          if (o[1] || r) {
            s[1] = o[1];
          } else {
            i.splice(c, 1);
          }
          a = true;
          break;
        }
      }
      if (!a && (o[1] || r)) {
        i.push(o);
      }
      return "";
    });
    i.sort();
    var c = O();
    try {
      var s = function (e) {
        var t = typeof Symbol == "function" && Symbol.iterator;
        var r = t && e[t];
        var n = 0;
        if (r) {
          return r.call(e);
        }
        if (e && typeof e.length == "number") {
          return {
            next: function () {
              if (e && n >= e.length) {
                e = undefined;
              }
              return {
                value: e && e[n++],
                done: !e
              };
            }
          };
        }
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }(i);
      var l = s.next();
      for (; !l.done; l = s.next()) {
        var u = l.value;
        c.append("*");
        c.append(v(n.putAttrib(u)));
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        if (l && !l.done && (a = s.return)) {
          a.call(s);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return c.toString();
  }
  function C(e) {
    g(e, "itemType should be defined");
    if (e === "Z") {
      return O();
    } else {
      return function () {
        var e = [];
        function t() {
          return e;
        }
        return {
          append: function (t) {
            e = e.concat(t);
          },
          toList: t,
          toResult: t
        };
      }();
    }
  }
  function S(e) {
    var t = {};
    var r = 0;
    while (r < e.length) {
      var n = /^(Z|ZR|ZC)([0-9a-z]*):([0-9a-z]+)([><])([0-9a-z]+)|/.exec(e.substring(r));
      if (!n || !n[0]) {
        throw new f("Changeset: Not a changeset: " + e + " at position " + r);
      }
      var o = n[1].charAt(n[1].length - 1);
      var a = n[2] === "" ? "0" : n[2];
      if (a in t) {
        for (var i in t) {
          if (t.hasOwnProperty(i) && t[i].itemType === "Z") {
            t[i].charBank = "obfuscated " + t[i].charBank.length;
          }
        }
        g(false, "zoneIds should be unique", false, {
          zoneId: a,
          cssObj: JSON.stringify(t)
        });
      }
      if (a === "0") {
        g(o === "Z", "itemType must be Z");
      }
      var c = x(n[3]);
      var s = c + (n[4] === ">" ? 1 : -1) * x(n[5]);
      var l = r + n[0].length;
      var u = e.indexOf("$", r);
      var d = e.indexOf("#", r);
      var b = d >= 0 && u >= 0 && d < u;
      var p = e.length;
      if (u >= 0) {
        p = u;
      }
      if (b) {
        p = d;
      }
      var h = u >= 0 ? u + 1 : e.length;
      var m = b ? h + x(e.substring(d + 1, u)) : e.length;
      t[a] = {
        itemType: o,
        oldLen: c,
        newLen: s,
        ops: e.substring(l, p),
        charBank: e.substring(h, m)
      };
      if (o !== "Z") {
        g(t[a].ops.indexOf("|") === -1, "ops must has |");
        t[a].charBank = t[a].charBank === "" ? [] : t[a].charBank.split("|");
      }
      r = m;
    }
    return t;
  }
  function G(e) {
    var t = "";
    var r = Object.keys(e).sort();
    var n = 0;
    for (; n < r.length; n++) {
      var o = r[n];
      E(typeof o == "string", "pack: zoneId must be string");
      E(o !== "", "pack: zoneId cannot be empty string");
      if (n !== 0 && r[n] === r[n - 1]) {
        for (var a in e) {
          if (e.hasOwnProperty(a) && e[a].itemType === "Z") {
            e[a].charBank = "obfuscated " + e[a].charBank.length;
          }
        }
        E(false, "pack: zoneIds must be distinct zoneIds", false, {
          zoneIds: r,
          csMap: JSON.stringify(e)
        });
      }
      var i = e[o];
      (function (e, r, n, o, a, i, c) {
        E(e === "Z" || e === "R" || e === "C", "itemType error");
        if (e !== "Z") {
          a = a.join("|");
        }
        if (e !== "Z") {
          E(o.indexOf("|") === -1, "ops |");
        }
        var s = n - r;
        var l = s >= 0 ? ">" + v(s) : "<" + v(-s);
        t += (e !== "Z" ? "Z" : "") + e + (c === "0" ? "" : c) + ":" + v(r) + l + o;
        if (!i) {
          t += "#" + v(a.length);
        }
        t += "$" + a;
      })(i.itemType, i.oldLen, i.newLen, i.ops, i.charBank, n === r.length - 1, o);
    }
    return t;
  }
  var I = "clientside-";
  function F(e, t) {
    return function (e, t) {
      var r = Object.keys(e);
      var s = j(t);
      var l = new deltaSetCore.DeltaSet({});
      var u = 0;
      for (; u < r.length; u++) {
        var d = r[u];
        var f = S(e[d])[d];
        var g = function (e, t, r, n) {
          var s = diffOperationValidators.isValidSessionId(e) || diffOperationValidators.isValidClientId(e);
          var l = s ? documentOperationConstants.structureMap[e.substr(0, 2)] : documentOperationConstants.structureMap.content;
          var u = s ? new zoneDeltaClasses.ZoneDelta({
            zoneId: e,
            zoneType: l
          }) : new contentStructureDelta.ContentDelta({
            zoneId: e
          });
          var d = k(t);
          var f = 0;
          while (d.hasNext()) {
            (function () {
              var e = d.next();
              var t = {};
              var o = e.attribs;
              var a = e.chars;
              var i = e.opcode;
              if (o) {
                _(o, function (e) {
                  t[n.getAttribKey(e)] = n.getAttribValue(e);
                });
              }
              if (i === "=") {
                u.retain(a, t);
              }
              if (i === "-") {
                u.delete(a);
              }
              if (i === "+") {
                if (Array.isArray(r)) {
                  r.slice(f, f + a).forEach(function (e) {
                    u.insert(e, t);
                    f += 1;
                  });
                } else {
                  var c = r.substr(f, a);
                  u.insert(c, t);
                  f += c.length;
                }
              }
            })();
          }
          return u;
        }(d, f.ops, f.charBank, s);
        l = l.compose(g);
      }
      return l;
    }(function (e) {
      var t = S(e);
      var r = {};
      for (var n in t) {
        if (t.hasOwnProperty(n)) {
          var o = t[n];
          var a = o.oldLen;
          var i = o.newLen;
          var c = o.ops;
          var s = o.itemType;
          var l = o.charBank;
          r[n] = function (e, t, r, n, o, a) {
            var i;
            if (o === undefined) {
              o = "0";
            }
            if (a === undefined) {
              a = "Z";
            }
            return G(((i = {})[o] = {
              charBank: n,
              itemType: a,
              newLen: t,
              oldLen: e,
              ops: r
            }, i));
          }(a, i, c, l, n, s);
        }
      }
      return r;
    }(e), t);
  }
  function D(e, t) {
    var r = e.attribs;
    var s = e.cols;
    var l = e.rows;
    var u = e.text;
    var d = j(t);
    var f = new deltaSetCore.DeltaSet({});
    var g = Object.keys(r);
    var b = 0;
    for (; b < g.length; b++) {
      var p = g[b];
      var h = r[p];
      var m = (s == null ? undefined : s[p]) || (l == null ? undefined : l[p]) || u[p];
      var w = function (e, t, r, n) {
        var s = diffOperationValidators.isValidSessionId(e) || diffOperationValidators.isValidClientId(e);
        var l = s ? documentOperationConstants.structureMap[e.substr(0, 2)] : documentOperationConstants.structureMap.content;
        var u = [];
        var d = null;
        var f = k(t);
        var g = 0;
        while (f.hasNext()) {
          (function () {
            var e = f.next();
            var t = {};
            var o = e.attribs;
            var a = e.chars;
            var i = e.opcode;
            if (o) {
              _(o, function (e) {
                t[n.getAttribKey(e)] = n.getAttribValue(e);
              });
            }
            if (i === "+") {
              if (Array.isArray(r)) {
                r.slice(g, g + a).forEach(function (e) {
                  var r = {
                    insert: {
                      id: e
                    }
                  };
                  if (Object.keys(t).length) {
                    r.attributes = t;
                  }
                  u.push(r);
                  g += 1;
                });
              } else {
                var c = r.substr(g, a);
                var s = {
                  insert: c
                };
                if (Object.keys(t).length) {
                  s.attributes = t;
                }
                if (d && s.attributes && function (e, t) {
                  if (e && t) {
                    var r = Object.keys(e);
                    var n = Object.keys(t);
                    return r.length === n.length && r.every(function (r) {
                      return e[r] === t[r];
                    });
                  }
                  return e === t;
                }(s.attributes, d.attributes)) {
                  d.insert += s.insert;
                } else {
                  u.push(s);
                  d = s;
                }
                g += c.length;
              }
            }
          })();
        }
        if (s) {
          return new zoneDeltaClasses.ZoneDelta({
            zoneId: e,
            zoneType: l,
            ops: u
          });
        } else {
          return new contentStructureDelta.ContentDelta({
            zoneId: e,
            ops: u
          });
        }
      }(p, h, m, d);
      f.add(p, w);
    }
    return f;
  }
  function L(e, t, r) {
    e.forEach(function (e) {
      if (e.attributes) {
        Object.entries(e.attributes).forEach(function (e) {
          if (!(r == null ? undefined : r.filterLocalAttributes) || !e[0].startsWith(I)) {
            t.putAttrib(e);
          }
        });
      }
    });
  }
  function P(e) {
    if (e) {
      var t = {};
      Object.keys(e).forEach(function (r) {
        if (!r.startsWith(I)) {
          t[r] = e[r];
        }
      });
      return t;
    }
  }
  var H = function () {
    function e(e, t, r = "\n", n, a) {
      this.zoneId = e;
      this.repText = r;
      this.apool = n;
      this.options = a;
      this.pointer = 0;
      this.builder = this.createBuilder();
      this.zoneType = t.zoneType || documentOperationConstants.structureTypes.Content;
      this.zoneId = t.zoneId || documentOperationConstants.defaultValue;
      this.deltaOps = t.ops;
      L(this.deltaOps, n, a);
    }
    var t = e.prototype;
    t.getChangeset = function () {
      this.pointer = 0;
      if (this.deltaOps) {
        var t = this.deltaOps.length;
        if (this.builder) {
          for (var r = 0; r < t; r++) {
            var o = this.deltaOps[r];
            var a = deltaSetCore.getOpType(o);
            if (!a) {
              return;
            }
            var i = o.attributes;
            if (this.options?.filterLocalAttributes) {
              i = P(o.attributes);
            }
            this.opTransform(a, o[a], i);
          }
          return this.builder.toString();
        }
      }
    };
    t.createBuilder = function () {
      var e;
      var t;
      var r;
      var n;
      var o;
      var a;
      var i;
      var c;
      var s;
      e = this.repText.length;
      t = this.zoneType;
      r = this.zoneId;
      if (t === undefined) {
        t = "Z";
      }
      if (r === undefined) {
        r = "0";
      }
      if ((n = t) === undefined) {
        n = "Z";
      }
      if ((o = r) === undefined) {
        o = "0";
      }
      n = n || "Z";
      a = B();
      i = p();
      c = C(n);
      return s = {
        keepOverOp: function (e) {
          s.keep(e.chars, e.lines);
        },
        keepOverOpWithNewAttributes: function (e, t, r) {
          s.keep(e.chars, e.lines, t, r);
        },
        keepOverOpWithoutAttribute: function (e, t, r) {
          s.keep(e.chars, e.lines, [[t, ""]], r);
        },
        keep: function (e, t, r, n) {
          i.opcode = "=";
          i.attribs = r && T("=", r, n) || "";
          i.chars = e;
          i.lines = t || 0;
          a.append(i);
          return s;
        },
        keepText: function (e, t, r) {
          a.appendOpWithText("=", e, t, r);
          return s;
        },
        insert: function (e, t, r) {
          if (n === "Z") {
            a.appendOpWithText("+", e, t, r);
          } else {
            a.append({
              opcode: "+",
              chars: e.length,
              attribs: t,
              lines: 0
            });
          }
          c.append(e);
          return s;
        },
        remove: function (e, t) {
          i.opcode = "-";
          i.attribs = "";
          i.chars = e;
          i.lines = t || 0;
          a.append(i);
          return s;
        },
        removeText: function (e) {
          a.appendOpWithText("-", e);
        },
        insertAText: function (e) {
          if (e.text.charAt(e.text.length - 1) !== "\n") {
            throw new f("insertAText: text must end in newline");
          }
          (function (e, t) {
            var r = k(e.attribs);
            var n = p();
            while (r.hasNext()) {
              r.next(n);
              if (r.hasNext()) {
                t.append(n);
              } else if (n.lines <= 1) {
                n.lines = 0;
                n.chars--;
                if (n.chars) {
                  t.append(n);
                }
              } else {
                var o = e.text.lastIndexOf("\n", e.text.length - 2) + 1;
                var a = e.text.length - o - 1;
                n.lines--;
                n.chars -= a + 1;
                t.append(n);
                n.lines = 0;
                n.chars = a;
                if (n.chars) {
                  t.append(n);
                }
              }
            }
          })(e, a);
          c.append(e.text.slice(0, -1));
          return s;
        },
        toChangeset: function () {
          if (!o) {
            throw new f("Changeset: zoneId should be non-trivial");
          }
          var e = {};
          e[o] = s.toUnpacked();
          return G(e);
        },
        toString: function () {
          if (!o) {
            throw new f("Changeset: zoneId should be non-trivial");
          }
          var e = {};
          e[o] = s.toUnpacked();
          return G(e);
        },
        toUnpacked: function () {
          a.endDocument();
          var t = e + a.getLengthChange();
          return {
            itemType: n,
            oldLen: e,
            newLen: t,
            ops: a.toString(),
            charBank: c.toResult()
          };
        }
      };
    };
    t.opTransform = function (e, t, r) {
      switch (e) {
        case documentOperationConstants.operationTypes.INSERT:
          this.insert(t, r);
          break;
        case documentOperationConstants.operationTypes.RETAIN:
          this.retain(t, r);
          break;
        case documentOperationConstants.operationTypes.DELETE:
          this.delete(t);
      }
    };
    t.insert = function (e, t = {}) {
      var r = Object.entries(t);
      this.builder.insert(e, r, this.apool);
    };
    t.retain = function (e, t = {}) {
      var r = Object.entries(t);
      var n = this.repText.slice(this.pointer, this.pointer + e);
      if (n.length !== e) {
        throw Error("The content of the operation does not exist");
      }
      var o = n.match(/\n/g);
      var a = o && o.length;
      var i = n.lastIndexOf("\n");
      if (i > -1 && i !== n.length - 1) {
        var c = e - i - 1;
        this.builder.keep(e - c, a, r, this.apool);
        this.builder.keep(c, 0, r, this.apool);
      } else {
        this.builder.keep(e, a, r, this.apool);
      }
      this.pointer += e;
    };
    t.delete = function (e) {
      var t = this.repText.slice(this.pointer, this.pointer + e);
      if (t.length !== e) {
        throw Error("The deleted content does not exist");
      }
      var r = t.match(/\n/g);
      var n = r && r.length;
      var o = t.lastIndexOf("\n");
      if (o > -1 && o !== t.length - 1) {
        var a = e - o - 1;
        this.builder.remove(e - a, n || 0);
        this.builder.remove(a, 0);
      } else {
        this.builder.remove(e, n || 0);
      }
      this.pointer += e;
    };
    return e;
  }();
  var M = function () {
    function e(e, t, r, n, o) {
      this.zoneId = e;
      this.delta = t;
      this.apool = r;
      this.vectorIds = n;
      this.options = o;
      this.charBank = [];
      this.isForRow = diffOperationValidators.isValidSessionId(e);
      this.zoneObj = {};
      this.oldLen = this.vectorIds.length;
      this.assembler = B();
      this.pointer = this.oldLen;
      L(t.ops, r, o);
    }
    var t = e.prototype;
    t.getChangeset = function () {
      var t = this.delta.ops.length;
      var r = 0;
      for (; r < t; r++) {
        var o = this.delta.ops[r];
        var a = deltaSetCore.getOpType(o);
        if (!a) {
          return;
        }
        var i = o[a].id || o[a];
        var c = o.attributes;
        if (this.options?.filterLocalAttributes) {
          c = P(o.attributes);
        }
        this.opTransform(a, i, c);
      }
      return this.toChangeset();
    };
    t.opTransform = function (e, t, r) {
      switch (e) {
        case documentOperationConstants.operationTypes.INSERT:
          this.insert(t, r);
          break;
        case documentOperationConstants.operationTypes.RETAIN:
          this.retain(t, r);
          break;
        case documentOperationConstants.operationTypes.DELETE:
          this.delete(t);
      }
    };
    t.insert = function (e, t = {}) {
      var r = T("=", Object.entries(t), this.apool);
      this.charBank.push(e);
      this.pointer += 1;
      this.append(r);
    };
    t.append = function (e) {
      this.assembler.append({
        opcode: "+",
        attribs: e,
        lines: 0,
        chars: 1
      });
    };
    t.delete = function (e) {
      this.assembler.append({
        opcode: "-",
        attribs: "",
        lines: 0,
        chars: e
      });
      this.pointer -= e;
    };
    t.retain = function (e, t = {}) {
      var r = T("=", Object.entries(t), this.apool);
      this.assembler.append({
        opcode: "=",
        attribs: r,
        lines: 0,
        chars: e
      });
    };
    t.toChangeset = function () {
      this.zoneObj[this.zoneId] = {
        itemType: this.isForRow ? documentOperationConstants.structureTypes.Row : documentOperationConstants.structureTypes.Column,
        oldLen: this.oldLen,
        newLen: this.pointer,
        ops: this.assembler.toString(),
        charBank: this.charBank
      };
      return G(this.zoneObj);
    };
    return e;
  }();
  function j(e) {
    if (e.putAttrib !== undefined) {
      return e;
    } else {
      return new b().fromJsonable(e);
    }
  }
  var W = function () {
    function e(e) {
      this.props = e;
      this.zoneCs = [];
      var t = this.props;
      var r = t.deltaSet;
      var n = t.apool;
      var o = t.texts;
      var a = t.vectorReps;
      this.deltaSet = r;
      this.apool = j(n);
      this.texts = o;
      this.vectorReps = a;
    }
    var t = e.prototype;
    t.parseDeltaSet = function () {
      var t = Object.keys(this.deltaSet.deltas);
      var r = Object.values(this.deltaSet.deltas);
      var n = 0;
      for (; n < t.length; n++) {
        var a = t[n];
        var i = r[n][documentOperationConstants.zoneType];
        var c = r[n];
        var s = undefined;
        if (i === documentOperationConstants.structureTypes.Content) {
          var l = this.texts && this.texts[a];
          s = new H(a, c, l, this.apool, this.props.options);
        } else {
          var u = this.vectorReps?.[a] || [];
          s = new M(a, c, this.apool, u, this.props.options);
        }
        this.zoneCs.push(s.getChangeset());
      }
    };
    t.toChangeset = function () {
      var e = this;
      if (this.deltaSet && (this.parseDeltaSet(), this.zoneCs.length)) {
        return this.zoneCs.reduce(function (t, r) {
          var n;
          var o;
          var a;
          var i;
          var c;
          var s;
          n = e.apool;
          if (o === undefined) {
            o = false;
          }
          a = t;
          i = r;
          c = n;
          if ((s = o) === undefined) {
            s = false;
          }
          return G(function (e, t, r, n) {
            function o(e, t, o) {
              if (!t) {
                return o;
              }
              if (!o) {
                return t;
              }
              var a = t.oldLen;
              g(t.newLen === o.oldLen, "mismatched composition");
              var i = o.newLen;
              var c = N(t.charBank);
              var s = N(o.charBank);
              var l = C(t.itemType);
              var u = function (e, t, r, n, o) {
                var a = k(e, 0);
                var i = k(r, 0);
                var c = B();
                var s = p();
                var l = p();
                var u = p();
                while (s.opcode || a.hasNext() || l.opcode || i.hasNext()) {
                  if (!s.opcode && a.hasNext()) {
                    a.next(s);
                  }
                  if (!l.opcode && i.hasNext()) {
                    i.next(l);
                  }
                  o(s, l, u);
                  if (u.opcode) {
                    c.append(u);
                    u.opcode = "";
                  }
                }
                c.endDocument();
                return c.toString();
              }(t.ops, 0, o.ops, 0, function (e, t, o) {
                var a = e.opcode;
                var i = t.opcode;
                if (a === "+" && i === "-") {
                  c.skip(Math.min(e.chars, t.chars));
                }
                (function (e, t, r, n, o = false) {
                  if (e.opcode === "-") {
                    m(e, r);
                    e.opcode = "";
                  } else if (e.opcode) {
                    switch (t.opcode) {
                      case "-":
                        if (t.chars <= e.chars) {
                          if (e.opcode === "=") {
                            r.opcode = "-";
                            r.chars = t.chars;
                            r.lines = t.lines;
                            r.attribs = o ? t.attribs : "";
                          }
                          e.chars -= t.chars;
                          e.lines -= t.lines;
                          t.opcode = "";
                          if (!e.chars) {
                            e.opcode = "";
                          }
                        } else {
                          if (e.opcode === "=") {
                            r.opcode = "-";
                            r.chars = e.chars;
                            r.lines = e.lines;
                            r.attribs = o ? t.attribs : "";
                          }
                          t.chars -= e.chars;
                          t.lines -= e.lines;
                          e.opcode = "";
                        }
                        break;
                      case "+":
                        m(t, r);
                        t.opcode = "";
                        break;
                      case "=":
                        if (t.chars <= e.chars) {
                          r.opcode = e.opcode;
                          r.chars = t.chars;
                          r.lines = t.lines;
                          r.attribs = R(e.attribs, t.attribs, e.opcode === "=", n);
                          t.opcode = "";
                          e.chars -= t.chars;
                          e.lines -= t.lines;
                          if (!e.chars) {
                            e.opcode = "";
                          }
                        } else {
                          r.opcode = e.opcode;
                          r.chars = e.chars;
                          r.lines = e.lines;
                          r.attribs = R(e.attribs, t.attribs, e.opcode === "=", n);
                          e.opcode = "";
                          t.chars -= e.chars;
                          t.lines -= e.lines;
                        }
                        break;
                      case "":
                        m(e, r);
                        e.opcode = "";
                    }
                  } else {
                    m(t, r);
                    t.opcode = "";
                  }
                })(e, t, o, r, n);
                if (o.opcode === "+") {
                  if (i === "+") {
                    l.append(s.take(o.chars));
                  } else {
                    l.append(c.take(o.chars));
                  }
                }
              });
              var d = l.toResult();
              return {
                itemType: t.itemType,
                oldLen: a,
                newLen: i,
                ops: u,
                charBank: d
              };
            }
            if (n === undefined) {
              n = false;
            }
            var a;
            var i = {};
            for (var c in e) {
              if (e.hasOwnProperty(c)) {
                if (t[c]) {
                  g(e[c].itemType === t[c].itemType, "cs1 and cs2 itemType error");
                }
                if ((a = o(c, e[c], t[c] || null)) !== null) {
                  i[c] = a;
                }
              }
            }
            for (var c in t) {
              if (!!t.hasOwnProperty(c) && !(c in e) && (a = o(c, null, t[c])) !== null) {
                i[c] = a;
              }
            }
            return i;
          }(S(a), S(i), c, s));
        });
      } else {
        return "";
      }
    };
    return e;
  }();
  function U(e) {
    return new W(e).toChangeset();
  }
  function Z(e, t) {
    var r;
    var n;
    var a;
    var i;
    var c;
    var u;
    var g = {};
    var b = 0;
    var p = new Set();
    var h = Object.keys(e.deltas);
    var m = Object.values(e.deltas);
    var w = 0;
    for (; w < h.length; w++) {
      var E = m[w];
      try {
        r = undefined;
        var k = s(E.ops);
        var v = k.next();
        for (; !v.done; v = k.next()) {
          var x = v.value;
          if (x.attributes) {
            try {
              a = undefined;
              var y = s(Object.entries(x.attributes));
              var _ = y.next();
              for (; !_.done; _ = y.next()) {
                var T = l(_.value, 2);
                var A = T[0];
                var O = T[1];
                if (!(t == null ? undefined : t.filterLocalAttributes) || !A.startsWith(I)) {
                  var B = A + "," + O;
                  if (!p.has(B)) {
                    p.add(B);
                    g[b++] = [A, O];
                  }
                }
              }
            } catch (e) {
              a = {
                error: e
              };
            } finally {
              try {
                if (_ && !_.done && (i = y.return)) {
                  i.call(y);
                }
              } finally {
                if (a) {
                  throw a.error;
                }
              }
            }
          }
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          if (v && !v.done && (n = k.return)) {
            n.call(k);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    }
    var N = {
      numToAttrib: g,
      nextNum: b
    };
    var R = S(U({
      deltaSet: e,
      apool: N,
      options: t
    }));
    var C = {
      cols: {},
      rows: {},
      text: {},
      attribs: {}
    };
    try {
      var G = s(Object.entries(R));
      var F = G.next();
      for (; !F.done; F = G.next()) {
        var D = l(F.value, 2);
        var L = D[0];
        var P = D[1];
        switch (P.itemType) {
          case "Z":
            C.text[L] = P.charBank;
            break;
          case "C":
            C.cols[L] = P.charBank;
            break;
          case "R":
            C.rows[L] = P.charBank;
        }
        C.attribs[L] = P.ops;
      }
    } catch (e) {
      c = {
        error: e
      };
    } finally {
      try {
        if (F && !F.done && (u = G.return)) {
          u.call(G);
        }
      } finally {
        if (c) {
          throw c.error;
        }
      }
    }
    var H = {
      initialAttributedTexts: C,
      apool: N
    };
    if (t == null ? undefined : t.filterInitialAttributedText) {
      delete C.rows;
      delete C.cols;
    } else {
      H.initialAttributedText = {
        attribs: C.attribs[documentOperationConstants.defaultValue] ?? {},
        text: C.text[documentOperationConstants.defaultValue] ?? {}
      };
    }
    return H;
  }
  require.d(exports, {
    extractAttributedTexts: function () {
      return Z;
    },
    changesetToDeltaSet: function () {
      return F;
    },
    attributedTextToDeltaSet: function () {
      return D;
    },
    deltaSetToChangeset: function () {
      return U;
    }
  });
}