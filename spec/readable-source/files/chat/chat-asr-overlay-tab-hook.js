// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'useAsrOverlayTab'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 440106
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatAsrStoreHook = require("chat-asr-store-hook") /*id: 176317*/;
  var sidebarStatusHook = require("sidebar-status-hook") /*id: 703029*/;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var chatHoldSpaceSpeechSetting = require("chat-hold-space-speech-setting") /*id: 575180*/;
  function u(e = {}) {
    let {
      showCondition: t,
      extraDeps: n = []
    } = e;
    let {
      holdSpaceToSpeech: u
    } = chatHoldSpaceSpeechSetting.getHoldSpaceConfig();
    let {
      asrStatus: c,
      asrVolume: d,
      asrStartMethod: h
    } = chatAsrStoreHook.useChatAsrStore(e => ({
      asrStatus: e.asrStatus,
      asrVolume: e.asrVolume,
      asrStartMethod: e.asrStartMethod
    }), deepEqualityUtil.deepEqual);
    let m = reactCoreLibraryReexport.useMemo(() => [chatStatusConstants.ChatStatus.RECORDING, chatStatusConstants.ChatStatus.PAUSED, chatStatusConstants.ChatStatus.LOADING].includes(c), [c]);
    let g = t ?? (u && m);
    let f = sidebarStatusHook.useSidebarStatus();
    let p = reactCoreLibraryReexport.useRef(null);
    let [_, v] = reactCoreLibraryReexport.useState(0);
    let [b, S] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (g) {
        e();
        window.addEventListener("resize", e);
        return () => {
          window.removeEventListener("resize", e);
        };
      }
      function e() {
        if (!p.current) {
          return;
        }
        let e = p.current.getBoundingClientRect();
        v(e.left + e.width / 2);
        S(e.width);
      }
    }, [f, g, ...n]);
    return {
      wrapperRef: p,
      asrTabLeftPos: _,
      asrTabWidth: b,
      showAsrOverlayTab: g,
      asrVolume: d,
      asrStartMethod: h,
      asrStatus: c
    };
  }
  require.d(exports, {
    useAsrOverlayTab: function () {
      return u;
    }
  });
}