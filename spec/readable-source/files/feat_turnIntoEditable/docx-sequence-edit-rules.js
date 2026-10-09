// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'l' to 'docxBlockValidatorUtils_1'
// - Resolved require(869432) to 'docx-block-validator-utils_1'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'wE' to 'isHeadingWithSeqProperty' (module 869432)
// - Updated imported property 'Il' to 'isHeadingWithSeq' (module 869432)
// - Updated imported property 'i7' to 'hasSeqProperty' (module 869432)
// - Updated imported property 'DB' to 'isOrderedListBlock' (module 869432)
// - Updated imported property 'kL' to 'hasSeqLevelProperty' (module 869432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 508134
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  let o = e => e.type === docBlockTypeConstants.blockTypeConstants.ORDERED || docxBlockValidatorUtils_1.isHeadingWithSeqProperty(e);
  let i = [function () {
    let e = {
      cond: docxBlockValidatorUtils_1.isHeadingWithSeq,
      h(e, t, n) {
        let {
          recordId: r
        } = e;
        if (docxBlockValidatorUtils_1.hasSeqProperty(e)) {
          n.replace(r, ["seq"], "auto");
        } else {
          n.insert(r, ["seq"], "auto");
        }
        if (docxBlockValidatorUtils_1.isOrderedListBlock(t)) {
          if (docxBlockValidatorUtils_1.hasSeqLevelProperty(e)) {
            n.replace(r, ["seq_level"], "auto");
          } else {
            n.insert(r, ["seq_level"], "auto");
          }
        }
      }
    };
    let t = {
      type: docBlockTypeConstants.blockTypeConstants.ORDERED,
      h: o
    };
    return {
      sideEffectFromSource: {
        cond: (e, t) => o(e) && !docxBlockValidatorUtils_1.isHeadingWithSeq(t),
        h(e, t, n) {
          if (docxBlockValidatorUtils_1.hasSeqProperty(e)) {
            n.remove(e.recordId, ["seq"]);
          }
          if (docxBlockValidatorUtils_1.hasSeqLevelProperty(e)) {
            n.remove(e.recordId, ["seq_level"]);
          }
        }
      },
      sideEffectFromTarget: e,
      matchRule: t
    };
  }];
  exports.default = i;
  require.r(exports);
}