// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'normalizeMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 43746
         */
module.exports = function (module, exports, require) {
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  function i(e, {
    showDivider: r = false,
    showGroupTitle: o = false
  } = {}) {
    let i = e.reduce((i, c, s) => c.children.length === 0 ? i : (i.length > 0 && r && (!c.noDivider || !i.some(e => e.type === editorConstantsEnums.MenuItemTypes.Divider)) && !c.noDivider && i.push({
      name: `divider-${s}`,
      type: editorConstantsEnums.MenuItemTypes.Divider,
      canSelected: false,
      overrideFullHeight: docxFeatureFlags.isO6Enabled() ? [editorUiComponentConstants.uiComponentConstants.More, editorUiComponentConstants.uiComponentConstants.BlockShare].includes(e[s].key) : e[s].key === editorUiComponentConstants.uiComponentConstants.Comment
    }), !c.noTitle && o && i.push({
      name: c.groupName,
      type: editorConstantsEnums.MenuItemTypes.Title,
      canSelected: false,
      title: c.groupName,
      text: c.groupName,
      showNewTag: c.showNewTag,
      isLoading: c.isLoading
    }), [...i, ...c.children]), []);
    let c = i.findIndex(e => e.name === "more" && e.type === editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren);
    if (c > -1) {
      let e = i[c];
      let r = docxFeatureFlags.isO6Enabled() && e.children.length > 1 ? undefined : e.children.splice(0, 1)[0];
      if (r && r.type === editorConstantsEnums.MenuItemTypes.MenuItemNormal && r.text) {
        r.tip = r.tip ?? r.text;
        if (r.tipPlacement) {
          delete r.tipPlacement;
        }
        r.text = undefined;
        r.guideInfo = undefined;
        r.extra = {
          ...r.extra,
          extraFromMoreItem: true
        };
      }
      if (!r && e.children[0]?.type === editorConstantsEnums.MenuItemTypes.MenuItemNormal && !e.children[0]?.disabled) {
        e.children[0].tip = undefined;
      }
      if (e.children.length > 0 && e.children[0].type === editorConstantsEnums.MenuItemTypes.Divider) {
        e.children.shift();
      }
      if (r) {
        i.splice(c, +(e.children.length === 0), r);
      }
    }
    return i;
  }
  require.d(exports, {
    normalizeMenuItems: function () {
      return i;
    }
  });
}