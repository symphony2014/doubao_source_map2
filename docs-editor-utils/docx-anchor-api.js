// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DM' to 'getAnchorData'
// - Renamed export 'd9' to 'parseAnchorData'
// - Renamed export 'Xk' to 'createAnchor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 814805
         */
module.exports = function (module, exports, require) {
  var docxErrorUtils = require("docx-error-utils") /*id: 390897*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var docxPartialAnchorConstants = require("docx-partial-anchor-constants") /*id: 311228*/;
  async function c(e, n) {
    try {
      let n = await apiClientInstance.apiClient({
        baseURL: "/",
        url: docxPartialAnchorConstants.createAnchorPath,
        method: "POST",
        data: e,
        timeout: docxPartialAnchorConstants.anchorDataLimit
      });
      if (!n.code) {
        return n.data.anchor_id;
      }
    } catch (e) {
      if (n != null) {
        n(e);
      }
    }
  }
  function u(e) {
    try {
      let n = e.split("-")[1];
      let r = JSON.parse(decodeURIComponent(n));
      let o = r.scene || "";
      let i = [];
      r.selected.forEach(e => {
        let n = {
          block_id: e.id,
          src_version: Number(e.ver || 1),
          selected_text: null
        };
        if (e.range) {
          n.selected_text = {
            src_start_idx: Number(e.range[0]),
            src_end_idx: Number(e.range[1])
          };
        }
        i.push(n);
      });
      return {
        scene: o,
        selectedBlocks: i
      };
    } catch (e) {
      return {};
    }
  }
  async function a(e) {
    var n;
    try {
      let n = await apiClientInstance.apiClient({
        baseURL: "/",
        url: docxPartialAnchorConstants.dataAnchorPath,
        method: "GET",
        timeout: docxPartialAnchorConstants.anchorCreateLimit,
        params: {
          page_id: e.page_id,
          anchor_id: e.anchor_id
        }
      });
      return {
        selectedBlocks: n.data.selected_blocks || [],
        subtype: n.data.subtype
      };
    } catch (e) {
      if (docxErrorUtils.isTimeoutError(e) || (e == null ? undefined : e.code) === undefined && (e == null ? undefined : (n = e.message) === null || n === undefined ? undefined : n.toLowerCase()) === "network error") {
        throw e;
      }
      return {};
    }
  }
  require.d(exports, {
    getAnchorData: function () {
      return a;
    },
    parseAnchorData: function () {
      return u;
    },
    createAnchor: function () {
      return c;
    }
  });
}