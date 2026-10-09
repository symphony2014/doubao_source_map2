// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveHeaderTextBlockSymbol'
// - Resolved require(917676) to 'receive-header-text-block-symbol'
// - Renamed variable 'l' to 'contentBlockTextView'
// - Resolved require(957763) to 'content-block-text-view'
// - Updated imported property 'f' to 'headerTextBlockKey' (module 917676)
// - Updated imported property 'z' to 'ContentBlockText' (module 957763)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 174687
         */
module.exports = function (module, exports, require) {
  var receiveHeaderTextBlockSymbol = require("receive-header-text-block-symbol") /*id: 917676*/;
  var contentBlockTextView = require("content-block-text-view") /*id: 957763*/;
  function r(e, t, n) {
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
  class o {
    constructor() {
      r(this, "pluginIdentifier", receiveHeaderTextBlockSymbol.headerTextBlockKey);
      r(this, "type", "Content");
      r(this, "Content", contentBlockTextView.ContentBlockText);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveHeaderTextBlockContentPlugin: function () {
      return o;
    }
  });
}