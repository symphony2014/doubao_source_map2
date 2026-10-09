// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'canExecuteShortcut'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 118165
         */
module.exports = function (module, exports, require) {
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  function d(e, i = false) {
    if (!e.struct.active) {
      return false;
    }
    let l = e.model.getSelection();
    if (!l) {
      return false;
    }
    let d = e.model.getAttributes(l.start, l.end);
    let c = [inlineComponentConstants.componentType, displayTypeConstants.displayInlineBlock, "equation"];
    if (i) {
      c.push(clientsideLinkConstants_1.linkType);
    }
    return !d.some(e => {
      let [i] = e;
      return c.includes(i);
    });
  }
  require.d(exports, {
    canExecuteShortcut: function () {
      return d;
    }
  });
}