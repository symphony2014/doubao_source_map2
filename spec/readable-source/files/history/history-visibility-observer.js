// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mt' to 'historyVisibility'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 474806
         */
module.exports = function (module, exports, require) {
  class r {
    init(e) {
      this.checkVisible = e;
    }
    constructor() {
      var e;
      var i;
      var E;
      i = undefined;
      if ((e = typeof (E = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var E = e[Symbol.toPrimitive];
        if (E !== undefined) {
          var r = E.call(e, i || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(e = "checkVisible", "string")) == "symbol" ? E : E + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var historyVisibilityConstants = require("history-visibility-constants") /*id: 209015*/;
  function T(e, i, E) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var E = e[Symbol.toPrimitive];
      if (E !== undefined) {
        var r = E.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: E,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = E;
    }
    return e;
  }
  let M = new class extends r {
    constructor(...e) {
      super(...e);
      T(this, "init", e => {
        super.init(e);
      });
      T(this, "observerTrigger$", new observableSubjectClass.Subject());
      T(this, "getObserverTrigger$", () => {
        this.observerTrigger$ ||= new observableSubjectClass.Subject();
        if (this.observerTrigger$.observers.length === 0) {
          this.observerTrigger$.subscribe(e => {
            let i = `${historyVisibilityConstants.eventTriggerName}_${e}`;
            this.checkVisible(i);
          });
        }
        return this.observerTrigger$;
      });
    }
  }();
  require.d(exports, {
    historyVisibility: function () {
      return M;
    }
  });
}