// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PortalContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 361066
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  let u = () => document.body;
  class h extends reactCoreLibraryReexport.PureComponent {
    constructor(e, t) {
      var n;
      super(e);
      n = this;
      this.initContainer = function (e) {
        let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        try {
          if (!n.el || !n.state?.container || !Array.from(n.state.container.childNodes).includes(n.el)) {
            n.el = document.createElement("div");
            let t = (n.props.getPopupContainer || e.getPopupContainer || u)();
            t.appendChild(n.el);
            n.addStyle(n.props.style);
            n.addClass(n.props.prefixCls, e, n.props.className);
            return t;
          }
        } catch (e) {
          if (!r) {
            throw e;
          }
        }
        return n.state?.container;
      };
      this.addStyle = function (e = {}) {
        if (n.el) {
          for (let t of Object.keys(e)) {
            n.el.style[t] = e[t];
          }
        }
      };
      this.addClass = function (e, t = n.context) {
        let {
          direction: i
        } = t;
        var r = arguments.length;
        var o = Array(r > 2 ? r - 2 : 0);
        var s = 2;
        for (; s < r; s++) {
          o[s - 2] = arguments[s];
        }
        let l = c(e, ...o, {
          [`${e}-rtl`]: i === "rtl"
        });
        if (n.el) {
          n.el.className = l;
        }
      };
      this.state = {
        container: this.initContainer(t, true)
      };
    }
    componentDidMount() {
      let e = this.initContainer(this.context);
      if (e !== this.state.container) {
        this.setState({
          container: e
        });
      }
    }
    componentDidUpdate(e) {
      let {
        didUpdate: t
      } = this.props;
      if (t) {
        t(e);
      }
    }
    componentWillUnmount() {
      let {
        container: e
      } = this.state;
      if (e) {
        e.removeChild(this.el);
      }
    }
    render() {
      let {
        state: e,
        props: t
      } = this;
      if (e.container) {
        return reactDomEntryWrapper.createPortal(t.children, this.el);
      } else {
        return null;
      }
    }
  }
  h.contextType = createContextProvider.context;
  h.defaultProps = {
    prefixCls: `${semiIdentifier.semiIdentifier}-portal`
  };
  h.propTypes = {
    children: l.node,
    prefixCls: l.string,
    getPopupContainer: l.func,
    className: l.string,
    didUpdate: l.func
  };
  var p = h;
  require.d(exports, {
    PortalContainer: function () {
      return p;
    }
  });
}