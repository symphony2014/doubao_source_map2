// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pb' to 'DownloadPopover'
// - Renamed export 'ho' to 'DownloadDropdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 129268
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var uiPositionWrappers = require("ui-position-wrappers") /*id: 711067*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var m = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M13.322 4.68q.185 0 .572.044.395.035.896.193t1.02.51.958.984q-.045.027-.334.237-.282.211-.642.616-.36.395-.633 1.01-.264.607-.264 1.45 0 .967.335 1.635.342.669.79 1.081.457.414.81.607.36.184.386.193-.009.035-.132.396-.123.351-.387.914-.255.554-.668 1.16-.378.536-.782 1.028a3.7 3.7 0 0 1-.87.8q-.465.317-1.055.317-.448 0-.764-.106a5 5 0 0 1-.607-.246 5 5 0 0 0-.624-.237 3 3 0 0 0-.852-.106q-.669 0-1.117.176a45 45 0 0 0-.835.36 2.3 2.3 0 0 1-.931.176q-.818 0-1.442-.65-.615-.651-1.265-1.556a10 10 0 0 1-.914-1.661 11.4 11.4 0 0 1-.66-1.995 9.3 9.3 0 0 1-.246-2.11q0-1.687.642-2.838t1.644-1.74q1.002-.59 2.083-.59.57 0 1.072.185.51.184.95.378.438.184.799.184.342 0 .808-.193.466-.203 1.029-.404.57-.202 1.23-.202m-.615-1.424a3.5 3.5 0 0 1-1.107.888q-.66.351-1.248.351-.123 0-.238-.026l-.026-.123a2 2 0 0 1-.009-.194q0-.668.29-1.3a4.2 4.2 0 0 1 .668-1.055q.465-.554 1.178-.923.72-.37 1.38-.395.026.15.026.342 0 .676-.255 1.319-.255.633-.659 1.116"
    })
  }), {}));
  var _ = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "m12.852 2.319.813-1.482Q13.747.69 13.61.61q-.15-.068-.23.068l-.823 1.494a5.7 5.7 0 0 0-2.301-.478q-1.215.001-2.301.476L7.13.677Q7.05.544 6.9.612q-.136.081-.057.227l.813 1.481a5 5 0 0 0-1.968 1.736 4.35 4.35 0 0 0-.733 2.438h10.588a4.35 4.35 0 0 0-.733-2.438 5 5 0 0 0-1.958-1.736zM8.155 4.474a.43.43 0 0 1-.314.13.41.41 0 0 1-.31-.13.43.43 0 0 1-.126-.31.44.44 0 0 1 .126-.312.41.41 0 0 1 .31-.13q.182 0 .314.13a.42.42 0 0 1 .132.311.42.42 0 0 1-.132.311m4.825 0a.41.41 0 0 1-.309.13.43.43 0 0 1-.315-.13.42.42 0 0 1-.132-.31q0-.182.132-.312a.43.43 0 0 1 .315-.13q.183 0 .309.13a.43.43 0 0 1 .125.311q.002.18-.126.311m-8.025 9.96q0 .52.366.883.366.36.894.361h.892l.011 2.567q0 .487.344.828a1.13 1.13 0 0 0 .823.338 1.14 1.14 0 0 0 .836-.338 1.12 1.12 0 0 0 .343-.828v-2.567h1.58v2.567q0 .487.344.828a1.14 1.14 0 0 0 .835.338 1.14 1.14 0 0 0 .835-.338 1.12 1.12 0 0 0 .344-.828v-2.567h.894q.512 0 .881-.362.366-.361.366-.882V6.9H4.955zm12.347-7.748a1.16 1.16 0 0 0-.826.327 1.07 1.07 0 0 0-.345.806v4.78q0 .477.345.811a1.14 1.14 0 0 0 .826.334q.494 0 .837-.334a1.09 1.09 0 0 0 .345-.812v-4.78a1.07 1.07 0 0 0-.345-.805 1.17 1.17 0 0 0-.837-.327m-14.943.333a1.16 1.16 0 0 1 .837-.333q.482 0 .826.333a1.07 1.07 0 0 1 .345.8v4.78a1.1 1.1 0 0 1-.34.811 1.14 1.14 0 0 1-.83.334 1.16 1.16 0 0 1-.838-.334 1.09 1.09 0 0 1-.345-.812v-4.78q0-.465.345-.8"
    })
  }), {}));
  var baseIconClass = require("base-icon-class") /*id: 181746*/;
  var doubaoUrlConfig = require("doubao-url-config") /*id: 195632*/;
  var f = require.p + "static/image/doubao-qrcode.6d38d0e9.png";
  var w = "item-oDhmQ8";
  var v = "icon-tmbleT";
  let b = (e, t) => {
    teaAnalyticsEventTracker.trackEvent("go_download_app", {
      platform: e,
      logged_in: t ? "1" : "0",
      type: "icon"
    });
  };
  let g = e => {
    let {
      width: t = 152,
      minWidth: n,
      pageIsLoggedIn: r,
      onAndroidClick: o,
      onIosClick: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "download-platform-jCIyiK",
        style: {
          width: t,
          minWidth: n
        },
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          className: "qrcode-T_jqHt",
          src: xssContentSanitizer.sanitizeUrl(f, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJXa2M1TTJKd*$IWlpWM%-w$1RJNWRX%khWblZr%Xpsd1ltM$NiR1ZETlRCak0ya*9ZMjFrT$dOM1B%MD0"
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "items-nB694M",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: l(w, "hoverable"),
            onClick: () => {
              if (a != null) {
                a();
              }
              b("ios", r);
              window.open(xssContentSanitizer.sanitizeUrl(doubaoUrlConfig.iosUrl, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJXa2M1TTJKd*$IWlpWM%-w$1RJNWRX%khWblZr%Xpsd1ltM$NiR1ZETlRCak0ya*9ZMjFrT$dOM1B%MD0"
              }));
            },
            children: reactJsxRuntimeCoreReexport.jsx(baseIconClass.ZPm, {
              className: v,
              svg: reactJsxRuntimeCoreReexport.jsx(m, {})
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: l(w, "hoverable-COlNf4"),
            onClick: () => {
              if (o != null) {
                o();
              }
              b("android", r);
              window.open(xssContentSanitizer.sanitizeUrl(doubaoUrlConfig.androidUrl, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJXa2M1TTJKd*$IWlpWM%-w$1RJNWRX%khWblZr%Xpsd1ltM$NiR1ZETlRCak0ya*9ZMjFrT$dOM1B%MD0"
              }));
            },
            children: reactJsxRuntimeCoreReexport.jsx(baseIconClass.ZPm, {
              className: v,
              svg: reactJsxRuntimeCoreReexport.jsx(_, {})
            })
          })]
        })]
      })
    });
  };
  function $() {
    return debounceUtil_1_1.debounce(teaAnalyticsEventTracker.trackEvent);
  }
  let R = e => {
    let {
      pageIsLoggedIn: t,
      onMobileClick: n,
      onDesktopClick: r,
      children: o,
      onVisibleChange: l,
      onAndroidClick: d,
      onIosClick: p,
      ...m
    } = e;
    if (userAgentDeviceDetector.isMobileCached()) {
      return o(e => {
        teaAnalyticsEventTracker.trackEvent("go_download_app", {
          platform: userAgentDeviceDetector.isAppleDevice() ? "ios" : "android",
          logged_in: t ? "1" : "0",
          type: "button"
        });
        if (n) {
          n(e);
        } else {
          window.open(xssContentSanitizer.sanitizeUrl(doubaoUrlConfig.webLinkUrl, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJXa2M1TTJKd*$IWlpWM%-w$1c1$01H%khPWFZNTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
          }));
        }
      }, true);
    } else {
      return reactJsxRuntimeCoreReexport.jsx(uiPositionWrappers.popoverWrapper, {
        content: reactJsxRuntimeCoreReexport.jsx(g, {
          pageIsLoggedIn: t,
          onAndroidClick: d,
          onIosClick: p
        }),
        onVisibleChange: e => {
          $()("go_popup_window_qrcode", {
            visible: e ? "1" : "0"
          });
          if (l != null) {
            l(e);
          }
        },
        ...m,
        children: o(r, false)
      });
    }
  };
  let k = e => {
    let {
      pageIsLoggedIn: t,
      onMobileClick: n,
      onDesktopClick: r,
      children: o,
      onVisibleChange: l,
      onAndroidClick: c,
      onIosClick: p,
      ...m
    } = e;
    if (userAgentDeviceDetector.isMobileCached()) {
      return reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
        children: o(e => {
          teaAnalyticsEventTracker.trackEvent("go_download_app", {
            platform: userAgentDeviceDetector.isAppleDevice() ? "ios" : "android",
            logged_in: t ? "1" : "0",
            type: "button"
          });
          if (n) {
            n(e);
          } else {
            window.open(xssContentSanitizer.sanitizeUrl(doubaoUrlConfig.webLinkUrl, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJXa2M1TTJKd*$IWlpWM%-w$1c1$01H%khPWFZNTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
            }));
          }
        }, true)
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuSub, {
        onOpenChange: e => {
          $()("go_popup_window_qrcode", {
            visible: e ? "1" : "0"
          });
          if (l != null) {
            l(e);
          }
        },
        ...m,
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuSubTrigger, {
          children: o(r, false)
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuSubContent, {
          children: reactJsxRuntimeCoreReexport.jsx(g, {
            pageIsLoggedIn: t,
            onAndroidClick: c,
            onIosClick: p
          })
        })]
      });
    }
  };
  require.d(exports, {
    DownloadPopover: function () {
      return R;
    },
    DownloadDropdown: function () {
      return k;
    }
  });
}