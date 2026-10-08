// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'i' to 'asyncSkillBarItem'
// - Resolved require(336984) to 'async-skill-bar-item'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'oX' to 'AsyncSkillBarItem' (module 336984)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-bar-item.f7100fdd.js
         * chunkId: 24932
         * moduleId: 196563
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var asyncSkillBarItem = require("async-skill-bar-item") /*id: 336984*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      skill: n,
      from: s,
      renderContent: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillBarItem.AsyncSkillBarItem, {
      position: s === "input" ? "top" : "left",
      type: "withModal",
      from: "skillBar",
      children: a({
        keepMorePopover: true,
        onClick: async () => {
          var e;
          let t = await chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService");
          if (t != null && (e = t.getSkillReportEvent({
            skillType: chatAppEnums.SkillType.VoiceCall,
            eventName: "skill_bar_open_input"
          })) !== null && e !== undefined) {
            e.success();
          }
        }
      })
    }, (n == null ? undefined : n.skill_type) ?? "voiceCall");
  };
  require.r(exports);
  require.d(exports, {
    VoiceSkillBarItemComponent: function () {
      return s;
    }
  });
}