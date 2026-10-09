// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GX' to 'getStoreState'
// - Renamed export 'TB' to 'getAsyncStore'
// - Renamed export 'Wp' to 'getStore'
// - Renamed export 'aK' to 'useStore'
// - Renamed export 'sQ' to 'useStoreSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 537944
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var chatIocManager = require("chat-ioc-manager") /*id: 998196*/;
  let a = (e, t) => {
    let {
      storeContainer: n
    } = chatIocManager.getGlobalStore();
    if (n.isBound(e)) {
      n.unbind(e);
    }
    if (!t) {
      throw Error(`chat-ioc-manager: cannot bind empty store of ${e}`);
    }
    n.bind(e, t);
  };
  let l = e => {
    let {
      storeContainer: t
    } = chatIocManager.getGlobalStore();
    if (t.isBound(e)) {
      return t.get(e);
    }
  };
  let s = e => {
    let {
      resourceStore: t
    } = chatIocManager.getGlobalStore();
    return t.getState()[e];
  };
  let u = e => {
    var t;
    let n = l(e);
    if (n) {
      return n;
    }
    let i = (t = s(e)) === null || t === undefined ? undefined : t.load();
    if (i instanceof Promise) {
      throw Error(`get store ${e} fail, it is async store, please use getAsyncStore instead`);
    }
    a(e, i == null ? undefined : i());
    let r = l(e);
    if (r) {
      return r;
    }
    throw Error(`chat-ioc-manager: store ${e} not found`);
  };
  let c = async e => {
    var t;
    let n = l(e);
    if (n) {
      return n;
    }
    let i = await ((t = s(e)) === null || t === undefined ? undefined : t.load());
    a(e, i == null ? undefined : i());
    let r = l(e);
    if (r) {
      return r;
    }
    throw Error(`chat-ioc-manager: store ${e} not found`);
  };
  let d = e => reactCoreLibraryReexport.useMemo(() => u(e), [e]);
  function h(e) {
    var t;
    if ((t = u(e)) === null || t === undefined) {
      return undefined;
    } else {
      return t.getState();
    }
  }
  function m(e, t, n) {
    let i = d(e);
    return reactStoreHookFactory.useStoreSelector(i, t, n);
  }
  require.d(exports, {
    getStoreState: function () {
      return h;
    },
    getAsyncStore: function () {
      return c;
    },
    getStore: function () {
      return u;
    },
    useStore: function () {
      return d;
    },
    useStoreSelector: function () {
      return m;
    }
  });
}