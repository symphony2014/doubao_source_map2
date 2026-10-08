// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ws' to 'styleInjector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 989764
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i() {
    var e = 0;
    var t = null;
    return {
      add: function (o) {
        if (e == 0 && (t = function () {
          if (!document) {
            return null;
          }
          var e = document.createElement("style");
          e.type = "text/css";
          var t = r || require.nc;
          if (t) {
            e.setAttribute("nonce", t);
          }
          return e;
        }())) {
          var i;
          var a;
          if ((i = t).styleSheet) {
            i.styleSheet.cssText = o;
          } else {
            i.appendChild(document.createTextNode(o));
          }
          a = t;
          (document.head || document.getElementsByTagName("head")[0]).appendChild(a);
        }
        e++;
      },
      remove: function () {
        if (! --e && !!t) {
          if (t.parentNode) {
            t.parentNode.removeChild(t);
          }
          t = null;
        }
      }
    };
  }
  function a() {
    var e = i();
    return function (t, n) {
      reactCoreLibraryReexport.useEffect(function () {
        e.add(t);
        return function () {
          e.remove();
        };
      }, [t && n]);
    };
  }
  function c() {
    var e = a();
    return function (t) {
      e(t.styles, t.dynamic);
      return null;
    };
  }
  require.d(exports, {
    styleInjector: function () {
      return c;
    }
  });
}