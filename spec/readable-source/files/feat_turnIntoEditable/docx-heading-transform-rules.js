// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'lastElementHelper'
// - Resolved require(715951) to 'last-element-helper'
// - Renamed variable 'l' to 'docxBlockValidatorUtils'
// - Resolved require(713166) to 'docx-block-validator-utils'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'i' to 'docxBlockValidatorUtils_1'
// - Resolved require(869432) to 'docx-block-validator-utils_1'
// - Renamed variable 'd' to 'flowHeadingFoldUtils'
// - Resolved require(451530) to 'flow-heading-fold-utils'
// - Updated imported property 'Kd' to 'isHeadingBlock' (module 713166)
// - Updated imported property 'i7' to 'hasSeqProperty' (module 869432)
// - Updated imported property 'Il' to 'isHeadingWithSeq' (module 869432)
// - Updated imported property 'wE' to 'isHeadingWithSeqProperty' (module 869432)
// - Updated imported property 'SR' to 'isFoldedHeading' (module 451530)
// - Updated imported property 'je' to 'checkFoldState' (module 451530)
// - Updated imported property 'aL' to 'getVisibleHeading' (module 451530)
// - Updated imported property 'Sf' to 'findNextHeading' (module 451530)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Z' to 'getLastElement' (module 715951)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 11776
         */
module.exports = function (module, exports, require) {
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  let u = {
    cond: e => docxBlockValidatorUtils.isHeadingBlock(e),
    h: (e, t) => !(Number(docxBlockValidatorUtils_1.hasSeqProperty(e)) ^ Number(docxBlockValidatorUtils_1.isHeadingWithSeq(t)))
  };
  let c = {
    cond: (e, t) => flowHeadingFoldUtils.isFoldedHeading(e) && e.children.length === 0 && !docxBlockValidatorUtils.isHeadingBlock(t.type) || flowHeadingFoldUtils.checkFoldState(e, t),
    h(e, t, n) {
      n.replace(e.recordId, ["folded"], false);
    }
  };
  let a = [function (e) {
    let {
      editorContext: t,
      blockManager: n
    } = e;
    return {
      targetInfoGetRule: {
        cond(e, t) {
          let n = docxBlockValidatorUtils_1.isHeadingWithSeqProperty(t) && (docxBlockValidatorUtils.isHeadingBlock(e) || e === docBlockTypeConstants.blockTypeConstants.ORDERED);
          let r = docxBlockValidatorUtils.isHeadingBlock(t.type) && e === docBlockTypeConstants.blockTypeConstants.ORDERED || t.type === docBlockTypeConstants.blockTypeConstants.ORDERED && docxBlockValidatorUtils.isHeadingBlock(e);
          return n || r;
        },
        h(e, t, n) {
          let r = docxBlockValidatorUtils_1.isHeadingWithSeqProperty(e) && (docxBlockValidatorUtils.isHeadingBlock(t) || t === docBlockTypeConstants.blockTypeConstants.ORDERED);
          let d = docxBlockValidatorUtils.isHeadingBlock(e.type) && t === docBlockTypeConstants.blockTypeConstants.ORDERED;
          if (r) {
            if (n) {
              if (t === e.type) {
                return {
                  type: docBlockTypeConstants.blockTypeConstants.ORDERED
                };
              } else {
                return {
                  type: e.type
                };
              }
            } else if (t === docBlockTypeConstants.blockTypeConstants.ORDERED) {
              return {
                type: e.type,
                subType: docBlockTypeConstants.blockTypeConstants.ORDERED
              };
            } else {
              return {
                type: t,
                subType: docBlockTypeConstants.blockTypeConstants.ORDERED
              };
            }
          }
          if (d) {
            return {
              type: e.type,
              subType: docBlockTypeConstants.blockTypeConstants.ORDERED
            };
          } else {
            return {
              type: t,
              subType: docBlockTypeConstants.blockTypeConstants.ORDERED
            };
          }
        }
      },
      targetInfoMatchRule: u,
      actionBeforeBatchTurnInto: {
        cond: (e, i, u) => {
          if (u.length === 0 || e.length === 0 || !docxBlockValidatorUtils.isHeadingBlock(i) || i === docBlockTypeConstants.blockTypeConstants.HEADING9) {
            return false;
          }
          let {
            fold: c
          } = t;
          let a = flowHeadingFoldUtils.getVisibleHeading(lastElementHelper.getLastElement(e), n, c);
          let f = flowHeadingFoldUtils.findNextHeading(a, c);
          return !!a && !!f && f.type.slice(-1) > i.slice(-1);
        },
        h: (e, l) => {
          let {
            fold: o
          } = t;
          let i = flowHeadingFoldUtils.getVisibleHeading(lastElementHelper.getLastElement(e), n, o);
          l.replace(i.recordId, ["folded"], false);
        }
      },
      sideEffectFromSource: c
    };
  }];
  exports.default = a;
  require.r(exports);
}