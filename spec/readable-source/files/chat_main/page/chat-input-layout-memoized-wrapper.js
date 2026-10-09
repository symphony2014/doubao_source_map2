// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'chatInputLayoutContainer'
// - Resolved require(106065) to 'chat-input-layout-container'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'r' to 'ChatInputLayout' (module 106065)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.e7b781cf.js
         * chunkId: 69197
         * moduleId: 656183
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatInputLayoutContainer = require("chat-input-layout-container") /*id: 106065*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  exports.default = reactCoreLibraryReexport.memo(() => reactJsxRuntimeCoreReexport.jsx(chatInputLayoutContainer.ChatInputLayout, {}));
  require.r(exports);
}