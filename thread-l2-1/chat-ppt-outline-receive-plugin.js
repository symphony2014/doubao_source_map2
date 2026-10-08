// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPptOutlineSymbol'
// - Resolved require(732558) to 'chat-ppt-outline-symbol'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'r' to 'skeletonLayoutComponent'
// - Resolved require(367791) to 'skeleton-layout-component'
// - Renamed variable 'o' to 'errorOutlineComponent'
// - Resolved require(345768) to 'error-outline-component'
// - Renamed variable 'a' to 'writingOutlineComponent'
// - Resolved require(948439) to 'writing-outline-component'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'd' to 'useRequestHook'
// - Resolved require(870590) to 'use-request-hook'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'useRequest' (module 870590)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'B' to 'SkeletonLayout' (module 367791)
// - Updated imported property 'M' to 'ErrorOutline' (module 345768)
// - Updated imported property 'p' to 'WritingOutlineComponent' (module 948439)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property '_' to 'receivePptOutline' (module 732558)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 652204
         */
module.exports = function (module, exports, require) {
  var chatPptOutlineSymbol = require("chat-ppt-outline-symbol") /*id: 732558*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var skeletonLayoutComponent = require("skeleton-layout-component") /*id: 367791*/;
  var errorOutlineComponent = require("error-outline-component") /*id: 345768*/;
  var writingOutlineComponent = require("writing-outline-component") /*id: 948439*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      message: m
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let f = (m == null ? undefined : m.content_obj?.text) || "";
    let {
      data: h,
      loading: g
    } = useRequestHook.useRequest(async () => {
      return apiServicesCollection.SamanthaApiService.GetOutlineMeta({
        outline_id: m == null ? undefined : m.ext?.outline_id
      }).then(e => e.data).catch(() => {});
    });
    if (g) {
      return reactJsxRuntimeCoreReexport.jsx(skeletonLayoutComponent.SkeletonLayout, {});
    } else if (m == null ? undefined : m.ext?.samantha_code) {
      return reactJsxRuntimeCoreReexport.jsx(errorOutlineComponent.ErrorOutline, {
        tip: m.brief ?? m.ext.brief,
        actionBarConfigStr: m == null ? undefined : m.ext?.action_bar_config,
        i18nConfig: {
          skill_writing_outline_failure_retry_button_titile: v("skill_writing_outline_failure_retry_button_titile")
        }
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(writingOutlineComponent.WritingOutlineComponent, {
        onUpdate: emptyExportFunction.emptyFunction,
        markdown: f,
        editable: false,
        meta: h,
        updateTime: h == null ? undefined : h.update_time
      });
    }
  };
  function m(e, t, n) {
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
  class v {
    constructor() {
      m(this, "pluginIdentifier", chatPptOutlineSymbol.receivePptOutline);
      m(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceivePPTOutlineContentPlugin: function () {
      return v;
    }
  });
}