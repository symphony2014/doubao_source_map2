// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'initializeModuleInstance'
// - Resolved require(233913) to 'initialize-module-instance'
// - Renamed variable 'o' to 'chatInputConstants'
// - Resolved require(918547) to 'chat-input-constants'
// - Renamed variable 's' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'a' to 'chatSkillBarPopover'
// - Resolved require(325887) to 'chat-skill-bar-popover'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'f' to 'useSkillSelection' (module 325887)
// - Updated imported property 'o' to 'initializeInstance' (module 233913)
// - Updated imported property '$' to 'chatInputConstants' (module 918547)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-business.49e30a64.js
         * chunkId: 63216
         * moduleId: 326345
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillBarPopover = require("chat-skill-bar-popover") /*id: 325887*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  function c() {
    let {
      pageFinish: e
    } = chatStoreManager.useStoreSelector("flowWebLayoutStore");
    let {
      selectSkill: t
    } = chatSkillBarPopover.useSkillSelection({});
    let [n, c] = reactCoreLibraryReexport.useState(false);
    let u = () => {
      c(true);
    };
    reactCoreLibraryReexport.useEffect(() => {
      initializeModuleInstance.initializeInstance.on(chatInputConstants.chatInputConstants.activeChatInputCodeSkill, u);
      return () => {
        initializeModuleInstance.initializeInstance.off(chatInputConstants.chatInputConstants.activeChatInputCodeSkill, u);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (e && n && n) {
        setTimeout(() => {
          t({
            skillType: chatAppEnums.SkillType.CodeAssistant
          });
        }, 0);
      }
    }, [e, n]);
  }
  require.r(exports);
  require.d(exports, {
    useCodeInit: function () {
      return c;
    }
  });
}