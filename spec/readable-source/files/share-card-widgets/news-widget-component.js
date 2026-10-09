// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'f' to 'newsCardComponent'
// - Resolved require(330834) to 'news-card-component'
// - Renamed variable 'm' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 135489
         */
module.exports = function (module, exports, require) {
  let n;
  var i = Object.defineProperty;
  var a = Object.defineProperties;
  var o = Object.getOwnPropertyDescriptors;
  var s = Object.getOwnPropertySymbols;
  var l = Object.prototype.hasOwnProperty;
  var c = Object.prototype.propertyIsEnumerable;
  var d = (e, t, r) => t in e ? i(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var u = (e, t) => {
    for (var r in t ||= {}) {
      if (l.call(t, r)) {
        d(e, r, t[r]);
      }
    }
    if (s) {
      for (var r of s(t)) {
        if (c.call(t, r)) {
          d(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var h = (e, t) => a(e, o(t));
  var p = (e, t) => {
    var r = {};
    for (var n in e) {
      if (l.call(e, n) && t.indexOf(n) < 0) {
        r[n] = e[n];
      }
    }
    if (e != null && s) {
      for (var n of s(e)) {
        if (t.indexOf(n) < 0 && c.call(e, n)) {
          r[n] = e[n];
        }
      }
    }
    return r;
  };
  Object.defineProperties(exports, {
    __esModule: {
      value: true
    },
    [Symbol.toStringTag]: {
      value: "Module"
    }
  });
  let newsCardComponent = require("news-card-component") /*id: 330834*/;
  let reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let g = function (e) {
    let t = Object.create(null, {
      [Symbol.toStringTag]: {
        value: "Module"
      }
    });
    if (e) {
      for (let r in e) {
        if (r !== "default") {
          let n = Object.getOwnPropertyDescriptor(e, r);
          Object.defineProperty(t, r, n.get ? n : {
            enumerable: true,
            get: () => e[r]
          });
        }
      }
    }
    t.default = e;
    return Object.freeze(t);
  }(reactCoreLibraryReexport);
  let v = reactCoreLibraryReexport.createContext(null);
  let _ = {
    didCatch: false,
    error: null
  };
  class y extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
      this.state = _;
    }
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
        var r;
        var n = arguments.length;
        var i = Array(n);
        var a = 0;
        for (; a < n; a++) {
          i[a] = arguments[a];
        }
        if ((t = (r = this.props).onReset) !== null && t !== undefined) {
          t.call(r, {
            args: i,
            reason: "imperative-api"
          });
        }
        this.setState(_);
      }
    }
    componentDidCatch(e, t) {
      var r;
      var n;
      if ((r = (n = this.props).onError) !== null && r !== undefined) {
        r.call(n, e, t);
      }
    }
    componentDidUpdate(e, t) {
      let {
        didCatch: r
      } = this.state;
      let {
        resetKeys: n
      } = this.props;
      if (r && t.error !== null && function (e = [], t = []) {
        return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]));
      }(e.resetKeys, n)) {
        var i;
        var a;
        if ((i = (a = this.props).onReset) !== null && i !== undefined) {
          i.call(a, {
            next: n,
            prev: e.resetKeys,
            reason: "keys"
          });
        }
        this.setState(_);
      }
    }
    render() {
      let {
        children: e,
        fallbackRender: t,
        FallbackComponent: r,
        fallback: n
      } = this.props;
      let {
        didCatch: i,
        error: a
      } = this.state;
      let o = e;
      if (i) {
        let e = {
          error: a,
          resetErrorBoundary: this.resetErrorBoundary
        };
        if (typeof t == "function") {
          o = t(e);
        } else if (r) {
          o = reactCoreLibraryReexport.createElement(r, e);
        } else if (n !== undefined) {
          o = n;
        } else {
          throw a;
        }
      }
      return reactCoreLibraryReexport.createElement(v.Provider, {
        value: {
          didCatch: i,
          error: a,
          resetErrorBoundary: this.resetErrorBoundary
        }
      }, o);
    }
  }
  let b = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = p(e, ["title", "titleId"]);
    return g.createElement("svg", u({
      width: 36,
      height: 43,
      viewBox: "0 0 36 43",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      "aria-labelledby": n
    }, i), r ? g.createElement("title", {
      id: n
    }, r) : null, g.createElement("path", {
      d: "M0.96875 25.2461C0.96875 22.8893 1.40495 20.6823 2.27734 18.625C3.14974 16.5677 4.36068 14.7643 5.91016 13.2148C7.47266 11.6654 9.28255 10.4544 11.3398 9.58203C13.4102 8.70964 15.6302 8.27344 18 8.27344C18.7943 8.27344 19.556 8.31901 20.2852 8.41016C21.0273 8.48828 21.6979 8.59896 22.2969 8.74219L16.0859 2.53125C15.9688 2.40104 15.8841 2.26432 15.832 2.12109C15.7799 1.96484 15.7539 1.80859 15.7539 1.65234C15.7539 1.3138 15.8646 1.02734 16.0859 0.792969C16.3073 0.558594 16.5872 0.441406 16.9258 0.441406C17.2904 0.441406 17.5833 0.558594 17.8047 0.792969L26.125 9.28906C26.4245 9.60156 26.5742 9.92708 26.5742 10.2656C26.5742 10.4349 26.5417 10.6042 26.4766 10.7734C26.4115 10.9297 26.2943 11.0924 26.125 11.2617L17.8047 19.6992C17.5964 19.9336 17.3099 20.0508 16.9453 20.0508C16.6068 20.0508 16.3203 19.9336 16.0859 19.6992C15.8646 19.4648 15.7539 19.1849 15.7539 18.8594C15.7539 18.6901 15.7799 18.5339 15.832 18.3906C15.8971 18.2474 15.9883 18.1107 16.1055 17.9805L22.8633 11.2031C22.1992 11.0339 21.444 10.9036 20.5977 10.8125C19.7643 10.7214 18.8984 10.6758 18 10.6758C15.9557 10.6758 14.0482 11.0534 12.2773 11.8086C10.5065 12.5508 8.95703 13.5859 7.62891 14.9141C6.30078 16.2422 5.25911 17.7917 4.50391 19.5625C3.7487 21.3203 3.37109 23.2148 3.37109 25.2461C3.37109 27.2904 3.7487 29.1979 4.50391 30.9688C5.25911 32.7396 6.30078 34.2956 7.62891 35.6367C8.95703 36.9779 10.5065 38.0195 12.2773 38.7617C14.0482 39.5169 15.9557 39.8945 18 39.8945C20.0312 39.8945 21.9258 39.5169 23.6836 38.7617C25.4544 38.0195 27.0039 36.9779 28.332 35.6367C29.6732 34.2956 30.7214 32.7396 31.4766 30.9688C32.2318 29.1979 32.6094 27.2904 32.6094 25.2461C32.6094 24.8815 32.7135 24.582 32.9219 24.3477C33.1302 24.1133 33.4167 23.9961 33.7812 23.9961C34.1458 23.9961 34.4388 24.1133 34.6602 24.3477C34.8945 24.582 35.0117 24.8815 35.0117 25.2461C35.0117 27.6159 34.5755 29.8359 33.7031 31.9062C32.8307 33.9635 31.6133 35.7734 30.0508 37.3359C28.5013 38.8854 26.6914 40.0964 24.6211 40.9688C22.5638 41.8542 20.3568 42.2969 18 42.2969C15.6302 42.2969 13.4102 41.8542 11.3398 40.9688C9.28255 40.0964 7.47266 38.8854 5.91016 37.3359C4.36068 35.7734 3.14974 33.9635 2.27734 31.9062C1.40495 29.8359 0.96875 27.6159 0.96875 25.2461Z",
      fill: "black"
    }));
  });
  let w = (e, t) => {
    var r;
    let n = e.widget_id;
    let i = t == null ? undefined : t.message_id;
    if (n === x.hot_news_card) {
      n = "news";
      let t = newsCardComponent.parseJson(e.widget_data);
      i = t == null ? undefined : t.uniqID;
    } else if (n === x.news_preference_card) {
      n = "news_category";
    }
    return {
      url: (r = window == null ? undefined : window.location) == null ? undefined : r.href,
      rec_id: i,
      message_id: t == null ? undefined : t.message_id,
      message_type: "news",
      card_type: e.widget_id,
      current_page: "chat_history"
    };
  };
  (n = x || {}).hot_news_card = "widget__hot-news";
  n.news_preference_card = "widget__news_preference_card";
  var x = n;
  exports.NewsWidgetId = x;
  exports.default = function (e) {
    let {
      widgetContent: t,
      defaultDisplayText: r,
      openDoubao: n,
      request: i = newsCardComponent.httpClient,
      teaReportFn: a,
      message: o,
      logger: s
    } = e;
    let {
      applet_id: l,
      widget_id: c,
      widget_data: d
    } = t;
    reactCoreLibraryReexport.useEffect(() => {
      if (a && typeof a == "function") {
        a("first_party_card_h5_share_page_view", w(t, o));
      }
    }, []);
    let p = reactCoreLibraryReexport.useCallback(e => {
      if (a && typeof a == "function") {
        a("first_party_card_h5_share_page_click", h(u({}, w(t, o)), {
          click_from: e
        }));
      }
    }, []);
    if (l !== "com.flow.news" || !c) {
      return null;
    }
    let g = newsCardComponent.parseJson(d);
    if (!g) {
      return null;
    }
    let v = null;
    if (c === "widget__hot-news") {
      v = newsCardComponent.jsxRuntimeExports.jsx(newsCardComponent.NewsCard, h(u({}, g), {
        openDoubao: n,
        request: i,
        reportClick: p
      }));
    } else {
      v = newsCardComponent.jsxRuntimeExports.jsxs("div", {
        children: [" ", r, " "]
      });
    }
    return newsCardComponent.jsxRuntimeExports.jsx(y, {
      onError: e => {
        var t;
        if ((t = s == null ? undefined : s.error) != null) {
          t.call(s, {
            message: e.message,
            eventName: "news share card render error",
            meta: {
              reportJsError: true
            }
          });
        }
      },
      fallbackRender: () => newsCardComponent.jsxRuntimeExports.jsxs("div", {
        onClick: () => location.reload(),
        className: "render-error-wrapper",
        children: [newsCardComponent.jsxRuntimeExports.jsx(b, {
          className: "render-error-icon"
        }), newsCardComponent.jsxRuntimeExports.jsx("div", {
          className: "render-error-text",
          children: "加载异常"
        })]
      }),
      children: newsCardComponent.jsxRuntimeExports.jsx("div", {
        className: "theme-light",
        children: v
      })
    });
  };
}