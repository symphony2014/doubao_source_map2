// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TtsAudioPlayerButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 688444
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var stringUtilities = require("string-utilities") /*id: 612303*/;
  var useTtsAudioStreamHook = require("use-tts-audio-stream-hook") /*id: 324045*/;
  var svgIconComponent_4 = require("svg-icon-component_4") /*id: 877049*/;
  var audioPlayingIndicator = require("audio-playing-indicator") /*id: 990290*/;
  var audioLoadingIndicator = require("audio-loading-indicator") /*id: 957107*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var h = {
    Default: "Default",
    Loading: "Loading",
    Playing: "Playing"
  };
  let p = e => function (t) {
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex h-full w-full items-center justify-center",
      children: reactJsxRuntimeCoreReexport.jsx(e, {
        ...t
      })
    });
  };
  let m = e => {
    let {
      className: t,
      status: n,
      tooltipContent: i,
      onClick: o = emptyExportFunction.emptyFunction
    } = e;
    let a = n === h.Loading;
    let m = n === h.Playing;
    let f = a ? p(audioLoadingIndicator.AudioLoadingIndicator) : m ? p(audioPlayingIndicator.AudioPlaying) : svgIconComponent_4.SvgIconComponent;
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      "data-testid": "audio_play_button",
      tooltipContent: i,
      onClick: o,
      className: t,
      prefix: reactJsxRuntimeCoreReexport.jsx(f, {})
    });
  };
  let f = e => {
    let {
      getPopupContainer: t,
      className: n,
      style: s = {},
      tooltipSpacing: l = {
        y: 10,
        x: 0
      },
      onClick: c = emptyExportFunction.emptyFunction,
      onGetTtsContent: d,
      onTtsEnd: p,
      onTtsStart: f,
      voiceStyleId: g,
      voicePitch: v,
      voiceSpeechRate: A,
      i18nConfig: b,
      createSocket: y,
      getCommonParams: w,
      clickInterceptor: x
    } = e;
    let C = stringUtilities.createFormatter(b);
    let E = reactCoreLibraryReexport.useRef(false);
    let {
      audioStatus: _,
      togglePlay: S
    } = useTtsAudioStreamHook.useTtsAudioStream({
      onGetTtsContent: d,
      onTtsEnd: p,
      onTtsStart: f,
      voiceStyleId: g,
      voicePitch: v,
      voiceSpeechRate: A,
      createSocket: y,
      getCommonParams: w
    });
    let k = C(_.loading || _.playing ? "flow_web_ext_action_popup_TTS_pause_hover" : "flow_web_ext_action_popup_TTS_hover");
    let N = reactCoreLibraryReexport.useMemo(() => _.loading ? h.Loading : _.playing ? h.Playing : h.Default, [_]);
    return reactJsxRuntimeCoreReexport.jsx(m, {
      className: n,
      style: s,
      status: N,
      tooltipSpacing: l,
      tooltipContent: k,
      getPopupContainer: t,
      onClick: () => {
        if (x == null || !x()) {
          c(!_.loading && !_.playing);
          E.current = true;
          S();
        }
      }
    });
  };
  require.d(exports, {
    TtsAudioPlayerButton: function () {
      return f;
    }
  });
}