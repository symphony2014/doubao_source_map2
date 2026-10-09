// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 394655
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
    var f;
    var d;
    var g;
    var m;
    var _ = "";
    var v = t.pos;
    var b = t.posMax;
    if (t.src.charCodeAt(t.pos) !== 33 || t.src.charCodeAt(t.pos + 1) !== 91 || (l = t.pos + 2, (c = t.md.helpers.parseLinkLabel(t, t.pos + 1, false)) < 0)) {
      return false;
    }
    if ((u = c + 1) < b && t.src.charCodeAt(u) === 40) {
      for (u++; u < b && (i(o = t.src.charCodeAt(u)) || o === 10); u++);
      if (u >= b) {
        return false;
      }
      m = u;
      if ((p = t.md.helpers.parseLinkDestination(t.src, u, t.posMax)).ok) {
        _ = t.md.normalizeLink(p.str);
        if (t.md.validateLink(_)) {
          u = p.pos;
        } else {
          _ = "";
        }
      }
      m = u;
      for (; u < b && (i(o = t.src.charCodeAt(u)) || o === 10); u++);
      p = t.md.helpers.parseLinkTitle(t.src, u, t.posMax);
      if (u < b && m !== u && p.ok) {
        f = p.str;
        u = p.pos;
        for (; u < b && (i(o = t.src.charCodeAt(u)) || o === 10); u++);
      } else {
        f = "";
      }
      if (u >= b || t.src.charCodeAt(u) !== 41) {
        t.pos = v;
        return false;
      }
      u++;
    } else {
      if (t.env.references === undefined) {
        return false;
      }
      if (u < b && t.src.charCodeAt(u) === 91) {
        m = u + 1;
        if ((u = t.md.helpers.parseLinkLabel(t, u)) >= 0) {
          a = t.src.slice(m, u++);
        } else {
          u = c + 1;
        }
      } else {
        u = c + 1;
      }
      a ||= t.src.slice(l, c);
      if (!(h = t.env.references[n(a)])) {
        t.pos = v;
        return false;
      }
      _ = h.href;
      f = h.title;
    }
    if (!e) {
      s = t.src.slice(l, c);
      t.md.inline.parse(s, t.md, t.env, g = []);
      (d = t.push("image", "img", 0)).attrs = r = [["src", _], ["alt", ""]];
      d.children = g;
      d.content = s;
      if (f) {
        r.push(["title", f]);
      }
    }
    t.pos = u;
    t.posMax = b;
    return true;
  };
}