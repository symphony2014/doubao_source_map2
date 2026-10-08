// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SV' to 'ErrorBoundary'
// - Renamed export 'cO' to 'useErrorBoundary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 528804
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = reactCoreLibraryReexport.createContext(null);
  let o = {
    didCatch: false,
    error: null
  };
  class a extends reactCoreLibraryReexport.Component {
    static getDerivedStateFromError(e) {
      return {
        didCatch: true,
        error: e
      };
    }
    resetErrorBoundary() {
      let {
        error: e
      } = this.state;
      if (e !== null) {
        var t;
        var n;
        var r = arguments.length;
        var i = Array(r);
        var a = 0;
        for (; a < r; a++) {
          i[a] = arguments[a];
        }
        if ((t = (n = this.props).onReset) !== null && t !== undefined) {
          t.call(n, {
            args: i,
            reason: "imperative-api"
          });
        }
        this.setState(o);
      }
    }
    componentDidCatch(e, t) {
      var n;
      var r;
      if ((n = (r = this.props).onError) !== null && n !== undefined) {
        n.call(r, e, t);
      }
    }
    componentDidUpdate(e, t) {
      let {
        didCatch: n
      } = this.state;
      let {
        resetKeys: r
      } = this.props;
      if (n && t.error !== null && function (e = [], t = []) {
        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
      }(e.resetKeys, r)) {
        var i;
        var a;
        if ((i = (a = this.props).onReset) !== null && i !== undefined) {
          i.call(a, {
            next: r,
            prev: e.resetKeys,
            reason: "keys"
          });
        }
        this.setState(o);
      }
    }
    render() {
      let {
        children: e,
        fallbackRender: t,
        FallbackComponent: n,
        fallback: o
      } = this.props;
      let {
        didCatch: a,
        error: s
      } = this.state;
      let u = e;
      if (a) {
        let e = {
          error: s,
          resetErrorBoundary: this.resetErrorBoundary
        };
        if (typeof t == "function") {
          u = t(e);
        } else if (n) {
          u = reactCoreLibraryReexport.createElement(n, e);
        } else if (o === null || reactCoreLibraryReexport.isValidElement(o)) {
          u = o;
        } else {
          throw s;
        }
      }
      return reactCoreLibraryReexport.createElement(i.Provider, {
        value: {
          didCatch: a,
          error: s,
          resetErrorBoundary: this.resetErrorBoundary
        }
      }, u);
    }
    constructor(e) {
      super(e);
      this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
      this.state = o;
    }
  }
  function s() {
    let e = reactCoreLibraryReexport.useContext(i);
    (function (e) {
      if (e == null || typeof e.didCatch != "boolean" || typeof e.resetErrorBoundary != "function") {
        throw Error("ErrorBoundaryContext not found");
      }
    })(e);
    let [t, n] = reactCoreLibraryReexport.useState({
      error: null,
      hasError: false
    });
    let o = reactCoreLibraryReexport.useMemo(() => ({
      resetBoundary: () => {
        e.resetErrorBoundary();
        n({
          error: null,
          hasError: false
        });
      },
      showBoundary: e => n({
        error: e,
        hasError: true
      })
    }), [e.resetErrorBoundary]);
    if (t.hasError) {
      throw t.error;
    }
    return o;
  }
  require.d(exports, {
    ErrorBoundary: function () {
      return a;
    },
    useErrorBoundary: function () {
      return s;
    }
  });
}