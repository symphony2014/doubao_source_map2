// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J$' to 'getObjectType'
// - Renamed export 'ZG' to 'selectionEventTypes'
// - Renamed export 'Le' to 'normalizeEventName'
// - Renamed export 'Dg' to 'eventCategoryTypes'
// - Renamed export 'Ve' to 'createSelectionRange'
// - Renamed export 'Br' to 'processSyntheticEvent'
// - Renamed export 'eb' to 'viewportEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 97252
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var keyboardSyntheticEventWrapper = require("keyboard-synthetic-event-wrapper") /*id: 514743*/;
  var i = new (function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.eventTypes = new Map();
      e.extractEvents = function (t) {
        if (t.type === "change") {
          return new keyboardSyntheticEventWrapper.KeyboardSyntheticEvent(t, t.target);
        } else {
          return null;
        }
      };
      return e;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(function () {}))();
  var keyboardMouseSyntheticEvent = require("keyboard-mouse-synthetic-event") /*id: 619284*/;
  var a = "blur";
  var s = "click";
  var c = "compositionend";
  var f = "compositionstart";
  var l = "compositionupdate";
  var p = "contextmenu";
  var d = "copy";
  var h = "dblclick";
  var y = "auxclick";
  var b = "drag";
  var g = "dragend";
  var v = "dragenter";
  var m = "dragexit";
  var S = "dragleave";
  var w = "dragover";
  var A = "dragstart";
  var x = "drop";
  var O = "focus";
  var M = "gotpointercapture";
  var P = "keydown";
  var E = "keypress";
  var _ = "keyup";
  var j = "lostpointercapture";
  var k = "mousedown";
  var T = "mousemove";
  var F = "mouseout";
  var R = "mouseover";
  var I = "mouseup";
  var N = "paste";
  var B = "pointercancel";
  var C = "pointerdown";
  var L = "pointermove";
  var D = "pointerout";
  var z = "pointerover";
  var W = "pointerup";
  var U = "scroll";
  var H = "touchcancel";
  var G = "touchend";
  var $ = "touchmove";
  var V = "touchstart";
  var q = "wheel";
  var K = new function () {
    var t = this;
    this.eventTypes = new Map();
    this.extractEvents = function (e) {
      if (t.eventTypes.get(e.type)) {
        return new keyboardMouseSyntheticEvent.KeyboardMouseEvent(e, e.target);
      } else {
        return null;
      }
    };
    [F, R].forEach(function (e) {
      return t.eventTypes.set(e, true);
    });
  }();
  var keyboardSyntheticEventClass = require("keyboard-synthetic-event-class") /*id: 749394*/;
  var clipboardKeyboardEvent = require("clipboard-keyboard-event") /*id: 923328*/;
  var keyboardMessageEvent = require("keyboard-message-event") /*id: 471750*/;
  var keyboardSyntheticEventClass_1 = require("keyboard-synthetic-event-class_1") /*id: 886246*/;
  var keyboardFocusEvent = require("keyboard-focus-event") /*id: 151463*/;
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var reactSyntheticEventProps = require("react-synthetic-event-props") /*id: 191267*/;
  var tr = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      n.deltaX = 0;
      n.deltaY = 0;
      n.deltaZ = 0;
      n.deltaMode = 0;
      keyboardInputUtils.mapProperties(n, reactSyntheticEventProps.wheelEventProps, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(keyboardMouseSyntheticEvent.KeyboardMouseEvent);
  var tn = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      keyboardInputUtils.mapProperties(n, reactSyntheticEventProps.animationEventProps, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(keyboardSyntheticEventWrapper.KeyboardSyntheticEvent);
  var to = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      n.propertyName = "";
      n.elapsedTime = 0;
      n.pseudoElement = "";
      keyboardInputUtils.mapProperties(n, reactSyntheticEventProps.transitionEventProps, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(keyboardSyntheticEventWrapper.KeyboardSyntheticEvent);
  var ti = [a, "cancel", s, "close", p, d, "cut", y, h, g, A, x, O, "input", "invalid", P, E, _, k, I, N, "pause", "play", B, C, W, "ratechange", "reset", "seeked", "submit", H, G, V, "volumechange", f, l, c];
  var tu = [b, v, m, S, w, T, F, R, L, D, z, U, "toggle", $, q];
  var ta = ["abort", "animationend", "animationiteration", "animationstart", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", M, "load", "loadeddata", "loadedmetadata", "loadstart", j, "playing", "progress", "seeking", "stalled", "suspend", "timeupdate", "transitionend", "waiting"];
  var ts = [new function () {
    var t = this;
    this.eventTypes = new Map();
    this.extractEvents = function (e) {
      var r;
      if (!t.eventTypes.get(e.type)) {
        return null;
      }
      switch (e.type) {
        case E:
        case P:
        case _:
          r = keyboardSyntheticEventClass_1.KeyboardSyntheticEvent;
          break;
        case a:
        case O:
          r = keyboardFocusEvent.KeyboardFocusEvent;
          break;
        case s:
        case y:
        case h:
        case k:
        case T:
        case I:
        case F:
        case R:
        case p:
          r = keyboardMouseSyntheticEvent.KeyboardMouseEvent;
          break;
        case b:
        case g:
        case v:
        case m:
        case S:
        case w:
        case A:
        case x:
        case H:
        case G:
        case $:
        case V:
          r = keyboardSyntheticEventWrapper.KeyboardSyntheticEvent;
          break;
        case "animationend":
        case "animationiteration":
        case "animationstart":
          r = tn;
          break;
        case "transitionend":
          r = to;
          break;
        case U:
          r = keyboardSyntheticEventClass.KeyboardSyntheticEvent;
          break;
        case q:
          r = tr;
          break;
        case d:
        case "cut":
        case N:
          r = clipboardKeyboardEvent.ClipboardKeyEvent;
          break;
        case M:
        case j:
        case B:
        case C:
        case L:
        case D:
        case z:
        case W:
          r = keyboardSyntheticEventWrapper.KeyboardSyntheticEvent;
          break;
        case f:
        case c:
        case l:
          r = keyboardMessageEvent.KeyboardMessageEvent;
          break;
        default:
          r = keyboardSyntheticEventWrapper.KeyboardSyntheticEvent;
      }
      return new r(e, e.target);
    };
    ti.concat(tu).concat(ta).forEach(function (e) {
      return t.eventTypes.set(e, true);
    });
  }(), K, i];
  function tc(t) {
    return t.slice(2).toLowerCase();
  }
  function tf(t) {
    var e = /^\[object (\S+)\]/i;
    var t = t.toString().toLocaleLowerCase();
    if (e.test(t)) {
      return e.exec(t)[1];
    } else {
      return "";
    }
  }
  function tl(t, e) {
    if (t) {
      return e.selection._toModelRange({
        startContainer: t,
        startOffset: 0,
        endContainer: t,
        endOffset: t.childNodes.length
      });
    } else {
      return null;
    }
  }
  function tp(t) {
    var e = function (t) {
      var e = null;
      var r = 0;
      for (; r < ts.length; r++) {
        var n = ts[r].extractEvents(t);
        if (n) {
          e = n;
          break;
        }
      }
      e ||= new keyboardSyntheticEventWrapper.KeyboardSyntheticEvent(t, t.target);
      return e;
    }(t.nativeEvent);
    var r = e.preventDefault;
    var n = e.stopPropagation;
    e.preventDefault = function () {
      r.call(e);
      t.preventDefault();
    };
    e.stopPropagation = function () {
      n.call(e);
      t.stopPropagation();
    };
    e.currentTarget = t.currentTarget;
    e.target = t.target;
    return e;
  }
  var td = ["select", "deselect"];
  var th = [].concat(typescriptRuntimeHelpers_1.spread(td, ["enterviewport", "leaveviewport"]));
  var ty = ["focusevent", "mouseevent", "touchevent", "pointerevent"];
  require.d(exports, {
    getObjectType: function () {
      return tf;
    },
    selectionEventTypes: function () {
      return td;
    },
    normalizeEventName: function () {
      return tc;
    },
    eventCategoryTypes: function () {
      return ty;
    },
    createSelectionRange: function () {
      return tl;
    },
    processSyntheticEvent: function () {
      return tp;
    },
    viewportEventTypes: function () {
      return th;
    }
  });
}