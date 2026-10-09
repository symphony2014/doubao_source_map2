// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'messageThinkingLoader'
// - Resolved require(358483) to 'message-thinking-loader'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'u' to 'MessageLoadingView' (module 358483)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-receive-message-node.d31ae29f.js
         * chunkId: 64795
         * moduleId: 364452
         */
module.exports = function (module, exports, require) {
  let i = (e, t) => {
    var o;
    var c;
    var u;
    var a;
    let d = (u = e.status?.isFinished) !== null && u !== undefined && u;
    let s = (a = e.status?.isBroken) !== null && a !== undefined && a;
    return {
      content: ((c = t.content) === null || c === undefined ? undefined : (o = c.loading_block) === null || o === undefined ? undefined : o.text_loading?.text) ?? "",
      isInThinking: !t.is_finish && !d && !s
    };
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageThinkingLoader = require("message-thinking-loader") /*id: 358483*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.memo(e => {
    let {
      content: t,
      isInThinking: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(messageThinkingLoader.MessageLoadingView, {
      content: t,
      isInThinking: n
    });
  });
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
  class l {
    constructor() {
      a(this, "nodeTypes", ["block_type:10101"]);
      a(this, "Content", u);
      a(this, "usePropsSelector", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveLoadingNodeRenderPlugin: function () {
      return l;
    }
  });
}