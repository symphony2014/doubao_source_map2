// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$N' to 'noCopyPermDomClass'
// - Renamed export 'AQ' to 'platformLanguageMap'
// - Renamed export 'Dc' to 'previewTimeout'
// - Renamed export 'Do' to 'specificErrorCode'
// - Renamed export 'GM' to 'fatalPreviewStates'
// - Renamed export 'GP' to 'wpsModes'
// - Renamed export 'HR' to 'maxPreviewCount'
// - Renamed export 'IV' to 'driveSheetInfoKey'
// - Renamed export 'Ie' to 'languages'
// - Renamed export 'Lb' to 'allPreviewStatusKey'
// - Renamed export 'Le' to 'numericImageTypes'
// - Renamed export 'M$' to 'securityStates'
// - Renamed export 'Nc' to 'viewModes'
// - Renamed export 'O9' to 'extToPreviewTypeMap'
// - Renamed export 'PC' to 'specificErrorCode2'
// - Renamed export 'PM' to 'retryCount'
// - Renamed export 'S' to 'folderType'
// - Renamed export 'S1' to 'maxBufferSize'
// - Renamed export 'TN' to 'pdfEngines'
// - Renamed export 'UP' to 'defaultTimeout'
// - Renamed export 'Uj' to 'specificErrorCodes'
// - Renamed export 'WX' to 'networkErrorCode'
// - Renamed export 'ZS' to 'errorPreviewStates'
// - Renamed export '_u' to 'errorMessages'
// - Renamed export 'aV' to 'permissionLevels'
// - Renamed export 'c2' to 'permissionKeys'
// - Renamed export 'ex' to 'pdfCategories'
// - Renamed export 'i3' to 'animationDuration'
// - Renamed export 'kN' to 'thumbnailSize'
// - Renamed export 'kv' to 'tokenKeys'
// - Renamed export 'lF' to 'linearizedToStdMap'
// - Renamed export 'lf' to 'defaultFileInfo'
// - Renamed export 'ob' to 'supportedLanguages'
// - Renamed export 'pq' to 'fileActions'
// - Renamed export 'qI' to 'drivePdfInfoKey'
// - Renamed export 'qV' to 'previewTypeCatMap'
// - Renamed export 'qv' to 'pdfCategories2'
// - Renamed export 'uD' to 'specificErrorCode3'
// - Renamed export 'v6' to 'linearizedImgTypes'
// - Renamed export 'xL' to 'actionStatuses'
// - Renamed export 'yC' to 'geoCreationDocMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 842643
         */
