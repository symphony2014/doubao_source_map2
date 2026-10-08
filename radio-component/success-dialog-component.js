// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'vb' to 'SuccessDialog'
// - Renamed export 'QQ' to 'getDialogProps'
// - Renamed export 'Qe' to 'SuccessDialogWithIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 825396
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var c = {
    "success-dialog-title": "success-dialog-title-rPFPbN",
    successDialogTitle: "success-dialog-title-rPFPbN",
    "success-dialog-description": "success-dialog-description-ZeCudq",
    successDialogDescription: "success-dialog-description-ZeCudq"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      t,
      className: a,
      onCancel: i,
      ...n
    } = e;
    return {
      t,
      centered: true,
      onCancel: i,
      ...n,
      className: r(a, c["base-dialog"], disableSelectBarConst.disableSelectBar)
    };
  };
  let u = e => reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
    ..._({
      ...e
    })
  });
  let p = e => {
    let {
      title: t,
      description: n
    } = e;
    let {
      data: r = ""
    } = useRequestHook.useRequest(() => require.e("success-icon-asset") /*id: 24346*/.then(require.t.bind(require, 930141, 17)).then(e => e.default));
    let s = "w-56 h-56 mb-20";
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex flex-col items-center",
      children: [r ? reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(r, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRsa3lPWFJq%npsM$ds-zFNR041T1dsWldFNXN%RmRT-0ZsW*$IWmFl$*x3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
        }),
        className: s
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: s
      }), t && reactJsxRuntimeCoreReexport.jsx("div", {
        className: c["success-dialog-title"],
        children: t
      }), n && reactJsxRuntimeCoreReexport.jsx("div", {
        className: c["success-dialog-description"],
        children: n
      })]
    });
  };
  let m = e => {
    let {
      t,
      title: a,
      description: i,
      ...n
    } = e;
    let r = reactJsxRuntimeCoreReexport.jsx(p, {
      title: a,
      description: i
    });
    return _({
      t,
      width: 360,
      icon: null,
      content: r,
      children: r,
      ...n
    });
  };
  require.d(exports, {
    SuccessDialog: function () {
      return u;
    },
    getDialogProps: function () {
      return _;
    },
    SuccessDialogWithIcon: function () {
      return m;
    }
  });
}