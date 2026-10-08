// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'SkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 989348
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var asyncSkillChatInput = require("async-skill-chat-input") /*id: 128080*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var rtlLanguageDetectionHook = require("rtl-language-detection-hook") /*id: 179231*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillChatInputHook = require("skill-chat-input-hook") /*id: 219869*/;
  var chatInputPopoverHook = require("chat-input-popover-hook") /*id: 493792*/;
  var messageEditTrackingHook = require("message-edit-tracking-hook") /*id: 174008*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var chatInputContainer = require("chat-input-container") /*id: 591343*/;
  var autoRetryErrorBoundary = require("auto-retry-error-boundary") /*id: 424863*/;
  var k = {
    container: "container-V_FK3U",
    "editor-container": "editor-container-Dz4DdK",
    editorContainer: "editor-container-Dz4DdK",
    editor: "editor-Fyrtb2",
    "right-tools-wrapper": "right-tools-wrapper-Cxho23",
    rightToolsWrapper: "right-tools-wrapper-Cxho23",
    "chat-input-content-container": "chat-input-content-container-bhesKi",
    chatInputContentContainer: "chat-input-content-container-bhesKi",
    sm: "sm-GXT_4I",
    "grid-container": "grid-container-bqGe3W",
    gridContainer: "grid-container-bqGe3W",
    "left-tools-wrapper": "left-tools-wrapper-PKEymI",
    leftToolsWrapper: "left-tools-wrapper-PKEymI",
    "input-popover": "input-popover-GSjZgA",
    inputPopover: "input-popover-GSjZgA"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => require.e("maps-projection-geo") /*id: 43070*/.then(require.bind(require, "skill-chat-header-component") /*id: 629792*/).then(e => ({
    default: e.SkillHeader
  }))));
  let N = debounceUtil_1_1.debounce(loggerServiceCore.defaultLogger.persist.log.bind(loggerServiceCore.defaultLogger.persist), 300);
  let j = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      skillHeaderVisible: a,
      skillHeaderProps: l,
      customSkillHeader: h,
      customArea: j,
      bottom: T,
      leftTools: P,
      rightTools: O,
      editorVisible: I = true,
      editorProps: R,
      editorRef: D,
      responsiveSize: A,
      onCheckLoadSuccess: M,
      loadSuccessReportParams: Z,
      enableDragUpload: L = false,
      dragUploadProps: F,
      hasBoxShadow: $ = true,
      ...B
    } = e;
    let z = i18nTranslationUtils.useTranslationWithFallback();
    let W = reactCoreLibraryReexport.useRef(null);
    let {
      expandBtnStatus: G,
      ...U
    } = l || {};
    let {
      onFocus: V,
      value: H,
      onChange: K,
      onPaste: J,
      onBlur: X,
      ...q
    } = R || {};
    let {
      expandBtnStatus: Y,
      containerRef: Q,
      showPopover: ee,
      hidePopover: et,
      onClickCollapseBtn: en,
      onClickExpandBtn: ei,
      onFocus: ea,
      element: eo
    } = chatInputPopoverHook.useChatInputPopover({
      ...B,
      className: k["input-popover"]
    });
    let er = reactCoreLibraryReexport.useRef(null);
    let {
      width: el
    } = useElementSizeHook_2.useElementSize(er) || {};
    let es = reactCoreLibraryReexport.useMemo(() => el && el < 480 ? "sm" : A, [el, A]);
    skillChatInputHook.useSkillBarTrack({
      onCheckLoadSuccess: M,
      loadSuccessReportParams: Z
    });
    let ed = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let ec = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return {
        skill_type: ed ? e.activeSkillTypeMap?.[ed] : undefined
      };
    });
    let eu = messageEditTrackingHook.useMessageEditTracker(ed, ec);
    let ep = rtlLanguageDetectionHook.useTextDirection(H && inputToolConverter.extractText(H == null ? undefined : H.data) || "", true);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      showPopover: ee,
      hidePopover: et
    }));
    let eh = reactCoreLibraryReexport.useCallback(e => {
      W.current = e;
      if (isFunctionUtil_1.isFunction(D)) {
        D(e);
      } else if (D) {
        D.current = e;
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(chatInputContainer.ChatInputContainer, {
      className: n,
      disabled: R == null ? undefined : R.disabled,
      hasBoxShadow: $,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s(k["chat-input-content-container"], es && k[es]),
        ref: Q,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          ref: er,
          className: "w-full"
        }), eo, reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(k.container),
          children: [a && !h && reactJsxRuntimeCoreReexport.jsx(S, {
            ...U,
            expandBtnStatus: isUndefinedCheck.isUndefined(G) ? Y : G,
            onClickCollapseBtn: () => {
              var e;
              en();
              if (U != null && (e = U.onClickCollapseBtn) !== null && e !== undefined) {
                e.call(U);
              }
            },
            onClickExpandBtn: () => {
              var e;
              ei();
              if (U != null && (e = U.onClickExpandBtn) !== null && e !== undefined) {
                e.call(U);
              }
            },
            onClick: () => {
              var e;
              ei();
              if (U != null && (e = U.onClick) !== null && e !== undefined) {
                e.call(U);
              }
            }
          }), !!h && reactJsxRuntimeCoreReexport.jsx("div", {
            className: k["custom-skill-header-wrapper"],
            children: h
          }), j && reactJsxRuntimeCoreReexport.jsx("div", {
            className: k["custom-area-wrapper"],
            children: j
          }), I && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: s(k["editor-container"], (P || O) && k["grid-container"]),
            children: [P && reactJsxRuntimeCoreReexport.jsx("div", {
              className: k["left-tools-wrapper"],
              children: P
            }), reactJsxRuntimeCoreReexport.jsx(autoRetryErrorBoundary.AutoRetryBoundary, {
              errorBoundaryName: "chat-input-flow-chat-editor",
              retryTimes: Infinity,
              retryInterval: 1000,
              text: z("loading_error_msg"),
              children: reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInput.AsyncSkillChatInput, {
                ...q,
                onBlur: e => {
                  if (X != null) {
                    X(e);
                  }
                  eu.onBlur();
                },
                onChange: e => {
                  if (K != null) {
                    K(e);
                  }
                  N({
                    eventName: "flow_chat_editor_value_change",
                    meta: {
                      blocks: e.data.map(e => e.type)
                    }
                  });
                  if (eu != null) {
                    eu.onUpdateValue(e, H);
                  }
                },
                onKeyDown: e => {
                  var t;
                  if (R != null && (t = R.onKeyDown) !== null && t !== undefined) {
                    t.call(R, e);
                  }
                },
                onPaste: e => {
                  loggerServiceCore.defaultLogger.persist.log({
                    eventName: "flow_chat_editor_paste"
                  });
                  if (J != null) {
                    J(e);
                  }
                },
                "data-testid": "chat_input_input",
                ref: eh,
                dir: localeDirectionCheck.isRtlLanguage() ? ep : "ltr",
                value: H,
                className: s(k.editor, q.className),
                onClick: () => {
                  var e;
                  if ((e = W.current) !== null && e !== undefined) {
                    e.focus();
                  }
                },
                onFocus: e => {
                  ea();
                  if (V != null) {
                    V(e);
                  }
                  eu.onFocus();
                }
              })
            }), O && reactJsxRuntimeCoreReexport.jsx("div", {
              className: k["right-tools-wrapper"],
              children: O
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            children: T
          })]
        }), L && reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
          ...F
        })]
      })
    });
  });
  require.d(exports, {
    SkillChatInput: function () {
      return j;
    }
  });
}