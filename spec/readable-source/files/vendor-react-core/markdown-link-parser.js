// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 63380
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.normalizeReference;
  var i = require("markdown-common-utils") /*id: 708770*/.isSpace;
  module.exports = function (t, e) {
    var r;
    var o;
    var s;
    var a;
    var c;
    var l;
    var u;
    var h;
    var p;
    var f = "";
    var d = "";
    var g = t.pos;
    var m = t.posMax;
    var _ = t.pos;
    var v = true;
    if (t.src.charCodeAt(t.pos) !== 91 || (c = t.pos + 1, (a = t.md.helpers.parseLinkLabel(t, t.pos, true)) < 0)) {
      return false;
    }
    if ((l = a + 1) < m && t.src.charCodeAt(l) === 40) {
      v = false;
      l++;
      for (; l < m && (i(o = t.src.charCodeAt(l)) || o === 10); l++);
      if (l >= m) {
        return false;
      }
      _ = l;
      if ((u = t.md.helpers.parseLinkDestination(t.src, l, t.posMax)).ok) {
        f = t.md.normalizeLink(u.str);
        if (t.md.validateLink(f)) {
          l = u.pos;
        } else {
          f = "";
        }
        _ = l;
        for (; l < m && (i(o = t.src.charCodeAt(l)) || o === 10); l++);
        u = t.md.helpers.parseLinkTitle(t.src, l, t.posMax);
        if (l < m && _ !== l && u.ok) {
          d = u.str;
          l = u.pos;
          for (; l < m && (i(o = t.src.charCodeAt(l)) || o === 10); l++);
        }
      }
      if (l >= m || t.src.charCodeAt(l) !== 41) {
        v = true;
      }
      l++;
    }
    if (v) {
      if (t.env.references === undefined) {
        return false;
      }
      if (l < m && t.src.charCodeAt(l) === 91) {
        _ = l + 1;
        if ((l = t.md.helpers.parseLinkLabel(t, l)) >= 0) {
          s = t.src.slice(_, l++);
        } else {
          l = a + 1;
        }
      } else {
        l = a + 1;
      }
      s ||= t.src.slice(c, a);
      if (!(h = t.env.references[n(s)])) {
        t.pos = g;
        return false;
      }
      f = h.href;
      d = h.title;
    }
    if (!e) {
      t.pos = c;
      t.posMax = a;
      t.push("link_open", "a", 1).attrs = r = [["href", f]];
      if (d) {
        r.push(["title", d]);
      }
      t.md.inline.tokenize(t);
      t.push("link_close", "a", -1);
    }
    t.pos = l;
    t.posMax = m;
    return true;
  };
}