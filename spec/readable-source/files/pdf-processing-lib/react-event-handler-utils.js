// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Tu' to 'eventHandlerNames'
// - Renamed export 'ZP' to 'wrapEventHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 894068
         */
module.exports = function (module, exports, require) {
  function i(t, e, r) {
    if (r || arguments.length == 2) {
      var i;
      var n = 0;
      var o = e.length;
      for (; n < o; n++) {
        if (!!i || !(n in e)) {
          i ||= Array.prototype.slice.call(e, 0, n);
          i[n] = e[n];
        }
      }
    }
    return t.concat(i || Array.prototype.slice.call(e));
  }
  var n = ["onCompositionEnd", "onCompositionStart", "onCompositionUpdate"];
  var o = ["onFocus", "onBlur"];
  var s = ["onInput", "onInvalid", "onReset", "onSubmit"];
  var a = ["onLoad", "onError"];
  var l = ["onKeyDown", "onKeyPress", "onKeyUp"];
  var h = ["onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting"];
  var c = ["onClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp"];
  var u = ["onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop"];
  var d = ["onSelect"];
  var f = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"];
  var p = ["onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut"];
  var g = ["onScroll"];
  var m = ["onWheel"];
  var v = ["onAnimationStart", "onAnimationEnd", "onAnimationIteration"];
  var y = ["onTransitionEnd"];
  var b = ["onToggle"];
  var A = ["onChange"];
  var S = i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i([], ["onCopy", "onCut", "onPaste"], true), n, true), o, true), s, true), a, true), l, true), h, true), c, true), u, true), d, true), f, true), p, true), g, true), m, true), v, true), y, true), A, true), b, true);
  function x(t, e) {
    var r = {};
    S.forEach(function (i) {
      var n = t[i];
      if (n) {
        if (e) {
          r[i] = function (t) {
            return n(t, e(i));
          };
        } else {
          r[i] = n;
        }
      }
    });
    return r;
  }
  require.d(exports, {
    eventHandlerNames: function () {
      return S;
    },
    wrapEventHandlers: function () {
      return x;
    }
  });
}