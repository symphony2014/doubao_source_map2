// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TreeComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 460649
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var u = propTypesFactoryWrapper;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var treeDataUtilityHelpers = require("tree-data-utility-helpers") /*id: 869686*/;
  class m extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.clearDragState = () => {
        this._adapter.updateState({
          dragOverNodeKey: "",
          dragging: false
        });
      };
    }
    _isMultiple() {
      return this.getProp("multiple");
    }
    _isAnimated() {
      return this.getProp("motion");
    }
    _isDisabled(e = {}) {
      return this.getProp("disabled") || e.disabled;
    }
    _isExpandControlled() {
      return !isUndefinedCheck.isUndefined(this.getProp("expandedKeys"));
    }
    _isLoadControlled() {
      return !isUndefinedCheck.isUndefined(this.getProp("loadedKeys"));
    }
    _isFilterable() {
      return !!this.getProp("filterTreeNode");
    }
    _showFilteredOnly() {
      let {
        inputValue: e
      } = this.getStates();
      let {
        showFilteredOnly: t
      } = this.getProps();
      return !!e && t;
    }
    getTreeNodeProps(e) {
      let {
        expandedKeys: t = new Set([]),
        selectedKeys: n = [],
        checkedKeys: i = new Set([]),
        halfCheckedKeys: a = new Set([]),
        realCheckedKeys: r = new Set([]),
        keyEntities: s = {},
        filteredKeys: o = new Set([]),
        inputValue: l = "",
        loadedKeys: d = new Set([]),
        loadingKeys: h = new Set([]),
        filteredExpandedKeys: c = new Set([]),
        disabledKeys: p = new Set([])
      } = this.getStates();
      let {
        treeNodeFilterProp: u,
        checkRelation: g
      } = this.getProps();
      let f = s[e];
      if (!f) {
        return null;
      }
      let y = false;
      let b = false;
      if (g === "related") {
        y = i.has(e);
        b = a.has(e);
      } else if (g === "unRelated") {
        y = r.has(e);
        b = false;
      }
      let m = {
        eventKey: e,
        expanded: l ? c.has(e) : t.has(e),
        selected: n.includes(e),
        checked: y,
        halfChecked: b,
        pos: String(f ? f.pos : ""),
        level: f.level,
        filtered: o.has(e),
        loading: h.has(e) && !d.has(e),
        loaded: d.has(e),
        keyword: l,
        treeNodeFilterProp: u
      };
      if (this.getProp("disableStrictly") && p.has(e)) {
        m.disabled = true;
      }
      return m;
    }
    notifyJsonChange(e, t) {
      let n = this.getProp("treeDataSimpleJson");
      let i = treeDataUtilityHelpers.ensureArrayFormat(e).map(e => e.replace("-", "."));
      let r = throttledPathFilterStringify.throttledPathStr(n, i);
      this._adapter.notifyChange(r);
    }
    notifyMultipleChange(e, t) {
      let n;
      let {
        keyEntities: i
      } = this.getStates();
      let {
        leafOnly: a,
        checkRelation: r,
        keyMaps: s
      } = this.getProps();
      let o = [];
      if (r === "related") {
        o = treeDataUtilityHelpers.getRootCheckedKeys(e, i, a);
      } else if (r === "unRelated") {
        o = e;
      }
      n = this.getProp("onChangeWithObject") ? o.map(e => i[e].data) : treeDataUtilityHelpers.extractNodeValues(o.map(e => i[e].data), s);
      this._adapter.notifyChange(n);
    }
    notifyChange(e, t) {
      let n = this._isMultiple();
      let {
        keyMaps: i
      } = this.getProps();
      let {
        keyEntities: a
      } = this.getStates();
      if (this.getProp("treeDataSimpleJson")) {
        this.notifyJsonChange(e, t);
      } else if (n) {
        this.notifyMultipleChange(e, t);
      } else {
        let t;
        if (this.getProp("onChangeWithObject")) {
          t = objectPathGetDefault.getObjectPathDefault(a, e).data;
        } else {
          let {
            data: n
          } = objectPathGetDefault.getObjectPathDefault(a, e);
          t = treeDataUtilityHelpers.extractNodeValues(n, i);
        }
        this._adapter.notifyChange(t);
      }
    }
    handleInputChange(e) {
      this._adapter.updateInputValue(e);
      let {
        expandedKeys: t,
        selectedKeys: n,
        keyEntities: i,
        treeData: a
      } = this.getStates();
      let {
        showFilteredOnly: r,
        filterTreeNode: o,
        treeNodeFilterProp: l,
        keyMaps: d
      } = this.getProps();
      let h = l !== "label" ? l : objectPathGetDefault.getObjectPathDefault(d, "label", "label");
      let c = [];
      let p = [];
      let u = [];
      let g = new Set([]);
      if (e) {
        c = Object.values(i).filter(t => treeDataUtilityHelpers.matchFilterNode(e, t.data, o, h)).map(e => e.key);
        p = treeDataUtilityHelpers.getParentPathKeys(c, i, false);
        g = new Set([...treeDataUtilityHelpers.collectChildKeys(c, i, true), ...p]);
        u = treeDataUtilityHelpers.flattenTreeToNodes(a, new Set(p), d, r && g);
      } else {
        (p = treeDataUtilityHelpers.getParentPathKeys(n, i)).forEach(e => t.add(e));
        u = treeDataUtilityHelpers.flattenTreeToNodes(a, t, d);
      }
      let f = new Set(p);
      this._adapter.notifySearch(e, Array.from(f));
      this._adapter.updateState({
        expandedKeys: t,
        flattenNodes: u,
        motionKeys: new Set([]),
        filteredKeys: new Set(c),
        filteredExpandedKeys: f,
        filteredShownKeys: g
      });
    }
    handleNodeSelect(e, t) {
      if (!this._isDisabled(t)) {
        if (this._isMultiple()) {
          this.handleMultipleSelect(e, t);
        } else {
          this.handleSingleSelect(e, t);
        }
      }
    }
    handleNodeRightClick(e, t) {
      this._adapter.notifyRightClick(e, t.data);
    }
    handleNodeDoubleClick(e, t) {
      this._adapter.notifyDoubleClick(e, t.data);
    }
    handleSingleSelect(e, t) {
      let n = [...this.getState("selectedKeys")];
      let {
        selected: i,
        eventKey: a,
        data: r
      } = t;
      this._adapter.notifySelect(a, true, r);
      if (!i) {
        if (!n.includes(a)) {
          n = [a];
          this.notifyChange(a, e);
          if (!this._isControlledComponent()) {
            this._adapter.updateState({
              selectedKeys: n
            });
          }
        }
      }
    }
    calcCheckedKeys(e, t) {
      let {
        keyEntities: n
      } = this.getStates();
      let i = new Set(this.getState("checkedKeys"));
      let a = new Set(this.getState("halfCheckedKeys"));
      if (t) {
        return treeDataUtilityHelpers.handleCheckState(e, n, i, a);
      } else {
        return treeDataUtilityHelpers.handleUncheckState(e, n, i, a);
      }
    }
    calcCheckedStatus(e, t) {
      if (!e) {
        return e;
      }
      let {
        checkedKeys: n,
        keyEntities: i,
        disabledKeys: a
      } = this.getStates();
      let r = treeDataUtilityHelpers.getRootCheckedKeys(treeDataUtilityHelpers.collectChildKeys([t], i, false), i, true);
      if (r.some(e => a.has(e))) {
        return !r.filter(e => !a.has(e)).every(e => n.has(e));
      } else {
        return e;
      }
    }
    calcNonDisabledCheckedKeys(e, t) {
      let {
        keyEntities: n,
        disabledKeys: i
      } = this.getStates();
      let a = new Set(this.getState("checkedKeys"));
      let r = treeDataUtilityHelpers.getRootCheckedKeys(treeDataUtilityHelpers.collectChildKeys([e], n, false), n, true);
      if (!r.some(e => i.has(e))) {
        return this.calcCheckedKeys(e, t);
      }
      let s = r.filter(e => !i.has(e));
      let o = t ? [...s, ...a] : throttledArrayDiffUtil.throttledArrayDiff(treeDataUtilityHelpers.getRootCheckedKeys([...a], n, true), s);
      return treeDataUtilityHelpers.calcCheckedStates(o, n);
    }
    handleMultipleSelect(e, t) {
      let {
        disableStrictly: n,
        checkRelation: i
      } = this.getProps();
      let {
        realCheckedKeys: a
      } = this.getStates();
      let {
        checked: r,
        eventKey: s,
        data: o
      } = t;
      if (i === "related") {
        let t = n ? this.calcCheckedStatus(!r, s) : !r;
        let {
          checkedKeys: i,
          halfCheckedKeys: a
        } = n ? this.calcNonDisabledCheckedKeys(s, t) : this.calcCheckedKeys(s, t);
        this._adapter.notifySelect(s, t, o);
        this.notifyChange([...i], e);
        if (!this._isControlledComponent()) {
          this._adapter.updateState({
            checkedKeys: i,
            halfCheckedKeys: a
          });
        }
      } else if (i === "unRelated") {
        let t;
        let n = new Set(a);
        if (a.has(s)) {
          n.delete(s);
          t = false;
        } else {
          n.add(s);
          t = true;
        }
        this._adapter.notifySelect(s, t, o);
        this.notifyChange([...n], e);
        if (!this._isControlledComponent()) {
          this._adapter.updateState({
            realCheckedKeys: n
          });
        }
      }
    }
    setExpandedStatus(e) {
      let {
        inputValue: t,
        treeData: n,
        filteredShownKeys: i,
        keyEntities: a
      } = this.getStates();
      let {
        keyMaps: r
      } = this.getProps();
      let s = !!t;
      let o = this._showFilteredOnly();
      let l = s ? "filteredExpandedKeys" : "expandedKeys";
      let d = new Set(this.getState(l));
      let h = "show";
      let {
        eventKey: c,
        expanded: p,
        data: u
      } = e;
      if (p) {
        if (d.has(c)) {
          d.delete(c);
          h = "hide";
        }
      } else {
        d.add(c);
      }
      this._adapter.cacheFlattenNodes(h === "hide" && this._isAnimated());
      if (!this._isExpandControlled()) {
        let e = treeDataUtilityHelpers.flattenTreeToNodes(n, d, r, s && o && i);
        let t = this._isAnimated() ? treeDataUtilityHelpers.getChildKeys(c, d, a) : [];
        let p = {
          [l]: d,
          flattenNodes: e,
          motionKeys: new Set(t),
          motionType: h
        };
        this._adapter.updateState(p);
      }
      return {
        expandedKeys: d,
        expanded: !p,
        data: u
      };
    }
    handleNodeExpand(e, t) {
      let {
        loadData: n
      } = this.getProps();
      if (!n && (!t.children || !t.children.length)) {
        return;
      }
      let {
        expandedKeys: i,
        data: a,
        expanded: r
      } = this.setExpandedStatus(t);
      this._adapter.notifyExpand(i, {
        expanded: r,
        node: a
      });
    }
    handleNodeLoad(e, t, n, i) {
      let {
        loadData: a,
        onLoad: r
      } = this.getProps();
      let {
        key: s
      } = n;
      if (!a || e.has(s) || t.has(s)) {
        return {};
      } else {
        a(n).then(() => {
          let e = new Set(this.getState("loadedKeys"));
          let t = new Set(this.getState("loadingKeys"));
          let a = e.add(s);
          let o = new Set([...t]);
          o.delete(s);
          if (r) {
            r(a, n);
          }
          if (!this._isLoadControlled()) {
            this._adapter.updateState({
              loadedKeys: a
            });
          }
          this._adapter.setState({
            loadingKeys: o
          });
          i();
        });
        return {
          loadingKeys: t.add(s)
        };
      }
    }
    getDragEventNodeData(e) {
      return Object.assign(Object.assign({}, e.data), throttledPathFilterStringify.throttledPathStr(e, ["expanded", "pos", "children"]));
    }
    triggerDragEvent(e, t, n, i = {}) {
      let a = this.getProp(e);
      if (a) {
        a(Object.assign({
          event: t,
          node: this.getDragEventNodeData(n)
        }, i));
      }
    }
    handleNodeDragStart(e, t) {
      let {
        keyEntities: n
      } = this.getStates();
      let {
        hideDraggingNode: i,
        renderDraggingNode: a
      } = this.getProps();
      let {
        eventKey: r,
        nodeInstance: s,
        data: o
      } = t;
      if (i || a) {
        let t;
        if (typeof a == "function") {
          t = a(s, o);
        } else if (i) {
          (t = s.cloneNode(true)).style.opacity = 0;
        }
        document.body.appendChild(t);
        e.dataTransfer.setDragImage(t, 0, 0);
      }
      this._adapter.setDragNode(t);
      this._adapter.updateState({
        dragging: true,
        dragNodesKeys: new Set(treeDataUtilityHelpers.getDescendantKeys(r, n))
      });
      this.triggerDragEvent("onDragStart", e, t);
    }
    handleNodeDragEnter(e, t, n) {
      let {
        dragging: i,
        dragNodesKeys: a
      } = this.getStates();
      let {
        autoExpandWhenDragEnter: r
      } = this.getProps();
      let {
        pos: s,
        eventKey: o,
        expanded: l
      } = t;
      if (!n || a.has(o)) {
        return;
      }
      let d = treeDataUtilityHelpers.calcDropPosition(e, t);
      if (n.eventKey === o && d === 0) {
        this._adapter.updateState({
          dragOverNodeKey: "",
          dropPosition: null
        });
        return;
      }
      setTimeout(() => {
        this._adapter.updateState({
          dragOverNodeKey: o,
          dropPosition: d
        });
        if (!r || l) {
          this.triggerDragEvent("onDragEnter", e, t);
          return;
        }
        this.delayedDragEnterLogic ||= {};
        Object.keys(this.delayedDragEnterLogic).forEach(e => {
          clearTimeout(this.delayedDragEnterLogic[e]);
        });
        this.delayedDragEnterLogic[s] = window.setTimeout(() => {
          if (!i) {
            return;
          }
          let {
            expandedKeys: n
          } = this.setExpandedStatus(t);
          this.triggerDragEvent("onDragEnter", e, t, {
            expandedKeys: [...n]
          });
        }, 400);
      }, 0);
    }
    handleNodeDragOver(e, t, n) {
      let {
        dropPosition: i,
        dragNodesKeys: a,
        dragOverNodeKey: r
      } = this.getStates();
      let {
        eventKey: s
      } = t;
      if (!a.has(s)) {
        if (n && s === r) {
          let n = treeDataUtilityHelpers.calcDropPosition(e, t);
          if (i === n) {
            return;
          }
          this._adapter.updateState({
            dropPosition: n
          });
        }
        this.triggerDragEvent("onDragOver", e, t);
      }
    }
    handleNodeDragLeave(e, t) {
      this._adapter.updateState({
        dragOverNodeKey: ""
      });
      this.triggerDragEvent("onDragLeave", e, t);
    }
    handleNodeDragEnd(e, t) {
      this.clearDragState();
      this.triggerDragEvent("onDragEnd", e, t);
      this._adapter.setDragNode(null);
    }
    handleNodeDrop(e, t, n) {
      let {
        dropPosition: i,
        dragNodesKeys: a
      } = this.getStates();
      let {
        eventKey: r,
        pos: s
      } = t;
      this.clearDragState();
      if (a.has(r)) {
        return;
      }
      let o = {
        dragNode: n ? this.getDragEventNodeData(n) : null,
        dragNodesKeys: [...a],
        dropPosition: treeDataUtilityHelpers.calcPositionNumber(s, i),
        dropToGap: i !== 0
      };
      this.triggerDragEvent("onDrop", e, t, o);
      this._adapter.setDragNode(null);
    }
  }
  var treeUiConstants = require("tree-ui-constants") /*id: 259049*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var reactDeepCloneUtil = require("react-deep-clone-util") /*id: 767669*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var reactVirtualListCore = require("react-virtual-list-core") /*id: 676834*/;
  var autoHeightWrapperComponent = require("auto-height-wrapper-component") /*id: 119148*/;
  var createReactContext = require("create-react-context") /*id: 435688*/;
  var treeNodeComponent = require("tree-node-component") /*id: 416604*/;
  var reactTreeMotionRenderer = require("react-tree-motion-renderer") /*id: 192551*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  require("empty-module_7") /*id: 885379*/;
  var searchIconComponent = require("search-icon-component") /*id: 879883*/;
  var checkboxGroupComponent = require("checkbox-group-component") /*id: 654013*/;
  function K(e, t) {
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
  let _ = treeUiConstants.TreePrefixes.PREFIX;
  class Z extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.search = e => {
        this.foundation.handleInputChange(e);
      };
      this.scrollTo = e => {
        var t;
        let {
          key: n,
          align: i = "center"
        } = e;
        let {
          flattenNodes: a
        } = this.state;
        if (n) {
          let e = a == null ? undefined : a.findIndex(e => e.key === n);
          if (e >= 0) {
            if ((t = this.virtualizedListRef.current) !== null && t !== undefined) {
              t.scrollToItem(e, i);
            }
          }
        }
      };
      this.renderEmpty = () => {
        let {
          emptyContent: e
        } = this.props;
        if (e) {
          return reactCoreLibraryReexport.createElement(treeNodeComponent.TreeNode, {
            empty: true,
            emptyContent: this.props.emptyContent
          });
        } else {
          return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "Tree"
          }, e => reactCoreLibraryReexport.createElement(treeNodeComponent.TreeNode, {
            empty: true,
            emptyContent: objectPathGetDefault.getObjectPathDefault(e, "emptyText")
          }));
        }
      };
      this.onNodeSelect = (e, t) => {
        this.foundation.handleNodeSelect(e, t);
      };
      this.onNodeLoad = e => new Promise(t => {
        this.setState(n => {
          let {
            loadedKeys: i = new Set([]),
            loadingKeys: a = new Set([])
          } = n;
          return this.foundation.handleNodeLoad(i, a, e, t);
        });
      });
      this.onNodeCheck = (e, t) => {
        this.foundation.handleNodeSelect(e, t);
      };
      this.onNodeExpand = (e, t) => {
        this.foundation.handleNodeExpand(e, t);
      };
      this.onNodeRightClick = (e, t) => {
        this.foundation.handleNodeRightClick(e, t);
      };
      this.onNodeDoubleClick = (e, t) => {
        this.foundation.handleNodeDoubleClick(e, t);
      };
      this.onNodeDragStart = (e, t) => {
        this.foundation.handleNodeDragStart(e, t);
      };
      this.onNodeDragEnter = (e, t) => {
        this.foundation.handleNodeDragEnter(e, t, this.dragNode);
      };
      this.onNodeDragOver = (e, t) => {
        this.foundation.handleNodeDragOver(e, t, this.dragNode);
      };
      this.onNodeDragLeave = (e, t) => {
        this.foundation.handleNodeDragLeave(e, t);
      };
      this.onNodeDragEnd = (e, t) => {
        this.foundation.handleNodeDragEnd(e, t);
      };
      this.onNodeDrop = (e, t) => {
        this.foundation.handleNodeDrop(e, t, this.dragNode);
      };
      this.getTreeNodeRequiredProps = () => {
        let {
          expandedKeys: e,
          selectedKeys: t,
          checkedKeys: n,
          halfCheckedKeys: i,
          keyEntities: a,
          filteredKeys: r
        } = this.state;
        return {
          expandedKeys: e || new Set(),
          selectedKeys: t || [],
          checkedKeys: n || new Set(),
          halfCheckedKeys: i || new Set(),
          filteredKeys: r || new Set(),
          keyEntities: a
        };
      };
      this.getTreeNodeKey = e => {
        let {
          data: t
        } = e;
        let {
          key: n
        } = t;
        return n;
      };
      this.renderTreeNode = (e, t, n) => {
        let {
          data: r,
          key: o
        } = e;
        let h = this.foundation.getTreeNodeProps(o);
        if (!h) {
          return null;
        }
        let {
          keyMaps: c,
          showLine: p
        } = this.props;
        let u = throttledPathFilterStringify.throttledPathStr(e, ["key", "label", "disabled", "isLeaf", "icon", "isEnd"]);
        let g = r[objectPathGetDefault.getObjectPathDefault(c, "children", "children")];
        if (!isUndefinedCheck.isUndefined(g)) {
          u.children = g;
        }
        return reactCoreLibraryReexport.createElement(treeNodeComponent.TreeNode, Object.assign({}, h, r, u, {
          showLine: p,
          data: r,
          style: isEmptyUtil.isEmpty(n) ? {} : n
        }));
      };
      this.itemKey = (e, t) => t[e].key;
      this.option = e => {
        let {
          index: t,
          style: n,
          data: i
        } = e;
        return this.renderTreeNode(i[t], t, n);
      };
      this.state = {
        inputValue: "",
        keyEntities: {},
        treeData: [],
        flattenNodes: [],
        selectedKeys: [],
        checkedKeys: new Set(),
        halfCheckedKeys: new Set(),
        realCheckedKeys: new Set([]),
        motionKeys: new Set([]),
        motionType: "hide",
        expandedKeys: new Set(e.expandedKeys),
        filteredKeys: new Set(),
        filteredExpandedKeys: new Set(),
        filteredShownKeys: new Set(),
        prevProps: null,
        loadedKeys: new Set(),
        loadingKeys: new Set(),
        cachedFlattenNodes: undefined,
        cachedKeyValuePairs: {},
        disabledKeys: new Set(),
        dragging: false,
        dragNodesKeys: new Set(),
        dragOverNodeKey: null,
        dropPosition: null
      };
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.optionsRef = reactCoreLibraryReexport.createRef();
      this.foundation = new m(this.adapter);
      this.dragNode = null;
      this.virtualizedListRef = reactCoreLibraryReexport.createRef();
    }
    static getDerivedStateFromProps(e, t) {
      let i;
      let {
        prevProps: a
      } = t;
      let {
        keyMaps: r
      } = e;
      let s = t.keyEntities || {};
      let l = t.cachedKeyValuePairs || {};
      let d = !!e.filterTreeNode && !!t.inputValue && !!t.inputValue.length;
      let h = {
        prevProps: e
      };
      let c = "expandedKeys" in e;
      let p = t => {
        let n = !a && t in e;
        let i = a && !deepEqualUtil_1.deepEqual(a[t], e[t]);
        return n || i;
      };
      let u = p("treeData");
      let g = p("treeDataSimpleJson");
      if (u || e.draggable && (() => {
        let t = !a && "treeData" in e;
        let n = a && a.treeData !== e.treeData;
        return t || n;
      })()) {
        i = e.treeData;
        h.treeData = i;
        let t = treeDataUtilityHelpers.buildTreeEntities(i, r);
        h.keyEntities = Object.assign({}, t.keyEntities);
        s = h.keyEntities;
        h.cachedKeyValuePairs = Object.assign({}, t.valueEntities);
        l = h.cachedKeyValuePairs;
      } else if (g) {
        i = treeDataUtilityHelpers.convertObjectToTree(e.treeDataSimpleJson);
        h.treeData = i;
        let t = treeDataUtilityHelpers.buildTreeEntities(i, r);
        h.keyEntities = Object.assign({}, t.keyEntities);
        s = h.keyEntities;
        h.cachedKeyValuePairs = Object.assign({}, t.valueEntities);
        l = h.cachedKeyValuePairs;
      }
      if (i && e.motion && a && e.motion) {
        h.motionKeys = new Set([]);
        h.motionType = null;
      }
      let f = g || u;
      let y = f && e.expandAll;
      if (d) {
        let n;
        if (i) {
          n = treeDataUtilityHelpers.filterTreeWithSearch({
            treeData: i,
            inputValue: t.inputValue,
            filterTreeNode: e.filterTreeNode,
            filterProps: e.treeNodeFilterProp,
            showFilteredOnly: e.showFilteredOnly,
            keyEntities: h.keyEntities,
            prevExpandedKeys: [...t.filteredExpandedKeys],
            keyMaps: r
          });
          h.flattenNodes = n.flattenNodes;
          h.motionKeys = new Set([]);
          h.filteredKeys = n.filteredKeys;
          h.filteredShownKeys = n.filteredShownKeys;
          h.filteredExpandedKeys = n.filteredExpandedKeys;
        }
        if (e.expandedKeys) {
          h.filteredExpandedKeys = treeDataUtilityHelpers.getParentKeysSet(e.expandedKeys, s, e.autoExpandParent || !a);
          if (a && e.motion) {
            let n = t ? t.filteredExpandedKeys : new Set([]);
            if (!i) {
              let i = treeDataUtilityHelpers.calcMotionType(n, h.filteredExpandedKeys, s);
              let {
                motionKeys: a
              } = i;
              let {
                motionType: r
              } = i;
              if (e.showFilteredOnly) {
                a = a.filter(e => t.filteredShownKeys.has(e));
              }
              if (r === "hide") {
                h.cachedFlattenNodes = reactDeepCloneUtil.reactDeepClone(t.flattenNodes);
              }
              h.motionKeys = new Set(a);
              h.motionType = r;
            }
          }
          h.flattenNodes = treeDataUtilityHelpers.flattenTreeToNodes(i || t.treeData, h.filteredExpandedKeys || t.filteredExpandedKeys, r, e.showFilteredOnly && t.filteredShownKeys);
        }
      } else {
        if (p("expandedKeys") || a && p("autoExpandParent")) {
          h.expandedKeys = treeDataUtilityHelpers.getParentKeysSet(e.expandedKeys, s, e.autoExpandParent || !a);
          if (a && e.motion && !i) {
            let {
              motionKeys: e,
              motionType: n
            } = treeDataUtilityHelpers.calcMotionType(t.expandedKeys, h.expandedKeys, s);
            h.motionKeys = new Set(e);
            h.motionType = n;
            if (n === "hide") {
              h.cachedFlattenNodes = reactDeepCloneUtil.reactDeepClone(t.flattenNodes);
            }
          }
        } else if (!a && (e.defaultExpandAll || e.expandAll) || y) {
          h.expandedKeys = new Set(Object.keys(s));
        } else if (!a && e.defaultExpandedKeys) {
          h.expandedKeys = treeDataUtilityHelpers.getParentKeysSet(e.defaultExpandedKeys, s);
        } else if (!a && e.defaultValue) {
          h.expandedKeys = treeDataUtilityHelpers.createCheckedKeysSet(e.defaultValue, s, e.multiple, l);
        } else if (!a && e.value) {
          h.expandedKeys = treeDataUtilityHelpers.createCheckedKeysSet(e.value, s, e.multiple, l);
        } else if (!c && f && e.value && (!t.treeData || !(t.treeData?.length > 0) || !e.loadData)) {
          h.expandedKeys = treeDataUtilityHelpers.createCheckedKeysSet(e.value, s, e.multiple, l);
        }
        if (!h.expandedKeys) {
          delete h.expandedKeys;
        }
        if (i || h.expandedKeys) {
          let e = treeDataUtilityHelpers.flattenTreeToNodes(i || t.treeData, h.expandedKeys || t.expandedKeys, r);
          h.flattenNodes = e;
        }
      }
      let m = e.onChangeWithObject;
      let C = e.multiple;
      if (C) {
        let n;
        if (p("value")) {
          n = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, m, r), l, C);
        } else if (!a && e.defaultValue) {
          n = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.defaultValue, m, r), l, C);
        } else if (i) {
          n = e.value ? treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, m, r) || [], l, C) : treeDataUtilityHelpers.filterExistingKeys(e.checkRelation === "related" ? t.checkedKeys : t.realCheckedKeys, s);
        }
        if (n) {
          if (e.checkRelation === "unRelated") {
            h.realCheckedKeys = new Set(n);
          } else if (e.checkRelation === "related") {
            let {
              checkedKeys: e,
              halfCheckedKeys: t
            } = treeDataUtilityHelpers.calcCheckedStates(n, s);
            h.checkedKeys = e;
            h.halfCheckedKeys = t;
          }
        }
      } else if (p("value")) {
        h.selectedKeys = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, m, r), l, C);
      } else if (!a && e.defaultValue) {
        h.selectedKeys = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.defaultValue, m, r), l, C);
      } else if (i && e.value) {
        h.selectedKeys = treeDataUtilityHelpers.resolveValuesFromMap(treeDataUtilityHelpers.convertValuesByConfig(e.value, m, r) || "", l, C);
      }
      if (p("loadedKeys")) {
        h.loadedKeys = new Set(e.loadedKeys);
      }
      if (i && e.disableStrictly && e.checkRelation === "related") {
        h.disabledKeys = treeDataUtilityHelpers.getDisabledCheckedKeys(s, r);
      }
      return h;
    }
    get adapter() {
      return Object.assign(Object.assign(Object.assign({}, super.adapter), {
        updateInputValue: e => {
          this.setState({
            inputValue: e
          });
        },
        focusInput: () => {
          let {
            preventScroll: e
          } = this.props;
          if (this.inputRef && this.inputRef.current) {
            this.inputRef.current.focus({
              preventScroll: e
            });
          }
        }
      }), {
        updateState: e => {
          this.setState(Object.assign({}, e));
        },
        notifyExpand: (e, t) => {
          let {
            expanded: n,
            node: i
          } = t;
          if (this.props.onExpand) {
            this.props.onExpand([...e], {
              expanded: n,
              node: i
            });
          }
          if (n && this.props.loadData) {
            this.onNodeLoad(i);
          }
        },
        notifySelect: (e, t, n) => {
          if (this.props.onSelect) {
            this.props.onSelect(e, t, n);
          }
        },
        notifyChange: e => {
          if (this.props.onChange) {
            this.props.onChange(e);
          }
        },
        notifySearch: (e, t) => {
          if (this.props.onSearch) {
            this.props.onSearch(e, t);
          }
        },
        notifyRightClick: (e, t) => {
          if (this.props.onContextMenu) {
            this.props.onContextMenu(e, t);
          }
        },
        notifyDoubleClick: (e, t) => {
          if (this.props.onDoubleClick) {
            this.props.onDoubleClick(e, t);
          }
        },
        cacheFlattenNodes: e => {
          this.setState({
            cachedFlattenNodes: e ? reactDeepCloneUtil.reactDeepClone(this.state.flattenNodes) : undefined
          });
        },
        setDragNode: e => {
          this.dragNode = e;
        }
      });
    }
    renderInput() {
      let {
        searchClassName: e,
        searchStyle: t,
        searchRender: n,
        searchPlaceholder: i,
        showClear: a
      } = this.props;
      let o = c(`${_}-input`);
      let {
        inputValue: l
      } = this.state;
      let h = {
        value: l,
        className: o,
        onChange: e => this.search(e),
        prefix: reactCoreLibraryReexport.createElement(searchIconComponent.SearchIcon, null),
        showClear: a,
        placeholder: i
      };
      let p = c(`${_}-search-wrapper`, e);
      return reactCoreLibraryReexport.createElement("div", {
        className: p,
        style: t
      }, reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Tree"
      }, e => (h.placeholder = i || objectPathGetDefault.getObjectPathDefault(e, "searchPlaceholder"), isFunctionUtil_1.isFunction(n)) ? n(Object.assign({}, h)) : n === false ? null : reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({
        "aria-label": "Filter Tree",
        ref: this.inputRef
      }, h))));
    }
    renderNodeList() {
      let {
        flattenNodes: e,
        cachedFlattenNodes: t,
        motionKeys: n,
        motionType: i
      } = this.state;
      let {
        virtualize: a,
        motion: r
      } = this.props;
      let {
        direction: s
      } = this.context;
      if (isEmptyUtil.isEmpty(e)) {
        return undefined;
      } else if (!a || isEmptyUtil.isEmpty(a)) {
        return reactCoreLibraryReexport.createElement(reactTreeMotionRenderer.TreeMotionRenderer, {
          flattenNodes: e,
          flattenList: t,
          motionKeys: r ? n : new Set([]),
          motionType: i,
          onMotionEnd: this.onMotionEnd,
          renderTreeNode: this.renderTreeNode
        });
      } else {
        return reactCoreLibraryReexport.createElement(autoHeightWrapperComponent.AutoHeightWrapper, {
          defaultHeight: a.height,
          defaultWidth: a.width
        }, t => {
          let {
            height: n,
            width: i
          } = t;
          return reactCoreLibraryReexport.createElement(reactVirtualListCore.FixedSizeList, {
            ref: this.virtualizedListRef,
            itemCount: e.length,
            itemSize: a.itemSize,
            height: n,
            width: i,
            itemKey: this.itemKey,
            itemData: e,
            className: `${_}-virtual-list`,
            style: {
              direction: s
            }
          }, this.option);
        });
      }
    }
    render() {
      let {
        keyEntities: e,
        motionKeys: t,
        motionType: n,
        inputValue: i,
        filteredKeys: a,
        dragOverNodeKey: r,
        dropPosition: s,
        checkedKeys: o,
        realCheckedKeys: h
      } = this.state;
      let p = this.props;
      let {
        blockNode: u,
        className: g,
        style: f,
        filterTreeNode: y,
        disabled: b,
        icon: m,
        directory: C,
        multiple: E,
        showFilteredOnly: v,
        showLine: x,
        motion: k,
        expandAction: S,
        loadData: D,
        renderLabel: O,
        draggable: w,
        renderFullLabel: P,
        labelEllipsis: Z,
        virtualize: I,
        checkRelation: j
      } = p;
      let R = K(p, ["blockNode", "className", "style", "filterTreeNode", "disabled", "icon", "directory", "multiple", "showFilteredOnly", "showLine", "motion", "expandAction", "loadData", "renderLabel", "draggable", "renderFullLabel", "labelEllipsis", "virtualize", "checkRelation"]);
      let $ = c(`${_}-wrapper`, g);
      let L = c(`${_}-option-list`, {
        [`${_}-option-list-block`]: u
      });
      let A = !!i && !a.size;
      let M = isEmptyUtil.isEmpty(e) || v && A;
      let H = {
        role: M ? "none" : "tree"
      };
      if (H.role === "tree") {
        H["aria-multiselectable"] = !!E;
      }
      return reactCoreLibraryReexport.createElement(createReactContext.ReactContext.Provider, {
        value: {
          treeDisabled: b,
          treeIcon: m,
          motion: k,
          motionKeys: t,
          motionType: n,
          filterTreeNode: y,
          keyEntities: e,
          onNodeClick: this.onNodeClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeRightClick: this.onNodeRightClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          renderTreeNode: this.renderTreeNode,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop,
          expandAction: S,
          directory: C,
          multiple: E,
          showFilteredOnly: v,
          isSearching: !!i,
          loadData: D,
          onNodeLoad: this.onNodeLoad,
          renderLabel: O,
          draggable: w,
          renderFullLabel: P,
          dragOverNodeKey: r,
          dropPosition: s,
          labelEllipsis: Z === undefined ? I : Z
        }
      }, reactCoreLibraryReexport.createElement("div", Object.assign({
        "aria-label": this.props["aria-label"],
        className: $,
        style: f
      }, this.getDataAttr(R)), y ? this.renderInput() : null, reactCoreLibraryReexport.createElement("div", Object.assign({
        className: L
      }, H), M ? this.renderEmpty() : E ? reactCoreLibraryReexport.createElement(checkboxGroupComponent.CheckboxGroup, {
        value: Array.from(j === "related" ? o : h)
      }, this.renderNodeList()) : this.renderNodeList())));
    }
  }
  Z.contextType = createContextProvider.context;
  Z.propTypes = {
    blockNode: u.bool,
    className: u.string,
    showClear: u.bool,
    defaultExpandAll: u.bool,
    defaultExpandedKeys: u.array,
    defaultValue: u.oneOfType([u.string, u.array]),
    directory: u.bool,
    disabled: u.bool,
    emptyContent: u.node,
    expandAll: u.bool,
    expandedKeys: u.array,
    filterTreeNode: u.oneOfType([u.func, u.bool]),
    icon: u.node,
    onChangeWithObject: u.bool,
    motion: u.bool,
    multiple: u.bool,
    onChange: u.func,
    onExpand: u.func,
    onSearch: u.func,
    onSelect: u.func,
    onContextMenu: u.func,
    onDoubleClick: u.func,
    searchClassName: u.string,
    searchPlaceholder: u.string,
    searchStyle: u.object,
    selectedKey: u.string,
    showFilteredOnly: u.bool,
    showLine: u.bool,
    style: u.object,
    treeData: u.arrayOf(u.shape({
      key: u.string,
      value: u.oneOfType([u.string, u.number]),
      label: u.any,
      isLeaf: u.bool
    })),
    keyMaps: u.object,
    treeDataSimpleJson: u.object,
    treeNodeFilterProp: u.string,
    value: u.oneOfType([u.string, u.number, u.array, u.object]),
    virtualize: u.object,
    autoExpandParent: u.bool,
    expandAction: u.oneOf(treeUiConstants.TreeActions.EXPAND_ACTION),
    searchRender: u.oneOfType([u.func, u.bool]),
    renderLabel: u.func,
    renderFullLabel: u.func,
    leafOnly: u.bool,
    loadedKeys: u.array,
    loadData: u.func,
    onLoad: u.func,
    disableStrictly: u.bool,
    draggable: u.bool,
    autoExpandWhenDragEnter: u.bool,
    hideDraggingNode: u.bool,
    renderDraggingNode: u.func,
    onDragEnd: u.func,
    onDragEnter: u.func,
    onDragLeave: u.func,
    onDragOver: u.func,
    onDragStart: u.func,
    onDrop: u.func,
    labelEllipsis: u.bool,
    checkRelation: u.string,
    "aria-label": u.string,
    preventScroll: u.bool
  };
  Z.defaultProps = {
    showClear: true,
    disabled: false,
    blockNode: true,
    multiple: false,
    filterTreeNode: false,
    autoExpandParent: false,
    treeNodeFilterProp: "label",
    defaultExpandAll: false,
    expandAll: false,
    onChangeWithObject: false,
    motion: true,
    leafOnly: false,
    showFilteredOnly: false,
    showLine: false,
    expandAction: false,
    disableStrictly: false,
    draggable: false,
    autoExpandWhenDragEnter: true,
    checkRelation: "related"
  };
  Z.TreeNode = treeNodeComponent.TreeNode;
  var I = Z;
  require.d(exports, {
    TreeComponent: function () {
      return I;
    }
  });
}