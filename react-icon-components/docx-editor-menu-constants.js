// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CM' to 'mergeCellMenuItems'
// - Renamed export 'RB' to 'moreMenuName'
// - Renamed export 'Wx' to 'mergeCellActionName'
// - Renamed export 'YF' to 'submenuLevel'
// - Renamed export 'ar' to 'iconSize'
// - Renamed export 'b8' to 'menuItemHeight'
// - Renamed export 'di' to 'menuItemType'
// - Renamed export 'fR' to 'highlightSubmenuName'
// - Renamed export 'fq' to 'submenuIconSize'
// - Renamed export 'g4' to 'highlightSubmenuItems'
// - Renamed export 'hN' to 'menuItemSpacing'
// - Renamed export 'lG' to 'commentRelatedMenuItems'
// - Renamed export 'mF' to 'moreMenuItemConfig'
// - Renamed export 'sB' to 'commentMenuName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 121350
         */
module.exports = function (module, exports, require) {
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  let i = 24;
  let c = 1;
  let s = 24;
  let d = 44;
  let u = 8;
  let p = 2;
  let h = "more";
  let m = "comment";
  let f = "MergeCell";
  let v = "highlight submenu";
  let _ = [m, "reaction"];
  let g = [f];
  let b = [v];
  let C = {
    name: h,
    type: editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren,
    icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.TextMore],
    children: [],
    notShowArrow: true,
    extra: {
      behavior: editorConstantsEnums.EditorActions.DisplaySubMenu
    }
  };
  require.d(exports, {
    mergeCellMenuItems: function () {
      return g;
    },
    moreMenuName: function () {
      return h;
    },
    mergeCellActionName: function () {
      return f;
    },
    submenuLevel: function () {
      return p;
    },
    iconSize: function () {
      return i;
    },
    menuItemHeight: function () {
      return d;
    },
    menuItemType: function () {
      return c;
    },
    highlightSubmenuName: function () {
      return v;
    },
    submenuIconSize: function () {
      return s;
    },
    highlightSubmenuItems: function () {
      return b;
    },
    menuItemSpacing: function () {
      return u;
    },
    commentRelatedMenuItems: function () {
      return _;
    },
    moreMenuItemConfig: function () {
      return C;
    },
    commentMenuName: function () {
      return m;
    }
  });
}