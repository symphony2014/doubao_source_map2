// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'a' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 294010
         */
module.exports = function (module, exports, require) {
  exports.Animation = undefined;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let n = konvaCoreConfig.glob.performance && konvaCoreConfig.glob.performance.now ? function () {
    return konvaCoreConfig.glob.performance.now();
  } : function () {
    return new Date().getTime();
  };
  class s {
    constructor(t, e) {
      this.id = s.animIdCounter++;
      this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: n(),
        frameRate: 0
      };
      this.func = t;
      this.setLayers(e);
    }
    setLayers(t) {
      let e = [];
      if (t) {
        e = Array.isArray(t) ? t : [t];
      }
      this.layers = e;
      return this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(t) {
      let e = this.layers;
      let i = e.length;
      for (let r = 0; r < i; r++) {
        if (e[r]._id === t._id) {
          return false;
        }
      }
      this.layers.push(t);
      return true;
    }
    isRunning() {
      let t = s.animations;
      let e = t.length;
      for (let i = 0; i < e; i++) {
        if (t[i].id === this.id) {
          return true;
        }
      }
      return false;
    }
    start() {
      this.stop();
      this.frame.timeDiff = 0;
      this.frame.lastTime = n();
      s._addAnimation(this);
      return this;
    }
    stop() {
      s._removeAnimation(this);
      return this;
    }
    _updateFrameObject(t) {
      this.frame.timeDiff = t - this.frame.lastTime;
      this.frame.lastTime = t;
      this.frame.time += this.frame.timeDiff;
      this.frame.frameRate = 1000 / this.frame.timeDiff;
    }
    static _addAnimation(t) {
      this.animations.push(t);
      this._handleAnimation();
    }
    static _removeAnimation(t) {
      let e = t.id;
      let i = this.animations;
      let r = i.length;
      for (let t = 0; t < r; t++) {
        if (i[t].id === e) {
          this.animations.splice(t, 1);
          break;
        }
      }
    }
    static _runFrames() {
      let t = {};
      let e = this.animations;
      for (let i = 0; i < e.length; i++) {
        let r;
        let a = e[i];
        let s = a.layers;
        let o = a.func;
        a._updateFrameObject(n());
        let h = s.length;
        if (!o || o.call(a, a.frame) !== false) {
          for (let e = 0; e < h; e++) {
            let i = s[e];
            if (i._id !== undefined) {
              t[i._id] = i;
            }
          }
        }
      }
      for (let e in t) {
        if (t.hasOwnProperty(e)) {
          t[e].batchDraw();
        }
      }
    }
    static _animationLoop() {
      if (s.animations.length) {
        s._runFrames();
        konvaTransformUtil.Util.requestAnimFrame(s._animationLoop);
      } else {
        s.animRunning = false;
      }
    }
    static _handleAnimation() {
      if (!this.animRunning) {
        this.animRunning = true;
        konvaTransformUtil.Util.requestAnimFrame(this._animationLoop);
      }
    }
  }
  exports.Animation = s;
  s.animations = [];
  s.animIdCounter = 0;
  s.animRunning = false;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}