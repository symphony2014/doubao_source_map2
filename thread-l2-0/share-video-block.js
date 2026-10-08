// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'videoMessageDataFormatter'
// - Resolved require(931033) to 'video-message-data-formatter'
// - Renamed variable 'r' to 'skillVideoMessageBox'
// - Resolved require(27511) to 'skill-video-message-box'
// - Renamed variable 'l' to 'videoGenerationErrorBoundary'
// - Resolved require(608647) to 'video-generation-error-boundary'
// - Renamed variable 's' to 'chatContextProviders'
// - Resolved require(793426) to 'chat-context-providers'
// - Renamed variable 'a' to 'reactErrorBoundaryWrapper'
// - Resolved require(939224) to 'react-error-boundary-wrapper'
// - Renamed variable 'c' to 'videoPlayerClass'
// - Resolved require(578845) to 'video-player-class'
// - Renamed variable 'd' to 'videoCoverManager'
// - Resolved require(998573) to 'video-cover-manager'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'controlBarActionListComponent'
// - Resolved require(716645) to 'control-bar-action-list-component'
// - Renamed variable 'h' to 'useElementSizeHook_2'
// - Resolved require(486741) to 'use-element-size-hook_2'
// - Renamed variable 'm' to 'useDebouncedValueHook'
// - Resolved require(510920) to 'use-debounced-value-hook'
// - Renamed variable 'f' to 'reactAsyncIteratorHook'
// - Resolved require(545543) to 'react-async-iterator-hook'
// - Renamed variable 'g' to 'localeDirectionCheck'
// - Resolved require(255854) to 'locale-direction-check'
// - Renamed variable 'v' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'y' to 'fileDownloadUtilities'
// - Resolved require(552822) to 'file-download-utilities'
// - Renamed variable 'b' to 'modalConfirmDialogManager'
// - Resolved require(948195) to 'modal-confirm-dialog-manager'
// - Renamed variable 'w' to 'rtlExpandArrowsIcon'
// - Resolved require(399455) to 'rtl-expand-arrows-icon'
// - Renamed variable 'x' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'E' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property '$A' to 'useThemeContext' (module 793426)
// - Updated imported property 'Z' to 'useElementSize' (module 486741)
// - Updated imported property 'Z' to 'useDebouncedValue' (module 510920)
// - Updated imported property 'Z' to 'useAsyncIterator' (module 545543)
// - Updated imported property 'j' to 'getVideoPlayInfo' (module 998573)
// - Updated imported property 'Z' to 'VideoPlayer' (module 578845)
// - Updated imported property 'l' to 'getBrowserLanguage' (module 255854)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'eV' to 'downloadVideoAsMp4' (module 552822)
// - Updated imported property 'T' to 'ModalConfirmDialog' (module 948195)
// - Updated imported property 'X' to 'ControlBarActionList' (module 716645)
// - Updated imported property 'Z' to 'ExpandArrowsIcon' (module 399455)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'Pf' to 'withErrorBoundary' (module 939224)
// - Updated imported property 'J$' to 'formatVideoMessageData' (module 931033)
// - Updated imported property 'F' to 'SkillVideoMessageBox' (module 27511)
// - Updated imported property 's' to 'VideoErrorFallback' (module 608647)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 101648
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var videoMessageDataFormatter = require("video-message-data-formatter") /*id: 931033*/;
  var skillVideoMessageBox = require("skill-video-message-box") /*id: 27511*/;
  var videoGenerationErrorBoundary = require("video-generation-error-boundary") /*id: 608647*/;
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var videoPlayerClass = require("video-player-class") /*id: 578845*/;
  var videoCoverManager = require("video-cover-manager") /*id: 998573*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var controlBarActionListComponent = require("control-bar-action-list-component") /*id: 716645*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var reactAsyncIteratorHook = require("react-async-iterator-hook") /*id: 545543*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let O = e => {
    let {
      video: t,
      onClose: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      shareName: r
    } = chatContextProviders.useThemeContext() || {};
    let l = reactCoreLibraryReexport.useRef(null);
    let a = reactCoreLibraryReexport.useRef(null);
    let [O, j] = reactCoreLibraryReexport.useState("");
    let [C, k] = reactCoreLibraryReexport.useState(null);
    let {
      width: N,
      height: _
    } = useElementSizeHook_2.useElementSize(C) || {};
    let S = useDebouncedValueHook.useDebouncedValue(`${N}_${_}`, {
      wait: 100,
      leading: false,
      trailing: true
    });
    let $ = reactCoreLibraryReexport.useMemo(() => {
      let {
        width: e,
        height: n
      } = t;
      if (!N || !_ || !e || !n) {
        return {
          width: "100%",
          height: "100%"
        };
      }
      let o = N - 48;
      let i = _ - 48;
      if (o <= 0 || i <= 0) {
        return {
          width: "100%",
          height: "100%"
        };
      }
      let r = e / n;
      let l = i * r;
      let s = o / r;
      if (l <= o) {
        return {
          width: l,
          height: i
        };
      } else if (s <= i) {
        return {
          width: o,
          height: s
        };
      } else {
        return {
          width: "100%",
          height: "100%"
        };
      }
    }, [N, _, t.width, t.height]);
    reactCoreLibraryReexport.useEffect(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = a.current) !== null && e !== undefined) {
        e.resize();
      }
    }, [S]);
    reactAsyncIteratorHook.useAsyncIterator(async () => {
      if (t.vid) {
        let e = await videoCoverManager.getVideoPlayInfo(t.vid);
        if (!e) {
          return;
        }
        let n = e.data.main || e.data.backup;
        if (n) {
          j(n);
        }
        return;
      }
    }, [t.vid]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l.current && O) {
        if (!a.current) {
          a.current = new videoPlayerClass.VideoPlayer({
            el: l.current,
            url: O,
            poster: t.previewCoverUrl,
            width: "100%",
            height: "100%",
            lang: localeDirectionCheck.getBrowserLanguage(),
            autoplay: true,
            autoplayMuted: true,
            loop: true,
            closeVideoClick: true,
            closeVideoDblclick: true,
            ignores: ["playbackRate", "pip", "mini", "cssFullscreen", "fullscreen", "mobile"],
            controls: {
              autoHide: false,
              mode: "bottom"
            },
            keyboard: {
              disableBodyTrigger: true
            }
          });
          return;
        }
        if (a.current.url !== O) {
          a.current.switchURL(O);
          return;
        }
      }
    }, [O]);
    let D = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (O) {
        fileDownloadUtilities.downloadVideoAsMp4(O, r || "untitled");
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      className: "share-video-preview-modal-GMfQDQ",
      fullScreen: true,
      visible: true,
      closeIcon: null,
      header: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "header-wrapper-CjcDnq",
        children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          items: [{
            type: "icon",
            icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {}),
            newIcon: true,
            title: i("video_canvas_btn_download"),
            disabled: !O,
            onClick: D
          }, {
            type: "divider"
          }, {
            type: "icon",
            icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
            newIcon: true,
            tooltip: i("confirm_button_yes"),
            onClick: n,
            extraProps: {
              className: "close-icon-UH_b5B"
            }
          }]
        })
      }),
      footer: null,
      onCancel: n,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: k,
        className: "video-wrapper-VVIoJf",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          style: $,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: l,
            className: "video-player-aDDWBM"
          })
        })
      })
    });
  };
  let j = reactErrorBoundaryWrapper.withErrorBoundary(function (e) {
    let {
      creationsVideoList: t,
      message: n
    } = e;
    let {
      shareName: l
    } = chatContextProviders.useThemeContext() || {};
    let [a, c] = reactCoreLibraryReexport.useState();
    let {
      videoListGroup: d
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = t.reduce((e, t) => {
        let o = videoMessageDataFormatter.formatVideoMessageData(t.video, {
          messageId: n.message_id
        });
        if (o) {
          e.push(o);
        }
        return e;
      }, []);
      let o = e.reduce((e, t) => {
        let o = t.width / t.height;
        if (e[e.length - 1]?.ratio !== o) {
          e.push({
            ratio: o,
            videoList: []
          });
        }
        e[e.length - 1].videoList.push(t);
        return e;
      }, []);
      return {
        videoList: e,
        videoListGroup: o
      };
    }, [t]);
    let u = (e, t) => {
      c(t);
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [d.map((e, t) => reactJsxRuntimeCoreReexport.jsx(skillVideoMessageBox.SkillVideoMessageBox, {
        message: n,
        downloadName: l,
        videoList: e.videoList,
        onClickVideo: u
      }, `${t}_${e.ratio}`)), a && reactJsxRuntimeCoreReexport.jsx(O, {
        video: a,
        onClose: () => c(undefined)
      })]
    });
  }, {
    errorBoundaryName: "share_video_message_block_error",
    FallbackComponent: videoGenerationErrorBoundary.VideoErrorFallback
  });
  require.r(exports);
  require.d(exports, {
    ShareVideoBlock: function () {
      return j;
    }
  });
}