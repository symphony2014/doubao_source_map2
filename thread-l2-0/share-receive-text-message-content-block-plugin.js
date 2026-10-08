// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'r' to 'chatReceiveTextBlockSymbol'
// - Resolved require(147461) to 'chat-receive-text-block-symbol'
// - Renamed variable 'a' to 'codeInterpreterResourceUi'
// - Resolved require(36868) to 'code-interpreter-resource-ui'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'r' to 'useCiResourceUi' (module 36868)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'A' to 'receiveTextBlockSym' (module 147461)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 427719
         */
module.exports = function (module, exports, require) {
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatReceiveTextBlockSymbol = require("chat-receive-text-block-symbol") /*id: 147461*/;
  var codeInterpreterResourceUi = require("code-interpreter-resource-ui") /*id: 36868*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function l(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let s = e => {
    let {
      inView: r,
      contentBlock: l,
      message: s
    } = e;
    let c = l == null ? undefined : l.content_obj?.text;
    let d = (l == null ? undefined : l.meta_infos) ?? [];
    let u = codeInterpreterResourceUi.useCiResourceUi({
      bizMessage: s
    });
    if (c) {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        inView: r != null && r,
        messageBlockText: c,
        messageBlockMeta: d,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        message: s,
        customRenderOptions: {
          customSlots: u
        }
      });
    } else {
      return null;
    }
  };
  class c {
    constructor() {
      l(this, "pluginIdentifier", chatReceiveTextBlockSymbol.receiveTextBlockSym);
      l(this, "type", "Content");
      l(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveTextMessageContentBlockPlugin: function () {
      return c;
    }
  });
}