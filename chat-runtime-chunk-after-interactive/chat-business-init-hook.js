// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'downgradeConfigStore'
// - Resolved require(489677) to 'downgrade-config-store'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'p' to 'cryptoMd5HashFunction'
// - Resolved require(204205) to 'crypto-md5-hash-function'
// - Renamed variable 'v' to 'connectionIdentifierGenerator'
// - Resolved require(496075) to 'connection-identifier-generator'
// - Renamed variable 'h' to 'chatConfigConstants'
// - Resolved require(577013) to 'chat-config-constants'
// - Renamed variable 'm' to 'commonParamsBuilder'
// - Resolved require(665781) to 'common-params-builder'
// - Renamed variable 'g' to 'taskStatusConstants'
// - Resolved require(100834) to 'task-status-constants'
// - Renamed variable 'y' to 'chatMessageServiceManager'
// - Resolved require(701777) to 'chat-message-service-manager'
// - Renamed variable 'b' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'S' to 'ttWidManager'
// - Resolved require(155324) to 'tt-wid-manager'
// - Renamed variable 'k' to 'slardarMonitorManager'
// - Resolved require(309069) to 'slardar-monitor-manager'
// - Renamed variable 'w' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'E' to 'arrayUniqByMatcher'
// - Resolved require(898750) to 'array-uniq-by-matcher'
// - Renamed variable 'C' to 'safeArrayFlattenUtil'
// - Resolved require(79349) to 'safe-array-flatten-util'
// - Renamed variable 'I' to 'chatSidebarStateManager'
// - Resolved require(496970) to 'chat-sidebar-state-manager'
// - Renamed variable 'R' to 'asyncBusinessLayoutConstants'
// - Resolved require(649420) to 'async-business-layout-constants'
// - Renamed variable 'P' to 'trackingEventConstants'
// - Resolved require(402894) to 'tracking-event-constants'
// - Renamed variable 'N' to 'chatLoginModalManager'
// - Resolved require(516605) to 'chat-login-modal-manager'
// - Renamed variable 'O' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'A' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'M' to 'useDebouncedCallbackHook_1'
// - Resolved require(366474) to 'use-debounced-callback-hook_1'
// - Updated imported property 'rO' to 'AudioApiService' (module 147875)
// - Updated imported property 'Wu' to 'SettingApiService' (module 147875)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'n' to 'setDowngradeConfig' (module 489677)
// - Updated imported property 'HI' to 'chatIdHi' (module 577013)
// - Updated imported property 'DP' to 'platformType' (module 577013)
// - Updated imported property 'Z' to 'getConnectionContext' (module 496075)
// - Updated imported property 'K' to 'getCommonParams' (module 665781)
// - Updated imported property 'vh' to 'chatMessageServiceContext' (module 701777)
// - Updated imported property 'D' to 'ttWidManager' (module 155324)
// - Updated imported property 'k' to 'slardarManager' (module 309069)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'I' to 'TaskStatus' (module 100834)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'Z' to 'uniqByMatcher' (module 898750)
// - Updated imported property 'Z' to 'safeFlattenArray' (module 79349)
// - Updated imported property 'a' to 'layoutActionTypes' (module 649420)
// - Updated imported property 'x' to 'trackingEvents' (module 402894)
// - Updated imported property 'Dv' to 'selectUserInfoFailed' (module 480327)
// - Updated imported property 'NK' to 'loginModalManager' (module 516605)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'zo' to 'openSidebarIfDid' (module 496970)
// - Updated imported property 'Z' to 'useDebouncedCallback' (module 366474)
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 69943
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = ["asr", "tts", "voice_call", "share_screen", "voice_setting", "audio_capture", "global_subtitle", "website_podcast"];
  let l = {
    asr: {
      enable: true,
      toastContent: "流量高峰，暂不支持语音输入功能"
    },
    tts: {
      enable: true,
      toastContent: "流量高峰，暂不支持语音朗读功能"
    },
    voice_call: {
      enable: true,
      toastContent: "流量高峰，暂不支持通话功能"
    },
    share_screen: {
      enable: true,
      toastContent: "流量高峰，暂不支持共享屏幕功能"
    },
    voice_setting: {
      enable: true,
      toastContent: "流量高峰，暂不支持音色设置功能"
    },
    audio_capture: {
      enable: true,
      toastContent: "流量高峰，暂不支持会议纪要"
    },
    global_subtitle: {
      enable: true,
      toastContent: "流量高峰，暂不支持实时字幕"
    },
    website_podcast: {
      enable: true,
      toastContent: "流量高峰，暂不支持网页播客"
    }
  };
  var downgradeConfigStore = require("downgrade-config-store") /*id: 489677*/;
  let c = async () => {
    try {
      let {
        code: e,
        data: t,
        msg: n
      } = await apiServicesCollection.AudioApiService.CallDowngradeConfigPC();
      if (e !== 0) {
        throw Error(n);
      }
      let {
        downgrade_configs: i = []
      } = t ?? {};
      let c = i.reduce((e, t) => {
        var i;
        var r;
        let {
          scene: a,
          entrances: c = []
        } = t;
        if (!s.includes(a)) {
          return e;
        }
        let u = c.filter(e => e.strategy && e.strategy.level !== 0);
        e[a] = {
          enable: u.length > 0,
          toastContent: ((r = u[0]) === null || r === undefined ? undefined : (i = r.strategy) === null || i === undefined ? undefined : i.extra?.toast_content) ?? l[a].toastContent
        };
        return e;
      }, {});
      let u = Object.keys(c).filter(e => {
        return c[e]?.enable;
      }).map(e => e);
      if (u.length > 0) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "im_chat_audio_downgrade",
          meta: {
            status: "1",
            scenes: u.join(",")
          }
        });
      }
      downgradeConfigStore.setDowngradeConfig(c);
    } catch {
      if (Date.now() > new Date("2026/02/16 00:00:00").getTime() && Date.now() < new Date("2026/02/16 23:59:59").getTime()) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "im_chat_audio_downgrade",
          meta: {
            status: "2",
            scenes: Object.keys(l).join(",")
          }
        });
        downgradeConfigStore.setDowngradeConfig(l);
      } else {
        downgradeConfigStore.setDowngradeConfig({});
      }
    }
  };
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var cryptoMd5HashFunction = require("crypto-md5-hash-function") /*id: 204205*/;
  var _ = cryptoMd5HashFunction;
  var connectionIdentifierGenerator = require("connection-identifier-generator") /*id: 496075*/;
  var chatConfigConstants = require("chat-config-constants") /*id: 577013*/;
  var commonParamsBuilder = require("common-params-builder") /*id: 665781*/;
  let f = e => ({
    "use-olympus-account": 1,
    ...(function (e) {
      let {
        device_platform: i,
        version_code: r,
        access_key: o,
        fpid: s,
        aid: l,
        ttwid: a
      } = e;
      let c = window;
      if ((c.byted_acrawler || c.bdms?.frontierSign) && a) {
        let e = _(`device_platform=${i}&version_code=${r}&access_key=${o}&fpid=${s}&aid=${l}&ttwid=${a}`);
        let t = {};
        return {
          "X-Bogus": (c.bdms?.frontierSign ? c.bdms.frontierSign({
            "X-MS-STUB": e
          }) : c.byted_acrawler.frontierSign({
            "X-MS-STUB": e
          }))["X-Bogus"],
          "X-MS-STUB": e,
          referer: document.referrer
        };
      }
    }({
      fpid: e.ws_product_id,
      access_key: e.ws_access_key,
      aid: e.ws_app_id,
      ttwid: e.ttwid,
      version_code: chatConfigConstants.chatIdHi,
      device_platform: chatConfigConstants.platformType
    }) || {}),
    ...connectionIdentifierGenerator.getConnectionContext("websocket"),
    ...commonParamsBuilder.getCommonParams(),
    aid: e.ws_app_id
  });
  var taskStatusConstants = require("task-status-constants") /*id: 100834*/;
  var chatMessageServiceManager = require("chat-message-service-manager") /*id: 701777*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var ttWidManager = require("tt-wid-manager") /*id: 155324*/;
  var slardarMonitorManager = require("slardar-monitor-manager") /*id: 309069*/;
  let T = async () => {
    var e;
    var t;
    let o = chatMessageServiceManager.chatMessageServiceContext.get("chatMessageService");
    let {
      data: s
    } = await apiServicesCollection.SettingApiService.Launch();
    if ((s == null ? undefined : s.config) !== undefined) {
      let n = {
        config: s.config,
        getCommonSocketParams: f,
        featureConfig: {
          binaryType: "pb"
        }
      };
      if (o != null && (e = o.updateInitMessageProtocolServiceConfig) !== null && e !== undefined) {
        e.call(o, n);
      }
      if (o != null && (t = o.handleAppInitialed) !== null && t !== undefined) {
        t.call(o);
      }
      ttWidManager.ttWidManager.setTtwidConfig({
        web_id: s.config.web_id,
        tt_wid: s.config.ttwid
      });
      slardarMonitorManager.slardarManager.addContexts({
        web_id: s.config.web_id
      });
    }
    if (s !== undefined) {
      let {
        upload_file_allowed_types: e,
        upload_file_max_size: t,
        upload_multi_entity_conf: r,
        feature_config: o,
        language_list: l
      } = s;
      chatStoreManager.getStore("launcherRawSettingStore").setState(e => e.launchStatus !== taskStatusConstants.TaskStatus.Success ? {
        launchData: s,
        deprecatedSystemConfig: {
          language_list: l || []
        },
        launchStatus: taskStatusConstants.TaskStatus.Success
      } : {});
      chatStoreManager.getStore("attachmentUploadStore").setState({
        attachmentUploadConfig: {
          uploadFileMaxSize: Number(t) || 0,
          uploadFileAllowedTypes: e || [],
          enabledSendMultiFileMessage: !!(o == null ? undefined : o.send_multi_file_message?.enabled),
          enableImageVlm: !!(o == null ? undefined : o.send_vlm_image_message?.enabled),
          uploadMultiEntityConf: {
            maxFileCount: Number(r == null ? undefined : r.max_file_cnt) || 0,
            maxFileSize: Number(r == null ? undefined : r.max_file_size) || 0,
            maxImageCount: Number(r == null ? undefined : r.max_image_cnt) || 0,
            maxImageSize: 20971520
          }
        }
      });
    }
  };
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  let x = async () => {
    var e;
    let {
      data: t
    } = await apiServicesCollection.SamanthaApiService.GetRecommendSkills({
      omit_sidebar: true,
      omit_image: true,
      omit_music: true,
      omit_write: true,
      omit_search: true
    });
    let n = e => !!e && !isNullishCheck.isNil(e == null ? undefined : e.skill_type);
    let i = arrayUniqByMatcher.uniqByMatcher(safeArrayFlattenUtil.safeFlattenArray(t == null ? undefined : (e = t.groups) === null || e === undefined ? undefined : e.map(e => {
      var t;
      return ((t = e.skills) === null || t === undefined ? undefined : t.filter(e => !!(e == null ? undefined : e.skill_id))) ?? [];
    })), "skill_id").filter(n);
    let o = ((t == null ? undefined : t.latest_skills) || []).filter(n);
    chatStoreManager.getStore("chatInputStore").getState().updateSkills({
      allSkills: i,
      latestSkills: o,
      input_config: t == null ? undefined : t.input_config
    });
    chatStoreManager.getStore("chatGuidanceStore").setState({
      skillConfig: t == null ? undefined : t.onboarding_skills
    });
  };
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var asyncBusinessLayoutConstants = require("async-business-layout-constants") /*id: 649420*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  let j = {
    landing: {
      type: asyncBusinessLayoutConstants.layoutActionTypes.CHAT_CAN_USE
    },
    trackInfo: {
      source: trackingEventConstants.trackingEvents.OTHER
    }
  };
  let L = () => {
    let e = userInfoStatusSelectors.selectUserInfoFailed();
    let {
      openLoginModal: t
    } = chatLoginModalManager.loginModalManager();
    let n = reactFunctionMemoHook.useMemoizedCallback((n, i) => {
      if (!e) {
        return;
      }
      let r = {
        ...j
      };
      if (n) {
        r.trackInfo = {
          source: n
        };
      }
      if (i) {
        r.loginNavigateQuery = i;
      }
      t({
        onSuccess: chatSidebarStateManager.openSidebarIfDid,
        ...r
      });
    });
    let {
      run: i
    } = useDebouncedCallbackHook_1.useDebouncedCallback(function (e = trackingEventConstants.trackingEvents.OTHER, t) {
      n(e, t);
    }, {
      leading: true,
      trailing: false,
      wait: 250
    });
    return i;
  };
  let D = () => {
    let e = useNavigateRuntimeResolver.useNavigateResolver();
    let t = L();
    reactCoreLibraryReexport.useEffect(() => {
      T();
      x();
      c();
      if (e) {
        chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(n => {
          if (n != null) {
            n.init(e, t);
          }
        });
      }
      let n = () => {
        if (document.visibilityState === "visible") {
          c();
        }
      };
      if (typeof window != "undefined") {
        window.addEventListener("visibilitychange", n);
      }
      return () => {
        window.removeEventListener("visibilitychange", n);
      };
    }, []);
  };
  require.r(exports);
  require.d(exports, {
    useGenericBusinessInit: function () {
      return D;
    }
  });
}