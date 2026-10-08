// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'textFormatter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 532796
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  let s = e => e.replace(/[\n\t]/g, "");
  let c = function (e, t = {}) {
    let {
      removeEmptyChar: i = false
    } = t;
    if (i) {
      return s(e);
    } else {
      return e;
    }
  };
  let d = function (e, t, i = {}) {
    let {
      textStyle: n,
      textClassName: r,
      replaceTextStyle: s,
      replaceTextClassName: d,
      removeEmptyChar: u
    } = i;
    return [...e.matchAll(/(?:\{)(?<replacing>.*?)(?=\})|(?:\}|^)(?<inter>.*?)(?=\{|$)/g)].map(e => {
      let {
        groups: i = {}
      } = e;
      let {
        replacing: h,
        inter: m
      } = i;
      if (!isUndefinedCheck.isUndefined(m)) {
        return {
          text: c(m, {
            removeEmptyChar: u
          }),
          style: n,
          className: r
        };
      }
      if (!isUndefinedCheck.isUndefined(h)) {
        let e = t[h];
        if (!e) {
          return null;
        }
        if (isStringTypeCheck.isString(e)) {
          return {
            text: c(e, {
              removeEmptyChar: u
            }),
            key: h,
            style: s || n,
            className: d
          };
        }
        {
          let {
            style: t,
            text: i,
            className: r,
            ...o
          } = e;
          return {
            ...o,
            key: h,
            style: t || s || n,
            text: i && c(i, {
              removeEmptyChar: u
            }),
            className: a(r, d)
          };
        }
      }
      return null;
    }).filter(e => !!e);
  };
  let u = function (e = {}) {
    let {
      maxLines: t
    } = e;
    if (t) {
      return {
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        lineClamp: 2,
        WebkitBoxOrient: "vertical"
      };
    } else {
      return {};
    }
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      text: t,
      maxLines: i,
      replacingMap: r = {},
      textStyle: o,
      textClassName: l,
      replaceTextStyle: s,
      replaceTextClassName: c,
      removeEmptyChar: m,
      onTextClick: g,
      className: p = "",
      customItemRender: f,
      style: w
    } = e;
    let v = reactCoreLibraryReexport.useMemo(() => d(t, r, {
      textStyle: o,
      textClassName: l,
      replaceTextStyle: s,
      replaceTextClassName: c,
      removeEmptyChar: m
    }), [t, r, o, l, s, c, m]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("text-formatter-yKPZpp", p),
      style: {
        ...w,
        ...u({
          maxLines: i
        })
      },
      children: v.map((e, t) => {
        let {
          text: i,
          style: n,
          className: r,
          dir: o,
          render: l
        } = e;
        let s = reactJsxRuntimeCoreReexport.jsx("div", {
          className: a("text-formatter-inline-item-mJqXCV", r),
          style: n,
          onClick: t => {
            if (g != null) {
              g(e, t);
            }
          },
          dir: o,
          children: f ? f({
            text: i ?? ""
          }) : i
        }, t);
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: l ? l(s) : s
        });
      })
    });
  };
  require.d(exports, {
    textFormatter: function () {
      return m;
    }
  });
}