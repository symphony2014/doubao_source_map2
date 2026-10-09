// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skeletonLayoutComponent'
// - Resolved require(367791) to 'skeleton-layout-component'
// - Renamed variable 'r' to 'receiveMessageThinkingSymbol'
// - Resolved require(714541) to 'receive-message-thinking-symbol'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'B' to 'SkeletonLayout' (module 367791)
// - Updated imported property 'h' to 'receiveThinkSymbol' (module 714541)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 649734
         */
module.exports = function (module, exports, require) {
  var skeletonLayoutComponent = require("skeleton-layout-component") /*id: 367791*/;
  var receiveMessageThinkingSymbol = require("receive-message-thinking-symbol") /*id: 714541*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function a(e, t, n) {
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
  let l = () => reactJsxRuntimeCoreReexport.jsx(skeletonLayoutComponent.SkeletonLayout, {});
  class s {
    constructor() {
      a(this, "pluginIdentifier", receiveMessageThinkingSymbol.receiveThinkSymbol);
      a(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    OutlineThinkingReceiveMessageBoxPlugin: function () {
      return s;
    }
  });
}