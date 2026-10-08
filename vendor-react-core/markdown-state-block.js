// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'markdownTokenClass'
// - Resolved require(687389) to 'markdown-token-class'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 633302
         */
module.exports = function (module, exports, require) {
  var markdownTokenClass = require("markdown-token-class") /*id: 687389*/;
  var i = require("markdown-common-utils") /*id: 708770*/.isSpace;
  function o(t, e, r, n) {
    var o;
    var s;
    var a;
    var c;
    var l;
    var u;
    var h;
    var p;
    this.src = t;
    this.md = e;
    this.env = r;
    this.tokens = n;
    this.bMarks = [];
    this.eMarks = [];
    this.tShift = [];
    this.sCount = [];
    this.bsCount = [];
    this.blkIndent = 0;
    this.line = 0;
    this.lineMax = 0;
    this.tight = false;
    this.ddIndent = -1;
    this.listIndent = -1;
    this.parentType = "root";
    this.level = 0;
    this.result = "";
    s = this.src;
    p = false;
    a = c = u = h = 0;
    l = s.length;
    for (; c < l; c++) {
      o = s.charCodeAt(c);
      if (!p) {
        if (i(o)) {
          u++;
          if (o === 9) {
            h += 4 - h % 4;
          } else {
            h++;
          }
          continue;
        }
        p = true;
      }
      if (o === 10 || c === l - 1) {
        if (o !== 10) {
          c++;
        }
        this.bMarks.push(a);
        this.eMarks.push(c);
        this.tShift.push(u);
        this.sCount.push(h);
        this.bsCount.push(0);
        p = false;
        u = 0;
        h = 0;
        a = c + 1;
      }
    }
    this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  o.prototype.push = function (t, e, r) {
    var i = new markdownTokenClass(t, e, r);
    i.block = true;
    if (r < 0) {
      this.level--;
    }
    i.level = this.level;
    if (r > 0) {
      this.level++;
    }
    this.tokens.push(i);
    return i;
  };
  o.prototype.isEmpty = function (t) {
    return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
  };
  o.prototype.skipEmptyLines = function (t) {
    for (var e = this.lineMax; t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++);
    return t;
  };
  o.prototype.skipSpaces = function (t) {
    for (var e = this.src.length; t < e && i(this.src.charCodeAt(t)); t++);
    return t;
  };
  o.prototype.skipSpacesBack = function (t, e) {
    if (t <= e) {
      return t;
    }
    while (t > e) {
      if (!i(this.src.charCodeAt(--t))) {
        return t + 1;
      }
    }
    return t;
  };
  o.prototype.skipChars = function (t, e) {
    for (var r = this.src.length; t < r && this.src.charCodeAt(t) === e; t++);
    return t;
  };
  o.prototype.skipCharsBack = function (t, e, r) {
    if (t <= r) {
      return t;
    }
    while (t > r) {
      if (e !== this.src.charCodeAt(--t)) {
        return t + 1;
      }
    }
    return t;
  };
  o.prototype.getLines = function (t, e, r, n) {
    var o;
    var s;
    var a;
    var c;
    var l;
    var u;
    var h;
    var p = t;
    if (t >= e) {
      return "";
    }
    o = 0;
    u = Array(e - t);
    for (; p < e; p++, o++) {
      s = 0;
      h = c = this.bMarks[p];
      l = p + 1 < e || n ? this.eMarks[p] + 1 : this.eMarks[p];
      while (c < l && s < r) {
        if (i(a = this.src.charCodeAt(c))) {
          if (a === 9) {
            s += 4 - (s + this.bsCount[p]) % 4;
          } else {
            s++;
          }
        } else if (c - h < this.tShift[p]) {
          s++;
        } else {
          break;
        }
        c++;
      }
      if (s > r) {
        u[o] = Array(s - r + 1).join(" ") + this.src.slice(c, l);
      } else {
        u[o] = this.src.slice(c, l);
      }
    }
    return u.join("");
  };
  o.prototype.Token = markdownTokenClass;
  module.exports = o;
}