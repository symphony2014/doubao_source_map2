// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Vt' to 'PageBlockCustomIcon'
// - Renamed export 'DF' to 'alwaysTrue'
// - Renamed export 'fw' to 'InlineCustomIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 626616
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectTransformUtil = require("object-transform-util") /*id: 389700*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var c = reactLoadableComponent;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var booleanStubUtils = require("boolean-stub-utils") /*id: 520760*/;
  function f(e, i = () => null) {
    return c({
      loader: () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        action: () => Promise.all([platformDocUtils.Cwx(), platformDocUtils.Cxh()]).then(() => Promise.all([require.e("dropdown-menu") /*id: 99771*/, require.e("icon-emoji-picker-panel") /*id: 47996*/, require.e("biz-suite-custom-icon") /*id: 44969*/]).then(require.bind(require, "biz-suite-custom-icon") /*id: 335724*/)).then(i => i[e]),
        name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
      }),
      loading: i
    });
  }
  function g(e) {
    return () => {
      let [i, r, o] = reactCoreLibraryReexport.useMemo(() => {
        let i = document.querySelector(e);
        if (i) {
          return [i.className, i.innerHTML, Object.assign({}, objectTransformUtil.transformObject(i.dataset, e => `data-${e}`))];
        } else {
          return [];
        }
      }, []);
      if (r) {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          className: i,
          dangerouslySetInnerHTML: {
            __html: xssContentSanitizer.sanitizeHtml(r, null, {
              logType: "react.dangerouslySetInnerHTML",
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9XMWFWMFl3WkZoS2JFd3l%akZqTTFKMllsTXhjRmt5T1hWT%1teDFXa2RXTk$4d$$uc*xSMFo1$2pO$2$nPT0"
            })
          },
          ...o
        });
      } else {
        return null;
      }
    };
  }
  require("custom-icon-provider") /*id: 274402*/;
  f("CustomSuiteIcon");
  f("InlineCustomIcon");
  let p = f("PageBlockCustomIcon", g(".page-block-title-icon"));
  let m = f("InlineCustomIcon", g(".doc-title .custom-icon"));
  f("EditableAddCustomIcon");
  require.d(exports, {
    PageBlockCustomIcon: function () {
      return p;
    },
    alwaysTrue: function () {
      return booleanStubUtils.alwaysTrue_1;
    },
    InlineCustomIcon: function () {
      return m;
    }
  });
}