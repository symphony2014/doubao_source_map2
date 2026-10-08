// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'sizeBreakpoints'
// - Renamed export 'y' to 'useChatScreenSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 836635
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  let a = (e, t) => isUndefinedCheck.isUndefined(e) ? "lg" : e <= t.sm ? "sm" : e <= t.md ? "md" : "lg";
  let s = {
    sm: 599,
    md: 899
  };
  let c = function (e = s) {
    let [t, n] = reactCoreLibraryReexport.useState();
    let r = reactCoreLibraryReexport.useRef(null);
    let {
      getRootContainer: c
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    r.current ||= (c == null ? undefined : c()) || (typeof window != "undefined" ? document.getElementById("root") : null);
    resizeObserverHooks.useResizeObserverEx({
      ref: r,
      onResize: t => {
        let {
          width: i
        } = t;
        n(a(i, e));
      }
    });
    if (t === undefined) {
      var d;
      return a((d = r.current) === null || d === undefined ? undefined : d.getBoundingClientRect().width, e);
    }
    return t;
  };
  require.d(exports, {
    sizeBreakpoints: function () {
      return s;
    },
    useChatScreenSize: function () {
      return c;
    }
  });
}