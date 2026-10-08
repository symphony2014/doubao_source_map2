// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'MessageLoadingView'
// - Renamed export 'I' to 'ThinkingMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 358483
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatLoadingMessageCheck = require("chat-loading-message-check") /*id: 572705*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var dotFlashingLoader = require("dot-flashing-loader") /*id: 887785*/;
  var flowingLightWrapper = require("flowing-light-wrapper") /*id: 759491*/;
  var d = {
    "loading-container": "loading-container-AxQlRW",
    "text-content": "text-content-xxe3r1"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactCoreLibraryReexport.memo(dotFlashingLoader.DotFlashing);
  let p = e => {
    let {
      message: i,
      className: n
    } = e;
    let r = messageContentUtils.formatMessage(i, false, "") ?? "";
    let a = chatLoadingMessageCheck.isLoadingMessage(i);
    return reactJsxRuntimeCoreReexport.jsx(m, {
      content: r,
      isInThinking: a,
      className: n
    });
  };
  let m = e => {
    let {
      content: t,
      isInThinking: i,
      className: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(d["loading-container"], n),
      children: [reactJsxRuntimeCoreReexport.jsx(h, {
        "data-testid": i ? "message_thinking" : "message_loading"
      }), i ? reactJsxRuntimeCoreReexport.jsx(flowingLightWrapper.FlowingLight, {
        className: d["text-content"],
        children: t
      }) : null]
    });
  };
  require.d(exports, {
    MessageLoadingView: function () {
      return m;
    },
    ThinkingMessage: function () {
      return p;
    }
  });
}