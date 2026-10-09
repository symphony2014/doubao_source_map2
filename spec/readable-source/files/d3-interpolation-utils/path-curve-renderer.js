// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createPathRenderer'
// - Renamed export 's' to 'createAltRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 704678
         */
module.exports = function (module, exports, require) {
  function i(t, n, e) {
    var i = t._x1 - t._x0;
    var r = n - t._x1;
    var o = (t._y1 - t._y0) / (i || r < 0 && -0);
    var u = (e - t._y1) / (r || i < 0 && -0);
    return ((o < 0 ? -1 : 1) + (u < 0 ? -1 : 1)) * Math.min(Math.abs(o), Math.abs(u), Math.abs((o * r + u * i) / (i + r)) * 0.5) || 0;
  }
  function r(t, n) {
    var e = t._x1 - t._x0;
    if (e) {
      return ((t._y1 - t._y0) * 3 / e - n) / 2;
    } else {
      return n;
    }
  }
  function o(t, n, e) {
    var i = t._x0;
    var r = t._y0;
    var o = t._x1;
    var u = t._y1;
    var a = (o - i) / 3;
    t._context.bezierCurveTo(i + a, r + a * n, o - a, u - a * e, o, u);
  }
  function u(t) {
    this._context = t;
  }
  function a(t) {
    this._context = new s(t);
  }
  function s(t) {
    this._context = t;
  }
  function c(t) {
    return new u(t);
  }
  function h(t) {
    return new a(t);
  }
  u.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          o(this, this._t0, r(this, this._t0));
      }
      if (this._line || this._line !== 0 && this._point === 1) {
        this._context.closePath();
      }
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      var e = NaN;
      n *= 1;
      if ((t *= 1) !== this._x1 || n !== this._y1) {
        switch (this._point) {
          case 0:
            this._point = 1;
            if (this._line) {
              this._context.lineTo(t, n);
            } else {
              this._context.moveTo(t, n);
            }
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            o(this, r(this, e = i(this, t, n)), e);
            break;
          default:
            o(this, this._t0, e = i(this, t, n));
        }
        this._x0 = this._x1;
        this._x1 = t;
        this._y0 = this._y1;
        this._y1 = n;
        this._t0 = e;
      }
    }
  };
  (a.prototype = Object.create(u.prototype)).point = function (t, n) {
    u.prototype.point.call(this, n, t);
  };
  s.prototype = {
    moveTo: function (t, n) {
      this._context.moveTo(n, t);
    },
    closePath: function () {
      this._context.closePath();
    },
    lineTo: function (t, n) {
      this._context.lineTo(n, t);
    },
    bezierCurveTo: function (t, n, e, i, r, o) {
      this._context.bezierCurveTo(n, t, i, e, o, r);
    }
  };
  require.d(exports, {
    createPathRenderer: function () {
      return c;
    },
    createAltRenderer: function () {
      return h;
    }
  });
}