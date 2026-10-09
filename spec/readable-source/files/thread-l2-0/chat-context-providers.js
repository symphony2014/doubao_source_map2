// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$A' to 'useThemeContext'
// - Renamed export 'E8' to 'ArtifactClickProv'
// - Renamed export 'T4' to 'ChatRootProvider'
// - Renamed export 'W7' to 'useLatestCallback'
// - Renamed export 'bf' to 'ThemeProvider'
// - Renamed export 'p3' to 'useArtifactClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 793426
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var debugMessageContext = require("debug-message-context") /*id: 818296*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.createContext({
    theme: "samantha",
    user: undefined,
    bot: undefined,
    searchDefaultExpand: true
  });
  let u = () => reactCoreLibraryReexport.useContext(d);
  let p = e => {
    let {
      children: t,
      theme: n,
      displayOptions: o,
      themeContextValue: r
    } = e;
    let l = reactUseChangedRef.useChangedRef({
      theme: n || "samantha",
      ...r,
      displayOptions: o
    }, deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsx(d.Provider, {
      value: l,
      children: t
    });
  };
  let h = reactCoreLibraryReexport.createContext({});
  let m = () => reactCoreLibraryReexport.useContext(h);
  let f = e => {
    let {
      onArtifactCardClick: t,
      children: n
    } = e;
    let o = reactUseChangedRef.useChangedRef({
      onArtifactCardClick: t
    }, deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsx(h.Provider, {
      value: o,
      children: n
    });
  };
  let g = e => {
    let {
      children: t,
      getMessage: n,
      overrideChatContext: i,
      isEnableDebug: a
    } = e;
    let d = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsx(chatRefsContext.ChatRefsContext.Provider, {
      value: {
        scrollRef: d,
        chatInputRef: d,
        chatPageTargetRef: d,
        chatViewRef: d,
        chatDropTargetRef: d
      },
      children: reactJsxRuntimeCoreReexport.jsx(chatContextUtil.ChatContext.Provider, {
        value: {
          chatViewConfig: undefined,
          ...i
        },
        children: reactJsxRuntimeCoreReexport.jsx(debugMessageContext.DebugMessageProvider, {
          enableSendTrackToken: false,
          getMessage: (e, t, o) => n(o),
          enableMessageDebug: a == null ? undefined : a(),
          children: t
        })
      })
    });
  };
  let v = e => {
    let t = reactCoreLibraryReexport.useRef(e);
    t.current = e;
    return reactCoreLibraryReexport.useCallback(e => {
      var n;
      if ((n = t.current) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(t, e);
      }
    }, []);
  };
  require.d(exports, {
    useThemeContext: function () {
      return u;
    },
    ArtifactClickProv: function () {
      return f;
    },
    ChatRootProvider: function () {
      return g;
    },
    useLatestCallback: function () {
      return v;
    },
    ThemeProvider: function () {
      return p;
    },
    useArtifactClick: function () {
      return m;
    }
  });
}