// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LY' to 'registerConfig'
// - Renamed export '$4' to 'registerSnapshot'
// - Renamed export '$l' to 'getAllConfigs'
// - Renamed export 'V9' to 'traverseNodes'
// - Renamed export 'sy' to 'getConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 741507
         */
module.exports = function (module, exports, require) {
  var getChildrenUtil = require("get-children-util") /*id: 78534*/;
  let o = new class {
    get(e) {
      return this.configs.get(e);
    }
    register(e, n) {
      this.configs.set(e, n);
    }
    constructor() {
      var e;
      var n;
      var i;
      e = "configs";
      n = new Map();
      if ((e = typeof (i = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(e, n || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
    }
  }();
  function a(e, n) {
    o.register(e, n);
  }
  function s(e) {
    return o.get(e);
  }
  function l() {
    return o.configs;
  }
  function c(e, n) {
    o.register(e, {
      createSnapshot: n
    });
  }
  require.d(exports, {
    registerConfig: function () {
      return a;
    },
    registerSnapshot: function () {
      return c;
    },
    getAllConfigs: function () {
      return l;
    },
    traverseNodes: function () {
      return function e(n, i, o, a) {
        let c = o(n);
        if (c && a(c, i)) {
          (s(c.snapshot.type)?.deriveChildren || getChildrenUtil.getChildren)(c.snapshot, c).forEach(n => e(n, c, o, a));
        }
      };
    },
    getConfig: function () {
      return s;
    }
  });
}