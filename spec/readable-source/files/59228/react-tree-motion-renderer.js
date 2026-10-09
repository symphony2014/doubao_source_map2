// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TreeMotionRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 192551
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var createReactContext = require("create-react-context") /*id: 435688*/;
  var semiCollapsibleComponent = require("semi-collapsible-component") /*id: 132644*/;
  function o(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; a < i.length; a++) {
        if (t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a])) {
          n[i[a]] = e[i[a]];
        }
      }
    }
    return n;
  }
  function l(e) {
    let {
      open: t,
      children: n
    } = e;
    let i = o(e, ["open", "children"]);
    let [r, l] = reactCoreLibraryReexport.useState(e.open);
    reactCoreLibraryReexport.useEffect(() => {
      setTimeout(() => {
        l(!e.open);
      }, 0);
    }, []);
    return reactCoreLibraryReexport.createElement(semiCollapsibleComponent.Collapsible, Object.assign({}, i, {
      isOpen: r
    }), n);
  }
  let d = e => e.key;
  class h extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this.onMotionEnd = () => {
        if (typeof this.props.onMotionEnd == "function") {
          this.props.onMotionEnd();
        }
        this.setState({
          transitionNodes: []
        });
      };
      this.state = {
        transitionNodes: []
      };
    }
    static getDerivedStateFromProps(e, t) {
      let {
        flattenNodes: n = [],
        motionKeys: a,
        motionType: r,
        flattenList: s = []
      } = e;
      let o = !deepEqualUtil_1.deepEqual(t.cachedMotionKeys, a) || !deepEqualUtil_1.deepEqual(t.cachedData.map(e => e.key), n.map(e => e.key));
      let l = [...a];
      if (!o || !l.length) {
        return null;
      }
      let h = [];
      let c = [];
      let p = 0;
      let u = {};
      (r === "hide" && s ? s : n).forEach((e, t) => {
        let n = d(e);
        if (a.has(n)) {
          c.push(e);
          if (n === l[0]) {
            p = t;
          }
        } else {
          h.push(e);
        }
      });
      h.splice(p, 0, c);
      return {
        transitionNodes: h,
        cachedData: n,
        cachedMotionKeys: a,
        cachedMotionType: r
      };
    }
    render() {
      let {
        flattenNodes: e,
        motionType: t,
        searchTargetIsDeep: n,
        renderTreeNode: i
      } = this.props;
      let {
        transitionNodes: r
      } = this.state;
      return (r.length && !n ? r : e).map(e => {
        let n = Array.isArray(e);
        if (n && !e.length) {
          return null;
        }
        if (n && e.length) {
          let n = d(e[0]);
          return reactCoreLibraryReexport.createElement(l, {
            open: t === "hide",
            duration: 200,
            motion: !!t,
            key: `motion-${n}`,
            onMotionEnd: this.onMotionEnd
          }, e.map(e => i(e)));
        }
        return i(e);
      });
    }
  }
  h.contextType = createReactContext.ReactContext;
  require.d(exports, {
    TreeMotionRenderer: function () {
      return h;
    }
  });
}