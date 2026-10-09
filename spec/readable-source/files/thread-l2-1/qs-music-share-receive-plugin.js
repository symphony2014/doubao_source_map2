// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'qsMusicSymbol'
// - Resolved require(617441) to 'qs-music-symbol'
// - Renamed variable 'l' to 'musicPlayerComponent'
// - Resolved require(564298) to 'music-player-component'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'zI' to 'MusicPlayer' (module 564298)
// - Updated imported property 'Q' to 'qsMusicSymbol' (module 617441)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 778576
         */
module.exports = function (module, exports, require) {
  var qsMusicSymbol = require("qs-music-symbol") /*id: 617441*/;
  var musicPlayerComponent = require("music-player-component") /*id: 564298*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let a = e => {
    let {
      inView: t,
      message: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(musicPlayerComponent.MusicPlayer, {
      inView: t,
      message: n,
      isLastAvailableMessage: false
    });
  };
  class s {
    constructor() {
      o(this, "Content", a);
      o(this, "pluginIdentifier", qsMusicSymbol.qsMusicSymbol);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveQSMusicCardPlugin: function () {
      return s;
    }
  });
}