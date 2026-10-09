// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiSpaceInputValidators'
// - Resolved require(900956) to 'ai-space-input-validators'
// - Renamed variable 'e' to 'aiSpaceFileUrlResolver'
// - Resolved require(550880) to 'ai-space-file-url-resolver'
// - Updated imported property '$s' to 'validateImages' (module 900956)
// - Updated imported property 'm' to 'resolveFileUrls' (module 550880)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-imageedit-url-parse-pre-plugin.0b8f3448.js
         * chunkId: 81263
         * moduleId: 792494
         */
module.exports = function (module, exports, require) {
  var aiSpaceInputValidators = require("ai-space-input-validators") /*id: 900956*/;
  var aiSpaceFileUrlResolver = require("ai-space-file-url-resolver") /*id: 550880*/;
  async function r(n) {
    let {
      payload: o
    } = n;
    if (!aiSpaceInputValidators.validateImages(o)) {
      return;
    }
    let {
      images: t
    } = o;
    let r = t[0];
    if (!r) {
      return;
    }
    let {
      nodeId: a,
      shareId: l
    } = r;
    let s = await aiSpaceFileUrlResolver.resolveFileUrls([a], l);
    if (s == null ? undefined : s[a]) {
      return {
        url: s[a]
      };
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return r;
    }
  });
}