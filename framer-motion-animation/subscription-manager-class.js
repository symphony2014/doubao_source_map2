// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'SubscriptionManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 604672
         */
module.exports = function (module, exports, require) {
  var arrayModificationUtils = require("array-modification-utils") /*id: 437678*/;
  class l {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      arrayModificationUtils.addUniqueToArray(this.subscriptions, e);
      return () => arrayModificationUtils.removeFromArray(this.subscriptions, e);
    }
    notify(e, t, n) {
      let i = this.subscriptions.length;
      if (i) {
        if (i === 1) {
          this.subscriptions[0](e, t, n);
        } else {
          for (let l = 0; l < i; l++) {
            let i = this.subscriptions[l];
            if (i) {
              i(e, t, n);
            }
          }
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  require.d(exports, {
    SubscriptionManager: function () {
      return l;
    }
  });
}