// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Spin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 714437
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let c = `${semiIdentifier.semiIdentifier}-spin`;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class f extends componentAdapterBaseClass.BaseAdapterClass {
    static get spinDefaultAdapter() {
      return {
        getProp: () => undefined,
        setLoading: e => undefined
      };
    }
    constructor(e) {
      super(Object.assign(Object.assign({}, f.spinDefaultAdapter), e));
    }
    updateLoadingIfNeedDelay() {
      let {
        spinning: e,
        delay: t
      } = this._adapter.getProps();
      let {
        delay: n
      } = this._adapter.getStates();
      if (n) {
        let n = this;
        this._timer = setTimeout(() => {
          n._adapter.setState({
            loading: e,
            delay: 0
          });
        }, t);
      }
    }
    destroy() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
  }
  var spinIconComponent = require("spin-icon-component") /*id: 982867*/;
  function p(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let m = {
    PREFIX: c
  }.PREFIX;
  class g extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.foundation = new f(this.adapter);
      this.state = {
        delay: e.delay,
        loading: true
      };
    }
    static getDerivedStateFromProps(e) {
      if (e.delay) {
        if (e.spinning === false) {
          return {
            delay: 0,
            loading: false
          };
        } else {
          return {
            delay: e.delay
          };
        }
      } else {
        return {
          loading: e.spinning
        };
      }
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setLoading: e => {
          this.setState({
            loading: e
          });
        }
      });
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    renderSpin() {
      let {
        indicator: e,
        tip: t
      } = this.props;
      let {
        loading: n
      } = this.state;
      if (n) {
        return reactCoreLibraryReexport.createElement("div", {
          className: `${m}-wrapper`
        }, e ? reactCoreLibraryReexport.createElement("div", {
          className: `${m}-animate`,
          "x-semi-prop": "indicator"
        }, e) : reactCoreLibraryReexport.createElement(spinIconComponent.SpinIcon, null), t ? reactCoreLibraryReexport.createElement("div", {
          "x-semi-prop": "tip"
        }, t) : null);
      } else {
        return null;
      }
    }
    render() {
      this.foundation.updateLoadingIfNeedDelay();
      let e = this.props;
      let {
        children: t,
        style: n,
        wrapperClassName: r,
        childStyle: s,
        size: a
      } = e;
      let l = p(e, ["children", "style", "wrapperClassName", "childStyle", "size"]);
      let {
        loading: u
      } = this.state;
      let c = o(m, r, {
        [`${m}-${a}`]: a,
        [`${m}-block`]: t,
        [`${m}-hidden`]: !u
      });
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: c,
        style: n
      }, this.getDataAttr(l)), this.renderSpin(), reactCoreLibraryReexport.createElement("div", {
        className: `${m}-children`,
        style: s,
        "x-semi-prop": "children"
      }, t));
    }
  }
  g.propTypes = {
    size: s.oneOf(["small", "middle", "large"]),
    spinning: s.bool,
    children: s.node,
    indicator: s.node,
    delay: s.number,
    tip: s.node,
    wrapperClassName: s.string,
    childStyle: s.object,
    style: s.object
  };
  g.defaultProps = {
    size: "middle",
    spinning: true,
    children: null,
    indicator: null,
    delay: 0
  };
  var _ = g;
  require.d(exports, {
    Spin: function () {
      return _;
    }
  });
}