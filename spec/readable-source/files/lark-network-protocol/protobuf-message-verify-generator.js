// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufEnumClassModule'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Renamed variable 'n' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 714025
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var t = protobufDecoratorUtils.codegen(["m"], e.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
    var i = e.oneofsArray;
    var r = {};
    if (i.length) {
      t("var p={}");
    }
    for (var a = 0; a < e.fieldsArray.length; ++a) {
      var l = e._fieldsArray[a].resolve();
      var u = "m" + protobufDecoratorUtils.safeProp(l.name);
      if (l.optional) {
        t("if(%s!=null&&m.hasOwnProperty(%j)){", u, l.name);
      }
      if (l.map) {
        t("if(!util.isObject(%s))", u)("return%j", s(l, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){");
        (function (e, t, i) {
          switch (t.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              e("if(!util.key32Re.test(%s))", i)("return%j", s(t, "integer key"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              e("if(!util.key64Re.test(%s))", i)("return%j", s(t, "integer|Long key"));
              break;
            case "bool":
              e("if(!util.key2Re.test(%s))", i)("return%j", s(t, "boolean key"));
          }
        })(t, l, "k[i]");
        o(t, l, a, u + "[k[i]]")("}");
      } else if (l.repeated) {
        t("if(!Array.isArray(%s))", u)("return%j", s(l, "array"))("for(var i=0;i<%s.length;++i){", u);
        o(t, l, a, u + "[i]")("}");
      } else {
        if (l.partOf) {
          var d = protobufDecoratorUtils.safeProp(l.partOf.name);
          if (r[l.partOf.name] === 1) {
            t("if(p%s===1)", d)("return%j", l.partOf.name + ": multiple values");
          }
          r[l.partOf.name] = 1;
          t("p%s=1", d);
        }
        o(t, l, a, u);
      }
      if (l.optional) {
        t("}");
      }
    }
    return t("return null");
  };
  var protobufEnumClassModule = require("protobuf-enum-class-module") /*id: 406982*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function s(e, t) {
    return e.name + ": " + t + (e.repeated && t !== "array" ? "[]" : e.map && t !== "object" ? "{k:" + e.keyType + "}" : "") + " expected";
  }
  function o(e, t, i, n) {
    if (t.resolvedType) {
      if (t.resolvedType instanceof protobufEnumClassModule) {
        e("switch(%s){", n)("default:")("return%j", s(t, "enum value"));
        var o = Object.keys(t.resolvedType.values);
        var a = 0;
        for (; a < o.length; ++a) {
          e("case %i:", t.resolvedType.values[o[a]]);
        }
        e("break")("}");
      } else {
        e("{")("var e=types[%i].verify(%s);", i, n)("if(e)")("return%j+e", t.name + ".")("}");
      }
    } else {
      switch (t.type) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          e("if(!util.isInteger(%s))", n)("return%j", s(t, "integer"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", s(t, "integer|Long"));
          break;
        case "float":
        case "double":
          e("if(typeof %s!==\"number\")", n)("return%j", s(t, "number"));
          break;
        case "bool":
          e("if(typeof %s!==\"boolean\")", n)("return%j", s(t, "boolean"));
          break;
        case "string":
          e("if(!util.isString(%s))", n)("return%j", s(t, "string"));
          break;
        case "bytes":
          e("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", n, n, n)("return%j", s(t, "buffer"));
      }
    }
    return e;
  }
}