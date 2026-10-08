// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'eventEmitterProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 748577
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var a = eventEmitterUmd;
  var eventEmitterProviderName = require("event-emitter-provider-name") /*id: 354872*/;
  let d = Symbol("once");
  let u = "anonymous";
  let h = dependencyInjectionContainer.Provide(eventEmitterProviderName.eventEmitterProviderName)(n = class extends a {
    dispatch(e, i, r = u) {
      if (r === u) {
        if (Array.isArray(i)) {
          this.emit(e, ...i);
        } else {
          this.emit(e, i);
        }
        return;
      }
      if (this.listenerMap[e]) {
        let n = this.listenerMap[e][r];
        if (!n) {
          return;
        }
        let o = Array.isArray(i) ? i.slice() : [i];
        n.forEach(e => {
          try {
            e.apply(this, o);
          } catch (e) {}
        });
      }
      return this;
    }
    addListener(e, i, r = u) {
      if (r === u) {
        super.addListener(e, i);
        return this;
      }
      this.listenerMap[e] ||= {};
      let n = this.listenerMap[e][r];
      if (n) {
        if (!n.includes(i)) {
          n.push(i);
        }
      } else {
        this.listenerMap[e][r] = [i];
      }
      return this;
    }
    addListenerOnce(e, i, r = u) {
      var n = this;
      if (r === u) {
        return super.once(e, i);
      }
      let o = function () {
        var l = arguments.length;
        var s = Array(l);
        var a = 0;
        for (; a < l; a++) {
          s[a] = arguments[a];
        }
        n.removeListener(e, o, r);
        if (i) {
          i(...s);
        }
      };
      o[d] = i;
      this.addListener(e, o, r);
      return this;
    }
    removeListener(e, i, r = u) {
      if (r === u) {
        super.removeListener(e, i);
      } else if (this.listenerMap[e] && this.listenerMap[e][r]) {
        this.listenerMap[e][r] = this.listenerMap[e][r].filter(e => i !== e && i !== e[d]);
      }
      return this;
    }
    removeAllListeners(e) {
      super.removeAllListeners(e);
      if (e) {
        this.listenerMap[e] = undefined;
      } else {
        super.removeAllListeners();
      }
      return this;
    }
    onServiceDispose() {
      this.removeAllListeners();
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      r = {};
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
      }(i = "listenerMap", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }) || n;
  function f() {
    docxEditorCore.registerProviders([h]);
  }
  require.d(exports, {
    eventEmitterProvider: function () {
      return f;
    }
  });
}