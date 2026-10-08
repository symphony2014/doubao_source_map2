// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ce' to 'prependChildren'
// - Renamed export 'I3' to 'extractBounds'
// - Renamed export 'R3' to 'appendChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 632685
         */
module.exports = function (module, exports, require) {
  function i(e) {
    var t = arguments.length;
    var n = Array(t > 1 ? t - 1 : 0);
    var i = 1;
    for (; i < t; i++) {
      n[i - 1] = arguments[i];
    }
    for (let t of n) {
      e.appendChild(t);
    }
    return e;
  }
  function r(e) {
    var t = arguments.length;
    var n = Array(t > 1 ? t - 1 : 0);
    var r = 1;
    for (; r < t; r++) {
      n[r - 1] = arguments[r];
    }
    if (e.children && e.children.length) {
      let t = e.children[0];
      for (let i of n) {
        e.insertBefore(i, t);
      }
    } else {
      i(e, ...n);
    }
    return e;
  }
  function o(e) {
    if (e && typeof e == "object") {
      if (typeof e.toJSON == "function") {
        return e.toJSON();
      } else {
        return ["left", "top", "right", "bottom", "width", "height"].reduce((t, n) => {
          t[n] = e[n];
          return t;
        }, {});
      }
    }
  }
  require.d(exports, {
    prependChildren: function () {
      return r;
    },
    extractBounds: function () {
      return o;
    },
    appendChildren: function () {
      return i;
    }
  });
}