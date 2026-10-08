// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BH' to 'useThinkingBoxSync'
// - Renamed export 'EL' to 'addThinkingBoxId'
// - Renamed export 'HB' to 'useCanvasViewHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 39792
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  let s = (e, t) => {
    let {
      block_id: n,
      is_finish: l
    } = t ?? {};
    let r = reactCoreLibraryReexport.useRef(!!l);
    reactCoreLibraryReexport.useEffect(() => {
      if (r.current !== true) {
        if (l) {
          p(e.message_id || "");
          return;
        }
        u(e.message_id || "");
      }
    }, [n, l]);
  };
  let c = (e, t, n) => {
    let {
      autoViewCanvasResourceId: s
    } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
    reactCoreLibraryReexport.useEffect(() => () => {
      aiPptTemplateStore_1.aiPptTemplateStore.getState().updateAutoViewCanvasResourceId("");
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      var t;
      let i = chatStoreManager.getStore("chatViewCanvasStore");
      let {
        isExpand: a
      } = (i == null ? undefined : i.getState()) || {};
      if (a || !conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "") || (t = e.message_id || "", !JSON.parse(window.sessionStorage.getItem(d) || "[]").includes(t))) {
        return;
      }
      p(e.message_id || "");
      let c = setTimeout(() => {
        if (!s) {
          n();
        }
      }, 1000);
      return () => clearTimeout(c);
    }, [t]);
  };
  let d = "PROCESSING_THINKING_BOX";
  function u(e) {
    let t = JSON.parse(window.sessionStorage.getItem(d) || "[]");
    if (!t.includes(e)) {
      t.push(e);
      window.sessionStorage.setItem(d, JSON.stringify(t));
    }
  }
  function p(e) {
    let t = JSON.parse(window.sessionStorage.getItem(d) || "[]");
    let n = t.indexOf(e);
    if (n !== -1) {
      t.splice(n, 1);
      window.sessionStorage.setItem(d, JSON.stringify(t));
    }
  }
  require.d(exports, {
    useThinkingBoxSync: function () {
      return s;
    },
    addThinkingBoxId: function () {
      return u;
    },
    useCanvasViewHook: function () {
      return c;
    }
  });
}