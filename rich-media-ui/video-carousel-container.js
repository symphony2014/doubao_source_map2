// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'l' to 'relatedVideoCarousel'
// - Resolved require(471795) to 'related-video-carousel'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'XA' to 'AliceApiService' (module 147875)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'of' to 'RelatedVideoHeader' (module 471795)
// - Updated imported property 'aD' to 'VideoCarouselList' (module 471795)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 240649
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var relatedVideoCarousel = require("related-video-carousel") /*id: 471795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e) {
    let {
      videos: i,
      type: t
    } = e;
    let o = i == null ? undefined : i.map(e => ({
      item_id: e.item_id || "",
      video_captions: e.video_captions,
      source_from: e.source_from || 2,
      source_app_icon: e.source_app_icon || "",
      album_image: e.album_image || "",
      vid: "",
      media_width: 0,
      media_height: 0
    }));
    let d = async e => {
      let {
        item_ids: i,
        source_from: t,
        ...n
      } = e;
      let l = {
        item_ids: i,
        ...n
      };
      let a = Number(t) !== 2 ? apiServicesCollection.AliceApiService.LoadVideoDY(l) : apiServicesCollection.AliceApiService.LoadVideoTT(l);
      let {
        data: o
      } = await a;
      return o;
    };
    let [s, c] = reactIntersectionObserver_1.useInView({
      triggerOnce: false,
      initialInView: true,
      threshold: 0.1
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: s,
      children: [reactJsxRuntimeCoreReexport.jsx(relatedVideoCarousel.RelatedVideoHeader, {}), reactJsxRuntimeCoreReexport.jsx(relatedVideoCarousel.VideoCarouselList, {
        videos: o,
        onLoadVideo: d,
        inView: c,
        type: t
      })]
    });
  }
  require.r(exports);
  require.d(exports, {
    VideoPureBox: function () {
      return o;
    }
  });
}