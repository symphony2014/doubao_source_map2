// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'superTaskNotificationCmd'
// - Resolved require(751937) to 'super-task-notification-cmd'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'notificationComponentWrapper'
// - Resolved require(830647) to 'notification-component-wrapper'
// - Renamed variable 'l' to 'chatThinkingBoxState'
// - Resolved require(39792) to 'chat-thinking-box-state'
// - Renamed variable 'c' to 'skillMessageDialogComponent'
// - Resolved require(314703) to 'skill-message-dialog-component'
// - Renamed variable 'u' to 'svgDocumentIconComponent'
// - Resolved require(500818) to 'svg-document-icon-component'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'y' to 'pptNotificationPluginId'
// - Resolved require(506988) to 'ppt-notification-plugin-id'
// - Updated imported property 'X' to 'SkillMessageDialog' (module 314703)
// - Updated imported property 'Z' to 'DocumentIcon' (module 500818)
// - Updated imported property 'Z' to 'Notification' (module 830647)
// - Updated imported property 'i' to 'pptPluginSymbol' (module 506988)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'EL' to 'addThinkingBoxId' (module 39792)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property '_' to 'superTaskNotification' (module 751937)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 786976
         */
module.exports = function (module, exports, require) {
  var superTaskNotificationCmd = require("super-task-notification-cmd") /*id: 751937*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var notificationComponentWrapper = require("notification-component-wrapper") /*id: 830647*/;
  var chatThinkingBoxState = require("chat-thinking-box-state") /*id: 39792*/;
  var skillMessageDialogComponent = require("skill-message-dialog-component") /*id: 314703*/;
  var svgDocumentIconComponent = require("svg-document-icon-component") /*id: 500818*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => reactJsxRuntimeCoreReexport.jsx(skillMessageDialogComponent.SkillMessageDialog, {
    customLogoIcon: svgDocumentIconComponent.DocumentIcon,
    ...e
  });
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let f = () => {
    teaAnalyticsEventTracker.trackEvent("notice_popup_show", {
      sub_type: "aippt_new_complete",
      type: "aippt_new"
    });
  };
  let m = () => {
    teaAnalyticsEventTracker.trackEvent("notice_popup_click", {
      button_name: "go_check",
      sub_type: "aippt_new_complete",
      type: "aippt_new"
    });
  };
  function g(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let _ = "ai_slides_consume_notification_id_list";
  var v = new class {
    add(e) {
      let {
        messageId: t,
        notificationId: n,
        identifier: i
      } = e;
      if (this._context.get(t)) {
        this.remove(t);
      }
      this._context.set(t, {
        identifier: i,
        notificationId: n,
        autoCloseTimer: setTimeout(() => {
          this.closeNotification(n);
        }, 1800000)
      });
    }
    closeNotificationByIdentifier(e) {
      for (let [t, n] of this._context) {
        if (n.identifier === e) {
          this.remove(t);
          break;
        }
      }
    }
    closeNotification(e) {
      for (let [t, n] of this._context) {
        if (n.notificationId === e) {
          this.remove(t);
          break;
        }
      }
    }
    remove(e) {
      let t = this.get(e);
      if (t) {
        notificationComponentWrapper.Notification.close(t.notificationId);
        if (t.autoCloseTimer) {
          clearTimeout(t.autoCloseTimer);
        }
        try {
          let e = [];
          let n = localStorage.getItem(_);
          if (n) {
            e.push(...n.split(",").slice(-30));
          }
          e.push(t.identifier);
          localStorage.setItem(_, e.join(","));
        } catch (e) {}
      }
      this._context.delete(e);
    }
    get(e) {
      return this._context.get(e);
    }
    destroy() {
      this._context.forEach(e => {
        notificationComponentWrapper.Notification.close(e.notificationId);
        if (e.autoCloseTimer) {
          clearTimeout(e.autoCloseTimer);
        }
      });
      this._context.clear();
      window.removeEventListener("storage", this.handleConsumeNotificationStorageChange);
    }
    constructor() {
      g(this, "_context", new Map());
      g(this, "handleConsumeNotificationStorageChange", e => {
        let {
          key: t,
          newValue: n
        } = e;
        if (t === _ && n) {
          n.split(",").forEach(e => {
            this.closeNotificationByIdentifier(e);
          });
        }
      });
      window.addEventListener("storage", this.handleConsumeNotificationStorageChange);
    }
  }();
  var pptNotificationPluginId = require("ppt-notification-plugin-id") /*id: 506988*/;
  function b(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class w {
    constructor() {
      b(this, "pluginIdentifier", pptNotificationPluginId.pptPluginSymbol);
      b(this, "handleCmd", e => {
        if (e.data.version !== "1.0") {
          return;
        }
        let {
          conversation_id: c,
          ext: u
        } = e.data.data;
        let h = e.data.data.message_id ?? "";
        if (c === chatStoreManager.getStore("chatViewCoreStore").getState().currentChatViewConfig?.chatId) {
          return;
        }
        chatThinkingBoxState.addThinkingBoxId(c || "");
        let {
          title: g,
          popup_display_time: _
        } = u || {};
        let y = 0;
        try {
          y = Number.parseInt(_);
        } catch (e) {}
        let b = `${h}-push-ai-ppt-message-${Date.now()}`;
        f();
        let w = "";
        let x = reactJsxRuntimeCoreReexport.jsx(p, {
          title: i18nTranslationUtils.i18nextTranslate("slides_push_inapp_header_generated", "你的PPT已完成"),
          desc: g,
          onClose: () => {
            v.closeNotification(w);
          },
          okText: i18nTranslationUtils.i18nextTranslate("superAgent_window_takeControl_btn", "去查看"),
          onOK: () => {
            m();
            v.closeNotification(w);
            if (c) {
              chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
                if (e != null) {
                  e.navigateToChatDetailPage({
                    conversationId: c,
                    replace: true
                  });
                }
              });
            }
          }
        });
        w = notificationComponentWrapper.Notification.open({
          className: superTaskNotificationCmd.superTaskNotification,
          content: x,
          duration: 0,
          position: "topRight",
          showClose: false
        });
        v.add({
          identifier: b,
          messageId: h,
          notificationId: w
        });
        if (y > 0) {
          setTimeout(() => {
            v.closeNotification(w);
          }, y * 1000);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTPushMessageNotificationCmdPlugin: function () {
      return w;
    }
  });
}