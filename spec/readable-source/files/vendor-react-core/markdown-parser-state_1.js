// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'markdownTokenClass'
// - Resolved require(687389) to 'markdown-token-class'
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 336939
         */
module.exports = function (module, exports, require) {
  var markdownTokenClass = require("markdown-token-class") /*id: 687389*/;
  var i = require("markdown-common-utils") /*id: 708770*/.isWhiteSpace;
  var o = require("markdown-common-utils") /*id: 708770*/.isPunctChar;
  var s = require("markdown-common-utils") /*id: 708770*/.isMdAsciiPunct;
  function a(t, e, r, n) {
    this.src = t;
    this.env = r;
    this.md = e;
    this.tokens = n;
    this.tokens_meta = Array(n.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = {};
    this.delimiters = [];
    this._prev_delimiters = [];
    this.backticks = {};
    this.backticksScanned = false;
  }
  a.prototype.pushPending = function () {
    var t = new markdownTokenClass("text", "", 0);
    t.content = this.pending;
    t.level = this.pendingLevel;
    this.tokens.push(t);
    this.pending = "";
    return t;
  };
  a.prototype.push = function (t, e, r) {
    if (this.pending) {
      this.pushPending();
    }
    var i = new markdownTokenClass(t, e, r);
    var o = null;
    if (r < 0) {
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }
    i.level = this.level;
    if (r > 0) {
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      o = {
        delimiters: this.delimiters
      };
    }
    this.pendingLevel = this.level;
    this.tokens.push(i);
    this.tokens_meta.push(o);
    return i;
  };
  a.prototype.scanDelims = function (t, e) {
    var r;
    var n;
    var a;
    var c;
    var l;
    var u;
    var h;
    var p;
    var f;
    var d = t;
    var g = true;
    var m = true;
    var _ = this.posMax;
    var v = this.src.charCodeAt(t);
    for (r = t > 0 ? this.src.charCodeAt(t - 1) : 32; d < _ && this.src.charCodeAt(d) === v;) {
      d++;
    }
    a = d - t;
    n = d < _ ? this.src.charCodeAt(d) : 32;
    h = s(r) || o(String.fromCharCode(r));
    f = s(n) || o(String.fromCharCode(n));
    u = i(r);
    if (p = i(n)) {
      g = false;
    } else if (f && !u && !h) {
      g = false;
    }
    if (u) {
      m = false;
    } else if (h && !p && !f) {
      m = false;
    }
    if (e) {
      c = g;
      l = m;
    } else {
      c = g && (!m || h);
      l = m && (!g || f);
    }
    return {
      can_open: c,
      can_close: l,
      length: a
    };
  };
  a.prototype.Token = markdownTokenClass;
  module.exports = a;
}