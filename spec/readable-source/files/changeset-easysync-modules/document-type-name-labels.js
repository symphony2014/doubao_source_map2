// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'fileTypeDefaultNames'
// - Renamed export 'T' to 'documentStateLabels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 564045
         */
module.exports = function (module, exports, require) {
  var driveFileTypeConstants = require("drive-file-type-constants") /*id: 216771*/;
  var i18nTranslateUtil = require("i18n-translate-util") /*id: 38843*/;
  let o = {
    deleted: i18nTranslateUtil.t("commom.document.has_been_deleted"),
    notFound: i18nTranslateUtil.t("common.document.not_exist"),
    forbidden: i18nTranslateUtil.t("permission.no_permission_for_document"),
    timeout: i18nTranslateUtil.t("common.load_content_timeout"),
    serverError: i18nTranslateUtil.t("server.error_code_-1"),
    unamedDoc: i18nTranslateUtil.t("common.unnamed_document"),
    unamedSheet: i18nTranslateUtil.t("common.unnamed_sheet"),
    unamedSlides: i18nTranslateUtil.t("LarkCCM_Slides_Untitled"),
    unamedWhiteboard: i18nTranslateUtil.t("LarkCCM_Docx_Board"),
    unamedBitable: i18nTranslateUtil.t("common.unnamed_bitable_renametest"),
    unamedMindnote: i18nTranslateUtil.t("common.unnamed_mindnote"),
    unamedWiki: i18nTranslateUtil.t("common.unnamed_wiki"),
    unamedFile: i18nTranslateUtil.t("common.unnamed_file"),
    unamedCatalog: i18nTranslateUtil.t("common.unnamed_folder"),
    versionDeleted: i18nTranslateUtil.t("LarkCCM_Docx_VersionMgmt_Deleted")
  };
  let s = {
    [driveFileTypeConstants.fileTypeEnum.DOC]: o.unamedDoc,
    [driveFileTypeConstants.fileTypeEnum.DOCX]: o.unamedDoc,
    [driveFileTypeConstants.fileTypeEnum.SHEET]: o.unamedSheet,
    [driveFileTypeConstants.fileTypeEnum.SLIDES]: o.unamedSlides,
    [driveFileTypeConstants.fileTypeEnum.WHITEBOARD]: o.unamedWhiteboard,
    [driveFileTypeConstants.fileTypeEnum.BITABLE]: o.unamedBitable,
    [driveFileTypeConstants.fileTypeEnum.MINDNOTE]: o.unamedMindnote,
    [driveFileTypeConstants.fileTypeEnum.WIKI]: o.unamedWiki,
    [driveFileTypeConstants.fileTypeEnum.FILE]: o.unamedFile,
    [driveFileTypeConstants.fileTypeEnum.CATALOG]: o.unamedCatalog
  };
  require.d(exports, {
    fileTypeDefaultNames: function () {
      return s;
    },
    documentStateLabels: function () {
      return o;
    }
  });
}