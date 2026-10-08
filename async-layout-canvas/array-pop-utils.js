// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_6' to 'popNumber'
// - Renamed export 'jO' to 'popFunction'
// - Renamed export 'yG' to 'popSchedulable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 451401
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var isSchedulableCheck = require("is-schedulable-check") /*id: 569816*/;
  function o(e) {
    return e[e.length - 1];
  }
  function s(e) {
    if (isFunctionUtil.isFunction(o(e))) {
      return e.pop();
    } else {
      return undefined;
    }
  }
  function c(e) {
    if (isSchedulableCheck.isSchedulable(o(e))) {
      return e.pop();
    } else {
      return undefined;
    }
  }
  function u(e, t) {
    if (typeof o(e) == "number") {
      return e.pop();
    } else {
      return t;
    }
  }
  require.d(exports, {
    popNumber: function () {
      return u;
    },
    popFunction: function () {
      return s;
    },
    popSchedulable: function () {
      return c;
    }
  });
}