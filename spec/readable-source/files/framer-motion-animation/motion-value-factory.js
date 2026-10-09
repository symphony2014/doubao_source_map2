// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BX' to 'createMotionValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 413604
         */
module.exports = function (module, exports, require) {
  var subscriptionManagerClass = require("subscription-manager-class") /*id: 604672*/;
  var calculateFpsFromFrameTime = require("calculate-fps-from-frame-time") /*id: 810590*/;
  var performanceTimingUtility = require("performance-timing-utility") /*id: 602145*/;
  var frameloopSchedulerUtils = require("frameloop-scheduler-utils") /*id: 232060*/;
  let a = t => !isNaN(parseFloat(t));
  let l = {
    current: undefined
  };
  class u {
    setCurrent(t) {
      this.current = t;
      this.updatedAt = performanceTimingUtility.performanceTimer.now();
      if (this.canTrackVelocity === null && t !== undefined) {
        this.canTrackVelocity = a(this.current);
      }
    }
    setPrevFrameValue(t = this.current) {
      this.prevFrameValue = t;
      this.prevUpdatedAt = this.updatedAt;
    }
    onChange(t) {
      return this.on("change", t);
    }
    on(t, e) {
      this.events[t] ||= new subscriptionManagerClass.SubscriptionManager();
      let i = this.events[t].add(e);
      if (t === "change") {
        return () => {
          i();
          frameloopSchedulerUtils.scheduleFrame.read(() => {
            if (!this.events.change.getSize()) {
              this.stop();
            }
          });
        };
      } else {
        return i;
      }
    }
    clearListeners() {
      for (let t in this.events) {
        this.events[t].clear();
      }
    }
    attach(t, e) {
      this.passiveEffect = t;
      this.stopPassiveEffect = e;
    }
    set(t) {
      if (this.passiveEffect) {
        this.passiveEffect(t, this.updateAndNotify);
      } else {
        this.updateAndNotify(t);
      }
    }
    setWithVelocity(t, e, i) {
      this.set(e);
      this.prev = undefined;
      this.prevFrameValue = t;
      this.prevUpdatedAt = this.updatedAt - i;
    }
    jump(t) {
      let e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      this.updateAndNotify(t);
      this.prev = t;
      this.prevUpdatedAt = this.prevFrameValue = undefined;
      if (e) {
        this.stop();
      }
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
    dirty() {
      var t;
      if ((t = this.events.change) !== null && t !== undefined) {
        t.notify(this.current);
      }
    }
    addDependent(t) {
      this.dependents ||= new Set();
      this.dependents.add(t);
    }
    removeDependent(t) {
      if (this.dependents) {
        this.dependents.delete(t);
      }
    }
    get() {
      if (l.current) {
        l.current.push(this);
      }
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let t = performanceTimingUtility.performanceTimer.now();
      if (!this.canTrackVelocity || this.prevFrameValue === undefined || t - this.updatedAt > 30) {
        return 0;
      }
      let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return calculateFpsFromFrameTime.calculateFps(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
    }
    start(t) {
      this.stop();
      return new Promise(e => {
        this.hasAnimated = true;
        this.animation = t(e);
        if (this.events.animationStart) {
          this.events.animationStart.notify();
        }
      }).then(() => {
        if (this.events.animationComplete) {
          this.events.animationComplete.notify();
        }
        this.clearAnimation();
      });
    }
    stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      var t;
      var e;
      if ((t = this.dependents) !== null && t !== undefined) {
        t.clear();
      }
      if ((e = this.events.destroy) !== null && e !== undefined) {
        e.notify();
      }
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
    constructor(t, e = {}) {
      this.canTrackVelocity = null;
      this.events = {};
      this.updateAndNotify = t => {
        let e = performanceTimingUtility.performanceTimer.now();
        if (this.updatedAt !== e) {
          this.setPrevFrameValue();
        }
        this.prev = this.current;
        this.setCurrent(t);
        if (this.current !== this.prev) {
          var i;
          if ((i = this.events.change) !== null && i !== undefined) {
            i.notify(this.current);
          }
          if (this.dependents) {
            for (let t of this.dependents) {
              t.dirty();
            }
          }
        }
      };
      this.hasAnimated = false;
      this.setCurrent(t);
      this.owner = e.owner;
    }
  }
  function h(t, e) {
    return new u(t, e);
  }
  require.d(exports, {
    createMotionValue: function () {
      return h;
    }
  });
}