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
         * moduleId: 402317
         */
module.exports = function (module, exports, require) {
  module.exports = a;
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufTypeDefaults = require("protobuf-type-defaults") /*id: 673143*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function o(e) {
    return "missing required '" + e.name + "'";
  }
  function a(e) {
    var t = protobufUtilityModule_1.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function (e) {
      return e.map;
    }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
    if (e.group) {
      t("if((t&7)===4)")("break");
    }
    t("switch(t>>>3){");
    for (var r = 0; r < e.fieldsArray.length; ++r) {
      var a = e._fieldsArray[r].resolve();
      var c = a.resolvedType instanceof protobufEnumClass ? "int32" : a.type;
      var l = "m" + protobufUtilityModule_1.safeProp(a.name);
      t("case %i:", a.id);
      if (a.map) {
        t("r.skip().pos++")("if(%s===util.emptyObject)", l)("%s={}", l)("k=r.%s()", a.keyType)("r.pos++");
        if (protobufTypeDefaults.long[a.keyType] !== undefined) {
          if (protobufTypeDefaults.basic[c] === undefined) {
            t("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", l, r);
          } else {
            t("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", l, c);
          }
        } else if (protobufTypeDefaults.basic[c] === undefined) {
          t("%s[k]=types[%i].decode(r,r.uint32())", l, r);
        } else {
          t("%s[k]=r.%s()", l, c);
        }
      } else if (a.repeated) {
        t("if(!(%s&&%s.length))", l, l)("%s=[]", l);
        if (protobufTypeDefaults.packed[c] !== undefined) {
          t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, c)("}else");
        }
        if (protobufTypeDefaults.basic[c] === undefined) {
          t(a.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, r);
        } else {
          t("%s.push(r.%s())", l, c);
        }
      } else if (protobufTypeDefaults.basic[c] === undefined) {
        t(a.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, r);
      } else {
        t("%s=r.%s()", l, c);
      }
      t("break");
    }
    t("default:")("r.skipType(t&7)")("break")("}")("}");
    r = 0;
    for (; r < e._fieldsArray.length; ++r) {
      var h = e._fieldsArray[r];
      if (h.required) {
        t("if(!m.hasOwnProperty(%j))", h.name)("throw util.ProtocolError(%j,{instance:m})", o(h));
      }
    }
    return t("return m");
  }
}