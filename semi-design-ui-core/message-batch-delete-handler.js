// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'batchMessageDelete'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18872.aedb6c81.js
         * chunkId: 18872
         * moduleId: 458163
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var messageContentTypeDetector = require("message-content-type-detector") /*id: 223054*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var draftReplyDeleteHandler = require("draft-reply-delete-handler") /*id: 114423*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  let b = (e, t) => {
    let {
      getPopupContainer: n,
      enterMethod: b = "message_delete",
      onDeleteTrigger: v
    } = t || {};
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let {
      getPopupContainer: x
    } = chatContextUtil.useChatContext();
    let {
      messageIndexList: E,
      exitSelectMode: M,
      findMessageByIndex: w
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      messageIndexList: e.messageIndexList,
      exitSelectMode: e.exitSelectMode,
      findMessageByIndex: e.findMessageByIndex
    }), deepEqualityUtil.deepEqual);
    let O = () => {
      let t = chatMessageStoreFactory.createMessageStore.getState();
      return E.map(n => w({
        conversationId: e,
        state: t,
        messageIndex: n
      })).filter(e => !!e && !!e.message_id);
    };
    let _ = async () => {
      let e = O();
      if (e.length !== 0) {
        if (e.length > 0) {
          let t = e[0];
          let n = {
            enter_method: b,
            bot_id: Array.from(new Set(e.map(e => e.bot_id))).join(","),
            conversation_id: t.conversation_id,
            message_id: e.map(e => e.message_id).join(","),
            is_onboarding: +!!messageContentTypeAndStatusChecker.isOnboardingMessage(t),
            click_from: "long_press_message",
            is_read: 0,
            voice_id: undefined,
            user_type: +!!messageContentTypeAndStatusChecker.Yns(t),
            section_id: Array.from(new Set(e.map(e => (e == null ? undefined : e.section_id) || "").filter(e => !!e))).join(",")
          };
          teaAnalyticsEventTracker.trackEvent("message_delete", n);
        }
        try {
          if (e.length > 0) {
            await chatMessageServiceModule.ChatMessageService().deleteMessage({
              conversation_id: e[0].conversation_id,
              regen_message_ids: e.map(e => e.message_id).filter(e => !!e)
            });
          }
          e.forEach(e => {
            if (!(e == null ? undefined : e.message_id) || localResourceCheck.isLocal(e)) {
              return;
            }
            let t = {
              isLocalMessage: false,
              messageId: e.message_id
            };
            draftReplyDeleteHandler.deleteDraftReply({
              conversationId: e.conversation_id || "",
              messageLink: t
            });
            chatMessageStoreUpdater.updateChatMessages({
              conversationId: e.conversation_id || "",
              immerUpdate: (e, n) => n.resetMessageLink(t.messageId)
            });
            let n = {
              enter_method: b,
              bot_id: e.bot_id,
              conversation_id: e.conversation_id,
              message_id: e.message_id,
              message_type: messageContentTypeDetector.getMessageType(e),
              is_onboarding: +!!messageContentTypeAndStatusChecker.isOnboardingMessage(e),
              click_from: "long_press_message",
              is_read: 0,
              voice_id: undefined,
              user_type: +!!messageContentTypeAndStatusChecker.Yns(e)
            };
            teaAnalyticsEventTracker.trackEvent("message_delete_result", {
              ...n,
              is_success: 1
            });
            chatEventEmitter.chatEmitter.emit("chat.message.delete", {
              conversationId: e.conversation_id || "",
              messageId: t.messageId
            });
          });
          M();
        } catch (t) {
          e.forEach(e => {
            if (!(e == null ? undefined : e.message_id) || localResourceCheck.isLocal(e)) {
              return;
            }
            let r = {
              enter_method: b,
              bot_id: e.bot_id,
              conversation_id: e.conversation_id,
              message_id: e.message_id,
              message_type: messageContentTypeDetector.getMessageType(e),
              is_onboarding: +!!messageContentTypeAndStatusChecker.isOnboardingMessage(e),
              click_from: "long_press_message",
              is_read: 0,
              voice_id: undefined,
              user_type: +!!messageContentTypeAndStatusChecker.Yns(e)
            };
            teaAnalyticsEventTracker.trackEvent("message_delete_result", {
              ...r,
              is_success: 0,
              error: (t == null ? undefined : t.errorOption?.message) || (t == null ? undefined : t.message)
            });
          });
          dbxSonnerToasterWrapper.dbxToastAPI.error(C("web_toast_deleteMessage_fail"));
        }
      }
    };
    return {
      handleBatchDelete: () => {
        if (E.length !== 0) {
          if (v) {
            v(O());
          }
          modalConfirmDialogManager.ModalConfirmDialog.warning({
            centered: true,
            title: C("delete_message_toast_text"),
            content: C("web_deleteChat_desc"),
            cancelText: C("delete_message_btn_cancel"),
            okText: C("delete_message_btn_confirm"),
            okButtonProps: {
              type: "danger-primary"
            },
            onOk: _,
            getPopupContainer: n || x || (() => document.body)
          });
        }
      },
      messageIndexList: E
    };
  };
  require.d(exports, {
    batchMessageDelete: function () {
      return b;
    }
  });
}