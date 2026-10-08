// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'a' to 'superTaskNotificationCmd'
// - Resolved require(751937) to 'super-task-notification-cmd'
// - Renamed variable 's' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'l' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'h' to 'notificationComponentWrapper'
// - Resolved require(830647) to 'notification-component-wrapper'
// - Renamed variable 'f' to 'superTaskEventTracker'
// - Resolved require(368178) to 'super-task-event-tracker'
// - Renamed variable 'm' to 'skillMessageDialogFactory'
// - Resolved require(843942) to 'skill-message-dialog-factory'
// - Renamed variable 'g' to 'taskStatusConstants_1'
// - Resolved require(324746) to 'task-status-constants_1'
// - Renamed variable '_' to 'doubaoBrowserAutomationActions'
// - Resolved require(72920) to 'doubao-browser-automation-actions'
// - Renamed variable 'v' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'y' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'b' to 'chatComplexPath'
// - Resolved require(909013) to 'chat-complex-path'
// - Renamed variable 'x' to 'uploadToolCallResultEnumAndFunction'
// - Resolved require(716038) to 'upload-tool-call-result-enum-and-function'
// - Renamed variable 'O' to 'superTaskPluginSymbol'
// - Resolved require(768228) to 'super-task-plugin-symbol'
// - Renamed variable 'E' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'u' to 'chatComplexPath' (module 909013)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'Z' to 'Notification' (module 830647)
// - Updated imported property 'R' to 'superTaskPluginKey' (module 768228)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// - Updated imported property 'Fo' to 'trackNoticePopupShow' (module 368178)
// - Updated imported property 'fz' to 'trackNoticePopupClick' (module 368178)
// - Updated imported property 'Ng' to 'errorCode' (module 324746)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property '_' to 'superTaskNotification' (module 751937)
// - Updated imported property 'R' to 'createSkillMessageDialog' (module 843942)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// - Updated imported property 'k' to 'uploadToolCallResult' (module 716038)
// - Updated imported property 'y' to 'ActionConstants' (module 72920)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 262446
         */
