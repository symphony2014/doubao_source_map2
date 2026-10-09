// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'InputNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: list-or-heading-modify-panel.840ddcd1.js
         * chunkId: 87195
         * moduleId: 453756
         */
module.exports = function (module, exports, require) {
  var upBoldOutlinedIcon = require("up-bold-outlined-icon") /*id: 276704*/;
  var downBoldOutlinedIcon = require("down-bold-outlined-icon") /*id: 179352*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = "docx-input-number";
  let p = e => `${e}`;
  let m = e => parseInt(`${e}`, 10);
  let v = e => /^[0-9]*$/.test(e);
  function h(e) {
    let {
      defaultValue: r,
      min: n = 1,
      max: i = Number.MAX_SAFE_INTEGER,
      formatter: h = p,
      parser: _ = m,
      checker: b = v,
      onChange: g,
      onPressEnter: E
    } = e;
    let y = reactCoreLibraryReexport.useRef(r || 1);
    let [x, w] = reactCoreLibraryReexport.useState(h(r || 1));
    let [N, Z] = reactCoreLibraryReexport.useState(true);
    let M = reactCoreLibraryReexport.useRef(null);
    let C = y.current === i;
    let I = y.current === n;
    let S = e => {
      if (!e) {
        return;
      }
      let r = e;
      if (e > i) {
        r = i;
      }
      if (e < n) {
        r = n;
      }
      y.current = r;
      w(isFunctionUtil_1.isFunction(h) ? h(r) : r);
      if (isFunctionUtil_1.isFunction(g)) {
        g(r, x);
      }
    };
    let O = () => {
      S(_(`${x}`.toLowerCase()));
    };
    let k = function (e = 1) {
      S(y.current + e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (N && document.activeElement !== M.current) {
        var e;
        if ((e = M.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = M.current) !== null && e !== undefined) {
        e.select();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(d, {
        [`${d}-focus`]: N
      }),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: `${d}-input-wrap`,
        children: reactJsxRuntimeCoreReexport.jsx("input", {
          ref: M,
          className: `${d}-input`,
          value: x,
          onChange: e => {
            if ((isFunctionUtil_1.isFunction(b) ? b : v)(e.target.value)) {
              w(e.target.value);
              y.current = _(e.target.value) || y.current;
            }
          },
          onKeyDown: e => {
            if (e.keyCode === keyboardKeyCodes.keyCodeMap.UP) {
              e.preventDefault();
              k(1);
            } else if (e.keyCode === keyboardKeyCodes.keyCodeMap.DOWN) {
              k(-1);
            } else if (e.keyCode === keyboardKeyCodes.keyCodeMap.ENTER) {
              O();
              if (isFunctionUtil_1.isFunction(E)) {
                E(y.current, x);
              }
              e.preventDefault();
            }
          },
          onFocus: () => {
            Z(true);
          },
          onBlur: () => {
            O();
            Z(false);
          }
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${d}-handler-wrap`,
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: a(`${d}-handler`, `${d}-handler-up`, {
            [`${d}-handler-disabled`]: C
          }),
          onMouseDown: e => {
            if (!C) {
              if (!N) {
                Z(true);
              }
              k(1);
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(upBoldOutlinedIcon.UpBoldOutlinedIcon, {})
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: a(`${d}-handler`, `${d}-handler-down`, {
            [`${d}-handler-disabled`]: I
          }),
          onMouseDown: e => {
            if (!I) {
              if (!N) {
                Z(true);
              }
              k(-1);
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(downBoldOutlinedIcon.DownBoldIcon, {})
        })]
      })]
    });
  }
  require.d(exports, {
    InputNumber: function () {
      return h;
    }
  });
}