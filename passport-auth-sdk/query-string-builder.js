// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectToFormDataUtil'
// - Resolved require(406663) to 'object-to-form-data-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 142682
         */
module.exports = function (module, exports, require) {
  var objectToFormDataUtil = require("object-to-form-data-util") /*id: 406663*/;
  function o(e) {
    var t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function i(e, t) {
    this._pairs = [];
    if (e) {
      objectToFormDataUtil(e, this, t);
    }
  }
  var a = i.prototype;
  a.append = function (e, t) {
    this._pairs.push([e, t]);
  };
  a.toString = function (e) {
    var t = e ? function (t) {
      return e.call(this, t, o);
    } : o;
    return this._pairs.map(function (e) {
      return t(e[0]) + "=" + t(e[1]);
    }, "").join("&");
  };
  module.exports = i;
}