// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(959925) to 'protobuf-utility-module_2'
// - Renamed variable 'o' to 'emptyModuleObject'
// - Resolved require(423469) to 'empty-module-object'
// - Resolved require(762807) to 'string-format-util'
// - Resolved require(192782) to 'file-reader-util'
// - Resolved require(32855) to 'path-utils'
// - Resolved require(480559) to 'protobuf-type-class'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Resolved require(259225) to 'protobuf-namespace-root'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 285145
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var s = module.exports = require("protobuf-utility-module_2") /*id: 959925*/;
  var emptyModuleObject = require("empty-module-object") /*id: 423469*/;
  s.codegen = require("string-format-util") /*id: 762807*/;
  s.fetch = require("file-reader-util") /*id: 192782*/;
  s.path = require("path-utils") /*id: 32855*/;
  s.fs = s.inquire("fs");
  s.toArray = function (e) {
    if (e) {
      var t = Object.keys(e);
      var r = Array(t.length);
      var n = 0;
      while (n < t.length) {
        r[n] = e[t[n++]];
      }
      return r;
    }
    return [];
  };
  s.toObject = function (e) {
    var t = {};
    var r = 0;
    while (r < e.length) {
      var n = e[r++];
      var i = e[r++];
      if (i !== undefined) {
        t[n] = i;
      }
    }
    return t;
  };
  var a = /\\/g;
  var c = /"/g;
  s.isReserved = function (e) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
  };
  s.safeProp = function (e) {
    if (!/^[$\w_]+$/.test(e) || s.isReserved(e)) {
      return "[\"" + e.replace(a, "\\\\").replace(c, "\\\"") + "\"]";
    } else {
      return "." + e;
    }
  };
  s.ucFirst = function (e) {
    return e.charAt(0).toUpperCase() + e.substring(1);
  };
  var l = /_([a-z])/g;
  s.camelCase = function (e) {
    return e.substring(0, 1) + e.substring(1).replace(l, function (e, t) {
      return t.toUpperCase();
    });
  };
  s.compareFieldsById = function (e, t) {
    return e.id - t.id;
  };
  s.decorateType = function (e, t) {
    if (e.$type) {
      if (t && e.$type.name !== t) {
        s.decorateRoot.remove(e.$type);
        e.$type.name = t;
        s.decorateRoot.add(e.$type);
      }
      return e.$type;
    }
    n ||= require("protobuf-type-class") /*id: 480559*/;
    var i = new n(t || e.name);
    s.decorateRoot.add(i);
    i.ctor = e;
    Object.defineProperty(e, "$type", {
      value: i,
      enumerable: false
    });
    Object.defineProperty(e.prototype, "$type", {
      value: i,
      enumerable: false
    });
    return i;
  };
  var h = 0;
  s.decorateEnum = function (e) {
    if (e.$type) {
      return e.$type;
    }
    i ||= require("protobuf-enum-class") /*id: 767548*/;
    var t = new i("Enum" + h++, e);
    s.decorateRoot.add(t);
    Object.defineProperty(e, "$type", {
      value: t,
      enumerable: false
    });
    return t;
  };
  Object.defineProperty(s, "decorateRoot", {
    get: function () {
      return emptyModuleObject.decorated ||= new (require("protobuf-namespace-root") /*id: 259225*/)();
    }
  });
}