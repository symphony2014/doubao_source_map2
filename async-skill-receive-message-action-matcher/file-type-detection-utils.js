// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Am' to 'isPagesFile'
// - Renamed export 'Be' to 'isSpreadsheetFile'
// - Renamed export 'E$' to 'isPresentationFile'
// - Renamed export 'F0' to 'isAudioFile'
// - Renamed export 'H_' to 'isTextFile'
// - Renamed export 'I9' to 'isCsvFile'
// - Renamed export 'J$' to 'isCodeFile'
// - Renamed export 'JB' to 'getFileCategory'
// - Renamed export 'LW' to 'imageExtensions'
// - Renamed export 'NF' to 'getFileExtensionFromBlob'
// - Renamed export 'Or' to 'isImageFile'
// - Renamed export 'Se' to 'isSketchFile'
// - Renamed export 'UO' to 'getFileExtension'
// - Renamed export 'UY' to 'isArchiveFile'
// - Renamed export 'VI' to 'dataUriToFile'
// - Renamed export 'VO' to 'isImageBlob'
// - Renamed export 'VT' to 'isAudioExtension'
// - Renamed export 'Wv' to 'isVideoFile'
// - Renamed export 'Ze' to 'isPdfFile'
// - Renamed export '_N' to 'isVideoExtension'
// - Renamed export 'aP' to 'getDisplayCategory'
// - Renamed export 'dB' to 'isSpreadsheetOrCsv'
// - Renamed export 'dC' to 'documentExtensions'
// - Renamed export 'g' to 'isDocumentFile'
// - Renamed export 'hB' to 'isImageExtension'
// - Renamed export 'i4' to 'isPsdFile'
// - Renamed export 'io' to 'isAudioExtension_1'
// - Renamed export 'jv' to 'isKeynoteFile'
// - Renamed export 'n1' to 'isNumbersFile'
// - Renamed export 'xW' to 'codeExtensions'
// - Renamed export 'z$' to 'isVideoExtension_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 393072
         */
