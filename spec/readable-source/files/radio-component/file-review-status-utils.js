// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$_' to 'hasFailedStatus'
// - Renamed export 'Uz' to 'getFileCategory'
// - Renamed export 'oJ' to 'mountReactElement'
// - Renamed export 'vA' to 'isReviewSuccess'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 282595
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper_1 = require("react-dom-entry-wrapper_1") /*id: 306316*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  function o(e, {
    getPopupContainer: t
  } = {}) {
    let a = document.createElement("div");
    ((t == null ? undefined : t()) || document.body).appendChild(a);
    let n = reactDomEntryWrapper_1.createRoot(a);
    n.render(e);
    return function () {
      n.unmount();
      if (a.parentNode) {
        a.parentNode.removeChild(a);
      }
    };
  }
  let s = e => collectionIncludesUtil.includes([e == null ? undefined : e.nameReviewStatus, e == null ? undefined : e.contentReviewStatus, e == null ? undefined : e.riskReviewStatus], "failed");
  let l = e => [e == null ? undefined : e.nameReviewStatus, e == null ? undefined : e.contentReviewStatus, e == null ? undefined : e.riskReviewStatus].every(e => e === "success");
  let c = (e, t) => {
    let a;
    let i = t || e.length;
    let n = e.every(e => e.type === fileEntityTypeConstants.fileEntityTypes.Directory);
    let o = e.every(e => e.type !== fileEntityTypeConstants.fileEntityTypes.Directory);
    let s = i === 1 && e.every(e => e.type === fileEntityTypeConstants.fileEntityTypes.MeetingMinutes);
    let l = i === 1 && e.every(e => e.type === fileEntityTypeConstants.fileEntityTypes.CodeArtifact);
    if (n && i > 1) {
      return "multipleFolder";
    } else if (n) {
      return "folder";
    } else if (n || o || !(i > 1)) {
      if (i > 1) {
        return "multiFile";
      } else if (s) {
        return "metting_minutes";
      } else if (l) {
        return "code_artifact";
      } else {
        return "file";
      }
    } else {
      return "folerAndFile";
    }
  };
  require.d(exports, {
    hasFailedStatus: function () {
      return s;
    },
    getFileCategory: function () {
      return c;
    },
    mountReactElement: function () {
      return o;
    },
    isReviewSuccess: function () {
      return l;
    }
  });
}