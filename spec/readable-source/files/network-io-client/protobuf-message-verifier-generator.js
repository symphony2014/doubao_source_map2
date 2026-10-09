// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufEnumClass'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Renamed variable 'i' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 877666
         */
module.exports = function (module, exports, require) {
  module.exports = c;
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function s(e, t) {
    return e.name + ": " + t + (e.repeated && t !== "array" ? "[]" : e.map && t !== "object" ? "{k:" + e.keyType + "}" : "") + " expected";
  }
  function o(e, t, r, i) {
    if (t.resolvedType) {
      if (t.resolvedType instanceof protobufEnumClass) {
        e("switch(%s){", i)("default:")("return%j", s(t, "enum value"));
        var o = Object.keys(t.resolvedType.values);
        var a = 0;
        for (; a < o.length; ++a) {
          e("case %i:", t.resolvedType.values[o[a]]);
        }
        e("break")("}");
      } else {
        e("{")("var e=types[%i].verify(%s);", r, i)("if(e)")("return%j+e", t.name + ".")("}");
      }
    } else {
      switch (t.type) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          e("if(!util.isInteger(%s))", i)("return%j", s(t, "integer"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", s(t, "integer|Long"));
          break;
        case "float":
        case "double":
          e("if(typeof %s!==\"number\")", i)("return%j", s(t, "number"));
          break;
        case "bool":
          e("if(typeof %s!==\"boolean\")", i)("return%j", s(t, "boolean"));
          break;
        case "string":
          e("if(!util.isString(%s))", i)("return%j", s(t, "string"));
          break;
        case "bytes":
          e("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", i, i, i)("return%j", s(t, "buffer"));
      }
    }
    return e;
  }
  function a(e, t, r) {
    switch (t.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        e("if(!util.key32Re.test(%s))", r)("return%j", s(t, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e("if(!util.key64Re.test(%s))", r)("return%j", s(t, "integer|Long key"));
        break;
      case "bool":
        e("if(!util.key2Re.test(%s))", r)("return%j", s(t, "boolean key"));
    }
    return e;
  }
  function c(e) {
    var t = protobufUtilityModule_1.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
    var r = e.oneofsArray;
    var n = {};
    if (r.length) {
      t("var p={}");
    }
    for (var c = 0; c < e.fieldsArray.length; ++c) {
      var l = e._fieldsArray[c].resolve();
      var h = "m" + protobufUtilityModule_1.safeProp(l.name);
      if (l.optional) {
        t("if(%s!=null&&m.hasOwnProperty(%j)){", h, l.name);
      }
      if (l.map) {
        t("if(!util.isObject(%s))", h)("return%j", s(l, "object"))("var k=Object.keys(%s)", h)("for(var i=0;i<k.length;++i){");
        a(t, l, "k[i]");
        o(t, l, c, h + "[k[i]]")("}");
      } else if (l.repeated) {
        t("if(!Array.isArray(%s))", h)("return%j", s(l, "array"))("for(var i=0;i<%s.length;++i){", h);
        o(t, l, c, h + "[i]")("}");
      } else {
        if (l.partOf) {
          var u = protobufUtilityModule_1.safeProp(l.partOf.name);
          if (n[l.partOf.name] === 1) {
            t("if(p%s===1)", u)("return%j", l.partOf.name + ": multiple values");
          }
          n[l.partOf.name] = 1;
          t("p%s=1", u);
        }
        o(t, l, c, h);
      }
      if (l.optional) {
        t("}");
      }
    }
    return t("return null");
  }
}