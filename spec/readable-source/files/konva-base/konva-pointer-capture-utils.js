// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 837308
         */
module.exports = function (module, exports, require) {
  exports.releaseCapture = exports.setPointerCapture = exports.hasPointerCapture = exports.createEvent = exports.getCapturedShape = undefined;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let a = new Map();
  let n = konvaCoreConfig.Konva._global.PointerEvent !== undefined;
  function s(t) {
    return {
      evt: t,
      pointerId: t.pointerId
    };
  }
  function o(t, e) {
    let i = a.get(t);
    if (!i) {
      return;
    }
    let r = i.getStage();
    if (r) {
      r.content;
    }
    a.delete(t);
    if (n) {
      i._fire("lostpointercapture", s(new PointerEvent("lostpointercapture")));
    }
  }
  exports.getCapturedShape = function (t) {
    return a.get(t);
  };
  exports.createEvent = s;
  exports.hasPointerCapture = function (t, e) {
    return a.get(t) === e;
  };
  exports.setPointerCapture = function (t, e) {
    o(t);
    if (e.getStage()) {
      a.set(t, e);
      if (n) {
        e._fire("gotpointercapture", s(new PointerEvent("gotpointercapture")));
      }
    }
  };
  exports.releaseCapture = o;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}