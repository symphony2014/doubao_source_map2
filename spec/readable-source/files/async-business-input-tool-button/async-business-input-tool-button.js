// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'AsyncBusinessInputToolButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 168064
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessToolIcon = require("business-tool-icon") /*id: 913916*/;
  var cloudDownloadIcon = require("cloud-download-icon") /*id: 184607*/;
  var rocketIconComponent = require("rocket-icon-component") /*id: 453826*/;
  var userShieldIcon = require("user-shield-icon") /*id: 746369*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: i,
      options: r,
      onChange: o,
      trackParams: l
    } = e;
    let s = e => {
      o(e);
    };
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillToolUIV2: v
    } = chatLauncherConfigHooks.useSkillToolLayout(i);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "h-full",
      children: reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
        showTick: true,
        trigger: "click",
        position: "topLeft",
        clickToHide: true,
        render: reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
          children: r.map((e, t) => reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
            onClick: () => {
              if (e.track_button_name) {
                teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
                  button_name: e.track_button_name,
                  ...l
                });
              }
              s(e.value);
            },
            disabled: e.disabled,
            icon: e.icon,
            children: e.disabled ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              trigger: "hover",
              position: "right",
              content: c("cici_web_ai_coding_upload_limit"),
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "s-font-small-strong",
                children: e.label
              })
            }) : reactJsxRuntimeCoreReexport.jsx("div", {
              className: "s-font-small-strong",
              children: e.label
            })
          }, t))
        }),
        children: reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
          isOverflow: t,
          small: n,
          onClick: () => teaAnalyticsEventTracker.trackEvent("click_upload_entrance", l),
          scene: i,
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {}),
          className: v ? "" : "gap-0 px-9",
          children: v ? c("podcast_mainPage_btn_uploadFile") : ""
        })
      })
    });
  };
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  var marscodeGuestAccessHandler = require("marscode-guest-access-handler") /*id: 870433*/;
  var y = "input-vyILVq";
  let w = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: u,
      uploadTeaReport: d,
      uploadedFileType: p,
      handleAddFiles: h,
      handleAddDir: f,
      handleAddImages: m,
      onOpenDataAnalysis: w,
      renderDataAnalysisUpload: x,
      isUploadFileOpenDisabled: C = true,
      isShowUploadImage: k = false,
      trackParams: S
    } = e;
    let E = i18nTranslationUtils.useTranslationWithFallback();
    let T = reactCoreLibraryReexport.useRef(null);
    let j = reactCoreLibraryReexport.useRef(null);
    let P = reactCoreLibraryReexport.useRef(null);
    let {
      supportedCodeFileTypes: N
    } = codeAssistantFileValidator.validateFileName();
    let R = () => {
      var e;
      if ((e = T.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let I = () => {
      var e;
      if ((e = j.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let O = () => {
      var e;
      if ((e = P.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let M = reactCoreLibraryReexport.useMemo(() => [{
      label: E("cici_web_ai_coding_file_upload"),
      value: skillMessageTypes.resourceTypes.FILE,
      icon: reactJsxRuntimeCoreReexport.jsx(businessToolIcon.BusinessToolIcon, {
        className: "size-16"
      }),
      track_button_name: "code_upload"
    }, {
      label: E("cici_web_ai_coding_folder_upload"),
      value: skillMessageTypes.resourceTypes.DIR,
      disabled: C && !!p,
      icon: reactJsxRuntimeCoreReexport.jsx(cloudDownloadIcon.CloudDownloadIcon, {
        className: "size-16"
      }),
      track_button_name: "code_folder"
    }, {
      label: E("web_ai_coding_upload_data_file"),
      value: skillMessageTypes.resourceTypes.DATA_ANALYSIS,
      icon: reactJsxRuntimeCoreReexport.jsx(rocketIconComponent.RocketIcon, {
        className: "size-16"
      }),
      track_button_name: "code_data_file"
    }, ...(k ? [{
      label: E("add_image"),
      value: skillMessageTypes.resourceTypes.IMAGE,
      icon: reactJsxRuntimeCoreReexport.jsx(userShieldIcon.UserShieldIcon, {
        className: "size-16"
      }),
      track_button_name: "code_pic"
    }] : [])], [k]);
    let {
      onClickGuestDisabled: D
    } = marscodeGuestAccessHandler.useMarsCodeGuestAccess();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "text-[var(--s-color-text-primary)]",
      "data-testid": "upload-coding-file-btn",
      children: [reactJsxRuntimeCoreReexport.jsx(v, {
        isOverflow: t,
        isToolButtonSmall: n,
        scene: u,
        options: M,
        trackParams: S,
        onChange: async e => {
          if (await D()) {
            if (e === skillMessageTypes.resourceTypes.FILE) {
              if (d != null) {
                d("upload_file");
              }
              R();
            } else if (e === skillMessageTypes.resourceTypes.DIR) {
              if (d != null) {
                d("upload_folder");
              }
              I();
            } else if (e === skillMessageTypes.resourceTypes.DATA_ANALYSIS) {
              if (d != null) {
                d("data_file");
              }
              if (w != null) {
                w();
              }
            } else if (e === skillMessageTypes.resourceTypes.IMAGE) {
              if (d != null) {
                d("upload_pic");
              }
              O();
            }
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        type: "file",
        multiple: true,
        className: y,
        onChange: e => {
          if (h != null) {
            h(e);
          }
          if (T.current) {
            T.current.value = "";
          }
        },
        ref: T,
        accept: N == null ? undefined : N.join(",")
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        type: "file",
        directory: "true",
        mozdirectory: "true",
        webkitdirectory: "true",
        className: y,
        onChange: e => {
          if (f != null) {
            f(e);
          }
          if (j.current) {
            j.current.value = "";
          }
        },
        ref: j
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        type: "file",
        multiple: true,
        className: y,
        onChange: e => {
          if (m != null) {
            m(e);
          }
          if (P.current) {
            P.current.value = "";
          }
        },
        ref: P,
        accept: ".png,.jpg,.jpeg,.webp"
      }), x == null ? undefined : x()]
    });
  };
  require.d(exports, {
    AsyncBusinessInputToolButton: function () {
      return w;
    }
  });
}