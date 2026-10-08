// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxFeatureFlags'
// - Resolved require(939543) to 'docx-feature-flags'
// - Renamed variable 'i' to 'docUrlExtractUtils'
// - Resolved require(846285) to 'doc-url-extract-utils'
// - Renamed variable 'a' to 'linkTransformHandler'
// - Resolved require(294261) to 'link-transform-handler'
// - Renamed variable 'l' to 'linkTransformQueueTypes'
// - Resolved require(129678) to 'link-transform-queue-types'
// - Updated imported property 'do' to 'getIframeConfig' (module 294261)
// - Updated imported property 'MF' to 'isMfEnabled' (module 939543)
// - Updated imported property 'B6' to 'checkUrlExtraction' (module 846285)
// - Updated imported property 'kl' to 'panelActionTypes' (module 129678)
// - Updated imported property 'iX' to 'panelBlockTypes' (module 129678)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-paste-panel.dec4e4b1.js
         * chunkId: 42590
         * moduleId: 380544
         */
module.exports = function (module, exports, require) {
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docUrlExtractUtils = require("doc-url-extract-utils") /*id: 846285*/;
  var linkTransformHandler = require("link-transform-handler") /*id: 294261*/;
  var linkTransformQueueTypes = require("link-transform-queue-types") /*id: 129678*/;
  async function c(e) {
    let {
      option: r
    } = e;
    let {
      toIframe: o,
      toBookmark: l,
      text: c
    } = r;
    return !!o && !!(await linkTransformHandler.getIframeConfig(c)) && !!docxFeatureFlags.isMfEnabled() || !!l && !!(await docUrlExtractUtils.checkUrlExtraction(c, true)).isCanExtract;
  }
  let s = [{
    hookName: linkTransformQueueTypes.panelActionTypes.preProcessLinkPanel,
    hookCallback: c,
    options: {
      priority: linkTransformQueueTypes.panelBlockTypes.BOOKMARK
    }
  }];
  exports.default = [{
    hookConfigList: s
  }];
  require.r(exports);
}