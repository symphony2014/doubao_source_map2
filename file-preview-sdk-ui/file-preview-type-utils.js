// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D8' to 'getPreviewTypes'
// - Renamed export 'Mr' to 'resolvePreviewType'
// - Renamed export 'vN' to 'getFileCategory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 732557
         */
module.exports = function (module, exports, require) {
  var n;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var nameExtensionUtils = require("name-extension-utils") /*id: 146008*/;
  var filePreviewSdkConstants = require("file-preview-sdk-constants") /*id: 842643*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  function u(e) {
    return filePreviewSdkConstants.extToPreviewTypeMap.get(e) || [];
  }
  function d(e) {
    if (!e || !e.available_preview_type?.length) {
      return null;
    }
    let i = u(nameExtensionUtils.getObjectExtension(e));
    let n = e.available_preview_type;
    if (i.length > 0) {
      for (let e of i) {
        if (n.includes(e)) {
          return e;
        }
      }
      return null;
    }
    let r = n.find(e => filePreviewSdkConstants.numericImageTypes.includes(e));
    if (isUndefinedCheck.isUndefined(r)) {
      return null;
    } else {
      return r;
    }
  }
  (n = c || {}).WORD = "word";
  n.PPT = "ppt";
  var c = n;
  let h = new Map([[fileTypeConstants_1.fileExtensions.DOCX, c.WORD], [fileTypeConstants_1.fileExtensions.DOC, c.WORD], [fileTypeConstants_1.fileExtensions.DOTX, c.WORD], [fileTypeConstants_1.fileExtensions.DOT, c.WORD], [fileTypeConstants_1.fileExtensions.DOTM, c.WORD], [fileTypeConstants_1.fileExtensions.DOCM, c.WORD], [fileTypeConstants_1.fileExtensions.PPTX, c.PPT], [fileTypeConstants_1.fileExtensions.PPT, c.PPT], [fileTypeConstants_1.fileExtensions.PPTM, c.PPT], [fileTypeConstants_1.fileExtensions.PPSX, c.PPT], [fileTypeConstants_1.fileExtensions.PPSM, c.PPT], [fileTypeConstants_1.fileExtensions.PPS, c.PPT], [fileTypeConstants_1.fileExtensions.POTX, c.PPT], [fileTypeConstants_1.fileExtensions.POTM, c.PPT], [fileTypeConstants_1.fileExtensions.POT, c.PPT]]);
  function p(e) {
    let {
      fileInfo: t,
      enableWPSComponent: i,
      isInEditMode: n,
      enablePptPreferTranscodePreview: o,
      enableWordPreferTranscodePreview: u
    } = e;
    let p = fileTypeConstants_1.fileCategories.NULL;
    let _ = d(t);
    let f = filePreviewSdkConstants.previewTypeCatMap.get(_);
    if (i && t && t.weboffice) {
      if (!function (e, t, i) {
        let n = nameExtensionUtils.getObjectExtension(e);
        let o = h.get(n);
        return o === c.PPT && !!t || o === c.WORD && !!i;
      }(t, o, u) || n || objectPathGetDefault.getObjectPathDefault(t, `preview_meta.data.${_}.status`) !== fileTypeConstants_1.previewStates.READY) {
        return fileTypeConstants_1.fileCategories.WPS;
      }
      p = fileTypeConstants_1.fileCategories.WPS;
    }
    if (f) {
      p = f;
    } else if (fileTypeConstants_1.imageFileTypes.includes(nameExtensionUtils.getObjectExtension(t))) {
      p = fileTypeConstants_1.fileCategories.IMG;
    } else if (nameExtensionUtils.getObjectExtension(t) === fileTypeConstants_1.fileExtensions.PDF) {
      p = fileTypeConstants_1.fileCategories.PDF;
    } else if (fileTypeConstants_1.plainTextTypes.includes(nameExtensionUtils.getObjectExtension(t))) {
      p = fileTypeConstants_1.fileCategories.CODE;
    }
    return p;
  }
  require.d(exports, {
    getPreviewTypes: function () {
      return u;
    },
    resolvePreviewType: function () {
      return d;
    },
    getFileCategory: function () {
      return p;
    }
  });
}