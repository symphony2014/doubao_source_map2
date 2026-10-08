// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable '_' to 'chatPageInteractiveWrapper'
// - Resolved require(157105) to 'chat-page-interactive-wrapper'
// - Renamed variable 'e' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'ChatPageInteractive' (module 157105)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.0ec2b38c.js
         * chunkId: 58543
         * moduleId: 373867
         */
module.exports = function (module, exports, require) {
  var chatPageInteractiveWrapper = require("chat-page-interactive-wrapper") /*id: 157105*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
  var l = chatPageInteractiveWrapper.ChatPageInteractive(() => reactJsxRuntimeCoreReexport.jsx(u, {}));
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    }
  });
}