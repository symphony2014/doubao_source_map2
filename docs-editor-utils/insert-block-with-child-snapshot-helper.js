// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DB' to 'insertBlockWithChildSnapshot'
// - Renamed export 'vK' to 'updateChildRelationships'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 554298
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  function u(e) {
    let n;
    let {
      childBlockIds: r,
      blockManager: l,
      transactionName: u = "insertBlockWithChildSnapshot",
      blockSnapshot: s,
      parentBlockId: d,
      beforeInsert: f,
      mergeMode: h,
      options: _,
      transactionOptions: p = {}
    } = e;
    let g = function (e) {
      let {
        position: n,
        insertPositionBlockId: r,
        parentBlockId: l,
        blockManager: c
      } = e;
      if (!r && n === undefined) {
        throw Error("请传入 insert position 或者插入位置的 blockId！");
      }
      if (!isUndefinedCheck.isUndefined(n) && !isNullCheck.isNull(n)) {
        return n;
      }
      let u = c.getBlockModelByBlockId(l);
      return function (e) {
        let n = u.children.findIndex(n => n.id === e);
        if (isUndefinedCheck.isUndefined(n) || isNullCheck.isNull(n)) {
          throw Error("找不到需要 insert 的位置");
        }
        return n;
      }(r);
    }(e);
    let E = l.applyTransaction(u, e => {
      let o = r.map(e => {
        return l.getRecordByBlockId(e)?.id;
      }).filter(e => !!e);
      if (r.length !== 0 && o.length === 0) {
        return;
      }
      if (f) {
        f(e);
      }
      let [i] = documentBlockOperations.insertNewChildren(e, l.getRecordByBlockId(d).id, g, [s], _);
      n = i;
      a(i, o, l, e, true);
    }, {
      ...p,
      mergeMode: h
    });
    return [l.getBlockIdsByRecordId(n)[0], E];
  }
  function a(e, n, r, o) {
    let i;
    let c = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
    let u = arguments.length > 5 ? arguments[5] : undefined;
    if (c) {
      n.forEach(n => {
        o.replace(n, ["parent_id"], e);
      });
    }
    if (u) {
      try {
        let {
          children: e = []
        } = r.getRecordByBlockId(u).snapshot;
        i = dataProcessor.processData([...e, ...n]);
      } catch (e) {
        i = [...n];
      }
    } else {
      i = [...n];
    }
    o.insertChildren(e, 0, i);
  }
  require.d(exports, {
    insertBlockWithChildSnapshot: function () {
      return u;
    },
    updateChildRelationships: function () {
      return a;
    }
  });
}