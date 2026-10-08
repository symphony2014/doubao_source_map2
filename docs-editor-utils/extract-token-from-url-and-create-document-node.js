// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Je' to 'extractTokenFromUrl'
// - Renamed export 'NL' to 'createDocumentNodeFromMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 120372
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  let d = /^\/client\/message\/link\/open$/;
  function f(e) {
    try {
      let {
        pathname: n,
        search: r
      } = new URL(e);
      if (d.test(n)) {
        let {
          token: e
        } = r.slice(1).split("&").reduce((e, n) => {
          let [r, o] = n.split("=");
          e[r] = o;
          return e;
        }, {});
        return e;
      }
    } catch {}
  }
  function h(e) {
    let {
      message_url: n,
      author: r,
      comments: d
    } = e;
    let f = {
      author: r
    };
    d.forEach(e => {
      f[`${docxCommentConstants.commentIdPrefix}${e}`] = "true";
    });
    let h = new contentStructureDelta.ContentDelta().insert(n, f);
    let _ = new deltaSetCore.DeltaSet({
      [zeroConstantModule_1.versionValue]: h
    });
    let p = editorDataTextUtils.getAttributedTexts(_);
    return documentNodeFactory_2.createDocumentNode({
      text: p,
      comments: d
    }, docBlockTypeConstants.blockTypeConstants.TEXT);
  }
  require.d(exports, {
    extractTokenFromUrl: function () {
      return f;
    },
    createDocumentNodeFromMessage: function () {
      return h;
    }
  });
}