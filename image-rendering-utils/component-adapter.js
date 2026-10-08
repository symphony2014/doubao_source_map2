// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ComponentAdapter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-file.6fc25773.js
         * chunkId: 3449
         * moduleId: 515472
         */
module.exports = function (module, exports, require) {
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class i extends componentAdapterBaseClass.BaseAdapterClass {
    constructor() {
      super(...arguments);
      this.handleVisibleChange = e => {
        let {
          visible: t,
          onVisibleChange: n
        } = this.getProps();
        if (!(t in this.getProps())) {
          this.setState({
            visible: e
          });
        }
        if (n) {
          n(e);
        }
      };
      this.handleCurrentIndexChange = e => {
        let {
          currentIndex: t,
          onChange: n
        } = this.getProps();
        if (!(t in this.getProps())) {
          this.setState({
            currentIndex: e
          });
        }
        if (n) {
          n(e);
        }
      };
    }
  }
  require.d(exports, {
    ComponentAdapter: function () {
      return i;
    }
  });
}