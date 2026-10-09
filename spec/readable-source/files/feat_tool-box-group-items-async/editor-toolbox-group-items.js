// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getToolboxItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 656264
         */
module.exports = function (module, exports, require) {
  require("platform-doc-utils") /*id: 726907*/;
  require("editor-constants-enums") /*id: 47828*/;
  require("doc-editor-action-map") /*id: 987175*/;
  require("theme-color-manager-facade") /*id: 552375*/;
  require("doc-button-bg-colors") /*id: 11473*/;
  require("block-type-icon-mapping") /*id: 265784*/;
  require("editor-ui-component-constants") /*id: 516341*/;
  require("doc-block-type-aliases-mapping") /*id: 322889*/;
  require("document-block-insert-util") /*id: 907868*/;
  require("editor-zone-range-utils") /*id: 53719*/;
  require("editor-menu-normalize-util") /*id: 43746*/;
  require("doc-block-type-constants") /*id: 433991*/;
  require("inline-component-facade") /*id: 678614*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  function r(e, {
    panelType: l,
    isAppend: o,
    isInlineInput: n,
    category: r
  } = {}) {
    return null;
  }
  inlineComponentConstants.actionTypes.OpenLink;
  t("LarkCCM_Docx_Button_OpenHyperlink_Menu");
  inlineComponentConstants.actionTypes.DuplicatePage;
  t("LarkCCM_Docx_Button_MakeCopy_Menu");
  inlineComponentConstants.actionTypes.FollowPage;
  t("LarkCCM_Docx_Button_Follow_Menu");
  require("docx-block-validator-utils") /*id: 713166*/;
  require("di-provider-collect-event") /*id: 308105*/;
  require("content-structure-delta") /*id: 768480*/;
  require("throttled-omit-path-stringify") /*id: 159496*/;
  require("docx-equation-block-renderer") /*id: 541234*/;
  require("editor-range-utilities") /*id: 780600*/;
  require("display-type-constants") /*id: 897087*/;
  require("editor-revision-add-handler") /*id: 856858*/;
  require.d(exports, {
    getToolboxItems: function () {
      return r;
    }
  });
}