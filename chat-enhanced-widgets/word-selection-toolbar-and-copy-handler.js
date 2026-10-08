// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U4' to 'useWordSelectionToolbar'
// - Renamed export 'td' to 'useWordSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 514544
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var i = clipboardCopyHelper;
  var messageCopyHandler = require("message-copy-handler") /*id: 541976*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let f = () => {
    if (typeof window != "undefined") {
      let e = window.getSelection();
      if (e && typeof e.removeAllRanges == "function") {
        e.removeAllRanges();
      }
    }
  };
  let g = e => {
    let {
      text: t,
      messageId: n,
      citeMethod: o,
      conversationId: l,
      refContents: r = []
    } = e;
    if (t) {
      let {
        closeSkillPanel: e
      } = chatStoreManager.getStoreState("chatInputStore");
      e(l ?? "");
      setTimeout(() => {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.setRefContents({
              refContents: [{
                type: "text",
                text: t,
                scene: "word_selection",
                options: {
                  from: "choose_text",
                  cite_method: o ?? "click_cite_button",
                  cite_message_id: n
                }
              }],
              channel: "default"
            }, chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "");
          }
        });
      }, 0);
    } else if (r.find(e => e.type === "text" && e.scene === "word_selection")) {
      chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
        if (e != null) {
          e.clearRefContents(chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "");
        }
      });
    }
  };
  let x = (e, t) => {
    let [i, s] = reactCoreLibraryReexport.useState({
      text: "",
      rect: null
    });
    let [u, m] = reactCoreLibraryReexport.useState(false);
    let [h, _] = reactCoreLibraryReexport.useState(false);
    let x = chatRefContentSelectors.useRefContent(chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "");
    let k = (x == null ? undefined : x.refContents) || [];
    let w = chatFgStoreHooks.getSourceValue("enable_followup", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    });
    let b = chatFgStoreHooks.getSourceValue("followup_auto_ref", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1";
    let y = w === "1";
    let C = messageCopyHandler.findMessageElement(e);
    let R = reactCoreLibraryReexport.useRef(null);
    let [j, N] = reactCoreLibraryReexport.useState(null);
    let S = reactCoreLibraryReexport.useRef(false);
    let T = reactCoreLibraryReexport.useRef(true);
    let E = reactCoreLibraryReexport.useRef(null);
    let $ = reactCoreLibraryReexport.useRef(0);
    let W = reactCoreLibraryReexport.useRef(0);
    let Z = reactCoreLibraryReexport.useRef(null);
    let M = reactCoreLibraryReexport.useCallback(() => {
      if (R.current && R.current.parentNode) {
        R.current.parentNode.removeChild(R.current);
      }
      R.current = null;
      N(null);
    }, []);
    let F = reactCoreLibraryReexport.useCallback(e => {
      _(false);
      if (!e) {
        s({
          text: "",
          rect: null
        });
      }
      M();
    }, [M]);
    let I = reactCoreLibraryReexport.useCallback(e => {
      if (!e || e.width === 0 || e.height === 0) {
        M();
        return;
      }
      if (typeof document == "undefined") {
        return;
      }
      let t = C ?? document.body;
      if (!t) {
        return;
      }
      M();
      document.querySelectorAll("[data-word-selection-overlay=\"true\"]").forEach(e => {
        if (e.parentNode) {
          e.parentNode.removeChild(e);
        }
      });
      let n = document.createElement("div");
      n.setAttribute("data-word-selection-overlay", "true");
      let o = t.getBoundingClientRect();
      let l = e.left - o.left + t.scrollLeft;
      let r = e.top - o.top + t.scrollTop;
      n.style.position = "absolute";
      n.style.left = `${l}px`;
      n.style.top = `${r}px`;
      n.style.width = `${e.width}px`;
      n.style.height = `${e.height}px`;
      n.style.backgroundColor = "transparent";
      t.appendChild(n);
      R.current = n;
      N(n);
    }, [M, C]);
    let B = reactCoreLibraryReexport.useCallback(() => {
      let e = window.getSelection();
      if (!e || e.rangeCount === 0) {
        F();
        return;
      }
      let t = e.getRangeAt(0);
      if (C) {
        let e = t.commonAncestorContainer;
        if (!C.contains(e)) {
          F();
          return;
        }
      }
      let n = t.toString().trim();
      if (!n) {
        F();
        return;
      }
      try {
        let e = t.getBoundingClientRect();
        s({
          text: n,
          rect: e
        });
        I(e);
        _(true);
      } catch {
        F();
      }
    }, [F, I]);
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window == "undefined" || C === undefined || !C) {
        return;
      }
      let e = () => {
        if (E.current !== null) {
          clearTimeout(E.current);
          E.current = null;
        }
      };
      let t = e => {
        let t = performance.now();
        let {
          clientX: n,
          clientY: o
        } = e;
        let l = $.current;
        let r = Z.current;
        if (l && t - l <= 350 && r && Math.hypot(n - r.x, o - r.y) <= 4) {
          W.current += 1;
        } else {
          W.current = 1;
        }
        $.current = t;
        Z.current = {
          x: n,
          y: o
        };
        return W.current;
      };
      let n = () => {
        S.current = true;
      };
      let o = n => {
        var o;
        S.current = false;
        let {
          target: l
        } = n;
        let r = t(n);
        if (l && l.closest("[data-word-selection-toolbar=\"true\"]")) {
          m(true);
          return;
        }
        m(false);
        if (r >= 2) {
          e();
          E.current = setTimeout(() => {
            let e = window.getSelection();
            if (!(e == null ? undefined : e.toString().trim())) {
              F(true);
              return;
            }
            B();
          }, 200);
          return;
        }
        let i = (l == null ? undefined : l.nodeName) === "TEXTAREA" || !!(l == null ? undefined : (o = l.parentElement) === null || o === undefined ? undefined : o.closest("[data-input-ref-content=\"true\"]"));
        if (i) {
          F(i);
          return;
        }
        let a = window.getSelection();
        if (!(a == null ? undefined : a.toString().trim())) {
          F(true);
          return;
        }
        B();
      };
      let l = e => {
        let t = e.target;
        if (!t || !t.closest("[data-word-selection-toolbar=\"true\"]")) {
          F(true);
        }
      };
      if (y) {
        C.addEventListener("pointerdown", n);
        window.addEventListener("pointerup", o);
        C.addEventListener("contextmenu", l);
      }
      return () => {
        C.removeEventListener("pointerdown", n);
        window.removeEventListener("pointerup", o);
        C.removeEventListener("contextmenu", l);
        e();
        M();
      };
    }, [y, C, B, M]);
    let L = reactCoreLibraryReexport.useCallback(e => {
      var t;
      let n = e.target;
      let o = (n == null ? undefined : n.closest("#input-engine-container")) !== null;
      if ((!n || !n.closest("[data-word-selection-toolbar=\"true\"]")) && (!R.current || !(e.target instanceof Node) || !R.current.contains(e.target))) {
        F((n == null ? undefined : n.nodeName) === "TEXTAREA" || !!(n == null ? undefined : (t = n.parentElement) === null || t === undefined ? undefined : t.closest("[data-input-ref-content=\"true\"]")) || !!o);
        f();
      }
    }, [F]);
    reactCoreLibraryReexport.useEffect(() => {
      if (h && y) {
        document.addEventListener("mousedown", L);
        return () => document.removeEventListener("mousedown", L);
      }
    }, [h, y, L]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!y || !b || u) {
        return;
      }
      if (T.current) {
        T.current = false;
        return;
      }
      let {
        activeSkillTypeMap: n
      } = chatStoreManager.getStoreState("chatInputStore");
      let o = n == null ? undefined : n[t ?? ""];
      g({
        text: i.text,
        messageId: e,
        conversationId: t,
        citeMethod: "choose_text_auto_cite",
        refContents: k
      });
      if (!isUndefinedCheck.isUndefined(o)) {
        F(true);
      }
    }, [i.text, e, y, b]);
    return {
      ...i,
      visible: h,
      anchorElement: j,
      clearSelection: F
    };
  };
  let k = e => {
    let a = {
      skill_id: (e == null ? undefined : e.skill?.skill_id_no_default) ?? null,
      skill_name: skillTypeMappings.getSkillName(e == null ? undefined : e.skill?.skill_type_no_default),
      conversation_id: e == null ? undefined : e.conversation_id,
      bot_id: chatConversationBotId.getConversationBotId(e == null ? undefined : e.conversation_id),
      message_id: e == null ? undefined : e.message_id,
      section_id: e == null ? undefined : e.section_id,
      canvas_type: null
    };
    let {
      chatInputRef: s
    } = chatRefsContext.useChatRefs();
    let p = chatRefContentSelectors.useRefContent(chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "");
    let v = (p == null ? undefined : p.refContents) || [];
    return {
      onCopy: e => {
        let {
          text: t
        } = e;
        teaAnalyticsEventTracker.trackEvent("copy", {
          ...a,
          click_from: "choose_text"
        });
        i(t || "");
        g({
          text: "",
          refContents: v
        });
        f();
      },
      onFollowUp: t => {
        var n;
        let {
          text: o
        } = t;
        if (o) {
          teaAnalyticsEventTracker.trackEvent("click_cite_button", {
            click_from: "choose_text",
            user_type: "assistant"
          });
          g({
            text: o,
            messageId: e == null ? undefined : e.message_id,
            conversationId: e == null ? undefined : e.conversation_id,
            citeMethod: "click_cite_button"
          });
          f();
          if (s != null && (n = s.current) !== null && n !== undefined) {
            n.focus();
          }
        }
      }
    };
  };
  require.d(exports, {
    useWordSelectionToolbar: function () {
      return k;
    },
    useWordSelection: function () {
      return x;
    }
  });
}