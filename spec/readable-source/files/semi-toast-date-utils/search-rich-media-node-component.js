// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'relatedVideoCarousel'
// - Resolved require(471795) to 'related-video-carousel'
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'p' to 'useVideoLoadCache'
// - Resolved require(665552) to 'use-video-load-cache'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'f' to 'chatMessageImageGrid'
// - Resolved require(575287) to 'chat-message-image-grid'
// - Updated imported property 'F6' to 'richMediaType' (module 617019)
// - Updated imported property 'oI' to 'blockSearchMediaScene' (module 617019)
// - Updated imported property 'Z' to 'useVideoLoadWithCache' (module 665552)
// - Updated imported property 'of' to 'RelatedVideoHeader' (module 471795)
// - Updated imported property 'aD' to 'VideoCarouselList' (module 471795)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 't' to 'ChatMessageImageGrid' (module 575287)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 71679.8c039722.js
         * chunkId: 71679
         * moduleId: 392283
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = e => {
    let {
      id: t,
      uri: n,
      thumb_url: i,
      main_site_url: o,
      full_size_url: r,
      author_short_id: s,
      source_from: l,
      source_app_name: a,
      source_app_icon: c,
      width: d,
      height: u,
      doc_id: p
    } = e;
    return {
      id: t,
      thumb_url: i,
      uri: n,
      main_site_url: o,
      full_size_url: r,
      author_short_id: s,
      source_from: l,
      source_app_name: a,
      source_app_icon: c,
      width: d,
      height: u,
      doc_id: p
    };
  };
  let s = e => reactCoreLibraryReexport.useMemo(() => {
    let {
      creations: t
    } = e || {};
    let n = [];
    if (t != null) {
      t.forEach(e => {
        let {
          type: t,
          image: o,
          video: s
        } = e;
        if (!o && !s) {
          return;
        }
        let l = n[n.length - 1];
        if ((l == null ? undefined : l.type) !== t) {
          let e = {
            type: t
          };
          switch (t) {
            case skillMessageLifecycleTypes.richMediaType.RichMediaTypeVideo:
              e.videoList = [s];
              break;
            case skillMessageLifecycleTypes.richMediaType.RichMediaTypeImage:
              {
                let t = r(o);
                e.imageList = [t];
              }
          }
          n.push(e);
        } else {
          var a;
          var c;
          switch (t) {
            case skillMessageLifecycleTypes.richMediaType.RichMediaTypeVideo:
              if (l != null && (a = l.videoList) !== null && a !== undefined) {
                a.push(s);
              }
              break;
            case skillMessageLifecycleTypes.richMediaType.RichMediaTypeImage:
              {
                let e = r(o);
                if (l != null && (c = l.imageList) !== null && c !== undefined) {
                  c.push(e);
                }
              }
          }
        }
      });
    }
    return n;
  }, [e]);
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var relatedVideoCarousel = require("related-video-carousel") /*id: 471795*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useVideoLoadCache = require("use-video-load-cache") /*id: 665552*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      videoList: t,
      disableTrack: n,
      messageId: o,
      conversationId: r,
      replyId: s,
      botId: l,
      logId: m,
      share: f,
      inView: g,
      scene: v
    } = e;
    let b = t == null ? undefined : t.map(e => ({
      item_id: e.item_id,
      video_captions: e.video_captions,
      source_from: e.source_from || 2,
      source_app_icon: e.source_app_icon || "",
      album_image: e.album_image || "",
      vid: e.item_id || "",
      media_width: e.album_image_width || 0,
      media_height: e.album_image_height || 0
    }));
    let y = useVideoLoadCache.useVideoLoadWithCache();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(f && "mt-20"),
      children: [reactJsxRuntimeCoreReexport.jsx(relatedVideoCarousel.RelatedVideoHeader, {
        classname: "!pt-0"
      }), reactJsxRuntimeCoreReexport.jsx(relatedVideoCarousel.VideoCarouselList, {
        videos: b,
        onLoadVideo: y,
        inView: g,
        onTrackEvent: (e, t) => {
          if (!n) {
            teaAnalyticsEventTracker.trackEvent(e, {
              ...t,
              message_id: o,
              conversation_id: r,
              bot_id: l,
              chat_type: chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatType,
              reply_id: s,
              module_position: v === skillMessageLifecycleTypes.blockSearchMediaScene.BlockSearchRichMediaScene_RelatedVideo ? "with_text" : "no_text",
              card_count: b.length,
              card_type: "video",
              search_id: m,
              req_id: m,
              host_enter_from: v === skillMessageLifecycleTypes.blockSearchMediaScene.BlockSearchRichMediaScene_RelatedVideo ? "flow_click_recommend_video_card" : "flow_click_only_video"
            });
          }
        }
      })]
    });
  };
  var chatMessageImageGrid = require("chat-message-image-grid") /*id: 575287*/;
  let g = e => {
    let {
      blockData: t,
      inView: n,
      disableTrack: o,
      messageId: r,
      conversationId: l,
      replyId: a,
      botId: c,
      logId: d
    } = e;
    let u = s(t);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: u.map((e, s) => {
        switch (e == null ? undefined : e.type) {
          case skillMessageLifecycleTypes.richMediaType.RichMediaTypeVideo:
            {
              let i = (e == null ? undefined : e.videoList) || [];
              if ((i == null ? undefined : i.length) > 0) {
                return reactJsxRuntimeCoreReexport.jsx(m, {
                  videoList: i,
                  inView: n,
                  messageId: r,
                  conversationId: l,
                  replyId: a,
                  botId: c,
                  logId: d,
                  scene: t.scene
                }, s);
              } else {
                return null;
              }
            }
          case skillMessageLifecycleTypes.richMediaType.RichMediaTypeImage:
            {
              let t = (e == null ? undefined : e.imageList) || [];
              if ((t == null ? undefined : t.length) > 0) {
                return reactJsxRuntimeCoreReexport.jsx(chatMessageImageGrid.ChatMessageImageGrid, {
                  messageId: r,
                  conversationId: l,
                  replyId: a,
                  disableTrack: o,
                  imageCardList: t
                }, s);
              } else {
                return null;
              }
            }
          default:
            return null;
        }
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    SearchRichMediaNode: function () {
      return g;
    }
  });
}