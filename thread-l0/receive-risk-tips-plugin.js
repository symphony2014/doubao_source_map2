// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'receiveMessageTipsRender'
// - Resolved require(436992) to 'receive-message-tips-render'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'j' to 'MessageTipsRender' (module 436992)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-receive-message-render.0bf9bb67.js
         * chunkId: 15692
         * moduleId: 348450
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i = require.t(reactCoreLibraryReexport, 2);
  var receiveMessageTipsRender = require("receive-message-tips-render") /*id: 436992*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let {
    memo: u
  } = i;
  let s = u(t => {
    let {
      riskTips: e
    } = t;
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(receiveMessageTipsRender.MessageTipsRender, {
        tips: [e],
        isBlock: true
      });
    } else {
      return null;
    }
  });
  let c = (t, e) => {
    return {
      riskTips: e.content?.tips_block
    };
  };
  function a(t, e, r) {
    var n;
    if ((e = typeof (n = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(t, e || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? n : n + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  class f {
    constructor() {
      a(this, "nodeTypes", ["block_type:10053"]);
      a(this, "Content", s);
      a(this, "usePropsSelector", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveRiskTipsNodeRenderPlugin: function () {
      return f;
    }
  });
}