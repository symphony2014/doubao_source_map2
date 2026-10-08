// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jt' to 'animateElement'
// - Renamed export 'sT' to 'stopAnimation'
// - Renamed export 'wy' to 'clearAnimationRecord'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 518404
         */
module.exports = function (module, exports, require) {
  let n = {};
  var o;
  (o = l || {})[o.Fast = 200] = "Fast";
  o[o.Default = 400] = "Default";
  o[o.Slow = 600] = "Slow";
  var l = o;
  let s = e => (1 - Math.cos(e * Math.PI)) / 2;
  let a = (e, i) => i === "scrollLeft" || i === "scrollTop" ? e[i] : parseFloat(window.getComputedStyle(e)[i]);
  let c = (e, i) => {
    let r = Object.keys(i)[0];
    let n = i[r];
    if (r === "scrollLeft" || r === "scrollTop") {
      e[r] = n;
    } else {
      e.style[r] = `${n}px`;
    }
  };
  let d = e => {
    try {
      let {
        duration: i = l.Default,
        ele: r,
        styles: o,
        complete: d
      } = e;
      let u = Object.keys(o).map(e => ({
        [e]: {
          start: a(r, e),
          end: parseFloat(o[e])
        }
      }));
      let h = Date.now();
      let f = () => {
        try {
          let e = Date.now();
          let n = Math.max(0, h + i - e);
          let o = s(1 - (n / i || 0));
          u.forEach(e => {
            let [i, {
              start: n,
              end: l
            }] = Object.entries(e)[0];
            c(r, {
              [i]: (l - n) * o + n
            });
          });
          if (n !== 0) {
            window.requestAnimationFrame(f);
          } else if (d != null) {
            d();
          }
        } catch (i) {
          var n;
          if ((n = e.fail) !== null && n !== undefined) {
            n.call(e, i);
          }
        }
      };
      let g = window.requestAnimationFrame(f);
      n[r.toString()] ||= {
        reqId: g,
        fail: e.fail
      };
    } catch (r) {
      var i;
      if ((i = e.fail) !== null && i !== undefined) {
        i.call(e, r);
      }
    }
  };
  let u = e => {
    let i = n[e.ele.toString()];
    if (i) {
      window.cancelAnimationFrame(i.reqId);
      if (i.fail) {
        i.fail();
      }
    }
  };
  let h = e => delete n[e];
  require.d(exports, {
    animateElement: function () {
      return d;
    },
    stopAnimation: function () {
      return u;
    },
    clearAnimationRecord: function () {
      return h;
    }
  });
}