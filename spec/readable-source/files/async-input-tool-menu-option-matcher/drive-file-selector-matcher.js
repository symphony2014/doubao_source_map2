// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'i' to 'driveFileSelectorSymbol'
// - Resolved require(40875) to 'drive-file-selector-symbol'
// - Updated imported property 'M7' to 'selectUserInfoSuccess' (module 480327)
// - Updated imported property 'Q' to 'driveFileSelector' (module 40875)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-tool-menu-option-matcher.8467c9db.js
         * chunkId: 7092
         * moduleId: 541566
         */
module.exports = function (module, exports, require) {
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var driveFileSelectorSymbol = require("drive-file-selector-symbol") /*id: 40875*/;
  let o = () => userInfoStatusSelectors.selectUserInfoSuccess() ? driveFileSelectorSymbol.driveFileSelector : undefined;
  require.r(exports);
  require.d(exports, {
    driveFileSelectorMatcher: function () {
      return o;
    }
  });
}