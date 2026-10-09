// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'queryStringUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 698435
         */
module.exports = function (module, exports, require) {
  var r = {};
  let i = "%[a-f0-9]{2}";
  let o = RegExp("(" + i + ")|([^%]+?)", "gi");
  let a = RegExp("(" + i + ")+", "gi");
  function s(e, t) {
    if (typeof e != "string" || typeof t != "string") {
      throw TypeError("Expected the arguments to be of type `string`");
    }
    if (e === "" || t === "") {
      return [];
    }
    let n = e.indexOf(t);
    if (n === -1) {
      return [];
    } else {
      return [e.slice(0, n), e.slice(n + t.length)];
    }
  }
  let u = e => e == null;
  let c = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
  let l = Symbol("encodeFragmentIdentifier");
  function f(e) {
    if (typeof e != "string" || e.length !== 1) {
      throw TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function h(e, t) {
    if (t.encode) {
      if (t.strict) {
        return c(e);
      } else {
        return encodeURIComponent(e);
      }
    } else {
      return e;
    }
  }
  function d(e, t) {
    if (t.decode) {
      return function (e) {
        if (typeof e != "string") {
          throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
        }
        try {
          return decodeURIComponent(e);
        } catch {
          return function (e) {
            let t = {
              "%FE%FF": "��",
              "%FF%FE": "��"
            };
            let n = a.exec(e);
            while (n) {
              try {
                t[n[0]] = decodeURIComponent(n[0]);
              } catch {
                let e = function (e) {
                  try {
                    return decodeURIComponent(e);
                  } catch {
                    let t = e.match(o) || [];
                    for (let n = 1; n < t.length; n++) {
                      t = (e = function e(t, n) {
                        try {
                          return [decodeURIComponent(t.join(""))];
                        } catch {}
                        if (t.length === 1) {
                          return t;
                        }
                        n = n || 1;
                        let r = t.slice(0, n);
                        let i = t.slice(n);
                        return Array.prototype.concat.call([], e(r), e(i));
                      }(t, n).join("")).match(o) || [];
                    }
                    return e;
                  }
                }(n[0]);
                if (e !== n[0]) {
                  t[n[0]] = e;
                }
              }
              n = a.exec(e);
            }
            t["%C2"] = "�";
            for (let n of Object.keys(t)) {
              e = e.replace(RegExp(n, "g"), t[n]);
            }
            return e;
          }(e);
        }
      }(e);
    } else {
      return e;
    }
  }
  function p(e) {
    let t = e.indexOf("#");
    if (t !== -1) {
      e = e.slice(0, t);
    }
    return e;
  }
  function g(e, t) {
    if (t.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "") {
      e = Number(e);
    } else if (t.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false")) {
      e = e.toLowerCase() === "true";
    }
    return e;
  }
  function v(e) {
    let t = (e = p(e)).indexOf("?");
    if (t === -1) {
      return "";
    } else {
      return e.slice(t + 1);
    }
  }
  function m(e, t) {
    f((t = {
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false,
      ...t
    }).arrayFormatSeparator);
    let n = function (e) {
      let t;
      switch (e.arrayFormat) {
        case "index":
          return (e, n, r) => {
            t = /\[(\d*)]$/.exec(e);
            e = e.replace(/\[\d*]$/, "");
            if (!t) {
              r[e] = n;
              return;
            }
            if (r[e] === undefined) {
              r[e] = {};
            }
            r[e][t[1]] = n;
          };
        case "bracket":
          return (e, n, r) => {
            t = /(\[])$/.exec(e);
            e = e.replace(/\[]$/, "");
            if (!t) {
              r[e] = n;
              return;
            }
            if (r[e] === undefined) {
              r[e] = [n];
              return;
            }
            r[e] = [...r[e], n];
          };
        case "colon-list-separator":
          return (e, n, r) => {
            t = /(:list)$/.exec(e);
            e = e.replace(/:list$/, "");
            if (!t) {
              r[e] = n;
              return;
            }
            if (r[e] === undefined) {
              r[e] = [n];
              return;
            }
            r[e] = [...r[e], n];
          };
        case "comma":
        case "separator":
          return (t, n, r) => {
            let i = typeof n == "string" && n.includes(e.arrayFormatSeparator);
            let o = typeof n == "string" && !i && d(n, e).includes(e.arrayFormatSeparator);
            n = o ? d(n, e) : n;
            let a = i || o ? n.split(e.arrayFormatSeparator).map(t => d(t, e)) : n === null ? n : d(n, e);
            r[t] = a;
          };
        case "bracket-separator":
          return (t, n, r) => {
            let i = /(\[])$/.test(t);
            t = t.replace(/\[]$/, "");
            if (!i) {
              r[t] = n ? d(n, e) : n;
              return;
            }
            let o = n === null ? [] : n.split(e.arrayFormatSeparator).map(t => d(t, e));
            if (r[t] === undefined) {
              r[t] = o;
              return;
            }
            r[t] = [...r[t], ...o];
          };
        default:
          return (e, t, n) => {
            if (n[e] === undefined) {
              n[e] = t;
              return;
            }
            n[e] = [...[n[e]].flat(), t];
          };
      }
    }(t);
    let r = Object.create(null);
    if (typeof e != "string" || !(e = e.trim().replace(/^[?#&]/, ""))) {
      return r;
    }
    for (let i of e.split("&")) {
      if (i === "") {
        continue;
      }
      let e = t.decode ? i.replace(/\+/g, " ") : i;
      let [o, a] = s(e, "=");
      if (o === undefined) {
        o = e;
      }
      a = a === undefined ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? a : d(a, t);
      n(d(o, t), a, r);
    }
    for (let [e, n] of Object.entries(r)) {
      if (typeof n == "object" && n !== null) {
        for (let [e, r] of Object.entries(n)) {
          n[e] = g(r, t);
        }
      } else {
        r[e] = g(n, t);
      }
    }
    if (t.sort === false) {
      return r;
    } else {
      return (t.sort === true ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
        let n = r[t];
        if (n && typeof n == "object" && !Array.isArray(n)) {
          e[t] = function e(t) {
            if (Array.isArray(t)) {
              return t.sort();
            } else if (typeof t == "object") {
              return e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]);
            } else {
              return t;
            }
          }(n);
        } else {
          e[t] = n;
        }
        return e;
      }, Object.create(null));
    }
  }
  function y(e, t) {
    if (!e) {
      return "";
    }
    f((t = {
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      ...t
    }).arrayFormatSeparator);
    let n = n => t.skipNull && u(e[n]) || t.skipEmptyString && e[n] === "";
    let r = function (e) {
      switch (e.arrayFormat) {
        case "index":
          return t => (n, r) => {
            let i = n.length;
            if (r === undefined || e.skipNull && r === null || e.skipEmptyString && r === "") {
              return n;
            } else if (r === null) {
              return [...n, [h(t, e), "[", i, "]"].join("")];
            } else {
              return [...n, [h(t, e), "[", h(i, e), "]=", h(r, e)].join("")];
            }
          };
        case "bracket":
          return t => (n, r) => r === undefined || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [...n, [h(t, e), "[]"].join("")] : [...n, [h(t, e), "[]=", h(r, e)].join("")];
        case "colon-list-separator":
          return t => (n, r) => r === undefined || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [...n, [h(t, e), ":list="].join("")] : [...n, [h(t, e), ":list=", h(r, e)].join("")];
        case "comma":
        case "separator":
        case "bracket-separator":
          {
            let t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
            return n => (r, i) => i === undefined || e.skipNull && i === null || e.skipEmptyString && i === "" ? r : (i = i === null ? "" : i, r.length === 0) ? [[h(n, e), t, h(i, e)].join("")] : [[r, h(i, e)].join(e.arrayFormatSeparator)];
          }
        default:
          return t => (n, r) => r === undefined || e.skipNull && r === null || e.skipEmptyString && r === "" ? n : r === null ? [...n, h(t, e)] : [...n, [h(t, e), "=", h(r, e)].join("")];
      }
    }(t);
    let i = {};
    for (let [t, r] of Object.entries(e)) {
      if (!n(t)) {
        i[t] = r;
      }
    }
    let o = Object.keys(i);
    if (t.sort !== false) {
      o.sort(t.sort);
    }
    return o.map(n => {
      let i = e[n];
      if (i === undefined) {
        return "";
      } else if (i === null) {
        return h(n, t);
      } else if (Array.isArray(i)) {
        if (i.length === 0 && t.arrayFormat === "bracket-separator") {
          return h(n, t) + "[]";
        } else {
          return i.reduce(r(n), []).join("&");
        }
      } else {
        return h(n, t) + "=" + h(i, t);
      }
    }).filter(e => e.length > 0).join("&");
  }
  function b(e, t) {
    t = {
      decode: true,
      ...t
    };
    let [i, o] = s(e, "#");
    if (i === undefined) {
      i = e;
    }
    return {
      url: (i == null ? undefined : i.split("?")?.[0]) ?? "",
      query: m(v(e), t),
      ...(t && t.parseFragmentIdentifier && o ? {
        fragmentIdentifier: d(o, t)
      } : {})
    };
  }
  function _(e, t) {
    t = {
      encode: true,
      strict: true,
      [l]: true,
      ...t
    };
    let n = p(e.url).split("?")[0] || "";
    let r = y({
      ...m(v(e.url), {
        sort: false
      }),
      ...e.query
    }, t);
    r &&= `?${r}`;
    let i = function (e) {
      let t = "";
      let n = e.indexOf("#");
      if (n !== -1) {
        t = e.slice(n);
      }
      return t;
    }(e.url);
    if (e.fragmentIdentifier) {
      let r = new URL(n);
      r.hash = e.fragmentIdentifier;
      i = t[l] ? r.hash : `#${e.fragmentIdentifier}`;
    }
    return `${n}${r}${i}`;
  }
  function w(e, t, n) {
    let {
      url: r,
      query: i,
      fragmentIdentifier: o
    } = b(e, n = {
      parseFragmentIdentifier: true,
      [l]: false,
      ...n
    });
    return _({
      url: r,
      query: function (e, t) {
        let n = {};
        if (Array.isArray(t)) {
          for (let r of t) {
            let t = Object.getOwnPropertyDescriptor(e, r);
            if (t == null ? undefined : t.enumerable) {
              Object.defineProperty(n, r, t);
            }
          }
        } else {
          for (let r of Reflect.ownKeys(e)) {
            let i = Object.getOwnPropertyDescriptor(e, r);
            if (i.enumerable) {
              let o = e[r];
              if (t(r, o, e)) {
                Object.defineProperty(n, r, i);
              }
            }
          }
        }
        return n;
      }(i, t),
      fragmentIdentifier: o
    }, n);
  }
  function E(e, t, n) {
    return w(e, Array.isArray(t) ? e => !t.includes(e) : (e, n) => !t(e, n), n);
  }
  var S = r;
  require.d(exports, {
    queryStringUtils: function () {
      return S;
    }
  });
  require.r(r);
  require.d(r, {
    exclude: function () {
      return E;
    },
    extract: function () {
      return v;
    },
    parse: function () {
      return m;
    },
    parseUrl: function () {
      return b;
    },
    pick: function () {
      return w;
    },
    stringify: function () {
      return y;
    },
    stringifyUrl: function () {
      return _;
    }
  });
}