// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'renderChatTimestamps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 644303
         */
module.exports = function (module, exports, require) {
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var desktopTimestampUrlHandler = require("desktop-timestamp-url-handler") /*id: 98217*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var secondsToTimeFormat = require("seconds-to-time-format") /*id: 279117*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      timestamp: t,
      options: r,
      onClick: n,
      isSideChat: i,
      reportTimestampShow: a
    } = e;
    let {
      getPopupContainer: u
    } = r ?? {};
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let p = secondsToTimeFormat.formatSecondsToTime(t);
    reactCoreLibraryReexport.useEffect(() => {
      if (a != null) {
        a(p);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      getPopupContainer: u,
      content: h(i ? "desktop_locateVideo_sidebar_tooltip" : "desktop_locateVideo_chat_tooltip"),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "timestamp-sSaII1",
        onClick: n,
        children: p
      })
    });
  };
  let h = e => {
    let {
      metaInfos: t,
      options: r,
      onClickRef: o,
      isSideChat: s,
      reportTimestampShow: l
    } = e;
    let c = t.filter(desktopTimestampUrlHandler.isDesktopTimestampReference);
    let {
      video_url: h
    } = c.length === 0 ? {} : c[c.length - 1].data;
    let p = collectionMapMatcher.mapWithMatcher(c, e => {
      var r;
      if ((r = e.data) === null || r === undefined) {
        return undefined;
      } else {
        return r.indexes?.[0];
      }
    });
    let f = [];
    collectionMapMatcher.mapWithMatcher(p, (e, t) => {
      let n = e == null ? undefined : e.insert_index;
      let a = e == null ? undefined : e.timestamp;
      if (isUndefinedCheck.isUndefined(n) || isUndefinedCheck.isUndefined(a) || a < 0) {
        return;
      }
      let c = a / 1000 || 0;
      f.push({
        range: Number(n),
        render: () => reactJsxRuntimeCoreReexport.jsx("span", {
          children: reactJsxRuntimeCoreReexport.jsx(u, {
            timestamp: c,
            onClick: () => {
              o(h || "", c, t + 1);
            },
            options: r,
            isSideChat: s,
            reportTimestampShow: e => {
              if (l != null) {
                l(h || "", e, t + 1);
              }
            }
          })
        })
      });
    });
    return f;
  };
  require.d(exports, {
    renderChatTimestamps: function () {
      return h;
    }
  });
}