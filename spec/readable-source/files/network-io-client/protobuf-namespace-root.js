// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'protobufNamespaceReflectionObject'
// - Resolved require(32548) to 'protobuf-namespace-reflection-object'
// - Renamed variable 'a' to 'protobufFieldDefinition'
// - Resolved require(62763) to 'protobuf-field-definition'
// - Renamed variable 'c' to 'protobufEnumClass'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Renamed variable 'l' to 'protobufOneofDefinition'
// - Resolved require(299216) to 'protobuf-oneof-definition'
// - Renamed variable 'h' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 259225
         */
module.exports = function (module, exports, require) {
  module.exports = u;
  var n;
  var i;
  var s;
  var protobufNamespaceReflectionObject = require("protobuf-namespace-reflection-object") /*id: 32548*/;
  ((u.prototype = Object.create(protobufNamespaceReflectionObject.prototype)).constructor = u).className = "Root";
  var protobufFieldDefinition = require("protobuf-field-definition") /*id: 62763*/;
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufOneofDefinition = require("protobuf-oneof-definition") /*id: 299216*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function u(e) {
    protobufNamespaceReflectionObject.call(this, "", e);
    this.deferred = [];
    this.files = [];
  }
  function f() {}
  u.fromJSON = function (e, t) {
    t ||= new u();
    if (e.options) {
      t.setOptions(e.options);
    }
    return t.addJSON(e.nested);
  };
  u.prototype.resolvePath = protobufUtilityModule_1.path.resolve;
  u.prototype.load = function e(t, r, n) {
    if (typeof r == "function") {
      n = r;
      r = undefined;
    }
    var o = this;
    if (!n) {
      return protobufUtilityModule_1.asPromise(e, o, t, r);
    }
    var a = n === f;
    function c(e, t) {
      if (n) {
        var r = n;
        n = null;
        if (a) {
          throw e;
        }
        r(e, t);
      }
    }
    function l(e, t) {
      try {
        if (protobufUtilityModule_1.isString(t) && t.charAt(0) === "{") {
          t = JSON.parse(t);
        }
        if (protobufUtilityModule_1.isString(t)) {
          i.filename = e;
          var n;
          var s = i(t, o, r);
          var l = 0;
          if (s.imports) {
            for (; l < s.imports.length; ++l) {
              if (n = o.resolvePath(e, s.imports[l])) {
                u(n);
              }
            }
          }
          if (s.weakImports) {
            for (l = 0; l < s.weakImports.length; ++l) {
              if (n = o.resolvePath(e, s.weakImports[l])) {
                u(n, true);
              }
            }
          }
        } else {
          o.setOptions(t.options).addJSON(t.nested);
        }
      } catch (e) {
        c(e);
      }
      if (!a && !p) {
        c(null, o);
      }
    }
    function u(e, t) {
      var r;
      var i = e.lastIndexOf("google/protobuf/");
      if (i > -1) {
        var u = e.substring(i);
        if (u in s) {
          e = u;
        }
      }
      if (!(o.files.indexOf(e) > -1)) {
        o.files.push(e);
        if (e in s) {
          if (a) {
            l(e, s[e]);
          } else {
            ++p;
            setTimeout(function () {
              --p;
              l(e, s[e]);
            });
          }
          return;
        }
        if (a) {
          try {
            r = protobufUtilityModule_1.fs.readFileSync(e).toString("utf8");
          } catch (e) {
            if (!t) {
              c(e);
            }
            return;
          }
          l(e, r);
        } else {
          ++p;
          protobufUtilityModule_1.fetch(e, function (r, i) {
            --p;
            if (n) {
              if (r) {
                if (t) {
                  if (!p) {
                    c(null, o);
                  }
                } else {
                  c(r);
                }
                return;
              }
              l(e, i);
            }
          });
        }
      }
    }
    var p = 0;
    if (protobufUtilityModule_1.isString(t)) {
      t = [t];
    }
    var d;
    var y = 0;
    for (; y < t.length; ++y) {
      if (d = o.resolvePath("", t[y])) {
        u(d);
      }
    }
    if (a) {
      return o;
    }
    if (!p) {
      c(null, o);
    }
  };
  u.prototype.loadSync = function (e, t) {
    if (!protobufUtilityModule_1.isNode) {
      throw Error("not supported");
    }
    return this.load(e, t, f);
  };
  u.prototype.resolveAll = function () {
    if (this.deferred.length) {
      throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
        return "'extend " + e.extend + "' in " + e.parent.fullName;
      }).join(", "));
    }
    return protobufNamespaceReflectionObject.prototype.resolveAll.call(this);
  };
  var p = /^[A-Z]/;
  function d(e, t) {
    var r = t.parent.lookup(t.extend);
    if (r) {
      var n = new protobufFieldDefinition(t.fullName, t.id, t.type, t.rule, undefined, t.options);
      n.declaringField = t;
      t.extensionField = n;
      r.add(n);
      return true;
    }
    return false;
  }
  u.prototype._handleAdd = function (e) {
    if (e instanceof protobufFieldDefinition) {
      if (e.extend !== undefined && !e.extensionField && !d(this, e)) {
        this.deferred.push(e);
      }
    } else if (e instanceof protobufEnumClass) {
      if (p.test(e.name)) {
        e.parent[e.name] = e.values;
      }
    } else if (!(e instanceof protobufOneofDefinition)) {
      if (e instanceof n) {
        for (var t = 0; t < this.deferred.length;) {
          if (d(this, this.deferred[t])) {
            this.deferred.splice(t, 1);
          } else {
            ++t;
          }
        }
      }
      for (var r = 0; r < e.nestedArray.length; ++r) {
        this._handleAdd(e._nestedArray[r]);
      }
      if (p.test(e.name)) {
        e.parent[e.name] = e;
      }
    }
  };
  u.prototype._handleRemove = function (e) {
    if (e instanceof protobufFieldDefinition) {
      if (e.extend !== undefined) {
        if (e.extensionField) {
          e.extensionField.parent.remove(e.extensionField);
          e.extensionField = null;
        } else {
          var t = this.deferred.indexOf(e);
          if (t > -1) {
            this.deferred.splice(t, 1);
          }
        }
      }
    } else if (e instanceof protobufEnumClass) {
      if (p.test(e.name)) {
        delete e.parent[e.name];
      }
    } else if (e instanceof protobufNamespaceReflectionObject) {
      for (var r = 0; r < e.nestedArray.length; ++r) {
        this._handleRemove(e._nestedArray[r]);
      }
      if (p.test(e.name)) {
        delete e.parent[e.name];
      }
    }
  };
  u._configure = function (e, t, r) {
    n = e;
    i = t;
    s = r;
  };
}