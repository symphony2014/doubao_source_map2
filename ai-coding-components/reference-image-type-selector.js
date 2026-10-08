// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'ReferenceImageTypeSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 509653
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillReferenceImageHook = require("skill-reference-image-hook") /*id: 177182*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var checkboxGroupComponent = require("checkbox-group-component") /*id: 654013*/;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var h = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12 1a1 1 0 0 1 1 1v1.055A9.004 9.004 0 0 1 20.945 11H22a1 1 0 1 1 0 2h-1.055A9.004 9.004 0 0 1 13 20.945V22a1 1 0 1 1-2 0v-1.055A9.004 9.004 0 0 1 3.055 13H2a1 1 0 1 1 0-2h1.055A9.004 9.004 0 0 1 11 3.055V2a1 1 0 0 1 1-1m-1 4.07A7.005 7.005 0 0 0 5.07 11H8a1 1 0 1 1 0 2H5.07A7 7 0 0 0 11 18.93V16a1 1 0 1 1 2 0v2.93A7 7 0 0 0 18.93 13H16a1 1 0 1 1 0-2h2.93A7 7 0 0 0 13 5.07V8a1 1 0 1 1-2 0z",
      clipRule: "evenodd"
    })
  }), {}));
  var codingSkillChatInputStyles_1 = require("coding-skill-chat-input-styles_1") /*id: 579930*/;
  let v = [skillReferenceImageHook.ReferenceImageTypes.Function, skillReferenceImageHook.ReferenceImageTypes.Layout, skillReferenceImageHook.ReferenceImageTypes.Color];
  let b = "referenceImageTooltipVisible";
  let y = e => {
    var t;
    var n;
    let {
      url: w,
      referenceImageList: k,
      setReferenceImageByUrl: j
    } = e;
    let [C, N] = reactCoreLibraryReexport.useState(storageWrapperWithFallback.LocalStorageWrapper.getItem(b) !== "true");
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let T = {
      [skillReferenceImageHook.ReferenceImageTypes.Function]: S("coding_website_build_reference_function"),
      [skillReferenceImageHook.ReferenceImageTypes.Layout]: S("coding_website_build_reference_layout"),
      [skillReferenceImageHook.ReferenceImageTypes.Color]: S("coding_website_build_reference_color")
    };
    let R = {
      [skillReferenceImageHook.ReferenceImageTypes.Function]: S("coding_website_build_img_function"),
      [skillReferenceImageHook.ReferenceImageTypes.Layout]: S("coding_website_build_img_layout"),
      [skillReferenceImageHook.ReferenceImageTypes.Color]: S("coding_website_build_img_color")
    };
    let I = reactCoreLibraryReexport.useMemo(() => k == null ? undefined : k.find(e => e.url === w), [k, w]);
    let M = reactCoreLibraryReexport.useMemo(() => (I == null ? undefined : I.types) || [], [I]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: codingSkillChatInputStyles_1.refImageStyles["reference-image"],
      children: [reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
        src: xssContentSanitizer.sanitizeUrl(w, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3elNte*Fi$lo1$2xjMWFscFRNWEJp$jBad$dsTT$l$nB-$214amJWWjFX$EpWZEd*WE1Xa*FNbF-w$1Zo%01*bFh%bTlp$jFaM$pFTTFNR016-%doamJX%XhZM2M5%FE9PQ"
        }),
        imageOptions: {
          squareContainer: true,
          objectFit: "cover",
          draggable: false,
          width: 54,
          height: 54
        },
        errorClassName: "bg-[var(--neutral-transparent-2)]"
      }, w), (I == null ? undefined : I.status) === receiveMessageBoxStatus.messageBoxStatus.Normal ? reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
        trigger: "click",
        render: reactJsxRuntimeCoreReexport.jsx(checkboxGroupComponent.CheckboxGroup, {
          value: M,
          onChange: e => j == null ? undefined : j(w, e),
          children: reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
            children: v.map(e => reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
              className: codingSkillChatInputStyles_1.refImageStyles["reference-image-item"],
              onClick: e => e.stopPropagation(),
              children: reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
                className: codingSkillChatInputStyles_1.refImageStyles["reference-image-item-checkbox"],
                value: e,
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: codingSkillChatInputStyles_1.refImageStyles["reference-image-item-label"],
                  children: T[e]
                })
              })
            }, e))
          })
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: e => e.stopPropagation(),
          children: C ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: S("coding_website_build_reference_type"),
            position: "bottom",
            trigger: "click",
            visible: C,
            onVisibleChange: e => {
              if (!e) {
                storageWrapperWithFallback.LocalStorageWrapper.setItem(b, "true");
                N(false);
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: `
                    ${codingSkillChatInputStyles_1.refImageStyles["reference-image-icon"]}
                    w-20
                  `,
              onClick: () => N(false),
              "data-testid": "code-btn-reference-image-type",
              children: reactJsxRuntimeCoreReexport.jsx(h, {
                color: "#fff"
              })
            })
          }, "reference-image-tooltip-first") : reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: S("coding_website_build_referenced_type", {
              s_type: I == null ? undefined : (n = I.types) === null || n === undefined ? undefined : (t = n.map(e => R[e])) === null || t === undefined ? undefined : t.join("+")
            }),
            position: "bottom",
            trigger: "hover",
            className: (I == null ? undefined : I.types?.length) ? "" : "!hidden",
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: `
                    ${codingSkillChatInputStyles_1.refImageStyles["reference-image-icon"]}
                    ${(I == null ? undefined : I.types?.length) ? "w-30" : "w-20"}
                  `,
              "data-testid": "code-btn-reference-image-type",
              children: [reactJsxRuntimeCoreReexport.jsx(h, {
                color: "#fff"
              }), (I == null ? undefined : I.types?.length) ? reactJsxRuntimeCoreReexport.jsx("div", {
                className: codingSkillChatInputStyles_1.refImageStyles["reference-image-icon-count"],
                children: I.types.length
              }) : null]
            })
          }, "reference-image-tooltip-type")
        })
      }) : null]
    });
  };
  require.d(exports, {
    ReferenceImageTypeSelector: function () {
      return y;
    }
  });
}