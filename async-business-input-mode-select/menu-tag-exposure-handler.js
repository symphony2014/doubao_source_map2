// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'updateMenuTagExpose'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-mode-select.5c979402.js
         * chunkId: 32786
         * moduleId: 218519
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let o = e => {
    let t = e == null ? undefined : e.new_menu_item_tag;
    let n = chatStoreManager.getStore("deepThinkingControlStore");
    if (t && objectPathGetDefault.getObjectPathDefault(n.getState().newTagsExposeTime, `${e.menu_type}`) < 4) {
      let t = n.getState().newTagsExposeTime;
      n.setState({
        newTagsExposeTime: {
          ...t,
          [String(e.menu_type)]: 4
        }
      });
    }
  };
  require.d(exports, {
    updateMenuTagExpose: function () {
      return o;
    }
  });
}