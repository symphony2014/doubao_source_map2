// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ZoomController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 132835
         */
module.exports = function (module, exports, require) {
  function n() {
    return (n = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var i = function () {
    function t(t, e) {
      var i = this;
      this._isZooming = false;
      this._disabled = false;
      this.handleMouseWheel = function (t) {
        if (i._options.preventDefault) {
          t.original.preventDefault();
        }
        var e = t.x;
        var n = t.y;
        var r = -t.normalizeWheel.spinY;
        var o = i._options.sensitivity;
        var a = o === undefined ? 1 : o;
        if (i._options.onZooming) {
          i._options.onZooming({
            delta: r,
            mouse: t,
            origin: [e, n],
            zoom: r > 0 ? r / (30 / a) + 1 : 1 / (1 - r / (30 / a)),
            position: [0, 0]
          });
        }
      };
      this.handleTouchStart = function (t) {
        var e = t.touches;
        if (e.length >= 2) {
          if (i._isZooming) {
            return;
          }
          if (i._options.onZoomStart) {
            i._options.onZoomStart();
          }
          i._isZooming = true;
          i._startTouchs = e.slice(0, 2);
        }
      };
      this.handleTouchMove = function (t) {
        var e = t.touches;
        if (i._isZooming && !(e.length < 2)) {
          if (t.original.preventDefault) {
            t.original.preventDefault();
          }
          var n = i._startTouchs;
          var r = n.map(function (t) {
            return t.identifier;
          });
          var o = e.filter(function (t) {
            return r.indexOf(t.identifier) !== -1;
          });
          var a = i.getTouchesDistance(n);
          var s = i.getTouchesDistance(o);
          i._startTouchs = o;
          var h = i.getOrigin(n);
          var l = i.getOrigin(o);
          if (i._options.onZooming) {
            i._options.onZooming({
              origin: h,
              zoom: s / a,
              position: [l[0] - h[0], l[1] - h[1]]
            });
          }
        }
      };
      this.handleTouchEnd = function (t) {
        var e = t.touches;
        if (i._isZooming) {
          var n = i._startTouchs.map(function (t) {
            return t.identifier;
          });
          if (e.filter(function (t) {
            return n.indexOf(t.identifier) !== -1;
          }).length !== 2) {
            i._isZooming = false;
            if (i._options.onZoomEnd) {
              i._options.onZoomEnd();
            }
          }
        }
      };
      this._dom = t;
      this._options = n({
        preventDefault: true
      }, e);
      this.initZoomEvents();
    }
    t.prototype.initZoomEvents = function () {
      var t = this._dom;
      t.on("touchstart", this.handleTouchStart);
      t.on("touchmove", this.handleTouchMove);
      t.on("touchend", this.handleTouchEnd);
      t.on("touchcancel", this.handleTouchEnd);
      t.on("wheel", this.handleMouseWheel);
    };
    t.prototype.disable = function () {
      this.destroy();
    };
    t.prototype.enable = function () {
      if (this._disabled) {
        this.initZoomEvents();
      }
    };
    t.prototype.getTouchVector = function (t) {
      var e = t[0].x;
      var n = t[0].y;
      return [t[1].x - e, t[1].y - n];
    };
    t.prototype.getTouchesDistance = function (t) {
      var e = t[0].x;
      var n = t[0].y;
      return Math.sqrt(Math.pow(e - t[1].x, 2) + Math.pow(n - t[1].y, 2));
    };
    t.prototype.getOrigin = function (t) {
      return [(t[0].x + t[1].x) / 2, (t[0].y + t[1].y) / 2];
    };
    t.prototype.destroy = function () {
      var t = this._dom;
      t.off("touchstart", this.handleTouchStart);
      t.off("touchmove", this.handleTouchMove);
      t.off("touchend", this.handleTouchEnd);
      t.off("touchcancel", this.handleTouchEnd);
      t.off("wheel", this.handleMouseWheel);
      this._isZooming = false;
      this._disabled = true;
    };
    return t;
  }();
  exports.ZoomController = i;
}