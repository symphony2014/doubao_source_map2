// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'getTableHandlers'
// - Renamed export 'x' to 'getTableSerializer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 657939
         */
module.exports = function (module, exports, require) {
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  function i(e) {
    return e.length;
  }
  function o(e) {
    let t = typeof e == "string" ? e.codePointAt(0) : 0;
    if (t === 67 || t === 99) {
      return 99;
    } else if (t === 76 || t === 108) {
      return 108;
    } else {
      return (t === 82 || t === 114) * 114;
    }
  }
  var markdownSerializerHandlers = require("markdown-serializer-handlers") /*id: 109669*/;
  function a() {
    return {
      enter: {
        table: c,
        tableData: p,
        tableHeader: p,
        tableRow: s
      },
      exit: {
        codeText: h,
        table: l,
        tableData: f,
        tableHeader: f,
        tableRow: f
      }
    };
  }
  function c(e) {
    let t = e._align;
    webpackEmptyModuleStub.okStub(t, "expected `_align` on table");
    this.enter({
      type: "table",
      align: t.map(function (e) {
        if (e === "none") {
          return null;
        } else {
          return e;
        }
      }),
      children: []
    }, e);
    this.data.inTable = true;
  }
  function l(e) {
    this.exit(e);
    this.data.inTable = undefined;
  }
  function s(e) {
    this.enter({
      type: "tableRow",
      children: []
    }, e);
  }
  function f(e) {
    this.exit(e);
  }
  function p(e) {
    this.enter({
      type: "tableCell",
      children: []
    }, e);
  }
  function h(e) {
    let t = this.resume();
    if (this.data.inTable) {
      t = t.replace(/\\([\\|])/g, d);
    }
    let r = this.stack[this.stack.length - 1];
    webpackEmptyModuleStub.okStub(r.type === "inlineCode");
    r.value = t;
    this.exit(e);
  }
  function d(e, t) {
    if (t === "|") {
      return t;
    } else {
      return e;
    }
  }
  function g(e) {
    let t = e || {};
    let r = t.tableCellPadding;
    let n = t.tablePipeAlign;
    let a = t.stringLength;
    let c = r ? " " : "|";
    return {
      unsafe: [{
        character: "\r",
        inConstruct: "tableCell"
      }, {
        character: "\n",
        inConstruct: "tableCell"
      }, {
        atBreak: true,
        character: "|",
        after: "[\t :-]"
      }, {
        character: "|",
        inConstruct: "tableCell"
      }, {
        atBreak: true,
        character: ":",
        after: "-"
      }, {
        atBreak: true,
        character: "-",
        after: "[:|-]"
      }],
      handlers: {
        inlineCode: function (e, t, r) {
          let n = markdownSerializerHandlers.markdownHandlers.inlineCode(e, t, r);
          if (r.stack.includes("tableCell")) {
            n = n.replace(/\|/g, "\\$&");
          }
          return n;
        },
        table: function (e, t, r, n) {
          return s(function (e, t, r) {
            let n = e.children;
            let i = -1;
            let o = [];
            let u = t.enter("table");
            while (++i < n.length) {
              o[i] = f(n[i], t, r);
            }
            u();
            return o;
          }(e, r, n), e.align);
        },
        tableCell: l,
        tableRow: function (e, t, r, n) {
          let i = s([f(e, r, n)]);
          return i.slice(0, i.indexOf("\n"));
        }
      }
    };
    function l(e, t, r, n) {
      let i = r.enter("tableCell");
      let o = r.enter("phrasing");
      let u = r.containerPhrasing(e, {
        ...n,
        before: c,
        after: c
      });
      o();
      i();
      return u;
    }
    function s(e, t) {
      return function (e, t) {
        let r = t || {};
        let n = (r.align || []).concat();
        let u = r.stringLength || i;
        let a = [];
        let c = [];
        let l = [];
        let s = [];
        let f = 0;
        let p = -1;
        while (++p < e.length) {
          let t = [];
          let n = [];
          let i = -1;
          for (e[p].length > f && (f = e[p].length); ++i < e[p].length;) {
            var h;
            let o = (h = e[p][i]) == null ? "" : String(h);
            if (r.alignDelimiters !== false) {
              let e = u(o);
              n[i] = e;
              if (s[i] === undefined || e > s[i]) {
                s[i] = e;
              }
            }
            t.push(o);
          }
          c[p] = t;
          l[p] = n;
        }
        let d = -1;
        if (typeof n == "object" && "length" in n) {
          while (++d < f) {
            a[d] = o(n[d]);
          }
        } else {
          let e = o(n);
          while (++d < f) {
            a[d] = e;
          }
        }
        d = -1;
        let g = [];
        let m = [];
        while (++d < f) {
          let e = a[d];
          let t = "";
          let n = "";
          if (e === 99) {
            t = ":";
            n = ":";
          } else if (e === 108) {
            t = ":";
          } else if (e === 114) {
            n = ":";
          }
          let i = r.alignDelimiters === false ? 1 : Math.max(1, s[d] - t.length - n.length);
          let o = t + "-".repeat(i) + n;
          if (r.alignDelimiters !== false) {
            if ((i = t.length + i + n.length) > s[d]) {
              s[d] = i;
            }
            m[d] = i;
          }
          g[d] = o;
        }
        c.splice(1, 0, g);
        l.splice(1, 0, m);
        p = -1;
        let b = [];
        while (++p < c.length) {
          let e = c[p];
          let t = l[p];
          d = -1;
          let n = [];
          while (++d < f) {
            let i = e[d] || "";
            let o = "";
            let u = "";
            if (r.alignDelimiters !== false) {
              let e = s[d] - (t[d] || 0);
              let r = a[d];
              if (r === 114) {
                o = " ".repeat(e);
              } else if (r === 99) {
                if (e % 2) {
                  o = " ".repeat(e / 2 + 0.5);
                  u = " ".repeat(e / 2 - 0.5);
                } else {
                  u = o = " ".repeat(e / 2);
                }
              } else {
                u = " ".repeat(e);
              }
            }
            if (r.delimiterStart !== false && !d) {
              n.push("|");
            }
            if (r.padding !== false && (r.alignDelimiters !== false || i !== "") && (r.delimiterStart !== false || d)) {
              n.push(" ");
            }
            if (r.alignDelimiters !== false) {
              n.push(o);
            }
            n.push(i);
            if (r.alignDelimiters !== false) {
              n.push(u);
            }
            if (r.padding !== false) {
              n.push(" ");
            }
            if (r.delimiterEnd !== false || d !== f - 1) {
              n.push("|");
            }
          }
          b.push(r.delimiterEnd === false ? n.join("").replace(/ +$/, "") : n.join(""));
        }
        return b.join("\n");
      }(e, {
        align: t,
        alignDelimiters: n,
        padding: r,
        stringLength: a
      });
    }
    function f(e, t, r) {
      let n = e.children;
      let i = -1;
      let o = [];
      let u = t.enter("tableRow");
      while (++i < n.length) {
        o[i] = l(n[i], e, t, r);
      }
      u();
      return o;
    }
  }
  require.d(exports, {
    getTableHandlers: function () {
      return a;
    },
    getTableSerializer: function () {
      return g;
    }
  });
}