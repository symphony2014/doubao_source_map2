// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43923.de8d5f4c.js
         * chunkId: 43923
         * moduleId: 856038
         */
module.exports = function (module, exports, require) {
  module.exports = {
    extend: function (t, e) {
      t = t || {};
      for (var o in e) {
        if (this.isObject(e[o])) {
          t[o] = this.extend(t[o], e[o]);
        } else {
          t[o] = e[o];
        }
      }
      return t;
    },
    isElement: function (t) {
      return t instanceof HTMLElement || t instanceof SVGElement || t instanceof SVGSVGElement || t && typeof t == "object" && t !== null && t.nodeType === 1 && typeof t.nodeName == "string";
    },
    isObject: function (t) {
      return Object.prototype.toString.call(t) === "[object Object]";
    },
    isNumber: function (t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    },
    getSvg: function (t) {
      var e;
      var o;
      if (this.isElement(t)) {
        e = t;
      } else if (typeof t == "string" || t instanceof String) {
        if (!(e = document.querySelector(t))) {
          throw Error("Provided selector did not find any elements. Selector: " + t);
        }
      } else {
        throw Error("Provided selector is not an HTML object nor String");
      }
      if (e.tagName.toLowerCase() === "svg") {
        o = e;
      } else if (e.tagName.toLowerCase() === "object") {
        o = e.contentDocument.documentElement;
      } else if (e.tagName.toLowerCase() === "embed") {
        o = e.getSVGDocument().documentElement;
      } else {
        if (e.tagName.toLowerCase() === "img") {
          throw Error("Cannot script an SVG in an \"img\" element. Please use an \"object\" element or an in-line SVG.");
        }
        throw Error("Cannot get SVG.");
      }
      return o;
    },
    proxy: function (t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    },
    getType: function (t) {
      return Object.prototype.toString.apply(t).replace(/^\[object\s/, "").replace(/\]$/, "");
    },
    mouseAndTouchNormalize: function (t, e) {
      if (t.clientX === undefined || t.clientX === null) {
        t.clientX = 0;
        t.clientY = 0;
        if (t.touches !== undefined && t.touches.length) {
          if (t.touches[0].clientX !== undefined) {
            t.clientX = t.touches[0].clientX;
            t.clientY = t.touches[0].clientY;
          } else if (t.touches[0].pageX !== undefined) {
            var o = e.getBoundingClientRect();
            t.clientX = t.touches[0].pageX - o.left;
            t.clientY = t.touches[0].pageY - o.top;
          }
        } else if (t.originalEvent !== undefined && t.originalEvent.clientX !== undefined) {
          t.clientX = t.originalEvent.clientX;
          t.clientY = t.originalEvent.clientY;
        }
      }
    },
    isDblClick: function (t, e) {
      if (t.detail === 2) {
        return true;
      }
      if (e != null) {
        var o = t.timeStamp - e.timeStamp;
        var n = Math.sqrt(Math.pow(t.clientX - e.clientX, 2) + Math.pow(t.clientY - e.clientY, 2));
        return o < 250 && n < 10;
      }
      return false;
    },
    now: Date.now || function () {
      return new Date().getTime();
    },
    throttle: function (t, e, o) {
      var n;
      var i;
      var s;
      var r = this;
      var a = null;
      var l = 0;
      o ||= {};
      function h() {
        l = o.leading === false ? 0 : r.now();
        a = null;
        s = t.apply(n, i);
        if (!a) {
          n = i = null;
        }
      }
      return function () {
        var u = r.now();
        if (!l && o.leading === false) {
          l = u;
        }
        var c = e - (u - l);
        n = this;
        i = arguments;
        if (c <= 0 || c > e) {
          clearTimeout(a);
          a = null;
          l = u;
          s = t.apply(n, i);
          if (!a) {
            n = i = null;
          }
        } else if (!a && o.trailing !== false) {
          a = setTimeout(h, c);
        }
        return s;
      };
    },
    createRequestAnimationFrame: function (t) {
      var o = null;
      if (t !== "auto" && t < 60 && t > 1) {
        o = Math.floor(1000 / t);
      }
      if (o === null) {
        return window.requestAnimationFrame || e(33);
      } else {
        return e(o);
      }
    }
  };
  function e(t) {
    return function (e) {
      window.setTimeout(e, t);
    };
  }
}