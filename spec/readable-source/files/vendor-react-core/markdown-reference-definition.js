// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 542607
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.normalizeReference;
  var i = require("markdown-common-utils") /*id: 708770*/.isSpace;
  module.exports = function (t, e, r, o) {
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
    var C = 0;
    var x = t.bMarks[e] + t.tShift[e];
    var w = t.eMarks[e];
    var A = e + 1;
    if (t.sCount[e] - t.blkIndent >= 4 || t.src.charCodeAt(x) !== 91) {
      return false;
    }
    while (++x < w) {
      if (t.src.charCodeAt(x) === 93 && t.src.charCodeAt(x - 1) !== 92) {
        if (x + 1 === w || t.src.charCodeAt(x + 1) !== 58) {
          return false;
        }
        break;
      }
    }
    l = t.lineMax;
    k = t.md.block.ruler.getRules("reference");
    g = t.parentType;
    t.parentType = "reference";
    for (; A < l && !t.isEmpty(A); A++) {
      if (!(t.sCount[A] - t.blkIndent > 3) && !(t.sCount[A] < 0)) {
        h = 0;
        b = false;
        p = k.length;
        for (; h < p; h++) {
          if (k[h](t, A, l, true)) {
            b = true;
            break;
          }
        }
        if (b) {
          break;
        }
      }
    }
    x = 1;
    w = (v = t.getLines(e, A, t.blkIndent, false).trim()).length;
    for (; x < w; x++) {
      if ((s = v.charCodeAt(x)) === 91) {
        return false;
      }
      if (s === 93) {
        d = x;
        break;
      }
      if (s === 10) {
        C++;
      } else if (s === 92 && ++x < w && v.charCodeAt(x) === 10) {
        C++;
      }
    }
    if (d < 0 || v.charCodeAt(d + 1) !== 58) {
      return false;
    }
    for (x = d + 2; x < w; x++) {
      if ((s = v.charCodeAt(x)) === 10) {
        C++;
      } else if (i(s)) ;else {
        break;
      }
    }
    if (!(m = t.md.helpers.parseLinkDestination(v, x, w)).ok || (u = t.md.normalizeLink(m.str), !t.md.validateLink(u))) {
      return false;
    }
    x = m.pos;
    C += m.lines;
    a = x;
    c = C;
    _ = x;
    for (; x < w; x++) {
      if ((s = v.charCodeAt(x)) === 10) {
        C++;
      } else if (i(s)) ;else {
        break;
      }
    }
    m = t.md.helpers.parseLinkTitle(v, x, w);
    if (x < w && _ !== x && m.ok) {
      y = m.str;
      x = m.pos;
      C += m.lines;
    } else {
      y = "";
      x = a;
      C = c;
    }
    while (x < w && i(s = v.charCodeAt(x))) {
      x++;
    }
    if (x < w && v.charCodeAt(x) !== 10 && y) {
      y = "";
      x = a;
      C = c;
      while (x < w && i(s = v.charCodeAt(x))) {
        x++;
      }
    }
    return (!(x < w) || v.charCodeAt(x) === 10) && !!(f = n(v.slice(1, d))) && (!!o || (t.env.references === undefined && (t.env.references = {}), t.env.references[f] === undefined && (t.env.references[f] = {
      title: y,
      href: u
    }), t.parentType = g, t.line = e + C + 1, true));
  };
}