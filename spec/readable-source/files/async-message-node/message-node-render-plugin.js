// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'messageNodeTextComponent'
// - Resolved require(806563) to 'message-node-text-component'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'q' to 'MessageTextNode' (module 806563)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 425660
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageNodeTextComponent = require("message-node-text-component") /*id: 806563*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.memo(e => {
    let {
      node: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(messageNodeTextComponent.MessageTextNode, {
      ...(r.block.content?.auth_identity_block ?? {})
    });
  });
  function a(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class s {
    constructor() {
      a(this, "nodeTypes", ["block_type:10054"]);
      a(this, "Content", o);
      a(this, "usePropsSelector", () => ({}));
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCreationNoLoginNodeRenderPlugin: function () {
      return s;
    }
  });
}