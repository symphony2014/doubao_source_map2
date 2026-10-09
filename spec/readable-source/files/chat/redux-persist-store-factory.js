// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'createPersistStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 273160
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  let o = {};
  let a = e => {
    let {
      createSlice: t,
      getPersistStorageOptions: n
    } = e;
    let o = reduxDevtoolsPersistIntegration.enhanceSubscribe(t);
    if (n) {
      return reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.persistMiddleware(o, n()));
    } else {
      return reactStoreHookFactory.createStoreHook()(o);
    }
  };
  let l = e => {
    let {
      id: n,
      createSlice: i,
      getPersistStorageOptions: r
    } = e;
    o[n] ||= {};
    o[n].prototype ||= {};
    if (!o[n].prototype?._useStore) {
      let e = a({
        createSlice: i,
        getPersistStorageOptions: r
      });
      Object.setPrototypeOf(o[n].prototype, e);
      Object.defineProperties(o[n], {
        ...Object.getOwnPropertyDescriptors(e)
      });
      if (o[n].prototype) {
        o[n].prototype._useStore = e;
      }
    }
  };
  let s = e => {
    let {
      id: t,
      createSlice: n,
      getPersistStorageOptions: i
    } = e;
    return new Proxy(function () {
      var r;
      var s = arguments.length;
      var u = Array(s);
      var c = 0;
      for (; c < s; c++) {
        u[c] = arguments[c];
      }
      if (!((r = o[t]) === null || r === undefined ? undefined : r.prototype?._useStore)) {
        l({
          id: t,
          createSlice: n,
          getPersistStorageOptions: i
        });
      }
      if (o[t].prototype?._useStore) {
        return o[t].prototype._useStore(...u);
      }
      throw Error(`Store ${String(t)} not initialized`);
    }, {
      get(e, r) {
        if (["getState", "setState", "subscribe"].includes(r)) {
          var s;
          if (!((s = o[t]) === null || s === undefined ? undefined : s.prototype?._useStore)) {
            l({
              id: t,
              createSlice: n,
              getPersistStorageOptions: i
            });
          }
          return function () {
            var e;
            var n = arguments.length;
            var i = Array(n);
            var a = 0;
            for (; a < n; a++) {
              i[a] = arguments[a];
            }
            let l = o[t].prototype;
            if (l == null ? undefined : l[r]) {
              if ((e = l[r]) === null || e === undefined) {
                return undefined;
              } else {
                return e.call(l, ...i);
              }
            }
          };
        }
        return Reflect.get(e, r);
      }
    });
  };
  require.d(exports, {
    createPersistStore: function () {
      return s;
    }
  });
}