// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'GradientRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 806811
         */
module.exports = function (module, exports, require) {
  var n = 1;
  var i = function () {
    function t(t) {
      this.isGradient = true;
      this.option = t;
      this.id = "okee-render-gradient-" + n++;
    }
    t.prototype.addColorStop = function (t, e) {
      this.option.stops.push({
        offset: t,
        color: e
      });
    };
    return t;
  }();
  exports.GradientRenderer = i;
}