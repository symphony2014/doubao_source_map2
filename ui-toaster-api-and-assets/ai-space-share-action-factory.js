// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'useAiSpaceShareAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 937537
         */
module.exports = function (module, exports, require) {
  var samanthaAiSpaceApiServices = require("samantha-ai-space-api-services") /*id: 563338*/;
  var fileReviewStatusUtils = require("file-review-status-utils") /*id: 282595*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceControllerContext = require("ai-space-controller-context") /*id: 129675*/;
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var p = clipboardCopyHelper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var _ = classnamesUtils;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var successDialogComponent = require("success-dialog-component") /*id: 825396*/;
  var aiSpaceShareTitleIconComponent = require("ai-space-share-title-icon-component") /*id: 716603*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var w = "data-secure-tip-gA3D4M";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      t: i,
      onOk: t,
      onCancel: n,
      allShareNodes: a,
      nodeCount: o
    } = e;
    teaAnalyticsEventTracker.trackEvent("share_card_result_show");
    let s = a.every(e => e.type === fileEntityTypeConstants.fileEntityTypes.Directory);
    return modalConfirmDialogManager.ModalConfirmDialog.confirm(successDialogComponent.getDialogProps({
      t: i,
      icon: null,
      title: i(s ? "aispace_shareFolder_header" : "aispace_share_file"),
      maskClosable: false,
      okText: i("aispace_create_share"),
      cancelText: i("cancel"),
      onOk: () => {
        if (t != null) {
          t();
        }
        teaAnalyticsEventTracker.trackEvent("share_card_result_click", {
          button_name: "create_share"
        });
      },
      okButtonProps: {
        "data-testid": "ai_space_file_item_create_share_confirm_btn"
      },
      onCancel: n,
      cancelButtonProps: {
        "data-testid": "ai_space_file_item_create_share_cancel_btn"
      },
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: _(w, "-mt-4 mb-20"),
          children: i("share_risk_notice")
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "file-info-Af9XMU",
          "data-testid": "ai_space_file_item_create_share_preview_info",
          children: [reactJsxRuntimeCoreReexport.jsx(aiSpaceShareTitleIconComponent.renderShareIcon, {
            iconClassV1: "!text-32",
            iconClassV2: "!text-26 p-3",
            allShareNodes: a,
            nodeCount: o
          }), reactJsxRuntimeCoreReexport.jsx(aiSpaceShareTitleIconComponent.renderShareTitle, {
            className: "w-1 shrink grow basis-1",
            t: i,
            firstShareNode: a[0],
            nodeCount: o
          })]
        })]
      })
    }));
  };
  let y = e => {
    let {
      t: i,
      onOk: t,
      onCancel: n,
      shareId: a,
      spaceController: o,
      hasInvalid: l
    } = e;
    let c = o.generateShareLink(a);
    return modalConfirmDialogManager.ModalConfirmDialog.confirm(successDialogComponent.SuccessDialogWithIcon({
      t: i,
      icon: null,
      title: i("aispace_success_create_share_link"),
      description: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "share-link-zKCXn4",
          "data-testid": "ai_space_file_item_create_share_link_text",
          children: c
        }), l && reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mt-6",
          children: i("aispace_reject_some_files")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: _(w, "text-center mt-6"),
          children: i("share_risk_notice")
        })]
      }),
      onCancel: n,
      footer: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        className: "!ml-0 w-full !max-w-full",
        "data-testid": "ai_space_file_item_create_share_copy_link_btn",
        type: "primary",
        onClick: () => {
          p(c);
          samanthaToastFactory.toastInstance.success(i("aispace_share_link_copied"));
          if (t != null) {
            t();
          }
          teaAnalyticsEventTracker.trackEvent("share_card_result_click", {
            share_id: `${a || ""}`,
            button_name: "copy_link"
          });
        },
        children: i("aispace_copy_link")
      })
    }));
  };
  let S = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let i = aiSpaceControllerContext.useSpaceController();
    let {
      disableNode: t
    } = aiSpaceStoreManager.useAiSpaceStore.getState();
    return {
      createAiSpaceShare: o => {
        let {
          selectedNodeIds: c,
          selectedFiles: d,
          reportParams: u = {}
        } = o;
        if (!(d == null ? undefined : d.length)) {
          return;
        }
        if (d.every(e => fileReviewStatusUtils.hasFailedStatus(e))) {
          t(d.map(e => e.id));
          samanthaToastFactory.toastInstance.warning(e("aispace_unable_to_share_rejectall"));
          return;
        }
        let p = null;
        let m = null;
        let _ = {
          t: e,
          allShareNodes: d,
          nodeCount: c.length,
          onOk: async () => {
            try {
              if (p != null) {
                p.update({
                  ..._,
                  type: "confirm",
                  confirmLoading: true
                });
              }
              let {
                shareId: t
              } = await i.createShare(c, {
                reportParams: u
              });
              if (p != null) {
                p.destroy();
              }
              m = y({
                t: e,
                shareId: t,
                hasInvalid: d.some(e => !fileReviewStatusUtils.isReviewSuccess(e)),
                spaceController: i,
                onOk: () => {
                  if (m != null) {
                    m.destroy();
                  }
                },
                onCancel: () => {
                  if (m != null) {
                    m.destroy();
                  }
                }
              });
            } catch (i) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "AISpaceController_CreateShareApiError",
                error: i
              });
              samanthaAiSpaceApiServices.handleAiSpaceError({
                t: e,
                error: i,
                defaultTip: e("aispace_sharing_failed")
              });
            }
          },
          onCancel: () => {
            teaAnalyticsEventTracker.trackEvent("file_function_status", {
              ...u,
              button_name: "share",
              success: "0",
              error_code: "cancel"
            });
            if (p != null) {
              p.destroy();
            }
          }
        };
        p = b(_);
      }
    };
  };
  require.d(exports, {
    useAiSpaceShareAction: function () {
      return S;
    }
  });
}