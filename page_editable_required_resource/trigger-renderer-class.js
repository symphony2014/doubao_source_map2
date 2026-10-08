// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'TriggerRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 16171
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  class s extends baseRendererClass.BaseRenderer {
    match(e) {
      return e === s.KEY;
    }
    render(e) {
      e.class += ` trigger-holder-${e.attributes[s.KEY]}`;
      return e.children;
    }
  }
  l = "trigger";
  if ((o = typeof (r = function (e, n) {
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
  }(o = "KEY", "string")) == "symbol" ? r : r + "") in s) {
    Object.defineProperty(s, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    s[o] = l;
  }
  require.d(exports, {
    TriggerRenderer: function () {
      return s;
    }
  });
}