// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TabsComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23457.0bcdcee9.js
         * chunkId: 23457
         * moduleId: 826897
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var h = propTypesFactoryWrapper;
  var tabsComponentConstants = require("tabs-component-constants") /*id: 413067*/;
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  class m extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.destroy = emptyExportFunction.emptyFunction;
      this.handlePrevent = e => {
        e.stopPropagation();
        e.preventDefault();
      };
      this.handleKeyDown = (e, t, i) => {
        let {
          preventScroll: n
        } = this.getProps();
        let a = [...e.target.parentNode.childNodes].filter(e => objectPathGetDefault.getObjectPathDefault(e, "attributes.data-tabkey.value", "").includes("semiTab") && objectPathGetDefault.getObjectPathDefault(e, "attributes.aria-disabled.value", "") !== "true");
        switch (e.key) {
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "ArrowDown":
            this.determineOrientation(e, a);
            break;
          case "Backspace":
          case "Delete":
            this.handleDeleteKeyDown(e, a, t, i);
            break;
          case "Enter":
          case " ":
            this.handleTabClick(t, e);
            this.handlePrevent(e);
            break;
          case "Home":
            a[0].focus({
              preventScroll: n
            });
            this.handlePrevent(e);
            break;
          case "End":
            a[a.length - 1].focus({
              preventScroll: n
            });
            this.handlePrevent(e);
        }
      };
    }
    init() {
      this._adapter.collectPane();
    }
    _notifyChange(e) {
      let {
        activeKey: t
      } = this.getStates();
      if (t !== e) {
        this._adapter.notifyChange(e);
      }
    }
    handleTabClick(e, t) {
      if (this._isInProps("activeKey")) {
        this._notifyChange(e);
      } else {
        this._notifyChange(e);
        this.handleNewActiveKey(e);
      }
      this._adapter.notifyTabClick(e, t);
    }
    handleNewActiveKey(e) {
      let {
        activeKey: t
      } = this.getStates();
      if (t !== e) {
        this._adapter.setNewActiveKey(e);
      }
    }
    getDefaultActiveKey() {
      let e;
      let t = this.getProps();
      if ("activeKey" in t) {
        return t.activeKey;
      } else if ("defaultActiveKey" in t) {
        return t.defaultActiveKey;
      } else {
        return this._adapter.getDefaultActiveKeyFromChildren();
      }
    }
    handleTabListChange() {
      this._adapter.collectPane();
    }
    handleTabPanesChange() {
      this._adapter.collectPane();
      this._adapter.collectActiveKey();
    }
    handleTabDelete(e) {
      this._adapter.notifyTabDelete(e);
    }
    determineOrientation(e, t) {
      let {
        tabPosition: i
      } = this.getProps();
      if (i === "left") {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          this.switchTabOnArrowPress(e, t);
          this.handlePrevent(e);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        this.switchTabOnArrowPress(e, t);
        this.handlePrevent(e);
      }
    }
    handleDeleteKeyDown(e, t, i, n) {
      let {
        preventScroll: a
      } = this.getProps();
      if (n) {
        this.handleTabDelete(i);
        let n = t.indexOf(e.target);
        if (t.length !== 1) {
          t[n + 1 >= t.length ? n - 1 : n + 1].focus({
            preventScroll: a
          });
        }
      }
    }
    switchTabOnArrowPress(e, t) {
      let {
        preventScroll: i
      } = this.getProps();
      let n = t.indexOf(e.target);
      let a = {
        ArrowLeft: -1,
        ArrowUp: -1,
        ArrowRight: 1,
        ArrowDown: 1
      };
      if (a[e.key] && n !== undefined) {
        if (t[n + a[e.key]]) {
          t[n + a[e.key]].focus({
            preventScroll: i
          });
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          t[t.length - 1].focus({
            preventScroll: i
          });
        } else if (e.key === "ArrowRight" || e.key == "ArrowDown") {
          t[0].focus({
            preventScroll: i
          });
        }
      }
    }
  }
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var dataAttributeFilter = require("data-attribute-filter") /*id: 584342*/;
  var overflowList = require("overflow-list") /*id: 395871*/;
  var dropdownComponent = require("dropdown-component") /*id: 748649*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var chevronLeftIcon = require("chevron-left-icon") /*id: 220673*/;
  var chevronRightIcon = require("chevron-right-icon") /*id: 386685*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  function S(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; a < n.length; a++) {
        if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
          i[n[a]] = e[n[a]];
        }
      }
    }
    return i;
  }
  let I = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      tab: i,
      size: n,
      type: a,
      icon: o,
      selected: l,
      closable: h,
      disabled: c,
      itemKey: u,
      deleteTabItem: p,
      tabPosition: g,
      handleKeyDown: m,
      onClick: f
    } = e;
    let b = S(e, ["tab", "size", "type", "icon", "selected", "closable", "disabled", "itemKey", "deleteTabItem", "tabPosition", "handleKeyDown", "onClick"]);
    let v = reactCoreLibraryReexport.useMemo(() => a === "card" && h ? reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, {
      "aria-label": "Close",
      role: "button",
      className: `${tabsComponentConstants.tabsClassNames.TABS_TAB}-icon-close`,
      onClick: e => p(u, e)
    }) : null, [a, h, p, u]);
    let y = reactCoreLibraryReexport.useCallback(e => reactCoreLibraryReexport.createElement("span", null, e), []);
    let C = reactCoreLibraryReexport.useCallback(e => {
      if (m) {
        m(e, u, h);
      }
    }, [m, u, h]);
    let w = reactCoreLibraryReexport.useCallback(e => {
      if (!c && f) {
        f(u, e);
      }
    }, [u, c, f]);
    let E = o ? y(o) : null;
    let T = r(tabsComponentConstants.tabsClassNames.TABS_TAB, `${tabsComponentConstants.tabsClassNames.TABS_TAB}-${a}`, `${tabsComponentConstants.tabsClassNames.TABS_TAB}-${g}`, `${tabsComponentConstants.tabsClassNames.TABS_TAB}-single`, {
      [tabsComponentConstants.tabsClassNames.TABS_TAB_ACTIVE]: l,
      [tabsComponentConstants.tabsClassNames.TABS_TAB_DISABLED]: c,
      [`${tabsComponentConstants.tabsClassNames.TABS_TAB}-small`]: n === "small",
      [`${tabsComponentConstants.tabsClassNames.TABS_TAB}-medium`]: n === "medium"
    });
    return reactCoreLibraryReexport.createElement("div", Object.assign({
      role: "tab",
      id: `semiTab${u}`,
      "data-tabkey": `semiTab${u}`,
      "aria-controls": `semiTabPanel${u}`,
      "aria-disabled": c ? "true" : "false",
      "aria-selected": l ? "true" : "false",
      tabIndex: l ? 0 : -1,
      onKeyDown: C,
      onClick: w,
      className: T
    }, b, {
      ref: t
    }), E, i, v);
  });
  I.elementType = "Tabs.TabItem";
  function x(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; a < n.length; a++) {
        if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
          i[n[a]] = e[n[a]];
        }
      }
    }
    return i;
  }
  class O extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this.handleItemClick = (e, t) => {
        this.props.onTabClick(e, t);
        if (this.props.collapsible) {
          let t = this._getItemKey(e);
          document.querySelector(`[data-uuid="${this.state.uuid}"] .${tabsComponentConstants.tabsClassNames.TABS_TAB}[data-scrollkey="${t}"]`).scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        }
      };
      this.handleKeyDown = (e, t, i) => {
        this.props.handleKeyDown(e, t, i);
      };
      this.renderTabItem = e => {
        let {
          size: t,
          type: i,
          deleteTabItem: a,
          handleKeyDown: o,
          tabPosition: r
        } = this.props;
        let l = this._isActive(e.itemKey);
        return reactCoreLibraryReexport.createElement(I, Object.assign({}, throttledPathFilterStringify.throttledPathStr(e, ["disabled", "icon", "itemKey", "tab", "closable"]), {
          key: this._getItemKey(e.itemKey),
          selected: l,
          size: t,
          type: i,
          tabPosition: r,
          handleKeyDown: o,
          deleteTabItem: a,
          onClick: this.handleItemClick
        }));
      };
      this.renderTabComponents = e => e.map(e => this.renderTabItem(e));
      this.handleArrowClick = (e, t) => {
        let i = t === "start" ? e.pop() : e.shift();
        if (!i) {
          return;
        }
        let n = this._getItemKey(i.itemKey);
        document.querySelector(`[data-uuid="${this.state.uuid}"] .${tabsComponentConstants.tabsClassNames.TABS_TAB}[data-scrollkey="${n}"]`).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest"
        });
      };
      this.renderCollapse = (e, t, i) => {
        if (isEmptyUtil.isEmpty(e)) {
          return reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
            disabled: true,
            icon: t,
            theme: "borderless"
          });
        }
        let {
          dropdownClassName: n,
          dropdownStyle: a
        } = this.props;
        let {
          rePosKey: o
        } = this.state;
        let l = !e.length;
        let h = reactCoreLibraryReexport.createElement(dropdownComponent.Dropdown.Menu, null, e.map(e => {
          let {
            icon: t,
            tab: i,
            itemKey: n
          } = e;
          let a = t ? this.renderIcon(e.icon) : null;
          return reactCoreLibraryReexport.createElement(dropdownComponent.Dropdown.Item, {
            key: n,
            onClick: e => this.handleItemClick(n, e),
            active: this._isActive(n)
          }, a, i);
        }));
        let c = r({
          [`${tabsComponentConstants.tabsClassNames.TABS_BAR}-arrow-${i}`]: i,
          [`${tabsComponentConstants.tabsClassNames.TABS_BAR}-arrow`]: true
        });
        let u = r(n, {
          [`${tabsComponentConstants.tabsClassNames.TABS_BAR}-dropdown`]: true
        });
        return reactCoreLibraryReexport.createElement(dropdownComponent.Dropdown, {
          className: u,
          clickToHide: true,
          clickTriggerToHide: true,
          key: `${o}-${i}`,
          position: i === "start" ? "bottomLeft" : "bottomRight",
          render: l ? null : h,
          showTick: true,
          style: a,
          trigger: "hover",
          disableFocusListener: true
        }, reactCoreLibraryReexport.createElement("div", {
          role: "presentation",
          className: c,
          onClick: t => this.handleArrowClick(e, i)
        }, reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
          disabled: l,
          icon: t,
          theme: "borderless"
        })));
      };
      this.renderOverflow = e => e.map((e, t) => {
        let i = t === 0 ? reactCoreLibraryReexport.createElement(chevronLeftIcon.ChevronLeftIcon, null) : reactCoreLibraryReexport.createElement(chevronRightIcon.ChevronRightIcon, null);
        return this.renderCollapse(e, i, t === 0 ? "start" : "end");
      });
      this.renderCollapsedTab = () => {
        let {
          list: e
        } = this.props;
        let t = e.map(e => {
          let {
            itemKey: t
          } = e;
          return Object.assign({
            key: this._getItemKey(t),
            active: this._isActive(t)
          }, e);
        });
        return reactCoreLibraryReexport.createElement(overflowList.OverflowList, {
          items: t,
          overflowRenderer: this.renderOverflow,
          renderMode: "scroll",
          className: `${tabsComponentConstants.tabsClassNames.TABS_BAR}-overflow-list`,
          visibleItemRenderer: this.renderTabItem
        });
      };
      this._isActive = e => e === this.props.activeKey;
      this._getItemKey = e => `${e}-bar`;
      this.state = {
        endInd: e.list.length,
        rePosKey: 0,
        startInd: 0,
        uuid: ""
      };
    }
    componentDidMount() {
      this.setState({
        uuid: uniqueIdUtils.generateUuid()
      });
    }
    renderIcon(e) {
      return reactCoreLibraryReexport.createElement("span", null, e);
    }
    renderExtra() {
      let {
        tabBarExtraContent: e,
        type: t,
        size: i
      } = this.props;
      let n = e && e.props ? e.props.style : {};
      let a = r(tabsComponentConstants.tabsClassNames.TABS_BAR_EXTRA, {
        [`${tabsComponentConstants.tabsClassNames.TABS_BAR}-${t}-extra`]: t,
        [`${tabsComponentConstants.tabsClassNames.TABS_BAR}-${t}-extra-${i}`]: i
      });
      if (e) {
        let t = Object.assign(Object.assign({}, {
          float: "right"
        }), n);
        return reactCoreLibraryReexport.createElement("div", {
          className: a,
          style: t,
          "x-semi-prop": "tabBarExtraContent"
        }, e);
      }
      return null;
    }
    render() {
      let e = this.props;
      let {
        type: t,
        style: i,
        className: n,
        list: a,
        tabPosition: o,
        collapsible: l
      } = e;
      let h = x(e, ["type", "style", "className", "list", "tabPosition", "collapsible"]);
      let c = r(n, {
        [tabsComponentConstants.tabsClassNames.TABS_BAR]: true,
        [tabsComponentConstants.tabsClassNames.TABS_BAR_LINE]: t === "line",
        [tabsComponentConstants.tabsClassNames.TABS_BAR_CARD]: t === "card",
        [tabsComponentConstants.tabsClassNames.TABS_BAR_BUTTON]: t === "button",
        [`${tabsComponentConstants.tabsClassNames.TABS_BAR}-${o}`]: o,
        [`${tabsComponentConstants.tabsClassNames.TABS_BAR}-collapse`]: l
      });
      let u = this.renderExtra();
      let p = l ? this.renderCollapsedTab() : this.renderTabComponents(a);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        role: "tablist",
        "aria-orientation": o === "left" ? "vertical" : "horizontal",
        className: c,
        style: i
      }, dataAttributeFilter.filterDataAttrs(h), {
        "data-uuid": this.state.uuid
      }), p, u);
    }
  }
  O.propTypes = {
    activeKey: h.string,
    className: h.string,
    collapsible: h.bool,
    list: h.array,
    onTabClick: h.func,
    size: h.oneOf(tabsComponentConstants.tabsConfig.SIZE),
    style: h.object,
    tabBarExtraContent: h.node,
    tabPosition: h.oneOf(tabsComponentConstants.tabsConfig.POSITION_MAP),
    type: h.oneOf(tabsComponentConstants.tabsConfig.TYPE_MAP),
    closable: h.bool,
    deleteTabItem: h.func
  };
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var contextExport = require("context-export") /*id: 499775*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function M(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var a = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; a < n.length; a++) {
        if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
          i[n[a]] = e[n[a]];
        }
      }
    }
    return i;
  }
  let N = ["className", "style", "disabled", "itemKey", "tab", "icon"];
  class L extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.setContentRef = e => {
        this.contentRef = {
          current: e
        };
      };
      this.onTabClick = (e, t) => {
        this.foundation.handleTabClick(e, t);
      };
      this.rePosChildren = (e, t) => {
        let i = [];
        let n = reactCoreLibraryReexport.Children.toArray(e);
        if (e.length) {
          i.push(...n.filter(e => e.props && e.props.itemKey === t));
          i.push(...n.filter(e => e.props && e.props.itemKey !== t));
        }
        return i;
      };
      this.getActiveItem = () => {
        let {
          activeKey: e
        } = this.state;
        let {
          children: t,
          tabList: i
        } = this.props;
        if (i || !Array.isArray(t)) {
          return t;
        } else {
          return reactCoreLibraryReexport.Children.toArray(t).filter(t => !reactCoreLibraryReexport.isValidElement(t) || !t.type || !t.type.isTabPane || t.props.itemKey === e);
        }
      };
      this.deleteTabItem = (e, t) => {
        t.stopPropagation();
        this.foundation.handleTabDelete(e);
      };
      this.foundation = new m(this.adapter);
      this.state = {
        activeKey: this.foundation.getDefaultActiveKey(),
        panes: [],
        prevActiveKey: null,
        forceDisableMotion: false
      };
      this.contentRef = reactCoreLibraryReexport.createRef();
      this.contentHeight = "auto";
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        collectPane: () => {
          let {
            tabList: e,
            children: t
          } = this.props;
          if (Array.isArray(e) && e.length) {
            this.setState({
              panes: e
            });
            return;
          }
          let i = reactCoreLibraryReexport.Children.map(t, e => {
            if (e) {
              let {
                tab: t,
                icon: i,
                disabled: n,
                itemKey: a,
                closable: s
              } = e.props;
              return {
                tab: t,
                icon: i,
                disabled: n,
                itemKey: a,
                closable: s
              };
            }
          });
          this.setState({
            panes: i
          });
        },
        collectActiveKey: () => {
          let e = [];
          let {
            tabList: t,
            children: i,
            activeKey: n
          } = this.props;
          if (n !== undefined) {
            return;
          }
          let {
            activeKey: a
          } = this.state;
          if ((e = Array.isArray(t) && t.length ? t : reactCoreLibraryReexport.Children.map(i, e => {
            if (e) {
              let {
                tab: t,
                icon: i,
                disabled: n,
                itemKey: a,
                closable: s
              } = e.props;
              return {
                tab: t,
                icon: i,
                disabled: n,
                itemKey: a,
                closable: s
              };
            }
          })).findIndex(e => e.itemKey === a) === -1) {
            if (e.length > 0) {
              this.setState({
                activeKey: e[0].itemKey
              });
            } else {
              this.setState({
                activeKey: ""
              });
            }
          }
        },
        notifyTabClick: (e, t) => {
          this.props.onTabClick(e, t);
        },
        notifyChange: e => {
          this.props.onChange(e);
        },
        setNewActiveKey: e => {
          this.setState({
            activeKey: e
          });
        },
        getDefaultActiveKeyFromChildren: () => {
          let {
            tabList: e,
            children: t
          } = this.props;
          let i = "";
          (e || reactCoreLibraryReexport.Children.toArray(t).map(e => reactCoreLibraryReexport.isValidElement(e) ? e.props : null)).forEach(e => {
            if (!!e && !i && !e.disabled) {
              i = e.itemKey;
            }
          });
          return i;
        },
        notifyTabDelete: e => {
          if (this.props.onTabClose) {
            this.props.onTabClose(e);
          }
        }
      });
    }
    static getDerivedStateFromProps(e, t) {
      let i = {};
      if (!nullCheckUtil_1.isNil(e.activeKey) && e.activeKey !== t.activeKey) {
        t.prevActiveKey = t.activeKey;
        i.activeKey = e.activeKey;
      }
      return i;
    }
    componentDidUpdate(e, t) {
      let i = reactCoreLibraryReexport.Children.toArray(e.children).map(e => throttledPathFilterStringify.throttledPathStr(reactCoreLibraryReexport.isValidElement(e) ? e.props : null, N));
      let o = reactCoreLibraryReexport.Children.toArray(this.props.children).map(e => throttledPathFilterStringify.throttledPathStr(reactCoreLibraryReexport.isValidElement(e) ? e.props : null, N));
      let r = this.props.tabList || e.tabList;
      if (!deepEqualUtil_1.deepEqual(this.props.tabList, e.tabList)) {
        this.foundation.handleTabListChange();
      }
      if (t.activeKey !== this.state.activeKey && t.activeKey !== this.state.prevActiveKey) {
        this.setState({
          prevActiveKey: t.activeKey
        });
      }
      if (e.activeKey !== this.props.activeKey) {
        let e = (() => {
          let e = new Set(i.map(e => e.itemKey));
          return o.map(e => e.itemKey).filter(t => !e.has(t));
        })();
        this.setState({
          forceDisableMotion: e.includes(this.props.activeKey)
        });
      }
      if (!deepEqualUtil_1.deepEqual(i, o) && !r) {
        this.foundation.handleTabPanesChange();
      }
    }
    render() {
      let e = this.props;
      let {
        children: t,
        className: i,
        collapsible: n,
        contentStyle: a,
        keepDOM: o,
        lazyRender: l,
        renderTabBar: h,
        size: c,
        style: u,
        tabBarClassName: p,
        tabBarExtraContent: g,
        tabBarStyle: m,
        tabPaneMotion: f,
        tabPosition: b,
        type: v
      } = e;
      let y = M(e, ["children", "className", "collapsible", "contentStyle", "keepDOM", "lazyRender", "renderTabBar", "size", "style", "tabBarClassName", "tabBarExtraContent", "tabBarStyle", "tabPaneMotion", "tabPosition", "type"]);
      let {
        panes: C,
        activeKey: w
      } = this.state;
      let E = r(i, {
        [tabsComponentConstants.tabsClassNames.TABS]: true,
        [`${tabsComponentConstants.tabsClassNames.TABS}-${b}`]: b
      });
      let T = r({
        [tabsComponentConstants.tabsClassNames.TABS_CONTENT]: true,
        [`${tabsComponentConstants.tabsClassNames.TABS_CONTENT}-${b}`]: b
      });
      let _ = {
        activeKey: w,
        className: p,
        collapsible: n,
        list: C,
        onTabClick: this.onTabClick,
        size: c,
        style: m,
        tabBarExtraContent: g,
        tabPosition: b,
        type: v,
        deleteTabItem: this.deleteTabItem,
        handleKeyDown: this.foundation.handleKeyDown
      };
      let A = h ? h(_, O) : reactCoreLibraryReexport.createElement(O, Object.assign({}, _));
      let S = o ? t : this.getActiveItem();
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: E,
        style: u
      }, this.getDataAttr(y)), A, reactCoreLibraryReexport.createElement(contextExport.context.Provider, {
        value: {
          activeKey: w,
          lazyRender: l,
          panes: C,
          tabPaneMotion: f,
          tabPosition: b,
          prevActiveKey: this.state.prevActiveKey,
          forceDisableMotion: this.state.forceDisableMotion
        }
      }, reactCoreLibraryReexport.createElement("div", {
        ref: this.setContentRef,
        className: T,
        style: Object.assign({}, a)
      }, S)));
    }
  }
  L.TabPane = tabPaneComponent.TabPane;
  L.TabItem = I;
  L.propTypes = {
    activeKey: h.string,
    className: h.string,
    collapsible: h.bool,
    contentStyle: h.oneOfType([h.object]),
    defaultActiveKey: h.string,
    keepDOM: h.bool,
    lazyRender: h.bool,
    onChange: h.func,
    onTabClick: h.func,
    renderTabBar: h.func,
    size: h.oneOf(tabsComponentConstants.tabsConfig.SIZE),
    style: h.object,
    tabBarClassName: h.string,
    tabBarExtraContent: h.node,
    tabBarStyle: h.object,
    tabList: h.array,
    tabPaneMotion: h.bool,
    tabPosition: h.oneOf(tabsComponentConstants.tabsConfig.POSITION_MAP),
    type: h.oneOf(tabsComponentConstants.tabsConfig.TYPE_MAP),
    onTabClose: h.func,
    preventScroll: h.bool
  };
  L.__SemiComponentName__ = "Tabs";
  L.defaultProps = commonFrontendUtils.configProxyHandler(L.__SemiComponentName__, {
    children: [],
    collapsible: false,
    keepDOM: true,
    lazyRender: false,
    onChange: () => undefined,
    onTabClick: () => undefined,
    size: "large",
    tabPaneMotion: true,
    tabPosition: "top",
    type: "line",
    onTabClose: () => undefined
  });
  var k = L;
  require.d(exports, {
    TabsComponent: function () {
      return k;
    }
  });
}