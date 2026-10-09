// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'businessLayoutCondition'
// - Resolved require(390946) to 'business-layout-condition'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'exerciseChatFooterSymbol'
// - Resolved require(374447) to 'exercise-chat-footer-symbol'
// - Updated imported property 'A' to 'checkLayoutState' (module 390946)
// - Updated imported property 'E' to 'exerciseChatFooter' (module 374447)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 380662
         */
module.exports = function (module, exports, require) {
  var businessLayoutCondition = require("business-layout-condition") /*id: 390946*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var exerciseChatFooterSymbol = require("exercise-chat-footer-symbol") /*id: 374447*/;
  let a = e => {
    if (businessLayoutCondition.checkLayoutState(e) && e.guidance.activeSkillType === chatAppEnums.SkillType.ExerciseAssistant) {
      return exerciseChatFooterSymbol.exerciseChatFooter;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return a;
    }
  });
}