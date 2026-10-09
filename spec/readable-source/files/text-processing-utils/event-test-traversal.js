// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Vn' to 'traverseEventTests'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 494410
         */
module.exports = function (module, exports, require) {
  var eventTestTraversalUtil = require("event-test-traversal-util") /*id: 725199*/;
  function i(e, t, r, i) {
    let o;
    let u;
    let a;
    if (typeof t == "function" && typeof r != "function") {
      u = undefined;
      a = t;
      o = r;
    } else {
      u = t;
      a = r;
      o = i;
    }
    eventTestTraversalUtil.eventTestTraversal(e, u, function (e, t) {
      let r = t[t.length - 1];
      let n = r ? r.children.indexOf(e) : undefined;
      return a(e, n, r);
    }, o);
  }
  require.d(exports, {
    traverseEventTests: function () {
      return i;
    }
  });
}