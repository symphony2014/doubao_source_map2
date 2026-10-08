// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'MessageNodeErrorBoundary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 970489
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      node: n,
      type: s,
      children: l,
      onError: c,
      conversationId: d,
      sessionId: u,
      messageId: p,
      abilityType: f,
      llmIntentionDetail: h
    } = e;
    let m = reactCoreLibraryReexport.useRef({
      failCount: 0
    });
    let v = n.block?.is_finish;
    let g = () => {
      return {
        node_id: n.id,
        node_type: n.type,
        block_type: n.block?.block_type,
        is_finish: v,
        type: s,
        conversation_id: d,
        session_id: u,
        message_id: p,
        ability_type: f ? String(f) : undefined,
        llm_intention_detail: h
      };
    };
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      errorBoundaryName: `${s}_message_node_render_error`,
      fallback: null,
      onError: e => {
        m.current.failCount += 1;
        if (c != null) {
          c({
            nodeId: n.id
          });
        }
        if (m.current.failCount <= 1) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "message_node_render_error",
            error: e,
            meta: g()
          });
        }
      },
      children: l
    });
  };
  require.d(exports, {
    MessageNodeErrorBoundary: function () {
      return s;
    }
  });
}