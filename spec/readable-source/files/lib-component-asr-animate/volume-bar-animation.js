// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-component-asr-animate.33713af8.js
         * chunkId: 44232
         * moduleId: 452095
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var m = classnamesUtils;
  let a = [0.3, 0.6, 0.9, 1, 0.9, 0.6, 0.3];
  let u = [0.01, 0.15, 0.1, 0.02, 0.07];
  let l = {
    1: [2],
    2: [0, 6],
    3: [0, 1, 6],
    4: [0, 1, 5, 6],
    5: [0, 1, 3, 5, 6],
    6: [0, 1, 2, 4, 5, 6],
    7: [0, 1, 2, 3, 4, 5, 6]
  };
  let s = (e, t) => Math.random() * (t - e) + e;
  let o = (e, t) => [2.4 + e * s(0.1, 0.3) * 18, 6 + e * s(-0.8, 0.6) * 15, 3.5999999999999996 + e * s(0, 0.6) * 17, 9.6 + e * s(-1.6, 1.2) * 12, 3.5999999999999996 + e * s(0, 0.6) * 17, 6 + e * s(-0.8, 0.6) * 15, 2.4 + e * s(0.1, 0.3) * 18].filter((e, i) => l[t.toString()].includes(i));
  function c(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  var h = class {
    updateAnimateWithVolume(e, t, i, r) {
      let n = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
      let m = o(t * r, i);
      if (e != null) {
        e.forEach((e, i) => {
          if (e) {
            if (!t || t <= 0.03) {
              e.style.height = "4px";
            } else {
              e.style.height = `${m[i]}px`;
              e.style.opacity = `${a[i]}`;
            }
          }
        });
      }
      if (t <= 0.03) {
        if (this.animateTimer) {
          clearTimeout(this.animateTimer);
        }
        if (n) {
          this.muteAnimateOnce(e, 0, i, n);
        }
        return;
      }
      if (this.animateTimer) {
        clearTimeout(this.animateTimer);
      }
      this.animateTimer = setTimeout(() => this.updateAnimateWithVolume(e, t, i, r), 100);
    }
    clearAnimateTimer() {
      if (this.animateTimer) {
        clearTimeout(this.animateTimer);
      }
      if (this.muteAnimateTimer) {
        clearTimeout(this.muteAnimateTimer);
      }
      this.animateTimer = null;
      this.muteAnimateTimer = null;
    }
    constructor() {
      var e = this;
      c(this, "animateTimer", null);
      c(this, "muteAnimateTimer", null);
      c(this, "muteAnimateOnce", function (t, i, r) {
        let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
        let m = i;
        if (m < u.length) {
          let i = o(u[m] * 5, r);
          if (t != null) {
            t.forEach((e, t) => {
              if (e) {
                e.style.height = `${i[t]}px`;
                e.style.opacity = `${a[t]}`;
              }
            });
          }
          m++;
          if (e.muteAnimateTimer) {
            clearTimeout(e.muteAnimateTimer);
          }
          e.muteAnimateTimer = setTimeout(() => n && e.muteAnimateOnce(t, m, r, n), 100);
        } else {
          if (e.muteAnimateTimer) {
            clearTimeout(e.muteAnimateTimer);
          }
          if (t != null) {
            t.forEach(e => {
              if (e) {
                e.style.height = "4px";
              }
            });
          }
        }
      });
    }
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var T = e => {
    let {
      count: t = 7,
      volume: i = 0,
      className: n = "",
      delayAnimate: a = true,
      barMaxHeight: u = 0,
      idPrefix: l = "",
      volumeScale: s = 5
    } = e;
    let o = reactCoreLibraryReexport.useRef([]);
    let c = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      A();
      c.current = new h();
      return () => {
        T();
      };
    }, []);
    let T = () => {
      var e;
      if ((e = c.current) !== null && e !== undefined) {
        e.clearAnimateTimer();
      }
    };
    let A = () => {
      let e = Array.from({
        length: t
      }, (e, t) => document.getElementById(`bar${l}${t + 1}`));
      if (e.every(e => e !== null)) {
        o.current = e;
      } else {
        requestAnimationFrame(A);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (o.current.every(e => e !== null)) {
        var e;
        if ((e = c.current) !== null && e !== undefined) {
          e.updateAnimateWithVolume(o.current, i || 0, t, s, a);
        }
      }
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: m("bar-container-xWrAiM", n),
      style: u ? {
        maxHeight: u
      } : {},
      children: Array.from({
        length: t
      }, (e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "bar-eo8REx",
        id: `bar${l}${t + 1}`
      }, t))
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return T;
    }
  });
}