// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pn' to 'initAppConfig'
// - Renamed export 'Ui' to 'getEnvConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 321601
         */
module.exports = function (module, exports, require) {
  var larkEnvironmentUtil = require("lark-environment-util") /*id: 222336*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var l = debugBrowserConfig;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var d = reactLoadableComponent;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  require("docx-url-preview-utils_1") /*id: 293956*/;
  var docTokenPasteUtils = require("doc-token-paste-utils") /*id: 786413*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  l("lark_services_helper_pc");
  let m = async () => {
    let e;
    if (browserEnvironmentDetectionUtils.browserDetector.isLark) {
      if (larkEnvironmentUtil.isLarkEnvironment) {
        let n = await platformDocUtils.rQd("env");
        e = n && n.env;
      } else {
        e = objectPathGetDefault.getObjectPathDefault(window, ["LARKAPI", "env"]);
      }
    }
    return e;
  };
  let v = e => {
    let {
      getAppNameFromConfig: n,
      getCommonChannel: r,
      getDomainConfig: o,
      isLark: i
    } = platformDocUtils.RNe;
    let l = o("domain");
    return {
      appName: n(),
      appVersion: (e == null ? undefined : e.appVersion) || "6.7.7",
      locale: platformDocUtils.HiA.getLocale(),
      appRegion: browserEnvironmentDetectionUtils.browserDetector.isLark && e ? e.isOverseaPkg ? "va" : "cn" : i() ? "va" : "cn",
      urls: {
        larkAPIDomain: l.lark_api,
        larkApplinkDomain: l.applink,
        larkFileDomain: l.lark_file
      },
      tracingAttributes: browserEnvironmentDetectionUtils.browserDetector.isLark && e ? {
        hostApp: e.isOverseaPkg ? "Lark" : "Feishu"
      } : undefined,
      slardar: r() === "saas",
      skipFetchUser: true,
      user: docTokenPasteUtils.getUserContextInfo(),
      commonRequestHeaders: browserEnvironmentDetectionUtils.browserDetector.isOpendoc ? {
        ...platformDocUtils.HoC()
      } : undefined
    };
  };
  let b = onceFunctionFactory.createOnce(async () => {
    let {
      default: e,
      Env: n
    } = await Promise.all([require.e("auth-api-core-sdk") /*id: 72263*/, require.e("ud-biz-react-services-config") /*id: 72667*/]).then(require.bind(require, "app-config-service-initializer") /*id: 378769*/);
    let o = await m();
    let i = {
      ...v(o),
      env: platformDocUtils.RNe.isBoeEnv() ? n.Boe : n.Production
    };
    await e.init(i);
    return o;
  });
  d({
    loader: async () => {
      try {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: "test"
        });
      } catch (e) {
        docxEventCollector.docEventCollector("docx_url_preview_dev", {
          action: "load_message_view_error",
          error: e ? JSON.stringify(e) : ""
        });
      }
    },
    loading: () => null
  });
  onceFunctionFactory.createOnce(async () => {});
  require.d(exports, {
    initAppConfig: function () {
      return b;
    },
    getEnvConfig: function () {
      return m;
    }
  });
}