// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'DocxUpdateWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 668243
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function l(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
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
  class s {
    constructor() {
      var e = this;
      l(this, "hook", undefined);
      l(this, "setHook", e => {
        this.hook = e;
      });
      l(this, "getWrapper", function (i = false) {
        let r = (i, r, n) => {
          var o;
          var l;
          return (l = (o = e.hook) === null || o === undefined ? undefined : o.call(e, i, r, n)) === null || l === undefined || l;
        };
        return e => {
          reactDomEntryWrapper.unstable_batchedUpdates(() => {
            try {
              e(i ? r : undefined);
            } catch (e) {
              docxEventCollector.wrappedCollector("flow_doc_otjson_error", {
                error: String((e == null ? undefined : e.message) ?? e)
              });
            }
          });
        };
      });
    }
  }
  l(s, "instance", null);
  l(s, "getInstance", () => {
    if (s.instance === null) {
      s.instance = new s();
    }
    return s.instance;
  });
  require.d(exports, {
    DocxUpdateWrapper: function () {
      return s;
    }
  });
}