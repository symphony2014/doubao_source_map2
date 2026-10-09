// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$1' to 'defaultHeight'
// - Renamed export 'BH' to 'minZoomStep'
// - Renamed export 'BM' to 'maxLimitVal'
// - Renamed export 'BW' to 'clsDraggable'
// - Renamed export 'C3' to 'rotateStep'
// - Renamed export 'DI' to 'defaultDpi'
// - Renamed export 'ES' to 'minZoomVal'
// - Renamed export 'Ez' to 'maxZoomLevel'
// - Renamed export 'HN' to 'transitionMs'
// - Renamed export 'JI' to 'maxZoomVal'
// - Renamed export 'L8' to 'minAngleDeg'
// - Renamed export 'Lf' to 'evtClick'
// - Renamed export 'Nj' to 'zoomIncrement'
// - Renamed export 'P_' to 'evtDragStart'
// - Renamed export 'QZ' to 'maxTouches'
// - Renamed export 'RO' to 'evtPointerUp'
// - Renamed export 'Sv' to 'clsImageViewer'
// - Renamed export 'Sx' to 'clsUnloaded'
// - Renamed export 'U7' to 'mimeSvgType'
// - Renamed export 'VD' to 'keyboardKeyMap'
// - Renamed export 'Ve' to 'evtMove'
// - Renamed export 'WA' to 'viewerWidth'
// - Renamed export '_6' to 'evtPointerMove'
// - Renamed export '_Q' to 'evtKeyDown'
// - Renamed export 'ak' to 'clsOpContainer'
// - Renamed export 'cS' to 'evtPointerDown'
// - Renamed export 'dh' to 'clsViewerShow'
// - Renamed export 'e4' to 'clsDragging'
// - Renamed export 'fX' to 'minGapSize'
// - Renamed export 'hD' to 'evtResize'
// - Renamed export 'iq' to 'imageTransform'
// - Renamed export 'k$' to 'evtKeyUp'
// - Renamed export 'k4' to 'evtMouseMove'
// - Renamed export 'lO' to 'evtKeyPress'
// - Renamed export 'n9' to 'evtMouseLeave'
// - Renamed export 'pJ' to 'timeoutMs'
// - Renamed export 'pO' to 'evtWheel'
// - Renamed export 'q5' to 'clsViewerWrap'
// - Renamed export 'uw' to 'delayMs'
// - Renamed export 'yD' to 'clsToolbarHide'
// - Renamed export 'zU' to 'evtMouseDown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image_viewer.6692a311.js
         * chunkId: 38626
         * moduleId: 655825
         */
module.exports = function (module, exports, require) {
  var r;
  let o = typeof window != "undefined" && window.document !== undefined;
  let a = o ? window : {};
  let s = !!o && !!window.document.documentElement && "ontouchstart" in window.document.documentElement;
  let l = !!o && "PointerEvent" in a;
  let h = {
    scale: 1,
    rotate: 0,
    offsetX: 0,
    offsetY: 0
  };
  let c = 72;
  let d = 36;
  let m = 3;
  let u = 2000;
  let g = 300;
  let f = 50;
  let p = 50;
  let w = 200;
  let v = 300;
  let b = 10;
  let I = 520;
  let R = 2.4;
  let y = 400;
  let S = "click";
  let $ = "dragstart";
  let k = "keydown";
  let T = l ? "pointerdown" : s ? "touchstart" : "mousedown";
  let x = l ? "pointermove" : s ? "touchmove" : "mousemove";
  let C = l ? "pointerup" : s ? "touchend touchcancel" : "mouseup";
  let O = "resize";
  let E = "wheel";
  let _ = "keypress";
  let F = "keyup";
  let z = "mousedown";
  let D = "mouseleave";
  let P = "mousemove";
  let N = 0.15;
  let W = 5;
  let j = 0.1;
  let M = "move";
  let Z = "toolbar-hide";
  let H = "image-viewer";
  let L = "viewer-show";
  let B = "image-viewer-wrapper";
  let V = "image-draggable";
  let X = "image-dragging";
  let A = "mime-type-svg";
  let J = "unloaded-view-image";
  let U = "image-operation-container";
  (r = {})[r.Enter = 13] = "Enter";
  r[r.Escape = 27] = "Escape";
  r[r.Space = 32] = "Space";
  r[r.ArrowLeft = 37] = "ArrowLeft";
  r[r.ArrowUp = 38] = "ArrowUp";
  r[r.ArrowRight = 39] = "ArrowRight";
  r[r.ArrowDown = 40] = "ArrowDown";
  r[r.Zero = 48] = "Zero";
  r[r.One = 49] = "One";
  r[r.F = 70] = "F";
  r[r.R = 82] = "R";
  r[r.S = 83] = "S";
  r[r.Numpad_0 = 96] = "Numpad_0";
  r[r.Numpad_1 = 97] = "Numpad_1";
  r[r.Add = 107] = "Add";
  r[r.Subtract = 109] = "Subtract";
  r[r.Plus = 187] = "Plus";
  r[r.Minus = 189] = "Minus";
  let q = r;
  require.d(exports, {
    defaultHeight: function () {
      return y;
    },
    minZoomStep: function () {
      return j;
    },
    maxLimitVal: function () {
      return u;
    },
    clsDraggable: function () {
      return V;
    },
    rotateStep: function () {
      return W;
    },
    defaultDpi: function () {
      return c;
    },
    minZoomVal: function () {
      return f;
    },
    maxZoomLevel: function () {
      return R;
    },
    transitionMs: function () {
      return w;
    },
    maxZoomVal: function () {
      return p;
    },
    minAngleDeg: function () {
      return d;
    },
    evtClick: function () {
      return S;
    },
    zoomIncrement: function () {
      return N;
    },
    evtDragStart: function () {
      return $;
    },
    maxTouches: function () {
      return m;
    },
    evtPointerUp: function () {
      return C;
    },
    clsImageViewer: function () {
      return H;
    },
    clsUnloaded: function () {
      return J;
    },
    mimeSvgType: function () {
      return A;
    },
    keyboardKeyMap: function () {
      return q;
    },
    evtMove: function () {
      return M;
    },
    viewerWidth: function () {
      return I;
    },
    evtPointerMove: function () {
      return x;
    },
    evtKeyDown: function () {
      return k;
    },
    clsOpContainer: function () {
      return U;
    },
    evtPointerDown: function () {
      return T;
    },
    clsViewerShow: function () {
      return L;
    },
    clsDragging: function () {
      return X;
    },
    minGapSize: function () {
      return b;
    },
    evtResize: function () {
      return O;
    },
    imageTransform: function () {
      return h;
    },
    evtKeyUp: function () {
      return F;
    },
    evtMouseMove: function () {
      return P;
    },
    evtKeyPress: function () {
      return _;
    },
    evtMouseLeave: function () {
      return D;
    },
    timeoutMs: function () {
      return v;
    },
    evtWheel: function () {
      return E;
    },
    clsViewerWrap: function () {
      return B;
    },
    delayMs: function () {
      return g;
    },
    clsToolbarHide: function () {
      return Z;
    },
    evtMouseDown: function () {
      return z;
    }
  });
}