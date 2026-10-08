// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(127374) to 'protobuf-utility-module'
// - Renamed variable 'o' to 'emptyModuleStub_3'
// - Resolved require(310479) to 'empty-module-stub_3'
// - Resolved require(762807) to 'string-format-util'
// - Resolved require(192782) to 'file-reader-util'
// - Resolved require(32855) to 'path-utils'
// - Resolved require(103652) to 'protobuf-message-type'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Resolved require(186226) to 'protobuf-root-definition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 848320
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var s = module.exports = require("protobuf-utility-module") /*id: 127374*/;
  var emptyModuleStub_3 = require("empty-module-stub_3") /*id: 310479*/;
  s.codegen = require("string-format-util") /*id: 762807*/;
  s.fetch = require("file-reader-util") /*id: 192782*/;
  s.path = require("path-utils") /*id: 32855*/;
  s.fs = s.inquire("fs");
  s.toArray = function (e) {
    if (e) {
      var t = Object.keys(e);
      var i = Array(t.length);
      var r = 0;
      while (r < t.length) {
        i[r] = e[t[r++]];
      }
      return i;
    }
    return [];
  };
  s.toObject = function (e) {
    var t = {};
    var i = 0;
    while (i < e.length) {
      var r = e[i++];
      var n = e[i++];
      if (n !== undefined) {
        t[r] = n;
      }
    }
    return t;
  };
  var a = /\\/g;
  var l = /"/g;
  s.isReserved = function (e) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
  };
  s.safeProp = function (e) {
    if (!/^[$\w_]+$/.test(e) || s.isReserved(e)) {
      return "[\"" + e.replace(a, "\\\\").replace(l, "\\\"") + "\"]";
    } else {
      return "." + e;
    }
  };
  s.ucFirst = function (e) {
    return e.charAt(0).toUpperCase() + e.substring(1);
  };
  var u = /_([a-z])/g;
  s.camelCase = function (e) {
    return e.substring(0, 1) + e.substring(1).replace(u, function (e, t) {
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
    r ||= require("protobuf-message-type") /*id: 103652*/;
    var n = new r(t || e.name);
    s.decorateRoot.add(n);
    n.ctor = e;
    Object.defineProperty(e, "$type", {
      value: n,
      enumerable: false
    });
    Object.defineProperty(e.prototype, "$type", {
      value: n,
      enumerable: false
    });
    return n;
  };
  var d = 0;
  s.decorateEnum = function (e) {
    if (e.$type) {
      return e.$type;
    }
    n ||= require("protobuf-enum-class-module") /*id: 406982*/;
    var t = new n("Enum" + d++, e);
    s.decorateRoot.add(t);
    Object.defineProperty(e, "$type", {
      value: t,
      enumerable: false
    });
    return t;
  };
  s.setProperty = function (e, t, i) {
    if (typeof e != "object") {
      throw TypeError("dst must be an object");
    }
    if (!t) {
      throw TypeError("path must be specified");
    }
    return function e(t, i, r) {
      var n = i.shift();
      if (n === "__proto__" || n === "prototype") {
        return t;
      }
      if (i.length > 0) {
        t[n] = e(t[n] || {}, i, r);
      } else {
        var s = t[n];
        if (s) {
          r = [].concat(s).concat(r);
        }
        t[n] = r;
      }
      return t;
    }(e, t = t.split("."), i);
  };
  Object.defineProperty(s, "decorateRoot", {
    get: function () {
      return emptyModuleStub_3.decorated ||= new (require("protobuf-root-definition") /*id: 186226*/)();
    }
  });
}