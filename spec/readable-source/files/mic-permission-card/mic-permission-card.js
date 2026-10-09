// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'l' to 'semiButtonWrapperComponentExport'
// - Resolved require(659091) to 'semi-button-wrapper-component-export'
// - Renamed variable 'a' to 'stringUtilities'
// - Resolved require(612303) to 'string-utilities'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'kT' to 'createFormatter' (module 612303)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'z' to 'SemiButtonWrapperComponent' (module 659091)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: mic-permission-card.f385b331.js
         * chunkId: 80234
         * moduleId: 747020
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var semiButtonWrapperComponentExport = require("semi-button-wrapper-component-export") /*id: 659091*/;
  var stringUtilities = require("string-utilities") /*id: 612303*/;
  var c = require.p + "static/image/mic-no-permission.ad21074e.jpg";
  var _ = {
    container: "container-rfKR5T",
    "content-wrapper": "content-wrapper-rpcU64",
    title: "title-vaRVUz",
    description: "description-JMu1HC",
    "img-wrapper": "img-wrapper-DOdSXv",
    "action-button-wrapper": "action-button-wrapper-I0QHA_",
    "know-btn": "know-btn-vhZxWi",
    "close-btn": "close-btn-_C_Rb5"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p(e) {
    let {
      className: n,
      i18nConfig: i,
      onClickCloseBtn: r,
      onClickConfirmBtn: p,
      renderCustomActionButton: u
    } = e;
    let w = stringUtilities.createFormatter(i);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(_.container, n),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _["content-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.title,
          children: w("voice_input_no_permission_alert_header")
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: _.description,
          children: [w("voice_input_no_permission_alert_description"), reactJsxRuntimeCoreReexport.jsx("a", {
            href: "https://bytedance.larkoffice.com/docx/NhCSdb93dodluqxAHwXcrg3Znyd",
            target: "_blank",
            children: w("voice_input_no_permission_alert_guide")
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: _["img-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(c, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3e$duTmlNMk4w$1RKb2FH%kRNWEJp-mtJeFpFTT$kR0Z-$FhSalIxWj$Zb*RzZW1NeWJIWmlh$EZx$1ZoS2Ewd3lNWEJaZ$R*M1dsaEtkR0ZZ$*5waFZ6bDF%RmRP-%dOdF$-$mtTRTQw$1ZoS2Jt%ll%$DA9"
            }),
            alt: "icon",
            width: 288,
            height: 88
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: _["action-button-wrapper"],
        children: u ? u({
          onClickConfirmBtn: p
        }) : reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponentExport.SemiButtonWrapperComponent, {
          className: _["know-btn"],
          onClick: p,
          children: w("voice_input_no_permission_alert_btn_ok")
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: _["close-btn"],
        onClick: r,
        children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: "text-12"
        })
      })]
    });
  }
  require.d(exports, {
    MicPermissionCard: function () {
      return p;
    }
  });
}