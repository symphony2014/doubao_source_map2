// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Us' to 'IconEventTypes'
// - Renamed export 'ng' to 'collectIconEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 318832
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var componentBizTeaCollector = require("component-biz-tea-collector") /*id: 568420*/;
  var componentErrorUtils_1 = require("component-error-utils_1") /*id: 655368*/;
  function c(e = {}) {
    componentBizTeaCollector.collectComponentBizEvent(componentErrorUtils_1.ComponentName, Object.assign({
      module: "suiteIcon"
    }, e));
  }
  (o = r ||= {}).ICON_VIEW = "icon_view";
  o.UPDATE_ICON = "update_icon";
  require.d(exports, {
    IconEventTypes: function () {
      return r;
    },
    collectIconEvent: function () {
      return c;
    }
  });
}