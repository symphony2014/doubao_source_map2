// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'o' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'a' to 'batchImageStoreLogic'
// - Resolved require(73795) to 'batch-image-store-logic'
// - Renamed variable 's' to 'reactUseUpdateEffect'
// - Resolved require(141220) to 'react-use-update-effect'
// - Renamed variable 'l' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'c' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(83355) to 'chat-image-download'
// - Resolved require.bind(279634) to 'chat-batch-image-download-toolbar'
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'S0' to 'imageStore' (module 73795)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'Z' to 'useUpdateEffect' (module 141220)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 426509
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var batchImageStoreLogic = require("batch-image-store-logic") /*id: 73795*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => function (t) {
    let n = useLocationWrapper.useLocationWrapper();
    let [i] = batchImageStoreLogic.imageStore(e => [e.onUpdateBatchDownloadSelected], deepEqualityUtil_1.isDeepEqual);
    reactUseUpdateEffect.useUpdateEffect(() => {
      var r;
      if (!n.state?.enter_from || !["chat_item_menu_share", "chat_item_menu_collection"].includes(n.state?.enter_from)) {
        i(false);
        if ((r = chatStoreManager.getStoreState("chatMessageBoxLayoutStore")) !== null && r !== undefined) {
          r.getLayoutSetter().setLayoutAreaVisible("bottom");
        }
      }
    }, [n]);
    return reactJsxRuntimeCoreReexport.jsx(e, {
      ...(t || {})
    });
  };
  let h = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    let {
      BatchDownloadToolbar: e
    } = await require.e("chat-image-download") /*id: 83355*/.then(require.bind(require, "chat-batch-image-download-toolbar") /*id: 279634*/);
    return {
      default: u(e)
    };
  }));
  class f {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: h,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = h;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    BatchDownloadFooterPlugin: function () {
      return f;
    },
    BatchDownloadToolbar: function () {
      return h;
    }
  });
}