// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'runtimeLayerAccess'
// - Resolved require(988119) to 'runtime-layer-access'
// - Renamed variable 's' to 'typeCheckUtils_2'
// - Resolved require(666252) to 'type-check-utils_2'
// - Renamed variable 'o' to 'eventEmitterUtils'
// - Resolved require(992951) to 'event-emitter-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 79444
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  exports.CancellationTokenSource = exports.CancellationToken = undefined;
  let runtimeLayerAccess = require("runtime-layer-access") /*id: 988119*/;
  let typeCheckUtils_2 = require("type-check-utils_2") /*id: 666252*/;
  let eventEmitterUtils = require("event-emitter-utils") /*id: 992951*/;
  (i = n || (exports.CancellationToken = n = {})).None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: eventEmitterUtils.Event.None
  });
  i.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: eventEmitterUtils.Event.None
  });
  i.is = function (e) {
    return e && (e === i.None || e === i.Cancelled || typeCheckUtils_2.boolean(e.isCancellationRequested) && !!e.onCancellationRequested);
  };
  let l = Object.freeze(function (e, t) {
    let r = runtimeLayerAccess.default().timer.setTimeout(e.bind(t), 0);
    return {
      dispose() {
        r.dispose();
      }
    };
  });
  class u {
    constructor() {
      this._isCancelled = false;
    }
    cancel() {
      if (!this._isCancelled) {
        this._isCancelled = true;
        if (this._emitter) {
          this._emitter.fire(undefined);
          this.dispose();
        }
      }
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      if (this._isCancelled) {
        return l;
      } else {
        this._emitter ||= new eventEmitterUtils.Emitter();
        return this._emitter.event;
      }
    }
    dispose() {
      if (this._emitter) {
        this._emitter.dispose();
        this._emitter = undefined;
      }
    }
  }
  exports.CancellationTokenSource = class {
    get token() {
      this._token ||= new u();
      return this._token;
    }
    cancel() {
      if (this._token) {
        this._token.cancel();
      } else {
        this._token = n.Cancelled;
      }
    }
    dispose() {
      if (this._token) {
        if (this._token instanceof u) {
          this._token.dispose();
        }
      } else {
        this._token = n.None;
      }
    }
  };
}