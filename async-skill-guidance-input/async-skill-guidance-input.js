// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X5' to 'useSkillFileUpload'
// - Renamed export 'qd' to 'useSkillTextSubmit'
// - Renamed export 'bP' to 'useSkillInputProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 316165
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useAiChatSendMessage = require("use-ai-chat-send-message") /*id: 797491*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatInputStore = require("chat-input-store") /*id: 673935*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  let m = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      return chatInputStore.chatInputStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  };
  let v = m(e => e.editorValue);
  let h = m(e => e.focused);
  var imageUploadValidationHook = require("image-upload-validation-hook") /*id: 668174*/;
  let g = e => {
    let {
      skill: t,
      trackParams: n,
      reportParams: l,
      onAfterSendMessage: c,
      onBeforeSendMessage: f
    } = e;
    let {
      skill_type: m
    } = t || {};
    let h = m == null ? undefined : m.toString();
    let {
      sendMessage: _
    } = useAiChatSendMessage.useAiSendMessage();
    let g = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let y = v();
    let k = reactCoreLibraryReexport.useCallback(e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        trackParams: {
          ...n,
          upload_collection_way: "",
          collection_name: "",
          upload_file_type: "",
          upload_token_length: ""
        }
      });
    }, [n]);
    let w = reactCoreLibraryReexport.useCallback(() => {
      chatInputStore.chatInputStore.getState().updateEditorValue({
        data: []
      });
    }, []);
    let b = async () => {
      if (!h || !m || (await (f == null ? undefined : f())) === false) {
        return;
      }
      let e = inputToolConverter.extractText(y.data);
      await _({
        chatId: g || "",
        reportParams: {
          scene: "chat_action_bar",
          sec_scene: skillTypeMappings.getSkillActionClass(t == null ? undefined : t.skill_type),
          is_upload_file: 0,
          ...l
        },
        text: e
      });
      teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
        ...n,
        prompts_content: e,
        upload_collection_way: "",
        collection_name: "",
        upload_file_type: "",
        upload_token_length: ""
      });
      k();
      w();
      if (c != null) {
        c({
          exitSkill: false
        });
      }
    };
    return {
      closeEvent: k,
      submit: b
    };
  };
  let y = e => {
    let {
      skill: t,
      reportParams: n,
      onBeforeSendMessage: i,
      onAfterSendMessage: l
    } = e;
    let {
      skill_type: o
    } = t || {};
    let d = o == null ? undefined : o.toString();
    let {
      sendMessage: c
    } = useAiChatSendMessage.useAiSendMessage();
    let p = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let f = imageUploadValidationHook.useImageUploadCheck();
    return {
      submitFiles: async e => {
        if (!f(e)) {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            status: "0",
            conversation_id: p,
            skill_name: skillTypeMappings.getSkillName(o),
            skill_id: d,
            duration: "0",
            upload_type: "pic",
            upload_from: "exercise_upload"
          });
          return;
        }
        if (!d || !o) {
          return;
        }
        let r = e[0];
        if (r && (await (i == null ? undefined : i())) !== false) {
          await c({
            chatId: p || "",
            reportParams: {
              scene: "chat_action_bar",
              sec_scene: skillTypeMappings.getSkillActionClass(t == null ? undefined : t.skill_type),
              from: "skill_input",
              is_upload_file: 1,
              ...n
            },
            image: r
          });
          if (l != null) {
            l({
              exitSkill: false
            });
          }
        }
      }
    };
  };
  let k = "exercise-send-msg-button";
  let w = e => {
    let {
      disabled: t,
      skill: n,
      submit: r,
      submitFiles: a,
      closeEvent: o,
      trackParams: s,
      onKeyDown: f,
      isToolButtonSmall: m
    } = e;
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let g = reactCoreLibraryReexport.useRef(null);
    let y = v();
    let w = h();
    let b = inputToolConverter.extractText(y.data).trim() === "";
    let x = reactCoreLibraryReexport.useCallback(e => {
      g.current = e;
      if (e) {
        chatInputStore.chatInputStore.getState().updateFocusedState(true);
      }
    }, []);
    let {
      handleKeyDown: S
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: y,
      onResetEditorValue: () => chatInputStore.chatInputStore.getState().updateEditorValue({
        data: []
      }),
      onSubmit: r,
      onCloseSkillEvent: o
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (g.current && w) {
        g.current.focus();
      }
    }, [w]);
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...s
      });
    }, []);
    let C = {
      disabled: t,
      value: y,
      onChange: e => {
        chatInputStore.chatInputStore.getState().updateEditorValue(e);
      },
      onKeyDown: async e => {
        await (f == null ? undefined : f(e));
        S(e);
      },
      placeholder: _("solve_input_label"),
      autoComplete: "off",
      onFocus: () => {
        chatInputStore.chatInputStore.getState().updateFocusedState(true);
      },
      onBlur: () => {
        chatInputStore.chatInputStore.getState().updateFocusedState(false);
      },
      onPaste(e) {
        let {
          files: t
        } = e.clipboardData;
        if (t.length > 0) {
          a([...t]);
        }
      }
    };
    let E = {
      skillType: n == null ? undefined : n.skill_type
    };
    return {
      editorRef: g,
      editorRefCallback: x,
      editorProps: C,
      dragUploadProps: {
        onDrop: e => {
          let {
            files: t
          } = e.dataTransfer || {};
          a([...t]);
        },
        maxFileCount: 1
      },
      sendBtnProps: {
        disableToSend: t || b,
        sendMessageClassName: k,
        small: m,
        onClickSendButton: () => {
          r();
        }
      },
      toolButtonProps: {
        type: "editor",
        isToolButtonSmall: m,
        getValue: () => y,
        onUpdateValue: e => {
          chatInputStore.chatInputStore.getState().updateEditorValue(e);
        },
        skill: n,
        trackParams: s
      },
      onCheckLoadSuccess: () => !!document.querySelector(`.${k}`),
      loadSuccessReportParams: E
    };
  };
  require.d(exports, {
    useSkillFileUpload: function () {
      return y;
    },
    useSkillTextSubmit: function () {
      return g;
    },
    useSkillInputProps: function () {
      return w;
    }
  });
}