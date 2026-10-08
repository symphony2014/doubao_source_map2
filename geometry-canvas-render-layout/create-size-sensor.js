// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(129659) to 'debounce-util_2'
// - Renamed variable 'o' to 'sizeSensorConstants'
// - Resolved require(574093) to 'size-sensor-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 660838
         */
module.exports = function (module, exports, require) {
  exports.createSensor = undefined;
  var i;
  var r = (i = require("debounce-util_2") /*id: 129659*/) && i.__esModule ? i : {
    default: i
  };
  var sizeSensorConstants = require("size-sensor-constants") /*id: 574093*/;
  exports.createSensor = function (t) {
    var e = undefined;
    var n = [];
    function i() {
      if (getComputedStyle(t).position === "static") {
        t.style.position = "relative";
      }
      var e = document.createElement("object");
      e.onload = function () {
        e.contentDocument.defaultView.addEventListener("resize", a);
        a();
      };
      e.setAttribute("style", sizeSensorConstants.SensorStyle);
      e.setAttribute("class", sizeSensorConstants.SensorClassName);
      e.setAttribute("tabindex", sizeSensorConstants.SensorTabIndex);
      e.type = "text/html";
      t.appendChild(e);
      e.data = "about:blank";
      return e;
    }
    var a = r.default(function () {
      n.forEach(function (e) {
        e(t);
      });
    });
    function s() {
      if (e && e.parentNode) {
        if (e.contentDocument) {
          e.contentDocument.defaultView.removeEventListener("resize", a);
        }
        e.parentNode.removeChild(e);
        e = undefined;
        n = [];
      }
    }
    return {
      element: t,
      bind: function (t) {
        e ||= i();
        if (n.indexOf(t) === -1) {
          n.push(t);
        }
      },
      destroy: s,
      unbind: function (t) {
        var i = n.indexOf(t);
        if (i !== -1) {
          n.splice(i, 1);
        }
        if (n.length === 0 && e) {
          s();
        }
      }
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}