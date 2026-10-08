// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'In' to 'getBlockPathInfo'
// - Renamed export 'MW' to 'getBlockInfoByRecordId'
// - Renamed export 'S6' to 'getMultipleBlockInfoAsync'
// - Renamed export 'T4' to 'getParentBlockPath'
// - Renamed export 'TA' to 'getBlockPathAsync'
// - Renamed export 'WV' to 'getBlockStructureInfo'
// - Renamed export 'XE' to 'getMultipleBlockInfo'
// - Renamed export 'Xq' to 'getThrottledBlockPath'
// - Renamed export 'Z' to 'serializeError'
// - Renamed export 'Zw' to 'getDeviceIdFromStorage'
// - Renamed export 'kS' to 'getBlockInfoWithChartType'
// - Renamed export 'kj' to 'getBlockModelInfo'
// - Renamed export 'q$' to 'formatBlockObject'
// - Renamed export 'tj' to 'getPageBlockInfo'
// - Renamed export 'vS' to 'getSelectionScopeType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 501598
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var uiComponentActionTypes = require("ui-component-action-types") /*id: 594795*/;
  var docBlockMetadataUtils = require("doc-block-metadata-utils") /*id: 282711*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docxEventHelper = require("docx-event-helper") /*id: 997602*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  function g(e, n) {
    var r;
    let o = e.getBlockModelByBlockId(n);
    let i = o.type;
    let l = {
      [docBlockTypeConstants.blockTypeConstants.ISV]: () => o.record.snapshot.block_type_id,
      [docBlockTypeConstants.blockTypeConstants.DIAGRAM]: () => o.record.snapshot.diagram.diagramType
    };
    let c = ((r = l[i]) === null || r === undefined ? undefined : r.call(l)) || i;
    return E({
      record_id: o.record.id,
      block_type: i,
      sub_block_type: c
    });
  }
  function E(e) {
    return {
      object_block_id: platformDocUtils.p5T(e.record_id),
      object_block_type: e.block_type || "",
      object_sub_block_type: e.sub_block_type || "",
      block_content_size: e.block_content_size
    };
  }
  function m(e) {
    let r = docxEventHelper.normalizeRecordId(e);
    return {
      ...r,
      block_id: collaborativeEditingFlowSyncModule.transformOperationsWithInvert(r.block_id ?? "")
    };
  }
  function b(e, n) {
    let r = R(e, n);
    return throttledPathFilterStringify.throttledPathStr(r, ["record_id", "block_type", "sub_block_type"]);
  }
  async function v(e, n) {
    let r = await O(e, n);
    return throttledPathFilterStringify.throttledPathStr(r, ["record_id", "block_type", "sub_block_type"]);
  }
  function T(e, n) {
    return m(b(e, n));
  }
  function C(e, n) {
    return m(b(n.getBlockIdsByRecordId(e)[0], n));
  }
  function k(e, n) {
    let r = R(e, n);
    let o = R(r.parentBlockId, n);
    return throttledPathFilterStringify.throttledPathStr(o, ["record_id", "block_type", "sub_block_type"]);
  }
  function I(e, n) {
    let i = {
      record_id: "",
      block_type: "",
      sub_block_type: "",
      parentBlockId: docxEditorCore.ZERO_OFFSET,
      parentRecordId: ""
    };
    let l = e && n.getBlockStructByBlockId(e);
    if (!l) {
      return i;
    }
    let {
      parent: c,
      record: u
    } = l;
    let a = docBlockMetadataUtils.getBlockFileSize(u);
    return {
      record_id: u.id,
      block_type: u.snapshot.type,
      sub_block_type: "",
      block_content_size: a,
      parentBlockId: (c == null ? undefined : c.id) || docxEditorCore.ZERO_OFFSET,
      parentRecordId: (c == null ? undefined : c.record?.id) || ""
    };
  }
  function R(e, n) {
    let r = e && n.getBlockStructByBlockId(e);
    let o = I(e, n);
    if (!r) {
      return o;
    }
    let {
      record: i
    } = r;
    let l = docBlockMetadataUtils.getBlockType(i, n);
    o.sub_block_type = l;
    return o;
  }
  function y(e, n) {
    let r = [];
    e.forEach(e => {
      let o = R(e, n);
      r.push(E(o));
    });
    return r;
  }
  async function O(e, n) {
    let r = e && n.getBlockModelByBlockIdNotCheck(e);
    let o = I(e, n);
    if (!r) {
      return o;
    }
    let {
      record: i
    } = r;
    let l = await docBlockMetadataUtils.getChartBlockType(i, n);
    o.sub_block_type = l;
    return o;
  }
  async function S(e, n) {
    let r = [];
    for await (let o of e) {
      let e = await O(o, n);
      r.push(E(e));
    }
    return r;
  }
  editorUiComponentConstants.uiComponentTypes.Add;
  uiComponentActionTypes.componentTypes.add_panel;
  editorUiComponentConstants.uiComponentTypes.Slash;
  uiComponentActionTypes.componentTypes.slash_panel;
  editorUiComponentConstants.uiComponentTypes.BlockMenu;
  uiComponentActionTypes.componentTypes.web_menu_panel;
  editorUiComponentConstants.uiComponentTypes.TableCell;
  uiComponentActionTypes.componentTypes.web_text_bubble_toolbar;
  editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar;
  uiComponentActionTypes.componentTypes.web_text_bubble_toolbar;
  editorUiComponentConstants.uiComponentTypes.TextualToolbar;
  uiComponentActionTypes.componentTypes.web_text_bubble_toolbar;
  let A = e => {
    if (!e) {
      return docBlockConstants.scopeTypes.BLOCK;
    }
    let n = e.getSelection();
    if (editorSelectionUtilities.isSingleTextSelection(n)) {
      return docBlockConstants.scopeTypes.TEXT;
    } else {
      return docBlockConstants.scopeTypes.BLOCK;
    }
  };
  let L = () => ({
    record_id: docTokenHelperUtils.resolveDocToken(),
    block_type: docBlockTypeConstants.blockTypeConstants.PAGE
  });
  function N() {
    return window.localStorage.getItem("vc_device_id") || "";
  }
  function B(e) {
    if (e instanceof Error) {
      return {
        message: e.message,
        stack: e.stack
      };
    } else {
      return {};
    }
  }
  require.d(exports, {
    getBlockPathInfo: function () {
      return T;
    },
    getBlockInfoByRecordId: function () {
      return C;
    },
    getMultipleBlockInfoAsync: function () {
      return S;
    },
    getParentBlockPath: function () {
      return k;
    },
    getBlockPathAsync: function () {
      return v;
    },
    getBlockStructureInfo: function () {
      return R;
    },
    getMultipleBlockInfo: function () {
      return y;
    },
    getThrottledBlockPath: function () {
      return b;
    },
    serializeError: function () {
      return B;
    },
    getDeviceIdFromStorage: function () {
      return N;
    },
    getBlockInfoWithChartType: function () {
      return O;
    },
    getBlockModelInfo: function () {
      return g;
    },
    formatBlockObject: function () {
      return E;
    },
    getPageBlockInfo: function () {
      return L;
    },
    getSelectionScopeType: function () {
      return A;
    }
  });
}