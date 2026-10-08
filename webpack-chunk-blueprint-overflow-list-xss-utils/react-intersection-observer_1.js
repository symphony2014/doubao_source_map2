// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'YD' to 'useInView'
// - Renamed export 'df' to 'InView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 728951
         */
module.exports = function (module, exports, require) {
  let r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o() {
    return (o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  let a = new Map();
  let s = new WeakMap();
  let u = 0;
  function c(e, t, n = {}, i = r) {
    if (window.IntersectionObserver === undefined && i !== undefined) {
      let r = e.getBoundingClientRect();
      t(i, {
        isIntersecting: i,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: r,
        intersectionRect: r,
        rootBounds: r
      });
      return () => {};
    }
    let {
      id: o,
      observer: l,
      elements: f
    } = function (e) {
      let t = Object.keys(e).sort().filter(t => e[t] !== undefined).map(t => {
        var n;
        return `${t}_${t === "root" ? (n = e.root) ? (s.has(n) || (u += 1, s.set(n, u.toString())), s.get(n)) : "0" : e[t]}`;
      }).toString();
      let n = a.get(t);
      if (!n) {
        let r;
        let i = new Map();
        let o = new IntersectionObserver(t => {
          t.forEach(t => {
            var n;
            let o = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
            if (e.trackVisibility && t.isVisible === undefined) {
              t.isVisible = o;
            }
            if ((n = i.get(t.target)) != null) {
              n.forEach(e => {
                e(o, t);
              });
            }
          });
        }, e);
        r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]);
        n = {
          id: t,
          observer: o,
          elements: i
        };
        a.set(t, n);
      }
      return n;
    }(n);
    let h = f.get(e) || [];
    if (!f.has(e)) {
      f.set(e, h);
    }
    h.push(t);
    l.observe(e);
    return function () {
      h.splice(h.indexOf(t), 1);
      if (h.length === 0) {
        f.delete(e);
        l.unobserve(e);
      }
      if (f.size === 0) {
        l.disconnect();
        a.delete(o);
      }
    };
  }
  let l = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];
  function f(e) {
    return typeof e.children != "function";
  }
  class h extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.node = null;
      this._unobserveCb = null;
      this.handleNode = e => {
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
      };
      this.handleChange = (e, t) => {
        if (e && this.props.triggerOnce) {
          this.unobserve();
        }
        if (!f(this.props)) {
          this.setState({
            inView: e,
            entry: t
          });
        }
        if (this.props.onChange) {
          this.props.onChange(e, t);
        }
      };
      this.state = {
        inView: !!e.initialInView,
        entry: undefined
      };
    }
    componentDidUpdate(e) {
      if (e.rootMargin !== this.props.rootMargin || e.root !== this.props.root || e.threshold !== this.props.threshold || e.skip !== this.props.skip || e.trackVisibility !== this.props.trackVisibility || e.delay !== this.props.delay) {
        this.unobserve();
        this.observeNode();
      }
    }
    componentWillUnmount() {
      this.unobserve();
      this.node = null;
    }
    observeNode() {
      if (!this.node || this.props.skip) {
        return;
      }
      let {
        threshold: e,
        root: t,
        rootMargin: n,
        trackVisibility: r,
        delay: i,
        fallbackInView: o
      } = this.props;
      this._unobserveCb = c(this.node, this.handleChange, {
        threshold: e,
        root: t,
        rootMargin: n,
        trackVisibility: r,
        delay: i
      }, o);
    }
    unobserve() {
      if (this._unobserveCb) {
        this._unobserveCb();
        this._unobserveCb = null;
      }
    }
    render() {
      if (!f(this.props)) {
        let {
          inView: e,
          entry: t
        } = this.state;
        return this.props.children({
          inView: e,
          entry: t,
          ref: this.handleNode
        });
      }
      let e = this.props;
      let {
        children: t,
        as: n
      } = e;
      let r = function (e, t) {
        if (e == null) {
          return {};
        }
        var n;
        var r;
        var i = {};
        var o = Object.keys(e);
        for (r = 0; r < o.length; r++) {
          n = o[r];
          if (!(t.indexOf(n) >= 0)) {
            i[n] = e[n];
          }
        }
        return i;
      }(e, l);
      return reactCoreLibraryReexport.createElement(n || "div", o({
        ref: this.handleNode
      }, r), t);
    }
  }
  function d({
    threshold: e,
    delay: t,
    trackVisibility: n,
    rootMargin: r,
    root: o,
    triggerOnce: a,
    skip: s,
    initialInView: u,
    fallbackInView: l,
    onChange: f
  } = {}) {
    var h;
    let [p, g] = reactCoreLibraryReexport.useState(null);
    let v = reactCoreLibraryReexport.useRef();
    let [m, y] = reactCoreLibraryReexport.useState({
      inView: !!u,
      entry: undefined
    });
    v.current = f;
    reactCoreLibraryReexport.useEffect(() => {
      let i;
      if (!s && p) {
        i = c(p, (e, t) => {
          y({
            inView: e,
            entry: t
          });
          if (v.current) {
            v.current(e, t);
          }
          if (t.isIntersecting && a && i) {
            i();
            i = undefined;
          }
        }, {
          root: o,
          rootMargin: r,
          threshold: e,
          trackVisibility: n,
          delay: t
        }, l);
        return () => {
          if (i) {
            i();
          }
        };
      }
    }, [Array.isArray(e) ? e.toString() : e, p, o, r, a, s, n, l, t]);
    let b = (h = m.entry) == null ? undefined : h.target;
    let _ = reactCoreLibraryReexport.useRef();
    if (!p && !!b && !a && !s && _.current !== b) {
      _.current = b;
      y({
        inView: !!u,
        entry: undefined
      });
    }
    let w = [g, m.inView, m.entry];
    w.ref = w[0];
    w.inView = w[1];
    w.entry = w[2];
    return w;
  }
  require.d(exports, {
    useInView: function () {
      return d;
    },
    InView: function () {
      return h;
    }
  });
}