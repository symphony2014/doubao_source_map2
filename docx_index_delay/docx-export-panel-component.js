// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 's' to 'reactReduxCore'
// - Resolved require(509563) to 'react-redux-core'
// - Renamed variable 'u' to 'docxEditorBlockRenderer'
// - Resolved require(211843) to 'docx-editor-block-renderer'
// - Renamed variable 'l' to 'dialogConfirmComponent'
// - Resolved require(103822) to 'dialog-confirm-component'
// - Renamed variable 'c' to 'noticeComponent_1'
// - Resolved require(854613) to 'notice-component_1'
// - Renamed variable '_' to 'radioComponent_2'
// - Resolved require(848808) to 'radio-component_2'
// - Renamed variable 'd' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'p' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'm' to 'bearWebSignalService'
// - Resolved require(32433) to 'bear-web-signal-service'
// - Renamed variable 'D' to 'lazyRecordClientvars'
// - Resolved require(112384) to 'lazy-record-clientvars'
// - Renamed variable 'h' to 'lazyConsumerToken'
// - Resolved require(103465) to 'lazy-consumer-token'
// - Renamed variable 'C' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Renamed variable 'k' to 'uiToastManager'
// - Resolved require(117371) to 'ui-toast-manager'
// - Renamed variable 'M' to 'universalButtonWrapper'
// - Resolved require(299462) to 'universal-button-wrapper'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'x' to 'arraySumHelper'
// - Resolved require(218454) to 'array-sum-helper'
// - Renamed variable 'A' to 'arraySumNormalizer'
// - Resolved require(980212) to 'array-sum-normalizer'
// - Renamed variable 'b' to 'docBlockTreeUtils'
// - Resolved require(772264) to 'doc-block-tree-utils'
// - Renamed variable 'L' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'F' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'E' to 'docBlockNestingCalc'
// - Resolved require(311122) to 'doc-block-nesting-calc'
// - Renamed variable 'T' to 'dimensionConstants'
// - Resolved require(53772) to 'dimension-constants'
// - Updated imported property 'h' to 'getColumnWidths' (module 980212)
// - Updated imported property 'V' to 'getBlockNestingInfo' (module 311122)
// - Updated imported property 'yc' to 'contentWidth' (module 53772)
// - Updated imported property 'be' to 'maxWidth' (module 53772)
// - Updated imported property 'Sv' to 'minSize' (module 53772)
// - Updated imported property 'Z' to 'sumArray' (module 218454)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property 'G2' to 'useInjector' (module 211843)
// - Updated imported property 'v' to 'bearSignalService' (module 32433)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'vs' to 'hasParentOfType' (module 772264)
// - Updated imported property 'Am' to 'toastManager' (module 117371)
// - Updated imported property 'zx' to 'UniversalButton' (module 299462)
// - Updated imported property 'BX' to 'globalEventEmitter' (module 267720)
// - Updated imported property 'X9' to 'clientvarEvents' (module 112384)
// - Updated imported property '_' to 'lazyConsumerToken' (module 103465)
// - Updated imported property 'q' to 'NoticeComponent' (module 854613)
// - Updated imported property 'Y' to 'Radio' (module 848808)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 611449
         */
