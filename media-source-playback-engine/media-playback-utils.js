// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_v' to 'delay'
// - Renamed export 'cd' to 'getVideoQuality'
// - Renamed export 'gJ' to 'concatBuffers'
// - Renamed export 'kv' to 'isMediaPlaying'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 53628
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return e && !e.paused && !e.ended && e.playbackRate !== 0 && e.readyState !== 0;
  }
  function i(e) {
    if (!e) {
      return {};
    }
    if (typeof e.getVideoPlaybackQuality == "function") {
      var t = e.getVideoPlaybackQuality();
      return {
        droppedVideoFrames: t.droppedVideoFrames || t.corruptedVideoFrames,
        totalVideoFrames: t.totalVideoFrames,
        creationTime: t.creationTime
      };
    }
    return {
      droppedVideoFrames: e.webkitDroppedFrameCount,
      totalVideoFrames: e.webkitDecodedFrameCount,
      creationTime: performance.now()
    };
  }
  function o() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    if ((t = t.filter(Boolean)).length < 2) {
      return t[0];
    }
    var r = new Uint8Array(t.reduce(function (e, t) {
      return e + t.byteLength;
    }, 0));
    var i = 0;
    t.forEach(function (e) {
      r.set(e, i);
      i += e.byteLength;
    });
    return r;
  }
  function a(e = 0) {
    return new Promise(function (t) {
      return setTimeout(t, e);
    });
  }
  require.d(exports, {
    delay: function () {
      return a;
    },
    getVideoQuality: function () {
      return i;
    },
    concatBuffers: function () {
      return o;
    },
    isMediaPlaying: function () {
      return r;
    }
  });
}