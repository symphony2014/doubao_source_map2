// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'codingPluginIdentifiers'
// - Resolved require(842326) to 'coding-plugin-identifiers'
// - Renamed variable 'i' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Updated imported property 'M7' to 'selectUserInfoSuccess' (module 480327)
// - Updated imported property 'Mt' to 'fileUploadMenuOption' (module 842326)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-tool-menu-option-matcher.8467c9db.js
         * chunkId: 7092
         * moduleId: 675746
         */
module.exports = function (module, exports, require) {
  var codingPluginIdentifiers = require("coding-plugin-identifiers") /*id: 842326*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  let o = () => userInfoStatusSelectors.selectUserInfoSuccess() ? codingPluginIdentifiers.fileUploadMenuOption : undefined;
  require.r(exports);
  require.d(exports, {
    codingGenericFileUploadToolMenuOptionMatcher: function () {
      return o;
    }
  });
}