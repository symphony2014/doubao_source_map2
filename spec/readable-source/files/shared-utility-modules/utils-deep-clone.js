// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'deepClone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 693734
         */
module.exports = function (module, exports, require) {
  let r = typeof self == "object" ? self : globalThis;
  let n = (e, a) => {
    let t = (a, t) => {
      e.set(t, a);
      return a;
    };
    let n = o => {
      if (e.has(o)) {
        return e.get(o);
      }
      let [i, s] = a[o];
      switch (i) {
        case 0:
        case -1:
          return t(s, o);
        case 1:
          {
            let e = t([], o);
            for (let a of s) {
              e.push(n(a));
            }
            return e;
          }
        case 2:
          {
            let e = t({}, o);
            for (let [a, t] of s) {
              e[n(a)] = n(t);
            }
            return e;
          }
        case 3:
          return t(new Date(s), o);
        case 4:
          {
            let {
              source: e,
              flags: a
            } = s;
            return t(new RegExp(e, a), o);
          }
        case 5:
          {
            let e = t(new Map(), o);
            for (let [a, t] of s) {
              e.set(n(a), n(t));
            }
            return e;
          }
        case 6:
          {
            let e = t(new Set(), o);
            for (let a of s) {
              e.add(n(a));
            }
            return e;
          }
        case 7:
          {
            let {
              name: e,
              message: a
            } = s;
            return t(new r[e](a), o);
          }
        case 8:
          return t(BigInt(s), o);
        case "BigInt":
          return t(Object(BigInt(s)), o);
      }
      return t(new r[i](s), o);
    };
    return n;
  };
  let o = e => n(new Map(), e)(0);
  let {
    toString: i
  } = {};
  let {
    keys: s
  } = Object;
  let l = e => {
    let a = typeof e;
    if (a !== "object" || !e) {
      return [0, a];
    }
    let t = i.call(e).slice(8, -1);
    switch (t) {
      case "Array":
        return [1, ""];
      case "Object":
        return [2, ""];
      case "Date":
        return [3, ""];
      case "RegExp":
        return [4, ""];
      case "Map":
        return [5, ""];
      case "Set":
        return [6, ""];
    }
    if (t.includes("Array")) {
      return [1, t];
    } else if (t.includes("Error")) {
      return [7, t];
    } else {
      return [2, t];
    }
  };
  let c = ([e, a]) => e === 0 && (a === "function" || a === "symbol");
  let u = (e, a, t, r) => {
    let n = (e, a) => {
      let n = r.push(e) - 1;
      t.set(a, n);
      return n;
    };
    let o = r => {
      if (t.has(r)) {
        return t.get(r);
      }
      let [i, u] = l(r);
      switch (i) {
        case 0:
          {
            let a = r;
            switch (u) {
              case "bigint":
                i = 8;
                a = r.toString();
                break;
              case "function":
              case "symbol":
                if (e) {
                  throw TypeError("unable to serialize " + u);
                }
                a = null;
                break;
              case "undefined":
                return n([-1], r);
            }
            return n([i, a], r);
          }
        case 1:
          {
            if (u) {
              return n([u, [...r]], r);
            }
            let e = [];
            let a = n([i, e], r);
            for (let a of r) {
              e.push(o(a));
            }
            return a;
          }
        case 2:
          {
            if (u) {
              switch (u) {
                case "BigInt":
                  return n([u, r.toString()], r);
                case "Boolean":
                case "Number":
                case "String":
                  return n([u, r.valueOf()], r);
              }
            }
            if (a && "toJSON" in r) {
              return o(r.toJSON());
            }
            let t = [];
            let d = n([i, t], r);
            for (let a of s(r)) {
              if (e || !c(l(r[a]))) {
                t.push([o(a), o(r[a])]);
              }
            }
            return d;
          }
        case 3:
          return n([i, r.toISOString()], r);
        case 4:
          {
            let {
              source: e,
              flags: a
            } = r;
            return n([i, {
              source: e,
              flags: a
            }], r);
          }
        case 5:
          {
            let a = [];
            let t = n([i, a], r);
            for (let [t, n] of r) {
              if (e || !c(l(t)) && !c(l(n))) {
                a.push([o(t), o(n)]);
              }
            }
            return t;
          }
        case 6:
          {
            let a = [];
            let t = n([i, a], r);
            for (let t of r) {
              if (e || !c(l(t))) {
                a.push(o(t));
              }
            }
            return t;
          }
      }
      let {
        message: d
      } = r;
      return n([i, {
        name: u,
        message: d
      }], r);
    };
    return o;
  };
  let d = (e, {
    json: a,
    lossy: t
  } = {}) => {
    let r = [];
    u(!a && !t, !!a, new Map(), r)(e);
    return r;
  };
  var p = typeof structuredClone == "function" ? (e, a) => a && ("json" in a || "lossy" in a) ? o(d(e, a)) : structuredClone(e) : (e, a) => o(d(e, a));
  require.d(exports, {
    deepClone: function () {
      return p;
    }
  });
}