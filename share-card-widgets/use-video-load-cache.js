// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useVideoLoadWithCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 71679.8c039722.js
         * chunkId: 71679
         * moduleId: 665552
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  function s() {
    let {
      getCache: e,
      setCache: t
    } = function (e) {
      let {
        maxTime: t = 30000,
        maxSize: n = 10
      } = {};
      let [i] = reactCoreLibraryReexport.useState(() => new Map());
      return {
        getCache: reactFunctionMemoHook.useMemoizedCallback(e => {
          let n = i.get(e);
          if (n && n.date > Date.now() - t) {
            return n.promise;
          }
          i.delete(e);
        }),
        setCache: reactFunctionMemoHook.useMemoizedCallback((e, t) => {
          i.set(e, {
            promise: t,
            date: Date.now()
          });
          if (i.size > n) {
            let e = i.keys().next().value;
            if (e) {
              i.delete(e);
            }
          }
        })
      };
    }();
    return async n => {
      let {
        item_ids: o,
        source_from: r,
        ...s
      } = n;
      let l = `${(o || []).join(",")}_${r}`;
      let a = e(l);
      if (a) {
        return a;
      }
      let c = {
        item_ids: o,
        ...s
      };
      let d = Number(r) !== 2 ? apiServicesCollection.AliceApiService.LoadVideoDY(c) : apiServicesCollection.AliceApiService.LoadVideoTT(c);
      t(l, d.then(e => e == null ? undefined : e.data));
      let {
        data: u
      } = await d;
      return u;
    };
  }
  require.d(exports, {
    useVideoLoadWithCache: function () {
      return s;
    }
  });
}