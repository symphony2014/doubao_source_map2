// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'strictEncodeUriComponent'
// - Resolved require(103771) to 'strict-encode-uri-component'
// - Renamed variable 'i' to 'safeDecodeUriComponent'
// - Resolved require(270319) to 'safe-decode-uri-component'
// - Renamed variable 'o' to 'stringSplitOnce'
// - Resolved require(468185) to 'string-split-once'
// - Renamed variable 's' to 'objectPickUtils'
// - Resolved require(659456) to 'object-pick-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 281897
         */
module.exports = function (module, exports, require) {
  let strictEncodeUriComponent = require("strict-encode-uri-component") /*id: 103771*/;
  let safeDecodeUriComponent = require("safe-decode-uri-component") /*id: 270319*/;
  let stringSplitOnce = require("string-split-once") /*id: 468185*/;
  let objectPickUtils = require("object-pick-utils") /*id: 659456*/;
  let a = t => t == null;
  function u(t) {
    if (typeof t != "string" || t.length !== 1) {
      throw TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function c(t, e) {
    if (e.encode) {
      if (e.strict) {
        return strictEncodeUriComponent(t);
      } else {
        return encodeURIComponent(t);
      }
    } else {
      return t;
    }
  }
  function l(t, e) {
    if (e.decode) {
      return safeDecodeUriComponent(t);
    } else {
      return t;
    }
  }
  function p(t) {
    let e = t.indexOf("#");
    if (e !== -1) {
      t = t.slice(0, e);
    }
    return t;
  }
  function h(t) {
    let e = (t = p(t)).indexOf("?");
    if (e === -1) {
      return "";
    } else {
      return t.slice(e + 1);
    }
  }
  function f(t, e) {
    if (e.parseNumbers && !Number.isNaN(Number(t)) && typeof t == "string" && t.trim() !== "") {
      t = Number(t);
    } else if (e.parseBooleans && t !== null && (t.toLowerCase() === "true" || t.toLowerCase() === "false")) {
      t = t.toLowerCase() === "true";
    }
    return t;
  }
  function d(t, e) {
    u((e = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, e)).arrayFormatSeparator);
    let n = function (t) {
      let e;
      switch (t.arrayFormat) {
        case "index":
          return (t, n, r) => {
            e = /\[(\d*)\]$/.exec(t);
            t = t.replace(/\[\d*\]$/, "");
            if (!e) {
              r[t] = n;
              return;
            }
            if (r[t] === undefined) {
              r[t] = {};
            }
            r[t][e[1]] = n;
          };
        case "bracket":
          return (t, n, r) => {
            e = /(\[\])$/.exec(t);
            t = t.replace(/\[\]$/, "");
            if (!e) {
              r[t] = n;
              return;
            }
            if (r[t] === undefined) {
              r[t] = [n];
              return;
            }
            r[t] = [].concat(r[t], n);
          };
        case "comma":
        case "separator":
          return (e, n, r) => {
            let i = typeof n == "string" && n.includes(t.arrayFormatSeparator);
            let o = typeof n == "string" && !i && l(n, t).includes(t.arrayFormatSeparator);
            n = o ? l(n, t) : n;
            let s = i || o ? n.split(t.arrayFormatSeparator).map(e => l(e, t)) : n === null ? n : l(n, t);
            r[e] = s;
          };
        default:
          return (t, e, n) => {
            if (n[t] === undefined) {
              n[t] = e;
              return;
            }
            n[t] = [].concat(n[t], e);
          };
      }
    }(e);
    let r = Object.create(null);
    if (typeof t != "string" || !(t = t.trim().replace(/^[?#&]/, ""))) {
      return r;
    }
    for (let i of t.split("&")) {
      if (i === "") {
        continue;
      }
      let [t, s] = stringSplitOnce(e.decode ? i.replace(/\+/g, " ") : i, "=");
      s = s === undefined ? null : ["comma", "separator"].includes(e.arrayFormat) ? s : l(s, e);
      n(l(t, e), s, r);
    }
    for (let t of Object.keys(r)) {
      let n = r[t];
      if (typeof n == "object" && n !== null) {
        for (let t of Object.keys(n)) {
          n[t] = f(n[t], e);
        }
      } else {
        r[t] = f(n, e);
      }
    }
    if (e.sort === false) {
      return r;
    } else {
      return (e.sort === true ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce((t, e) => {
        let n = r[e];
        if (n && typeof n == "object" && !Array.isArray(n)) {
          t[e] = function t(e) {
            if (Array.isArray(e)) {
              return e.sort();
            } else if (typeof e == "object") {
              return t(Object.keys(e)).sort((t, e) => Number(t) - Number(e)).map(t => e[t]);
            } else {
              return e;
            }
          }(n);
        } else {
          t[e] = n;
        }
        return t;
      }, Object.create(null));
    }
  }
  exports.extract = h;
  exports.parse = d;
  exports.stringify = (t, e) => {
    if (!t) {
      return "";
    }
    u((e = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, e)).arrayFormatSeparator);
    let n = n => e.skipNull && a(t[n]) || e.skipEmptyString && t[n] === "";
    let r = function (t) {
      switch (t.arrayFormat) {
        case "index":
          return e => (n, r) => {
            let i = n.length;
            if (r === undefined || t.skipNull && r === null || t.skipEmptyString && r === "") {
              return n;
            } else if (r === null) {
              return [...n, [c(e, t), "[", i, "]"].join("")];
            } else {
              return [...n, [c(e, t), "[", c(i, t), "]=", c(r, t)].join("")];
            }
          };
        case "bracket":
          return e => (n, r) => r === undefined || t.skipNull && r === null || t.skipEmptyString && r === "" ? n : r === null ? [...n, [c(e, t), "[]"].join("")] : [...n, [c(e, t), "[]=", c(r, t)].join("")];
        case "comma":
        case "separator":
          return e => (n, r) => r == null || r.length === 0 ? n : n.length === 0 ? [[c(e, t), "=", c(r, t)].join("")] : [[n, c(r, t)].join(t.arrayFormatSeparator)];
        default:
          return e => (n, r) => r === undefined || t.skipNull && r === null || t.skipEmptyString && r === "" ? n : r === null ? [...n, c(e, t)] : [...n, [c(e, t), "=", c(r, t)].join("")];
      }
    }(e);
    let i = {};
    for (let e of Object.keys(t)) {
      if (!n(e)) {
        i[e] = t[e];
      }
    }
    let o = Object.keys(i);
    if (e.sort !== false) {
      o.sort(e.sort);
    }
    return o.map(n => {
      let i = t[n];
      if (i === undefined) {
        return "";
      } else if (i === null) {
        return c(n, e);
      } else if (Array.isArray(i)) {
        return i.reduce(r(n), []).join("&");
      } else {
        return c(n, e) + "=" + c(i, e);
      }
    }).filter(t => t.length > 0).join("&");
  };
  exports.parseUrl = (t, e) => {
    e = Object.assign({
      decode: true
    }, e);
    let [n, r] = stringSplitOnce(t, "#");
    return Object.assign({
      url: n.split("?")[0] || "",
      query: d(h(t), e)
    }, e && e.parseFragmentIdentifier && r ? {
      fragmentIdentifier: l(r, e)
    } : {});
  };
  exports.stringifyUrl = (t, n) => {
    n = Object.assign({
      encode: true,
      strict: true
    }, n);
    let r = p(t.url).split("?")[0] || "";
    let i = exports.extract(t.url);
    let o = Object.assign(exports.parse(i, {
      sort: false
    }), t.query);
    let s = exports.stringify(o, n);
    s &&= `?${s}`;
    let a = function (t) {
      let e = "";
      let n = t.indexOf("#");
      if (n !== -1) {
        e = t.slice(n);
      }
      return e;
    }(t.url);
    if (t.fragmentIdentifier) {
      a = `#${c(t.fragmentIdentifier, n)}`;
    }
    return `${r}${s}${a}`;
  };
  exports.pick = (t, n, r) => {
    r = Object.assign({
      parseFragmentIdentifier: true
    }, r);
    let {
      url: i,
      query: o,
      fragmentIdentifier: a
    } = exports.parseUrl(t, r);
    return exports.stringifyUrl({
      url: i,
      query: objectPickUtils(o, n),
      fragmentIdentifier: a
    }, r);
  };
  exports.exclude = (t, n, r) => {
    let i = Array.isArray(n) ? t => !n.includes(t) : (t, e) => !n(t, e);
    return exports.pick(t, i, r);
  };
}