// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'getBlockRelation'
// - Renamed export 'Y' to 'TargetRelationNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 187984
         */
module.exports = function (module, exports, require) {
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var chainManagerClasses = require("chain-manager-classes") /*id: 842731*/;
  class l extends chainManagerClasses.ChainNode {
    main(e, n) {
      let r = c({
        targetIds: n.targetIds,
        blockManager: e.blockManager
      });
      e.targetsRelation = r;
      return true;
    }
    constructor(...e) {
      var n;
      var r;
      var o;
      super(...e);
      r = "计算target对应的blockId";
      if ((n = typeof (o = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, n || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(n = "desc", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  function c(e) {
    let {
      targetIds: n,
      blockManager: r
    } = e;
    if (n.length !== 2) {
      throw Error("params error: targetIds");
    }
    let [i, l] = n;
    let c = r.getRootBlockId();
    if (syncUrlBlockUtils.isSyncingActive()) {
      let e = syncUrlBlockUtils.getUrlToken();
      c = r.getBlockIdsByRecordId(e)[0];
    }
    let u = {
      root: c,
      hasRoot: false,
      isBrotherhood: false,
      isEqual: false,
      isUnknown: false
    };
    if (n.includes(c)) {
      u.hasRoot = true;
    }
    if (i === l) {
      u.isEqual = true;
    }
    let a = r.getBlockPath(i);
    let s = r.getBlockPath(l);
    let d = a[a.length - 1];
    let f = s[s.length - 1];
    if (d && f && d === f) {
      u.isBrotherhood = true;
    } else if (d === l) {
      u.parent = l;
    } else if (f === i) {
      u.parent = i;
    } else if (a.includes(l)) {
      u.ancestor = l;
    } else if (s.includes(i)) {
      u.ancestor = i;
    } else {
      u.isUnknown = true;
    }
    return u;
  }
  require.d(exports, {
    getBlockRelation: function () {
      return c;
    },
    TargetRelationNode: function () {
      return l;
    }
  });
}