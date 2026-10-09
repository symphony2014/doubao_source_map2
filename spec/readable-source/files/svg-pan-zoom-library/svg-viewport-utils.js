// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'svgDomUtils'
// - Resolved require(856038) to 'svg-dom-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43923.de8d5f4c.js
         * chunkId: 43923
         * moduleId: 378364
         */
module.exports = function (module, exports, require) {
  var svgDomUtils = require("svg-dom-utils") /*id: 856038*/;
  var i = "unknown";
  if (document.documentMode) {
    i = "ie";
  }
  module.exports = {
    svgNS: "http://www.w3.org/2000/svg",
    xmlNS: "http://www.w3.org/XML/1998/namespace",
    xmlnsNS: "http://www.w3.org/2000/xmlns/",
    xlinkNS: "http://www.w3.org/1999/xlink",
    evNS: "http://www.w3.org/2001/xml-events",
    getBoundingClientRectNormalized: function (t) {
      if (t.clientWidth && t.clientHeight) {
        return {
          width: t.clientWidth,
          height: t.clientHeight
        };
      }
      if (t.getBoundingClientRect()) {
        return t.getBoundingClientRect();
      }
      throw Error("Cannot get BoundingClientRect for SVG.");
    },
    getOrCreateViewport: function (t, e) {
      var o = null;
      if (!(o = svgDomUtils.isElement(e) ? e : t.querySelector(e))) {
        var i = Array.prototype.slice.call(t.childNodes || t.children).filter(function (t) {
          return t.nodeName !== "defs" && t.nodeName !== "#text";
        });
        if (i.length === 1 && i[0].nodeName === "g" && i[0].getAttribute("transform") === null) {
          o = i[0];
        }
      }
      if (!o) {
        var s = "viewport-" + new Date().toISOString().replace(/\D/g, "");
        (o = document.createElementNS(this.svgNS, "g")).setAttribute("id", s);
        var r = t.childNodes || t.children;
        if (r && r.length > 0) {
          for (var a = r.length; a > 0; a--) {
            if (r[r.length - a].nodeName !== "defs") {
              o.appendChild(r[r.length - a]);
            }
          }
        }
        t.appendChild(o);
      }
      var l = [];
      if (o.getAttribute("class")) {
        l = o.getAttribute("class").split(" ");
      }
      if (!~l.indexOf("svg-pan-zoom_viewport")) {
        l.push("svg-pan-zoom_viewport");
        o.setAttribute("class", l.join(" "));
      }
      return o;
    },
    setupSvgAttributes: function (t) {
      t.setAttribute("xmlns", this.svgNS);
      t.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS);
      t.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS);
      if (t.parentNode !== null) {
        var e = t.getAttribute("style") || "";
        if (e.toLowerCase().indexOf("overflow") === -1) {
          t.setAttribute("style", "overflow: hidden; " + e);
        }
      }
    },
    internetExplorerRedisplayInterval: 300,
    refreshDefsGlobal: svgDomUtils.throttle(function () {
      var t = document.querySelectorAll("defs");
      var e = t.length;
      var o = 0;
      for (; o < e; o++) {
        var n = t[o];
        n.parentNode.insertBefore(n, n);
      }
    }, this ? this.internetExplorerRedisplayInterval : null),
    setCTM: function (t, e, o) {
      var n = this;
      var s = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")";
      t.setAttributeNS(null, "transform", s);
      if ("transform" in t.style) {
        t.style.transform = s;
      } else if ("-ms-transform" in t.style) {
        t.style["-ms-transform"] = s;
      } else if ("-webkit-transform" in t.style) {
        t.style["-webkit-transform"] = s;
      }
      if (i === "ie" && o) {
        o.parentNode.insertBefore(o, o);
        window.setTimeout(function () {
          n.refreshDefsGlobal();
        }, n.internetExplorerRedisplayInterval);
      }
    },
    getEventPoint: function (t, e) {
      var o = e.createSVGPoint();
      svgDomUtils.mouseAndTouchNormalize(t, e);
      o.x = t.clientX;
      o.y = t.clientY;
      return o;
    },
    getSvgCenterPoint: function (t, e, o) {
      return this.createSVGPoint(t, e / 2, o / 2);
    },
    createSVGPoint: function (t, e, o) {
      var n = t.createSVGPoint();
      n.x = e;
      n.y = o;
      return n;
    }
  };
}