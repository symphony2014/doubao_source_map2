// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'getDocToken'
// - Renamed export 'o' to 'setDocToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 632370
         */
module.exports = function (module, exports, require) {
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  let o = null;
  function a(e) {
    o = e;
  }
  function u() {
    if (o) {
      return o;
    }
    let {
      href: e
    } = window.location;
    let {
      token: n
    } = c(e);
    return n;
  }
  let c = memoizeFunction.memoize(e => {
    let n = RegExp(`^${[/(?:([A-Za-z]+):\/\/)/, /(?:([.\-\w]+))/, /(?::(\d+))/, /(\/[^?#\s\u2E80-\u9FFF]*)/, /(\?[^#\s]*)/, /(#[^\s]*)/, /([\s\S]*)/].map(e => e.source).join("?")}?$`);
    let r = decodeURIComponent(e);
    let [, i = "", o = "", a = "", u = "", c = "", _ = ""] = n.exec(r) || [];
    let l = /\/doc\/([\w]*)/.exec(u) || [];
    if (l.length === 0 && u.includes("/docx/")) {
      l = /\/docx\/([\w]*)/.exec(u) || [];
    }
    return {
      protocol: i,
      hostname: o,
      port: a,
      pathname: u,
      token: l[1] || "",
      search: c,
      hash: _
    };
  });
  require.d(exports, {
    getDocToken: function () {
      return u;
    },
    setDocToken: function () {
      return a;
    }
  });
}