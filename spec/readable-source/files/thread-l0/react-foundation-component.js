// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FoundationComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 323591
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var devModeLogger = require("dev-mode-logger") /*id: 828307*/;
  var dataAttributeFilter = require("data-attribute-filter") /*id: 584342*/;
  let {
    hasOwnProperty: a
  } = Object.prototype;
  class o extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.isControlled = e => !!e && !!this.props && typeof this.props == "object" && !!a.call(this.props, e);
      this.cache = {};
      this.foundation = null;
    }
    componentDidMount() {
      if (this.foundation && typeof this.foundation.init == "function") {
        this.foundation.init();
      }
    }
    componentWillUnmount() {
      if (this.foundation && typeof this.foundation.destroy == "function") {
        this.foundation.destroy();
      }
      this.cache = {};
    }
    get adapter() {
      return {
        getContext: e => {
          if (this.context && e) {
            return this.context[e];
          }
        },
        getContexts: () => this.context,
        getProp: e => this.props[e],
        getProps: () => this.props,
        getState: e => this.state[e],
        getStates: () => this.state,
        setState: (e, t) => this.setState(Object.assign({}, e), t),
        getCache: e => e && this.cache[e],
        getCaches: () => this.cache,
        setCache: (e, t) => e && (this.cache[e] = t),
        stopPropagation: e => {
          try {
            e.stopPropagation();
            if (e.nativeEvent) {
              e.nativeEvent.stopImmediatePropagation();
            }
          } catch (e) {}
        },
        persistEvent: e => {
          if (e && e.persist && typeof e.persist == "function") {
            e.persist();
          }
        }
      };
    }
    log(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var i = 1;
      for (; i < t; i++) {
        n[i - 1] = arguments[i];
      }
      return devModeLogger.devModeLogger(e, ...n);
    }
    getDataAttr(e) {
      return dataAttributeFilter.filterDataAttrs(e);
    }
  }
  o.propTypes = {};
  o.defaultProps = {};
  require.d(exports, {
    FoundationComponent: function () {
      return o;
    }
  });
}