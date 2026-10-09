// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'a' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Renamed variable 'o' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'l' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 's' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'd' to 'musicSkillGuidanceStore'
// - Resolved require(240022) to 'music-skill-guidance-store'
// - Renamed variable 'c' to 'useMusicSkillEventTracker'
// - Resolved require(296506) to 'use-music-skill-event-tracker'
// - Renamed variable 'p' to 'skillSendMessageBox'
// - Resolved require(607110) to 'skill-send-message-box'
// - Renamed variable 'f' to 'musicGenerationTemplateParser'
// - Resolved require(802219) to 'music-generation-template-parser'
// - Renamed variable 'm' to 'musicLyricsEditModal'
// - Resolved require(720526) to 'music-lyrics-edit-modal'
// - Renamed variable 'h' to 'musicGenerationCardComponent'
// - Resolved require(958261) to 'music-generation-card-component'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Dt' to 'getGenerationResult' (module 802219)
// - Updated imported property 'pZ' to 'extractTemplateValues' (module 802219)
// - Updated imported property 'y6' to 'parseTemplateToComponents' (module 802219)
// - Updated imported property 'Mk' to 'getDefaultTemplateValues' (module 802219)
// - Updated imported property 'uS' to 'updateCustomLyricText' (module 802219)
// - Updated imported property 'i3' to 'updateLyricSelection' (module 802219)
// - Updated imported property 'ps' to 'compareTemplateChanges' (module 802219)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'Qk' to 'getExtractedText' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'vO' to 'clearTextValue' (module 411117)
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 't' to 'musicGuidanceStore' (module 240022)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'c' to 'useMusicTeaEvent' (module 296506)
// - Updated imported property 'H' to 'loadLottieAssets' (module 958261)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// - Updated imported property 'Q' to 'SkillSendMessageButton' (module 607110)
// - Updated imported property 'p' to 'MusicLyricsEditor' (module 720526)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 478195
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var musicSkillGuidanceStore = require("music-skill-guidance-store") /*id: 240022*/;
  var useMusicSkillEventTracker = require("use-music-skill-event-tracker") /*id: 296506*/;
  var skillSendMessageBox = require("skill-send-message-box") /*id: 607110*/;
  var musicGenerationTemplateParser = require("music-generation-template-parser") /*id: 802219*/;
  var musicLyricsEditModal = require("music-lyrics-edit-modal") /*id: 720526*/;
  var musicGenerationCardComponent = require("music-generation-card-component") /*id: 958261*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = (e, t) => Object.values(musicGenerationTemplateParser.getGenerationResult(e, t)).some(Boolean);
  let y = e => {
    let {
      disabled: t,
      chatId: r,
      skill: y,
      trackParams: _,
      handleKeyDown: b,
      controllerRef: x,
      className: w,
      onChange: k,
      onBlur: E
    } = e;
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let S = chatInputStoreHelpers.useEditorValue();
    let {
      chatInputRef: T
    } = chatRefsContext.useChatRefs();
    let P = musicSkillGuidanceStore.musicGuidanceStore(e => e.packInputConfig.inputConfig, deepEqualityUtil_1.isDeepEqual);
    let {
      sendTeaEvent: I
    } = useMusicSkillEventTracker.useMusicTeaEvent({
      conversation_id: r || ""
    });
    let {
      input_options: A = {}
    } = P || {};
    let [j, O, N, L, R, M, D] = musicSkillGuidanceStore.musicGuidanceStore(e => [e.mood, e.genre, e.lyric, e.updateMusicLyric, e.updateMusicGenre, e.updateMusicMood, e.initPackInputConfig], deepEqualityUtil_1.isDeepEqual);
    let [F, $] = reactCoreLibraryReexport.useState(false);
    let [Z, U] = reactCoreLibraryReexport.useState(false);
    let [B, G] = reactCoreLibraryReexport.useState("");
    let W = reactCoreLibraryReexport.useRef(S);
    let z = reactCoreLibraryReexport.useRef(A);
    let V = e => {
      let {
        mood: t,
        genre: r
      } = musicGenerationTemplateParser.extractTemplateValues(e);
      M(t);
      R(r);
    };
    let q = e => {
      var t;
      if (!e) {
        return;
      }
      let {
        value: r = "",
        input_options: n = {}
      } = e;
      if (!((t = chatInputStoreHelpers.getExtractedText()) === null || t === undefined ? undefined : t.trim())) {
        let e = musicGenerationTemplateParser.parseTemplateToComponents({
          origin: r,
          inputOptions: n
        });
        chatInputStoreHelpers.setEditorValue(e);
      }
      let i = musicGenerationTemplateParser.getDefaultTemplateValues(n);
      R(i.genre || "");
      M(i.mood || "");
      L("");
    };
    reactCoreLibraryReexport.useEffect(() => {
      z.current = A;
    }, [A]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v(S, A)) {
        W.current = S;
      }
    }, [S, A]);
    reactCoreLibraryReexport.useEffect(() => {
      D();
      musicGenerationCardComponent.loadLottieAssets();
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ..._
      });
      return () => {
        if (v(W.current, z.current)) {
          chatInputStoreHelpers.clearTextValue();
        }
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      q(P);
    }, [P]);
    let K = e => {
      I("change_music_edit", {
        button_name: "lyric_detail"
      });
      L(e);
      $(false);
      let t = musicGenerationTemplateParser.updateCustomLyricText(S, e);
      if (t) {
        chatInputStoreHelpers.setEditorValue(t);
      }
    };
    let {
      renderEditor: X
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: t,
        value: S,
        onChange: e => {
          let {
            isCustomLyricSelected: t,
            newValue: r,
            lyricPlaceholder: n
          } = musicGenerationTemplateParser.updateLyricSelection(e, A);
          musicGenerationTemplateParser.compareTemplateChanges(S, r).forEach(e => {
            I("change_music_edit", {
              button_name: e.key
            });
          });
          if (!t) {
            L("");
          }
          if (t && t !== Z && !N) {
            $(true);
          }
          G(n);
          U(!!t);
          V(r);
          chatInputStoreHelpers.setEditorValue(r);
        },
        onKeyDown: e => {
          if (b != null) {
            b(e);
          }
        },
        placeholder: C("skill_image_input_placeholder"),
        onFocus: () => {
          var e;
          if (T == null) {
            return undefined;
          } else if ((e = T.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.focus();
          }
        },
        onBlur: e => {
          var t;
          if (T != null && (t = T.current) !== null && t !== undefined) {
            t.blur();
          }
          if (E != null) {
            E(e);
          }
        },
        renderSelectOptionItem: e => {
          let {
            item: t,
            defaultWrapper: r
          } = e;
          return r(reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: t.value
          }));
        }
      },
      useV3: true,
      chatId: r,
      activeSkill: y,
      onControllerChange: e => {
        if (x) {
          x.current = {
            focus: t => e == null ? undefined : e.focus(t),
            blur: () => e == null ? undefined : e.blur()
          };
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [Z && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "-mt-4 mb-12 -ml-8 overflow-hidden",
        children: reactJsxRuntimeCoreReexport.jsx(skillSendMessageBox.SkillSendMessageButton, {
          lyric: N,
          placeholder: B,
          onClick: () => $(true)
        })
      }), X({
        className: w,
        onChange: k
      }), reactJsxRuntimeCoreReexport.jsx(musicLyricsEditModal.MusicLyricsEditor, {
        lyric: N,
        genre: O,
        mood: j,
        visible: F,
        setInvisible: () => $(false),
        onClickOK: e => K(e)
      })]
    });
  };
  class _ {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: y,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = y;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    MusicAssistantPromptEditorPlugin: function () {
      return _;
    }
  });
}