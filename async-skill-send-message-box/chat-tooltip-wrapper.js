// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'ChatTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 355361
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      getPopupContainer: n,
      style: i,
      ...a
    } = e;
    let {
      getPopupContainer: s = n
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      ref: t,
      showArrow: false,
      arrowPointAtCenter: true,
      spacing: 12,
      style: {
        borderRadius: "6px",
        padding: "5px 10px",
        ...i
      },
      ...a,
      getPopupContainer: s
    });
  });
  require.d(exports, {
    ChatTooltip: function () {
      return a;
    }
  });
}