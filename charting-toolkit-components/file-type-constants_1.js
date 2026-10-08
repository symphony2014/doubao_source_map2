// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AF' to 'fileSourceTypes'
// - Renamed export 'AI' to 'previewableStates'
// - Renamed export 'CJ' to 'fileExtensions'
// - Renamed export 'EE' to 'contentSavingStates'
// - Renamed export 'FB' to 'riskLevels'
// - Renamed export 'IR' to 'textFileTypes'
// - Renamed export 'Is' to 'validErrorCodes'
// - Renamed export 'Jg' to 'presentationFileTypes'
// - Renamed export 'Kk' to 'zoomModes'
// - Renamed export 'LF' to 'toolbarActions'
// - Renamed export 'Ob' to 'pdfActions'
// - Renamed export 'PO' to 'markdownFileTypes'
// - Renamed export 'R7' to 'fileActions'
// - Renamed export 'RK' to 'editorStates'
// - Renamed export 'V3' to 'mediaFileTypes'
// - Renamed export 'VI' to 'imagePreviewTypes'
// - Renamed export 'Yw' to 'errorMapping'
// - Renamed export 'bt' to 'previewStates'
// - Renamed export 'gh' to 'offlineErrorConstants'
// - Renamed export 'gq' to 'imageFileTypes'
// - Renamed export 'jp' to 'fileCategories'
// - Renamed export 'kE' to 'errorCodes'
// - Renamed export 'l5' to 'plainTextTypes'
// - Renamed export 'm7' to 'editorStatus'
// - Renamed export 'uF' to 'placeholderConstants'
// - Renamed export 'uL' to 'docSourceTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41268.462a5cda.js
         * chunkId: 41268
         * moduleId: 331664
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  let l = {
    NOT_FOUND: 3,
    NO_PERMISSION: 4,
    LOGIN_REQUIRED: 5,
    DELETED: 1002,
    MOUNT_POINT_DELETED: 90001041,
    FILE_DAMAGED: 90001072,
    POINT_KILL: 90001500,
    TENANT_QUOTA_EXCEEDED: 11001,
    USER_QUOTA_EXCEEDED: 90001061,
    FILE_CIPHER_DELETED: 900021001,
    FILE_EDIT_QUOTA_EXCEEDED: 90001081,
    FILE_SAVE_QUOTA_EXCEEDED: 90001043
  };
  let _ = Object.values(l).filter(isNumberUtil.isNumber);
  let a = {
    ERROR: "error",
    NULL: "null",
    VIDEO: "video",
    AUDIO: "audio",
    PDF: "pdf",
    CODE: "code",
    IMG: "img",
    ARCHIVE: "archive",
    SHEET: "sheet",
    WPS: "wps",
    LARKDOC: "larkdoc"
  };
  let E = {
    BMP: "bmp",
    GIF: "gif",
    ICO: "ico",
    JPEG: "jpeg",
    JPG: "jpg",
    PNG: "png",
    RAW: "raw",
    SVG: "svg",
    TIF: "tif",
    TIFF: "tiff",
    WEBP: "webp",
    SKETCH: "sketch",
    HEIC: "heic",
    HEIF: "heif",
    A3FR: "3fr",
    ARW: "arw",
    CR2: "cr2",
    CRW: "crw",
    DCR: "dcr",
    DCS: "dcs",
    DNG: "dng",
    DWG: "dwg",
    ERF: "erf",
    KDC: "kdc",
    MEF: "mef",
    MOS: "mos",
    MRW: "mrw",
    NEF: "nef",
    NRW: "nrw",
    ORF: "orf",
    PEF: "pef",
    PPM: "ppm",
    R3D: "r3d",
    RAF: "raf",
    RW2: "rw2",
    RWL: "rwl",
    SR2: "sr2",
    SVGZ: "svgz",
    WBMP: "wbmp",
    X3F: "x3f",
    A3GP: "3gp",
    A3GPP: "3gpp",
    A3GPP2: "3gpp2",
    ASF: "asf",
    AVI: "avi",
    DV: "dv",
    F4V: "f4v",
    FLV: "flv",
    M2T: "m2t",
    M4V: "m4v",
    MKV: "mkv",
    MOV: "mov",
    MP4: "mp4",
    MPE: "mpe",
    MPEG: "mpeg",
    MPG: "mpg",
    MTS: "mts",
    MXF: "mxf",
    OGV: "ogv",
    RM: "rm",
    RMVB: "rmvb",
    VOB: "vob",
    WEBM: "webm",
    WMV: "wmv",
    TS: "ts",
    ICS: "ics",
    AAC: "aac",
    AMR: "amr",
    AU: "au",
    CDA: "cda",
    FLAC: "flac",
    M4A: "m4a",
    MP3: "mp3",
    OGA: "oga",
    OGG: "ogg",
    WAV: "wav",
    WMA: "wma",
    M4R: "m4r",
    AIR: "air",
    AIFF: "aiff",
    PDF: "pdf",
    RTF: "rtf",
    TXT: "txt",
    EML: "eml",
    MSG: "msg",
    DOCX: "docx",
    DOC: "doc",
    DOTX: "dotx",
    DOT: "dot",
    DOCM: "docm",
    DOTM: "dotm",
    WPS: "wps",
    XLSX: "xlsx",
    XLS: "xls",
    XLTX: "xltx",
    XLT: "xlt",
    XLSM: "xlsm",
    XLTM: "xltm",
    XLM: "xlm",
    XLSB: "xlsb",
    CSV: "csv",
    ET: "et",
    PPTX: "pptx",
    PPT: "ppt",
    PPS: "pps",
    PPSX: "ppsx",
    POTX: "potx",
    POT: "pot",
    PPTM: "pptm",
    POTM: "potm",
    PPSM: "ppsm",
    KEY: "key",
    PAGES: "pages",
    NUMBERS: "numbers",
    A7Z: "7z",
    RAR: "rar",
    TAR: "tar",
    GZ: "gz",
    ZIP: "zip",
    BZ2: "bz2",
    CAB: "cab",
    ZIPX: "zipx",
    JAR: "jar",
    ACE: "ace",
    ARJ: "arj",
    LZH: "lzh",
    Z: "z",
    BZ: "bz",
    CPIO: "cpio",
    ISO: "iso",
    LHA: "lha",
    LZ: "lz",
    LZMA: "lzma",
    TBZ: "tbz",
    TAZ: "taz",
    TBZ2: "tbz2",
    TGZ: "tgz",
    TLZ: "tlz",
    TXZ: "txz",
    TZ: "tz",
    XAR: "xar",
    XZ: "xz",
    APK: "apk",
    AE: "aep",
    AI: "ai",
    PSD: "psd",
    PSB: "psb",
    C: "c",
    H: "h",
    M: "m",
    CPP: "cpp",
    SWIFT: "swift",
    HTML: "html",
    HTM: "htm",
    CSS: "css",
    JS: "js",
    JAVA: "java",
    PY: "py",
    PHP: "php",
    XML: "xml",
    GO: "go",
    RB: "rb",
    CS: "cs",
    SH: "sh",
    BASH: "bash",
    SQL: "sql",
    SCSS: "scss",
    LESS: "less",
    TSX: "tsx",
    JSX: "jsx",
    LOG: "log",
    EJS: "ejs",
    JSP: "jsp",
    KT: "kt",
    VUE: "vue",
    R: "r",
    SCALA: "scala",
    PL: "pl",
    HS: "hs",
    LUA: "lua",
    DART: "dart",
    CONF: "conf",
    COFFEE: "coffee",
    RS: "rs",
    JSON: "json",
    URL: "url",
    WEBLOC: "webloc",
    WEBSITE: "website",
    AS: "as",
    AS3: "as3",
    ASM: "asm",
    ASPX: "aspx",
    ASP: "asp",
    BAT: "bat",
    CC: "cc",
    CMAKE: "cmake",
    CXX: "cxx",
    DIFF: "diff",
    ERB: "erb",
    ERL: "erl",
    GROOVY: "groovy",
    GVY: "gvy",
    HAML: "haml",
    HH: "hh",
    HPP: "hpp",
    HXX: "hxx",
    LST: "lst",
    MAKE: "make",
    ML: "ml",
    MM: "mm",
    OUT: "out",
    PATCH: "patch",
    PLIST: "plist",
    PROPERTIES: "properties",
    SASS: "sass",
    SCRIPT: "script",
    SCM: "scm",
    SML: "sml",
    VB: "vb",
    VI: "vi",
    VIM: "vim",
    XHTML: "xhtml",
    XSD: "xsd",
    XSL: "xsl",
    YAML: "yaml",
    YML: "yml",
    MD: "md",
    MARKDOWN: "markdown",
    MDOWN: "mdown",
    MKDN: "mkdn"
  };
  let s = {
    PDF: 0,
    PNG: 1,
    VIDEO: 3,
    JPG: 7,
    HTML: 8,
    LINEARIZED_PDF: 9,
    LINEARIZED_JPG: 11,
    LINEARIZED_PNG: 12,
    ARCHIVE: 13,
    TEXT: 14,
    ORIGIN_FILE: 16,
    VIDEO_META: 17,
    OGG_MEDIA: 20,
    FAST_PDF: 22
  };
  let c = [E.PNG, E.JPG, E.JPEG, E.GIF, E.ICO, E.BMP, E.WEBP];
  let u = [E.SKETCH, E.HEIC, E.HEIF, E.SVG, E.PSD, E.PSB, E.AI];
  [...c, ...u];
  let I = [E.MP4, E.MOV, E.OGV, E.WEBM, E.M4V];
  E.OGG;
  let d = [E.A3GP, E.A3GPP, E.A3GPP2, E.ASF, E.AVI, E.DV, E.M2T, E.M4V, E.MKV, E.MOV, E.MP4, E.MPE, E.MPG, E.MTS, E.OGV, E.RM, E.TS, E.VOB, E.WEBM, E.WMV, E.FLV, E.OGG].filter(e => !I.includes(e));
  let S = [...I, ...d];
  let A = [E.MP3, E.AAC, E.M4A, E.WAV, E.FLAC];
  let T = [E.PAGES, E.KEY, E.NUMBERS];
  let R = [E.MD, E.MARKDOWN, E.MDOWN, E.MKDN];
  let O = [E.BASH, E.C, E.COFFEE, E.CONF, E.CPP, E.CS, E.CSS, E.DART, E.EJS, E.GO, E.H, E.HS, E.HTML, E.HTM, E.JAVA, E.JS, E.JSON, E.JSP, E.JSX, E.KT, E.LESS, E.LOG, E.LUA, E.M, E.PHP, E.PL, E.PY, E.R, E.RB, E.RS, E.SCALA, E.SCSS, E.SH, E.SQL, E.SWIFT, E.TSX, E.VUE, E.XML, E.URL, E.WEBLOC, E.WEBSITE, E.AS, E.AS3, E.ASM, E.ASPX, E.ASP, E.BAT, E.CC, E.CMAKE, E.CXX, E.DIFF, E.ERB, E.ERL, E.GROOVY, E.GVY, E.HAML, E.HH, E.HPP, E.HXX, E.LST, E.MAKE, E.ML, E.MM, E.OUT, E.PATCH, E.PLIST, E.PROPERTIES, E.SASS, E.SCRIPT, E.SCM, E.SML, E.VB, E.VI, E.VIM, E.XHTML, E.XSD, E.XSL, E.YAML, E.YML, ...R];
  let N = [E.XLS, E.XLSX, E.XLSM, E.XLM, E.XLSB, E.CSV, E.ET];
  E.BMP;
  E.GIF;
  E.ICO;
  E.JPEG;
  E.JPG;
  E.PNG;
  E.RAW;
  E.SVG;
  E.TIF;
  E.TIFF;
  E.WEBP;
  E.SKETCH;
  E.HEIC;
  E.HEIF;
  E.A3FR;
  E.ARW;
  E.CR2;
  E.CRW;
  E.DCR;
  E.DCS;
  E.DNG;
  E.DWG;
  E.ERF;
  E.KDC;
  E.MEF;
  E.MOS;
  E.MRW;
  E.NEF;
  E.NRW;
  E.ORF;
  E.PEF;
  E.PPM;
  E.R3D;
  E.RAF;
  E.RW2;
  E.RWL;
  E.SR2;
  E.SVGZ;
  E.WBMP;
  E.X3F;
  E.PSD;
  E.PSB;
  E.AI;
  E.AVI;
  E.F4V;
  E.FLV;
  E.M4V;
  E.MKV;
  E.MOV;
  E.MP4;
  E.MPEG;
  E.MPG;
  E.OGV;
  E.RM;
  E.RMVB;
  E.WEBM;
  E.WMV;
  E.A3GP;
  E.A3GPP;
  E.A3GPP2;
  E.ASF;
  E.DV;
  E.M2T;
  E.MPE;
  E.MTS;
  E.MXF;
  E.VOB;
  E.TS;
  E.OGG;
  E.AAC;
  E.AMR;
  E.AU;
  E.CDA;
  E.FLAC;
  E.M4A;
  E.MP3;
  E.OGA;
  E.WAV;
  E.WMA;
  E.M4R;
  E.AIR;
  E.AIFF;
  let L = [E.TXT, E.RTF];
  let D = [...L, E.LOG];
  let m = [E.DOC, E.DOCX, E.DOTX, E.DOT, E.DOTM, E.WPS];
  let p = [E.PPT, E.PPTX, E.PPS, E.PPSX, E.POTX, E.POT, E.PPTM, E.POTM, E.PPSM];
  E.ZIP;
  E.A7Z;
  E.RAR;
  E.TAR;
  E.GZ;
  E.BZ2;
  E.ZIPX;
  E.CAB;
  E.JAR;
  E.ACE;
  E.ARJ;
  E.LZH;
  E.Z;
  E.BZ;
  E.CPIO;
  E.ISO;
  E.LHA;
  E.LZ;
  E.LZMA;
  E.TBZ;
  E.TAZ;
  E.TBZ2;
  E.TGZ;
  E.TLZ;
  E.TXZ;
  E.TZ;
  E.XAR;
  E.XZ;
  let P = [E.TAR, E.GZ, E.BZ2, E.ZIP, E.RAR, E.A7Z];
  let f = [E.PDF, ...N, ...p, ...m, ...L, ...T];
  let g = [E.TXT, E.CSV];
  [...u, ...d, ...P, ...f];
  [...c, ...I, ...A, ...O, ...g];
  let C = [E.DOCX, E.DOC, E.DOTX, E.DOT, E.DOTM, E.DOCM, E.XLSX, E.XLS, E.XLTX, E.XLT, E.XLSM, E.XLTM, E.CSV, E.PPTX, E.PPT, E.PPTM, E.PPSX, E.PPSM, E.PPS, E.POT, E.POTX, E.POTM];
  [E.MP4, E.MOV, E.AVI, E.WMV, E.FLV, E.OGG, E.PNG, E.JPG, E.JPEG, E.GIF, E.ICO, E.BMP, ...u, E.MP3, E.M4A, E.WAV, E.FLAC, ...O, ...P, ...g, ...C, ...T, E.PDF];
  [E.MP4, E.MOV, E.PNG, E.JPG, E.JPEG, E.GIF, E.ICO, E.BMP, E.MP3, E.M4A, E.WAV, E.FLAC, ...O, ...g, E.PDF];
  (r = h || {})[r.fileDownloadNotCompleted = 1] = "fileDownloadNotCompleted";
  r[r.fileLimitControl = 2] = "fileLimitControl";
  r[r.notSupport = 3] = "notSupport";
  r[r.notDownloadPermission = 12002] = "notDownloadPermission";
  var h = r;
  let M = {
    OFFLINE_DOWNLOAD_NOT_COMPLETED: "OFFLINE_DOWNLOAD_NOT_COMPLETED",
    OFFLINE_FILE_LIMIT_CONTROL: "OFFLINE_FILE_LIMIT_CONTROL",
    OFFLINE_NOT_SUPPORT: "OFFLINE_NOT_SUPPORT",
    OFFLINE_NOT_DOWNLOAD_PERMISSION: "OFFLINE_NOT_DOWNLOAD_PERMISSION",
    OFFLINE_COMMON_ERROR: "OFFLINE_COMMON_ERROR"
  };
  let F = {
    [h.fileDownloadNotCompleted]: M.OFFLINE_DOWNLOAD_NOT_COMPLETED,
    [h.fileLimitControl]: M.OFFLINE_FILE_LIMIT_CONTROL,
    [h.notSupport]: M.OFFLINE_NOT_SUPPORT,
    [h.notDownloadPermission]: M.OFFLINE_NOT_DOWNLOAD_PERMISSION
  };
  let v = {
    READY: 0,
    PROGRESS: 1,
    GET_PREVIEW_URL_ERROR: 2,
    GET_PREVIEW_URL_FATAL: 3,
    FILE_TYPE_UNSUPPORTED: 4,
    FILE_TOO_LARGE: 5,
    FILE_EMPTY: 6,
    PART_ERROR: 7,
    PREVIEW_TYPE_UNMATCH: 8,
    FILE_ENCRYPTED: 9,
    FILE_TRANSFORM_FAIL: 10,
    ARCHIVE_FILE_TYPE_UNEXPECTED: 1001,
    ARCHIVE_FILE_WHOLE_NODE_COUNT_EXCEEDED: 1002,
    ARCHIVE_FILE_SINGLE_NODE_COUNT_EXCEEDED: 1003,
    THIRD_PARTY_ENCRYPTED: 1004,
    REVIEW_DENAYED: 1005,
    FILE_COPYING: 90001071,
    DLP_DECLINED_INTERNAL: 900099003,
    DLP_DECLINED_EXTERNAL: 900099004,
    DLP_INTERNAL_TENANT_UPLOAD_SECURITY: 900099001,
    DLP_EXTERNAL_TENANT_UPLOAD_SECURITY: 900099002,
    INTERFACE_ERROR: "INTERFACE_ERROR",
    FILE_NEED_PASSWORD: "FILE_NEED_PASSWORD",
    GET_FILE_INFO_ERROR: "GET_FILE_INFO_ERROR",
    FILE_RENDER_ERROR: "FILE_RENDER_ERROR",
    IFRAME_NETWORK_ERROR: "IFRAME_NETWORK_ERROR",
    IFRAME_PERMISSION_FORBIDDEN: "IFRAME_PERMISSION_FORBIDDEN",
    NO_PERMISSION: "NO_PERMISSION",
    FILE_DELETED: "FILE_DELETED",
    FILE_NOT_FOUND: "FILE_NOT_FOUND",
    WPS_NO_EDIT_PERMISSION: "WPS_NO_EDIT_PERMISSION",
    WPS_FILE_TOO_LARGE: "WPS_FILE_TOO_LARGE",
    WPS_SESSION_FULL: "WPS_SESSION_FULL",
    WPS_NETWORK_OFFLINE: "WPS_NETWORK_OFFLINE",
    WPS_GENERIC_ERROR: "WPS_GENERIC_ERROR",
    WPS_CUSTOM_ERROR: "WPS_CUSTOM_ERROR",
    WPS_FILE_ERROR: "WPS_FILE_ERROR",
    MEDIA_TYPE_UNSUPPORTED: "MEDIA_TYPE_UNSUPPORTED",
    NETWORK_CANCEL: "NETWORK_CANCEL",
    WPS_POINT_KILL: "WPS_POINT_KILL",
    ...M
  };
  let w = {
    DOC: "doc",
    DOCFILE: "doc_file",
    BITABLE: "bitable",
    EXPLORER: "explorer",
    EMAIL: "email",
    CALENDAR: "calendar",
    LARK: "im_file",
    APPBUILDER: "app_builder",
    SMARTABLE: "smartable",
    SOPHON: "sophon",
    WIKI: "wiki"
  };
  let b = {
    LARK: "1001",
    APPBUILDER: "1002",
    SMARTABLE: "2001",
    SOPHON: "2002"
  };
  let G = {
    AUTO: "auto",
    ACTUAL: "page-actual",
    WIDTH: "page-width",
    HEIGHT: "page-height",
    FIT: "page-fit",
    FULL: "page-full",
    PRESENTATION: "page-presentation"
  };
  let W = {
    ZOOMIN: "zoomIn",
    ZOOMOUT: "zoomOut",
    ROTATE: "rotateLeft",
    ONETONE: "oneToOne",
    DOWNLOAD: "download"
  };
  let x = {
    SIDEBAR: "sidebar",
    PREV: "prev",
    PAGENUMBER: "pageNumber",
    NEXT: "next",
    ZOOMIN: "zoomIn",
    ZOOMOUT: "zoomOut",
    PRINT: "print",
    FULLSCREEN: "fullscreen",
    EXIT_FULLSCREEN: "exitfullscreen",
    DOWNLOAD: "download",
    PLAY: "play",
    LINE: "line",
    COMMENT: "comment"
  };
  let k = {
    SAVE_TO_DRIVE: "saveToDrive",
    DOWNLOAD: "download",
    SHARE: "share"
  };
  let $ = {
    CONTENT_SAVING: 6,
    CONTENT_SAVED: 7
  };
  (i = {})[i.waiting = 0] = "waiting";
  i[i.wps = 1] = "wps";
  i[i.larkDoc = 2] = "larkDoc";
  i[i.error = 3] = "error";
  let y = i;
  let H = {
    NOT_PREVIEWABLE_PLACEHOLDER: "NOT_PREVIEWABLE_PLACEHOLDER"
  };
  let U = [v.READY, v.PROGRESS];
  let B = {
    NOT_RISK: 0,
    HAS_RISK: 1
  };
  require.d(exports, {
    fileSourceTypes: function () {
      return b;
    },
    previewableStates: function () {
      return U;
    },
    fileExtensions: function () {
      return E;
    },
    contentSavingStates: function () {
      return $;
    },
    riskLevels: function () {
      return B;
    },
    textFileTypes: function () {
      return D;
    },
    validErrorCodes: function () {
      return _;
    },
    presentationFileTypes: function () {
      return p;
    },
    zoomModes: function () {
      return G;
    },
    toolbarActions: function () {
      return x;
    },
    pdfActions: function () {
      return W;
    },
    markdownFileTypes: function () {
      return R;
    },
    fileActions: function () {
      return k;
    },
    editorStates: function () {
      return N;
    },
    mediaFileTypes: function () {
      return S;
    },
    imagePreviewTypes: function () {
      return s;
    },
    errorMapping: function () {
      return F;
    },
    previewStates: function () {
      return v;
    },
    offlineErrorConstants: function () {
      return M;
    },
    imageFileTypes: function () {
      return c;
    },
    fileCategories: function () {
      return a;
    },
    errorCodes: function () {
      return l;
    },
    plainTextTypes: function () {
      return g;
    },
    editorStatus: function () {
      return y;
    },
    placeholderConstants: function () {
      return H;
    },
    docSourceTypes: function () {
      return w;
    }
  });
}