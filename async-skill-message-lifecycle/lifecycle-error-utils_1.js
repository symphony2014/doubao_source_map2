// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TH' to 'isLifecyclePanic'
// - Renamed export 'i8' to 'isLifeCycleExpect'
// - Renamed export 'nc' to 'LifeCycleExpectError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 298920
         */
module.exports = function (module, exports, require) {
  class i extends Error {
    constructor(e) {
      super(e);
      this.name = "LifecyclePanicError";
    }
  }
  class n extends Error {
    constructor(e) {
      super(e);
      this.name = "LifeCycleExpectError";
    }
  }
  let r = e => e instanceof i || e.name === "LifecyclePanicError";
  let a = e => e instanceof n || e.name === "LifeCycleExpectError";
  require.d(exports, {
    isLifecyclePanic: function () {
      return r;
    },
    isLifeCycleExpect: function () {
      return a;
    },
    LifeCycleExpectError: function () {
      return n;
    }
  });
}