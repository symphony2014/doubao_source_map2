// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'useDesktopDownload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 284934
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var domainUrlConverter = require("domain-url-converter") /*id: 42970*/;
  var aiSpaceOldIcon = require("ai-space-old-icon") /*id: 176200*/;
  var microsoftLogoIcon = require("microsoft-logo-icon") /*id: 780129*/;
  let u = () => {
    let t = () => {
      let e = navigator.userAgent.toLowerCase();
      let t = e.includes("windows");
      let i = e.includes("arm") || e.includes("arm64");
      let n = e.includes("x86") || e.includes("x64");
      return t && i && !n;
    };
    let i = navigator;
    if (i.userAgentData?.getHighEntropyValues) {
      return i.userAgentData.getHighEntropyValues(["architecture", "platform"]).then(e => {
        let {
          architecture: t,
          platform: i
        } = e;
        return i.toLowerCase() === "windows" && (t === "arm" || t === "arm64");
      }).catch(() => t());
    } else {
      return Promise.resolve(t());
    }
  };
  let p = async () => {
    let t = function () {
      let e = navigator.userAgent.match(/Version\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari/);
      if (e) {
        return {
          major: parseInt(e[1]),
          minor: parseInt(e[2])
        };
      } else {
        return null;
      }
    }();
    if (t && (t.major < 14 || t.major === 14 && t.minor < 1)) {
      return "x64";
    }
    try {
      let e = document.createElement("canvas");
      let t = e.getContext("webgl") || e.getContext("experimental-webgl");
      if (t) {
        let e = t.getExtension("WEBGL_debug_renderer_info");
        if (e) {
          let i = t.getParameter(e.UNMASKED_RENDERER_WEBGL);
          if (i.includes("Apple M") || i.includes("Apple GPU")) {
            return "arm";
          }
          if (i.includes("Intel") || i.includes("AMD")) {
            return "x64";
          }
        }
      }
    } catch (e) {}
    let i = navigator;
    if (i.userAgentData?.getHighEntropyValues) {
      try {
        return i.userAgentData.getHighEntropyValues(["architecture"]).then(e => {
          var t;
          var i;
          if ((t = e.architecture) === null || t === undefined ? undefined : t.includes("arm")) {
            return "arm";
          } else if ((i = e.architecture) === null || i === undefined ? undefined : i.includes("x86")) {
            return "x64";
          } else {
            return "universal";
          }
        });
      } catch (e) {}
    }
    let n = navigator.userAgent.toLowerCase();
    if (n.includes("arm") || n.includes("aarch64")) {
      return "arm";
    } else {
      return "universal";
    }
  };
  let _ = (e, t) => e === "arm" ? (t == null ? undefined : t.mac_arm64_url) || (t == null ? undefined : t.mac_universal_url) || "" : e === "x64" ? (t == null ? undefined : t.mac_x64_url) || (t == null ? undefined : t.mac_universal_url) || "" : (t == null ? undefined : t.mac_universal_url) || "";
  var downloadActionHelper = require("download-action-helper") /*id: 308251*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  let g = {
    extSuccess: false,
    client: {},
    canVisitChromeStore: undefined,
    extConfig: {},
    clientConfig: {}
  };
  let y = reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(e => ({
    ...g,
    setSuccess: (t, i) => e(e => {
      let n = {
        ...e,
        extSuccess: true
      };
      if (t === "all" && i) {
        if (n.client[i]) {
          n.client[i].success = true;
        } else {
          n.client[i] = {
            success: true,
            macDownlink: "",
            winDownlink: ""
          };
        }
      }
      return n;
    }),
    setConfig: t => e(() => t),
    setLinks(t) {
      let {
        macDownlink: i,
        winDownlink: n,
        utmSource: a,
        success: r
      } = t;
      e(e => ({
        client: {
          ...e.client,
          [a]: {
            success: r,
            macDownlink: i,
            winDownlink: n
          }
        }
      }));
    },
    setCanVisitChromeStore(t) {
      e(() => ({
        canVisitChromeStore: t
      }));
    }
  })));
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var doubaoUrlConfig = require("doubao-url-config") /*id: 195632*/;
  let E = reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe((e, t) => ({
    isLoading: false,
    tccConfig: {},
    fetchTccConfig: async () => {
      let {
        tccConfig: i,
        isLoading: n
      } = t();
      if (!isEmptyUtil.isEmpty(i) && !n) {
        return i;
      }
      if (n) {
        return new Promise(e => {
          let t = E.subscribe(e => [e.tccConfig, e.isLoading], i => {
            let [n, a] = i;
            if (!a) {
              e(n);
              t();
            }
          }, {
            fireImmediately: true
          });
        });
      }
      e({
        isLoading: true
      });
      try {
        let t = await serviceRequestHelpers.rawRequest({
          method: "GET",
          url: doubaoUrlConfig.configUrl
        });
        let i = (t == null ? undefined : t.data?.data) ?? {};
        let n = safeObjectPropertyMap.safeObjectMap(i, e => JSON.parse(e || "{}"));
        e({
          tccConfig: n,
          isLoading: false
        });
        return n;
      } catch (t) {
        if (t instanceof Error) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "get_tcc_config_error",
            error: t
          });
        }
        e({
          isLoading: false
        });
        return i;
      }
    }
  })));
  let j = async e => {
    var i;
    var n;
    let {
      ugUtmSource: a
    } = e || {};
    let r = "/service/settings/v3/?device_platform=web&brand=doubao&aid=582478";
    if (a) {
      r = `${r}&ug_utm_source=${a}`;
    }
    let o = await serviceRequestHelpers.rawRequest({
      method: "GET",
      url: r
    });
    if (o == null) {
      return undefined;
    } else if ((n = o.data) === null || n === undefined) {
      return undefined;
    } else if ((i = n.data) === null || i === undefined) {
      return undefined;
    } else {
      return i.settings?.saman_update_address;
    }
  };
  let N = async () => (await E.getState().fetchTccConfig()).plugin_download;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = function () {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : chatPlatformConstants.sourceConstants.web;
    let [r, f] = reactCoreLibraryReexport.useState(false);
    let [v, g] = [userAgentDeviceDetector.isWindows(), userAgentDeviceDetector.isMac()];
    let {
      client: b,
      clientConfig: w,
      setConfig: x,
      setLinks: k,
      setSuccess: S
    } = y(e => {
      let {
        clientConfig: t,
        setConfig: i,
        setLinks: n,
        setSuccess: a,
        client: r
      } = e;
      return {
        client: r,
        clientConfig: t,
        setConfig: i,
        setLinks: n,
        setSuccess: a
      };
    }, deepEqualityUtil.deepEqual);
    let E = reactCoreLibraryReexport.useMemo(() => b[i] || {}, [b, i]);
    reactCoreLibraryReexport.useEffect(() => {
      if (E.success) {
        return;
      }
      let e = false;
      let t = "universal";
      if (v) {
        u().then(t => {
          e = t;
        });
      }
      if (g) {
        p().then(e => {
          t = e || "universal";
        });
      }
      let n = async () => {
        try {
          let i = await N();
          if (!i) {
            return;
          }
          x({
            clientConfig: (i == null ? undefined : i.pc_config) ?? {},
            extConfig: (i == null ? undefined : i.plugin_config) ?? {}
          });
          S("all");
        } catch (e) {}
      };
      (async () => {
        try {
          let n = await j({
            ugUtmSource: i || downloadActionHelper.getClientSource()
          });
          if (!n) {
            return;
          }
          n.mac_url = domainUrlConverter.convertDomainUrl(n.mac_url);
          n.mac_arm_url = domainUrlConverter.convertDomainUrl(n.mac_arm_url);
          n.mac_universal_url = domainUrlConverter.convertDomainUrl(n.mac_universal_url);
          n.win_x64_url = domainUrlConverter.convertDomainUrl(n.win_x64_url);
          n.win_arm_url = domainUrlConverter.convertDomainUrl(n.win_arm_url);
          let a = (e ? n == null ? undefined : n.win_arm_url : n == null ? undefined : n.win_x64_url) || "";
          k({
            utmSource: i,
            success: true,
            macDownlink: _(t, n),
            winDownlink: a
          });
          f(!!_(t, n) || !!a);
        } catch (e) {}
      })();
      n();
    }, [i]);
    let C = (w == null ? undefined : w.windows?.enable) && E.winDownlink;
    let I = (w == null ? undefined : w.mac_arm?.enable) && E.macDownlink;
    let {
      macRenderList: $,
      winRenderList: R,
      otherOSRenderList: P
    } = [{
      keyWord: chatPlatformConstants.deviceTypes.Mac,
      fallback_Icon: reactJsxRuntimeCoreReexport.jsx(aiSpaceOldIcon.AiSpaceOldIcon, {
        className: "mac-icon text-20"
      }),
      icon_url: reactJsxRuntimeCoreReexport.jsx(aiSpaceOldIcon.AiSpaceOldIcon, {
        className: o("icon-white-D6k2MM", "mac-icon text-20")
      }),
      download_url: E.macDownlink,
      data_testid: "download_mac"
    }, {
      keyWord: chatPlatformConstants.deviceTypes.Windows,
      fallback_Icon: reactJsxRuntimeCoreReexport.jsx(microsoftLogoIcon.MicrosoftLogoIcon, {
        className: "windows-icon"
      }),
      download_url: C,
      data_testid: "download_windows"
    }, {
      keyWord: chatPlatformConstants.deviceTypes.OtherOSs,
      download_url: "/download/desktop",
      data_testid: "download_otheros"
    }].reduce((e, t) => {
      let i = t.keyWord;
      let n = w[i];
      if (n) {
        let a;
        let r = {
          ...n,
          ...t
        };
        let {
          macRenderList: o,
          winRenderList: l,
          otherOSRenderList: s
        } = e;
        (i === chatPlatformConstants.deviceTypes.OtherOSs ? s : i === chatPlatformConstants.deviceTypes.Windows ? l : o).push(r);
      }
      return e;
    }, {
      macRenderList: [],
      winRenderList: [],
      otherOSRenderList: []
    });
    return {
      hasDeskDownloadLinks: r,
      hasPcConfig: I || C,
      isMacOrWindowDevice: g || v,
      isMacDevice: g,
      isWindowsDevice: v,
      macLink: I,
      windowLink: C,
      macRenderList: $,
      winRenderList: R,
      otherOSRenderList: P,
      currentAppConfig: (g ? $ : v ? R : P)[0] || {}
    };
  };
  require.d(exports, {
    useDesktopDownload: function () {
      return C;
    }
  });
}