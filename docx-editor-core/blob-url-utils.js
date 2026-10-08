// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Br' to 'fetchBlob'
// - Renamed export 'DK' to 'getAbsoluteUrl'
// - Renamed export 'nz' to 'isBlobUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 334362
         */
module.exports = function (module, exports, require) {
  require("xss-content-sanitizer") /*id: 508971*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  function l(e) {
    return /^blob:/gi.test(e);
  }
  async function a(e) {
    try {
      let n = await platformDocUtils.WY0({
        url: decodeURIComponent(e),
        method: "get",
        responseType: "blob"
      });
      let {
        originalRes: i
      } = n;
      return i instanceof window.Blob && i || n.data;
    } catch (e) {
      docxUtilityHelpers.captureException(`get blob error: ${e}`);
    }
  }
  function s(e, n) {
    if (!function (e) {
      if (!e) {
        return false;
      }
      try {
        let n = new URL(e);
        return /http(s)?:/.test(n.protocol);
      } catch (e) {
        return false;
      }
    }(e)) {
      return n || e;
    } else {
      return platformDocUtils.WY0({
        url: decodeURIComponent(e),
        method: "get",
        responseType: "blob",
        ignoreInterceptors: true
      }).then(e => {
        let {
          data: n
        } = e;
        if (n) {
          return window.URL.createObjectURL(n);
        }
      }).catch(e => {
        docxUtilityHelpers.captureException(`get blob url error: ${e}`);
      });
    }
  }
  require.d(exports, {
    fetchBlob: function () {
      return a;
    },
    getAbsoluteUrl: function () {
      return s;
    },
    isBlobUrl: function () {
      return l;
    }
  });
}