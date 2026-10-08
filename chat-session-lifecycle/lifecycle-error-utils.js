// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RB' to 'getErrorType'
// - Renamed export 'TH' to 'isPanicError'
// - Renamed export 'i8' to 'isExpectError'
// - Renamed export 'nc' to 'ExpectError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 108909
         */
module.exports = function (module, exports, require) {
  class i extends Error {
    constructor(e) {
      super(e);
      this.name = "LifecyclePanicError";
    }
  }
  class t extends Error {
    constructor(e) {
      super(e);
      this.name = "LifeCycleExpectError";
    }
  }
  let a = e => e instanceof i || e.name === "LifecyclePanicError";
  let o = e => e instanceof t || e.name === "LifeCycleExpectError";
  let r = e => o(e) ? "ExpectError" : a(e) ? "PanicError" : "Error";
  require.d(exports, {
    getErrorType: function () {
      return r;
    },
    isPanicError: function () {
      return a;
    },
    isExpectError: function () {
      return o;
    },
    ExpectError: function () {
      return t;
    }
  });
}