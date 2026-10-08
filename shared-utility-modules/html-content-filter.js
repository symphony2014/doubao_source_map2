// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'filterHtmlContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 172223
         */
module.exports = function (module, exports, require) {
  var utilsDeepClone = require("utils-deep-clone") /*id: 693734*/;
  var positionUtils = require("position-utils") /*id: 142421*/;
  let o = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"];
  let i = {
    ancestors: {
      tbody: ["table"],
      td: ["table"],
      th: ["table"],
      thead: ["table"],
      tfoot: ["table"],
      tr: ["table"]
    },
    attributes: {
      a: [...o, "dataFootnoteBackref", "dataFootnoteRef", ["className", "data-footnote-backref"], "href"],
      blockquote: ["cite"],
      code: [["className", /^language-./]],
      del: ["cite"],
      div: ["itemScope", "itemType"],
      dl: [...o],
      h2: [["className", "sr-only"]],
      img: [...o, "longDesc", "src"],
      input: [["disabled", true], ["type", "checkbox"]],
      ins: ["cite"],
      li: [["className", "task-list-item"]],
      ol: [...o, ["className", "contains-task-list"]],
      q: ["cite"],
      section: ["dataFootnotes", ["className", "footnotes"]],
      source: ["srcSet"],
      summary: [...o],
      table: [...o],
      ul: [...o, ["className", "contains-task-list"]],
      "*": ["abbr", "accept", "acceptCharset", "accessKey", "action", "align", "alt", "axis", "border", "cellPadding", "cellSpacing", "char", "charOff", "charSet", "checked", "clear", "colSpan", "color", "cols", "compact", "coords", "dateTime", "dir", "encType", "frame", "hSpace", "headers", "height", "hrefLang", "htmlFor", "id", "isMap", "itemProp", "label", "lang", "maxLength", "media", "method", "multiple", "name", "noHref", "noShade", "noWrap", "open", "prompt", "readOnly", "rev", "rowSpan", "rows", "rules", "scope", "selected", "shape", "size", "span", "start", "summary", "tabIndex", "title", "useMap", "vAlign", "value", "width"]
    },
    clobber: ["ariaDescribedBy", "ariaLabelledBy", "id", "name"],
    clobberPrefix: "user-content-",
    protocols: {
      cite: ["http", "https"],
      href: ["http", "https", "irc", "ircs", "mailto", "xmpp"],
      longDesc: ["http", "https"],
      src: ["http", "https"]
    },
    required: {
      input: {
        disabled: true,
        type: "checkbox"
      }
    },
    strip: ["script"],
    tagNames: ["a", "b", "blockquote", "br", "code", "dd", "del", "details", "div", "dl", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "li", "ol", "p", "picture", "pre", "q", "rp", "rt", "ruby", "s", "samp", "section", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "tt", "ul", "var"]
  };
  let s = {}.hasOwnProperty;
  function l(e, a) {
    if (a && typeof a == "object") {
      switch (typeof a.type == "string" ? a.type : "") {
        case "comment":
          return function (e, a) {
            if (e.schema.allowComments) {
              let e = typeof a.value == "string" ? a.value : "";
              let t = e.indexOf("-->");
              let r = {
                type: "comment",
                value: t < 0 ? e : e.slice(0, t)
              };
              p(r, a);
              return r;
            }
          }(e, a);
        case "doctype":
          return function (e, a) {
            if (e.schema.allowDoctypes) {
              let e = {
                type: "doctype"
              };
              p(e, a);
              return e;
            }
          }(e, a);
        case "element":
          return function (e, a) {
            let t = typeof a.tagName == "string" ? a.tagName : "";
            e.stack.push(t);
            let r = c(e, a.children);
            let n = function (e, a) {
              let t;
              let r = e.stack[e.stack.length - 1];
              let n = e.schema.attributes;
              let o = e.schema.required;
              let i = n && s.call(n, r) ? n[r] : undefined;
              let l = n && s.call(n, "*") ? n["*"] : undefined;
              let c = a && typeof a == "object" ? a : {};
              let d = {};
              for (t in c) {
                if (s.call(c, t)) {
                  let a = c[t];
                  let r = u(e, f(i, t), t, a);
                  if (r == null) {
                    r = u(e, f(l, t), t, a);
                  }
                  if (r != null) {
                    d[t] = r;
                  }
                }
              }
              if (o && s.call(o, r)) {
                let e = o[r];
                for (t in e) {
                  if (s.call(e, t) && !s.call(d, t)) {
                    d[t] = e[t];
                  }
                }
              }
              return d;
            }(e, a.properties);
            e.stack.pop();
            let o = false;
            if (t && t !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(t)) && (o = true, e.schema.ancestors && s.call(e.schema.ancestors, t))) {
              let a = e.schema.ancestors[t];
              let r = -1;
              for (o = false; ++r < a.length;) {
                if (e.stack.includes(a[r])) {
                  o = true;
                }
              }
            }
            if (!o) {
              if (e.schema.strip && !e.schema.strip.includes(t)) {
                return r;
              } else {
                return undefined;
              }
            }
            let i = {
              type: "element",
              tagName: t,
              properties: n,
              children: r
            };
            p(i, a);
            return i;
          }(e, a);
        case "root":
          return function (e, a) {
            let t = {
              type: "root",
              children: c(e, a.children)
            };
            p(t, a);
            return t;
          }(e, a);
        case "text":
          return function (e, a) {
            let t = {
              type: "text",
              value: typeof a.value == "string" ? a.value : ""
            };
            p(t, a);
            return t;
          }(0, a);
      }
    }
  }
  function c(e, a) {
    let t = [];
    if (Array.isArray(a)) {
      let r = -1;
      while (++r < a.length) {
        let n = l(e, a[r]);
        if (n) {
          if (Array.isArray(n)) {
            t.push(...n);
          } else {
            t.push(n);
          }
        }
      }
    }
    return t;
  }
  function u(e, a, t, r) {
    if (a) {
      if (Array.isArray(r)) {
        return function (e, a, t, r) {
          let n = -1;
          let o = [];
          while (++n < r.length) {
            let i = d(e, a, t, r[n]);
            if (typeof i == "number" || typeof i == "string") {
              o.push(i);
            }
          }
          return o;
        }(e, a, t, r);
      } else {
        return d(e, a, t, r);
      }
    } else {
      return undefined;
    }
  }
  function d(e, a, t, r) {
    if ((typeof r == "boolean" || typeof r == "number" || typeof r == "string") && function (e, a, t) {
      let r = e.schema.protocols && s.call(e.schema.protocols, a) ? e.schema.protocols[a] : undefined;
      if (!r || r.length === 0) {
        return true;
      }
      let n = String(t);
      let o = n.indexOf(":");
      let i = n.indexOf("?");
      let l = n.indexOf("#");
      let c = n.indexOf("/");
      if (o < 0 || c > -1 && o > c || i > -1 && o > i || l > -1 && o > l) {
        return true;
      }
      let u = -1;
      while (++u < r.length) {
        let e = r[u];
        if (o === e.length && n.slice(0, e.length) === e) {
          return true;
        }
      }
      return false;
    }(e, t, r)) {
      if (typeof a == "object" && a.length > 1) {
        let e = false;
        let t = 0;
        while (++t < a.length) {
          let n = a[t];
          if (n && typeof n == "object" && "flags" in n) {
            if (n.test(String(r))) {
              e = true;
              break;
            }
          } else if (n === r) {
            e = true;
            break;
          }
        }
        if (!e) {
          return;
        }
      }
      if (e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(t)) {
        return e.schema.clobberPrefix + r;
      } else {
        return r;
      }
    }
  }
  function p(e, a) {
    let t = positionUtils.getPositionRange(a);
    if (a.data) {
      e.data = utilsDeepClone.deepClone(a.data);
    }
    if (t) {
      e.position = t;
    }
  }
  function f(e, a) {
    let t;
    let r = -1;
    if (e) {
      while (++r < e.length) {
        let n = e[r];
        let o = typeof n == "string" ? n : n[0];
        if (o === a) {
          return n;
        }
        if (o === "data*") {
          t = n;
        }
      }
    }
    if (a.length > 4 && a.slice(0, 4).toLowerCase() === "data") {
      return t;
    }
  }
  function g(e) {
    return function (a) {
      return function (e, a) {
        let t = {
          type: "root",
          children: []
        };
        let r = l({
          schema: a ? {
            ...i,
            ...a
          } : i,
          stack: []
        }, e);
        if (r) {
          if (Array.isArray(r)) {
            if (r.length === 1) {
              t = r[0];
            } else {
              t.children = r;
            }
          } else {
            t = r;
          }
        }
        return t;
      }(a, e);
    };
  }
  require.d(exports, {
    filterHtmlContent: function () {
      return g;
    }
  });
}