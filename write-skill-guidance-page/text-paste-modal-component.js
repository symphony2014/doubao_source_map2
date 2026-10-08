// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'TextPasteModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 376230
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      visible: t,
      className: n,
      defaultText: r,
      onClose: h,
      currentTemplate: f,
      onConfirm: m
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let [v, _] = reactCoreLibraryReexport.useState(r);
    let b = reactCoreLibraryReexport.useRef(null);
    let y = () => {
      h();
      w("cancel");
    };
    let w = e => {
      _("");
      teaAnalyticsEventTracker.trackEvent("text_paste_popup_click", {
        show_from: f == null ? undefined : f.show_name,
        button_name: e
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        var e;
        teaAnalyticsEventTracker.trackEvent("text_paste_popup_show", {
          show_from: f == null ? undefined : f.show_name
        });
        if ((e = b.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
      visible: t,
      header: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center justify-between",
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "title-ie2BLh",
          children: g("writing_tools_pasteText_modal_title")
        }), reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          onClick: y,
          className: "close-gHY3yy"
        })]
      }),
      className: a("modal-XoCaC2", n),
      centered: true,
      maskClosable: false,
      zIndex: 2000,
      footer: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "footer-fGbr3i",
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "count-BCbdk6",
          children: [reactJsxRuntimeCoreReexport.jsxs("span", {
            children: [g("writing_tools_pasteText_modal_textarea_wordCount"), "："]
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: (v == null ? undefined : v.length) || 0
          })]
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "cancel-writing-paste",
          type: "tertiary",
          onClick: y,
          children: g("cancel_button_title")
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "confirm-writing-paste",
          type: "primary",
          onClick: () => {
            if (m != null) {
              m(v);
            }
            w("save");
          },
          disabled: !(v == null ? undefined : v.length),
          children: g("confirm_button_title")
        })]
      }),
      children: reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
        placeholder: g("writing_tools_pasteText_modal_textarea_placeholder"),
        ref: b,
        className: "textarea-WNxPE9",
        value: v,
        onClick: e => {
          e.stopPropagation();
        },
        onChange: _
      })
    });
  };
  require.d(exports, {
    TextPasteModal: function () {
      return h;
    }
  });
}