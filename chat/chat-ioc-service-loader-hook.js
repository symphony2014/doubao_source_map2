// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'loadServiceAsync'
// - Renamed export 'G' to 'useServiceLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 31335
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactAsyncIteratorHook = require("react-async-iterator-hook") /*id: 545543*/;
  var isClassUtil = require("is-class-util") /*id: 156635*/;
  var chatIocManager = require("chat-ioc-manager") /*id: 998196*/;
  let l = (e, t, n) => {
    let {
      serviceContainer: i
    } = chatIocManager.getResourceCtrl(n);
    if (!i.isBound(e)) {
      if (!t) {
        throw Error("chat-ioc-manager: cannot bind empty service");
      }
      isClassUtil.isClass(t);
      i.bind(e, t);
    }
  };
  let s = (e, t) => {
    let {
      serviceContainer: n
    } = chatIocManager.getResourceCtrl(t);
    if (n.isBound(e)) {
      return n.get(e);
    }
  };
  let u = (e, t) => {
    let {
      resourceStore: n
    } = chatIocManager.getResourceCtrl(t);
    return n.getState()[e];
  };
  let c = async (e, t) => {
    let n = s(e, t);
    if (n) {
      if (isClassUtil.isClass(n)) {
        return new n();
      } else {
        return n;
      }
    }
    {
      let n = u(e, t);
      let i = await (n == null ? undefined : n.load());
      if (!i) {
        return;
      }
      l(e, i, t);
      let r = s(e, t);
      if (isClassUtil.isClass(r)) {
        return new r();
      } else {
        return r;
      }
    }
  };
  let d = (e, t) => {
    let [n, a] = reactCoreLibraryReexport.useState(undefined);
    let [d, h] = reactCoreLibraryReexport.useState(true);
    let [m, g] = reactCoreLibraryReexport.useState(undefined);
    reactAsyncIteratorHook.useAsyncIterator(async () => {
      h(true);
      g(undefined);
      a(undefined);
      try {
        let n = await c(e, t);
        a(n);
      } catch (e) {
        g(e);
      } finally {
        h(false);
      }
    }, [e]);
    let f = u(e, t);
    let p = f == null ? undefined : f.load();
    if (p && !(p instanceof Promise)) {
      l(e, p, t);
      let n = s(e, t);
      return {
        service: isClassUtil.isClass(n) ? new n() : n,
        loading: false,
        error: undefined
      };
    }
    return {
      service: n,
      loading: d,
      error: m
    };
  };
  require.d(exports, {
    loadServiceAsync: function () {
      return c;
    },
    useServiceLoader: function () {
      return d;
    }
  });
}