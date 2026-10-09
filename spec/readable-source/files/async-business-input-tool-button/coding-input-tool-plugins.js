// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncBusinessInputToolButton'
// - Resolved require(168064) to 'async-business-input-tool-button'
// - Renamed variable 'r' to 'codingWhiteboardComponent'
// - Resolved require(158144) to 'coding-whiteboard-component'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'l' to 'asyncChatGithubRepoBtn'
// - Resolved require(562891) to 'async-chat-github-repo-btn'
// - Updated imported property 'L' to 'CodingWhiteboard' (module 158144)
// - Updated imported property 'Q' to 'AsyncBusinessInputToolButton' (module 168064)
// - Updated imported property 'c' to 'ChatGithubRepoBtn' (module 562891)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 931643
         */
module.exports = function (module, exports, require) {
  var asyncBusinessInputToolButton = require("async-business-input-tool-button") /*id: 168064*/;
  var codingWhiteboardComponent = require("coding-whiteboard-component") /*id: 158144*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      eventFrom: i,
      chatId: o,
      whiteboardVisible: l,
      showWhiteboard: s,
      ratioApp: c,
      setRatioApp: u,
      initWhiteboard: d,
      onWhiteboardSave: p,
      onWhiteboardCancel: h
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(codingWhiteboardComponent.CodingWhiteboard, {
      from: i,
      chatId: o,
      whiteboardVisible: l,
      showWhiteboard: s,
      isNarrow: n,
      isOverflow: t,
      ratioApp: c,
      setRatioApp: u,
      initData: d,
      onWhiteboardSave: p,
      onWhiteboardCancel: h
    });
  };
  var asyncChatGithubRepoBtn = require("async-chat-github-repo-btn") /*id: 562891*/;
  function s(e, t, n) {
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
  class c {
    constructor() {
      s(this, "Content", o);
    }
  }
  class u {
    constructor() {
      s(this, "Content", asyncBusinessInputToolButton.AsyncBusinessInputToolButton);
    }
  }
  class d {
    constructor() {
      s(this, "Content", asyncChatGithubRepoBtn.ChatGithubRepoBtn);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingAddGitHubRepoPlugin: function () {
      return d;
    },
    CodingUploadFilePlugin: function () {
      return u;
    },
    CodingWhiteboardPlugin: function () {
      return c;
    }
  });
}