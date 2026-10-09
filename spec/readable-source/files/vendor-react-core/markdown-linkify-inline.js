// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 985970
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.arrayReplaceAt;
  module.exports = function (t) {
    var e;
    var r;
    var i;
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
    var y = t.tokens;
    if (t.md.options.linkify) {
      o = 0;
      s = y.length;
      for (; o < s; o++) {
        if (y[o].type === "inline" && t.md.linkify.pretest(y[o].content)) {
          a = y[o].children;
          m = 0;
          i = a.length - 1;
          for (; i >= 0; i--) {
            if ((l = a[i]).type === "link_close") {
              for (i--; a[i].level !== l.level && a[i].type !== "link_open";) {
                i--;
              }
              continue;
            }
            if (l.type === "html_inline") {
              e = l.content;
              if (/^<a[>\s]/i.test(e) && m > 0) {
                m--;
              }
              r = l.content;
              if (/^<\/a\s*>/i.test(r)) {
                m++;
              }
            }
            if (!(m > 0) && l.type === "text" && t.md.linkify.test(l.content)) {
              h = 0;
              p = l.content;
              k = t.md.linkify.match(p);
              u = [];
              g = l.level;
              d = 0;
              for (; h < k.length; h++) {
                _ = k[h].url;
                v = t.md.normalizeLink(_);
                if (t.md.validateLink(v)) {
                  b = k[h].text;
                  b = k[h].schema ? k[h].schema !== "mailto:" || /^mailto:/i.test(b) ? t.md.normalizeLinkText(b) : t.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : t.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, "");
                  if ((f = k[h].index) > d) {
                    (c = new t.Token("text", "", 0)).content = p.slice(d, f);
                    c.level = g;
                    u.push(c);
                  }
                  (c = new t.Token("link_open", "a", 1)).attrs = [["href", v]];
                  c.level = g++;
                  c.markup = "linkify";
                  c.info = "auto";
                  u.push(c);
                  (c = new t.Token("text", "", 0)).content = b;
                  c.level = g;
                  u.push(c);
                  (c = new t.Token("link_close", "a", -1)).level = --g;
                  c.markup = "linkify";
                  c.info = "auto";
                  u.push(c);
                  d = k[h].lastIndex;
                }
              }
              if (d < p.length) {
                (c = new t.Token("text", "", 0)).content = p.slice(d);
                c.level = g;
                u.push(c);
              }
              y[o].children = a = n(a, i, u);
            }
          }
        }
      }
    }
  };
}