// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ET' to 'createPath'
// - Renamed export 'y$' to 'Path'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 827074
         */
module.exports = function (module, exports, require) {
  let i = Math.PI;
  let r = i * 2;
  let o = r - 0.000001;
  function u(t) {
    this._ += t[0];
    for (let n = 1, e = t.length; n < e; ++n) {
      this._ += arguments[n] + t[n];
    }
  }
  class a {
    constructor(t) {
      this._x0 = this._y0 = this._x1 = this._y1 = null;
      this._ = "";
      this._append = t == null ? u : function (t) {
        let n = Math.floor(t);
        if (!(n >= 0)) {
          throw Error(`invalid digits: ${t}`);
        }
        if (n > 15) {
          return u;
        }
        let e = 10 ** n;
        return function (t) {
          this._ += t[0];
          for (let n = 1, i = t.length; n < i; ++n) {
            this._ += Math.round(arguments[n] * e) / e + t[n];
          }
        };
      }(t);
    }
    moveTo(t, n) {
      this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0;
        this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(t, n) {
      this._append`L${this._x1 = +t},${this._y1 = +n}`;
    }
    quadraticCurveTo(t, n, e, i) {
      this._append`Q${+t},${+n},${this._x1 = +e},${this._y1 = +i}`;
    }
    bezierCurveTo(t, n, e, i, r, o) {
      this._append`C${+t},${+n},${+e},${+i},${this._x1 = +r},${this._y1 = +o}`;
    }
    arcTo(t, n, e, r, o) {
      t *= 1;
      n *= 1;
      e *= 1;
      r *= 1;
      if ((o *= 1) < 0) {
        throw Error(`negative radius: ${o}`);
      }
      let u = this._x1;
      let a = this._y1;
      let s = e - t;
      let c = r - n;
      let h = u - t;
      let f = a - n;
      let l = h * h + f * f;
      if (this._x1 === null) {
        this._append`M${this._x1 = t},${this._y1 = n}`;
      } else if (l > 0.000001) {
        if (Math.abs(f * s - c * h) > 0.000001 && o) {
          let _ = e - u;
          let p = r - a;
          let y = s * s + c * c;
          let d = Math.sqrt(y);
          let x = Math.sqrt(l);
          let g = o * Math.tan((i - Math.acos((y + l - (_ * _ + p * p)) / (d * 2 * x))) / 2);
          let v = g / x;
          let m = g / d;
          if (Math.abs(v - 1) > 0.000001) {
            this._append`L${t + v * h},${n + v * f}`;
          }
          this._append`A${o},${o},0,0,${+(f * _ > h * p)},${this._x1 = t + m * s},${this._y1 = n + m * c}`;
        } else {
          this._append`L${this._x1 = t},${this._y1 = n}`;
        }
      }
    }
    arc(t, n, e, u, a, s) {
      t *= 1;
      n *= 1;
      e *= 1;
      s = !!s;
      if (e < 0) {
        throw Error(`negative radius: ${e}`);
      }
      let c = e * Math.cos(u);
      let h = e * Math.sin(u);
      let f = t + c;
      let l = n + h;
      let _ = s ^ 1;
      let p = s ? u - a : a - u;
      if (this._x1 === null) {
        this._append`M${f},${l}`;
      } else if (Math.abs(this._x1 - f) > 0.000001 || Math.abs(this._y1 - l) > 0.000001) {
        this._append`L${f},${l}`;
      }
      if (e) {
        if (p < 0) {
          p = p % r + r;
        }
        if (p > o) {
          this._append`A${e},${e},0,1,${_},${t - c},${n - h}A${e},${e},0,1,${_},${this._x1 = f},${this._y1 = l}`;
        } else if (p > 0.000001) {
          this._append`A${e},${e},0,${+(p >= i)},${_},${this._x1 = t + e * Math.cos(a)},${this._y1 = n + e * Math.sin(a)}`;
        }
      }
    }
    rect(t, n, e, i) {
      this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${e *= 1}v${+i}h${-e}Z`;
    }
    toString() {
      return this._;
    }
  }
  function s() {
    return new a();
  }
  s.prototype = a.prototype;
  require.d(exports, {
    createPath: function () {
      return s;
    },
    Path: function () {
      return a;
    }
  });
}