// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'configureScale'
// - Renamed export 'o' to 'setRangeDomain'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 666730
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(t);
        break;
      default:
        this.range(n).domain(t);
    }
    return this;
  }
  function r(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        if (typeof t == "function") {
          this.interpolator(t);
        } else {
          this.range(t);
        }
        break;
      default:
        this.domain(t);
        if (typeof n == "function") {
          this.interpolator(n);
        } else {
          this.range(n);
        }
    }
    return this;
  }
  require.d(exports, {
    configureScale: function () {
      return r;
    },
    setRangeDomain: function () {
      return i;
    }
  });
}