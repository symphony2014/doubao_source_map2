// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'domClosestPolyfill'
// - Resolved require(478585) to 'dom-closest-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 359139
         */
module.exports = function (module, exports, require) {
  var domClosestPolyfill = require("dom-closest-polyfill") /*id: 478585*/;
  function o(e, t, n, r, o) {
    var a = i.apply(this, arguments);
    e.addEventListener(n, a, o);
    return {
      destroy: function () {
        e.removeEventListener(n, a, o);
      }
    };
  }
  function i(e, t, n, o) {
    return function (n) {
      n.delegateTarget = domClosestPolyfill(n.target, t);
      if (n.delegateTarget) {
        o.call(e, n);
      }
    };
  }
  module.exports = function (e, t, n, r, i) {
    if (typeof e.addEventListener == "function") {
      return o.apply(null, arguments);
    } else if (typeof n == "function") {
      return o.bind(null, document).apply(null, arguments);
    } else {
      if (typeof e == "string") {
        e = document.querySelectorAll(e);
      }
      return Array.prototype.map.call(e, function (e) {
        return o(e, t, n, r, i);
      });
    }
  };
}