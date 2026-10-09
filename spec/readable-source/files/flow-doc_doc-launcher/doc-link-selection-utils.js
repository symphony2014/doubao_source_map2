// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Np' to 'filterLinkSelectionOps'
// - Renamed export 'PT' to 'LinkTypeOptions'
// - Renamed export 'dU' to 'openLinkPanelAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 162630
         */
module.exports = function (module, exports, require) {
  require("clientside-link-constants") /*id: 986744*/;
  var r;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  require("content-delta-utility-functions") /*id: 348536*/;
  let l = "OPEN_LINK_PANEL";
  (r = {}).onlyLink = "onlyLink";
  r.basic = "basic";
  let a = r;
  function s(e, i) {
    return e.getContent().ops.filter(e => {
      let {
        attributes: n
      } = e;
      return !!n && n[clientsideLinkConstants_1.linkSelection] === i;
    });
  }
  require.d(exports, {
    filterLinkSelectionOps: function () {
      return s;
    },
    LinkTypeOptions: function () {
      return a;
    },
    openLinkPanelAction: function () {
      return l;
    }
  });
}