// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 128190
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.isSpace;
  module.exports = function (t, e, r, i) {
    var o;
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
    var A = t.lineMax;
    var E = t.bMarks[e] + t.tShift[e];
    var D = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(E++) !== 62) {
      return false;
    }
    if (i) {
      return true;
    }
    c = f = t.sCount[e] + 1;
    if (t.src.charCodeAt(E) === 32) {
      E++;
      c++;
      f++;
      o = false;
      k = true;
    } else if (t.src.charCodeAt(E) === 9) {
      k = true;
      if ((t.bsCount[e] + f) % 4 == 3) {
        E++;
        c++;
        f++;
        o = false;
      } else {
        o = true;
      }
    } else {
      k = false;
    }
    d = [t.bMarks[e]];
    t.bMarks[e] = E;
    while (E < D && n(s = t.src.charCodeAt(E))) {
      if (s === 9) {
        f += 4 - (f + t.bsCount[e] + +!!o) % 4;
      } else {
        f++;
      }
      E++;
    }
    g = [t.bsCount[e]];
    t.bsCount[e] = t.sCount[e] + 1 + +!!k;
    u = E >= D;
    v = [t.sCount[e]];
    t.sCount[e] = f - c;
    b = [t.tShift[e]];
    t.tShift[e] = E - t.bMarks[e];
    C = t.md.block.ruler.getRules("blockquote");
    _ = t.parentType;
    t.parentType = "blockquote";
    p = e + 1;
    for (; p < r && (w = t.sCount[p] < t.blkIndent, !((E = t.bMarks[p] + t.tShift[p]) >= (D = t.eMarks[p]))); p++) {
      if (t.src.charCodeAt(E++) === 62 && !w) {
        c = f = t.sCount[p] + 1;
        if (t.src.charCodeAt(E) === 32) {
          E++;
          c++;
          f++;
          o = false;
          k = true;
        } else if (t.src.charCodeAt(E) === 9) {
          k = true;
          if ((t.bsCount[p] + f) % 4 == 3) {
            E++;
            c++;
            f++;
            o = false;
          } else {
            o = true;
          }
        } else {
          k = false;
        }
        d.push(t.bMarks[p]);
        t.bMarks[p] = E;
        while (E < D && n(s = t.src.charCodeAt(E))) {
          if (s === 9) {
            f += 4 - (f + t.bsCount[p] + +!!o) % 4;
          } else {
            f++;
          }
          E++;
        }
        u = E >= D;
        g.push(t.bsCount[p]);
        t.bsCount[p] = t.sCount[p] + 1 + +!!k;
        v.push(t.sCount[p]);
        t.sCount[p] = f - c;
        b.push(t.tShift[p]);
        t.tShift[p] = E - t.bMarks[p];
        continue;
      }
      if (u) {
        break;
      }
      a = 0;
      y = false;
      l = C.length;
      for (; a < l; a++) {
        if (C[a](t, p, r, true)) {
          y = true;
          break;
        }
      }
      if (y) {
        t.lineMax = p;
        if (t.blkIndent !== 0) {
          d.push(t.bMarks[p]);
          g.push(t.bsCount[p]);
          b.push(t.tShift[p]);
          v.push(t.sCount[p]);
          t.sCount[p] -= t.blkIndent;
        }
        break;
      }
      d.push(t.bMarks[p]);
      g.push(t.bsCount[p]);
      b.push(t.tShift[p]);
      v.push(t.sCount[p]);
      t.sCount[p] = -1;
    }
    m = t.blkIndent;
    t.blkIndent = 0;
    (x = t.push("blockquote_open", "blockquote", 1)).markup = ">";
    x.map = h = [e, 0];
    t.md.block.tokenize(t, e, p);
    (x = t.push("blockquote_close", "blockquote", -1)).markup = ">";
    t.lineMax = A;
    t.parentType = _;
    h[1] = t.line;
    a = 0;
    for (; a < b.length; a++) {
      t.bMarks[a + e] = d[a];
      t.tShift[a + e] = b[a];
      t.sCount[a + e] = v[a];
      t.bsCount[a + e] = g[a];
    }
    t.blkIndent = m;
    return true;
  };
}