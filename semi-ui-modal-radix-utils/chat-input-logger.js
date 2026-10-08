// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'traceLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17574.32d72dbf.js
         * chunkId: 17574
         * moduleId: 225602
         */
module.exports = function (module, exports, require) {
  let o = new class {
    updateLoggerInstance(e) {
      let {
        loggerInstance: t,
        traceID: n
      } = e;
      this.loggerInstance = t;
      this.tracePrefix = `traceID:${n},msg:`;
    }
    info(...e) {
      var t;
      if ((t = this.loggerInstance) != null) {
        t.info(this.tracePrefix, ...e);
      }
    }
    error(...e) {
      var t;
      if ((t = this.loggerInstance) != null) {
        t.error(this.tracePrefix, ...e);
      }
    }
    debug(...e) {
      var t;
      if ((t = this.loggerInstance) != null) {
        t.debug(this.tracePrefix, ...e);
      }
    }
    warn(...e) {
      var t;
      if ((t = this.loggerInstance) != null) {
        t.warn(this.tracePrefix, ...e);
      }
    }
  }();
  require.d(exports, {
    traceLogger: function () {
      return o;
    }
  });
}