// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'a' to 'chatRefContentSelectors'
// - Resolved require(434690) to 'chat-ref-content-selectors'
// - Renamed variable 'o' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'imageRefWithDeleteComponent'
// - Resolved require(83012) to 'image-ref-with-delete-component'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'UC' to 'useRefContent' (module 434690)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'hx' to 'useAttachmentHook' (module 793484)
// - Updated imported property 'U' to 'ImageRefWithDelete' (module 83012)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 557890
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var imageRefWithDeleteComponent = require("image-ref-with-delete-component") /*id: 83012*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    var r;
    let {
      chatId: d,
      skill: c
    } = e;
    let p = chatRefContentSelectors.useRefContent(d);
    let f = (p == null ? undefined : p.refContents) || [];
    let m = p == null ? undefined : p.channel;
    let h = reactCoreLibraryReexport.useMemo(() => f.findIndex(e => e.type === "image"), [f]);
    let g = h >= 0 ? f[h] : null;
    let v = (g == null ? undefined : g.link) || (g == null ? undefined : g.option?.local_path) || "";
    let y = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: d,
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let {
      clearAttachments: _
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: d,
      skillType: chatAppEnums.SkillType.ImageGeneration
    });
    let b = m === `skill_${(c == null ? undefined : (r = c.skill_type) === null || r === undefined ? undefined : r.toString()) || ""}`;
    reactCoreLibraryReexport.useEffect(() => {
      if (g && y.length > 0) {
        _({});
      }
    }, [y.length, _, g]);
    if (g && b && v) {
      return reactJsxRuntimeCoreReexport.jsx(imageRefWithDeleteComponent.ImageRefWithDelete, {
        imgSrc: v,
        showDelete: true,
        onDelete: () => {
          if (!(h < 0)) {
            chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
              if (e != null) {
                e.deleteRefContent(d, h);
              }
            });
          }
        }
      });
    } else {
      return null;
    }
  };
  class c {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: d,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = d;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ImageGenerationReferenceAreaPlugin: function () {
      return c;
    }
  });
}