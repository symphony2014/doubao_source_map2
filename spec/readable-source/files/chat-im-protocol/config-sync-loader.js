// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'getConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 985012
         */
module.exports = function (module, exports, require) {
  var chatIocManager = require("chat-ioc-manager") /*id: 998196*/;
  let n = (e, t, s) => {
    let {
      configContainer: n
    } = chatIocManager.getResourceCtrl(s);
    if (!n.isBound(e)) {
      n.bind(e, t);
    }
  };
  let r = (e, t) => {
    let {
      configContainer: s
    } = chatIocManager.getResourceCtrl(t);
    if (s.isBound(e)) {
      return s.get(e);
    }
  };
  let a = (e, t) => {
    let {
      resourceStore: s
    } = chatIocManager.getResourceCtrl(t);
    return s.getState()[e];
  };
  let o = (e, t) => {
    let s = r(e, t);
    if (s) {
      return s;
    }
    {
      let s = a(e, t);
      let i = s == null ? undefined : s.load();
      if (i instanceof Promise) {
        throw Error(`get config ${e} fail, it is async config`);
      }
      n(e, i, t);
      return r(e, t);
    }
  };
  require.d(exports, {
    getConfig: function () {
      return o;
    }
  });
}