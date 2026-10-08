// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 't' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'useDebouncedValueHook'
// - Resolved require(510920) to 'use-debounced-value-hook'
// - Renamed variable 's' to 'reactDebouncedUpdateHook'
// - Resolved require(101452) to 'react-debounced-update-hook'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'samanthaDropdownWrapper'
// - Resolved require(686264) to 'samantha-dropdown-wrapper'
// - Renamed variable 'd' to 'semiTooltipWrapper'
// - Resolved require(905177) to 'semi-tooltip-wrapper'
// - Renamed variable 'w' to 'encodingConstants_1'
// - Resolved require(486263) to 'encoding-constants_1'
// - Renamed variable 'g' to 'asyncLayoutCanvasJump'
// - Resolved require(959279) to 'async-layout-canvas-jump'
// - Renamed variable 'u' to 'codingSkillCanvasEventTracker_1'
// - Resolved require(588262) to 'coding-skill-canvas-event-tracker_1'
// - Renamed variable 'p' to 'aiCodingFeatureConfig'
// - Resolved require(243233) to 'ai-coding-feature-config'
// - Renamed variable 'R' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'n' to 'useCanvasEventTracker' (module 588262)
// - Updated imported property 'Z' to 'useDebouncedValue' (module 510920)
// - Updated imported property 'Z' to 'useDebouncedUpdate' (module 101452)
// - Updated imported property 'x' to 'useCanvasJump' (module 959279)
// - Updated imported property 'D' to 'SamanthaDropdown' (module 686264)
// - Updated imported property 'xf' to 'getEncodingList' (module 486263)
// - Updated imported property 's' to 'SemiTooltip' (module 905177)
// - Updated imported property 'W' to 'getAiCodingConfig' (module 243233)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: marscode-comp.dd5585e2.js
         * chunkId: 45089
         * moduleId: 353996
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var reactDebouncedUpdateHook = require("react-debounced-update-hook") /*id: 101452*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var encodingConstants_1 = require("encoding-constants_1") /*id: 486263*/;
  var asyncLayoutCanvasJump = require("async-layout-canvas-jump") /*id: 959279*/;
  var codingSkillCanvasEventTracker_1 = require("coding-skill-canvas-event-tracker_1") /*id: 588262*/;
  var aiCodingFeatureConfig = require("ai-coding-feature-config") /*id: 243233*/;
  var m = {
    container: "container-pDEbGa",
    "extra-padding": "extra-padding-BTIYkE",
    wiggle: "wiggle-rJjHb6",
    "btn-item": "btn-item-riL3Dm",
    divider: "divider-cA5Wni",
    "container-dark": "container-dark-B3x6mc",
    "charset-dropdown": "charset-dropdown-aZNJDh"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = reactCoreLibraryReexport.forwardRef((A, e) => {
    let {
      resourceType: i,
      selectedCharset: t,
      showCharsetBtn: k,
      showMarsCodeBtn: b = true,
      themeMode: h,
      onChangeCharset: B
    } = A;
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let E = reactCoreLibraryReexport.useRef();
    let {
      trackMarscodeShowEvent: Q
    } = codingSkillCanvasEventTracker_1.useCanvasEventTracker();
    let [N, T] = reactCoreLibraryReexport.useState(false);
    let [D, J] = reactCoreLibraryReexport.useState(false);
    let X = useDebouncedValueHook.useDebouncedValue(D, {
      wait: 1000
    });
    reactDebouncedUpdateHook.useDebouncedUpdate(() => {
      if (N) {
        T(false);
        J(true);
      }
    }, [N], {
      wait: 800
    });
    reactDebouncedUpdateHook.useDebouncedUpdate(() => {
      if (D) {
        J(false);
      }
    }, [D], {
      wait: 5000
    });
    reactCoreLibraryReexport.useImperativeHandle(e, () => ({
      wiggle: () => {
        T(true);
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (b) {
        Q({
          show_status: "show"
        });
      }
    }, [b]);
    let {
      handleJump: x
    } = asyncLayoutCanvasJump.useCanvasJump();
    let C = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
      showTick: true,
      clickToHide: true,
      getPopupContainer: () => E.current,
      className: m["charset-dropdown"],
      trigger: "click",
      position: "topLeft",
      spacing: 10,
      render: reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
        children: encodingConstants_1.getEncodingList.map(A => reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
          active: A === t,
          onClick: () => {
            if (B != null) {
              B(A);
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
                      w-110 s-font-small-strong
                      ${A === t ? "text-s-color-brand-primary-default" : null}
                    `,
            children: A
          })
        }, A))
      }),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-[100%]",
        children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          trigger: "hover",
          position: "top",
          content: "选择编码",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: l(m["btn-item"], {
              [m["extra-padding"]]: !b
            }),
            children: t
          })
        })
      })
    }), [b, t, B]);
    let {
      traeExpText: f
    } = aiCodingFeatureConfig.getAiCodingConfig();
    let W = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      visible: D,
      trigger: D ? "custom" : "hover",
      position: "top",
      content: S(f),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(m["btn-item"], {
          [m["extra-padding"]]: !k
        }),
        onClick: () => x(i),
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(h === "dark" ? "data:image/png;base64,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" : "data:image/png;base64,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", null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$i$0pIT1ROT$-wNTJXa2RzZFZwN%1-ZFpWMlJz$ERKT2RtSllRblpp-lZaM$pFaE5kb%p-%m5sak1rNTJXa2RWZEZsd$$u$k1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
          }),
          className: "mr-4 h-11 w-55 !bg-transparent"
        })
      })
    }), [k, h, D, X, x, f]);
    if (!k && !b) {
      return null;
    }
    let Z = reactCoreLibraryReexport.useMemo(() => !k || !b, [k, b]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(m.container, {
        [m["extra-padding"]]: !Z,
        [m["container-dark"]]: h === "dark",
        [m.wiggle]: N
      }),
      ref: A => E.current = A,
      children: [b ? W() : null, Z ? null : reactJsxRuntimeCoreReexport.jsx("span", {
        className: m.divider
      }), k ? C() : null]
    });
  });
  require.d(exports, {
    MarsCodeBtn: function () {
      return k;
    }
  });
}