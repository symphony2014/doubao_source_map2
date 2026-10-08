// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'debounceUtilWrapper'
// - Resolved require(213804) to 'debounce-util-wrapper'
// - Renamed variable 'r' to 'superTaskBlockPersistStore'
// - Resolved require(790964) to 'super-task-block-persist-store'
// - Renamed variable 'o' to 'superTaskBlockPluginSymbol'
// - Resolved require(108086) to 'super-task-block-plugin-symbol'
// - Updated imported property 'Z' to 'createDebounce' (module 213804)
// - Updated imported property 't' to 'getSuperTaskStore' (module 790964)
// - Updated imported property '_' to 'superTaskBlockSymbol' (module 108086)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 733570
         */
module.exports = function (module, exports, require) {
  let i;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var superTaskBlockPersistStore = require("super-task-block-persist-store") /*id: 790964*/;
  var superTaskBlockPluginSymbol = require("super-task-block-plugin-symbol") /*id: 108086*/;
  function a(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let s = () => debounceUtilWrapper.createDebounce(e => {
    if (!e) {
      return;
    }
    let {
      id: t = "",
      parent_id: n = "",
      children: i
    } = e;
    superTaskBlockPersistStore.getSuperTaskStore().setState(l => {
      let r = {
        ...l.blockDataMap,
        [t]: i
      };
      let o = r[n] || [];
      let a = o.map(n => n.id !== t ? n : {
        ...e
      });
      if (o.length) {
        r[n] = a;
      }
      let s = {
        ...(l.blockDataMapMetaInfo || {}),
        [t]: {
          ...(l.blockDataMapMetaInfo[t] || {}),
          updateTime: Date.now()
        }
      };
      return {
        ...l,
        blockDataMap: r,
        blockDataMapMetaInfo: s
      };
    });
  }, 1000, {
    leading: true,
    trailing: true
  });
  class c {
    update(e) {
      let {
        id: t
      } = e;
      if (t) {
        let n = this.record[t] || s();
        this.record[t] = n;
        n(e);
      }
    }
    constructor() {
      a(this, "record", {});
    }
  }
  i = null;
  let d = () => {
    i ||= new c();
    return i;
  };
  class u {
    constructor() {
      a(this, "pluginIdentifier", superTaskBlockPluginSymbol.superTaskBlockSymbol);
      a(this, "resolveContentBlock", e => {
        let {
          operation: t,
          contentBlockTree: n
        } = e;
        let {
          id: i = ""
        } = n ?? {};
        if (i) {
          if (t === "update") {
            d().update(n);
          } else if (t === "delete") {
            superTaskBlockPersistStore.getSuperTaskStore().setState(e => e.blockDataMap[i] ? (delete e.blockDataMap[i], delete e.blockDataMapMetaInfo[i], {
              ...e,
              blockDataMap: {
                ...e.blockDataMap
              },
              blockDataMapMetaInfo: {
                ...e.blockDataMapMetaInfo
              }
            }) : e);
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    HandleProcessingBlockContentChildren: function () {
      return u;
    }
  });
}