// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'useSmoothText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51369.a0f1843b.js
         * chunkId: 51369
         * moduleId: 899617
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var useIntervalCallback = require("use-interval-callback") /*id: 601556*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  let d = e => {
    let t = reactCoreLibraryReexport.useRef(e);
    t.current = t.current || e;
    return t.current;
  };
  let c = e => {
    let t = reactCoreLibraryReexport.useRef();
    let r = reactCoreLibraryReexport.useRef(e);
    if (r.current !== e) {
      t.current = r.current;
      r.current = e;
    }
    return t;
  };
  let h = () => {
    let [, e] = reactCoreLibraryReexport.useReducer(e => e + 1, 0);
    return e;
  };
  let f = 1 / 700 / 1000;
  let m = 1000 / 60 * 2;
  let g = (e, t) => {
    let r = 0;
    let n = Math.max(e.length, t.length);
    while (r !== n && r !== n - 1) {
      let l = Math.floor((r + n) / 2);
      if (e.slice(0, l) === t.slice(0, l)) {
        r = l;
      } else {
        n = l;
      }
    }
    return r;
  };
  let p = function (e, t = {}) {
    let {
      maxFirstTextSmoothSize: r,
      trailingSmooth: p,
      enable: v,
      pause: x,
      onSmoothFinished: w,
      onUpdate: b,
      onTextBreak: j,
      maxSpeed: k,
      expectedBufferSize: y,
      elasticCoefficient: N,
      tickDuration: C,
      initialSpeed: S,
      breakMode: L
    } = objectDefaultsUtil.defaults(isBooleanUtil.isBoolean(t) ? {} : {
      ...t
    }, {
      maxFirstTextSmoothSize: Infinity,
      trailingSmooth: false,
      pause: false,
      enable: !!t,
      expectedBufferSize: 15,
      elasticCoefficient: f,
      tickDuration: m,
      initialSpeed: 0.02,
      breakMode: "prefix"
    });
    let _ = isNumberUtil.isNumber(k) && k > 0 ? k : Infinity;
    let E = c(e);
    let M = reactCoreLibraryReexport.useRef(e.length <= r ? 1 : e.length);
    let R = reactCoreLibraryReexport.useRef(M.current);
    let B = d(v);
    let T = v || B && p && M.current < e.length;
    let [Z, z] = reactCoreLibraryReexport.useState(false);
    let F = reactCoreLibraryReexport.useRef(S);
    let A = () => isStringTypeCheck.isString(E.current) && !e.startsWith(E.current);
    if (A()) {
      let t = 0;
      if (L === "start") {
        t = 0;
      } else if (L === "end") {
        t = Math.max(e.length - 1, 0);
      } else if (L === "prefix") {
        t = Math.max(1, g(E.current ?? "", e));
      }
      M.current = t;
      R.current = Math.floor(M.current);
    }
    let O = R.current;
    let I = T && !Z ? e.slice(0, O) : e;
    let H = h();
    let $ = e => {
      if (e !== R.current) {
        R.current = e;
        H();
      }
    };
    let U = function (e) {
      let t = useLatestRef_1.useLatestRef(e);
      let r = reactCoreLibraryReexport.useCallback(function () {
        var e;
        var r = arguments.length;
        var n = Array(r);
        var l = 0;
        for (; l < r; l++) {
          n[l] = arguments[l];
        }
        if ((e = t.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, ...n);
        }
      }, []);
      return e && r;
    }(() => {
      z(true);
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (Z) {
        $(e.length);
        z(false);
        M.current = e.length;
      }
    }, [Z]);
    reactCoreLibraryReexport.useEffect(() => {
      if (b != null) {
        b({
          text: I,
          speed: F.current * 1000
        });
      }
    }, [O]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!T && w != null) {
        w();
      }
    }, [T]);
    useIntervalCallback.useIntervalCallback(() => {
      if (A()) {
        if (j != null) {
          j({
            prevText: E.current ?? "",
            currentText: e
          });
        }
        F.current = S;
        E.current = undefined;
      } else {
        let t = Math.max(e.length + (!v && p ? y * 2 : 0), y * 2) - M.current;
        F.current = Math.min(Math.max(0, F.current + N * (t - y) * C), _ / 1000);
        let r = C * F.current;
        M.current = Math.min(e.length, M.current + r);
        $(Math.floor(M.current));
      }
    }, T && !x ? C : undefined);
    return {
      text: I,
      flushCursor: U
    };
  };
  require.d(exports, {
    useSmoothText: function () {
      return p;
    }
  });
}