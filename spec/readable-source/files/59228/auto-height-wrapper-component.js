// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AutoHeightWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 119148
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var treeUiConstants = require("tree-ui-constants") /*id: 259049*/;
  var resizeObserverComponent = require("resize-observer-component") /*id: 376612*/;
  let d = treeUiConstants.TreePrefixes.PREFIX;
  class h extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this._onResize = e => {
        let t = e && e[1] && e[1].target;
        if (t) {
          let e = objectPathGetDefault.getObjectPathDefault(t, "offsetHeight") || 0;
          let n = window.getComputedStyle(t) || {};
          let a = parseInt(objectPathGetDefault.getObjectPathDefault(n, "paddingTop"), 10) || 0;
          let r = parseInt(objectPathGetDefault.getObjectPathDefault(n, "paddingBottom"), 10) || 0;
          if (this.state.height !== e - a - r) {
            this.setState({
              height: e - a - r
            });
          }
        }
      };
      this.state = {
        height: this.props.defaultHeight || 0
      };
    }
    componentDidMount() {
      let {
        height: e
      } = this.state;
      if (typeof e == "number") {
        return;
      }
    }
    render() {
      let {
        children: e,
        defaultWidth: t,
        defaultHeight: n
      } = this.props;
      let {
        height: i
      } = this.state;
      let r = false;
      if (i === 0 || typeof i != "number") {
        r = true;
      }
      return reactCoreLibraryReexport.createElement(resizeObserverComponent.ResizeObserverComp, {
        observeParent: true,
        onResize: this._onResize
      }, reactCoreLibraryReexport.createElement("div", {
        style: {
          height: n,
          overflow: "visible"
        },
        className: `${d}-auto-wrapper`
      }, !r && e({
        height: i,
        width: t
      })));
    }
  }
  h.propTypes = {
    defaultHeight: s.oneOfType([s.number, s.string]),
    defaultWidth: s.oneOfType([s.number, s.string])
  };
  h.defaultProps = {
    defaultHeight: "100%",
    defaultWidth: "100%"
  };
  require.d(exports, {
    AutoHeightWrapper: function () {
      return h;
    }
  });
}