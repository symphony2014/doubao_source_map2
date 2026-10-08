// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'am' to 'processPasteRecords'
// - Renamed export 'wx' to 'isSupportedBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 823676
         */
module.exports = function (module, exports, require) {
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  function a(e) {
    let {
      data: r
    } = e;
    let {
      recordIds: n,
      recordMap: a
    } = r;
    docxClipboardUtils.traverseAndFilterRecords(n, a, e => {
      let {
        snapshot: r
      } = a[e];
      let n = s(r.type, (r == null ? undefined : r.block_type_id) || "");
      if (!r || !n) {
        return;
      }
      let {
        data: {
          theme: o,
          view: c,
          data: d
        }
      } = r;
      if (typeof d == "string") {
        a[e] = {
          id: e,
          snapshot: function (e, r = "chart", n = "default") {
            return function (e, r = docBlockTypeConstants.blockTypeConstants.ISV) {
              return documentNodeFactory_2.createDocumentNode({
                data: {},
                ...e
              }, r);
            }({
              app_block_id: "",
              comment_details: {},
              data: e,
              theme: n,
              view: r,
              type: docBlockTypeConstants.blockTypeConstants.MERMAID
            });
          }(d, c, o)
        };
      }
    });
  }
  function s(e, r) {
    return e === docBlockTypeConstants.blockTypeConstants.ISV && ["blk_631fefbbae02400430b8f9f4", "blk_640017963d808005a21a6445"].includes(r);
  }
  require.d(exports, {
    processPasteRecords: function () {
      return a;
    },
    isSupportedBlock: function () {
      return s;
    }
  });
}