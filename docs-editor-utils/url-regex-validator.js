// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CB' to 'isCombinedUrl'
// - Renamed export 'NI' to 'isVcsProtocol'
// - Renamed export 'cn' to 'isStrictUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 959147
         */
module.exports = function (module, exports, require) {
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var urlRegexConstants = require("url-regex-constants") /*id: 631514*/;
  let l = memoizeFunction.memoize(function (e = "") {
    urlRegexConstants.combinedUrlRegex.lastIndex = 0;
    return urlRegexConstants.combinedUrlRegex.test(e);
  });
  let c = memoizeFunction.memoize(function (e = "") {
    urlRegexConstants.strictUrlRegex.lastIndex = 0;
    return urlRegexConstants.strictUrlRegex.test(e);
  });
  let u = memoizeFunction.memoize(function (e = "") {
    urlRegexConstants.vcsProtocolRegex.lastIndex = 0;
    return urlRegexConstants.vcsProtocolRegex.test(e);
  });
  require.d(exports, {
    isCombinedUrl: function () {
      return l;
    },
    isVcsProtocol: function () {
      return u;
    },
    isStrictUrl: function () {
      return c;
    }
  });
}