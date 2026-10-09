// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'usePairedSymbolStrongFallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62381.cb92c622.js
         * chunkId: 62381
         * moduleId: 419814
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var markdownAstPluginEngine = require("markdown-ast-plugin-engine") /*id: 66280*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  let s = {
    enabled: false,
    leftToRight: new Map(),
    leftTokensDesc: [],
    rightTokensDesc: []
  };
  let d = (e, t) => {
    let n = (e ?? "").split(",").map(e => e.trim()).filter(Boolean).filter(e => e !== "⁠");
    let i = (t ?? "").split(",").map(e => e.trim()).filter(Boolean).filter(e => e !== "⁠");
    if (!n.length || n.length !== i.length) {
      return s;
    }
    let l = new Map();
    for (let e = 0; e < n.length; e += 1) {
      l.set(n[e], i[e]);
    }
    let r = (e, t) => t.length - e.length;
    return {
      enabled: true,
      leftToRight: l,
      leftTokensDesc: Array.from(new Set(n)).sort(r),
      rightTokensDesc: Array.from(new Set(i)).sort(r)
    };
  };
  let u = /[\p{L}\p{N}_]/u;
  let c = e => !!e && u.test(e);
  let v = (e, t) => {
    if (!t.enabled || !e) {
      return null;
    }
    for (let n of t.leftTokensDesc) {
      if (!e.startsWith(n)) {
        continue;
      }
      let i = t.leftToRight.get(n);
      if (i && e.endsWith(i)) {
        return {
          left: n,
          right: i
        };
      }
    }
    return null;
  };
  let _ = (e, t) => {
    let n = e;
    if (t.addLeft && !n.startsWith("⁠")) {
      n = `\u2060${n}`;
    }
    if (t.addRight && !n.endsWith("⁠")) {
      n = `${n}\u2060`;
    }
    return n;
  };
  let f = (e, t) => {
    if (e[t] !== "*" || e[t + 1] !== "*") {
      return false;
    }
    let n = t > 0 ? e[t - 1] : undefined;
    let i = t + 2 < e.length ? e[t + 2] : undefined;
    return n !== "*" && i !== "*";
  };
  let m = e => ({
    type: "text",
    value: e
  });
  let g = e => ({
    type: "strong",
    children: [m(e)]
  });
  let h = (e, t, n, i) => {
    if (!t.enabled || !e.includes("**")) {
      return null;
    }
    let l = [];
    let r = 0;
    let o = 0;
    let a = false;
    while (o < e.length - 1) {
      let s = e.indexOf("**", o);
      if (s === -1) {
        break;
      }
      if (!f(e, s)) {
        o = s + 1;
        continue;
      }
      let d = s + 2;
      let u = -1;
      while (d < e.length - 1) {
        let t = e.indexOf("**", d);
        if (t === -1) {
          break;
        }
        if (f(e, t)) {
          u = t;
          break;
        }
        d = t + 1;
      }
      if (u === -1) {
        break;
      }
      let h = e.slice(s + 2, u);
      if (!v(h, t)) {
        o = s + 2;
        continue;
      }
      let p = s > 0 ? e[s - 1] : n;
      let b = u + 2 < e.length ? e[u + 2] : i;
      let y = c(p);
      let w = c(b);
      if (!y && !w) {
        o = s + 2;
        continue;
      }
      if (s > r) {
        l.push(m(e.slice(r, s)));
      }
      l.push(g(_(h, {
        addLeft: y,
        addRight: w
      })));
      a = true;
      o = r = u + 2;
    }
    if (a) {
      if (r < e.length) {
        l.push(m(e.slice(r)));
      }
      return l;
    } else {
      return null;
    }
  };
  let p = e => markdownParserSerializer.isNodeType(e, "text") && typeof e.value == "string";
  let b = e => markdownParserSerializer.isNodeType(e, "strong") && Array.isArray(e.children);
  let y = e => markdownParserSerializer.isNodeType(e, "emphasis") && Array.isArray(e.children);
  let w = e => {
    if (p(e)) {
      return e.value.slice(-1);
    }
  };
  let k = e => {
    if (p(e)) {
      return e.value[0];
    }
  };
  let C = (e, t) => w(e[t - 1]);
  let S = (e, t) => k(e[t + 1]);
  let x = e => !!e && Array.isArray(e.children);
  let T = e => ({
    type: "text",
    value: e
  });
  let R = e => ({
    type: "strong",
    children: [T(e)]
  });
  let M = e => e.split("⁠").join("");
  let N = (e, t) => {
    if (t <= 0 || t > e.length) {
      return false;
    }
    let n = 0;
    for (let i = t - 1; i >= 0 && e[i] === "\\"; i -= 1) {
      n += 1;
    }
    return n % 2 == 1;
  };
  let E = (e, t) => {
    let n = `**${t}**`;
    let i = 0;
    while (i < e.length) {
      let l = e.indexOf(n, i);
      if (l === -1) {
        break;
      }
      let r = l + 2 + t.length;
      if (!N(e, l) && !N(e, r)) {
        return l;
      }
      i = l + 1;
    }
    return -1;
  };
  let A = (e, t) => {
    if (!t) {
      return;
    }
    let l = e == null ? undefined : e.position;
    let r = l == null ? undefined : l.start?.offset;
    let o = l == null ? undefined : l.end?.offset;
    if (typeof r == "number" && typeof o == "number" && !(r < 0) && !(o < 0) && !(r >= o)) {
      return t.slice(r, o);
    }
  };
  let L = (e, t) => {
    let n = E(e, t);
    if (n === -1) {
      return null;
    }
    let i = t.length + 4;
    let l = n > 0 ? e[n - 1] : undefined;
    let r = n + i;
    let o = r < e.length ? e[r] : undefined;
    return {
      addLeft: c(l),
      addRight: c(o)
    };
  };
  let j = (e, t, n) => {
    if (!e.includes("**") || !v(t, n)) {
      return null;
    }
    let i = L(e, t);
    if (i && (i.addLeft || i.addRight)) {
      return R(_(t, i));
    } else {
      return null;
    }
  };
  let P = (e, t) => {
    if (!e) {
      return false;
    }
    for (let n of t) {
      if (b(n) && (n.children.length !== 1 || !p(n.children[0]) || E(e, M(n.children[0].value)) === -1)) {
        return false;
      }
    }
    return true;
  };
  let $ = (e, t, n) => t && !(e.length < 3) && e.startsWith("*") && e.endsWith("*") ? j(t, e.slice(1, -1), n) : null;
  let B = (e, t, n, i) => {
    if (!n || t <= 0 || t >= e.length - 1) {
      return null;
    }
    let l = e[t];
    let r = e[t - 1];
    let o = e[t + 1];
    if (!p(l) || !l.value.startsWith("*") || !l.value.endsWith("*")) {
      return null;
    }
    let a = l.value.slice(1, -1);
    if (!v(a, i) || !y(r) || !y(o) || r.children.length !== 1 || o.children.length !== 1 || !p(r.children[0]) || !p(o.children[0])) {
      return null;
    }
    let s = r.children[0].value;
    let d = o.children[0].value;
    let u = `*${s}**${a}**${d}*`;
    if (!n.includes(u)) {
      return null;
    }
    let c = j(n, a, i);
    if (c) {
      return {
        type: "emphasis",
        children: [T(s), c, T(d)]
      };
    } else {
      return null;
    }
  };
  let W = (e, t, n) => {
    if (t <= 0 || t >= e.length - 1) {
      return null;
    }
    let i = e[t - 1];
    let l = e[t + 1];
    if (!p(i) || !p(l)) {
      return null;
    }
    let r = e[t];
    if (!b(r) || r.children.length !== 1 || !p(r.children[0])) {
      return null;
    }
    let o = i.value;
    let a = l.value;
    let s = r.children[0].value;
    let d = o.lastIndexOf("**");
    let u = a.indexOf("**");
    if (d === -1 || u === -1) {
      return null;
    }
    let f = o.slice(0, d);
    let m = o.slice(d + 2);
    let g = a.slice(0, u);
    let h = a.slice(u + 2);
    if (!v(m, n) || !v(g, n)) {
      return null;
    }
    let y = f.slice(-1);
    let w = s[0];
    let k = s.slice(-1);
    let C = h[0];
    let S = c(y);
    let x = c(w);
    let M = c(k);
    let N = c(C);
    if (!S && !x || !M && !N) {
      return null;
    }
    let E = [];
    if (f) {
      E.push(T(f));
    }
    E.push(R(_(m, {
      addLeft: S,
      addRight: x
    })));
    if (s) {
      E.push(T(s));
    }
    E.push(R(_(g, {
      addLeft: M,
      addRight: N
    })));
    if (h) {
      E.push(T(h));
    }
    return E;
  };
  let O = (e, t, n) => {
    if (e.length) {
      for (let r = 0; r < e.length; r += 1) {
        let o = e[r];
        if (p(o)) {
          let i = B(e, r, n, t);
          if (i) {
            e.splice(r - 1, 3, i);
            r -= 1;
            continue;
          }
          let l = $(o.value, n, t);
          if (l) {
            e.splice(r, 1, l);
            continue;
          }
          let a = r;
          while (a < e.length && p(e[a])) {
            a += 1;
          }
          let s = false;
          for (let t = r; t < a; t += 1) {
            if (e[t].value.includes("*")) {
              s = true;
              break;
            }
          }
          if (s) {
            let i = "";
            for (let t = r; t < a; t += 1) {
              i += e[t].value;
            }
            if (i.includes("**")) {
              let l = h(i, t, C(e, r), k(e[a]));
              if (l) {
                if (!P(n, l)) {
                  r = a - 1;
                  continue;
                }
                e.splice(r, a - r, ...l);
                r += l.length - 1;
                continue;
              }
            }
          }
          r = a - 1;
          continue;
        }
        if (b(o)) {
          if (o.children.length === 1 && p(o.children[0]) && !v(o.children[0].value, t)) {
            let n = W(e, r, t);
            if (n) {
              e.splice(r - 1, 3, ...n);
              r += n.length - 2;
              continue;
            }
          }
          if (o.children.length === 1) {
            let n = o.children[0];
            if (p(n)) {
              let i = n.value;
              if (v(i, t)) {
                let t = C(e, r);
                let l = S(e, r);
                let o = c(t);
                let a = c(l);
                if (o || a) {
                  let e = _(i, {
                    addLeft: o,
                    addRight: a
                  });
                  if (e !== i) {
                    n.value = e;
                  }
                }
              }
            }
          }
          continue;
        }
        if (!x(o) || !o.children?.length) {
          continue;
        }
        let a = o.type;
        if (a === "emphasis" || a === "delete" || a === "link") {
          O(o.children ?? [], t, n);
        }
      }
    }
  };
  let D = function (e, t = "⁠") {
    let n = e.slice();
    while (n.length) {
      let e = n.pop();
      if (!e) {
        continue;
      }
      if (e.type === "text" && typeof e.data == "string") {
        if (e.data.includes(t)) {
          e.data = e.data.split(t).join("");
        }
        continue;
      }
      let {
        children: i
      } = e;
      if (Array.isArray(i) && i.length) {
        for (let e of i) {
          n.push(e);
        }
      }
    }
    return e;
  };
  function I(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class Z extends markdownAstPluginEngine.AstPlugin {
    constructor(e) {
      super();
      this.getIndex = e;
      I(this, "name", "paired_symbol_strong_fallback");
      I(this, "modifier", (e, t) => {
        let n = this.getIndex();
        if (!n.enabled) {
          return;
        }
        let {
          type: i
        } = e;
        if (!e || i !== "paragraph" && i !== "heading" && i !== "tableCell") {
          return;
        }
        let {
          children: l
        } = e;
        if (Array.isArray(l) && l.length) {
          O(l, n, A(e, t.source));
        }
      });
    }
  }
  let q = e => {
    D(e);
  };
  let F = () => {
    let e = chatFgStoreHooks.getSourceValue("ab_config.ab_results.md_refine_bold_paired_symbol_left", {
      source: chatStorageKeys.chatStorageKeys.setting,
      defaultValue: ""
    });
    let t = chatFgStoreHooks.getSourceValue("ab_config.ab_results.md_refine_bold_paired_symbol_right", {
      source: chatStorageKeys.chatStorageKeys.setting,
      defaultValue: ""
    });
    let n = reactCoreLibraryReexport.useMemo(() => d(e, t), [e, t]);
    let l = reactCoreLibraryReexport.useRef(n);
    reactCoreLibraryReexport.useEffect(() => {
      l.current = n;
    }, [n]);
    let a = reactCoreLibraryReexport.useRef(null);
    a.current ||= new Z(() => l.current);
    return {
      astPlugins: reactCoreLibraryReexport.useCallback(e => [...e, a.current], []),
      modifyHtmlNode: reactCoreLibraryReexport.useCallback(e => {
        q(e);
        return e;
      }, [])
    };
  };
  require.d(exports, {
    usePairedSymbolStrongFallback: function () {
      return F;
    }
  });
}