// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'buildContentBlockTree'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 341743
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function r(e) {
    let t;
    if (!e.length) {
      return {
        contentBlocksTree: undefined,
        contentBlockNodes: undefined
      };
    }
    let n = {
      block_type: 0,
      id: "0",
      is_finish: true,
      children: []
    };
    let r = {};
    let o = {};
    let a = {};
    e.forEach(e => {
      var n;
      let i = e.parent_id ?? "0";
      if (e.is_deleted) {
        return;
      }
      r[i] ||= [];
      let a = {
        ...e,
        children: [],
        is_finish: (n = e.is_finish) !== null && n !== undefined && n
      };
      r[i].push(a);
      o[e.id] = a;
    });
    let l = new Set();
    let s = new Set();
    for (let e of Object.keys(o)) {
      if (function e(n, i = []) {
        if (s.has(n)) {
          return false;
        }
        if (l.has(n)) {
          let e = i.indexOf(n);
          t = (e >= 0 ? i.slice(e).concat(n) : i.concat(n)).map(e => o[e]).filter(Boolean).map(e => ({
            id: e.id,
            parent_id: e.parent_id,
            block_type: e.block_type
          }));
          return true;
        }
        l.add(n);
        for (let t of r[n] || []) {
          if (e(t.id, i.concat(n))) {
            return true;
          }
        }
        l.delete(n);
        s.add(n);
        return false;
      }(e)) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "content_block_tree_cycle_detected",
          meta: {
            cycle_blocks: t
          }
        });
        return {
          contentBlocksTree: undefined,
          contentBlockNodes: undefined
        };
      }
    }
    n.children = function e(t) {
      var n;
      return ((n = r[t]) === null || n === undefined ? undefined : n.map(t => {
        let n = t.id;
        let i = {
          ...t,
          children: e(t.id)
        };
        a[n] = i;
        return i;
      })) || [];
    }("0");
    return {
      contentBlocksTree: n,
      contentBlockNodes: a
    };
  }
  require.d(exports, {
    buildContentBlockTree: function () {
      return r;
    }
  });
}