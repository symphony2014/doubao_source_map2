// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QU' to 'AttribPool'
// - Renamed export 'ru' to 'unpackChangesets'
// - Renamed export 'DJ' to 'ZONE_CHANGESETS'
// - Renamed export 'km' to 'iterateAttribs'
// - Renamed export 'FL' to 'applyChangeset'
// - Renamed export 'oD' to 'packChangesets'
// - Renamed export 'p5' to 'composeChangesets'
// - Renamed export 'Vv' to 'parseChangeset'
// - Renamed export 'ET' to 'createOpIterator'
// - Renamed export 'BB' to 'mergeChangesetMaps'
// - Renamed export 'ZN' to 'followChangeset'
// - Renamed export 'P3' to 'mapAttribs'
// - Renamed export 'EU' to 'base36Decode'
// - Renamed export 'fl' to 'buildChangeset'
// - Renamed export 'ye' to 'composeChangesetDocs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 378584
         */
module.exports = function (module, exports, require) {
  (function () {
    function t(t) {
      this.curSpliceStart = 0;
      this.curSpliceNumDelete = 0;
      this.curSpliceNewLines = [];
      this.inSplice = false;
      this.curLine = 0;
      this.curCol = 0;
      this.lines = t;
    }
    t.prototype.lines_toSource = function () {
      return this.lines.toSource();
    };
    t.prototype.enterSplice = function () {
      this.curSpliceStart = this.curLine;
      this.curSpliceNumDelete = 0;
      this.curSpliceNewLines = [];
      if (this.curCol > 0) {
        this.putCurLineInSplice();
      }
      this.inSplice = true;
    };
    t.prototype.leaveSplice = function () {
      var t = 0;
      var e = this.curSpliceStart + this.curSpliceNumDelete;
      var n = this.curSpliceNewLines.length;
      if (e > this.curSpliceStart || n > 0) {
        this.performSplice(this.curSpliceStart + t, e - this.curSpliceStart, this.curSpliceNewLines.slice(0, n));
        t += n - (e - this.curSpliceStart);
      }
      this.curSpliceStart = 0;
      this.curSpliceNumDelete = 0;
      this.curSpliceNewLines = [];
      this.inSplice = false;
    };
    t.prototype.performSplice = function (t, e, n) {
      this.lines.splice([t, e].concat(n));
    };
    t.prototype.isCurLineInSplice = function () {
      return this.curLine - this.curSpliceStart < this.curSpliceNewLines.length;
    };
    t.prototype.debugPrint = function (t) {};
    t.prototype.putCurLineInSplice = function () {
      if (!this.isCurLineInSplice()) {
        this.curSpliceNewLines.push(this.lines.get(this.curSpliceStart + this.curSpliceNumDelete));
        this.curSpliceNumDelete++;
      }
      return this.curLine - this.curSpliceStart;
    };
    t.prototype.skipLines = function (t, e) {
      if (t) {
        if (e) {
          if (!this.inSplice) {
            this.enterSplice();
          }
          for (var n = 0; n < t; n++) {
            this.curCol = 0;
            this.putCurLineInSplice();
            this.curLine++;
          }
        } else {
          if (this.inSplice) {
            if (t > 1) {
              this.leaveSplice();
            } else {
              this.putCurLineInSplice();
            }
          }
          this.curLine += t;
          this.curCol = 0;
        }
      }
    };
    t.prototype.skip = function (t, e, n) {
      if (t) {
        if (e) {
          this.skipLines(e, n);
        } else {
          if (n && !this.inSplice) {
            this.enterSplice();
          }
          if (this.inSplice) {
            this.putCurLineInSplice();
          }
          this.curCol += t;
        }
      }
    };
    t.prototype.nextKLinesText = function (t) {
      var e = this.curSpliceStart + this.curSpliceNumDelete;
      if (this.lines.slice) {
        return this.lines.slice(e, e + t).join("");
      } else {
        return null;
      }
    };
    t.prototype.removeLines = function (t) {
      var e = "";
      if (t) {
        if (!this.inSplice) {
          this.enterSplice();
        }
        if (this.isCurLineInSplice()) {
          if (this.curCol === 0) {
            e = this.curSpliceNewLines[this.curSpliceNewLines.length - 1];
            this.curSpliceNewLines.length--;
            e += this.nextKLinesText(t - 1);
            this.curSpliceNumDelete += t - 1;
          } else {
            e = this.nextKLinesText(t - 1);
            this.curSpliceNumDelete += t - 1;
            var n = this.curSpliceNewLines.length - 1;
            e = this.curSpliceNewLines[n].substring(this.curCol) + e;
            this.curSpliceNewLines[n] = this.curSpliceNewLines[n].substring(0, this.curCol) + this.lines.get(this.curSpliceStart + this.curSpliceNumDelete);
            this.curSpliceNumDelete += 1;
          }
        } else {
          e = this.nextKLinesText(t);
          this.curSpliceNumDelete += t;
        }
      }
      return e;
    };
    t.prototype.remove = function (t, e) {
      var n = "";
      if (t) {
        if (e) {
          return this.removeLines(e);
        }
        if (!this.inSplice) {
          this.enterSplice();
        }
        var r = this.putCurLineInSplice();
        n = this.curSpliceNewLines[r].substring(this.curCol, this.curCol + t);
        this.curSpliceNewLines[r] = this.curSpliceNewLines[r].substring(0, this.curCol) + this.curSpliceNewLines[r].substring(this.curCol + t);
      }
      return n;
    };
    t.prototype.insert = function (t, e) {
      if (t) {
        if (!this.inSplice) {
          this.enterSplice();
        }
        if (e) {
          var n = this.splitTextLines(t);
          if (this.isCurLineInSplice()) {
            var r = this.curSpliceNewLines.length - 1;
            var i = this.curSpliceNewLines[r];
            var o = this.curCol;
            this.curSpliceNewLines[r] = i.substring(0, o) + n[0];
            this.curLine++;
            n.splice(0, 1);
            Array.prototype.push.apply(this.curSpliceNewLines, n);
            this.curLine += n.length;
            this.curSpliceNewLines.push(i.substring(o));
            this.curCol = 0;
          } else {
            Array.prototype.push.apply(this.curSpliceNewLines, n);
            this.curLine += n.length;
          }
        } else {
          var s = this.putCurLineInSplice();
          this.curSpliceNewLines[s] = this.curSpliceNewLines[s].substring(0, this.curCol) + t + this.curSpliceNewLines[s].substring(this.curCol);
          this.curCol += t.length;
        }
      }
    };
    t.prototype.splitTextLines = function (t) {
      return t.match(/[^\n]*(?:\n|[^\n]$)/g);
    };
    t.prototype.hasMore = function () {
      var t = this.lines.length();
      if (this.inSplice) {
        t += this.curSpliceNewLines.length - this.curSpliceNumDelete;
      }
      return this.curLine < t;
    };
    t.prototype.close = function () {
      if (this.inSplice) {
        this.leaveSplice();
      }
    };
  })();
  function r(t, e) {
    return (r = Object.setPrototypeOf || {
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
  function i(t) {
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
  function o(t, e) {
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
  var s = function (t) {
    function e(e, n = false) {
      var r = t.call(this, e) || this;
      r.silence = n;
      return r;
    }
    (function (t, e) {
      function n() {
        this.constructor = t;
      }
      r(t, e);
      t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
    })(e, t);
    return e;
  }(Error);
  function a(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = o(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new s("Failed assertion: " + e, n);
    }
  }
  var u = function () {
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
          a(e in t.numToAttrib, "AttribPool: " + e + " is not in this.numToAttrib");
        }
        var n = {};
        for (var r in t.numToAttrib) {
          if (t.numToAttrib.hasOwnProperty(r)) {
            a(Number(r) >= 0 && Number(r) < t.nextNum, "AttribPool: " + r + " is not in range [0," + t.nextNum + "]");
            var i = t.numToAttrib[r];
            a(Object.prototype.toString.call(i) === "[object Array]", "AttribPool: attrib should be an array");
            a(i.length === 2, "AttribPool: attrib length should be 2");
            a(typeof i[0] == "string", "AttribPool: key should be string");
            a(typeof i[1] == "string", "AttribPool: value should be string");
            a(!(String(i) in n), "AttribPool: attrib was already seen");
            n[String(i)] = true;
            a(t.attribToNum[String(i)] === Number(r), "AttribPool: attribToNum does not match");
          }
        }
        for (var o in t.attribToNum) {
          if (t.attribToNum.hasOwnProperty(o)) {
            a(o in n, "AttribPool: attr was not seen");
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
  function c(t) {
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
  function l(t) {
    t.opcode = "";
    t.chars = 0;
    t.lines = 0;
    t.attribs = "";
  }
  function p(t, e) {
    e.opcode = t.opcode;
    e.chars = t.chars;
    e.lines = t.lines;
    e.attribs = t.attribs;
  }
  var h = function () {
    function t(t, e = 0) {
      this.opStr = t;
      this.index = e;
      this.op = c();
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
      l(e);
      return e;
    };
    return t;
  }();
  function f(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = o(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new s("Failed assertion: " + e, n);
    }
  }
  function d(t, e) {
    var n;
    var r;
    if (e === undefined) {
      e = 0;
    }
    n = t || "";
    if ((r = e) === undefined) {
      r = 0;
    }
    return new h(n || "", r);
  }
  function v(t) {
    return parseInt(t, 36);
  }
  var y = /\*([0-9a-z]+)/g;
  function g(t, e) {
    var n = t.indexOf("$");
    if (n < 0) {
      n = t.length;
    }
    var r = t.substring(0, n).match(y) || [];
    var i = 0;
    for (; i < r.length; i++) {
      e(v(r[i].substring(1)));
    }
  }
  function _(t) {
    return t.toString(36).toLowerCase();
  }
  function m(t, e, n, r) {
    if (!t && n) {
      return e;
    }
    if (!e) {
      return t;
    }
    var o;
    var s;
    var a = [];
    g(t, function (t) {
      a.push(r.getAttrib(t));
    });
    g(e, function (t) {
      var e = r.getAttrib(t);
      var i = false;
      var o = 0;
      for (; o < a.length; o++) {
        var s = a[o];
        if (s[0] === e[0]) {
          if (e[1] || n) {
            s[1] = e[1];
          } else {
            a.splice(o, 1);
          }
          i = true;
          break;
        }
      }
      if (!i && (e[1] || n)) {
        a.push(e);
      }
    });
    a.sort();
    var u = "";
    try {
      var c = i(a);
      var l = c.next();
      for (; !l.done; l = c.next()) {
        var p = l.value;
        u += "*" + _(r.putAttrib(p));
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        if (l && !l.done && (s = c.return)) {
          s.call(c);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return u;
  }
  function b() {
    var t;
    t = [];
    var e = {
      append: function (e) {
        t.push(e.attribs);
        if (e.lines) {
          t.push("|", _(e.lines));
        }
        t.push(e.opcode);
        t.push(_(e.chars));
      },
      toString: function () {
        return t.join("");
      },
      clear: function () {
        t.length = 0;
      }
    };
    var n = c();
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
            p(t, n);
          }
        }
      },
      toString: function () {
        i();
        return e.toString();
      },
      clear: function () {
        e.clear();
        l(n);
      },
      endDocument: function () {
        i(true);
      }
    };
  }
  function E(t, e, n) {
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
            r.push("*" + _(n.putAttrib(o)));
          }
        }
        return r.join("");
      }
    }
    return "";
  }
  function w() {
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
  function S() {
    var t = b();
    var e = b();
    var n = b();
    var r = w();
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
        var i = c(t);
        i.attribs = E(t, n, r);
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
  function T(t, e, n, r, i) {
    var o = d(t, e);
    var s = d(n, r);
    var a = S();
    var u = c();
    var l = c();
    var p = c();
    while (u.opcode || o.hasNext() || l.opcode || s.hasNext()) {
      if (!u.opcode && o.hasNext()) {
        o.next(u);
      }
      if (!l.opcode && s.hasNext()) {
        s.next(l);
      }
      i(u, l, p);
      if (p.opcode) {
        a.append(p);
        p.opcode = "";
      }
    }
    a.endDocument();
    return a.toString();
  }
  function I(t) {
    if (typeof t == "string") {
      return function (t) {
        var e = 0;
        var n = t.split("\n").length - 1;
        function r(t) {
          a(t <= i(), "!(n <= remaining())", false, {
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
          f(t <= r(), "!(n <= remaining())", false, {
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
  function A(t, e, n, r) {
    if (!t && n) {
      return e;
    }
    if (!e) {
      return t;
    }
    var o;
    var s;
    var a = [];
    t.replace(/\*([0-9a-z]+)/g, function (t, e) {
      a.push(r.getAttrib(v(e)));
      return "";
    });
    e.replace(/\*([0-9a-z]+)/g, function (t, e) {
      var i = r.getAttrib(v(e));
      var o = false;
      var s = 0;
      for (; s < a.length; s++) {
        var u = a[s];
        if (u[0] === i[0]) {
          if (i[1] || n) {
            u[1] = i[1];
          } else {
            a.splice(s, 1);
          }
          o = true;
          break;
        }
      }
      if (!o && (i[1] || n)) {
        a.push(i);
      }
      return "";
    });
    a.sort();
    var u = w();
    try {
      var c = i(a);
      var l = c.next();
      for (; !l.done; l = c.next()) {
        var p = l.value;
        u.append("*");
        u.append(_(r.putAttrib(p)));
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        if (l && !l.done && (s = c.return)) {
          s.call(c);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return u.toString();
  }
  function C(t) {
    a(t, "itemType should be defined");
    if (t === "Z") {
      return w();
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
  function M(t) {
    return k(t);
  }
  function k(t) {
    var e = {};
    var n = 0;
    while (n < t.length) {
      var r = /^(Z|ZR|ZC)([0-9a-z]*):([0-9a-z]+)([><])([0-9a-z]+)|/.exec(t.substring(n));
      if (!r || !r[0]) {
        throw new s("Changeset: Not a changeset: " + t + " at position " + n);
      }
      var i = r[1].charAt(r[1].length - 1);
      var o = r[2] === "" ? "0" : r[2];
      if (o in e) {
        for (var u in e) {
          if (e.hasOwnProperty(u) && e[u].itemType === "Z") {
            e[u].charBank = "obfuscated " + e[u].charBank.length;
          }
        }
        a(false, "zoneIds should be unique", false, {
          zoneId: o,
          cssObj: JSON.stringify(e)
        });
      }
      if (o === "0") {
        a(i === "Z", "itemType must be Z");
      }
      var c = v(r[3]);
      var l = c + (r[4] === ">" ? 1 : -1) * v(r[5]);
      var p = n + r[0].length;
      var h = t.indexOf("$", n);
      var f = t.indexOf("#", n);
      var d = f >= 0 && h >= 0 && f < h;
      var y = t.length;
      if (h >= 0) {
        y = h;
      }
      if (d) {
        y = f;
      }
      var g = h >= 0 ? h + 1 : t.length;
      var _ = d ? g + v(t.substring(f + 1, h)) : t.length;
      e[o] = {
        itemType: i,
        oldLen: c,
        newLen: l,
        ops: t.substring(p, y),
        charBank: t.substring(g, _)
      };
      if (i !== "Z") {
        a(e[o].ops.indexOf("|") === -1, "ops must has |");
        e[o].charBank = e[o].charBank === "" ? [] : e[o].charBank.split("|");
      }
      n = _;
    }
    return e;
  }
  function O(t, e) {
    var n = k(t);
    var r = {};
    for (var i in n) {
      if (n.hasOwnProperty(i)) {
        r[i] = e(i, n[i]);
      }
    }
    return r;
  }
  function R(t, e, n) {
    function r(t) {
      var e = {};
      for (var n in t) {
        if (t.hasOwnProperty(n)) {
          e[n] = t[n];
        }
      }
      return e;
    }
    f("0" in e.text, "0 must be in zatext.text");
    f("0" in e.attribs, "0 must be in zatext.attribs");
    var i = {
      text: r(e.text),
      attribs: r(e.attribs),
      rows: {},
      cols: {}
    };
    if (e.rows) {
      i.rows = r(e.rows);
    }
    if (e.cols) {
      i.cols = r(e.cols);
    }
    O(t, function (t, e) {
      var r;
      var o;
      r = i.text;
      if (e.itemType === "Z") {
        r = i.text;
      } else if (e.itemType === "R") {
        i.rows ||= {};
        r = i.rows;
      } else if (e.itemType === "C") {
        i.cols ||= {};
        r = i.cols;
      } else {
        f(false, "bad item type", false, {
          itemType: e.itemType
        });
      }
      if (!(t in r)) {
        r[t] = (o = e.itemType) === "Z" ? "\n" : o === "R" || o === "C" ? [] : (a(false, "itemType error"), "");
      }
      if (!(t in i.attribs)) {
        i.attribs[t] = function (t) {
          if (t === "Z") {
            return "|1+1";
          }
          if (t === "R" || t === "C") {
            return "";
          }
          throw new s("unrecognized itemType " + t);
        }(e.itemType);
      }
      r[t] = function (t, e, n) {
        a(e.length === t.oldLen, "mismatched apply: charBank.length / csObj.oldLen", false, {
          charBank: e.length,
          oldLen: t.oldLen
        });
        var r = d(t.ops);
        var i = I(t.charBank);
        var o = I(e);
        var s = C(t.itemType);
        while (r.hasNext()) {
          var u = r.next();
          switch (u.opcode) {
            case "+":
              s.append(i.take(u.chars));
              break;
            case "-":
              o.skip(u.chars);
              break;
            case "=":
              s.append(o.take(u.chars));
          }
        }
        s.append(o.take(o.remaining()));
        return s.toResult();
      }(e, r[t], 0);
      i.attribs[t] = function (t, e, n) {
        var r;
        var i;
        var o;
        var a = "";
        var u = 0;
        var c = 0;
        var l = 0;
        var p = 0;
        var h = 0;
        var f = 0;
        var v = "";
        var y = true;
        var g = 0;
        var b = d(t.ops);
        function E() {
          if (u > 0) {
            a += r + "|" + _(u) + "+" + _(c);
          }
          if (l > 0) {
            a += r + "+" + _(l);
          }
          u = 0;
          c = 0;
          l = 0;
        }
        function w(t, e, n) {
          if (t !== 0) {
            if ((c > 0 || l > 0) && r === n) {
              if (e) {
                c += t + l;
                u += e;
                l = 0;
              } else {
                l += t;
              }
            } else {
              E();
              if (e) {
                u = e;
                c = t;
              } else {
                l = t;
              }
              r = n;
            }
          }
        }
        function S() {
          if (p >= e.length) {
            throw new s("astr not long enough");
          }
          var t;
          var n = p;
          while (e.charCodeAt(p) !== 124 && e.charCodeAt(p) !== 43) {
            p++;
          }
          var r = p;
          var i = 0;
          if (e.charCodeAt(p) === 124) {
            for (p++; (t = e.charCodeAt(p)) !== 43;) {
              i = t >= 97 && t <= 122 ? i * 36 + (t - 97 + 10) : i * 36 + (t - 48);
              p++;
            }
          }
          var o = 0;
          for (p++;;) {
            if ((t = e.charCodeAt(p)) >= 97 && t <= 122) {
              o = o * 36 + (t - 97 + 10);
            } else {
              if (!(t >= 48) || !(t <= 57)) {
                break;
              }
              o = o * 36 + (t - 48);
            }
            p++;
          }
          return {
            attribStart: n,
            attribEnd: r,
            chars: o,
            lines: i
          };
        }
        while (b.hasNext()) {
          var T = b.next();
          if (T.opcode === "+") {
            if (y) {
              var I = -1;
              var A = g;
              var C = b.index;
              var M = b.index;
              var k = false;
              var O = t.ops;
              while (true) {
                var R = O.charCodeAt(M);
                if (k && (R === 124 || R === 42 || R === 43 || R === 45 || R === 61 || M === O.length)) {
                  k = false;
                  I = A;
                  A = C;
                  C = M;
                }
                if (M === O.length || R === 45 || R === 61) {
                  break;
                }
                if (R === 43) {
                  k = true;
                }
                M++;
              }
              if (I === -1) {
                w(T.chars, T.lines, T.attribs);
              } else {
                if (I > g) {
                  E();
                  a += O.substring(g, I);
                  b.index = I;
                  var D = b.next();
                  w(D.chars, D.lines, D.attribs);
                } else {
                  w(T.chars, T.lines, T.attribs);
                }
                var N = b.next();
                w(N.chars, N.lines, N.attribs);
              }
            } else {
              w(T.chars, T.lines, T.attribs);
              y = true;
              g = b.index;
            }
          } else if (T.opcode === "-") {
            y = false;
            if (T.chars <= f) {
              h -= T.lines;
              f -= T.chars;
            } else {
              T.lines -= h;
              T.chars -= f;
              h = 0;
              f = 0;
              while (true) {
                if ((i = S()).chars >= T.chars) {
                  f = i.chars - T.chars;
                  h = i.lines - T.lines;
                  v = e.substring(i.attribStart, i.attribEnd);
                  break;
                }
                T.chars -= i.chars;
                T.lines -= i.lines;
              }
            }
          } else {
            y = false;
            if (T.attribs === "") {
              if (f === 0) {
                f = (i = S()).chars;
                h = i.lines;
                v = e.substring(i.attribStart, i.attribEnd);
              }
              if (T.chars <= f) {
                w(T.chars, T.lines, v);
                h -= T.lines;
                f -= T.chars;
              } else {
                w(f, h, v);
                T.lines -= h;
                T.chars -= f;
                h = 0;
                f = 0;
                var x = p;
                o = null;
                i = null;
                while (!((i = S()).chars >= T.chars)) {
                  T.chars -= i.chars;
                  T.lines -= i.lines;
                  o = i;
                }
                if (o) {
                  if (o.attribStart > x) {
                    E();
                    a += e.substring(x, o.attribStart);
                  }
                  w(o.chars, o.lines, e.substring(o.attribStart, o.attribEnd));
                }
                v = e.substring(i.attribStart, i.attribEnd);
                w(T.chars, T.lines, v);
                f = i.chars - T.chars;
                h = i.lines - T.lines;
              }
            } else if (T.chars <= f) {
              w(T.chars, T.lines, m(v, T.attribs, false, n));
              h -= T.lines;
              f -= T.chars;
            } else {
              w(f, h, m(v, T.attribs, false, n));
              T.lines -= h;
              T.chars -= f;
              h = 0;
              f = 0;
              while (true) {
                i = S();
                var P = e.substring(i.attribStart, i.attribEnd);
                if (i.chars >= T.chars) {
                  w(T.chars, T.lines, m(P, T.attribs, false, n));
                  f = i.chars - T.chars;
                  h = i.lines - T.lines;
                  v = P;
                  break;
                }
                w(i.chars, i.lines, m(P, T.attribs, false, n));
                T.chars -= i.chars;
                T.lines -= i.lines;
              }
            }
          }
        }
        if (f === 0 && p < e.length) {
          f = (i = S()).chars;
          h = i.lines;
          v = e.substring(i.attribStart, i.attribEnd);
        }
        if (f > 0) {
          w(f, h, v);
        }
        E();
        if (p < e.length) {
          a += e.substring(p, e.length);
        }
        return a;
      }(e, i.attribs[t], n);
    });
    (function (t) {
      for (var e in t.text) {
        if (e !== "0" && t.text[e] === "\n") {
          delete t.text[e];
          delete t.attribs[e];
        }
      }
      if (t.rows) {
        for (var e in t.rows) {
          if (!t.rows[e] || t.rows[e].length === 0) {
            delete t.rows[e];
            if (e in t.attribs) {
              delete t.attribs[e];
            }
          }
        }
      }
      if (t.cols) {
        for (var e in t.cols) {
          if (!t.cols[e] || t.cols[e].length === 0) {
            delete t.cols[e];
            if (e in t.attribs) {
              delete t.attribs[e];
            }
          }
        }
      }
    })(i);
    return i;
  }
  function D(t) {
    var e = "";
    var n = Object.keys(t).sort();
    var r = 0;
    for (; r < n.length; r++) {
      var i = n[r];
      f(typeof i == "string", "pack: zoneId must be string");
      f(i !== "", "pack: zoneId cannot be empty string");
      if (r !== 0 && n[r] === n[r - 1]) {
        for (var o in t) {
          if (t.hasOwnProperty(o) && t[o].itemType === "Z") {
            t[o].charBank = "obfuscated " + t[o].charBank.length;
          }
        }
        f(false, "pack: zoneIds must be distinct zoneIds", false, {
          zoneIds: n,
          csMap: JSON.stringify(t)
        });
      }
      var s = t[i];
      (function (t, n, r, i, o, s, a) {
        f(t === "Z" || t === "R" || t === "C", "itemType error");
        if (t !== "Z") {
          o = o.join("|");
        }
        if (t !== "Z") {
          f(i.indexOf("|") === -1, "ops |");
        }
        var u = r - n;
        var c = u >= 0 ? ">" + _(u) : "<" + _(-u);
        e += (t !== "Z" ? "Z" : "") + t + (a === "0" ? "" : a) + ":" + _(n) + c + i;
        if (!s) {
          e += "#" + _(o.length);
        }
        e += "$" + o;
      })(s.itemType, s.oldLen, s.newLen, s.ops, s.charBank, r === n.length - 1, i);
    }
    return e;
  }
  function N(t, e, n) {
    var r;
    var i;
    var o;
    var a;
    var u;
    var l;
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
    o = S();
    a = c();
    u = C(r);
    return l = {
      keepOverOp: function (t) {
        l.keep(t.chars, t.lines);
      },
      keepOverOpWithNewAttributes: function (t, e, n) {
        l.keep(t.chars, t.lines, e, n);
      },
      keepOverOpWithoutAttribute: function (t, e, n) {
        l.keep(t.chars, t.lines, [[e, ""]], n);
      },
      keep: function (t, e, n, r) {
        a.opcode = "=";
        a.attribs = n && E("=", n, r) || "";
        a.chars = t;
        a.lines = e || 0;
        o.append(a);
        return l;
      },
      keepText: function (t, e, n) {
        o.appendOpWithText("=", t, e, n);
        return l;
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
        u.append(t);
        return l;
      },
      remove: function (t, e) {
        a.opcode = "-";
        a.attribs = "";
        a.chars = t;
        a.lines = e || 0;
        o.append(a);
        return l;
      },
      removeText: function (t) {
        o.appendOpWithText("-", t);
      },
      insertAText: function (t) {
        if (t.text.charAt(t.text.length - 1) !== "\n") {
          throw new s("insertAText: text must end in newline");
        }
        (function (t, e) {
          var n = d(t.attribs);
          var r = c();
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
        u.append(t.text.slice(0, -1));
        return l;
      },
      toChangeset: function () {
        if (!i) {
          throw new s("Changeset: zoneId should be non-trivial");
        }
        var t = {};
        t[i] = l.toUnpacked();
        return D(t);
      },
      toString: function () {
        if (!i) {
          throw new s("Changeset: zoneId should be non-trivial");
        }
        var t = {};
        t[i] = l.toUnpacked();
        return D(t);
      },
      toUnpacked: function () {
        o.endDocument();
        var e = t + o.getLengthChange();
        return {
          itemType: r,
          oldLen: t,
          newLen: e,
          ops: o.toString(),
          charBank: u.toResult()
        };
      }
    };
  }
  function x(t, e, n, r) {
    var i;
    var o;
    var s;
    var u;
    if (r === undefined) {
      r = false;
    }
    i = t;
    o = e;
    s = n;
    if ((u = r) === undefined) {
      u = false;
    }
    return D(function (t, e, n, r) {
      function i(t, e, i) {
        if (!e) {
          return i;
        }
        if (!i) {
          return e;
        }
        var o = e.oldLen;
        a(e.newLen === i.oldLen, "mismatched composition");
        var s = i.newLen;
        var u = I(e.charBank);
        var c = I(i.charBank);
        var l = C(e.itemType);
        var h = T(e.ops, 0, i.ops, 0, function (t, e, i) {
          var o = t.opcode;
          var s = e.opcode;
          if (o === "+" && s === "-") {
            u.skip(Math.min(t.chars, e.chars));
          }
          (function (t, e, n, r, i = false) {
            if (t.opcode === "-") {
              p(t, n);
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
                  p(e, n);
                  e.opcode = "";
                  break;
                case "=":
                  if (e.chars <= t.chars) {
                    n.opcode = t.opcode;
                    n.chars = e.chars;
                    n.lines = e.lines;
                    n.attribs = A(t.attribs, e.attribs, t.opcode === "=", r);
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
                    n.attribs = A(t.attribs, e.attribs, t.opcode === "=", r);
                    t.opcode = "";
                    e.chars -= t.chars;
                    e.lines -= t.lines;
                  }
                  break;
                case "":
                  p(t, n);
                  t.opcode = "";
              }
            } else {
              p(e, n);
              e.opcode = "";
            }
          })(t, e, i, n, r);
          if (i.opcode === "+") {
            if (s === "+") {
              l.append(c.take(i.chars));
            } else {
              l.append(u.take(i.chars));
            }
          }
        });
        var f = l.toResult();
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
      for (var u in t) {
        if (t.hasOwnProperty(u)) {
          if (e[u]) {
            a(t[u].itemType === e[u].itemType, "cs1 and cs2 itemType error");
          }
          if ((o = i(u, t[u], e[u] || null)) !== null) {
            s[u] = o;
          }
        }
      }
      for (var u in e) {
        if (!!e.hasOwnProperty(u) && !(u in t) && (o = i(u, null, e[u])) !== null) {
          s[u] = o;
        }
      }
      return s;
    }(k(i), k(o), s, u));
  }
  function P(t, e, n) {
    return function (t, e) {
      function n(t) {
        var e = S();
        var n = d(t);
        while (n.hasNext()) {
          var i = n.next();
          i.attribs = r(i.attribs);
          e.append(i);
        }
        e.endDocument();
        return e.toString();
      }
      function r(t) {
        return t.replace(/\*([0-9a-z]+)/g, function (t, n) {
          var r = e(v(n));
          if (r === true) {
            return t;
          } else if (typeof r == "number") {
            return "*" + _(r);
          } else {
            return "";
          }
        });
      }
      if (t.length > 0 && t[0] === "Z") {
        return D(O(t, function (t, e) {
          e.ops = n(e.ops);
          return e;
        }));
      } else if (t.indexOf("+") !== -1 || t.indexOf("=") !== -1) {
        return n(t);
      } else {
        return r(t);
      }
    }(t, function (t) {
      var r = e.getAttrib(t);
      if (r) {
        return n.putAttrib(r);
      } else {
        return null;
      }
    });
  }
  var B = "zone_changesets";
  function L(t, e) {
    var n;
    var r = new u().fromJsonableNoCloning(t.apool);
    var i = new u().fromJsonableNoCloning(e.apool);
    var o = {};
    for (var s in t[B]) {
      if (t[B].hasOwnProperty(s)) {
        var a = P(t[B][s], r, i);
        o[s] = x(a, e[B][s] || "", i);
      }
    }
    for (var s in e[B]) {
      if (!t[B][s]) {
        o[s] = x("", e[B][s], i);
      }
    }
    (n = {})[B] = o;
    n.apool = i.toJsonable();
    return n;
  }
  function F(t, e, n, r) {
    var i;
    var o = 0;
    var s = 0;
    var u = null;
    var l = c("+");
    var p = d(t.ops);
    var h = N(t.newLen, t.itemType);
    var f = [];
    var v = [];
    function y(t) {
      if (e.atIndex) {
        return e.atIndex(t).text + "\n";
      } else if (e.get) {
        return e.get(t);
      } else {
        return e[t];
      }
    }
    function _(t, e) {
      if (!u || i !== o) {
        u = d(n[o]);
        i = o;
        var r = 0;
        var c = false;
        while (!c) {
          a(u.hasNext(), "curLineOpIter has next 1");
          u.next(l);
          if (r + l.chars >= s) {
            l.chars -= s - r;
            c = true;
          } else {
            r += l.chars;
          }
        }
      }
      while (t > 0) {
        if (!l.chars && !u.hasNext()) {
          s = 0;
          i = ++o;
          l.chars = 0;
          u = d(n[o]);
        }
        if (!l.chars) {
          a(u.hasNext(), "curLineOpIter has next 2");
          u.next(l);
        }
        var p = Math.min(t, l.chars);
        e(p, l.attribs, p === l.chars && l.lines > 0);
        t -= p;
        l.chars -= p;
        s += p;
      }
      if (!l.chars && !u.hasNext()) {
        o++;
        s = 0;
      }
    }
    while (p.hasNext()) {
      (function () {
        var e = p.next();
        if (e.opcode === "=") {
          if (e.attribs) {
            f.length = 0;
            v.length = 0;
            g(e.attribs, function (t) {
              f.push(r.getAttribKey(t));
              v.push(r.getAttribValue(t));
            });
            var n;
            var a;
            var c;
            var l;
            c = function (t) {
              var e = [];
              var n = 0;
              for (; n < f.length; n++) {
                var i = f[n];
                var o = v[n];
                var s = function (t, e, n) {
                  var r = "";
                  if (t) {
                    g(t, function (t) {
                      if (n.getAttribKey(t) === e) {
                        r = n.getAttribValue(t);
                      }
                    });
                  }
                  return r;
                }(t, i, r);
                if (o !== s) {
                  e.push([i, s]);
                }
              }
              return E("=", e, r);
            };
            l = {};
            function d(t) {
              l[t] ||= c(t);
              return l[t];
            }
            _(e.chars, function (t, e, n) {
              h.keep(t, +!!n, d(e));
            });
          } else {
            n = e.chars;
            if (a = e.lines) {
              o += a;
              s = 0;
            } else if (u && i === o) {
              _(n, function () {});
            } else {
              s += n;
            }
            h.keep(e.chars, e.lines);
          }
        } else if (e.opcode === "+") {
          h.remove(e.chars, e.lines);
        } else if (e.opcode === "-") {
          var m = function (e) {
            var n = 0;
            var r = C(t.itemType);
            var i = I(y(o));
            i.skip(s);
            var a = i.take(i.remaining());
            n += a.length;
            r.append(a);
            var u = o + 1;
            while (n < e) {
              var c = y(u);
              n += c.length;
              r.append(c);
              u++;
            }
            return (i = I(r.toResult())).take(Math.min(e, i.remaining()));
          }(e.chars);
          var b = 0;
          _(e.chars, function (t, e, n) {
            var r = I(m);
            r.skip(b);
            h.insert(r.take(Math.min(r.remaining(), t)), e);
            b += t;
          });
        }
      })();
    }
    return h.toUnpacked();
  }
  function j(t, e, n, r) {
    return D(function (t, e, n) {
      var r = {};
      for (var i in t) {
        if (t.hasOwnProperty(i)) {
          if (e[i]) {
            a(t[i].itemType === e[i].itemType, "map follow itemType error");
          }
          var o = n(i, t[i], e[i] || null);
          if (o !== null) {
            r[i] = o;
          }
        }
      }
      for (var i in e) {
        if (!(i in t)) {
          var o = n(i, null, e[i]);
          if (o !== null) {
            r[i] = o;
          }
        }
      }
      return r;
    }(k(t), k(e), function (t, e, o) {
      var s;
      var u;
      var c;
      var l;
      var h;
      var f;
      var d;
      if (e) {
        if (o) {
          a(e.oldLen === o.oldLen, "mismatched follow - cannot transform cs1 on top of cs2", false, {
            unpacked1: JSON.stringify(e),
            unpacked2: JSON.stringify(o)
          });
          s = I(e.charBank);
          u = I(o.charBank);
          c = e.newLen;
          l = 0;
          h = 0;
          f = function (t, e) {
            if (!e) {
              return i;
            }
            var n = e.putAttrib(t, true);
            if (n < 0) {
              return i;
            }
            var r = RegExp("\\*" + _(n) + "(?!\\w)");
            return function (t) {
              return r.test(t);
            };
            function i() {
              return false;
            }
          }(["insertorder", "first"], r);
          d = T(e.ops, 0, o.ops, 0, function (t, e, o) {
            if (t.opcode === "+" || e.opcode === "+") {
              var a = undefined;
              if (e.opcode !== "+") {
                a = 1;
              } else if (t.opcode !== "+") {
                a = 2;
              } else {
                var c = s.peek(1);
                var d = u.peek(1);
                var y = f(t.attribs);
                var g = f(e.attribs);
                a = y && !g ? 1 : g && !y ? 2 : c === "\n" && d !== "\n" ? 2 : c !== "\n" && d === "\n" ? 1 : n ? 2 : 1;
              }
              if (a === 1) {
                s.skip(t.chars);
                o.opcode = "=";
                o.lines = t.lines;
                o.chars = t.chars;
                o.attribs = "";
                t.opcode = "";
              } else {
                u.skip(e.chars);
                p(e, o);
                e.opcode = "";
              }
            } else if (t.opcode === "-") {
              if (e.opcode) {
                if (t.chars <= e.chars) {
                  e.chars -= t.chars;
                  e.lines -= t.lines;
                  t.opcode = "";
                  if (!e.chars) {
                    e.opcode = "";
                  }
                } else {
                  t.chars -= e.chars;
                  t.lines -= e.lines;
                  e.opcode = "";
                }
              } else {
                t.opcode = "";
              }
            } else if (e.opcode === "-") {
              p(e, o);
              if (t.opcode) {
                if (e.chars <= t.chars) {
                  t.chars -= e.chars;
                  t.lines -= e.lines;
                  e.opcode = "";
                  if (!t.chars) {
                    t.opcode = "";
                  }
                } else {
                  o.lines = t.lines;
                  o.chars = t.chars;
                  e.lines -= t.lines;
                  e.chars -= t.chars;
                  t.opcode = "";
                }
              } else {
                e.opcode = "";
              }
            } else if (t.opcode) {
              if (e.opcode) {
                o.opcode = "=";
                o.attribs = function (t, e, n) {
                  if (!e || !n) {
                    return "";
                  }
                  if (!t) {
                    return e;
                  }
                  var r;
                  var o;
                  var s = [];
                  e.replace(/\*([0-9a-z]+)/g, function (t, e) {
                    s.push(n.getAttrib(v(e)));
                    return "";
                  });
                  t.replace(/\*([0-9a-z]+)/g, function (t, e) {
                    var r = n.getAttrib(v(e));
                    var i = 0;
                    for (; i < s.length; i++) {
                      var o = s[i];
                      if (r[0] === o[0]) {
                        if (r[1] <= o[1]) {
                          s.splice(i, 1);
                        }
                        break;
                      }
                    }
                    return "";
                  });
                  var a = w();
                  try {
                    var u = i(s);
                    var c = u.next();
                    for (; !c.done; c = u.next()) {
                      var l = c.value;
                      a.append("*");
                      a.append(_(n.putAttrib(l)));
                    }
                  } catch (t) {
                    r = {
                      error: t
                    };
                  } finally {
                    try {
                      if (c && !c.done && (o = u.return)) {
                        o.call(u);
                      }
                    } finally {
                      if (r) {
                        throw r.error;
                      }
                    }
                  }
                  return a.toString();
                }(t.attribs, e.attribs, r);
                if (t.chars <= e.chars) {
                  o.chars = t.chars;
                  o.lines = t.lines;
                  e.chars -= t.chars;
                  e.lines -= t.lines;
                  t.opcode = "";
                  if (!e.chars) {
                    e.opcode = "";
                  }
                } else {
                  o.chars = e.chars;
                  o.lines = e.lines;
                  t.chars -= e.chars;
                  t.lines -= e.lines;
                  e.opcode = "";
                }
              } else {
                t.opcode = "";
              }
            } else {
              p(e, o);
              e.opcode = "";
            }
            switch (o.opcode) {
              case "=":
                l += o.chars;
                h += o.chars;
                break;
              case "-":
                l += o.chars;
                break;
              case "+":
                h += o.chars;
            }
          });
          h += c - l;
          return {
            itemType: o.itemType,
            oldLen: c,
            newLen: h,
            ops: d,
            charBank: o.charBank
          };
        } else {
          return null;
        }
      } else {
        return o;
      }
    }));
  }
  function U(t) {
    return function (t) {
      var e = k(t);
      var n = {};
      for (var r in e) {
        if (e.hasOwnProperty(r)) {
          var i = e[r];
          var o = i.oldLen;
          var s = i.newLen;
          var a = i.ops;
          var u = i.itemType;
          var c = i.charBank;
          n[r] = function (t, e, n, r, i, o) {
            var s;
            if (i === undefined) {
              i = "0";
            }
            if (o === undefined) {
              o = "Z";
            }
            return D(((s = {})[i] = {
              charBank: r,
              itemType: o,
              newLen: e,
              oldLen: t,
              ops: n
            }, s));
          }(o, s, a, c, r, u);
        }
      }
      return n;
    }(t);
  }
  function z(t) {
    return function (t) {
      var e = {};
      for (var n in t) {
        if (t.hasOwnProperty(n)) {
          Object.assign(e, k(t[n]));
        }
      }
      return D(e);
    }(t);
  }
  var H = u;
  require.d(exports, {
    AttribPool: function () {
      return H;
    },
    unpackChangesets: function () {
      return U;
    },
    ZONE_CHANGESETS: function () {
      return B;
    },
    iterateAttribs: function () {
      return g;
    },
    applyChangeset: function () {
      return R;
    },
    packChangesets: function () {
      return D;
    },
    composeChangesets: function () {
      return F;
    },
    parseChangeset: function () {
      return M;
    },
    createOpIterator: function () {
      return d;
    },
    mergeChangesetMaps: function () {
      return z;
    },
    followChangeset: function () {
      return j;
    },
    mapAttribs: function () {
      return P;
    },
    base36Decode: function () {
      return v;
    },
    buildChangeset: function () {
      return N;
    },
    composeChangesetDocs: function () {
      return L;
    }
  });
}