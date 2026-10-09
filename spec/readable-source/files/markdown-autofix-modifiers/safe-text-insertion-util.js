// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UQ' to 'insertElementMarker'
// - Renamed export 'VI' to 'applyTextInsertions'
// - Renamed export '_s' to 'parseMarkerData'
// - Renamed export 'en' to 'findMarkerIndex'
// - Renamed export 'ge' to 'matchMarkerStart'
// - Renamed export 'oo' to 'decodeMarkers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 348428
         */
module.exports = function (module, exports, require) {
  var bufferImplementation = require("buffer-implementation") /*id: 659459*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var assertErrorUtility = require("assert-error-utility") /*id: 27936*/;
  var jsUtilFunctions = require("js-util-functions") /*id: 266643*/;
  let s = "insert_element";
  let f = e => `{${e}}`;
  let c = e => {
    let {
      source: t,
      index: r,
      item: o
    } = e;
    let {
      type: a = "inline",
      range: c,
      mode: p = "element",
      render: v
    } = o;
    let d = isNumberUtil.isNumber(c) ? [c, c] : c;
    let m = {
      inline: "",
      newline: "\n",
      block: "\n\n"
    }[a];
    let h = t.slice(...d);
    if (p === "element") {
      return `${m}${f(`${s}_${r}_${bufferImplementation.Buffer.from(h).toString("base64")}`.replace(/_/g, "\\_"))}${m}`;
    }
    assertErrorUtility.assert(p === "raw");
    let y = v(h);
    if (isStringTypeCheck.isString(y)) {
      return `${m}${y}${m}`;
    } else {
      return null;
    }
  };
  let p = `\\{${s.replace(/_/g, "\\\\_")}\\\\_(?<index>[0-9]+)\\\\_(?<b64_data>.*?)\\}`;
  let v = `\\{${s}_(?<index>[0-9]+)_(?<b64_data>.*?)\\}`;
  let d = e => {
    return new RegExp(p).exec(e)?.index;
  };
  let m = e => {
    let r = RegExp(`^${p}`).exec(e) ?? RegExp(`^${v}`).exec(e);
    if (r == null) {
      return undefined;
    } else {
      return r[0];
    }
  };
  let h = e => {
    let t = RegExp(`^${p}$`).exec(e);
    let {
      index: r,
      b64_data: n
    } = (t == null ? undefined : t.groups) || {};
    if (!isUndefinedCheck.isUndefined(r) && !isUndefinedCheck.isUndefined(n)) {
      return {
        index: parseInt(r),
        b64Text: n,
        text: n && bufferImplementation.Buffer.from(n, "base64").toString("utf8")
      };
    }
  };
  let y = (e, t) => {
    let r = [];
    t.forEach((t, i) => {
      let {
        range: l
      } = t;
      let [o, u] = isNumberUtil.isNumber(l) ? [l, l] : l;
      if (o > u || o > e.length) {
        return;
      }
      let a = c({
        source: e,
        index: i,
        item: t
      });
      if (a) {
        r.push({
          replaceRange: isNumberUtil.isNumber(l) ? [l, l] : l,
          insert: a,
          index: r.length
        });
      }
    });
    return r;
  };
  let g = (e, t) => {
    let [r, i] = e.replaceRange;
    let [n, l] = t.replaceRange;
    let o = t.insert.length - (l - n);
    if (r < n || r === n && e.index < t.index) {
      return e;
    }
    let u = Math.min(Math.max(0, l - r), i - r);
    return {
      ...e,
      replaceRange: [r + o + u, i + o]
    };
  };
  let b = e => {
    let t = [];
    for (let r = 0; r < e.length; r += 1) {
      let i = e[r];
      for (let e = 0; e < t.length; e += 1) {
        i = g(i, t[e]);
      }
      t.push(i);
    }
    return t;
  };
  let x = (e, t) => {
    let {
      replaceRange: [r, i],
      insert: n
    } = t;
    return `${e.slice(0, r)}${n}${e.slice(i)}`;
  };
  let _ = (e, t) => {
    let r = b(y(e, t));
    return jsUtilFunctions.createPipe(...r.map(e => t => x(t, e)))(e);
  };
  let w = (e, t) => _(e, t);
  let $ = e => e.replace(RegExp(p, "g"), e => {
    let t = h(e);
    if (t) {
      return t.text;
    } else {
      return "";
    }
  });
  require.d(exports, {
    insertElementMarker: function () {
      return s;
    },
    applyTextInsertions: function () {
      return w;
    },
    parseMarkerData: function () {
      return h;
    },
    findMarkerIndex: function () {
      return d;
    },
    matchMarkerStart: function () {
      return m;
    },
    decodeMarkers: function () {
      return $;
    }
  });
}