// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufNamespaceReflectionObject'
// - Resolved require(32548) to 'protobuf-namespace-reflection-object'
// - Renamed variable 'i' to 'protobufEnumClass'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Renamed variable 's' to 'protobufOneofDefinition'
// - Resolved require(299216) to 'protobuf-oneof-definition'
// - Renamed variable 'o' to 'protobufFieldDefinition'
// - Resolved require(62763) to 'protobuf-field-definition'
// - Renamed variable 'a' to 'mapFieldClass'
// - Resolved require(11234) to 'map-field-class'
// - Renamed variable 'c' to 'protobufServiceClass'
// - Resolved require(658249) to 'protobuf-service-class'
// - Renamed variable 'l' to 'protobufMessageWrapper_1'
// - Resolved require(720905) to 'protobuf-message-wrapper_1'
// - Renamed variable 'h' to 'protobufBufferReader_1'
// - Resolved require(871389) to 'protobuf-buffer-reader_1'
// - Renamed variable 'u' to 'protobufWriter'
// - Resolved require(40638) to 'protobuf-writer'
// - Renamed variable 'f' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// - Renamed variable 'p' to 'protobufEncoderGenerator'
// - Resolved require(650878) to 'protobuf-encoder-generator'
// - Renamed variable 'd' to 'protobufMessageDecodeGenerator'
// - Resolved require(402317) to 'protobuf-message-decode-generator'
// - Renamed variable 'y' to 'protobufMessageVerifierGenerator'
// - Resolved require(877666) to 'protobuf-message-verifier-generator'
// - Renamed variable 'g' to 'protobufObjectConverter'
// - Resolved require(484405) to 'protobuf-object-converter'
// - Renamed variable 'v' to 'protobufAnyWrapper'
// - Resolved require(871608) to 'protobuf-any-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 480559
         */
