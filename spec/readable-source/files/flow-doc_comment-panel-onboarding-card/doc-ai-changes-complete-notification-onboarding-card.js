// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'a' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'c' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'revisionStatusConstants'
// - Resolved require(945169) to 'revision-status-constants'
// - Renamed variable 'd' to 'userPreferenceStore'
// - Resolved require(292003) to 'user-preference-store'
// - Renamed variable '_' to 'localStoragePersistedStateHook'
// - Resolved require(429278) to 'local-storage-persisted-state-hook'
// - Renamed variable 'u' to 'useDebounceCallbackHook_1_1'
// - Resolved require(420834) to 'use-debounce-callback-hook_1_1'
// - Renamed variable 'm' to 'popoverComponent'
// - Resolved require(973583) to 'popover-component'
// - Renamed variable 'p' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'h' to 'docLauncherUtils'
// - Resolved require(325489) to 'doc-launcher-utils'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'b' to 'getDocLauncherOrThrow' (module 325489)
// - Updated imported property 'Z' to 'useLocalStorageState' (module 429278)
// - Updated imported property 'R1' to 'closedRevisionCard' (module 945169)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'K' to 'userPreferenceStore' (module 292003)
// - Updated imported property 'Z' to 'useDebounceCallback' (module 420834)
// - Updated imported property 'Z' to 'PopoverComponent' (module 973583)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_comment-panel-onboarding-card.62e9d663.js
         * chunkId: 87604
         * moduleId: 870040
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var revisionStatusConstants = require("revision-status-constants") /*id: 945169*/;
  var userPreferenceStore = require("user-preference-store") /*id: 292003*/;
  var localStoragePersistedStateHook = require("local-storage-persisted-state-hook") /*id: 429278*/;
  var useDebounceCallbackHook_1_1 = require("use-debounce-callback-hook_1_1") /*id: 420834*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var docLauncherUtils = require("doc-launcher-utils") /*id: 325489*/;
  var f = {
    container: "container-xNZ21v",
    image: "image-DvaYUy",
    body: "body-injl10",
    title: "title-y0ROkB",
    content: "content-JVVcK7",
    actions: "actions-QAoXwG",
    "confirm-btn": "confirm-btn-pTfv_4",
    confirmBtn: "confirm-btn-pTfv_4",
    popover: "popover-C5cJuN"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/doc-resource/pic.png";
  let $ = e => {
    let {
      className: n,
      style: i,
      visible: s,
      getPopupContainer: $
    } = e;
    let [N, R] = reactCoreLibraryReexport.useState(false);
    let g = docLauncherUtils.getDocLauncherOrThrow();
    let [, v] = localStoragePersistedStateHook.useLocalStorageState(revisionStatusConstants.closedRevisionCard, {
      defaultValue: false
    });
    let {
      ref: k
    } = reactIntersectionObserver_1.useInView({
      initialInView: false,
      onChange: e => {
        if (e) {
          if (g != null) {
            g.bizEvents.emit("behavior.revision-panel.close-ai-modify-guidance-popup-show");
          }
        }
      }
    });
    let x = () => {
      R(false);
      v(true);
      userPreferenceStore.userPreferenceStore.getState().setUserPreferenceSync({
        show_otter_enter_revision_tips: true
      });
    };
    useDebounceCallbackHook_1_1.useDebounceCallback(() => {
      if (R != null) {
        R(!!s);
      }
    }, !!s * 300);
    if (N) {
      return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        className: r(f.popover, n),
        autoAdjustOverflow: false,
        style: i,
        trigger: "custom",
        spacing: 10,
        visible: true,
        position: "left",
        getPopupContainer: $,
        onVisibleChange: e => {
          if (!e) {
            x();
          }
        },
        onClickOutSide: x,
        zIndex: 1000,
        content: reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: k,
          className: f.container,
          onMouseDown: e => e.stopPropagation(),
          children: [b && reactJsxRuntimeCoreReexport.jsx("div", {
            className: f.image,
            children: reactJsxRuntimeCoreReexport.jsx("img", {
              src: xssContentSanitizer.sanitizeUrl(b, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEyWWpJMWFXSXlSbmxh%jJ4M$dua3hhb*xZ%210T%1teDFXa2RXTk$4d$$uc*xSMFo1$2pO$2$nPT0"
              }),
              alt: "onboarding"
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: f.body,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: f.title,
              children: t("doc_aiChanges_completeNotif_header")
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: f.content,
              children: t("doc_aiChanges_completeNotif_desc")
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: f.actions,
              children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                type: "tertiary",
                onClick: () => {
                  x();
                  if (g != null) {
                    g.bizEvents.emit("behavior.revision-panel.close-ai-modify-guidance-popup-click", {
                      buttonName: "confirm"
                    });
                  }
                },
                className: f["confirm-btn"],
                children: t("doc_aiChanges_completeNotif_btn")
              })
            })]
          })]
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: f.arch
        })
      });
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    OnboardingCard: function () {
      return $;
    }
  });
}