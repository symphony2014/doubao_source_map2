// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'CloseIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 863001
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class l extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        style: e
      } = this.props;
      return reactJsxRuntimeCoreReexport.jsx("svg", {
        width: "42",
        height: "42",
        style: {
          height: "100%"
        },
        viewBox: "0 0 42 42",
        fill: e == null ? undefined : e.fill,
        xmlns: "http://www.w3.org/2000/svg",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.0001 17.4646L37.7939 0.670804C38.2821 0.182649 39.0735 0.182649 39.5617 0.670804L41.3294 2.43857C41.8176 2.92673 41.8176 3.71818 41.3294 4.20634L24.5357 21.0001L41.3294 37.7939C41.8176 38.2821 41.8176 39.0735 41.3294 39.5617L39.5617 41.3294C39.0735 41.8176 38.2821 41.8176 37.7939 41.3294L21.0001 24.5357L4.20634 41.3294C3.71818 41.8176 2.92673 41.8176 2.43857 41.3294L0.670804 39.5617C0.182649 39.0735 0.182649 38.2821 0.670804 37.7939L17.4646 21.0001L0.670804 4.20634C0.182649 3.71818 0.182649 2.92673 0.670804 2.43857L2.43857 0.670804C2.92673 0.182649 3.71818 0.182649 4.20634 0.670804L21.0001 17.4646Z"
        })
      });
    }
  }
  require.d(exports, {
    CloseIcon: function () {
      return l;
    }
  });
}