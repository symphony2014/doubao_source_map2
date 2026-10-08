// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatFileDropArea'
// - Resolved require(92231) to 'chat-file-drop-area'
// - Renamed variable 'a' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'o' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'l' to 'imageUploadHandlerHook'
// - Resolved require(683572) to 'image-upload-handler-hook'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'X' to 'useImageUploadHandler' (module 683572)
// - Updated imported property 'Rs' to 'subscribeAttachments' (module 793484)
// - Updated imported property 'm' to 'FileDropArea' (module 92231)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 918481
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var imageUploadHandlerHook = require("image-upload-handler-hook") /*id: 683572*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      chatId: t,
      chatType: r,
      onSubmit: u,
      skill: d
    } = e;
    let {
      handleFilesChange: c
    } = imageUploadHandlerHook.useImageUploadHandler({
      chatId: t,
      chatType: r,
      skill: d
    });
    let p = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: t ?? "",
      skillType: chatAppEnums.SkillType.ExerciseAssistant
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (p.length) {
        if (u != null) {
          u();
        }
      }
    }, [p]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        onDrop: e => {
          let {
            files: t
          } = e.dataTransfer || {};
          if (t.length) {
            c([...t], {
              from: "drag",
              uploadWay: "drag_drop"
            });
          }
        }
      })
    });
  };
  class d {
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
          value: u,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = u;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    EduAttachmentAreaPlugin: function () {
      return d;
    }
  });
}