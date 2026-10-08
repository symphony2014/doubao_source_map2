// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pn' to 'cancelScheduler'
// - Renamed export 'S6' to 'frameSteps'
// - Renamed export 'w0' to 'schedulerState'
// - Renamed export 'Wi' to 'frameScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 92608
         */
module.exports = function (module, exports, require) {
  var identityFunction_1 = require("identity-function_1") /*id: 743792*/;
  class r {
    add(t) {
      if (!this.scheduled.has(t)) {
        this.scheduled.add(t);
        this.order.push(t);
        return true;
      }
    }
    remove(t) {
      let e = this.order.indexOf(t);
      if (e !== -1) {
        this.order.splice(e, 1);
        this.scheduled.delete(t);
      }
    }
    clear() {
      this.order.length = 0;
      this.scheduled.clear();
    }
    constructor() {
      this.order = [];
      this.scheduled = new Set();
    }
  }
  let s = ["prepare", "read", "update", "preRender", "render", "postRender"];
  let {
    schedule: o,
    cancel: a,
    state: l,
    steps: u
  } = function (t, e) {
    let i = false;
    let n = true;
    let o = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    let a = s.reduce((t, e) => {
      t[e] = function (t) {
        let e = new r();
        let i = new r();
        let n = 0;
        let s = false;
        let o = false;
        let a = new WeakSet();
        let l = {
          schedule: function (t, r = false, o = false) {
            let l = o && s;
            let u = l ? e : i;
            if (r) {
              a.add(t);
            }
            if (u.add(t) && l && s) {
              n = e.order.length;
            }
            return t;
          },
          cancel: t => {
            i.remove(t);
            a.delete(t);
          },
          process: r => {
            if (s) {
              o = true;
              return;
            }
            s = true;
            [e, i] = [i, e];
            i.clear();
            if (n = e.order.length) {
              for (let i = 0; i < n; i++) {
                let n = e.order[i];
                n(r);
                if (a.has(n)) {
                  l.schedule(n);
                  t();
                }
              }
            }
            s = false;
            if (o) {
              o = false;
              l.process(r);
            }
          }
        };
        return l;
      }(() => i = true);
      return t;
    }, {});
    let l = t => a[t].process(o);
    let u = () => {
      let r = performance.now();
      i = false;
      o.delta = n ? 1000 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1);
      o.timestamp = r;
      o.isProcessing = true;
      s.forEach(l);
      o.isProcessing = false;
      if (i && e) {
        n = false;
        t(u);
      }
    };
    let h = () => {
      i = true;
      n = true;
      if (!o.isProcessing) {
        t(u);
      }
    };
    return {
      schedule: s.reduce((t, e) => {
        let n = a[e];
        t[e] = function (t, e = false, r = false) {
          if (!i) {
            h();
          }
          return n.schedule(t, e, r);
        };
        return t;
      }, {}),
      cancel: t => s.forEach(e => a[e].cancel(t)),
      state: o,
      steps: a
    };
  }(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : identityFunction_1.identity, true);
  require.d(exports, {
    cancelScheduler: function () {
      return a;
    },
    frameSteps: function () {
      return u;
    },
    schedulerState: function () {
      return l;
    },
    frameScheduler: function () {
      return o;
    }
  });
}