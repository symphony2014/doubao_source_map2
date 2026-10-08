// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useSkillGuard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance.e3b9469f.js
         * chunkId: 64113
         * moduleId: 400987
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  let a = e => {
    let {
      toChatPage: t
    } = chatContextUtil.useChatContext();
    let n = chatGuidanceSelectors.useOnboardingSkills();
    let a = !n || !e || (n == null ? undefined : n.findIndex(t => t.skill_type === e)) !== -1;
    reactCoreLibraryReexport.useEffect(() => {
      if (!a) {
        var e;
        var n;
        if (t != null) {
          t({
            replace: true
          });
        }
        if ((e = (n = chatStoreManager.getStoreState("chatGuidanceStore")).setActiveSkillGuidanceIdentifier) !== null && e !== undefined) {
          e.call(n);
        }
      }
    }, [a]);
  };
  require.d(exports, {
    useSkillGuard: function () {
      return a;
    }
  });
}