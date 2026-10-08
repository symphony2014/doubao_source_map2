// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'GuidanceListView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: translate-skill-guidance-page.ef1836c4.js
         * chunkId: 29337
         * moduleId: 919609
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var skillGuidanceLogger = require("skill-guidance-logger") /*id: 492448*/;
  var p = {
    list: "list-tsrTrm",
    "box-shadow": "box-shadow-uO7FFR"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      className: t,
      items: n,
      itemIconClassName: i,
      moreText: m,
      moreIconClassName: h,
      itemTestId: v = "guidance-suggestions-list-item",
      reportParams: k,
      isShowMore: x = true,
      onShow: w,
      onClick: y,
      onShowMore: S,
      onClickMore: E
    } = e;
    let b = reactUseChangedRef.useChangedRef(n, deepEqualUtil_1.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      b.forEach((e, t) => {
        if (w != null) {
          w(e, t);
        }
      });
    }, [b]);
    let [N, C] = reactCoreLibraryReexport.useState(n.length);
    let T = useLatestRef_1.useLatestRef(N);
    let j = reactCoreLibraryReexport.useRef(null);
    let R = useElementSizeHook_2.useElementSize(j);
    let $ = useLatestRef_1.useLatestRef(R);
    let F = reactCoreLibraryReexport.useRef(44);
    let M = reactCoreLibraryReexport.useRef(null);
    let P = useElementSizeHook_2.useElementSize(M);
    let W = useLatestRef_1.useLatestRef(P);
    let {
      run: V
    } = asyncSkillReceiveHook.useSkillReceive(() => {
      let l = $.current?.height;
      let a = W.current?.height;
      if (!l || !a) {
        C(n.length);
        return;
      }
      let r = Math.min(T.current, b.length);
      let i = r > 0 ? (a - r * 2 - 44) / r : Math.max(F.current, 44);
      F.current = i;
      C(Math.max(Math.floor((l - r * 2 - 44) / i), 0));
    }, {
      wait: 50,
      leading: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      V();
    }, [R == null ? undefined : R.height, P == null ? undefined : P.height]);
    reactCoreLibraryReexport.useEffect(() => {
      if (S != null) {
        S();
      }
    }, []);
    skillGuidanceLogger.useGuidanceShow({
      loading: b.length === 0,
      testId: v,
      reportParams: k
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: j,
      className: "h-full",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: M,
        className: o("flex flex-col gap-2 px-8", p.list, t),
        children: [n.slice(0, N).map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
          "data-testid": v,
          className: "py-10 pr-10 pl-8 flex items-center gap-10 rounded-s-radius-xxss hover:bg-s-color-bg-trans transition-colors cursor-pointer",
          onClick: () => {
            skillGuidanceLogger.logGuidanceClick("send_message", k);
            if (y != null) {
              y(e, t);
            }
          },
          children: [e.iconUrl ? reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(e.iconUrl, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTW5od1dXa3hhb%ZI%mpCT$-y%XhZ$mRT-%dKdFRteE1NMD%1$1hrNWFtSXlNW*RpTWpWc1ltN$Jkb*96$m5C-$IwWjFX$EpWZEdNelZtNWFNbFo2Wk$kc2RtSn$%WFpp%jJ4NlpFTT$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
            }),
            className: o(i, p["box-shadow"]),
            alt: "icon"
          }) : reactJsxRuntimeCoreReexport.jsx("div", {
            className: o("w-24 h-24 flex items-center justify-center text-s-color-text-quaternary shrink-0", i),
            children: e.icon
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            children: [reactJsxRuntimeCoreReexport.jsx("p", {
              className: "m-0 s-font-small text-s-color-text-secondary",
              children: e.title
            }), e.desc && reactJsxRuntimeCoreReexport.jsx("p", {
              className: "m-0 mt-2 s-font-xxs text-s-color-text-quaternary",
              children: e.desc
            })]
          })]
        }, t)), x && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "py-10 pr-10 pl-8 flex items-center gap-10 rounded-s-radius-xxss hover:bg-s-color-bg-trans transition-colors cursor-pointer",
          onClick: () => {
            skillGuidanceLogger.logGuidanceClick("navigate", k);
            if (E != null) {
              E();
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: h,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "w-24 h-24 rounded-s-radius-xxxl flex items-center justify-center",
              children: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {
                className: "text-16 p-2 text-s-color-text-quaternary"
              })
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx("p", {
              className: "m-0 s-font-small text-s-color-text-secondary",
              children: m
            })
          })]
        })]
      })
    });
  };
  require.d(exports, {
    GuidanceListView: function () {
      return m;
    }
  });
}