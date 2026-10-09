// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'Container'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 939027
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o = {
    Request: "Request",
    Singleton: "Singleton",
    Transient: "Transient"
  };
  var s = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider"
  };
  var a = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable"
  };
  var u = 0;
  var c = function () {
    function t(t, e) {
      this.id = u++;
      this.activated = false;
      this.serviceIdentifier = t;
      this.scope = e;
      this.type = s.Invalid;
      this.constraint = function (t) {
        return true;
      };
      this.implementationType = null;
      this.cache = null;
      this.factory = null;
      this.provider = null;
      this.onActivation = null;
      this.onDeactivation = null;
      this.dynamicValue = null;
    }
    t.prototype.clone = function () {
      var e = new t(this.serviceIdentifier, this.scope);
      e.activated = e.scope === o.Singleton && this.activated;
      e.implementationType = this.implementationType;
      e.dynamicValue = this.dynamicValue;
      e.scope = this.scope;
      e.type = this.type;
      e.factory = this.factory;
      e.provider = this.provider;
      e.constraint = this.constraint;
      e.onActivation = this.onActivation;
      e.onDeactivation = this.onDeactivation;
      e.cache = this.cache;
      return e;
    };
    return t;
  }();
  var l = "NULL argument";
  var p = "Key Not Found";
  var h = "Missing required @injectable annotation in:";
  function f() {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    return "The number of constructor arguments in the derived class " + t[0] + " must be >= than the number of constructor arguments of its base class.";
  }
  function d(t, e) {
    return "onDeactivation() error in class " + t + ": " + e;
  }
  var v = "named";
  var y = "name";
  var g = "unmanaged";
  var _ = "optional";
  var m = "inject";
  var b = "multi_inject";
  var E = "post_construct";
  var w = "pre_destroy";
  var S = [m, b, y, g, v, _];
  var T = function () {
    function t() {}
    t.prototype.getConstructorMetadata = function (t) {
      return {
        compilerGeneratedMetadata: Reflect.getMetadata("inversify:paramtypes", t),
        userGeneratedMetadata: Reflect.getMetadata("inversify:tagged", t) || {}
      };
    };
    t.prototype.getPropertiesMetadata = function (t) {
      return Reflect.getMetadata("inversify:tagged_props", t) || [];
    };
    return t;
  }();
  var I = {
    MultipleBindingsAvailable: 2,
    NoBindingsAvailable: 0,
    OnlyOneBindingAvailable: 1
  };
  function A(t) {
    return t instanceof RangeError || t.message === "Maximum call stack size exceeded";
  }
  function C(t, e) {
    try {
      return t();
    } catch (t) {
      if (A(t)) {
        t = e();
      }
      throw t;
    }
  }
  function M(t) {
    if (typeof t == "function") {
      var e = t;
      return e.name;
    }
    if (typeof t == "symbol") {
      return t.toString();
    }
    var e = t;
    return e;
  }
  function k(t, e, n) {
    var r = "";
    var i = n(t, e);
    if (i.length !== 0) {
      r = "\nRegistered bindings:";
      i.forEach(function (t) {
        var e = "Object";
        if (t.implementationType !== null) {
          e = O(t.implementationType);
        }
        r = r + "\n " + e;
        if (t.constraint.metaData) {
          r = r + " - " + t.constraint.metaData;
        }
      });
    }
    return r;
  }
  function O(t) {
    if (t.name) {
      return t.name;
    }
    var e = t.toString();
    var n = e.match(/^function\s*([^\s(]+)/);
    if (n) {
      return n[1];
    } else {
      return "Anonymous function: " + e;
    }
  }
  var R = function () {
    function t(t) {
      this.id = u++;
      this.container = t;
    }
    t.prototype.addPlan = function (t) {
      this.plan = t;
    };
    t.prototype.setCurrentRequest = function (t) {
      this.currentRequest = t;
    };
    return t;
  }();
  var D = function () {
    function t(t, e) {
      this.key = t;
      this.value = e;
    }
    t.prototype.toString = function () {
      if (this.key === v) {
        return "named: " + String(this.value).toString() + " ";
      } else {
        return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
      }
    };
    return t;
  }();
  function N(t, e) {
    this.parentContext = t;
    this.rootRequest = e;
  }
  var x = function () {
    function t(t) {
      this._cb = t;
    }
    t.prototype.unwrap = function () {
      return this._cb();
    };
    return t;
  }();
  var P = function () {
    function t(t) {
      this.str = t;
    }
    t.prototype.startsWith = function (t) {
      return this.str.indexOf(t) === 0;
    };
    t.prototype.endsWith = function (t) {
      var e = "";
      var n = t.split("").reverse().join("");
      e = this.str.split("").reverse().join("");
      return this.startsWith.call({
        str: e
      }, n);
    };
    t.prototype.contains = function (t) {
      return this.str.indexOf(t) !== -1;
    };
    t.prototype.equals = function (t) {
      return this.str === t;
    };
    t.prototype.value = function () {
      return this.str;
    };
    return t;
  }();
  var B = function () {
    function t(t, e, n, r) {
      this.id = u++;
      this.type = t;
      this.serviceIdentifier = n;
      var i = typeof e == "symbol" ? e.toString().slice(7, -1) : e;
      this.name = new P(i || "");
      this.identifier = e;
      this.metadata = [];
      var o = null;
      if (typeof r == "string") {
        o = new D(v, r);
      } else if (r instanceof D) {
        o = r;
      }
      if (o !== null) {
        this.metadata.push(o);
      }
    }
    t.prototype.hasTag = function (t) {
      var e = 0;
      var n = this.metadata;
      for (; e < n.length; e++) {
        if (n[e].key === t) {
          return true;
        }
      }
      return false;
    };
    t.prototype.isArray = function () {
      return this.hasTag(b);
    };
    t.prototype.matchesArray = function (t) {
      return this.matchesTag(b)(t);
    };
    t.prototype.isNamed = function () {
      return this.hasTag(v);
    };
    t.prototype.isTagged = function () {
      return this.metadata.some(function (t) {
        return S.every(function (e) {
          return t.key !== e;
        });
      });
    };
    t.prototype.isOptional = function () {
      return this.matchesTag(_)(true);
    };
    t.prototype.getNamedTag = function () {
      if (this.isNamed()) {
        return this.metadata.filter(function (t) {
          return t.key === v;
        })[0];
      } else {
        return null;
      }
    };
    t.prototype.getCustomTags = function () {
      if (this.isTagged()) {
        return this.metadata.filter(function (t) {
          return S.every(function (e) {
            return t.key !== e;
          });
        });
      } else {
        return null;
      }
    };
    t.prototype.matchesNamedTag = function (t) {
      return this.matchesTag(v)(t);
    };
    t.prototype.matchesTag = function (t) {
      var e = this;
      return function (n) {
        var r = 0;
        var i = e.metadata;
        for (; r < i.length; r++) {
          var o = i[r];
          if (o.key === t && o.value === n) {
            return true;
          }
        }
        return false;
      };
    };
    return t;
  }();
  function L(t, e, n) {
    if (n || arguments.length == 2) {
      var r;
      var i = 0;
      var o = e.length;
      for (; i < o; i++) {
        if (!!r || !(i in e)) {
          r ||= Array.prototype.slice.call(e, 0, i);
          r[i] = e[i];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  }
  function F(t, e, n, r) {
    var i = t.getConstructorMetadata(n);
    var o = i.compilerGeneratedMetadata;
    if (o === undefined) {
      throw Error(h + " " + e + ".");
    }
    var s = i.userGeneratedMetadata;
    var u = Object.keys(s);
    var c = n.length === 0 && u.length > 0;
    var l = u.length > n.length;
    var p = function (t, e, n, r, i) {
      var o = [];
      var s = 0;
      for (; s < i; s++) {
        var u = function (t, e, n, r, i) {
          var o = i[t.toString()] || [];
          var s = j(o);
          var u = s.unmanaged !== true;
          var c = r[t];
          if ((c = s.inject || s.multiInject || c) instanceof x) {
            c = c.unwrap();
          }
          if (u) {
            var l = c === Object;
            var p = c === Function;
            var h = c === undefined;
            if (!e && (l || p || h)) {
              throw Error("Missing required @inject or @multiInject annotation in: argument " + t + " in class " + n + ".");
            }
            var f = new B(a.ConstructorArgument, s.targetName, c);
            f.metadata = o;
            return f;
          }
          return null;
        }(s, t, e, n, r);
        if (u !== null) {
          o.push(u);
        }
      }
      return o;
    }(r, e, o, s, c || l ? u.length : n.length);
    var f = function t(e, n, r) {
      var i = e.getPropertiesMetadata(n);
      var o = [];
      var s = Object.getOwnPropertySymbols(i);
      var u = Object.keys(i).concat(s);
      var c = 0;
      for (; c < u.length; c++) {
        var l = u[c];
        var p = i[l];
        var f = j(p);
        var d = f.targetName || l;
        var v = function (t, e, n, r) {
          var i = t || e;
          if (i === undefined) {
            throw Error(h + " for property " + String(n) + " in class " + r + ".");
          }
          return i;
        }(f.inject, f.multiInject, l, r);
        var y = new B(a.ClassProperty, d, v);
        y.metadata = p;
        o.push(y);
      }
      var g = Object.getPrototypeOf(n.prototype).constructor;
      if (g !== Object) {
        var _ = t(e, g, r);
        o = L(L([], o, true), _, true);
      }
      return o;
    }(t, n, e);
    return L(L([], p, true), f, true);
  }
  function j(t) {
    var e = {};
    t.forEach(function (t) {
      e[t.key.toString()] = t.value;
    });
    return {
      inject: e[m],
      multiInject: e[b],
      targetName: e[y],
      unmanaged: e[g]
    };
  }
  var U = function () {
    function t(t, e, n, r, i) {
      this.id = u++;
      this.serviceIdentifier = t;
      this.parentContext = e;
      this.parentRequest = n;
      this.target = i;
      this.childRequests = [];
      this.bindings = Array.isArray(r) ? r : [r];
      this.requestScope = n === null ? new Map() : null;
    }
    t.prototype.addChildRequest = function (e, n, r) {
      var i = new t(e, this.parentContext, this, n, r);
      this.childRequests.push(i);
      return i;
    };
    return t;
  }();
  function z(t) {
    return t._bindingDictionary;
  }
  function H(t, e, n, r, i) {
    var o = V(n.container, i.serviceIdentifier);
    var s = [];
    if (o.length === I.NoBindingsAvailable && n.container.options.autoBindInjectable && typeof i.serviceIdentifier == "function" && t.getConstructorMetadata(i.serviceIdentifier).compilerGeneratedMetadata) {
      n.container.bind(i.serviceIdentifier).toSelf();
      o = V(n.container, i.serviceIdentifier);
    }
    s = e ? o : o.filter(function (t) {
      var e = new U(t.serviceIdentifier, n, r, t, i);
      return t.constraint(e);
    });
    (function (t, e, n, r) {
      switch (e.length) {
        case I.NoBindingsAvailable:
          if (n.isOptional()) {
            return;
          }
          var i = M(t);
          var o = "No matching bindings found for serviceIdentifier:";
          o += function (t, e) {
            if (!e.isTagged() && !e.isNamed()) {
              return " " + t;
            }
            var n = "";
            var r = e.getNamedTag();
            var i = e.getCustomTags();
            if (r !== null) {
              n += r.toString() + "\n";
            }
            if (i !== null) {
              i.forEach(function (t) {
                n += t.toString() + "\n";
              });
            }
            return " " + t + "\n " + t + " - " + n;
          }(i, n);
          throw Error(o += k(r, i, V));
        case I.OnlyOneBindingAvailable:
          return;
        case I.MultipleBindingsAvailable:
        default:
          if (n.isArray()) {
            return;
          }
          var i = M(t);
          var o = "Ambiguous match found for serviceIdentifier: " + i;
          throw Error(o += k(r, i, V));
      }
    })(i.serviceIdentifier, s, i, n.container);
    return s;
  }
  function V(t, e) {
    var n = [];
    var r = z(t);
    if (r.hasKey(e)) {
      n = r.get(e);
    } else if (t.parent !== null) {
      n = V(t.parent, e);
    }
    return n;
  }
  function Z(t) {
    return (typeof t == "object" && t !== null || typeof t == "function") && typeof t.then == "function";
  }
  function q(t) {
    return !!Z(t) || Array.isArray(t) && t.some(Z);
  }
  function W(t, e) {
    var n;
    var r;
    var i;
    var o;
    var s = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function a(o) {
      return function (a) {
        return function (o) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              n = 1;
              if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                return i;
              }
              r = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && s.label < i[1]) {
                    s.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              o = [6, t];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, a]);
      };
    }
  }
  function G(t, e, n) {
    if (e.scope === o.Singleton) {
      K(e, n);
    }
    if (e.scope === o.Request) {
      Y(t, e, n);
    }
  }
  function Y(t, e, n) {
    if (!t.has(e.id)) {
      t.set(e.id, n);
    }
  }
  function K(t, e) {
    t.cache = e;
    t.activated = true;
    if (Z(e)) {
      $(t, e);
    }
  }
  function $(t, e) {
    var n;
    var r;
    var i;
    var o;
    n = undefined;
    r = undefined;
    i = undefined;
    o = function () {
      var n;
      var r;
      return W(this, function (i) {
        switch (i.label) {
          case 0:
            i.trys.push([0, 2,, 3]);
            return [4, e];
          case 1:
            n = i.sent();
            t.cache = n;
            return [3, 3];
          case 2:
            r = i.sent();
            t.cache = null;
            t.activated = false;
            throw r;
          case 3:
            return [2];
        }
      });
    };
    return new (i ||= Promise)(function (t, e) {
      function s(t) {
        try {
          u(o.next(t));
        } catch (t) {
          e(t);
        }
      }
      function a(t) {
        try {
          u(o.throw(t));
        } catch (t) {
          e(t);
        }
      }
      function u(e) {
        var n;
        if (e.done) {
          t(e.value);
        } else {
          ((n = e.value) instanceof i ? n : new i(function (t) {
            t(n);
          })).then(s, a);
        }
      }
      u((o = o.apply(n, r || [])).next());
    });
  }
  (r = i ||= {}).DynamicValue = "toDynamicValue";
  r.Factory = "toFactory";
  r.Provider = "toProvider";
  function X(t) {
    var e = null;
    switch (t.type) {
      case s.ConstantValue:
      case s.Function:
        e = t.cache;
        break;
      case s.Constructor:
      case s.Instance:
        e = t.implementationType;
        break;
      case s.DynamicValue:
        e = t.dynamicValue;
        break;
      case s.Provider:
        e = t.provider;
        break;
      case s.Factory:
        e = t.factory;
    }
    if (e === null) {
      throw Error("Invalid binding type: " + M(t.serviceIdentifier));
    }
  }
  function J(t) {
    switch (t.type) {
      case s.Factory:
        return {
          factory: t.factory,
          factoryType: i.Factory
        };
      case s.Provider:
        return {
          factory: t.provider,
          factoryType: i.Provider
        };
      case s.DynamicValue:
        return {
          factory: t.dynamicValue,
          factoryType: i.DynamicValue
        };
      default:
        throw Error("Unexpected factory type " + t.type);
    }
  }
  function Q() {
    return (Q = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function tt(t, e, n, r) {
    return new (n ||= Promise)(function (i, o) {
      function s(t) {
        try {
          u(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          u(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function u(t) {
        var e;
        if (t.done) {
          i(t.value);
        } else {
          ((e = t.value) instanceof n ? e : new n(function (t) {
            t(e);
          })).then(s, a);
        }
      }
      u((r = r.apply(t, e || [])).next());
    });
  }
  function te(t, e) {
    var n;
    var r;
    var i;
    var o;
    var s = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function a(o) {
      return function (a) {
        return function (o) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              n = 1;
              if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                return i;
              }
              r = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && s.label < i[1]) {
                    s.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              o = [6, t];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, a]);
      };
    }
  }
  function tn(t, e, n) {
    if (n || arguments.length == 2) {
      var r;
      var i = 0;
      var o = e.length;
      for (; i < o; i++) {
        if (!!r || !(i in e)) {
          r ||= Array.prototype.slice.call(e, 0, i);
          r[i] = e[i];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  }
  function tr(t) {
    var e;
    var n = new ((e = t.constr).bind.apply(e, tn([undefined], t.constructorInjections, false)))();
    t.propertyRequests.forEach(function (e, r) {
      var i = e.target.identifier;
      var o = t.propertyInjections[r];
      if (!e.target.isOptional() || o !== undefined) {
        n[i] = o;
      }
    });
    return n;
  }
  function ti(t) {
    return tt(this, undefined, undefined, function () {
      var e;
      var n;
      var r;
      var i;
      return te(this, function (o) {
        n = 0;
        e = [];
        r = t;
        for (; n < r.length; n++) {
          if (Array.isArray(i = r[n])) {
            e.push(Promise.all(i));
          } else {
            e.push(i);
          }
        }
        return [2, Promise.all(e)];
      });
    });
  }
  function to(t, e) {
    var n = function (t, e) {
      var n;
      if (Reflect.hasMetadata(E, t)) {
        var r = Reflect.getMetadata(E, t);
        try {
          if ((n = e[r.value]) === null || n === undefined) {
            return undefined;
          } else {
            return n.call(e);
          }
        } catch (e) {
          if (e instanceof Error) {
            throw Error("@postConstruct error in class " + t.name + ": " + e.message);
          }
        }
      }
    }(t, e);
    if (Z(n)) {
      return n.then(function () {
        return e;
      });
    } else {
      return e;
    }
  }
  function ts(t, e) {
    var n;
    var r;
    var i;
    var o;
    var s = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function a(o) {
      return function (a) {
        return function (o) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              n = 1;
              if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                return i;
              }
              r = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && s.label < i[1]) {
                    s.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              o = [6, t];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, a]);
      };
    }
  }
  function ta(t) {
    return function (e) {
      e.parentContext.setCurrentRequest(e);
      var n = e.bindings;
      var r = e.childRequests;
      var i = e.target && e.target.isArray();
      var o = !e.parentRequest || !e.parentRequest.target || !e.target || !e.parentRequest.target.matchesArray(e.target.serviceIdentifier);
      if (i && o) {
        return r.map(function (e) {
          return ta(t)(e);
        });
      } else if (e.target.isOptional() && n.length === 0) {
        return undefined;
      } else {
        return tp(t, e, n[0]);
      }
    };
  }
  function tu(t, e) {
    var n = J(t);
    return C(function () {
      return n.factory.bind(t)(e);
    }, function () {
      return Error("It looks like there is a circular dependency in one of the '" + n.factoryType + "' bindings. Please investigate bindings with service identifier '" + e.currentRequest.serviceIdentifier.toString() + "'.");
    });
  }
  function tc(t, e, n) {
    var r;
    var i;
    var u;
    var c;
    var l = e.childRequests;
    X(n);
    switch (n.type) {
      case s.ConstantValue:
      case s.Function:
        c = n.cache;
        break;
      case s.Constructor:
        c = n.implementationType;
        break;
      case s.Instance:
        r = n.implementationType;
        i = ta(t);
        if (n.scope !== o.Singleton) {
          (function (t, e) {
            var n = "Class cannot be instantiated in " + (t.scope === o.Request ? "request" : "transient") + " scope.";
            if (typeof t.onDeactivation == "function") {
              throw Error(d(e.name, n));
            }
            if (Reflect.hasMetadata(w, e)) {
              throw Error("@preDestroy error in class " + e.name + ": " + n);
            }
          })(n, r);
        }
        c = Z(u = function (t, e, n) {
          var r;
          if (e.length > 0) {
            var i = e.reduce(function (t, e) {
              var r = n(e);
              if (e.target.type === a.ConstructorArgument) {
                t.constructorInjections.push(r);
              } else {
                t.propertyRequests.push(e);
                t.propertyInjections.push(r);
              }
              t.isAsync ||= q(r);
              return t;
            }, {
              constructorInjections: [],
              propertyInjections: [],
              propertyRequests: [],
              isAsync: false
            });
            var o = Q(Q({}, i), {
              constr: t
            });
            r = i.isAsync ? function (t) {
              return tt(this, undefined, undefined, function () {
                var e;
                var n;
                return te(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, ti(t.constructorInjections)];
                    case 1:
                      e = r.sent();
                      return [4, ti(t.propertyInjections)];
                    case 2:
                      n = r.sent();
                      return [2, tr(Q(Q({}, t), {
                        constructorInjections: e,
                        propertyInjections: n
                      }))];
                  }
                });
              });
            }(o) : tr(o);
          } else {
            r = new t();
          }
          return r;
        }(r, l, i)) ? u.then(function (t) {
          return to(r, t);
        }) : to(r, u);
        break;
      default:
        c = tu(n, e.parentContext);
    }
    return c;
  }
  function tl(t, e, n) {
    var r = e.scope === o.Singleton && e.activated ? e.cache : e.scope === o.Request && t.has(e.id) ? t.get(e.id) : null;
    if (r === null) {
      G(t, e, r = n());
    }
    return r;
  }
  function tp(t, e, n) {
    return tl(t, n, function () {
      var r = tc(t, e, n);
      if (Z(r)) {
        return r.then(function (t) {
          return th(e, n, t);
        });
      } else {
        return th(e, n, r);
      }
    });
  }
  function th(t, e, n) {
    var r;
    var i = tf(t.parentContext, e, n);
    var o = tg(t.parentContext.container);
    var s = o.next();
    do {
      r = s.value;
      var a = t.parentContext;
      var u = ty(r, t.serviceIdentifier);
      i = Z(i) ? tv(u, a, i) : td(u, a, i);
      s = o.next();
    } while (s.done !== true && !z(r).hasKey(t.serviceIdentifier));
    return i;
  }
  function tf(t, e, n) {
    var r;
    if (typeof e.onActivation == "function") {
      return e.onActivation(t, n);
    } else {
      return n;
    }
  }
  function td(t, e, n) {
    for (var r = t.next(); !r.done;) {
      if (Z(n = r.value(e, n))) {
        return tv(t, e, n);
      }
      r = t.next();
    }
    return n;
  }
  function tv(t, e, n) {
    var r;
    var i;
    var o;
    var s;
    r = undefined;
    i = undefined;
    o = undefined;
    s = function () {
      var r;
      var i;
      return ts(this, function (o) {
        switch (o.label) {
          case 0:
            return [4, n];
          case 1:
            r = o.sent();
            i = t.next();
            o.label = 2;
          case 2:
            if (i.done) {
              return [3, 4];
            }
            return [4, i.value(e, r)];
          case 3:
            r = o.sent();
            i = t.next();
            return [3, 2];
          case 4:
            return [2, r];
        }
      });
    };
    return new (o ||= Promise)(function (t, e) {
      function n(t) {
        try {
          u(s.next(t));
        } catch (t) {
          e(t);
        }
      }
      function a(t) {
        try {
          u(s.throw(t));
        } catch (t) {
          e(t);
        }
      }
      function u(e) {
        var r;
        if (e.done) {
          t(e.value);
        } else {
          ((r = e.value) instanceof o ? r : new o(function (t) {
            t(r);
          })).then(n, a);
        }
      }
      u((s = s.apply(r, i || [])).next());
    });
  }
  function ty(t, e) {
    var n = t._activations;
    if (n.hasKey(e)) {
      return n.get(e).values();
    } else {
      return [].values();
    }
  }
  function tg(t) {
    var e = [t];
    var n = t.parent;
    while (n !== null) {
      e.push(n);
      n = n.parent;
    }
    return {
      next: function () {
        var t = e.pop();
        if (t !== undefined) {
          return {
            done: false,
            value: t
          };
        } else {
          return {
            done: true,
            value: undefined
          };
        }
      }
    };
  }
  function t_(t, e) {
    var n = t.parentRequest;
    return n !== null && (!!e(n) || t_(n, e));
  }
  function tm(t) {
    return function (e) {
      function n(n) {
        return n !== null && n.target !== null && n.target.matchesTag(t)(e);
      }
      n.metaData = new D(t, e);
      return n;
    };
  }
  var tb = tm(v);
  function tE(t) {
    return function (e) {
      var n = null;
      return e !== null && ((n = e.bindings[0], typeof t == "string") ? n.serviceIdentifier === t : t === e.bindings[0].implementationType);
    };
  }
  var tw = function () {
    function t(t) {
      this._binding = t;
    }
    t.prototype.when = function (t) {
      this._binding.constraint = t;
      return new tS(this._binding);
    };
    t.prototype.whenTargetNamed = function (t) {
      this._binding.constraint = tb(t);
      return new tS(this._binding);
    };
    t.prototype.whenTargetIsDefault = function () {
      this._binding.constraint = function (t) {
        return t !== null && t.target !== null && !t.target.isNamed() && !t.target.isTagged();
      };
      return new tS(this._binding);
    };
    t.prototype.whenTargetTagged = function (t, e) {
      this._binding.constraint = tm(t)(e);
      return new tS(this._binding);
    };
    t.prototype.whenInjectedInto = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && tE(t)(e.parentRequest);
      };
      return new tS(this._binding);
    };
    t.prototype.whenParentNamed = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && tb(t)(e.parentRequest);
      };
      return new tS(this._binding);
    };
    t.prototype.whenParentTagged = function (t, e) {
      this._binding.constraint = function (n) {
        return n !== null && tm(t)(e)(n.parentRequest);
      };
      return new tS(this._binding);
    };
    t.prototype.whenAnyAncestorIs = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && t_(e, tE(t));
      };
      return new tS(this._binding);
    };
    t.prototype.whenNoAncestorIs = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && !t_(e, tE(t));
      };
      return new tS(this._binding);
    };
    t.prototype.whenAnyAncestorNamed = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && t_(e, tb(t));
      };
      return new tS(this._binding);
    };
    t.prototype.whenNoAncestorNamed = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && !t_(e, tb(t));
      };
      return new tS(this._binding);
    };
    t.prototype.whenAnyAncestorTagged = function (t, e) {
      this._binding.constraint = function (n) {
        return n !== null && t_(n, tm(t)(e));
      };
      return new tS(this._binding);
    };
    t.prototype.whenNoAncestorTagged = function (t, e) {
      this._binding.constraint = function (n) {
        return n !== null && !t_(n, tm(t)(e));
      };
      return new tS(this._binding);
    };
    t.prototype.whenAnyAncestorMatches = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && t_(e, t);
      };
      return new tS(this._binding);
    };
    t.prototype.whenNoAncestorMatches = function (t) {
      this._binding.constraint = function (e) {
        return e !== null && !t_(e, t);
      };
      return new tS(this._binding);
    };
    return t;
  }();
  var tS = function () {
    function t(t) {
      this._binding = t;
    }
    t.prototype.onActivation = function (t) {
      this._binding.onActivation = t;
      return new tw(this._binding);
    };
    t.prototype.onDeactivation = function (t) {
      this._binding.onDeactivation = t;
      return new tw(this._binding);
    };
    return t;
  }();
  var tT = function () {
    function t(t) {
      this._binding = t;
      this._bindingWhenSyntax = new tw(this._binding);
      this._bindingOnSyntax = new tS(this._binding);
    }
    t.prototype.when = function (t) {
      return this._bindingWhenSyntax.when(t);
    };
    t.prototype.whenTargetNamed = function (t) {
      return this._bindingWhenSyntax.whenTargetNamed(t);
    };
    t.prototype.whenTargetIsDefault = function () {
      return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    t.prototype.whenTargetTagged = function (t, e) {
      return this._bindingWhenSyntax.whenTargetTagged(t, e);
    };
    t.prototype.whenInjectedInto = function (t) {
      return this._bindingWhenSyntax.whenInjectedInto(t);
    };
    t.prototype.whenParentNamed = function (t) {
      return this._bindingWhenSyntax.whenParentNamed(t);
    };
    t.prototype.whenParentTagged = function (t, e) {
      return this._bindingWhenSyntax.whenParentTagged(t, e);
    };
    t.prototype.whenAnyAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorIs(t);
    };
    t.prototype.whenNoAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorIs(t);
    };
    t.prototype.whenAnyAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorNamed(t);
    };
    t.prototype.whenAnyAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e);
    };
    t.prototype.whenNoAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorNamed(t);
    };
    t.prototype.whenNoAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenNoAncestorTagged(t, e);
    };
    t.prototype.whenAnyAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorMatches(t);
    };
    t.prototype.whenNoAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorMatches(t);
    };
    t.prototype.onActivation = function (t) {
      return this._bindingOnSyntax.onActivation(t);
    };
    t.prototype.onDeactivation = function (t) {
      return this._bindingOnSyntax.onDeactivation(t);
    };
    return t;
  }();
  var tI = function () {
    function t(t) {
      this._binding = t;
    }
    t.prototype.inRequestScope = function () {
      this._binding.scope = o.Request;
      return new tT(this._binding);
    };
    t.prototype.inSingletonScope = function () {
      this._binding.scope = o.Singleton;
      return new tT(this._binding);
    };
    t.prototype.inTransientScope = function () {
      this._binding.scope = o.Transient;
      return new tT(this._binding);
    };
    return t;
  }();
  var tA = function () {
    function t(t) {
      this._binding = t;
      this._bindingWhenSyntax = new tw(this._binding);
      this._bindingOnSyntax = new tS(this._binding);
      this._bindingInSyntax = new tI(t);
    }
    t.prototype.inRequestScope = function () {
      return this._bindingInSyntax.inRequestScope();
    };
    t.prototype.inSingletonScope = function () {
      return this._bindingInSyntax.inSingletonScope();
    };
    t.prototype.inTransientScope = function () {
      return this._bindingInSyntax.inTransientScope();
    };
    t.prototype.when = function (t) {
      return this._bindingWhenSyntax.when(t);
    };
    t.prototype.whenTargetNamed = function (t) {
      return this._bindingWhenSyntax.whenTargetNamed(t);
    };
    t.prototype.whenTargetIsDefault = function () {
      return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    t.prototype.whenTargetTagged = function (t, e) {
      return this._bindingWhenSyntax.whenTargetTagged(t, e);
    };
    t.prototype.whenInjectedInto = function (t) {
      return this._bindingWhenSyntax.whenInjectedInto(t);
    };
    t.prototype.whenParentNamed = function (t) {
      return this._bindingWhenSyntax.whenParentNamed(t);
    };
    t.prototype.whenParentTagged = function (t, e) {
      return this._bindingWhenSyntax.whenParentTagged(t, e);
    };
    t.prototype.whenAnyAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorIs(t);
    };
    t.prototype.whenNoAncestorIs = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorIs(t);
    };
    t.prototype.whenAnyAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorNamed(t);
    };
    t.prototype.whenAnyAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e);
    };
    t.prototype.whenNoAncestorNamed = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorNamed(t);
    };
    t.prototype.whenNoAncestorTagged = function (t, e) {
      return this._bindingWhenSyntax.whenNoAncestorTagged(t, e);
    };
    t.prototype.whenAnyAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenAnyAncestorMatches(t);
    };
    t.prototype.whenNoAncestorMatches = function (t) {
      return this._bindingWhenSyntax.whenNoAncestorMatches(t);
    };
    t.prototype.onActivation = function (t) {
      return this._bindingOnSyntax.onActivation(t);
    };
    t.prototype.onDeactivation = function (t) {
      return this._bindingOnSyntax.onDeactivation(t);
    };
    return t;
  }();
  var tC = function () {
    function t(t) {
      this._binding = t;
    }
    t.prototype.to = function (t) {
      this._binding.type = s.Instance;
      this._binding.implementationType = t;
      return new tA(this._binding);
    };
    t.prototype.toSelf = function () {
      if (typeof this._binding.serviceIdentifier != "function") {
        throw Error("The toSelf function can only be applied when a constructor is used as service identifier");
      }
      var t = this._binding.serviceIdentifier;
      return this.to(t);
    };
    t.prototype.toConstantValue = function (t) {
      this._binding.type = s.ConstantValue;
      this._binding.cache = t;
      this._binding.dynamicValue = null;
      this._binding.implementationType = null;
      this._binding.scope = o.Singleton;
      return new tT(this._binding);
    };
    t.prototype.toDynamicValue = function (t) {
      this._binding.type = s.DynamicValue;
      this._binding.cache = null;
      this._binding.dynamicValue = t;
      this._binding.implementationType = null;
      return new tA(this._binding);
    };
    t.prototype.toConstructor = function (t) {
      this._binding.type = s.Constructor;
      this._binding.implementationType = t;
      this._binding.scope = o.Singleton;
      return new tT(this._binding);
    };
    t.prototype.toFactory = function (t) {
      this._binding.type = s.Factory;
      this._binding.factory = t;
      this._binding.scope = o.Singleton;
      return new tT(this._binding);
    };
    t.prototype.toFunction = function (t) {
      if (typeof t != "function") {
        throw Error("Value provided to function binding must be a function!");
      }
      var e = this.toConstantValue(t);
      this._binding.type = s.Function;
      this._binding.scope = o.Singleton;
      return e;
    };
    t.prototype.toAutoFactory = function (t) {
      this._binding.type = s.Factory;
      this._binding.factory = function (e) {
        return function () {
          return e.container.get(t);
        };
      };
      this._binding.scope = o.Singleton;
      return new tT(this._binding);
    };
    t.prototype.toAutoNamedFactory = function (t) {
      this._binding.type = s.Factory;
      this._binding.factory = function (e) {
        return function (n) {
          return e.container.getNamed(t, n);
        };
      };
      return new tT(this._binding);
    };
    t.prototype.toProvider = function (t) {
      this._binding.type = s.Provider;
      this._binding.provider = t;
      this._binding.scope = o.Singleton;
      return new tT(this._binding);
    };
    t.prototype.toService = function (t) {
      this.toDynamicValue(function (e) {
        return e.container.get(t);
      });
    };
    return t;
  }();
  var tM = function () {
    function t() {}
    t.of = function (e, n, r, i, o) {
      var s = new t();
      s.bindings = e;
      s.middleware = n;
      s.deactivations = i;
      s.activations = r;
      s.moduleActivationStore = o;
      return s;
    };
    return t;
  }();
  var tk = function () {
    function t() {
      this._map = new Map();
    }
    t.prototype.getMap = function () {
      return this._map;
    };
    t.prototype.add = function (t, e) {
      if (t == null || e == null) {
        throw Error(l);
      }
      var n = this._map.get(t);
      if (n !== undefined) {
        n.push(e);
      } else {
        this._map.set(t, [e]);
      }
    };
    t.prototype.get = function (t) {
      if (t == null) {
        throw Error(l);
      }
      var e = this._map.get(t);
      if (e !== undefined) {
        return e;
      }
      throw Error(p);
    };
    t.prototype.remove = function (t) {
      if (t == null) {
        throw Error(l);
      }
      if (!this._map.delete(t)) {
        throw Error(p);
      }
    };
    t.prototype.removeIntersection = function (t) {
      var e = this;
      this.traverse(function (n, r) {
        var i = t.hasKey(n) ? t.get(n) : undefined;
        if (i !== undefined) {
          var o = r.filter(function (t) {
            return !i.some(function (e) {
              return t === e;
            });
          });
          e._setValue(n, o);
        }
      });
    };
    t.prototype.removeByCondition = function (t) {
      var e = this;
      var n = [];
      this._map.forEach(function (r, i) {
        var o = [];
        var s = 0;
        for (; s < r.length; s++) {
          var a = r[s];
          if (t(a)) {
            n.push(a);
          } else {
            o.push(a);
          }
        }
        e._setValue(i, o);
      });
      return n;
    };
    t.prototype.hasKey = function (t) {
      if (t == null) {
        throw Error(l);
      }
      return this._map.has(t);
    };
    t.prototype.clone = function () {
      var e = new t();
      this._map.forEach(function (t, n) {
        t.forEach(function (t) {
          return e.add(n, typeof t == "object" && t !== null && "clone" in t && typeof t.clone == "function" ? t.clone() : t);
        });
      });
      return e;
    };
    t.prototype.traverse = function (t) {
      this._map.forEach(function (e, n) {
        t(n, e);
      });
    };
    t.prototype._setValue = function (t, e) {
      if (e.length > 0) {
        this._map.set(t, e);
      } else {
        this._map.delete(t);
      }
    };
    return t;
  }();
  var tO = function () {
    function t() {
      this._map = new Map();
    }
    t.prototype.remove = function (t) {
      if (this._map.has(t)) {
        var e = this._map.get(t);
        this._map.delete(t);
        return e;
      }
      return this._getEmptyHandlersStore();
    };
    t.prototype.addDeactivation = function (t, e, n) {
      this._getModuleActivationHandlers(t).onDeactivations.add(e, n);
    };
    t.prototype.addActivation = function (t, e, n) {
      this._getModuleActivationHandlers(t).onActivations.add(e, n);
    };
    t.prototype.clone = function () {
      var e = new t();
      this._map.forEach(function (t, n) {
        e._map.set(n, {
          onActivations: t.onActivations.clone(),
          onDeactivations: t.onDeactivations.clone()
        });
      });
      return e;
    };
    t.prototype._getModuleActivationHandlers = function (t) {
      var e = this._map.get(t);
      if (e === undefined) {
        e = this._getEmptyHandlersStore();
        this._map.set(t, e);
      }
      return e;
    };
    t.prototype._getEmptyHandlersStore = function () {
      return {
        onActivations: new tk(),
        onDeactivations: new tk()
      };
    };
    return t;
  }();
  function tR() {
    return (tR = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function tD(t, e, n, r) {
    return new (n ||= Promise)(function (i, o) {
      function s(t) {
        try {
          u(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          u(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function u(t) {
        var e;
        if (t.done) {
          i(t.value);
        } else {
          ((e = t.value) instanceof n ? e : new n(function (t) {
            t(e);
          })).then(s, a);
        }
      }
      u((r = r.apply(t, e || [])).next());
    });
  }
  function tN(t, e) {
    var n;
    var r;
    var i;
    var o;
    var s = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function a(o) {
      return function (a) {
        return function (o) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              n = 1;
              if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                return i;
              }
              r = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && s.label < i[1]) {
                    s.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              o = [6, t];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, a]);
      };
    }
  }
  function tx(t, e, n) {
    if (n || arguments.length == 2) {
      var r;
      var i = 0;
      var o = e.length;
      for (; i < o; i++) {
        if (!!r || !(i in e)) {
          r ||= Array.prototype.slice.call(e, 0, i);
          r[i] = e[i];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  }
  var tP = function () {
    function t(t) {
      var e = t || {};
      if (typeof e != "object") {
        throw Error("Invalid Container constructor argument. Container options must be an object.");
      }
      if (e.defaultScope === undefined) {
        e.defaultScope = o.Transient;
      } else if (e.defaultScope !== o.Singleton && e.defaultScope !== o.Transient && e.defaultScope !== o.Request) {
        throw Error("Invalid Container option. Default scope must be a string (\"singleton\" or \"transient\").");
      }
      if (e.autoBindInjectable === undefined) {
        e.autoBindInjectable = false;
      } else if (typeof e.autoBindInjectable != "boolean") {
        throw Error("Invalid Container option. Auto bind injectable must be a boolean");
      }
      if (e.skipBaseClassChecks === undefined) {
        e.skipBaseClassChecks = false;
      } else if (typeof e.skipBaseClassChecks != "boolean") {
        throw Error("Invalid Container option. Skip base check must be a boolean");
      }
      this.options = {
        autoBindInjectable: e.autoBindInjectable,
        defaultScope: e.defaultScope,
        skipBaseClassChecks: e.skipBaseClassChecks
      };
      this.id = u++;
      this._bindingDictionary = new tk();
      this._snapshots = [];
      this._middleware = null;
      this._activations = new tk();
      this._deactivations = new tk();
      this.parent = null;
      this._metadataReader = new T();
      this._moduleActivationStore = new tO();
    }
    t.merge = function (e, n) {
      var r = [];
      var i = 2;
      for (; i < arguments.length; i++) {
        r[i - 2] = arguments[i];
      }
      var o = new t();
      var s = tx([e, n], r, true).map(function (t) {
        return z(t);
      });
      var a = z(o);
      s.forEach(function (t) {
        (function (t, e) {
          t.traverse(function (t, n) {
            n.forEach(function (t) {
              e.add(t.serviceIdentifier, t.clone());
            });
          });
        })(t, a);
      });
      return o;
    };
    t.prototype.load = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      var n = this._getContainerModuleHelpersFactory();
      var r = 0;
      for (; r < t.length; r++) {
        var i = t[r];
        var o = n(i.id);
        i.registry(o.bindFunction, o.unbindFunction, o.isboundFunction, o.rebindFunction, o.unbindAsyncFunction, o.onActivationFunction, o.onDeactivationFunction);
      }
    };
    t.prototype.loadAsync = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      return tD(this, undefined, undefined, function () {
        var e;
        var n;
        var r;
        var i;
        var o;
        return tN(this, function (s) {
          switch (s.label) {
            case 0:
              e = this._getContainerModuleHelpersFactory();
              n = 0;
              r = t;
              s.label = 1;
            case 1:
              if (!(n < r.length)) {
                return [3, 4];
              }
              i = r[n];
              o = e(i.id);
              return [4, i.registry(o.bindFunction, o.unbindFunction, o.isboundFunction, o.rebindFunction, o.unbindAsyncFunction, o.onActivationFunction, o.onDeactivationFunction)];
            case 2:
              s.sent();
              s.label = 3;
            case 3:
              n++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
    };
    t.prototype.unload = function () {
      var t = this;
      var e = [];
      var n = 0;
      for (; n < arguments.length; n++) {
        e[n] = arguments[n];
      }
      e.forEach(function (e) {
        var n = t._removeModuleBindings(e.id);
        t._deactivateSingletons(n);
        t._removeModuleHandlers(e.id);
      });
    };
    t.prototype.unloadAsync = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      return tD(this, undefined, undefined, function () {
        var e;
        var n;
        var r;
        var i;
        return tN(this, function (o) {
          switch (o.label) {
            case 0:
              e = 0;
              n = t;
              o.label = 1;
            case 1:
              if (!(e < n.length)) {
                return [3, 4];
              }
              r = n[e];
              i = this._removeModuleBindings(r.id);
              return [4, this._deactivateSingletonsAsync(i)];
            case 2:
              o.sent();
              this._removeModuleHandlers(r.id);
              o.label = 3;
            case 3:
              e++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
    };
    t.prototype.bind = function (t) {
      var e = new c(t, this.options.defaultScope || o.Transient);
      this._bindingDictionary.add(t, e);
      return new tC(e);
    };
    t.prototype.rebind = function (t) {
      this.unbind(t);
      return this.bind(t);
    };
    t.prototype.rebindAsync = function (t) {
      return tD(this, undefined, undefined, function () {
        return tN(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, this.unbindAsync(t)];
            case 1:
              e.sent();
              return [2, this.bind(t)];
          }
        });
      });
    };
    t.prototype.unbind = function (t) {
      if (this._bindingDictionary.hasKey(t)) {
        var e = this._bindingDictionary.get(t);
        this._deactivateSingletons(e);
      }
      this._removeServiceFromDictionary(t);
    };
    t.prototype.unbindAsync = function (t) {
      return tD(this, undefined, undefined, function () {
        var e;
        return tN(this, function (n) {
          switch (n.label) {
            case 0:
              if (!this._bindingDictionary.hasKey(t)) {
                return [3, 2];
              }
              e = this._bindingDictionary.get(t);
              return [4, this._deactivateSingletonsAsync(e)];
            case 1:
              n.sent();
              n.label = 2;
            case 2:
              this._removeServiceFromDictionary(t);
              return [2];
          }
        });
      });
    };
    t.prototype.unbindAll = function () {
      var t = this;
      this._bindingDictionary.traverse(function (e, n) {
        t._deactivateSingletons(n);
      });
      this._bindingDictionary = new tk();
    };
    t.prototype.unbindAllAsync = function () {
      return tD(this, undefined, undefined, function () {
        var t;
        var e = this;
        return tN(this, function (n) {
          switch (n.label) {
            case 0:
              t = [];
              this._bindingDictionary.traverse(function (n, r) {
                t.push(e._deactivateSingletonsAsync(r));
              });
              return [4, Promise.all(t)];
            case 1:
              n.sent();
              this._bindingDictionary = new tk();
              return [2];
          }
        });
      });
    };
    t.prototype.onActivation = function (t, e) {
      this._activations.add(t, e);
    };
    t.prototype.onDeactivation = function (t, e) {
      this._deactivations.add(t, e);
    };
    t.prototype.isBound = function (t) {
      var e = this._bindingDictionary.hasKey(t);
      if (!e && this.parent) {
        e = this.parent.isBound(t);
      }
      return e;
    };
    t.prototype.isCurrentBound = function (t) {
      return this._bindingDictionary.hasKey(t);
    };
    t.prototype.isBoundNamed = function (t, e) {
      return this.isBoundTagged(t, v, e);
    };
    t.prototype.isBoundTagged = function (t, e, n) {
      var r = false;
      if (this._bindingDictionary.hasKey(t)) {
        var i;
        var o = this._bindingDictionary.get(t);
        i = new B(a.Variable, "", t, new D(e, n));
        var s = new U(t, new R(this), null, [], i);
        r = o.some(function (t) {
          return t.constraint(s);
        });
      }
      if (!r && this.parent) {
        r = this.parent.isBoundTagged(t, e, n);
      }
      return r;
    };
    t.prototype.snapshot = function () {
      this._snapshots.push(tM.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
    };
    t.prototype.restore = function () {
      var t = this._snapshots.pop();
      if (t === undefined) {
        throw Error("No snapshot available to restore.");
      }
      this._bindingDictionary = t.bindings;
      this._activations = t.activations;
      this._deactivations = t.deactivations;
      this._middleware = t.middleware;
      this._moduleActivationStore = t.moduleActivationStore;
    };
    t.prototype.createChild = function (e) {
      var n = new t(e || this.options);
      n.parent = this;
      return n;
    };
    t.prototype.applyMiddleware = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      var n = this._middleware ? this._middleware : this._planAndResolve();
      this._middleware = t.reduce(function (t, e) {
        return e(t);
      }, n);
    };
    t.prototype.applyCustomMetadataReader = function (t) {
      this._metadataReader = t;
    };
    t.prototype.get = function (t) {
      var e = this._getNotAllArgs(t, false);
      return this._getButThrowIfAsync(e);
    };
    t.prototype.getAsync = function (t) {
      return tD(this, undefined, undefined, function () {
        var e;
        return tN(this, function (n) {
          e = this._getNotAllArgs(t, false);
          return [2, this._get(e)];
        });
      });
    };
    t.prototype.getTagged = function (t, e, n) {
      var r = this._getNotAllArgs(t, false, e, n);
      return this._getButThrowIfAsync(r);
    };
    t.prototype.getTaggedAsync = function (t, e, n) {
      return tD(this, undefined, undefined, function () {
        var r;
        return tN(this, function (i) {
          r = this._getNotAllArgs(t, false, e, n);
          return [2, this._get(r)];
        });
      });
    };
    t.prototype.getNamed = function (t, e) {
      return this.getTagged(t, v, e);
    };
    t.prototype.getNamedAsync = function (t, e) {
      return this.getTaggedAsync(t, v, e);
    };
    t.prototype.getAll = function (t) {
      var e = this._getAllArgs(t);
      return this._getButThrowIfAsync(e);
    };
    t.prototype.getAllAsync = function (t) {
      var e = this._getAllArgs(t);
      return this._getAll(e);
    };
    t.prototype.getAllTagged = function (t, e, n) {
      var r = this._getNotAllArgs(t, true, e, n);
      return this._getButThrowIfAsync(r);
    };
    t.prototype.getAllTaggedAsync = function (t, e, n) {
      var r = this._getNotAllArgs(t, true, e, n);
      return this._getAll(r);
    };
    t.prototype.getAllNamed = function (t, e) {
      return this.getAllTagged(t, v, e);
    };
    t.prototype.getAllNamedAsync = function (t, e) {
      return this.getAllTaggedAsync(t, v, e);
    };
    t.prototype.resolve = function (t) {
      var e = this.isBound(t);
      if (!e) {
        this.bind(t).toSelf();
      }
      var n = this.get(t);
      if (!e) {
        this.unbind(t);
      }
      return n;
    };
    t.prototype._preDestroy = function (t, e) {
      var n;
      if (Reflect.hasMetadata(w, t)) {
        if ((n = e[Reflect.getMetadata(w, t).value]) === null || n === undefined) {
          return undefined;
        } else {
          return n.call(e);
        }
      }
    };
    t.prototype._removeModuleHandlers = function (t) {
      var e = this._moduleActivationStore.remove(t);
      this._activations.removeIntersection(e.onActivations);
      this._deactivations.removeIntersection(e.onDeactivations);
    };
    t.prototype._removeModuleBindings = function (t) {
      return this._bindingDictionary.removeByCondition(function (e) {
        return e.moduleId === t;
      });
    };
    t.prototype._deactivate = function (t, e) {
      var n = this;
      var r = Object.getPrototypeOf(e).constructor;
      try {
        if (this._deactivations.hasKey(t.serviceIdentifier)) {
          var i = this._deactivateContainer(e, this._deactivations.get(t.serviceIdentifier).values());
          if (Z(i)) {
            return this._handleDeactivationError(i.then(function () {
              return n._propagateContainerDeactivationThenBindingAndPreDestroyAsync(t, e, r);
            }), r);
          }
        }
        var o = this._propagateContainerDeactivationThenBindingAndPreDestroy(t, e, r);
        if (Z(o)) {
          return this._handleDeactivationError(o, r);
        }
      } catch (t) {
        if (t instanceof Error) {
          throw Error(d(r.name, t.message));
        }
      }
    };
    t.prototype._handleDeactivationError = function (t, e) {
      return tD(this, undefined, undefined, function () {
        var n;
        return tN(this, function (r) {
          switch (r.label) {
            case 0:
              r.trys.push([0, 2,, 3]);
              return [4, t];
            case 1:
              r.sent();
              return [3, 3];
            case 2:
              if ((n = r.sent()) instanceof Error) {
                throw Error(d(e.name, n.message));
              }
              return [3, 3];
            case 3:
              return [2];
          }
        });
      });
    };
    t.prototype._deactivateContainer = function (t, e) {
      var n = this;
      var r = e.next();
      while (r.value) {
        var i = r.value(t);
        if (Z(i)) {
          return i.then(function () {
            return n._deactivateContainerAsync(t, e);
          });
        }
        r = e.next();
      }
    };
    t.prototype._deactivateContainerAsync = function (t, e) {
      return tD(this, undefined, undefined, function () {
        var n;
        return tN(this, function (r) {
          switch (r.label) {
            case 0:
              n = e.next();
              r.label = 1;
            case 1:
              if (!n.value) {
                return [3, 3];
              }
              return [4, n.value(t)];
            case 2:
              r.sent();
              n = e.next();
              return [3, 1];
            case 3:
              return [2];
          }
        });
      });
    };
    t.prototype._getContainerModuleHelpersFactory = function () {
      var t = this;
      function e(t, e) {
        t._binding.moduleId = e;
      }
      return function (n) {
        return {
          bindFunction: function (r) {
            var i = t.bind(r);
            e(i, n);
            return i;
          },
          isboundFunction: function (e) {
            return t.isBound(e);
          },
          onActivationFunction: function (e, r) {
            t._moduleActivationStore.addActivation(n, e, r);
            t.onActivation(e, r);
          },
          onDeactivationFunction: function (e, r) {
            t._moduleActivationStore.addDeactivation(n, e, r);
            t.onDeactivation(e, r);
          },
          rebindFunction: function (r) {
            var i = t.rebind(r);
            e(i, n);
            return i;
          },
          unbindFunction: function (e) {
            return t.unbind(e);
          },
          unbindAsyncFunction: function (e) {
            return t.unbindAsync(e);
          }
        };
      };
    };
    t.prototype._getAll = function (t) {
      return Promise.all(this._get(t));
    };
    t.prototype._get = function (t) {
      var e = tR(tR({}, t), {
        contextInterceptor: function (t) {
          return t;
        },
        targetType: a.Variable
      });
      if (this._middleware) {
        var n = this._middleware(e);
        if (n == null) {
          throw Error("Invalid return type in middleware. Middleware must return!");
        }
        return n;
      }
      return this._planAndResolve()(e);
    };
    t.prototype._getButThrowIfAsync = function (t) {
      var e = this._get(t);
      if (q(e)) {
        throw Error("You are attempting to construct '" + t.serviceIdentifier + "' in a synchronous way\n but it has asynchronous dependencies.");
      }
      return e;
    };
    t.prototype._getAllArgs = function (t) {
      return {
        avoidConstraints: true,
        isMultiInject: true,
        serviceIdentifier: t
      };
    };
    t.prototype._getNotAllArgs = function (t, e, n, r) {
      return {
        avoidConstraints: false,
        isMultiInject: e,
        serviceIdentifier: t,
        key: n,
        value: r
      };
    };
    t.prototype._planAndResolve = function () {
      var t = this;
      return function (e) {
        var n;
        var r = function (t, e, n, r, i, o, a, u = false) {
          var c = new R(e);
          var l = function (t, e, n, r, i, o) {
            var s = new D(t ? b : m, n);
            var a = new B(e, "", n, s);
            if (i !== undefined) {
              var u = new D(i, o);
              a.metadata.push(u);
            }
            return a;
          }(n, r, i, 0, o, a);
          try {
            (function t(e, n, r, i, o, a) {
              if (o === null) {
                u = H(e, n, i, null, a);
                c = new U(r, i, null, u, a);
                var u;
                var c;
                var l = new N(i, c);
                i.addPlan(l);
              } else {
                u = H(e, n, i, o, a);
                c = o.addChildRequest(a.serviceIdentifier, u, a);
              }
              u.forEach(function (n) {
                var r = null;
                if (a.isArray()) {
                  r = c.addChildRequest(n.serviceIdentifier, n, a);
                } else {
                  if (n.cache) {
                    return;
                  }
                  r = c;
                }
                if (n.type === s.Instance && n.implementationType !== null) {
                  var o;
                  var u = F(e, O(o = n.implementationType), o, false);
                  if (!i.container.options.skipBaseClassChecks) {
                    var l = function t(e, n) {
                      var r = Object.getPrototypeOf(n.prototype).constructor;
                      if (r === Object) {
                        return 0;
                      }
                      var i = F(e, O(r), r, true);
                      var o = i.map(function (t) {
                        return t.metadata.filter(function (t) {
                          return t.key === g;
                        });
                      });
                      var s = [].concat.apply([], o).length;
                      var a = i.length - s;
                      if (a > 0) {
                        return a;
                      } else {
                        return t(e, r);
                      }
                    }(e, n.implementationType);
                    if (u.length < l) {
                      throw Error(f(O(n.implementationType)));
                    }
                  }
                  u.forEach(function (n) {
                    t(e, false, n.serviceIdentifier, i, r, n);
                  });
                }
              });
            })(t, u, i, c, null, l);
            return c;
          } catch (t) {
            if (A(t)) {
              (function t(e) {
                e.childRequests.forEach(function (e) {
                  if (function t(e, n) {
                    return e.parentRequest !== null && (e.parentRequest.serviceIdentifier === n || t(e.parentRequest, n));
                  }(e, e.serviceIdentifier)) {
                    throw Error("Circular dependency found: " + function t(e, n = []) {
                      var r = M(e.serviceIdentifier);
                      n.push(r);
                      if (e.parentRequest !== null) {
                        return t(e.parentRequest, n);
                      } else {
                        return n;
                      }
                    }(e).reverse().join(" --> "));
                  }
                  t(e);
                });
              })(c.plan.rootRequest);
            }
            throw t;
          }
        }(t._metadataReader, t, e.isMultiInject, e.targetType, e.serviceIdentifier, e.key, e.value, e.avoidConstraints);
        return ta((n = r = e.contextInterceptor(r)).plan.rootRequest.requestScope)(n.plan.rootRequest);
      };
    };
    t.prototype._deactivateIfSingleton = function (t) {
      var e = this;
      if (t.activated) {
        if (Z(t.cache)) {
          return t.cache.then(function (n) {
            return e._deactivate(t, n);
          });
        } else {
          return this._deactivate(t, t.cache);
        }
      } else {
        return undefined;
      }
    };
    t.prototype._deactivateSingletons = function (t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e];
        if (Z(this._deactivateIfSingleton(n))) {
          throw Error("Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)");
        }
      }
    };
    t.prototype._deactivateSingletonsAsync = function (t) {
      return tD(this, undefined, undefined, function () {
        var e = this;
        return tN(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, Promise.all(t.map(function (t) {
                return e._deactivateIfSingleton(t);
              }))];
            case 1:
              n.sent();
              return [2];
          }
        });
      });
    };
    t.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function (t, e, n) {
      if (this.parent) {
        return this._deactivate.bind(this.parent)(t, e);
      } else {
        return this._bindingDeactivationAndPreDestroy(t, e, n);
      }
    };
    t.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function (t, e, n) {
      return tD(this, undefined, undefined, function () {
        return tN(this, function (r) {
          switch (r.label) {
            case 0:
              if (!this.parent) {
                return [3, 2];
              }
              return [4, this._deactivate.bind(this.parent)(t, e)];
            case 1:
              r.sent();
              return [3, 4];
            case 2:
              return [4, this._bindingDeactivationAndPreDestroyAsync(t, e, n)];
            case 3:
              r.sent();
              r.label = 4;
            case 4:
              return [2];
          }
        });
      });
    };
    t.prototype._removeServiceFromDictionary = function (t) {
      try {
        this._bindingDictionary.remove(t);
      } catch (e) {
        throw Error("Could not unbind serviceIdentifier: " + M(t));
      }
    };
    t.prototype._bindingDeactivationAndPreDestroy = function (t, e, n) {
      var r = this;
      if (typeof t.onDeactivation == "function") {
        var i = t.onDeactivation(e);
        if (Z(i)) {
          return i.then(function () {
            return r._preDestroy(n, e);
          });
        }
      }
      return this._preDestroy(n, e);
    };
    t.prototype._bindingDeactivationAndPreDestroyAsync = function (t, e, n) {
      return tD(this, undefined, undefined, function () {
        return tN(this, function (r) {
          switch (r.label) {
            case 0:
              if (typeof t.onDeactivation != "function") {
                return [3, 2];
              }
              return [4, t.onDeactivation(e)];
            case 1:
              r.sent();
              r.label = 2;
            case 2:
              return [4, this._preDestroy(n, e)];
            case 3:
              r.sent();
              return [2];
          }
        });
      });
    };
    return t;
  }();
  require.d(exports, {
    Container: function () {
      return tP;
    }
  });
}