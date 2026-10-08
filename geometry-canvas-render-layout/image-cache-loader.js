// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kq' to 'setImageLoader'
// - Renamed export 'gJ' to 'loadImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 685396
         */
module.exports = function (module, exports, require) {
  var i = {};
  function r(t, e) {
    var n = new Image();
    n.src = t;
    n.crossOrigin = "";
    n.onload = function () {
      e(n);
    };
  }
  function o(t) {
    r = t;
  }
  function a(t, e, n) {
    var o;
    if (i[t]) {
      if (n && !i[t].image) {
        i[t].listeners[e] = n;
      }
      return i[t].image;
    }
    i[t] = {
      image: undefined,
      listeners: ((o = {})[e] = n, o)
    };
    try {
      r(t, function (e) {
        s(i[t], e);
      });
    } catch (e) {
      s(i[t], t);
    }
    return i[t].image;
  }
  function s(t, e) {
    t.image = e;
    for (var n in t.listeners) {
      var i = t.listeners[n];
      if (i) {
        i(t.image);
      }
    }
    delete t.listeners;
  }
  require.d(exports, {
    setImageLoader: function () {
      return o;
    },
    loadImage: function () {
      return a;
    }
  });
}