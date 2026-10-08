// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'objectDefaultsUtil'
// - Resolved require(679337) to 'object-defaults-util'
// - Renamed variable 'o' to 'isBooleanUtil'
// - Resolved require(507922) to 'is-boolean-util'
// - Renamed variable 'a' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'reactOptimizedImage'
// - Resolved require(351824) to 'react-optimized-image'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'h' to 'urlValidationUtils'
// - Resolved require(209486) to 'url-validation-utils'
// - Renamed variable 'g' to 'themeConfigContext'
// - Resolved require(82938) to 'theme-config-context'
// - Renamed variable 'f' to 'uiConstantsModule'
// - Resolved require(631020) to 'ui-constants-module'
// - Updated imported property 'A' to 'parseUrlSafe' (module 209486)
// - Updated imported property 'w' to 'useThemeConfig' (module 82938)
// - Updated imported property 'Z' to 'defaults' (module 679337)
// - Updated imported property 'Z' to 'isBoolean' (module 507922)
// - Updated imported property 'zu' to 'statusType' (module 631020)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'A' to 'OptimizedImage' (module 351824)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42489.04b85baf.js
         * chunkId: 42489
         * moduleId: 784484
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactOptimizedImage = require("react-optimized-image") /*id: 351824*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#999",
      fillRule: "evenodd",
      d: "M12 21.375a9.375 9.375 0 1 1 0-18.75 9.375 9.375 0 0 1 0 18.75M.75 12C.75 5.787 5.787.75 12 .75S23.25 5.787 23.25 12 18.213 23.25 12 23.25.75 18.213.75 12m11.241 1.676q-.94 0-.974-.941l-.142-4.86q-.021-.481.296-.777.316-.307.81-.307.49 0 .82.307.327.306.306.788l-.164 4.838q-.034.952-.952.952m0 3.459q-.514 0-.886-.328a1.08 1.08 0 0 1-.361-.832q0-.504.36-.832.363-.33.887-.329.526 0 .886.329.372.328.372.832 0 .515-.372.842-.36.318-.886.318",
      clipRule: "evenodd"
    })
  });
  var urlValidationUtils = require("url-validation-utils") /*id: 209486*/;
  let p = e => {
    let {
      width: t,
      height: n,
      minHeight: i,
      minWidth: r,
      maxHeight: o,
      maxWidth: a
    } = e;
    let s = {
      width: t,
      height: n
    };
    let l = t / n;
    let c = e => {
      s.height = e;
      s.width = e * l;
    };
    let u = e => {
      s.width = e;
      s.height = e / l;
    };
    if (s.width < r) {
      u(r);
    }
    if (s.height < i) {
      c(i);
    }
    if (s.width > a) {
      u(a);
    }
    if (s.height > o) {
      c(o);
    }
    if (!(s.width < r) && !(s.width > a) && !(s.height < i)) {
      s.height;
    }
    return s;
  };
  var themeConfigContext = require("theme-config-context") /*id: 82938*/;
  var uiConstantsModule = require("ui-constants-module") /*id: 631020*/;
  let m = function (e, t = 5000) {
    return new Promise((n, i) => {
      let r = false;
      let o = false;
      let a = new Image();
      a.onload = function () {
        if (!o) {
          r = true;
          n({
            width: a.naturalWidth,
            height: a.naturalHeight
          });
        }
      };
      a.src = e;
      setTimeout(() => {
        o = true;
        if (!r) {
          i(Error(`Get size of image timeout for ${t}ms.`));
        }
      }, t);
    });
  };
  var A = {
    container: "container-MzuYIN",
    centered: "centered-LTVsmO",
    image: "image-Q7dBqW",
    loading: "loading-s0thvu",
    "loading-image": "loading-image-tS6gSz",
    "error-wrapper": "error-wrapper-xRuekC",
    fallbackIcon: "fallbackIcon-fes5ja",
    "image-wrapper": "image-wrapper-YJelRW",
    square: "square-c1or9u",
    clickable: "clickable-axeVcZ",
    title: "title-MDm8uZ"
  };
  let v = e => {
    let t = urlValidationUtils.parseUrlSafe(e);
    if (t) {
      if (t.protocol === "http:") {
        t.protocol = "https:";
      }
      return t.toString();
    } else {
      return e;
    }
  };
  let b = e => {
    let {
      className: t,
      style: n,
      raw: s,
      parents: h,
      wrapperClassName: b,
      wrapperStyle: w,
      src: y = null,
      otherFormatSrc: E,
      onImageClick: x,
      onImageRender: _,
      imageOptions: S = {
        layout: "intrinsic",
        objectFit: "contain"
      },
      errorClassName: C,
      children: P,
      onImageLoadComplete: T,
      useCustomPlaceHolder: O = false,
      customPlaceHolder: R,
      onImageContextMenu: k,
      onImageMouseEnter: M,
      dark: I = false,
      ...N
    } = e;
    let {
      squareContainer: j = false,
      forceHttps: D = false,
      responsiveNaturalSize: Z = false,
      width: L = 400,
      height: H = 256,
      showTitle: B = false,
      centered: W = false,
      processSrcBeforeLoad: z,
      ...$
    } = S;
    let {
      mode: F
    } = themeConfigContext.useThemeConfig();
    let {
      alt: V
    } = S;
    let U = y && (D ? v(y) : y);
    let [G, X] = reactCoreLibraryReexport.useState(z ? null : U);
    let K = !!(G == null ? undefined : G.startsWith("data:"));
    let Q = K && Z;
    let Y = !K && Z;
    let [J, q] = reactCoreLibraryReexport.useState(L);
    let [ee, et] = reactCoreLibraryReexport.useState(H);
    let [en, ei] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (L || H) {
        q(L);
        et(H);
      }
    }, [L, H]);
    reactCoreLibraryReexport.useEffect(() => {
      if (Q) {
        eg();
      }
    }, [G, Q]);
    let {
      minHeight: er,
      minWidth: eo,
      maxHeight: ea,
      maxWidth: es
    } = objectDefaultsUtil.defaults(isBooleanUtil.isBoolean(Y) ? {} : {
      ...Y
    }, {
      minHeight: 0,
      minWidth: 0,
      maxWidth: L ?? 400,
      maxHeight: H ?? 256
    });
    let [el, ec] = reactCoreLibraryReexport.useState(uiConstantsModule.statusType.Loading);
    let eu = el !== uiConstantsModule.statusType.Loading;
    let ed = el === uiConstantsModule.statusType.Loading;
    let eh = {
      src: G,
      alt: V,
      status: el
    };
    let ep = (Y || O) && !eu;
    reactCoreLibraryReexport.useEffect(() => {
      if (G) {
        if (_ != null) {
          _(eh);
        }
      }
    }, [G]);
    reactCoreLibraryReexport.useEffect(() => {
      if (U) {
        if (z) {
          z(U).then(e => {
            X(e || U);
          }).catch(() => {
            X(U);
          });
        } else {
          X(U);
        }
      }
    }, [U, !!z]);
    let eg = async () => {
      let {
        width: e,
        height: t
      } = await m(G ?? "");
      q(e);
      et(t);
      ei(true);
    };
    let ef = isNumberUtil.isNumber(J) && isNumberUtil.isNumber(ee) && {
      width: "100%",
      height: 0,
      paddingBottom: `min(${ee / J * 100}%, ${ee}px)`,
      maxWidth: J
    };
    if (Q && !en) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(A.container, {
          [A.centered]: W
        }),
        style: w,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: e => {
            if (x && eh) {
              x(e, eh);
              e.stopPropagation();
            }
          },
          className: l(A["image-wrapper"], {
            [A.clickable]: !!x,
            [A.square]: j
          }, b),
          style: {
            ...ef
          },
          "data-testid": "mdbox_image",
          children: P || reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [Y && !eu && !O && reactJsxRuntimeCoreReexport.jsx("span", {
              className: A["loading-image"],
              children: reactJsxRuntimeCoreReexport.jsx(reactOptimizedImage.OptimizedImage, {
                ...N,
                ...$,
                height: ee,
                width: J,
                placeholder: "skeleton",
                src: ""
              })
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              style: {
                display: "inline-block",
                ...(ep ? {
                  width: 0,
                  height: 0
                } : {})
              },
              children: reactJsxRuntimeCoreReexport.jsx(reactOptimizedImage.OptimizedImage, {
                ...N,
                ...$,
                onContextMenu: k,
                onMouseEnter: M,
                height: ee,
                width: J,
                alt: "image",
                src: G ?? "",
                formats: ["avif", "webp"],
                placeholder: "skeleton",
                loader: e => {
                  let {
                    extra: {
                      origin: t
                    },
                    format: n
                  } = e;
                  if ((E == null ? undefined : E.avifSrc) && n === "avis") {
                    if (E == null) {
                      return undefined;
                    } else {
                      return E.avifSrc;
                    }
                  } else if ((E == null ? undefined : E.webpSrc) && n === "awebp") {
                    if (E == null) {
                      return undefined;
                    } else {
                      return E.webpSrc;
                    }
                  } else {
                    return G ?? t;
                  }
                },
                error: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: l(A["error-wrapper"], C, "error-wrapper"),
                  ref: () => {
                    ec(uiConstantsModule.statusType.Failed);
                    if (T != null) {
                      T();
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(d, {
                    className: A.fallbackIcon
                  })
                }),
                onLoadingComplete: e => {
                  var t;
                  ec(uiConstantsModule.statusType.Success);
                  if (T != null) {
                    T();
                  }
                  let {
                    naturalWidth: n,
                    naturalHeight: i
                  } = e;
                  if (Y && n && i) {
                    let e = p({
                      width: n,
                      height: i,
                      minHeight: er,
                      minWidth: eo,
                      maxHeight: ea,
                      maxWidth: es
                    });
                    q(e.width);
                    et(e.height);
                    ei(true);
                  }
                  if ((t = $.onLoadingComplete) !== null && t !== undefined) {
                    t.call($, e);
                  }
                },
                className: l(t, A.image, {
                  [A.loading]: (I || F === "dark") && ed
                }),
                style: n
              })
            }), O && !eu && R]
          })
        }), B && V && reactJsxRuntimeCoreReexport.jsx("div", {
          className: A.title,
          children: V
        })]
      });
    }
  };
  var w = b;
  require.r(exports);
  require.d(exports, {
    Image: function () {
      return b;
    },
    default: function () {
      return w;
    }
  });
}