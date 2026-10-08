// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'collectDocContentPageClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 751641
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  let u = (e, n, o) => {
    let u = [];
    let s = docxEditorBlockMetadataUtils.getBlockStructureInfo(e, o.blockManager);
    let d = throttledPathFilterStringify.throttledPathStr(s, ["record_id", "block_type", "sub_block_type"]);
    u.push({
      object_block_id: platformDocUtils.p5T(s.record_id),
      object_block_type: s.block_type,
      object_sub_block_type: s.sub_block_type,
      block_content_size: s.block_content_size
    });
    let f = {
      target: n.target,
      click: o.click || "block_custom_action",
      action_type: n.actionType,
      action_value: n.actionValue,
      object_block_data: u
    };
    if (n.objectBlockExtraValue) {
      f.object_block_extra_value = n.objectBlockExtraValue;
    }
    o.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick(o.eventName || "ccm_doc_content_page_click", d, f);
    if (docxFeatureFlags.isDocsMoreEvents()) {
      o.eventName;
    }
  };
  require.d(exports, {
    collectDocContentPageClick: function () {
      return u;
    }
  });
}