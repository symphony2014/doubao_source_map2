// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BX' to 'createAnimatedValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 556563
         */
module.exports = function (module, exports, require) {
  var subscriptionManagerClass = require("subscription-manager-class") /*id: 604672*/;
  var calculateFpsFromFrameTime = require("calculate-fps-from-frame-time") /*id: 810590*/;
  var frameTimeCache = require("frame-time-cache") /*id: 33311*/;
  var frameloopSchedulerUtils_1 = require("frameloop-scheduler-utils_1") /*id: 668554*/;
  let a = t => !isNaN(parseFloat(t));
  let l = {
    current: undefined
  };
  class u {
    setCurrent(t) {
      this.current = t;
      this.updatedAt = frameTimeCache.frameTimeCache.now();
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
          frameloopSchedulerUtils_1.scheduleFrame.read(() => {
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
      let e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      if (e && this.passiveEffect) {
        this.passiveEffect(t, this.updateAndNotify);
      } else {
        this.updateAndNotify(t, e);
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
      let t = frameTimeCache.frameTimeCache.now();
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
      var i = this;
      this.canTrackVelocity = null;
      this.events = {};
      this.updateAndNotify = function (t) {
        var e;
        var n;
        let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let o = frameTimeCache.frameTimeCache.now();
        if (i.updatedAt !== o) {
          i.setPrevFrameValue();
        }
        i.prev = i.current;
        i.setCurrent(t);
        if (i.current !== i.prev && ((e = i.events.change) === null || e === undefined || e.notify(i.current), i.dependents)) {
          for (let t of i.dependents) {
            t.dirty();
          }
        }
        if (r) {
          if ((n = i.events.renderRequest) !== null && n !== undefined) {
            n.notify(i.current);
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
    createAnimatedValue: function () {
      return h;
    }
  });
}