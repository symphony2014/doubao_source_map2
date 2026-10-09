// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Iw' to 'animateScrollToTarget'
// - Renamed export 'UC' to 'isElementInViewport'
// - Renamed export 'k3' to 'setScrollPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 895081
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var docxCoverManager = require("docx-cover-manager") /*id: 347206*/;
  function l(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let c = e => {
    return e + (document.querySelector(docxCoverManager.docCoverSelector)?.clientHeight || 0);
  };
  function u(e) {
    let {
      scroller: n,
      scrollTop: r
    } = e;
    let o = n instanceof Window ? n.scrollY : n.scrollTop;
    let i = n instanceof Window ? n.innerHeight : n.clientHeight;
    let l = c(r);
    return l >= o && l <= o + i;
  }
  function a(e) {
    let {
      scroller: n,
      scrollTop: r
    } = e;
    let o = c(r);
    if (n instanceof Window) {
      n.scrollTo({
        top: o
      });
    } else {
      n.scrollTop = o;
    }
  }
  let s = new class {
    getX(e) {
      return ((this.px1 * e + this.px2) * e + this.px3) * e;
    }
    getY(e) {
      return ((this.py1 * e + this.py2) * e + this.py3) * e;
    }
    solve(e) {
      if (e === 0 || e === 1) {
        return this.getY(e);
      }
      let n = e;
      for (let r = 0; r < 8; r++) {
        let r = this.getX(n) - e;
        if (Math.abs(r) < this.epsilon) {
          break;
        }
        let o = (this.px1 * 3 * n + this.px2 * 2) * n + this.px3;
        if (Math.abs(o) < 0.000001) {
          break;
        }
        n -= r / o;
      }
      return this.getY(n);
    }
    constructor(e, n, r, o) {
      l(this, "px1", undefined);
      l(this, "px2", undefined);
      l(this, "px3", undefined);
      l(this, "py1", undefined);
      l(this, "py2", undefined);
      l(this, "py3", undefined);
      l(this, "epsilon", undefined);
      this.px3 = e * 3;
      this.px2 = (r - e) * 3 - this.px3;
      this.px1 = 1 - this.px3 - this.px2;
      this.py3 = n * 3;
      this.py2 = (o - n) * 3 - this.py3;
      this.py1 = 1 - this.py3 - this.py2;
      this.epsilon = 1e-7;
    }
  }(0.42, 0, 0.58, 1);
  function d(e) {
    let {
      scroller: n,
      duration: r,
      target: i
    } = e;
    let l = n instanceof Window ? n.scrollY : n.scrollTop;
    let c = n instanceof Window ? n.innerHeight : n.clientHeight;
    let u = 0;
    let d = i.clientHeight;
    let f = i;
    while (f && (u += f.offsetTop, (f = f.offsetParent) !== n));
    if (u >= l && u + d <= l + c) {
      return emptyExportFunction.emptyFunction;
    } else {
      return function (e) {
        let {
          duration: n,
          scrollTop: r
        } = e;
        let {
          scroller: i
        } = e;
        i ||= window;
        let l = i instanceof Window ? i.scrollY : i.scrollTop;
        if (r === l) {
          return emptyExportFunction.emptyFunction;
        }
        let c = l > r;
        let u = Math.abs(r - l);
        let d = 0;
        let f = false;
        let h = e => {
          if (f) {
            return;
          }
          d ||= e;
          let r = Math.max(0, Math.min(1, (e - d) / n));
          if (r !== 1) {
            window.requestAnimationFrame(h);
          }
          let o = s.solve(r) * u;
          a({
            scroller: i,
            scrollTop: l + (c ? -o : o)
          });
        };
        window.requestAnimationFrame(h);
        return () => {
          f = true;
        };
      }({
        duration: r,
        scroller: n,
        scrollTop: u < l ? u : u + d - c
      });
    }
  }
  require.d(exports, {
    animateScrollToTarget: function () {
      return d;
    },
    isElementInViewport: function () {
      return u;
    },
    setScrollPosition: function () {
      return a;
    }
  });
}