module.exports = function (module, exports, require) {
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let s = e => {
    var t;
    return ((t = (e || "").match(/(.+)\.[^.]+$/)) === null || t === undefined ? undefined : t[1].toLowerCase().trim()) || "";
  };
  let a = e => t => e.includes(t);
  let o = a(["txt"]);
  let l = a(["csv"]);
  let u = a(["xlsx", "xls", "xlsm"]);
  let c = ["pdf", "txt", "csv", "docx", "doc", "xlsx", "xls", "pptx", "ppt", "md", "mobi", "epub"];
  let d = ["png", "jpeg", "jpg", "csv", "pdf", "txt", "xls", "xlsx", "ppt", "pptx", "doc", "docx", "json", "log", "md", "ini", "cfg", "yaml", "sql", "java", "py", "cpp", "cs", "php", "js", "css", "scss", "less", "jsx", "ts", "bat", "sh", "yml", "asp", "aspx", "jsp", "cgi", "pl", "rb", "lua", "ps1", "conf", "gitignore", "htaccess", "dat", "tab", "tex", "html", "h", "go", "tsx", "c", "py3", "cxx", "cc", "mobi", "epub"];
  let f = ["xbm", "tif", "pjp", "svgz", "jpg", "jpeg", "ico", "tiff", "gif", "svg", "jfif", "webp", "png", "bmp", "pjpeg", "avif", "heic", "dng", "arw", "nef", "ar2", "ar3"];
  let h = a(f);
  let p = a(["pdf"]);
  let m = a(["ppt", "pptx", "pps", "ppsx", "pot"]);
  let g = a(["doc", "docx", "dot", "dotx"]);
  let _ = a(["md", "markdown"]);
  let v = a(["epub"]);
  let y = a(["mobi"]);
  let S = ["makefile", "gemfile", "build.gradle"];
  let b = ["py", "java", "js", "ts", "c", "cpp", "h", "hpp", "cc", "cxx", "html", "css", "php", "rb", "pl", "sh", "bash", "swift", "kt", "kts", "ktm", "go", "dart", "scala", "cs", "aspx", "xaml", "vue", "mod", "proto", "tsx", "jsx", "rs", "json", "yaml", "yml", "xml", "env", "config", "properties", "ini", "toml", "plist", "md", "markdown", "adoc", "feature", "sum", "bat", "cmd", "psl", "vbs", "lua", "vmx", "vbox", "dockerfile", "wxml", "wxss", "m", "for", "f90", "f95", "f", "xhtml", "rdf", "tmpl", "scss", "thrift", "rst", "meta", "gitignore", "patch", "sql"];
  let E = (e, t) => b.includes(e) || S.includes(t);
  let w = ["mp4", "flv", "wmv", "asf", "mkv", "avi", "rm", "rmvb", "mpg", "mpeg", "mov", "webm", "m4v"];
  let T = a(w);
  let k = ["mp3", "m4a", "wav", "ogg", "aac", "ac3"];
  let O = a(k);
  let M = a(["zip", "rar", "7z", "tar", "gz", "bz2"]);
  let I = a(["pages"]);
  let N = a(["key", "keynote"]);
  let C = a(["numbers"]);
  let A = a(["sketch"]);
  let x = a(["psd", "psb"]);
  let L = e => l(e) ? "CSV" : p(e) ? "PDF" : u(e) ? "Spreadsheet" : h(e) ? "Image" : m(e) ? "PPT" : g(e) ? "Document" : o(e) ? "Txt" : _(e) ? "Markdown" : v(e) ? "Epub" : y(e) ? "Mobi" : T(e) ? "Video" : O(e) ? "Audio" : "File";
  let P = e => ({
    CSV: "CSV",
    PDF: "PDF",
    Spreadsheet: "Excel",
    Image: "Image",
    PPT: "PPT",
    Document: "Word",
    Txt: "txt",
    File: "File",
    Mobi: "Mobi",
    Epub: "Epub",
    Markdown: "Markdown",
    Video: "Video",
    Audio: "Audio"
  })[e];
  function D(e) {
    return h(getFileExtension.getFileExtension(e));
  }
  function R(e) {
    return T(getFileExtension.getFileExtension(e));
  }
  function $(e) {
    return O(getFileExtension.getFileExtension(e));
  }
  function j(e) {
    return [l, u].some(t => t(getFileExtension.getFileExtension(e)));
  }
  let Z = e => {
    let n = e.split(",");
    let i = n[0].match(/:(.*?);/)?.[1];
    let r = window.atob(n[1]);
    let s = r.length;
    let a = new Uint8Array(s);
    while (s--) {
      a[s] = r.charCodeAt(s);
    }
    return new File([a], "temp", {
      type: i
    });
  };
  let F = e => {
    var t;
    return !!e && e instanceof Blob && ((t = e.type) === null || t === undefined ? undefined : t.startsWith("image"));
  };
  let U = async e => {
    let {
      fileTypeFromBlob: r
    } = await asyncRetryUtils.retryPromise(() => require.e("file-type-detector-chunk") /*id: 75162*/.then(require.bind(require, "file-type-parser") /*id: 806907*/));
    return (await r(e))?.ext;
  };
  let W = e => e && e instanceof Blob ? w.includes(getFileExtension.getFileExtension(e.name).toLowerCase()) : typeof e == "string" ? w.includes(getFileExtension.getFileExtension(e).toLowerCase()) : undefined;
  let z = e => e && e instanceof Blob ? k.includes(getFileExtension.getFileExtension(e.name).toLowerCase()) : typeof e == "string" ? k.includes(getFileExtension.getFileExtension(e).toLowerCase()) : undefined;
  require.d(exports, {
    isPagesFile: function () {
      return I;
    },
    isSpreadsheetFile: function () {
      return u;
    },
    isPresentationFile: function () {
      return m;
    },
    isAudioFile: function () {
      return O;
    },
    isTextFile: function () {
      return o;
    },
    isCsvFile: function () {
      return l;
    },
    isCodeFile: function () {
      return E;
    },
    getFileCategory: function () {
      return L;
    },
    imageExtensions: function () {
      return c;
    },
    getFileExtensionFromBlob: function () {
      return U;
    },
    isImageFile: function () {
      return h;
    },
    isSketchFile: function () {
      return A;
    },
    getFileExtension: function () {
      return s;
    },
    isArchiveFile: function () {
      return M;
    },
    dataUriToFile: function () {
      return Z;
    },
    isImageBlob: function () {
      return F;
    },
    isAudioExtension: function () {
      return $;
    },
    isVideoFile: function () {
      return T;
    },
    isPdfFile: function () {
      return p;
    },
    isVideoExtension: function () {
      return R;
    },
    getDisplayCategory: function () {
      return P;
    },
    isSpreadsheetOrCsv: function () {
      return j;
    },
    documentExtensions: function () {
      return f;
    },
    isDocumentFile: function () {
      return g;
    },
    isImageExtension: function () {
      return D;
    },
    isPsdFile: function () {
      return x;
    },
    isAudioExtension_1: function () {
      return z;
    },
    isKeynoteFile: function () {
      return N;
    },
    isNumbersFile: function () {
      return C;
    },
    codeExtensions: function () {
      return d;
    },
    isVideoExtension_1: function () {
      return W;
    }
  });
}