// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'userPreferenceStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 292003
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let o = {
    settings: undefined,
    loaded: false
  };
  let l = reactStoreFactory.createStore()((e, t) => {
    let n = async function () {
      let t = await apiServicesCollection.SamanthaApiService.GetUserPreference();
      if (t == null ? undefined : t.data) {
        e(immerCoreImplementation.produce(e => {
          e.settings = {
            ...e.settings,
            ...(t == null ? undefined : t.data)
          };
          e.loaded = true;
        }));
      }
    };
    return {
      ...o,
      refreshUserPreference: n,
      async setUserPreferenceAsync(e) {
        await apiServicesCollection.SamanthaApiService.SetUserPreference(e);
        n();
      },
      setUserPreferenceSync(t, i) {
        e(immerCoreImplementation.produce(e => {
          e.settings = {
            ...e.settings,
            ...t
          };
        }));
        apiServicesCollection.SamanthaApiService.SetUserPreference(t).then(() => {
          n();
          if (i != null) {
            i();
          }
        });
      }
    };
  });
  require.d(exports, {
    userPreferenceStore: function () {
      return l;
    }
  });
}