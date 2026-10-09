// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'ChatVideoCarousel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 161441
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var relatedVideoCarousel = require("related-video-carousel") /*id: 471795*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useVideoLoadCache = require("use-video-load-cache") /*id: 665552*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      inView: t,
      message: r,
      disableTrack: c = false
    } = e;
    let d = objectPathGetDefault.getObjectPathDefault(r, "content_obj.search_result.video_card.card_list") || [];
    let u = d == null ? undefined : d.map(e => ({
      item_id: e.item_id,
      video_captions: e.video_captions,
      source_from: e.source_from || 2,
      source_app_icon: e.source_app_icon || "",
      album_image: e.album_image || "",
      vid: e.item_id || "",
      media_width: 0,
      media_height: 0
    }));
    let h = useVideoLoadCache.useVideoLoadWithCache();
    return reactJsxRuntimeCoreReexport.jsx(relatedVideoCarousel.VideoCarouselList, {
      videos: u,
      onLoadVideo: h,
      inView: t,
      onTrackEvent: (e, t) => {
        if (!c && r) {
          teaAnalyticsEventTracker.trackEvent(e, {
            ...t,
            message_id: r == null ? undefined : r.message_id,
            conversation_id: r.conversation_id,
            bot_id: r.bot_id,
            chat_type: chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatType,
            reply_id: r == null ? undefined : r.reply_id,
            module_position: "no_text",
            card_count: u.length,
            card_type: "video",
            search_id: (r == null ? undefined : r.ext?.inner_log_id) || (r == null ? undefined : r.local_info?.logId),
            req_id: (r == null ? undefined : r.ext?.inner_log_id) || (r == null ? undefined : r.local_info?.logId),
            host_enter_from: "flow_click_only_video"
          });
        }
      }
    });
  };
  require.d(exports, {
    ChatVideoCarousel: function () {
      return c;
    }
  });
}