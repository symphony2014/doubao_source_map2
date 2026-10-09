// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jz' to 'calculateAspectRatio'
// - Renamed export 'KP' to 'isFullScreenInVC'
// - Renamed export 'M' to 'isSupportedFormat'
// - Renamed export 'Mi' to 'getFileNameWithoutExtension'
// - Renamed export 'QL' to 'isFileViewType'
// - Renamed export 'SP' to 'isPreviewableMedia'
// - Renamed export 'Su' to 'isCellOrTableBlock'
// - Renamed export 'UO' to 'getFileExtension'
// - Renamed export 'VB' to 'isEmptyString'
// - Renamed export 'Wp' to 'isPreviewableFileBlock'
// - Renamed export 'X6' to 'getOfflineFileUuid'
// - Renamed export 'YX' to 'isPreviewableFormat'
// - Renamed export 'Ym' to 'formatFileSize'
// - Renamed export 'hy' to 'isNativeComponentSupported'
// - Renamed export 'iH' to 'isAudioType'
// - Renamed export 'mr' to 'formatDuration'
// - Renamed export 'n8' to 'adjustImageDimensions'
// - Renamed export 'sD' to 'isNativeEmbedSupported'
// - Renamed export 'th' to 'createFileUploadData'
// - Renamed export 'wA' to 'getViewTypeBySize'
// - Renamed export 'w_' to 'isSmallDimension'
// - Renamed export 'x5' to 'isUnknownFormatPreview'
// - Renamed export 'xr' to 'isMediaMimeType'
// - Renamed export 'yK' to 'shouldShowPlaceholder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 192103
         */
