// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VM' to 'markVoiceCallShown'
// - Renamed export '_6' to 'getVoiceCallState'
// - Renamed export 'lN' to 'useSyncVoiceCallState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-bar-item.f7100fdd.js
         * chunkId: 24932
         * moduleId: 408567
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let a = e => `flow_voiceCall_${e}_showed`;
  let u = {
    flow_voiceCall_skillBar_showed: !!storageWrapperWithFallback.LocalStorageWrapper.getItem(a("skillBar")),
    flow_voiceCall_guidance_showed: !!storageWrapperWithFallback.LocalStorageWrapper.getItem(a("guidance")),
    flow_voiceCall_sidebar_showed: false
  };
  let c = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...u,
    setVoiceCallClick: (t, n) => {
      let o = a(t);
      if (n) {
        storageWrapperWithFallback.LocalStorageWrapper.setItem(o, "1");
      } else {
        storageWrapperWithFallback.LocalStorageWrapper.removeItem(o);
      }
      e(() => ({
        [a(t)]: n
      }));
    },
    resetVoiceCall: () => {
      e(u);
    }
  })));
  let d = e => c(t => t[a(e)], deepEqualityUtil_1.isDeepEqual);
  let p = e => reactCoreLibraryReexport.useEffect(() => {
    let t = !!storageWrapperWithFallback.LocalStorageWrapper.getItem(a(e));
    c.getState().setVoiceCallClick(e, t);
  }, []);
  let f = e => {
    c.getState().setVoiceCallClick(e, true);
  };
  require.d(exports, {
    markVoiceCallShown: function () {
      return f;
    },
    getVoiceCallState: function () {
      return d;
    },
    useSyncVoiceCallState: function () {
      return p;
    }
  });
}