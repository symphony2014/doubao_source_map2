// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TreeNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 416604
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var p = propTypesFactoryWrapper;
  var treeUiConstants = require("tree-ui-constants") /*id: 259049*/;
  var enterKeyCheck = require("enter-key-check") /*id: 943784*/;
  var iconComponentFactory = require("icon-component-factory") /*id: 129581*/;
  let y = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M20.5598 9.65618L12.7546 18.6322C12.3559 19.0906 11.644 19.0906 11.2453 18.6322L3.4401 9.65618C2.8773 9.00895 3.33701 8 4.19471 8L19.8052 8C20.6629 8 21.1226 9.00895 20.5598 9.65618Z",
      fill: "currentColor"
    }));
  }, "tree_triangle_down");
  var fileIconComponent = require("file-icon-component") /*id: 344454*/;
  let m = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 5C2 3.34315 3.34315 2 5 2H8.29844C8.75258 2 9.1932 2.15456 9.54783 2.43826L10.6783 3.34261C11.2102 3.76816 11.8711 4 12.5523 4H18C20 4 21 6 21 8H7.53361C6.62889 8 5.83683 8.60735 5.6021 9.48109L2.57151 20.7617C2.21202 20.2671 2 19.6583 2 19V5ZM22.1667 10H9.5C8.61111 10 7.82889 10.5867 7.58 11.44L4.87333 20.72C4.68667 21.36 5.16667 22 5.83333 22H18.5C19.3889 22 20.1711 21.4133 20.42 20.56L23.1267 11.28C23.3133 10.64 22.8333 10 22.1667 10Z",
      fill: "currentColor"
    }));
  }, "folder_open");
  let C = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M5 2C3.34315 2 2 3.34315 2 5V8H22C22 6 21 4 19 4H12.5523C11.8711 4 11.2102 3.76816 10.6783 3.34261L9.54783 2.43826C9.1932 2.15456 8.75258 2 8.29844 2H5Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M22 10H2V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V10Z",
      fill: "currentColor"
    }));
  }, "folder");
  var checkboxComponent = require("checkbox-component") /*id: 517004*/;
  var createReactContext = require("create-react-context") /*id: 435688*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  var S = reactCoreLibraryReexport.memo(e => {
    let {
      prefixcls: t,
      level: n,
      isEnd: i,
      showLine: a
    } = e;
    let r = `${t}-indent-unit`;
    let s = [];
    for (let e = 0; e < n; e += 1) {
      s.push(reactCoreLibraryReexport.createElement("span", {
        key: e,
        className: h(r, {
          [`${r}-end`]: i[e]
        })
      }));
    }
    return reactCoreLibraryReexport.createElement("span", {
      "aria-hidden": "true",
      className: h(`${t}-indent`, {
        [`${t}-indent-show-line`]: a
      })
    }, s);
  });
  function N(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; a < i.length; a++) {
        if (t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a])) {
          n[i[a]] = e[i[a]];
        }
      }
    }
    return n;
  }
  let D = treeUiConstants.TreePrefixes.PREFIX_OPTION;
  class O extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this.onSelect = e => {
        let {
          onNodeSelect: t
        } = this.context;
        t(e, this.props);
      };
      this.onExpand = e => {
        let {
          onNodeExpand: t
        } = this.context;
        if (e) {
          e.stopPropagation();
        }
        e.nativeEvent.stopImmediatePropagation();
        t(e, this.props);
      };
      this.onCheck = e => {
        if (this.isDisabled()) {
          return;
        }
        let {
          onNodeCheck: t
        } = this.context;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        t(e, this.props);
      };
      this.handleCheckEnterPress = e => {
        if (enterKeyCheck.isEnterKey(e)) {
          this.onCheck(e);
        }
      };
      this.onContextMenu = e => {
        let {
          onNodeRightClick: t
        } = this.context;
        t(e, this.props);
      };
      this.onClick = e => {
        let {
          expandAction: t
        } = this.context;
        if (t === "doubleClick") {
          this.debounceSelect(e);
          return;
        }
        this.onSelect(e);
        if (t === "click") {
          this.onExpand(e);
        }
      };
      this.handleliEnterPress = e => {
        if (enterKeyCheck.isEnterKey(e)) {
          this.onClick(e);
        }
      };
      this.onDoubleClick = e => {
        let {
          expandAction: t,
          onNodeDoubleClick: n
        } = this.context;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (isFunctionUtil_1.isFunction(n)) {
          n(e, this.props);
        }
        if (t === "doubleClick") {
          this.onExpand(e);
        }
      };
      this.onDragStart = e => {
        let {
          onNodeDragStart: t
        } = this.context;
        e.stopPropagation();
        t(e, Object.assign(Object.assign({}, this.props), {
          nodeInstance: this.refNode
        }));
        try {
          e.dataTransfer.setData("text/plain", "");
        } catch (e) {}
      };
      this.onDragEnter = e => {
        let {
          onNodeDragEnter: t
        } = this.context;
        e.preventDefault();
        e.stopPropagation();
        t(e, Object.assign(Object.assign({}, this.props), {
          nodeInstance: this.refNode
        }));
      };
      this.onDragOver = e => {
        let {
          onNodeDragOver: t
        } = this.context;
        e.preventDefault();
        e.stopPropagation();
        t(e, Object.assign(Object.assign({}, this.props), {
          nodeInstance: this.refNode
        }));
      };
      this.onDragLeave = e => {
        let {
          onNodeDragLeave: t
        } = this.context;
        e.stopPropagation();
        t(e, Object.assign(Object.assign({}, this.props), {
          nodeInstance: this.refNode
        }));
      };
      this.onDragEnd = e => {
        let {
          onNodeDragEnd: t
        } = this.context;
        e.stopPropagation();
        t(e, Object.assign(Object.assign({}, this.props), {
          nodeInstance: this.refNode
        }));
      };
      this.onDrop = e => {
        let {
          onNodeDrop: t
        } = this.context;
        e.preventDefault();
        e.stopPropagation();
        t(e, Object.assign(Object.assign({}, this.props), {
          nodeInstance: this.refNode
        }));
      };
      this.getNodeChildren = () => {
        let {
          children: e
        } = this.props;
        return e || [];
      };
      this.isLeaf = () => {
        let {
          isLeaf: e,
          loaded: t
        } = this.props;
        let {
          loadData: n
        } = this.context;
        let i = this.getNodeChildren().length !== 0;
        return e !== false && (e || !n && !i || n && t && !i);
      };
      this.isDisabled = () => {
        let {
          disabled: e
        } = this.props;
        let {
          treeDisabled: t
        } = this.context;
        return e !== false && (!!t || !!e);
      };
      this.renderSwitcher = () => this.isLeaf() ? reactCoreLibraryReexport.createElement("span", {
        className: h(`${D}-switcher`)
      }, reactCoreLibraryReexport.createElement("span", {
        className: `${D}-switcher-leaf-line`
      })) : null;
      this.renderRealLabel = () => {
        let {
          renderLabel: e
        } = this.context;
        let {
          label: t,
          keyword: n,
          data: i,
          filtered: a,
          treeNodeFilterProp: o
        } = this.props;
        if (isFunctionUtil_1.isFunction(e)) {
          return e(t, i);
        } else if (isStringTypeCheck.isString(t) && a && n) {
          return commonFrontendUtils.highlightSearchText({
            sourceString: t,
            searchWords: [n],
            option: {
              highlightTag: "span",
              highlightClassName: `${D}-highlight`
            }
          });
        } else {
          return t;
        }
      };
      this.setRef = e => {
        this.refNode = e;
      };
      this.state = {};
      this.debounceSelect = debounceUtil_1_1.debounce(this.onSelect, 500, {
        leading: true,
        trailing: false
      });
    }
    renderArrow() {
      let e = !this.isLeaf();
      let {
        loading: t,
        expanded: n,
        showLine: i
      } = this.props;
      if (t) {
        return reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, {
          wrapperClassName: `${D}-spin-icon`
        });
      } else if (e) {
        return reactCoreLibraryReexport.createElement(y, {
          role: "button",
          "aria-label": `${n ? "Expand" : "Collapse"} the tree item`,
          className: `${D}-expand-icon`,
          size: "small",
          onClick: this.onExpand
        });
      } else if (i) {
        return this.renderSwitcher();
      } else {
        return reactCoreLibraryReexport.createElement("span", {
          className: `${D}-empty-icon`
        });
      }
    }
    renderCheckbox() {
      let {
        checked: e,
        halfChecked: t,
        eventKey: n
      } = this.props;
      let i = this.isDisabled();
      return reactCoreLibraryReexport.createElement("div", {
        role: "none",
        onClick: this.onCheck,
        onKeyPress: this.handleCheckEnterPress
      }, reactCoreLibraryReexport.createElement(checkboxComponent.CheckboxComponent, {
        "aria-label": "Toggle the checked state of checkbox",
        value: n,
        indeterminate: t,
        checked: e,
        disabled: !!i
      }));
    }
    renderIcon() {
      let e;
      let {
        directory: t,
        treeIcon: n
      } = this.context;
      let {
        expanded: i,
        icon: a
      } = this.props;
      let r = !this.isLeaf();
      let s = a || n;
      if (s || t) {
        e = s ? a || n : r ? i ? reactCoreLibraryReexport.createElement(m, {
          className: `${D}-item-icon`
        }) : reactCoreLibraryReexport.createElement(C, {
          className: `${D}-item-icon`
        }) : reactCoreLibraryReexport.createElement(fileIconComponent.FileIcon, {
          className: `${D}-item-icon`
        });
      }
      return e;
    }
    renderEmptyNode() {
      let {
        emptyContent: e
      } = this.props;
      let t = h(D, {
        [`${D}-empty`]: true
      });
      return reactCoreLibraryReexport.createElement("ul", {
        className: t
      }, reactCoreLibraryReexport.createElement("li", {
        className: `${D}-label ${D}-label-empty`,
        "x-semi-prop": "emptyContent"
      }, e));
    }
    render() {
      let e = this.props;
      let {
        eventKey: t,
        expanded: n,
        selected: s,
        checked: o,
        halfChecked: d,
        loading: c,
        active: p,
        level: u,
        empty: g,
        filtered: f,
        treeNodeFilterProp: y,
        display: b,
        style: m,
        isEnd: C,
        showLine: E
      } = e;
      let v = N(e, ["eventKey", "expanded", "selected", "checked", "halfChecked", "loading", "active", "level", "empty", "filtered", "treeNodeFilterProp", "display", "style", "isEnd", "showLine"]);
      if (g) {
        return this.renderEmptyNode();
      }
      let {
        multiple: x,
        draggable: k,
        renderFullLabel: O,
        dragOverNodeKey: w,
        dropPosition: P,
        labelEllipsis: T
      } = this.context;
      let K = C[C.length - 1];
      let _ = this.isDisabled();
      let Z = w === t && P === -1;
      let I = w === t && P === 1;
      let j = h(D, {
        [`${D}-level-${u + 1}`]: true,
        [`${D}-fullLabel-level-${u + 1}`]: O,
        [`${D}-collapsed`]: !n,
        [`${D}-disabled`]: !!_,
        [`${D}-selected`]: s,
        [`${D}-active`]: !x && p,
        [`${D}-ellipsis`]: T,
        [`${D}-drag-over`]: !_ && w === t && P === 0,
        [`${D}-draggable`]: !_ && k && !O,
        [`${D}-fullLabel-draggable`]: !_ && k && O,
        [`${D}-fullLabel-drag-over-gap-top`]: !_ && Z && O,
        [`${D}-fullLabel-drag-over-gap-bottom`]: !_ && I && O,
        [`${D}-tree-node-last-leaf`]: K
      });
      let R = {
        onClick: this.onClick,
        onContextMenu: this.onContextMenu,
        onDoubleClick: this.onDoubleClick,
        className: j,
        onExpand: this.onExpand,
        data: v.data,
        level: u,
        onCheck: this.onCheck,
        style: m,
        expandIcon: this.renderArrow(),
        checkStatus: {
          checked: o,
          halfChecked: d
        },
        expandStatus: {
          expanded: n,
          loading: c
        },
        filtered: f,
        searchWord: v.keyword
      };
      let $ = {
        onDoubleClick: this.onDoubleClick,
        onDragStart: k ? this.onDragStart : undefined,
        onDragEnter: k ? this.onDragEnter : undefined,
        onDragOver: k ? this.onDragOver : undefined,
        onDragLeave: k ? this.onDragLeave : undefined,
        onDrop: k ? this.onDrop : undefined,
        onDragEnd: k ? this.onDragEnd : undefined,
        draggable: !_ && k || undefined
      };
      if (O) {
        let e = O(Object.assign({}, R));
        if (k) {
          return reactCoreLibraryReexport.cloneElement(e, Object.assign({
            ref: this.setRef
          }, $));
        } else if (isEmptyUtil.isEmpty(m)) {
          return e;
        } else {
          return reactCoreLibraryReexport.cloneElement(e, {
            style: Object.assign(Object.assign({}, objectPathGetDefault.getObjectPathDefault(e, ["props", "style"])), m)
          });
        }
      }
      let L = h(`${D}-label`, {
        [`${D}-drag-over-gap-top`]: !_ && Z,
        [`${D}-drag-over-gap-bottom`]: !_ && I
      });
      let A = objectPathGetDefault.getObjectPathDefault(v, ["data", "children", "length"]);
      let M = isStringTypeCheck.isString(v.pos) ? Number(v.pos.split("-")[u + 1]) + 1 : 1;
      return reactCoreLibraryReexport.createElement("li", Object.assign({
        className: j,
        role: "treeitem",
        "aria-disabled": _,
        "aria-checked": o,
        "aria-selected": s,
        "aria-setsize": A,
        "aria-posinset": M,
        "aria-expanded": n,
        "aria-level": u + 1,
        "data-key": t,
        onClick: this.onClick,
        onKeyPress: this.handleliEnterPress,
        onContextMenu: this.onContextMenu,
        onDoubleClick: this.onDoubleClick,
        ref: this.setRef,
        style: m
      }, $), reactCoreLibraryReexport.createElement(S, {
        showLine: E,
        prefixcls: D,
        level: u,
        isEnd: C
      }), this.renderArrow(), reactCoreLibraryReexport.createElement("span", {
        className: L
      }, x ? this.renderCheckbox() : null, this.renderIcon(), reactCoreLibraryReexport.createElement("span", {
        className: `${D}-label-text`
      }, this.renderRealLabel())));
    }
  }
  O.contextType = createReactContext.ReactContext;
  O.propTypes = {
    expanded: p.bool,
    selected: p.bool,
    checked: p.bool,
    halfChecked: p.bool,
    active: p.bool,
    disabled: p.bool,
    loaded: p.bool,
    loading: p.bool,
    isLeaf: p.bool,
    pos: p.string,
    children: p.oneOfType([p.array, p.object]),
    icon: p.node,
    directory: p.bool,
    keyword: p.string,
    treeNodeFilterProp: p.string,
    selectedKey: p.string,
    motionKey: p.oneOfType([p.string, p.arrayOf(p.string)]),
    isEnd: p.arrayOf(p.bool),
    showLine: p.bool
  };
  O.defaultProps = {
    selectedKey: "",
    motionKey: ""
  };
  require.d(exports, {
    TreeNode: function () {
      return O;
    }
  });
}