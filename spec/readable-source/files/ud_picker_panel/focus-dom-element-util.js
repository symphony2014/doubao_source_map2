// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'focusElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 59854
         */
module.exports = function (module, exports, require) {
  var resolveDomElementFromSelector = require("resolve-dom-element-from-selector") /*id: 331611*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var i = null;
  function a(e, t = {}) {
    var n = t.nextTick;
    var a = t.preventScroll;
    var c = a === undefined || a;
    var u = t.selectTextIfInput;
    var s = u !== undefined && u;
    function l() {
      var t = resolveDomElementFromSelector.resolveDomElement(e);
      if (t) {
        if ((domElementUtils_1.isHtmlElement(t) ? domElementUtils_1.getOwnerDocument(t) : document).activeElement !== t) {
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
            t.focus();
          } else {
            t.focus({
              preventScroll: c
            });
          }
          if (domElementUtils_1.isSelectableInput(t) && s) {
            t.select();
          }
        }
      }
    }
    if (n) {
      return requestAnimationFrame(l);
    }
    l();
  }
  require.d(exports, {
    focusElement: function () {
      return a;
    }
  });
}