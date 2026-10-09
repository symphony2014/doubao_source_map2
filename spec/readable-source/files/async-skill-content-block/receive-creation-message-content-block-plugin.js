// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'creationTypeConstants'
// - Resolved require(432580) to 'creation-type-constants'
// - Renamed variable 'o' to 'videoGenerationMessageBlock'
// - Resolved require(991381) to 'video-generation-message-block'
// - Renamed variable 'l' to 'imageMessageBlockComponent'
// - Resolved require(473789) to 'image-message-block-component'
// - Renamed variable 's' to 'chatBlockContentSymbol'
// - Resolved require(140058) to 'chat-block-content-symbol'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'PO' to 'creationTypes' (module 432580)
// - Updated imported property 'p' to 'creationBlockSymbol' (module 140058)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 204397
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var creationTypeConstants = require("creation-type-constants") /*id: 432580*/;
  var videoGenerationMessageBlock = require("video-generation-message-block") /*id: 991381*/;
  var imageMessageBlockComponent = require("image-message-block-component") /*id: 473789*/;
  let a = {
    enableOpenCanvas: true
  };
  var chatBlockContentSymbol = require("chat-block-content-symbol") /*id: 140058*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function d(e, t, n) {
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
  let u = e => {
    let {
      contentBlock: n,
      message: s
    } = e;
    let d = (n == null ? undefined : n.content_obj?.creations) || [];
    let u = reactCoreLibraryReexport.useMemo(() => d.reduce((e, t) => {
      if (e[e.length - 1]?.type !== t.type) {
        e.push({
          type: t.type,
          list: []
        });
      }
      e[e.length - 1].list.push(t);
      return e;
    }, []), [d]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: u.map((e, t) => {
        let {
          type: i,
          list: d
        } = e;
        if (i === creationTypeConstants.creationTypes.CreationTypeImage) {
          return reactJsxRuntimeCoreReexport.jsx(imageMessageBlockComponent.ImageBlock, {
            creationsImageList: d,
            message: s,
            blockId: n == null ? undefined : n.id,
            ...a
          }, `${t}_${i}`);
        } else if (i === creationTypeConstants.creationTypes.CreationTypeVideo) {
          return reactJsxRuntimeCoreReexport.jsx(videoGenerationMessageBlock.VideoBlock, {
            creationsVideoList: d,
            message: s
          }, `${t}_${i}`);
        } else {
          return null;
        }
      })
    });
  };
  class p {
    constructor() {
      d(this, "pluginIdentifier", chatBlockContentSymbol.creationBlockSymbol);
      d(this, "type", "Content");
      d(this, "Content", u);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCreationMessageContentBlockPlugin: function () {
      return p;
    }
  });
}