module.exports = function (module, exports, require) {
  var o;
  var a;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var dialogConfirmComponent = require("dialog-confirm-component") /*id: 103822*/;
  var noticeComponent_1 = require("notice-component_1") /*id: 854613*/;
  var radioComponent_2 = require("radio-component_2") /*id: 848808*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var bearWebSignalService = require("bear-web-signal-service") /*id: 32433*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var lazyConsumerToken = require("lazy-consumer-token") /*id: 103465*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  (o = {})[o.NORMAL = 0] = "NORMAL";
  o[o.INFO = 1] = "INFO";
  o[o.ERROR = 2] = "ERROR";
  let f = o;
  (a = {}).DOCX = "docx";
  a.PDF = "pdf";
  let y = a;
  var uiToastManager = require("ui-toast-manager") /*id: 117371*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = "EXPORT_PANEL_TOAST_KEY";
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var arraySumNormalizer = require("array-sum-normalizer") /*id: 980212*/;
  var docBlockTreeUtils = require("doc-block-tree-utils") /*id: 772264*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockNestingCalc = require("doc-block-nesting-calc") /*id: 311122*/;
  var dimensionConstants = require("dimension-constants") /*id: 53772*/;
  function I(e, i) {
    let r = arraySumNormalizer.getColumnWidths(e.snapshot);
    let {
      indentWidth: o
    } = docBlockNestingCalc.getBlockNestingInfo(e);
    return (i ? dimensionConstants.contentWidth : dimensionConstants.maxWidth) - o - arraySumHelper.sumArray(r) < 0;
  }
  function S(e) {
    if (e === "pdf") {
      return "PDF";
    } else {
      return "Word";
    }
  }
  function w(e, i, r, o) {
    docxEventCollector.wrappedCollector("ccm_docs_export_as_set_click", {
      click: e ? "confirm" : "cancel",
      export_type: S(i),
      is_adaptive: r !== 0,
      target: "none",
      export_content: e ? o ? "text_and_comment" : "text" : undefined
    });
  }
  let {
    suite: {
      setDocxExportInfo: N
    }
  } = platformDocUtils.Nwg;
  var R = reactReduxCore.connect(e => ({
    docxExportInfo: platformDocUtils.cgm(e)
  }), {
    setDocxExportInfo: N
  })(function (e) {
    let {
      docxExportInfo: i,
      blockManager: r,
      setDocxExportInfo: o
    } = e;
    let [a, n] = reactCoreLibraryReexport.useState(0);
    let [s, N] = reactCoreLibraryReexport.useState("");
    let [R, P] = reactCoreLibraryReexport.useState([f.NORMAL, f.NORMAL]);
    let [B, O] = reactCoreLibraryReexport.useState(false);
    let j = docxEditorBlockRenderer.useInjector(bearWebSignalService.bearSignalService);
    let Z = e => {
      N(e);
      O(true);
      docxEventCollector.wrappedCollector("ccm_docs_export_as_set_view", {
        export_type: S(e)
      });
    };
    let W = () => {
      let e = function (e) {
        let i = function (e) {
          let i = [...e.modelService.allBlockModels].filter(e => e.type === docBlockTypeConstants.blockTypeConstants.TABLE && !docBlockTreeUtils.hasParentOfType(e, [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN]));
          return [i.filter(e => I(e, false)), i.filter(e => I(e, true))];
        }(e);
        let r = [f.NORMAL, f.NORMAL];
        for (let e = 0; e < i.length; ++e) {
          if (i[e].length) {
            r[e] = f.INFO;
          }
          let o = e ? dimensionConstants.contentWidth : dimensionConstants.maxWidth;
          for (let a of i[e]) {
            let {
              indentWidth: i
            } = docBlockNestingCalc.getBlockNestingInfo(a);
            if (function (e, i) {
              let r = arraySumNormalizer.getColumnWidths(e.snapshot);
              let o = arraySumHelper.sumArray(r);
              let a = 0;
              let n = [];
              let s = i / o;
              for (let e of r) {
                let i = Math.round(e * s);
                if (i <= dimensionConstants.minSize) {
                  a += dimensionConstants.minSize - i;
                } else {
                  n.push(i);
                }
              }
              if (a > 0 && n.length > 0) {
                let e = Math.min(...n);
                let i = arraySumHelper.sumArray(n);
                return Math.round(e * (i - a) / i) < dimensionConstants.minSize;
              }
              return false;
            }(a, o - i)) {
              r[e] = f.ERROR;
              break;
            }
          }
        }
        return r;
      }(r);
      uiToastManager.toastManager.destroy(v);
      P(e);
      Z(y.PDF);
    };
    let z = () => {
      uiToastManager.toastManager.info({
        content: t("LarkCCM_Docs_Export_Scanning_Toast"),
        duration: null,
        showCloseIcon: false,
        key: v,
        action: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          type: "text",
          color: "primary",
          onClick: () => uiToastManager.toastManager.destroy(v),
          children: t("LarkCCM_Docs_Export_Cancel_Button")
        })
      });
      if (r.lazyRecordStatus?.isAllDone) {
        W();
        return;
      }
      docxEditorEventConstantsAndManager.globalEventEmitter.once(lazyRecordClientvars.clientvarEvents.CLIENTVAR_APPLY_ALL_DONE, W);
      let i = r.editorAPI.getService(lazyConsumerToken.lazyConsumerToken);
      if (i != null) {
        i.startApplyAllMode();
      }
    };
    let $ = () => {
      Z(y.DOCX);
    };
    reactCoreLibraryReexport.useEffect(() => {
      let {
        type: e
      } = i;
      switch (e) {
        case y.DOCX:
          $();
          break;
        case y.PDF:
          z();
      }
    }, [i]);
    return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(dialogConfirmComponent.Dialog, {
      className: "docx-export-panel",
      visible: B,
      title: s === y.DOCX ? t("LarkCCM_Docs_Export_Word_Title") : t("LarkCCM_Docs_Export_PDF_Title"),
      onCancel: () => {
        w(false, s, R[a]);
        O(false);
      },
      onOk: () => {
        if (j) {
          j.docxExportFileSignal.next([s, !!a]);
        }
        w(true, s, R[a], !!a);
        O(false);
      },
      okText: t("LarkCCM_Docs_Export_Button"),
      cancelText: t("LarkCCM_Docs_Export_Cancel_Button"),
      width: 720,
      destroyOnClose: true,
      onAfterClose: () => {
        o({
          type: ""
        });
        N("");
        P([f.NORMAL, f.NORMAL]);
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "docx-export-panel__content",
        children: [s === y.PDF && R[a] !== f.NORMAL && reactJsxRuntimeCoreReexport.jsx(noticeComponent_1.NoticeComponent, {
          className: "docx-export-panel__content__notice",
          message: R[a] === f.INFO ? t("LarkCCM_Docs_ExportChart_Compress_Toast_Toast") : t("LarkCCM_Docs_ExportChart_TooWide_Toast"),
          type: R[a] === f.INFO ? "info" : "error"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "docx-export-panel__content__range",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "range-context",
            children: t("LarkCCM_Docs_Export_Scope_Options")
          }), reactJsxRuntimeCoreReexport.jsxs(radioComponent_2.Radio.Group, {
            onChange: e => n(e),
            value: a,
            children: [reactJsxRuntimeCoreReexport.jsx(radioComponent_2.Radio, {
              value: 1,
              children: t("LarkCCM_Docs_Export_Scope_TextCmt_Options")
            }), reactJsxRuntimeCoreReexport.jsx(radioComponent_2.Radio, {
              value: 0,
              children: t("LarkCCM_Docs_Export_Scope_Text_Options")
            })]
          })]
        })]
      })
    }), document.body);
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return R;
    }
  });
}