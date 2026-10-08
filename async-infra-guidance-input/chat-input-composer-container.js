// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'ChatInputComposer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 592237
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatInputExpandBtn = require("chat-input-expand-btn") /*id: 573547*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var skillChatInputWrapper = require("skill-chat-input-wrapper") /*id: 137475*/;
  var chatInputPopoverHook = require("chat-input-popover-hook") /*id: 493792*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var skillChatInputHook = require("skill-chat-input-hook") /*id: 219869*/;
  var chatEditorStyles = require("chat-editor-styles") /*id: 911723*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      className: n,
      leftToolsClassName: l,
      rightToolsClassName: h,
      editorClassName: _,
      customAreaClassName: g,
      testId: y,
      customArea: k,
      renderEditor: w,
      beforeEditorAnchor: b,
      leftTools: x,
      rightTools: S,
      rightSendBtn: C,
      toolsPlaceholderRef: E,
      toolsPlaceholderClassName: T,
      expandBtnStatus: R,
      expandBtnText: P,
      onClickCollapseBtn: N,
      onClickExpandBtn: j,
      popoverRef: I,
      sendBtnProps: M,
      enableDragUpload: D = false,
      dragUploadProps: Z,
      onClick: $,
      ...O
    } = e;
    skillChatInputHook.useSkillBarTrack(O);
    let {
      expandBtnStatus: A,
      containerRef: B,
      showPopover: F,
      hidePopover: W,
      onClickCollapseBtn: L,
      onClickExpandBtn: V,
      onFocus: U,
      element: z
    } = chatInputPopoverHook.useChatInputPopover({
      ...O,
      className: chatEditorStyles.editorStyles["input-popover"]
    });
    reactCoreLibraryReexport.useImperativeHandle(I, () => ({
      hidePopover: W,
      showPopover: F,
      expandBtnStatus: A
    }));
    let K = reactCoreLibraryReexport.useRef(null);
    let G = useElementSizeHook_2.useElementSize(K);
    let H = {
      "--custom-area-height": `${(G == null ? undefined : G.height) ?? 0}px`
    };
    let {
      skillToolLayoutV2: J
    } = chatLauncherConfigHooks.useSkillToolLayout();
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: B,
        className: a(chatEditorStyles.editorStyles["input-content-container"]),
        "data-testid": "chat_input",
        onClick: $,
        children: [z, reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a(chatEditorStyles.editorStyles.container, n),
          children: [k && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: a(chatEditorStyles.editorStyles["custom-area-wrapper"], g),
            children: [k, reactJsxRuntimeCoreReexport.jsx("div", {
              ref: K,
              className: chatEditorStyles.editorStyles.placeholder
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: a(chatEditorStyles.editorStyles["editor-container"]),
            style: H,
            "data-testid": y,
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: chatEditorStyles.editorStyles["editor-wrapper"],
              children: [b, w == null ? undefined : w({
                className: a(chatEditorStyles.editorStyles.editor, _),
                onFocus: U
              }), !J && O.popoverContent && reactJsxRuntimeCoreReexport.jsx(chatInputExpandBtn.ExpandButton, {
                className: "ml-4",
                status: isUndefinedCheck.isUndefined(R) ? A : R,
                text: P,
                onClick: e => {
                  if (e === chatInputExpandBtn.ExpandStatus.Collapse) {
                    V();
                    if (j != null) {
                      j();
                    }
                  } else if (e === chatInputExpandBtn.ExpandStatus.Expand) {
                    L();
                    if (N != null) {
                      N();
                    }
                  }
                }
              })]
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: chatEditorStyles.editorStyles["bottom-wrapper"],
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: a(chatEditorStyles.editorStyles["left-tools-wrapper"], l),
                children: x
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                ref: E,
                className: a(chatEditorStyles.editorStyles["tools-placeholder"], T)
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: a(chatEditorStyles.editorStyles["right-tools-wrapper"], h),
                children: reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
                  ...M,
                  beforeNodes: S,
                  customButton: C ?? (M == null ? undefined : M.customButton)
                })
              })]
            })]
          })]
        }), D && reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
          ...Z
        })]
      })
    });
  };
  require.d(exports, {
    ChatInputComposer: function () {
      return h;
    }
  });
}