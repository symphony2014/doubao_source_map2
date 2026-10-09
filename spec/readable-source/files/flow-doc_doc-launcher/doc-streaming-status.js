// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useStreamingStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 840575
         */
module.exports = function (module, exports, require) {
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  let s = e => typeof e == "object" && e !== null;
  let c = e => s(e) && typeof e.subscribe == "function";
  let d = e => c(e) && "initialValue" in e;
  let u = e => c(e) && "value" in e;
  let h = e => !!s(e) && "reactive" in e && c(e.reactive) && "value" in e;
  let g = (e, i) => {
    let n = isFunctionUtil_1.isFunction(e) ? e() : e;
    let [r, o] = reactCoreLibraryReexport.useState(() => d(n) ? n.initialValue : h(n) || u(n) ? n.value : undefined);
    let [s, g] = reactCoreLibraryReexport.useState(false);
    let [p, f] = reactCoreLibraryReexport.useState(false);
    let v = reactCoreLibraryReexport.useMemo(() => h(n) ? n.reactive : c(n) ? n : undefined, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (d(n)) {
        o(n.initialValue);
      } else if (h(n) || u(n)) {
        o(n.value);
      } else {
        o(undefined);
      }
      if (!v || !c(v)) {
        return;
      }
      let e = v.subscribe({
        next(e) {
          o(e);
        },
        error() {
          g(true);
        },
        complete() {
          f(true);
        }
      });
      return () => {
        var i;
        if (e != null && (i = e.unsubscribe) !== null && i !== undefined) {
          i.call(e);
        }
      };
    }, [n, v]);
    return {
      value: r === undefined ? i : r,
      isError: s,
      isFinished: p
    };
  };
  let p = (e, i) => {
    let {
      value: n
    } = g(e, i);
    return n;
  };
  let f = e => {
    let {
      docPath: i,
      streamingUserId: n
    } = e;
    let l = chatUserInfoActions.subscribeUserId();
    let a = writingSkillStore.writingSkillStore(e => e.larkUserId);
    return !!i && !!n && (i === "ccm-sdk" ? n === a : l === n);
  };
  let v = e => {
    var i;
    let n = p(e == null ? undefined : e.status.streaming, null);
    let r = f({
      docPath: e == null ? undefined : e.docPath,
      streamingUserId: n == null ? undefined : n.userId
    });
    let o = (i = n == null ? undefined : n.enabled) !== null && i !== undefined && i;
    let l = (e == null ? undefined : e.isEditorReady) === false && n === null || o;
    let a = (n == null ? undefined : n.breakable) !== false;
    return {
      streamingSource: n == null ? undefined : n.source,
      isCurrentStreaming: o,
      isSelfStreaming: r && o,
      isMightStreaming: l,
      isStreamingBreakable: a
    };
  };
  require.d(exports, {
    useStreamingStatus: function () {
      return v;
    }
  });
}