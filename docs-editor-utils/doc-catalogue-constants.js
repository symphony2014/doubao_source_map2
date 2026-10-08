// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A8' to 'catalogueConfig10'
// - Renamed export 'Eh' to 'supportedBlockTypes'
// - Renamed export 'H_' to 'catalogueConfig90'
// - Renamed export 'I0' to 'catalogueConfig500'
// - Renamed export 'JI' to 'catalogueConfig1000'
// - Renamed export 'Sw' to 'catalogueConfig100'
// - Renamed export 'Wd' to 'catalogueEventTypes'
// - Renamed export 'o0' to 'catalogueConfig0'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 512439
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = {
    CATALOGUE_UPDATE: "catalogue_update",
    CATALOGUE_ACTIVE_UPDATE: "catalogue_active_update",
    CATALOGUE_BOUNDARY_INTERSECTION: "catalogue_boundary_intersection",
    CATALOGUE_RECT_CHANGE: "catalogue_rect_change",
    CATALOGUE_MOVE_START: "catalogue_move_start",
    CATALOGUE_MOVE_END: "catalogue_move_end",
    CATALOGUE_PINNED: "catalogue_pinned",
    CATALOGUE_COLLAPSE_CHANGE: "catalogue_collapse_change",
    CATALOGUE_ITEM_CLICK: "catalogue_item_click"
  };
  let l = 90;
  let c = [docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.AGENDA];
  let u = 500;
  let a = 1000;
  let s = 10;
  let d = 100;
  let f = 0;
  require.d(exports, {
    catalogueConfig10: function () {
      return s;
    },
    supportedBlockTypes: function () {
      return c;
    },
    catalogueConfig90: function () {
      return l;
    },
    catalogueConfig500: function () {
      return u;
    },
    catalogueConfig1000: function () {
      return a;
    },
    catalogueConfig100: function () {
      return d;
    },
    catalogueEventTypes: function () {
      return i;
    },
    catalogueConfig0: function () {
      return f;
    }
  });
}