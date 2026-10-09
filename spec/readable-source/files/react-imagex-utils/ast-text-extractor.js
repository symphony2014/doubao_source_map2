// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hB' to 'extractAstText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 914641
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var astNodeDefinitions = require("ast-node-definitions") /*id: 718070*/;
  require("ast-to-html-serializer") /*id: 717279*/;
  var astNodeTypeConstants = require("ast-node-type-constants") /*id: 324565*/;
  (r = i ||= {})[r.DISCONNECTED = 1] = "DISCONNECTED";
  r[r.PRECEDING = 2] = "PRECEDING";
  r[r.FOLLOWING = 4] = "FOLLOWING";
  r[r.CONTAINS = 8] = "CONTAINS";
  r[r.CONTAINED_BY = 16] = "CONTAINED_BY";
  require.d(exports, {
    extractAstText: function () {
      return function e(t) {
        if (Array.isArray(t)) {
          return t.map(e).join("");
        } else if (astNodeDefinitions.hasChildren(t) && (t.type === astNodeTypeConstants.nodeTypes.Tag || astNodeDefinitions.isCdata(t))) {
          return e(t.children);
        } else if (astNodeDefinitions.isText(t)) {
          return t.data;
        } else {
          return "";
        }
      };
    }
  });
}