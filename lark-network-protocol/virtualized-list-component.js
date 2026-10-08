// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'VirtualizedList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 608074
         */
module.exports = function (module, exports, require) {
  var r;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var possibleConstructorReturn = require("possible-constructor-return") /*id: 233617*/;
  var getPrototypeOfHelper = require("get-prototype-of-helper") /*id: 109717*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var p = propTypesFactoryWrapper;
  var reactResizeSensor = require("react-resize-sensor") /*id: 217560*/;
  var f = reactResizeSensor;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var g = classnamesUtils;
  var reactScrollArea_1 = require("react-scroll-area_1") /*id: 456566*/;
  function m(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      i.push.apply(i, r);
    }
    return i;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t] ?? {};
      if (t % 2) {
        m(Object(i), true).forEach(function (t) {
          objectPropertySetter.setObjectProperty(e, t, i[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(i));
      } else {
        m(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
    }
    return e;
  }
  function E() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (E = function () {
      return !!e;
    })();
  }
  var S = function (e) {
    function t(e) {
      var i;
      var r;
      var s;
      classCallCheckUtil.classCallCheck(this, t);
      r = t;
      s = [e];
      r = getPrototypeOfHelper.getPrototypeOf(r);
      i = possibleConstructorReturn.constructorReturn(this, E() ? Reflect.construct(r, s || [], getPrototypeOfHelper.getPrototypeOf(this).constructor) : r.apply(this, s));
      objectPropertySetter.setObjectProperty(i, "_onMouseDown", () => {
        i._isMouseDown = true;
      });
      objectPropertySetter.setObjectProperty(i, "_onMouseUp", () => {
        i._isMouseDown = false;
      });
      i._isMouseWheelScrolling = false;
      return i;
    }
    setPrototypeInheritance.setInheritance(t, e);
    return classPropertyUtil.defineClassProps(t, [{
      key: "scrollTo",
      value: function (e) {
        var {
          x: t = 0,
          y: i = 0
        } = e;
        if (!this.props.lock) {
          this._refWrapperEl.scrollLeft = t;
          this._refWrapperEl.scrollTop = i;
        }
      }
    }, {
      key: "isNearBottom",
      value: function (e = 0) {
        return !!this._refWrapperEl && this._refWrapperEl.scrollHeight - this._refWrapperEl.scrollTop - this._refWrapperEl.clientHeight <= e;
      }
    }, {
      key: "getContainerSize",
      value: function () {
        this._containerSize ||= this._calcContainerSize();
        return this._containerSize;
      }
    }, {
      key: "getContentSize",
      value: function () {
        this._contentSize ||= this._calcContentSize();
        return this._contentSize;
      }
    }, {
      key: "getPosition",
      value: function () {
        this._position ||= this._calcScrollPosition();
        return this._position;
      }
    }, {
      key: "getMaxPosition",
      value: function () {
        var e = this._refWrapperEl;
        this._maxPosition = {
          x: e.scrollWidth - e.clientWidth,
          y: e.scrollHeight - e.clientHeight
        };
        return this._maxPosition;
      }
    }, {
      key: "getMinPosition",
      value: function () {
        this._minPosition ||= {
          x: 0,
          y: 0
        };
        return this._minPosition;
      }
    }, {
      key: "_calcContainerSize",
      value: function () {
        if (this._refWrapperEl) {
          return {
            x: this._refWrapperEl.clientWidth,
            y: this._refWrapperEl.clientHeight
          };
        } else {
          return {
            x: 0,
            y: 0
          };
        }
      }
    }, {
      key: "_calcContentSize",
      value: function () {
        return {
          x: this._refContentEl.offsetWidth,
          y: this._refContentEl.offsetHeight
        };
      }
    }, {
      key: "_calcScrollPosition",
      value: function () {
        return {
          x: this._refWrapperEl.scrollLeft,
          y: this._refWrapperEl.scrollTop
        };
      }
    }, {
      key: "_positionEqual",
      value: function (e, t) {
        return e.x === t.x && e.y === t.y;
      }
    }, {
      key: "_updateScrollBar",
      value: function () {
        if (this._stopScrollTimer) {
          clearTimeout(this._stopScrollTimer);
        }
        if (!this._isScrolling) {
          this._isScrolling = true;
          this._refWrapperEl.classList.add("scrolling");
        }
        this._stopScrollTimer = setTimeout(() => {
          this._isScrolling = false;
          if (this._refWrapperEl) {
            if (this.props.onScrollEnd) {
              this.props.onScrollEnd(this._position);
            }
            this._refWrapperEl.classList.remove("scrolling");
          }
        }, 300);
      }
    }, {
      key: "_onScroll",
      value: function () {
        var e = this._isMouseWheelScrolling || this._isMouseDown;
        var t = this.getPosition();
        this._position = this._calcScrollPosition();
        var i = {
          x: this._position.x > t.x,
          y: this._position.y > t.y
        };
        this._updateScrollBar();
        if (this.props.onScroll) {
          this.props.onScroll(this._position, {
            forward: i,
            isUserScrolling: e
          });
        }
      }
    }, {
      key: "_onWheel",
      value: function () {
        this._isMouseWheelScrolling = true;
        if (this._wheelScrollTimer) {
          clearTimeout(this._wheelScrollTimer);
        }
        this._wheelScrollTimer = setTimeout(() => {
          this._isMouseWheelScrolling = false;
        }, 300);
      }
    }, {
      key: "_onContainerResize",
      value: function () {
        this._containerSize = null;
        this._maxPosition = null;
        if (this.props.onContainerResize) {
          this.props.onContainerResize(this);
        }
      }
    }, {
      key: "render",
      value: function () {
        var {
          style: e,
          contentStyle: t,
          children: i,
          lock: r,
          className: n
        } = this.props;
        var s = e;
        s = r ? b(b({}, e), {}, {
          overflow: "hidden"
        }) : e;
        return reactCoreLibraryReexport.createElement(f, {
          onResize: this._onContainerResize.bind(this)
        }, reactCoreLibraryReexport.createElement(reactScrollArea_1.ScrollArea, {
          className: g("scroller", {
            [n]: !!n
          }),
          key: "scroller",
          style: s,
          ref: e => {
            this._refWrapperEl = e;
          },
          onWheel: this._onWheel.bind(this),
          onMouseDown: this._onMouseDown,
          onMouseUp: this._onMouseUp,
          onScroll: this._onScroll.bind(this)
        }, reactCoreLibraryReexport.createElement("div", {
          className: "scroller_content",
          key: "scroller_content",
          style: t,
          ref: e => {
            this._refContentEl = e;
          }
        }, i)));
      }
    }]);
  }(reactCoreLibraryReexport.Component);
  S.defaultProps = {
    lock: false
  };
  S.propTypes = {
    style: p.object,
    contentStyle: p.object,
    onScroll: p.func,
    onContainerResize: p.func,
    onContentResize: p.func,
    lock: p.bool
  };
  (r = {}).DATA_FIRST = "data-first";
  r.VISIBLE_FIRST = "visible-first";
  var O = r;
  function _(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      i.push.apply(i, r);
    }
    return i;
  }
  function T(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t] ?? {};
      if (t % 2) {
        _(Object(i), true).forEach(function (t) {
          objectPropertySetter.setObjectProperty(e, t, i[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(i));
      } else {
        _(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
    }
    return e;
  }
  var w = classPropertyUtil.defineClassProps(function e() {
    classCallCheckUtil.classCallCheck(this, e);
    objectPropertySetter.setObjectProperty(this, "_header", undefined);
    objectPropertySetter.setObjectProperty(this, "_footer", undefined);
    objectPropertySetter.setObjectProperty(this, "_sections", undefined);
    this._header = {
      start: 0,
      end: 0
    };
    this._footer = {
      start: 0,
      end: 0
    };
    this._sections = [];
  }, [{
    key: "clear",
    value: function () {
      this._header = {
        start: 0,
        end: 0
      };
      this._sections.length = 0;
      this._footer = {
        start: 0,
        end: 0
      };
    }
  }, {
    key: "setHeaderHeight",
    value: function (e) {
      var t = this.getHeaderHeight();
      if (e !== t) {
        this._header.end = e;
        this._addOffsetFrom(0, e - t);
      }
    }
  }, {
    key: "getHeaderHeight",
    value: function () {
      return this._header.end - this._header.start;
    }
  }, {
    key: "updateRowKey",
    value: function (e, t, i) {
      var r = this._getOrCreateSection(e);
      r.keys ||= [];
      r.keys[t] = i;
    }
  }, {
    key: "getIndexPathByKey",
    value: function (e) {
      for (var t = 0; t < this._sections.length; t++) {
        var i;
        var r = (i = this._sections[t].keys) === null || i === undefined ? undefined : i.indexOf(e);
        if (r !== undefined && r > -1) {
          return {
            section: t,
            row: r
          };
        }
      }
    }
  }, {
    key: "getKeyByIndexPath",
    value: function (e) {
      var {
        section: t,
        row: i
      } = e;
      return this._getOrCreateSection(t).keys[i] || "";
    }
  }, {
    key: "getHeaderHeightRange",
    value: function () {
      return [this._header.start, this._header.end];
    }
  }, {
    key: "setFooterHeight",
    value: function (e) {
      if (e !== this.getFooterHeight()) {
        var t = this._sections[this._sections.length - 1];
        var i = t ? t.end : this._header.end;
        this._footer.start = i;
        this._footer.end = i + e;
      }
    }
  }, {
    key: "getFooterHeight",
    value: function () {
      return this._footer.end - this._footer.start;
    }
  }, {
    key: "getFooterHeightRange",
    value: function () {
      return [this._footer.start, this._footer.end];
    }
  }, {
    key: "_getOrCreateSection",
    value: function (e) {
      var t = this._sections[e];
      if (t) {
        return t;
      }
      var i = this._sections[e - 1];
      var r = i ? i.end : this._header.end;
      t = {
        header: {
          start: r,
          end: r
        },
        footer: {
          start: r,
          end: r
        },
        start: r,
        end: r,
        rows: [],
        keys: [],
        headerSticky: false
      };
      this._sections[e] = t;
      return t;
    }
  }, {
    key: "setSectionHeaderHeight",
    value: function (e, t, i = false) {
      var r = this._getOrCreateSection(e);
      var n = t - (r.header.end - r.header.start);
      r.header.start = r.start;
      r.header.end = r.header.start + t;
      r.headerSticky = i;
      this._addOffsetInSectionFromRow(r, 0, n);
      this._addOffsetFrom(e + 1, n);
    }
  }, {
    key: "getSectionHeaderRangeAt",
    value: function (e) {
      var t = this._sections[e];
      if (t) {
        return [t.header.start, t.header.end];
      } else {
        return [0, 0];
      }
    }
  }, {
    key: "getSectionRangeAt",
    value: function (e) {
      var t = this._sections[e];
      if (t) {
        return [t.start, t.end];
      } else {
        return [0, 0];
      }
    }
  }, {
    key: "setSectionFooterHeight",
    value: function (e, t) {
      var i = this._getOrCreateSection(e);
      var r = t - (i.footer.end - i.footer.start);
      i.footer.start = i.rows[i.rows.length - 1] || i.header.end;
      i.footer.end = i.footer.start + t;
      i.end = i.footer.end;
      this._addOffsetFrom(e + 1, r);
    }
  }, {
    key: "getSectionFooterRangeAt",
    value: function (e) {
      var t = this._sections[e];
      if (t) {
        return [t.footer.start, t.footer.end];
      } else {
        return [0, 0];
      }
    }
  }, {
    key: "setItemHeight",
    value: function (e, t) {
      var i;
      var [r, n] = this.getHeightRangeAt(e);
      var {
        section: s,
        row: o
      } = e;
      var a = this._getOrCreateSection(s);
      if (n - r !== t || !(o <= a.rows.length - 2)) {
        var l = a.rows;
        if (o === 0) {
          l[0] = a.header.end;
        }
        i = l[o + 1] ? t - (l[o + 1] - l[o]) : t;
        l[o + 1] = l[o] + t;
        this._addOffsetInSectionFromRow(a, o + 2, i);
        this._addOffsetFrom(s + 1, i);
      }
    }
  }, {
    key: "_addOffsetInSectionFromRow",
    value: function (e, t, i) {
      var {
        rows: r,
        footer: n
      } = e;
      var s = r.length;
      var o = t;
      for (; o < s; o++) {
        r[o] += i;
      }
      n.start += i;
      n.end += i;
      e.end += i;
    }
  }, {
    key: "_addOffsetFrom",
    value: function (e, t) {
      var i = this._sections.length;
      var r = e;
      for (; r < i; r++) {
        var n = this._sections[r];
        n.start += t;
        n.header.start += t;
        n.header.end += t;
        this._addOffsetInSectionFromRow(n, 0, t);
      }
      this._footer.start += t;
      this._footer.end += t;
    }
  }, {
    key: "getTotalHeight",
    value: function () {
      return this._footer.end;
    }
  }, {
    key: "getHeightRangeAt",
    value: function (e) {
      var {
        section: r,
        row: n
      } = e;
      var s = this._sections[r];
      if (s) {
        return [s.rows[n] ?? s.header.end, s.rows[n + 1] ?? s.footer.start];
      } else {
        return [0, 0];
      }
    }
  }, {
    key: "getHeightAt",
    value: function (e) {
      if (e) {
        return this.getHeightRangeAt(e)[1];
      } else {
        return 0;
      }
    }
  }, {
    key: "isHeaderVisible",
    value: function (e) {
      return e >= this._header.start && e <= this._header.end;
    }
  }, {
    key: "isFooterVisible",
    value: function (e, t) {
      return e >= this._footer.start - (t ?? 1);
    }
  }, {
    key: "findIndexPathByPosition",
    value: function (e, t, i = O.DATA_FIRST) {
      if (!this._sections.length) {
        return null;
      }
      var r = Math.round(e);
      var n = this._searchSection(this._sections, r);
      var s = this._searchRow(this._sections[n], r, t, i);
      var o = T(T({
        section: n
      }, s), {}, {
        key: ""
      });
      o.key = this.getKeyByIndexPath(o);
      return o;
    }
  }, {
    key: "_searchRow",
    value: function (e, t, i, r = O.DATA_FIRST) {
      var {
        header: n,
        footer: s,
        rows: o,
        headerSticky: a
      } = e;
      var l = t;
      if (r === O.VISIBLE_FIRST) {
        var u = n.end - n.start;
        var d = t >= n.start && t <= s.end;
        var c = i !== undefined && a && n.start < i && d;
        var p = c ? i : n.start;
        var h = p + u;
        l = c && t >= p && t < h ? h : t;
      }
      var f = {
        row: -1
      };
      if (l < n.end) {
        f.row = 0;
      } else if (l >= s.start) {
        f.row = Math.max(0, o.length - 2);
      } else {
        var y = 0;
        var g = o.length - 2;
        while (y <= g) {
          var v = y + g >> 1;
          if (l < o[v + 1] && l >= o[v]) {
            f.row = v;
            break;
          }
          if (l < o[v]) {
            g = v - 1;
          } else {
            y = v + 1;
          }
        }
      }
      return f;
    }
  }, {
    key: "_searchSection",
    value: function (e, t) {
      var i = e.length;
      var r = 0;
      var n = i - 1;
      if (t <= e[0].start) {
        return r;
      }
      if (t >= e[n].end) {
        return n;
      }
      while (r <= n) {
        var s = r + n >> 1;
        if (t < e[s].start) {
          n = s - 1;
        } else {
          if (!(t >= e[s].end)) {
            return s;
          }
          r = s + 1;
        }
      }
      throw Error(`position map invalid: ${t}`);
    }
  }]);
  var k = classPropertyUtil.defineClassProps(function e(t) {
    var {
      keyMapper: i,
      estimatedRowHeight: r = 0,
      headerHeight: s = 0,
      footerHeight: o = 0,
      sectionHeaderHeight: a = 0,
      sectionFooterHeight: l = 0
    } = t;
    classCallCheckUtil.classCallCheck(this, e);
    objectPropertySetter.setObjectProperty(this, "_keyMapper", undefined);
    objectPropertySetter.setObjectProperty(this, "_estimatedRowHeight", undefined);
    objectPropertySetter.setObjectProperty(this, "_headerHeight", undefined);
    objectPropertySetter.setObjectProperty(this, "_footerHeight", undefined);
    objectPropertySetter.setObjectProperty(this, "_sectionHeaderHeight", undefined);
    objectPropertySetter.setObjectProperty(this, "_sectionFooterHeight", undefined);
    objectPropertySetter.setObjectProperty(this, "_size", undefined);
    this._keyMapper = i;
    this._estimatedRowHeight = r;
    this._headerHeight = s;
    this._footerHeight = o;
    this._sectionHeaderHeight = a;
    this._sectionFooterHeight = l;
    this._size = {};
  }, [{
    key: "setHeaderHeight",
    value: function (e) {
      this._headerHeight = e;
    }
  }, {
    key: "getHeaderHeight",
    value: function () {
      return this._headerHeight;
    }
  }, {
    key: "setFooterHeight",
    value: function (e) {
      this._footerHeight = e;
    }
  }, {
    key: "getFooterHeight",
    value: function () {
      return this._footerHeight;
    }
  }, {
    key: "setSectionHeaderHeight",
    value: function (e) {
      this._sectionHeaderHeight = e;
    }
  }, {
    key: "getSectionHeaderHeight",
    value: function (e) {
      if (typeof this._sectionHeaderHeight == "function") {
        return this._sectionHeaderHeight(e);
      } else {
        return this._sectionHeaderHeight;
      }
    }
  }, {
    key: "setSectionFooterHeight",
    value: function (e) {
      this._sectionFooterHeight = e;
    }
  }, {
    key: "getSectionFooterHeight",
    value: function (e) {
      if (typeof this._sectionFooterHeight == "function") {
        return this._sectionFooterHeight(e);
      } else {
        return this._sectionFooterHeight;
      }
    }
  }, {
    key: "get",
    value: function (e) {
      var t = this._keyMapper(e);
      if (t in this._size) {
        return this._size[t];
      }
      if (typeof this._estimatedRowHeight == "function") {
        var i = this._estimatedRowHeight(e);
        this.set(e, i);
        return i;
      }
      return this._estimatedRowHeight;
    }
  }, {
    key: "set",
    value: function (e, t) {
      var i = this._keyMapper(e);
      this._size[i] = t;
    }
  }, {
    key: "setKeyMapper",
    value: function (e) {
      this._keyMapper = e;
    }
  }, {
    key: "setEstimatedRowHeight",
    value: function (e) {
      this._estimatedRowHeight = e;
    }
  }]);
  var R = classPropertyUtil.defineClassProps(function e(t) {
    var {
      keyMapper: i
    } = t;
    classCallCheckUtil.classCallCheck(this, e);
    objectPropertySetter.setObjectProperty(this, "_keyMapper", undefined);
    objectPropertySetter.setObjectProperty(this, "_rows", undefined);
    this._keyMapper = i;
    this._rows = {};
  }, [{
    key: "get",
    value: function (e) {
      var t = this._keyMapper(e);
      if (t in this._rows) {
        return this._rows[t];
      } else {
        return null;
      }
    }
  }, {
    key: "set",
    value: function (e, t) {
      var i = this._keyMapper(e);
      this._rows[i] = t;
    }
  }, {
    key: "setKeyMapper",
    value: function (e) {
      this._keyMapper = e;
    }
  }]);
  var A = classPropertyUtil.defineClassProps(function e(t) {
    var {
      numberOfSections: i,
      numberOfRows: r
    } = t;
    classCallCheckUtil.classCallCheck(this, e);
    objectPropertySetter.setObjectProperty(this, "_numberOfSections", undefined);
    objectPropertySetter.setObjectProperty(this, "_numberOfRows", undefined);
    objectPropertySetter.setObjectProperty(this, "_oneDimMap", undefined);
    objectPropertySetter.setObjectProperty(this, "_twoDimMap", undefined);
    this.update({
      numberOfSections: i,
      numberOfRows: r
    });
  }, [{
    key: "update",
    value: function (e) {
      var {
        numberOfSections: t,
        numberOfRows: i
      } = e;
      this._numberOfSections = t;
      this._numberOfRows = i;
      this._generateDimMap();
    }
  }, {
    key: "numberOfRows",
    value: function (e) {
      if (typeof this._numberOfRows == "function") {
        return this._numberOfRows(e);
      } else {
        return this._numberOfRows;
      }
    }
  }, {
    key: "isEmpty",
    value: function () {
      return !this._oneDimMap || this._oneDimMap.length === 0;
    }
  }, {
    key: "isFirst",
    value: function (e) {
      var {
        section: t,
        row: i
      } = e;
      return t === 0 && i === 0;
    }
  }, {
    key: "isLast",
    value: function (e) {
      var {
        section: t,
        row: i
      } = e;
      return t === this._numberOfSections - 1 && this.isLastRowInSection({
        section: t,
        row: i
      });
    }
  }, {
    key: "indexOf",
    value: function (e) {
      var {
        section: i,
        row: r
      } = e;
      return this._twoDimMap[i]?.[r];
    }
  }, {
    key: "isLastRowInSection",
    value: function (e) {
      var {
        section: t,
        row: i
      } = e;
      return this.numberOfRows(t) === i + 1;
    }
  }, {
    key: "_generateDimMap",
    value: function () {
      this._twoDimMap = Array(this._numberOfSections);
      this._oneDimMap = [];
      var e = 0;
      var t = 0;
      for (; t < this._numberOfSections; t++) {
        var i = this.numberOfRows(t) || 1;
        this._twoDimMap[t] = Array(i);
        for (var r = 0; r < i; r++) {
          this._twoDimMap[t][r] = e;
          this._oneDimMap[e] = {
            section: t,
            row: r
          };
          e += 1;
        }
      }
    }
  }, {
    key: "forEach",
    value: function (e, t, i) {
      var {
        section: s,
        row: o
      } = e;
      var {
        section: a,
        row: l
      } = t;
      var u = this._twoDimMap[s]?.[o];
      var d = this._twoDimMap[a]?.[l];
      var c = u;
      for (; c <= d; c++) {
        i(this._oneDimMap[c]);
      }
    }
  }, {
    key: "min",
    value: function (e, t) {
      if (this.compare(e, t) <= 0) {
        return e;
      } else {
        return t;
      }
    }
  }, {
    key: "max",
    value: function (e, t) {
      if (this.compare(e, t) >= 0) {
        return e;
      } else {
        return t;
      }
    }
  }, {
    key: "subCount",
    value: function (e, t) {
      var {
        section: r,
        row: n
      } = e;
      var s = Math.max(0, this._twoDimMap[r]?.[n] - t);
      return this._oneDimMap[s];
    }
  }, {
    key: "addCount",
    value: function (e, t) {
      var {
        section: r,
        row: n
      } = e;
      var s = Math.min(this._oneDimMap.length - 1, this._twoDimMap[r]?.[n] + t);
      return this._oneDimMap[s];
    }
  }, {
    key: "sub",
    value: function (e, t) {
      var {
        section: r,
        row: n
      } = e;
      var {
        section: s,
        row: o
      } = t;
      return this._twoDimMap[r][n] - this._twoDimMap[s]?.[o];
    }
  }, {
    key: "compare",
    value: function (e, t) {
      if (e) {
        if (t) {
          if (e.section !== t.section) {
            return e.section - t.section;
          } else if (e.row !== t.row) {
            return e.row - t.row;
          } else {
            return 0;
          }
        } else {
          return 1;
        }
      } else {
        return -1;
      }
    }
  }, {
    key: "findBetween",
    value: function (e, t) {
      var i = [];
      this.forEach(e, t, e => {
        i.push(e);
      });
      return i;
    }
  }]);
  function P(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      i.push.apply(i, r);
    }
    return i;
  }
  function I(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t] ?? {};
      if (t % 2) {
        P(Object(i), true).forEach(function (t) {
          objectPropertySetter.setObjectProperty(e, t, i[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(i));
      } else {
        P(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
    }
    return e;
  }
  function N() {
    try {
      var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (N = function () {
      return !!e;
    })();
  }
  var x = {
    REQUESTED_BY_PROPS: "REQUESTED_BY_PROPS",
    REQUESTED_BY_API: "REQUESTED_BY_API",
    REQUESTED_BY_RESIZE: "REQUESTED_BY_RESIZE",
    OBSERVED: "OBSERVED"
  };
  var C = {
    START: "start",
    CENTER: "center",
    END: "end",
    NEAREST: "nearest"
  };
  var L = {
    RESIZED: "RESIZED",
    REFRESH: "REFRESH",
    SCROLL: "SCROLL"
  };
  var M = e => e === "v";
  var D = {
    position: "relative",
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    overflowY: "overlay",
    transform: "translateY(0)",
    contain: "strict"
  };
  var H = function (e) {
    function t(e) {
      classCallCheckUtil.classCallCheck(this, t);
      i = t;
      r = [e];
      i = getPrototypeOfHelper.getPrototypeOf(i);
      s = possibleConstructorReturn.constructorReturn(this, N() ? Reflect.construct(i, r || [], getPrototypeOfHelper.getPrototypeOf(this).constructor) : i.apply(this, r));
      objectPropertySetter.setObjectProperty(s, "_onContainerResize", e => {
        var t = e.getContainerSize();
        if (s.state.containerHeight !== t.y) {
          s.state.containerHeight = t.y;
          var i = e.getPosition();
          s._calcRenderInfoAndRerender(i, L.RESIZED);
          if (s.props.onContainerResize) {
            s.props.onContainerResize(t);
          }
        }
      });
      objectPropertySetter.setObjectProperty(s, "_onScroll", (e, t) => {
        var {
          forward: i
        } = t;
        var {
          scrollReason: r
        } = s.state;
        var {
          REQUESTED_BY_PROPS: n,
          REQUESTED_BY_RESIZE: o
        } = x;
        var a = r === n || r === o ? L.RESIZED : L.SCROLL;
        if (!s.state.scrollToRowReady && s.state.requestedScrollPosition) {
          s._markScrollToRowReadyAfterScroll(e, s.state.requestedScrollPosition);
        }
        s._calcRenderInfoAndRerender(e, a, {
          forward: i,
          reason: x.OBSERVED
        });
        if (s.props.onScroll) {
          s.props.onScroll(e);
        }
      });
      var i;
      var r;
      var s;
      var l = t.createKeyMapper(e);
      var d = new R({
        keyMapper: l
      });
      var c = e.sizeCache || s._initSizeCache({
        keyMapper: l
      });
      var p = s._initPositionMap();
      var h = {
        dataHash: e.dataHash,
        sectionRowCount: e.dataHash ? null : t.calcSectionRowCount(e),
        scrollToRow: e.scrollToRow,
        scrollReason: e.scrollToRow ? x.REQUESTED_BY_PROPS : x.OBSERVED,
        positionMap: p,
        keyMapper: l,
        sizeCache: c,
        rowCache: d,
        position: {
          x: 0,
          y: 0
        },
        indexTree: s._initIndexTree(e),
        containerHeight: e.height,
        scrollToRowReady: !e.variableHeight || !e.scrollToRow
      };
      t.updatePositionMap(h, e);
      var f = e.scrollToRow ? t.calcScrollPositionForRow(h, e.scrollToRow) : {
        x: 0,
        y: 0
      };
      s.state = I(I({
        requestedScrollPosition: f
      }, t.calcRenderInfo(h, e, {
        position: f,
        calcReason: L.REFRESH
      })), h);
      return s;
    }
    setPrototypeInheritance.setInheritance(t, e);
    return classPropertyUtil.defineClassProps(t, [{
      key: "componentDidMount",
      value: function () {
        this._scrollToRequestedPositionAfterRender();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        this._scrollToRequestedPositionAfterRender();
      }
    }, {
      key: "_scrollToRequestedPositionAfterRender",
      value: function () {
        var {
          scrollReason: e,
          requestedScrollPosition: t
        } = this.state;
        var {
          REQUESTED_BY_PROPS: i,
          REQUESTED_BY_API: r,
          REQUESTED_BY_RESIZE: n
        } = x;
        if (e === i || e === r || e === n) {
          this._scrollTo(t);
        }
      }
    }, {
      key: "_renderRangeChanged",
      value: function (e) {
        var {
          indexTree: t
        } = this.state;
        return this.state.headerVisible !== e.headerVisible || this.state.footerVisible !== e.footerVisible || t.compare(this.state.renderIndexPathTop, e.renderIndexPathTop) !== 0 || t.compare(this.state.renderIndexPathBottom, e.renderIndexPathBottom) !== 0;
      }
    }, {
      key: "_getAxis",
      value: function () {
        var {
          direction: e
        } = this.props;
        if (M(e)) {
          return "y";
        } else {
          return "x";
        }
      }
    }, {
      key: "_initIndexTree",
      value: function (e) {
        return new A({
          numberOfSections: e.numberOfSections,
          numberOfRows: e.numberOfRows
        });
      }
    }, {
      key: "_initSizeCache",
      value: function (e) {
        var {
          keyMapper: t
        } = e;
        var {
          estimatedRowHeight: i,
          headerHeight: r,
          footerHeight: n,
          sectionHeaderHeight: s,
          sectionFooterHeight: o
        } = this.props;
        return new k({
          keyMapper: t,
          estimatedRowHeight: i,
          headerHeight: r,
          footerHeight: n,
          sectionHeaderHeight: s,
          sectionFooterHeight: o
        });
      }
    }, {
      key: "_initPositionMap",
      value: function () {
        return new w();
      }
    }, {
      key: "_calcRenderInfoAndRerender",
      value: function (e, i, r) {
        var n = t.calcRenderInfo(this.state, this.props, {
          position: e,
          forward: r && r.forward,
          calcReason: i
        });
        var s = this._renderRangeChanged(n);
        if (r) {
          if (!s) {
            this.state.scrollReason = r.reason;
            this.state.position = e;
            return;
          }
          n.scrollReason = r.reason;
        }
        this.setState(n);
      }
    }, {
      key: "_reCalcScrollToRowPositionByRowResizedAndRerender",
      value: function () {
        var {
          scrollToRow: e
        } = this.state;
        if (e) {
          var i = t.calcScrollPositionForRow(this.state, e);
          var r = t.calcRenderInfo(this.state, this.props, {
            position: i,
            calcReason: L.RESIZED
          });
          r.requestedScrollPosition = i;
          r.scrollReason = x.REQUESTED_BY_RESIZE;
          this.setState(r);
        } else {
          this.forceUpdate();
        }
      }
    }, {
      key: "_reCalcPositionByRowResizedAndRerender",
      value: function (e) {
        var {
          position: t
        } = this.state;
        var i = {
          x: t.x,
          y: t.y + e
        };
        this.state.position = i;
        this.state.requestedScrollPosition = i;
        this._scrollTo(i);
        this.forceUpdate();
      }
    }, {
      key: "_getHeightName",
      value: function () {
        if (M(this.props.direction)) {
          return "height";
        } else {
          return "width";
        }
      }
    }, {
      key: "_scrollTo",
      value: function (e) {
        if (this._refScroller) {
          this._refScroller.scrollTo(e);
        }
      }
    }, {
      key: "scrollToPosition",
      value: function (e) {
        this._scrollTo(e);
      }
    }, {
      key: "scrollToTop",
      value: function () {
        this.setState({
          requestedScrollPosition: {
            x: 0,
            y: 0
          },
          scrollReason: x.REQUESTED_BY_API
        });
      }
    }, {
      key: "scrollToBottom",
      value: function () {
        if (this._refScroller) {
          var e = this._refScroller.getMaxPosition();
          this.setState({
            requestedScrollPosition: e,
            scrollReason: x.REQUESTED_BY_API
          });
        }
      }
    }, {
      key: "scrollToRow",
      value: function (e) {
        if (e) {
          var i = t.calcScrollPositionForRow(this.state, e);
          var r = t.calcRenderInfo(this.state, this.props, {
            position: i,
            calcReason: L.REQUESTED_BY_API
          });
          r.requestedScrollPosition = i;
          r.scrollReason = x.REQUESTED_BY_RESIZE;
          r.scrollToRowReady = !this.props.variableHeight;
          r.scrollToRow = e;
          this.setState(r);
        }
      }
    }, {
      key: "getCurrentPosition",
      value: function () {
        return this.state.position;
      }
    }, {
      key: "getMaxPosition",
      value: function () {
        return {
          x: 0,
          y: this.state.positionMap.getTotalHeight() - this.state.containerHeight
        };
      }
    }, {
      key: "getContainerHeight",
      value: function () {
        return this.state.containerHeight;
      }
    }, {
      key: "getContentHeight",
      value: function () {
        return this.state.positionMap.getTotalHeight();
      }
    }, {
      key: "getRowPositionInfo",
      value: function (e) {
        return this.state.positionMap.getHeightRangeAt(e);
      }
    }, {
      key: "getRowTopInfo",
      value: function () {
        var {
          position: e,
          positionMap: t
        } = this.state;
        var i = t.findIndexPathByPosition(e.y) || {
          section: 0,
          row: 0
        };
        var [r] = t.getHeightRangeAt(i);
        return {
          indexPath: i,
          offset: r - e.y
        };
      }
    }, {
      key: "getRowBottomInfo",
      value: function () {
        var {
          position: e,
          positionMap: t,
          containerHeight: i
        } = this.state;
        var r = e.y + i;
        if (t.getTotalHeight() - i < 0) {
          r = i;
        }
        var n = t.findIndexPathByPosition(r) || {
          section: 0,
          row: 0
        };
        var [s] = t.getHeightRangeAt(n);
        return {
          indexPath: n,
          offset: s - e.y
        };
      }
    }, {
      key: "getRowRenderInfo",
      value: function () {
        var {
          renderIndexPathTop: e,
          renderIndexPathBottom: t
        } = this.state;
        return {
          topIndex: e,
          bottomIndex: t
        };
      }
    }, {
      key: "isNearBottom",
      value: function (e) {
        return this._refScroller.isNearBottom(e);
      }
    }, {
      key: "_markScrollToRowReady",
      value: function () {
        if (!this.state.scrollToRowReady) {
          clearTimeout(this._resetScrollToRowReadyTimer);
          this._resetScrollToRowReadyTimer = setTimeout(() => {
            this.state.scrollToRowReady = true;
          });
        }
      }
    }, {
      key: "_markScrollToRowReadyAfterRowResized",
      value: function () {
        this._markScrollToRowReady();
      }
    }, {
      key: "_markScrollToRowReadyAfterScroll",
      value: function (e, t) {
        var i = this.getMaxPosition();
        var r = Math.min(t.y, i.y);
        if (e.y === r) {
          this._markScrollToRowReady();
        }
      }
    }, {
      key: "_onRowResized",
      value: function (e, t) {
        var i = this.state.sizeCache.get(e);
        if (i === t.height) {
          this._markScrollToRowReadyAfterRowResized(e);
          return;
        }
        this.state.sizeCache.set(e, t.height);
        this.state.positionMap.setItemHeight(e, t.height);
        var {
          scrollToRowReady: r,
          indexTree: n,
          position: s,
          positionMap: o
        } = this.state;
        if (r) {
          var a = o.findIndexPathByPosition(s.y);
          if (n.compare(e, a) < 0) {
            this._reCalcPositionByRowResizedAndRerender(t.height - i);
          } else {
            this.forceUpdate();
          }
        } else {
          this._markScrollToRowReadyAfterRowResized(e);
          this._reCalcScrollToRowPositionByRowResizedAndRerender();
        }
        if (this.props.onRowResize) {
          this.props.onRowResize(this.state.keyMapper(e), e, t);
        }
      }
    }, {
      key: "setPositionStyle",
      value: function (e, t) {
        e.position = "absolute";
        if (this.props.useTransform) {
          e.transform = `translate(0, ${t}px)`;
        } else {
          e.top = `${t}px`;
        }
      }
    }, {
      key: "renderScrollHolder",
      value: function () {
        var {
          positionMap: e
        } = this.state;
        var {
          onHolderRendered: t
        } = this.props;
        var i = e.getTotalHeight() - 1;
        var r = {
          height: 1,
          width: "100%"
        };
        if (t) {
          t(i + 1);
        }
        this.setPositionStyle(r, i);
        return reactCoreLibraryReexport.createElement("div", {
          key: "scroll_holder",
          style: r
        });
      }
    }, {
      key: "renderContent",
      value: function () {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, this.renderScrollHolder(), reactCoreLibraryReexport.createElement("div", {
          className: "list_items"
        }, this.renderHeader(), this.renderSections(), this.renderFooter()));
      }
    }, {
      key: "renderHeader",
      value: function () {
        if (!this.props.renderHeader || !this.state.headerVisible) {
          return null;
        }
        var e = {};
        this.setPositionStyle(e, 0);
        var t = this.props.renderHeader(e);
        if (!t) {
          this.state.positionMap.setHeaderHeight(0);
        }
        return t;
      }
    }, {
      key: "renderFooter",
      value: function () {
        if (!this.props.renderFooter || !this.state.footerVisible) {
          return null;
        }
        var [e] = this.state.positionMap.getFooterHeightRange();
        var t = {};
        this.setPositionStyle(t, e);
        var i = this.props.renderFooter(t);
        if (!i) {
          this.state.positionMap.setFooterHeight(0);
        }
        return i;
      }
    }, {
      key: "renderSections",
      value: function () {
        var {
          numberOfSections: e
        } = this.props;
        var {
          renderIndexPathTop: t,
          renderIndexPathBottom: i
        } = this.state;
        if (!t) {
          return null;
        }
        var r = t.section;
        var n = Math.min(e - 1, i.section);
        var s = [];
        var o = r;
        for (; o <= n; o++) {
          s.push(this.renderHeaderInSection(o));
          s.push(...this.renderRowsInSection(o));
          s.push(this.renderFooterInSection(o));
        }
        return s.filter(e => !!e);
      }
    }, {
      key: "renderHeaderInSection",
      value: function (e) {
        if (!this.props.renderSectionHeader) {
          return null;
        }
        var {
          renderIndexPathTop: t,
          positionMap: i
        } = this.state;
        var {
          section: r
        } = t;
        if (e === r && t.row !== 0) {
          return null;
        }
        var [n] = i.getSectionHeaderRangeAt(e);
        var s = {};
        this.setPositionStyle(s, n);
        return this.props.renderSectionHeader(e, s);
      }
    }, {
      key: "renderFooterInSection",
      value: function (e) {
        if (!this.props.renderSectionFooter) {
          return null;
        }
        var {
          renderIndexPathBottom: t,
          indexTree: i,
          positionMap: r
        } = this.state;
        var {
          section: n
        } = t;
        if (e === n && !i.isLastRowInSection(t)) {
          return null;
        }
        var [s] = r.getSectionFooterRangeAt(e);
        var o = {};
        this.setPositionStyle(o, s);
        return this.props.renderSectionFooter(e, o);
      }
    }, {
      key: "renderMeasureForRow",
      value: function (e, t) {
        var i = this.state.keyMapper(t);
        return reactCoreLibraryReexport.createElement(f, {
          key: i,
          onResize: e => this._onRowResized(t, e)
        }, e);
      }
    }, {
      key: "renderRowInSection",
      value: function (e, t, i) {
        var {
          renderRow: r,
          recordForRowAt: n,
          variableHeight: s
        } = this.props;
        var {
          positionMap: o
        } = this.state;
        var a = {
          section: e,
          row: t
        };
        var l = n(a);
        var [u, d] = o.getHeightRangeAt(a);
        var c = {};
        this.setPositionStyle(c, u);
        var p = r(l, a, c, d - u, i);
        if (s) {
          p = this.renderMeasureForRow(p, a);
        }
        return p;
      }
    }, {
      key: "renderRowsInSection",
      value: function (e) {
        var i = 0;
        var r = t.numberOfRowsForSection(this.props, e) - 1;
        var {
          renderIndexPathTop: n,
          renderIndexPathBottom: s
        } = this.state;
        if (e === n.section) {
          i = Math.max(0, n.row);
        }
        if (e === s.section) {
          r = Math.min(r, s.row);
        }
        var o = [];
        var a = i;
        for (; a <= r; a++) {
          o.push(this.renderRowInSection(e, a, r));
        }
        return o;
      }
    }, {
      key: "render",
      value: function () {
        var {
          style: e,
          className: t
        } = this.props;
        var i = Object.assign({}, D, e);
        return reactCoreLibraryReexport.createElement(S, {
          ref: e => {
            this._refScroller = e;
          },
          style: i,
          className: t,
          lock: this.props.scrollLock,
          onScroll: this._onScroll,
          onScrollEnd: this.props.onScrollEnd,
          onContainerResize: this._onContainerResize
        }, this.renderContent());
      }
    }], [{
      key: "numberOfRowsForSection",
      value: function (e, t) {
        var {
          numberOfRows: i
        } = e;
        if (typeof i == "function") {
          return i(t);
        } else {
          return i;
        }
      }
    }, {
      key: "updatePositionMap",
      value: function (e, i) {
        var {
          positionMap: r,
          sizeCache: n
        } = e;
        var {
          numberOfSections: s
        } = i;
        r.clear();
        r.setHeaderHeight(n.getHeaderHeight());
        for (var o = 0; o < s; o++) {
          r.setSectionHeaderHeight(o, n.getSectionHeaderHeight(o));
          for (var a = 0; a < t.numberOfRowsForSection(i, o); a++) {
            var l = {
              section: o,
              row: a
            };
            r.setItemHeight(l, n.get(l));
          }
          r.setSectionFooterHeight(o, n.getSectionFooterHeight(o));
        }
        r.setFooterHeight(n.getFooterHeight());
      }
    }, {
      key: "calcScrollPositionForRow",
      value: function (e, t) {
        var i;
        var {
          indexPath: r,
          align: n = C.START,
          offset: s = 0
        } = t;
        var {
          positionMap: o,
          containerHeight: a,
          position: l
        } = e;
        var [u, d] = o.getHeightRangeAt(r);
        var c = d - a;
        switch (n) {
          case C.START:
            i = u;
            break;
          case C.CENTER:
            i = u - (a - (d - u)) / 2;
            break;
          case C.END:
            i = c;
            break;
          case C.NEAREST:
            i = Math.abs(u - l.y) > Math.abs(c - l.y) ? c : u;
            break;
          default:
            i = u;
        }
        return {
          x: 0,
          y: i - s
        };
      }
    }, {
      key: "calcRenderInfo",
      value: function (e, t, i) {
        var {
          position: r,
          forward: n,
          calcReason: s
        } = i;
        var o = r.y;
        var {
          containerHeight: a,
          positionMap: l,
          indexTree: u
        } = e;
        var d = o + a;
        if (l.getTotalHeight() - a < 0) {
          d = a;
        }
        var c = l.isHeaderVisible(o);
        var p = l.isFooterVisible(d);
        var h = l.findIndexPathByPosition(o);
        if (!h) {
          return {
            position: r,
            headerVisible: c,
            footerVisible: p
          };
        }
        var f = l.findIndexPathByPosition(d);
        if (p) {
          var y = l.getHeightAt(f);
          h = l.findIndexPathByPosition(y - a);
          c = l.isHeaderVisible(d - a);
        }
        var {
          bufferSize: g,
          minimumBufferDistance: v
        } = t;
        var m = h;
        var b = f;
        var E = e.renderIndexPathTop || h;
        var S = e.renderIndexPathBottom || f;
        if (s === L.RESIZED) {
          m = u.min(h, E);
          b = u.max(f, S);
        } else if (s === L.SCROLL) {
          if (n.y) {
            b = u.max(f, S);
          } else {
            m = u.min(h, E);
          }
        }
        if (g) {
          var O = g >>> 1;
          if (s === L.RESIZED || s === L.REFRESH) {
            m = u.min(m, u.subCount(h, O));
            b = u.max(b, u.addCount(f, O));
          } else if (s === L.SCROLL) {
            var _ = 0;
            if ((n.y ? u.isLast(S) ? Infinity : u.sub(S, f) : u.isFirst(E) ? Infinity : u.sub(h, E)) <= v) {
              m = u.subCount(h, O);
              b = u.addCount(f, O);
            } else {
              m = e.renderIndexPathTop;
              b = e.renderIndexPathBottom;
            }
          }
        }
        return {
          position: r,
          headerVisible: c,
          footerVisible: p,
          renderIndexPathTop: m,
          renderIndexPathBottom: b
        };
      }
    }, {
      key: "createKeyMapper",
      value: function (e) {
        var {
          keyMapper: t,
          recordForRowAt: i
        } = e;
        return t || function (e) {
          var t = i(e);
          var r = t == null ? undefined : t.id;
          var {
            section: n,
            row: s
          } = e;
          return r || `${n}-${s}`;
        };
      }
    }, {
      key: "calcSectionRowCount",
      value: function (e) {
        var {
          numberOfSections: t
        } = e;
        var i = [];
        var r = 0;
        for (; r < t; r++) {
          i.push(this.numberOfRowsForSection(e, r));
        }
        return i;
      }
    }, {
      key: "sectionRowChanged",
      value: function (e, t) {
        if (e.length !== t.length) {
          return true;
        }
        for (var i = 0; i < e.length; i++) {
          if (e[i] !== t[i]) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "updateSizeCache",
      value: function (e, t, i) {
        var {
          headerHeight: r,
          footerHeight: n,
          sectionHeaderHeight: s,
          sectionFooterHeight: o
        } = t;
        e.setHeaderHeight(r);
        e.setFooterHeight(n);
        e.setSectionHeaderHeight(s);
        e.setSectionFooterHeight(o);
        e.setKeyMapper(i);
      }
    }, {
      key: "getDerivedStateFromProps",
      value: function (e, i) {
        var r;
        var n = null;
        var s = false;
        var {
          sectionRowCount: o,
          dataHash: a
        } = i;
        var {
          dataHash: l
        } = e;
        if (a) {
          s = a !== l;
        } else {
          r = t.calcSectionRowCount(e);
          s = t.sectionRowChanged(o, r);
        }
        if (s) {
          (n = I({}, i)).sectionRowCount = r;
          n.dataHash = l;
          var u = t.createKeyMapper(e);
          t.updateSizeCache(n.sizeCache, e, u);
          n.keyMapper = u;
          n.rowCache.setKeyMapper(u);
          n.indexTree.update(e);
          var {
            positionMap: d
          } = i;
          d.clear();
          t.updatePositionMap(i, e);
          var c = i.position;
          if (i.scrollToRow !== e.scrollToRow) {
            if (e.scrollToRow) {
              n.scrollToRowReady = !e.variableHeight;
              c = t.calcScrollPositionForRow(i, e.scrollToRow);
              n.requestedScrollPosition = c;
              n.scrollReason = x.REQUESTED_BY_PROPS;
              n.scrollToRow = e.scrollToRow;
            } else {
              n.scrollToRow = null;
              n.scrollToRowReady = true;
            }
          }
          var {
            headerVisible: p,
            footerVisible: h,
            renderIndexPathTop: f,
            renderIndexPathBottom: y
          } = t.calcRenderInfo(n, e, {
            position: c,
            calcReason: L.REFRESH
          });
          n.headerVisible = p;
          n.footerVisible = h;
          n.renderIndexPathTop = f;
          n.renderIndexPathBottom = y;
        }
        return n;
      }
    }]);
  }(reactCoreLibraryReexport.Component);
  H.defaultProps = {
    direction: "v",
    numberOfSections: 1,
    variableHeight: false,
    scrollOnWindow: false,
    height: window.innerHeight,
    position: 0,
    rowHeight: 0,
    headerHeight: 0,
    footerHeight: 0,
    sectionHeaderHeight: 0,
    sectionFooterHeight: 0,
    estimatedRowHeight: 0,
    estimatedSectionHeaderHeight: 0,
    estimatedSectionFooterHeight: 0,
    bufferSize: 20,
    minimumBufferDistance: 5,
    scrollLock: false,
    useTransform: true
  };
  H.propTypes = {
    style: p.object,
    height: p.number,
    position: p.number,
    keyMapper: p.func,
    scrollOnWindow: p.bool,
    dataHash: p.number,
    direction: p.oneOf(["v", "h"]),
    numberOfSections: p.number,
    numberOfRows: p.oneOfType([p.func, p.number]),
    rowHeight: p.number,
    headerHeight: p.number,
    footerHeight: p.number,
    variableHeight: p.bool,
    renderHeader: p.func,
    renderFooter: p.func,
    sectionHeaderHeight: p.oneOfType([p.func, p.number]),
    sectionFooterHeight: p.oneOfType([p.func, p.number]),
    renderSectionHeader: p.func,
    renderRow: p.func.isRequired,
    renderSectionFooter: p.func,
    recordForRowAt: p.func.isRequired,
    estimatedRowHeight: p.number,
    estimatedSectionHeaderHeight: p.number,
    estimatedSectionFooterHeight: p.number,
    scrollToRow: p.object,
    bufferSize: p.number,
    minimumBufferDistance: p.number,
    onContainerResize: p.func,
    onHolderRendered: p.func,
    onScroll: p.func,
    onScrollEnd: p.func,
    scrollLock: p.bool,
    useTransform: p.bool
  };
  var B = H;
  require.d(exports, {
    VirtualizedList: function () {
      return B;
    }
  });
}