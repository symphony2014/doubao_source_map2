// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 136867
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.assign;
  var i = require("markdown-common-utils") /*id: 708770*/.unescapeAll;
  var o = require("markdown-common-utils") /*id: 708770*/.escapeHtml;
  var s = {};
  function a() {
    this.rules = n({}, s);
  }
  s.code_inline = function (t, e, r, n, i) {
    var s = t[e];
    return "<code" + i.renderAttrs(s) + ">" + o(t[e].content) + "</code>";
  };
  s.code_block = function (t, e, r, n, i) {
    var s = t[e];
    return "<pre" + i.renderAttrs(s) + "><code>" + o(t[e].content) + "</code></pre>\n";
  };
  s.fence = function (t, e, r, n, s) {
    var a;
    var c;
    var l;
    var u;
    var h;
    var p = t[e];
    var f = p.info ? i(p.info).trim() : "";
    var d = "";
    var g = "";
    if (f) {
      d = (l = f.split(/(\s+)/g))[0];
      g = l.slice(2).join("");
    }
    if ((a = r.highlight && r.highlight(p.content, d, g) || o(p.content)).indexOf("<pre") === 0) {
      return a + "\n";
    } else if (f) {
      c = p.attrIndex("class");
      u = p.attrs ? p.attrs.slice() : [];
      if (c < 0) {
        u.push(["class", r.langPrefix + d]);
      } else {
        u[c] = u[c].slice();
        u[c][1] += " " + r.langPrefix + d;
      }
      h = {
        attrs: u
      };
      return "<pre><code" + s.renderAttrs(h) + ">" + a + "</code></pre>\n";
    } else {
      return "<pre><code" + s.renderAttrs(p) + ">" + a + "</code></pre>\n";
    }
  };
  s.image = function (t, e, r, n, i) {
    var o = t[e];
    o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, r, n);
    return i.renderToken(t, e, r);
  };
  s.hardbreak = function (t, e, r) {
    if (r.xhtmlOut) {
      return "<br />\n";
    } else {
      return "<br>\n";
    }
  };
  s.softbreak = function (t, e, r) {
    if (r.breaks) {
      if (r.xhtmlOut) {
        return "<br />\n";
      } else {
        return "<br>\n";
      }
    } else {
      return "\n";
    }
  };
  s.text = function (t, e) {
    return o(t[e].content);
  };
  s.html_block = function (t, e) {
    return t[e].content;
  };
  s.html_inline = function (t, e) {
    return t[e].content;
  };
  a.prototype.renderAttrs = function (t) {
    var e;
    var r;
    var n;
    if (!t.attrs) {
      return "";
    }
    e = 0;
    n = "";
    r = t.attrs.length;
    for (; e < r; e++) {
      n += " " + o(t.attrs[e][0]) + "=\"" + o(t.attrs[e][1]) + "\"";
    }
    return n;
  };
  a.prototype.renderToken = function (t, e, r) {
    var n;
    var i = "";
    var o = false;
    var s = t[e];
    if (s.hidden) {
      return "";
    } else {
      if (s.block && s.nesting !== -1 && e && t[e - 1].hidden) {
        i += "\n";
      }
      i += (s.nesting === -1 ? "</" : "<") + s.tag;
      i += this.renderAttrs(s);
      if (s.nesting === 0 && r.xhtmlOut) {
        i += " /";
      }
      if (s.block) {
        o = true;
        if (s.nesting === 1 && e + 1 < t.length) {
          if ((n = t[e + 1]).type === "inline" || n.hidden) {
            o = false;
          } else if (n.nesting === -1 && n.tag === s.tag) {
            o = false;
          }
        }
      }
      return i += o ? ">\n" : ">";
    }
  };
  a.prototype.renderInline = function (t, e, r) {
    var n;
    var i = "";
    var o = this.rules;
    var s = 0;
    var a = t.length;
    for (; s < a; s++) {
      if (o[n = t[s].type] !== undefined) {
        i += o[n](t, s, e, r, this);
      } else {
        i += this.renderToken(t, s, e);
      }
    }
    return i;
  };
  a.prototype.renderInlineAsText = function (t, e, r) {
    var n = "";
    var i = 0;
    var o = t.length;
    for (; i < o; i++) {
      if (t[i].type === "text") {
        n += t[i].content;
      } else if (t[i].type === "image") {
        n += this.renderInlineAsText(t[i].children, e, r);
      } else if (t[i].type === "softbreak") {
        n += "\n";
      }
    }
    return n;
  };
  a.prototype.render = function (t, e, r) {
    var n;
    var i;
    var o;
    var s = "";
    var a = this.rules;
    n = 0;
    i = t.length;
    for (; n < i; n++) {
      if ((o = t[n].type) === "inline") {
        s += this.renderInline(t[n].children, e, r);
      } else if (a[o] !== undefined) {
        s += a[t[n].type](t, n, e, r, this);
      } else {
        s += this.renderToken(t, n, e, r);
      }
    }
    return s;
  };
  module.exports = a;
}