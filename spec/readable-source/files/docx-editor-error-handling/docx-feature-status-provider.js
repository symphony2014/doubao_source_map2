// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerFeatStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 273435
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var featStatusServiceProvider = require("feat-status-service-provider") /*id: 663703*/;
  let g = dependencyInjectionContainer.Provide(featStatusServiceProvider.featStatusProvider)((n = (c = class {
    getFeatureStatus(e) {
      return this.editorAPI.featureService.getFeatureLoadStatus(e);
    }
    constructor() {
      var e;
      var i;
      e = "editorAPI";
      if (i = d) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
    }
  }).prototype, o = "editorAPI", l = [docxEditorCore.EDITOR_API_TOKEN], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  function p() {
    docxEditorCore.registerProviders([g]);
  }
  require.d(exports, {
    registerFeatStatus: function () {
      return p;
    }
  });
}