// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'i' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-imageeditoraction-url-parse-plugin.5a340f5f.js
         * chunkId: 40815
         * moduleId: 657994
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function o(e) {
    let {
      payload: a,
      openImageCanvas: t,
      phase3EndTime: o,
      sendMessage: _
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceImageEditHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - o,
        plugin: aiActionConstants.aiActionConstants.AISpace_ImageEdit
      }
    });
    let r = Date.now();
    let {
      message: u,
      boardCastEventName: d,
      uri: l,
      url: p,
      width: m,
      height: c
    } = a;
    if (u) {
      _(u);
    } else if (d) {
      let e = new BroadcastChannel(d);
      e.onmessage = a => {
        _(a.data?.message);
        e.postMessage({
          received: true
        });
        e.close();
      };
    }
    t({
      image: {
        uri: l,
        url: p,
        width: m,
        height: c,
        name: ""
      },
      imageCanvasInitStatus: "loading",
      canvasLayoutState: chatPanelModes.PanelMode.SIDE_PANEL
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - r,
        plugin: aiActionConstants.aiActionConstants.AISpace_ImageEdit
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return o;
    }
  });
}