// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'of' to 'RelatedVideoHeader'
// - Renamed export 'aD' to 'VideoCarouselList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 471795
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var videoPlayerBoxItem = require("video-player-box-item") /*id: 719010*/;
  var s = {
    "container-list": "container-list-l4lEZ2",
    containerList: "container-list-l4lEZ2",
    "video-card": "video-card-LRjesn",
    videoCard: "video-card-LRjesn",
    "container-grid": "container-grid-a76hc6",
    containerGrid: "container-grid-a76hc6",
    text: "text-fIIL4w"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      classname: i
    } = e;
    let t = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: l("flex items-center justify-start gap-12 pt-12 pb-8 pl-4", i),
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        className: s.text,
        children: t("related_video_cn")
      })
    });
  };
  function m(e) {
    let {
      onTrackEvent: i,
      videos: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(p, {
      videos: t,
      ...n,
      onTrackEvent: i
    });
  }
  function p(e) {
    let {
      videos: i,
      onLoadVideo: t,
      onTrackEvent: r,
      inView: a
    } = e;
    let u = {
      video_list: i
    };
    let m = reactCoreLibraryReexport.useMemo(() => {
      if (i.length === 1) {
        let {
          media_height: t = 1,
          media_width: n = 1
        } = i[0] ?? {};
        if (n > 0 && t > 0 && n / t > 1) {
          return "!w-240 !h-160";
        }
      }
      return "";
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s["container-list"],
      children: reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        arrowSize: "medium",
        carouselRowClassName: l(s["carousel-row"], "!gap-8"),
        children: i.map((e, i) => reactJsxRuntimeCoreReexport.jsx(videoPlayerBoxItem.VideoPlayerBox, {
          videoContent: u,
          onVideoPlay: t,
          inView: a,
          currentPlay: e.item_id,
          videoCardClassName: l(s["video-card"], m),
          onClick: () => {
            if (r != null) {
              r("click_card", {
                card_position: i,
                module_type: "multiple_card",
                card_id: e.item_id
              });
            }
          },
          onShow: () => {
            if (r != null) {
              r("show_card", {
                card_position: i,
                module_type: "multiple_card",
                card_id: e.item_id
              });
            }
          },
          onTrackEvent: r
        }, `${e.item_id}_${i}`))
      })
    });
  }
  require.d(exports, {
    RelatedVideoHeader: function () {
      return u;
    },
    VideoCarouselList: function () {
      return m;
    }
  });
}