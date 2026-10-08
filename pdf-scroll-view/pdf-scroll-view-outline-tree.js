// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'PdfOutlineTree'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 410714
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var reactTreeComponent = require("react-tree-component") /*id: 460649*/;
  let u = async (e, t) => {
    for (let n of e) {
      if (n.page === t) {
        return n;
      }
      let e = n.children && (await u(n.children, t));
      if (e) {
        return e;
      }
    }
  };
  let d = async (e, t) => {
    for (let n of e) {
      if (n.key === t) {
        return n;
      }
      let e = n.children && (await d(n.children, t));
      if (e) {
        return e;
      }
    }
  };
  var h = {
    container: "container-ZwJYho",
    tree: "tree-HjWRv0",
    text: "text-AAkSsV",
    disabled: "disabled-UcHUzo",
    "outline-text-mdbox": "outline-text-mdbox-IW08KE"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      className: t,
      style: n,
      data: l,
      defaultValue: f = 1,
      value: g,
      onChange: m,
      onClickItem: v
    } = e;
    let [x, b] = useControlledStateHook.useControlledState({
      defaultValue: f,
      value: g,
      onChange: m
    });
    let [w, y] = reactCoreLibraryReexport.useState();
    let S = (e, t) => e.map(e => {
      let {
        title: n,
        key: r,
        page: l,
        children: s = []
      } = e;
      return {
        label: reactJsxRuntimeCoreReexport.jsx("span", {
          className: i(h.text, {
            [h.disabled]: !s.length && isUndefinedCheck.isUndefined(l)
          }),
          onClick: () => {
            if (!isUndefinedCheck.isUndefined(l)) {
              if (e.area) {
                if (v != null) {
                  v(e);
                }
              } else {
                b(l);
              }
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyMdBoxComponent, {
            markDown: n,
            theme: "samantha",
            className: h["outline-text-mdbox"]
          })
        }),
        key: r,
        value: r,
        children: t > 1 ? S(s, t - 1) : undefined
      };
    });
    let N = reactCoreLibraryReexport.useMemo(() => l && S(l, 2), [l]);
    let C = async (e, t) => {
      let n = w ? await d(e, w) : undefined;
      if (n && n.page === t) {
        return;
      }
      let r = await u(e, t);
      if (r) {
        y(r.key);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (l) {
        C(l, x);
      }
    }, [l, x]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: i(h.container, t),
      style: n,
      children: N && reactJsxRuntimeCoreReexport.jsx(reactTreeComponent.TreeComponent, {
        className: h.tree,
        treeData: N,
        value: w,
        onChange: e => {
          y(isUndefinedCheck.isUndefined(e) ? undefined : String(e));
        }
      })
    });
  };
  require.d(exports, {
    PdfOutlineTree: function () {
      return f;
    }
  });
}