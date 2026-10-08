// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'footnoteExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 888031
         */
module.exports = function (module, exports, require) {
  function r(e = {}) {
    let {
      prefixId: t = "footnote-",
      prefixData: n = "",
      description: i = "Footnotes",
      refMarkers: o = false,
      footnoteDivider: a = false,
      keepLabels: l = false,
      sectionClass: s = "footnotes",
      headingClass: c = "sr-only",
      backRefLabel: u = "Back to reference {0}"
    } = e;
    let p = {
      hasFootnotes: false,
      tokens: []
    };
    return {
      extensions: [function (e, t) {
        let n = {
          type: "footnotes",
          raw: t,
          rawItems: [],
          items: []
        };
        return {
          name: "footnote",
          level: "block",
          childTokens: ["content"],
          tokenizer(t) {
            if (!e.hasFootnotes) {
              this.lexer.tokens.push(n);
              e.tokens = this.lexer.tokens;
              e.hasFootnotes = true;
              n.rawItems = [];
              n.items = [];
            }
            let r = /^\[\^([^\]\n]+)\]:(?:[ \t]+|[\n]*?|$)([^\n]*?(?:\n|$)(?:\n*?[ ]{4,}[^\n]*)*)/.exec(t);
            if (r) {
              let [e, t, i = ""] = r;
              let o = i.split(`
`).reduce((e, t) => `${e}
${t.replace(/^(?:[ ]{4}|[\t])/, "")}`, "");
              let a = o.trimEnd().split(`
`).pop();
              o += a && /^[ \t]*?[>\-*][ ]|[`]{3,}$|^[ \t]*?[|].+[|]$/.test(a) ? `

` : "";
              let l = {
                type: "footnote",
                raw: e,
                label: t,
                refs: [],
                content: this.lexer.blockTokens(o)
              };
              n.rawItems.push(l);
              return l;
            }
          },
          renderer: () => ""
        };
      }(p, i), function (e, t = false, n = false) {
        let r = 0;
        return {
          name: "footnoteRef",
          level: "inline",
          tokenizer(e) {
            let t = /^\[\^([^\]\n]+)\]/.exec(e);
            if (t) {
              let [e, n] = t;
              let i = this.lexer.tokens[0];
              let o = i.rawItems.filter(e => e.label === n);
              if (!o.length) {
                return;
              }
              let a = o[0];
              let l = i.items.filter(e => e.label === n)[0];
              let s = {
                type: "footnoteRef",
                raw: e,
                index: a.refs.length,
                id: "",
                label: n
              };
              if (l) {
                s.id = l.refs[0].id;
                l.refs.push(s);
              } else {
                r++;
                s.id = String(r);
                a.refs.push(s);
                i.items.push(a);
              }
              return s;
            }
          },
          renderer({
            index: i,
            id: o,
            label: a
          }) {
            r = 0;
            let l = encodeURIComponent(a);
            let s = n ? a.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;") : o;
            let c = i > 0 ? `-${i + 1}` : "";
            return `<sup><a id="${e}ref-${l}${c}" href="#${e + l}" data-${e}ref aria-describedby="${e}label">${t ? `[${s}]` : s}</a></sup>`;
          }
        };
      }(t, o, l), {
        name: "footnotes",
        renderer({
          raw: e,
          items: r = []
        }) {
          if (r.length === 0) {
            return "";
          }
          let i = r.reduce((e, {
            label: n,
            content: r,
            refs: i
          }) => {
            let o = encodeURIComponent(n);
            let a = this.parser.parse(r).trimEnd();
            let l = a.endsWith("</p>");
            let s = `<li id="${t + o}">
`;
            s += l ? a.replace(/<\/p>$/, "") : a;
            i.forEach((e, r) => {
              let i;
              let a;
              let l = u.replace("{0}", n);
              if (r > 0) {
                let e = r + 1;
                i = `\u{21A9}<sup>${e}</sup>`;
                a = `-${e}`;
              } else {
                i = "↩";
                a = "";
              }
              s += ` <a href="#${t}ref-${o}${a}" data-${t}backref aria-label="${l}">${i}</a>`;
            });
            s += l ? `</p>
` : `
`;
            return e + (s += `</li>
`);
          }, "");
          let o = "";
          if (a) {
            o += `<hr data-${n}footnotes>
`;
          }
          let l = "";
          if (s) {
            l = ` class="${s}"`;
          }
          let p = "";
          if (c) {
            p = ` class="${c}"`;
          }
          return o += `<section${l} data-${n}footnotes>
<h2 id="${t}label"${p}>${e.trimEnd()}</h2>
<ol>
${i}</ol>
</section>
`;
        }
      }],
      walkTokens(e) {
        if (e.type === "footnotes" && p.tokens.indexOf(e) === 0 && e.items.length) {
          p.tokens[0] = {
            type: "space",
            raw: ""
          };
          p.tokens.push(e);
        }
        p.hasFootnotes &&= false;
      }
    };
  }
  require.d(exports, {
    footnoteExtension: function () {
      return r;
    }
  });
}