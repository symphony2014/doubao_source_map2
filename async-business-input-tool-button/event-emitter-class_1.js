// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 313104
         */
module.exports = function (module, exports, require) {
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  class r {
    constructor() {
      this._eventMap = new Map();
    }
    on(e, t) {
      if (e && typeof t == "function") {
        if (!this._eventMap.has(e)) {
          this._eventMap.set(e, []);
        }
        this._eventMap.get(e).push(t);
      }
      return this;
    }
    once(e, t) {
      var n = this;
      if (e && typeof t == "function") {
        let i = function () {
          t(...arguments);
          n.off(e, i);
        };
        this.on(e, i);
      }
    }
    off(e, t) {
      if (e) {
        if (typeof t == "function") {
          let n = this._eventMap.get(e);
          if (Array.isArray(n) && n.length) {
            let e = -1;
            while ((e = n.findIndex(e => e === t)) > -1) {
              n.splice(e, 1);
            }
          }
        } else if (nullCheckUtil_1.isNil(t)) {
          this._eventMap.delete(e);
        }
      }
      return this;
    }
    emit(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var i = 1;
      for (; i < t; i++) {
        n[i - 1] = arguments[i];
      }
      return !!this._eventMap.has(e) && (this._eventMap.get(e).forEach(e => e(...n)), true);
    }
  }
  require.d(exports, {
    EventEmitter: function () {
      return r;
    }
  });
}