// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'neotixShellApiExportLoader'
// - Resolved require(216482) to 'neotix-shell-api-export-loader'
// - Renamed variable 'm' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'f' to 'indexeddbDataAccessWrapper'
// - Resolved require(190352) to 'indexeddb-data-access-wrapper'
// - Renamed variable 'h' to 'samanthaChatTaskStorage'
// - Resolved require(692465) to 'samantha-chat-task-storage'
// - Renamed variable 'y' to 'resumeSamanthaChatTask'
// - Resolved require(663494) to 'resume-samantha-chat-task'
// - Renamed variable '_' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'x' to 'userAgentDeviceDetector'
// - Resolved require(161498) to 'user-agent-device-detector'
// - Renamed variable 'k' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'V' to 'asyncInitDesktop_1'
// - Resolved require(536792) to 'async-init-desktop_1'
// - Renamed variable 'F' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'z' to 'neotixChannelService'
// - Resolved require(872542) to 'neotix-channel-service'
// - Renamed variable 'j' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'U' to 'throttledDeepCloneUtil'
// - Resolved require(74680) to 'throttled-deep-clone-util'
// - Renamed variable 'Z' to 'runtimeStorageWrapper'
// - Resolved require(950108) to 'runtime-storage-wrapper'
// - Renamed variable 'J' to 'urlParamUtils'
// - Resolved require(919916) to 'url-param-utils'
// - Renamed variable 'ei' to 'popupViewApiWrapper'
// - Resolved require(740037) to 'popup-view-api-wrapper'
// - Renamed variable 'ep' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'ew' to 'aliceChatService'
// - Resolved require(756668) to 'alice-chat-service'
// - Renamed variable 'ev' to 'chatConstantId'
// - Resolved require(392213) to 'chat-constant-id'
// - Renamed variable 'em' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'eh' to 'neotixPinWindowApiWrapper'
// - Resolved require(774214) to 'neotix-pin-window-api-wrapper'
// - Renamed variable 'e_' to 'doubaoLegalUrls'
// - Resolved require(113045) to 'doubao-legal-urls'
// - Renamed variable 'ex' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'ek' to 'shellApiLoggingUtils'
// - Resolved require(191846) to 'shell-api-logging-utils'
// - Renamed variable 'eB' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Updated imported property 'N' to 'getDataFromIndexedDB' (module 190352)
// - Updated imported property 'K' to 'setDataToIndexedDB' (module 190352)
// - Updated imported property 'Q' to 'loadShellApiExports' (module 216482)
// - Updated imported property 'K' to 'isDoubaoOrCiciaiChatUrl' (module 216482)
// - Updated imported property 'X' to 'loadChatTaskMap' (module 692465)
// - Updated imported property 'P' to 'saveChatTaskMap' (module 692465)
// - Updated imported property 'i' to 'isInitEnabled' (module 536792)
// - Updated imported property '_' to 'resumeChatTask' (module 663494)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'Ie' to 'SessionStorageWrapper' (module 319763)
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'uN' to 'isVersionGte' (module 161498)
// - Updated imported property 'H' to 'runtimeStorageApi' (module 950108)
// - Updated imported property 'Z' to 'throttledDeepClone' (module 74680)
// - Updated imported property 'GP' to 'parseQueryMap' (module 919916)
// - Updated imported property 'Qt' to 'parseQueryString' (module 919916)
// - Updated imported property 'DP' to 'getQueryParam' (module 919916)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'n' to 'NeotixChannel' (module 872542)
// - Updated imported property 'D' to 'popupViewApi' (module 740037)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'EM' to 'AliceChatService' (module 756668)
// - Updated imported property 'e' to 'chatConstantId' (module 392213)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'g' to 'pinWindowApi' (module 774214)
// - Updated imported property 'E' to 'wrapWithLogging' (module 191846)
// - Updated imported property 'v' to 'wrapApiHandler' (module 191846)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'TB' to 'getAsyncStore' (module 537944)
// - Updated imported property 'aW' to 'doubaoBaseUrl' (module 113045)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-desktop.e9cbd988.js
         * chunkId: 41054
         * moduleId: 340638
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var l;
  var neotixShellApiExportLoader = require("neotix-shell-api-export-loader") /*id: 216482*/;
  let c = e => null;
  let u = function () {
    if (arguments.length > 0 && arguments[0] !== undefined) {
      arguments[0];
    }
    return null;
  };
  let d = () => null;
  let p = () => null;
  let w = async () => {
    try {
      let {
        ShellApiCloudConfig: e
      } = await neotixShellApiExportLoader.loadShellApiExports();
      let t = await e.get({
        biz: "app"
      });
      return (t == null ? undefined : t.data) || {};
    } catch {
      return {};
    }
  };
  let v = e => {
    let {
      onBookmarksChange: n
    } = e;
    let i = e.listenEvent ?? ["created", "removed"];
    let a = e => {
      try {
        let {
          type: t
        } = e;
        switch (t) {
          case "created":
            if (i.includes("created")) {
              n(t);
            }
            break;
          case "removed":
            if (i.includes("removed")) {
              n(t);
            }
            break;
          case "change":
            if (i.includes("change")) {
              n(t);
            }
            break;
          case "moved":
            if (i.includes("moved")) {
              n(t);
            }
        }
      } catch {}
    };
    neotixShellApiExportLoader.loadShellApiExports().then(e => {
      let {
        ClientNeotixChannel: t
      } = e;
      return t.on("bookmarks", a);
    });
    return () => {
      neotixShellApiExportLoader.loadShellApiExports().then(e => {
        let {
          ClientNeotixChannel: t
        } = e;
        return t.off("bookmarks", a);
      });
    };
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  function g(e) {
    let {
      scheme: t,
      zLink: n,
      timeout: i = 1000
    } = e;
    let a = setTimeout(() => {
      window.location.href = xssContentSanitizer.sanitizeUrl(n, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m5waE0xSjJZME14T$dSS*JITk1NMD%1$1hrNWMyRlhOWEpN$0ZKMllqSjRla3h1$W5wWldFcH$aRmhO%FE9PQ"
      });
    }, i);
    window.location.href = xssContentSanitizer.sanitizeUrl(t, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m5waE0xSjJZME14T$dSS*JITk1NMD%1$1hrNWMyRlhOWEpN$0ZKMllqSjRla3h1$W5wWldFcH$aRmhO%FE9PQ"
    });
    window.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearTimeout(a);
      }
    });
  }
  var indexeddbDataAccessWrapper = require("indexeddb-data-access-wrapper") /*id: 190352*/;
  var samanthaChatTaskStorage = require("samantha-chat-task-storage") /*id: 692465*/;
  var resumeSamanthaChatTask = require("resume-samantha-chat-task") /*id: 663494*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let S = ["web_chat_view_show", "web_chat_view_interactive", "web_chat_page_finish"];
  function P(e, t) {
    if (window?.loadTime) {
      if (e) {
        window.loadTime[e] = Math.floor(t ?? Date.now());
      }
      if (S.every(e => {
        return !!window.loadTime?.[e];
      })) {
        b(S);
      }
    }
  }
  let b = onceFunctionFactory.createOnce(async function (e) {
    if (storageWrapperWithFallback.SessionStorageWrapper.getItem("is_reload") === "1") {
      return;
    }
    let n = Object.entries(window.loadTime ?? {}).filter(t => {
      let [n] = t;
      return e.includes(n);
    });
    try {
      if (!userAgentDeviceDetector.isVersionGte({
        greaterEqualVersion: "1.50.2"
      })) {
        return;
      }
      let {
        ShellApiStartupMetric: e
      } = await neotixShellApiExportLoader.loadShellApiExports();
      e.setWebviewStartupEvent({
        eventParams: n.map(e => {
          let [t, n] = e;
          return {
            name: t,
            timestamp: n.toString()
          };
        })
      });
    } catch (e) {}
  });
  let C = "samantha-ext-loaded";
  function I() {
    return (storageWrapperWithFallback.SessionStorageWrapper.getItem(C) ?? document.body.getAttribute(C)) === "1";
  }
  function E() {
    return storageWrapperWithFallback.SessionStorageWrapper.getItem("is_reload") === "1";
  }
  var asyncInitDesktop_1 = require("async-init-desktop_1") /*id: 536792*/;
  let T = async e => {
    let {
      bookmarkId: t,
      changes: n
    } = e;
    try {
      let {
        ShellApiBookmarks: e
      } = await neotixShellApiExportLoader.loadShellApiExports();
      await e.update({
        id: t,
        changes: n
      });
    } catch {}
  };
  let A = async e => {
    let {
      bookmarkId: t
    } = e;
    try {
      let {
        ShellApiBookmarks: e
      } = await neotixShellApiExportLoader.loadShellApiExports();
      await e.remove(t);
    } catch {}
  };
  let B = async () => {
    try {
      var t;
      let {
        ShellApiCloudConfig: n
      } = await neotixShellApiExportLoader.loadShellApiExports();
      let i = await n.get({
        biz: "screenshot"
      });
      return (t = i == null ? undefined : i.data?.enabled) === null || t === undefined || t;
    } catch {
      return true;
    }
  };
  let D = async e => {
    let {
      onScreenshotFinish: t,
      onScreenshotAbort: n,
      curScreenId: i
    } = e;
    let {
      ClientNeotixChannel: a
    } = await neotixShellApiExportLoader.loadShellApiExports();
    let o = e => {
      try {
        let {
          data: r,
          type: l
        } = e;
        if (l !== "notify" || !r) {
          return;
        }
        let {
          event: s,
          biz_context: c = "{}"
        } = r || {};
        if (s === "finish-screenshot") {
          let {
            screenId: e
          } = JSON.parse(c);
          if (i !== e) {
            return;
          }
          if (t != null) {
            t(r);
          }
          a.off("screenshot_event", o);
        } else if (s === "abort-screenshot") {
          if (n != null) {
            n();
          }
          a.off("screenshot_event", o);
        }
      } catch {}
    };
    a.on("screenshot_event", o);
  };
  let R = async e => {
    let t = await fetch(e);
    return W(await t.blob(), $(e));
  };
  let $ = e => {
    let t = new URL(e).pathname.split("/");
    return decodeURIComponent(t[t.length - 1]);
  };
  let W = (e, t) => new File([e], t, {
    type: e.type,
    lastModified: Date.now()
  });
  let N = () => {
    try {
      var e;
      if ((e = neotix) === null || e === undefined) {
        return undefined;
      } else {
        return e.env();
      }
    } catch (e) {
      return {};
    }
  };
  let L = "__desktop_voice_chat_current_cid__";
  let M = async () => {
    let {
      ClientNeotixChannel: e
    } = await neotixShellApiExportLoader.loadShellApiExports();
    storageWrapperWithFallback.LocalStorageWrapper.removeItem(L);
    e.broadcast("voice_chat", "close_voice_chat", {
      from: "web"
    });
  };
  let O = "_common_popup_view_info";
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var neotixChannelService = require("neotix-channel-service") /*id: 872542*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var runtimeStorageWrapper = require("runtime-storage-wrapper") /*id: 950108*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let H = async e => {
    return (JSON.parse(await runtimeStorageWrapper.runtimeStorageApi.get(O)) ?? {})[e];
  };
  let Q = async () => {
    return JSON.parse(await runtimeStorageWrapper.runtimeStorageApi.get(O)) ?? {};
  };
  let K = async (e, t) => {
    let n = await Q();
    await runtimeStorageWrapper.runtimeStorageApi.set({
      key: O,
      value: JSON.stringify({
        ...n,
        [e]: t
      })
    });
  };
  let G = async (e, t) => {
    let n = await Q();
    let i = await H(e);
    await runtimeStorageWrapper.runtimeStorageApi.set({
      key: O,
      value: JSON.stringify({
        ...n,
        [e]: throttledDeepCloneUtil.throttledDeepClone(i ?? {}, t)
      })
    });
  };
  let X = async e => {
    let t = await H(e);
    await runtimeStorageWrapper.runtimeStorageApi.set({
      key: O,
      value: JSON.stringify({
        ...t,
        [e]: undefined
      })
    });
  };
  let q = async (e, t) => {
    let i = t ?? window.location;
    let a = urlParamUtils.parseQueryMap(i.search) ?? {};
    return await K(e, {
      popupInfo: {
        viewId: a == null ? undefined : a.viewId
      },
      query: a
    });
  };
  let Y = e => ({
    init: () => q(e),
    set: t => {
      K(e, t);
    },
    update: t => {
      G(e, t);
    },
    remove: () => {
      X(e);
    }
  });
  let ee = e => {
    let t = onceFunctionFactory.createOnce(() => Y(e));
    let {
      current: n
    } = reactCoreLibraryReexport.useRef(t());
    let {
      init: i,
      remove: a,
      update: o,
      set: r
    } = n;
    let l = async () => {
      var n;
      await i();
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "common_info_init_success",
        meta: {
          search: (n = window) === null || n === undefined ? undefined : n.location?.search
        }
      });
      neotixChannelService.NeotixChannel.broadcast("common_info_init", "common_info_init_success", {
        popupViewType: e
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      var t;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "common_info_init",
        meta: {
          search: (t = window) === null || t === undefined ? undefined : t.location?.search
        }
      });
      l();
      return () => {
        a();
      };
    }, [location.search]);
    return {
      update: o,
      set: r
    };
  };
  let et = (e, t) => {
    let [n, i] = reactCoreLibraryReexport.useState(false);
    async function a() {
      let n = await H(e);
      if (n) {
        i(true);
        if (t != null) {
          t(n);
        }
      } else {
        neotixChannelService.NeotixChannel.on("common_info_init", async n => {
          let {
            type: a,
            data: o
          } = n;
          if (a !== "common_info_init_success") {
            return;
          }
          let {
            popupViewType: r
          } = o ?? {};
          if (r === e) {
            i(true);
            let n = await H(e);
            if (t != null) {
              t(n);
            }
          }
        });
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      a();
    }, []);
    return n;
  };
  let en = (e, t) => {
    let [n, i] = reactCoreLibraryReexport.useState({});
    let a = reactCoreLibraryReexport.useRef({});
    function o(n, i) {
      if (t) {
        a.current = {
          ...a.current,
          [n]: i
        };
        if (Object.entries(a.current).length === e.length) {
          if (t != null) {
            t(a.current);
          }
        }
      }
    }
    async function r(e) {
      let t = await H(e);
      if (t) {
        i(t => ({
          ...t,
          [e]: true
        }));
        o(e, t);
      } else {
        neotixChannelService.NeotixChannel.on("common_info_init", async t => {
          let {
            type: n,
            data: a
          } = t;
          if (n !== "common_info_init_success") {
            return;
          }
          let {
            popupViewType: r
          } = a ?? {};
          if (r === e) {
            i(t => ({
              ...t,
              [e]: true
            }));
            let t = await H(e);
            if (t) {
              o(e, t);
            }
          }
        });
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      e.forEach(r);
    }, []);
    return n;
  };
  var popupViewApiWrapper = require("popup-view-api-wrapper") /*id: 740037*/;
  let ea = async e => {
    let {
      popupInfo: n
    } = (await H(e)) ?? {};
    if (!(n == null ? undefined : n.viewId)) {
      throw Error(`${e} view is not allow used`);
    }
    await popupViewApiWrapper.popupViewApi.showView(Number(n == null ? undefined : n.viewId));
  };
  let eo = async (e, t) => {
    let n = {
      ...(await er(e)),
      ...t
    };
    let i = await neotixShellApiExportLoader.loadShellApiExports();
    await i.ShellApiLocalStorage.set({
      biz: e,
      data: n
    });
  };
  let er = async function (e, t = {}) {
    try {
      let t = await neotixShellApiExportLoader.loadShellApiExports();
      let n = await t.ShellApiLocalStorage.get({
        biz: e
      });
      return JSON.parse((n == null ? undefined : n.data) || "{}");
    } catch (e) {
      return t;
    }
  };
  let el = async () => {
    var e;
    let t = await neotixShellApiExportLoader.loadShellApiExports();
    return (await (t == null ? undefined : (e = t.ShellApiBrowserSettings) === null || e === undefined ? undefined : e.getApplicationLocale())) || navigator.language;
  };
  let es = () => {
    let [e, t] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      el().then(e => {
        t(e);
      });
    }, []);
    return e;
  };
  let ec = () => es().includes("zh");
  function eu(e) {
    if (typeof window == "undefined") {
      return;
    }
    let {
      extId: t
    } = urlParamUtils.parseQueryString(location.search);
    let n = {
      ...e,
      body: {
        ...(e == null ? undefined : e.body),
        originContext: "web"
      }
    };
    if (t) {
      try {
        var i;
        var a;
        if ((a = chrome) === null || a === undefined) {
          return undefined;
        } else if ((i = a.runtime) === null || i === undefined) {
          return undefined;
        } else {
          return i.sendMessage(t, e);
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "[ext-helper] sendMessage via chrome.runtime.sendMessage error",
          error: e
        });
      }
    }
    try {
      if (typeof window != "undefined") {
        window.postMessage(n, location.origin);
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[ext-helper] sendMessage error, retry via window.postMessage",
        error: e
      });
    }
  }
  function ed(e = false) {
    return eu({
      name: "update-auth-info",
      body: {
        isLogin: e
      }
    });
  }
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var aliceChatService = require("alice-chat-service") /*id: 756668*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let eg = async e => {
    let {
      chatType: t,
      chatId: n,
      messageIdList: i
    } = e;
    let a = n;
    if (!a || t !== chatConversationTypes.ConversationTypes.Conversation) {
      try {
        var r;
        var l;
        let e = await (await aliceChatService.AliceChatService()).threadCreate({
          bot_id: chatConstantId.chatConstantId
        });
        a = (l = e.data) === null || l === undefined ? undefined : (r = l.thread_info) === null || r === undefined ? undefined : r.conversation?.conversation_id;
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "create_thread_error",
          error: e
        });
        return "";
      }
    }
    if (!a) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_thread_error",
        error: Error("not found conversation id")
      });
      return "";
    }
    try {
      await apiServicesCollection.SamanthaApiService.PutChatRecord({
        conversation_id: a,
        tool_message_id: i
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "put_chat_record_error",
        error: e
      });
    }
    return a;
  };
  let ef = async e => Promise.resolve();
  var neotixPinWindowApiWrapper = require("neotix-pin-window-api-wrapper") /*id: 774214*/;
  let ey = async () => {
    await neotixPinWindowApiWrapper.pinWindowApi.sendCommand({
      command: "newTab",
      url: "chrome://downloads"
    });
  };
  var doubaoLegalUrls = require("doubao-legal-urls") /*id: 113045*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var shellApiLoggingUtils = require("shell-api-logging-utils") /*id: 191846*/;
  let eS = typeof globalThis != "undefined" && (o = globalThis.neotix) !== null && o !== undefined ? o : {};
  let eP = typeof window != "undefined" ? window.neotix?.launcher : eS == null ? undefined : eS.launcher;
  let eb = {
    query: shellApiLoggingUtils.wrapWithLogging(async e => await (eP == null ? undefined : eP.query(e)), "neotix.launcher.query"),
    getIconPath: shellApiLoggingUtils.wrapWithLogging(async e => await (eP == null ? undefined : eP.getIconPath(e)), "neotix.launcher.getIconPath"),
    searchMore: shellApiLoggingUtils.wrapWithLogging(async e => await (eP == null ? undefined : eP.searchMore(e)), "neotix.launcher.searchMore"),
    openURL: shellApiLoggingUtils.wrapWithLogging(async e => await (eP == null ? undefined : eP.openURL(e)), "neotix.launcher.openURL"),
    adjustWindowBounds: shellApiLoggingUtils.wrapWithLogging(async e => await (eP == null ? undefined : eP.adjustWindowBounds(e)), "neotix.launcher.adjustWindowBounds"),
    adjustWindowBoundsSimplify: shellApiLoggingUtils.wrapWithLogging(async e => await (eP == null ? undefined : eP.adjustWindowBoundsSimplify(e)), "neotix.launcher.adjustWindowBoundsSimplify")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (eP == null ? undefined : eP.query(e)), "neotix.launcher.query");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eP == null ? undefined : eP.getIconPath(e)), "neotix.launcher.getIconPath");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eP == null ? undefined : eP.searchMore(e)), "neotix.launcher.searchMore");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eP == null ? undefined : eP.openURL(e)), "neotix.launcher.openURL");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eP == null ? undefined : eP.adjustWindowBounds(e)), "neotix.launcher.adjustWindowBounds");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eP == null ? undefined : eP.adjustWindowBoundsSimplify(e)), "neotix.launcher.adjustWindowBoundsSimplify");
  let eC = typeof globalThis != "undefined" && (l = globalThis.neotix) !== null && l !== undefined ? l : {};
  let eI = typeof window != "undefined" ? window.neotix?.textPicker : eC == null ? undefined : eC.textPicker;
  let eE = {
    getPickedInfo: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getPickedInfo()), "neotix.textPicker.getPickedInfo"),
    addViewSize: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.addViewSize(e)), "neotix.textPicker.addViewSize"),
    setViewSize: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.setViewSize(e)), "neotix.textPicker.setViewSize"),
    getTextPickerGlobalEnabled: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getTextPickerGlobalEnabled()), "neotix.textPicker.getTextPickerGlobalEnabled"),
    setTextPickerGlobalEnabled: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.setTextPickerGlobalEnabled(e)), "neotix.textPicker.setTextPickerGlobalEnabled"),
    getBlockAppsList: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getBlockAppsList()), "neotix.textPicker.getBlockAppsList"),
    removeBlockApp: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.removeBlockApp(e)), "neotix.textPicker.removeBlockApp"),
    getBlockUrlsList: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getBlockUrlsList()), "neotix.textPicker.getBlockUrlsList"),
    removeBlockUrl: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.removeBlockUrl(e)), "neotix.textPicker.removeBlockUrl"),
    getTextPickerSkillsList: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getTextPickerSkillsList()), "neotix.textPicker.getTextPickerSkillsList"),
    setTextPickerSkillsList: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.setTextPickerSkillsList(e)), "neotix.textPicker.setTextPickerSkillsList"),
    getTextPickerCloudEnabled: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getTextPickerCloudEnabled()), "neotix.textPicker.getTextPickerCloudEnabled"),
    setZOrder: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.setZOrder(e)), "neotix.textPicker.setZOrder"),
    setConfig: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.setConfig(e)), "neotix.textPicker.setConfig"),
    getBeingBlockedStatus: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getBeingBlockedStatus()), "neotix.textPicker.getBeingBlockedStatus"),
    popupTextPickerToolbar: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.popupTextPickerToolbar(e)), "neotix.textPicker.popupTextPickerToolbar"),
    triggerTextPickerCommand: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.triggerTextPickerCommand(e)), "neotix.textPicker.triggerTextPickerCommand"),
    syncExtSelectionBlockSetting: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.syncExtSelectionBlockSetting(e)), "neotix.textPicker.syncExtSelectionBlockSetting"),
    getTextPickerUserBlockSetting: shellApiLoggingUtils.wrapWithLogging(async () => await (eI == null ? undefined : eI.getTextPickerUserBlockSetting()), "neotix.textPicker.getTextPickerUserBlockSetting"),
    closeSkillPopupView: shellApiLoggingUtils.wrapWithLogging(async e => await (eI == null ? undefined : eI.closeSkillPopupView(e)), "neotix.textPicker.closeSkillPopupView")
  };
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getPickedInfo()), "neotix.textPicker.getPickedInfo");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.addViewSize(e)), "neotix.textPicker.addViewSize");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.setViewSize(e)), "neotix.textPicker.setViewSize");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getTextPickerGlobalEnabled()), "neotix.textPicker.getTextPickerGlobalEnabled");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.setTextPickerGlobalEnabled(e)), "neotix.textPicker.setTextPickerGlobalEnabled");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getBlockAppsList()), "neotix.textPicker.getBlockAppsList");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.removeBlockApp(e)), "neotix.textPicker.removeBlockApp");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getBlockUrlsList()), "neotix.textPicker.getBlockUrlsList");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.removeBlockUrl(e)), "neotix.textPicker.removeBlockUrl");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getTextPickerSkillsList()), "neotix.textPicker.getTextPickerSkillsList");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.setTextPickerSkillsList(e)), "neotix.textPicker.setTextPickerSkillsList");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getTextPickerCloudEnabled()), "neotix.textPicker.getTextPickerCloudEnabled");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.setZOrder(e)), "neotix.textPicker.setZOrder");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.setConfig(e)), "neotix.textPicker.setConfig");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getBeingBlockedStatus()), "neotix.textPicker.getBeingBlockedStatus");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.popupTextPickerToolbar(e)), "neotix.textPicker.popupTextPickerToolbar");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.triggerTextPickerCommand(e)), "neotix.textPicker.triggerTextPickerCommand");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.syncExtSelectionBlockSetting(e)), "neotix.textPicker.syncExtSelectionBlockSetting");
  shellApiLoggingUtils.wrapApiHandler(async () => await (eI == null ? undefined : eI.getTextPickerUserBlockSetting()), "neotix.textPicker.getTextPickerUserBlockSetting");
  shellApiLoggingUtils.wrapApiHandler(async e => await (eI == null ? undefined : eI.closeSkillPopupView(e)), "neotix.textPicker.closeSkillPopupView");
  let eV = e => {
    let t = Number(urlParamUtils.getQueryParam("viewId"));
    if (t) {
      if (e) {
        eE.setConfig({
          viewId: t,
          deactiveClose: true
        });
        eE.closeSkillPopupView({
          viewId: t
        });
      } else if (popupViewApiWrapper.popupViewApi !== null && popupViewApiWrapper.popupViewApi !== undefined) {
        popupViewApiWrapper.popupViewApi.closeView(t);
      }
    }
  };
  let eT = async (e, t, n) => {
    let {
      closeView: i,
      tabIndex: a,
      active: o,
      isLocalPath: r
    } = n || {};
    if (i) {
      eV();
    }
    let l = r ? `file://${t}` : t;
    if (e === "curTab") {
      await (eb == null ? undefined : eb.openURL({
        openType: 1,
        url: l,
        enterFrom: n == null ? undefined : n.enterFrom
      }));
    } else {
      await neotixPinWindowApiWrapper.pinWindowApi.sendCommand({
        command: e,
        url: l,
        tabIndex: a,
        active: o,
        enterFrom: n == null ? undefined : n.enterFrom
      });
    }
  };
  let eA = async e => {
    let {
      chatId: t = "",
      loginSource: n,
      needCloseCurrentView: i = true,
      isLauncherV1: a = false
    } = e;
    let o = t;
    if (!a && n === "global_launcher") {
      let {
        chatId: e,
        chatType: t
      } = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig || {};
      o = t === chatConversationTypes.ConversationTypes.Conversation && (o || e) || "";
      let {
        samanthaChatTaskMap: n
      } = (await chatStoreManager.getAsyncStore("samanthaChatProtocolStore")).getState();
      await samanthaChatTaskStorage.saveChatTaskMap(n);
    }
    let r = n ? `?prev_page=${n}` : "";
    await eT("chatUrl", `${doubaoLegalUrls.doubaoBaseUrl}/chat/${o}${r}`, {
      closeView: i
    });
  };
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let eD = e => {
    let {
      chatId: t = "",
      image: n,
      loginSource: i,
      needCloseCurrentView: a = true
    } = e;
    let o = t;
    if (i === "global_launcher" && !o) {
      o = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId || "";
    }
    let l = encodeURIComponent(JSON.stringify({
      pluginId: aiActionConstants.aiActionConstants.PC_ImageCanvasOpen,
      payload: {
        chatId: o,
        loginSource: i,
        imageContent: n
      },
      pfTrackParams: {
        startJumpTime: Date.now(),
        phase1EventName: "image_canvas_jump_phase1_duration",
        phase2EventName: "image_canvas_jump_phase2_duration",
        phase3EventName: "image_canvas_jump_phase3_duration",
        phaseNavEventName: "image_canvas_jump_phasenav_duration",
        phaseChatRenderEventName: "image_canvas_jump_chatrender_duration"
      }
    }));
    let s = `${doubaoLegalUrls.doubaoBaseUrl}/chat/url-action?action=${l}`;
    neotixPinWindowApiWrapper.pinWindowApi.sendCommand({
      command: "chatUrl",
      url: s
    });
    if (a) {
      eV();
    }
  };
  let eR = async e => {
    let {
      pluginId: t,
      loginSource: n,
      payload: i,
      performanceEventPrefix: a,
      openWay: o = "newTab",
      options: r
    } = e;
    let l = encodeURIComponent(JSON.stringify({
      pluginId: t,
      payload: {
        ...i,
        loginSource: n,
        startJumpTime: Date.now()
      },
      pfTrackParams: {
        startJumpTime: Date.now(),
        phase1EventName: `${a}_jump_phase1_duration`,
        phase2EventName: `${a}_jump_phase2_duration`,
        phase3EventName: `${a}_jump_phase3_duration`,
        phaseNavEventName: `${a}_jump_phasenav_duration`,
        phaseChatRenderEventName: `${a}_jump_chatrender_duration`
      },
      options: r
    }));
    let s = n ? `&prev_page=${n}` : "";
    let c = `${doubaoLegalUrls.doubaoBaseUrl}/chat/url-action?action=${l}${s}`;
    let {
      type: u,
      ...d
    } = typeof o == "string" ? {
      type: o
    } : o;
    await eT(u, c, d);
  };
  (i = {}).BrowserLink = "browser_link";
  i.LocalPath = "local_path";
  let e$ = i;
  let eW = e => /^(http|https):\/\//.test(e);
  let eN = e => {
    let {
      type: t,
      path: n
    } = e;
    if (n) {
      if (t === e$.LocalPath) {
        neotixShellApiExportLoader.loadShellApiExports().then(e => {
          let {
            ShellApiFs: t
          } = e;
          return t.openLocalFileMapping({
            fileMapping: n
          });
        }).catch(console.error);
      } else if (t === e$.BrowserLink && eW(n)) {
        neotixShellApiExportLoader.loadShellApiExports().then(e => {
          let {
            ShellApiPinWindow: t
          } = e;
          return t.sendCommand({
            command: "newTab",
            url: n
          });
        }).catch(console.error);
      }
    }
  };
  let eL = () => {
    if (typeof window != "undefined") {
      let e = document.getElementsByTagName("html")[0];
      let t = window.matchMedia("(prefers-color-scheme: dark)");
      if (t.matches) {
        if (e != null) {
          e.setAttribute("data-theme", "dark");
        }
      }
      t.addEventListener("change", t => {
        if (t.matches) {
          e.setAttribute("data-theme", "dark");
        } else {
          e.setAttribute("data-theme", "light");
        }
      });
    }
  };
  let eM = new Date("2026-01-01T00:00:00+08:00");
  let eO = () => new Date().getTime() > eM.getTime();
  let eF = () => {
    let [e, t] = reactCoreLibraryReexport.useState(true);
    let n = () => {
      if (document.visibilityState === "visible") {
        t(eO());
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      n();
      document.addEventListener("visibilitychange", n);
      return () => {
        document.removeEventListener("visibilitychange", n);
      };
    }, []);
    return e;
  };
  require.r(exports);
  require.d(exports, {
    updateBookmark: function () {
      return T;
    },
    useListenDesktopHashChange: function () {
      return p;
    },
    getNativeLocalStorage: function () {
      return er;
    },
    getDataFromIdb: function () {
      return indexeddbDataAccessWrapper.getDataFromIndexedDB;
    },
    initDataTheme: function () {
      return eL;
    },
    getAppCloudConfigData: function () {
      return w;
    },
    useCommonInfoHooks: function () {
      return ee;
    },
    getPopupViewCommonInfo: function () {
      return H;
    },
    openUrlClient: function () {
      return eT;
    },
    asyncDesktopShellApi: function () {
      return neotixShellApiExportLoader.loadShellApiExports;
    },
    listenDesktopBookmarksEvent: function () {
      return v;
    },
    useDesktopLoginEventRefresh: function () {
      return c;
    },
    closeCurrentView: function () {
      return eV;
    },
    handleOpenWebByUrlAction: function () {
      return eR;
    },
    isSamanthaChatUrl: function () {
      return neotixShellApiExportLoader.isDoubaoOrCiciaiChatUrl;
    },
    openReferencePath: function () {
      return eN;
    },
    usePreloadResourceTab: function () {
      return d;
    },
    closeCurrentVoiceCall: function () {
      return M;
    },
    getIsExtensionLoad: function () {
      return I;
    },
    removePopupViewCommonInfo: function () {
      return X;
    },
    useListenMultiPopupViewInit: function () {
      return en;
    },
    getAllViewCommonInfo: function () {
      return Q;
    },
    getCurrentNativeLanguage: function () {
      return el;
    },
    useIsDoubaoZh: function () {
      return ec;
    },
    checkIsScreenshotEnable: function () {
      return B;
    },
    updatePopupViewCommonInfo: function () {
      return G;
    },
    getTaskMapFromDoubaoDomainIndexdDB: function () {
      return samanthaChatTaskStorage.loadChatTaskMap;
    },
    notifyLoginStatusChange: function () {
      return ed;
    },
    openImageCanvas: function () {
      return eD;
    },
    checkVoiceCallIsAllow: function () {
      return asyncInitDesktop_1.isInitEnabled;
    },
    openPopupView: function () {
      return ea;
    },
    autoInitPopupViewCommonInfo: function () {
      return q;
    },
    LocalPathType: function () {
      return e$;
    },
    defaultPCChatOpen: function () {
      return resumeSamanthaChatTask.resumeChatTask;
    },
    openDownloadPage: function () {
      return ey;
    },
    removeBookmark: function () {
      return A;
    },
    createPopupViewInfoOperate: function () {
      return Y;
    },
    syncMessageToConversation: function () {
      return eg;
    },
    setNativeLocalStorage: function () {
      return eo;
    },
    getClientEnv: function () {
      return N;
    },
    sendMessageToExt: function () {
      return eu;
    },
    openApp: function () {
      return g;
    },
    listenDesktopScreenshotEventOnce: function () {
      return D;
    },
    isFeatureOffline: function () {
      return eO;
    },
    isOnlineUrl: function () {
      return eW;
    },
    useIsLocalModelFeatureOffline: function () {
      return eF;
    },
    openChatPage: function () {
      return eA;
    },
    setTaskMapToDoubaoDomainIndexedDB: function () {
      return samanthaChatTaskStorage.saveChatTaskMap;
    },
    setPopupViewCommonInfo: function () {
      return K;
    },
    getIsReload: function () {
      return E;
    },
    checkIsTrackVerifyMode: function () {
      return ef;
    },
    CommonInfoStorageKey: function () {
      return O;
    },
    reportPointWithCheck: function () {
      return P;
    },
    useCurrentNativeLanguage: function () {
      return es;
    },
    DESKTOP_VOICE_CHAT_CURRENT_CID_KEY: function () {
      return L;
    },
    getFileFromUrl: function () {
      return R;
    },
    useTimerRefreshPageHooks: function () {
      return u;
    },
    setData2Idb: function () {
      return indexeddbDataAccessWrapper.setDataToIndexedDB;
    },
    useListenPopupViewInit: function () {
      return et;
    }
  });
}