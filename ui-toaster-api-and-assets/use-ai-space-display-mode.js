// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useDisplayMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 735317
         */
module.exports = function (module, exports, require) {
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var aiSpaceStoreSelectors = require("ai-space-store-selectors") /*id: 941899*/;
  let r = () => {
    let {
      displayMode: e,
      activeTab: i,
      updateDisplayMode: t
    } = aiSpaceStoreManager.useAiSpaceStore();
    let r = aiSpaceStoreSelectors.isNotMyUploadTab();
    let o = aiSpaceStoreSelectors.isCreationCategorySelector();
    let s = aiSpaceStoreSelectors.getCurrentPathId();
    let l = r ? i : s;
    return {
      curMode: e[l] || (i === "recentPic" || o ? "thumbnail_time" : "list"),
      updateDisplayMode: e => {
        t(l, e);
      }
    };
  };
  require.d(exports, {
    useDisplayMode: function () {
      return r;
    }
  });
}