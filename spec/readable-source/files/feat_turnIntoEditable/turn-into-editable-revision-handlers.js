// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'l' to 'docxBlockValidatorUtils_1'
// - Resolved require(869432) to 'docx-block-validator-utils_1'
// - Renamed variable 'o' to 'editorFormatRevisionUtils_1'
// - Resolved require(638641) to 'editor-format-revision-utils_1'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'v1' to 'headingTypeArray' (module 433991)
// - Updated imported property 'XL' to 'getTurnIntoRevision' (module 638641)
// - Updated imported property '_3' to 'updateTurnIntoRev' (module 638641)
// - Updated imported property 'Be' to 'getBlockFormatRev' (module 638641)
// - Updated imported property 'BY' to 'syncFormatRevision' (module 638641)
// - Updated imported property 'S9' to 'isHeadingWithOrderedSubtype' (module 869432)
// - Updated imported property 'AE' to 'isHeadingWithSeqAndHeading' (module 869432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 416448
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var editorFormatRevisionUtils_1 = require("editor-format-revision-utils_1") /*id: 638641*/;
  let i = [function (e) {
    let {
      blockManager: t
    } = e;
    let n = [docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.TODO, docBlockTypeConstants.blockTypeConstants.TEXT, ...docBlockTypeConstants.headingTypeArray, docBlockTypeConstants.blockTypeConstants.CODE];
    return {
      getBaseRevisionBeforeBatchTurnInto: {
        cond: () => !!t.config.get("revising"),
        h: e => {
          let n = editorFormatRevisionUtils_1.getTurnIntoRevision(t, e);
          if (!n) {
            return null;
          }
          let r = {
            revisionId: n.revisionId,
            type: n.type
          };
          return [n, r];
        }
      },
      sideEffectFromSource: {
        cond: (e, t) => n.includes(e.type) && n.includes(t.type),
        h: (e, t, n, r, l) => {
          let {
            baseTurnIntoRevision: i
          } = l;
          if (e.type !== t.type) {
            editorFormatRevisionUtils_1.updateTurnIntoRev(n, e, t.type, i);
          }
          return r;
        }
      }
    };
  }, function (e) {
    let {
      blockManager: t
    } = e;
    return {
      getBaseBlockFormatRevisionBeforeBatchTurnInto: {
        cond: () => !!t.config.get("revising"),
        h: e => {
          let n = editorFormatRevisionUtils_1.getBlockFormatRev(t, e);
          if (!n) {
            return null;
          }
          let r = {
            revisionId: n.revisionId,
            type: n.type
          };
          return [n, r];
        }
      },
      sideEffectFromSource: {
        cond: (e, t) => docxBlockValidatorUtils_1.isHeadingWithOrderedSubtype(e, t) || docxBlockValidatorUtils_1.isHeadingWithSeqAndHeading(e, t),
        h: (e, n, r, i, d) => {
          let {
            baseBlockFormatRevision: u
          } = d;
          let c = docxBlockValidatorUtils_1.isHeadingWithOrderedSubtype(e, n) ? [["seq", "auto"], ["seq_level", "auto"]] : [["seq", "null"], ["seq_level", "null"]];
          editorFormatRevisionUtils_1.syncFormatRevision(t, r, e, u, c, e.snapshot);
          return i;
        }
      }
    };
  }];
  exports.default = i;
  require.r(exports);
}