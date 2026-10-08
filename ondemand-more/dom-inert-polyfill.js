// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J_' to 'hasInertSupport'
// - Renamed export 'Ry' to 'manageAriaHidden'
// - Renamed export 'cJ' to 'suppressElements'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 21928
         */
module.exports = function (module, exports, require) {
  function o(e) {
    if (typeof document == "undefined") {
      return null;
    } else {
      return (Array.isArray(e) ? e[0] : e).ownerDocument.body;
    }
  }
  var r = new WeakMap();
  var i = new WeakMap();
  var s = {};
  var l = 0;
  function a(e) {
    return e && (e.host || a(e.parentNode));
  }
  function c(e, t, n, o) {
    var c = (Array.isArray(e) ? e : [e]).map(function (e) {
      if (t.contains(e)) {
        return e;
      }
      var n = a(e);
      if (n && t.contains(n)) {
        return n;
      } else {
        return null;
      }
    }).filter(function (e) {
      return !!e;
    });
    s[n] ||= new WeakMap();
    var u = s[n];
    var d = [];
    var p = new Set();
    var f = new Set(c);
    function h(e) {
      if (!!e && !p.has(e)) {
        p.add(e);
        h(e.parentNode);
      }
    }
    c.forEach(h);
    function m(e) {
      if (!!e && !f.has(e)) {
        Array.prototype.forEach.call(e.children, function (e) {
          if (p.has(e)) {
            m(e);
          } else {
            try {
              var t = e.getAttribute(o);
              var s = t !== null && t !== "false";
              var l = (r.get(e) || 0) + 1;
              var a = (u.get(e) || 0) + 1;
              r.set(e, l);
              u.set(e, a);
              d.push(e);
              if (l === 1 && s) {
                i.set(e, true);
              }
              if (a === 1) {
                e.setAttribute(n, "true");
              }
              if (!s) {
                e.setAttribute(o, "true");
              }
            } catch (e) {}
          }
        });
      }
    }
    m(t);
    p.clear();
    l++;
    return function () {
      d.forEach(function (e) {
        var t = r.get(e) - 1;
        var s = u.get(e) - 1;
        r.set(e, t);
        u.set(e, s);
        if (!t) {
          if (!i.has(e)) {
            e.removeAttribute(o);
          }
          i.delete(e);
        }
        if (!s) {
          e.removeAttribute(n);
        }
      });
      if (! --l) {
        r = new WeakMap();
        r = new WeakMap();
        i = new WeakMap();
        s = {};
      }
    };
  }
  function u(e, t, n = "data-aria-hidden") {
    var r = Array.from(Array.isArray(e) ? e : [e]);
    var i = t || o(e);
    if (i) {
      r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]")));
      return c(r, i, n, "aria-hidden");
    } else {
      return function () {
        return null;
      };
    }
  }
  function d(e, t, n = "data-inert-ed") {
    var r = t || o(e);
    if (r) {
      return c(e, r, n, "inert");
    } else {
      return function () {
        return null;
      };
    }
  }
  function p() {
    return typeof HTMLElement != "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
  }
  function f(e, t, n = "data-suppressed") {
    return (p() ? d : u)(e, t, n);
  }
  require.d(exports, {
    hasInertSupport: function () {
      return p;
    },
    manageAriaHidden: function () {
      return u;
    },
    suppressElements: function () {
      return f;
    }
  });
}