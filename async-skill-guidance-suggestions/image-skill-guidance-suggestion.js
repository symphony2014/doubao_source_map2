// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'n' to 'chatConstants'
// - Resolved require(777970) to 'chat-constants'
// - Renamed variable 'l' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable 'a' to 'superTaskConfigHook'
// - Resolved require(700903) to 'super-task-config-hook'
// - Renamed variable 'o' to 'superTaskSuggestionList'
// - Resolved require(657847) to 'super-task-suggestion-list'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GL' to 'superTaskStore' (module 654619)
// - Updated imported property 'Ax' to 'useLauncherConfig' (module 317711)
// - Updated imported property 'W5' to 'toolBtnLayoutConstants' (module 317711)
// - Updated imported property 'r' to 'useClaudeFeatureFlag' (module 700903)
// - Updated imported property 'qX' to 'complexityLevels' (module 777970)
// - Updated imported property 'q' to 'SuperTaskSuggestion' (module 657847)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 673570
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var superTaskConfigHook = require("super-task-config-hook") /*id: 700903*/;
  var superTaskSuggestionList = require("super-task-suggestion-list") /*id: 657847*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let t = superTaskStore.superTaskStore(t => t.getTaskModeByConvId(e.chatId));
    let i = superTaskStore.superTaskStore(e => e.isSkillBarModeEnable());
    let {
      guidanceSkillActiveInputMode: c
    } = chatLauncherConfigHooks.useLauncherConfig();
    let u = [chatLauncherConfigHooks.toolBtnLayoutConstants.ToolBtnsBorderLessTop, chatLauncherConfigHooks.toolBtnLayoutConstants.ToolBtnsBorderLessBottom].includes(c);
    if (superTaskConfigHook.useClaudeFeatureFlag().value && t !== chatConstants.complexityLevels.Complex) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(superTaskSuggestionList.SuperTaskSuggestion, {
        ...e,
        mode: i ? "simple" : "full",
        useNewUI: u && i
      });
    }
  };
  function u(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class d {
    constructor() {
      u(this, "titleKey", "");
      u(this, "Content", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskGenericGuidanceSuggestion: function () {
      return d;
    }
  });
}