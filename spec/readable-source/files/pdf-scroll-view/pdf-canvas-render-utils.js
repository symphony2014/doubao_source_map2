// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_A' to 'renderPdfRegions'
// - Renamed export 'uN' to 'devicePixelRatio'
// - Renamed export 'Kg' to 'getFirstPageSize'
// - Renamed export 'y7' to 'canvasToBlob'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 886409
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    return {
      x: t.x * e[0] + t.y * e[2] + 0,
      y: t.x * e[1] + t.y * e[3] + 0
    };
  }
  require("xss-content-sanitizer") /*id: 508971*/;
  class a {
    get isInitState() {
      return this.m[0] === 1 && this.m[1] === 0 && this.m[2] === 0 && this.m[3] === 1 && this.m[4] === 0 && this.m[5] === 0;
    }
    reset() {
      this.m = [1, 0, 0, 1, 0, 0];
      return this;
    }
    clone() {
      return new a(this.m.map(e => e));
    }
    append(e) {
      let t;
      let n = this.m;
      t = e instanceof a ? e.m : e;
      let r = n[0] * t[0] + n[2] * t[1];
      let l = n[1] * t[0] + n[3] * t[1];
      let i = n[0] * t[2] + n[2] * t[3];
      let o = n[1] * t[2] + n[3] * t[3];
      let s = n[0] * t[4] + n[2] * t[5] + n[4];
      let c = n[1] * t[4] + n[3] * t[5] + n[5];
      n[0] = r;
      n[1] = l;
      n[2] = i;
      n[3] = o;
      n[4] = s;
      n[5] = c;
      return this;
    }
    prepend(e) {
      let t;
      let n = this.m;
      t = e instanceof a ? e.m : e;
      let r = n[0] * t[0] + t[2] * n[1];
      let l = n[0] * t[1] + t[3] * n[1];
      let i = n[2] * t[0] + n[3] * t[2];
      let o = n[2] * t[1] + n[3] * t[3];
      let s = t[0] * n[4] + t[2] * n[5] + t[4];
      let c = t[1] * n[4] + t[3] * n[5] + t[5];
      n[0] = r;
      n[1] = l;
      n[2] = i;
      n[3] = o;
      n[4] = s;
      n[5] = c;
      return this;
    }
    inverse() {
      let e = new a(this.m);
      let t = e.m;
      let n = 1 / (t[0] * t[3] - t[1] * t[2]);
      let r = t[3] * n;
      let l = -t[1] * n;
      let i = -t[2] * n;
      let o = t[0] * n;
      let s = n * (t[2] * t[5] - t[3] * t[4]);
      let c = n * (t[1] * t[4] - t[0] * t[5]);
      t[0] = r;
      t[1] = l;
      t[2] = i;
      t[3] = o;
      t[4] = s;
      t[5] = c;
      return e;
    }
    translate(e) {
      return this.append([1, 0, 0, 1, e.x, e.y]);
    }
    rotate(e, t) {
      let n = e * Math.PI / 180;
      let r = Math.cos(n);
      let a = Math.sin(n);
      let l = 0;
      let i = 0;
      let o = 0;
      let s = 0;
      if (t) {
        o = (l = t.x) - l * r + (i = t.y) * a;
        s = i - l * a - i * r;
      }
      return this.append([r, a, -a, r, o, s]);
    }
    skew(e = 0, t = 0, n) {
      if (n) {
        this.translate(n);
      }
      let r = Math.tan(e * Math.PI / 180);
      let a = Math.tan((t |= 0) * Math.PI / 180);
      this.append([1, a, r, 1, 0, 0]);
      if (n) {
        this.translate({
          x: -n.x,
          y: -n.y
        });
      }
      return this;
    }
    scale(e = 0, t = 0, n) {
      if (n) {
        this.translate(n);
      }
      this.append([e, 0, 0, t, 0, 0]);
      if (n) {
        this.translate({
          x: -n.x,
          y: -n.y
        });
      }
      return this;
    }
    transformCoordinate(e, t) {
      return [e * this.m[0] + t * this.m[2] + this.m[4], e * this.m[1] + t * this.m[3] + this.m[5]];
    }
    get scaled() {
      let e = this.m;
      return {
        x: Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        y: Math.sqrt(e[2] * e[2] + e[3] * e[3])
      };
    }
    get translated() {
      let e = this.m;
      return {
        x: e[4],
        y: e[5]
      };
    }
    get transforms() {
      let e = this.m;
      let t = r(e, {
        x: 0,
        y: 1
      });
      let n = r(e, {
        x: 1,
        y: 1
      });
      let a = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
      let l = 180 / Math.PI * Math.atan2(n.y, n.x);
      return {
        translateX: e[4],
        translateY: e[5],
        scaleX: Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        scaleY: Math.sqrt(e[2] * e[2] + e[3] * e[3]),
        skewX: a,
        skewY: l,
        rotation: a
      };
    }
    applyToPoint(e) {
      let {
        x: t,
        y: n
      } = e;
      e.x = t * this.m[0] + n * this.m[2] + this.m[4];
      e.y = t * this.m[1] + n * this.m[3] + this.m[5];
      return this;
    }
    applyToVector(e) {
      let {
        x: t,
        y: n
      } = e;
      e.x = t * this.m[0] + n * this.m[2];
      e.y = t * this.m[1] + n * this.m[3];
      return this;
    }
    applyToContext(e) {
      e.transform.apply(e, this.m);
    }
    toJSON() {
      return [...this.m];
    }
    toString() {
      return `matrix(${this.toJSON().join(", ")});`;
    }
    constructor(e) {
      var t;
      var n;
      var r;
      n = undefined;
      if ((t = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "m", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = n;
      }
      e = e || [1, 0, 0, 1, 0, 0];
      this.m = [e[0], e[1], e[2], e[3], e[4], e[5]];
    }
  }
  let l = (e, t) => {
    let n = Math.max(e.x, t.x);
    let r = Math.min(e.x + e.width, t.x + t.width);
    let a = Math.max(e.y, t.y);
    let l = Math.min(e.y + e.height, t.y + t.height);
    if (r >= n && l >= a) {
      return {
        x: n,
        y: a,
        width: r - n,
        height: l - a
      };
    } else {
      return null;
    }
  };
  let i = function (e, t = 0, n = 0) {
    return {
      x: e.x + t,
      y: e.y + n,
      width: e.width,
      height: e.height
    };
  };
  let o = function (e, t = 1) {
    return {
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t
    };
  };
  let s = window.devicePixelRatio || 1;
  let c = async e => u(await e.getPage(1));
  let u = e => {
    let [t, n, r, a] = e.view;
    return {
      width: r - t,
      height: a - n
    };
  };
  let d = async e => new Promise(t => {
    e.toBlob(e => t(e), "image/png");
  });
  let h = function (e, t = 1, n = {}) {
    let r = new a();
    let {
      scale: l = 1,
      translate: i,
      rotate: o
    } = n || {};
    if (l) {
      r.scale(t * l, t * l);
    }
    if (o) {
      r.rotate(o, {
        x: e.width / 2,
        y: e.height / 2
      });
    }
    if (i) {
      r.translate(i);
    }
    return r;
  };
  let p = async function (e, t, n, r = {}) {
    let a = t.getContext("2d");
    if (!a) {
      return;
    }
    let l = e.getViewport({
      scale: 1
    });
    let i = h(l, s, n);
    let o = {
      canvasContext: a,
      viewport: l,
      transform: i.toJSON(),
      ...r
    };
    m(t, l.width, l.height);
    let c = e.render(o);
    return await c.promise;
  };
  let f = async (e, t) => {
    let n = document.createElement("canvas");
    let r = n.getContext("2d");
    await p(e, n);
    if (r == null) {
      return undefined;
    } else {
      return r.getImageData(t.x, t.y, t.width, t.height);
    }
  };
  let g = (e, t) => m(document.createElement("canvas"), e, t);
  let m = (e, t, n) => {
    e.width = Math.floor(t * s);
    e.height = Math.floor(n * s);
    e.style.width = `${Math.floor(t)}px`;
    e.style.height = `${Math.floor(n)}px`;
    return e;
  };
  let v = function (e, t, n, r = false) {
    let a = [];
    if (!t) {
      return a;
    }
    let {
      x: o,
      y: s
    } = n;
    for (let n of t) {
      if (!n) {
        continue;
      }
      let t = i(n.getBoundingClientRect(), -o, -s);
      let c = l(t, e);
      if (c) {
        let e = i(c, -t.x, -t.y);
        let l = {
          x: e.x / t.width,
          width: e.width / t.width,
          y: e.y / t.height,
          height: e.height / t.height
        };
        let o = n.getAttribute("data-page-number");
        if (o) {
          a.push({
            pageIndex: parseInt(o, 10),
            ...(r ? e : l)
          });
        }
      }
    }
    return a;
  };
  let x = async (e, t, n, r, a, l) => {
    let i = v(e, r, t);
    let c = [];
    for (let e of i) {
      let {
        pageIndex: t
      } = e;
      let r = await (n == null ? undefined : n.getPage(t));
      let {
        width: a,
        height: l
      } = u(r);
      let i = {
        x: e.x * a,
        width: e.width * a,
        y: e.y * l,
        height: e.height * l
      };
      if (r) {
        let e = await f(r, o(i, s));
        if (e) {
          c.push({
            imageData: e,
            ...i
          });
        }
      }
    }
    if (c.length) {
      let e = 0;
      let {
        width: t
      } = c[0];
      let n = c.reduce((e, t) => e += t.height, 0) + l * (c.length - 1);
      let r = g(t, n);
      let a = r.getContext("2d");
      if (!a) {
        return;
      }
      a.fillStyle = "#ebecef";
      a.fillRect(0, 0, t * s, n * s);
      c.forEach(t => {
        if (a != null) {
          a.putImageData(t.imageData, 0, e);
        }
        e += t.height * s + l;
      });
      return r;
    }
  };
  require.d(exports, {
    renderPdfRegions: function () {
      return x;
    },
    devicePixelRatio: function () {
      return s;
    },
    getFirstPageSize: function () {
      return c;
    },
    canvasToBlob: function () {
      return d;
    }
  });
}