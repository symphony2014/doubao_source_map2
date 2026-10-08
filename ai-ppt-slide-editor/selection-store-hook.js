// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BE' to 'useSelectionStore'
// - Renamed export 'Mh' to 'ImageEditTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 977019
         */
module.exports = function (module, exports, require) {
  var r;
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  (r = {}).Image = "Image";
  r.ImageV2 = "ImageV2";
  r.IntelligentEdit = "IntelligentEdit";
  let l = r;
  let s = {
    selection: undefined
  };
  let o = reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(e => ({
    ...s,
    notResetSelectionClassName: "not-reset-selection",
    reset: () => e(s),
    setSelection: t => e({
      selection: t
    }),
    setNotResetSelectionClassName: t => e({
      notResetSelectionClassName: t
    })
  })));
  require.d(exports, {
    useSelectionStore: function () {
      return o;
    },
    ImageEditTypes: function () {
      return l;
    }
  });
}