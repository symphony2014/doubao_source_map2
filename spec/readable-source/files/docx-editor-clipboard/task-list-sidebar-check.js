// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'isTaskListSidebarElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 181884
         */
module.exports = function (module, exports, require) {
  var domClassLayoutUtils = require("dom-class-layout-utils") /*id: 418505*/;
  var taskListSiderClasses = require("task-list-sider-classes") /*id: 604839*/;
  function a(e) {
    return !!["task-list-block-inner", taskListSiderClasses.siderBarContainer].find(o => domClassLayoutUtils.domClassLayout.queryParents(e, o));
  }
  require.d(exports, {
    isTaskListSidebarElement: function () {
      return a;
    }
  });
}