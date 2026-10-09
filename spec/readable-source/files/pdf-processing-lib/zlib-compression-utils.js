// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(408040) to 'common-buffer-utils'
// - Renamed variable 'n' to 'zlibDeflateWrapper'
// - Resolved require(448577) to 'zlib-deflate-wrapper'
// - Renamed variable 'o' to 'zlibInflateModule'
// - Resolved require(835477) to 'zlib-inflate-module'
// - Renamed variable 's' to 'zlibCompressionConstants'
// - Resolved require(356035) to 'zlib-compression-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 393206
         */
module.exports = function (module, exports, require) {
  var i = require("common-buffer-utils") /*id: 408040*/.assign;
  var zlibDeflateWrapper = require("zlib-deflate-wrapper") /*id: 448577*/;
  var zlibInflateModule = require("zlib-inflate-module") /*id: 835477*/;
  var zlibCompressionConstants = require("zlib-compression-constants") /*id: 356035*/;
  var a = {};
  i(a, zlibDeflateWrapper, zlibInflateModule, zlibCompressionConstants);
  module.exports = a;
}