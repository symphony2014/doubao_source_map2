// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(215349) to 'mui-production-error-format-wrapper'
// - Resolved require(193880) to 'clamp-value'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 755229
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.alpha = function (e, t) {
    e = s(e);
    t = a(t);
    if (e.type === "rgb" || e.type === "hsl") {
      e.type += "a";
    }
    if (e.type === "color") {
      e.values[3] = `/${t}`;
    } else {
      e.values[3] = t;
    }
    return l(e);
  };
  exports.darken = c;
  exports.getContrastRatio = function (e, t) {
    let n = u(e);
    let r = u(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  };
  exports.lighten = d;
  var i = esModuleInteropHelper_2(require("mui-production-error-format-wrapper") /*id: 215349*/);
  var o = esModuleInteropHelper_2(require("clamp-value") /*id: 193880*/);
  function a(e, t = 0, n = 1) {
    return o.default(e, t, n);
  }
  function s(e) {
    let t;
    if (e.type) {
      return e;
    }
    if (e.charAt(0) === "#") {
      return s(function (e) {
        e = e.slice(1);
        let t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
        let n = e.match(t);
        if (n && n[0].length === 1) {
          n = n.map(e => e + e);
        }
        if (n) {
          return `rgb${n.length === 4 ? "a" : ""}(${n.map((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1000) / 1000).join(", ")})`;
        } else {
          return "";
        }
      }(e));
    }
    let n = e.indexOf("(");
    let r = e.substring(0, n);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1) {
      throw Error(i.default(9, e));
    }
    let o = e.substring(n + 1, e.length - 1);
    if (r === "color") {
      t = (o = o.split(" ")).shift();
      if (o.length === 4 && o[3].charAt(0) === "/") {
        o[3] = o[3].slice(1);
      }
      if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(t) === -1) {
        throw Error(i.default(10, t));
      }
    } else {
      o = o.split(",");
    }
    return {
      type: r,
      values: o = o.map(e => parseFloat(e)),
      colorSpace: t
    };
  }
  function l(e) {
    let {
      type: t,
      colorSpace: n
    } = e;
    let {
      values: r
    } = e;
    if (t.indexOf("rgb") !== -1) {
      r = r.map((e, t) => t < 3 ? parseInt(e, 10) : e);
    } else if (t.indexOf("hsl") !== -1) {
      r[1] = `${r[1]}%`;
      r[2] = `${r[2]}%`;
    }
    r = t.indexOf("color") !== -1 ? `${n} ${r.join(" ")}` : `${r.join(", ")}`;
    return `${t}(${r})`;
  }
  function u(e) {
    let t = (e = s(e)).type === "hsl" || e.type === "hsla" ? s(function (e) {
      let {
        values: t
      } = e = s(e);
      let n = t[0];
      let r = t[1] / 100;
      let i = t[2] / 100;
      let o = r * Math.min(i, 1 - i);
      let a = (e, t = (e + n / 30) % 12) => i - o * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      let u = "rgb";
      let c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
      if (e.type === "hsla") {
        u += "a";
        c.push(t[3]);
      }
      return l({
        type: u,
        values: c
      });
    }(e)).values : e.values;
    return Number(((t = t.map(t => {
      if (e.type !== "color") {
        t /= 255;
      }
      if (t <= 0.03928) {
        return t / 12.92;
      } else {
        return ((t + 0.055) / 1.055) ** 2.4;
      }
    }))[0] * 0.2126 + t[1] * 0.7152 + t[2] * 0.0722).toFixed(3));
  }
  function c(e, t) {
    e = s(e);
    t = a(t);
    if (e.type.indexOf("hsl") !== -1) {
      e.values[2] *= 1 - t;
    } else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1) {
      for (let n = 0; n < 3; n += 1) {
        e.values[n] *= 1 - t;
      }
    }
    return l(e);
  }
  function d(e, t) {
    e = s(e);
    t = a(t);
    if (e.type.indexOf("hsl") !== -1) {
      e.values[2] += (100 - e.values[2]) * t;
    } else if (e.type.indexOf("rgb") !== -1) {
      for (let n = 0; n < 3; n += 1) {
        e.values[n] += (255 - e.values[n]) * t;
      }
    } else if (e.type.indexOf("color") !== -1) {
      for (let n = 0; n < 3; n += 1) {
        e.values[n] += (1 - e.values[n]) * t;
      }
    }
    return l(e);
  }
}