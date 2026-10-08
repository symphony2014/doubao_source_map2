// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'markdownStringifiers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 499497
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  var docxTableMarkdownConverter = require("docx-table-markdown-converter") /*id: 325871*/;
  let l = (() => {
    let e = {
      [docBlockTypeConstants.blockTypeConstants.ORDERED]: {
        stringify(e, o, r) {
          let n = r.orderMap.get(o.record.id) || "1";
          let l = docBlockDepthUtil.getBlockDepth(o) || 1;
          return `${docxTableMarkdownConverter.repeatString((l - 1) * 2)}${n}. ${e}`;
        }
      },
      [docBlockTypeConstants.blockTypeConstants.BULLET]: {
        stringify: (e, o) => {
          let r = docBlockDepthUtil.getBlockDepth(o) || 1;
          return `${docxTableMarkdownConverter.repeatString((r - 1) * 2)}- ${e}`;
        }
      },
      [docBlockTypeConstants.blockTypeConstants.TODO]: {
        stringify: (e, o) => {
          let r = docBlockDepthUtil.getBlockDepth(o) || 1;
          let {
            done: n
          } = o.record.snapshot;
          return `${docxTableMarkdownConverter.repeatString((r - 1) * 2)}[${n ? "x" : ""}] ${e}`;
        }
      },
      [docBlockTypeConstants.blockTypeConstants.TEXT]: {
        stringify: (e, o) => {
          let r = docBlockDepthUtil.getBlockDepth(o) || 1;
          return docxTableMarkdownConverter.repeatString((r - 1) * 2) + e;
        }
      }
    };
    let o = {
      stringify(e, o, r, n) {
        if (n && o.record.snapshot.seq) {
          let r = n.getOrderText(o.record.id);
          return `${r} ${e}`;
        }
        return e;
      }
    };
    for (let r of docBlockTypeConstants.headingTypeArray) {
      e[r] = o;
    }
    return e;
  })();
  require.d(exports, {
    markdownStringifiers: function () {
      return l;
    }
  });
}