// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'creationTypeConstants'
// - Resolved require(432580) to 'creation-type-constants'
// - Renamed variable 'a' to 'chatBlockContentSymbol'
// - Resolved require(140058) to 'chat-block-content-symbol'
// - Renamed variable 'o' to 'shareVideoBlock'
// - Resolved require(101648) to 'share-video-block'
// - Renamed variable 'l' to 'messageImageContentRenderer'
// - Resolved require(284556) to 'message-image-content-renderer'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'PO' to 'creationTypes' (module 432580)
// - Updated imported property 'U' to 'MessageImageContent' (module 284556)
// - Updated imported property 'p' to 'creationBlockSymbol' (module 140058)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 859349
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var creationTypeConstants = require("creation-type-constants") /*id: 432580*/;
  var chatBlockContentSymbol = require("chat-block-content-symbol") /*id: 140058*/;
  var shareVideoBlock = require("share-video-block") /*id: 101648*/;
  var messageImageContentRenderer = require("message-image-content-renderer") /*id: 284556*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function c(e, t, i) {
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
  let d = e => {
    let {
      contentBlock: i,
      message: a
    } = e;
    let c = (i == null ? undefined : i.content_obj?.creations) || [];
    let d = reactCoreLibraryReexport.useMemo(() => c.reduce((e, t) => {
      if (e[e.length - 1]?.type !== t.type) {
        e.push({
          type: t.type,
          list: []
        });
      }
      e[e.length - 1].list.push(t);
      return e;
    }, []), [c]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: d.map((e, t) => {
        let {
          type: i,
          list: n
        } = e;
        if (i === creationTypeConstants.creationTypes.CreationTypeImage) {
          return reactJsxRuntimeCoreReexport.jsx(messageImageContentRenderer.MessageImageContent, {
            creationsImageList: n,
            message: a
          }, `${t}_${i}`);
        } else if (i === creationTypeConstants.creationTypes.CreationTypeVideo) {
          return reactJsxRuntimeCoreReexport.jsx(shareVideoBlock.ShareVideoBlock, {
            creationsVideoList: n,
            message: a
          }, `${t}_${i}`);
        } else {
          return null;
        }
      })
    });
  };
  class u {
    constructor() {
      c(this, "pluginIdentifier", chatBlockContentSymbol.creationBlockSymbol);
      c(this, "type", "Content");
      c(this, "Content", d);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveCreationMessageContentBlockPlugin: function () {
      return u;
    }
  });
}