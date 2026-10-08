// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'focusElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 110652
         */
module.exports = function (module, exports, require) {
  var resolveDomElementUtils = require("resolve-dom-element-utils") /*id: 13199*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var i = null;
  function a(e, n = {}) {
    var t = n.nextTick;
    var a = n.preventScroll;
    var u = a === undefined || a;
    var c = n.selectTextIfInput;
    var l = c !== undefined && c;
    function s() {
      var n = resolveDomElementUtils.resolveDomElement(e);
      if (n) {
        if ((domElementUtils.isHTMLElement(n) ? domElementUtils.getOwnerDocument(n) : document).activeElement !== n) {
          if (!function () {
            if (i === null) {
              i = false;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    i = true;
                    return true;
                  }
                });
              } catch (e) {}
            }
            return i;
          }()) {
            n.focus();
          } else {
            n.focus({
              preventScroll: u
            });
          }
          if (domElementUtils.isInputSelect(n) && l) {
            n.select();
          }
        }
      }
    }
    if (t) {
      return requestAnimationFrame(s);
    }
    s();
  }
  require.d(exports, {
    focusElement: function () {
      return a;
    }
  });
}