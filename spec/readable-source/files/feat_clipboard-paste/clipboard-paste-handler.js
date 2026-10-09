// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'deltaSetChangesetConverter_1'
// - Resolved require(193797) to 'delta-set-changeset-converter_1'
// - Renamed variable 'a' to 'zeroConstantModule_1'
// - Resolved require(885846) to 'zero-constant-module_1'
// - Renamed variable 'i' to 'networkStateEventCollector'
// - Resolved require(67722) to 'network-state-event-collector'
// - Renamed variable 'l' to 'docxBlockUtils_1'
// - Resolved require(138224) to 'docx-block-utils_1'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'editorTextBlockUtilities'
// - Resolved require(469443) to 'editor-text-block-utilities'
// - Renamed variable 'd' to 'editorDeltaAuthorUtil'
// - Resolved require(517751) to 'editor-delta-author-util'
// - Updated imported property 'ZC' to 'compatibleBlock' (module 433991)
// - Updated imported property 'jp' to 'embedBlockTypes' (module 433991)
// - Updated imported property 'B8' to 'pasteOperationTypes' (module 433991)
// - Updated imported property 'G' to 'collectNetworkState' (module 67722)
// - Updated imported property 'AS' to 'handleThirdPartyPasteError' (module 138224)
// - Updated imported property 'k$' to 'hasTextWithApoolSimple' (module 469443)
// - Updated imported property 'cA' to 'attributedTextToDeltaSet' (module 193797)
// - Updated imported property 'S' to 'versionValue' (module 885846)
// - Updated imported property 'C' to 'getAttributedTexts' (module 517751)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 190991
         */
module.exports = function (module, exports, require) {
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorDeltaAuthorUtil = require("editor-delta-author-util") /*id: 517751*/;
  let p = {
    blockSetting: {
      blockType: docBlockTypeConstants.compatibleBlock,
      onPasteRecordAfterApply: function (e) {
        let {
          block: r,
          toastMsg: o
        } = e;
        if (!networkStateEventCollector.collectNetworkState() && docBlockTypeConstants.embedBlockTypes.includes(r.type)) {
          let e = o || t("CreationDoc_Common_NetworkDisconnected_UnableToCreate");
          docxBlockUtils_1.handleThirdPartyPasteError(r.editorAPI, r.id, e);
          return;
        }
      },
      onRecordApply: function (e) {
        let {
          snapshot: r,
          from: o,
          pasteTimes: i
        } = e;
        if (o === docBlockTypeConstants.pasteOperationTypes.innerCutPaste && !i) {
          return r;
        }
        if (editorTextBlockUtilities.hasTextWithApoolSimple(r)) {
          let e = deltaSetChangesetConverter_1.attributedTextToDeltaSet(r.text.initialAttributedTexts, r.text.apool);
          e.get(zeroConstantModule_1.versionValue).ops.forEach(e => {
            e.attributes ||= {};
            e.attributes = Object.entries(e.attributes).reduce((e, r) => {
              let [o, n] = r;
              if (!/^(flow-)?comment-id-.*/.test(o)) {
                e[o] = n;
              }
              return e;
            }, {});
          });
          r.text = editorDeltaAuthorUtil.getAttributedTexts(e);
        }
        r.comments = [];
        return r;
      }
    }
  };
  exports.default = [p];
  require.r(exports);
}