module.exports = function (module, exports, require) {
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var superTaskNotificationCmd = require("super-task-notification-cmd") /*id: 751937*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var notificationComponentWrapper = require("notification-component-wrapper") /*id: 830647*/;
  var superTaskEventTracker = require("super-task-event-tracker") /*id: 368178*/;
  var skillMessageDialogFactory = require("skill-message-dialog-factory") /*id: 843942*/;
  var taskStatusConstants_1 = require("task-status-constants_1") /*id: 324746*/;
  var doubaoBrowserAutomationActions = require("doubao-browser-automation-actions") /*id: 72920*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var chatComplexPath = require("chat-complex-path") /*id: 909013*/;
  let w = (e, t) => {
    if ((t == null ? undefined : t.sidebarMode) && isEmptyUtil.isEmpty(e)) {
      return `https://${(t == null ? undefined : t.host) || location.host}${chatComplexPath.chatComplexPath}`;
    }
    let n = {
      pluginId: aiActionConstants.aiActionConstants.SuperTask_DuplicateStyle,
      pfTrackParams: {
        startJumpTime: Date.now()
      },
      ...e
    };
    let i = new URLSearchParams();
    i.set("action", JSON.stringify(n));
    return `https://${(t == null ? undefined : t.host) || location.host}/chat/url-action?${i.toString()}`;
  };
  var uploadToolCallResultEnumAndFunction = require("upload-tool-call-result-enum-and-function") /*id: 716038*/;
  function S(e, t, n) {
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
  (i = C || {}).Complete = "complete";
  i.AskHuman = "askHuman";
  var C = i;
  let T = "super_task_consume_notification_id_list";
  var k = new class {
    add(e) {
      let {
        messageId: t,
        notificationId: n,
        type: i,
        identifier: r
      } = e;
      if (this._context.get(t)) {
        this.remove(t);
      }
      this._context.set(t, {
        identifier: r,
        type: i,
        notificationId: n,
        autoCloseTimer: i === C.AskHuman ? setTimeout(() => {
          this.closeNotification(n);
        }, 1800000) : undefined
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
          let n = localStorage.getItem(T);
          if (n) {
            e.push(...n.split(",").slice(-30));
          }
          e.push(t.identifier);
          localStorage.setItem(T, e.join(","));
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
      S(this, "_context", new Map());
      S(this, "handleConsumeNotificationStorageChange", e => {
        let {
          key: t,
          newValue: n
        } = e;
        if (t === T && n) {
          n.split(",").forEach(e => {
            this.closeNotificationByIdentifier(e);
          });
        }
      });
      window.addEventListener("storage", this.handleConsumeNotificationStorageChange);
    }
  }();
  var superTaskPluginSymbol = require("super-task-plugin-symbol") /*id: 768228*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function P(e, t, n) {
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
  function N(e) {
    let t = Math.floor(e / 3600);
    let n = Math.floor(e % 3600 / 60);
    let i = [t.toString().padStart(2, "0"), n.toString().padStart(2, "0"), (e % 60).toString().padStart(2, "0")];
    if (t > 0) {
      return i.join(":");
    } else {
      return i.slice(1).join(":");
    }
  }
  class I {
    constructor() {
      P(this, "pluginIdentifier", superTaskPluginSymbol.superTaskPluginKey);
      P(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let j;
          let M;
          if (e.data.data.conversation_id === chatStoreManager.getStore("chatViewCoreStore").getState().currentChatViewConfig?.chatId) {
            return;
          }
          if (e.cmd === messagingConstants.messageType.SuperTaskApplyTrialSuccess) {
            j = "super_task_request_pass";
          } else {
            M = e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman ? "super_task_ask_human" : "super_task_complete";
          }
          let A = {
            type: j,
            sub_type: M
          };
          superTaskEventTracker.trackNoticePopupShow(A);
          let R = e.data.data.message_id ?? "";
          let L = e.cmd === taskStatusConstants_1.errorCode ? i18nTranslationUtils.i18nextTranslate(e.data.data.ext?.title ?? "") : e.cmd === messagingConstants.messageType.SuperTaskApplyTrialSuccess ? "超能模式已开通" : e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman ? i18nTranslationUtils.i18nextTranslate("superAgent_window_takeControl_header") : i18nTranslationUtils.i18nextTranslate("superAgent_taskCompleted_header_general");
          let D = e.cmd === taskStatusConstants_1.errorCode ? i18nTranslationUtils.i18nextTranslate(e.data.data.ext?.confirm_text ?? "") : e.cmd === messagingConstants.messageType.SuperTaskApplyTrialSuccess ? "你申请的超能模式已开通，快去试试吧" : `${N(Number(e.data.data.ext?.time_duration ?? ""))} ${e.data.data.ext?.title ?? ""}`;
          let Z = e.cmd === taskStatusConstants_1.errorCode ? i18nTranslationUtils.i18nextTranslate("agent_push_confirmContinue_btn_check") : e.cmd === messagingConstants.messageType.SuperTaskApplyTrialSuccess ? "使用超能模式" : e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman ? i18nTranslationUtils.i18nextTranslate("superAgent_btn_takeControl") : i18nTranslationUtils.i18nextTranslate("superAgent_window_takeControl_btn");
          let $ = e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman;
          let F = $ ? i18nTranslationUtils.i18nextTranslate("superAgent_btn_skip") : undefined;
          let B = e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman ? `${R}-${e.data.data.ext?.task_id}-ask-human` : `${R}-complete`;
          let U = () => {
            let t = "";
            t = notificationComponentWrapper.Notification.open({
              className: superTaskNotificationCmd.superTaskNotification,
              content: reactJsxRuntimeCoreReexport.jsx(skillMessageDialogFactory.createSkillMessageDialog, {
                title: L,
                desc: D,
                onClose: () => {
                  k.closeNotification(t);
                  superTaskEventTracker.trackNoticePopupClick({
                    ...A,
                    button_name: "cancel"
                  });
                },
                okText: Z,
                onOK: n => {
                  if (e.cmd === messagingConstants.messageType.SuperTaskApplyTrialSuccess) {
                    let e = new URL(w() || "");
                    e.searchParams.set("opm", "all");
                    let t = e.toString();
                    let i = `${e.pathname}?${e.searchParams.toString()}`;
                    if (n.ctrlKey || n.shiftKey || n.metaKey) {
                      window.open(xssContentSanitizer.sanitizeUrl(t, null, {
                        logType: "js.window.location",
                        reportOnly: "false",
                        blackConfig: "{}",
                        configMode: "merge",
                        isCloseSSRReport: false,
                        bid: "flow_web",
                        region: "cn",
                        urlLimit: "-1",
                        htmlLimit: "-1",
                        isSaveValidUrl: false,
                        isRuntimeLog: false,
                        isDOMParser: true,
                        escapeRule: "escape-report",
                        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                        scmVersion: "1.0.4.168",
                        webpackPluginVersion: "3.4.5",
                        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3elFuTmtWMlJ3WW01TmRtSlhWbnBqTWtad$dsTXhhb%p-$$haak0xWjNXb*hKZEdSSFJuc*hl$E-xWWpO%2N*cHRiR3Ba$0ZKd1lqSTBkb%5IZ%R*-%1teDF%Rz$TZW1WSFJub*FNM$o2"
                      }), "_blank", "noopener,noreferrer");
                    } else {
                      chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToCollectionPage(i));
                    }
                    return;
                  }
                  if (e.data.version === "1.0") {
                    superTaskEventTracker.trackNoticePopupClick({
                      ...A,
                      button_name: e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman ? "take_charge" : "go_check"
                    });
                    k.closeNotification(t);
                    let i = e.data.data.conversation_id;
                    if (!i) {
                      return;
                    }
                    if (n.ctrlKey || n.shiftKey || n.metaKey) {
                      let e = `${chatRouteConstants.routeChatRoot}${i}`;
                      window.open(xssContentSanitizer.sanitizeUrl(e, null, {
                        logType: "js.window.location",
                        reportOnly: "false",
                        blackConfig: "{}",
                        configMode: "merge",
                        isCloseSSRReport: false,
                        bid: "flow_web",
                        region: "cn",
                        urlLimit: "-1",
                        htmlLimit: "-1",
                        isSaveValidUrl: false,
                        isRuntimeLog: false,
                        isDOMParser: true,
                        escapeRule: "escape-report",
                        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                        scmVersion: "1.0.4.168",
                        webpackPluginVersion: "3.4.5",
                        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-Wkd4aWJsRjJZek5L-Wt3elFuTmtWMlJ3WW01TmRtSlhWbnBqTWtad$dsTXhhb%p-$$haak0xWjNXb*hKZEdSSFJuc*hl$E-xWWpO%2N*cHRiR3Ba$0ZKd1lqSTBkb%5IZ%R*-%1teDF%Rz$TZW1WSFJub*FNM$o2"
                      }), "_blank", "noopener,noreferrer");
                    } else {
                      chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToChatDetailPage({
                        conversationId: i
                      }));
                    }
                  }
                },
                cancelBtn: $,
                cancelText: F,
                onCancel: () => {
                  if (e.data.version === "1.0") {
                    if ($ && e.data.data.ext?.task_id && e.data.data.ext?.tool_id) {
                      superTaskEventTracker.trackNoticePopupClick({
                        ...A,
                        button_name: "skip"
                      });
                      uploadToolCallResultEnumAndFunction.uploadToolCallResult(e.data.data.ext.task_id, {
                        id: e.data.data.ext.tool_id,
                        name: doubaoBrowserAutomationActions.ActionConstants.web_ask_human,
                        content: [{
                          type: "text",
                          text: "用户无法完成指定操作，请尝试使用另一种方式继续任务"
                        }],
                        isError: true
                      });
                      k.closeNotification(t);
                    }
                  }
                }
              }),
              duration: 0,
              position: "topRight",
              showClose: false
            });
            k.add({
              identifier: B,
              messageId: R,
              notificationId: t,
              type: e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman ? C.AskHuman : C.Complete
            });
            try {
              let {
                popup_display_time: n
              } = objectPathGetDefault.getObjectPathDefault(e, "data.data.ext", {});
              let i = Number.parseInt(n);
              if (i > 0) {
                setTimeout(() => {
                  k.closeNotification(t);
                }, i * 1000);
              }
            } catch (e) {}
          };
          let W = e.data.data.conversation_id;
          let z = W ? chatMessageStoreFactory.createMessageStore.getState().messageLinkMap[W] : undefined;
          let H = Array.isArray(z) && z.findIndex(e => e.isLocalMessage) !== -1;
          let K = e.cmd === messagingConstants.messageType.SuperTaskNeedAskHuman;
          let G = e.cmd === taskStatusConstants_1.errorCode;
          if (W && H && !K && !G) {
            let e = chatMessageStoreFactory.createMessageStore.subscribe(e => e.messageLinkMap[W], t => {
              if (!Array.isArray(t) || t.findIndex(e => e.isLocalMessage) === -1) {
                U();
                e();
              }
            });
          } else {
            U();
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskNotificationMessageCmdPlugin: function () {
      return I;
    },
    formatTime: function () {
      return N;
    }
  });
}