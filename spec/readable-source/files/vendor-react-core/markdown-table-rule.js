// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 995304
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.isSpace;
  function i(t, e) {
    var r = t.bMarks[e] + t.tShift[e];
    var n = t.eMarks[e];
    return t.src.substr(r, n - r);
  }
  function o(t) {
    var e;
    var r = [];
    var n = 0;
    var i = t.length;
    var o = false;
    var s = 0;
    var a = "";
    for (e = t.charCodeAt(n); n < i;) {
      if (e === 124) {
        if (o) {
          a += t.substring(s, n - 1);
          s = n;
        } else {
          r.push(a + t.substring(s, n));
          a = "";
          s = n + 1;
        }
      }
      o = e === 92;
      n++;
      e = t.charCodeAt(n);
    }
    r.push(a + t.substring(s));
    return r;
  }
  module.exports = function (t, e, r, s) {
    var a;
    var c;
    var l;
    var u;
    var h;
    var p;
    var f;
    var d;
    var g;
    var m;
    var _;
    var v;
    var b;
    var k;
    var y;
    var C;
    var x;
    var w;
    if (e + 2 > r || (p = e + 1, t.sCount[p] < t.blkIndent || t.sCount[p] - t.blkIndent >= 4 || (l = t.bMarks[p] + t.tShift[p]) >= t.eMarks[p] || (x = t.src.charCodeAt(l++)) !== 124 && x !== 45 && x !== 58 || l >= t.eMarks[p] || (w = t.src.charCodeAt(l++)) !== 124 && w !== 45 && w !== 58 && !n(w) || x === 45 && n(w))) {
      return false;
    }
    while (l < t.eMarks[p]) {
      if ((a = t.src.charCodeAt(l)) !== 124 && a !== 45 && a !== 58 && !n(a)) {
        return false;
      }
      l++;
    }
    u = 0;
    f = (c = i(t, e + 1)).split("|");
    m = [];
    for (; u < f.length; u++) {
      if (!(_ = f[u].trim())) {
        if (u === 0 || u === f.length - 1) {
          continue;
        }
        return false;
      }
      if (!/^:?-+:?$/.test(_)) {
        return false;
      }
      if (_.charCodeAt(_.length - 1) === 58) {
        m.push(_.charCodeAt(0) === 58 ? "center" : "right");
      } else if (_.charCodeAt(0) === 58) {
        m.push("left");
      } else {
        m.push("");
      }
    }
    if ((c = i(t, e).trim()).indexOf("|") === -1 || t.sCount[e] - t.blkIndent >= 4 || ((f = o(c)).length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), (d = f.length) === 0 || d !== m.length)) {
      return false;
    }
    if (s) {
      return true;
    }
    u = 0;
    k = t.parentType;
    t.parentType = "table";
    C = t.md.block.ruler.getRules("blockquote");
    (g = t.push("table_open", "table", 1)).map = v = [e, 0];
    (g = t.push("thead_open", "thead", 1)).map = [e, e + 1];
    (g = t.push("tr_open", "tr", 1)).map = [e, e + 1];
    for (; u < f.length; u++) {
      g = t.push("th_open", "th", 1);
      if (m[u]) {
        g.attrs = [["style", "text-align:" + m[u]]];
      }
      (g = t.push("inline", "", 0)).content = f[u].trim();
      g.children = [];
      g = t.push("th_close", "th", -1);
    }
    g = t.push("tr_close", "tr", -1);
    g = t.push("thead_close", "thead", -1);
    p = e + 2;
    for (; p < r && !(t.sCount[p] < t.blkIndent); p++) {
      u = 0;
      y = false;
      h = C.length;
      for (; u < h; u++) {
        if (C[u](t, p, r, true)) {
          y = true;
          break;
        }
      }
      if (y || !(c = i(t, p).trim()) || t.sCount[p] - t.blkIndent >= 4) {
        break;
      }
      if ((f = o(c)).length && f[0] === "") {
        f.shift();
      }
      if (f.length && f[f.length - 1] === "") {
        f.pop();
      }
      if (p === e + 2) {
        (g = t.push("tbody_open", "tbody", 1)).map = b = [e + 2, 0];
      }
      (g = t.push("tr_open", "tr", 1)).map = [p, p + 1];
      u = 0;
      for (; u < d; u++) {
        g = t.push("td_open", "td", 1);
        if (m[u]) {
          g.attrs = [["style", "text-align:" + m[u]]];
        }
        (g = t.push("inline", "", 0)).content = f[u] ? f[u].trim() : "";
        g.children = [];
        g = t.push("td_close", "td", -1);
      }
      g = t.push("tr_close", "tr", -1);
    }
    if (b) {
      g = t.push("tbody_close", "tbody", -1);
      b[1] = p;
    }
    g = t.push("table_close", "table", -1);
    v[1] = p;
    t.parentType = k;
    t.line = p;
    return true;
  };
}