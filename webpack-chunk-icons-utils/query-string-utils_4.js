// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'strictEncodeUriComponent'
// - Resolved require(103771) to 'strict-encode-uri-component'
// - Renamed variable 'i' to 'safeDecodeUriComponent'
// - Resolved require(270319) to 'safe-decode-uri-component'
// - Renamed variable 'o' to 'stringSplitOnce'
// - Resolved require(468185) to 'string-split-once'
// - Renamed variable 'a' to 'objectPickUtils'
// - Resolved require(659456) to 'object-pick-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 690064
         */
module.exports = function (module, exports, require) {
  let strictEncodeUriComponent = require("strict-encode-uri-component") /*id: 103771*/;
  let safeDecodeUriComponent = require("safe-decode-uri-component") /*id: 270319*/;
  let stringSplitOnce = require("string-split-once") /*id: 468185*/;
  let objectPickUtils = require("object-pick-utils") /*id: 659456*/;
  let s = e => e == null;
  function c(e) {
    if (typeof e != "string" || e.length !== 1) {
      throw TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function u(e, t) {
    if (t.encode) {
      if (t.strict) {
        return strictEncodeUriComponent(e);
      } else {
        return encodeURIComponent(e);
      }
    } else {
      return e;
    }
  }
  function f(e, t) {
    if (t.decode) {
      return safeDecodeUriComponent(e);
    } else {
      return e;
    }
  }
  function l(e) {
    let t = e.indexOf("#");
    if (t !== -1) {
      e = e.slice(0, t);
    }
    return e;
  }
  function d(e) {
    let t = (e = l(e)).indexOf("?");
    if (t === -1) {
      return "";
    } else {
      return e.slice(t + 1);
    }
  }
  function h(e, t) {
    if (t.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "") {
      e = Number(e);
    } else if (t.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false")) {
      e = e.toLowerCase() === "true";
    }
    return e;
  }
  function g(e, t) {
    c((t = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, t)).arrayFormatSeparator);
    let r = function (e) {
      let t;
      switch (e.arrayFormat) {
        case "index":
          return (e, r, n) => {
            t = /\[(\d*)\]$/.exec(e);
            e = e.replace(/\[\d*\]$/, "");
            if (!t) {
              n[e] = r;
              return;
            }
            if (n[e] === undefined) {
              n[e] = {};
            }
            n[e][t[1]] = r;
          };
        case "bracket":
          return (e, r, n) => {
            t = /(\[\])$/.exec(e);
            e = e.replace(/\[\]$/, "");
            if (!t) {
              n[e] = r;
              return;
            }
            if (n[e] === undefined) {
              n[e] = [r];
              return;
            }
            n[e] = [].concat(n[e], r);
          };
        case "comma":
        case "separator":
          return (t, r, n) => {
            let i = typeof r == "string" && r.includes(e.arrayFormatSeparator);
            let o = typeof r == "string" && !i && f(r, e).includes(e.arrayFormatSeparator);
            r = o ? f(r, e) : r;
            let a = i || o ? r.split(e.arrayFormatSeparator).map(t => f(t, e)) : r === null ? r : f(r, e);
            n[t] = a;
          };
        default:
          return (e, t, r) => {
            if (r[e] === undefined) {
              r[e] = t;
              return;
            }
            r[e] = [].concat(r[e], t);
          };
      }
    }(t);
    let n = Object.create(null);
    if (typeof e != "string" || !(e = e.trim().replace(/^[?#&]/, ""))) {
      return n;
    }
    for (let i of e.split("&")) {
      if (i === "") {
        continue;
      }
      let [e, a] = stringSplitOnce(t.decode ? i.replace(/\+/g, " ") : i, "=");
      a = a === undefined ? null : ["comma", "separator"].includes(t.arrayFormat) ? a : f(a, t);
      r(f(e, t), a, n);
    }
    for (let e of Object.keys(n)) {
      let r = n[e];
      if (typeof r == "object" && r !== null) {
        for (let e of Object.keys(r)) {
          r[e] = h(r[e], t);
        }
      } else {
        n[e] = h(r, t);
      }
    }
    if (t.sort === false) {
      return n;
    } else {
      return (t.sort === true ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
        let r = n[t];
        if (r && typeof r == "object" && !Array.isArray(r)) {
          e[t] = function e(t) {
            if (Array.isArray(t)) {
              return t.sort();
            } else if (typeof t == "object") {
              return e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]);
            } else {
              return t;
            }
          }(r);
        } else {
          e[t] = r;
        }
        return e;
      }, Object.create(null));
    }
  }
  exports.extract = d;
  exports.parse = g;
  exports.stringify = (e, t) => {
    if (!e) {
      return "";
    }
    c((t = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, t)).arrayFormatSeparator);
    let r = r => t.skipNull && s(e[r]) || t.skipEmptyString && e[r] === "";
    let n = function (e) {
      switch (e.arrayFormat) {
        case "index":
          return t => (r, n) => {
            let i = r.length;
            if (n === undefined || e.skipNull && n === null || e.skipEmptyString && n === "") {
              return r;
            } else if (n === null) {
              return [...r, [u(t, e), "[", i, "]"].join("")];
            } else {
              return [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")];
            }
          };
        case "bracket":
          return t => (r, n) => n === undefined || e.skipNull && n === null || e.skipEmptyString && n === "" ? r : n === null ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
        case "comma":
        case "separator":
          return t => (r, n) => n == null || n.length === 0 ? r : r.length === 0 ? [[u(t, e), "=", u(n, e)].join("")] : [[r, u(n, e)].join(e.arrayFormatSeparator)];
        default:
          return t => (r, n) => n === undefined || e.skipNull && n === null || e.skipEmptyString && n === "" ? r : n === null ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")];
      }
    }(t);
    let i = {};
    for (let t of Object.keys(e)) {
      if (!r(t)) {
        i[t] = e[t];
      }
    }
    let o = Object.keys(i);
    if (t.sort !== false) {
      o.sort(t.sort);
    }
    return o.map(r => {
      let i = e[r];
      if (i === undefined) {
        return "";
      } else if (i === null) {
        return u(r, t);
      } else if (Array.isArray(i)) {
        return i.reduce(n(r), []).join("&");
      } else {
        return u(r, t) + "=" + u(i, t);
      }
    }).filter(e => e.length > 0).join("&");
  };
  exports.parseUrl = (e, t) => {
    t = Object.assign({
      decode: true
    }, t);
    let [r, n] = stringSplitOnce(e, "#");
    return Object.assign({
      url: r.split("?")[0] || "",
      query: g(d(e), t)
    }, t && t.parseFragmentIdentifier && n ? {
      fragmentIdentifier: f(n, t)
    } : {});
  };
  exports.stringifyUrl = (e, r) => {
    r = Object.assign({
      encode: true,
      strict: true
    }, r);
    let n = l(e.url).split("?")[0] || "";
    let i = exports.extract(e.url);
    let o = Object.assign(exports.parse(i, {
      sort: false
    }), e.query);
    let a = exports.stringify(o, r);
    a &&= `?${a}`;
    let s = function (e) {
      let t = "";
      let r = e.indexOf("#");
      if (r !== -1) {
        t = e.slice(r);
      }
      return t;
    }(e.url);
    if (e.fragmentIdentifier) {
      s = `#${u(e.fragmentIdentifier, r)}`;
    }
    return `${n}${a}${s}`;
  };
  exports.pick = (e, r, n) => {
    n = Object.assign({
      parseFragmentIdentifier: true
    }, n);
    let {
      url: i,
      query: o,
      fragmentIdentifier: s
    } = exports.parseUrl(e, n);
    return exports.stringifyUrl({
      url: i,
      query: objectPickUtils(o, r),
      fragmentIdentifier: s
    }, n);
  };
  exports.exclude = (e, r, n) => {
    let i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
    return exports.pick(e, i, n);
  };
}