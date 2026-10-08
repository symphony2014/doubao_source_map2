// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBlockVisibilityProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 540392
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
  var blockVisibilityProviderName = require("block-visibility-provider-name") /*id: 46719*/;
  var observableMergeOperator = require("observable-merge-operator") /*id: 746368*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var observableShareReplayOperator = require("observable-share-replay-operator") /*id: 669027*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  let b = dependencyInjectionContainer.Provide(blockVisibilityProviderName.blockVisibilityProvider)((n = (c = class {
    init() {
      let e = this.contextService.fold.blockShown$.pipe(observableSafeMapOperator.createSafeMapOperator(e => ({
        items: e.map(e => ({
          blockId: e.blockId,
          isVisible: e.isShown
        }))
      })));
      this.blockVisibilityChange$ = observableMergeOperator.mergeObservable(e).pipe(observableShareReplayOperator.shareReplayWithConfig());
    }
    constructor() {
      var e;
      var i;
      var r;
      var n;
      var o;
      e = "contextService";
      if (i = d) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      n = undefined;
      if ((r = typeof (o = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(r = "blockVisibilityChange$", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = n;
      }
    }
  }).prototype, o = "contextService", l = [compatibleEditorContext_1.compatibleContext], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  function y() {
    docxEditorCore.registerProviders([b]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(blockVisibilityProviderName.blockVisibilityProvider).init();
    });
  }
  require.d(exports, {
    registerBlockVisibilityProvider: function () {
      return y;
    }
  });
}