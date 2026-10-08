// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'useRecommendData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 301549
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let s = reactStoreHookFactory.createStoreHook(e => ({
    controlRes: undefined,
    setControlRes: t => e({
      controlRes: t
    })
  }));
  let l = () => {
    let e = reactCoreLibraryReexport.useRef(false);
    let {
      controlRes: t,
      setControlRes: n
    } = s();
    if (isUndefinedCheck.isUndefined(t)) {
      return {
        controlRes: t,
        fetchData: t => e.current ? Promise.resolve({}) : (e.current = true, apiServicesCollection.SamanthaApiService.RecommendWebToDesktop(t).then(e => {
          n(e == null ? undefined : e.data);
          if (e == null) {
            return undefined;
          } else {
            return e.data;
          }
        }).catch(e => ({})))
      };
    } else {
      return {
        controlRes: t,
        fetchData: () => Promise.resolve(t)
      };
    }
  };
  require.d(exports, {
    useRecommendData: function () {
      return l;
    }
  });
}