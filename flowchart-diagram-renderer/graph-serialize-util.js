// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'serializeGraph'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33786.7b847ee6.js
         * chunkId: 33786
         * moduleId: 213222
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  function d(t) {
    var e;
    var r;
    var d = {
      options: {
        directed: t.isDirected(),
        multigraph: t.isMultigraph(),
        compound: t.isCompound()
      },
      nodes: (e = t, collectionMapMatcher.mapWithMatcher(e.nodes(), function (t) {
        var r = e.node(t);
        var n = e.parent(t);
        var i = {
          v: t
        };
        if (!isUndefinedCheck.isUndefined(r)) {
          i.value = r;
        }
        if (!isUndefinedCheck.isUndefined(n)) {
          i.parent = n;
        }
        return i;
      })),
      edges: (r = t, collectionMapMatcher.mapWithMatcher(r.edges(), function (t) {
        var e = r.edge(t);
        var n = {
          v: t.v,
          w: t.w
        };
        if (!isUndefinedCheck.isUndefined(t.name)) {
          n.name = t.name;
        }
        if (!isUndefinedCheck.isUndefined(e)) {
          n.value = e;
        }
        return n;
      }))
    };
    if (!isUndefinedCheck.isUndefined(t.graph())) {
      d.value = syncedReferenceBlockManager.syncReferenceBlock(t.graph());
    }
    return d;
  }
  require("graph-data-structure") /*id: 232945*/;
  require.d(exports, {
    serializeGraph: function () {
      return d;
    }
  });
}