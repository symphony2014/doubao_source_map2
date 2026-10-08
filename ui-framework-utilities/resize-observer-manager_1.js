// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'ResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 722166
         */
module.exports = function (module, exports, require) {
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var resizeObserverPolyfill_2 = require("resize-observer-polyfill_2") /*id: 129887*/;
  var c = new (function () {
    function e() {
      classCallCheckUtil.classCallCheck(this, e);
      objectPropertySetter.setObjectProperty(this, "_roWM", new WeakMap());
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "ResizeObserver",
      get: function () {
        if (typeof ResizeObserver == "undefined" || typeof navigator != "undefined" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          return resizeObserverPolyfill_2.ResizeObserver;
        } else {
          return ResizeObserver;
        }
      }
    }, {
      key: "subscribe",
      value: function (e, n) {
        var t;
        var o = this;
        var i = this._roWM.get(e);
        if ((t = i) !== null && t !== undefined && t.get(n)) {
          return function () {};
        }
        var a = new this.ResizeObserver(function (t) {
          var o;
          var i = iteratorAdapterUtil.createIterator(t);
          try {
            for (i.s(); !(o = i.n()).done;) {
              var a = o.value;
              if (a.target === e) {
                n(a);
                break;
              }
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
        });
        a.observe(e, {
          box: "border-box"
        });
        if (!i) {
          i = new WeakMap();
          this._roWM.set(e, i);
        }
        i.set(n, a);
        return function () {
          o.unsubscribe(e, n);
        };
      }
    }, {
      key: "unsubscribe",
      value: function (e, n) {
        var t = this._roWM.get(e);
        if (t) {
          var r = t.get(n);
          if (r) {
            r.disconnect();
            t.delete(n);
          }
        }
      }
    }]);
    return e;
  }())();
  require.d(exports, {
    ResizeObserver: function () {
      return c;
    }
  });
}