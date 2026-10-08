// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43923.de8d5f4c.js
         * chunkId: 43923
         * moduleId: 354533
         */
module.exports = function (module, exports, require) {
  module.exports = function () {
    var t;
    var e;
    var o;
    var n = "";
    var i = [];
    var s = {
      passive: true
    };
    var r = {
      passive: false
    };
    function a(e, a, l, h) {
      var u;
      var c;
      if (o === "wheel") {
        u = l;
      } else {
        c = function (t) {
          t ||= window.event;
          var e = {
            originalEvent: t,
            target: t.target || t.srcElement,
            type: "wheel",
            deltaMode: +(t.type != "MozMousePixelScroll"),
            deltaX: 0,
            delatZ: 0,
            preventDefault: function () {
              if (t.preventDefault) {
                t.preventDefault();
              } else {
                t.returnValue = false;
              }
            }
          };
          if (o == "mousewheel") {
            e.deltaY = t.wheelDelta * -0.025;
            if (t.wheelDeltaX) {
              e.deltaX = t.wheelDeltaX * -0.025;
            }
          } else {
            e.deltaY = t.detail;
          }
          return l(e);
        };
        i.push({
          element: e,
          fn: c
        });
        u = c;
      }
      e[t](n + a, u, h ? s : r);
    }
    function l(t, a, l, h) {
      var u;
      u = o === "wheel" ? l : function (t) {
        for (var e = 0; e < i.length; e++) {
          if (i[e].element === t) {
            return i[e].fn;
          }
        }
        return function () {};
      }(t);
      t[e](n + a, u, h ? s : r);
      (function (t) {
        for (var e = 0; e < i.length; e++) {
          if (i[e].element === t) {
            return i.splice(e, 1);
          }
        }
      })(t);
    }
    if (window.addEventListener) {
      t = "addEventListener";
      e = "removeEventListener";
    } else {
      t = "attachEvent";
      e = "detachEvent";
      n = "on";
    }
    o = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
    return {
      on: function (t, e, n) {
        a(t, o, e, n);
        if (o == "DOMMouseScroll") {
          a(t, "MozMousePixelScroll", e, n);
        }
      },
      off: function (t, e, n) {
        l(t, o, e, n);
        if (o == "DOMMouseScroll") {
          l(t, "MozMousePixelScroll", e, n);
        }
      }
    };
  }();
}