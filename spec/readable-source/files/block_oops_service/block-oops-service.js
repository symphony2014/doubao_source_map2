// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'n' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'a' to 'docxBlockErrorBoundary'
// - Resolved require(649744) to 'docx-block-error-boundary'
// - Renamed variable 'c' to 'blockOopsServiceProvider'
// - Resolved require(574532) to 'block-oops-service-provider'
// - Renamed variable 'u' to 'pageOopsServiceProvider'
// - Resolved require(695060) to 'page-oops-service-provider'
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'b' to 'blockOopsServiceId' (module 574532)
// - Updated imported property 'l' to 'BlockErrorBoundary' (module 649744)
// - Updated imported property 'FS' to 'EDITOR_API_TOKEN' (module 135760)
// - Updated imported property 'z' to 'pageOopsProvider' (module 695060)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: block_oops_service.103e1797.js
         * chunkId: 28868
         * moduleId: 840894
         */
module.exports = function (module, exports, require) {
  var t;
  var o;
  var s;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxBlockErrorBoundary = require("docx-block-error-boundary") /*id: 649744*/;
  var blockOopsServiceProvider = require("block-oops-service-provider") /*id: 574532*/;
  var pageOopsServiceProvider = require("page-oops-service-provider") /*id: 695060*/;
  function d(e, r, i, t) {
    if (i) {
      Object.defineProperty(e, r, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(t) : undefined
      });
    }
  }
  function b(e, r, i) {
    var t;
    if ((r = typeof (t = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var t = i.call(e, r || "default");
        if (typeof t != "object") {
          return t;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? t : t + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  function f(e, r, i, t, o) {
    var s = {};
    Object.keys(t).forEach(function (e) {
      s[e] = t[e];
    });
    s.enumerable = !!s.enumerable;
    s.configurable = !!s.configurable;
    if ("value" in s || s.initializer) {
      s.writable = true;
    }
    s = i.slice().reverse().reduce(function (i, t) {
      return t(e, r, i) || i;
    }, s);
    if (o && s.initializer !== undefined) {
      s.value = s.initializer ? s.initializer.call(o) : undefined;
      s.initializer = undefined;
    }
    if (s.initializer === undefined) {
      Object.defineProperty(e, r, s);
      return null;
    } else {
      return s;
    }
  }
  let p = dependencyInjectionContainer.Provide(blockOopsServiceProvider.blockOopsServiceId)((o = f((t = class {
    reset() {
      this.oopsRecordIds.clear();
      if (Array.isArray(this.subs)) {
        this.subs.forEach(e => e.unsubscribe());
      }
    }
    init() {
      this.reset();
    }
    isRecordError(e) {
      return this.oopsRecordIds.has(e);
    }
    reportBlockOops(e, r, i) {
      docxBlockErrorBoundary.BlockErrorBoundary.reportError(e, r, i);
    }
    blockOopsByRecordId(e, r, i) {
      let t = this.oopsRecordIds.has(e);
      this.oopsRecordIds.add(e);
      let o = this.editorAPI.structService.getBlockStructsByRecordId(e);
      if (o.length === 0) {
        return false;
      }
      if (o.find(e => e.isRoot())) {
        this.pageOopsService.showOopsModal({
          code: i,
          msg: r.message,
          type: "BlockError",
          detail: r.detail
        });
        return true;
      }
      if (!t) {
        this.reportBlockOops(r, o[0], i);
        for (let e of o) {
          this.editorAPI.viewService.requestBlockViewRender(e.id);
        }
      }
      return true;
    }
    destroy() {
      this.reset();
    }
    constructor() {
      b(this, "oopsRecordIds", new Set());
      d(this, "editorAPI", o, this);
      d(this, "pageOopsService", s, this);
      b(this, "subs", undefined);
    }
  }).prototype, "editorAPI", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), s = f(t.prototype, "pageOopsService", [pageOopsServiceProvider.pageOopsProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), t)) || t;
  require.r(exports);
  require.d(exports, {
    BlockOopsServiceImpl: function () {
      return p;
    }
  });
}