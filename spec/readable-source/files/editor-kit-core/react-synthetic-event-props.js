// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ay' to 'mouseEventProps'
// - Renamed export 'D3' to 'uiEventProps'
// - Renamed export 'Is' to 'focusEventProps'
// - Renamed export 'Nf' to 'keyboardEventProps'
// - Renamed export 'QA' to 'clipboardEventProps'
// - Renamed export 'TS' to 'baseEventProps'
// - Renamed export 'TT' to 'wheelEventProps'
// - Renamed export 'Y' to 'dragEventProps'
// - Renamed export 'a6' to 'animationEventProps'
// - Renamed export 'cd' to 'inputEventProps'
// - Renamed export 'g8' to 'messageEventProps'
// - Renamed export 'lI' to 'transitionEventProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 191267
         */
module.exports = function (module, exports, require) {
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var o = {
    type: null,
    target: null,
    currentTarget: null,
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null
  };
  var i = {
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  var u = {
    animationName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  var a = {
    view: null,
    detail: null
  };
  var s = 0;
  var c = 0;
  var f = false;
  var l = false;
  var p = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    pageX: null,
    pageY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: null,
    button: null,
    buttons: null,
    relatedTarget: null,
    movementX: function (t) {
      if ("movementX" in t) {
        return t.movementX;
      }
      var e = s;
      s = t.screenX;
      if (f) {
        if (t.type === "mousemove") {
          return t.screenX - e;
        } else {
          return 0;
        }
      } else {
        f = true;
        return 0;
      }
    },
    movementY: function (t) {
      if ("movementY" in t) {
        return t.movementY;
      }
      var e = c;
      c = t.screenY;
      if (l) {
        if (t.type === "mousemove") {
          return t.screenY - e;
        } else {
          return 0;
        }
      } else {
        l = true;
        return 0;
      }
    }
  };
  var d = {
    dataTransfer: null
  };
  var h = {
    deltaX: function (t) {
      if ("deltaX" in t) {
        return t.deltaX;
      } else if ("wheelDeltaX" in t) {
        return -t.wheelDeltaX;
      } else {
        return 0;
      }
    },
    deltaY: function (t) {
      if ("deltaY" in t) {
        return t.deltaY;
      } else if ("wheelDeltaY" in t) {
        return -t.wheelDeltaY;
      } else if ("wheelDelta" in t) {
        return -t.wheelDelta;
      } else {
        return 0;
      }
    },
    deltaZ: null,
    deltaMode: null
  };
  var y = {
    key: null,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: null,
    charCode: function (t) {
      if (t.type === "keypress") {
        return keyboardInputUtils.getCharCode(t);
      } else {
        return 0;
      }
    },
    keyCode: function (t) {
      if (t.type === "keydown" || t.type === "keyup") {
        return t.keyCode;
      } else {
        return 0;
      }
    },
    which: function (t) {
      if (t.type === "keypress") {
        return keyboardInputUtils.getCharCode(t);
      } else if (t.type === "keydown" || t.type === "keyup") {
        return t.keyCode;
      } else {
        return 0;
      }
    }
  };
  var b = {
    clipboardData: function (t) {
      return ("clipboardData" in t ? t : window).clipboardData;
    },
    data: {}
  };
  var g = {
    relatedTarget: null
  };
  var v = {
    data: null,
    dataTransfer: null,
    inputType: null
  };
  var m = {
    data: null
  };
  require.d(exports, {
    mouseEventProps: function () {
      return p;
    },
    uiEventProps: function () {
      return a;
    },
    focusEventProps: function () {
      return g;
    },
    keyboardEventProps: function () {
      return y;
    },
    clipboardEventProps: function () {
      return b;
    },
    baseEventProps: function () {
      return o;
    },
    wheelEventProps: function () {
      return h;
    },
    dragEventProps: function () {
      return d;
    },
    animationEventProps: function () {
      return u;
    },
    inputEventProps: function () {
      return v;
    },
    messageEventProps: function () {
      return m;
    },
    transitionEventProps: function () {
      return i;
    }
  });
}