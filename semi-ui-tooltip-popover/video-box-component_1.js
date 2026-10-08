// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'a' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'd' to 'relatedVideoCarousel'
// - Resolved require(471795) to 'related-video-carousel'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'XA' to 'AliceApiService' (module 147875)
// - Updated imported property 'of' to 'RelatedVideoHeader' (module 471795)
// - Updated imported property 'aD' to 'VideoCarouselList' (module 471795)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 428732
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var relatedVideoCarousel = require("related-video-carousel") /*id: 471795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function c(e) {
    let {
      videos: i,
      message: t,
      type: c,
      hideHeader: u
    } = e;
    let m = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let p = i == null ? undefined : i.map(e => ({
      item_id: e.item_id || "",
      video_captions: e.video_captions,
      source_from: e.source_from || 2,
      source_app_icon: e.source_app_icon || "",
      album_image: e.album_image || "",
      vid: e.item_id || "",
      media_width: 0,
      media_height: 0
    }));
    let [h, v] = reactIntersectionObserver_1.useInView({
      triggerOnce: false,
      initialInView: true,
      threshold: 0.1
    });
    let _ = async e => {
      let {
        item_ids: i,
        source_from: t,
        ...n
      } = e;
      let r = {
        item_ids: i,
        ...n
      };
      let l = Number(t) !== 2 ? apiServicesCollection.AliceApiService.LoadVideoDY(r) : apiServicesCollection.AliceApiService.LoadVideoTT(r);
      let {
        data: a
      } = await l;
      return a;
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: h,
      children: [!u && reactJsxRuntimeCoreReexport.jsx(relatedVideoCarousel.RelatedVideoHeader, {}), reactJsxRuntimeCoreReexport.jsx(relatedVideoCarousel.VideoCarouselList, {
        videos: p,
        onLoadVideo: _,
        inView: v,
        onTrackEvent: (e, n) => {
          if (!t) {
            return;
          }
          let c = chatConversationBotId.getConversationBotId(t.conversation_id || "");
          let u = {
            ...n,
            message_id: t == null ? undefined : t.message_id,
            conversation_id: t == null ? undefined : t.conversation_id,
            bot_id: c,
            chat_type: m == null ? undefined : m.chatType,
            reply_id: t == null ? undefined : t.reply_id,
            module_position: "within_text",
            card_count: i.length,
            card_type: "video",
            search_id: (t == null ? undefined : t.ext?.inner_log_id) || (t == null ? undefined : t.local_info?.logId),
            req_id: (t == null ? undefined : t.ext?.inner_log_id) || (t == null ? undefined : t.local_info?.logId),
            host_enter_from: "flow_click_recommend_video_card"
          };
          teaAnalyticsEventTracker.trackEvent(e, u);
        },
        type: c
      })]
    });
  }
  require.r(exports);
  require.d(exports, {
    VideoBox: function () {
      return c;
    }
  });
}