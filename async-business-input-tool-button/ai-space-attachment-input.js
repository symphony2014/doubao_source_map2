// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'AiSpaceAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 500254
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var doubaoLegalUrls = require("doubao-legal-urls") /*id: 113045*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var aiSpaceAttachmentUploadHook = require("ai-space-attachment-upload-hook") /*id: 742247*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var samanthaAiSpaceApiServices = require("samantha-ai-space-api-services") /*id: 563338*/;
  var fileIconRendererComponent = require("file-icon-renderer-component") /*id: 744632*/;
  var _ = require.p + "static/image/guide.5546c071.png";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 13,
    fill: "none",
    viewBox: "0 0 12 13",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#arrow_svg__a)",
      fillRule: "evenodd",
      d: "M6.396 2.205a.5.5 0 0 1 .708 0l3.75 3.75a.5.5 0 0 1 0 .707l-3.75 3.75a.5.5 0 1 1-.708-.707l2.897-2.896H1.5a.5.5 0 1 1 0-1h7.793L6.396 2.912a.5.5 0 0 1 0-.707",
      clipRule: "evenodd"
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "arrow_svg__a",
        x1: 11,
        x2: -0.474,
        y1: 10.559,
        y2: 7.378,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#35A8FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#4373FF"
        })]
      })
    })]
  });
  function w(e) {
    var t;
    let {
      onNavigateToAISpace: n
    } = e;
    let r = useNavigateRuntimeResolver.useNavigateResolver();
    let a = useLocationWrapper.useLocationWrapper();
    let o = (t = window.location.href) === null || t === undefined ? undefined : t.startsWith("chrome://");
    let u = typeof window != "undefined" && a.pathname === window.location.pathname && !o;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "ai-space-guide-wrapper-ClLTyY",
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(_, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRscElTbkJr-lZWMFdtMXNjMXB%T$hw-$-zaHNX$E5TZ*1OcE9Xc*lNak-zWWpJMWJHSn$$bnBNTTBKMlkw-z$NbHBZ%1hSWk1qbDFaRWRXZFdSRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
        }),
        className: "ai-space-guide-pic-tnR3D0"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "ai-space-guide-title-cC3wLb",
        children: d("aispace_addMenu_sectionHeader")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "ai-space-guide-subtitle-ceqkt_",
        children: d("aispace_addMenu_sectionDesc")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "ai-space-guide-button-nmU5t6",
        children: reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "guide-button-text-wrapper-voCE2z",
          onClick: () => {
            var e;
            var t;
            let a = "chatbox_attachment_onboarding";
            if ((t = window) === null || t === undefined ? undefined : (e = t.location) === null || e === undefined ? undefined : e.href.startsWith("chrome://")) {
              window.open(xssContentSanitizer.sanitizeUrl(`${doubaoLegalUrls.doubaoBaseUrl}/chat/drive/`, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRscElTbkJr-lZWMFdtMXNjMXB%T$hw-$-zaHNX$E5TZ*1OcE9Xc*lNak-zWWpJMWJHSn$$bnBNTTBKMlkw-z$NbHBZ%1hSWk1qbDFaRWRXZFdSRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
              }));
              return;
            }
            if (u) {
              r("/chat/drive", {
                state: {
                  enter_from: a
                }
              });
            } else if (typeof window != "undefined") {
              if (o) {
                window.open(xssContentSanitizer.sanitizeUrl(urlParamUtils.appendUrlParams("https://www.doubao.com/chat/drive/", {
                  from: a
                }), null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRscElTbkJr-lZWMFdtMXNjMXB%T$hw-$-zaHNX$E5TZ*1OcE9Xc*lNak-zWWpJMWJHSn$$bnBNTTBKMlkw-z$NbHBZ%1hSWk1qbDFaRWRXZFdSRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
                }));
              } else {
                window.location.assign(xssContentSanitizer.sanitizeUrl(urlParamUtils.appendUrlParams(`${window.location.origin}/chat/drive/`, {
                  from: a
                }), null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRscElTbkJr-lZWMFdtMXNjMXB%T$hw-$-zaHNX$E5TZ*1OcE9Xc*lNak-zWWpJMWJHSn$$bnBNTTBKMlkw-z$NbHBZ%1hSWk1qbDFaRWRXZFdSRE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
                }));
              }
            }
            if (n != null) {
              n();
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: "ai-space-button-text-larsk6",
            children: d("aispace_addMenu_linkText_upload")
          }), reactJsxRuntimeCoreReexport.jsx(y, {
            className: "text-12"
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-full flex-1"
      })]
    });
  }
  let x = e => {
    let {
      titleClassName: t,
      itemClassName: n,
      fileTitleClassName: i,
      title: a,
      onOpenFileListModal: l,
      onNavigateToAISpace: c,
      onAddFileToAttachment: p,
      fileTypes: h,
      latestFileCount: _,
      onDataLoaded: y,
      onOverrideClickFile: x
    } = e;
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let [k, S] = reactCoreLibraryReexport.useState([]);
    let [E, T] = reactCoreLibraryReexport.useState(false);
    let j = aiSpaceAttachmentUploadHook.useAiSpaceFileUpload();
    let P = x ?? j;
    reactCoreLibraryReexport.useEffect(() => {
      T(true);
      samanthaAiSpaceApiServices.fetchLatestUsed({
        fileTypes: h.map(e => `.${e}`),
        limit: _ || 5
      }).then(e => {
        var t;
        let n = e == null ? undefined : (t = e.nodes) === null || t === undefined ? undefined : t.map(e => {
          let t = fileEntityTypeMapper.convertApiResponse(e);
          if (t) {
            return {
              fileInfo: fileEntityTypeMapper.getReviewStatusStyle(t),
              nodeInfo: t
            };
          } else {
            return null;
          }
        }).filter(Boolean);
        if (n == null ? undefined : n.length) {
          S(n);
        }
      }).finally(() => {
        T(false);
        if (y != null) {
          y();
        }
      });
    }, []);
    if (!(k == null ? undefined : k.length) && !E) {
      return reactJsxRuntimeCoreReexport.jsx(w, {
        onNavigateToAISpace: c
      });
    }
    let N = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: t,
        children: a ?? C("aispace_addMenu_sectionHeader_space")
      }), E ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex h-104 w-full items-center justify-center",
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {})
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [k.map((e, t) => {
          let {
            name: r
          } = e.fileInfo;
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: n,
            onClick: () => P([e.nodeInfo], () => p == null ? undefined : p(e.nodeInfo)),
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: o("flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden"),
              children: reactJsxRuntimeCoreReexport.jsx(fileIconRendererComponent.FileIconRenderer, {
                file: e.fileInfo,
                className: "text-20"
              })
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: o("text-ellipsis whitespace-nowrap overflow-hidden", i),
              children: r
            })]
          }, t);
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: n,
          onClick: () => l(),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: o("flex h-20 w-20 items-center justify-center overflow-hidden"),
            children: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {
              className: "text-16"
            })
          }), C("aispace_addMenu_option_moreFile")]
        })]
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: N
    });
  };
  require.d(exports, {
    AiSpaceAttachment: function () {
      return x;
    }
  });
}