// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Renamed variable 'a' to 'contentStructureDelta'
// - Resolved require(768480) to 'content-structure-delta'
// - Renamed variable 'i' to 'deltaSetCore'
// - Resolved require(47229) to 'delta-set-core'
// - Renamed variable 'l' to 'deltaSetChangesetConverter_1'
// - Resolved require(193797) to 'delta-set-changeset-converter_1'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'editorModuleConstantsConfig'
// - Resolved require(414567) to 'editor-module-constants-config'
// - Renamed variable 'd' to 'textBlockAttributeUtils'
// - Resolved require(37833) to 'text-block-attribute-utils'
// - Renamed variable 'p' to 'editorDeltaTextUtils'
// - Resolved require(728515) to 'editor-delta-text-utils'
// - Renamed variable 'u' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'm' to 'docxClipboardUtils'
// - Resolved require(538199) to 'docx-clipboard-utils'
// - Renamed variable 'h' to 'docxBlockTypeConstants'
// - Resolved require(49433) to 'docx-block-type-constants'
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'Z7' to 'dataTransformOps' (module 324971)
// - Updated imported property 'T' to 'fileTypes' (module 49433)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'cA' to 'attributedTextToDeltaSet' (module 193797)
// - Updated imported property 'Q7' to 'extractAttributedTexts' (module 193797)
// - Updated imported property 'S2' to 'defaultVersion' (module 414567)
// - Updated imported property 'bQ' to 'inlineBlockAttributes' (module 414567)
// - Updated imported property 'd' to 'isInsertString' (module 47229)
// - Updated imported property 'D' to 'DeltaSet' (module 47229)
// - Updated imported property 'GB' to 'isDeltaEmpty' (module 728515)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'I' to 'ContentDelta' (module 768480)
// - Updated imported property 'lk' to 'traverseAndFilterRecords' (module 538199)
// - Updated imported property 'Zj' to 'sanitizeBlockData' (module 37833)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 887184
         */
module.exports = function (module, exports, require) {
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var textBlockAttributeUtils = require("text-block-attribute-utils") /*id: 37833*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  var f = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: function (e) {
      let {
        format: r,
        data: o
      } = e;
      if (r !== docxBlockTypeConstants.fileTypes.HTML) {
        return;
      }
      let {
        recordMap: n,
        recordIds: a
      } = o;
      let d = {
        hasRecordByRecordId: e => !!n[e],
        getRecordByRecordId: e => n[e]
      };
      a.forEach(r => {
        let {
          snapshot: o
        } = e.data.recordMap[r];
        if (o.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
          return;
        }
        let n = o.text;
        let a = deltaSetChangesetConverter_1.attributedTextToDeltaSet(n.initialAttributedTexts, n.apool);
        a.get(editorModuleConstantsConfig.defaultVersion).ops.forEach(e => {
          if (!deltaSetCore.isInsertString(e)) {
            return;
          }
          let r = editorDeltaTextUtils.isDeltaEmpty(e, d, true, true);
          if (r && e.insert !== r) {
            e.insert = r;
            if (e.attributes) {
              Object.keys(e.attributes).forEach(r => {
                if (editorModuleConstantsConfig.inlineBlockAttributes.includes(r)) {
                  delete e.attributes[r];
                }
              });
            }
          }
        });
        o.text = deltaSetChangesetConverter_1.extractAttributedTexts(a);
      });
    },
    options: {
      priority: clipboardPasteDataHandlers.dataTransformOps.transformCodeContentToText
    }
  }, {
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: function (e) {
      var r;
      let {
        selectedBlocks: o,
        blockManager: n,
        data: h
      } = e;
      if (o[0].type === docxBlockSelectionHandler_1.blockTypes.BLOCK) {
        return;
      }
      let {
        recordIds: f,
        recordMap: b,
        payloadMap: k
      } = h;
      if (n.getBlockModelByBlockId(o[0].id).type !== docBlockTypeConstants.blockTypeConstants.CODE) {
        return;
      }
      let y = new contentStructureDelta.ContentDelta();
      let g = {
        hasRecordByRecordId: e => !!b[e],
        getRecordByRecordId: e => b[e]
      };
      docxClipboardUtils.traverseAndFilterRecords(f, b, e => {
        let {
          snapshot: r
        } = b[e];
        if (!r.text) {
          return;
        }
        let o = r.text;
        deltaSetChangesetConverter_1.attributedTextToDeltaSet(o.initialAttributedTexts, o.apool).get(editorModuleConstantsConfig.defaultVersion).forEach(r => {
          if (!deltaSetCore.isInsertString(r)) {
            return;
          }
          let o = Array((((k[e] || {}).level || 1) - 1) * 2 + 1).join(" ");
          r.insert = o + (editorDeltaTextUtils.isDeltaEmpty(r, g, false, true) || r.insert);
          textBlockAttributeUtils.sanitizeBlockData(r.attributes);
          y.insert(r.insert, r.attributes);
          return r;
        });
        y.insertEnter();
      });
      if (!y.ops.length) {
        return;
      }
      let _ = y.ops[y.ops.length - 1];
      _.insert = (r = _.insert) === null || r === undefined ? undefined : r.substring(0, _.insert.length - 1);
      h.recordIds.splice(0, h.recordIds.length - 1);
      b[f[0]] = {
        id: f[0],
        snapshot: {
          text: deltaSetChangesetConverter_1.extractAttributedTexts(new deltaSetCore.DeltaSet({
            [editorModuleConstantsConfig.defaultVersion]: y
          })),
          type: docBlockTypeConstants.blockTypeConstants.TEXT
        }
      };
    },
    options: {
      priority: clipboardPasteDataHandlers.dataTransformOps.transformCodeChildrenToPlainText
    }
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return f;
    }
  });
}