// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'EmptyStateUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 674618
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlIconComponent_1_1 = require("rtl-icon-component_1_1") /*id: 565165*/;
  var codingSkillChatInputIcon = require("coding-skill-chat-input-icon") /*id: 517798*/;
  var codingSkillChatIcon = require("coding-skill-chat-icon") /*id: 746365*/;
  var addFileIcon = require("add-file-icon") /*id: 484941*/;
  var aiPaceEmptyImageAsset = require("ai-pace-empty-image-asset") /*id: 886870*/;
  var p = {
    container: "container-NadeNF",
    centered: "centered-N2qbJ7",
    content: "content-RMFkVm",
    illustration: "illustration-yLsoUv",
    "img-wrapper": "img-wrapper-CLUJip",
    imgWrapper: "img-wrapper-CLUJip",
    icon: "icon-BHicIR",
    description: "description-OMhrEe",
    main: "main-buU3ES",
    "sub-content": "sub-content-Q4DGXi",
    subContent: "sub-content-Q4DGXi",
    "action-buttons": "action-buttons-DqGeoB",
    actionButtons: "action-buttons-DqGeoB"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e) {
    let {
      t,
      layout: a = "default",
      readonly: r = false,
      title: f,
      description: h,
      useIllustration: v = false,
      onClickUploadFile: y,
      onClickUploadFolder: S,
      onClickAddLink: g,
      onMount: b
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (b != null) {
        b();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(p.container, p[a]),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: p.content,
        children: [v ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: p["img-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(aiPaceEmptyImageAsset, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRsa3lPWFJq%npsM$ds-zFNR041T1cxaF-zaHN%RmQ0-0dNel$-%mFWek-zWk$ocmR*a3lPWFZr%jFaM$pFTT$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
            }),
            alt: "icon",
            width: 330,
            height: 330,
            className: p.illustration
          })
        }) : reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1_1.RtlIcon, {
          className: p.icon
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(p.description, {
            "mt-6": !v
          }),
          children: [f && reactJsxRuntimeCoreReexport.jsx("div", {
            className: p.main,
            children: f
          }), h && reactJsxRuntimeCoreReexport.jsx("div", {
            className: p["sub-content"],
            children: h
          }), !r && reactJsxRuntimeCoreReexport.jsx("div", {
            className: p["sub-content"],
            children: t("aispace_drag_and_drop_files_here_or_click_button_below_to_add_content")
          })]
        }), !r && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: p["action-buttons"],
          children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            icon: reactJsxRuntimeCoreReexport.jsx(codingSkillChatInputIcon.CodingChatInputIcon, {}),
            type: "tertiary",
            size: "medium",
            onClick: y,
            children: t("aispace_upload_file")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            icon: reactJsxRuntimeCoreReexport.jsx(codingSkillChatIcon.CodingSkillChatIcon, {}),
            type: "tertiary",
            size: "medium",
            onClick: S,
            children: t("aispace_upload_folder")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            icon: reactJsxRuntimeCoreReexport.jsx(addFileIcon.AddFileIcon, {}),
            type: "tertiary",
            size: "medium",
            onClick: g,
            children: t("aispace_add_link")
          })]
        })]
      })
    });
  }
  require.d(exports, {
    EmptyStateUpload: function () {
      return f;
    }
  });
}