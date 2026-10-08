// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useMessageRenderStatusTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 899708
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = e => {
    return (safeJsonUtils.safeParse(e == null ? undefined : e.ext?.chat_ability, {}) || {}).ability_type || undefined;
  };
  let l = (e, t, n) => {
    let [c, d] = reactCoreLibraryReexport.useState({});
    let u = reactCoreLibraryReexport.useRef(false);
    let p = reactCoreLibraryReexport.useRef(0);
    let f = s(e);
    let h = {
      type: n,
      create_from: e.create_from ?? "http-api",
      session_id: e.session_id,
      conversation_id: e.conversation_id,
      local_conversation_id: e.local_conversation_id,
      message_id: e.message_id,
      local_message_id: e.local_message_id,
      is_finish: e.is_finish,
      ability_type: f ? String(f) : undefined,
      llm_intention_detail: e.ext?.llm_intention_detail
    };
    let m = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (!u.current) {
        u.current = true;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "message_render_end",
          meta: {
            ...h,
            render_status: "0",
            node_types: t.map(e => e.type).join(","),
            node_ids: t.map(e => e.id).join(",")
          }
        });
      }
    });
    let v = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (!u.current) {
        u.current = true;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "message_render_end",
          meta: {
            ...h,
            render_status: "1",
            node_types: t.map(e => e.type).join(","),
            node_ids: t.map(e => e.id).join(",")
          }
        });
      }
    });
    let g = reactCoreLibraryReexport.useCallback(() => {
      d({});
    }, []);
    let b = reactCoreLibraryReexport.useCallback(e => {
      let {
        nodeId: t
      } = e;
      d(e => ({
        ...e,
        [t]: true
      }));
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (e.is_finish) {
        if (p.current) {
          clearTimeout(p.current);
        }
        p.current = setTimeout(() => {
          if (t.every(e => c[e.id])) {
            m();
          } else {
            v();
          }
        }, 5000);
      }
    }, [e == null ? undefined : e.is_finish, c, t]);
    return {
      renderStatus: c,
      resetRenderStatus: g,
      onMessageNodeRenderError: b
    };
  };
  require.d(exports, {
    useMessageRenderStatusTracker: function () {
      return l;
    }
  });
}