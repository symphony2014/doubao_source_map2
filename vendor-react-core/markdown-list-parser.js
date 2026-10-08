// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 326750
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.isSpace;
  function i(t, e) {
    var r;
    var i;
    var o;
    i = t.bMarks[e] + t.tShift[e];
    o = t.eMarks[e];
    if ((r = t.src.charCodeAt(i++)) !== 42 && r !== 45 && r !== 43 || i < o && !n(t.src.charCodeAt(i))) {
      return -1;
    } else {
      return i;
    }
  }
  function o(t, e) {
    var r;
    var i = t.bMarks[e] + t.tShift[e];
    var o = i;
    var s = t.eMarks[e];
    if (o + 1 >= s || (r = t.src.charCodeAt(o++)) < 48 || r > 57) {
      return -1;
    }
    while (true) {
      if (o >= s) {
        return -1;
      }
      if ((r = t.src.charCodeAt(o++)) >= 48 && r <= 57) {
        if (o - i >= 10) {
          return -1;
        }
        continue;
      }
      if (r === 41 || r === 46) {
        break;
      }
      return -1;
    }
    if (o < s && !n(r = t.src.charCodeAt(o))) {
      return -1;
    } else {
      return o;
    }
  }
  module.exports = function (t, e, r, n) {
    var s;
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
    var A;
    var E;
    var D;
    var S;
    var I;
    var Z;
    var F;
    var L;
    var q;
    var z = false;
    var T = true;
    if (t.sCount[e] - t.blkIndent >= 4 || t.listIndent >= 0 && t.sCount[e] - t.listIndent >= 4 && t.sCount[e] < t.blkIndent) {
      return false;
    }
    if (n && t.parentType === "paragraph" && t.sCount[e] >= t.blkIndent) {
      z = true;
    }
    if ((S = o(t, e)) >= 0) {
      p = true;
      Z = t.bMarks[e] + t.tShift[e];
      v = Number(t.src.slice(Z, S - 1));
      if (z && v !== 1) {
        return false;
      }
    } else {
      if (!((S = i(t, e)) >= 0)) {
        return false;
      }
      p = false;
    }
    if (z && t.skipSpaces(S) >= t.eMarks[e]) {
      return false;
    }
    _ = t.src.charCodeAt(S - 1);
    if (n) {
      return true;
    }
    m = t.tokens.length;
    if (p) {
      q = t.push("ordered_list_open", "ol", 1);
      if (v !== 1) {
        q.attrs = [["start", v]];
      }
    } else {
      q = t.push("bullet_list_open", "ul", 1);
    }
    q.map = g = [e, 0];
    q.markup = String.fromCharCode(_);
    k = e;
    I = false;
    L = t.md.block.ruler.getRules("list");
    x = t.parentType;
    t.parentType = "list";
    while (k < r) {
      D = S;
      b = t.eMarks[k];
      h = y = t.sCount[k] + S - (t.bMarks[e] + t.tShift[e]);
      while (D < b) {
        if ((s = t.src.charCodeAt(D)) === 9) {
          y += 4 - (y + t.bsCount[k]) % 4;
        } else if (s === 32) {
          y++;
        } else {
          break;
        }
        D++;
      }
      if ((u = (a = D) >= b ? 1 : y - h) > 4) {
        u = 1;
      }
      l = h + u;
      (q = t.push("list_item_open", "li", 1)).markup = String.fromCharCode(_);
      q.map = f = [e, 0];
      if (p) {
        q.info = t.src.slice(Z, S - 1);
      }
      E = t.tight;
      A = t.tShift[e];
      w = t.sCount[e];
      C = t.listIndent;
      t.listIndent = t.blkIndent;
      t.blkIndent = l;
      t.tight = true;
      t.tShift[e] = a - t.bMarks[e];
      t.sCount[e] = y;
      if (a >= b && t.isEmpty(e + 1)) {
        t.line = Math.min(t.line + 2, r);
      } else {
        t.md.block.tokenize(t, e, r, true);
      }
      if (!t.tight || I) {
        T = false;
      }
      I = t.line - e > 1 && t.isEmpty(t.line - 1);
      t.blkIndent = t.listIndent;
      t.listIndent = C;
      t.tShift[e] = A;
      t.sCount[e] = w;
      t.tight = E;
      (q = t.push("list_item_close", "li", -1)).markup = String.fromCharCode(_);
      k = e = t.line;
      f[1] = k;
      a = t.bMarks[e];
      if (k >= r || t.sCount[k] < t.blkIndent || t.sCount[e] - t.blkIndent >= 4) {
        break;
      }
      c = 0;
      F = false;
      d = L.length;
      for (; c < d; c++) {
        if (L[c](t, k, r, true)) {
          F = true;
          break;
        }
      }
      if (F) {
        break;
      }
      if (p) {
        if ((S = o(t, k)) < 0) {
          break;
        }
        Z = t.bMarks[k] + t.tShift[k];
      } else if ((S = i(t, k)) < 0) {
        break;
      }
      if (_ !== t.src.charCodeAt(S - 1)) {
        break;
      }
    }
    (q = p ? t.push("ordered_list_close", "ol", -1) : t.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(_);
    g[1] = k;
    t.line = k;
    t.parentType = x;
    if (T) {
      (function (t, e) {
        var r;
        var n;
        var i = t.level + 2;
        r = e + 2;
        n = t.tokens.length - 2;
        for (; r < n; r++) {
          if (t.tokens[r].level === i && t.tokens[r].type === "paragraph_open") {
            t.tokens[r + 2].hidden = true;
            t.tokens[r].hidden = true;
            r += 2;
          }
        }
      })(t, m);
    }
    return true;
  };
}