// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'resumeSamanthaChatTask'
// - Resolved require(663494) to 'resume-samantha-chat-task'
// - Renamed variable 'i' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable 'o' to 'imageEditModes'
// - Resolved require(494752) to 'image-edit-modes'
// - Renamed variable 'r' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 's' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property '_' to 'resumeChatTask' (module 663494)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// - Updated imported property 'B' to 'editModes' (module 494752)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-canvas-openurl-url-parse-plugin.3e6c43f8.js
         * chunkId: 17547
         * moduleId: 578213
         */
module.exports = function (module, exports, require) {
  var resumeSamanthaChatTask = require("resume-samantha-chat-task") /*id: 663494*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var imageEditModes = require("image-edit-modes") /*id: 494752*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = async e => {
    let {
      payload: t = {},
      navigate: n
    } = e;
    try {
      let {
        chatId: e,
        loginSource: l,
        imageContent: d
      } = t;
      await resumeSamanthaChatTask.resumeChatTask({
        chatId: e,
        loginSource: l,
        navigate: n
      });
      if (!("imageContent" in t)) {
        throw Error("Bad payload format");
      }
      let c = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      setTimeout(() => {
        var t;
        if (c != null && (t = c.openCanvasPanel) !== null && t !== undefined) {
          t.call(c, {
            conversationId: "",
            messageId: "",
            canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
            imageEditorProps: {
              image: d,
              skillId: null,
              skillName: null,
              initialEditTool: imageEditModes.editModes.default,
              onClose: () => {
                chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(e);
                chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
              }
            }
          }, undefined, false);
        }
      }, 500);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "open_image_canvas_by_url_action_error",
        error: e,
        meta: {
          ...t
        }
      });
    }
  };
  exports.default = d;
  require.r(exports);
}