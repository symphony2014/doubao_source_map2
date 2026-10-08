// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'usePdfLinkInputModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 212354
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var skillEntranceClickTrack = require("skill-entrance-click-track") /*id: 111111*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var textLinkRendererComponent = require("text-link-renderer-component") /*id: 527379*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var textFormatterComponent = require("text-formatter-component") /*id: 532796*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var samanthaInputComponent = require("samantha-input-component") /*id: 214717*/;
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  var reactCheckCircleIcon_1 = require("react-check-circle-icon_1") /*id: 654056*/;
  var arxivDomainConstants = require("arxiv-domain-constants") /*id: 804607*/;
  var y = {
    "input-modal": "input-modal-Q_pXSp",
    autolink: "autolink-lZ7Gkh",
    input: "input-lciJfc",
    error: "error-SKlZMO",
    button: "button-cSOAg0"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => urlParamUtils.validateUrl(e.trim(), {
    allowedProtocols: ["https:"],
    allowedExtensions: fileTypeDetectionUtils.imageExtensions
  }) || urlParamUtils.validateUrl(e.trim(), {
    allowedProtocols: ["https:"],
    allowedHosts: arxivDomainConstants.arxivDomains
  });
  let w = e => {
    let {
      text: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(textLinkRendererComponent.TextLinkRenderer, {
      className: y.autolink,
      text: t
    });
  };
  let E = e => {
    let {
      visible: t,
      title: n,
      hasCancel: a = true,
      onHide: o,
      onSubmit: l
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let [c, u] = reactCoreLibraryReexport.useState("");
    let [E, C] = reactCoreLibraryReexport.useState(false);
    let T = x(c);
    let $ = E && !T;
    let R = e => {
      e.stopPropagation();
      if (e.key === "Enter" && !e.shiftKey && !e.altKey && c.trim() && T) {
        l(c);
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      "data-testid": "link-input-modal",
      visible: t,
      title: n,
      onCancel: () => o(),
      hasCancel: a,
      closeOnEsc: true,
      closable: false,
      footer: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "link_input_modal_cancel_btn",
          size: "medium",
          type: "tertiary",
          className: y.button,
          onClick: () => o(),
          children: s("cancel")
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "link_input_modal_add_link_btn",
          size: "medium",
          type: "primary",
          className: y.button,
          onClick: () => l(c),
          disabled: !c.trim() || !x(c),
          children: s("landing_button_confirm")
        })]
      }),
      centered: true,
      className: y["input-modal"],
      size: "medium",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaInputComponent.SamanthaInput, {
          "data-testid": "link_input_modal_input",
          autoFocus: true,
          className: d(y.input, $ && y.error),
          placeholder: s("skill_pdf_input_filelink"),
          value: c,
          onChange: e => {
            u(e);
            C(true);
          },
          onKeyDown: e => R(e)
        }), $ && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "text-s-color-accents-red s-font-small-em flex items-start mt-8",
          children: [reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {
            className: "text-18 p-2 mr-6"
          }), reactJsxRuntimeCoreReexport.jsx("p", {
            children: s("skill_pdf_input_qualified_link")
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "text-s-color-text-secondary s-font-small flex items-start mt-16 mb-4",
          children: [reactJsxRuntimeCoreReexport.jsx(reactCheckCircleIcon_1.CheckCircleIcon, {
            className: "text-18 p-3 mr-4"
          }), reactJsxRuntimeCoreReexport.jsx(textFormatterComponent.textFormatter, {
            text: s("multifiles_label_link_source"),
            replacingMap: {
              source_hosts: arxivDomainConstants.arxivBaseUrls.join(", ")
            },
            replaceTextClassName: "underline",
            customItemRender: w
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "text-s-color-text-secondary s-font-small flex items-start",
          children: [reactJsxRuntimeCoreReexport.jsx(reactCheckCircleIcon_1.CheckCircleIcon, {
            className: "text-18 p-3 mr-4"
          }), reactJsxRuntimeCoreReexport.jsx("p", {
            children: s("multifiles_label_support_file_types", {
              postProcess: "sprintf",
              sprintf: [fileTypeDetectionUtils.imageExtensions.join(", ")]
            })
          })]
        })]
      })
    });
  };
  let C = e => {
    let {
      onSubmit: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let [s, d] = reactCoreLibraryReexport.useState(false);
    let c = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId || "";
    });
    let u = reactFunctionMemoHook.useMemoizedCallback(() => {
      d(true);
      skillEntranceClickTrack.trackSkillEntrance({
        chatId: c,
        entranceType: "pdf_link"
      });
    });
    let p = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (t != null) {
        t(e);
      }
      d(false);
    });
    return {
      handleClickButton: u,
      inputModalElement: reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(E, {
        visible: s,
        title: n("landing_creation_addPDFlink"),
        onHide: () => d(false),
        onSubmit: p
      }), [s, d, t])
    };
  };
  require.d(exports, {
    usePdfLinkInputModal: function () {
      return C;
    }
  });
}