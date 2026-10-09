// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RT' to 'selectionHighlight'
// - Renamed export 'S2' to 'SelectionRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 527546
         */
module.exports = function (module, exports, require) {
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  let l = `${clientsidePrefixConstant.clientsidePrefix}selection_highlight`;
  let u = null;
  let a = e => u = e;
  let c = () => {
    if (u) {
      u();
      a(null);
    }
  };
  class d extends baseRendererClass.BaseRenderer {
    match(e) {
      return [l, clientsideLinkConstants_1.mockSelection].includes(e);
    }
    destroy() {
      c();
    }
    render(e) {
      let {
        attributes: n
      } = e;
      if (n[clientsideLinkConstants_1.mockSelection]) {
        e.class += " mock-selection";
      } else {
        e.class += " selection_highlight";
      }
      return e.children;
    }
  }
  require.d(exports, {
    selectionHighlight: function () {
      return l;
    },
    SelectionRenderer: function () {
      return d;
    }
  });
}