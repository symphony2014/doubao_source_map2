// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufEnumClass'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Renamed variable 'i' to 'protobufTypeDefaults'
// - Resolved require(673143) to 'protobuf-type-defaults'
// - Renamed variable 's' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 650878
         */
module.exports = function (module, exports, require) {
  module.exports = a;
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufTypeDefaults = require("protobuf-type-defaults") /*id: 673143*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function o(e, t, r, n) {
    if (t.resolvedType.group) {
      return e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, n, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0);
    } else {
      return e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, n, (t.id << 3 | 2) >>> 0);
    }
  }
  function a(e) {
    var t;
    var r;
    var a = protobufUtilityModule_1.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
    var c = e.fieldsArray.slice().sort(protobufUtilityModule_1.compareFieldsById);
    var t = 0;
    for (; t < c.length; ++t) {
      var l = c[t].resolve();
      var h = e._fieldsArray.indexOf(l);
      var u = l.resolvedType instanceof protobufEnumClass ? "int32" : l.type;
      var f = protobufTypeDefaults.basic[u];
      r = "m" + protobufUtilityModule_1.safeProp(l.name);
      if (l.map) {
        a("if(%s!=null&&m.hasOwnProperty(%j)){", r, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", r)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, protobufTypeDefaults.mapKey[l.keyType] | 8, l.keyType);
        if (f === undefined) {
          a("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", h, r);
        } else {
          a(".uint32(%i).%s(%s[ks[i]]).ldelim()", f | 16, u, r);
        }
        a("}")("}");
      } else if (l.repeated) {
        a("if(%s!=null&&%s.length){", r, r);
        if (l.packed && protobufTypeDefaults.packed[u] !== undefined) {
          a("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", r)("w.%s(%s[i])", u, r)("w.ldelim()");
        } else {
          a("for(var i=0;i<%s.length;++i)", r);
          if (f === undefined) {
            o(a, l, h, r + "[i]");
          } else {
            a("w.uint32(%i).%s(%s[i])", (l.id << 3 | f) >>> 0, u, r);
          }
        }
        a("}");
      } else {
        if (l.optional) {
          a("if(%s!=null&&m.hasOwnProperty(%j))", r, l.name);
        }
        if (f === undefined) {
          o(a, l, h, r);
        } else {
          a("w.uint32(%i).%s(%s)", (l.id << 3 | f) >>> 0, u, r);
        }
      }
    }
    return a("return w");
  }
}