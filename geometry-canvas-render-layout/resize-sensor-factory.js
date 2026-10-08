// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(129659) to 'debounce-util_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 845617
         */
module.exports = function (module, exports, require) {
  exports.createSensor = undefined;
  var i;
  var r = (i = require("debounce-util_2") /*id: 129659*/) && i.__esModule ? i : {
    default: i
  };
  exports.createSensor = function (t) {
    var e = undefined;
    var n = [];
    var i = r.default(function () {
      n.forEach(function (e) {
        e(t);
      });
    });
    function o() {
      var e = new ResizeObserver(i);
      e.observe(t);
      i();
      return e;
    }
    function a() {
      e.disconnect();
      n = [];
      e = undefined;
    }
    return {
      element: t,
      bind: function (t) {
        e ||= o();
        if (n.indexOf(t) === -1) {
          n.push(t);
        }
      },
      destroy: a,
      unbind: function (t) {
        var i = n.indexOf(t);
        if (i !== -1) {
          n.splice(i, 1);
        }
        if (n.length === 0 && e) {
          a();
        }
      }
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}