// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'o' to 'chatSkillExitEventTracker'
// - Resolved require(466492) to 'chat-skill-exit-event-tracker'
// - Renamed variable 'a' to 'focusChatInputOnVisibilityChange'
// - Resolved require(491164) to 'focus-chat-input-on-visibility-change'
// - Renamed variable 's' to 'attachmentStateValidator'
// - Resolved require(151792) to 'attachment-state-validator'
// - Renamed variable 'l' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'u' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'd' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'c' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'b' to 'chatSkillExitHook'
// - Resolved require(123849) to 'chat-skill-exit-hook'
// - Renamed variable 'w' to 'skillGuidanceInput_1'
// - Resolved require(636432) to 'skill-guidance-input_1'
// - Renamed variable '_' to 'skillChatInputHooks'
// - Resolved require(354217) to 'skill-chat-input-hooks'
// - Renamed variable 'C' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'P' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'E' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'O' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'R' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'Z' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'M' to 'chatInputSkillKeydownHandler'
// - Resolved require(299053) to 'chat-input-skill-keydown-handler'
// - Renamed variable 'L' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'F' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Resolved require.e(9866) to 'chat-input-lifecycle'
// - Resolved require.bind(381266) to 'chat-input-event-handler-exports'
// - Updated imported property '_' to 'useCompositionRef' (module 123849)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'UG' to 'useExtractedText' (module 411117)
// - Updated imported property 'p4' to 'setTextValue' (module 411117)
// - Updated imported property 'Fd' to 'getEditorValue' (module 411117)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'O' to 'useChatInputBase' (module 354217)
// - Updated imported property 'c' to 'SkillGuidanceInput' (module 636432)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property '_' to 'useChatInputSkillKeyHandler' (module 299053)
// - Updated imported property 'XG' to 'promptEditorPluginHook' (module 232752)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// - Updated imported property 'd' to 'useFocusChatInput' (module 491164)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'L' to 'useAttachValidator' (module 151792)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'O' to 'trackSkillExitEvent' (module 466492)
// - Updated imported property 'P' to 'EventInputTypes' (module 466492)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sync-input-engine-infra-interactive.075fd8a3.js
         * chunkId: 49765
         * moduleId: 769064
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var focusChatInputOnVisibilityChange = require("focus-chat-input-on-visibility-change") /*id: 491164*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  let h = e => {
    if (typeof e == "string") {
      return e;
    }
    if (typeof e == "object" && e && "type" in e) {
      let t = e.type;
      if (typeof t == "string") {
        return t;
      } else {
        return undefined;
      }
    }
  };
  let p = e => {
    if (typeof e == "object" && e && "placeholder" in e) {
      let {
        placeholder: t
      } = e;
      if (typeof t == "string") {
        return t;
      } else {
        return undefined;
      }
    }
  };
  let f = e => {
    if (typeof e == "object" && e && "allowEmptyWithAttachments" in e) {
      let {
        allowEmptyWithAttachments: t
      } = e;
      if (typeof t == "boolean") {
        return t;
      } else {
        return undefined;
      }
    }
  };
  let g = e => {
    if (typeof e == "symbol") {
      return {
        kind: "plugin",
        id: e
      };
    }
    let t = h(e);
    let n = p(e);
    let r = f(e);
    if (t === "editor") {
      return {
        kind: "editor",
        placeholder: n,
        allowEmptyWithAttachments: r
      };
    } else {
      return {
        kind: "textarea",
        placeholder: n,
        allowEmptyWithAttachments: r
      };
    }
  };
  let m = e => e.kind === "plugin";
  let v = e => e.kind === "editor";
  let y = e => e.kind === "textarea";
  var chatSkillExitHook = require("chat-skill-exit-hook") /*id: 123849*/;
  var skillGuidanceInput_1 = require("skill-guidance-input_1") /*id: 636432*/;
  var skillChatInputHooks = require("skill-chat-input-hooks") /*id: 354217*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  let S = e => {
    let {
      key: t
    } = e;
    return t === "Escape" || e.keyCode === 27;
  };
  let x = e => {
    let {
      source: t,
      chatId: n,
      activeSkillType: i,
      onKeyDown: o
    } = e;
    return reactCoreLibraryReexport.useCallback(e => {
      o(e);
    }, [i, n, o, t]);
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => {
    let {
      className: t,
      chatId: n,
      skill: r,
      controllerRef: i,
      placeholder: o,
      onPaste: a,
      onSubmit: s,
      onCloseSkillEvent: l,
      onBlur: u,
      allowEmptySubmit: d,
      attachmentCanNotSend: c
    } = e;
    let h = chatSkillExitHook.useCompositionRef();
    let p = x({
      source: "textarea",
      chatId: n,
      activeSkillType: r == null ? undefined : r.skill_type,
      onKeyDown: e => {
        if (S(e) && !e.shiftKey && !e.altKey && !h.current) {
          var t;
          if ((t = e.preventDefault) !== null && t !== undefined) {
            t.call(e);
          }
          chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(n || "");
          if (l != null) {
            l();
          }
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(T, {
      className: t,
      chatId: n,
      controllerRef: i,
      placeholder: o,
      onPaste: a,
      onSubmit: s,
      onCloseSkillEvent: l,
      onBlur: u,
      handleKeyDown: p,
      allowEmptySubmit: d,
      attachmentCanNotSend: c
    });
  };
  let T = e => {
    let {
      className: t,
      controllerRef: n,
      placeholder: i,
      onChange: o,
      onSubmit: a,
      onPaste: s,
      onBlur: l,
      handleKeyDown: u,
      allowEmptySubmit: d,
      attachmentCanNotSend: c,
      skill: h
    } = e;
    let p = chatInputStoreHelpers.useExtractedText();
    let f = reactCoreLibraryReexport.useCallback(e => chatInputStoreHelpers.setTextValue(e), []);
    let {
      textAreaProps: g
    } = skillChatInputHooks.useChatInputBase({
      onSubmit: () => a == null ? undefined : a(),
      value: p,
      setValue: f,
      clearInputOnSubmit: false,
      allowEmpty: d,
      attachmentCanNotSend: c
    });
    let m = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(n, () => ({
      focus: e => {
        var t;
        var n;
        var r;
        var i;
        if ((n = m.current) !== null && n !== undefined && (t = n.focus) !== null && t !== undefined) {
          t.call(n);
        }
        if (typeof (e == null ? undefined : e.toIndex) == "number") {
          if ((i = m.current) !== null && i !== undefined && (r = i.setSelectionRange) !== null && r !== undefined) {
            r.call(i, e.toIndex, e.toIndex);
          }
        }
      },
      blur: () => {
        var e;
        var t;
        if ((t = m.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.blur) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t);
        }
      }
    }));
    let v = skillGuidanceInput_1.SkillGuidanceInput({
      disabled: false,
      readonly: false,
      placeholder: i,
      value: p,
      onChange: e => {
        chatInputStoreHelpers.setTextValue(e);
        if (o != null) {
          o(e);
        }
      },
      onBlur: l,
      onPaste: s,
      onKeyDown: e => {
        if (u != null) {
          u(e);
        }
        g.onKeyDown(e);
      },
      skill: h
    }, m);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex min-h-24 w-full flex-col items-stretch",
      children: v({
        className: t,
        onChange: o
      })
    });
  };
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  let j = e => {
    if (e.kind === "plugin") {
      return `plugin:${e.id.description ?? ""}`;
    } else {
      return `kind:${e.kind}`;
    }
  };
  let D = e => {
    let {
      chatId: t,
      promptKey: n,
      textBeforeSwitch: r
    } = e;
    return n === "plugin:music-assistant-prompt-editor" && t !== "" && r === "";
  };
  let N = (e, t) => {
    let n = j(t);
    let i = reactCoreLibraryReexport.useRef({});
    let o = reactCoreLibraryReexport.useRef({});
    let a = reactCoreLibraryReexport.useRef({
      textBeforeSwitch: ""
    });
    let s = reactCoreLibraryReexport.useRef(0);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let t = o.current;
      let r = t.chatId !== e;
      let i = t.promptKey !== undefined && t.promptKey !== n;
      o.current = {
        chatId: e,
        promptKey: n
      };
      if (!r && i) {
        a.current = {
          chatId: e,
          promptKey: n,
          textBeforeSwitch: inputToolConverter.extractText(chatInputStoreHelpers.getEditorValue().data).trim()
        };
      }
    }, [e, n]);
    reactCoreLibraryReexport.useEffect(() => {
      let o = ++s.current;
      let l = i.current;
      let u = l.chatId !== e;
      let d = l.promptKey !== undefined && l.promptKey !== n;
      i.current = {
        chatId: e,
        promptKey: n
      };
      if (u || !d) {
        return;
      }
      let c = a.current;
      if (D({
        chatId: c.chatId ?? "",
        promptKey: c.promptKey ?? "",
        textBeforeSwitch: c.textBeforeSwitch
      })) {
        return;
      }
      let h = chatInputStoreHelpers.getEditorValue();
      if (s.current !== o || h.data.length === 1 && typeof h.data[0].type == "string" && h.data[0].type === "Text") {
        return;
      }
      let p = inputToolConverter.extractText(h.data);
      chatInputStoreHelpers.setTextValue(p);
    }, [e, n]);
  };
  let A = (e, t) => {
    let n = j(t);
    let i = reactCoreLibraryReexport.useRef({});
    let o = reactCoreLibraryReexport.useRef(0);
    reactCoreLibraryReexport.useEffect(() => {
      let t = ++o.current;
      let r = i.current;
      let a = r.chatId !== e;
      let s = r.promptKey !== undefined && r.promptKey !== n;
      i.current = {
        chatId: e,
        promptKey: n
      };
      if (a || !s) {
        return;
      }
      let l = chatStoreManager.getStoreState("chatInputStore").activeSkillFromMap[e];
      if ((l == null ? undefined : l.skillFrom) !== chatStatusActionTypes.chatActionTypes.Quote) {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(n => {
          if (o.current !== t) {
            return;
          }
          let r = chatStoreManager.getStoreState("chatInputStore").activeSkillFromMap[e];
          if ((r == null ? undefined : r.skillFrom) !== chatStatusActionTypes.chatActionTypes.Quote) {
            if (n != null) {
              n.clearRefContents(e, {
                retainDisableRef: true
              });
            }
          }
        });
      }
    }, [e, n]);
  };
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  let I = e => {
    let {
      className: t,
      chatId: n,
      chatType: r,
      trackParams: i,
      reportParams: o,
      skill: a,
      controllerRef: s,
      pluginIdentifier: l,
      onPaste: u,
      onSubmit: d,
      onCloseSkillEvent: c,
      onBlur: h,
      allowEmptySubmit: p,
      attachmentCanNotSend: f
    } = e;
    let g = chatInputStoreHelpers.useEditorValue();
    let {
      handleKeyDown: m
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: g,
      onSubmit: d,
      onCloseSkillEvent: c,
      allowEmptySubmit: p,
      attachmentCanNotSend: f
    });
    let v = x({
      source: "plugin",
      chatId: n,
      activeSkillType: a == null ? undefined : a.skill_type,
      onKeyDown: e => m(e)
    });
    return reactJsxRuntimeCoreReexport.jsx(B, {
      className: t,
      chatId: n,
      chatType: r,
      trackParams: i,
      reportParams: o,
      skill: a,
      controllerRef: s,
      pluginIdentifier: l,
      value: g,
      onPaste: u,
      onSubmit: d,
      onCloseSkillEvent: c,
      onBlur: h,
      handleKeyDown: v
    });
  };
  let B = e => {
    let {
      className: t,
      chatId: n,
      chatType: i,
      trackParams: o,
      reportParams: a,
      skill: s,
      controllerRef: l,
      pluginIdentifier: u,
      value: d,
      onChange: c,
      onPaste: h,
      onSubmit: p,
      onCloseSkillEvent: f,
      onBlur: g,
      handleKeyDown: m
    } = e;
    let {
      plugin: v,
      loading: y
    } = chatPluginIocManager.promptEditorPluginHook(u);
    let b = reactCoreLibraryReexport.useCallback(e => {
      if (c != null) {
        c(e);
      }
    }, [c]);
    if (y || !(v == null ? undefined : v.Content)) {
      return null;
    }
    let w = v.Content;
    return reactJsxRuntimeCoreReexport.jsx(w, {
      className: t,
      chatId: n,
      chatType: i,
      handleKeyDown: m,
      skill: s,
      trackParams: o,
      reportParams: a,
      controllerRef: l,
      value: d,
      onChange: b,
      onPaste: h,
      onSubmit: p,
      onCloseSkillEvent: f,
      onBlur: g
    });
  };
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  let K = e => {
    let {
      className: t,
      chatId: n,
      controllerRef: r,
      skill: i,
      onSubmit: o,
      onCloseSkillEvent: a,
      onBlur: s,
      placeholder: l,
      allowEmptySubmit: u,
      attachmentCanNotSend: d
    } = e;
    let c = chatInputStoreHelpers.useEditorValue();
    let {
      handleKeyDown: h
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: c,
      onSubmit: o,
      onCloseSkillEvent: a,
      allowEmptySubmit: u,
      attachmentCanNotSend: d
    });
    let p = x({
      source: "editor",
      chatId: n,
      activeSkillType: i == null ? undefined : i.skill_type,
      onKeyDown: e => h(e)
    });
    return reactJsxRuntimeCoreReexport.jsx(z, {
      className: t,
      chatId: n,
      controllerRef: r,
      skill: i,
      onSubmit: o,
      onCloseSkillEvent: a,
      onBlur: s,
      placeholder: l,
      handleKeyDown: p
    });
  };
  let z = e => {
    let {
      className: t,
      controllerRef: n,
      placeholder: i,
      onChange: o,
      onBlur: a,
      handleKeyDown: s
    } = e;
    let l = chatInputStoreHelpers.useEditorValue();
    let u = reactCoreLibraryReexport.useCallback(e => {
      let t = inputToolConverter.extractText(e.data);
      chatInputStoreHelpers.setEditorValue(e);
      if (o != null) {
        o(t);
      }
    }, [o]);
    let d = reactCoreLibraryReexport.useCallback(e => {
      if (n) {
        n.current = {
          focus: t => {
            var n;
            if (e == null) {
              return undefined;
            } else if ((n = e.focus) === null || n === undefined) {
              return undefined;
            } else {
              return n.call(e, t);
            }
          },
          blur: () => {
            var t;
            if (e == null) {
              return undefined;
            } else if ((t = e.blur) === null || t === undefined) {
              return undefined;
            } else {
              return t.call(e);
            }
          }
        };
      }
    }, [n]);
    let {
      renderEditor: c
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: false,
        placeholder: i,
        value: l,
        onChange: u,
        onKeyDown: s,
        onBlur: a
      },
      useV3: true,
      forwardedRef: d
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex min-h-24 w-full flex-col items-stretch",
      children: c({
        className: t,
        onChange: o
      })
    });
  };
  let U = e => {
    var t;
    let {
      className: h,
      controllerRef: p,
      chatId: f,
      chatType: b,
      promptType: w,
      trackParams: _,
      reportParams: C,
      skill: P,
      onSubmit: S,
      onPromptReady: x,
      isDisabled: T = false
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (x != null) {
        x();
      }
    }, []);
    focusChatInputOnVisibilityChange.useFocusChatInput({
      needFocus: !T
    });
    let O = g(w);
    N(f, O);
    A(f, O);
    let R = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: f,
      skillType: P == null ? undefined : P.skill_type
    });
    let Z = (t = O.allowEmptyWithAttachments) === null || t === undefined || t;
    let j = chatFgStoreHooks.getSourceValue("auto_set_ref_node", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: "1"
    }) === "0";
    let {
      success: D
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: R ?? [],
      scene: "sendMessageButton",
      submitIgnoreUploadStatus: j
    });
    let M = !isEmptyUtil.isEmpty(R) && !D;
    let L = Z && !isEmptyUtil.isEmpty(R) && D;
    let B = useLatestCallbackHook_1.useLatestCallback(async e => {
      let {
        files: t
      } = e.clipboardData;
      let r = e.clipboardData.getData("text");
      let i = {
        event: e,
        trimText: r.trim(),
        text: r,
        files: t,
        isValidLink: false
      };
      await require.e("chat-input-lifecycle") /*id: 9866*/.then(require.bind(require, "chat-input-event-handler-exports") /*id: 381266*/).then(e => {
        let {
          emitPaste: t
        } = e;
        return t(i);
      });
    });
    let F = useLatestCallbackHook_1.useLatestCallback(() => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: chatSkillExitEventTracker.EventInputTypes.Keyboard,
        trackParams: _
      });
    });
    if (m(O)) {
      return reactJsxRuntimeCoreReexport.jsx(I, {
        className: h,
        chatId: f,
        chatType: b,
        trackParams: _,
        reportParams: C,
        skill: P,
        controllerRef: p,
        pluginIdentifier: O.id,
        onSubmit: S,
        onPaste: B,
        onCloseSkillEvent: F,
        allowEmptySubmit: L,
        attachmentCanNotSend: M
      });
    }
    let z = v(O) || y(O) ? O.placeholder : undefined;
    if (v(O)) {
      return reactJsxRuntimeCoreReexport.jsx(K, {
        className: h,
        chatId: f,
        controllerRef: p,
        skill: P,
        onSubmit: S,
        onCloseSkillEvent: F,
        placeholder: z,
        allowEmptySubmit: L,
        attachmentCanNotSend: M
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(k, {
        className: h,
        chatId: f,
        skill: P,
        controllerRef: p,
        placeholder: z,
        onSubmit: S,
        onPaste: B,
        onCloseSkillEvent: F,
        allowEmptySubmit: L,
        attachmentCanNotSend: M
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    InputEnginePromptEditorPluginFoundation: function () {
      return U;
    }
  });
}