// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B1' to 'deleteInitialItems'
// - Renamed export 'Dg' to 'deleteRecordInfo'
// - Renamed export 'Mv' to 'isCatalogueSimple'
// - Renamed export 'Rl' to 'CatalogueResource'
// - Renamed export 'pm' to 'getInitialItems'
// - Renamed export 'qC' to 'getHeadingRecords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 918543
         */
module.exports = function (module, exports, require) {
  var docCatalogueLayoutUtils = require("doc-catalogue-layout-utils") /*id: 631241*/;
  function n(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function o() {
    let e = window.initialCatalogItems;
    if (e === undefined) {
      return undefined;
    } else {
      return e;
    }
  }
  function a() {
    let i = window.catalogRecordInfo?.headingRecords;
    if (i === undefined) {
      return undefined;
    } else {
      return i;
    }
  }
  function l() {
    delete window.initialCatalogItems;
  }
  function c() {
    delete window.catalogRecordInfo;
  }
  function h() {
    let e = o();
    let i = a();
    return e !== undefined && docCatalogueLayoutUtils.isCatalogueSimple(e) || !!i && !Object.keys(i).length;
  }
  require("input-device-types") /*id: 865354*/;
  class d {
    refer() {
      this.ref++;
    }
    unrefer() {
      this.ref--;
      if (this.ref === 0) {
        var e;
        if ((e = this.destroyCallback) !== null && e !== undefined) {
          e.call(this);
        }
      }
    }
    constructor() {
      n(this, "ref", 0);
      n(this, "destroyCallback", undefined);
      n(this, "addDestroyCallback", e => {
        this.destroyCallback = e;
      });
    }
  }
  require.d(exports, {
    deleteInitialItems: function () {
      return l;
    },
    deleteRecordInfo: function () {
      return c;
    },
    isCatalogueSimple: function () {
      return h;
    },
    CatalogueResource: function () {
      return d;
    },
    getInitialItems: function () {
      return o;
    },
    getHeadingRecords: function () {
      return a;
    }
  });
}