// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AL' to 'isReactInXInstance'
// - Renamed export 'CR' to 'isReactInXType'
// - Renamed export 'I2' to 'ReactInXComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 485336
         */
module.exports = function (module, exports, require) {
  var tsRuntimeHelpers = require("ts-runtime-helpers") /*id: 287285*/;
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactRenderContext = require("react-render-context") /*id: 466226*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    tsRuntimeHelpers.inherits(e, t);
    var n = e.prototype;
    n.getComponent = function () {
      var t = this.props;
      var e = t.reactElement;
      var n = t.ReactContextProvider;
      var i = t.pluginRenderContext;
      return function (t) {
        function s() {
          var e = t !== null && t.apply(this, arguments) || this;
          e.state = {
            renderContext: i
          };
          return e;
        }
        tsRuntimeHelpers.inherits(s, t);
        s.prototype.render = function () {
          var t = Array.isArray(e) ? e : [e];
          return reactCoreLibraryReexport.createElement(reactRenderContext.renderContext.Provider, {
            value: {
              renderContext: this.state.renderContext
            }
          }, n ? reactCoreLibraryReexport.createElement.apply(reactCoreLibraryReexport, tsRuntimeHelpers.spreadArgs([n, null], t)) : t);
        };
        return s;
      }(reactCoreLibraryReexport.Component);
    };
    n.componentDidMount = function () {
      var t = this;
      var e = this.props.container;
      if (e) {
        var n = this.getComponent();
        reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(n, {
          ref: function (e) {
            t.reactComponentRef = e;
          }
        }), e);
      }
    };
    n.componentWillUnmount = function () {
      var t = this.props.container;
      if (t) {
        reactDomEntryWrapper.unmountComponentAtNode(t);
      }
    };
    n.unmount = function () {
      var t = this.props.container;
      if (t) {
        reactDomEntryWrapper.unmountComponentAtNode(t);
      }
    };
    n.forceUpdate = function (t) {
      var e;
      if ((e = this.reactComponentRef) !== null && e !== undefined) {
        e.setState({
          renderContext: t
        });
      }
    };
    n.render = function () {
      if (domEnvManager.isDom()) {
        var t = this.getComponent();
        var e = domEnvManager.serverRenderer.renderToStaticMarkup(reactCoreLibraryReexport.createElement(t, null));
        var n = document.createElement("div");
        n.innerHTML = e;
        return n.firstChild;
      }
      return null;
    };
    e.type = "ReactInX";
    return e;
  }(require("base-x-component") /*id: 802436*/.XComponent);
  function u(t) {
    return (t == null ? undefined : t.type) === l.type;
  }
  function c(t) {
    return t && t instanceof l;
  }
  require.d(exports, {
    isReactInXInstance: function () {
      return c;
    },
    isReactInXType: function () {
      return u;
    },
    ReactInXComponent: function () {
      return l;
    }
  });
}