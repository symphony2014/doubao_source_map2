// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Er' to 'createPreviewData'
// - Renamed export 'LZ' to 'createWikiData'
// - Renamed export 'tS' to 'createNodeData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 21335
         */
module.exports = function (module, exports, require) {
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var previewConstants = require("preview-constants") /*id: 540241*/;
  function l(e, i) {
    let {
      space_id: r = "",
      follow_current_node: o = true,
      wiki_token: l = "",
      comments: s,
      revisions: a = []
    } = e;
    return {
      type: i,
      space_id: r,
      follow_current_node: o,
      wiki_token: l,
      comments: s,
      revisions: a,
      author: userEnvironmentUtils.getUserInfo().userId
    };
  }
  function s(e, i) {
    let {
      space_id: r = "",
      wiki_token: o = "",
      comments: l,
      revisions: s = []
    } = e;
    return {
      type: i,
      space_id: r,
      wiki_token: o,
      comments: l,
      revisions: s,
      author: userEnvironmentUtils.getUserInfo().userId
    };
  }
  function a(e, i) {
    let {
      space_id: r = "",
      follow_current_node: l = true,
      show_num: s = previewConstants.configValues[previewConstants.initialValue],
      comments: a,
      revisions: c = []
    } = e;
    return {
      type: i,
      space_id: r,
      follow_current_node: l,
      show_num: s,
      comments: a,
      revisions: c,
      author: userEnvironmentUtils.getUserInfo().userId
    };
  }
  require.d(exports, {
    createPreviewData: function () {
      return a;
    },
    createWikiData: function () {
      return s;
    },
    createNodeData: function () {
      return l;
    }
  });
}