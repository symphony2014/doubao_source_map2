// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'DocBlockModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 672640
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var a;
  var s;
  var c;
  var u;
  var d;
  var h;
  var f;
  var g;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  let _ = require("dependency-injection-container") /*id: 555385*/.providerName("doc-info-service");
  o = g = class extends docxEditorCore.BlockModel {
    get isApplyBackUp() {
      return changeSourceValidators.isOfflineSource(this.struct);
    }
    get parent() {
      return docxEditorCore.getBlockModel(this.struct.parent) || null;
    }
    get children() {
      return this.struct.children.map(docxEditorCore.getBlockModel);
    }
    get previous() {
      return docxEditorCore.getBlockModel(this.struct.previous) || null;
    }
    get next() {
      return docxEditorCore.getBlockModel(this.struct.next) || null;
    }
    get previousSibling() {
      return docxEditorCore.getBlockModel(this.struct.previousSibling) || null;
    }
    get nextSibling() {
      return docxEditorCore.getBlockModel(this.struct.nextSibling) || null;
    }
    getText() {
      return "";
    }
    applyTransaction(e, n, i) {
      this.dataService.applyTransaction(e, n, i);
    }
    notifyUserEdit() {
      var e;
      if ((e = this.editorAPI.getService(_, {
        dynamic: true
      }).get()) !== null && e !== undefined) {
        e.notifyUserEdit();
      }
    }
    constructor(e) {
      var n;
      var i;
      super(e);
      n = "blockManager";
      if (i = f) {
        Object.defineProperty(this, n, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
    }
  };
  l = "abstractType";
  a = docBlockTypeConstants.compatibleBlock;
  if ((l = typeof (r = function (e, n) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      var r = i.call(e, n || "default");
      if (typeof r != "object") {
        return r;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (n === "string" ? String : Number)(e);
  }(l, "string")) == "symbol" ? r : r + "") in o) {
    Object.defineProperty(o, l, {
      value: a,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    o[l] = a;
  }
  s = g.prototype;
  c = "blockManager";
  u = [blockManagerToken.blockManagerToken];
  h = {};
  Object.keys(d = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    h[e] = d[e];
  });
  h.enumerable = !!h.enumerable;
  h.configurable = !!h.configurable;
  if ("value" in h || h.initializer) {
    h.writable = true;
  }
  f = (h = u.slice().reverse().reduce(function (e, n) {
    return n(s, c, e) || e;
  }, h)).initializer === undefined ? (Object.defineProperty(s, c, h), null) : h;
  let y = g;
  require.d(exports, {
    DocBlockModel: function () {
      return y;
    }
  });
}