module.exports = function (module, exports, require) {
  var n;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var mapObjectKeys = require("map-object-keys") /*id: 975446*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var previewSdkConstants = require("preview-sdk-constants") /*id: 38424*/;
  let a = {
    EXPLORER: "explorer",
    WIKI: "wiki"
  };
  let u = {
    SAVE_TO_DRIVE_SUCCESS: "SAVE_TO_DRIVE_SUCCESS",
    SAVE_TO_DRIVE_FAILED: "SAVE_TO_DRIVE_FAILED",
    WAITING_RENDER: "WAITING_RENDER",
    DOWNLOAD_ERROR: "DOWNLOAD_ERROR",
    DOWNLOAD_SUCCESS: "DOWNLOAD_SUCCESS",
    COPY_SUCCESS: "COPY_SUCCESS",
    COPY_FAILED: "COPY_FAILED",
    EMPTY_PDF: "EMPTY_PDF",
    PDF_LAST_PAGE: "PDF_LAST_PAGE"
  };
  let d = 3000;
  let c = 40;
  let h = 11001;
  let p = 90001061;
  let _ = 90002101;
  let f = [900099001, 900099002, 900099003, 900099004];
  let E = 900004230;
  let m = {
    900004230: "CreationDoc_MultiGeo_900004230",
    900004510: "CreationDoc_MultiGeo_900004510",
    900004511: "CreationDoc_MultiGeo_900004511"
  };
  let v = 2000;
  let g = "folder";
  let P = Object.values(fileTypeConstants_1.imagePreviewTypes).filter(isNumberUtil.isNumber);
  let I = [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_JPG, fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG];
  let D = new Map([[fileTypeConstants_1.imagePreviewTypes.PDF, fileTypeConstants_1.fileCategories.PDF], [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.fileCategories.PDF], [fileTypeConstants_1.imagePreviewTypes.PNG, fileTypeConstants_1.fileCategories.IMG], [fileTypeConstants_1.imagePreviewTypes.JPG, fileTypeConstants_1.fileCategories.IMG], [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_JPG, fileTypeConstants_1.fileCategories.IMG], [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG, fileTypeConstants_1.fileCategories.IMG], [fileTypeConstants_1.imagePreviewTypes.VIDEO, fileTypeConstants_1.fileCategories.VIDEO], [fileTypeConstants_1.imagePreviewTypes.OGG_MEDIA, fileTypeConstants_1.fileCategories.VIDEO], [fileTypeConstants_1.imagePreviewTypes.ARCHIVE, fileTypeConstants_1.fileCategories.ARCHIVE], [fileTypeConstants_1.imagePreviewTypes.TEXT, fileTypeConstants_1.fileCategories.CODE], [fileTypeConstants_1.imagePreviewTypes.HTML, fileTypeConstants_1.fileCategories.SHEET]]);
  let C = new Map([[fileTypeConstants_1.fileExtensions.PDF, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.FAST_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.DOC, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.DOCX, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.DOT, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.DOTX, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.WPS, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.PPT, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.PPTX, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.PPS, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.PPSX, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.POT, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.RTF, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.XLS, [fileTypeConstants_1.imagePreviewTypes.HTML, fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.XLSX, [fileTypeConstants_1.imagePreviewTypes.HTML, fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.XLSM, [fileTypeConstants_1.imagePreviewTypes.HTML, fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.ET, [fileTypeConstants_1.imagePreviewTypes.HTML, fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.CSV, [fileTypeConstants_1.imagePreviewTypes.TEXT, fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.TXT, [fileTypeConstants_1.imagePreviewTypes.TEXT, fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.AVI, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.MOV, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.MP4, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.A3GP, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.A3GPP, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.A3GPP2, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.ASF, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.DV, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.M2T, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.M4V, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.MKV, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.MPE, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.MPG, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.MTS, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.OGV, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.RM, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.TS, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.VOB, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.WEBM, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.WMV, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.FLV, [fileTypeConstants_1.imagePreviewTypes.VIDEO]], [fileTypeConstants_1.fileExtensions.OGG, [fileTypeConstants_1.imagePreviewTypes.OGG_MEDIA]], [fileTypeConstants_1.fileExtensions.SKETCH, [fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.HEIC, [fileTypeConstants_1.imagePreviewTypes.JPG]], [fileTypeConstants_1.fileExtensions.HEIF, [fileTypeConstants_1.imagePreviewTypes.JPG]], [fileTypeConstants_1.fileExtensions.JPEG, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_JPG, fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.JPG, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_JPG, fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.PNG, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG, fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.SVG, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG, fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.PSD, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG, fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.PSB, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG, fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.AI, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG, fileTypeConstants_1.imagePreviewTypes.PNG]], [fileTypeConstants_1.fileExtensions.TAR, [fileTypeConstants_1.imagePreviewTypes.ARCHIVE]], [fileTypeConstants_1.fileExtensions.GZ, [fileTypeConstants_1.imagePreviewTypes.ARCHIVE]], [fileTypeConstants_1.fileExtensions.BZ2, [fileTypeConstants_1.imagePreviewTypes.ARCHIVE]], [fileTypeConstants_1.fileExtensions.ZIP, [fileTypeConstants_1.imagePreviewTypes.ARCHIVE]], [fileTypeConstants_1.fileExtensions.A7Z, [fileTypeConstants_1.imagePreviewTypes.ARCHIVE]], [fileTypeConstants_1.fileExtensions.RAR, [fileTypeConstants_1.imagePreviewTypes.ARCHIVE]], [fileTypeConstants_1.fileExtensions.PAGES, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.NUMBERS, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]], [fileTypeConstants_1.fileExtensions.KEY, [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]]]);
  let T = new Map([[fileTypeConstants_1.imagePreviewTypes.LINEARIZED_JPG, fileTypeConstants_1.imagePreviewTypes.JPG], [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PNG, fileTypeConstants_1.imagePreviewTypes.PNG], [fileTypeConstants_1.imagePreviewTypes.LINEARIZED_PDF, fileTypeConstants_1.imagePreviewTypes.PDF]]);
  let F = [fileTypeConstants_1.previewStates.INTERFACE_ERROR, fileTypeConstants_1.previewStates.GET_FILE_INFO_ERROR, fileTypeConstants_1.previewStates.IFRAME_NETWORK_ERROR, fileTypeConstants_1.previewStates.PROGRESS, fileTypeConstants_1.previewStates.WPS_GENERIC_ERROR, fileTypeConstants_1.previewStates.WPS_NETWORK_OFFLINE];
  let w = [fileTypeConstants_1.previewStates.GET_PREVIEW_URL_ERROR, fileTypeConstants_1.previewStates.GET_PREVIEW_URL_FATAL, fileTypeConstants_1.previewStates.FILE_TYPE_UNSUPPORTED, fileTypeConstants_1.previewStates.FILE_EMPTY, fileTypeConstants_1.previewStates.FILE_RENDER_ERROR, fileTypeConstants_1.previewStates.ARCHIVE_FILE_TYPE_UNEXPECTED, fileTypeConstants_1.previewStates.ARCHIVE_FILE_WHOLE_NODE_COUNT_EXCEEDED, fileTypeConstants_1.previewStates.ARCHIVE_FILE_SINGLE_NODE_COUNT_EXCEEDED, fileTypeConstants_1.previewStates.THIRD_PARTY_ENCRYPTED, fileTypeConstants_1.previewStates.WPS_FILE_ERROR, fileTypeConstants_1.previewStates.WPS_NO_EDIT_PERMISSION, fileTypeConstants_1.previewStates.WPS_FILE_TOO_LARGE, fileTypeConstants_1.previewStates.WPS_SESSION_FULL, fileTypeConstants_1.previewStates.WPS_CUSTOM_ERROR, fileTypeConstants_1.previewStates.MEDIA_TYPE_UNSUPPORTED];
  let b = [fileTypeConstants_1.fileCategories.PDF];
  fileTypeConstants_1.docSourceTypes.DOC;
  fileTypeConstants_1.docSourceTypes.DOCFILE;
  fileTypeConstants_1.docSourceTypes.EMAIL;
  fileTypeConstants_1.docSourceTypes.CALENDAR;
  fileTypeConstants_1.docSourceTypes.LARK;
  fileTypeConstants_1.docSourceTypes.APPBUILDER;
  let R = {
    [fileTypeConstants_1.fileSourceTypes.LARK]: fileTypeConstants_1.docSourceTypes.LARK,
    [fileTypeConstants_1.fileSourceTypes.APPBUILDER]: fileTypeConstants_1.docSourceTypes.APPBUILDER,
    [fileTypeConstants_1.fileSourceTypes.SMARTABLE]: fileTypeConstants_1.docSourceTypes.SMARTABLE,
    [fileTypeConstants_1.fileSourceTypes.SOPHON]: fileTypeConstants_1.docSourceTypes.SOPHON
  };
  mapObjectKeys.mapObjectKeys(R);
  let O = "drive-pdf-info";
  let y = "drive-sheet-info";
  let N = 256;
  let S = {
    SAVE_TO_DRIVE: "saveToDrive",
    VIEW_IN_DRIVE: "viewInDrive",
    DOWNLOAD: "download",
    OPEN_LOCALLY: "openLocally",
    SHARE: "share",
    CONVERT_TO_DOC: "convertToDoc"
  };
  let L = {
    name: "",
    size: -1,
    available_preview_type: [],
    preview_status: fileTypeConstants_1.previewStates.GET_FILE_INFO_ERROR,
    version: "",
    data_version: "",
    comment_flag: 0,
    weboffice: false
  };
  let x = {
    FILE_TOKEN: "FILE_TOKEN",
    VERSION: "VERSION",
    SEED: "SEED",
    IS_IN_EDIT_MODE: "IS_IN_EDIT_MODE"
  };
  let A = [fileTypeConstants_1.fileCategories.PDF];
  let V = {
    WPS: 1,
    MID_WPS: 2
  };
  let k = {
    UNKNOWN: "Unknown",
    FILE_INFO_ERROR: "GetFileInfoFailed",
    USER_NOT_LOGIN: "userNotLogin",
    INVALID_LINK: "InvalidLink",
    SESSION_FULL: "SessionFull",
    FAIL: "Fail",
    PERMISSION_DENIED: "PermissionDenied",
    GET_TOKEN_FAILED: "GetTokenFailed",
    SESSION_EXPIRED: "SessionExpired",
    FILE_TOO_LARGE: "fileTooLarge",
    SECURE_DOCUMENT_ERROR: "SecureDocumentError"
  };
  let M = {
    READ: 1,
    EDIT: 2
  };
  let B = "ALL_PREVIEW_STATUS";
  let U = {
    PDFJS: "pdfjs",
    FAST_PDF: "fastPDF"
  };
  let G = 80;
  let j = 500;
  let W = 5;
  let H = {
    ZH: "zh",
    EN: "en"
  };
  let $ = ["zh", "zh-CN", "zh-HK", "zh-TW"];
  let Z = {
    [previewSdkConstants.platformTypes.FEISHU]: {
      [H.ZH]: "zh-CN",
      [H.EN]: "en-US"
    },
    [previewSdkConstants.platformTypes.LARK]: {
      [H.ZH]: "zh-lark",
      [H.EN]: "en-lark"
    }
  };
  (n = {}).DOCCONTENTCOPY = "docContentCopy";
  n.FILECONTENTCOPY = "fileContentCopy";
  n.DOCCREATECOPY = "docCreateCopy";
  n.FILECREATECOPY = "fileCreateCopy";
  n.DOCEXPORT = "docExport";
  n.FILEEXPORT = "fileExport";
  n.DOCPRINT = "docPrint";
  n.FILEPRINT = "filePrint";
  n.DOCDOWNLOAD = "docDownload";
  n.FILEDOWNLOAD = "fileDownload";
  n.DOCDELETE = "docDelete";
  n.FILEDELETE = "fileDelete";
  n.ATTACHMENTDOWNLOAD = "attachmentDownload";
  n.UPLOAD = "upload";
  n.EXTERNALACCESS = "externalAccess";
  let J = n;
  let z = [fileTypeConstants_1.previewStates.DLP_INTERNAL_TENANT_UPLOAD_SECURITY, fileTypeConstants_1.previewStates.DLP_EXTERNAL_TENANT_UPLOAD_SECURITY, fileTypeConstants_1.errorCodes.NOT_FOUND];
  let K = "without-copyperm-dom";
  require.d(exports, {
    noCopyPermDomClass: function () {
      return K;
    },
    platformLanguageMap: function () {
      return Z;
    },
    previewTimeout: function () {
      return j;
    },
    specificErrorCode: function () {
      return E;
    },
    fatalPreviewStates: function () {
      return w;
    },
    wpsModes: function () {
      return V;
    },
    maxPreviewCount: function () {
      return c;
    },
    driveSheetInfoKey: function () {
      return y;
    },
    languages: function () {
      return H;
    },
    allPreviewStatusKey: function () {
      return B;
    },
    numericImageTypes: function () {
      return P;
    },
    securityStates: function () {
      return z;
    },
    viewModes: function () {
      return a;
    },
    extToPreviewTypeMap: function () {
      return C;
    },
    specificErrorCode2: function () {
      return p;
    },
    retryCount: function () {
      return W;
    },
    folderType: function () {
      return g;
    },
    maxBufferSize: function () {
      return N;
    },
    pdfEngines: function () {
      return U;
    },
    defaultTimeout: function () {
      return d;
    },
    specificErrorCodes: function () {
      return f;
    },
    networkErrorCode: function () {
      return h;
    },
    errorPreviewStates: function () {
      return F;
    },
    errorMessages: function () {
      return k;
    },
    permissionLevels: function () {
      return M;
    },
    permissionKeys: function () {
      return J;
    },
    pdfCategories: function () {
      return b;
    },
    animationDuration: function () {
      return v;
    },
    thumbnailSize: function () {
      return G;
    },
    tokenKeys: function () {
      return x;
    },
    linearizedToStdMap: function () {
      return T;
    },
    defaultFileInfo: function () {
      return L;
    },
    supportedLanguages: function () {
      return $;
    },
    fileActions: function () {
      return S;
    },
    drivePdfInfoKey: function () {
      return O;
    },
    previewTypeCatMap: function () {
      return D;
    },
    pdfCategories2: function () {
      return A;
    },
    specificErrorCode3: function () {
      return _;
    },
    linearizedImgTypes: function () {
      return I;
    },
    actionStatuses: function () {
      return u;
    },
    geoCreationDocMap: function () {
      return m;
    }
  });
}