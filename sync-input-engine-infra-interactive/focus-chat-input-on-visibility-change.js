// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'useFocusChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 491164
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var chatSkillChangeHandlers = require("chat-skill-change-handlers") /*id: 378957*/;
  function u(e) {
    let {
      needFocus: t = false
    } = e || {};
    let {
      chatInputRef: n
    } = chatRefsContext.useChatRefs();
    let u = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let c = () => {
      var e;
      if (t) {
        if ((e = n.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    };
    chatSkillChangeHandlers.useSkillTypeChangeHandler(() => {
      c();
    });
    chatSkillChangeHandlers.useChatIdChangeHandler(() => {
      if (!userAgentDeviceDetector.isMobileCached() && (!!u || !userAgentDeviceDetector.isIPad())) {
        c();
      }
    });
    (function (e) {
      let t = chatViewCoreSelectors.useChatId();
      let n = reactCoreLibraryReexport.useRef("");
      reactCoreLibraryReexport.useEffect(() => {
        if (t) {
          if (n.current === "") {
            e();
          }
          n.current = t;
        }
      }, [t]);
    })(() => {
      if (!userAgentDeviceDetector.isMobileCached() && (!!u || !userAgentDeviceDetector.isIPad())) {
        c();
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        setTimeout(() => c(), 100);
      };
      window.addEventListener("visibilitychange", e);
      return () => {
        window.removeEventListener("visibilitychange", e);
      };
    }, []);
  }
  require.d(exports, {
    useFocusChatInput: function () {
      return u;
    }
  });
}