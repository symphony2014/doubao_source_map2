// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 'i' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'h' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'f' to 'dbxDialogUiComponents'
// - Resolved require(176507) to 'dbx-dialog-ui-components'
// - Renamed variable 'g' to 'superTaskEventTracker'
// - Resolved require(368178) to 'super-task-event-tracker'
// - Renamed variable 'm' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'PJ' to 'getMessageById' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'rw' to 'getSuperTaskStore' (module 654619)
// - Updated imported property 'xD' to 'trackStopWindowShow' (module 368178)
// - Updated imported property 'zd' to 'trackStopWindowClick' (module 368178)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'cf' to 'chatProtocolLoader' (module 232752)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'M' to 'chatStatusTypes' (module 757046)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 749142
         */
module.exports = function (module, exports, require) {
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var dbxDialogUiComponents = require("dbx-dialog-ui-components") /*id: 176507*/;
  var superTaskEventTracker = require("super-task-event-tracker") /*id: 368178*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  let v = e => {};
  class y {
    async onBeforeBreakMessage(e) {
      let {
        chatId: t
      } = e;
      if (!t) {
        return true;
      }
      let n = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), t);
      if (!n || !messageContentTypeAndStatusChecker.Yi0(n) || chatMessageStatusCheck.isMessageFinished(n)) {
        return true;
      }
      let d = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), (n == null ? undefined : n.conversation_id) || "", (n == null ? undefined : n.reply_id) || "");
      let y = superTaskStore.getSuperTaskStore().getState().getTaskModeByConvId(t);
      let b = () => {
        var r;
        var s;
        let a = "";
        if (((d == null ? undefined : d.ext?.supertask_task_type) ? d == null ? undefined : d.ext?.supertask_task_type : (n == null ? undefined : (r = n.verbose) === null || r === undefined ? undefined : r.super_task?.supertask_task_type) ? n == null ? undefined : (s = n.verbose) === null || s === undefined ? undefined : s.super_task?.supertask_task_type : y.toString()) === "0") {
          return "search_task";
        } else {
          return "complex_task";
        }
      };
      try {
        let e = await new Promise(e => {
          let i = b();
          superTaskEventTracker.trackStopWindowShow({
            super_task_id: n.async_task?.id || "",
            super_task_mode: i
          });
          dbxDialogUiComponents.dbxDialogAPI.info({
            title: i18nTranslationUtils.i18nextTranslate("superAgent_stopWindow_header"),
            description: i18nTranslationUtils.i18nextTranslate("superAgent_stopWindow_desc", {
              brandName: brandNameConstants.getBrandName()
            }),
            headerProps: {
              onClickCloseIcon: () => e("cancel")
            },
            showCloseIcon: true,
            cancelBtn: i18nTranslationUtils.i18nextTranslate("superAgent_stopWindow_btn_newChat"),
            confirmBtn: i18nTranslationUtils.i18nextTranslate("superAgent_stopWindow_btn_stop"),
            onCancel: () => {
              e("navigate");
              superTaskEventTracker.trackStopWindowClick({
                super_task_id: n.async_task?.id || "",
                super_task_mode: i,
                button_name: "new_conv"
              });
            },
            onConfirm: () => {
              e("break");
              superTaskEventTracker.trackStopWindowClick({
                super_task_id: n.async_task?.id || "",
                super_task_mode: i,
                button_name: "confirm_stop"
              });
            }
          });
        });
        if (e === "break") {
          let e = n.async_task?.id;
          if (e) {
            v(e);
            apiServicesCollection.SamanthaApiService.TerminateSuperTask({
              task_id: e
            }).then(t => {
              if (t.code === 0) {
                chatPluginIocManager.chatProtocolLoader("SamanthaChat").then(t => {
                  var n;
                  if (t != null && (n = t.cancelAsyncTask) !== null && n !== undefined) {
                    n.call(t, e);
                  }
                });
                chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => e == null ? undefined : e.updateSendMessageStatus(n.conversation_id || "", chatStatusActionTypes.chatStatusTypes.Default));
              }
            });
          }
        }
        if (e === "navigate") {
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
            if (e != null) {
              e.navigateToChatGuidancePage();
            }
          });
        }
        return false;
      } catch (e) {
        return true;
      }
    }
    onBeforeSendMessage(e) {
      let {
        chatId: t
      } = e;
      if (!t || (chatStoreManager.getStore("chatInputStore").getState().sendMessageStatusMap[t] || chatStatusActionTypes.chatStatusTypes.Default) !== chatStatusActionTypes.chatStatusTypes.Receiving) {
        return true;
      }
      let n = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), t);
      return !messageContentTypeAndStatusChecker.Yi0(n) || !!superTaskStore.getSuperTaskStore().getState().isSuperTaskEnableByConvId(t);
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskInputEventsPlugin: function () {
      return y;
    }
  });
}