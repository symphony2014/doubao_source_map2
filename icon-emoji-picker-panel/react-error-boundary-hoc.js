// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'withErrorBoundary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 999451
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var componentBizTeaCollector = require("component-biz-tea-collector") /*id: 568420*/;
  function i(e, t) {
    var n = {};
    for (var o in e) {
      if (Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0) {
        n[o] = e[o];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var o = Object.getOwnPropertySymbols(e);
      for (; r < o.length; r++) {
        if (t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r])) {
          n[o[r]] = e[o[r]];
        }
      }
    }
    return n;
  }
  let a = e => {
    class t extends reactCoreLibraryReexport.Component {
      componentDidCatch(e) {
        componentBizTeaCollector.collectComponentBizEvent("ccm_component_dev", {
          module: this.props.module,
          type: "catch",
          action: "errorBoundary",
          status: "fail",
          message: e && e.toString()
        });
      }
      render() {
        let t = this.props;
        let {
          forWardedRef: n
        } = t;
        let r = i(t, ["forWardedRef"]);
        return reactCoreLibraryReexport.createElement(e, Object.assign({}, r, {
          ref: n
        }));
      }
    }
    return reactCoreLibraryReexport.forwardRef((n, r) => {
      let a = e.displayName;
      let {
        moudle: c
      } = n;
      let u = i(n, ["moudle"]);
      return reactCoreLibraryReexport.createElement(t, Object.assign({
        moudle: c || a
      }, u, {
        forWardedRef: r
      }));
    });
  };
  require.d(exports, {
    withErrorBoundary: function () {
      return a;
    }
  });
}