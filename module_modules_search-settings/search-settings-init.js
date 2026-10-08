// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'r' to 'docxApiConstantsExports'
// - Resolved require(81404) to 'docx-api-constants-exports'
// - Updated imported property 'ZP' to 'docxApiService' (module 81404)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_modules_search-settings.7a8c1ef0.js
         * chunkId: 1806
         * moduleId: 669588
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  function s(i, t, e) {
    var n;
    if ((t = typeof (n = function (i, t) {
      if (typeof i != "object" || !i) {
        return i;
      }
      var e = i[Symbol.toPrimitive];
      if (e !== undefined) {
        var n = e.call(i, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(i);
    }(t, "string")) == "symbol" ? n : n + "") in i) {
      Object.defineProperty(i, t, {
        value: e,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      i[t] = e;
    }
    return i;
  }
  let a = new class {
    init() {
      if (!this.hasInit) {
        this.hasInit = true;
        docxApiConstantsExports.docxApiService.pullSearchSettings().then(i => {
          this.searchEngineConfigs = i.data || [];
        }).catch(i => {});
      }
    }
    hasSearchEngineConfig() {
      return !!this.searchEngineConfigs?.length && Array.isArray(this.searchEngineConfigs);
    }
    getUrl(i) {
      if (!this.hasSearchEngineConfig()) {
        return null;
      }
      let {
        url: t,
        query_param: e
      } = this.searchEngineConfigs.find(i => i.is_selected);
      return `${t}?${e}=${i}`;
    }
    constructor() {
      s(this, "hasInit", false);
      s(this, "searchEngineConfigs", []);
    }
  }();
  function o() {
    docxEditorCore.onInitHook(() => {
      a.init();
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return o;
    }
  });
}