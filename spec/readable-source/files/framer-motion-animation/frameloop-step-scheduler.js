// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createFrameloopScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 57733
         */
module.exports = function (module, exports, require) {
  var emptyObjectExport_2 = require("empty-object-export_2") /*id: 824789*/;
  let r = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
  var projectionMetricsState = require("projection-metrics-state") /*id: 7808*/;
  function o(t, e) {
    let i = false;
    let o = true;
    let a = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    let l = () => i = true;
    let u = r.reduce((t, i) => {
      t[i] = function (t, e) {
        let i = new Set();
        let n = new Set();
        let r = false;
        let o = false;
        let a = new WeakSet();
        let l = {
          delta: 0,
          timestamp: 0,
          isProcessing: false
        };
        let u = 0;
        function h(e) {
          if (a.has(e)) {
            d.schedule(e);
            t();
          }
          u++;
          e(l);
        }
        let d = {
          schedule: function (t, e = false, s = false) {
            let o = s && r ? i : n;
            if (e) {
              a.add(t);
            }
            if (!o.has(t)) {
              o.add(t);
            }
            return t;
          },
          cancel: t => {
            n.delete(t);
            a.delete(t);
          },
          process: t => {
            l = t;
            if (r) {
              o = true;
              return;
            }
            r = true;
            [i, n] = [n, i];
            i.forEach(h);
            if (e && projectionMetricsState.getProjectionMetrics.value) {
              projectionMetricsState.getProjectionMetrics.value.frameloop[e].push(u);
            }
            u = 0;
            i.clear();
            r = false;
            if (o) {
              o = false;
              d.process(t);
            }
          }
        };
        return d;
      }(l, e ? i : undefined);
      return t;
    }, {});
    let {
      setup: h,
      read: d,
      resolveKeyframes: c,
      preUpdate: p,
      update: m,
      preRender: f,
      render: v,
      postRender: g
    } = u;
    let y = () => {
      let r = emptyObjectExport_2.emptyObject.useManualTiming ? a.timestamp : performance.now();
      i = false;
      if (!emptyObjectExport_2.emptyObject.useManualTiming) {
        a.delta = o ? 1000 / 60 : Math.max(Math.min(r - a.timestamp, 40), 1);
      }
      a.timestamp = r;
      a.isProcessing = true;
      h.process(a);
      d.process(a);
      c.process(a);
      p.process(a);
      m.process(a);
      f.process(a);
      v.process(a);
      g.process(a);
      a.isProcessing = false;
      if (i && e) {
        o = false;
        t(y);
      }
    };
    let x = () => {
      i = true;
      o = true;
      if (!a.isProcessing) {
        t(y);
      }
    };
    return {
      schedule: r.reduce((t, e) => {
        let n = u[e];
        t[e] = function (t, e = false, r = false) {
          if (!i) {
            x();
          }
          return n.schedule(t, e, r);
        };
        return t;
      }, {}),
      cancel: t => {
        for (let e = 0; e < r.length; e++) {
          u[r[e]].cancel(t);
        }
      },
      state: a,
      steps: u
    };
  }
  require.d(exports, {
    createFrameloopScheduler: function () {
      return o;
    }
  });
}