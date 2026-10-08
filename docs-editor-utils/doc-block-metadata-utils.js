// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'wz' to 'getChartBlockType'
// - Renamed export 'Tf' to 'getBlockType'
// - Renamed export 'sM' to 'getBlockFileSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 282711
         */
module.exports = function (module, exports, require) {
  var o = (e, n) => {};
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var extractTokenFromUrlAndCreateDocumentNode = require("extract-token-from-url-and-create-document-node") /*id: 120372*/;
  var docxUrlPreviewUtils_1 = require("docx-url-preview-utils_1") /*id: 293956*/;
  function u(e, n) {
    let r = "";
    let {
      type: o
    } = e.snapshot;
    if (o === docBlockTypeConstants.blockTypeConstants.DIAGRAM) {
      r = e.snapshot.diagram.diagramType;
    } else if (o === docBlockTypeConstants.blockTypeConstants.ISV) {
      r = e.snapshot.block_type_id;
    } else if (o === docBlockTypeConstants.blockTypeConstants.FILE) {
      let n = e.snapshot.file.name.split(".");
      r = n.length > 1 ? n.pop().toLowerCase() : "none";
    } else if (o === docBlockTypeConstants.blockTypeConstants.IFRAME) {
      r = e.snapshot.iframe.component.type;
    } else if (o === docBlockTypeConstants.blockTypeConstants.IMAGE) {
      r = e.snapshot.image.mimeType;
    } else if (o === docBlockTypeConstants.blockTypeConstants.MESSAGE) {
      r = extractTokenFromUrlAndCreateDocumentNode.extractTokenFromUrl(e.snapshot.message_url) || "";
    } else if (o === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW) {
      var a;
      let o = n == null ? undefined : (a = n.getBlockModelsByRecordId) === null || a === undefined ? undefined : a.call(n, e.id)?.[0];
      r = docxUrlPreviewUtils_1.createUrlPreview(o == null ? undefined : o.rawUrl) || "";
    }
    return r;
  }
  function a(e) {
    let n;
    let {
      type: r
    } = e.snapshot;
    if (r === docBlockTypeConstants.blockTypeConstants.FILE) {
      n = e.snapshot.file.size;
    }
    return n;
  }
  async function s(e, n) {
    let i = n.getBlockModelsByRecordId(e.id);
    if (!(i == null ? undefined : i.length)) {
      return "";
    }
    o((i == null ? undefined : i.length) === 1, "block num is error");
    let l = i == null ? undefined : i[0];
    o(l, "cant find block");
    let {
      snapshot: {
        token: c,
        type: u
      }
    } = e;
    if (l.sheetBlocksService) {
      return (await l.sheetBlocksService.getBlockModel(c, u)).vmSupport.getStore("teaChartType")?.value;
    }
  }
  async function d(e, n) {
    let {
      type: r
    } = e.snapshot;
    let o = "";
    let l = (await s(e, n)) || "";
    switch (r) {
      case docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED:
        o = `static_${l}`;
        break;
      case docBlockTypeConstants.blockTypeConstants.CHART_REFER:
      case docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM:
        o = `dynamic_${l}`;
    }
    return o;
  }
  require.d(exports, {
    getChartBlockType: function () {
      return d;
    },
    getBlockType: function () {
      return u;
    },
    getBlockFileSize: function () {
      return a;
    }
  });
}