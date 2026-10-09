// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'StyleManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 140542
         */
module.exports = function (module, exports, require) {
  let n = typeof Symbol == "undefined" ? "__ͼ" : Symbol.for("ͼ");
  let s = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 100000000) : Symbol("styleSet");
  let r = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};
  class o {
    constructor(t, e) {
      this.rules = [];
      let {
        finish: i
      } = e || {};
      function n(t) {
        if (/^@/.test(t)) {
          return [t];
        } else {
          return t.split(/,\s*/);
        }
      }
      for (let e in t) {
        (function t(e, s, r, o) {
          let l = [];
          let a = /^@(\w+)\b/.exec(e[0]);
          let h = a && a[1] == "keyframes";
          if (a && s == null) {
            return r.push(e[0] + ";");
          }
          for (let i in s) {
            let o = s[i];
            if (/&/.test(i)) {
              t(i.split(/,\s*/).map(t => e.map(e => t.replace(/&/, e))).reduce((t, e) => t.concat(e)), o, r);
            } else if (o && typeof o == "object") {
              if (!a) {
                throw RangeError("The value of a property (" + i + ") should be a primitive value.");
              }
              t(n(i), o, l, h);
            } else if (o != null) {
              l.push(i.replace(/_.*/, "").replace(/[A-Z]/g, t => "-" + t.toLowerCase()) + ": " + o + ";");
            }
          }
          if (l.length || h) {
            r.push((!i || a || o ? e : e.map(i)).join(", ") + " {" + l.join(" ") + "}");
          }
        })(n(e), t[e], this.rules);
      }
    }
    getRules() {
      return this.rules.join("\n");
    }
    static newName() {
      let t = r[n] || 1;
      r[n] = t + 1;
      return "ͼ" + t.toString(36);
    }
    static mount(t, e, i) {
      let n = t[s];
      let r = i && i.nonce;
      if (n) {
        if (r) {
          n.setNonce(r);
        }
      } else {
        n = new a(t, r);
      }
      n.mount(Array.isArray(e) ? e : [e], t);
    }
  }
  let l = new Map();
  class a {
    constructor(t, e) {
      let i = t.ownerDocument || t;
      let n = i.defaultView;
      if (!t.head && t.adoptedStyleSheets && n.CSSStyleSheet) {
        let e = l.get(i);
        if (e) {
          return t[s] = e;
        }
        this.sheet = new n.CSSStyleSheet();
        l.set(i, this);
      } else {
        this.styleTag = i.createElement("style");
        if (e) {
          this.styleTag.setAttribute("nonce", e);
        }
      }
      this.modules = [];
      t[s] = this;
    }
    mount(t, e) {
      let i = this.sheet;
      let n = 0;
      let s = 0;
      for (let e = 0; e < t.length; e++) {
        let r = t[e];
        let o = this.modules.indexOf(r);
        if (o < s && o > -1) {
          this.modules.splice(o, 1);
          s--;
          o = -1;
        }
        if (o == -1) {
          this.modules.splice(s++, 0, r);
          if (i) {
            for (let t = 0; t < r.rules.length; t++) {
              i.insertRule(r.rules[t], n++);
            }
          }
        } else {
          while (s < o) {
            n += this.modules[s++].rules.length;
          }
          n += r.rules.length;
          s++;
        }
      }
      if (i) {
        if (e.adoptedStyleSheets.indexOf(this.sheet) < 0) {
          e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets];
        }
      } else {
        let t = "";
        for (let e = 0; e < this.modules.length; e++) {
          t += this.modules[e].getRules() + "\n";
        }
        this.styleTag.textContent = t;
        let i = e.head || e;
        if (this.styleTag.parentNode != i) {
          i.insertBefore(this.styleTag, i.firstChild);
        }
      }
    }
    setNonce(t) {
      if (this.styleTag && this.styleTag.getAttribute("nonce") != t) {
        this.styleTag.setAttribute("nonce", t);
      }
    }
  }
  require.d(exports, {
    StyleManager: function () {
      return o;
    }
  });
}