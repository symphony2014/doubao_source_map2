// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'runtimeLayerAccess'
// - Resolved require(988119) to 'runtime-layer-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 992951
         */
module.exports = function (module, exports, require) {
  var n;
  exports.Emitter = exports.Event = undefined;
  let runtimeLayerAccess = require("runtime-layer-access") /*id: 988119*/;
  (function (e) {
    let t = {
      dispose() {}
    };
    e.None = function () {
      return t;
    };
  })(n || (exports.Event = n = {}));
  class a {
    add(e, t = null, r) {
      if (!this._callbacks) {
        this._callbacks = [];
        this._contexts = [];
      }
      this._callbacks.push(e);
      this._contexts.push(t);
      if (Array.isArray(r)) {
        r.push({
          dispose: () => this.remove(e, t)
        });
      }
    }
    remove(e, t = null) {
      if (!this._callbacks) {
        return;
      }
      let r = false;
      for (let n = 0, i = this._callbacks.length; n < i; n++) {
        if (this._callbacks[n] === e) {
          if (this._contexts[n] === t) {
            this._callbacks.splice(n, 1);
            this._contexts.splice(n, 1);
            return;
          }
          r = true;
        }
      }
      if (r) {
        throw Error("When adding a listener with a context, you should remove it with the same context");
      }
    }
    invoke(...e) {
      if (!this._callbacks) {
        return [];
      }
      let t = [];
      let r = this._callbacks.slice(0);
      let n = this._contexts.slice(0);
      for (let a = 0, s = r.length; a < s; a++) {
        try {
          t.push(r[a].apply(n[a], e));
        } catch (e) {
          runtimeLayerAccess.default().console.error(e);
        }
      }
      return t;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = undefined;
      this._contexts = undefined;
    }
  }
  class s {
    constructor(e) {
      this._options = e;
    }
    get event() {
      this._event ||= (e, t, r) => {
        this._callbacks ||= new a();
        if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
          this._options.onFirstListenerAdd(this);
        }
        this._callbacks.add(e, t);
        let n = {
          dispose: () => {
            if (this._callbacks) {
              this._callbacks.remove(e, t);
              n.dispose = s._noop;
              if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                this._options.onLastListenerRemove(this);
              }
            }
          }
        };
        if (Array.isArray(r)) {
          r.push(n);
        }
        return n;
      };
      return this._event;
    }
    fire(e) {
      if (this._callbacks) {
        this._callbacks.invoke.call(this._callbacks, e);
      }
    }
    dispose() {
      if (this._callbacks) {
        this._callbacks.dispose();
        this._callbacks = undefined;
      }
    }
  }
  exports.Emitter = s;
  s._noop = function () {};
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}