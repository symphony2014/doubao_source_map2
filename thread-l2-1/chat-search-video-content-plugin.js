// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSearchVideoSymbol'
// - Resolved require(89038) to 'chat-search-video-symbol'
// - Renamed variable 'l' to 'chatVideoCarouselList'
// - Resolved require(161441) to 'chat-video-carousel-list'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'v' to 'ChatVideoCarousel' (module 161441)
// - Updated imported property 'p' to 'searchVideoSymbol' (module 89038)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 978872
         */
module.exports = function (module, exports, require) {
  var chatSearchVideoSymbol = require("chat-search-video-symbol") /*id: 89038*/;
  var chatVideoCarouselList = require("chat-video-carousel-list") /*id: 161441*/;
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
    return reactJsxRuntimeCoreReexport.jsx(chatVideoCarouselList.ChatVideoCarousel, {
      message: n,
      inView: t,
      disableTrack: true
    });
  };
  class s {
    constructor() {
      o(this, "pluginIdentifier", chatSearchVideoSymbol.searchVideoSymbol);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchVideoContentPlugin: function () {
      return s;
    }
  });
}