module.exports = function (module, exports, require) {
  var momentJsCoreLib = require("moment-js-core-lib") /*id: 132840*/;
  var i = momentJsCoreLib;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var fileExtensionTypes = require("file-extension-types") /*id: 940496*/;
  var docxBoolConfigGetters = require("docx-bool-config-getters") /*id: 475875*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var docxOfflineStoreManager = require("docx-offline-store-manager") /*id: 218533*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docBlockCellUtils = require("doc-block-cell-utils") /*id: 48515*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function E(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let o = [" B", "KB", "MB", "GB", "TB", "P", "E", "Z", "Y"];
    let r = 0;
    while (e >= 1024 && r < o.length - 1) {
      e /= 1024;
      ++r;
    }
    if (r > 0 && n) {
      return e.toFixed(2) + o[r];
    } else {
      return Math.floor(e) + o[r];
    }
  }
  function S(e) {
    let n = e.lastIndexOf(".");
    if (n < 0) {
      return "";
    } else {
      return e.substr(n + 1).toLowerCase();
    }
  }
  function h(e) {
    let n = e.lastIndexOf(".");
    if (n < 0) {
      return e;
    } else {
      return e.substring(0, n);
    }
  }
  function A(e) {
    return I(e);
  }
  function D(e) {
    let n = S(e);
    return platformDocUtils.P60.isAudioTypePreview(n);
  }
  function I(e) {
    let n = S(e);
    return fileExtensionTypes.allFormats.some(e => e.includes(n));
  }
  function T(e) {
    let n = S(e);
    return platformDocUtils.P60.isVideoTypePreview(n) || platformDocUtils.P60.isAudioTypePreview(n) || [...fileExtensionTypes.presentationFormats, "pdf"].includes(n);
  }
  function g(e, n) {
    var o;
    var r;
    return n < 10485760 && (o = e, fileExtensionTypes.unknownFormats2.includes(o.toLowerCase()) || (r = e, [...platformDocUtils.P60.PDFPreviewTypes, ...fileExtensionTypes.unknownFormats1].includes(r.toLowerCase()))) && !platformDocUtils.P60.isImageTypePreview(e) && !platformDocUtils.P60.isArchiveTypePreview(e);
  }
  function M(e) {
    return e === docxViewConfigConstants.emptyString;
  }
  function P(e, n) {
    var o;
    o = S(e);
    if (n < 104857600 && fileExtensionTypes.videoFormats.includes(o)) {
      return viewTypeConstants.viewTypes.Preview;
    } else {
      return docxViewConfigConstants.viewTypeCard;
    }
  }
  function v(e) {
    return e.type === docxViewConfigConstants.viewTypeFile;
  }
  function O(e, n, o, r) {
    let {
      file: i
    } = e;
    let {
      token: c,
      mimeType: l,
      size: a,
      name: s
    } = i;
    let d = {
      token: c,
      mime_type: l,
      size: a,
      name: s,
      need_copy_resource: o,
      source_block_id: "",
      source_version: docxViewConfigConstants.defaultCount
    };
    if (r) {
      var f;
      d.source_block_id = r;
      let e = (f = n.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      })) === null || f === undefined ? undefined : f.getVersion(r);
      if (e !== undefined) {
        d.source_version = e;
      }
    }
    return d;
  }
  function L() {
    var e;
    var n;
    if (!browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
      return false;
    }
    let o = !!((n = window.LarkNativeComponentConfig) === null || n === undefined ? undefined : (e = n.supportNativeComponent) === null || e === undefined ? undefined : e.call(n));
    if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
      return o;
    } else {
      return k() || o;
    }
  }
  let R = null;
  function k() {
    var e;
    var n;
    let o = (n = window.LarkNativeComponentConfig) === null || n === undefined ? undefined : (e = n.componentConfig) === null || e === undefined ? undefined : e.call(n);
    if (!o) {
      return false;
    }
    try {
      let {
        supportRenderTypes: e
      } = JSON.parse(o).components.drive_file_block_v2;
      let n = e[0] === "native_component_embed";
      return n;
    } catch (e) {
      return false;
    }
  }
  function y() {
    return k();
  }
  function N(e, n) {
    let o = e / n;
    let r = e;
    let i = n;
    let c = docxViewConfigConstants.getDocxConfig();
    let l = docxViewConfigConstants.getDocxConfigB();
    if (o >= 1) {
      if (e > docxViewConfigConstants.constant820) {
        r = docxViewConfigConstants.constant820;
      } else if (e < c) {
        r = c;
      }
      i = Math.max(l, r / o);
    } else {
      if (n > docxViewConfigConstants.constant560) {
        i = docxViewConfigConstants.constant560;
      } else if (n < l) {
        i = l;
      }
      r = Math.max(c, i * o);
    }
    return {
      adjustWidth: r,
      adjustHeight: i
    };
  }
  function B(e = 0) {
    let n = i(0);
    let o = i(Math.round(e) * 1000);
    let r = o.diff(n, "hour");
    let c = (o.diff(n, "minute") % 60).toString().padStart(2, "0");
    let l = (o.diff(n, "second") % 60).toString().padStart(2, "0");
    let a = `${c}:${l}`;
    if (r > 0) {
      return `${r}:${a}`;
    } else {
      return a;
    }
  }
  function w(e) {
    return docBlockCellUtils.hasCellInPath(e.blockManager, e.id) || gridColumnLayoutUtils.isInsideGridColumn(e.id, e.blockManager);
  }
  function F(e) {
    var o;
    var r;
    if (!e) {
      return false;
    }
    let i = (r = e.props.record) === null || r === undefined ? undefined : (o = r.snapshot) === null || o === undefined ? undefined : o.file?.name;
    return e.type === docBlockTypeConstants.blockTypeConstants.FILE && e.props.viewType === viewTypeConstants.viewTypes.Preview && I(i);
  }
  function x(e, n, o) {
    let {
      originWidth: r = e,
      originHeight: i = n
    } = o;
    if (n < docxViewConfigConstants.constant180) {
      return true;
    }
    if (e / n > 1) {
      if (r > e * docxViewConfigConstants.constant2 && e < docxViewConfigConstants.constant600B) {
        return true;
      }
    } else if (i > n * docxViewConfigConstants.constant2 && n < docxViewConfigConstants.constant600 || e < docxViewConfigConstants.constant98) {
      return true;
    }
    return false;
  }
  function $(e, n) {
    let o = false;
    if (e / n > 1) {
      if (n < docxViewConfigConstants.constant72) {
        o = true;
      }
    } else if (e < docxViewConfigConstants.constant72) {
      o = true;
    }
    return o;
  }
  function G(e, n) {
    return e / n;
  }
  function X() {
    return docxBoolConfigGetters.isFullScreenDefault() && browserEnvironmentDetectionUtils.browserDetector.isInVC && !browserEnvironmentDetectionUtils.browserDetector.isMobile;
  }
  async function V(e) {
    let {
      recordId: n,
      snapshot: o,
      blockManager: r
    } = e;
    if (o.file.token) {
      return "";
    }
    let i = docxOfflineStoreManager.DocxOfflineManager.getInstance(docBlockActionConstants.offlineDataKeys.UPLOAD_FILE, r);
    let c = await i.getCacheData();
    let l = i.tempCacheData;
    let a = docxOfflineStoreManager.DocxOfflineManager.getInstance(docBlockActionConstants.offlineDataKeys.PASTE_FILE, r);
    let u = a.tempCacheData;
    let s = Object.assign({}, c, await a.getCacheData(), l, u)[n];
    if (!s) {
      return "";
    }
    let {
      uuid: d
    } = s;
    return d || "";
  }
  function U(e) {
    return ["audio", "video", "application/pdf"].some(n => e.includes(n));
  }
  require.d(exports, {
    calculateAspectRatio: function () {
      return G;
    },
    isFullScreenInVC: function () {
      return X;
    },
    isSupportedFormat: function () {
      return I;
    },
    getFileNameWithoutExtension: function () {
      return A;
    },
    isFileViewType: function () {
      return v;
    },
    isPreviewableMedia: function () {
      return U;
    },
    isCellOrTableBlock: function () {
      return w;
    },
    getFileExtension: function () {
      return h;
    },
    isEmptyString: function () {
      return M;
    },
    isPreviewableFileBlock: function () {
      return F;
    },
    getOfflineFileUuid: function () {
      return V;
    },
    isPreviewableFormat: function () {
      return T;
    },
    formatFileSize: function () {
      return S;
    },
    isNativeComponentSupported: function () {
      return L;
    },
    isAudioType: function () {
      return D;
    },
    formatDuration: function () {
      return B;
    },
    adjustImageDimensions: function () {
      return N;
    },
    isNativeEmbedSupported: function () {
      return y;
    },
    createFileUploadData: function () {
      return O;
    },
    getViewTypeBySize: function () {
      return P;
    },
    isSmallDimension: function () {
      return $;
    },
    isUnknownFormatPreview: function () {
      return E;
    },
    isMediaMimeType: function () {
      return g;
    },
    shouldShowPlaceholder: function () {
      return x;
    }
  });
}