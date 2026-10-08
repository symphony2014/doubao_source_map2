// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'BrandAvatar'
// - Renamed export 'd' to 'useAvatarUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 951505
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  var p = {
    title: "title-aFUATN",
    skeleton: "skeleton-JBhEGD",
    clickable: "clickable-QH0RaV",
    "avatar-wrap": "avatar-wrap-vrXIS8",
    "extra-icon": "extra-icon-aggHSo"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = {
    "white-bg": {
      doubao: e => e === "dark" ? require.e("charts-axis-component") /*id: 42765*/.then(require.t.bind(require, 40123, 17)).then(e => e.default) : require.e("logo-icon-asset") /*id: 49941*/.then(require.t.bind(require, 685324, 17)).then(e => e.default),
      cici: () => Promise.resolve(`${doubaoConfigConstants_1.oceanFlowCdnUrl}/samantha/logo-icon-white-bg.png`)
    },
    "blue-bg": {
      doubao: e => e === "dark" ? require.e("doubao-avatar-assets") /*id: 86325*/.then(require.t.bind(require, 849865, 17)).then(e => e.default) : require.e("doubao-avatar-blue") /*id: 58872*/.then(require.t.bind(require, 228788, 17)).then(e => e.default),
      cici: () => require.e("asset-cici-avatar") /*id: 38478*/.then(require.t.bind(require, 179057, 17)).then(e => e.default)
    },
    "grey-bg": {
      doubao: () => require.e("logo-asset") /*id: 61823*/.then(require.t.bind(require, 101957, 17)).then(e => e.default),
      cici: () => require.e("logo-image-chunk") /*id: 69852*/.then(require.t.bind(require, 372217, 17)).then(e => e.default)
    }
  };
  let _ = e => {
    let t = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    }) ? "dark" : "light";
    let {
      data: n = ""
    } = useRequestHook.useRequest(async () => f[e].doubao(t), {
      refreshDeps: [e, t]
    });
    return n;
  };
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      size: i,
      brandName: a,
      theme: l,
      onClick: s,
      icon: u,
      ...c
    } = e;
    let d = _(l);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      ...c,
      className: o(n, "flex items-center", {
        [p.clickable]: s
      }),
      onClick: s,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: p["avatar-wrap"],
        children: [d ? reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(d, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1dsamJ$WjFXa014-zJJe$pIWk1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
          }),
          style: {
            width: i,
            height: i
          },
          draggable: false
        }) : reactJsxRuntimeCoreReexport.jsx("div", {
          className: o("rounded-full flex-shrink-0 opacity-[0.1]", p.skeleton),
          style: {
            width: i,
            height: i
          }
        }), u ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: p["extra-icon"],
          children: u
        }) : null]
      }), a && reactJsxRuntimeCoreReexport.jsx("div", {
        className: p.title,
        children: a
      })]
    });
  });
  require.d(exports, {
    BrandAvatar: function () {
      return g;
    },
    useAvatarUrl: function () {
      return _;
    }
  });
}