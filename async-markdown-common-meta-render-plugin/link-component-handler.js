// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'isFunctionUtil_1'
// - Resolved require(699491) to 'is-function-util_1'
// - Renamed variable 'o' to 'isBooleanUtil'
// - Resolved require(507922) to 'is-boolean-util'
// - Renamed variable 'l' to 'throttledOmitPathStringify'
// - Resolved require(159496) to 'throttled-omit-path-stringify'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'urlValidationUtils'
// - Resolved require(209486) to 'url-validation-utils'
// - Renamed variable 'd' to 'reactMemoHooks'
// - Resolved require(573742) to 'react-memo-hooks'
// - Renamed variable 'u' to 'jsUtilFunctions'
// - Resolved require(266643) to 'js-util-functions'
// - Renamed variable 'p' to 'uiConstantsModule'
// - Resolved require(631020) to 'ui-constants-module'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'A' to 'parseUrlSafe' (module 209486)
// - Updated imported property 'eD' to 'invokeCallback' (module 573742)
// - Updated imported property 'Qb' to 'invoke' (module 266643)
// - Updated imported property 'Z' to 'isFunction' (module 699491)
// - Updated imported property 'Z' to 'isBoolean' (module 507922)
// - Updated imported property 'Z' to 'omitPathStringify' (module 159496)
// - Updated imported property 'Un' to 'messageType' (module 631020)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 94706
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var urlValidationUtils = require("url-validation-utils") /*id: 209486*/;
  var reactMemoHooks = require("react-memo-hooks") /*id: 573742*/;
  var jsUtilFunctions = require("js-util-functions") /*id: 266643*/;
  var uiConstantsModule = require("ui-constants-module") /*id: 631020*/;
  let h = e => {
    try {
      if (e) {
        return JSON.parse(e);
      } else {
        return {};
      }
    } catch (e) {
      return {};
    }
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let t = urlValidationUtils.parseUrlSafe(e);
    return !!t && (t.protocol === "http:" || t.protocol === "https:");
  };
  let g = e => {
    let t = urlValidationUtils.parseUrlSafe(e);
    return !!t && t.protocol === "coco:";
  };
  let v = {
    render: true,
    callback: false
  };
  let b = {
    render: false,
    callback: false
  };
  let y = e => {
    let {
      className: t,
      style: n,
      href: a,
      children: y,
      customLink: x = true,
      onSendMessage: w,
      onLinkClick: A,
      onLinkRender: _,
      onOpenLink: k,
      type: S,
      raw: C,
      parents: $,
      ...E
    } = e;
    let R = a ? urlValidationUtils.parseUrlSafe(a) : null;
    let T = a == null ? undefined : a.startsWith("#");
    let {
      render: N,
      callback: j
    } = reactMemoHooks.invokeCallback(() => {
      let e = jsUtilFunctions.invoke(() => a ? isFunctionUtil_1.isFunction(x) ? x(a) : x : v);
      if (isBooleanUtil.isBoolean(e)) {
        if (e) {
          return v;
        } else {
          return b;
        }
      } else {
        return e;
      }
    });
    let I = reactMemoHooks.invokeCallback(() => !!a && (!!f(a) || !!T || !!N));
    let Z = e => {
      if (k) {
        if (k != null) {
          k(e);
        }
        return;
      }
      window.open(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (a && R) {
        if (_ != null) {
          _({
            url: a,
            parsedUrl: R
          });
        }
      }
    }, [a]);
    if (I) {
      return reactJsxRuntimeCoreReexport.jsx("a", {
        ...throttledOmitPathStringify.omitPathStringify(E, "href"),
        className: s("link-bJL8ai", "md-box-solid-color", t),
        style: n,
        onClick: e => {
          if (!a || !R) {
            if (!I) {
              e.preventDefault();
            }
            if (A != null) {
              A(e, {
                url: a ?? "",
                parsedUrl: null,
                exts: {
                  type: uiConstantsModule.messageType.normal
                },
                openLink: Z
              });
            }
            return;
          }
          if (g(a)) {
            e.preventDefault();
            let t = R.searchParams.get("msg");
            let n = R.searchParams.get("ext");
            let i = n ? h(n) : undefined;
            let r = i == null ? undefined : i.s$wiki_link;
            if (r) {
              if (f(r)) {
                if (A != null) {
                  A(e, {
                    url: a,
                    parsedUrl: R,
                    exts: {
                      wiki_link: r,
                      type: uiConstantsModule.messageType.wiki
                    },
                    openLink: Z
                  });
                }
              }
              return;
            }
            if (t) {
              if (w != null) {
                w(t);
              }
              return;
            }
            if (A != null) {
              A(e, {
                url: a,
                parsedUrl: R,
                exts: {
                  type: uiConstantsModule.messageType.coco
                },
                openLink: Z
              });
            }
          }
          if (f(a) || j) {
            if (A) {
              A(e, {
                url: a,
                parsedUrl: R,
                exts: {
                  type: uiConstantsModule.messageType.normal
                },
                openLink: Z
              });
            } else {
              e.preventDefault();
              e.stopPropagation();
              Z(a);
            }
          }
        },
        href: I ? a : undefined,
        target: T ? undefined : "_blank",
        children: y
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: y
      });
    }
  };
  var x = y;
  require.r(exports);
  require.d(exports, {
    Link: function () {
      return y;
    },
    default: function () {
      return x;
    }
  });
}