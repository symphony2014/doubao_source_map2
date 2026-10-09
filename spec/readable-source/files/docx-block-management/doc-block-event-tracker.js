// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Le' to 'handleBlockClick'
// - Renamed export 'uU' to 'processBlockMetadata'
// - Renamed export 'wt' to 'collectBlockView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 497225
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  let c = (e, n, i, r) => {
    let s = throttledPathFilterStringify.throttledPathStr(e, ["record_id", "block_type", "sub_block_type"]);
    let c = [];
    c.push({
      object_block_id: platformDocUtils.p5T(e.record_id),
      object_block_type: e.block_type,
      object_sub_block_type: e.sub_block_type,
      block_content_size: e.block_content_size
    });
    let u = {
      target: docBlockConstants.panelViewIds[n] || "none",
      click: "block_action",
      action_type: n,
      action_value: r == null ? undefined : r.actionValue,
      object_block_data: c,
      trigger_type: (r == null ? undefined : r.triggerType) || "hover_whole",
      obj_type: s.block_type
    };
    if (r == null ? undefined : r.objectInlineData) {
      let {
        inlineType: e,
        subInlineType: n
      } = r == null ? undefined : r.objectInlineData;
      u.object_inline_data = {
        inline_type: e
      };
      if (n) {
        u.object_inline_data.sub_inline_type = n;
      }
    }
    i.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_web_block_bubble_toolbar_click", s, u);
  };
  let u = async (e, n, i, o) => {
    let {
      id: l
    } = n;
    c(await docxEditorBlockMetadataUtils.getBlockInfoWithChartType(l, i), e, i, o);
  };
  let h = (e, n, i, o) => {
    let {
      id: l
    } = n;
    c(docxEditorBlockMetadataUtils.getBlockStructureInfo(l, i), e, i, o);
  };
  let f = (e, n, i, o) => {
    if (!e) {
      return;
    }
    let {
      type: l
    } = n;
    switch (l) {
      case docBlockTypeConstants.blockTypeConstants.CHART_REFER:
      case docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM:
      case docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED:
        u(e, n, i, o);
        break;
      default:
        h(e, n, i, o);
    }
  };
  let v = (e, n, i, o) => {
    let l = {
      trigger_type: e,
      obj_type: n.block_type
    };
    if (o) {
      let {
        inlineType: e,
        subInlineType: n
      } = o;
      l.object_inline_data = {
        inline_type: e
      };
      if (n) {
        l.object_inline_data.sub_inline_type = n;
      }
    }
    i.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageView("ccm_doc_web_block_bubble_toolbar_view", n, l);
  };
  let p = e => {
    if (e && e.aliasName && e.aliasName.indexOf("threeStateSwitch") > -1) {
      return {
        value1: e.name
      };
    }
    if ((e == null ? undefined : e.name) === "reaction") {
      var n;
      var i;
      let o = (i = e.extra) === null || i === undefined ? undefined : (n = i.getSelectedReactionKey) === null || n === undefined ? undefined : n.call(i);
      if (o) {
        return {
          value1: o
        };
      } else {
        return null;
      }
    }
    return null;
  };
  require.d(exports, {
    handleBlockClick: function () {
      return f;
    },
    processBlockMetadata: function () {
      return p;
    },
    collectBlockView: function () {
      return v;
    }
  });
}