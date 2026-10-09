// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 256315
         */
module.exports = function (module, exports, require) {
  var t = typeof Element != "undefined";
  var n = typeof Map == "function";
  var r = typeof Set == "function";
  var i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  module.exports = function (e, o) {
    try {
      return function e(o, a) {
        if (o === a) {
          return true;
        }
        if (o && a && typeof o == "object" && typeof a == "object") {
          var s;
          var u;
          var c;
          var l;
          if (o.constructor !== a.constructor) {
            return false;
          }
          if (Array.isArray(o)) {
            if ((s = o.length) != a.length) {
              return false;
            }
            for (u = s; u-- != 0;) {
              if (!e(o[u], a[u])) {
                return false;
              }
            }
            return true;
          }
          if (n && o instanceof Map && a instanceof Map) {
            if (o.size !== a.size) {
              return false;
            }
            for (l = o.entries(); !(u = l.next()).done;) {
              if (!a.has(u.value[0])) {
                return false;
              }
            }
            for (l = o.entries(); !(u = l.next()).done;) {
              if (!e(u.value[1], a.get(u.value[0]))) {
                return false;
              }
            }
            return true;
          }
          if (r && o instanceof Set && a instanceof Set) {
            if (o.size !== a.size) {
              return false;
            }
            for (l = o.entries(); !(u = l.next()).done;) {
              if (!a.has(u.value[0])) {
                return false;
              }
            }
            return true;
          }
          if (i && ArrayBuffer.isView(o) && ArrayBuffer.isView(a)) {
            if ((s = o.length) != a.length) {
              return false;
            }
            for (u = s; u-- != 0;) {
              if (o[u] !== a[u]) {
                return false;
              }
            }
            return true;
          }
          if (o.constructor === RegExp) {
            return o.source === a.source && o.flags === a.flags;
          }
          if (o.valueOf !== Object.prototype.valueOf && typeof o.valueOf == "function" && typeof a.valueOf == "function") {
            return o.valueOf() === a.valueOf();
          }
          if (o.toString !== Object.prototype.toString && typeof o.toString == "function" && typeof a.toString == "function") {
            return o.toString() === a.toString();
          }
          if ((s = (c = Object.keys(o)).length) !== Object.keys(a).length) {
            return false;
          }
          for (u = s; u-- != 0;) {
            if (!Object.prototype.hasOwnProperty.call(a, c[u])) {
              return false;
            }
          }
          if (t && o instanceof Element) {
            return false;
          }
          for (u = s; u-- != 0;) {
            if ((c[u] !== "_owner" && c[u] !== "__v" && c[u] !== "__o" || !o.$$typeof) && !e(o[c[u]], a[c[u]])) {
              return false;
            }
          }
          return true;
        }
        return o != o && a != a;
      }(e, o);
    } catch (e) {
      if ((e.message || "").match(/stack|recursion/i)) {
        return false;
      }
      throw e;
    }
  };
}