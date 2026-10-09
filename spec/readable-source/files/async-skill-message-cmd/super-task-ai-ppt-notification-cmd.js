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
// - Renamed variable 'l' to 'skillMessageDialogFactory'
// - Resolved require(843942) to 'skill-message-dialog-factory'
// - Renamed variable 'p' to 'pptTemplateConfirmPluginId'
// - Resolved require(377362) to 'ppt-template-confirm-plugin-id'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'Notification' (module 830647)
// - Updated imported property 'F' to 'getCmdPluginSymbol' (module 377362)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'R' to 'createSkillMessageDialog' (module 843942)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property '_' to 'superTaskNotification' (module 751937)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 7942
         */
module.exports = function (module, exports, require) {
  var superTaskNotificationCmd = require("super-task-notification-cmd") /*id: 751937*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var notificationComponentWrapper = require("notification-component-wrapper") /*id: 830647*/;
  var skillMessageDialogFactory = require("skill-message-dialog-factory") /*id: 843942*/;
  function c(e, t, n) {
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
  let u = "super_task_consume_notification_id_list";
  var d = new class {
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
          let n = localStorage.getItem(u);
          if (n) {
            e.push(...n.split(",").slice(-30));
          }
          e.push(t.identifier);
          localStorage.setItem(u, e.join(","));
        } catch {}
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
      c(this, "_context", new Map());
      c(this, "handleConsumeNotificationStorageChange", e => {
        let {
          key: t,
          newValue: n
        } = e;
        if (t === u && n) {
          n.split(",").forEach(e => {
            this.closeNotificationByIdentifier(e);
          });
        }
      });
      window.addEventListener("storage", this.handleConsumeNotificationStorageChange);
    }
  }();
  var pptTemplateConfirmPluginId = require("ppt-template-confirm-plugin-id") /*id: 377362*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, t, n) {
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
  function m(e) {
    let t = Math.floor(e / 3600);
    let n = Math.floor(e % 3600 / 60);
    let i = [t.toString().padStart(2, "0"), n.toString().padStart(2, "0"), (e % 60).toString().padStart(2, "0")];
    if (t > 0) {
      return i.join(":");
    } else {
      return i.slice(1).join(":");
    }
  }
  class g {
    constructor() {
      f(this, "pluginIdentifier", pptTemplateConfirmPluginId.getCmdPluginSymbol);
      f(this, "handleCmd", e => {
        if (e.data.version !== "1.0") {
          return;
        }
        let {
          conversation_id: _,
          ext: v
        } = e.data.data;
        let y = e.data.data.message_id ?? "";
        if (_ === chatStoreManager.getStore("chatViewCoreStore").getState().currentChatViewConfig?.chatId) {
          return;
        }
        let {
          need_page_count: b,
          need_template: w,
          popup_display_time: x
        } = v || {};
        let S = 0;
        try {
          S = Number.parseInt(x);
        } catch (e) {}
        let C = i18nTranslationUtils.i18nextTranslate("agent_PPT_confirmLengthTemplate_header");
        if (b === "1" && w === "1") {
          C = i18nTranslationUtils.i18nextTranslate("agent_PPT_confirmLengthTemplate_header");
        } else if (b === "1") {
          C = i18nTranslationUtils.i18nextTranslate("agent_PPT_confirmLength_header");
        } else if (w === "1") {
          C = i18nTranslationUtils.i18nextTranslate("agent_PPT_confirmTemplate_header");
        }
        let T = i18nTranslationUtils.i18nextTranslate("agent_PPT_btn_goConfirm", "去确认");
        let k = `${m(Number(e.data.data.ext?.time_duration ?? ""))} ${e.data.data.ext?.title ?? ""}`;
        let O = `${y}-${e.data.data.ext?.task_id}-select-template`;
        let E = "";
        let P = reactJsxRuntimeCoreReexport.jsx(skillMessageDialogFactory.createSkillMessageDialog, {
          title: C,
          desc: k,
          onClose: () => {
            d.closeNotification(E);
          },
          okText: T,
          onOK: () => {
            d.closeNotification(E);
            if (_) {
              chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => {
                if (e != null) {
                  e.navigateToChatDetailPage({
                    conversationId: _,
                    replace: true
                  });
                }
              });
            }
          }
        });
        if (S > 0) {
          setTimeout(() => {
            d.closeNotification(E);
          }, S * 1000);
        }
        E = notificationComponentWrapper.Notification.open({
          className: superTaskNotificationCmd.superTaskNotification,
          content: P,
          duration: 0,
          position: "topRight",
          showClose: false
        });
        d.add({
          identifier: O,
          messageId: y,
          notificationId: E
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskAIPPTTemplateConfirmNotificationCmdPlugin: function () {
      return g;
    },
    formatTime: function () {
      return m;
    }
  });
}