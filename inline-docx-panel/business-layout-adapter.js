// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BusinessLayoutAdapter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 133109
         */
module.exports = function (module, exports, require) {
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class r extends componentAdapterBaseClass.BaseAdapterClass {
    constructor() {
      super(...arguments);
      this.changeSliderValue = e => {
        let {
          zoom: t,
          step: n,
          min: i,
          max: r
        } = this.getProps();
        let o = e === "plus" ? t + n : t - n;
        if (o > r) {
          o = r;
        } else if (o < i) {
          o = i;
        }
        this.handleValueChange(o);
      };
      this.handleValueChange = e => {
        let {
          onZoomIn: t,
          onZoomOut: n,
          zoom: i
        } = this.getProps();
        if (e > i) {
          t(Number((e / 100).toFixed(2)));
        } else {
          n(Number((e / 100).toFixed(2)));
        }
      };
      this.handleRatioClick = () => {
        let {
          ratio: e,
          onAdjustRatio: t
        } = this.getProps();
        t(e === "adaptation" ? "realSize" : "adaptation");
      };
      this.handleRotate = e => {
        let {
          onRotate: t
        } = this.getProps();
        if (t) {
          t(e);
        }
      };
    }
  }
  require.d(exports, {
    BusinessLayoutAdapter: function () {
      return r;
    }
  });
}