module.exports = function (module, exports, require) {
  module.exports = m;
  var protobufNamespaceReflectionObject = require("protobuf-namespace-reflection-object") /*id: 32548*/;
  ((m.prototype = Object.create(protobufNamespaceReflectionObject.prototype)).constructor = m).className = "Type";
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufOneofDefinition = require("protobuf-oneof-definition") /*id: 299216*/;
  var protobufFieldDefinition = require("protobuf-field-definition") /*id: 62763*/;
  var mapFieldClass = require("map-field-class") /*id: 11234*/;
  var protobufServiceClass = require("protobuf-service-class") /*id: 658249*/;
  var protobufMessageWrapper_1 = require("protobuf-message-wrapper_1") /*id: 720905*/;
  var protobufBufferReader_1 = require("protobuf-buffer-reader_1") /*id: 871389*/;
  var protobufWriter = require("protobuf-writer") /*id: 40638*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  var protobufEncoderGenerator = require("protobuf-encoder-generator") /*id: 650878*/;
  var protobufMessageDecodeGenerator = require("protobuf-message-decode-generator") /*id: 402317*/;
  var protobufMessageVerifierGenerator = require("protobuf-message-verifier-generator") /*id: 877666*/;
  var protobufObjectConverter = require("protobuf-object-converter") /*id: 484405*/;
  var protobufAnyWrapper = require("protobuf-any-wrapper") /*id: 871608*/;
  function m(e, t) {
    protobufNamespaceReflectionObject.call(this, e, t);
    this.fields = {};
    this.oneofs = undefined;
    this.extensions = undefined;
    this.reserved = undefined;
    this.group = undefined;
    this._fieldsById = null;
    this._fieldsArray = null;
    this._oneofsArray = null;
    this._ctor = null;
  }
  function b(e) {
    e._fieldsById = e._fieldsArray = e._oneofsArray = null;
    delete e.encode;
    delete e.decode;
    delete e.verify;
    return e;
  }
  Object.defineProperties(m.prototype, {
    fieldsById: {
      get: function () {
        if (this._fieldsById) {
          return this._fieldsById;
        }
        this._fieldsById = {};
        var e = Object.keys(this.fields);
        var t = 0;
        for (; t < e.length; ++t) {
          var r = this.fields[e[t]];
          var n = r.id;
          if (this._fieldsById[n]) {
            throw Error("duplicate id " + n + " in " + this);
          }
          this._fieldsById[n] = r;
        }
        return this._fieldsById;
      }
    },
    fieldsArray: {
      get: function () {
        return this._fieldsArray ||= protobufUtilityModule_1.toArray(this.fields);
      }
    },
    oneofsArray: {
      get: function () {
        return this._oneofsArray ||= protobufUtilityModule_1.toArray(this.oneofs);
      }
    },
    ctor: {
      get: function () {
        return this._ctor || (this.ctor = m.generateConstructor(this)());
      },
      set: function (e) {
        var t = e.prototype;
        if (!(t instanceof protobufMessageWrapper_1)) {
          (e.prototype = new protobufMessageWrapper_1()).constructor = e;
          protobufUtilityModule_1.merge(e.prototype, t);
        }
        e.$type = e.prototype.$type = this;
        protobufUtilityModule_1.merge(e, protobufMessageWrapper_1, true);
        this._ctor = e;
        for (var r = 0; r < this.fieldsArray.length; ++r) {
          this._fieldsArray[r].resolve();
        }
        var n = {};
        for (r = 0; r < this.oneofsArray.length; ++r) {
          n[this._oneofsArray[r].resolve().name] = {
            get: protobufUtilityModule_1.oneOfGetter(this._oneofsArray[r].oneof),
            set: protobufUtilityModule_1.oneOfSetter(this._oneofsArray[r].oneof)
          };
        }
        if (r) {
          Object.defineProperties(e.prototype, n);
        }
      }
    }
  });
  m.generateConstructor = function (e) {
    var t;
    var r = protobufUtilityModule_1.codegen(["p"], e.name);
    var n = 0;
    for (; n < e.fieldsArray.length; ++n) {
      if ((t = e._fieldsArray[n]).map) {
        r("this%s={}", protobufUtilityModule_1.safeProp(t.name));
      } else if (t.repeated) {
        r("this%s=[]", protobufUtilityModule_1.safeProp(t.name));
      }
    }
    return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
  };
  m.fromJSON = function (e, t) {
    var r = new m(e, t.options);
    r.extensions = t.extensions;
    r.reserved = t.reserved;
    var l = Object.keys(t.fields);
    var h = 0;
    for (; h < l.length; ++h) {
      r.add((t.fields[l[h]].keyType !== undefined ? mapFieldClass.fromJSON : protobufFieldDefinition.fromJSON)(l[h], t.fields[l[h]]));
    }
    if (t.oneofs) {
      l = Object.keys(t.oneofs);
      h = 0;
      for (; h < l.length; ++h) {
        r.add(protobufOneofDefinition.fromJSON(l[h], t.oneofs[l[h]]));
      }
    }
    if (t.nested) {
      l = Object.keys(t.nested);
      h = 0;
      for (; h < l.length; ++h) {
        var u = t.nested[l[h]];
        r.add((u.id !== undefined ? protobufFieldDefinition.fromJSON : u.fields !== undefined ? m.fromJSON : u.values !== undefined ? protobufEnumClass.fromJSON : u.methods !== undefined ? protobufServiceClass.fromJSON : protobufNamespaceReflectionObject.fromJSON)(l[h], u));
      }
    }
    if (t.extensions && t.extensions.length) {
      r.extensions = t.extensions;
    }
    if (t.reserved && t.reserved.length) {
      r.reserved = t.reserved;
    }
    if (t.group) {
      r.group = true;
    }
    if (t.comment) {
      r.comment = t.comment;
    }
    return r;
  };
  m.prototype.toJSON = function (e) {
    var t = protobufNamespaceReflectionObject.prototype.toJSON.call(this, e);
    var r = !!e && !!e.keepComments;
    return protobufUtilityModule_1.toObject(["options", t && t.options || undefined, "oneofs", protobufNamespaceReflectionObject.arrayToJSON(this.oneofsArray, e), "fields", protobufNamespaceReflectionObject.arrayToJSON(this.fieldsArray.filter(function (e) {
      return !e.declaringField;
    }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", r ? this.comment : undefined]);
  };
  m.prototype.resolveAll = function () {
    var e = this.fieldsArray;
    var t = 0;
    while (t < e.length) {
      e[t++].resolve();
    }
    var r = this.oneofsArray;
    for (t = 0; t < r.length;) {
      r[t++].resolve();
    }
    return protobufNamespaceReflectionObject.prototype.resolveAll.call(this);
  };
  m.prototype.get = function (e) {
    return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
  };
  m.prototype.add = function (e) {
    if (this.get(e.name)) {
      throw Error("duplicate name '" + e.name + "' in " + this);
    }
    if (e instanceof protobufFieldDefinition && e.extend === undefined) {
      if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) {
        throw Error("duplicate id " + e.id + " in " + this);
      }
      if (this.isReservedId(e.id)) {
        throw Error("id " + e.id + " is reserved in " + this);
      }
      if (this.isReservedName(e.name)) {
        throw Error("name '" + e.name + "' is reserved in " + this);
      }
      if (e.parent) {
        e.parent.remove(e);
      }
      this.fields[e.name] = e;
      e.message = this;
      e.onAdd(this);
      return b(this);
    }
    if (e instanceof protobufOneofDefinition) {
      this.oneofs ||= {};
      this.oneofs[e.name] = e;
      e.onAdd(this);
      return b(this);
    } else {
      return protobufNamespaceReflectionObject.prototype.add.call(this, e);
    }
  };
  m.prototype.remove = function (e) {
    if (e instanceof protobufFieldDefinition && e.extend === undefined) {
      if (!this.fields || this.fields[e.name] !== e) {
        throw Error(e + " is not a member of " + this);
      }
      delete this.fields[e.name];
      e.parent = null;
      e.onRemove(this);
      return b(this);
    }
    if (e instanceof protobufOneofDefinition) {
      if (!this.oneofs || this.oneofs[e.name] !== e) {
        throw Error(e + " is not a member of " + this);
      }
      delete this.oneofs[e.name];
      e.parent = null;
      e.onRemove(this);
      return b(this);
    }
    return protobufNamespaceReflectionObject.prototype.remove.call(this, e);
  };
  m.prototype.isReservedId = function (e) {
    return protobufNamespaceReflectionObject.isReservedId(this.reserved, e);
  };
  m.prototype.isReservedName = function (e) {
    return protobufNamespaceReflectionObject.isReservedName(this.reserved, e);
  };
  m.prototype.create = function (e) {
    return new this.ctor(e);
  };
  m.prototype.setup = function () {
    var e = this.fullName;
    var t = [];
    var r = 0;
    for (; r < this.fieldsArray.length; ++r) {
      t.push(this._fieldsArray[r].resolve().resolvedType);
    }
    this.encode = protobufEncoderGenerator(this)({
      Writer: protobufWriter,
      types: t,
      util: protobufUtilityModule_1
    });
    this.decode = protobufMessageDecodeGenerator(this)({
      Reader: protobufBufferReader_1,
      types: t,
      util: protobufUtilityModule_1
    });
    this.verify = protobufMessageVerifierGenerator(this)({
      types: t,
      util: protobufUtilityModule_1
    });
    this.fromObject = protobufObjectConverter.fromObject(this)({
      types: t,
      util: protobufUtilityModule_1
    });
    this.toObject = protobufObjectConverter.toObject(this)({
      types: t,
      util: protobufUtilityModule_1
    });
    var n = protobufAnyWrapper[e];
    if (n) {
      var i = Object.create(this);
      i.fromObject = this.fromObject;
      this.fromObject = n.fromObject.bind(i);
      i.toObject = this.toObject;
      this.toObject = n.toObject.bind(i);
    }
    return this;
  };
  m.prototype.encode = function (e, t) {
    return this.setup().encode(e, t);
  };
  m.prototype.encodeDelimited = function (e, t) {
    return this.encode(e, t && t.len ? t.fork() : t).ldelim();
  };
  m.prototype.decode = function (e, t) {
    return this.setup().decode(e, t);
  };
  m.prototype.decodeDelimited = function (e) {
    if (!(e instanceof protobufBufferReader_1)) {
      e = protobufBufferReader_1.create(e);
    }
    return this.decode(e, e.uint32());
  };
  m.prototype.verify = function (e) {
    return this.setup().verify(e);
  };
  m.prototype.fromObject = function (e) {
    return this.setup().fromObject(e);
  };
  m.prototype.toObject = function (e, t) {
    return this.setup().toObject(e, t);
  };
  m.d = function (e) {
    return function (t) {
      protobufUtilityModule_1.decorateType(t, e);
    };
  };
}