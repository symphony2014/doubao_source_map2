// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'i' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'o' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 's' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'l' to 'cookieUtils'
// - Resolved require(535970) to 'cookie-utils'
// - Renamed variable 'c' to 'canvasAnalyticsTracker'
// - Resolved require(619081) to 'canvas-analytics-tracker'
// - Renamed variable 'd' to 'aiPptTemplateStore_1'
// - Resolved require(698449) to 'ai-ppt-template-store_1'
// - Renamed variable 'u' to 'aiPptSlidesApp'
// - Resolved require(4760) to 'ai-ppt-slides-app'
// - Updated imported property 'zm' to 'aiPptTemplateStore' (module 698449)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'OK' to 'artifactStatus' (module 617019)
// - Updated imported property 'y' to 'createCanvasAnalyticsData' (module 619081)
// - Updated imported property 'j' to 'slideSceneTypes' (module 4760)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'd' to 'setCookie' (module 535970)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ppt-url-action-plugin.a588f1e1.js
         * chunkId: 79068
         * moduleId: 139266
         */
module.exports = function (module, exports, require) {
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var cookieUtils = require("cookie-utils") /*id: 535970*/;
  var canvasAnalyticsTracker = require("canvas-analytics-tracker") /*id: 619081*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var aiPptSlidesApp = require("ai-ppt-slides-app") /*id: 4760*/;
  function f(e) {
    let {
      payload: t,
      navigate: n
    } = e;
    let {
      resource_id: f,
      conversation_id: p,
      drive_click_time: h
    } = t || {};
    if (!f || !p) {
      return;
    }
    aiPptTemplateStore_1.aiPptTemplateStore.getState().updateAutoViewCanvasResourceId(f);
    n(`/chat/${p}?skeleton_type=${new URL(location.href).searchParams.get("skeleton_type")}`, {
      replace: true
    });
    let m = chatMessageStoreFactory.createMessageStore.subscribe(e => {
      let {
        messageMap: t
      } = e;
      let n = t[p] || {};
      let i = Object.keys(n);
      if (i.length) {
        m();
        for (let e of i) {
          var x;
          let t = n[e];
          if (t.user_type !== chatMessageTypes.UserType.Bot) {
            continue;
          }
          let i = (x = t.content_blocks_v2) === null || x === undefined ? undefined : x.find(e => {
            var n;
            var o;
            return ((n = e.content) === null || n === undefined ? undefined : n.artifact_block?.resource_id) === f && ((o = e.content) === null || o === undefined ? undefined : o.artifact_block?.status) === skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generated;
          });
          if (!i) {
            continue;
          }
          let d = canvasAnalyticsTracker.createCanvasAnalyticsData({
            scene: aiPptSlidesApp.slideSceneTypes.URL_ACTION_OPEN_CHAT,
            message: t,
            contentBlock: i,
            isAutoOpen: false,
            artifactBlockContent: i.content?.artifact_block,
            driveClickTime: h ? Number(h) : 0,
            onCloseCanvas: () => {
              chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
            }
          });
          let {
            sidebarStatus: p
          } = chatStoreManager.getStore("flowWebLayoutStore").getState();
          chatStoreManager.getStore("flowWebLayoutStore").setState({
            sidebarStatus: "closed"
          });
          cookieUtils.setCookie("flow_ssr_sidebar_expand", p === "open" ? "1" : "0");
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel(d));
          break;
        }
        aiPptTemplateStore_1.aiPptTemplateStore.getState().updateAutoViewCanvasResourceId("");
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return f;
    }
  });
}