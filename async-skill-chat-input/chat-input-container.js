// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'ChatInputContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 591343
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var a = {
    "chat-input-container": "chat-input-container-fxijw1",
    "chat-input-container-disabled": "chat-input-container-disabled-dqOUxA",
    "chat-input-float": "chat-input-float-UBr6s2"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      hasBoxShadow: i = true,
      disabled: r,
      children: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(a["chat-input-container"], i && a["chat-input-float"], n, r && a["chat-input-container-disabled"]),
      tabIndex: 0,
      ref: t,
      children: l
    });
  });
  require.d(exports, {
    ChatInputContainer: function () {
      return l;
    }
  });
}