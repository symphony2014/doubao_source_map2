// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'SkillGuidanceChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 951605
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var skillChatInputWrapper = require("skill-chat-input-wrapper") /*id: 137475*/;
  var chatInputPopoverHook = require("chat-input-popover-hook") /*id: 493792*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var cssModuleClassNames = require("css-module-class-names") /*id: 33045*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e) {
    let {
      enableDragUpload: x = false,
      className: S,
      leftToolsClassName: C,
      rightToolsClassName: E,
      editorClassName: T,
      leftTools: R,
      rightTools: P,
      customArea: N,
      customAreaClassName: j,
      dragUploadProps: I,
      onClick: M,
      rightSendBtn: D,
      beforeEditorAnchor: Z,
      renderEditor: $,
      sendBtnProps: O,
      toolsPlaceholderRef: A,
      toolsPlaceholderClassName: B,
      testId: F,
      expandBtnStatus: W,
      onClickCollapseBtn: L,
      onClickExpandBtn: V,
      popoverRef: U,
      popoverContent: z,
      popoverVisible: K,
      defaultOpenPopover: G,
      onPopoverVisibleChange: H,
      keepDOMWhenPopoverHide: J,
      mode: X,
      placeholderContent: q
    } = e;
    let {
      inputFocusHighlight: Q
    } = chatLauncherConfigHooks.useInputFocusHighlight();
    let Y = reactCoreLibraryReexport.useRef(null);
    let ee = useElementSizeHook_2.useElementSize(Y);
    let et = {
      "--custom-area-height": `${(ee == null ? undefined : ee.height) ?? 0}px`,
      ...(Q ? {
        "--active-shadow": "0 2px 4px 0 rgba(116, 158, 243, 0.02), 0 4px 12px 0 rgba(102, 188, 253, 0.04), 0 8px 24px 0 rgba(95, 178, 255, 0.17)"
      } : {})
    };
    let {
      expandBtnStatus: en,
      containerRef: ei,
      showPopover: er,
      hidePopover: el,
      onFocus: ea,
      element: eo
    } = chatInputPopoverHook.useChatInputPopover({
      popoverContent: z,
      popoverVisible: K,
      defaultOpenPopover: G,
      onPopoverVisibleChange: H,
      keepDOMWhenPopoverHide: J
    });
    reactCoreLibraryReexport.useImperativeHandle(U, () => ({
      hidePopover: el,
      showPopover: er,
      expandBtnStatus: en
    }));
    let es = reactCoreLibraryReexport.useRef(null);
    let eu = useElementSizeHook_2.useElementSize(es)?.height ?? 0;
    let ed = reactCoreLibraryReexport.useRef(null);
    let ec = reactMergeRefs.useMergeRefs(ed, A);
    let ep = useElementSizeHook_2.useElementSize(ed)?.height ?? 0;
    let ef = useLatestCallbackHook_1.useLatestCallback(e => {
      if (es.current) {
        es.current.textContent = `${e}\u200B`;
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (es.current) {
        es.current.textContent = `${q}\u200B`;
      }
    }, [q]);
    let em = X === "main-tools-top";
    let ev = X === "main-tools-bottom";
    let eh = X === "default_one_line";
    let e_ = eh && eu <= ep;
    let eg = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "relative flex w-full",
      children: [Z, $ == null ? undefined : $({
        className: l("flex-1 w-0 min-w-0 !border-none !bg-transparent", "max-h-[calc(var(--input-guidance-input-container-max-height)-var(--custom-area-height,0px)-36px-16px-14px-10px)]", T),
        onChange: ef,
        onFocus: ea
      })]
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: ei,
      style: et,
      className: l("relative z-0", eh || em ? "rounded-dbx-2xl after:rounded-dbx-2xl" : "rounded-dbx-4xl after:rounded-dbx-4xl", cssModuleClassNames.classNames["input-content-container"], "after:content-[''] after:absolute after:inset-0 after:border-1 after:border-dbx-line-10 after:pointer-events-none", "shadow-dbx-lg", Q && l("focus-within:after:border-dbx-fill-highlight-disable focus-within:shadow-(--active-shadow)", "has-[:active]:after:border-dbx-fill-highlight-disable has-[:active]:shadow-(--active-shadow)", "has-[[data-state=\"active\"]]:after:border-dbx-fill-highlight-disable has-[[data-state=\"active\"]]:shadow-(--active-shadow)")),
      "data-testid": "chat_input",
      onClick: M,
      children: [eo, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l("relative flex flex-col", "max-h-(--input-guidance-input-container-max-height,unset)", "rounded-[inherit]", "border-(--input-guidance-input-container-border)", "bg-(--input-guidance-input-container-background)", S),
        children: [em && reactJsxRuntimeCoreReexport.jsx("div", {
          className: l("shrink-0 mt-12 px-12 z-1 overflow-hidden min-h-32", C),
          children: R
        }), N && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l("relative", j),
          children: [N, reactJsxRuntimeCoreReexport.jsx("div", {
            ref: Y,
            className: "pointer-events-none absolute inset-0"
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l("relative flex flex-col-reverse justify-between items-end", "gap-14 relative", "w-full flex-1 min-h-0 p-10"),
          "data-testid": F,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative flex w-full flex-nowrap justify-between gap-6",
            children: [!em && reactJsxRuntimeCoreReexport.jsx("div", {
              className: l("shrink-0 empty:hidden z-2 pl-2 flex items-center", {
                "min-w-0 flex-1 overflow-hidden": ev
              }, C),
              children: R
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              id: "generic-tools-placeholder",
              ref: ec,
              className: l("relative", {
                "min-w-0 flex-1": !ev,
                "overflow-hidden flex flex-col justify-end": eh
              }, B),
              children: [em && reactJsxRuntimeCoreReexport.jsx("div", {
                className: "flex items-center px-10 py-4",
                children: eg
              }), eh && reactJsxRuntimeCoreReexport.jsx("pre", {
                className: l("absolute bottom-6 left-0 w-full", "whitespace-pre-wrap break-words", "invisible pointer-events-none"),
                ref: es
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: l("flex items-end empty:hidden z-1", E),
              children: reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
                ...O,
                beforeNodes: P,
                customButton: D ?? (O == null ? undefined : O.customButton),
                sendMessageHoverText: "",
                useV3: true
              })
            })]
          }), em ? null : reactJsxRuntimeCoreReexport.jsx("div", {
            className: l("w-full flex", "min-h-(--input-guidance-input-editor-wrapper-min-height,0) px-10 pt-6", {
              "absolute items-center box-content truncate": e_
            }),
            style: e_ ? {
              left: `${ed.current?.offsetLeft ?? 0}px`,
              width: `${ed.current?.clientWidth ?? 0}px`,
              height: `${ed.current?.clientHeight ?? 0}px`
            } : {},
            children: eg
          })]
        })]
      }), x && reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        ...I
      })]
    });
  }
  require.d(exports, {
    SkillGuidanceChatInput: function () {
      return v;
    }
  });
}