// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useSkillExitHook'
// - Renamed export '_' to 'useCompositionRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 123849
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  let s = () => {
    let e = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      let t = () => {
        e.current = true;
      };
      let n = () => {
        e.current = false;
      };
      document.addEventListener("compositionstart", t);
      document.addEventListener("compositionend", n);
      return () => {
        document.removeEventListener("compositionstart", t);
        document.removeEventListener("compositionend", n);
      };
    }, []);
    return e;
  };
  let l = e => {
    let {
      onCloseSkillEvent: t
    } = e;
    let n = s();
    let l = reactCoreLibraryReexport.useRef(false);
    let u = useLatestRef_1.useLatestRef(t);
    let c = chatViewCoreSelectors.useChatId();
    let d = () => {
      var e;
      chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(c || "");
      if ((e = u.current) !== null && e !== undefined) {
        e.call(u);
      }
    };
    let p = e => {
      if (e.key === "Escape" && !e.shiftKey && !e.altKey && !l.current) {
        d();
      }
      l.current = false;
    };
    let f = e => {
      if (e.key === "Escape" && !e.shiftKey && !e.altKey && !!n.current) {
        l.current = true;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      document.addEventListener("keydown", f);
      document.addEventListener("keyup", p, true);
      return () => {
        document.removeEventListener("keydown", f);
        document.removeEventListener("keyup", p, true);
      };
    }, []);
    return {
      onKeyDownExitSkill: e => {
        if (e.key === "Escape" && !e.shiftKey && !e.altKey && !n.current) {
          d();
        }
      }
    };
  };
  require.d(exports, {
    useSkillExitHook: function () {
      return l;
    },
    useCompositionRef: function () {
      return s;
    }
  });
}