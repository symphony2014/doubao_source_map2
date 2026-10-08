// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'DropdownMenuSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-mode-select.5c979402.js
         * chunkId: 32786
         * moduleId: 671874
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = require("react-suspense-wrapper") /*id: 944055*/.withSuspense(reactCoreLibraryReexport.lazy(async () => ({
    default: (await require.e("think-item-lazy") /*id: 7521*/.then(require.bind(require, "thinking-item-foundation") /*id: 946314*/)).ThinkingItemFoundation
  })), () => null);
  require.d(exports, {
    DropdownMenuSource: function () {
      return r;
    }
  });
}