// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'o' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'i' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 'a' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'u' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 'c' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'f' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 's' to 'defineIteratorPrototype'
// - Resolved require(675930) to 'define-iterator-prototype'
// - Renamed variable 'l' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'v' to 'speciesAccessorPolyfill'
// - Resolved require(56192) to 'species-accessor-polyfill'
// - Renamed variable 'p' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Resolved require(553786) to 'weak-data-metadata-manager'
// - Renamed variable 'd' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 75084
         */
module.exports = function (module, exports, require) {
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var defineIteratorPrototype = require("define-iterator-prototype") /*id: 675930*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var speciesAccessorPolyfill = require("species-accessor-polyfill") /*id: 56192*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var h = require("weak-data-metadata-manager") /*id: 553786*/.fastKey;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var y = objectStateManager.set;
  var g = objectStateManager.getterFor;
  module.exports = {
    getConstructor: function (t, r, e, s) {
      var l = t(function (t, o) {
        validatePrototypeInvocation(t, v);
        y(t, {
          type: r,
          index: objectCreatePolyfill_1(null),
          first: null,
          last: null,
          size: 0
        });
        if (!es5PropertyDescriptorCheck) {
          t.size = 0;
        }
        if (!isNullishCheck_1(o)) {
          iteratorForEachHelper(o, t[s], {
            that: t,
            AS_ENTRIES: e
          });
        }
      });
      var v = l.prototype;
      var d = g(r);
      function b(t, r, e) {
        var n;
        var o;
        var i = d(t);
        var a = w(t, r);
        if (a) {
          a.value = e;
        } else {
          i.last = a = {
            index: o = h(r, true),
            key: r,
            value: e,
            previous: n = i.last,
            next: null,
            removed: false
          };
          i.first ||= a;
          if (n) {
            n.next = a;
          }
          if (es5PropertyDescriptorCheck) {
            i.size++;
          } else {
            t.size++;
          }
          if (o !== "F") {
            i.index[o] = a;
          }
        }
        return t;
      }
      function w(t, r) {
        var e;
        var n = d(t);
        var o = h(r);
        if (o !== "F") {
          return n.index[o];
        }
        for (e = n.first; e; e = e.next) {
          if (e.key === r) {
            return e;
          }
        }
      }
      definePropertiesHelper(v, {
        clear: function () {
          var t = d(this);
          var r = t.first;
          while (r) {
            r.removed = true;
            r.previous &&= r.previous.next = null;
            r = r.next;
          }
          t.first = t.last = null;
          t.index = objectCreatePolyfill_1(null);
          if (es5PropertyDescriptorCheck) {
            t.size = 0;
          } else {
            this.size = 0;
          }
        },
        delete: function (t) {
          var r = d(this);
          var e = w(this, t);
          if (e) {
            var n = e.next;
            var o = e.previous;
            delete r.index[e.index];
            e.removed = true;
            if (o) {
              o.next = n;
            }
            if (n) {
              n.previous = o;
            }
            if (r.first === e) {
              r.first = n;
            }
            if (r.last === e) {
              r.last = o;
            }
            if (es5PropertyDescriptorCheck) {
              r.size--;
            } else {
              this.size--;
            }
          }
          return !!e;
        },
        forEach: function (t) {
          var r;
          var e = d(this);
          var n = safeFunctionBind(t, arguments.length > 1 ? arguments[1] : undefined);
          while (r = r ? r.next : e.first) {
            for (n(r.value, r.key, this); r && r.removed;) {
              r = r.previous;
            }
          }
        },
        has: function (t) {
          return !!w(this, t);
        }
      });
      definePropertiesHelper(v, e ? {
        get: function (t) {
          var r = w(this, t);
          return r && r.value;
        },
        set: function (t, r) {
          return b(this, t === 0 ? 0 : t, r);
        }
      } : {
        add: function (t) {
          return b(this, t = t === 0 ? 0 : t, t);
        }
      });
      if (es5PropertyDescriptorCheck) {
        objectDefinePropertyPolyfill(v, "size", {
          configurable: true,
          get: function () {
            return d(this).size;
          }
        });
      }
      return l;
    },
    setStrong: function (t, r, e) {
      var n = r + " Iterator";
      var o = g(r);
      var i = g(n);
      defineIteratorPrototype(t, r, function (t, r) {
        y(this, {
          type: n,
          target: t,
          state: o(t),
          kind: r,
          last: null
        });
      }, function () {
        var t = i(this);
        var r = t.kind;
        var e = t.last;
        while (e && e.removed) {
          e = e.previous;
        }
        if (t.target && (t.last = e = e ? e.next : t.state.first)) {
          if (r === "keys") {
            return iteratorResultFactory_1(e.key, false);
          } else if (r === "values") {
            return iteratorResultFactory_1(e.value, false);
          } else {
            return iteratorResultFactory_1([e.key, e.value], false);
          }
        } else {
          t.target = null;
          return iteratorResultFactory_1(undefined, true);
        }
      }, e ? "entries" : "values", !e, true);
      speciesAccessorPolyfill(r);
    }
  };
}