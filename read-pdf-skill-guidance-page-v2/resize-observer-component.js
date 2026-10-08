// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ResizeObserverComp'
// - Renamed export 't' to 'observerProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 376612
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  (r = i ||= {}).Width = "width";
  r.Height = "height";
  r.All = "all";
  class d extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      var t;
      super(e);
      t = this;
      this.formerPropertyValue = new Map();
      this.getElement = () => {
        try {
          return reactDomEntryWrapper.findDOMNode(this.childNode || this);
        } catch (e) {
          return null;
        }
      };
      this.handleResizeEventTriggered = e => {
        var t;
        var n;
        var r;
        var o;
        if (this.props.observerProperty === i.All) {
          if ((n = (t = this.props).onResize) !== null && n !== undefined) {
            n.call(t, e);
          }
        } else {
          let t = [];
          for (let n of e) {
            if (this.formerPropertyValue.has(n.target)) {
              if (n.contentRect[this.props.observerProperty] !== this.formerPropertyValue.get(n.target)) {
                this.formerPropertyValue.set(n.target, n.contentRect[this.props.observerProperty]);
                t.push(n);
              }
            } else {
              this.formerPropertyValue.set(n.target, n.contentRect[this.props.observerProperty]);
              t.push(n);
            }
          }
          if (t.length > 0) {
            if ((o = (r = this.props).onResize) !== null && o !== undefined) {
              o.call(r, t);
            }
          }
        }
      };
      this.observeElement = function (e = false) {
        let n = t.getElement();
        t.observer ||= new ResizeObserver(t.handleResizeEventTriggered);
        if (!n || !(n instanceof Element)) {
          t.observer.disconnect();
          return;
        }
        if (n !== t.element || e) {
          t.observer.disconnect();
          t.element = n;
          t.observer.observe(n);
          if (t.props.observeParent && n.parentNode && n.parentNode.ownerDocument && n.parentNode.ownerDocument.defaultView && n.parentNode instanceof n.parentNode.ownerDocument.defaultView.HTMLElement) {
            t._parentNode = n.parentNode;
            t.observer.observe(t._parentNode);
          }
        }
      };
      this.mergeRef = (e, t) => {
        this.childNode = t;
        if (typeof e == "function") {
          e(t);
        } else if (typeof e == "object" && e && "current" in e) {
          e.current = t;
        }
      };
      if (globalThis.ResizeObserver) {
        this.observer = new ResizeObserver(this.handleResizeEventTriggered);
      }
    }
    componentDidMount() {
      var e;
      if ((e = this.observeElement) !== null && e !== undefined) {
        e.call(this);
      }
    }
    componentDidUpdate(e) {
      var t;
      if ((t = this.observeElement) !== null && t !== undefined) {
        t.call(this, this.props.observeParent !== e.observeParent);
      }
    }
    componentWillUnmount() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
        this.element = null;
      }
    }
    render() {
      let e = reactCoreLibraryReexport.Children.only(this.props.children);
      let {
        ref: t
      } = e;
      return reactCoreLibraryReexport.cloneElement(e, {
        ref: e => this.mergeRef(t, e)
      });
    }
  }
  d.propTypes = {
    onResize: l.func,
    observeParent: l.bool,
    observerProperty: l.string,
    delayTick: l.number
  };
  d.defaultProps = {
    onResize: () => {},
    observeParent: false,
    observerProperty: "all",
    delayTick: 0
  };
  require.d(exports, {
    ResizeObserverComp: function () {
      return d;
    },
    observerProperties: function () {
      return i;
    }
  });
}