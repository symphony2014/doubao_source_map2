// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DW' to 'isImageFile'
// - Renamed export 'iB' to 'isClipboardOnlyFiles'
// - Renamed export 'qF' to 'createFileViewNode'
// - Renamed export 'qi' to 'processMediaFile'
// - Renamed export 'yh' to 'isVideoFile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 811061
         */
module.exports = function (module, exports, require) {
  var documentViewUtils = require("document-view-utils") /*id: 83122*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docxImageNodeCreator = require("docx-image-node-creator") /*id: 41944*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  function s(e) {
    return !!e && e.startsWith("video/");
  }
  function c(e) {
    return !!e && e.startsWith("image/");
  }
  function d(e) {
    if (!e.clipboardData) {
      return false;
    }
    let {
      types: o,
      items: r
    } = e.clipboardData;
    return o.length === 1 && o[0] === "Files" && Array.prototype.slice.call(r).findIndex(e => {
      var o;
      return !s(o = e.type) && !c(o);
    }) === -1;
  }
  function u(e, o = false) {
    let {
      name: r,
      size: a
    } = e;
    let s = o ? viewTypeConstants.viewTypes.Preview : fileUtilsAndViewHelpers.getViewTypeBySize(r, a);
    return documentViewUtils.createViewNode(s);
  }
  async function p(e) {
    if (c(e.type)) {
      return docxImageNodeCreator.createImageNodeWithFile(e);
    } else {
      return u(e);
    }
  }
  require.d(exports, {
    isImageFile: function () {
      return c;
    },
    isClipboardOnlyFiles: function () {
      return d;
    },
    createFileViewNode: function () {
      return u;
    },
    processMediaFile: function () {
      return p;
    },
    isVideoFile: function () {
      return s;
    }
  });
}