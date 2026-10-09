// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'parseUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 14217
         */
module.exports = function (module, exports, require) {
  function o(e) {
    if (arguments.length > 1 && arguments[1] !== undefined) {
      arguments[1];
    }
    let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let r = RegExp(`^${[/(?:([A-Za-z]+):\/\/)/, /(?:([.\-\w]+))/, /(?::(\d+))/, /(\/[^?#\s\u2E80-\u9FFF]*)/, /(\?[^#\s]*)/, /(#[^\s]*)/, /([\s\S]*)/].map(e => e.source).join("?")}?$`);
    let o = "";
    let i = "";
    try {
      o = decodeURIComponent(e);
    } catch (n) {
      o = unescape(e);
    }
    if (!n) {
      let e = function (e) {
        let n = e.match(/^((?!https?).|\s)*/);
        if (n) {
          let r = n[0];
          return {
            urlWithRest: e.substring(r.length),
            preText: r
          };
        }
        return {
          urlWithRest: e,
          preText: ""
        };
      }(o);
      o = e.urlWithRest;
      i = e.preText;
    }
    let [, l = "", c = "", u = "", a = "", s = "", d = "", f = ""] = r.exec(o) || [];
    let h = /(?:\/)?(?:space\/|drive\/)?(?:preview\/)?(?:component\/)?([a-zA-Z-_]+)?(?:\/([\w]*))/.exec(a) || [];
    let _ = {
      protocol: l,
      hostname: c,
      port: u,
      pathname: a,
      token: h[2] || "",
      search: s,
      hash: d
    };
    if (!n) {
      _.restText = f;
      _.preText = i;
    }
    return _;
  }
  require.d(exports, {
    parseUrl: function () {
      return o;
    }
  });
}