// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'KeyframeResolver'
// - Renamed export 'm' to 'flushKeyframes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 717903
         */
module.exports = function (module, exports, require) {
  var cssTransformCalculators = require("css-transform-calculators") /*id: 271813*/;
  var frameloopSchedulerUtils_1 = require("frameloop-scheduler-utils_1") /*id: 668554*/;
  let s = new Set();
  let o = false;
  let a = false;
  let l = false;
  function u() {
    if (a) {
      let t = Array.from(s).filter(t => t.needsMeasurement);
      let e = new Set(t.map(t => t.element));
      let i = new Map();
      e.forEach(t => {
        let e = cssTransformCalculators.getTransformValues(t);
        if (e.length) {
          i.set(t, e);
          t.render();
        }
      });
      t.forEach(t => t.measureInitialState());
      e.forEach(t => {
        t.render();
        let e = i.get(t);
        if (e) {
          e.forEach(e => {
            var i;
            let [n, r] = e;
            if ((i = t.getValue(n)) !== null && i !== undefined) {
              i.set(r);
            }
          });
        }
      });
      t.forEach(t => t.measureEndState());
      t.forEach(t => {
        if (t.suspendedScrollY !== undefined) {
          window.scrollTo(0, t.suspendedScrollY);
        }
      });
    }
    a = false;
    o = false;
    s.forEach(t => t.complete(l));
    s.clear();
  }
  function h() {
    s.forEach(t => {
      t.readKeyframes();
      if (t.needsMeasurement) {
        a = true;
      }
    });
  }
  function c() {
    l = true;
    h();
    u();
    l = false;
  }
  class d {
    scheduleResolve() {
      this.state = "scheduled";
      if (this.isAsync) {
        s.add(this);
        if (!o) {
          o = true;
          frameloopSchedulerUtils_1.scheduleFrame.read(h);
          frameloopSchedulerUtils_1.scheduleFrame.resolveKeyframes(u);
        }
      } else {
        this.readKeyframes();
        this.complete();
      }
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: t,
        name: e,
        element: i,
        motionValue: n
      } = this;
      if (t[0] === null) {
        let r = n == null ? undefined : n.get();
        let s = t[t.length - 1];
        if (r !== undefined) {
          t[0] = r;
        } else if (i && e) {
          let n = i.readValue(e, s);
          if (n != null) {
            t[0] = n;
          }
        }
        if (t[0] === undefined) {
          t[0] = s;
        }
        if (n && r === undefined) {
          n.set(t[0]);
        }
      }
      (function (t) {
        for (let i = 1; i < t.length; i++) {
          var e;
          if ((e = t[i]) === null || e === undefined) {
            t[i] = t[i - 1];
          }
        }
      })(t);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = false) {
      this.state = "complete";
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t);
      s.delete(this);
    }
    cancel() {
      if (this.state === "scheduled") {
        s.delete(this);
        this.state = "pending";
      }
    }
    resume() {
      if (this.state === "pending") {
        this.scheduleResolve();
      }
    }
    constructor(t, e, i, n, r, s = false) {
      this.state = "pending";
      this.isAsync = false;
      this.needsMeasurement = false;
      this.unresolvedKeyframes = [...t];
      this.onComplete = e;
      this.name = i;
      this.motionValue = n;
      this.element = r;
      this.isAsync = s;
    }
  }
  require.d(exports, {
    KeyframeResolver: function () {
      return d;
    },
    flushKeyframes: function () {
      return c;
    }
  });
}