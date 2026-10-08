// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NK' to 'loginModalManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 516605
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var urlNavigationUtils = require("url-navigation-utils") /*id: 818560*/;
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatProtocolPluginCleanup = require("chat-protocol-plugin-cleanup") /*id: 900461*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaIdentityManager = require("tea-identity-manager") /*id: 929669*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var loginUrlParamHandlers = require("login-url-param-handlers") /*id: 804250*/;
  var asyncBusinessLayoutConstants = require("async-business-layout-constants") /*id: 649420*/;
  var businessLayoutStyles = require("business-layout-styles") /*id: 162966*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("form-validation-utils") /*id: 80045*/, require.e("semi-ui-tooltip-button") /*id: 5568*/, require.e("semi-form-input-components") /*id: 40786*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-ui-components") /*id: 50418*/, require.e("component-login-modal") /*id: 63509*/]).then(require.bind(require, "login-modal-component_1") /*id: 460826*/)
  }));
  let C = {
    current: trackingEventConstants.trackingPages.OTHER
  };
  let S = e => {
    let {
      loginModalStatus: t
    } = e;
    if (t.landing) {
      var l;
      let e = "redirectQuery" in t.landing && ((l = t.landing.redirectQuery) === null || l === undefined ? undefined : l.toString()) || "";
      switch (t.landing.type) {
        case asyncBusinessLayoutConstants.layoutActionTypes.ADD_BOT:
          return chatRouteConstants.routeBotCreate;
        case asyncBusinessLayoutConstants.layoutActionTypes.DISCOVER:
          return chatRouteConstants.routeBotDiscover;
        case asyncBusinessLayoutConstants.layoutActionTypes.CHAT:
          if (t.landing.botId) {
            return `${chatRouteConstants.routeChatRoot}${t.landing.botId}?type=${chatConversationTypes.ConversationTypes.Bot}`;
          } else {
            return chatRouteConstants.routeChatRoot;
          }
        case asyncBusinessLayoutConstants.layoutActionTypes.AI_SPACE_SHARE:
          if (typeof window == "object") {
            return `${window.location.pathname}${e ? `?${e}` : ""}`;
          } else {
            return chatRouteConstants.routeChatRoot;
          }
        default:
          if (typeof window == "object" && typeof window.location == "object" && typeof window.location.pathname == "string") {
            return window.location.pathname;
          } else {
            return chatRouteConstants.routeChatRoot;
          }
      }
    }
    return loginUrlParamHandlers.extractLoginSuccessBackUrl() || chatRouteConstants.routeChatRoot;
  };
  let E = e => {
    let {
      loginModalStatus: t
    } = e;
    let l = loginUrlParamHandlers.getOrStoreLoginSource();
    let i = C.current;
    let n = urlNavigationUtils.getChannelParam();
    let o = i === trackingEventConstants.trackingPages.OTHER ? l ? {
      login_source: l
    } : {} : {
      login_source: i
    };
    if (t.landing) {
      let e = t.landing.type === asyncBusinessLayoutConstants.layoutActionTypes.CHAT ? {
        type: t.landing.botId ? String(chatConversationTypes.ConversationTypes.Bot) : String(chatConversationTypes.ConversationTypes.Conversation),
        message: t.landing.message
      } : {};
      return {
        ...o,
        ...(t.landing.type === asyncBusinessLayoutConstants.layoutActionTypes.CHAT_CAN_USE ? {} : {
          guest_landing: "1"
        }),
        ...e,
        ...(n ? {
          channel: n
        } : {})
      };
    }
    return {
      ...o,
      from_login: "1",
      ...(n ? {
        channel: n
      } : {})
    };
  };
  let k = false;
  let R = function ({
    navigate: e
  } = {}) {
    let t = {
      "--semi-border-radius-large": "24px",
      "min-width": "358px"
    };
    let l = l => {
      let {
        onCancel: o,
        onSuccess: r,
        maskClosable: s,
        ...c
      } = l;
      if (k) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "login_modal_open_forbidden",
          meta: {
            href: xssContentSanitizer.sanitizeUrl(window.location.href, null, {
              logType: "js.href/src",
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jNoMldqSnNk$Xh-T$ha-$IwWnp%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
            }),
            type: "open_raw",
            source: c.trackInfo.source
          }
        });
        return () => {};
      }
      k = true;
      let p = () => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "login_modal_cancel",
          meta: {
            href: xssContentSanitizer.sanitizeUrl(window.location.href, null, {
              logType: "js.href/src",
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jNoMldqSnNk$Xh-T$ha-$IwWnp%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
            }),
            source: c.trackInfo.source
          }
        });
        g();
        k = false;
        if (o != null) {
          o();
        }
      };
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "login_modal_open",
        meta: {
          href: xssContentSanitizer.sanitizeUrl(window.location.href, null, {
            logType: "js.href/src",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jNoMldqSnNk$Xh-T$ha-$IwWnp%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
          }),
          source: c.trackInfo.source
        }
      });
      let {
        destroy: g
      } = modalDialogComponent.Modal.confirm({
        className: a(businessLayoutStyles.layoutStyles["login-modal"], "login_modal"),
        zIndex: 1020,
        style: t,
        header: null,
        icon: null,
        title: null,
        footer: null,
        centered: true,
        keepDOM: true,
        lazyRender: true,
        onCancel: p,
        width: "auto",
        maskClosable: s === undefined || s,
        content: reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
          children: reactJsxRuntimeCoreReexport.jsx(y, {
            ...c,
            onSuccess: e => {
              teaIdentityManager.persistUserId(e == null ? undefined : e.user_id_str);
              k = false;
              chatProtocolPluginCleanup.cleanupChatPlugins();
              chatEventEmitter.chatEmitter.emit("chat.service.resetAll");
              g();
              loggerServiceCore.defaultLogger.persist.info({
                eventName: "login_modal_success",
                meta: {
                  href: xssContentSanitizer.sanitizeUrl(window.location.href, null, {
                    logType: "js.href/src",
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jNoMldqSnNk$Xh-T$ha-$IwWnp%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
                  }),
                  source: c.trackInfo.source
                }
              });
              if (r == null) {
                return undefined;
              } else {
                return r();
              }
            },
            onCancel: p,
            navigate: e
          })
        })
      });
      return g;
    };
    return {
      openRawLoginModal: l,
      openLoginModal: e => {
        let {
          landing: t,
          trackInfo: n,
          onCancel: o,
          ...a
        } = e;
        if (k) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "login_modal_open_forbidden",
            meta: {
              landing: t,
              href: xssContentSanitizer.sanitizeUrl(window.location.href, null, {
                logType: "js.href/src",
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmhSemwyW$ROTmRt%ll%bXhN$jNoMldqSnNk$Xh-T$ha-$IwWnp%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
              }),
              source: n.source
            }
          });
          return () => {};
        }
        let r = {
          landing: t,
          trackInfo: {
            ...n,
            fromPage: C.current
          },
          onCancel: o
        };
        let s = S({
          loginModalStatus: r
        });
        let c = E({
          loginModalStatus: r
        });
        return l({
          trackInfo: r.trackInfo,
          onCancel: o,
          loginNavigateQuery: c,
          loginNavigateRoute: s,
          ...a
        });
      },
      setClickArea: e => {
        C.current = e;
      }
    };
  };
  require.d(exports, {
    loginModalManager: function () {
      return R;
    }
  });
}