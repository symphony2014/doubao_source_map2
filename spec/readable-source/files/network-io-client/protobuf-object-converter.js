// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'protobufEnumClass'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Renamed variable 's' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 484405
         */
module.exports = function (module, exports, require) {
  var n = exports;
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function o(e, t, r, n) {
    if (t.resolvedType) {
      if (t.resolvedType instanceof protobufEnumClass) {
        e("switch(d%s){", n);
        var s = t.resolvedType.values;
        var o = Object.keys(s);
        var a = 0;
        for (; a < o.length; ++a) {
          if (t.repeated && s[o[a]] === t.typeDefault) {
            e("default:");
          }
          e("case%j:", o[a])("case %i:", s[o[a]])("m%s=%j", n, s[o[a]])("break");
        }
        e("}");
      } else {
        e("if(typeof d%s!==\"object\")", n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, r, n);
      }
    } else {
      var c = false;
      switch (t.type) {
        case "double":
        case "float":
          e("m%s=Number(d%s)", n, n);
          break;
        case "uint32":
        case "fixed32":
          e("m%s=d%s>>>0", n, n);
          break;
        case "int32":
        case "sint32":
        case "sfixed32":
          e("m%s=d%s|0", n, n);
          break;
        case "uint64":
          c = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, c)("else if(typeof d%s===\"string\")", n)("m%s=parseInt(d%s,10)", n, n)("else if(typeof d%s===\"number\")", n)("m%s=d%s", n, n)("else if(typeof d%s===\"object\")", n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, c ? "true" : "");
          break;
        case "bytes":
          e("if(typeof d%s===\"string\")", n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
          break;
        case "string":
          e("m%s=String(d%s)", n, n);
          break;
        case "bool":
          e("m%s=Boolean(d%s)", n, n);
      }
    }
    return e;
  }
  function a(e, t, r, n) {
    if (t.resolvedType) {
      if (t.resolvedType instanceof protobufEnumClass) {
        e("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, r, n, n);
      } else {
        e("d%s=types[%i].toObject(m%s,o)", n, r, n);
      }
    } else {
      var s = false;
      switch (t.type) {
        case "double":
        case "float":
          e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
          break;
        case "uint64":
          s = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(typeof m%s===\"number\")", n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, s ? "true" : "", n);
          break;
        case "bytes":
          e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
          break;
        default:
          e("d%s=m%s", n, n);
      }
    }
    return e;
  }
  n.fromObject = function (e) {
    var t = e.fieldsArray;
    var r = protobufUtilityModule_1.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
    if (!t.length) {
      return r("return new this.ctor");
    }
    r("var m=new this.ctor");
    for (var n = 0; n < t.length; ++n) {
      var a = t[n].resolve();
      var c = protobufUtilityModule_1.safeProp(a.name);
      if (a.map) {
        r("if(d%s){", c)("if(typeof d%s!==\"object\")", c)("throw TypeError(%j)", a.fullName + ": object expected")("m%s={}", c)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", c);
        o(r, a, n, c + "[ks[i]]")("}")("}");
      } else if (a.repeated) {
        r("if(d%s){", c)("if(!Array.isArray(d%s))", c)("throw TypeError(%j)", a.fullName + ": array expected")("m%s=[]", c)("for(var i=0;i<d%s.length;++i){", c);
        o(r, a, n, c + "[i]")("}")("}");
      } else {
        if (!(a.resolvedType instanceof protobufEnumClass)) {
          r("if(d%s!=null){", c);
        }
        o(r, a, n, c);
        if (!(a.resolvedType instanceof protobufEnumClass)) {
          r("}");
        }
      }
    }
    return r("return m");
  };
  n.toObject = function (e) {
    var t = e.fieldsArray.slice().sort(protobufUtilityModule_1.compareFieldsById);
    if (!t.length) {
      return protobufUtilityModule_1.codegen()("return {}");
    }
    var r = protobufUtilityModule_1.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}");
    var n = [];
    var o = [];
    var c = [];
    var l = 0;
    for (; l < t.length; ++l) {
      if (!t[l].partOf) {
        (t[l].resolve().repeated ? n : t[l].map ? o : c).push(t[l]);
      }
    }
    if (n.length) {
      r("if(o.arrays||o.defaults){");
      l = 0;
      for (; l < n.length; ++l) {
        r("d%s=[]", protobufUtilityModule_1.safeProp(n[l].name));
      }
      r("}");
    }
    if (o.length) {
      r("if(o.objects||o.defaults){");
      l = 0;
      for (; l < o.length; ++l) {
        r("d%s={}", protobufUtilityModule_1.safeProp(o[l].name));
      }
      r("}");
    }
    if (c.length) {
      r("if(o.defaults){");
      l = 0;
      for (; l < c.length; ++l) {
        var h = c[l];
        var u = protobufUtilityModule_1.safeProp(h.name);
        if (h.resolvedType instanceof protobufEnumClass) {
          r("d%s=o.enums===String?%j:%j", u, h.resolvedType.valuesById[h.typeDefault], h.typeDefault);
        } else if (h.long) {
          r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", h.typeDefault.low, h.typeDefault.high, h.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", u)("}else")("d%s=o.longs===String?%j:%i", u, h.typeDefault.toString(), h.typeDefault.toNumber());
        } else if (h.bytes) {
          var f = "[" + Array.prototype.slice.call(h.typeDefault).join(",") + "]";
          r("if(o.bytes===String)d%s=%j", u, String.fromCharCode.apply(String, h.typeDefault))("else{")("d%s=%s", u, f)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", u, u)("}");
        } else {
          r("d%s=%j", u, h.typeDefault);
        }
      }
      r("}");
    }
    var p = false;
    for (l = 0; l < t.length; ++l) {
      var h = t[l];
      var d = e._fieldsArray.indexOf(h);
      var u = protobufUtilityModule_1.safeProp(h.name);
      if (h.map) {
        if (!p) {
          p = true;
          r("var ks2");
        }
        r("if(m%s&&(ks2=Object.keys(m%s)).length){", u, u)("d%s={}", u)("for(var j=0;j<ks2.length;++j){");
        a(r, h, d, u + "[ks2[j]]")("}");
      } else if (h.repeated) {
        r("if(m%s&&m%s.length){", u, u)("d%s=[]", u)("for(var j=0;j<m%s.length;++j){", u);
        a(r, h, d, u + "[j]")("}");
      } else {
        r("if(m%s!=null&&m.hasOwnProperty(%j)){", u, h.name);
        a(r, h, d, u);
        if (h.partOf) {
          r("if(o.oneofs)")("d%s=%j", protobufUtilityModule_1.safeProp(h.partOf.name), h.name);
        }
      }
      r("}");
    }
    return r("return d");
  };
}