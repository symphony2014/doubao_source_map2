// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getCloseButtonConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 126233
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var _ = {
    container: "container-vHAI1W",
    trigger: "trigger-A0J4fP",
    active: "active-ZTdvXd",
    body: "body-F_J71h",
    title: "title-yT2iWb",
    content: "content-uT_cna",
    actions: "actions-ORMgrN",
    info: "info-DX1p1s",
    check: "check-P1EY5q",
    text: "text-S0OJzi",
    buttons: "buttons-ck8lQL",
    "cancel-btn": "cancel-btn-Jl7sK3",
    cancelBtn: "cancel-btn-Jl7sK3"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      className: n,
      style: o,
      children: i,
      i18nConfig: r,
      onCancel: a,
      onConfirm: l,
      onVisibleChange: c,
      onCheckedChange: v
    } = e;
    let [f, g] = reactCoreLibraryReexport.useState(false);
    let b = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (c != null) {
        c(f);
      }
    }, [f]);
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      className: d(_.container, n),
      style: o,
      onClickOutSide: () => {
        g(false);
      },
      visible: f,
      trigger: "custom",
      showScroller: false,
      iconSize: "middle",
      showArrow: false,
      wrapWhenSpecial: false,
      highlightWhenChecked: false,
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _.body,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.title,
          children: r == null ? undefined : r.title
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.content,
          children: r == null ? undefined : r.content
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: _.actions,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: _.info,
            children: reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
              className: _.check,
              onChange: e => {
                b.current = !!e.target.checked;
                if (v != null) {
                  v(b.current);
                }
              },
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: _.text,
                children: r == null ? undefined : r.warnText
              })
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: _.buttons,
            children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              size: "small",
              type: "tertiary",
              className: _["cancel-btn"],
              onClick: () => {
                g(false);
                if (a != null) {
                  a({
                    closeIntercept: b.current
                  });
                }
              },
              children: r == null ? undefined : r.cancelText
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              size: "small",
              type: "primary",
              className: _["confirm-btn"],
              onClick: () => {
                g(false);
                if (l != null) {
                  l({
                    closeIntercept: b.current
                  });
                }
              },
              children: r == null ? undefined : r.confirmText
            })]
          })]
        })]
      }),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: d(_.trigger, {
          [_.active]: f
        }),
        onClick: () => g(e => !e),
        children: i
      })
    });
  };
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var updateUserDocChatLayoutMode = require("update-user-doc-chat-layout-mode") /*id: 368269*/;
  var userPreferenceStore = require("user-preference-store") /*id: 292003*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var flowRevisionServiceName = require("flow-revision-service-name") /*id: 934786*/;
  var docxFlowCommentStore = require("docx-flow-comment-store") /*id: 822624*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var flowPermissionHooks = require("flow-permission-hooks") /*id: 930373*/;
  var docCommentShownStateUtil = require("doc-comment-shown-state-util") /*id: 814673*/;
  var reactCanvasEventsContext = require("react-canvas-events-context") /*id: 578669*/;
  function W(e) {
    let {
      docId: n,
      docRef: o
    } = e;
    let s = o == null ? undefined : o.current;
    let c = reactCanvasEventsContext.useCanvasEvents();
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let u = writeConfigManager.WriteConfigManager.useNeedRevisionGuidanceClose();
    let m = writeConfigManager.WriteConfigManager.useDirectAcceptRevisionDefault();
    let {
      isEditable: p
    } = flowPermissionHooks.usePermissions();
    let _ = docxFlowCommentStore.useDocxCommentStore(e => e.revisionList, deepEqualityUtil_1.isDeepEqual);
    let W = !isEmptyUtil.isEmpty(_);
    let I = reactReduxExports.useSelector(e => {
      var n;
      return (n = objectPathGetDefault.getObjectPathDefault(e, "docx.comment.commentPanelShown")) !== null && n !== undefined && n;
    });
    let D = userPreferenceStore.userPreferenceStore(e => {
      return !!e.settings?.show_otter_exit_revision_tips;
    });
    let Z = W && u && !userAgentDeviceDetector.isMobile() && !D && p && !m;
    let F = () => {
      c.outputPreviewClick({
        buttonName: "close"
      });
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      updateUserDocChatLayoutMode.updateUserDocChatLayoutMode(n, chatSkillInputConstants.SkillDisplayType.Avatar);
    };
    let P = () => {
      userPreferenceStore.userPreferenceStore.getState().setUserPreferenceSync({
        show_otter_exit_revision_tips: true
      });
    };
    let A = async () => {
      var n;
      if (!I) {
        let e = docxFlowCommentStore.toggleCommentPanel(true);
        if (e) {
          docCommentShownStateUtil.setDocCommentShown(e);
        }
      }
      let o = lastElementHelper.getLastElement(_)?.id;
      let i = s == null ? undefined : (n = s.blockManager) === null || n === undefined ? undefined : n.editorAPI.getService(flowRevisionServiceName.revisionServiceName);
      if (o && i) {
        await promiseAsyncUtilities.createDelayedPromise(500);
        i.activateRevision(o, undefined, docxCommentConstants.commentSourceTypes.AiStreaming);
      }
    };
    if (Z) {
      return {
        type: "custom",
        key: "close",
        element: reactJsxRuntimeCoreReexport.jsx(v, {
          onConfirm: e => {
            let {
              closeIntercept: n
            } = e;
            if (n) {
              P();
            }
            F();
            if (s != null) {
              s.bizEvents.emit("behavior.revision-panel.close-doc-canvas-popup-click", {
                buttonName: "close"
              });
            }
          },
          onCancel: e => {
            let {
              closeIntercept: n
            } = e;
            if (n) {
              P();
            }
            A();
            if (s != null) {
              s.bizEvents.emit("behavior.revision-panel.close-doc-canvas-popup-click", {
                buttonName: "confirm"
              });
            }
          },
          onVisibleChange: e => {
            if (e) {
              if (s != null) {
                s.bizEvents.emit("behavior.revision-panel.close-doc-canvas-popup-show");
              }
            }
          },
          onCheckedChange: () => {
            if (s != null) {
              s.bizEvents.emit("behavior.revision-panel.close-doc-canvas-popup-click", {
                buttonName: "no_more_notice"
              });
            }
          },
          i18nConfig: {
            title: d("doc_aiChanges_closeConfirm_header", {
              s_number: _.length,
              num: _.length
            }),
            content: d("doc_aiChanges_closeConfirm_desc"),
            warnText: d("doc_aiChanges_closeConfirm_noAsk"),
            cancelText: d("doc_aiChanges_closeConfirm_btn_confirm"),
            confirmText: d("doc_aiChanges_closeConfirm_btn_close")
          },
          children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {})
        })
      };
    } else {
      return {
        type: "icon",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
        tooltip: d("confirm_button_yes"),
        extraProps: {
          "data-testid": "container_inner_close_btn"
        },
        onClick: F
      };
    }
  }
  require.d(exports, {
    getCloseButtonConfig: function () {
      return W;
    }
  });
}