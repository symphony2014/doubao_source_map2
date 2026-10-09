// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 130346
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
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
  let o = reactCoreLibraryReexport.memo(e => null);
  let a = (e, t) => ({
    message: messageContextDefinition.useMessage(),
    contentBlock: t
  });
  class s {
    constructor() {
      r(this, "nodeTypes", ["block_type:10021"]);
      r(this, "Content", o);
      r(this, "usePropsSelector", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    BlockCodeFileNodeRenderPlugin: function () {
      return s;
    }
  });
}