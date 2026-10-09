// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufEnumClassModule'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Renamed variable 'n' to 'protobufFieldTypeMappings'
// - Resolved require(52800) to 'protobuf-field-type-mappings'
// - Renamed variable 's' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 200988
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var t;
    var i;
    var a = protobufDecoratorUtils.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
    var l = e.fieldsArray.slice().sort(protobufDecoratorUtils.compareFieldsById);
    var t = 0;
    for (; t < l.length; ++t) {
      var u = l[t].resolve();
      var d = e._fieldsArray.indexOf(u);
      var c = u.resolvedType instanceof protobufEnumClassModule ? "int32" : u.type;
      var p = protobufFieldTypeMappings.basic[c];
      i = "m" + protobufDecoratorUtils.safeProp(u.name);
      if (u.map) {
        a("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, u.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (u.id << 3 | 2) >>> 0, protobufFieldTypeMappings.mapKey[u.keyType] | 8, u.keyType);
        if (p === undefined) {
          a("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", d, i);
        } else {
          a(".uint32(%i).%s(%s[ks[i]]).ldelim()", p | 16, c, i);
        }
        a("}")("}");
      } else if (u.repeated) {
        a("if(%s!=null&&%s.length){", i, i);
        if (u.packed && protobufFieldTypeMappings.packed[c] !== undefined) {
          a("w.uint32(%i).fork()", (u.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", c, i)("w.ldelim()");
        } else {
          a("for(var i=0;i<%s.length;++i)", i);
          if (p === undefined) {
            o(a, u, d, i + "[i]");
          } else {
            a("w.uint32(%i).%s(%s[i])", (u.id << 3 | p) >>> 0, c, i);
          }
        }
        a("}");
      } else {
        if (u.optional) {
          a("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, u.name);
        }
        if (p === undefined) {
          o(a, u, d, i);
        } else {
          a("w.uint32(%i).%s(%s)", (u.id << 3 | p) >>> 0, c, i);
        }
      }
    }
    return a("return w");
  };
  var protobufEnumClassModule = require("protobuf-enum-class-module") /*id: 406982*/;
  var protobufFieldTypeMappings = require("protobuf-field-type-mappings") /*id: 52800*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function o(e, t, i, r) {
    if (t.resolvedType.group) {
      return e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", i, r, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0);
    } else {
      return e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", i, r, (t.id << 3 | 2) >>> 0);
    }
  }
}