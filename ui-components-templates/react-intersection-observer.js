// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'YD' to 'useInView'
// - Renamed export 'df' to 'InView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 637954
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var n = Object.defineProperty;
  var o = (e, t, l) => t in e ? n(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: l
  }) : e[t] = l;
  var a = (e, t, l) => o(e, typeof t != "symbol" ? t + "" : t, l);
  var r = new Map();
  var s = new WeakMap();
  var c = 0;
  var d = undefined;
  function u(e, t, l = {}, i = d) {
    if (window.IntersectionObserver === undefined && i !== undefined) {
      let n = e.getBoundingClientRect();
      t(i, {
        isIntersecting: i,
        target: e,
        intersectionRatio: typeof l.threshold == "number" ? l.threshold : 0,
        time: 0,
        boundingClientRect: n,
        intersectionRect: n,
        rootBounds: n
      });
      return () => {};
    }
    let {
      id: n,
      observer: o,
      elements: a
    } = function (e) {
      let t = Object.keys(e).sort().filter(t => e[t] !== undefined).map(t => {
        var l;
        return `${t}_${t === "root" ? (l = e.root) ? (s.has(l) || (c += 1, s.set(l, c.toString())), s.get(l)) : "0" : e[t]}`;
      }).toString();
      let l = r.get(t);
      if (!l) {
        let i;
        let n = new Map();
        let o = new IntersectionObserver(t => {
          t.forEach(t => {
            var l;
            let o = t.isIntersecting && i.some(e => t.intersectionRatio >= e);
            if (e.trackVisibility && t.isVisible === undefined) {
              t.isVisible = o;
            }
            if ((l = n.get(t.target)) != null) {
              l.forEach(e => {
                e(o, t);
              });
            }
          });
        }, e);
        i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]);
        l = {
          id: t,
          observer: o,
          elements: n
        };
        r.set(t, l);
      }
      return l;
    }(l);
    let m = a.get(e) || [];
    if (!a.has(e)) {
      a.set(e, m);
    }
    m.push(t);
    o.observe(e);
    return function () {
      m.splice(m.indexOf(t), 1);
      if (m.length === 0) {
        a.delete(e);
        o.unobserve(e);
      }
      if (a.size === 0) {
        o.disconnect();
        r.delete(n);
      }
    };
  }
  var m = class extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      a(this, "node", null);
      a(this, "_unobserveCb", null);
      a(this, "handleNode", e => {
        if (this.node) {
          this.unobserve();
          if (!e && !this.props.triggerOnce && !this.props.skip) {
            this.setState({
              inView: !!this.props.initialInView,
              entry: undefined
            });
          }
        }
        this.node = e || null;
        this.observeNode();
      });
      a(this, "handleChange", (e, t) => {
        if (e && this.props.triggerOnce) {
          this.unobserve();
        }
        if (typeof this.props.children == "function") {
          this.setState({
            inView: e,
            entry: t
          });
        }
        if (this.props.onChange) {
          this.props.onChange(e, t);
        }
      });
      this.state = {
        inView: !!e.initialInView,
        entry: undefined
      };
    }
    componentDidMount() {
      this.unobserve();
      this.observeNode();
    }
    componentDidUpdate(e) {
      if (e.rootMargin !== this.props.rootMargin || e.root !== this.props.root || e.threshold !== this.props.threshold || e.skip !== this.props.skip || e.trackVisibility !== this.props.trackVisibility || e.delay !== this.props.delay) {
        this.unobserve();
        this.observeNode();
      }
    }
    componentWillUnmount() {
      this.unobserve();
    }
    observeNode() {
      if (!this.node || this.props.skip) {
        return;
      }
      let {
        threshold: e,
        root: t,
        rootMargin: l,
        trackVisibility: i,
        delay: n,
        fallbackInView: o
      } = this.props;
      this._unobserveCb = u(this.node, this.handleChange, {
        threshold: e,
        root: t,
        rootMargin: l,
        trackVisibility: i,
        delay: n
      }, o);
    }
    unobserve() {
      if (this._unobserveCb) {
        this._unobserveCb();
        this._unobserveCb = null;
      }
    }
    render() {
      let {
        children: e
      } = this.props;
      if (typeof e == "function") {
        let {
          inView: t,
          entry: l
        } = this.state;
        return e({
          inView: t,
          entry: l,
          ref: this.handleNode
        });
      }
      let {
        as: t,
        triggerOnce: l,
        threshold: n,
        root: o,
        rootMargin: a,
        onChange: r,
        skip: s,
        trackVisibility: c,
        delay: d,
        initialInView: u,
        fallbackInView: m,
        ...p
      } = this.props;
      return reactCoreLibraryReexport.createElement(t || "div", {
        ref: this.handleNode,
        ...p
      }, e);
    }
  };
  function p({
    threshold: e,
    delay: t,
    trackVisibility: l,
    rootMargin: n,
    root: o,
    triggerOnce: a,
    skip: r,
    initialInView: s,
    fallbackInView: c,
    onChange: d
  } = {}) {
    var m;
    let [_, v] = reactCoreLibraryReexport.useState(null);
    let g = reactCoreLibraryReexport.useRef(d);
    let [h, f] = reactCoreLibraryReexport.useState({
      inView: !!s,
      entry: undefined
    });
    g.current = d;
    reactCoreLibraryReexport.useEffect(() => {
      let i;
      if (!r && _) {
        i = u(_, (e, t) => {
          f({
            inView: e,
            entry: t
          });
          if (g.current) {
            g.current(e, t);
          }
          if (t.isIntersecting && a && i) {
            i();
            i = undefined;
          }
        }, {
          root: o,
          rootMargin: n,
          threshold: e,
          trackVisibility: l,
          delay: t
        }, c);
        return () => {
          if (i) {
            i();
          }
        };
      }
    }, [Array.isArray(e) ? e.toString() : e, _, o, n, a, r, l, c, t]);
    let b = (m = h.entry) == null ? undefined : m.target;
    let w = reactCoreLibraryReexport.useRef(undefined);
    if (!_ && !!b && !a && !r && w.current !== b) {
      w.current = b;
      f({
        inView: !!s,
        entry: undefined
      });
    }
    let y = [v, h.inView, h.entry];
    y.ref = y[0];
    y.inView = y[1];
    y.entry = y[2];
    return y;
  }
  require.d(exports, {
    useInView: function () {
      return p;
    },
    InView: function () {
      return m;
    }
  });
}