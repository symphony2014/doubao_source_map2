// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'a' to 'uploadButtonComponent'
// - Resolved require(994788) to 'upload-button-component'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(6431) to 'semi-ui-popover-tooltip'
// - Resolved require.bind(155754) to 'guest-file-upload-button'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'i' to 'UploadButton' (module 994788)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-engine-tool-button.ce0184bf.js
         * chunkId: 96879
         * moduleId: 497261
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var uploadButtonComponent = require("upload-button-component") /*id: 994788*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("semi-ui-popover-tooltip") /*id: 6431*/]).then(require.bind(require, "guest-file-upload-button") /*id: 155754*/).then(e => ({
    default: e.GuestGenericFileUploadButton
  }))), () => reactJsxRuntimeCoreReexport.jsx(uploadButtonComponent.UploadButton, {
    disabled: true,
    trackParams: {}
  }));
  let u = e => {
    let t = chatStoreManager.useStoreSelector("flowWebLayoutStore", e => e.pageInteractive);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center",
      children: [t ? reactJsxRuntimeCoreReexport.jsx(o, {
        ...e,
        enablePasteAndDropUpload: false
      }) : reactJsxRuntimeCoreReexport.jsx(uploadButtonComponent.UploadButton, {
        disabled: true,
        trackParams: {}
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mr-4 ml-8 h-16 w-1 bg-dbx-line-10"
      })]
    });
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
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
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
    GuestFileUploadToolButtonPlugin: function () {
      return c;
    }
  });
}