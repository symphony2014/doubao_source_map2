// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'r' to 'docxIndexConstants'
// - Resolved require(124597) to 'docx-index-constants'
// - Updated imported property 'R' to 'iframeEventNames' (module 124597)
// - Updated imported property 'x' to 'docNodeTypes' (module 124597)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_print.4e882bbd.js
         * chunkId: 99126
         * moduleId: 92175
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxIndexConstants = require("docx-index-constants") /*id: 124597*/;
  async function n(e) {
    let t = e.blockView;
    await t.loadImage();
  }
  let s = [{
    hookName: docxIndexConstants.iframeEventNames.onIframeDomCopied,
    hookCallback: function (e) {
      let {
        contentClone: t
      } = e;
      t.querySelectorAll(".docx-image-block").forEach(e => {
        let t = e.querySelector(".docx-block-loading");
        if (t) {
          t.remove();
        }
      });
    },
    options: {
      priority: docxIndexConstants.docNodeTypes.IMAGE
    }
  }];
  let l = {
    blockSettingList: [{
      blockType: docBlockTypeConstants.blockTypeConstants.IMAGE,
      onPrintReady: n
    }],
    hookConfigList: s
  };
  exports.default = [l];
  require.r(exports);
}