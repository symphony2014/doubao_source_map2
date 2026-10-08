// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'h' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'p' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 651137
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  let a;
  let o;
  let s;
  let l;
  var c;
  var d;
  var u;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  var f = Object.defineProperty;
  var m = Object.defineProperties;
  var g = Object.getOwnPropertyDescriptors;
  var v = Object.getOwnPropertySymbols;
  var _ = Object.prototype.hasOwnProperty;
  var y = Object.prototype.propertyIsEnumerable;
  var b = (e, t, r) => t in e ? f(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var w = (e, t) => {
    for (var r in t ||= {}) {
      if (_.call(t, r)) {
        b(e, r, t[r]);
      }
    }
    if (v) {
      for (var r of v(t)) {
        if (y.call(t, r)) {
          b(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var x = (e, t) => m(e, g(t));
  var k = (e, t) => {
    var r = {};
    for (var n in e) {
      if (_.call(e, n) && t.indexOf(n) < 0) {
        r[n] = e[n];
      }
    }
    if (e != null && v) {
      for (var n of v(e)) {
        if (t.indexOf(n) < 0 && y.call(e, n)) {
          r[n] = e[n];
        }
      }
    }
    return r;
  };
  var C = (e, t, r) => new Promise((n, i) => {
    var a = e => {
      try {
        s(r.next(e));
      } catch (e) {
        i(e);
      }
    };
    var o = e => {
      try {
        s(r.throw(e));
      } catch (e) {
        i(e);
      }
    };
    var s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
    s((r = r.apply(e, t)).next());
  });
  var j = {
    exports: {}
  };
  var S = {};
  j.exports = function () {
    if (n$) {
      return S;
    }
    n$ = 1;
    var e = Symbol.for("react.element");
    var t = Symbol.for("react.fragment");
    var r = Object.prototype.hasOwnProperty;
    var n = reactCoreLibraryReexport.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var i = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    function a(t, a, o) {
      var s;
      var l = {};
      var c = null;
      var d = null;
      if (o !== undefined) {
        c = "" + o;
      }
      if (a.key !== undefined) {
        c = "" + a.key;
      }
      if (a.ref !== undefined) {
        d = a.ref;
      }
      for (s in a) {
        if (r.call(a, s) && !i.hasOwnProperty(s)) {
          l[s] = a[s];
        }
      }
      if (t && t.defaultProps) {
        for (s in a = t.defaultProps) {
          if (l[s] === undefined) {
            l[s] = a[s];
          }
        }
      }
      return {
        $$typeof: e,
        type: t,
        key: c,
        ref: d,
        props: l,
        _owner: n.current
      };
    }
    S.Fragment = t;
    S.jsx = a;
    S.jsxs = a;
    return S;
  }();
  var E = j.exports;
  let R = reactCoreLibraryReexport.createContext(null);
  let N = {
    didCatch: false,
    error: null
  };
  class T extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
      this.state = N;
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
        this.setState(N);
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
        this.setState(N);
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
        } else if (n === null || reactCoreLibraryReexport.isValidElement(n)) {
          o = n;
        } else {
          throw a;
        }
      }
      return reactCoreLibraryReexport.createElement(R.Provider, {
        value: {
          didCatch: i,
          error: a,
          resetErrorBoundary: this.resetErrorBoundary
        }
      }, o);
    }
  }
  function P() {
    return E.jsx("svg", {
      className: "heart-empty",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: E.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.6789 8.40608C15.0674 7.01755 15.0674 4.76629 13.6789 3.37776C12.2903 1.98923 10.0391 1.98923 8.65056 3.37776L7.99976 4.02856L7.99967 4.02848C6.61114 2.63994 4.35989 2.63994 2.97136 4.02847C1.58283 5.41701 1.58283 7.66826 2.97136 9.05679L6.49118 12.5766C7.3243 13.4097 8.67505 13.4097 9.50817 12.5766L9.62132 12.4635C9.62713 12.4578 9.63291 12.452 9.63868 12.4463L13.6789 8.40608Z",
        fill: "#D9D9D9"
      })
    });
  }
  var I = {
    exports: {}
  };
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      var r = [];
      var n = 0;
      for (; n < arguments.length; n++) {
        var i = arguments[n];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number") {
            r.push(i);
          } else if (Array.isArray(i)) {
            if (i.length) {
              var o = t.apply(null, i);
              if (o) {
                r.push(o);
              }
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var s in i) {
              if (e.call(i, s) && i[s]) {
                r.push(s);
              }
            }
          }
        }
      }
      return r.join(" ");
    }
    if (I.exports) {
      t.default = t;
      I.exports = t;
    } else {
      window.classNames = t;
    }
  })();
  let $ = (nC = I.exports) && nC.__esModule && Object.prototype.hasOwnProperty.call(nC, "default") ? nC.default : nC;
  function A({
    score: e,
    showScore: t = true,
    showRate: r = true,
    showText: n = true,
    noneScoreStyle: i,
    mini: a = false
  }) {
    let o = reactCoreLibraryReexport.useMemo(() => !e || Number(e) === 0 || !!isNaN(Number(e)), [e]);
    let s = reactCoreLibraryReexport.useMemo(() => {
      if (o) {
        return null;
      }
      let t = [];
      let r = Number(e);
      let n = Math.floor(r);
      let i = r - n;
      for (let e = 0; e < n; e++) {
        t.push(E.jsx("img", {
          src: "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.45704%206.04272C6.53983%203.95992%209.91671%203.95992%2011.9995%206.04272L19.542%2013.5852L14.1208%2019.0063C12.9493%2020.1779%2011.0498%2020.1779%209.87819%2019.0063L4.45703%2013.5852C2.37424%2011.5024%202.37424%208.12552%204.45704%206.04272Z'%20fill='url(%23paint0_linear_350_61790)'/%3e%3cmask%20id='mask0_350_61790'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='2'%20y='4'%20width='18'%20height='16'%3e%3cpath%20d='M4.45704%206.04272C6.53983%203.95992%209.91671%203.95992%2011.9995%206.04272L19.542%2013.5852L14.1208%2019.0063C12.9493%2020.1779%2011.0498%2020.1779%209.87819%2019.0063L4.45703%2013.5852C2.37424%2011.5024%202.37424%208.12552%204.45704%206.04272Z'%20fill='url(%23paint1_linear_350_61790)'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_350_61790)'%3e%3cg%20filter='url(%23filter0_f_350_61790)'%3e%3cellipse%20cx='11.9859'%20cy='6.61421'%20rx='2.5'%20ry='2.623'%20transform='rotate(39.5084%2011.9859%206.61421)'%20fill='%23F3000F'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_350_61790)'%3e%3cellipse%20cx='11.9859'%20cy='6.61421'%20rx='2.5'%20ry='2.623'%20transform='rotate(39.5084%2011.9859%206.61421)'%20fill='%23F3000F'/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_350_61790)'%3e%3cellipse%20cx='4.5975'%20cy='6.61421'%20rx='2.5'%20ry='2.623'%20transform='rotate(39.5084%204.5975%206.61421)'%20fill='white'%20fill-opacity='0.3'/%3e%3c/g%3e%3c/g%3e%3cpath%20d='M20.5183%205.06665C22.6011%207.14945%2022.6011%2010.5263%2020.5183%2012.6091L14.1215%2019.006C12.9499%2020.1776%2011.0504%2020.1776%209.87881%2019.006L4.45766%2013.5848L12.9758%205.06665C15.0586%202.98386%2018.4355%202.98386%2020.5183%205.06665Z'%20fill='url(%23paint2_linear_350_61790)'/%3e%3cmask%20id='mask1_350_61790'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='4'%20y='3'%20width='19'%20height='17'%3e%3cpath%20d='M20.5183%205.06665C22.6011%207.14945%2022.6011%2010.5263%2020.5183%2012.6091L14.1215%2019.006C12.9499%2020.1776%2011.0504%2020.1776%209.87881%2019.006L4.45766%2013.5848L12.9758%205.06665C15.0586%202.98386%2018.4355%202.98386%2020.5183%205.06665Z'%20fill='url(%23paint3_linear_350_61790)'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_350_61790)'%3e%3cg%20filter='url(%23filter3_f_350_61790)'%3e%3ccircle%20cx='17.5'%20cy='6.5'%20r='1.5'%20fill='%23FFC633'/%3e%3c/g%3e%3cg%20filter='url(%23filter4_f_350_61790)'%3e%3ccircle%20cx='17.5'%20cy='6.5'%20r='1.5'%20fill='%23FFDC81'/%3e%3c/g%3e%3cg%20filter='url(%23filter5_f_350_61790)'%3e%3ccircle%20cx='19.5'%20cy='8.5'%20r='1.5'%20fill='%23FFC633'/%3e%3c/g%3e%3cg%20filter='url(%23filter6_f_350_61790)'%3e%3ccircle%20cx='14.5'%20cy='6.5'%20r='1.5'%20fill='%23FFC633'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_350_61790'%20x='5.4353'%20y='0.0401611'%20width='13.1011'%20height='13.1481'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='2'%20result='effect1_foregroundBlur_350_61790'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_350_61790'%20x='5.4353'%20y='0.0401611'%20width='13.1011'%20height='13.1481'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='2'%20result='effect1_foregroundBlur_350_61790'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_350_61790'%20x='-1.95312'%20y='0.0401611'%20width='13.1011'%20height='13.1481'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='2'%20result='effect1_foregroundBlur_350_61790'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_350_61790'%20x='12'%20y='1'%20width='11'%20height='11'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='2'%20result='effect1_foregroundBlur_350_61790'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_350_61790'%20x='12'%20y='1'%20width='11'%20height='11'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='2'%20result='effect1_foregroundBlur_350_61790'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_350_61790'%20x='8'%20y='-3'%20width='23'%20height='23'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='5'%20result='effect1_foregroundBlur_350_61790'/%3e%3c/filter%3e%3cfilter%20id='filter6_f_350_61790'%20x='7'%20y='-1'%20width='15'%20height='15'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='3'%20result='effect1_foregroundBlur_350_61790'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_350_61790'%20x1='6.5'%20y1='4.5'%20x2='11.5'%20y2='12'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF0C6E'/%3e%3cstop%20offset='1'%20stop-color='%23FF003C'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_350_61790'%20x1='6.5'%20y1='4.5'%20x2='11.5'%20y2='12'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF0C6E'/%3e%3cstop%20offset='1'%20stop-color='%23FF003C'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_350_61790'%20x1='19.5001'%20y1='4'%20x2='12.5001'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAD7E'/%3e%3cstop%20offset='1'%20stop-color='%23FF0043'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_350_61790'%20x1='19.5001'%20y1='4'%20x2='12.5001'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAD7E'/%3e%3cstop%20offset='1'%20stop-color='%23FF0043'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
          className: "rate_item"
        }, e));
      }
      if (i >= 0.5) {
        t.push(E.jsx("img", {
          src: "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.6789%203.37776C15.0674%204.7663%2015.0674%207.01755%2013.6789%208.40608L9.4143%2012.6707C8.63325%2013.4517%207.36692%2013.4517%206.58588%2012.6707L2.97178%209.05655L8.65056%203.37776C10.0391%201.98923%2012.2903%201.98923%2013.6789%203.37776Z'%20fill='%23D9D9D9'%20/%3e%3cpath%20d='M2.97404%204.02579C4.36197%202.63787%206.61151%202.6355%208.00235%204.02051L11.2937%207.29803C11.941%207.94266%2012.8733%208.21104%2013.7643%208.00925L14.1%207.93322L9.41391%2012.6589C8.63384%2013.4456%207.36292%2013.4483%206.57955%2012.6649L2.97405%209.05939C1.58406%207.6694%201.58405%205.41578%202.97404%204.02579Z'%20fill='url(%23paint0_linear_10325_1307)'%20/%3e%3cmask%20id='mask0_10325_1307'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='1'%20y='2'%20width='13'%20height='12'%3e%3cpath%20d='M2.97119%204.02841C4.35973%202.63988%206.61098%202.63988%207.99951%204.02841L11.3332%207.36207L13.0278%209.05672L9.41372%2012.6708C8.63267%2013.4519%207.36634%2013.4519%206.5853%2012.6708L2.9712%209.05673C1.58267%207.6682%201.58266%205.41694%202.97119%204.02841Z'%20fill='url(%23paint1_linear_10325_1307)'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_10325_1307)'%3e%3cg%20filter='url(%23filter0_f_10325_1307)'%3e%3cellipse%20cx='7.99046'%20cy='4.4094'%20rx='1.66667'%20ry='1.74867'%20transform='rotate(39.5084%207.99046%204.4094)'%20fill='%23F3000F'%20/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_10325_1307)'%3e%3cellipse%20cx='7.99046'%20cy='4.4094'%20rx='1.66667'%20ry='1.74867'%20transform='rotate(39.5084%207.99046%204.4094)'%20fill='%23F3000F'%20/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_10325_1307)'%3e%3cellipse%20cx='3.065'%20cy='4.4094'%20rx='1.66667'%20ry='1.74867'%20transform='rotate(39.5084%203.065%204.4094)'%20fill='white'%20fill-opacity='0.3'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_10325_1307'%20x='3.62343'%20y='0.0267079'%20width='8.73405'%20height='8.76539'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%20/%3e%3cfeGaussianBlur%20stdDeviation='1.33333'%20result='effect1_foregroundBlur_10325_1307'%20/%3e%3c/filter%3e%3cfilter%20id='filter1_f_10325_1307'%20x='3.62343'%20y='0.0267079'%20width='8.73405'%20height='8.76539'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%20/%3e%3cfeGaussianBlur%20stdDeviation='1.33333'%20result='effect1_foregroundBlur_10325_1307'%20/%3e%3c/filter%3e%3cfilter%20id='filter2_f_10325_1307'%20x='-1.30203'%20y='0.0267079'%20width='8.73405'%20height='8.76539'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%20/%3e%3cfeGaussianBlur%20stdDeviation='1.33333'%20result='effect1_foregroundBlur_10325_1307'%20/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_10325_1307'%20x1='2.65875'%20y1='4.31135'%20x2='7.22661'%20y2='8.64721'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAD7E'%20/%3e%3cstop%20offset='1'%20stop-color='%23FF0043'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_10325_1307'%20x1='4.33317'%20y1='2.99993'%20x2='7.6665'%20y2='7.99993'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF0C6E'%20/%3e%3cstop%20offset='1'%20stop-color='%23FF003C'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
          className: "rate_item rate_item_light"
        }, r + "light"));
        t.push(E.jsx("img", {
          src: "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.969%202.95555C13.184%204.17052%2013.184%206.14036%2011.969%207.35533L8.23753%2011.0868C7.55411%2011.7702%206.44607%2011.7702%205.76265%2011.0868L2.60031%207.92449L7.56925%202.95555C8.78422%201.74059%2010.7541%201.74059%2011.969%202.95555Z'%20fill='white'%20fill-opacity='0.12'%20/%3e%3cpath%20d='M2.60228%203.52257C3.81671%202.30813%205.78506%202.30607%207.00205%203.51795L9.88195%206.38577C10.4484%206.94983%2011.2641%207.18466%2012.0438%207.00809L12.3375%206.94157L8.23716%2011.0766C7.5546%2011.7649%206.44254%2011.7672%205.75709%2011.0818L2.60228%207.92697C1.38604%206.71073%201.38604%204.73881%202.60228%203.52257Z'%20fill='url(%23paint0_linear_10592_3275)'%20/%3e%3cmask%20id='mask0_10592_3275'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='1'%20y='2'%20width='11'%20height='10'%3e%3cpath%20d='M2.59979%203.52499C3.81476%202.31003%205.78461%202.31003%206.99957%203.52499L9.91652%206.44195L11.3993%207.92477L8.23701%2011.0871C7.55359%2011.7705%206.44555%2011.7705%205.76213%2011.0871L2.5998%207.92477C1.38483%206.7098%201.38483%204.73996%202.59979%203.52499Z'%20fill='url(%23paint1_linear_10592_3275)'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_10592_3275)'%3e%3cg%20filter='url(%23filter0_f_10592_3275)'%3e%3cellipse%20cx='6.99166'%20cy='3.85836'%20rx='1.45833'%20ry='1.53009'%20transform='rotate(39.5084%206.99166%203.85836)'%20fill='%23F3000F'%20/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_10592_3275)'%3e%3cellipse%20cx='6.99166'%20cy='3.85836'%20rx='1.45833'%20ry='1.53009'%20transform='rotate(39.5084%206.99166%203.85836)'%20fill='%23F3000F'%20/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_10592_3275)'%3e%3cellipse%20cx='2.68187'%20cy='3.85836'%20rx='1.45833'%20ry='1.53009'%20transform='rotate(39.5084%202.68187%203.85836)'%20fill='white'%20fill-opacity='0.3'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_10592_3275'%20x='3.17051'%20y='0.0235085'%20width='7.64228'%20height='7.66972'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%20/%3e%3cfeGaussianBlur%20stdDeviation='1.16667'%20result='effect1_foregroundBlur_10592_3275'%20/%3e%3c/filter%3e%3cfilter%20id='filter1_f_10592_3275'%20x='3.17051'%20y='0.0235085'%20width='7.64228'%20height='7.66972'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%20/%3e%3cfeGaussianBlur%20stdDeviation='1.16667'%20result='effect1_foregroundBlur_10592_3275'%20/%3e%3c/filter%3e%3cfilter%20id='filter2_f_10592_3275'%20x='-1.13927'%20y='0.0235085'%20width='7.64228'%20height='7.66972'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%20/%3e%3cfeGaussianBlur%20stdDeviation='1.16667'%20result='effect1_foregroundBlur_10592_3275'%20/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_10592_3275'%20x1='2.3264'%20y1='3.77243'%20x2='6.32328'%20y2='7.56631'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFAD7E'%20/%3e%3cstop%20offset='1'%20stop-color='%23FF0043'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_10592_3275'%20x1='3.79152'%20y1='2.62507'%20x2='6.70819'%20y2='7.00007'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF0C6E'%20/%3e%3cstop%20offset='1'%20stop-color='%23FF003C'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
          className: "rate_item rate_item_dark"
        }, r + "dark"));
      }
      let a = Math.ceil(r);
      let s = 5 - a + +(i > 0 && i < 0.5);
      for (let e = 0; e < s; e++) {
        t.push(E.jsx("div", {
          className: "rate_item",
          children: E.jsx(P, {})
        }, e + a));
      }
      return t;
    }, [e, o]);
    let l = reactCoreLibraryReexport.useMemo(() => {
      let t = typeof e == "string" ? Number(e) : e;
      if (!t || t <= 3) {
        return "";
      } else if (t <= 3.5) {
        return "一般";
      } else if (t <= 4) {
        return "可以一试";
      } else if (t <= 4.5) {
        return "推荐";
      } else if (t <= 4.8) {
        return "非常棒";
      } else {
        return "超赞";
      }
    }, [e]);
    if (o) {
      return E.jsx("div", {
        className: "none_score",
        style: i,
        children: "暂无评分"
      });
    } else {
      return E.jsxs("div", {
        className: $("rate_container", a ? "rate_container--mini" : ""),
        children: [r && E.jsx("div", {
          className: "rating_icons",
          children: s
        }), E.jsxs("div", {
          className: "rating",
          children: [t && E.jsx("span", {
            className: "rating_num",
            children: Number(e).toFixed(1)
          }), n && !!e && E.jsx("span", {
            className: "rating_text",
            children: l
          })]
        })]
      });
    }
  }
  let O = new class {
    constructor() {
      this._info = [];
      this._teaLogs = [];
      this._errorLogs = [];
      this.widgetActions = [];
    }
    get info() {
      return this._info;
    }
    get teaLogs() {
      return this._teaLogs;
    }
    get errors() {
      return this._errorLogs;
    }
    setInfo(e) {
      e.forEach(([e, t]) => {
        if (e === "debug_info") {
          let e = D(t);
          this._info.push(["log_id", e.log_id]);
          this._info.push(["coze_debug_info", e.coze_debug_info]);
          this._info.push(["memory_debug_info", e.user_memory]);
          this._info.push(["fpa_debug_info", e.fpa_debug_info]);
          this._info.push(["paas_debug_info", e.paas_debug_info]);
          this._info.push(["search_debug_info", e.search_debug_info]);
        } else {
          this._info.push([e, t]);
        }
      });
    }
    setTeaLogs([e, t]) {
      t.time = Date.now();
      this._teaLogs.push([e, t]);
    }
    setErrorLogs([e, t]) {
      t.time = Date.now();
      this._errorLogs.push([e, t]);
    }
    setWidgetActionLogs([e, t]) {
      try {
        let r = typeof t == "string" ? {
          msg: t
        } : t;
        r.time = Date.now();
        this.widgetActions.push([e, r]);
      } catch (e) {
        F.error(e);
      }
    }
  }();
  let F = new class {
    constructor(e) {
      this.prefix = e;
    }
    debug(...e) {}
    info(...e) {}
    warn(...e) {}
    error(...e) {
      if (!U) {
        O.setErrorLogs([`${this.prefix ?? ""} error log`, e]);
      }
    }
    getTime() {
      return function (e, t) {
        let r = e.getFullYear();
        let n = `0${e.getMonth() + 1}`.slice(-2);
        let i = `0${e.getDate()}`.slice(-2);
        let a = `0${e.getHours()}`.slice(-2);
        let o = `0${e.getMinutes()}`.slice(-2);
        let s = `0${e.getSeconds()}`.slice(-2);
        let l = `00${e.getMilliseconds()}`.slice(-3);
        return `${r}/${n}/${i} ${a}:${o}:${s}-${l}`;
      }(new Date());
    }
  }("");
  let M = {
    构建时间: "2/12/2025, 2:57:03 PM",
    构建人: "songxuejiao.0130",
    publisher_email: "songxuejiao.0130@bytedance.com",
    分支: "feat-share-card",
    提交时间: "2/10/2025, 2:19:51 PM",
    提交人: "songxuejiao.0130",
    hash: "939b3dee",
    msg: "fix: update",
    release: "feat-share-card_2025/02/12_939b3dee",
    ENV_NAME: "online_test",
    PUBLIC_APPLET_NAME: "locallife",
    PUBLIC_BOT_ID: "7324319148509691930",
    PUBLIC_APPLET_ID: "com.flow.locallife",
    PUBLIC_APP_CONFIG: "{}",
    CHANNEL_NAME: "com_flow_locallife",
    CHANNEL_ID: 138200910,
    DEPLOYMENT_ID: 11516,
    DEPLOY_ACCESS_KEY: "8bd80976c5c429740e3d49c46e93cf89",
    GECKO_ENV: "test"
  };
  function D(e = "", t) {
    if (e === "" || e == null) {
      return {};
    }
    if (typeof e == "object") {
      return e;
    }
    if (typeof e == "string") {
      try {
        return JSON.parse(e);
      } catch (e) {
        throw e;
      }
    }
    throw Error(`should be string or object, but get ${typeof e}`);
  }
  function B(e) {
    try {
      return D(e);
    } catch (e) {
      F.error("failed to toSafeObject", e);
    }
  }
  function L(e) {
    if (typeof e == "string") {
      return e;
    }
    try {
      return JSON.stringify(e);
    } catch (e) {
      F.error(e);
      return "";
    }
  }
  function Z(e) {
    let t;
    return function () {
      if (t == null) {
        t = e.call(this);
      }
      return t;
    };
  }
  function W() {
    return `u_${Math.random().toString(32).slice(2)}`;
  }
  let U = M.ENV_NAME === "online";
  let H = e => !!e && Number(e).toFixed(0) !== "0";
  function z(e, t = 12) {
    let r = 0;
    let n = new RegExp(/[0-9]/);
    let i = new RegExp(/[a-z\/]/);
    let a = new RegExp(/[A-Z]/);
    for (let o = 0; o < e.length; o++) {
      if ([".", "1"].includes(e[o])) {
        r += t * 0.4;
      } else if (n.test(e[o])) {
        r += t * 0.6;
      } else if (i.test(e[o])) {
        r += t * 0.5;
      } else if (a.test(e[o])) {
        r += t * 0.75;
      } else {
        r += t;
      }
    }
    return r;
  }
  function V(e, t) {
    return parseFloat(e.toFixed(t)).toString();
  }
  function J(e) {
    if (e.length === 0) {
      return null;
    } else {
      return e[e.length - 1];
    }
  }
  let X = (e = "") => e.split("/").pop() || "";
  function q({
    poi: e
  }) {
    let t = function (e) {
      if (!e) {
        return "";
      }
      var t = e.split(";");
      return t[t.length - 1];
    }(e.service_type);
    return E.jsxs("div", {
      className: "score-info",
      children: [E.jsx(A, {
        score: e.score,
        showText: false,
        mini: true
      }), E.jsx("div", {
        className: "text ml8",
        children: t
      })]
    });
  }
  function G({
    poi: e
  }) {
    let t = reactCoreLibraryReexport.useRef(null);
    let {
      adname: r,
      biz_zone_name: n = "",
      cost: i,
      distance: a = ""
    } = e;
    let [o, s] = reactCoreLibraryReexport.useState(a);
    let l = H(i) ? `\xa5${Number(i).toFixed(0)}/\u{4EBA}` : "";
    let c = X(n);
    reactCoreLibraryReexport.useEffect(() => {
      if (!t.current) {
        return;
      }
      let {
        width: e
      } = t.current.getBoundingClientRect();
      let n = c ? z(c, 12) + 8 : 0;
      let i = l ? z(l, 12) + 8 : 0;
      let o = z(a, 12);
      let d = r && !c ? z(r, 12) + 8 : 0;
      if (n + d + i + o > e) {
        let t = function (e) {
          let t = e.match(/\d+(\.\d+)?/g);
          if (t && t.length > 0) {
            let r = t[t.length - 1];
            return e.lastIndexOf(r);
          }
          return -1;
        }(a);
        let r = Math.ceil(Math.floor(o - (e - n - i - d)) / 12) + 2;
        s(`${a.slice(0, t - r)}...${a.slice(t)}`);
      }
    }, [t.current, c, r, l, a]);
    return E.jsxs("div", {
      className: "address-info",
      ref: t,
      children: [E.jsxs("div", {
        className: "info-container",
        children: [c ? E.jsx("div", {
          className: "text max-width mr8 one-ellipsis",
          children: c
        }) : null, r && !c ? E.jsx("div", {
          className: "text max-width mr8 one-ellipsis",
          children: r
        }) : null, l ? E.jsx("div", {
          className: "text",
          children: l
        }) : null]
      }), E.jsx("div", {
        className: "poi-distance text",
        children: o
      })]
    });
  }
  function Q(e) {
    let {
      poi: t
    } = e;
    return E.jsxs("div", {
      className: "poi-container",
      children: [E.jsx("div", {
        className: "poi-name",
        children: t.name
      }), E.jsx(q, {
        poi: t
      }), E.jsx(G, {
        poi: t
      }), t.rank && E.jsxs("div", {
        className: "poi-item-rank one-ellipsis",
        children: [E.jsx("img", {
          className: "poi-rank__icon",
          src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/lmpsshjvseh7dvsm/ljhwZthlaukjlkulzlp/icon-rank-badge.png"
        }), E.jsx("text", {
          className: "one-ellipsis",
          children: t.rank
        })]
      })]
    });
  }
  function K(e) {
    let {
      imageList: t,
      imageListHQ: r
    } = e;
    return E.jsxs("div", {
      className: "image-box",
      children: [E.jsx("div", {
        className: "image-list-container",
        children: t == null ? undefined : t.map((e, t) => E.jsx("img", {
          src: e,
          className: "image-item"
        }, t))
      }), (r == null ? undefined : r.length) > 3 && E.jsx("div", {
        className: "rest-count",
        children: E.jsxs("span", {
          children: ["+", (r == null ? undefined : r.length) - (t == null ? undefined : t.length)]
        })
      })]
    });
  }
  let Y = {};
  let ee = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='80'%20height='80'%20fill='%23F6F6F6'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33%2029.5C31.067%2029.5%2029.5%2031.067%2029.5%2033V43.9647V47C29.5%2048.933%2031.067%2050.5%2033%2050.5H47C48.933%2050.5%2050.5%2048.933%2050.5%2047V40.1613V33C50.5%2031.067%2048.933%2029.5%2047%2029.5H33ZM48.1667%2040V33C48.1667%2032.3557%2047.6443%2031.8333%2047%2031.8333H33C32.3557%2031.8333%2031.8333%2032.3557%2031.8333%2033V43.5498C32.2164%2043.5169%2032.6057%2043.5%2033%2043.5C34.5595%2043.5%2036.0397%2043.7644%2037.3703%2044.2388C39.9381%2041.6498%2043.8212%2040%2048.1667%2040ZM38.8333%2036.5C38.8333%2037.7887%2037.7887%2038.8333%2036.5%2038.8333C35.2113%2038.8333%2034.1667%2037.7887%2034.1667%2036.5C34.1667%2035.2113%2035.2113%2034.1667%2036.5%2034.1667C37.7887%2034.1667%2038.8333%2035.2113%2038.8333%2036.5Z'%20fill='%23E8E8E8'/%3e%3c/svg%3e";
  function et(e) {
    let {
      src: t,
      failSrc: r = ee,
      loadingRender: n,
      hasBorder: i,
      style: a,
      className: o,
      onClick: s
    } = e;
    let l = reactCoreLibraryReexport.useRef(null);
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let {
      src: u,
      isLoading: p,
      error: f
    } = function ({
      src: e,
      isLoaded: t
    }) {
      let [r, n] = reactCoreLibraryReexport.useState(true);
      let [i, a] = reactCoreLibraryReexport.useState(null);
      let [o, s] = reactCoreLibraryReexport.useState();
      reactCoreLibraryReexport.useEffect(() => {
        if (t) {
          Y[e] ||= new Promise((t, r) => {
            let n = new Image();
            n.onload = () => t();
            n.onerror = r;
            n.src = e;
          });
          Y[e].then(() => {
            n(false);
            s(e);
          }).catch(e => {
            n(false);
            a(e);
          });
        }
      }, [e, t]);
      return {
        isLoading: r,
        src: o,
        error: i
      };
    }({
      src: t,
      isLoaded: c
    });
    reactCoreLibraryReexport.useEffect(() => {
      d(false);
      let e = new IntersectionObserver(t => {
        t.forEach(t => {
          if (t.isIntersecting) {
            d(true);
            e.disconnect();
          }
        });
      });
      if (l.current) {
        e.observe(l.current);
      }
      return () => {
        e.disconnect();
      };
    }, []);
    return E.jsxs("div", {
      ref: l,
      className: `img_container ${o} ${i ? "img_border" : ""}`,
      style: a,
      onClick: s,
      children: [(p || !c) && E.jsx("div", {
        className: "img_loading"
      }), !p && !f && E.jsx("img", {
        src: u,
        draggable: "false"
      }), !p && f && E.jsx("img", {
        src: r,
        draggable: "false"
      })]
    });
  }
  let er = {
    leftBottom: "left-bottom",
    leftTop: "left-top",
    bottom: "bottom"
  };
  let en = ({
    src: e,
    failSrc: t,
    tagText: r,
    tagPosition: n = "leftBottom",
    tagBorderRadius: i = 8,
    tagMaxWidth: a = 72,
    loadingRender: o,
    hasBorder: s,
    style: l,
    className: c,
    isInDoubaoRanking: d
  }) => {
    let h = er[n] ?? n;
    return E.jsxs("div", {
      className: $("img-with-tag", c),
      children: [E.jsx("div", {
        className: "img-with-tag-wrapper",
        children: E.jsx(et, {
          src: e || ee,
          failSrc: t || ee,
          loadingRender: o,
          hasBorder: s,
          style: l,
          className: c
        })
      }), r && E.jsx("div", {
        className: $("tag", h),
        style: {
          borderRadius: `${i}px`,
          maxWidth: `${a}px`
        },
        children: r
      }), d && E.jsx("img", {
        src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/0310eh7vhpqlbenuvz/ranking_icon.png",
        draggable: "false",
        className: "ranking-icon"
      })]
    });
  };
  let ei = ({
    title: e,
    imageProps: t,
    layout: r = "horizontal",
    className: n,
    onClick: i,
    lineClamp: a = 1,
    style: o,
    children: s
  }) => {
    let {
      style: l
    } = t;
    let c = k(t, ["style"]);
    return E.jsxs("div", {
      className: $("list-item-base", r === "horizontal" ? "list-item-horizontal" : "list-item-vertical", n),
      onClick: i,
      style: o,
      children: [E.jsx("div", {
        className: "list-item-base-avatar",
        style: l,
        children: E.jsx(en, x(w({}, c), {
          style: {
            borderRadius: "8px"
          },
          hasBorder: r === "horizontal"
        }))
      }), E.jsxs("div", {
        className: "list-item-base-info",
        children: [E.jsx("div", {
          style: {
            WebkitLineClamp: a
          },
          className: "list-item-base-title",
          children: e
        }), E.jsx("div", {
          className: "list-item-base-content",
          children: s
        })]
      })]
    });
  };
  var ea = typeof global == "object" && global && global.Object === Object && global;
  var eo = typeof self == "object" && self && self.Object === Object && self;
  var es = ea || eo || Function("return this")();
  var el = es.Symbol;
  var ec = Object.prototype;
  var ed = ec.hasOwnProperty;
  var eu = ec.toString;
  var eh = el ? el.toStringTag : undefined;
  var ep = Object.prototype.toString;
  var ef = el ? el.toStringTag : undefined;
  function em(e) {
    if (e == null) {
      if (e === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else if (ef && ef in Object(e)) {
      return function (e) {
        var t = ed.call(e, eh);
        var r = e[eh];
        try {
          e[eh] = undefined;
          var n = true;
        } catch (e) {}
        var i = eu.call(e);
        if (n) {
          if (t) {
            e[eh] = r;
          } else {
            delete e[eh];
          }
        }
        return i;
      }(e);
    } else {
      return ep.call(e);
    }
  }
  function eg(e) {
    return typeof e == "symbol" || e != null && typeof e == "object" && em(e) == "[object Symbol]";
  }
  var ev = Array.isArray;
  var e_ = el ? el.prototype : undefined;
  var ey = e_ ? e_.toString : undefined;
  function eb(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var ew = es["__core-js_shared__"];
  var ex = (nj = /[^.]+$/.exec(ew && ew.keys && ew.keys.IE_PROTO || "")) ? "Symbol(src)_1." + nj : "";
  var ek = Function.prototype.toString;
  var eC = /^\[object .+?Constructor\]$/;
  var ej = Object.prototype;
  var eS = Function.prototype.toString;
  var eE = ej.hasOwnProperty;
  var eR = RegExp("^" + eS.call(eE).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function eN(e, t) {
    var r = e == null ? undefined : e[t];
    if (eb(r) && (!ex || !(ex in r)) && (!function (e) {
      if (!eb(e)) {
        return false;
      }
      var t = em(e);
      return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
    }(r) ? eC : eR).test(function (e) {
      if (e != null) {
        try {
          return ek.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }(r))) {
      return r;
    } else {
      return undefined;
    }
  }
  var eT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var eP = /^\w*$/;
  var eI = eN(Object, "create");
  var e$ = Object.prototype.hasOwnProperty;
  var eA = Object.prototype.hasOwnProperty;
  function eO(e) {
    var t = -1;
    var r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function eF(e, t) {
    var r;
    var n = e.length;
    while (n--) {
      if ((r = e[n][0]) === t || r != r && t != t) {
        return n;
      }
    }
    return -1;
  }
  eO.prototype.clear = function () {
    this.__data__ = eI ? eI(null) : {};
    this.size = 0;
  };
  eO.prototype.delete = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    this.size -= +!!t;
    return t;
  };
  eO.prototype.get = function (e) {
    var t = this.__data__;
    if (eI) {
      var r = t[e];
      if (r === "__lodash_hash_undefined__") {
        return undefined;
      } else {
        return r;
      }
    }
    if (e$.call(t, e)) {
      return t[e];
    } else {
      return undefined;
    }
  };
  eO.prototype.has = function (e) {
    var t = this.__data__;
    if (eI) {
      return t[e] !== undefined;
    } else {
      return eA.call(t, e);
    }
  };
  eO.prototype.set = function (e, t) {
    var r = this.__data__;
    this.size += +!this.has(e);
    r[e] = eI && t === undefined ? "__lodash_hash_undefined__" : t;
    return this;
  };
  var eM = Array.prototype.splice;
  function eD(e) {
    var t = -1;
    var r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  eD.prototype.clear = function () {
    this.__data__ = [];
    this.size = 0;
  };
  eD.prototype.delete = function (e) {
    var t = this.__data__;
    var r = eF(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : eM.call(t, r, 1), --this.size, true);
  };
  eD.prototype.get = function (e) {
    var t = this.__data__;
    var r = eF(t, e);
    if (r < 0) {
      return undefined;
    } else {
      return t[r][1];
    }
  };
  eD.prototype.has = function (e) {
    return eF(this.__data__, e) > -1;
  };
  eD.prototype.set = function (e, t) {
    var r = this.__data__;
    var n = eF(r, e);
    if (n < 0) {
      ++this.size;
      r.push([e, t]);
    } else {
      r[n][1] = t;
    }
    return this;
  };
  var eB = eN(es, "Map");
  function eL(e, t) {
    var r;
    var n = e.__data__;
    if ((r = typeof t) == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null) {
      return n[typeof t == "string" ? "string" : "hash"];
    } else {
      return n.map;
    }
  }
  function eZ(e) {
    var t = -1;
    var r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function eW(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") {
      throw TypeError("Expected a function");
    }
    function r() {
      var n = arguments;
      var i = t ? t.apply(this, n) : n[0];
      var a = r.cache;
      if (a.has(i)) {
        return a.get(i);
      }
      var o = e.apply(this, n);
      r.cache = a.set(i, o) || a;
      return o;
    }
    r.cache = new (eW.Cache || eZ)();
    return r;
  }
  eZ.prototype.clear = function () {
    this.size = 0;
    this.__data__ = {
      hash: new eO(),
      map: new (eB || eD)(),
      string: new eO()
    };
  };
  eZ.prototype.delete = function (e) {
    var t = eL(this, e).delete(e);
    this.size -= +!!t;
    return t;
  };
  eZ.prototype.get = function (e) {
    return eL(this, e).get(e);
  };
  eZ.prototype.has = function (e) {
    return eL(this, e).has(e);
  };
  eZ.prototype.set = function (e, t) {
    var r = eL(this, e);
    var n = r.size;
    r.set(e, t);
    this.size += +(r.size != n);
    return this;
  };
  eW.Cache = eZ;
  var eU = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var eH = /\\(\\)?/g;
  nE = (nS = eW(function (e) {
    var t = [];
    if (e.charCodeAt(0) === 46) {
      t.push("");
    }
    e.replace(eU, function (e, r, n, i) {
      t.push(n ? i.replace(eH, "$1") : r || e);
    });
    return t;
  }, function (e) {
    if (nE.size === 500) {
      nE.clear();
    }
    return e;
  })).cache;
  var ez = nS;
  function eV(e, t, r) {
    var n = e == null ? undefined : function (e, t) {
      r = t;
      n = e;
      t = ev(r) ? r : !function (e, t) {
        if (ev(e)) {
          return false;
        }
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || !!eg(e) || eP.test(e) || !eT.test(e) || t != null && e in Object(t);
      }(r, n) ? ez(r == null ? "" : function e(t) {
        if (typeof t == "string") {
          return t;
        }
        if (ev(t)) {
          return function (e, t) {
            var r = -1;
            var n = e == null ? 0 : e.length;
            var i = Array(n);
            while (++r < n) {
              i[r] = t(e[r], r, e);
            }
            return i;
          }(t, e) + "";
        }
        if (eg(t)) {
          if (ey) {
            return ey.call(t);
          } else {
            return "";
          }
        }
        var r = t + "";
        if (r == "0" && 1 / t == -Infinity) {
          return "-0";
        } else {
          return r;
        }
      }(r)) : [r];
      var r;
      var n;
      var i = 0;
      var a = t.length;
      while (e != null && i < a) {
        e = e[function (e) {
          if (typeof e == "string" || eg(e)) {
            return e;
          }
          var t = e + "";
          if (t == "0" && 1 / e == -Infinity) {
            return "-0";
          } else {
            return t;
          }
        }(t[i++])];
      }
      if (i && i == a) {
        return e;
      } else {
        return undefined;
      }
    }(e, t);
    if (n === undefined) {
      return r;
    } else {
      return n;
    }
  }
  function eJ({
    poi: e
  }) {
    var t;
    let {
      highlight_dish: r,
      rank: n,
      special_tags: i,
      impression_tags: a
    } = e;
    return E.jsxs("div", {
      children: [E.jsxs("div", {
        className: "poi-item-tag-container",
        children: [r && E.jsx("div", {
          className: "poi-item-tag poi-special-tag poi-rec-dish",
          children: E.jsxs("span", {
            className: "ellipsis",
            children: ["网友推荐“", r]
          })
        }), n && E.jsxs("div", {
          className: "poi-item-tag poi-item-rank",
          children: [E.jsx("img", {
            className: "poi-item-rank__icon",
            src: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20fill='url(%23paint0_linear_10325_1334)'%20/%3e%3cpath%20d='M15.1742%203.8743L13.6968%206.8536C12.4453%205.64969%2010.3266%205.52262%2010.3266%205.52262L11.3172%203.57333C11.336%203.49376%2011.3809%203.42277%2011.4448%203.37172C11.5086%203.32066%2011.5877%203.29248%2011.6695%203.29167H14.8799C15.0843%203.29167%2015.25%203.45739%2015.25%203.6625C15.2484%203.73921%2015.2224%203.81341%2015.1757%203.8743H15.1742ZM15.2173%2011.4671C15.2169%2012.1485%2015.0823%2012.8231%2014.8212%2013.4525C14.5601%2014.0819%2014.1776%2014.6536%2013.6955%2015.1352C13.2134%2015.6167%2012.6412%2015.9986%2012.0115%2016.259C11.3818%2016.5194%2010.707%2016.6532%2010.0256%2016.6528C8.64964%2016.6534%207.32976%2016.1074%206.35629%2015.1349C5.38283%2014.1624%204.83551%2012.8431%204.83472%2011.4671C4.83551%2010.0911%205.38283%208.77176%206.35629%207.79927C7.32976%206.82678%208.64964%206.28078%2010.0256%206.28137C10.707%206.28098%2011.3818%206.41481%2012.0115%206.6752C12.6412%206.9356%2013.2134%207.31747%2013.6955%207.799C14.1776%208.28054%2014.5601%208.85232%2014.8212%209.48169C15.0823%2010.1111%2015.2169%2010.7857%2015.2173%2011.4671ZM12.458%2010.2736L11.0423%2010.0685L10.4106%208.78803C10.1936%208.34957%209.85323%208.35849%209.64143%208.78803L9.00901%2010.0685L7.59404%2010.2743C7.11025%2010.3442%207.0129%2010.6697%207.35624%2011.0049L8.3803%2012.0007L8.13878%2013.4082C8.05554%2013.8905%208.33571%2014.083%208.76079%2013.86L10.0256%2013.1957L11.2912%2013.86C11.7245%2014.0874%2011.9943%2013.8809%2011.9132%2013.4082L11.6717%2012.0014L12.695%2011.0049C13.0458%2010.663%2012.9329%2010.3434%2012.4572%2010.2743L12.458%2010.2736ZM4.82506%203.8743C4.7782%203.81346%204.75191%203.73928%204.75%203.6625C4.75%203.45739%204.91572%203.29167%205.12083%203.29167H8.32977C8.50292%203.29167%208.64189%203.41281%208.68276%203.57333L9.6719%205.52262C9.6719%205.52262%207.55391%205.64895%206.3017%206.85286L4.82506%203.87505V3.8743Z'%20fill='url(%23paint1_linear_10325_1334)'%20/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_10325_1334'%20x1='0'%20y1='0'%20x2='18.5'%20y2='19.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDEC9'%20/%3e%3cstop%20offset='1'%20stop-color='%23FED3A6'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_10325_1334'%20x1='10'%20y1='3.29167'%20x2='10'%20y2='16.6528'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FA9454'%20/%3e%3cstop%20offset='1'%20stop-color='%23D9703A'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          }), E.jsx("span", {
            className: "oneline_ellipsis",
            children: n
          })]
        }), i == null ? undefined : i.slice(0, 3).map(e => E.jsx("span", {
          className: "poi-item-tag poi-special-tag",
          children: e.name
        }, e.id))]
      }), a && a.length > 0 && E.jsxs("div", {
        className: "twoline_ellipsis poi-impression-tag",
        children: ["“", (t = a[0]) == null ? undefined : t.name, "”"]
      })]
    });
  }
  function eX({
    discount_num: e,
    origin_price: t,
    market_price: r,
    showDiscount: n,
    mask_price: i
  }) {
    let a = r ? `${V(r / 100, 2)}` : "";
    let o = t ? `\u{FFE5}${V(Number(t) / 100, 2)}` : "";
    let s = e ? `${e}\u{6298}` : "";
    let l = !!i;
    let c = H(r) || l;
    let d = !!e && String(e) !== "10" && !l;
    let u = i || a;
    if (c) {
      return E.jsxs("div", {
        className: "product-price",
        children: [u && E.jsxs("div", {
          className: "market-price",
          children: [E.jsx("div", {
            className: "unit",
            children: "￥"
          }), E.jsx("div", {
            className: "price",
            children: u
          })]
        }), d && E.jsxs(E.Fragment, {
          children: [t && E.jsx("div", {
            className: "original-price",
            children: o
          }), n && E.jsx("div", {
            className: "discount",
            children: s
          })]
        })]
      });
    } else {
      return E.jsx("div", {});
    }
  }
  function eq({
    poi: e
  }) {
    let {
      products: t = []
    } = e;
    if (!t || t.length < 1) {
      return null;
    } else {
      return E.jsx("div", {
        className: "poi-products",
        children: t.slice(0, 2).map(e => {
          let t = w({}, e);
          (function (e, t) {
            var r = e.simple_title || e.name;
            e.dishname = "";
            e.name_chunk0 = r;
            e.name_chunk1 = "";
            e.name_chunk2 = "";
            if (e.name_highlight) {
              var n = e.name_highlight;
              var i = r.indexOf(n);
              if (i > -1) {
                e.name_chunk0 = r.slice(0, i);
                e.name_chunk1 = r.slice(i, i + n.length);
                e.name_chunk2 = r.slice(i + n.length);
              }
            } else if (e.item_highlight && e.item_highlight.length > 0) {
              e.dishname = e.item_highlight[0];
            }
          })(t);
          let r = e || {};
          return E.jsxs("div", {
            className: "poi-product",
            children: [E.jsx("div", {
              className: "prod-icon",
              children: "团"
            }), E.jsx(eX, w({}, r)), E.jsxs("div", {
              className: "prod-name",
              children: [t.dishname ? E.jsxs("div", {
                className: "prod-name-chunk prod-name-chunk--prefix prod-name--highlight",
                children: [E.jsx("span", {
                  children: "["
                }), E.jsxs("span", {
                  children: ["含", t.dishname]
                }), E.jsx("span", {
                  children: "]"
                })]
              }) : null, t.name_chunk0 ? E.jsx("span", {
                className: $("prod-name-chunk", t.name_chunk1 || t.name_chunk2 ? "" : "prod-name-chunk--overflow"),
                children: t.name_chunk0
              }) : null, t.name_chunk1 ? E.jsx("span", {
                className: "prod-name-chunk prod-name--highlight",
                children: t.name_chunk1
              }) : null, t.name_chunk2 ? E.jsx("span", {
                className: "prod-name-chunk prod-name-chunk--overflow",
                children: t.name_chunk2
              }) : null]
            })]
          }, e == null ? undefined : e.spu_id);
        })
      });
    }
  }
  let eG = e => {
    let {
      poi: t
    } = e;
    return E.jsxs(E.Fragment, {
      children: [E.jsx(q, {
        poi: t
      }), E.jsx(G, {
        poi: t
      }), E.jsx(eJ, {
        poi: t
      }), E.jsx(eq, {
        poi: t
      })]
    });
  };
  let eQ = ({
    data: e,
    imgOptions: t = {},
    onClick: r,
    style: n,
    index: i
  }) => {
    let o = reactCoreLibraryReexport.useMemo(() => {
      var r;
      return x(w({
        src: eV(e, "photos[0].compressed_url", "") || eV(e, "photos[0].url", "")
      }, t), {
        tagText: ((r = t.tagText) == null ? undefined : r.call(t, e)) ?? "",
        tagPosition: "bottom",
        isInDoubaoRanking: eV(e, "head_mask.doubao_selection", false)
      });
    }, [t, e]);
    let s = reactCoreLibraryReexport.useCallback(() => {
      if (r != null) {
        r(e, i);
      }
    }, [r, e, i]);
    return E.jsxs("div", {
      className: "poi-item",
      children: [E.jsx(ei, {
        onClick: s,
        className: "poi-list-item",
        title: e.name ?? "",
        imageProps: o,
        style: n,
        children: E.jsx(eG, {
          poi: e
        })
      }), E.jsx("div", {
        className: "half_1_line_px dividing_line"
      })]
    });
  };
  function eK({
    pois: e,
    additional_pois: t,
    hasMore: r
  }) {
    return E.jsxs("div", {
      className: "poi-card",
      children: [E.jsx("div", {
        className: "poi-default",
        children: e == null ? undefined : e.map((e, t) => E.jsx(eQ, {
          data: e,
          index: t
        }, e.id))
      }), (t == null ? undefined : t.length) > 0 && E.jsxs("div", {
        className: `dividing_line ${(e == null ? undefined : e.length) > 0 ? "mt12" : ""}`,
        children: [E.jsx("div", {
          className: "dividing_line_item"
        }), E.jsx("text", {
          className: "dividing_line_text",
          children: "你可能会喜欢"
        }), E.jsx("div", {
          className: "dividing_line_item"
        })]
      }), E.jsx("div", {
        className: "poi-additional",
        children: t == null ? undefined : t.map((e, t) => E.jsx(eQ, {
          data: e,
          index: t
        }, e.id))
      }), r && E.jsx("div", {
        className: "search-more",
        children: "查看更多"
      })]
    });
  }
  function eY({
    widgetData: e
  }) {
    return E.jsx("div", {
      className: "location-perm-card location-perm__text",
      children: (e == null ? undefined : e.text) || "未授予地理位置权限，我们无法提供完整服务"
    });
  }
  (i = e0 || {}).walking = "walking";
  i.transit = "transit";
  i.driving = "driving";
  i.riding = "riding";
  var e0 = i;
  (a = e1 || {}).BUS = "BUS";
  a.WALK = "WALK";
  a.TAXI = "TAXI";
  a.SUBWAY = "SUBWAY";
  a.RAILWAY = "RAILWAY";
  a.METRO_RAIL = "METRO_RAIL";
  var e1 = a;
  let e2 = {
    driving: "驾车",
    riding: "骑行",
    walking: "步行",
    transit: "公交"
  };
  let e3 = ["driving", "transit", "riding", "walking"];
  (o = e4 || {}).amap = "amap";
  o.bmap = "bmap";
  var e4 = o;
  function e6(e = "") {
    if (e) {
      return e.split(";").filter(e => !!e).map(e => e.split(",").map(e => Number(e)));
    } else {
      return [];
    }
  }
  function e5(e) {
    var t;
    let n = e.status === 1 || e.status === "1";
    let i = ((t = e.route) == null ? undefined : t.paths) ?? [];
    return {
      error: n ? "" : e.info || `status: ${e.status}`,
      data: n ? i.map(e => ({
        distance: Number(e.distance),
        time: Number(e.duration || e.cost.duration),
        steps: e.steps.map(e => ({
          id: e.instruction,
          path: e6(e.polyline)
        }))
      })) : []
    };
  }
  let e9 = new class {
    formatResponse(e) {
      var t;
      let n = e.status === 1 || e.status === "1";
      let i = ((t = e.route) == null ? undefined : t.transits) ?? [];
      return {
        error: n ? "" : e.info || `status: ${e.status}`,
        data: n ? i.map(e => this.formatTransit(e)) : []
      };
    }
    formatTransit(e) {
      let {
        on_stop: t,
        stops: r,
        segments: n
      } = this.formatSegments(e.segments);
      return {
        distance: Number(e.distance),
        time: Number(e.cost.duration || 0) || 0,
        cost: Number(e.cost.transit_fee),
        steps: e.segments.map(e => this.parsePolyline(e)),
        walking_distance: Number(e.walking_distance),
        policies: [],
        on_stop: t,
        stops: r,
        segments: n
      };
    }
    formatSegments(e) {
      var t;
      let r = {
        segments: [],
        on_stop: "",
        stops: 0
      };
      for (let n of e) {
        if (n.walking) {
          r.segments.push({
            id: `${e1.WALK}`,
            transit_mode: e1.WALK,
            distance: Number(n.walking.distance),
            time: Number(n.walking.cost.duration)
          });
        }
        if (n.bus) {
          let e = (t = n.bus.buslines) == null ? undefined : t[0];
          if (e) {
            let t = e.type === "地铁线路" ? e1.SUBWAY : e1.BUS;
            let n = te(e.name);
            let i = {
              id: `${t}_${n}`,
              transit_mode: t,
              distance: Number(e.distance),
              time: Number(e.cost.duration),
              transit: {
                on_station: e.departure_stop,
                off_station: e.arrival_stop,
                name: n,
                via_num: Number(e.via_num),
                via_stops: e.via_stops,
                estop: tt(e.name)
              }
            };
            r.segments.push(i);
            r.on_stop ||= e.departure_stop.name;
            r.stops += Number(e.via_num) + 1;
          }
        }
        if (n.taxi) {
          r.segments.push({
            id: `${e1.TAXI}`,
            transit_mode: e1.TAXI,
            cost: Number(n.taxi.price),
            distance: Number(n.taxi.distance),
            time: Number(n.taxi.drivetime)
          });
        }
        if (n.railway) {
          let e = te(n.railway.name);
          r.segments.push({
            id: `${e1.RAILWAY}_${e}`,
            transit_mode: e1.RAILWAY,
            distance: Number(n.railway.distance),
            time: Number(n.railway.time),
            transit: {
              name: e,
              departure_stop: n.railway.departure_stop,
              arrival_stop: n.railway.arrival_stop,
              via_num: 0,
              via_stops: [],
              estop: tt(n.railway.name)
            }
          });
        }
      }
      return r;
    }
    parsePolyline(e) {
      var t;
      var n;
      var i;
      var a;
      var o;
      var s;
      var l;
      var c;
      var d;
      let u = ((t = e.walking) == null ? undefined : t.steps.reduce((e, t) => {
        var r;
        return e.concat(e6((r = t.polyline) == null ? undefined : r.polyline));
      }, [])) ?? [];
      let h = e6((a = (i = (n = e.bus) == null ? undefined : n.buslines[0]) == null ? undefined : i.polyline) == null ? undefined : a.polyline);
      let p = [];
      if ((s = (o = e.taxi) == null ? undefined : o.polyline) != null && s.polyline) {
        p = e6((l = e.taxi) == null ? undefined : l.polyline.polyline);
      } else if ((c = e.taxi) != null && c.startpoint && (d = e.taxi) != null && d.endpoint) {
        p = e6(`${e.taxi.startpoint};${e.taxi.endpoint}`);
      }
      return {
        id: W(),
        path: [...u, ...h, ...p]
      };
    }
  }();
  let e7 = {
    [e0.riding]: e5,
    [e0.walking]: e5,
    [e0.driving]: e5,
    [e0.transit]: e => e9.formatResponse(e)
  };
  function e8(e) {
    return e === e1.BUS || e === e1.SUBWAY || e === e1.METRO_RAIL;
  }
  function te(e = "") {
    if (!e) {
      return e;
    }
    let t = e.split("/");
    let r = [];
    t.forEach(e => {
      if (e[0] === "地" && e[1] === "铁") {
        e = e.slice(2);
      }
      let t = 0;
      let n = e.length - 1;
      for (; n > -1; n--) {
        let r = e[n];
        if (r === "(" || r === "（") {
          if (--t == 0) {
            n--;
            break;
          }
        } else if (r === ")" || r === "）") {
          t++;
        } else if (t === 0) {
          break;
        }
      }
      e = e.slice(0, n + 1);
      if (!r.includes(e)) {
        r.push(e);
      }
    });
    return r.join("/");
  }
  function tt(e = "") {
    if (!e) {
      return "";
    }
    let t = e.indexOf("--");
    if (t < 0) {
      return "";
    }
    let r = 0;
    let n = t + 2;
    for (let t = n; t < e.length; t++) {
      let i = e[t];
      if (i === "(" || i === "（") {
        r++;
      } else if (i === ")" || i === "）") {
        if (--r == 0) {
          return e.slice(n, t + 1);
        }
        if (r < 0) {
          return e.slice(n, t);
        }
      }
    }
    return e.slice(n);
  }
  function tr(e) {
    if (e < 60) {
      return `${e}\u{79D2}`;
    }
    if (e < 3600) {
      return `${Math.round(e / 60)}\u{5206}\u{949F}`;
    }
    let t = Math.floor(e / 3600);
    let r = Math.round(e % 3600 / 60);
    if (r === 0) {
      return `${t}\u{5C0F}\u{65F6}`;
    } else {
      return `${t}\u{5C0F}\u{65F6}${r}\u{5206}\u{949F}`;
    }
  }
  class tn {
    constructor(e, t) {
      this.data = e;
      this.source = t;
      this._steps = [];
      this._steps = function (e = []) {
        if ((e = e.filter(e => e.path.length > 0)).length < 1) {
          return e;
        }
        let [t, ...r] = e;
        let n = [t];
        let i = J(t.path);
        for (let e of r) {
          let t = e.path[0];
          if (t.join(",") !== i.join(",")) {
            n.push({
              id: W(),
              path: [i, t]
            });
          }
          n.push(e);
          i = J(e.path);
        }
        return n;
      }(e.steps);
      if (this._steps.length > 0) {
        this._start = this._steps[0].path[0];
        this._end = J(J(this._steps).path);
      }
    }
    get start() {
      return this._start;
    }
    get end() {
      return this._end;
    }
    get steps() {
      return this._steps;
    }
    get time() {
      return this.data.time;
    }
    get distance() {
      return this.data.distance;
    }
    get policyTags() {
      if ("policies" in this.data) {
        return this.data.policies.map(e => ({
          8: "时间最短",
          2: "换乘最少",
          3: "步行最短",
          5: "不乘地铁",
          7: "地铁优先"
        })[`${e}`]).filter(Boolean);
      }
    }
  }
  class ti {
    constructor(e, t, r, n = [], i) {
      this.map = e;
      this.amap = t;
      this.markers = n;
      this.mapPadding = i;
      this.mapElements = [];
      this.lines = [];
      this.lines = r.map(r => new ta(e, t, r.data, r.source));
      this.mapElements = this.lines.reduce((e, t) => e.concat(t.chunks), []);
      this.mapElements.push(...n);
    }
    getLine(e) {
      return this.lines[e];
    }
    show() {
      var e;
      for (let e of this.lines) {
        if (e) {
          e.show(false);
        }
      }
      if ((e = this.map) != null) {
        e.setFitView(this.mapElements, true, this.mapPadding);
      }
    }
    hide() {
      for (let e of this.lines) {
        if (e) {
          e.hide();
        }
      }
      for (let e of this.markers) {
        e.hide();
      }
    }
  }
  class ta extends tn {
    constructor(e, t, r, n) {
      super(r, n);
      this.map = e;
      this.amap = t;
      this.data = r;
      this.chunks = [];
      this.chunks = this.steps.map(e => new this.amap.Polyline({
        path: e.path.slice(),
        isOutline: false,
        strokeWeight: 4,
        strokeColor: "#0091ff",
        strokeOpacity: 0.8,
        lineJoin: "round"
      }));
    }
    show(e = true) {
      var t;
      this.chunks.forEach(e => e.setMap(this.map));
      if (e) {
        if ((t = this.map) != null) {
          t.setFitView(this.chunks, true);
        }
      }
      this.chunks.forEach(e => e.show());
    }
    hide() {
      this.chunks.forEach(e => {
        e.hide();
        e.setMap(null);
      });
    }
  }
  (s = to || {}).route = "route";
  s.nav = "nav";
  s.jsbApi = "jsb_api";
  s.networkApi = "network_api";
  s.syntax = "syntax";
  s.actionCommand = "action_command";
  s.ui = "ui";
  var to = s;
  function ts(e) {
    Object.defineProperty(e, "is_bizerr", {
      value: true,
      enumerable: false,
      configurable: false,
      writable: false
    });
    return e;
  }
  class tl extends Error {
    static from(e, t, r = true) {
      let n = new tl(e, t.message);
      if (r) {
        n.stack = t.stack;
      }
      return n;
    }
    static is(e) {
      if (e == null) {
        return undefined;
      } else {
        return e.is_bizerr;
      }
    }
    static withoutStack(e, t) {
      return ts({
        name: e,
        message: t
      });
    }
    constructor(e, t) {
      super(t);
      this.name = e;
      ts(this);
    }
  }
  function tc() {}
  class td {
    constructor() {
      this.resolve = tc;
      this.reject = tc;
      this.promise = new Promise((e, t) => {
        this.resolve = e;
        this.reject = t;
      });
    }
  }
  function tu() {
    return (tu = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var i in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function th(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) {
      return e;
    }
    var n;
    var i;
    var a = r.call(e);
    var o = [];
    try {
      while ((t === undefined || t-- > 0) && !(n = a.next()).done) {
        o.push(n.value);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        if (n && !n.done && (r = a.return)) {
          r.call(a);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return o;
  }
  function tp(e, t, r) {
    if (arguments.length == 2) {
      var n;
      var i = 0;
      var a = t.length;
      for (; i < a; i++) {
        if (!!n || !(i in t)) {
          n ||= Array.prototype.slice.call(t, 0, i);
          n[i] = t[i];
        }
      }
    }
    return e.concat(n || Array.prototype.slice.call(t));
  }
  var tf = ["init", "start", "config", "beforeDestroy", "provide", "beforeReport", "report", "beforeBuild", "build", "beforeSend", "send", "beforeConfig"];
  function tm() {
    return {};
  }
  function tg(e) {
    return e;
  }
  function tv(e) {
    return typeof e == "object" && e !== null;
  }
  var t_ = Object.prototype;
  function ty(e) {
    return t_.toString.call(e) === "[object Array]";
  }
  function tb(e) {
    return typeof e == "number";
  }
  function tw(e) {
    return typeof e == "string";
  }
  function tx(e, t) {
    if (!ty(e) || e.length === 0) {
      return false;
    }
    for (var r = 0; r < e.length;) {
      if (e[r] === t) {
        return true;
      }
      r++;
    }
    return false;
  }
  function tk(e, t) {
    if (!ty(e)) {
      return e;
    }
    var r = e.indexOf(t);
    if (r >= 0) {
      var n = e.slice();
      n.splice(r, 1);
      return n;
    }
    return e;
  }
  function tC(e, t, r) {
    var n;
    var i = t.split(".");
    var a = th(i);
    var o = a[0];
    var s = a.slice(1);
    while (e && s.length > 0) {
      e = e[o];
      o = (n = th(s))[0];
      s = n.slice(1);
    }
    if (e) {
      return r(e, o);
    }
  }
  function tj(e) {
    try {
      if (tw(e)) {
        return e;
      } else {
        return JSON.stringify(e);
      }
    } catch (e) {
      return "[FAILED_TO_STRINGIFY]:" + String(e);
    }
  }
  "".padStart;
  function tS() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
  }
  function tE() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
  }
  function tR(e) {
    return Math.random() < Number(e);
  }
  function tN(e, t) {
    return e < Number(t);
  }
  function tT(e) {
    return function (t) {
      var r = t;
      var n = 0;
      for (; n < e.length && r; n++) {
        try {
          r = e[n](r);
        } catch (e) {
          tS(e);
        }
      }
      return r;
    };
  }
  function tP() {
    var e = function () {
      var e = Array(16);
      var t = 0;
      var r = 0;
      for (; r < 16; r++) {
        if (!(r & 3)) {
          t = Math.random() * 4294967296;
        }
        e[r] = t >>> ((r & 3) << 3) & 255;
      }
      return e;
    }();
    e[6] = e[6] & 15 | 64;
    e[8] = e[8] & 63 | 128;
    return function (e) {
      var t = [];
      var r = 0;
      for (; r < 256; ++r) {
        t[r] = (r + 256).toString(16).substr(1);
      }
      var n = 0;
      return [t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], "-", t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]], t[e[n++]]].join("");
    }(e);
  }
  function tI(e) {
    var t;
    var r;
    var n;
    t = {};
    r = {};
    var i = n = {
      set: function (e, i) {
        t[e] = i;
        r[e] = tj(i);
        return n;
      },
      merge: function (e) {
        t = tu(tu({}, t), e);
        Object.keys(e).forEach(function (t) {
          r[t] = tj(e[t]);
        });
        return n;
      },
      delete: function (e) {
        delete t[e];
        delete r[e];
        return n;
      },
      clear: function () {
        t = {};
        r = {};
        return n;
      },
      get: function (e) {
        return r[e];
      },
      toString: function () {
        return tu({}, r);
      }
    };
    e.provide("context", i);
    e.on("report", function (e) {
      e.extra ||= {};
      e.extra.context = i.toString();
      return e;
    });
  }
  function t$() {
    return Date.now();
  }
  function tA(e) {
    if (e) {
      e.__SLARDAR_REGISTRY__ ||= {
        Slardar: {
          plugins: [],
          errors: [],
          subject: {}
        }
      };
      return e.__SLARDAR_REGISTRY__.Slardar;
    }
  }
  function tO() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var r = tA(function () {
      if (typeof window == "object" && tv(window)) {
        return window;
      }
    }());
    if (r) {
      r.errors ||= [];
      r.errors.push(e);
    }
  }
  var tF = "custom";
  function tM(e) {
    if (!!e && !!tv(e) && !!e.name && !!tw(e.name)) {
      var t = {
        name: e.name,
        type: "event"
      };
      if ("metrics" in e && tv(e.metrics)) {
        var r = e.metrics;
        var n = {};
        for (var i in r) {
          if (tb(r[i])) {
            n[i] = r[i];
          }
        }
        t.metrics = n;
      }
      if ("categories" in e && tv(e.categories)) {
        var a = e.categories;
        var o = {};
        for (var i in a) {
          o[i] = tj(a[i]);
        }
        t.categories = o;
      }
      return t;
    }
  }
  function tD(e) {
    if (!!e && !!tv(e) && !!e.content && !!tw(e.content)) {
      var t = {
        content: tj(e.content),
        type: "log",
        level: "info"
      };
      if ("level" in e) {
        t.level = e.level;
      }
      if ("extra" in e && tv(e.extra)) {
        var r = e.extra;
        var n = {};
        var i = {};
        for (var a in r) {
          if (tb(r[a])) {
            n[a] = r[a];
          } else {
            i[a] = tj(r[a]);
          }
        }
        t.metrics = n;
        t.categories = i;
      }
      return t;
    }
  }
  function tB(e, t) {
    var r = e.common || {};
    r.sample_rate = t;
    e.common = r;
    return e;
  }
  function tL(e, t, r, n, i) {
    var a;
    if (e) {
      a = i(n, t);
      return function () {
        return a;
      };
    } else {
      return function () {
        return r(t);
      };
    }
  }
  function tZ(e, t, r) {
    switch (r) {
      case "eq":
        return tx(t, e);
      case "neq":
        return !tx(t, e);
      case "gt":
        return e > t[0];
      case "gte":
        return e >= t[0];
      case "lt":
        return e < t[0];
      case "lte":
        return e <= t[0];
      case "regex":
        return !!e.match(new RegExp(t.join("|")));
      case "not_regex":
        return !e.match(new RegExp(t.join("|")));
      default:
        return false;
    }
  }
  function tW(e, t, r, n) {
    var i = tC(e, t, function (e, t) {
      return e[t];
    });
    if (i === undefined) {
      return false;
    }
    var a = typeof i == "boolean" ? "bool" : tb(i) ? "number" : "string";
    return tZ(i, n.map(function (e) {
      switch (a) {
        case "number":
          return Number(e);
        case "boolean":
          return e === "1";
        default:
          return String(e);
      }
    }), r);
  }
  function tU(e, t) {
    try {
      if (t.type === "rule") {
        return tW(e, t.field, t.op, t.values);
      } else if (t.type === "and") {
        return t.children.every(function (t) {
          return tU(e, t);
        });
      } else {
        return t.children.some(function (t) {
          return tU(e, t);
        });
      }
    } catch (e) {
      tO(e);
      return false;
    }
  }
  function tH(e, t, r, n, i, a) {
    var o = {};
    Object.keys(e).forEach(function (s) {
      var l = e[s];
      var c = l.enable;
      var d = l.sample_rate;
      var u = l.conditional_sample_rules;
      if (c) {
        o[s] = {
          enable: c,
          sample_rate: d,
          effectiveSampleRate: d * r,
          hit: tL(t, d, n, i, a)
        };
        if (u) {
          o[s].conditional_hit_rules = u.map(function (e) {
            var o = e.sample_rate;
            var s = e.filter;
            return {
              sample_rate: o,
              hit: tL(t, o, n, i, a),
              effectiveSampleRate: o * r,
              filter: s
            };
          });
        }
      } else {
        o[s] = {
          enable: c,
          hit: function () {
            return false;
          },
          sample_rate: 0,
          effectiveSampleRate: 0
        };
      }
    });
    return o;
  }
  function tz(e, t, r, n, i) {
    if (!t) {
      return tg;
    }
    var a = t.sample_rate;
    var o = t.include_users;
    var s = t.sample_granularity;
    var l = t.rules;
    var c = t.r;
    var d = c === undefined ? Math.random() : c;
    if (tx(o, e)) {
      return function (e) {
        return tB(e, 1);
      };
    }
    var u = s === "session";
    var h = tL(u, a, r, d, n);
    var p = tH(l, u, a, r, d, n);
    return function (e) {
      if (!h()) {
        if (u) {
          i[0]();
        }
        return false;
      }
      if (!(e.ev_type in p)) {
        return tB(e, a);
      }
      if (!p[e.ev_type].enable) {
        if (u) {
          i[1](e.ev_type);
        }
        return false;
      }
      if ((t = e.common) !== null && t !== undefined && t.sample_rate) {
        return e;
      }
      var t;
      var r = p[e.ev_type];
      var n = r.conditional_hit_rules;
      if (n) {
        for (var o = 0; o < n.length; o++) {
          if (tU(e, n[o].filter)) {
            return !!n[o].hit() && tB(e, n[o].effectiveSampleRate);
          }
        }
      }
      if (r.hit()) {
        return tB(e, r.effectiveSampleRate);
      } else {
        if ((!n || !n.length) && u) {
          i[1](e.ev_type);
        }
        return false;
      }
    };
  }
  var tV = {
    build: function (e) {
      return {
        ev_type: e.ev_type,
        payload: e.payload,
        common: tu(tu({}, e.extra || {}), e.overrides || {})
      };
    }
  };
  function tJ(e) {
    var t;
    var r = e;
    var n = {};
    var i = tm;
    var a = tm;
    return {
      getConfig: function () {
        return r;
      },
      setConfig: function (o) {
        var s;
        n = tu(tu({}, n), o || {});
        (s = tu(tu({}, e), n)).sample = function (e, t) {
          if (!e || !t) {
            return e || t;
          }
          var r = tu(tu({}, e), t);
          r.include_users = tp(tp([], th(e.include_users || []), false), th(t.include_users || []), false);
          r.rules = tp(tp([], th(Object.keys(e.rules || {})), false), th(Object.keys(t.rules || {})), false).reduce(function (r, n) {
            if (!(n in r)) {
              if (n in (e.rules || {}) && n in (t.rules || {})) {
                r[n] = tu(tu({}, e.rules[n]), t.rules[n]);
                r[n].conditional_sample_rules = tp(tp([], th(e.rules[n].conditional_sample_rules || []), false), th(t.rules[n].conditional_sample_rules || []), false);
              } else {
                r[n] = e.rules?.[n] || t.rules?.[n];
              }
            }
            return r;
          }, {});
          return r;
        }(e.sample, n.sample);
        r = s;
        a();
        if (!t) {
          t = o;
          i();
        }
        return r;
      },
      onChange: function (e) {
        a = e;
      },
      onReady: function (e) {
        i = e;
        if (t) {
          i();
        }
      }
    };
  }
  var tX = {
    sample_rate: 1,
    include_users: [],
    sample_granularity: "session",
    rules: {}
  };
  function tq(e) {
    return tu({}, e);
  }
  function tG(e) {
    return tv(e) && "bid" in e && "transport" in e;
  }
  function tQ(e) {
    return tu({}, e);
  }
  function tK(e, t) {
    var r = {
      url: "",
      protocol: "",
      domain: "",
      path: "",
      query: "",
      timestamp: Date.now(),
      sdk_version: t.version || "1.4.9",
      sdk_name: t.name || "SDK_BASE"
    };
    return tu(tu({}, e), {
      extra: tu(tu({}, r), e.extra || {})
    });
  }
  function tY(e) {
    e.on("report", function (t) {
      return tK(t, e.config());
    });
  }
  function t0(e, t) {
    var r = {
      bid: t.bid,
      pid: t.pid,
      view_id: t.viewId,
      user_id: t.userId,
      device_id: t.deviceId,
      session_id: t.sessionId,
      release: t.release,
      env: t.env
    };
    return tu(tu({}, e), {
      extra: tu(tu({}, r), e.extra || {})
    });
  }
  function t1(e) {
    e.on("beforeBuild", function (t) {
      return t0(t, e.config());
    });
  }
  function t2(e) {
    return {
      bid: "",
      pid: "",
      viewId: "__" + Date.now(),
      userId: tP(),
      deviceId: tP(),
      sessionId: tP(),
      domain: "mon.zijieapi.com",
      release: "",
      env: "production",
      sample: tX,
      plugins: {},
      transport: {
        get: tm,
        post: tm
      }
    };
  }
  if (nR === undefined) {
    nR = {};
  }
  (function (e) {
    e.on("start", function () {
      var t = e.config();
      var r = tz(t.userId, t.sample, tR, tN, [function () {
        e.destroy();
      }, function (t) {
        e.destroyAgent.removeByEvType(t);
      }]);
      e.on("build", r);
    });
  })((ny = (n_ = (nv = (ng = nR) === undefined ? {} : ng).createSender) === undefined ? function (e) {
    var t;
    var r;
    return function (e) {
      var t;
      var r = e.transport;
      var n = e.endpoint;
      var i = e.size;
      var a = i === undefined ? 10 : i;
      var o = e.wait;
      var s = o === undefined ? 1000 : o;
      var l = [];
      var c = 0;
      function d() {
        if (l.length) {
          var e = this.getBatchData();
          r.post({
            url: n,
            data: e,
            fail: function (r) {
              if (t) {
                t(r, e);
              }
            }
          });
          l = [];
        }
      }
      return {
        getSize: function () {
          return a;
        },
        getWait: function () {
          return s;
        },
        setSize: function (e) {
          a = e;
        },
        setWait: function (e) {
          s = e;
        },
        getEndpoint: function () {
          return n;
        },
        setEndpoint: function (e) {
          n = e;
        },
        send: function (e) {
          l.push(e);
          if (l.length >= a) {
            d.call(this);
          }
          clearTimeout(c);
          c = setTimeout(d.bind(this), s);
        },
        flush: function () {
          clearTimeout(c);
          d.call(this);
        },
        getBatchData: function () {
          if (l.length) {
            return JSON.stringify({
              ev_type: "batch",
              list: l
            });
          } else {
            return "";
          }
        },
        clear: function () {
          clearTimeout(c);
          l = [];
        },
        fail: function (e) {
          t = e;
        }
      };
    }({
      size: 20,
      endpoint: (t = e.domain, r === undefined && (r = "/monitor_browser/collect/batch/"), (t && t.indexOf("//") >= 0 ? "" : "https://") + t + r),
      transport: e.transport
    });
  } : n_, nb = nv.builder, tI(nx = function (e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = e.builder;
    var l = e.createSender;
    var c = e.createDefaultConfig;
    var d = e.createConfigManager;
    var u = e.userConfigNormalizer;
    var h = e.initConfigNormalizer;
    var p = e.validateInitConfig;
    var f = {};
    tf.forEach(function (e) {
      return f[e] = [];
    });
    var m = false;
    var g = false;
    var v = false;
    var _ = [];
    var y = [];
    t = false;
    r = {};
    n = function (e) {
      if (e.length) {
        e.forEach(function (e) {
          try {
            e();
          } catch (e) {}
        });
      }
      e.length = 0;
    };
    var b = {
      set: function (e, i, a) {
        if (r[e]) {
          r[e].push([i, a]);
        } else {
          r[e] = [[i, a]];
        }
        if (t) {
          n(a);
        }
      },
      has: function (e) {
        return !!r[e];
      },
      remove: i = function (e) {
        if (r[e]) {
          r[e].forEach(function (e) {
            n(e[1]);
          });
        }
        r[e] = undefined;
      },
      removeByEvType: function (e) {
        Object.keys(r).forEach(function (t) {
          if (r[t]) {
            r[t].forEach(function (t) {
              if (t[0] === e) {
                n(t[1]);
              }
            });
          }
        });
      },
      clear: function () {
        t = true;
        Object.keys(r).forEach(function (e) {
          i(e);
        });
      }
    };
    var w = {
      getBuilder: function () {
        return s;
      },
      getSender: function () {
        return a;
      },
      getPreStartQueue: function () {
        return _;
      },
      init: function (e) {
        if (m) {
          tE("already inited");
          return;
        }
        if (e && tv(e) && p(e)) {
          var t = c(e);
          if (!t) {
            throw Error("defaultConfig missing");
          }
          var r = h(e);
          (o = d(t)).setConfig(r);
          o.onChange(function () {
            x("config");
          });
          if (!(a = l(o.getConfig()))) {
            throw Error("sender missing");
          }
          m = true;
          x("init", true);
        } else {
          throw Error("invalid InitConfig, init failed");
        }
      },
      set: function (e) {
        if (m && e && tv(e)) {
          x("beforeConfig", false, e);
          if (o != null) {
            o.setConfig(e);
          }
        }
      },
      config: function (e) {
        if (m) {
          if (e && tv(e)) {
            x("beforeConfig", false, e);
            if (o != null) {
              o.setConfig(u(e));
            }
          }
          if (o == null) {
            return undefined;
          } else {
            return o.getConfig();
          }
        }
      },
      provide: function (e, t) {
        if (tx(y, e)) {
          tE("cannot provide " + e + ", reserved");
          return;
        }
        w[e] = t;
        x("provide", false, e);
      },
      start: function () {
        var e = this;
        if (m) {
          if (!g && o != null) {
            o.onReady(function () {
              g = true;
              x("start", true);
              _.forEach(function (t) {
                return e.build(t);
              });
              _.length = 0;
            });
          }
        }
      },
      report: function (e) {
        if (e) {
          var t = tT(f.beforeReport)(e);
          if (t) {
            var r = tT(f.report)(t);
            if (r) {
              if (g) {
                this.build(r);
              } else {
                _.push(r);
              }
            }
          }
        }
      },
      build: function (e) {
        if (g) {
          var t = tT(f.beforeBuild)(e);
          if (t) {
            var r = s.build(t);
            if (r) {
              var n = tT(f.build)(r);
              if (n) {
                this.send(n);
              }
            }
          }
        }
      },
      send: function (e) {
        if (g) {
          var t = tT(f.beforeSend)(e);
          if (t) {
            a.send(t);
            x("send", false, t);
          }
        }
      },
      destroy: function () {
        b.clear();
        v = true;
        _.length = 0;
        x("beforeDestroy", true);
      },
      on: function (e, t) {
        if (e === "init" && m || e === "start" && g || e === "beforeDestroy" && v) {
          try {
            t();
          } catch (e) {}
        } else if (f[e]) {
          f[e].push(t);
        }
      },
      off: function (e, t) {
        f[e] &&= tk(f[e], t);
      },
      destroyAgent: b
    };
    y = Object.keys(w);
    return w;
    function x(e, t = false) {
      var r = [];
      var n = 2;
      for (; n < arguments.length; n++) {
        r[n - 2] = arguments[n];
      }
      f[e].forEach(function (e) {
        try {
          e.apply(undefined, tp([], th(r), false));
        } catch (e) {}
      });
      if (t) {
        f[e].length = 0;
      }
    }
  }({
    validateInitConfig: tG,
    initConfigNormalizer: tq,
    userConfigNormalizer: tQ,
    createSender: ny,
    builder: nb === undefined ? tV : nb,
    createDefaultConfig: (nw = nv.createDefaultConfig) === undefined ? t2 : nw,
    createConfigManager: tJ
  })), t1(nx), tY(nx), function (e, t) {
    e.on("init", function () {
      var t = [];
      function r(r) {
        r.forEach(function (r) {
          var n = r.name;
          if (!tx(t, n)) {
            t.push(n);
            r.setup(e);
            e.destroyAgent.set(n, n, [function () {
              t = tk(t, n);
              if (r.tearDown) {
                r.tearDown();
              }
            }]);
          }
        });
      }
      e.provide("applyIntegrations", r);
      var n = e.config();
      if (n && n.integrations) {
        r(n.integrations);
      }
    });
  }(nx), nN = nx));
  (nk = nN).provide("sendEvent", function (e) {
    var t = tM(e);
    if (t) {
      nk.report({
        ev_type: tF,
        payload: t,
        extra: {
          timestamp: t$()
        }
      });
    }
  });
  nk.provide("sendLog", function (e) {
    var t = tD(e);
    if (t) {
      nk.report({
        ev_type: tF,
        payload: t,
        extra: {
          timestamp: t$()
        }
      });
    }
  });
  var t3 = nN;
  function t4(e, t, r) {
    if (!function (e, t, r) {
      let n = e[t];
      if (n === undefined) {
        return (r == null ? undefined : r.optional) === true;
      } else {
        return typeof n == "string";
      }
    }(e, t, r)) {
      throw TypeError(`expect type of "${String(t)}" to be string`);
    }
  }
  function t6(e, t, r) {
    if (!function (e, t, r) {
      let n = e[t];
      return n !== undefined && typeof n == "number";
    }(e, t)) {
      throw TypeError(`expect type of "${String(t)}" to be number`);
    }
  }
  function t5(e, t, r) {
    let {
      expectedType: n = "object"
    } = r ?? {};
    if (!function (e, t, r) {
      let {
        typeGuard: n,
        optional: i
      } = r ?? {};
      let a = e[t];
      if (a === undefined) {
        return i === true;
      } else {
        return typeof a == "object" && a !== null && (n == null ? undefined : n(a)) !== false;
      }
    }(e, t, r)) {
      throw TypeError(`expect type of "${String(t)}" to be ${n}`);
    }
  }
  let t9 = () => typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof self != "undefined" ? self : undefined;
  function t7() {
    return {
      major: 0,
      minor: 0,
      patch: 0,
      postfix: ""
    };
  }
  function t8(e) {
    let t = Number(e);
    if (Number.isNaN(t) || t < 0) {
      return 0;
    } else {
      return t;
    }
  }
  let re = function (e) {
    if (!e) {
      return t7();
    }
    let t = /^(\d+)\.(\d+)\.(\d+)(-(.*))?$/.exec(e);
    if (!t) {
      return t7();
    }
    let [, r, n, i,, a = ""] = t;
    return {
      major: t8(r),
      minor: t8(n),
      patch: t8(i),
      postfix: a
    };
  }(typeof __LYNXVIEW__ != "undefined" && __LYNXVIEW__ ? lynx.__globalProps.__AI_SDK_VERSION__ : t9().__AI_SDK_VERSION__);
  let rt = typeof __DEV__ != "undefined" && __DEV__ && (typeof lynx == "undefined" || !lynx.__isSSRInternalUsage);
  let rr = console.debug;
  function rn(...e) {
    if (rt) {
      rr("[Applet Bridge]", ...e);
    }
  }
  let ri = (...e) => rn("[Call Result]", ...e);
  (nT = nA ||= {})[nT.SUCCESS = 1] = "SUCCESS";
  nT[nT.FAILED = 0] = "FAILED";
  nT[nT.UNAUTHORIZED = -1] = "UNAUTHORIZED";
  nT[nT.UNREGISTERED = -2] = "UNREGISTERED";
  nT[nT.INVALID_PARAMS = -3] = "INVALID_PARAMS";
  nT[nT.INVALID_RESULT = -4] = "INVALID_RESULT";
  nT[nT.SETTING_DISABLE = -6] = "SETTING_DISABLE";
  (nP = nO ||= {}).UNREGISTERED = "Function not found";
  nP.INVALID_PARAMS = "Invalid params";
  nP.INVALID_RESULT = "Invalid result";
  class ra {}
  class ro extends ra {
    constructor(e) {
      super();
      this.data = e;
    }
    static withData(e) {
      return new ro(e);
    }
    accept(e) {
      return e.success(this);
    }
    toRaw() {
      return {
        code: nA.SUCCESS,
        data: this.data
      };
    }
  }
  class rs extends ra {
    constructor(e, t) {
      super();
      this.msg = e;
      this.data = t;
    }
    static withReason(e) {
      return new rs(e);
    }
    static withReasonAndData(e, t) {
      return new rs(e, t);
    }
    accept(e) {
      return e.failed(this);
    }
    toRaw() {
      return {
        code: nA.FAILED,
        msg: this.msg,
        data: this.data
      };
    }
  }
  class rl extends ra {
    constructor(e, t) {
      super();
      this.code = e;
      this.msg = t;
    }
    static invalidParams() {
      return new rl(nA.INVALID_PARAMS, nO.INVALID_PARAMS);
    }
    static unregistered() {
      return new rl(nA.UNREGISTERED, nO.UNREGISTERED);
    }
    static invalidResult() {
      return new rl(nA.INVALID_RESULT, nO.INVALID_RESULT);
    }
    static runtimeForbidden(e) {
      return new rl(nA.UNREGISTERED, e);
    }
    accept(e) {
      return e.internalError(this);
    }
    toRaw() {
      return {
        code: this.code,
        msg: this.msg
      };
    }
  }
  class rc extends Error {
    constructor(e, t, r) {
      super(r ? `${r}: ${t}` : t);
      this.code = e;
      this.apiName = r;
      this.name = "APICallError";
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  class rd extends rc {
    constructor(e, t, r) {
      super(nA.FAILED, e, r);
      this.name = "APICallFailedError";
      this.data = t;
    }
    toCallResult() {
      return new rs(this.message, this.data);
    }
  }
  class ru extends rc {
    constructor(e, t, r) {
      super(e, t, r);
      this.name = "APICallInternalError";
    }
    static fromCallResult(e, t) {
      switch (e.code) {
        case nA.UNAUTHORIZED:
          return new rh(e.code, e.msg, t);
        case nA.UNREGISTERED:
          return new rp(e.code, e.msg, t);
        case nA.INVALID_PARAMS:
          return new rf(e.code, e.msg, t);
        case nA.INVALID_RESULT:
          return new rm(e.code, e.msg, t);
        default:
          return new ru(e.code, e.msg, t);
      }
    }
    toCallResult() {
      return new rl(this.code, this.message);
    }
  }
  class rh extends ru {
    constructor() {
      super(...arguments);
      this.name = "APIUnauthorizedError";
    }
  }
  class rp extends ru {
    constructor() {
      super(...arguments);
      this.name = "APIUnregisteredError";
    }
  }
  class rf extends ru {
    constructor() {
      super(...arguments);
      this.name = "APIInvalidParamsError";
    }
  }
  class rm extends ru {
    constructor() {
      super(...arguments);
      this.name = "APIInvalidResultError";
    }
  }
  class rg extends rc {
    constructor() {
      super(nA.UNREGISTERED, "Applet bridge unavailable");
      this.name = "AppletBridgeError";
    }
    toCallResult() {
      return new rl(nA.UNREGISTERED, "Applet bridge unavailable");
    }
  }
  function rv(e) {
    return "scope" in e && typeof e.scope == "string" && "target" in e && typeof e.target == "string" && (!("instance" in e) || e.instance === undefined || typeof e.instance == "string");
  }
  let r_ = {
    clientAPI: () => ({
      scope: "system",
      target: "bridge"
    })
  };
  let ry = (...e) => rn("[Message]", ...e);
  (nI = nF ||= {}).CALL = "call";
  nI.CALLBACK = "callback";
  nI.EVENT = "event";
  class rb {
    constructor(e) {
      this.name = e.name;
      this.params = e.params ?? {};
      this.callbackId = e.callbackId;
      this.target = e.target;
    }
    accept(e) {
      return e.functionCall(this);
    }
    toPlainObject() {
      return {
        type: nF.CALL,
        name: this.name,
        params: this.params,
        callbackId: this.callbackId,
        target: this.target
      };
    }
  }
  class rw {
    constructor(e) {
      this.params = e.params;
      this.callbackId = e.callbackId;
    }
    get parsedParams() {
      return function (e) {
        try {
          return function (e) {
            if (e.code === nA.SUCCESS) {
              if (e.data === undefined) {
                throw TypeError("undefined \"data\"");
              }
              ri("parsed \"success\"", e.data);
              return ro.withData(e.data);
            }
            if (e.code === nA.FAILED) {
              let {
                msg: t,
                data: r
              } = e;
              if (t === undefined) {
                throw TypeError("undefined \"msg\"");
              }
              ri("parsed \"failed\"", t, r);
              if (r === undefined) {
                return rs.withReason(t);
              } else {
                return rs.withReasonAndData(t, r);
              }
            }
            if (e.msg === undefined) {
              throw TypeError("undefined \"msg\"");
            }
            ri("parsed \"internal error\"", e.msg);
            return new rl(e.code, e.msg);
          }(e);
        } catch (e) {
          return rl.invalidResult();
        }
      }(this.params);
    }
    static fromCallMessage(e, t) {
      return new rw({
        params: t.toRaw(),
        callbackId: e.callbackId
      });
    }
    accept(e) {
      return e.callback(this);
    }
    toPlainObject() {
      return {
        type: nF.CALLBACK,
        params: this.params,
        callbackId: this.callbackId
      };
    }
  }
  class rx {
    constructor(e) {
      let {
        name: t,
        params: r = {},
        timestamp: n = Date.now(),
        callbackId: i = rx._nextTraceId++
      } = e;
      this.name = t;
      this.params = r;
      this.timestamp = n;
      this.callbackId = i;
    }
    accept(e) {
      return e.event(this);
    }
    toPlainObject() {
      return {
        type: nF.EVENT,
        name: this.name,
        params: this.params,
        timestamp: this.timestamp
      };
    }
  }
  function rk(e) {
    var t;
    if (typeof e != "object" || e === null) {
      throw TypeError("expect Message to be an object");
    }
    t4(e, "type");
    switch (e.type) {
      case nF.CALL:
        ry("parse as function call");
        t4(e, "name");
        t6(e, "callbackId");
        t5(e, "target", {
          typeGuard: rv,
          expectedType: "TargetEntity"
        });
        t5(e, "params", {
          optional: true
        });
        return new rb(e);
      case nF.CALLBACK:
        ry("parse as callback");
        t5(e, "params");
        t6(t = e.params, "code");
        t4(t, "msg", {
          optional: true
        });
        t5(t, "data", {
          optional: true
        });
        t6(e, "callbackId");
        return new rw({
          params: e.params,
          callbackId: e.callbackId
        });
      case nF.EVENT:
        ry("parse as event");
        t4(e, "name");
        t5(e, "params", {
          optional: true
        });
        t6(e, "timestamp");
        return new rx(e);
      default:
        throw TypeError(`unrecognized message type ${e.type}`);
    }
  }
  rx._nextTraceId = 0;
  let rC = "__bridge_ready__";
  class rj {}
  let rS = (...e) => rn("[WebView]", ...e);
  let rE = t9();
  function rR(e) {
    rS("(global) call to client", e);
    AppletBridgeModule.postMessage(JSON.stringify(e.toPlainObject()));
  }
  let rN = new class extends rj {
    get available() {
      var e;
      var t;
      return (t = (e = this.receiver) === null || e === undefined ? undefined : e.isAvailable()) !== null && t !== undefined && t;
    }
    init() {
      this.receiver = rE.onWebViewMessage ??= function () {
        var e;
        let t = new Set();
        let r = false;
        let n = true;
        let i = e => {
          let t = e.ports[0];
          if (e.data === "__channel_init__" && t) {
            rE.removeEventListener("message", i);
            a.port = t;
            t.onmessage = e => {
              if (!!e && typeof e.data == "string") {
                rS("(MessagePort) receive from client", e.data);
                try {
                  a(e.data);
                } catch (e) {
                  rS("(MessagePort) receive raw message error", e);
                  throw e;
                }
              }
            };
            t.postMessage("__channel_ack__");
          }
        };
        let a = e => {
          rS("(global) receive from client", e);
          let r = rk(JSON.parse(e));
          t.forEach(e => e(r));
        };
        a.on = e => void t.add(e);
        a.off = e => void t.delete(e);
        a.isAvailable = () => n;
        a.notifyReady = () => {
          if (!r) {
            try {
              rR(new rx({
                name: rC
              }));
            } catch (e) {
              rS(e);
              n = false;
            }
            r = true;
          }
        };
        a.port = undefined;
        a._testReset = () => {
          var e;
          rE.removeEventListener("message", i);
          if ((e = rE.addEventListener) !== null && e !== undefined) {
            e.call(rE, "message", i);
          }
        };
        if ((e = rE.addEventListener) !== null && e !== undefined) {
          e.call(rE, "message", i);
        }
        return a;
      }();
    }
    notifyReady() {
      var e;
      if ((e = this.receiver) !== null && e !== undefined) {
        e.notifyReady();
      }
    }
    call(e) {
      if (!this.available) {
        throw new rg();
      }
      (function (e) {
        let {
          port: t
        } = rE.onWebViewMessage;
        if (t) {
          rS("(MessagePort) call to client", e);
          t.postMessage(JSON.stringify(e.toPlainObject()));
        } else {
          rR(e);
        }
      })(e);
    }
    listen(e) {
      var t;
      if ((t = this.receiver) !== null && t !== undefined) {
        t.on(e);
      }
    }
    _testReset() {
      var e;
      if ((e = this.receiver) !== null && e !== undefined) {
        e._testReset();
      }
    }
  }();
  let rT = (...e) => rn("[Worker]", ...e);
  function rP(e) {
    var t;
    NativeModules.get("AppletBridgeModule").postMessage((t = e.toPlainObject(), typeof document == "undefined" ? t : JSON.stringify(t)));
  }
  let rI = new class extends rj {
    get available() {
      var e;
      var t;
      return (t = (e = this.receiver) === null || e === undefined ? undefined : e.isAvailable()) !== null && t !== undefined && t;
    }
    init() {
      this.receiver = globalThis.onWorkerMessage ??= function () {
        let e = new Set();
        let t = false;
        let r = true;
        let n = t => {
          rT("receive from client", t);
          let r = rk(t);
          e.forEach(e => e(r));
        };
        n.on = t => void e.add(t);
        n.off = t => void e.delete(t);
        n.isAvailable = () => r;
        n.notifyReady = () => {
          if (!t) {
            try {
              rP(new rx({
                name: rC
              }));
            } catch (e) {
              rT(e);
              r = false;
            }
            t = true;
          }
        };
        return n;
      }();
    }
    notifyReady() {
      var e;
      if ((e = this.receiver) !== null && e !== undefined) {
        e.notifyReady();
      }
    }
    call(e) {
      rT("call to client", e);
      if (!this.available) {
        throw new rg();
      }
      rP(e);
    }
    listen(e) {
      var t;
      if ((t = this.receiver) !== null && t !== undefined) {
        t.on(e);
      }
    }
  }();
  let r$ = (...e) => rn("[LynxView]", ...e);
  let rA = new class extends rj {
    constructor() {
      super(...arguments);
      this.handshake = false;
      this.available = true;
    }
    init() {
      if (!lynx.__isSSRInternalUsage) {
        try {
          if (!__LEPUS__) {
            lynx.getJSModule("GlobalEventEmitter").addListener("__APPLET_BRIDGE__", e => {
              var t;
              r$("receive from client", e);
              if ((t = this.receiver) !== null && t !== undefined) {
                t.call(this, rk(e));
              }
            });
          }
        } catch (e) {
          r$(e);
          this.available = false;
        }
      }
    }
    notifyReady() {
      if (!this.handshake && !lynx.__isSSRInternalUsage) {
        NativeModules.AppletBridgeModule.postMessage(new rx({
          name: rC
        }).toPlainObject());
        this.handshake = true;
      }
    }
    call(e) {
      if (!lynx.__isSSRInternalUsage) {
        r$("call to client", e);
        if (!this.available) {
          throw new rg();
        }
        NativeModules.AppletBridgeModule.postMessage(e.toPlainObject());
      }
    }
    listen(e) {
      this.receiver = e;
    }
  }();
  class rO {
    constructor(e, t = {}) {
      this.name = e;
      this.extra = t;
    }
  }
  function rF(e, t) {
    if (e && t) {
      return e - t;
    } else {
      return undefined;
    }
  }
  class rM extends rO {
    constructor() {
      super(...arguments);
      this.trace = {};
    }
    toRecord(e) {
      let {
        received: t,
        dispatched: r,
        handled: n,
        callback: i
      } = this.trace;
      return {
        type: "InComingCall",
        name: this.name,
        callbackId: e,
        perfRecord: {
          feReceiveCallTime: t,
          dispatched: r,
          handled: n,
          feSendCallbackTime: i
        },
        statistics: {
          localExecution: rF(n, r),
          total: rF(i, t)
        }
      };
    }
  }
  class rD extends rO {
    constructor() {
      super(...arguments);
      this.trace = {};
    }
    toRecord(e) {
      let {
        invoked: t,
        callback: r,
        dispatched: n,
        handled: i
      } = this.trace;
      return {
        type: "OutGoingCall",
        name: this.name,
        callbackId: e,
        perfRecord: {
          feSendCallTime: t,
          callback: r,
          dispatched: n,
          feReceiveCallbackTime: i
        },
        statistics: {
          remoteExecution: rF(r, t),
          total: rF(i, t)
        }
      };
    }
  }
  class rB extends rO {
    constructor() {
      super(...arguments);
      this.trace = {};
    }
    toRecord(e) {
      let {
        received: t,
        dispatched: r,
        handled: n
      } = this.trace;
      return {
        type: "InComingEvent",
        name: this.name,
        callbackId: e,
        perfRecord: {
          feReceiveEventTime: t,
          dispatched: r,
          handled: n
        },
        statistics: {
          total: rF(n, t)
        }
      };
    }
  }
  let rL = new class {
    constructor() {
      this._incomingCall = {};
      this._outgoingCall = {};
      this._incomingEvent = {};
      this._reportPerfQueue = [];
    }
    incomingCallReceived(e, t, r) {
      var i;
      ((i = this._incomingCall)[e] ?? (i[e] = new rM(t, r))).trace.received = Date.now();
    }
    incomingCallDispatched(e) {
      let t = this._incomingCall[e];
      if (t) {
        t.trace.dispatched = Date.now();
      }
    }
    incomingCallHandled(e) {
      let t = this._incomingCall[e];
      if (t) {
        t.trace.handled = Date.now();
      }
    }
    incomingCallCallback(e) {
      let t = this._incomingCall[e];
      if (t) {
        delete this._incomingCall[e];
        t.trace.callback = Date.now();
        let r = t.toRecord(e);
        this.report(r);
        this.addPerfQueue(r);
      }
    }
    outgoingCallInvoked(e, t, r) {
      var i;
      ((i = this._outgoingCall)[e] ?? (i[e] = new rD(t, r))).trace.invoked = Date.now();
    }
    outgoingCallCallback(e) {
      let t = this._outgoingCall[e];
      if (t) {
        t.trace.callback = Date.now();
      }
    }
    outgoingCallDispatched(e) {
      let t = this._outgoingCall[e];
      if (t) {
        t.trace.dispatched = Date.now();
      }
    }
    outgoingCallHandled(e) {
      let t = this._outgoingCall[e];
      if (t) {
        delete this._outgoingCall[e];
        t.trace.handled = Date.now();
        let r = t.toRecord(e);
        this.report(r);
        this.addPerfQueue(r);
      }
    }
    incomingEventReceived(e, t, r) {
      var i;
      ((i = this._incomingEvent)[e] ?? (i[e] = new rB(t, r))).trace.received = Date.now();
    }
    incomingEventDispatched(e) {
      let t = this._incomingEvent[e];
      if (t) {
        t.trace.dispatched = Date.now();
      }
    }
    incomingEventHandled(e) {
      let t = this._incomingEvent[e];
      if (t) {
        delete this._incomingEvent[e];
        t.trace.handled = Date.now();
        let r = t.toRecord(e);
        this.report(r);
        this.addPerfQueue(r);
        if (t.name === "onDestroy") {
          this.reportPerfQueueOnDestroy();
        }
      }
    }
    outgoingEvent(e, t, r) {
      this.report({
        type: "Outgoing Event",
        name: t,
        callbackId: e,
        perfRecord: {
          invoked: Date.now()
        },
        statistics: {}
      });
    }
    report(e) {}
    addPerfQueue(e) {
      this._reportPerfQueue.push(e);
      if (this._reportPerfQueue.length >= 20) {
        this.reportPerfQueue();
      }
    }
    reportPerfQueueOnDestroy() {
      if (this._reportPerfQueue.length > 0) {
        this.reportPerfQueue();
      }
    }
    reportPerfQueue() {
      let e = this._reportPerfQueue;
      this._reportPerfQueue = [];
      try {
        rZ.impl(e);
      } catch (e) {}
    }
  }();
  let rZ = {
    impl: e => {}
  };
  let rW = typeof __MAIN_PROCESS__ != "undefined" && __MAIN_PROCESS__;
  let rU = typeof __LYNXVIEW__ != "undefined" && __LYNXVIEW__;
  let rH = new class extends rj {
    constructor(e) {
      super();
      this.impl = e;
    }
    init() {
      this.impl.init();
    }
    listen(e) {
      this.impl.listen(t => {
        t.accept({
          functionCall: e => rL.incomingCallReceived(e.callbackId, e.name),
          callback: e => rL.outgoingCallCallback(e.callbackId),
          event: e => rL.incomingEventReceived(e.callbackId, e.name)
        });
        e(t);
      });
    }
    call(e) {
      e.accept({
        functionCall: e => rL.outgoingCallInvoked(e.callbackId, e.name),
        callback: e => rL.incomingCallCallback(e.callbackId),
        event: e => rL.outgoingEvent(e.callbackId, e.name)
      });
      this.impl.call(e);
    }
    notifyReady() {
      this.impl.notifyReady();
    }
    getRealBridge() {
      return this.impl;
    }
  }(rW ? rI : rU ? rA : rN);
  rH.init();
  var rz = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
  function rV(e) {
    if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
      return e.default;
    } else {
      return e;
    }
  }
  function rJ(e, t) {
    e(t = {
      exports: {}
    }, t.exports);
    return t.exports;
  }
  function rX(e) {
    return e && e.Math == Math && e;
  }
  var rq = rX(typeof globalThis == "object" && globalThis) || rX(typeof window == "object" && window) || rX(typeof self == "object" && self) || rX(typeof rz == "object" && rz) || function () {
    return this;
  }() || Function("return this")();
  function rG(e) {
    try {
      return !!e();
    } catch (e) {
      return true;
    }
  }
  var rQ = !rG(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
  var rK = {}.propertyIsEnumerable;
  var rY = Object.getOwnPropertyDescriptor;
  var r0 = {
    f: rY && !rK.call({
      1: 2
    }, 1) ? function (e) {
      var t = rY(this, e);
      return !!t && t.enumerable;
    } : rK
  };
  function r1(e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  }
  var r2 = {}.toString;
  function r3(e) {
    return r2.call(e).slice(8, -1);
  }
  var r4 = "".split;
  var r6 = rG(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (e) {
    if (r3(e) == "String") {
      return r4.call(e, "");
    } else {
      return Object(e);
    }
  } : Object;
  function r5(e) {
    if (e == null) {
      throw TypeError("Can't call method on " + e);
    }
    return e;
  }
  function r9(e) {
    return r6(r5(e));
  }
  function r7(e) {
    if (typeof e == "object") {
      return e !== null;
    } else {
      return typeof e == "function";
    }
  }
  function r8(e, t) {
    var r;
    var n;
    if (!r7(e)) {
      return e;
    }
    if (t && typeof (r = e.toString) == "function" && !r7(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !r7(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !r7(n = r.call(e))) {
      return n;
    }
    throw TypeError("Can't convert object to primitive value");
  }
  var ne = {}.hasOwnProperty;
  function nt(e, t) {
    return ne.call(e, t);
  }
  var nr = rq.document;
  var nn = r7(nr) && r7(nr.createElement);
  function ni(e) {
    if (nn) {
      return nr.createElement(e);
    } else {
      return {};
    }
  }
  var na = !rQ && !rG(function () {
    return Object.defineProperty(ni("div"), "a", {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
  var no = Object.getOwnPropertyDescriptor;
  var ns = rQ ? no : function (e, t) {
    e = r9(e);
    t = r8(t, true);
    if (na) {
      try {
        return no(e, t);
      } catch (e) {}
    }
    if (nt(e, t)) {
      return r1(!r0.f.call(e, t), e[t]);
    }
  };
  function nl(e) {
    if (!r7(e)) {
      throw TypeError(String(e) + " is not an object");
    }
    return e;
  }
  var nc = Object.defineProperty;
  var nd = {
    f: rQ ? nc : function (e, t, r) {
      nl(e);
      t = r8(t, true);
      nl(r);
      if (na) {
        try {
          return nc(e, t, r);
        } catch (e) {}
      }
      if ("get" in r || "set" in r) {
        throw TypeError("Accessors not supported");
      }
      if ("value" in r) {
        e[t] = r.value;
      }
      return e;
    }
  };
  var nu = rQ ? function (e, t, r) {
    return nd.f(e, t, r1(1, r));
  } : function (e, t, r) {
    e[t] = r;
    return e;
  };
  function nh(e, t) {
    try {
      nu(rq, e, t);
    } catch (r) {
      rq[e] = t;
    }
    return t;
  }
  var np = "__core-js_shared__";
  var nf = rq[np] || nh(np, {});
  var nm = Function.toString;
  if (typeof nf.inspectSource != "function") {
    nf.inspectSource = function (e) {
      return nm.call(e);
    };
  }
  var ng;
  var nv;
  var n_;
  var ny;
  var nb;
  var nw;
  var nx;
  var nk;
  var nC;
  var nj;
  var nS;
  var nE;
  var nR;
  var nN;
  var nT;
  var nP;
  var nI;
  var n$;
  var nA;
  var nO;
  var nF;
  var nM;
  var nD;
  var nB;
  var nL = nf.inspectSource;
  var nZ = rq.WeakMap;
  var nW = typeof nZ == "function" && /native code/.test(nL(nZ));
  var nU = rJ(function (e) {
    (e.exports = function (e, t) {
      return nf[e] ||= t !== undefined ? t : {};
    })("versions", []).push({
      version: "3.10.2",
      mode: "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  });
  var nH = 0;
  var nz = Math.random();
  function nV(e) {
    return "Symbol(" + String(e === undefined ? "" : e) + ")_" + (++nH + nz).toString(36);
  }
  var nJ = nU("keys");
  function nX(e) {
    return nJ[e] ||= nV(e);
  }
  var nq = {};
  var nG = "Object already initialized";
  var nQ = rq.WeakMap;
  if (nW) {
    var nK = nf.state ||= new nQ();
    var nY = nK.get;
    var n0 = nK.has;
    var n1 = nK.set;
    nM = function (e, t) {
      if (n0.call(nK, e)) {
        throw TypeError(nG);
      }
      t.facade = e;
      n1.call(nK, e, t);
      return t;
    };
    nD = function (e) {
      return nY.call(nK, e) || {};
    };
    nB = function (e) {
      return n0.call(nK, e);
    };
  } else {
    var n2 = nX("state");
    nq[n2] = true;
    nM = function (e, t) {
      if (nt(e, n2)) {
        throw TypeError(nG);
      }
      t.facade = e;
      nu(e, n2, t);
      return t;
    };
    nD = function (e) {
      if (nt(e, n2)) {
        return e[n2];
      } else {
        return {};
      }
    };
    nB = function (e) {
      return nt(e, n2);
    };
  }
  var n3;
  var n4;
  var n6 = nM;
  var n5 = nD;
  var n9 = rJ(function (e) {
    var t = String(String).split("String");
    (e.exports = function (e, r, n, i) {
      var a;
      var s = !!i && !!i.unsafe;
      var l = !!i && !!i.enumerable;
      var c = !!i && !!i.noTargetGet;
      if (typeof n == "function") {
        if (typeof r == "string" && !nt(n, "name")) {
          nu(n, "name", r);
        }
        (nB(a = n) ? nD(a) : nM(a, {})).source ||= t.join(typeof r == "string" ? r : "");
      }
      if (e === rq) {
        if (l) {
          e[r] = n;
        } else {
          nh(r, n);
        }
        return;
      }
      if (s) {
        if (!c && e[r]) {
          l = true;
        }
      } else {
        delete e[r];
      }
      if (l) {
        e[r] = n;
      } else {
        nu(e, r, n);
      }
    })(Function.prototype, "toString", function () {
      return typeof this == "function" && n5(this).source || nL(this);
    });
  });
  function n7(e) {
    if (typeof e == "function") {
      return e;
    } else {
      return undefined;
    }
  }
  function n8(e, t) {
    if (arguments.length < 2) {
      return n7(rq[e]) || n7(rq[e]);
    } else {
      return rq[e] && rq[e][t] || rq[e] && rq[e][t];
    }
  }
  var ie = Math.ceil;
  var it = Math.floor;
  function ir(e) {
    if (isNaN(e *= 1)) {
      return 0;
    } else {
      return (e > 0 ? it : ie)(e);
    }
  }
  var ii = Math.min;
  function ia(e) {
    if (e > 0) {
      return ii(ir(e), 9007199254740991);
    } else {
      return 0;
    }
  }
  var io = Math.max;
  var is = Math.min;
  function il(e, t) {
    var r = ir(e);
    if (r < 0) {
      return io(r + t, 0);
    } else {
      return is(r, t);
    }
  }
  function ic(e) {
    return function (t, r, n) {
      var i;
      var a = r9(t);
      var o = ia(a.length);
      var s = il(n, o);
      if (e && r != r) {
        while (o > s) {
          if ((i = a[s++]) != i) {
            return true;
          }
        }
      } else {
        for (; o > s; s++) {
          if ((e || s in a) && a[s] === r) {
            return e || s || 0;
          }
        }
      }
      return !e && -1;
    };
  }
  var id = {
    includes: ic(true),
    indexOf: ic(false)
  };
  var iu = id.indexOf;
  function ih(e, t) {
    var r;
    var n = r9(e);
    var i = 0;
    var a = [];
    for (r in n) {
      if (!nt(nq, r) && nt(n, r)) {
        a.push(r);
      }
    }
    while (t.length > i) {
      if (nt(n, r = t[i++])) {
        if (!~iu(a, r)) {
          a.push(r);
        }
      }
    }
    return a;
  }
  var ip = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  var im = ip.concat("length", "prototype");
  var ig = {
    f: Object.getOwnPropertyNames || function (e) {
      return ih(e, im);
    }
  };
  var iv = {
    f: Object.getOwnPropertySymbols
  };
  var i_ = n8("Reflect", "ownKeys") || function (e) {
    var t = ig.f(nl(e));
    var r = iv.f;
    if (r) {
      return t.concat(r(e));
    } else {
      return t;
    }
  };
  function iy(e, t) {
    var r = i_(t);
    var n = nd.f;
    var i = 0;
    for (; i < r.length; i++) {
      var a = r[i];
      if (!nt(e, a)) {
        n(e, a, ns(t, a));
      }
    }
  }
  var ib = /#|\.prototype\./;
  function iw(e, t) {
    var r = ik[ix(e)];
    return r == ij || r != iC && (typeof t == "function" ? rG(t) : !!t);
  }
  var ix = iw.normalize = function (e) {
    return String(e).replace(ib, ".").toLowerCase();
  };
  var ik = iw.data = {};
  var iC = iw.NATIVE = "N";
  var ij = iw.POLYFILL = "P";
  function iS(e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = e.target;
    var l = e.global;
    var c = e.stat;
    if (r = l ? rq : c ? rq[s] || nh(s, {}) : (rq[s] || {}).prototype) {
      for (n in t) {
        a = t[n];
        i = e.noTargetGet ? (o = ns(r, n)) && o.value : r[n];
        if (!iw(l ? n : s + (c ? "." : "#") + n, e.forced) && i !== undefined) {
          if (typeof a == typeof i) {
            continue;
          }
          iy(a, i);
        }
        if (e.sham || i && i.sham) {
          nu(a, "sham", true);
        }
        n9(r, n, a, e);
      }
    }
  }
  function iE(e) {
    if (typeof e != "function") {
      throw TypeError(String(e) + " is not a function");
    }
    return e;
  }
  function iR(e) {
    var t;
    var r;
    this.promise = new e(function (e, n) {
      if (t !== undefined || r !== undefined) {
        throw TypeError("Bad Promise constructor");
      }
      t = e;
      r = n;
    });
    this.resolve = iE(t);
    this.reject = iE(r);
  }
  var iN = {
    f: function (e) {
      return new iR(e);
    }
  };
  function iT(e) {
    try {
      return {
        error: false,
        value: e()
      };
    } catch (e) {
      return {
        error: true,
        value: e
      };
    }
  }
  var iP = r3(rq.process) == "process";
  var iI = n8("navigator", "userAgent") || "";
  var i$ = rq.process;
  var iA = i$ && i$.versions;
  var iO = iA && iA.v8;
  if (iO) {
    n4 = (n3 = iO.split("."))[0] + n3[1];
  } else if (iI && (!(n3 = iI.match(/Edge\/(\d+)/)) || n3[1] >= 74) && (n3 = iI.match(/Chrome\/(\d+)/))) {
    n4 = n3[1];
  }
  var iF = n4 && +n4;
  var iM = !!Object.getOwnPropertySymbols && !rG(function () {
    return !Symbol.sham && (iP ? iF === 38 : iF > 37 && iF < 41);
  });
  var iD = iM && !Symbol.sham && typeof Symbol.iterator == "symbol";
  var iB = nU("wks");
  var iL = rq.Symbol;
  var iZ = iD ? iL : iL && iL.withoutSetter || nV;
  function iW(e) {
    if (!nt(iB, e) || !iM && typeof iB[e] != "string") {
      if (iM && nt(iL, e)) {
        iB[e] = iL[e];
      } else {
        iB[e] = iZ("Symbol." + e);
      }
    }
    return iB[e];
  }
  var iU = {};
  var iH = iW("iterator");
  var iz = Array.prototype;
  function iV(e, t, r) {
    iE(e);
    if (t === undefined) {
      return e;
    }
    switch (r) {
      case 0:
        return function () {
          return e.call(t);
        };
      case 1:
        return function (r) {
          return e.call(t, r);
        };
      case 2:
        return function (r, n) {
          return e.call(t, r, n);
        };
      case 3:
        return function (r, n, i) {
          return e.call(t, r, n, i);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  }
  var iJ = iW("toStringTag");
  var iX = {
    [iJ]: "z"
  };
  var iq = String(iX) === "[object z]";
  var iG = iW("toStringTag");
  var iQ = r3(function () {
    return arguments;
  }()) == "Arguments";
  function iK(e, t) {
    try {
      return e[t];
    } catch (e) {}
  }
  var iY = iq ? r3 : function (e) {
    var t;
    var r;
    var n;
    if (e === undefined) {
      return "Undefined";
    } else if (e === null) {
      return "Null";
    } else if (typeof (r = iK(t = Object(e), iG)) == "string") {
      return r;
    } else if (iQ) {
      return r3(t);
    } else if ((n = r3(t)) == "Object" && typeof t.callee == "function") {
      return "Arguments";
    } else {
      return n;
    }
  };
  var i0 = iW("iterator");
  function i1(e) {
    if (e != null) {
      return e[i0] || e["@@iterator"] || iU[iY(e)];
    }
  }
  function i2(e) {
    var t = e.return;
    if (t !== undefined) {
      return nl(t.call(e)).value;
    }
  }
  function i3(e, t) {
    this.stopped = e;
    this.result = t;
  }
  function i4(e, t, r) {
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var d = iV(t, r, 1);
    function u(e) {
      return d(e);
    }
    if (typeof (i = i1(e)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (i !== undefined && (iU.Array === i || iz[iH] === i)) {
      a = 0;
      o = ia(e.length);
      for (; o > a; a++) {
        if ((s = u(e[a])) && s instanceof i3) {
          return s;
        }
      }
      return new i3(false);
    }
    for (l = (n = i.call(e)).next; !(c = l.call(n)).done;) {
      try {
        s = u(c.value);
      } catch (e) {
        i2(n);
        throw e;
      }
      if (typeof s == "object" && s && s instanceof i3) {
        return s;
      }
    }
    return new i3(false);
  }
  iS({
    target: "Promise",
    stat: true
  }, {
    allSettled: function (e) {
      var t = this;
      var r = iN.f(t);
      var n = r.resolve;
      var i = r.reject;
      var a = iT(function () {
        var r = iE(t.resolve);
        var i = [];
        var a = 0;
        var o = 1;
        i4(e, function (e) {
          var s = a++;
          var l = false;
          i.push(undefined);
          o++;
          r.call(t, e).then(function (e) {
            if (!l) {
              l = true;
              i[s] = {
                status: "fulfilled",
                value: e
              };
              if (! --o) {
                n(i);
              }
            }
          }, function (e) {
            if (!l) {
              l = true;
              i[s] = {
                status: "rejected",
                reason: e
              };
              if (! --o) {
                n(i);
              }
            }
          });
        });
        if (! --o) {
          n(i);
        }
      });
      if (a.error) {
        i(a.value);
      }
      return r.promise;
    }
  });
  var i6 = "No one promise resolved";
  iS({
    target: "Promise",
    stat: true
  }, {
    any: function (e) {
      var t = this;
      var r = iN.f(t);
      var n = r.resolve;
      var i = r.reject;
      var a = iT(function () {
        var r = iE(t.resolve);
        var a = [];
        var o = 0;
        var s = 1;
        var l = false;
        i4(e, function (e) {
          var c = o++;
          var d = false;
          a.push(undefined);
          s++;
          r.call(t, e).then(function (e) {
            if (!d && !l) {
              l = true;
              n(e);
            }
          }, function (e) {
            if (!d && !l) {
              d = true;
              a[c] = e;
              if (! --s) {
                i(new (n8("AggregateError"))(a, i6));
              }
            }
          });
        });
        if (! --s) {
          i(new (n8("AggregateError"))(a, i6));
        }
      });
      if (a.error) {
        i(a.value);
      }
      return r.promise;
    }
  });
  function i5(e) {
    if (!r7(e) && e !== null) {
      throw TypeError("Can't set " + String(e) + " as a prototype");
    }
    return e;
  }
  var i9 = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e;
    var t = false;
    var r = {};
    try {
      (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []);
      t = r instanceof Array;
    } catch (e) {}
    return function (r, n) {
      nl(r);
      i5(n);
      if (t) {
        e.call(r, n);
      } else {
        r.__proto__ = n;
      }
      return r;
    };
  }() : undefined);
  iS({
    target: "Object",
    stat: true
  }, {
    setPrototypeOf: i9
  });
  var i7;
  var i8 = Object.keys || function (e) {
    return ih(e, ip);
  };
  var ae = rQ ? Object.defineProperties : function (e, t) {
    nl(e);
    var r;
    var n = i8(t);
    var i = n.length;
    var a = 0;
    while (i > a) {
      nd.f(e, r = n[a++], t[r]);
    }
    return e;
  };
  var at = n8("document", "documentElement");
  var ar = "prototype";
  var an = "script";
  var ai = nX("IE_PROTO");
  function aa() {}
  function ao(e) {
    return "<" + an + ">" + e + "</" + an + ">";
  }
  function as(e) {
    e.write(ao(""));
    e.close();
    var t = e.parentWindow.Object;
    e = null;
    return t;
  }
  function al() {
    var e;
    var t = ni("iframe");
    t.style.display = "none";
    at.appendChild(t);
    t.src = String("java" + an + ":");
    (e = t.contentWindow.document).open();
    e.write(ao("document.F=Object"));
    e.close();
    return e.F;
  }
  function ac() {
    try {
      i7 = document.domain && new ActiveXObject("htmlfile");
    } catch (e) {}
    ac = i7 ? as(i7) : al();
    for (var e = ip.length; e--;) {
      delete ac[ar][ip[e]];
    }
    return ac();
  }
  nq[ai] = true;
  var ad = Object.create || function (e, t) {
    var r;
    if (e !== null) {
      aa[ar] = nl(e);
      r = new aa();
      aa[ar] = null;
      r[ai] = e;
    } else {
      r = ac();
    }
    if (t === undefined) {
      return r;
    } else {
      return ae(r, t);
    }
  };
  iS({
    target: "Object",
    stat: true,
    sham: !rQ
  }, {
    create: ad
  });
  function au(e) {
    return Object(r5(e));
  }
  var ah = Object.assign;
  var ap = Object.defineProperty;
  var af = !ah || rG(function () {
    if (rQ && ah({
      b: 1
    }, ah(ap({}, "a", {
      enumerable: true,
      get: function () {
        ap(this, "b", {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) {
      return true;
    }
    var e = {};
    var t = {};
    var r = Symbol();
    var n = "abcdefghijklmnopqrst";
    e[r] = 7;
    n.split("").forEach(function (e) {
      t[e] = e;
    });
    return ah({}, e)[r] != 7 || i8(ah({}, t)).join("") != n;
  }) ? function (e, t) {
    var r = au(e);
    var n = arguments.length;
    var i = 1;
    var a = iv.f;
    var o = r0.f;
    while (n > i) {
      var s;
      var l = r6(arguments[i++]);
      var c = a ? i8(l).concat(a(l)) : i8(l);
      var d = c.length;
      var u = 0;
      while (d > u) {
        s = c[u++];
        if (!rQ || o.call(l, s)) {
          r[s] = l[s];
        }
      }
    }
    return r;
  } : ah;
  iS({
    target: "Object",
    stat: true,
    forced: Object.assign !== af
  }, {
    assign: af
  });
  var am = Array.isArray || function (e) {
    return r3(e) == "Array";
  };
  var ag = iW("species");
  function av(e, t) {
    var r;
    if (am(e)) {
      if (typeof (r = e.constructor) == "function" && (r === Array || am(r.prototype))) {
        r = undefined;
      } else if (r7(r) && (r = r[ag]) === null) {
        r = undefined;
      }
    }
    return new (r === undefined ? Array : r)(t === 0 ? 0 : t);
  }
  var a_ = [].push;
  function ay(e) {
    var t = e == 1;
    var r = e == 2;
    var n = e == 3;
    var i = e == 4;
    var a = e == 6;
    var o = e == 7;
    var s = e == 5 || a;
    return function (l, c, d, u) {
      var h;
      var p;
      var f = au(l);
      var m = r6(f);
      var g = iV(c, d, 3);
      var v = ia(m.length);
      var _ = 0;
      var y = u || av;
      var b = t ? y(l, v) : r || o ? y(l, 0) : undefined;
      for (; v > _; _++) {
        if ((s || _ in m) && (p = g(h = m[_], _, f), e)) {
          if (t) {
            b[_] = p;
          } else if (p) {
            switch (e) {
              case 3:
                return true;
              case 5:
                return h;
              case 6:
                return _;
              case 2:
                a_.call(b, h);
            }
          } else {
            switch (e) {
              case 4:
                return false;
              case 7:
                a_.call(b, h);
            }
          }
        }
      }
      if (a) {
        return -1;
      } else if (n || i) {
        return i;
      } else {
        return b;
      }
    };
  }
  var ab = {
    forEach: ay(0),
    map: ay(1),
    filter: ay(2),
    some: ay(3),
    every: ay(4),
    find: ay(5),
    findIndex: ay(6),
    filterOut: ay(7)
  };
  function aw(e, t) {
    var r = [][e];
    return !!r && rG(function () {
      r.call(null, t || function () {
        throw 1;
      }, 1);
    });
  }
  var ax = ab.forEach;
  var ak = aw("forEach") ? [].forEach : function (e) {
    return ax(this, e, arguments.length > 1 ? arguments[1] : undefined);
  };
  iS({
    target: "Array",
    proto: true,
    forced: [].forEach != ak
  }, {
    forEach: ak
  });
  var aC = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  for (var aj in aC) {
    var aS = rq[aj];
    var aE = aS && aS.prototype;
    if (aE && aE.forEach !== ak) {
      try {
        nu(aE, "forEach", ak);
      } catch (e) {
        aE.forEach = ak;
      }
    }
  }
  iS({
    target: "Object",
    stat: true,
    forced: rG(function () {
      i8(1);
    })
  }, {
    keys: function (e) {
      return i8(au(e));
    }
  });
  function aR(e, t, r) {
    var n = r8(t);
    if (n in e) {
      nd.f(e, n, r1(0, r));
    } else {
      e[n] = r;
    }
  }
  var aN = iW("species");
  function aT(e) {
    return iF >= 51 || !rG(function () {
      var t = [];
      (t.constructor = {})[aN] = function () {
        return {
          foo: 1
        };
      };
      return t[e](Boolean).foo !== 1;
    });
  }
  var aP = aT("splice");
  var aI = Math.max;
  var a$ = Math.min;
  iS({
    target: "Array",
    proto: true,
    forced: !aP
  }, {
    splice: function (e, t) {
      var r;
      var n;
      var i;
      var a;
      var o;
      var s;
      var l = au(this);
      var c = ia(l.length);
      var d = il(e, c);
      var u = arguments.length;
      if (u === 0) {
        r = n = 0;
      } else if (u === 1) {
        r = 0;
        n = c - d;
      } else {
        r = u - 2;
        n = a$(aI(ir(t), 0), c - d);
      }
      if (c + r - n > 9007199254740991) {
        throw TypeError("Maximum allowed length exceeded");
      }
      i = av(l, n);
      a = 0;
      for (; a < n; a++) {
        if ((o = d + a) in l) {
          aR(i, a, l[o]);
        }
      }
      i.length = n;
      if (r < n) {
        for (a = d; a < c - n; a++) {
          o = a + n;
          s = a + r;
          if (o in l) {
            l[s] = l[o];
          } else {
            delete l[s];
          }
        }
        for (a = c; a > c - n + r; a--) {
          delete l[a - 1];
        }
      } else if (r > n) {
        for (a = c - n; a > d; a--) {
          o = a + n - 1;
          s = a + r - 1;
          if (o in l) {
            l[s] = l[o];
          } else {
            delete l[s];
          }
        }
      }
      for (a = 0; a < r; a++) {
        l[a + d] = arguments[a + 2];
      }
      l.length = c - n + r;
      return i;
    }
  });
  function aA() {
    var e = nl(this);
    var t = "";
    if (e.global) {
      t += "g";
    }
    if (e.ignoreCase) {
      t += "i";
    }
    if (e.multiline) {
      t += "m";
    }
    if (e.dotAll) {
      t += "s";
    }
    if (e.unicode) {
      t += "u";
    }
    if (e.sticky) {
      t += "y";
    }
    return t;
  }
  var aO = {
    UNSUPPORTED_Y: rG(function () {
      var e = RegExp("a", "y");
      e.lastIndex = 2;
      return e.exec("abcd") != null;
    }),
    BROKEN_CARET: rG(function () {
      var e = RegExp("^r", "gy");
      e.lastIndex = 2;
      return e.exec("str") != null;
    })
  };
  var aF = RegExp.prototype.exec;
  var aM = nU("native-string-replace", String.prototype.replace);
  var aD = aF;
  oD = /a/;
  oB = /b*/g;
  aF.call(oD, "a");
  aF.call(oB, "a");
  var aB = oD.lastIndex !== 0 || oB.lastIndex !== 0;
  var aL = aO.UNSUPPORTED_Y || aO.BROKEN_CARET;
  var aZ = /()??/.exec("")[1] !== undefined;
  if (aB || aZ || aL) {
    aD = function (e) {
      var t;
      var r;
      var n;
      var i;
      var a = aL && this.sticky;
      var o = aA.call(this);
      var s = this.source;
      var l = 0;
      var c = e;
      if (a) {
        if ((o = o.replace("y", "")).indexOf("g") === -1) {
          o += "g";
        }
        c = String(e).slice(this.lastIndex);
        if (this.lastIndex > 0 && (!this.multiline || this.multiline && e[this.lastIndex - 1] !== `
`)) {
          s = "(?: " + s + ")";
          c = " " + c;
          l++;
        }
        r = RegExp("^(?:" + s + ")", o);
      }
      if (aZ) {
        r = RegExp("^" + s + "$(?!\\s)", o);
      }
      if (aB) {
        t = this.lastIndex;
      }
      n = aF.call(a ? r : this, c);
      if (a) {
        if (n) {
          n.input = n.input.slice(l);
          n[0] = n[0].slice(l);
          n.index = this.lastIndex;
          this.lastIndex += n[0].length;
        } else {
          this.lastIndex = 0;
        }
      } else if (aB && n) {
        this.lastIndex = this.global ? n.index + n[0].length : t;
      }
      if (aZ && n && n.length > 1) {
        aM.call(n[0], r, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) {
              n[i] = undefined;
            }
          }
        });
      }
      return n;
    };
  }
  var aW = aD;
  iS({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== aW
  }, {
    exec: aW
  });
  var aU = iW("species");
  var aH = !rG(function () {
    var e = /./;
    e.exec = function () {
      var e = [];
      e.groups = {
        a: "7"
      };
      return e;
    };
    return "".replace(e, "$<a>") !== "7";
  });
  var az = "a".replace(/./, "$0") === "$0";
  var aV = iW("replace");
  var aJ = !!/./[aV] && /./[aV]("a", "$0") === "";
  var aX = !rG(function () {
    var e = /(?:)/;
    var t = e.exec;
    e.exec = function () {
      return t.apply(this, arguments);
    };
    var r = "ab".split(e);
    return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
  });
  function aq(e, t, r, n) {
    var i = iW(e);
    var a = !rG(function () {
      var t = {
        [i]: function () {
          return 7;
        }
      };
      return ""[e](t) != 7;
    });
    var o = a && !rG(function () {
      var t = false;
      var r = /a/;
      if (e === "split") {
        (r = {}).constructor = {};
        r.constructor[aU] = function () {
          return r;
        };
        r.flags = "";
        r[i] = /./[i];
      }
      r.exec = function () {
        t = true;
        return null;
      };
      r[i]("");
      return !t;
    });
    if (!a || !o || e === "replace" && (!aH || !az || !!aJ) || e === "split" && !aX) {
      var s = /./[i];
      var l = r(i, ""[e], function (e, t, r, n, i) {
        if (t.exec === RegExp.prototype.exec) {
          if (a && !i) {
            return {
              done: true,
              value: s.call(t, r, n)
            };
          } else {
            return {
              done: true,
              value: e.call(r, t, n)
            };
          }
        } else {
          return {
            done: false
          };
        }
      }, {
        REPLACE_KEEPS_$0: az,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: aJ
      });
      var c = l[0];
      var d = l[1];
      n9(String.prototype, e, c);
      n9(RegExp.prototype, i, t == 2 ? function (e, t) {
        return d.call(e, this, t);
      } : function (e) {
        return d.call(e, this);
      });
    }
    if (n) {
      nu(RegExp.prototype[i], "sham", true);
    }
  }
  function aG(e) {
    return function (t, r) {
      var n;
      var i;
      var a = String(r5(t));
      var o = ir(r);
      var s = a.length;
      if (o < 0 || o >= s) {
        if (e) {
          return "";
        } else {
          return undefined;
        }
      } else if ((n = a.charCodeAt(o)) < 55296 || n > 56319 || o + 1 === s || (i = a.charCodeAt(o + 1)) < 56320 || i > 57343) {
        if (e) {
          return a.charAt(o);
        } else {
          return n;
        }
      } else if (e) {
        return a.slice(o, o + 2);
      } else {
        return (n - 55296 << 10) + (i - 56320) + 65536;
      }
    };
  }
  var aQ = {
    codeAt: aG(false),
    charAt: aG(true)
  }.charAt;
  function aK(e, t, r) {
    return t + (r ? aQ(e, t).length : 1);
  }
  function aY(e, t) {
    var r = e.exec;
    if (typeof r == "function") {
      var n = r.call(e, t);
      if (typeof n != "object") {
        throw TypeError("RegExp exec method returned something other than an Object or null");
      }
      return n;
    }
    if (r3(e) !== "RegExp") {
      throw TypeError("RegExp#exec called on incompatible receiver");
    }
    return aW.call(e, t);
  }
  aq("match", 1, function (e, t, r) {
    return [function (t) {
      var r = r5(this);
      var n = t == null ? undefined : t[e];
      if (n !== undefined) {
        return n.call(t, r);
      } else {
        return new RegExp(t)[e](String(r));
      }
    }, function (e) {
      var n = r(t, e, this);
      if (n.done) {
        return n.value;
      }
      var i = nl(e);
      var a = String(this);
      if (!i.global) {
        return aY(i, a);
      }
      var o = i.unicode;
      i.lastIndex = 0;
      var s;
      var l = [];
      var c = 0;
      while ((s = aY(i, a)) !== null) {
        var d = String(s[0]);
        l[c] = d;
        if (d === "") {
          i.lastIndex = aK(a, ia(i.lastIndex), o);
        }
        c++;
      }
      if (c === 0) {
        return null;
      } else {
        return l;
      }
    }];
  });
  var a0 = [].slice;
  var a1 = {};
  function a2(e, t, r) {
    if (!(t in a1)) {
      var n = [];
      var i = 0;
      for (; i < t; i++) {
        n[i] = "a[" + i + "]";
      }
      a1[t] = Function("C,a", "return new C(" + n.join(",") + ")");
    }
    return a1[t](e, r);
  }
  iS({
    target: "Function",
    proto: true
  }, {
    bind: Function.bind || function (e) {
      var t = iE(this);
      var r = a0.call(arguments, 1);
      function n() {
        var i = r.concat(a0.call(arguments));
        if (this instanceof n) {
          return a2(t, i.length, i);
        } else {
          return t.apply(e, i);
        }
      }
      if (r7(t.prototype)) {
        n.prototype = t.prototype;
      }
      return n;
    }
  });
  iS({
    target: "Object",
    stat: true,
    forced: !rQ,
    sham: !rQ
  }, {
    defineProperties: ae
  });
  var a3 = !rG(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var a4 = rJ(function (e) {
    var t = nd.f;
    var r = nV("meta");
    var n = 0;
    var i = Object.isExtensible || function () {
      return true;
    };
    function a(e) {
      t(e, r, {
        value: {
          objectID: "O" + ++n,
          weakData: {}
        }
      });
    }
    var o = e.exports = {
      REQUIRED: false,
      fastKey: function (e, t) {
        if (!r7(e)) {
          if (typeof e == "symbol") {
            return e;
          } else {
            return (typeof e == "string" ? "S" : "P") + e;
          }
        }
        if (!nt(e, r)) {
          if (!i(e)) {
            return "F";
          }
          if (!t) {
            return "E";
          }
          a(e);
        }
        return e[r].objectID;
      },
      getWeakData: function (e, t) {
        if (!nt(e, r)) {
          if (!i(e)) {
            return true;
          }
          if (!t) {
            return false;
          }
          a(e);
        }
        return e[r].weakData;
      },
      onFreeze: function (e) {
        if (a3 && o.REQUIRED && i(e) && !nt(e, r)) {
          a(e);
        }
        return e;
      }
    };
    nq[r] = true;
  });
  a4.REQUIRED;
  a4.fastKey;
  a4.getWeakData;
  a4.onFreeze;
  var a6 = a4.onFreeze;
  var a5 = Object.freeze;
  iS({
    target: "Object",
    stat: true,
    forced: rG(function () {
      a5(1);
    }),
    sham: !a3
  }, {
    freeze: function (e) {
      if (a5 && r7(e)) {
        return a5(a6(e));
      } else {
        return e;
      }
    }
  });
  var a9 = id.indexOf;
  var a7 = [].indexOf;
  var a8 = !!a7 && 1 / [1].indexOf(1, -0) < 0;
  var oe = aw("indexOf");
  iS({
    target: "Array",
    proto: true,
    forced: a8 || !oe
  }, {
    indexOf: function (e) {
      if (a8) {
        return a7.apply(this, arguments) || 0;
      } else {
        return a9(this, e, arguments.length > 1 ? arguments[1] : undefined);
      }
    }
  });
  var ot = rG(function () {
    ns(1);
  });
  iS({
    target: "Object",
    stat: true,
    forced: !rQ || ot,
    sham: !rQ
  }, {
    getOwnPropertyDescriptor: function (e, t) {
      return ns(r9(e), t);
    }
  });
  iS({
    target: "Object",
    stat: true,
    forced: !rQ,
    sham: !rQ
  }, {
    defineProperty: nd.f
  });
  function or(e, t) {
    return (or = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) {
        if (t.hasOwnProperty(r)) {
          e[r] = t[r];
        }
      }
    })(e, t);
  }
  function on(e, t) {
    function r() {
      this.constructor = e;
    }
    or(e, t);
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  }
  function oi() {
    return (oi = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var i in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  (oZ = oL ||= {})[oZ.Failure = 0] = "Failure";
  oZ[oZ.Success = 1] = "Success";
  oZ[oZ.Unauthorized = -1] = "Unauthorized";
  oZ[oZ.NotExist = -2] = "NotExist";
  var oa = typeof __PIA_WORKER__ == "undefined" ? 1023 : 102300000;
  var oo = function () {
    function e(e) {
      this.version = e.version || "2.1.1";
      this.nativeMethodInvoker = e.nativeMethodInvoker;
      this.nativeEventListener = e.nativeEventListener;
      this.scheme = e.scheme || "nativeapp://";
      this.dispatchMessagePath = e.dispatchMessagePath || "dispatch_message/";
      this.setResultPath = e.setResultPath || "private/setresult/SCENE_FETCHQUEUE";
      this.dispatchMessageIFrameId = e.dispatchMessageIFrameId || "__JSBridgeIframe__";
      this.setResultIFrameId = e.setResultIFrameId || "__JSBridgeIframe_SetResult__";
      this.listenNativeEvent = e.listenNativeEvent === true;
      this.callbackId = oa;
      this.callbackMap = {};
      this.eventMap = {};
      this.javascriptMessageQueue = [];
      this.callbackProcessor = e.callbackProcessor;
    }
    e.prototype.setAppID = function (e) {
      this.appID = e;
    };
    e.prototype.call = function (e, t, r, n = this.version) {
      var i;
      var a = this.version;
      var o = this.appID;
      if (!!e && typeof e == "string") {
        if (typeof t != "object") {
          t = {};
        }
        if (typeof n == "string") {
          a = n || this.version;
        } else if (typeof n == "object") {
          i = n.namespace;
          a = n.sdkVersion || this.version;
          o = n.appID || this.appID;
        }
        var s = {
          func: e,
          params: t,
          JSSDK: a,
          __msg_type: "call",
          namespace: i,
          appID: o
        };
        if (typeof r == "function" || r === undefined) {
          var l = this.registerCallback(e, r);
          s.__callback_id = l;
        }
        if (typeof __PIA_WORKER__ == "undefined" && window.parent !== window) {
          s.__iframe_url = window.location.href;
        }
        this.sendMessageToNative(s);
      }
    };
    e.prototype.on = function (e, t, r = false) {
      if (!!e && typeof e == "string" && typeof t == "function") {
        var n = this.registerCallback(e, t);
        this.eventMap[e] = this.eventMap[e] || {};
        this.eventMap[e][n] = {
          once: r
        };
        if (this.listenNativeEvent) {
          if (this.nativeEventListener) {
            this.nativeEventListener(e);
          } else {
            this.call("addEventListener", {
              name: e
            }, null, {
              sdkVersion: 1
            });
          }
        }
        return n;
      }
    };
    e.prototype.once = function (e, t) {
      return this.on(e, t, true);
    };
    e.prototype.off = function (e, t) {
      if (!e || typeof e != "string") {
        return true;
      }
      var r = this.eventMap[e];
      if (r && typeof r == "object" && r.hasOwnProperty(t)) {
        this.deregisterCallback(t);
        delete r[t];
      }
      return true;
    };
    e.prototype.trigger = function (e, t) {
      return this.handleMessageFromNative({
        __msg_type: "event",
        __params: t,
        __event_id: e
      });
    };
    e.prototype.handleMessageFromNative = function (e) {
      var t = this;
      var r = String(e.__callback_id);
      if (this.callbackProcessor && typeof this.callbackProcessor == "function") {
        var n = (this.callbackMap && this.callbackMap[r] || {}).method;
        this.callbackProcessor(e, n);
      }
      var i = e.__params;
      var a = String(e.__event_id || "");
      var o = e.__msg_type;
      if (this.callbackMap[r]) {
        o = "callback";
      } else if (this.eventMap[r]) {
        o = "event";
        a = a || r;
      }
      var s = {
        __err_code: "cb404"
      };
      switch (o) {
        case "callback":
          var l = (this.callbackMap && this.callbackMap[r] || {}).callback;
          if (typeof l == "function") {
            s = l(i);
          }
          this.deregisterCallback(r);
          break;
        case "event":
          var c = this.eventMap[a];
          if (c && typeof c == "object") {
            Object.keys(c).forEach(function (e) {
              var r = (t.callbackMap && t.callbackMap[e] || {}).callback;
              var n = c[e];
              if (typeof r == "function") {
                s = r(i);
              }
              if (n && n.once) {
                t.deregisterCallback(e);
                delete c[e];
              }
            });
          }
      }
      return s;
    };
    e.prototype.fetchJavaScriptMessageQueue = function () {
      var e = JSON.stringify(this.javascriptMessageQueue);
      var t = btoa(unescape(encodeURIComponent(e)));
      if (this.setResultIFrame && this.javascriptMessageQueue.length > 0) {
        this.setResultIFrame.src = "" + this.scheme + this.setResultPath + "&" + t;
      }
      this.javascriptMessageQueue.splice(0, this.javascriptMessageQueue.length);
      return e;
    };
    e.prototype.sendMessageToNative = function (e) {
      if (String(e.JSSDK) !== "1" && this.nativeMethodInvoker) {
        var t = this.nativeMethodInvoker(e);
        if (t) {
          var r = JSON.parse(t);
          this.handleMessageFromNative(r);
        }
      } else {
        this.javascriptMessageQueue.push(e);
        if (!this.dispatchMessageIFrame) {
          this.tryCreateIFrames();
        }
        this.dispatchMessageIFrame.src = "" + this.scheme + this.dispatchMessagePath;
      }
    };
    e.prototype.registerCallback = function (e, t) {
      var r = String(this.callbackId++);
      this.callbackMap[r] = {
        method: e,
        callback: t
      };
      return r;
    };
    e.prototype.deregisterCallback = function (e) {
      delete this.callbackMap[e];
    };
    e.prototype.tryCreateIFrames = function () {
      this.dispatchMessageIFrame = this.createIFrame(this.dispatchMessageIFrameId);
      this.setResultIFrame = this.createIFrame(this.setResultIFrameId);
    };
    e.prototype.createIFrame = function (e) {
      var t = document.getElementById(e);
      if (!t || t.tagName !== "IFRAME") {
        (t = document.createElement("iframe")).style.display = "none";
        t.id = e;
        document.documentElement.appendChild(t);
      }
      return t;
    };
    return e;
  }();
  var os = "2.3.0";
  var ol = typeof __PIA_WORKER__ != "undefined" ? Function("return this")() : typeof window != "undefined" ? window : {};
  var oc = ol !== undefined && ol.navigator ? ol.navigator.userAgent : "";
  var od = (!!oc.match(/(newsarticle|videoarticle|lv|faceu|ulike|beauty_me_|faceu-os|ulike-os|beauty_me_oversea_|retouch)\/([\d.]+)/i) || /super|automobile/gi.test(oc)) && !/webcast/gi.test(oc) && !/luckycatversion/gi.test(oc);
  var ou = !!oc.match(/(faceu)\/([\d.]+)/i) || /gsdk/gi.test(oc) || /PIANativeWorker/gi.test(oc);
  var oh = !!oc.match(/ttad\/0/i);
  var op = !!oc.match(/aweme|trill|musical_ly|phoenix_\d+|TikTokNow_\d+|alligatortiktok/i);
  var of = !!oc.match(/live_stream/i);
  var om = !!oc.match(/Webcast/i);
  var og = !!oc.match(/super/i);
  var ov = !!oc.match(/life_service_merchant/i);
  var o_ = /super/gi.test(oc);
  function oy() {
    if (od) {
      var e;
      if (ol.JSBridge && ol.JSBridge.on) {
        e = ol.JSBridge.on;
      } else if (ol.JS2NativeBridge && ol.JS2NativeBridge.on) {
        e = function (e) {
          ol.JS2NativeBridge.on(e, JSON.stringify({
            JSSDK: os,
            __msg_type: "event",
            __callback_id: e,
            func: e
          }));
        };
      } else if (ol.webkit && ol.webkit.messageHandlers && ol.webkit.messageHandlers.onMethodParams) {
        e = function (e) {
          ol.webkit.messageHandlers.onMethodParams.postMessage({
            JSSDK: os,
            __msg_type: "event",
            __callback_id: e,
            func: e
          });
        };
      } else if (ol.onMethodParams) {
        e = function (e) {
          return ol.onMethodParams(e, {
            JSSDK: os,
            __msg_type: "event",
            __callback_id: e,
            func: e
          });
        };
      }
      return e;
    }
  }
  function ob(e, t) {
    if ((typeof t != "string" || /^(x|tc)\./.test(t) !== true) && (op || of || om || ov)) {
      var r = e.__params;
      if (ol.JS2NativeBridge && ol.JS2NativeBridge._invokeMethod) {
        e.__params = oi({
          code: r.code
        }, r.data);
      }
    }
  }
  var ow = function (e) {
    function t() {
      var t = e.call(this, {
        version: os,
        scheme: "bytedance://",
        listenNativeEvent: true,
        dispatchMessageIFrameId: "__JSBridgeIframe_1.0__",
        setResultIFrameId: "__JSBridgeIframe_SetResult_1.0__",
        nativeEventListener: oy(),
        callbackProcessor: ob
      }) || this;
      t.publicApi = {
        call: t.call.bind(t),
        on: t.on.bind(t),
        once: t.once.bind(t),
        off: t.off.bind(t),
        trigger: t.trigger.bind(t),
        setAppID: t.setAppID.bind(t),
        _fetchQueue: t.fetchJavaScriptMessageQueue.bind(t),
        _handleMessageFromToutiao: t.handleMessageFromNative.bind(t)
      };
      return t;
    }
    on(t, e);
    t.prototype.exposePublicApiToGlobal = function () {
      ol.ToutiaoJSBridge = Object.assign(ol.ToutiaoJSBridge || {}, this.publicApi);
    };
    return t;
  }(oo);
  var ox = function (e) {
    function t(t) {
      var r;
      var n = e.call(this, {
        version: os,
        nativeMethodInvoker: (ol.JS2NativeBridge && ol.JS2NativeBridge._invokeMethod ? r = function (e) {
          return ol.JS2NativeBridge._invokeMethod(JSON.stringify(e));
        } : ol.ToutiaoJSBridge && ol.ToutiaoJSBridge.invokeMethod ? r = function (e) {
          return ol.ToutiaoJSBridge.invokeMethod(JSON.stringify(e));
        } : ol.JS2NativeBridge && ol.JS2NativeBridge.call ? r = function (e) {
          return ol.JS2NativeBridge.call(e.func, JSON.stringify(e));
        } : ol.webkit && ol.webkit.messageHandlers && ol.webkit.messageHandlers.callMethodParams ? r = function (e) {
          ol.webkit.messageHandlers.callMethodParams.postMessage(e);
        } : ol.callMethodParams && (r = function (e) {
          return ol.callMethodParams(e.func, e);
        }), r),
        nativeEventListener: oy(),
        scheme: og ? "bds://" : o_ ? "bytedance://" : od || ol.JSBridge && ol.JSBridge._invokeMethod ? "nativeapp://" : "bytedance://",
        listenNativeEvent: od,
        callbackProcessor: ob
      }) || this;
      n.toutiaoLegacyJSB = t;
      n.publicApi = {
        call: n.call.bind(n),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        trigger: n.trigger.bind(n),
        setAppID: n.setAppID.bind(n),
        _fetchQueue: n.fetchJavaScriptMessageQueue.bind(n),
        _handleMessageFromApp: n.handleMessageFromNative.bind(n),
        _handleMessageFromToutiao: n.handleMessageFromNative.bind(n)
      };
      return n;
    }
    on(t, e);
    t.prototype.call = function (t, r, n, i = os) {
      if (this.isLegacyCall(t)) {
        this.toutiaoLegacyJSB.call(t, r, n, i);
      } else {
        e.prototype.call.call(this, t, r, n, i);
      }
    };
    t.prototype.on = function (t, r, n = false, i) {
      if ((i || {}).useLegacy || this.isLegacyCall(t)) {
        return this.toutiaoLegacyJSB.on(t, r, n);
      } else {
        return e.prototype.on.call(this, t, r, n);
      }
    };
    t.prototype.once = function (t, r) {
      if (this.isLegacyCall(t)) {
        return this.toutiaoLegacyJSB.once(t, r);
      } else {
        return e.prototype.once.call(this, t, r);
      }
    };
    t.prototype.off = function (t, r) {
      if (this.isLegacyCall(t)) {
        return this.toutiaoLegacyJSB.off(t, r);
      } else {
        return e.prototype.off.call(this, t, r);
      }
    };
    t.prototype.trigger = function (t, r) {
      if (this.isLegacyCall(t)) {
        return this.toutiaoLegacyJSB.trigger(t, r);
      } else {
        return e.prototype.trigger.call(this, t, r);
      }
    };
    t.prototype.setAppID = function (t) {
      if (this.toutiaoLegacyJSB) {
        this.toutiaoLegacyJSB.setAppID(t);
      }
      e.prototype.setAppID.call(this, t);
    };
    t.prototype.exposePublicApiToGlobal = function () {
      var e = this;
      ol.JSBridge = Object.assign(ol.JSBridge || {}, this.publicApi);
      if (!ol.__DISABLE_JSB_PROTOCAL2__) {
        ol.Native2JSBridge = Object.assign(ol.Native2JSBridge || {}, this.publicApi);
      }
      if (o_) {
        ol.ToutiaoJSBridge = Object.assign(ol.ToutiaoJSBridge || {}, this.publicApi);
      } else if ((od || oh) && this.toutiaoLegacyJSB) {
        this.toutiaoLegacyJSB.exposePublicApiToGlobal();
      } else {
        ol.ToutiaoJSBridge = Object.assign(ol.ToutiaoJSBridge || {}, this.publicApi);
      }
      if (ol.parent !== ol && ol.addEventListener) {
        ol.addEventListener("message", function (t) {
          if (t && t.data && t.data.__callback_id) {
            e.handleMessageFromNative(t.data);
          }
        }, false);
      }
      Object.defineProperties(ol, {
        JSBridge: {
          writable: false
        },
        Native2JSBridge: {
          writable: false
        },
        ToutiaoJSBridge: {
          writable: false
        }
      });
      Object.freeze(ol.JSBridge);
      Object.freeze(ol.Native2JSBridge);
      Object.freeze(ol.ToutiaoJSBridge);
    };
    t.prototype.isLegacyCall = function (e) {
      return !!e && typeof e == "string" && !!this.toutiaoLegacyJSB && (!!oh || !ou && !o_ && od && e.indexOf(".") < 0);
    };
    return t;
  }(oo);
  function ok(e, t) {
    if (e == null) {
      throw TypeError("Cannot convert first argument to object");
    }
    var r = Object(e);
    var n = 1;
    for (; n < arguments.length; n++) {
      var i = arguments[n];
      if (i != null) {
        var a = Object.keys(Object(i));
        var o = 0;
        var s = a.length;
        for (; o < s; o++) {
          var l = a[o];
          var c = Object.getOwnPropertyDescriptor(i, l);
          if (c !== undefined && c.enumerable) {
            r[l] = i[l];
          }
        }
      }
    }
    return r;
  }
  ({
    assign: ok,
    polyfill: function () {
      if (!Object.assign) {
        Object.defineProperty(Object, "assign", {
          enumerable: false,
          configurable: true,
          writable: true,
          value: ok
        });
      }
    }
  }).polyfill();
  var oC = new ox(new ow());
  try {
    oC.exposePublicApiToGlobal();
  } catch (e) {}
  function oj(e, t) {}
  function oS(e, t) {
    return e;
  }
  var oE = rJ(function (e) {
    function t(r, n) {
      e.exports = t = Object.setPrototypeOf || function (e, t) {
        e.__proto__ = t;
        return e;
      };
      e.exports.default = e.exports;
      e.exports.__esModule = true;
      return t(r, n);
    }
    e.exports = t;
    e.exports.default = e.exports;
    e.exports.__esModule = true;
  });
  rV(oE);
  var oR = rV(rJ(function (e) {
    e.exports = function (e, t) {
      e.prototype = Object.create(t.prototype);
      e.prototype.constructor = e;
      oE(e, t);
    };
    e.exports.default = e.exports;
    e.exports.__esModule = true;
  }));
  if (!iq) {
    n9(Object.prototype, "toString", iq ? {}.toString : function () {
      return "[object " + iY(this) + "]";
    }, {
      unsafe: true
    });
  }
  var oN = rq.Promise;
  var oT = nd.f;
  var oP = iW("toStringTag");
  var oI = iW("species");
  function o$(e, t, r) {
    if (!(e instanceof t)) {
      throw TypeError("Incorrect " + r + " invocation");
    }
    return e;
  }
  var oA = iW("iterator");
  var oO = false;
  try {
    var oF = 0;
    var oM = {
      next: function () {
        return {
          done: !!oF++
        };
      },
      return: function () {
        oO = true;
      }
    };
    oM[oA] = function () {
      return this;
    };
    Array.from(oM, function () {
      throw 2;
    });
  } catch (e) {}
  var oD;
  var oB;
  var oL;
  var oZ;
  var oW;
  var oU;
  var oH;
  var oz = iW("species");
  function oV(e, t) {
    var r;
    var n = nl(e).constructor;
    if (n === undefined || (r = nl(n)[oz]) == null) {
      return t;
    } else {
      return iE(r);
    }
  }
  var oJ = /(?:iphone|ipod|ipad).*applewebkit/i.test(iI);
  var oX = rq.location;
  var oq = rq.setImmediate;
  var oG = rq.clearImmediate;
  var oQ = rq.process;
  var oK = rq.MessageChannel;
  var oY = rq.Dispatch;
  var o0 = 0;
  var o1 = {};
  var o2 = "onreadystatechange";
  function o3(e) {
    if (o1.hasOwnProperty(e)) {
      var t = o1[e];
      delete o1[e];
      t();
    }
  }
  function o4(e) {
    return function () {
      o3(e);
    };
  }
  function o6(e) {
    o3(e.data);
  }
  function o5(e) {
    rq.postMessage(e + "", oX.protocol + "//" + oX.host);
  }
  if (!oq || !oG) {
    oq = function (e) {
      var t = [];
      var r = 1;
      while (arguments.length > r) {
        t.push(arguments[r++]);
      }
      o1[++o0] = function () {
        (typeof e == "function" ? e : Function(e)).apply(undefined, t);
      };
      oW(o0);
      return o0;
    };
    oG = function (e) {
      delete o1[e];
    };
    if (iP) {
      oW = function (e) {
        oQ.nextTick(o4(e));
      };
    } else if (oY && oY.now) {
      oW = function (e) {
        oY.now(o4(e));
      };
    } else if (oK && !oJ) {
      oH = (oU = new oK()).port2;
      oU.port1.onmessage = o6;
      oW = iV(oH.postMessage, oH, 1);
    } else if (rq.addEventListener && typeof postMessage == "function" && !rq.importScripts && oX && oX.protocol !== "file:" && !rG(o5)) {
      oW = o5;
      rq.addEventListener("message", o6, false);
    } else {
      oW = o2 in ni("script") ? function (e) {
        at.appendChild(ni("script"))[o2] = function () {
          at.removeChild(this);
          o3(e);
        };
      } : function (e) {
        setTimeout(o4(e), 0);
      };
    }
  }
  var o9;
  var o7;
  var o8;
  var se;
  var st;
  var sr;
  var sn;
  var si;
  var sa = oq;
  var so = /web0s(?!.*chrome)/i.test(iI);
  var ss = rq.MutationObserver || rq.WebKitMutationObserver;
  var sl = rq.document;
  var sc = rq.process;
  var sd = rq.Promise;
  var su = ns(rq, "queueMicrotask");
  var sh = su && su.value;
  if (!sh) {
    o9 = function () {
      var e;
      var t;
      for (iP && (e = sc.domain) && e.exit(); o7;) {
        t = o7.fn;
        o7 = o7.next;
        try {
          t();
        } catch (e) {
          if (o7) {
            se();
          } else {
            o8 = undefined;
          }
          throw e;
        }
      }
      o8 = undefined;
      if (e) {
        e.enter();
      }
    };
    if (oJ || iP || so || !ss || !sl) {
      if (sd && sd.resolve) {
        si = (sn = sd.resolve(undefined)).then;
        se = function () {
          si.call(sn, o9);
        };
      } else {
        se = iP ? function () {
          sc.nextTick(o9);
        } : function () {
          sa.call(rq, o9);
        };
      }
    } else {
      st = true;
      sr = sl.createTextNode("");
      new ss(o9).observe(sr, {
        characterData: true
      });
      se = function () {
        sr.data = st = !st;
      };
    }
  }
  var sp;
  var sf;
  var sm;
  var sg;
  var sv;
  var s_ = sh || function (e) {
    var t = {
      fn: e,
      next: undefined
    };
    if (o8) {
      o8.next = t;
    }
    if (!o7) {
      o7 = t;
      se();
    }
    o8 = t;
  };
  function sy(e, t) {
    nl(e);
    if (r7(t) && t.constructor === e) {
      return t;
    }
    var r = iN.f(e);
    r.resolve(t);
    return r.promise;
  }
  function sb(e, t) {
    var r = rq.console;
    if (r && r.error) {
      if (arguments.length == 1) {
        r.error(e);
      } else {
        r.error(e, t);
      }
    }
  }
  var sw = iW("species");
  var sx = "Promise";
  sp = sx;
  function sk(e) {
    var t;
    if (!r7(e) || (t = nD(e)).type !== sp) {
      throw TypeError("Incompatible receiver, " + sp + " required");
    }
    return t;
  }
  var sC = oN;
  var sj = rq.TypeError;
  var sS = rq.document;
  var sE = rq.process;
  var sR = n8("fetch");
  var sN = iN.f;
  var sT = sN;
  var sP = !!sS && !!sS.createEvent && !!rq.dispatchEvent;
  var sI = typeof PromiseRejectionEvent == "function";
  var s$ = "unhandledrejection";
  var sA = iw(sx, function () {
    if (nL(sC) === String(sC) && (iF === 66 || !iP && !sI)) {
      return true;
    }
    if (iF >= 51 && /native code/.test(sC)) {
      return false;
    }
    var e = sC.resolve(1);
    function t(e) {
      e(function () {}, function () {});
    }
    (e.constructor = {})[sw] = t;
    return !(e.then(function () {}) instanceof t);
  });
  var sO = sA || !function (e, t) {
    if (!oO) {
      return false;
    }
    var r = false;
    try {
      var n = {
        [oA]: function () {
          return {
            next: function () {
              return {
                done: r = true
              };
            }
          };
        }
      };
      e(n);
    } catch (e) {}
    return r;
  }(function (e) {
    sC.all(e).catch(function () {});
  });
  function sF(e) {
    var t;
    return !!r7(e) && typeof (t = e.then) == "function" && t;
  }
  function sM(e, t) {
    if (!e.notified) {
      e.notified = true;
      var r = e.reactions;
      s_(function () {
        var n = e.value;
        var i = e.state == 1;
        var a = 0;
        while (r.length > a) {
          var o;
          var s;
          var l;
          var c = r[a++];
          var d = i ? c.ok : c.fail;
          var u = c.resolve;
          var h = c.reject;
          var p = c.domain;
          try {
            if (d) {
              if (!i) {
                if (e.rejection === 2) {
                  sZ(e);
                }
                e.rejection = 1;
              }
              if (d === true) {
                o = n;
              } else {
                if (p) {
                  p.enter();
                }
                o = d(n);
                if (p) {
                  p.exit();
                  l = true;
                }
              }
              if (o === c.promise) {
                h(sj("Promise-chain cycle"));
              } else if (s = sF(o)) {
                s.call(o, u, h);
              } else {
                u(o);
              }
            } else {
              h(n);
            }
          } catch (e) {
            if (p && !l) {
              p.exit();
            }
            h(e);
          }
        }
        e.reactions = [];
        e.notified = false;
        if (t && !e.rejection) {
          sB(e);
        }
      });
    }
  }
  function sD(e, t, r) {
    var n;
    var i;
    if (sP) {
      (n = sS.createEvent("Event")).promise = t;
      n.reason = r;
      n.initEvent(e, false, true);
      rq.dispatchEvent(n);
    } else {
      n = {
        promise: t,
        reason: r
      };
    }
    if (!sI && (i = rq["on" + e])) {
      i(n);
    } else if (e === s$) {
      sb("Unhandled promise rejection", r);
    }
  }
  function sB(e) {
    sa.call(rq, function () {
      var t;
      var r = e.facade;
      var n = e.value;
      if (sL(e) && (t = iT(function () {
        if (iP) {
          sE.emit("unhandledRejection", n, r);
        } else {
          sD(s$, r, n);
        }
      }), e.rejection = iP || sL(e) ? 2 : 1, t.error)) {
        throw t.value;
      }
    });
  }
  function sL(e) {
    return e.rejection !== 1 && !e.parent;
  }
  function sZ(e) {
    sa.call(rq, function () {
      var t = e.facade;
      if (iP) {
        sE.emit("rejectionHandled", t);
      } else {
        sD("rejectionhandled", t, e.value);
      }
    });
  }
  function sW(e, t, r) {
    return function (n) {
      e(t, n, r);
    };
  }
  function sU(e, t, r) {
    if (!e.done) {
      e.done = true;
      if (r) {
        e = r;
      }
      e.value = t;
      e.state = 2;
      sM(e, true);
    }
  }
  function sH(e, t, r) {
    if (!e.done) {
      e.done = true;
      if (r) {
        e = r;
      }
      try {
        if (e.facade === t) {
          throw sj("Promise can't be resolved itself");
        }
        var n = sF(t);
        if (n) {
          s_(function () {
            var r = {
              done: false
            };
            try {
              n.call(t, sW(sH, r, e), sW(sU, r, e));
            } catch (t) {
              sU(r, t, e);
            }
          });
        } else {
          e.value = t;
          e.state = 1;
          sM(e, false);
        }
      } catch (t) {
        sU({
          done: false
        }, t, e);
      }
    }
  }
  if (sA) {
    sC = function (e) {
      o$(this, sC, sx);
      iE(e);
      sf.call(this);
      var t = n5(this);
      try {
        e(sW(sH, t), sW(sU, t));
      } catch (e) {
        sU(t, e);
      }
    };
    (sf = function (e) {
      n6(this, {
        type: sx,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: 0,
        value: undefined
      });
    }).prototype = function (e, t, r) {
      for (var n in t) {
        n9(e, n, t[n], undefined);
      }
      return e;
    }(sC.prototype, {
      then: function (e, t) {
        var r = sk(this);
        var n = sN(oV(this, sC));
        n.ok = typeof e != "function" || e;
        n.fail = typeof t == "function" && t;
        n.domain = iP ? sE.domain : undefined;
        r.parent = true;
        r.reactions.push(n);
        if (r.state != 0) {
          sM(r, false);
        }
        return n.promise;
      },
      catch: function (e) {
        return this.then(undefined, e);
      }
    });
    sm = function () {
      var e = new sf();
      var t = n5(e);
      this.promise = e;
      this.resolve = sW(sH, t);
      this.reject = sW(sU, t);
    };
    iN.f = sN = function (e) {
      if (e === sC || e === sg) {
        return new sm(e);
      } else {
        return sT(e);
      }
    };
    if (typeof oN == "function") {
      sv = oN.prototype.then;
      n9(oN.prototype, "then", function (e, t) {
        var r = this;
        return new sC(function (e, t) {
          sv.call(r, e, t);
        }).then(e, t);
      }, {
        unsafe: true
      });
      if (typeof sR == "function") {
        iS({
          global: true,
          enumerable: true,
          forced: true
        }, {
          fetch: function (e) {
            return sy(sC, sR.apply(rq, arguments));
          }
        });
      }
    }
  }
  iS({
    global: true,
    wrap: true,
    forced: sA
  }, {
    Promise: sC
  });
  if ((lx = sC) && !nt(lx = lx.prototype, oP)) {
    oT(lx, oP, {
      configurable: true,
      value: sx
    });
  }
  lk = n8(sx);
  lC = nd.f;
  if (rQ && lk && !lk[oI]) {
    lC(lk, oI, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
  sg = n8(sx);
  iS({
    target: sx,
    stat: true,
    forced: sA
  }, {
    reject: function (e) {
      var t = sN(this);
      t.reject.call(undefined, e);
      return t.promise;
    }
  });
  iS({
    target: sx,
    stat: true,
    forced: sA
  }, {
    resolve: function (e) {
      return sy(this, e);
    }
  });
  iS({
    target: sx,
    stat: true,
    forced: sO
  }, {
    all: function (e) {
      var t = this;
      var r = sN(t);
      var n = r.resolve;
      var i = r.reject;
      var a = iT(function () {
        var r = iE(t.resolve);
        var a = [];
        var o = 0;
        var s = 1;
        i4(e, function (e) {
          var l = o++;
          var c = false;
          a.push(undefined);
          s++;
          r.call(t, e).then(function (e) {
            if (!c) {
              c = true;
              a[l] = e;
              if (! --s) {
                n(a);
              }
            }
          }, i);
        });
        if (! --s) {
          n(a);
        }
      });
      if (a.error) {
        i(a.value);
      }
      return r.promise;
    },
    race: function (e) {
      var t = this;
      var r = sN(t);
      var n = r.reject;
      var i = iT(function () {
        var i = iE(t.resolve);
        i4(e, function (e) {
          i.call(t, e).then(r.resolve, n);
        });
      });
      if (i.error) {
        n(i.value);
      }
      return r.promise;
    }
  });
  iS({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!oN && rG(function () {
      oN.prototype.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (e) {
      var t = oV(this, n8("Promise"));
      var r = typeof e == "function";
      return this.then(r ? function (r) {
        return sy(t, e()).then(function () {
          return r;
        });
      } : e, r ? function (r) {
        return sy(t, e()).then(function () {
          throw r;
        });
      } : e);
    }
  });
  if (typeof oN == "function" && !oN.prototype.finally) {
    n9(oN.prototype, "finally", n8("Promise").prototype.finally);
  }
  var sz = iW("unscopables");
  var sV = Array.prototype;
  if (sV[sz] == null) {
    nd.f(sV, sz, {
      configurable: true,
      value: ad(null)
    });
  }
  var sJ = ab.find;
  var sX = "find";
  var sq = true;
  if (sX in []) {
    [,][sX](function () {
      sq = false;
    });
  }
  iS({
    target: "Array",
    proto: true,
    forced: sq
  }, {
    find: function (e) {
      return sJ(this, e, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  sV[sz][sX] = true;
  var sG = [];
  var sQ = sG.sort;
  var sK = rG(function () {
    sG.sort(undefined);
  });
  var sY = rG(function () {
    sG.sort(null);
  });
  var s0 = aw("sort");
  iS({
    target: "Array",
    proto: true,
    forced: sK || !sY || !s0
  }, {
    sort: function (e) {
      if (e === undefined) {
        return sQ.call(au(this));
      } else {
        return sQ.call(au(this), iE(e));
      }
    }
  });
  var s1 = ab.map;
  iS({
    target: "Array",
    proto: true,
    forced: !aT("map")
  }, {
    map: function (e) {
      return s1(this, e, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var s2 = Date.prototype;
  var s3 = "Invalid Date";
  var s4 = "toString";
  var s6 = s2[s4];
  var s5 = s2.getTime;
  if (new Date(NaN) + "" != s3) {
    n9(s2, s4, function () {
      var e = s5.call(this);
      if (e == e) {
        return s6.call(this);
      } else {
        return s3;
      }
    });
  }
  var s9 = {
    info: function (e) {},
    warn: function (e) {},
    log: function (e) {}
  };
  var s7 = "toString";
  var s8 = RegExp.prototype;
  var le = s8[s7];
  var lt = rG(function () {
    return le.call({
      source: "a",
      flags: "b"
    }) != "/a/b";
  });
  var lr = le.name != s7;
  if (lt || lr) {
    n9(RegExp.prototype, s7, function () {
      var e = nl(this);
      var t = String(e.source);
      var r = e.flags;
      return "/" + t + "/" + String(r === undefined && e instanceof RegExp && !("flags" in s8) ? aA.call(e) : r);
    }, {
      unsafe: true
    });
  }
  var ln = iW("match");
  function li(e) {
    var t;
    return r7(e) && ((t = e[ln]) !== undefined ? !!t : r3(e) == "RegExp");
  }
  var la = aO.UNSUPPORTED_Y;
  var lo = [].push;
  var ls = Math.min;
  aq("split", 2, function (e, t, r) {
    var n;
    n = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, r) {
      var n = String(r5(this));
      var i = r === undefined ? 4294967295 : r >>> 0;
      if (i === 0) {
        return [];
      }
      if (e === undefined) {
        return [n];
      }
      if (!li(e)) {
        return t.call(n, e, i);
      }
      var a;
      var o;
      var s;
      var l = [];
      var c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : "");
      var d = 0;
      var u = RegExp(e.source, c + "g");
      while ((a = aW.call(u, n)) && (!((o = u.lastIndex) > d) || !(l.push(n.slice(d, a.index)), a.length > 1 && a.index < n.length && lo.apply(l, a.slice(1)), s = a[0].length, d = o, l.length >= i))) {
        if (u.lastIndex === a.index) {
          u.lastIndex++;
        }
      }
      if (d === n.length) {
        if (s || !u.test("")) {
          l.push("");
        }
      } else {
        l.push(n.slice(d));
      }
      if (l.length > i) {
        return l.slice(0, i);
      } else {
        return l;
      }
    } : "0".split(undefined, 0).length ? function (e, r) {
      if (e === undefined && r === 0) {
        return [];
      } else {
        return t.call(this, e, r);
      }
    } : t;
    return [function (t, r) {
      var i = r5(this);
      var a = t == null ? undefined : t[e];
      if (a !== undefined) {
        return a.call(t, i, r);
      } else {
        return n.call(String(i), t, r);
      }
    }, function (e, i) {
      var a = r(n, e, this, i, n !== t);
      if (a.done) {
        return a.value;
      }
      var o = nl(e);
      var s = String(this);
      var l = oV(o, RegExp);
      var c = o.unicode;
      var d = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (la ? "g" : "y");
      var u = new l(la ? "^(?:" + o.source + ")" : o, d);
      var h = i === undefined ? 4294967295 : i >>> 0;
      if (h === 0) {
        return [];
      }
      if (s.length === 0) {
        if (aY(u, s) === null) {
          return [s];
        } else {
          return [];
        }
      }
      var p = 0;
      var f = 0;
      var m = [];
      while (f < s.length) {
        u.lastIndex = la ? 0 : f;
        var g;
        var v = aY(u, la ? s.slice(f) : s);
        if (v === null || (g = ls(ia(u.lastIndex + (la ? f : 0)), s.length)) === p) {
          f = aK(s, f, c);
        } else {
          m.push(s.slice(p, f));
          if (m.length === h) {
            return m;
          }
          for (var _ = 1; _ <= v.length - 1; _++) {
            m.push(v[_]);
            if (m.length === h) {
              return m;
            }
          }
          f = p = g;
        }
      }
      m.push(s.slice(p));
      return m;
    }];
  }, la);
  function ll(e, t, r) {
    var n;
    var i;
    if (i9 && typeof (n = t.constructor) == "function" && n !== r && r7(i = n.prototype) && i !== r.prototype) {
      i9(e, i);
    }
    return e;
  }
  var lc = `[	
\v\f\r \xa0\u{1680}\u{2000}\u{2001}\u{2002}\u{2003}\u{2004}\u{2005}\u{2006}\u{2007}\u{2008}\u{2009}\u{200A}\u{202F}\u{205F}\u{3000}\u2028\u2029\uFEFF]`;
  var ld = RegExp("^" + lc + lc + "*");
  var lu = RegExp(lc + lc + "*$");
  function lh(e) {
    return function (t) {
      var r = String(r5(t));
      if (e & 1) {
        r = r.replace(ld, "");
      }
      if (e & 2) {
        r = r.replace(lu, "");
      }
      return r;
    };
  }
  var lp = {
    start: lh(1),
    end: lh(2),
    trim: lh(3)
  };
  var lf = ig.f;
  var lm = nd.f;
  var lg = lp.trim;
  var lv = "Number";
  var l_ = rq[lv];
  var ly = l_.prototype;
  var lb = r3(ad(ly)) == lv;
  function lw(e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c = r8(e, false);
    if (typeof c == "string" && c.length > 2) {
      if ((t = (c = lg(c)).charCodeAt(0)) === 43 || t === 45) {
        if ((r = c.charCodeAt(2)) === 88 || r === 120) {
          return NaN;
        }
      } else if (t === 48) {
        switch (c.charCodeAt(1)) {
          case 66:
          case 98:
            n = 2;
            i = 49;
            break;
          case 79:
          case 111:
            n = 8;
            i = 55;
            break;
          default:
            return +c;
        }
        o = (a = c.slice(2)).length;
        s = 0;
        for (; s < o; s++) {
          if ((l = a.charCodeAt(s)) < 48 || l > i) {
            return NaN;
          }
        }
        return parseInt(a, n);
      }
    }
    return +c;
  }
  if (iw(lv, !l_(" 0o1") || !l_("0b1") || l_("+0x1"))) {
    var lx;
    var lk;
    var lC;
    var lj;
    function lS(e) {
      var t = arguments.length < 1 ? 0 : e;
      var r = this;
      if (r instanceof lS && (lb ? rG(function () {
        ly.valueOf.call(r);
      }) : r3(r) != lv)) {
        return ll(new l_(lw(t)), r, lS);
      } else {
        return lw(t);
      }
    }
    var lE = rQ ? lf(l_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(",");
    var lR = 0;
    for (; lE.length > lR; lR++) {
      if (nt(l_, lj = lE[lR]) && !nt(lS, lj)) {
        lm(lS, lj, ns(l_, lj));
      }
    }
    lS.prototype = ly;
    ly.constructor = lS;
    n9(rq, lv, lS);
  }
  var lN = ab.filter;
  iS({
    target: "Array",
    proto: true,
    forced: !aT("filter")
  }, {
    filter: function (e) {
      return lN(this, e, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var lT = ab.some;
  iS({
    target: "Array",
    proto: true,
    forced: !aw("some")
  }, {
    some: function (e) {
      return lT(this, e, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  iS({
    target: "Array",
    stat: true
  }, {
    isArray: am
  });
  var lP = Object.prototype;
  var lI = lP.hasOwnProperty;
  var l$ = lP.toString;
  var lA = {
    hasOwnProp: function (e, t) {
      return !!this.isObject(e) && lI.call(e, t);
    },
    isEmpty: function (e) {
      return e == null || this.getProLen(e) === 0;
    },
    getType: function (e) {
      return l$.call(e).match(/\[object (\w+)\]/)[1];
    },
    getProLen: function (e) {
      var t = 0;
      if (this.isObject(e)) {
        t = Object.keys(e).length;
      }
      return t;
    },
    verCompare: function (e, t) {
      if (e === t) {
        return 0;
      }
      var r = e.toString().split(".");
      var n = t.toString().split(".");
      while (r.length < n.length) {
        r.push("0");
      }
      while (n.length < r.length) {
        n.push("0");
      }
      for (var i = 0; i < r.length;) {
        var a = Number(r[i]);
        var o = Number(n[i]);
        if (o > a) {
          return -1;
        }
        if (o < a) {
          return 1;
        }
        i += 1;
      }
      return 0;
    },
    warn: function (e) {
      s9.warn("[via]: " + e);
    },
    error: function (e) {
      s9.warn("[via]: " + e);
    }
  };
  function lO(e, t) {
    return t === undefined || t === "*" || String(t).split("|").map(function (e) {
      var t = e.split("-");
      var r = "";
      switch (t.length) {
        case 1:
          r = t[0];
          break;
        case 2:
          r = {
            min: t[0],
            max: t[1]
          };
      }
      return r;
    }).filter(function (e) {
      return e;
    }).some(function (t) {
      if (lA.isString(t)) {
        return t === e;
      }
      if (lA.isObject(t)) {
        var r = t.min;
        var n = t.max;
        var i = true;
        if (r) {
          i = i && lA.verCompare(e, r) !== -1;
        }
        if (n) {
          i = i && lA.verCompare(e, n) !== 1;
        }
        return i;
      }
      return false;
    });
  }
  ["Number", "Date", "Object", "String", "Function", "Boolean", "Null", "Undefined", "Array"].forEach(function (e) {
    lA["is" + e] = function (t) {
      return l$.call(t) === "[object " + e + "]";
    };
  });
  var lF = typeof window != "undefined";
  var lM = lF ? window.navigator.userAgent : "";
  var lD = /(Android);?\s+([\d.]+)?/i.test(lM);
  var lB = function () {
    function e(e) {
      this.bridge = e.bridge;
      this.container = e.container || "web";
      this.os = e.os;
      this.isSSR = e.isSSR;
      this.options = {};
      this.context = null;
      this.monitor = e.monitor;
      this.globalPostprocess = e.globalPostprocess;
      this.onInvokeStart = null;
      this.onInvokeEnd = null;
      this.logDisabled = false;
    }
    var t = e.prototype;
    t.on = function (e, t) {
      var r = this;
      if (this.container === "lynx") {
        this.bridge.on = this.bridge.on.bind(this.context);
      }
      var n = this.bridge.on(e, function (e) {
        if (t.length < 2) {
          t(e);
        } else {
          t(null, e);
        }
      });
      return {
        remove: function () {
          return r.bridge.off(e, n);
        }
      };
    };
    t.globalConfig = function (e = {}) {
      var t = e;
      var r = t.env;
      var n = t.context;
      var i = t.monitor;
      var a = t.onInvokeStart;
      var o = t.onInvokeEnd;
      var s = t.disableLog;
      var l = t.options;
      this.logDisabled = !!s;
      var c = {
        container: this.container,
        os: this.os
      };
      if (this.container === "lynx" && n) {
        this.bridge.on = this.bridge.on.bind(n);
        this.bridge.off = this.bridge.off.bind(n);
      }
      if (r) {
        this.env = Object.assign({}, c, r);
      }
      var d = {
        context: n,
        monitor: i,
        onInvokeStart: a,
        onInvokeEnd: o,
        options: l
      };
      for (var u in d) {
        if (d[u] !== undefined) {
          this[u] = d[u];
        }
      }
    };
    return e;
  }();
  var lL = function (e) {
    function t(t) {
      var r;
      (r = e.call(this, t) || this).env = t.env;
      return r;
    }
    oR(t, e);
    var r = t.prototype;
    r.init = function (e) {
      var t = this;
      var r = e.getRuntimeEnv;
      this.getEnv = new Promise(function (e, n) {
        r({
          jsb: t.bridge,
          bridge: t.bridge,
          container: t.container,
          os: t.os
        }, function (r, i) {
          if (r) {
            n(r);
          } else {
            t.env ||= Object.assign({
              container: t.container,
              os: t.os
            }, i);
            e(t.env);
          }
        });
      }).finally(function () {});
    };
    r.getRuleForMethod = function (e, t = []) {
      return t.sort(function (e, t) {
        if (e.type === "sdk") {
          return -1;
        } else {
          return 1;
        }
      }).find(function (t) {
        return function e(t, r, n) {
          if (Array.isArray(r)) {
            return r.some(function (r) {
              return e(t, r, n);
            });
          }
          var i;
          var a;
          var o;
          var s;
          var l;
          var c;
          var d;
          var u;
          var h;
          var p;
          var f;
          var m;
          i = t.appid;
          a = t.appId;
          o = t.container;
          s = t.os;
          l = t.version;
          c = t.sdkId;
          d = t.sdkVersion;
          var g = {
            s_aid: Number(i) || Number(a),
            s_sid: c,
            s_container: o,
            s_os: s,
            s_version: l,
            s_sversion: d
          };
          var v = g.s_aid;
          var _ = g.s_sid;
          var y = g.s_os;
          var b = g.s_container;
          var w = g.s_version;
          var x = g.s_sversion;
          u = r.appid;
          h = r.container;
          p = r.os;
          f = r.version;
          m = r.hostId;
          var k = {
            t_hid: u || m,
            t_container: h,
            t_os: p,
            t_version: f
          };
          var C = k.t_hid;
          var j = k.t_os;
          var S = k.t_container;
          var E = k.t_version;
          if (n === "sdk" && !_) {
            return false;
          }
          if (n === "sdk") {
            if (C && C !== "*" && C !== _) {
              return false;
            }
          } else if (C && C !== "*" && C !== v) {
            return false;
          }
          if (S !== "*" && S !== b || j !== "*" && j !== y) {
            return false;
          }
          if (n === "sdk") {
            if (E && E !== "*" && !lO(x, E)) {
              return false;
            }
          } else if (E && E !== "*" && !lO(w, E)) {
            return false;
          }
          return true;
        }(e, t.target, t.type);
      });
    };
    r.transformConfig = function (e, t, r, n, i = "call") {
      var a = this.getRuleForMethod(n, r) || {};
      if (!a.map) {
        a.interceptor;
      }
      var o = a.map && a.map.method || e;
      if (a.map && a.map.module && i !== "on") {
        o = a.map;
      } else if (a.map && a.map.method) {
        o = a.map.method;
      }
      return {
        realMethod: o,
        realParams: a.preprocess ? a.preprocess(t, {
          env: n,
          bridge: this.bridge,
          logger: s9
        }) : t,
        rule: a,
        env: n
      };
    };
    r.caniuse = function (e, t) {
      var r = e(null, null, null, {
        getRules: true
      });
      return !!this.getRuleForMethod(Object.assign({
        container: this.container,
        os: this.os
      }, t), r);
    };
    r.callExecutor = function (e, t, r, n, i, a, o, s, l) {
      var c = this;
      var d = {
        method: n,
        params: i
      };
      if (this.onInvokeStart) {
        d = this.onInvokeStart(d);
      }
      var u = this.transformConfig(n, i, o, r);
      var h = u.realMethod;
      var p = u.realParams;
      var f = u.rule;
      var m = u.env;
      var g = f.interceptor;
      var v = new Date().getTime();
      if (typeof g == "function") {
        return g(Object.assign({
          params: i,
          bridge: this.bridge
        }, m), function (t) {
          e(t);
          if (typeof a == "function") {
            a(t);
          }
        });
      }
      this.bridge.call(h, p, function (r) {
        var s = r;
        try {
          if (typeof c.globalPostprocess == "function") {
            s = c.globalPostprocess(s, {
              method: n,
              params: i,
              env: m
            });
          }
          if (typeof f.postprocess == "function") {
            s = f.postprocess(s, {
              method: n,
              params: i,
              env: m
            });
          }
        } catch (e) {
          t(e);
        }
        if (typeof a == "function") {
          if (a.length < 2) {
            a(s);
          } else {
            a(null, s);
          }
        }
        e(s);
        if (typeof c.onInvokeEnd == "function") {
          c.onInvokeEnd({
            response: s,
            config: d
          });
        }
        if (typeof c.monitor == "function") {
          c.monitor(Object.assign({
            bridge: c.bridge
          }, m), {
            method: n,
            realMethod: h,
            params: i,
            realParams: p,
            res: s,
            realRes: r,
            rules: o,
            rule: f,
            startTimestamp: v
          });
        }
      }, Object.assign(this.options, s));
    };
    r.pipeCall = function (e, t) {
      var r = this;
      var n = e.method;
      var i = e.params;
      var a = e.callback;
      var o = e.rules;
      var s = e.options;
      e.internal;
      if (t === undefined) {
        t = true;
      }
      if (this.isSSR) {
        return Promise.resolve();
      } else {
        return new Promise(function (e, l) {
          try {
            if (r.env) {
              r.callExecutor(e, l, r.env, n, i, a, o, s, t);
            } else {
              r.getEnv.then(function (c) {
                r.callExecutor(e, l, c, n, i, a, o, s, t);
              });
            }
          } catch (e) {
            if (typeof r.monitor == "function") {
              r.monitor({
                bridge: r.bridge,
                env: r.env
              }, {
                method: n,
                params: i,
                rules: o,
                error: e
              });
            }
            l(e);
          }
        });
      }
    };
    r.pipeEvent = function (e) {
      var t = this;
      var r = e.event;
      var n = e.callback;
      var i = e.rules;
      var a = e.once;
      e.internal;
      if (this.isSSR) {
        return {
          remove: function () {},
          listener: n
        };
      }
      var o = new Promise(function (e, n) {
        var a = t.env;
        if (a) {
          e(t.transformConfig(r, null, i, a, "on"));
        } else {
          t.getEnv.then(function (n) {
            e(t.transformConfig(r, null, i, n, "on"));
          });
        }
      }).then(function (e) {
        var i = e.realMethod;
        var o = e.rule;
        var s = e.env;
        var l = o.interceptor;
        if (typeof l == "function") {
          return l(Object.assign({
            bridge: t.bridge
          }, s), function (e) {
            if (typeof n == "function") {
              n(e);
            }
          });
        }
        var c = t.bridge.on(i, function (e) {
          var i = e;
          if (typeof t.globalPostprocess == "function") {
            i = t.globalPostprocess(i, {
              event: r,
              env: s,
              logger: s9
            });
          }
          if (typeof o.postprocess == "function") {
            i = o.postprocess(i, {
              event: r,
              env: s,
              logger: s9
            });
          }
          if (o.postprocess) {
            if (i !== null) {
              n(i);
            }
          } else {
            n(i);
          }
        }, a);
        return [i, c];
      });
      return {
        remove: function () {
          o.then(function (e) {
            var r = e[0];
            var n = e[1];
            t.bridge.off(r, n);
          });
        },
        listener: n
      };
    };
    return t;
  }(lB);
  new (function (e) {
    function t(t) {
      var r;
      (r = e.call(this, t) || this).env = {
        container: t.container || "web",
        os: t.os
      };
      return r;
    }
    oR(t, e);
    var r = t.prototype;
    r.caniuse = function (e, t) {
      return false;
    };
    r.pipeCall = function (e, t, r, n, i, a) {
      var o = this;
      if (this.isSSR) {
        return Promise.resolve();
      }
      var s = {
        method: e,
        params: r
      };
      if (typeof this.onInvokeStart == "function") {
        s = this.onInvokeStart(s);
      }
      var l = new Date().getTime();
      try {
        return new Promise(function (c, d) {
          if (typeof a == "function") {
            return a(Object.assign({
              params: r,
              bridge: o.bridge
            }, o.env), function (e) {
              c(e);
              if (typeof n == "function") {
                n(e);
              }
            });
          }
          o.bridge.call(t, r, function (i) {
            var a = i;
            try {
              if (typeof o.globalPostprocess == "function") {
                a = o.globalPostprocess(a, {
                  method: e,
                  params: r,
                  env: o.env
                });
              }
            } catch (e) {
              d(e);
            }
            if (typeof n == "function") {
              if (n.length < 2) {
                n(a);
              } else {
                n(null, a);
              }
            }
            c(a);
            if (typeof o.onInvokeEnd == "function") {
              o.onInvokeEnd({
                response: a,
                config: s
              });
            }
            if (typeof o.monitor == "function") {
              o.monitor(Object.assign({
                bridge: o.bridge
              }, o.env), {
                method: e,
                realMethod: t,
                params: r,
                res: a,
                realRes: i,
                startTimestamp: l
              });
            }
          }, Object.assign(o.options, i));
        });
      } catch (n) {
        if (typeof this.monitor == "function") {
          this.monitor(Object.assign({
            bridge: this.bridge
          }, this.env), {
            method: e,
            realMethod: t,
            params: r,
            error: n
          });
        }
        return Promise.reject(n);
      }
    };
    r.pipeEvent = function (e, t, r, n) {
      var i = this;
      if (this.isSSR) {
        return {
          remove: function () {},
          listener: r
        };
      }
      var a = this.bridge.on(t, function (t) {
        var n = t;
        if (typeof i.globalPostprocess == "function") {
          n = i.globalPostprocess(n, {
            event: e,
            env: i.env,
            logger: s9
          });
        }
        r(n);
      }, n);
      return {
        remove: function () {
          i.bridge.off(t, a);
        },
        listener: r
      };
    };
    return t;
  }(lB))({
    bridge: lF ? window.JSBridge : {},
    container: "web",
    os: lD ? "android" : "ios",
    isSSR: !lF,
    monitor: oj,
    globalPostprocess: oS
  });
  var lZ = new lL({
    bridge: lF ? window.JSBridge : {},
    container: "web",
    os: lD ? "android" : "ios",
    isSSR: !lF,
    monitor: oj,
    globalPostprocess: oS
  });
  lZ.init({
    getRuntimeEnv: lF ? function (e, t) {
      t(null, {
        appid: 990008,
        version: "999.999.999"
      });
    } : function (e, t) {
      t(null, {});
    }
  });
  (cm = cU ||= {}).LoggedOut = "loggedOut";
  cm.Cancelled = "cancelled";
  (cg = cH ||= {}).Confirm = "confirm";
  cg.Cancel = "cancel";
  cg.Mask = "mask";
  (cv = cz ||= {}).Success = "success";
  cv.Error = "error";
  (c_ = cV ||= {}).Light = "light";
  c_.Dark = "dark";
  (cy = cJ ||= {})[cy.Success = 1] = "Success";
  cy[cy.Failed = 0] = "Failed";
  (cb = cX ||= {}).Default = "default";
  cb.Warn = "warn";
  (cw = cq ||= {}).Select = "select";
  cw.Dismiss = "dismiss";
  (cx = cG ||= {}).Light = "light";
  cx.Medium = "medium";
  cx.Heavy = "heavy";
  (ck = cQ ||= {})[ck.Success = 1] = "Success";
  ck[ck.Failed = 0] = "Failed";
  (cC = cK ||= {}).String = "string";
  cC.ArrayBuffer = "arraybuffer";
  cC.Base64 = "base64";
  (cj = cY ||= {})[cj.Success = 1] = "Success";
  cj[cj.Failed = 0] = "Failed";
  (cS = c0 ||= {}).String = "string";
  cS.ArrayBuffer = "arraybuffer";
  cS.Base64 = "base64";
  (cE = c1 ||= {})[cE.Success = 1] = "Success";
  cE[cE.Failed = 0] = "Failed";
  (cR = c2 ||= {})[cR.Success = 1] = "Success";
  cR[cR.Failed = 0] = "Failed";
  (cN = c3 ||= {})[cN.Success = 1] = "Success";
  cN[cN.Failed = 0] = "Failed";
  (cT = c4 ||= {})[cT.Success = 1] = "Success";
  cT[cT.Failed = 0] = "Failed";
  (cP = c6 ||= {})[cP.Success = 1] = "Success";
  cP[cP.Failed = 0] = "Failed";
  (cI = c5 ||= {})[cI.Success = 1] = "Success";
  cI[cI.Failed = 0] = "Failed";
  (c$ = c9 ||= {}).Image = "image";
  c$.Video = "video";
  (cA = c7 ||= {})[cA.Success = 1] = "Success";
  cA[cA.Failed = 0] = "Failed";
  var lW = lZ.bridge;
  lZ.on.bind(lZ);
  lZ.caniuse.bind(lZ);
  let lU = (...e) => rn("[EventCenter]", ...e);
  let lH = t9();
  let lz = new class {
    constructor(e) {
      var t;
      let r;
      this._functionCallHandlers = {};
      this._callbackHandlers = {};
      this._rawCallbackHandlers = {};
      this._eventHandlers = {};
      this._clientBridge = e;
      this._clientBridge.listen(e => {
        e.accept({
          functionCall: e => void this.dispatchCallMessage(e),
          callback: e => this.dispatchCallbackMessage(e),
          event: e => this.dispatchEventMessage(e)
        });
      });
      if ((t = lH.globalEventIDGenerator) === null || t === undefined) {
        r = 1;
        lH.globalEventIDGenerator = {
          next: () => r++,
          reset: () => {
            r = 1;
          }
        };
      }
    }
    get nextCallbackId() {
      return lH.globalEventIDGenerator.next();
    }
    registerFunctionCallHandler(e, t, r) {
      lU("register function call handler", e);
      let {
        typeGuard: n,
        allowOverwrite: i = false
      } = r ?? {};
      if (!i && this._functionCallHandlers[e]) {
        throw Error(`Function call handler already exists for function name ${e}`);
      }
      let a = e => {
        if ((n == null ? undefined : n(e)) === false) {
          throw ru.fromCallResult(rl.invalidParams());
        }
        return t(e);
      };
      this._functionCallHandlers[e] = a;
      return () => {
        if (this._functionCallHandlers[e] === a) {
          delete this._functionCallHandlers[e];
        }
      };
    }
    registerEventHandler(e, t, r) {
      var i;
      lU("register event handler", e);
      let {
        typeGuard: a
      } = r ?? {};
      let o = e => {
        if ((a == null ? undefined : a(e)) !== false) {
          t(e);
        }
      };
      ((i = this._eventHandlers)[e] ?? (i[e] = new Set())).add(o);
      return () => {
        this._eventHandlers[e].delete(o);
      };
    }
    registerCallback(e, t, r) {
      let {
        typeGuard: n,
        apiName: i
      } = r ?? {};
      let a = this.nextCallbackId;
      lU(`register callback handler for id: ${a}`);
      this._callbackHandlers[a] = r => r.accept({
        success: e => (n == null ? undefined : n(e.data)) === false ? rl.invalidResult() : e,
        failed: e => {
          e.data;
          return e;
        },
        internalError: e => e
      }).accept({
        success: t => e(t.data),
        failed: e => t(new rd(e.msg, e.data, i)),
        internalError: e => t(ru.fromCallResult(e, i))
      });
      return a;
    }
    registerRawCallback(e) {
      let t = this.nextCallbackId;
      lU(`register raw callback handler for id: ${t}`);
      this._rawCallbackHandlers[t] = e;
      return t;
    }
    dispatchCallMessage(e) {
      var t;
      var r;
      var n;
      var i;
      t = this;
      r = undefined;
      n = undefined;
      i = function* () {
        lU(`dispatch call message. name = ${e.name},`, e.params);
        let t = t => {
          lU("send callback", t);
          this._clientBridge.call(rw.fromCallMessage(e, t));
        };
        if (!e.name) {
          return t(rl.invalidParams());
        }
        let r = this._functionCallHandlers[e.name];
        if (!r) {
          return t(rl.unregistered());
        }
        let {
          params: n
        } = e;
        try {
          lU("invoke function call handler");
          rL.incomingCallDispatched(e.callbackId);
          let i = yield r(n);
          rL.incomingCallHandled(e.callbackId);
          t(ro.withData(i));
        } catch (e) {
          t(e instanceof rc ? e.toCallResult() : e instanceof Error ? rs.withReason(e.message) : e ? rs.withReason(e.toString()) : rs.withReason("Function invocation failed: unknown error"));
        }
      };
      return new (n ||= Promise)(function (e, a) {
        function o(e) {
          try {
            l(i.next(e));
          } catch (e) {
            a(e);
          }
        }
        function s(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function l(t) {
          var r;
          if (t.done) {
            e(t.value);
          } else {
            ((r = t.value) instanceof n ? r : new n(function (e) {
              e(r);
            })).then(o, s);
          }
        }
        l((i = i.apply(t, r || [])).next());
      });
    }
    dispatchCallbackMessage(e) {
      lU(`dispatch callback message. id = ${e.callbackId}`);
      let {
        callbackId: t
      } = e;
      let r = this._callbackHandlers[t];
      let n = this._rawCallbackHandlers[t];
      try {
        lU("invoke callback handler");
        rL.outgoingCallDispatched(e.callbackId);
        if (r) {
          delete this._callbackHandlers[t];
          r(e.parsedParams);
        }
        if (n) {
          delete this._rawCallbackHandlers[t];
          n(e.params);
        }
      } catch (e) {}
      rL.outgoingCallHandled(e.callbackId);
    }
    dispatchEventMessage(e) {
      lU(`dispatch event message. name = ${e.name},`, e.params);
      try {
        if (!e.name) {
          return;
        }
        let {
          params: r
        } = e;
        let n = this._eventHandlers[e.name];
        lU(`handlers to invoke: ${(n == null ? undefined : n.size) ?? 0}`);
        rL.incomingEventDispatched(e.callbackId);
        if (!n || n.size === 0) {
          return;
        }
        n.forEach(e => {
          try {
            e(r);
          } catch (e) {}
        });
      } finally {
        rL.incomingEventHandled(e.callbackId);
      }
    }
    _reset() {
      this._functionCallHandlers = {};
      this._callbackHandlers = {};
      this._eventHandlers = {};
      lH.globalEventIDGenerator.reset();
    }
    _checkClean() {
      if (Object.keys(this._functionCallHandlers).length > 0 || Object.keys(this._callbackHandlers).length > 0) {
        return false;
      }
      for (let e of Object.values(this._eventHandlers)) {
        if (e.size > 0) {
          return false;
        }
      }
      return true;
    }
  }(rH);
  rZ.impl = e => {
    rH.call(new rb({
      name: "applet.reportPerformanceEntries",
      params: {
        entries: e
      },
      target: r_.clientAPI(),
      callbackId: lz.registerCallback(() => {}, () => {}, {
        apiName: "applet.reportPerformanceEntries"
      })
    }));
  };
  let lV = typeof __MAIN_PROCESS__ != "undefined" && __MAIN_PROCESS__;
  let lJ = typeof __RELAXVIEW__ != "undefined" && __RELAXVIEW__;
  let lX = !lV && !lJ;
  let lq = (...e) => rn("[Client API]", ...e);
  function lG(e, t, r) {
    return new Promise((n, i) => {
      let {
        resultTypeGuard: a,
        transformParams: o
      } = r ?? {};
      try {
        lq("call AppletBridge", e, t);
        rH.call(new rb({
          name: e,
          params: o ? o(t) : t,
          target: r_.clientAPI(),
          callbackId: lz.registerCallback(n, i, {
            typeGuard: a,
            apiName: e
          })
        }));
      } catch (e) {
        lq("call AppletBridge error", e);
        i(e);
      }
    });
  }
  function lQ(e, t, r) {
    return n => e(t, n ?? {}, r);
  }
  function lK(e, t) {
    return lQ(lG, e, t);
  }
  function lY(e, t) {
    if (lV) {
      return () => Promise.reject(ru.fromCallResult(rl.runtimeForbidden(`Cannot call ${e} on this environment.`)));
    } else {
      return lQ(lG, e, t);
    }
  }
  let l0 = lK("applet.subscribeEvent");
  function l1(e, t) {
    if (lX) {
      return e => new Promise(r => {
        lq("call X method", t, e);
        lW.call(t, e, e => r(e));
      });
    } else {
      return t => new Promise((r, n) => {
        try {
          lq("call X method through AppletBridge", e, t);
          rH.call(new rb({
            name: e,
            params: t,
            target: r_.clientAPI(),
            callbackId: lz.registerRawCallback(e => r(e))
          }));
        } catch (e) {
          lq("call X method through AppletBridge error", e);
          n(e);
        }
      });
    }
  }
  function l2(e, t) {
    let {
      paramsTypeGuard: r,
      isPrivate: n = false
    } = t ?? {};
    let i = false;
    return t => {
      if (!n && !i) {
        l0({
          eventName: e,
          timestamp: Date.now()
        });
        i = true;
      }
      lq("listen AppletBridge event", e);
      return lz.registerEventHandler(e, t, {
        typeGuard: r
      });
    };
  }
  (cO = c8 ||= {})[cO.NONE = 0] = "NONE";
  cO[cO.SHOW = 1] = "SHOW";
  cO[cO.HIDE = 2] = "HIDE";
  let l3 = lK("applet.openPage", {
    resultTypeGuard: function (e) {
      return "viewId" in e && typeof e.viewId == "string";
    },
    transformParams: function (e) {
      if (!e.pageSettings) {
        return e;
      }
      let t = {};
      Object.keys(e.pageSettings).forEach(r => {
        let n = e.pageSettings[r];
        if (n === true) {
          t[r] = "1";
        } else if (n === false) {
          t[r] = "0";
        } else {
          if (n == null) {
            return;
          }
          t[r] = n.toString();
        }
      });
      return Object.assign(Object.assign({}, e), {
        pageSettings: t
      });
    }
  });
  let l4 = lY("applet.setTitle");
  let l6 = lK("applet.reportAppLog");
  let l5 = l1("x.showToast", "x.showToast");
  cF = [[{
    major: 0,
    minor: 19,
    patch: 0,
    postfix: ""
  }, lK("applet.showToast")]];
  cM = e => {
    var t;
    var r;
    var n;
    var i;
    t = undefined;
    r = undefined;
    n = undefined;
    i = function* () {
      let n = yield l5(e);
      if (n.code === 1) {
        return n.data ?? {};
      }
      throw new rd(n.msg ?? "", n.data, "applet.showToast");
    };
    return new (n ||= Promise)(function (e, a) {
      function o(e) {
        try {
          l(i.next(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        try {
          l(i.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function l(t) {
        var r;
        if (t.done) {
          e(t.value);
        } else {
          ((r = t.value) instanceof n ? r : new n(function (e) {
            e(r);
          })).then(o, s);
        }
      }
      l((i = i.apply(t, r || [])).next());
    });
  };
  let l9 = cF.find(([e]) => re.major > e.major || !(re.major < e.major) && (re.minor > e.minor || !(re.minor < e.minor) && re.patch >= e.patch))?.[1] ?? cM;
  let l7 = lK("applet.updatePackage");
  let l8 = lK("applet.closeFloatingWindow");
  let ce = lK("applet.setFloatingWindowVisible");
  let ct = lK("applet.openAuthDouyinByHost");
  let cr = lK("applet.getHostDouyinOpenAuthToken");
  let cn = lK("applet.startDouyinOpenAuth");
  (cL = de ||= {})[cL.SUCCESS = 0] = "SUCCESS";
  cL[cL.UNAUTHORIZED = -1] = "UNAUTHORIZED";
  cL[cL.INITIALIZATION_FAILED = -2] = "INITIALIZATION_FAILED";
  cL[cL.INVALID_PARAMS = -3] = "INVALID_PARAMS";
  cL[cL.UNREACHABLE = -4] = "UNREACHABLE";
  cL[cL.INTERRUPTED = -5] = "INTERRUPTED";
  cL[cL.LOCATION_PERMISSION_DENIED = -6] = "LOCATION_PERMISSION_DENIED";
  (cZ = dt ||= {})[cZ.NavStart = 0] = "NavStart";
  cZ[cZ.NavInterrupt = 1] = "NavInterrupt";
  cZ[cZ.NavDone = 2] = "NavDone";
  cZ[cZ.NavError = 3] = "NavError";
  let ci = lK("applet.openMapApp");
  let ca = l1("x.checkPermissionV2", "x.checkPermissionV2");
  let co = l1("x.requestPermission", "x.requestPermission");
  let cs = l1("x.getUserInfo", "x.getUserInfo");
  let cl = l1("x.getAppInfo", "x.getAppInfo");
  let cc = l1("x.getLocation", "x.getLocation");
  let cd = l1("x.close", "x.close");
  let cu = l1("x.open", "x.open");
  let ch = l1("x.showModal", "x.showModal");
  let cp = l1("x.request", "x.request");
  let cf = l1("x.copy", "x.copy");
  (dr ||= {}).TIPS = "tips";
  (cW = dn ||= {})[cW.MUSIC = 1] = "MUSIC";
  cW[cW.NEWS = 2] = "NEWS";
  var cm;
  var cg;
  var cv;
  var c_;
  var cy;
  var cb;
  var cw;
  var cx;
  var ck;
  var cC;
  var cj;
  var cS;
  var cE;
  var cR;
  var cN;
  var cT;
  var cP;
  var cI;
  var c$;
  var cA;
  var cO;
  var cF;
  var cM;
  var cL;
  var cZ;
  var cW;
  var cU;
  var cH;
  var cz;
  var cV;
  var cJ;
  var cX;
  var cq;
  var cG;
  var cQ;
  var cK;
  var cY;
  var c0;
  var c1;
  var c2;
  var c3;
  var c4;
  var c6;
  var c5;
  var c9;
  var c7;
  var c8;
  var de;
  var dt;
  var dr;
  var dn;
  var di;
  var da = lY("flow.showMenu");
  var ds = lK("flow.setupFeedbackData");
  var dl = lK("flow.getFeedbackData");
  var dc = lK("flow.triggerFeedback");
  (dd = di ||= {})[dd.Success = 0] = "Success";
  dd[dd.SeverError = 1] = "SeverError";
  dd[dd.InvalidParams = 2] = "InvalidParams";
  dd[dd.YawButNoReRoute = 3] = "YawButNoReRoute";
  dd[dd.YawWithReRoute = 4] = "YawWithReRoute";
  dd[dd.InvalidInfo = 5] = "InvalidInfo";
  dd[dd.NotInStartPoint = 6] = "NotInStartPoint";
  dd[dd.Finished = 9] = "Finished";
  dd[dd.NoRidingRoute = 2001] = "NoRidingRoute";
  dd[dd.TooLongNoRidingRoute = 2002] = "TooLongNoRidingRoute";
  dd[dd.InvalidZone = 3001] = "InvalidZone";
  dd[dd.NoWalkingRoute = 3002] = "NoWalkingRoute";
  dd[dd.TooLongNoWalkingRoute = 3003] = "TooLongNoWalkingRoute";
  dd[dd.UnknownServerError = 9001] = "UnknownServerError";
  var dd;
  var du;
  var dh = lK("flow.startNavigation");
  var dp = lK("flow.stopNavigation");
  var df = l2("flow.onNavStatusChanged");
  var dm = l2("flow.onOpenPageDemand");
  (dg = du ||= {}).doubao = "doubao";
  dg.amap = "amap";
  dg.baidu = "baidu";
  dg.tencent = "tencent";
  dg.apple = "apple";
  var dg;
  var dv;
  var d_ = lK("flow.startThirdNaviOrPlan");
  (c = dv ||= {}).NOTIFICATION = "notification";
  c.CALENDAR = "calendar";
  c.LOCATION = "location";
  c.BACKGROUND_LOCATION = "background_location";
  (d = u ||= {}).FULL = "calendarEventReadWrite";
  d.WRITE = "calendarEventWriteOnly";
  var dy = lK("flow.checkPermission");
  var db = lK("flow.requestPermission");
  var dw = l2("flow.onPermissionRequestResult");
  var dx = lK("flow.uploadALog");
  let dk = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
  let dC = e => {
    if (typeof e != "string") {
      throw TypeError("Invalid argument expected string");
    }
    let t = e.match(dk);
    if (!t) {
      throw Error(`Invalid argument not valid semver ('${e}' received)`);
    }
    t.shift();
    return t;
  };
  let dj = e => e === "*" || e === "x" || e === "X";
  let dS = e => {
    let t = parseInt(e, 10);
    if (isNaN(t)) {
      return e;
    } else {
      return t;
    }
  };
  let dE = (e, t) => typeof e != typeof t ? [String(e), String(t)] : [e, t];
  let dR = (e, t) => {
    if (dj(e) || dj(t)) {
      return 0;
    }
    let [r, n] = dE(dS(e), dS(t));
    if (r > n) {
      return 1;
    } else if (r < n) {
      return -1;
    } else {
      return 0;
    }
  };
  let dN = (e, t) => {
    for (let r = 0; r < Math.max(e.length, t.length); r++) {
      let n = dR(e[r] || "0", t[r] || "0");
      if (n !== 0) {
        return n;
      }
    }
    return 0;
  };
  let dT = (e, t) => {
    let r = dC(e);
    let n = dC(t);
    let i = r.pop();
    let a = n.pop();
    let o = dN(r, n);
    if (o !== 0) {
      return o;
    } else if (i && a) {
      return dN(i.split("."), a.split("."));
    } else if (i || a) {
      if (i) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  };
  let dP = (e, t, r) => {
    dA(r);
    let n = dT(e, t);
    return dI[r].includes(n);
  };
  let dI = {
    ">": [1],
    ">=": [0, 1],
    "=": [0],
    "<=": [-1, 0],
    "<": [-1],
    "!=": [-1, 1]
  };
  let d$ = Object.keys(dI);
  let dA = e => {
    if (typeof e != "string") {
      throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);
    }
    if (d$.indexOf(e) === -1) {
      throw Error(`Invalid operator, expected one of ${d$.join("|")}`);
    }
  };
  function dO(e, t) {
    let r = t.name;
    return (...n) => C(this, null, function* () {
      var i;
      var a;
      try {
        return yield e(...n);
      } catch (n) {
        let e = tl.from(r, n, false);
        if ((i = t == null ? undefined : t.notReportError) == null || !i.call(t, n)) {
          dV.reportError({
            error: e,
            extra: {
              errorType: to.jsbApi,
              apiName: r
            }
          });
          if ((a = t == null ? undefined : t.errorHandler) != null) {
            a.call(t);
          }
        }
        throw e;
      }
    });
  }
  let dF = Z(() => C(undefined, null, function* () {
    try {
      let e = yield cs();
      if (e.code !== 1) {
        return null;
      } else {
        return e.data;
      }
    } catch (e) {
      dV.reportError({
        error: tl.withoutStack("getUserInfo", e.message),
        extra: {
          errorType: to.jsbApi,
          apiName: "getUserInfo"
        }
      });
      return null;
    }
  }));
  let dM = Z(() => C(undefined, null, function* () {
    try {
      let e = yield cl();
      if (e.code !== 1) {
        return null;
      } else {
        return e.data;
      }
    } catch (e) {
      dV.reportError({
        error: tl.withoutStack("getAppInfo", e.message),
        extra: {
          errorType: to.jsbApi,
          apiName: "getAppInfo"
        }
      });
      return null;
    }
  }));
  dO(da, {
    name: "showMenu",
    errorHandler: () => {
      dL();
    }
  });
  dO(ds, {
    name: "setupFeedbackData"
  });
  dO(dl, {
    name: "getFeedbackData",
    errorHandler: () => {
      dL();
    },
    notReportError(e) {
      let r = (e == null ? undefined : e.message) ?? "";
      return r && r.includes("not found message");
    }
  });
  dO(dc, {
    name: "triggerFeedback"
  });
  let dD = e => C(undefined, null, function* () {
    let r = yield dM();
    return dP((r == null ? undefined : r.appVersion) ?? "", e, ">=");
  });
  let dB = dO(cp, {
    name: "request",
    notReportError: () => true
  });
  dO(l3, {
    name: "openPage"
  });
  dO(() => cd(), {
    name: "close"
  });
  dO(cu, {
    name: "open"
  });
  dO(l9, {
    name: "showToast"
  });
  dO(ch, {
    name: "showModal"
  });
  dO(cf, {
    name: "copy"
  });
  dO(cn, {
    name: "startDouyinOpenAuth"
  });
  dO(ct, {
    name: "openAuthDouyinByHost",
    notReportError: () => true
  });
  dO(cr, {
    name: "getHostDouyinOpenAuthToken"
  });
  dO(ci, {
    name: "openMapApp"
  });
  dO(l6, {
    name: "reportAppLog"
  });
  dO(ca, {
    name: "checkPermissionV2"
  });
  dO(cc, {
    name: "getLocation"
  });
  dO(co, {
    name: "requestPermission"
  });
  let dL = () => C(undefined, null, function* () {
    if (yield dD("6.2.0")) {
      return yield dx({
        scene: "locallife",
        endTime: Date.now() / 1000,
        startTime: Date.now() / 1000 - 600
      });
    } else {
      return undefined;
    }
  });
  dO(db, {
    name: "flowRequestPermission"
  });
  dO(dy, {
    name: "flowCheckPermission"
  });
  dO(dw, {
    name: "onPermissionRequestResult"
  });
  dO(ce, {
    name: "setFloatingWindowVisible"
  });
  dO(l8, {
    name: "closeFloatingWindow"
  });
  dO(l4, {
    name: "setTitle"
  });
  dO(dh, {
    name: "startNavigation"
  });
  dO(dp, {
    name: "stopNavigation"
  });
  dO(df, {
    name: "onNavigationStatusChanged"
  });
  dO(dm, {
    name: "onOpenPageCommand"
  });
  dO((...e) => C(undefined, null, function* () {
    if (yield dD("6.9.0")) {
      return l7(...e);
    }
  }), {
    name: "updatePackage"
  });
  let dZ = () => dD("7.1.0");
  dO(e => C(undefined, null, function* () {
    if (!(yield dZ())) {
      let t;
      let r = yield ci({
        from: {
          name: e.origin,
          lng: e.olon,
          lat: e.olat
        },
        to: {
          name: e.destination,
          lng: e.dlon,
          lat: e.dlat
        },
        method: e.type
      });
      let {
        userAction: n
      } = r;
      if (n === "autonavi") {
        t = du.amap;
      } else if (n !== "cancel" && n !== "installAutonavi") {
        t = n;
      }
      return {
        result: r.openResult ? 1 : -1,
        isBackground: 0,
        availableApps: r.mapsAvailable.join(","),
        appName: r.openResult ? t : undefined,
        selectedApp: n === "installAutonavi" ? "install_app" : n === "cancel" ? "cancel" : t
      };
    }
    return d_(e);
  }), {
    name: "openNavApp"
  });
  class dW {
    constructor() {
      this._widgetData = {};
      this._viewContext = {};
      this._extraContext = {};
      this._logContext = {};
      if (dW.instance) {
        return dW.instance;
      }
      this._widgetData = {};
      this._viewContext = {};
    }
    setLogContext(e) {
      this._logContext = e;
    }
    getLogContext() {
      return this._logContext;
    }
    setWidgetData(e) {
      this._widgetData = e;
    }
    setViewContext(e) {
      this._viewContext = e;
    }
    get widgetData() {
      return this._widgetData;
    }
    get viewContext() {
      return this._viewContext;
    }
    get extraContext() {
      return this._extraContext;
    }
    updateContext(e = {}) {
      try {
        this._extraContext = w(w({}, this.extraContext), e);
      } catch (e) {
        F.error(e);
      }
    }
    getContext(e) {
      if (e) {
        return eV(this.extraContext, e);
      } else {
        return w({
          widgetData: this.widgetData,
          viewContext: this.viewContext
        }, this.extraContext);
      }
    }
  }
  let dU = new dW();
  let dH = (e, t) => {
    let {
      url: r,
      data: n,
      success: i,
      fail: a
    } = t;
    dB({
      url: r,
      method: e,
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.parse(n || "{}"),
      addCommonParams: true
    }).then(e => {
      if (i) {
        i(e.data);
      }
    }).catch(e => a && a(e));
  };
  let dz = () => ({
    get(e) {
      dH("GET", e);
    },
    post(e) {
      dH("POST", e);
    }
  });
  let dV = new class {
    constructor() {
      this.initPromise = null;
      this.client = t3;
      this.curIds = {};
      this.mergeContext = () => C(this, null, function* () {
        this.client.context.merge({
          messageId: eV(dU.viewContext, "msgId"),
          replyFor: eV(dU.viewContext, "replyFor"),
          appVersion: eV(dU.extraContext, "appInfo.appVersion"),
          appName: eV(dU.extraContext, "appInfo.appName"),
          osVersion: eV(dU.extraContext, "appInfo.osVersion"),
          deviceModel: eV(dU.extraContext, "appInfo.deviceModel"),
          networkType: eV(dU.extraContext, "appInfo.networkType"),
          channel: eV(dU.extraContext, "appInfo.channel"),
          updateVersionCode: eV(dU.extraContext, "appInfo.updateVersionCode"),
          applet_id: processBrowserShim.env.PUBLIC_APPLET_ID
        });
      });
      this.getIds = () => C(this, null, function* () {
        var e;
        this.curIds.pid = dU.getContext("pageId");
        let {
          uid: t,
          pid: r,
          did: n
        } = this.curIds;
        if (t && n && r) {
          return this.curIds;
        }
        let [i, a] = yield Promise.all([dF().catch(e => {
          F.error("[slardar] failed to getUserInfo", e);
          return {
            userInfo: {
              userID: ""
            }
          };
        }), dM().catch(e => {
          F.error("[slardar] failed to getAppInfo", e);
          return {
            deviceID: ""
          };
        })]);
        dU.updateContext({
          userInfo: i
        });
        dU.updateContext({
          appInfo: a
        });
        t = (e = i == null ? undefined : i.userInfo) == null ? undefined : e.userID;
        n = a == null ? undefined : a.deviceID;
        this.curIds = {
          uid: t,
          did: n,
          pid: r
        };
        return this.curIds;
      });
      this.getConfig = () => C(this, null, function* () {
        let {
          uid: e,
          did: t,
          pid: r
        } = yield this.getIds();
        return {
          bid: "flow_fpa_locallife",
          env: M.ENV_NAME,
          release: eV(M, "release"),
          transport: dz(),
          pid: r,
          userId: e,
          user_id: e,
          deviceId: t,
          device_id: t
        };
      });
    }
    init() {
      this.initPromise ||= C(this, null, function* () {
        {
          let e = yield this.getConfig();
          this.client.init(e);
          this.mergeContext();
          this.client.start();
        }
      }).catch(e => {
        F.error("[slardar] init failed", e);
      });
      return this.initPromise;
    }
    reportError(e) {
      return C(this, null, function* () {
        var t;
        var r;
        var n;
        try {
          this.client.context.set("pid", dU.getContext("pageId"));
          yield this.init();
          this.client.report({
            ev_type: "js_error",
            payload: x(w({}, e), {
              error: {
                name: (t = e.error) == null ? undefined : t.name,
                message: (r = e.error) == null ? undefined : r.message,
                stack: (n = e.error) == null ? undefined : n.stack
              },
              breadcrumbs: []
            })
          });
        } catch (e) {
          F.error("[slardar] failed to report", e);
        }
      });
    }
    reportEvent(e, t) {
      return C(this, null, function* () {
        this.client.context.set("pid", dU.getContext("pageId"));
        yield this.init();
        this.client.report({
          ev_type: "custom",
          payload: {
            name: e,
            type: "event",
            content: t
          }
        });
      });
    }
    reportHttp(e) {
      return C(this, null, function* () {
        this.client.context.set("pid", dU.getContext("pageId"));
        yield this.init();
        this.client.report({
          ev_type: "http",
          payload: w({}, e)
        });
      });
    }
  }();
  (function () {
    try {
      if (typeof window == "undefined") {
        return;
      }
      window.onerror = (e, t, r, n, i) => {
        if (!tl.is(i)) {
          F.debug("[clog]: 全局错误捕获 error:", i);
          dV.reportError({
            error: i,
            extra: {
              errorType: to.syntax,
              source: t,
              event: typeof e == "string" ? e : L(e)
            }
          });
        }
      };
      window.onunhandledrejection = e => {
        if (!tl.is(e.reason)) {
          F.debug("[clog]: 全局错误捕获 onunhandledrejection:", e.reason, e);
          dV.reportError({
            error: tl.withoutStack("unhandledrejection", e.reason),
            extra: {
              errorType: to.syntax,
              event: L(e)
            }
          });
        }
      };
    } catch (e) {}
  })();
  class dJ {
    constructor(e) {
      this.logger = e;
      this.rid = "locallife_" + W();
      this.defer = new td();
      window._AMapSecurityConfig = {
        serviceHost: "https://www.doubao.com/_AMapService"
      };
      window.forceWebGL = true;
    }
    loadWeb(e) {
      return C(this, null, function* () {
        let t = document.getElementById(this.rid);
        if (!t) {
          (t = document.createElement("script")).id = this.rid;
          t.onload = () => {
            if (window.AMap) {
              this.defer.resolve();
            } else {
              this.defer.reject(new tl("amap load", "amap load failed"));
            }
          };
          t.onerror = e => {
            if (typeof e == "string") {
              this.defer.reject(new tl("amap load", e));
            } else {
              this.defer.reject(new tl("amap load", "script error"));
            }
          };
          t.src = e;
          document.body.appendChild(t);
        }
        return this.defer.promise;
      });
    }
    load() {
      return C(this, null, function* () {
        var e;
        try {
          yield function (e, t, r = 0) {
            let n = 0;
            return function e() {
              return C(this, null, function* () {
                if (!(n >= 3)) {
                  n++;
                  try {
                    if (yield t()) {
                      return;
                    }
                  } catch (e) {
                    F.warn(`[retry] error at ${n}`, e);
                    if (n === 3) {
                      throw e;
                    }
                  }
                  if (r > 0) {
                    yield new Promise(e => {
                      setTimeout(e, r);
                    });
                  }
                  yield e();
                }
              });
            };
          }(3, () => C(this, null, function* () {
            if (!window.AMap) {
              yield this.loadWeb("https://www.doubao.com/locallife/map/js");
            }
            return true;
          }))();
        } catch (r) {
          let t = "share route_page map load error";
          if ((e = this.logger) != null) {
            e.error({
              message: t,
              eventName: t,
              error: typeof r == "string" ? new tl(t, r) : r,
              meta: {
                reportJsError: true
              }
            });
          }
          dV.reportError({
            error: tl.from("amap load", r),
            extra: {
              errorType: to.route,
              message: "amap load"
            }
          });
        }
        return window.AMap;
      });
    }
  }
  let dX = e => {
    n ||= new dJ(e);
    return n;
  };
  function dq(e) {
    let t = reactCoreLibraryReexport.useRef(`map_container_${W()}`);
    let r = reactCoreLibraryReexport.useRef();
    let n = reactCoreLibraryReexport.useRef();
    let i = reactCoreLibraryReexport.useRef();
    let a = reactCoreLibraryReexport.useRef(null);
    let {
      currentRouteLine: o,
      logger: s
    } = e;
    let {
      start: l,
      end: c
    } = o;
    let d = () => {
      let e = window == null ? undefined : window.AMap;
      if (!e || !a.current || !l || !c) {
        return;
      }
      let t = new e.Marker({
        map: a.current,
        position: new e.LngLat(l == null ? undefined : l[0], l == null ? undefined : l[1]),
        anchor: "center",
        icon: new e.Icon({
          image: "//lf3-static.bytednsdoc.com/obj/eden-cn/lmpsshjvseh7dvsm/ljhwZthlaukjlkulzlp/icon-start.png",
          size: new e.Size(40, 40),
          imageSize: new e.Size(40, 40)
        }),
        offset: new e.Pixel(0, 0),
        zIndex: 1000
      });
      n.current = t;
      let r = new e.Marker({
        map: a.current,
        position: new e.LngLat(c == null ? undefined : c[0], c == null ? undefined : c[1]),
        anchor: "bottom-center",
        icon: new e.Icon({
          image: "//lf3-static.bytednsdoc.com/obj/eden-cn/lmpsshjvseh7dvsm/ljhwZthlaukjlkulzlp/icon-end.png",
          size: new e.Size(40, 40),
          imageSize: new e.Size(40, 40)
        }),
        offset: new e.Pixel(0, 0),
        zIndex: 1000
      });
      i.current = r;
    };
    reactCoreLibraryReexport.useEffect(() => {
      C(this, null, function* () {
        var e;
        try {
          if (!o) {
            return;
          }
          if (!window.AMap) {
            yield dX(s).load();
          }
          let l = window.AMap;
          if (!l) {
            return;
          }
          a.current ||= new l.Map(t.current, {
            resizeEnable: false,
            touchZoom: false,
            dragEnable: false,
            rotateEnable: false,
            pitchEnable: false,
            animateEnable: false,
            keyboardEnable: false,
            doubleClickZoom: false,
            scrollWheel: false,
            zoomEnable: true,
            autoFitView: true,
            isHotspot: false,
            zoom: 13,
            viewMode: "2D"
          });
          d();
          if ((e = r.current) != null) {
            e.hide();
          }
          let c = new ti(a.current, l, [o], [n.current, i.current], [60, 60, 60, 60]);
          c.show();
          r.current = c;
        } catch (t) {
          let e = "share route_page initH5Map error";
          if (s != null) {
            s.error({
              message: e,
              eventName: e,
              error: new tl(e, t),
              meta: {
                reportJsError: true
              }
            });
          }
        }
      });
    }, [o]);
    return E.jsx("div", {
      id: t.current,
      className: "route-map"
    });
  }
  function dG(e) {
    let {
      updateMode: t,
      TransitComponent: r,
      end: n,
      modes: i,
      mode: a
    } = e;
    let o = e => {};
    return E.jsx(E.Fragment, {
      children: E.jsx("div", {
        className: "route-methods__bg",
        children: E.jsxs("div", {
          className: "route-init-status",
          children: [E.jsx("div", {
            className: "route-init__methods",
            children: e3.map(e => E.jsxs("div", {
              className: ` route-init__method ${e === a ? "route-init__method--active" : ""} ${Array.prototype.includes.call(i, e) ? "" : "route-init__method--disabled"}`,
              onClick: () => o(),
              children: [E.jsx("span", {
                children: e2[e]
              }), E.jsx("div", {
                className: "route-init__method-l"
              })]
            }, e))
          }), E.jsx("div", {
            className: "route-init-info",
            children: E.jsxs("div", {
              className: "route-init-info__left",
              children: [E.jsx("div", {
                className: "route-init-name",
                children: E.jsx("span", {
                  children: n.name
                })
              }), r && E.jsx(r, {})]
            })
          })]
        })
      })
    });
  }
  new dJ();
  let dQ = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = k(e, ["title", "titleId"]);
    return reactCoreLibraryReexport.createElement("svg", w({
      width: 12,
      height: 19,
      viewBox: "0 0 12 19",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      "aria-labelledby": n
    }, i), r ? reactCoreLibraryReexport.createElement("title", {
      id: n
    }, r) : null, reactCoreLibraryReexport.createElement("path", {
      d: "M2.37402 18.5309C2.21669 18.7208 2.03494 18.8158 1.82878 18.8158C1.62804 18.8212 1.449 18.7588 1.29167 18.6286C1.13433 18.4984 1.03939 18.3302 1.00684 18.124C0.979709 17.9179 1.06109 17.7008 1.25098 17.473L3.66797 14.6084L4.06673 12.7692L5.37695 14.4131L5.19792 14.9665C5.14909 15.113 5.10297 15.2242 5.05957 15.3001C5.02159 15.3707 4.94293 15.4765 4.82357 15.6175L2.37402 18.5309ZM8.33105 18.2868L6.63021 14.8363C6.59766 14.7712 6.56782 14.7115 6.54069 14.6572C6.51356 14.5975 6.45931 14.5162 6.37793 14.4131L4.72591 12.346C4.41667 11.9608 4.20237 11.6272 4.08301 11.3451C3.96908 11.0575 3.9311 10.6886 3.96908 10.2383L4.09928 8.45605C4.10471 8.34755 4.05046 8.27159 3.93652 8.22819C3.82802 8.17936 3.71951 8.20378 3.611 8.30143L3.01693 8.83854L2.82975 10.9463C2.81348 11.2067 2.73752 11.402 2.60189 11.5322C2.46625 11.6624 2.28451 11.7194 2.05664 11.7031C1.8342 11.6923 1.66059 11.6109 1.53581 11.459C1.41102 11.3016 1.35948 11.1009 1.38118 10.8568L1.52767 8.9362C1.54937 8.67036 1.60091 8.4452 1.68229 8.26074C1.76367 8.07628 1.90473 7.88368 2.10547 7.68294L3.35059 6.4541C3.74664 6.0689 4.11013 5.77322 4.44108 5.56706C4.77203 5.35547 5.1518 5.24967 5.5804 5.24967C6.15549 5.24967 6.59494 5.43956 6.89876 5.81934C7.20801 6.19369 7.34364 6.65755 7.30566 7.21094L7.1429 9.56283C7.11035 9.98058 7.06152 10.3441 6.99642 10.6533C6.93131 10.9626 6.83095 11.3288 6.69531 11.752L6.62207 11.9717L7.67187 13.4609C7.74783 13.5694 7.8265 13.6915 7.90788 13.8271C7.98926 13.9574 8.0625 14.0849 8.1276 14.2096L9.78776 17.5706C9.92339 17.8473 9.95052 18.086 9.86914 18.2868C9.78776 18.4929 9.64941 18.6394 9.4541 18.7262C9.25879 18.813 9.05263 18.8239 8.83561 18.7588C8.62402 18.6991 8.45584 18.5418 8.33105 18.2868ZM11.1631 8.4235C11.4072 8.4235 11.6025 8.49132 11.749 8.62695C11.9009 8.76259 11.9769 8.93891 11.9769 9.15592C11.9769 9.38379 11.9009 9.56283 11.749 9.69303C11.6025 9.82324 11.4072 9.88835 11.1631 9.88835H9.41341C9.16927 9.88835 8.97667 9.86393 8.83561 9.8151C8.69998 9.76628 8.56706 9.67676 8.43685 9.54655L7.96484 9.07454L8.10319 7.11328L9.2832 8.4235H11.1631ZM6.49186 4.51725C6.16092 4.51725 5.85981 4.43859 5.58854 4.28125C5.3227 4.11849 5.11111 3.90419 4.95378 3.63835C4.79644 3.36708 4.71777 3.06869 4.71777 2.74316C4.71777 2.41222 4.79644 2.11382 4.95378 1.84798C5.11111 1.57671 5.3227 1.36241 5.58854 1.20508C5.85981 1.04774 6.16092 0.969076 6.49186 0.969076C6.81738 0.969076 7.11306 1.04774 7.37891 1.20508C7.65017 1.36241 7.86447 1.57671 8.02181 1.84798C8.17914 2.11382 8.25781 2.41222 8.25781 2.74316C8.25781 3.06869 8.17914 3.36708 8.02181 3.63835C7.86447 3.90419 7.65017 4.11849 7.37891 4.28125C7.11306 4.43859 6.81738 4.51725 6.49186 4.51725Z",
      fill: "black"
    }));
  });
  let dK = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = k(e, ["title", "titleId"]);
    return reactCoreLibraryReexport.createElement("svg", w({
      width: 12,
      height: 12,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      "aria-labelledby": n
    }, i), r ? reactCoreLibraryReexport.createElement("title", {
      id: n
    }, r) : null, reactCoreLibraryReexport.createElement("path", {
      d: "M8.5299 6.58293C8.90071 6.28276 8.90071 5.71724 8.52991 5.41707L5.2219 2.73916C4.73154 2.3422 4 2.69119 4 3.32209V8.67791C4 9.30881 4.73154 9.6578 5.2219 9.26084L8.5299 6.58293Z",
      fill: "#CCCCCC"
    }));
  });
  let dY = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = k(e, ["title", "titleId"]);
    return reactCoreLibraryReexport.createElement("svg", w({
      width: 12,
      height: 17,
      viewBox: "0 0 12 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      "aria-labelledby": n
    }, i), r ? reactCoreLibraryReexport.createElement("title", {
      id: n
    }, r) : null, reactCoreLibraryReexport.createElement("path", {
      d: "M2.34766 14.0729C1.96137 14.0729 1.63151 13.9905 1.35807 13.8255C1.08898 13.6649 0.882813 13.4414 0.739583 13.1549C0.596354 12.8685 0.52474 12.5386 0.52474 12.1654V7.4974C0.52474 6.92014 0.546441 6.3559 0.589844 5.80469C0.633247 5.24913 0.69184 4.73264 0.765625 4.25521C0.83941 3.77344 0.921875 3.3546 1.01302 2.9987C1.09983 2.62977 1.23872 2.29774 1.42969 2.0026C1.625 1.70747 1.86806 1.46658 2.15885 1.27995C2.45399 1.09332 2.7947 0.980469 3.18099 0.941407C3.38932 0.919705 3.74523 0.893663 4.2487 0.863282C4.75651 0.828559 5.34028 0.811198 6 0.811198C6.65972 0.811198 7.24132 0.828559 7.74479 0.863282C8.2526 0.893663 8.61068 0.919705 8.81901 0.941407C9.20095 0.980469 9.53733 1.09332 9.82812 1.27995C10.1233 1.46658 10.3685 1.70747 10.5638 2.0026C10.7591 2.29774 10.9002 2.62977 10.987 2.9987C11.0738 3.3546 11.1541 3.77344 11.2279 4.25521C11.3016 4.73264 11.3602 5.24913 11.4036 5.80469C11.4514 6.3559 11.4753 6.92014 11.4753 7.4974V12.1654C11.4753 12.5386 11.4036 12.8685 11.2604 13.1549C11.1172 13.4414 10.9089 13.6649 10.6354 13.8255C10.3663 13.9905 10.0386 14.0729 9.65234 14.0729H2.34766ZM4.33333 2.83594H7.66016C7.78168 2.83594 7.87934 2.79905 7.95312 2.72526C8.02691 2.65148 8.0638 2.55382 8.0638 2.43229C8.0638 2.3151 8.02691 2.22179 7.95312 2.15234C7.87934 2.07856 7.78168 2.04167 7.66016 2.04167H4.33333C4.21181 2.04167 4.11415 2.07856 4.04036 2.15234C3.97092 2.22179 3.9362 2.3151 3.9362 2.43229C3.9362 2.55382 3.97092 2.65148 4.04036 2.72526C4.11415 2.79905 4.21181 2.83594 4.33333 2.83594ZM6 9.77604C6.57726 9.77604 7.18924 9.76302 7.83594 9.73698C8.48264 9.71094 9.06858 9.6697 9.59375 9.61328C9.78906 9.59158 9.92795 9.52214 10.0104 9.40495C10.0929 9.28342 10.1341 9.12934 10.1341 8.94271V7.44531C10.1341 7.00694 10.1211 6.60113 10.0951 6.22786C10.069 5.8546 10.0365 5.52908 9.9974 5.2513C9.95833 4.97352 9.92144 4.75868 9.88672 4.60677C9.852 4.46354 9.78906 4.34418 9.69792 4.2487C9.61111 4.15321 9.49392 4.09679 9.34635 4.07943C8.98611 4.03602 8.55425 4.0013 8.05078 3.97526C7.54731 3.94488 6.86372 3.93186 6 3.9362C5.13628 3.94054 4.45052 3.95573 3.94271 3.98177C3.4349 4.00347 2.99653 4.03602 2.6276 4.07943C2.48872 4.09679 2.37587 4.15321 2.28906 4.2487C2.20226 4.34418 2.14149 4.46354 2.10677 4.60677C2.07205 4.75868 2.03516 4.97352 1.99609 5.2513C1.95703 5.52908 1.92448 5.8546 1.89844 6.22786C1.8724 6.60113 1.85938 7.00694 1.85938 7.44531V8.94271C1.85938 9.125 1.90061 9.27691 1.98307 9.39844C2.06554 9.51563 2.20443 9.58724 2.39974 9.61328C2.7513 9.65668 3.25043 9.69358 3.89714 9.72396C4.54384 9.75434 5.24479 9.7717 6 9.77604ZM2.97266 12.7057C3.22873 12.7057 3.44141 12.6233 3.61068 12.4583C3.78429 12.2891 3.87109 12.0742 3.87109 11.8138C3.87109 11.5534 3.78646 11.3407 3.61719 11.1758C3.44792 11.0065 3.23307 10.9219 2.97266 10.9219C2.71658 10.9219 2.50391 11.0065 2.33464 11.1758C2.1697 11.3407 2.08724 11.5534 2.08724 11.8138C2.08724 12.0742 2.1697 12.2891 2.33464 12.4583C2.50391 12.6233 2.71658 12.7057 2.97266 12.7057ZM9.01432 12.7122C9.26606 12.7122 9.47873 12.6276 9.65234 12.4583C9.82595 12.2847 9.91276 12.0699 9.91276 11.8138C9.91276 11.5577 9.82595 11.3451 9.65234 11.1758C9.48307 11.0022 9.2704 10.9154 9.01432 10.9154C8.75825 10.9154 8.5434 11.0022 8.36979 11.1758C8.19618 11.3451 8.10937 11.5577 8.10937 11.8138C8.10937 12.0699 8.19618 12.2847 8.36979 12.4583C8.5434 12.6276 8.75825 12.7122 9.01432 12.7122ZM1.51432 16.9375C1.41016 16.9375 1.32552 16.9093 1.26042 16.8529C1.19965 16.7964 1.16276 16.7248 1.14974 16.638C1.14106 16.5512 1.16493 16.4622 1.22135 16.3711L2.86198 13.7344H4.10547L2.25651 16.7161C2.1697 16.8637 2.04384 16.9375 1.87891 16.9375H1.51432ZM2.08724 16.1172V15.1406H9.93229V16.1172H2.08724ZM10.1471 16.9375C9.9822 16.9375 9.85417 16.8637 9.76302 16.7161L7.91406 13.7344H9.15755L10.7852 16.3711C10.8416 16.4622 10.8655 16.549 10.8568 16.6315C10.8481 16.7183 10.8134 16.7899 10.7526 16.8464C10.6918 16.9071 10.6115 16.9375 10.5117 16.9375H10.1471Z",
      fill: "#191919"
    }));
  });
  let d0 = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = k(e, ["title", "titleId"]);
    return reactCoreLibraryReexport.createElement("svg", w({
      width: 18,
      height: 15,
      viewBox: "0 0 18 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      "aria-labelledby": n
    }, i), r ? reactCoreLibraryReexport.createElement("title", {
      id: n
    }, r) : null, reactCoreLibraryReexport.createElement("path", {
      d: "M7.09226 1.114C7.10094 0.953409 7.0532 0.81452 6.94903 0.697333C6.84052 0.580145 6.70598 0.515041 6.54539 0.50202C6.38479 0.489 6.24591 0.538913 6.12872 0.65176C6.01153 0.760267 5.9486 0.894816 5.93992 1.05541L5.81622 3.30801L5.13914 3.78978C4.98289 3.90263 4.83532 3.98075 4.69643 4.02416C4.55754 4.06756 4.39044 4.08926 4.19512 4.08926H2.84096C2.3288 4.08926 1.87959 4.18909 1.4933 4.38874C1.10268 4.58839 0.798857 4.86834 0.581843 5.22858C0.360489 5.58449 0.249812 6.00332 0.249812 6.48509V9.28457C0.249812 9.44516 0.306236 9.58188 0.419083 9.69473C0.53193 9.80758 0.668649 9.864 0.829239 9.864C0.989829 9.864 1.12655 9.80758 1.2394 9.69473C1.35224 9.58188 1.40867 9.44516 1.40867 9.28457V6.77806C1.40867 6.63917 1.47811 6.56973 1.617 6.56973C1.76023 6.56973 1.83184 6.63917 1.83184 6.77806V14.3236C1.83184 14.5016 1.89261 14.6513 2.01413 14.7729C2.13566 14.8944 2.2854 14.9551 2.46335 14.9551C2.6413 14.9551 2.79321 14.8944 2.91908 14.7729C3.04061 14.6513 3.10137 14.5016 3.10137 14.3236V9.75332C3.10137 9.69256 3.12308 9.64048 3.16648 9.59707C3.20988 9.55367 3.25979 9.53197 3.31622 9.53197C3.37698 9.53197 3.42907 9.55367 3.47247 9.59707C3.51587 9.64048 3.53757 9.69256 3.53757 9.75332V14.3236C3.53757 14.5016 3.60051 14.6513 3.72637 14.7729C3.8479 14.8944 3.99547 14.9551 4.16908 14.9551C4.34703 14.9551 4.49894 14.8944 4.62481 14.7729C4.74634 14.6513 4.8071 14.5016 4.8071 14.3236V5.82754C4.8071 5.67563 4.83098 5.56712 4.87872 5.50202C4.92646 5.43258 4.99374 5.36747 5.08054 5.30671L6.4933 4.27155C6.64087 4.16304 6.75589 4.04369 6.83835 3.91348C6.91648 3.77893 6.95988 3.60749 6.96856 3.39916L7.09226 1.114ZM3.31622 3.36009C3.58098 3.36009 3.81969 3.29716 4.03236 3.17129C4.24504 3.04108 4.41648 2.86964 4.54669 2.65697C4.67256 2.43995 4.73549 2.20124 4.73549 1.94082C4.73549 1.67607 4.67256 1.43735 4.54669 1.22468C4.41648 1.012 4.24504 0.842732 4.03236 0.716864C3.81969 0.586656 3.58098 0.521552 3.31622 0.521552C3.0558 0.521552 2.81926 0.586656 2.60658 0.716864C2.38957 0.842732 2.21813 1.012 2.09226 1.22468C1.96205 1.43735 1.89695 1.67607 1.89695 1.94082C1.89695 2.20124 1.96205 2.43995 2.09226 2.65697C2.21813 2.86964 2.38957 3.04108 2.60658 3.17129C2.81926 3.29716 3.0558 3.36009 3.31622 3.36009Z",
      fill: "#191919"
    }), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.01411 14.6537C2.9597 14.6628 2.90318 14.6673 2.84456 14.6673H2.02038C1.98822 14.6673 1.9567 14.666 1.92582 14.6634C1.86342 14.5648 1.83222 14.4518 1.83222 14.3243V6.77871C1.83222 6.65267 1.77324 6.58382 1.65528 6.57216C1.74892 6.43856 1.85653 6.30496 1.97811 6.17136L2.68254 5.38789L3.12628 4.08991H4.1955C4.31587 4.08991 4.42551 4.08167 4.52445 4.06518L4.26749 4.856C4.21583 5.01413 4.21818 5.1483 4.27454 5.25851C4.33089 5.36873 4.44595 5.42383 4.6197 5.42383H4.94345C4.91906 5.44946 4.89761 5.47574 4.87909 5.50267C4.83135 5.56777 4.80748 5.67628 4.80748 5.82819V12.6763H3.78144V13.7185C3.78144 13.9707 3.70057 14.1848 3.53885 14.3608C3.53825 14.3487 3.53795 14.3366 3.53795 14.3243V9.91127C3.569 9.91455 3.60085 9.91619 3.63351 9.91619C3.84953 9.91619 4.02799 9.84432 4.16887 9.70056C4.30976 9.55681 4.3802 9.37471 4.3802 9.15429V8.033C4.3802 7.80778 4.30976 7.62569 4.16887 7.48672C4.02799 7.34776 3.84953 7.27828 3.63351 7.27828C3.41749 7.27828 3.23669 7.35016 3.0911 7.49391C2.95022 7.63288 2.87978 7.81257 2.87978 8.033V9.15429C2.87978 9.37471 2.95022 9.55681 3.0911 9.70056C3.09573 9.70513 3.10039 9.70962 3.10509 9.71404C3.10286 9.72691 3.10175 9.74022 3.10175 9.75397V14.3243C3.10175 14.4477 3.07254 14.5575 3.01411 14.6537ZM5.64081 12.6763H15.0593V13.7185C15.0593 13.9869 15.1485 14.2121 15.3269 14.3942C15.5054 14.5763 15.7261 14.6673 15.9891 14.6673H16.8203C17.0833 14.6673 17.304 14.5763 17.4825 14.3942C17.6609 14.2121 17.7502 13.9869 17.7502 13.7185V8.91709C17.7502 8.51458 17.7267 8.15758 17.6797 7.84611C17.6328 7.53464 17.5459 7.24474 17.4191 6.97639C17.2923 6.70805 17.1068 6.4397 16.8626 6.17136L16.1511 5.38789L15.4115 3.22437C15.2095 2.63497 14.9207 2.20371 14.545 1.93057C14.174 1.65743 13.7443 1.49212 13.2559 1.43461C13.0963 1.41545 12.8286 1.39867 12.4529 1.3843C12.0819 1.36992 11.6334 1.35794 11.1074 1.34836C10.5862 1.33878 10.0226 1.33398 9.41683 1.33398C8.88541 1.33398 8.38471 1.33767 7.91472 1.34505L7.84191 2.69014C8.31026 2.68211 8.83524 2.6781 9.41683 2.6781C10.4218 2.6781 11.2554 2.69008 11.9175 2.71404C12.5797 2.738 13.0329 2.76675 13.2771 2.80029C13.4884 2.82904 13.6622 2.89373 13.7983 2.99436C13.9345 3.09499 14.0425 3.2675 14.1224 3.51188L14.5662 4.856C14.6225 5.01413 14.6202 5.1483 14.5591 5.25851C14.4981 5.36873 14.383 5.42383 14.214 5.42383H6.3319L5.64081 5.9302V12.6763ZM7.00624 2.71067L7.07923 1.36225C6.82088 1.36884 6.58571 1.37619 6.37372 1.3843C6.19883 1.39108 6.04795 1.39838 5.92106 1.40623L5.84619 2.76972C6.10336 2.74893 6.45765 2.73037 6.90908 2.71404C6.94108 2.71289 6.97347 2.71177 7.00624 2.71067ZM1.40904 6.98817V9.28522C1.40904 9.44581 1.35262 9.58253 1.23977 9.69538C1.19196 9.74319 1.13987 9.78087 1.0835 9.80842V8.91709C1.0835 8.51458 1.10698 8.15758 1.15394 7.84611C1.20021 7.53919 1.28525 7.25321 1.40904 6.98817ZM3.37593 3.35967L3.42218 3.22437C3.62412 2.63497 3.91293 2.20371 4.28862 1.93057C4.42311 1.8328 4.56481 1.74884 4.71374 1.6787C4.72849 1.76324 4.73587 1.85083 4.73587 1.94147C4.73587 2.20189 4.67293 2.4406 4.54706 2.65762C4.41685 2.87029 4.24541 3.04173 4.03274 3.17194C3.97804 3.20432 3.92161 3.23253 3.86346 3.25657C3.71255 3.31898 3.55004 3.35335 3.37593 3.35967ZM10.9947 9.57118H7.81779C7.64403 9.57118 7.50315 9.51608 7.39513 9.40586C7.29182 9.29565 7.24016 9.14471 7.24016 8.95303V8.22707C7.24016 8.04018 7.29182 7.89403 7.39513 7.78861C7.50315 7.6784 7.64403 7.62329 7.81779 7.62329H10.9947C11.1685 7.62329 11.3094 7.6784 11.4174 7.78861C11.5254 7.89403 11.5794 8.04018 11.5794 8.22707V8.95303C11.5794 9.14471 11.5254 9.29565 11.4174 9.40586C11.3094 9.51608 11.1685 9.57118 10.9947 9.57118ZM15.813 9.70056C15.6721 9.84432 15.4913 9.91619 15.2706 9.91619C15.0593 9.91619 14.8808 9.84432 14.7352 9.70056C14.5943 9.55201 14.5239 9.36992 14.5239 9.15429V8.033C14.5239 7.81257 14.5943 7.63288 14.7352 7.49391C14.8808 7.35016 15.0593 7.27828 15.2706 7.27828C15.4913 7.27828 15.6721 7.34776 15.813 7.48672C15.9539 7.62569 16.0243 7.80778 16.0243 8.033V9.15429C16.0243 9.37471 15.9539 9.55681 15.813 9.70056Z",
      fill: "#191919"
    }));
  });
  function d1(e) {
    var t;
    let r = e.segment;
    let n = (t = e.showArrow) == null || t;
    if (r.transit_mode === e1.WALK) {
      if (r.time < 600) {
        return null;
      } else {
        return E.jsxs("div", {
          className: "transit-desc__segw",
          children: [E.jsxs("div", {
            className: "transit-desc__seg",
            children: [E.jsx(dQ, {}), Math.round(r.time / 60)]
          }), n && E.jsx(dK, {})]
        });
      }
    } else if (e8(r == null ? undefined : r.transit_mode)) {
      return E.jsxs("div", {
        className: "transit-desc__segw",
        children: [E.jsx("div", {
          className: "transit-desc__seg",
          children: te(r.transit.name)
        }), n && E.jsx(dK, {})]
      });
    } else if (r.transit_mode === e1.RAILWAY) {
      return E.jsxs("div", {
        className: "transit-desc__segw",
        children: [E.jsxs("div", {
          className: "transit-desc__seg transit-desc__seg--railway",
          children: [E.jsx(dY, {}), E.jsx("span", {
            children: te(r.transit.name)
          })]
        }), n && E.jsx(dK, {})]
      });
    } else if (r.transit_mode === e1.TAXI) {
      return E.jsxs("div", {
        className: "transit-desc__segw",
        children: [E.jsxs("div", {
          className: "transit-desc__seg transit-desc__seg--taxi",
          children: [E.jsx(d0, {}), "打车", r.cost ? ` \u{7EA6}${r.cost}\u{5143}` : ""]
        }), n && E.jsx(dK, {})]
      });
    } else {
      return null;
    }
  }
  let d2 = e => {
    let {
      route: r
    } = e;
    let n = (r.segments ?? []).filter(e => e.transit_mode !== "WALK" || e.time >= 600);
    if (n.length < 1) {
      return null;
    } else {
      return E.jsxs("div", {
        className: "transit-desc",
        children: [E.jsx("div", {
          className: "transit-desc__segs",
          children: n.map((e, t) => E.jsx(d1, {
            segment: e,
            showArrow: t !== n.length - 1
          }, t))
        }), E.jsxs("div", {
          className: "share_transit-desc__start",
          children: [r.time > 0 ? E.jsxs(E.Fragment, {
            children: ["约", tr(r.time), E.jsx("div", {
              className: "transit-item__comma",
              children: "·"
            })]
          }) : null, r.stops > 0 ? E.jsxs(E.Fragment, {
            children: [r.stops, "站", E.jsx("div", {
              className: "transit-item__comma",
              children: "·"
            })]
          }) : null, r.cost > 0 ? E.jsxs(E.Fragment, {
            children: [r.cost, "元", E.jsx("div", {
              className: "transit-item__comma",
              children: "·"
            })]
          }) : null, r.on_stop ? `${r.on_stop}\u{4E0A}\u{8F66}` : null]
        })]
      });
    }
  };
  function d3(e) {
    let {
      end: t,
      start: r,
      mode: n,
      modes: i,
      mode_path_info: a
    } = e;
    let [o, s] = reactCoreLibraryReexport.useState({});
    let [l, c] = reactCoreLibraryReexport.useState(n);
    reactCoreLibraryReexport.useEffect(() => {
      p();
    }, []);
    let d = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var t;
      if ((t = (e = o == null ? undefined : o[l]) == null ? undefined : e[0]) == null) {
        return undefined;
      } else {
        return t.data;
      }
    }, [o, l]);
    let u = reactCoreLibraryReexport.useMemo(() => {
      var e;
      if ((e = o == null ? undefined : o[l]) == null) {
        return undefined;
      } else {
        return e[0];
      }
    }, [o, l]);
    let p = () => {
      let e = {};
      for (let t in a) {
        let {
          route: r,
          routes: n,
          route_source: i
        } = a[t];
        if (n && n.length > 0) {
          e[t] = function (e, t) {
            let r = t.session_id;
            return t.routes.map(n => {
              var a;
              var o;
              let l = {
                sessionId: r,
                routeId: n.route_id,
                time: n.time,
                distance: n.distance,
                steps: n.steps.map(e => ({
                  id: e.instruction || W(),
                  path: e6(e.path)
                }))
              };
              if (e !== e0.transit) {
                return new tn(l, t.route_source);
              }
              let c = x(w({}, l), {
                cost: n.cost,
                walking_distance: n.walk_distance,
                on_stop: "",
                stops: 0,
                segments: n.segments ?? [],
                policies: t.route_policy ? [t.route_policy] : []
              });
              c.segments.forEach(e => {
                if ("transit" in e) {
                  e.transit.name = te(e.transit.name);
                  if (e8(e.transit_mode) || e1.RAILWAY === e.transit_mode) {
                    e.id = e.transit_mode + "_" + e.transit.name;
                  } else {
                    e.id = e.transit_mode;
                  }
                  if (e.transit.via_stops && e.transit.via_stops.length > 0) {
                    if ("on_station" in e.transit && e.transit.on_station.name === e.transit.via_stops[0].name) {
                      e.transit.via_stops.shift();
                    }
                    if (J(e.transit.via_stops).name === e.transit.estop) {
                      e.transit.via_stops.pop();
                    }
                  }
                  e.transit.via_num = (e.transit.via_stops ?? []).length;
                } else {
                  e.id = e.transit_mode;
                }
              });
              let d = c.segments.find(e => e8(e.transit_mode));
              c.on_stop = ((o = (a = d == null ? undefined : d.transit) == null ? undefined : a.on_station) == null ? undefined : o.name) ?? "";
              c.stops = n.segments.filter(e => e8(e.transit_mode)).reduce((e, t) => {
                var r;
                var n;
                return e + (((n = (r = t.transit) == null ? undefined : r.via_stops) == null ? undefined : n.length) ?? 0) + 1;
              }, 0);
              return new tn(c, t.route_source);
            });
          }(t, a[t]);
        } else if (r && i === e4.amap) {
          let n = e7[t](B(r));
          if (n) {
            let {
              error: r,
              data: a
            } = n;
            e[t] = a.map(e => new tn(e, i));
          }
        }
      }
      s(e);
    };
    return E.jsx("div", {
      className: "container",
      children: E.jsxs("div", {
        className: "route-card-container",
        children: [E.jsx("div", {
          className: "route-card-padding",
          children: E.jsx("div", {
            className: "route-card-content",
            children: u && E.jsx(dq, x(w({}, e), {
              currentRouteLine: u
            }))
          })
        }), E.jsx(dG, {
          start: r,
          end: t,
          modes: i,
          mode: l,
          updateMode: e => {
            c(e);
          },
          TransitComponent: () => {
            var e;
            return E.jsx(E.Fragment, {
              children: l === "transit" && (r == null ? undefined : r.city_code) === (t == null ? undefined : t.city_code) && d ? E.jsx(d2, {
                route: d
              }) : E.jsxs("div", {
                className: "route-init-len",
                children: [E.jsx("span", {
                  children: (e = d == null ? undefined : d.distance) < 1000 ? `${e}\u{7C73}` : `${(e / 1000).toFixed(1)}\u{516C}\u{91CC}`
                }), E.jsx("span", {
                  className: "share_route-init-dot",
                  children: "·"
                }), E.jsxs("span", {
                  children: ["约", tr(d == null ? undefined : d.time)]
                })]
              })
            });
          }
        })]
      })
    });
  }
  let d4 = (e, t) => {
    var r;
    var a;
    let o = B(e.fpa_common_param ?? ((r = t == null ? undefined : t.ext) == null ? undefined : r.fpa_common_param) ?? "");
    return {
      url: (a = window == null ? undefined : window.location) == null ? undefined : a.href,
      message_id: t == null ? undefined : t.message_id,
      rec_id: o == null ? undefined : o.rec_id,
      message_type: "local_life",
      card_type: e.widget_id,
      current_page: "chat_history"
    };
  };
  let d6 = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      title: r,
      titleId: n
    } = e;
    var i = k(e, ["title", "titleId"]);
    return reactCoreLibraryReexport.createElement("svg", w({
      width: 36,
      height: 43,
      viewBox: "0 0 36 43",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      "aria-labelledby": n
    }, i), r ? reactCoreLibraryReexport.createElement("title", {
      id: n
    }, r) : null, reactCoreLibraryReexport.createElement("path", {
      d: "M0.96875 25.2461C0.96875 22.8893 1.40495 20.6823 2.27734 18.625C3.14974 16.5677 4.36068 14.7643 5.91016 13.2148C7.47266 11.6654 9.28255 10.4544 11.3398 9.58203C13.4102 8.70964 15.6302 8.27344 18 8.27344C18.7943 8.27344 19.556 8.31901 20.2852 8.41016C21.0273 8.48828 21.6979 8.59896 22.2969 8.74219L16.0859 2.53125C15.9688 2.40104 15.8841 2.26432 15.832 2.12109C15.7799 1.96484 15.7539 1.80859 15.7539 1.65234C15.7539 1.3138 15.8646 1.02734 16.0859 0.792969C16.3073 0.558594 16.5872 0.441406 16.9258 0.441406C17.2904 0.441406 17.5833 0.558594 17.8047 0.792969L26.125 9.28906C26.4245 9.60156 26.5742 9.92708 26.5742 10.2656C26.5742 10.4349 26.5417 10.6042 26.4766 10.7734C26.4115 10.9297 26.2943 11.0924 26.125 11.2617L17.8047 19.6992C17.5964 19.9336 17.3099 20.0508 16.9453 20.0508C16.6068 20.0508 16.3203 19.9336 16.0859 19.6992C15.8646 19.4648 15.7539 19.1849 15.7539 18.8594C15.7539 18.6901 15.7799 18.5339 15.832 18.3906C15.8971 18.2474 15.9883 18.1107 16.1055 17.9805L22.8633 11.2031C22.1992 11.0339 21.444 10.9036 20.5977 10.8125C19.7643 10.7214 18.8984 10.6758 18 10.6758C15.9557 10.6758 14.0482 11.0534 12.2773 11.8086C10.5065 12.5508 8.95703 13.5859 7.62891 14.9141C6.30078 16.2422 5.25911 17.7917 4.50391 19.5625C3.7487 21.3203 3.37109 23.2148 3.37109 25.2461C3.37109 27.2904 3.7487 29.1979 4.50391 30.9688C5.25911 32.7396 6.30078 34.2956 7.62891 35.6367C8.95703 36.9779 10.5065 38.0195 12.2773 38.7617C14.0482 39.5169 15.9557 39.8945 18 39.8945C20.0312 39.8945 21.9258 39.5169 23.6836 38.7617C25.4544 38.0195 27.0039 36.9779 28.332 35.6367C29.6732 34.2956 30.7214 32.7396 31.4766 30.9688C32.2318 29.1979 32.6094 27.2904 32.6094 25.2461C32.6094 24.8815 32.7135 24.582 32.9219 24.3477C33.1302 24.1133 33.4167 23.9961 33.7812 23.9961C34.1458 23.9961 34.4388 24.1133 34.6602 24.3477C34.8945 24.582 35.0117 24.8815 35.0117 25.2461C35.0117 27.6159 34.5755 29.8359 33.7031 31.9062C32.8307 33.9635 31.6133 35.7734 30.0508 37.3359C28.5013 38.8854 26.6914 40.0964 24.6211 40.9688C22.5638 41.8542 20.3568 42.2969 18 42.2969C15.6302 42.2969 13.4102 41.8542 11.3398 40.9688C9.28255 40.0964 7.47266 38.8854 5.91016 37.3359C4.36068 35.7734 3.14974 33.9635 2.27734 31.9062C1.40495 29.8359 0.96875 27.6159 0.96875 25.2461Z",
      fill: "black"
    }));
  });
  (l = d5 || {}).ll_poi_card_widget = "ll_poi_card_widget";
  l.route_card = "route_card";
  l.ll_single_poi_card_widget = "ll_single_poi_card_widget";
  l.preview_image_card = "preview_image_card";
  l.ll_location_permission = "ll_location_permission";
  var d5 = l;
  function d9(e) {
    let {
      widgetContent: i,
      defaultDisplayText: a,
      handleClick: o,
      teaReportFn: s,
      message: l,
      logger: c
    } = e;
    let {
      applet_id: d,
      widget_data: u,
      widget_id: p
    } = i;
    reactCoreLibraryReexport.useEffect(() => {
      if (s && typeof s == "function") {
        s("first_party_card_h5_share_page_view", d4(i, l));
      }
    }, []);
    if (d !== "com.flow.locallife") {
      return null;
    }
    let f = B(u);
    if (!f) {
      return null;
    }
    let m = null;
    switch (p) {
      case "ll_poi_card_widget":
        m = E.jsx(eK, w({}, f));
        break;
      case "route_card":
        m = E.jsx(d3, x(w({}, f), {
          logger: c
        }));
        break;
      case "ll_single_poi_card_widget":
        m = E.jsx(Q, {
          poi: (f == null ? undefined : f.poi) ?? {}
        });
        break;
      case "preview_image_card":
        m = E.jsx(K, {
          imageList: (f == null ? undefined : f.image_list) ?? [],
          imageListHQ: (f == null ? undefined : f.image_list_hq) ?? []
        });
        break;
      case "ll_location_permission":
        m = E.jsx(eY, {
          widgetData: f
        });
        break;
      default:
        m = E.jsxs("div", {
          children: [" ", a, " "]
        });
    }
    return E.jsx(T, {
      onError: e => {
        let t = "share card render error";
        if (c != null) {
          c.error({
            message: t,
            eventName: t,
            error: new tl(t, e == null ? undefined : e.message),
            meta: {
              reportJsError: true
            }
          });
        }
      },
      fallbackRender: () => E.jsxs("div", {
        onClick: () => location.reload(),
        className: "render-error-wrapper",
        children: [E.jsx(d6, {
          className: "render-error-icon"
        }), E.jsx("div", {
          className: "render-error-text",
          children: "加载异常"
        })]
      }),
      children: E.jsx("div", {
        className: "theme-light",
        onClick: () => {
          if (p !== "ll_location_permission") {
            if (typeof s == "function") {
              s("first_party_card_h5_share_page_click", x(w({}, d4(i, l)), {
                click_from: "card"
              }));
            }
            if (o) {
              o();
            }
          }
        },
        children: m
      })
    });
  }
  require.r(exports);
  require.d(exports, {
    LocallifeWidgetId: function () {
      return d5;
    },
    default: function () {
      return d9;
    }
  });
}