// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GL' to 'getAdjustedMarkRange'
// - Renamed export 'Kq' to 'setSelectionToBlock'
// - Renamed export 'T1' to 'shouldShowPlaceholder'
// - Renamed export 'aV' to 'focusBlockOrSetSelection'
// - Renamed export 'dD' to 'logInsertBlockFailure'
// - Renamed export 'mx' to 'clearMarkOrRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 321058
         */
module.exports = function (module, exports, require) {
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var foldStateManager = require("fold-state-manager") /*id: 437732*/;
  var editorRevisionManager = require("editor-revision-manager") /*id: 835310*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var editorLinkConstants = require("editor-link-constants") /*id: 280127*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  let p = (e, n, i, o) => {
    let l = i || editorZoneRangeUtils.getBlockMarkRange({
      block: e,
      mark: o
    });
    if (n && editorTextBlockUtilities.isTextEditable(e)) {
      let n = l[1];
      let i = n + 2;
      if (editorLinkConstants.mentionClosingSymbols.includes(e.model.zoneState.getModelText().slice(n, i))) {
        return [l[0], i];
      } else {
        return l;
      }
    }
    return l;
  };
  let g = async e => {
    let {
      mark: n,
      tupleRange: i,
      block: o,
      notFocus: l
    } = e;
    if (!o || !editorTextBlockUtilities.isTextEditable(o) || !n && !i) {
      return [0, 0];
    }
    let a = i || editorZoneRangeUtils.getBlockMarkRange({
      block: o,
      mark: n
    });
    let {
      blockManager: d
    } = o;
    let s = {};
    editorRevisionManager.getRevisionEntities(o, a, s);
    await d.applyTransaction("clearSideEffect", e => {
      let {
        zoneState: n
      } = o.model;
      let i = n.remove(a).toAttributeText();
      e.replace(o.record.id, ["text"], i);
    }, s);
    if (!l) {
      o.model.setSelection({
        start: a[0],
        len: 0
      }, true);
    }
    return [a[0], a[0]];
  };
  let m = (e, n, i, o) => {
    if (!editorTextBlockUtilities.isTextEditable(e) || o === editorUiComponentConstants.uiComponentTypes.BlockMenu) {
      return false;
    }
    if (o === editorUiComponentConstants.uiComponentTypes.Slash && i) {
      return true;
    }
    if (e.model.children.length > 0) {
      return false;
    }
    let a = e.model.isEmpty || n[0] === 0 && n[1] === e.model.zoneState.getModelText().length - 1;
    if (docxBlockValidatorUtils.isHeadingBlock(e.type) && a) {
      let n = foldStateManager.FoldStateManager.calculateFoldedBlocksByBlockId(e.blockManager, e.id);
      return !(n == null ? undefined : n.length);
    }
    return a;
  };
  let S = (e, n, i, o) => {
    let l = e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    l.restoreFocus();
    l.setSelection([{
      id: n,
      type: o ? "text" : "block",
      selection: {
        start: i[0],
        end: i[1]
      }
    }]);
  };
  let y = (e, n, i, o, l) => {
    if (!i) {
      e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).restoreFocus();
      return;
    }
    let r = n === blockFocusStates.focusStates.CONTAINER_BLOCK_FOCUS && l ? l[0] : 0;
    S(e, i, [r, r], o);
  };
  let w = (e, n) => {
    if (n) {
      n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docx_inster_block_fail_dev", {
        action: e
      });
      return;
    }
    flowDocEventCollector.collectEvent("docx_inster_block_fail_dev", {
      action: e
    });
  };
  require.d(exports, {
    getAdjustedMarkRange: function () {
      return p;
    },
    setSelectionToBlock: function () {
      return S;
    },
    shouldShowPlaceholder: function () {
      return m;
    },
    focusBlockOrSetSelection: function () {
      return y;
    },
    logInsertBlockFailure: function () {
      return w;
    },
    clearMarkOrRange: function () {
      return g;
    }
  });
}