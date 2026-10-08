// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'i' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27860.52534198.js
         * chunkId: 27860
         * moduleId: 649962
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var o = {
    tag: "tag-QLPHgS",
    "tag-disable": "tag-disable-fYO9d4"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      disable: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: t ? o["tag-disable"] : o.tag,
      children: n("input_skillbar_promote_tag_new")
    });
  };
  require.r(exports);
  require.d(exports, {
    NewTags: function () {
      return a;
    }
  });
}