// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerDynamicExtensionTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 245241
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
  n = (c = class {
    start(e) {
      if (!e) {
        return;
      }
      let i = e.keys();
      let r = i.next();
      while (!r.done) {
        let n = r.value;
        this.moduleService.setDynamicExtensionModuleConfig(n, e.get(n));
        r = i.next();
      }
    }
    constructor() {
      var e;
      var i;
      var r;
      var n;
      var o;
      i = "dynamic-extension-trigger";
      if ((e = typeof (o = function (e, i) {
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
      }(e = "name", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
      r = "moduleService";
      if (n = d) {
        Object.defineProperty(this, r, {
          enumerable: n.enumerable,
          configurable: n.configurable,
          writable: n.writable,
          value: n.initializer ? n.initializer.call(this) : undefined
        });
      }
    }
  }).prototype;
  o = "moduleService";
  l = [docxEditorCore.MODULE_MGR_TOKEN];
  a = {};
  Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  });
  a.enumerable = !!a.enumerable;
  a.configurable = !!a.configurable;
  if ("value" in a || a.initializer) {
    a.writable = true;
  }
  d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a;
  let f = c;
  function g() {
    docxEditorCore.registerTrigger(() => dependencyInjectionContainer.instantiate(f));
  }
  require.d(exports, {
    registerDynamicExtensionTrigger: function () {
      return g;
    }
  });
}