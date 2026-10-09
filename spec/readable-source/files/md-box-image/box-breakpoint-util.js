// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createBreakpoints'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 576098
         */
module.exports = function (module, exports, require) {
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  let o = ["values", "unit", "step"];
  let a = e => {
    let t = Object.keys(e).map(t => ({
      key: t,
      val: e[t]
    })) || [];
    t.sort((e, t) => e.val - t.val);
    return t.reduce((e, t) => objectAssignUtil.objectAssign({}, e, {
      [t.key]: t.val
    }), {});
  };
  function s(e) {
    let {
      values: t = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      },
      unit: n = "px",
      step: s = 5
    } = e;
    let l = objectOmitUtil_3.omitKeys(e, o);
    let u = a(t);
    let c = Object.keys(u);
    function d(e) {
      let r = typeof t[e] == "number" ? t[e] : e;
      return `@media (min-width:${r}${n})`;
    }
    function p(e) {
      let r = typeof t[e] == "number" ? t[e] : e;
      return `@media (max-width:${r - s / 100}${n})`;
    }
    function h(e, r) {
      let i = c.indexOf(r);
      return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n}) and (max-width:${(i !== -1 && typeof t[c[i]] == "number" ? t[c[i]] : r) - s / 100}${n})`;
    }
    return objectAssignUtil.objectAssign({
      keys: c,
      values: u,
      up: d,
      down: p,
      between: h,
      only: function (e) {
        if (c.indexOf(e) + 1 < c.length) {
          return h(e, c[c.indexOf(e) + 1]);
        } else {
          return d(e);
        }
      },
      not: function (e) {
        let t = c.indexOf(e);
        if (t === 0) {
          return d(c[1]);
        } else if (t === c.length - 1) {
          return p(c[t]);
        } else {
          return h(e, c[c.indexOf(e) + 1]).replace("@media", "@media not all and");
        }
      },
      unit: n
    }, l);
  }
  require.d(exports, {
    createBreakpoints: function () {
      return s;
    }
  });
}