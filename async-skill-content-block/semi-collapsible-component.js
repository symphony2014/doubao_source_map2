// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Collapsible'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 132644
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class s extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.updateDOMInRenderTree = e => {
        this._adapter.setDOMInRenderTree(e);
      };
      this.updateDOMHeight = e => {
        this._adapter.setDOMHeight(e);
      };
      this.updateVisible = e => {
        this._adapter.setVisible(e);
      };
      this.updateIsTransitioning = e => {
        this._adapter.setIsTransitioning(e);
      };
    }
  }
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var d = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let u = {
    PREFIX: `${semiIdentifier.semiIdentifier}-collapsible`
  };
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  class f extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.domRef = reactCoreLibraryReexport.createRef();
      this.handleResize = e => {
        let t = e[0];
        if (t) {
          let e = f.getEntryInfo(t);
          this.foundation.updateDOMHeight(e.height);
          this.foundation.updateDOMInRenderTree(e.isShown);
        }
      };
      this.isChildrenInRenderTree = () => !!this.domRef.current && this.domRef.current.offsetHeight > 0;
      this.state = {
        domInRenderTree: false,
        domHeight: 0,
        visible: this.props.isOpen,
        isTransitioning: false
      };
      this.foundation = new s(this.adapter);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setDOMInRenderTree: e => {
          if (this.state.domInRenderTree !== e) {
            this.setState({
              domInRenderTree: e
            });
          }
        },
        setDOMHeight: e => {
          if (this.state.domHeight !== e) {
            this.setState({
              domHeight: e
            });
          }
        },
        setVisible: e => {
          if (this.state.visible !== e) {
            this.setState({
              visible: e
            });
          }
        },
        setIsTransitioning: e => {
          if (this.state.isTransitioning !== e) {
            this.setState({
              isTransitioning: e
            });
          }
        }
      });
    }
    componentDidMount() {
      super.componentDidMount();
      this.resizeObserver = new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(this.domRef.current);
      let e = this.isChildrenInRenderTree();
      this.foundation.updateDOMInRenderTree(e);
      if (e) {
        this.foundation.updateDOMHeight(this.domRef.current.scrollHeight);
      }
    }
    componentDidUpdate(e, t, n) {
      let a = Object.keys(this.props).filter(t => !deepEqualUtil_1.deepEqual(this.props[t], e[t]));
      let r = Object.keys(this.state).filter(e => !deepEqualUtil_1.deepEqual(this.state[e], t[e]));
      if (a.includes("reCalcKey")) {
        this.foundation.updateDOMHeight(this.domRef.current.scrollHeight);
      }
      if (r.includes("domInRenderTree") && this.state.domInRenderTree) {
        this.foundation.updateDOMHeight(this.domRef.current.scrollHeight);
      }
      if (a.includes("isOpen") && (this.props.isOpen || !this.props.motion)) {
        this.foundation.updateVisible(this.props.isOpen);
      }
      if (this.props.motion && e.isOpen !== this.props.isOpen) {
        this.foundation.updateIsTransitioning(true);
      }
    }
    componentWillUnmount() {
      super.componentWillUnmount();
      this.resizeObserver.disconnect();
    }
    render() {
      let e = Object.assign({
        overflow: "hidden",
        height: this.props.isOpen ? this.state.domHeight : this.props.collapseHeight,
        opacity: this.props.isOpen || !this.props.fade || this.props.collapseHeight !== 0 ? 1 : 0,
        transitionDuration: `${this.props.motion && this.state.isTransitioning ? this.props.duration : 0}ms`
      }, this.props.style);
      let t = c(`${u.PREFIX}-wrapper`, {
        [`${u.PREFIX}-transition`]: this.props.motion && this.state.isTransitioning
      }, this.props.className);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: t,
        style: e,
        onTransitionEnd: () => {
          var e;
          var t;
          if (!this.props.isOpen) {
            this.foundation.updateVisible(false);
          }
          this.foundation.updateIsTransitioning(false);
          if ((t = (e = this.props).onMotionEnd) !== null && t !== undefined) {
            t.call(e);
          }
        }
      }, this.getDataAttr(this.props)), reactCoreLibraryReexport.createElement("div", {
        "x-semi-prop": "children",
        ref: this.domRef,
        style: {
          overflow: "hidden"
        },
        id: this.props.id
      }, (this.props.keepDOM || this.props.collapseHeight !== 0 || this.state.visible || this.props.isOpen) && this.props.children));
    }
  }
  f.__SemiComponentName__ = "Collapsible";
  f.defaultProps = commonFrontendUtils.configProxyHandler(f.__SemiComponentName__, {
    isOpen: false,
    duration: 250,
    motion: true,
    keepDOM: false,
    collapseHeight: 0,
    fade: false
  });
  f.getEntryInfo = e => {
    let t;
    t = e.borderBoxSize ? e.borderBoxSize[0].blockSize !== 0 || e.borderBoxSize[0].inlineSize !== 0 : e.contentRect.height !== 0 || e.contentRect.width !== 0;
    let n = 0;
    return {
      isShown: t,
      height: e.borderBoxSize ? Math.ceil(e.borderBoxSize[0].blockSize) : e.target.clientHeight
    };
  };
  f.propTypes = {
    motion: d.bool,
    children: d.node,
    isOpen: d.bool,
    duration: d.number,
    keepDOM: d.bool,
    collapseHeight: d.number,
    style: d.object,
    className: d.string,
    reCalcKey: d.oneOfType([d.string, d.number])
  };
  var y = f;
  require.d(exports, {
    Collapsible: function () {
      return y;
    }
  });
}