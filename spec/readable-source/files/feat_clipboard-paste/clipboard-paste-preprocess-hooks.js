// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Renamed variable 'i' to 'deltaSetChangesetConverter_1'
// - Resolved require(193797) to 'delta-set-changeset-converter_1'
// - Renamed variable 'l' to 'zeroConstantModule_1'
// - Resolved require(885846) to 'zero-constant-module_1'
// - Renamed variable 's' to 'syncUrlBlockUtils'
// - Resolved require(299195) to 'sync-url-block-utils'
// - Renamed variable 'c' to 'editorDeltaTextUtils'
// - Resolved require(728515) to 'editor-delta-text-utils'
// - Renamed variable 'd' to 'pasteStateManager'
// - Resolved require(764327) to 'paste-state-manager'
// - Renamed variable 'p' to 'editorDataManagerClass'
// - Resolved require(699568) to 'editor-data-manager-class'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Mx' to 'quoteBlockTypes' (module 433991)
// - Updated imported property 'B8' to 'pasteOperationTypes' (module 433991)
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'vg' to 'pasteHandlerMap' (module 324971)
// - Updated imported property 'UN' to 'isSyncingActive' (module 299195)
// - Updated imported property 'WK' to 'getPasteState' (module 764327)
// - Updated imported property 'I' to 'EditorDataManager' (module 699568)
// - Updated imported property 'XQ' to 'getDeltaText' (module 728515)
// - Updated imported property 'GB' to 'isDeltaEmpty' (module 728515)
// - Updated imported property 'cA' to 'attributedTextToDeltaSet' (module 193797)
// - Updated imported property 'S' to 'versionValue' (module 885846)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 87310
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var pasteStateManager = require("paste-state-manager") /*id: 764327*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  function u(e) {
    let r = e.data.recordIds[0];
    let o = e.data.recordMap[r];
    if (o.snapshot.type === docBlockTypeConstants.blockTypeConstants.PAGE) {
      o.snapshot.type = docBlockTypeConstants.blockTypeConstants.TEXT;
    }
  }
  var m = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: u,
    options: {
      priority: clipboardPasteDataHandlers.pasteHandlerMap[clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData].transformPageBlockToText
    }
  }, {
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: function (e) {
      let r;
      let {
        blockManager: o,
        selectedBlocks: a,
        data: {
          recordIds: u,
          recordMap: m
        }
      } = e;
      let {
        snapshot: h
      } = m[u[0]];
      let f = h.text;
      if (!function (e, r) {
        let o = e.getBlockStructByBlockId(r[0].id);
        return !!o && (o.isRoot() || syncUrlBlockUtils.isSyncingActive() && o.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
      }(o, a) || ![...docBlockTypeConstants.quoteBlockTypes, docBlockTypeConstants.blockTypeConstants.PAGE].includes(h.type)) {
        return;
      }
      let {
        from: b,
        pasteTimes: k
      } = pasteStateManager.getPasteState();
      let y = {
        hasRecordByRecordId: e => !!m[e],
        getRecordByRecordId: e => m[e]
      };
      if (b !== docBlockTypeConstants.pasteOperationTypes.innerCutPaste || k) {
        r = editorDataManagerClass.EditorDataManager.deserializePlainText(editorDeltaTextUtils.getDeltaText(h, y));
      } else {
        let e = deltaSetChangesetConverter_1.attributedTextToDeltaSet(f.initialAttributedTexts, f.apool);
        let o = "";
        let n = e.get(zeroConstantModule_1.versionValue).ops.map(e => {
          let r = editorDeltaTextUtils.isDeltaEmpty(e, y, true);
          let n = {
            text: e.insert,
            mark: {}
          };
          if (r) {
            n.text = r;
          }
          let a = e.attributes;
          if (a) {
            Object.keys(a).forEach(e => {
              if (e.startsWith("flow-comment-id")) {
                n.mark[e] = a[e];
              }
            });
          }
          o += n.text;
          return n;
        });
        r = editorDataManagerClass.EditorDataManager.deserialize({
          alltext: o,
          size: o.length,
          nodes: n
        });
      }
      m[u[0]].snapshot.text = r;
    },
    options: {
      priority: clipboardPasteDataHandlers.pasteHandlerMap[clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData].pasteTextIntoTitle
    }
  }];
  require.r(exports);
  require.d(exports, {
    transformPageBlockToText: function () {
      return u;
    },
    default: function () {
      return m;
    }
  });
}