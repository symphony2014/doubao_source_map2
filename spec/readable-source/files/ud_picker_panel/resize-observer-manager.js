// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'resizeObserverManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 332136
         */
module.exports = function (module, exports, require) {
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var resizeObserverPolyfill_2 = require("resize-observer-polyfill_2") /*id: 129887*/;
  var u = new (function () {
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
      value: function (e, t) {
        var n;
        var o = this;
        var i = this._roWM.get(e);
        if ((n = i) !== null && n !== undefined && n.get(t)) {
          return function () {};
        }
        var a = new this.ResizeObserver(function (n) {
          var o;
          var i = iteratorAdapterUtil.createIterator(n);
          try {
            for (i.s(); !(o = i.n()).done;) {
              var a = o.value;
              if (a.target === e) {
                t(a);
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
        i.set(t, a);
        return function () {
          o.unsubscribe(e, t);
        };
      }
    }, {
      key: "unsubscribe",
      value: function (e, t) {
        var n = this._roWM.get(e);
        if (n) {
          var r = n.get(t);
          if (r) {
            r.disconnect();
            n.delete(t);
          }
        }
      }
    }]);
    return e;
  }())();
  require.d(exports, {
    resizeObserverManager: function () {
      return u;
    }
  });
}