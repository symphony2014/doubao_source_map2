// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'BusinessSkillBarMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 126623
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactUseEventListener = require("react-use-event-listener") /*id: 55281*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var exitOutlinedIcon = require("exit-outlined-icon") /*id: 379234*/;
  var treeNodeFlattener = require("tree-node-flattener") /*id: 881316*/;
  var p = {
    container: "container-HfenZc",
    "right-icon": "right-icon-ATsd0r"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      contentClassName: t,
      focus: n = false,
      actions: s = [],
      children: m,
      onClickItem: g,
      onArrowInput: v,
      visible: b,
      forceVisible: y,
      iconSize: _ = "middle",
      fontSize: E = "large",
      ...w
    } = e;
    let [x, C] = reactCoreLibraryReexport.useState();
    let S = reactCoreLibraryReexport.useMemo(() => treeNodeFlattener.flattenTreeNodes(s), [s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(x)) {
        C(Math.min(S.length - 1, x));
      }
    }, [S.length]);
    reactCoreLibraryReexport.useEffect(() => {
      C(n ? 0 : undefined);
    }, [n]);
    reactUseEventListener.useEventListener("ArrowUp", e => {
      if (b) {
        if (v != null) {
          v();
        }
        if (!!n && !isUndefinedCheck.isUndefined(x)) {
          e.preventDefault();
          C(Math.max(0, x - 1));
        }
      }
    });
    reactUseEventListener.useEventListener("ArrowDown", e => {
      if (b) {
        if (v != null) {
          v();
        }
        if (!!n && !isUndefinedCheck.isUndefined(x)) {
          e.preventDefault();
          C(Math.min(S.length - 1, x + 1));
        }
      }
    });
    reactUseEventListener.useEventListener("Enter", e => {
      if (!b || !n || isUndefinedCheck.isUndefined(x)) {
        return;
      }
      e.preventDefault();
      let t = S[x];
      if (t) {
        T(t);
      }
    });
    reactUseEventListener.useEventListener(e => !["ArrowUp", "ArrowDown", "Enter"].includes(e.key) && S.some(t => t.hotkey === e.key), e => {
      if (!b || !n) {
        return;
      }
      e.preventDefault();
      let t = S.find(t => t.hotkey === e.key);
      if (t) {
        T(t);
      }
    });
    let T = e => {
      let {
        onClick: t,
        key: n
      } = e;
      if (t) {
        t();
        return;
      }
      if (n) {
        if (g != null) {
          g(n);
        }
      }
    };
    let k = (e, t) => {
      let n = t.flatMap(e => {
        return e.children ?? e;
      });
      let i = arrayFirstElement.getFirstElement(n);
      let s = lastElementHelper.getLastElement(n);
      let l = i && S.indexOf(i);
      let c = s && S.indexOf(s);
      return !isUndefinedCheck.isUndefined(l) && !isUndefinedCheck.isUndefined(c) && e <= c && e >= l;
    };
    let O = e => e.map(e => {
      let {
        key: t,
        label: n,
        icon: i,
        children: o,
        hotkeyIcon: a,
        wrapper: s
      } = e;
      let l = S.indexOf(e);
      return {
        value: t ?? "",
        icon: i,
        label: n,
        hovered: l === x || !!o && !isUndefinedCheck.isUndefined(x) && !!k(x, o),
        rightIcon: a ?? (l === x ? reactJsxRuntimeCoreReexport.jsx(exitOutlinedIcon.ExitOutlined, {
          className: p["right-icon"]
        }) : undefined),
        onClick: () => {
          T(e);
        },
        subOptions: o && O(o),
        wrapper: s
      };
    });
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      ...w,
      iconSize: _,
      fontSize: E,
      visible: b,
      contentClassName: l(p.container, t),
      defaultValue: "",
      selectable: false,
      scrollable: false,
      newIcon: true,
      forceVisible: !!s.length && y,
      options: O(s),
      children: m
    });
  };
  require.d(exports, {
    BusinessSkillBarMenu: function () {
      return m;
    }
  });
}