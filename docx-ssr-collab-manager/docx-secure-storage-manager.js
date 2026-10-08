// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxSecureStorage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 363869
         */
module.exports = function (module, exports, require) {
  var secureStorageInitializer = require("secure-storage-initializer") /*id: 724501*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function o(e, i, r) {
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
  exports.DocxSecureStorage = new class {
    constructor() {
      o(this, "_storage", secureStorageInitializer.initializeSecureStorage());
      o(this, "getItem", (e, i) => this._storage.then(i => i.getItem(e)).then(e => {
        try {
          return JSON.parse(e);
        } catch (e) {
          return null;
        }
      }));
      o(this, "setItem", (e, i, r) => {
        let s = JSON.stringify(i);
        let o = s.length;
        if (o > 100000) {
          docxEventCollector.wrappedCollector("doc_bug_track_dev", {
            action: "storage_set_over_text_limit",
            text_length: o
          });
        }
        return this._storage.then(i => i.setItem(e, s));
      });
      o(this, "removeItem", e => this._storage.then(i => i.removeItem(e)));
    }
  }();
}