// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'SearchRefContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 583262
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  require("search-reference-ui-component") /*id: 676486*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  require("async-skill-content-block") /*id: 372101*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let s = () => {
    var e;
    var t;
    var n;
    var i;
    let r = ((i = globalThis) === null || i === undefined ? undefined : (n = i.chrome) === null || n === undefined ? undefined : (t = n.runtime) === null || t === undefined ? undefined : (e = t.getURL) === null || e === undefined ? undefined : e.call(t, "side_panel.html")) || "chrome-extension://";
    return location.href.startsWith(r);
  };
  let c = () => {
    try {
      return !s() && userAgentDeviceDetector.isVersionGte({
        greaterEqualVersion: "1.57.0"
      });
    } catch (e) {
      return false;
    }
  };
  let d = () => null;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      searchType: n,
      conversationId: a,
      searchReferenceData: s,
      enableOpenCanvas: h = true,
      onTrackEvent: v,
      message: m
    } = e;
    let [f, g] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.thirdPageSidePanel, e.updateThirdPageSidePanel], deepEqualityUtil_1.isDeepEqual);
    messageContentTypeAndStatusChecker.f8g(m);
    if (!(s == null ? undefined : s.copilot) && s != null) {
      s.search_result;
    }
    let _ = c();
    let b = () => {
      if (f == null ? undefined : f.visible) {
        g({
          ...f,
          visible: false
        });
      }
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      updateRedNoteStatus: b
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if ((f == null ? undefined : f.visible) && f.webviewInfo) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      }
    }, [f]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [false, _ ? reactJsxRuntimeCoreReexport.jsx(d, {
        message: m
      }) : null]
    });
  });
  require.d(exports, {
    SearchRefContent: function () {
      return h;
    }
  });
}