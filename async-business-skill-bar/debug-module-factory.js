// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(222924) to 'time-duration-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 991070
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    function t(e) {
      let n;
      let r;
      let o;
      let s = null;
      function a(...e) {
        if (!a.enabled) {
          return;
        }
        let i = Number(new Date());
        let r = i - (n || i);
        a.diff = r;
        a.prev = n;
        a.curr = i;
        n = i;
        e[0] = t.coerce(e[0]);
        if (typeof e[0] != "string") {
          e.unshift("%O");
        }
        let o = 0;
        e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
          if (n === "%%") {
            return "%";
          }
          o++;
          let r = t.formatters[i];
          if (typeof r == "function") {
            let t = e[o];
            n = r.call(a, t);
            e.splice(o, 1);
            o--;
          }
          return n;
        });
        t.formatArgs.call(a, e);
        (a.log || t.log).apply(a, e);
      }
      a.namespace = e;
      a.useColors = t.useColors();
      a.color = t.selectColor(e);
      a.extend = i;
      a.destroy = t.destroy;
      Object.defineProperty(a, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => s !== null ? s : (r !== t.namespaces && (r = t.namespaces, o = t.enabled(e)), o),
        set: e => {
          s = e;
        }
      });
      if (typeof t.init == "function") {
        t.init(a);
      }
      return a;
    }
    function i(e, n) {
      let i = t(this.namespace + (n === undefined ? ":" : n) + e);
      i.log = this.log;
      return i;
    }
    function r(e, t) {
      let n = 0;
      let i = 0;
      let r = -1;
      let o = 0;
      while (n < e.length) {
        if (i < t.length && (t[i] === e[n] || t[i] === "*")) {
          if (t[i] === "*") {
            r = i;
            o = n;
          } else {
            n++;
          }
          i++;
        } else {
          if (r === -1) {
            return false;
          }
          i = r + 1;
          n = ++o;
        }
      }
      while (i < t.length && t[i] === "*") {
        i++;
      }
      return i === t.length;
    }
    t.debug = t;
    t.default = t;
    t.coerce = function (e) {
      if (e instanceof Error) {
        return e.stack || e.message;
      } else {
        return e;
      }
    };
    t.disable = function () {
      let e = [...t.names, ...t.skips.map(e => "-" + e)].join(",");
      t.enable("");
      return e;
    };
    t.enable = function (e) {
      t.save(e);
      t.namespaces = e;
      t.names = [];
      t.skips = [];
      for (let n of (typeof e == "string" ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean)) {
        if (n[0] === "-") {
          t.skips.push(n.slice(1));
        } else {
          t.names.push(n);
        }
      }
    };
    t.enabled = function (e) {
      for (let n of t.skips) {
        if (r(e, n)) {
          return false;
        }
      }
      for (let n of t.names) {
        if (r(e, n)) {
          return true;
        }
      }
      return false;
    };
    t.humanize = require("time-duration-util") /*id: 222924*/;
    t.destroy = function () {};
    Object.keys(e).forEach(n => {
      t[n] = e[n];
    });
    t.names = [];
    t.skips = [];
    t.formatters = {};
    t.selectColor = function (e) {
      let n = 0;
      for (let t = 0; t < e.length; t++) {
        n = (n << 5) - n + e.charCodeAt(t) | 0;
      }
      return t.colors[Math.abs(n) % t.colors.length];
    };
    t.enable(t.load());
    return t;
  };
}