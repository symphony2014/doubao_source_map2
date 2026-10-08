// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ci' to 'getToken'
// - Renamed export 'nT' to 'parseUrl'
// - Renamed export 'pv' to 'getType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 365040
         */
module.exports = function (module, exports, require) {
  function r(t, e = false, n = true, i) {
    let o = RegExp(`^${[/(?:([A-Za-z]+):\/\/)/, /(?:([.\-\w]+))/, /(?::(\d+))/, /(\/[^?#\s\u2E80-\u9FFF]*)/, /(\?[^#\s]*)/, /(#[^\s]*)/, /([\s\S]*)/].map(t => t.source).join("?")}?$`);
    let s = "";
    let a = "";
    try {
      s = decodeURIComponent(t);
    } catch (e) {
      s = unescape(t);
    }
    if (!n) {
      let t = function (t) {
        let e = t.match(/^((?!https?).|\s)*/);
        if (e) {
          let n = e[0];
          return {
            urlWithRest: t.substring(n.length),
            preText: n
          };
        }
        return {
          urlWithRest: t,
          preText: ""
        };
      }(s);
      s = t.urlWithRest;
      a = t.preText;
    }
    let [, u = "", c = "", l = "", p = "", h = "", f = "", d = ""] = o.exec(s) || [];
    let v = /(?:\/)?(?:space\/|drive\/)?(?:component\/)?([a-zA-Z-_]+)?(?:\/([\w]*))/.exec(p) || [];
    let y = {
      protocol: u,
      hostname: c,
      port: l,
      pathname: p,
      type: (i || {
        docs: "doc",
        sheets: "sheet",
        slides: "slides",
        mindnotes: "mindnote",
        base: "bitable"
      })[v[1]] || v[1] || "",
      token: v[2] || "",
      search: h,
      hash: f
    };
    if (!n) {
      y.restText = d;
      y.preText = a;
    }
    return y;
  }
  function i(t) {
    let {
      token: e
    } = r(t || location.href, true);
    return e || "";
  }
  function o(t, e) {
    let {
      type: n
    } = r(t || location.href, true, true, e);
    return n || "";
  }
  require.d(exports, {
    getToken: function () {
      return i;
    },
    parseUrl: function () {
      return r;
    },
    getType: function () {
      return o;
    }
  });
}