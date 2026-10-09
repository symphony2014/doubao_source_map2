// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'VideoPlayerWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 31773
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var videoPlayerClass = require("video-player-class") /*id: 578845*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var videoHoverButtonGroup = require("video-hover-button-group") /*id: 809223*/;
  require("webpack-module-wrapper") /*id: 631708*/;
  require("module-block-wrapper") /*id: 603991*/;
  let f = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      url: r,
      width: s,
      height: f,
      poster: m = "",
      mobileWidth: g,
      minVideoWidth: v,
      onTimeUpdate: _,
      onPlay: y,
      onDownload: b,
      onReplay: w,
      onComplete: x,
      onFullScreen: k,
      onMouseEnter: C,
      onError: j
    } = e;
    let S = reactCoreLibraryReexport.useRef(null);
    let E = reactCoreLibraryReexport.useRef({
      player: null
    });
    let R = e => {
      let {
        url: t,
        isAutoPlay: r = false
      } = e;
      return new videoPlayerClass.VideoPlayer({
        root: document.body,
        el: S.current,
        autoplay: r,
        poster: m,
        ignores: ["mobile", "volume", "cssFullscreen", "definition"],
        defaultDefinition: 0,
        icons: {
          startPlay: `
        <div style='width:48px; height:48px;  background-color:#fff;
         border-radius:50%;'>
        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjA0ODVfMTUxMjIpIj4KPHBhdGggZD0iTTEyIDBDMTguNjI3NCAwIDI0IDUuMzcyNTggMjQgMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0QzUuMzcyNTggMjQgMCAxOC42Mjc0IDAgMTJDMCA1LjM3MjU4IDUuMzcyNTggMCAxMiAwWk0xMC40MTIxIDcuODQ4NjNDOS42ODczMiA3LjczNzk2IDkuMDEwMDkgOC4yMzYxNSA4Ljg5OTQxIDguOTYwOTRMOC44NzU5OCA5LjExOTE0QzguNzcyMzcgOS44NzUzMyA4LjcyMDcgMTAuODM3IDguNzIwNyAxMi4wMDI5QzguNzIwNzEgMTMuMjQ4NSA4Ljc4MDE5IDE0LjI2MDIgOC44OTg0NCAxNS4wMzgxQzguOTExNTggMTUuMTI0NiA4LjkzMzAzIDE1LjIwOTggOC45NjI4OSAxNS4yOTJDOS4yMTMxOCAxNS45ODExIDkuOTc0OTIgMTYuMzM3MiAxMC42NjQxIDE2LjA4NjlMMTAuODIxMyAxNi4wMjczQzExLjU2NDYgMTUuNzQyMyAxMi40MjAzIDE1LjMxMTUgMTMuMzg3NyAxNC43MzM0QzE0LjMxNDQgMTQuMTc5NiAxNS4wNjAzIDEzLjY1OTggMTUuNjI2IDEzLjE3NThDMTUuNjg2MSAxMy4xMjQ0IDE1Ljc0MjQgMTMuMDY4OCAxNS43OTM5IDEzLjAwODhDMTYuMzUxMyAxMi4zNTk5IDE2LjI3NjggMTEuMzgxNiAxNS42Mjc5IDEwLjgyNDJMMTUuNDk0MSAxMC43MTE5QzE0Ljk0NjMgMTAuMjU4NiAxNC4yNDQzIDkuNzc1NTcgMTMuMzg3NyA5LjI2MzY3QzEyLjM0OTYgOC42NDMzNCAxMS40NDA0IDguMTkyODMgMTAuNjYxMSA3LjkxMjExQzEwLjU4MDMgNy44ODMwMyAxMC40OTcgNy44NjE2IDEwLjQxMjEgNy44NDg2M1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIwNDg1XzE1MTIyIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=' style='width:100%; height:100%; position:absolute; top:0; left:0;'/>
        </div>
         `
        },
        width: "100%",
        height: "100%",
        lang: i18nextLanguageGetter.getCurrentLanguage(),
        disableBodyTrigger: true,
        fitVideoSize: "fixWidth",
        controls: {
          autoHide: true
        },
        loop: false,
        url: t,
        closeVideoClick: true,
        closeVideoDblclick: true
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = R({
        url: r
      });
      e.on(videoPlayerEventConstants.TIME_UPDATE, e => {
        if (_ != null) {
          _({
            currentTime: e.currentTime
          });
        }
      });
      e.on(videoPlayerEventConstants.PLAY, () => {
        if (y != null) {
          y({
            duration: e.duration
          });
        }
      });
      e.on(videoPlayerEventConstants.REPLAY, () => {
        if (w != null) {
          w();
        }
      });
      e.on(videoPlayerEventConstants.COMPLETE, () => {
        if (x != null) {
          x();
        }
      });
      e.on(videoPlayerEventConstants.FULLSCREEN_CHANGE, t => {
        if (t) {
          e.plugins.controls.pauseAutoHide();
          e.plugins.controls.show();
        } else {
          e.plugins.controls.recoverAutoHide();
        }
      });
      e.on(videoPlayerEventConstants.ERROR, e => {
        if (j != null) {
          j(e);
        }
      });
      if (e != null) {
        e.setUserActive(true, false);
      }
      E.current.player = e;
      if (t) {
        if (typeof t == "function") {
          t(e);
        } else {
          t.current = e;
        }
      }
      e.focus();
      return () => {
        e.destroy();
      };
    }, []);
    let N = e => {
      e.preventDefault();
      e.stopPropagation();
      let t = E.current.player;
      if (t == null ? undefined : t.state) {
        if (e.code === "Escape") {
          return t.exitCssFullscreen();
        }
        if (e.code === "Space") {
          if (t.paused) {
            return t.play();
          } else {
            return t.pause();
          }
        }
      }
    };
    let T = debounceUtil_1_1.debounce(() => {
      let e = E.current.player;
      if (e == null ? undefined : e.isFullscreen) {
        e.plugins.controls.pauseAutoHide();
        e.plugins.controls.show();
      }
    }, 300, {
      leading: true
    });
    let P = s / f;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "video-wrapper-iCaDe8",
      style: {
        minWidth: g ? undefined : v,
        width: g ?? `${P > 1 ? 50 : 25}%`
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l("video-container-cdWBA7", videoHoverButtonGroup.containerClassName),
        style: {
          paddingBottom: `${1 / P * 100}%`
        },
        onKeyDown: e => N(e.nativeEvent),
        onMouseMove: T,
        onMouseEnter: C,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "video-generation-box-player-K1x5jl",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            ref: S
          })
        }), reactJsxRuntimeCoreReexport.jsx(videoHoverButtonGroup.VideoHoverGroup, {
          buttonList: [{
            type: "icon",
            key: "fullscreen",
            icon: rtlExitIcon.RtlExitIcon,
            title: "",
            onClick: () => {
              var e;
              var t;
              if (k != null) {
                k();
              }
              if ((t = E.current) !== null && t !== undefined && (e = t.player) !== null && e !== undefined) {
                e.getFullscreen();
              }
            }
          }, {
            type: "divider"
          }, {
            type: "icon",
            key: "download",
            icon: rtlExpandArrowsIcon.ExpandArrowsIcon,
            title: "",
            onClick: b
          }]
        })]
      })
    });
  });
  require.d(exports, {
    VideoPlayerWrapper: function () {
      return f;
    }
  });
}