// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Select'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 71518.fd54164e.js
         * chunkId: 71518
         * moduleId: 981226
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var f = propTypesFactoryWrapper;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var keyboardKeyCodes_3 = require("keyboard-key-codes_3") /*id: 174510*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  var enterKeyCheck = require("enter-key-check") /*id: 943784*/;
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  function E(e, t) {
    var n = {};
    for (var s in e) {
      if (Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0) {
        n[s] = e[s];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var s = Object.getOwnPropertySymbols(e);
      for (; i < s.length; i++) {
        if (t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i])) {
          n[s[i]] = e[s[i]];
        }
      }
    }
    return n;
  }
  class C extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this._keydownHandler = null;
    }
    init() {
      this._setDropdownWidth();
      let e = this.getProp("defaultOpen");
      let t = this.getProp("open");
      let n = this._collectOptions();
      this._setDefaultSelection(n);
      if (e || t) {
        this.open(undefined, n);
      }
      if (this.getProp("autoFocus")) {
        this.focus();
      }
    }
    focus() {
      let e = this._isFilterable();
      let t = this._isMultiple();
      this._adapter.updateFocusState(true);
      this._adapter.setIsFocusInContainer(false);
      if (e && t) {
        this.focusInput();
      } else if (e && !t) {
        this.toggle2SearchInput(true);
      } else {
        this._focusTrigger();
      }
    }
    _focusTrigger() {
      this._adapter.focusTrigger();
    }
    destroy() {
      this._adapter.unregisterClickOutsideHandler();
    }
    _setDropdownWidth() {
      let e;
      let {
        style: t,
        dropdownMatchSelectWidth: n
      } = this.getProps();
      if (n) {
        e = t && isNumberUtil.isNumber(t.width) ? t.width : t && isStringTypeCheck.isString(t.width) && !t.width.includes("%") ? t.width : this._adapter.getTriggerWidth();
        this._adapter.setOptionWrapperWidth(e);
      }
    }
    _collectOptions() {
      let e = this._adapter.getOptionsFromChildren();
      this._adapter.updateOptions(e);
      this._adapter.rePositionDropdown();
      return e;
    }
    _setDefaultSelection(e) {
      let {
        value: t
      } = this.getProps();
      let {
        defaultValue: n
      } = this.getProps();
      if (!this._isControlledComponent()) {
        t = n;
      }
      this._update(t, e);
    }
    handleOptionListChange() {
      let e = this._collectOptions();
      let {
        selections: t
      } = this.getStates();
      this.updateOptionsActiveStatus(t, e);
      let {
        defaultActiveFirstOption: n
      } = this.getProps();
      if (n) {
        this._adapter.updateFocusIndex(0);
      }
    }
    handleOptionListChangeHadDefaultValue() {
      let e;
      let t = this.getState("selections");
      let {
        onChangeWithObject: n
      } = this.getProps();
      let s = this._isMultiple();
      switch (true) {
        case s && !!t.size:
          try {
            e = [...t].map(e => n ? e[1] : e[1].value);
          } catch (t) {
            e = [];
          }
          break;
        case s && !t.size:
          e = [];
          break;
        case !s && !!t.size:
          try {
            e = n ? [...t][0][1] : [...t][0][1].value;
          } catch (e) {}
        case !s && !t.size:
      }
      let i = this._adapter.getOptionsFromChildren();
      this._update(e, i);
    }
    handleValueChange(e) {
      let t;
      let {
        allowCreate: n,
        autoClearSearchValue: s,
        remote: i
      } = this.getProps();
      let {
        inputValue: o
      } = this.getStates();
      if (n && this._isControlledComponent()) {
        (t = this.getState("options")).forEach(e => e._show = true);
      } else {
        t = this._adapter.getOptionsFromChildren();
      }
      this._adapter.rePositionDropdown();
      if (this._isFilterable() && !s && o && !i) {
        t = this._filterOption(t, o);
      }
      this._update(e, t);
    }
    _update(e, t) {
      let n;
      if (this._isMultiple()) {
        n = this._updateMultiple(e, t);
        this.updateOverflowItemCount(n.size);
      } else {
        n = this._updateSingle(e, t);
      }
      this._adapter.updateSelection(n);
      this.updateOptionsActiveStatus(n, t);
    }
    _updateSingle(e, t) {
      let n = new Map();
      let {
        onChangeWithObject: s
      } = this.getProps();
      let i = s && e !== undefined ? e.value : e;
      let o = t.filter(e => e.value === i);
      let r = !o.length && i != null;
      if (o.length) {
        let e = Object.assign({}, o[0]);
        n.set(e.label, e);
      } else if (r) {
        let t = {
          value: e,
          label: e,
          _notExist: true,
          _scrollIndex: -1
        };
        if (s) {
          t = Object.assign(Object.assign({}, e), {
            _notExist: true,
            _scrollIndex: -1
          });
        }
        n.set(t.label, t);
      }
      return n;
    }
    _updateMultiple(e, t) {
      let n = this.getState("selections");
      let s = [];
      let i = Array.isArray(e);
      this.checkMultipleProps();
      if (n.size) {
        s = [...n].map(e => e[1]);
      }
      let o = new Map();
      let r = e;
      let {
        onChangeWithObject: l
      } = this.getProps();
      if (l && i) {
        r = e.map(e => e.value);
      }
      if (i && r.length) {
        r.forEach((n, i) => {
          let r = t.findIndex(e => e.value === n);
          if (r !== -1) {
            o.set(t[r].label, t[r]);
          } else {
            let t = s.findIndex(e => e.value === n);
            if (t !== -1) {
              let e = s[t];
              o.set(e.label, e);
            } else {
              let t = {
                value: n,
                label: n,
                _notExist: true
              };
              if (l) {
                t = Object.assign(Object.assign({}, e[i]), {
                  _notExist: true
                });
              }
              o.set(t.label, Object.assign(Object.assign({}, t), {
                _scrollIndex: -1
              }));
            }
          }
        });
      }
      return o;
    }
    _isMultiple() {
      return this.getProp("multiple");
    }
    _isDisabled() {
      return this.getProp("disabled");
    }
    _isFilterable() {
      return !!this.getProp("filter");
    }
    handleClick(e) {
      let {
        clickToHide: t
      } = this.getProps();
      let {
        isOpen: n
      } = this.getStates();
      if (!this._isDisabled()) {
        if (n) {
          if (n && t) {
            this.close(e);
          } else if (n && !t) {
            this.focusInput();
          }
        } else {
          this.open();
          this._notifyFocus(e);
        }
      }
    }
    open(e, t) {
      let n = this._isFilterable();
      let s = t || this.getState("options");
      if (n) {
        let e = this._filterOption(s, "").filter(e => !e._inputCreateOnly);
        this._adapter.updateOptions(e);
        this.toggle2SearchInput(true);
      } else {
        this._adapter.updateFocusState(true);
      }
      this._adapter.openMenu();
      this._setDropdownWidth();
      this._adapter.notifyDropdownVisibleChange(true);
      this.bindKeyBoardEvent();
      this._adapter.registerClickOutsideHandler(e => {
        this.close(e);
        this._notifyBlur(e);
        this._adapter.updateFocusState(false);
      });
    }
    toggle2SearchInput(e) {
      if (e) {
        this._adapter.toggleInputShow(e, () => this.focusInput());
      } else {
        this._adapter.toggleInputShow(e, () => undefined);
      }
    }
    close(e, t) {
      this._adapter.closeMenu();
      this._adapter.notifyDropdownVisibleChange(false);
      this._adapter.setIsFocusInContainer(false);
      this._adapter.unregisterClickOutsideHandler();
      let n = this._isFilterable();
      if (n) {
        this.toggle2SearchInput(false);
      }
      this._adapter.once("popoverClose", () => {
        if (n) {
          this.clearInput(e);
        }
        if (t) {
          t();
        }
      });
    }
    onSelect(e, t, n) {
      if (!this._isDisabled()) {
        if (e._inputCreateOnly) {
          this._adapter.notifyCreate(e);
        }
        if (this._isMultiple()) {
          this._handleMultipleSelect(e, n);
        } else {
          this._handleSingleSelect(e, n);
          this._focusTrigger();
        }
        this._adapter.updateFocusIndex(t);
      }
    }
    _handleSingleSelect(e, t) {
      var {
        value: n,
        label: s
      } = e;
      var i = E(e, ["value", "label"]);
      let o = new Map().set(s, Object.assign({
        value: n,
        label: s
      }, i));
      this._notifySelect(n, Object.assign({
        value: n,
        label: s
      }, i));
      if (this._isControlledComponent()) {
        this.close(t, () => {
          this._notifyChange(o);
        });
      } else {
        this._adapter.updateSelection(o);
        this._notifyChange(o);
        this.close(t, () => {
          this.updateOptionsActiveStatus(o);
        });
      }
    }
    _handleMultipleSelect(e, t) {
      var {
        value: n,
        label: s
      } = e;
      var i = E(e, ["value", "label"]);
      let o = this._adapter.getMaxLimit();
      let r = this._adapter.getSelections();
      let {
        autoClearSearchValue: l
      } = this.getProps();
      if (r.has(s)) {
        this._notifyDeselect(n, Object.assign({
          value: n,
          label: s
        }, i));
        r.delete(s);
      } else if (o && r.size === o) {
        this._adapter.notifyMaxLimit(Object.assign({
          value: n,
          label: s
        }, throttledOmitPathStringify.omitPathStringify(i, "_scrollIndex")));
        return;
      } else {
        this._notifySelect(n, Object.assign({
          value: n,
          label: s
        }, i));
        r.set(s, Object.assign({
          value: n,
          label: s
        }, i));
      }
      if (this._isControlledComponent()) {
        this._notifyChange(r);
        if (this._isFilterable()) {
          if (l) {
            this.clearInput(t);
          }
          this.focusInput();
        }
      } else {
        this._adapter.updateSelection(r);
        this.updateOverflowItemCount(r.size);
        this._adapter.rePositionDropdown();
        let {
          options: e
        } = this.getStates();
        if (this._isFilterable()) {
          if (l) {
            this.clearInput(t);
            e = this._filterOption(e, "");
          }
          this.focusInput();
        }
        this.updateOptionsActiveStatus(r, e);
        this._notifyChange(r);
      }
    }
    clearSelected() {
      let e = new Map();
      if (!this._isControlledComponent()) {
        this._adapter.updateSelection(e);
        this.updateOptionsActiveStatus(e);
      }
      this._notifyChange(e);
      this._adapter.notifyClear();
      let {
        isOpen: t
      } = this.getStates();
      if (t) {
        this._adapter.rePositionDropdown();
      }
    }
    updateOptionsActiveStatus(e, t = this.getState("options")) {
      let {
        allowCreate: n
      } = this.getProps();
      let s = t.map(t => {
        if (e.has(t.label)) {
          t._selected = true;
          if (n) {
            delete t._inputCreateOnly;
          }
        } else {
          if (t._inputCreateOnly) {
            t._show = false;
          }
          t._selected = false;
        }
        return t;
      });
      this._adapter.updateOptions(s);
    }
    removeTag(e) {
      let t = this._adapter.getSelections();
      t.delete(e.label);
      if (this._isControlledComponent()) {
        this._notifyDeselect(e.value, e);
      } else {
        this._notifyDeselect(e.value, e);
        this._adapter.updateSelection(t);
        this.updateOverflowItemCount(t.size);
        this.updateOptionsActiveStatus(t);
        this._adapter.rePositionDropdown();
      }
      this._notifyChange(t);
    }
    clearInput(e) {
      let {
        inputValue: t
      } = this.getStates();
      if (t !== "") {
        this._adapter.updateInputValue("");
        this._adapter.notifySearch("", e);
        let {
          options: t
        } = this.getStates();
        let {
          remote: n
        } = this.getProps();
        let s = t;
        if (!n) {
          s = this._filterOption(t, "");
        }
        this._adapter.updateOptions(s);
      }
    }
    focusInput() {
      this._adapter.focusInput();
      this._adapter.updateFocusState(true);
      this._adapter.setIsFocusInContainer(false);
    }
    handleInputChange(e, t) {
      this._adapter.updateInputValue(e);
      let {
        options: n,
        isOpen: s
      } = this.getStates();
      let {
        allowCreate: i,
        remote: o
      } = this.getProps();
      let r = n;
      if (!o) {
        r = this._filterOption(n, e);
      }
      r = this._createOptionByInput(i, r, e);
      this._adapter.updateOptions(r);
      this._adapter.notifySearch(e, t);
      if (this._isMultiple()) {
        this._adapter.rePositionDropdown();
      }
    }
    _filterOption(e, t) {
      let n = this.getProp("filter");
      if (!n) {
        return e;
      }
      if (typeof n == "boolean" && n) {
        let n = t.toLowerCase();
        return e.map(e => {
          let t = e.label.toString().toLowerCase();
          let s = e._parentGroup && e._parentGroup.label;
          let i = t.includes(n);
          let o = isStringTypeCheck.isString(s) && s.toLowerCase().includes(n);
          if (i || o) {
            e._show = true;
          } else {
            e._show = false;
          }
          return e;
        });
      }
      if (typeof n == "function") {
        return e.map(e => {
          if (n(t, e)) {
            e._show = true;
          } else {
            e._show = false;
          }
          return e;
        });
      }
    }
    _createOptionByInput(e, t, n) {
      if (e) {
        if (n) {
          let e = -1;
          let s = -1;
          t.forEach((t, i) => {
            if (t._show || t._inputCreateOnly) {
              if (t.label === n) {
                s = i;
              }
              if (t._inputCreateOnly) {
                e = i;
                t.value = n;
                t.label = n;
                t._show = true;
              }
            }
          });
          if (e === -1 && s === -1) {
            t.push({
              _show: true,
              _selected: false,
              value: n,
              label: n,
              _inputCreateOnly: true
            });
          }
          if (s !== -1) {
            t = t.filter(e => !e._inputCreateOnly);
          }
        } else {
          t = t.filter(e => !e._inputCreateOnly);
        }
      }
      return t;
    }
    bindKeyBoardEvent() {
      this._keydownHandler = e => {
        this._handleKeyDown(e);
      };
      this._adapter.registerKeyDown(this._keydownHandler);
    }
    unBindKeyBoardEvent() {
      if (this._keydownHandler) {
        this._adapter.unregisterKeyDown();
      }
    }
    _handleKeyDown(e) {
      let t = e.keyCode;
      let {
        loading: n,
        filter: s,
        multiple: i,
        disabled: o
      } = this.getProps();
      let {
        isOpen: r
      } = this.getStates();
      if (!n && !o) {
        switch (t) {
          case keyboardKeyCodes_3.keyCodeMap.UP:
            e.preventDefault();
            this._handleArrowKeyDown(-1);
            break;
          case keyboardKeyCodes_3.keyCodeMap.DOWN:
            e.preventDefault();
            this._handleArrowKeyDown(1);
            break;
          case keyboardKeyCodes_3.keyCodeMap.BACKSPACE:
            this._handleBackspaceKeyDown();
            break;
          case keyboardKeyCodes_3.keyCodeMap.ENTER:
            uiFocusNavigation.suppressEvent(e);
            this._handleEnterKeyDown(e);
            break;
          case keyboardKeyCodes_3.keyCodeMap.ESC:
            if (r) {
              this.close(e);
            }
            if (s && !i) {
              this._focusTrigger();
            }
            break;
          case keyboardKeyCodes_3.keyCodeMap.TAB:
            this._handleTabKeyDown(e);
        }
      }
    }
    handleContainerKeyDown(e) {
      let t = e.keyCode;
      let {
        isOpen: n
      } = this.getStates();
      if (t === keyboardKeyCodes_3.keyCodeMap.TAB && n) {
        this._handleTabKeyDown(e);
      }
    }
    _getEnableFocusIndex(e) {
      let {
        focusIndex: t,
        options: n
      } = this.getStates();
      let s = n.filter(e => e._show);
      let i = s.length;
      let o = t + e;
      if (o < 0) {
        o = i - 1;
      }
      if (o >= i) {
        o = 0;
      }
      if (e > 0) {
        let e = -1;
        for (let t = 0; t < s.length && (s[t].disabled || (e = t), !(e >= o)); t++);
        o = e;
      } else {
        let e = s.length;
        for (let t = i - 1; t >= 0 && (s[t].disabled || (e = t), !(e <= o)); t--);
        o = e;
      }
      this._adapter.updateFocusIndex(o);
      this._adapter.updateScrollTop(o);
    }
    _handleArrowKeyDown(e) {
      let {
        isOpen: t
      } = this.getStates();
      if (t) {
        this._getEnableFocusIndex(e);
      } else {
        this.open();
      }
    }
    _handleTabKeyDown(e) {
      let {
        isOpen: t
      } = this.getStates();
      this._adapter.updateFocusState(false);
      if (t) {
        let t = this._adapter.getContainer();
        let n = this._adapter.getFocusableElements(t);
        if (n.length > 0) {
          if (e.shiftKey) {
            this._handlePanelOpenShiftTabKeyDown(n, e);
          } else {
            this._handlePanelOpenTabKeyDown(n, e);
          }
        } else {
          this.close(e);
          this._notifyBlur(e);
        }
      } else {
        this._notifyBlur(e);
      }
    }
    _handlePanelOpenTabKeyDown(e, t) {
      let n = this._adapter.getActiveElement();
      if (this._adapter.getIsFocusInContainer()) {
        if (n === e[e.length - 1]) {
          this._focusTrigger();
          this.close(t);
          uiFocusNavigation.suppressEvent(t);
        }
      } else {
        e[0].focus();
        this._adapter.setIsFocusInContainer(true);
        uiFocusNavigation.suppressEvent(t);
      }
    }
    _handlePanelOpenShiftTabKeyDown(e, t) {
      let n = this._adapter.getActiveElement();
      if (this._adapter.getIsFocusInContainer()) {
        if (n === e[0]) {
          this._focusTrigger();
          this._adapter.setIsFocusInContainer(false);
          uiFocusNavigation.suppressEvent(t);
        }
      } else {
        this.close(t);
        this._notifyBlur(t);
      }
    }
    _handleEnterKeyDown(e) {
      let {
        isOpen: t,
        options: n,
        focusIndex: s
      } = this.getStates();
      if (t) {
        if (s !== -1) {
          let t = n.filter(e => e._show);
          let {
            length: i
          } = t;
          if (i <= s) {
            return;
          }
          if (t && i) {
            let n = t[s];
            if (n.disabled) {
              return;
            }
            this.onSelect(n, s, e);
          }
        } else {
          this.close(e);
        }
      } else {
        this.open();
      }
    }
    _handleBackspaceKeyDown() {
      if (this._isMultiple()) {
        let e = this._adapter.getSelections();
        let {
          inputValue: t
        } = this.getStates();
        let n = e.size;
        if (n && !t) {
          let t = [...e.keys()];
          let s = n - 1;
          let i = t[s];
          let o = e.get(i);
          let r = false;
          if (o.disabled && s === 0) {
            return;
          }
          while (o.disabled && s !== 0) {
            s -= 1;
            i = t[s];
            o = e.get(i);
            if (s == 0 && o.disabled) {
              r = true;
            }
          }
          if (!r) {
            this.removeTag(o);
          }
        }
      }
    }
    _notifyChange(e) {
      let t;
      let {
        onChangeWithObject: n
      } = this.getProps();
      let s = this.getState("selections");
      let i = [...e.values()];
      let o = this._isMultiple();
      if (this._diffSelections(e, s, o)) {
        switch (true) {
          case n:
            this._notifyChangeWithObject(e);
            break;
          case !n && !o:
            t = i.length ? i[0].value : undefined;
            this._adapter.notifyChange(t);
            break;
          case !n && o:
            t = i.length ? i.map(e => e.value) : [];
            this._adapter.notifyChange(t);
        }
      }
    }
    _removeInternalKey(e) {
      let t = Object.assign({}, e);
      delete t._parentGroup;
      delete t._show;
      delete t._selected;
      delete t._scrollIndex;
      delete t._keyInJsx;
      if ("_keyInOptionList" in t) {
        t.key = t._keyInOptionList;
        delete t._keyInOptionList;
      }
      return t;
    }
    _notifySelect(e, t) {
      let n = this._removeInternalKey(t);
      this._adapter.notifySelect(e, n);
    }
    _notifyDeselect(e, t) {
      let n = this._removeInternalKey(t);
      this._adapter.notifyDeselect(e, n);
    }
    _diffSelections(e, t, n) {
      let s = true;
      if (!n) {
        let n = [...e.values()];
        let i = [...t.values()];
        let o = n[0] ? n[0].label : n[0];
        let r = i[0] ? i[0].label : i[0];
        s = !deepEqualUtil_1.deepEqual(o, r);
      }
      return s;
    }
    _notifyChangeWithObject(e) {
      this.getState("selections");
      let t = [];
      for (let n of e.entries()) {
        let e = Object.assign({
          label: n[0]
        }, n[1]);
        e = this._removeInternalKey(e);
        t.push(e);
      }
      if (this._isMultiple()) {
        this._adapter.notifyChange(t);
      } else {
        this._adapter.notifyChange(t[0]);
      }
    }
    _notifyBlur(e) {
      this._adapter.notifyBlur(e);
    }
    _notifyFocus(e) {
      this._adapter.notifyFocus(e);
    }
    handleMouseEnter(e) {
      this._adapter.updateHovering(true);
      this._adapter.notifyMouseEnter(e);
    }
    handleMouseLeave(e) {
      this._adapter.updateHovering(false);
      this._adapter.notifyMouseLeave(e);
    }
    handleClearClick(e) {
      let {
        filter: t
      } = this.getProps();
      if (t) {
        this.clearInput(e);
      }
      this.focus();
      this.clearSelected();
      e.stopPropagation();
    }
    handleKeyPress(e) {
      if (e && e.key === keyboardKeyCodes_3.enterKeyName) {
        this.handleClick(e);
      }
    }
    handleClearBtnEnterPress(e) {
      if (enterKeyCheck.isEnterKey(e)) {
        this.handleClearClick(e);
      }
    }
    handleOptionMouseEnter(e) {
      this._adapter.updateFocusIndex(e);
    }
    handleListScroll(e) {
      this._adapter.notifyListScroll(e);
    }
    handleTriggerFocus(e) {
      this.bindKeyBoardEvent();
      this._adapter.setIsFocusInContainer(false);
    }
    handleTriggerBlur(e) {
      let {
        filter: t,
        autoFocus: n
      } = this.getProps();
      let {
        isOpen: s,
        isFocus: i
      } = this.getStates();
      if (i && !s) {
        this._notifyBlur(e);
        this._adapter.updateFocusState(false);
      }
    }
    handleInputBlur(e) {
      let {
        filter: t,
        autoFocus: n
      } = this.getProps();
      let s = this._isMultiple();
      if (n && t && !s) {
        this.toggle2SearchInput(false);
      }
    }
    selectAll() {
      let {
        options: e
      } = this.getStates();
      let {
        onChangeWithObject: t
      } = this.getProps();
      let n = [];
      if (this._isMultiple()) {
        n = t ? e : e.map(e => e.value);
        this.handleValueChange(n);
        this._adapter.notifyChange(n);
      }
    }
    checkMultipleProps(e) {
      if (this._isMultiple()) {
        let {
          defaultValue: t,
          value: n
        } = e || this.getProps();
        let s = n || t;
        if (!nullCheckUtil_1.isNil(s) && !Array.isArray(s)) {
          pageNoopHandler.noopHandler(true, "[Semi Select] defaultValue/value should be array type in multiple mode");
        }
      }
    }
    updateScrollTop() {
      this._adapter.updateScrollTop();
    }
    updateOverflowItemCount(e, t) {
      let {
        maxTagCount: n,
        ellipsisTrigger: s
      } = this.getProps();
      if (s) {
        if (t) {
          this._adapter.updateOverflowItemCount(t);
        } else if (typeof n == "number") {
          if (e - n > 0) {
            this._adapter.updateOverflowItemCount(e - n);
          } else {
            this._adapter.updateOverflowItemCount(0);
          }
        }
      }
    }
    updateIsFullTags() {
      let {
        isFullTags: e
      } = this.getStates();
      if (!e) {
        this._adapter.setState({
          isFullTags: true
        });
      }
    }
    handlePopoverClose() {
      this._adapter.emit("popoverClose");
    }
    handleSlotMouseEnter() {
      this._adapter.updateFocusIndex(-1);
    }
  }
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  var logLevelTypes = require("log-level-types") /*id: 818674*/;
  var tooltipConstants = require("tooltip-constants") /*id: 736928*/;
  let T = {
    PREFIX: `${semiIdentifier.semiIdentifier}-select`,
    PREFIX_OPTION: `${semiIdentifier.semiIdentifier}-select-option`,
    PREFIX_GROUP: `${semiIdentifier.semiIdentifier}-select-group`
  };
  let M = {
    SIZE_SET: ["small", "large", "default"],
    POSITION_SET: tooltipConstants.tooltipOptions.POSITION_SET,
    MODE_SELECT: "select",
    MODE_AUTOCOMPLETE: "autoComplete",
    STATUS: logLevelTypes.logLevels
  };
  let P = {
    LIST_HEIGHT: 270
  };
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var tagAvatarComponent = require("tag-avatar-component") /*id: 406406*/;
  var tagAvatarGroup = require("tag-avatar-group") /*id: 68674*/;
  var overflowList = require("overflow-list") /*id: 395871*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var typographyComponent_1 = require("typography-component_1") /*id: 73234*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var tooltipPopoverConstants = require("tooltip-popover-constants") /*id: 126132*/;
  var eventEmitterClass_1 = require("event-emitter-class_1") /*id: 313104*/;
  var reactVirtualListCore = require("react-virtual-list-core") /*id: 676834*/;
  function W(e, t) {
    var n = {};
    for (var s in e) {
      if (Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0) {
        n[s] = e[s];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var s = Object.getOwnPropertySymbols(e);
      for (; i < s.length; i++) {
        if (t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i])) {
          n[s[i]] = e[s[i]];
        }
      }
    }
    return n;
  }
  let K = (e, t, n, s) => {
    let i = e.props;
    if (!e || !i) {
      return null;
    }
    let o = Object.assign(Object.assign({
      value: i.value,
      label: i.label || i.children || i.value,
      _show: true,
      _selected: false,
      _scrollIndex: n
    }, i), {
      _parentGroup: t
    });
    o._keyInJsx = s || e.key;
    return o;
  };
  let H = e => {
    let t = [];
    let n = [];
    let s = {
      label: "",
      children: [],
      _show: false
    };
    let i = reactCoreLibraryReexport.Children.toArray(e);
    i = i.filter(e => e && e.props);
    let o = "";
    let r = -1;
    i.forEach(e => {
      if (e.type.isSelectOption) {
        o = "option";
        let t = K(e, undefined, ++r);
        s.children.push(t);
        n.push(t);
      } else if (e.type.isSelectOptionGroup) {
        o = "group";
        let s = e.props;
        let {
          children: i
        } = s;
        let l = W(s, ["children"]);
        let a = [];
        if (Array.isArray(i)) {
          a = i.map(e => e.key);
        } else {
          a.push(i.key);
        }
        let p = (i = reactCoreLibraryReexport.Children.toArray(i)).map((t, n) => {
          let s = t.key;
          if (a[n] === null) {
            s = e.key + "" + t.key;
          }
          return K(t, l, ++r, s);
        });
        let h = Object.assign(Object.assign({}, e.props), {
          children: p,
          key: e.key
        });
        t.push(h);
        n = n.concat(p);
      } else {
        pageNoopHandler.noopHandler(true, "[Semi Select] The children of `Select` should be `Select.Option` or `Select.OptionGroup`");
      }
    });
    if (o === "option") {
      t = [s];
    }
    return {
      optionGroups: t,
      options: n
    };
  };
  var visibleOptionRenderer = require("visible-option-renderer") /*id: 131028*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var reactTickIcon = require("react-tick-icon") /*id: 818313*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function q(e, t) {
    var n = {};
    for (var s in e) {
      if (Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0) {
        n[s] = e[s];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var s = Object.getOwnPropertySymbols(e);
      for (; i < s.length; i++) {
        if (t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i])) {
          n[s[i]] = e[s[i]];
        }
      }
    }
    return n;
  }
  class X extends reactCoreLibraryReexport.PureComponent {
    onClick(e, t) {
      var {
        value: n,
        label: s,
        children: i
      } = e;
      var o = q(e, ["value", "label", "children"]);
      let {
        props: r
      } = this;
      if (!r.disabled) {
        r.onSelect(Object.assign(Object.assign({}, o), {
          value: n,
          label: s || i
        }), t);
      }
    }
    renderOptionContent(e) {
      let {
        config: t,
        children: n,
        inputValue: s,
        prefixCls: i
      } = e;
      if (isStringTypeCheck.isString(n) && s) {
        return commonFrontendUtils.highlightSearchText(t);
      } else {
        return n;
      }
    }
    render() {
      let e = this.props;
      let {
        children: t,
        disabled: n,
        value: s,
        selected: i,
        label: o,
        empty: r,
        emptyContent: a,
        onSelect: p,
        focused: h,
        showTick: u,
        className: f,
        style: m,
        onMouseEnter: g,
        prefixCls: b,
        renderOptionItem: v,
        inputValue: y,
        semiOptionId: S
      } = e;
      let O = q(e, ["children", "disabled", "value", "selected", "label", "empty", "emptyContent", "onSelect", "focused", "showTick", "className", "style", "onMouseEnter", "prefixCls", "renderOptionItem", "inputValue", "semiOptionId"]);
      let _ = d(b, {
        [`${b}-disabled`]: n,
        [`${b}-selected`]: i,
        [`${b}-focused`]: h,
        [`${b}-empty`]: r,
        [f]: f
      });
      let E = d([`${b}-icon`]);
      if (r) {
        if (a === null) {
          return null;
        } else {
          return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "Select"
          }, e => reactCoreLibraryReexport.createElement("div", {
            className: _,
            "x-semi-prop": "emptyContent"
          }, a || e.emptyText));
        }
      }
      if (typeof v == "function") {
        return v(Object.assign({
          disabled: n,
          focused: h,
          selected: i,
          style: m,
          label: o,
          value: s,
          inputValue: y,
          onMouseEnter: e => g(e),
          onClick: e => this.onClick(Object.assign({
            value: s,
            label: o,
            children: t
          }, O), e),
          className: f
        }, O));
      }
      let C = {
        searchWords: y,
        sourceString: t,
        option: {
          highlightClassName: `${b}-keyword`
        }
      };
      return reactCoreLibraryReexport.createElement("div", {
        className: _,
        onClick: e => {
          this.onClick(Object.assign({
            value: s,
            label: o,
            children: t
          }, O), e);
        },
        onMouseEnter: e => g && g(e),
        role: "option",
        id: S,
        "aria-selected": i ? "true" : "false",
        "aria-disabled": n ? "true" : "false",
        style: m
      }, u ? reactCoreLibraryReexport.createElement("div", {
        className: E
      }, reactCoreLibraryReexport.createElement(reactTickIcon.TickIcon, null)) : null, isStringTypeCheck.isString(t) ? reactCoreLibraryReexport.createElement("div", {
        className: `${b}-text`
      }, this.renderOptionContent({
        children: t,
        config: C,
        inputValue: y,
        prefixCls: b
      })) : t);
    }
  }
  X.isSelectOption = true;
  X.propTypes = {
    children: f.node,
    disabled: f.bool,
    value: f.oneOfType([f.string, f.number]),
    selected: f.bool,
    label: f.node,
    empty: f.bool,
    emptyContent: f.node,
    onSelect: f.func,
    focused: f.bool,
    showTick: f.bool,
    className: f.string,
    style: f.object,
    onMouseEnter: f.func,
    prefixCls: f.string,
    renderOptionItem: f.func,
    inputValue: f.string
  };
  X.defaultProps = {
    prefixCls: T.PREFIX_OPTION
  };
  let Y = T.PREFIX_GROUP;
  class J extends reactFoundationComponent.FoundationComponent {
    render() {
      let {
        label: e,
        className: t,
        style: n
      } = this.props;
      let s = d(t, {
        [Y]: true
      });
      if (e || typeof e == "number") {
        return reactCoreLibraryReexport.createElement("div", {
          className: s,
          style: n
        }, e);
      } else {
        return null;
      }
    }
  }
  J.isSelectOptionGroup = true;
  J.propTypes = {
    children: f.oneOfType([f.array, f.node]),
    label: f.node,
    className: f.string,
    style: f.object
  };
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var triggerRenderWrapper = require("trigger-render-wrapper") /*id: 921310*/;
  var clearIcon = require("clear-icon") /*id: 137025*/;
  var chevronDownIcon = require("chevron-down-icon") /*id: 36033*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  function ei(e, t) {
    var n = {};
    for (var s in e) {
      if (Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0) {
        n[s] = e[s];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var s = Object.getOwnPropertySymbols(e);
      for (; i < s.length; i++) {
        if (t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i])) {
          n[s[i]] = e[s[i]];
        }
      }
    }
    return n;
  }
  let eo = T.PREFIX;
  class er extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.setOptionContainerEl = e => this.optionContainerEl = {
        current: e
      };
      this.handleInputChange = (e, t) => this.foundation.handleInputChange(e, t);
      this.getTagItem = (e, t, n) => {
        let {
          size: s,
          disabled: i
        } = this.props;
        let o = e[0];
        let {
          value: r
        } = e[1];
        let l = e[1].disabled || i;
        let a = (e, t) => {
          if (t && typeof t.preventDefault == "function") {
            t.preventDefault();
          }
          this.foundation.removeTag({
            label: o,
            value: r
          });
        };
        let {
          content: p,
          isRenderInTag: h
        } = n(e[1], {
          index: t,
          disabled: l,
          onClose: a
        });
        if (h) {
          return reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, Object.assign({}, {
            disabled: l,
            closable: !l,
            onClose: a
          }, {
            color: "white",
            size: s || "large",
            key: r,
            tabIndex: -1
          }), p);
        } else {
          return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
            key: r
          }, p);
        }
      };
      this.state = {
        isOpen: false,
        isFocus: false,
        options: [],
        selections: new Map(),
        dropdownMinWidth: null,
        optionKey: 0,
        inputValue: "",
        showInput: false,
        focusIndex: e.defaultActiveFirstOption ? 0 : -1,
        keyboardEventSet: {},
        optionGroups: [],
        isHovering: false,
        isFocusInContainer: false,
        isFullTags: false,
        overflowItemCount: 0
      };
      this.selectOptionListID = "";
      this.selectID = "";
      this.virtualizeListRef = reactCoreLibraryReexport.createRef();
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.triggerRef = reactCoreLibraryReexport.createRef();
      this.optionsRef = reactCoreLibraryReexport.createRef();
      this.optionContainerEl = reactCoreLibraryReexport.createRef();
      this.clickOutsideHandler = null;
      this.onSelect = this.onSelect.bind(this);
      this.onClear = this.onClear.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.renderOption = this.renderOption.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
      this.eventManager = new eventEmitterClass_1.EventEmitter();
      this.foundation = new C(this.adapter);
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, super.adapter), {
        registerKeyDown: e => {
          this.setState({
            keyboardEventSet: {
              onKeyDown: e
            }
          });
        },
        unregisterKeyDown: () => {
          this.setState({
            keyboardEventSet: {}
          });
        },
        updateFocusIndex: e => {
          this.setState({
            focusIndex: e
          });
        },
        scrollToFocusOption: () => {}
      }), {
        updateInputValue: e => {
          this.setState({
            inputValue: e
          });
        },
        toggleInputShow: (e, t) => {
          this.setState({
            showInput: e
          }, () => {
            t();
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
        notifyMaxLimit: e => this.props.onExceed(e),
        getMaxLimit: () => this.props.max,
        registerClickOutsideHandler: e => {
          let t = t => {
            let n = this.optionsRef && this.optionsRef.current;
            let s = this.triggerRef && this.triggerRef.current;
            let i = reactDomEntryWrapper.findDOMNode(n);
            if (i && !i.contains(t.target) && s && !s.contains(t.target)) {
              e(t);
            }
          };
          this.clickOutsideHandler = t;
          document.addEventListener("mousedown", t, false);
        },
        unregisterClickOutsideHandler: () => {
          if (this.clickOutsideHandler) {
            document.removeEventListener("mousedown", this.clickOutsideHandler, false);
            this.clickOutsideHandler = null;
          }
        },
        rePositionDropdown: () => {
          let {
            optionKey: e
          } = this.state;
          e += 1;
          this.setState({
            optionKey: e
          });
        },
        notifyDeselect: (e, t) => {
          delete t._parentGroup;
          this.props.onDeselect(e, t);
        }
      }), {
        on: (e, t) => this.eventManager.on(e, t),
        off: e => this.eventManager.off(e),
        once: (e, t) => this.eventManager.once(e, t),
        emit: e => this.eventManager.emit(e),
        getOptionsFromChildren: function (t = e.props.children) {
          let n = [];
          let s = [];
          let {
            optionList: i
          } = e.props;
          if (i && i.length) {
            s = i.map((e, t) => Object.assign({
              _show: true,
              _selected: false,
              _scrollIndex: t
            }, e));
            n[0] = {
              children: s,
              label: ""
            };
          } else {
            let e = H(t);
            n = e.optionGroups;
            s = e.options;
          }
          e.setState({
            optionGroups: n
          });
          return s;
        },
        updateOptions: e => {
          this.setState({
            options: e
          });
        },
        openMenu: () => {
          this.setState({
            isOpen: true
          });
        },
        closeMenu: () => {
          this.setState({
            isOpen: false
          });
        },
        getTriggerWidth: () => {
          let e = this.triggerRef.current;
          return e && e.getBoundingClientRect().width;
        },
        setOptionWrapperWidth: e => {
          this.setState({
            dropdownMinWidth: e
          });
        },
        updateSelection: e => {
          this.setState({
            selections: e
          });
        },
        getSelections: () => new Map(this.state.selections),
        notifyChange: e => {
          this.props.onChange(e);
        },
        notifySelect: (e, t) => {
          delete t._parentGroup;
          this.props.onSelect(e, t);
        },
        notifyDropdownVisibleChange: e => {
          this.props.onDropdownVisibleChange(e);
        },
        notifySearch: (e, t) => {
          this.props.onSearch(e, t);
        },
        notifyCreate: e => {
          this.props.onCreate(e);
        },
        notifyMouseEnter: e => {
          this.props.onMouseEnter(e);
        },
        notifyMouseLeave: e => {
          this.props.onMouseLeave(e);
        },
        notifyFocus: e => {
          this.props.onFocus(e);
        },
        notifyBlur: e => {
          this.props.onBlur(e);
        },
        notifyClear: () => {
          this.props.onClear();
        },
        notifyListScroll: e => {
          this.props.onListScroll(e);
        },
        updateHovering: e => {
          this.setState({
            isHovering: e
          });
        },
        updateFocusState: e => {
          this.setState({
            isFocus: e
          });
        },
        updateOverflowItemCount: e => {
          this.setState({
            overflowItemCount: e
          });
        },
        focusTrigger: () => {
          try {
            let {
              preventScroll: e
            } = this.props;
            this.triggerRef.current.focus({
              preventScroll: e
            });
          } catch (e) {}
        },
        getContainer: () => this.optionContainerEl && this.optionContainerEl.current,
        getFocusableElements: e => commonFrontendUtils.getFocusableEls(e),
        getActiveElement: () => commonFrontendUtils.getActiveElement(),
        setIsFocusInContainer: e => {
          this.setState({
            isFocusInContainer: e
          });
        },
        getIsFocusInContainer: () => this.state.isFocusInContainer,
        updateScrollTop: e => {
          let t = `.${eo}-option-selected`;
          if (e !== undefined) {
            t = `.${eo}-option:nth-child(${e})`;
          }
          let n = document.querySelector(`#${eo}-${this.selectOptionListID} ${t}`);
          if (Array.isArray(n)) {
            n = n[0];
          }
          if (n) {
            let e = n.parentNode;
            e.scrollTop = n.offsetTop - e.offsetTop - e.clientHeight / 2 + n.clientHeight / 2;
          }
        }
      });
    }
    componentDidMount() {
      this.foundation.init();
      this.selectOptionListID = uniqueIdUtils.generateRandomId();
      this.selectID = this.props.id || uniqueIdUtils.generateRandomId();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    componentDidUpdate(e, t) {
      let n = reactCoreLibraryReexport.Children.toArray(e.children).map(e => e.key);
      let s = reactCoreLibraryReexport.Children.toArray(this.props.children).map(e => e.key);
      let i = false;
      if (!deepEqualUtil_1.deepEqual(n, s) || !deepEqualUtil_1.deepEqual(e.optionList, this.props.optionList)) {
        i = true;
        this.foundation.handleOptionListChange();
      }
      if (!deepEqualUtil_1.deepEqual(this.props.value, e.value) || i) {
        if ("value" in this.props) {
          this.foundation.handleValueChange(this.props.value);
        } else {
          this.foundation.handleOptionListChangeHadDefaultValue();
        }
      }
    }
    renderInput() {
      let {
        size: e,
        multiple: t,
        disabled: n,
        inputProps: s,
        filter: i
      } = this.props;
      let r = objectPathGetDefault.getObjectPathDefault(s, "className");
      let l = d(`${eo}-input`, {
        [`${eo}-input-single`]: !t,
        [`${eo}-input-multiple`]: t
      }, r);
      let {
        inputValue: a,
        focusIndex: p
      } = this.state;
      let h = Object.assign({
        value: a,
        disabled: n,
        className: l,
        onChange: this.handleInputChange
      }, s);
      let u = {};
      if (t) {
        u = {
          width: a ? `${a.length * 16}px` : "2px"
        };
        h.style = u;
      }
      return reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({
        ref: this.inputRef,
        size: e,
        "aria-activedescendant": p !== -1 ? `${this.selectID}-option-${p}` : "",
        onFocus: e => {
          if (t && i) {
            this.setState({
              isFocus: true
            });
          }
          e.stopPropagation();
        },
        onBlur: e => this.foundation.handleInputBlur(e)
      }, h));
    }
    close() {
      this.foundation.close();
    }
    open() {
      this.foundation.open();
    }
    clearInput() {
      this.foundation.clearInput();
    }
    selectAll() {
      this.foundation.selectAll();
    }
    deselectAll() {
      this.foundation.clearSelected();
    }
    focus() {
      this.foundation.focus();
    }
    onSelect(e, t, n) {
      this.foundation.onSelect(e, t, n);
    }
    onClear(e) {
      e.nativeEvent.stopImmediatePropagation();
      this.foundation.handleClearClick(e);
    }
    search(e, t) {
      this.handleInputChange(e, t);
    }
    renderEmpty() {
      return reactCoreLibraryReexport.createElement(X, {
        empty: true,
        emptyContent: this.props.emptyContent
      });
    }
    renderLoading() {
      let e = `${eo}-loading-wrapper`;
      return reactCoreLibraryReexport.createElement("div", {
        className: e
      }, reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, null));
    }
    renderOption(e, t, n) {
      let s;
      let {
        focusIndex: i,
        inputValue: o
      } = this.state;
      let {
        renderOptionItem: r
      } = this.props;
      let l = t === i;
      let a = n || {};
      if (e.style) {
        a = Object.assign(Object.assign({}, a), e.style);
      }
      if (e._inputCreateOnly) {
        s = this.renderCreateOption(e, l, t, n);
      } else {
        if ("key" in e) {
          e._keyInOptionList = e.key;
        }
        s = reactCoreLibraryReexport.createElement(X, Object.assign({
          showTick: true
        }, e, {
          selected: e._selected,
          onSelect: (e, n) => this.onSelect(e, t, n),
          focused: l,
          onMouseEnter: () => this.onOptionHover(t),
          style: a,
          key: e._keyInOptionList || e._keyInJsx || e.label + e.value + t,
          renderOptionItem: r,
          inputValue: o,
          semiOptionId: `${this.selectID}-option-${t}`
        }), e.label);
      }
      return s;
    }
    renderCreateOption(e, t, n, s) {
      let {
        renderCreateItem: i
      } = this.props;
      if (i === undefined) {
        return reactCoreLibraryReexport.createElement(X, Object.assign({
          key: e.key || e.label + e.value,
          onSelect: (e, t) => this.onSelect(e, n, t),
          onMouseEnter: () => this.onOptionHover(n),
          showTick: true
        }, e, {
          focused: t,
          style: s
        }), reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
          componentName: "Select"
        }, t => reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("span", {
          className: `${eo}-create-tips`
        }, t.createText), e.value)));
      }
      let o = i(e.value, t, s);
      return reactCoreLibraryReexport.createElement("div", {
        role: "button",
        "aria-label": "Use the input box to create an optional item",
        onClick: t => this.onSelect(e, n, t),
        key: e.key || e.label
      }, o);
    }
    onOptionHover(e) {
      this.foundation.handleOptionMouseEnter(e);
    }
    renderWithGroup(e) {
      let t = [];
      let n = new Map();
      e.forEach((e, s) => {
        let i = e._parentGroup;
        let o = this.renderOption(e, s);
        if (i && !n.has(i.label)) {
          let e = reactCoreLibraryReexport.createElement(J, Object.assign({}, i, {
            key: i.label
          }));
          n.set(i.label, true);
          t.push(e);
        }
        t.push(o);
      });
      return t;
    }
    renderVirtualizeList(e) {
      let {
        virtualize: t
      } = this.props;
      let {
        direction: n
      } = this.context;
      let {
        height: s,
        width: i,
        itemSize: o
      } = t;
      return reactCoreLibraryReexport.createElement(reactVirtualListCore.FixedSizeList, {
        ref: this.virtualizeListRef,
        height: s || P.LIST_HEIGHT,
        itemCount: e.length,
        itemSize: o,
        itemData: {
          visibleOptions: e,
          renderOption: this.renderOption
        },
        width: i || "100%",
        style: {
          direction: n
        }
      }, visibleOptionRenderer.renderOptionItem);
    }
    renderOptions(e) {
      let {
        dropdownMinWidth: t,
        options: n,
        selections: s
      } = this.state;
      let {
        maxHeight: i,
        dropdownClassName: o,
        dropdownStyle: r,
        outerTopSlot: l,
        innerTopSlot: a,
        outerBottomSlot: p,
        innerBottomSlot: h,
        loading: u,
        virtualize: f,
        multiple: m,
        emptyContent: g
      } = this.props;
      let b = n.filter(e => e._show);
      let v = this.renderWithGroup(b);
      if (f) {
        v = this.renderVirtualizeList(b);
      }
      let y = Object.assign({
        minWidth: t
      }, r);
      let S = d({
        [`${eo}-option-list`]: true,
        [`${eo}-option-list-chosen`]: s.size
      });
      let O = !n.length || !n.some(e => e._show);
      return reactCoreLibraryReexport.createElement("div", {
        id: `${eo}-${this.selectOptionListID}`,
        className: d({
          [`${eo}-option-list-wrapper`]: !O || g !== null
        }, o),
        style: y,
        ref: this.setOptionContainerEl,
        onKeyDown: e => this.foundation.handleContainerKeyDown(e)
      }, l ? reactCoreLibraryReexport.createElement("div", {
        className: `${eo}-option-list-outer-top-slot`,
        onMouseEnter: () => this.foundation.handleSlotMouseEnter()
      }, l) : null, reactCoreLibraryReexport.createElement("div", {
        style: {
          maxHeight: `${i}px`
        },
        className: S,
        role: "listbox",
        "aria-multiselectable": m,
        onScroll: e => this.foundation.handleListScroll(e)
      }, a ? reactCoreLibraryReexport.createElement("div", {
        className: `${eo}-option-list-inner-top-slot`,
        onMouseEnter: () => this.foundation.handleSlotMouseEnter()
      }, a) : null, u ? this.renderLoading() : O ? this.renderEmpty() : v, h ? reactCoreLibraryReexport.createElement("div", {
        className: `${eo}-option-list-inner-bottom-slot`,
        onMouseEnter: () => this.foundation.handleSlotMouseEnter()
      }, h) : null), p ? reactCoreLibraryReexport.createElement("div", {
        className: `${eo}-option-list-outer-bottom-slot`,
        onMouseEnter: () => this.foundation.handleSlotMouseEnter()
      }, p) : null);
    }
    renderSingleSelection(e, t) {
      let {
        renderSelectedItem: n
      } = this.props;
      let {
        placeholder: s
      } = this.props;
      let {
        showInput: i,
        inputValue: o
      } = this.state;
      let r = "";
      let l = [...e];
      if (n === undefined) {
        n = e => e.label;
      }
      if (l.length) {
        r = n(l[0][1]);
      }
      let a = d({
        [`${eo}-selection-text`]: true,
        [`${eo}-selection-placeholder`]: !r && r !== 0,
        [`${eo}-selection-text-hide`]: o && i,
        [`${eo}-selection-text-inactive`]: !o && i
      });
      let p = `${eo}-content-wrapper`;
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
        className: p
      }, reactCoreLibraryReexport.createElement("span", {
        className: a,
        "x-semi-prop": "placeholder"
      }, r || r === 0 ? r : s), t && i ? this.renderInput() : null));
    }
    renderTag(e, t, n) {
      let {
        size: i,
        disabled: o
      } = this.props;
      let {
        renderSelectedItem: r
      } = this.props;
      let l = e[0];
      let {
        value: a
      } = e[1];
      let p = e[1].disabled || o;
      let h = (e, t) => {
        if (t && typeof t.preventDefault == "function") {
          t.preventDefault();
        }
        this.foundation.removeTag({
          label: l,
          value: a
        });
      };
      if (r === undefined) {
        r = e => ({
          isRenderInTag: true,
          content: e.label
        });
      }
      let {
        content: d,
        isRenderInTag: u
      } = r(e[1], {
        index: t,
        disabled: p,
        onClose: h
      });
      let f = n && !isFunctionUtil_1.isFunction(this.props.renderSelectedItem) ? reactCoreLibraryReexport.createElement(typographyComponent_1.Typography, {
        size: "small",
        ellipsis: {
          rows: 1,
          showTooltip: {
            type: "popover",
            opts: {
              style: {
                width: "auto",
                fontSize: 12
              }
            }
          }
        }
      }, d) : d;
      if (u) {
        return reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, Object.assign({}, {
          disabled: p,
          closable: !p,
          onClose: h
        }, {
          color: "white",
          size: i || "large",
          key: a,
          style: {
            maxWidth: "100%"
          }
        }), f);
      } else {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: a
        }, f);
      }
    }
    renderNTag(e, t) {
      let {
        size: n,
        showRestTagsPopover: s,
        restTagsPopoverProps: i
      } = this.props;
      let o = reactCoreLibraryReexport.createElement(tagAvatarComponent.Tag, {
        closable: false,
        size: n || "large",
        color: "grey",
        className: `${eo}-content-wrapper-collapse-tag`,
        key: `_+${e}`,
        style: {
          marginRight: 0,
          flexShrink: 0
        }
      }, "+", e);
      if (s) {
        o = reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, Object.assign({
          showArrow: true,
          content: reactCoreLibraryReexport.createElement(spaceLayoutComponent.Space, {
            spacing: 2,
            wrap: true,
            style: {
              maxWidth: "400px"
            }
          }, t.map((e, t) => this.renderTag(e, t))),
          trigger: "hover",
          position: "top",
          autoAdjustOverflow: true
        }, i, {
          key: `_+${e}_Popover`
        }), o);
      }
      return o;
    }
    renderOverflow(e, t) {
      if (e.length && e[0]) {
        return this.renderTag(e[0], t, true);
      } else {
        return null;
      }
    }
    handleOverflow(e) {
      let {
        overflowItemCount: t,
        selections: n
      } = this.state;
      let {
        maxTagCount: s
      } = this.props;
      let i = n.size - s > 0 ? n.size - s + e.length - 1 : e.length - 1;
      if (t !== i) {
        this.foundation.updateOverflowItemCount(n.size, i);
      }
    }
    renderCollapsedTags(e, t) {
      let {
        overflowItemCount: n
      } = this.state;
      let s = typeof t == "number" ? e.slice(0, t) : e;
      return reactCoreLibraryReexport.createElement("div", {
        className: `${eo}-content-wrapper-collapse`
      }, reactCoreLibraryReexport.createElement(overflowList.OverflowList, {
        items: s,
        key: String(e.length),
        overflowRenderer: e => this.renderOverflow(e, t - 1),
        onOverflow: e => this.handleOverflow(e),
        visibleItemRenderer: (e, t) => this.renderTag(e, t)
      }), n > 0 && this.renderNTag(n, e.slice(e.length - n)));
    }
    renderOneLineTags(e, t) {
      let n;
      let {
        renderSelectedItem: s
      } = this.props;
      let {
        showRestTagsPopover: i,
        restTagsPopoverProps: o,
        maxTagCount: r
      } = this.props;
      let {
        isFullTags: l
      } = this.state;
      if (s === undefined) {
        s = e => ({
          isRenderInTag: true,
          content: e.label
        });
      }
      if (i) {
        let a = (l ? e : e.slice(0, r)).map((e, t) => this.getTagItem(e, t, s));
        n = reactCoreLibraryReexport.createElement(tagAvatarGroup.TagAvatarGroup, {
          tagList: a,
          maxTagCount: t,
          restCount: l ? undefined : e.length - r,
          size: "large",
          mode: "custom",
          showPopover: i,
          popoverProps: o,
          onPlusNMouseEnter: () => {
            this.foundation.updateIsFullTags();
          }
        });
      } else {
        let i = e.slice(0, r).map((e, t) => this.getTagItem(e, t, s));
        n = reactCoreLibraryReexport.createElement(tagAvatarGroup.TagAvatarGroup, {
          tagList: i,
          maxTagCount: t,
          restCount: e.length - r,
          size: "large",
          mode: "custom"
        });
      }
      return n;
    }
    renderMultipleSelection(e, t) {
      let {
        renderSelectedItem: n
      } = this.props;
      let {
        placeholder: s,
        maxTagCount: i,
        expandRestTagsOnClick: o,
        ellipsisTrigger: r
      } = this.props;
      let {
        inputValue: l,
        isOpen: a
      } = this.state;
      let p = [...e];
      if (n === undefined) {
        n = e => ({
          isRenderInTag: true,
          content: e.label
        });
      }
      let h = d({
        [`${eo}-content-wrapper`]: true,
        [`${eo}-content-wrapper-one-line`]: i && !a,
        [`${eo}-content-wrapper-empty`]: !p.length
      });
      let u = d({
        [`${eo}-selection-text`]: true,
        [`${eo}-selection-placeholder`]: !p.length,
        [`${eo}-selection-text-hide`]: p && p.length
      });
      let f = s && !l ? reactCoreLibraryReexport.createElement("span", {
        className: u
      }, s) : null;
      let m = p.length > i ? i : undefined;
      let g = !i;
      let b = r ? this.renderCollapsedTags(p, m) : this.renderOneLineTags(p, m);
      let v = g || o && a ? p.map((e, t) => this.renderTag(e, t)) : b;
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
        className: h
      }, p && p.length ? v : f, t ? this.renderInput() : null));
    }
    onMouseEnter(e) {
      this.foundation.handleMouseEnter(e);
    }
    onMouseLeave(e) {
      this.foundation.handleMouseLeave(e);
    }
    onKeyPress(e) {
      this.foundation.handleKeyPress(e);
    }
    handlePopoverVisibleChange(e) {
      let {
        virtualize: t
      } = this.props;
      let {
        selections: n
      } = this.state;
      if (e) {
        if (t) {
          let e = -1;
          n.forEach(t => {
            let n = objectPathGetDefault.getObjectPathDefault(t, "_scrollIndex");
            if (isNumberUtil.isNumber(n) && n >= 0) {
              e = e !== -1 && e < n ? e : n;
            }
          });
          if (e !== -1) {
            try {
              this.virtualizeListRef.current.scrollToItem(e, "center");
            } catch (e) {}
          }
        } else {
          this.foundation.updateScrollTop();
        }
      }
    }
    renderSuffix() {
      let {
        suffix: e
      } = this.props;
      let t = d({
        [`${eo}-suffix`]: true,
        [`${eo}-suffix-text`]: e && isStringTypeCheck.isString(e),
        [`${eo}-suffix-icon`]: commonFrontendUtils.isIconElement(e)
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: t,
        "x-semi-prop": "suffix"
      }, e);
    }
    renderPrefix() {
      let {
        prefix: e,
        insetLabel: t,
        insetLabelId: n
      } = this.props;
      let s = e || t;
      let i = d({
        [`${eo}-prefix`]: true,
        [`${eo}-inset-label`]: t,
        [`${eo}-prefix-text`]: s && isStringTypeCheck.isString(s),
        [`${eo}-prefix-icon`]: commonFrontendUtils.isIconElement(s)
      });
      return reactCoreLibraryReexport.createElement("div", {
        className: i,
        id: n,
        "x-semi-prop": "prefix,insetLabel"
      }, s);
    }
    renderSelection() {
      let e = this.props;
      let {
        disabled: t,
        multiple: n,
        filter: s,
        style: i,
        id: o,
        size: r,
        className: l,
        validateStatus: a,
        showArrow: p,
        suffix: h,
        prefix: u,
        insetLabel: f,
        placeholder: m,
        triggerRender: g,
        arrowIcon: b,
        clearIcon: v,
        borderless: y
      } = e;
      let S = ei(e, ["disabled", "multiple", "filter", "style", "id", "size", "className", "validateStatus", "showArrow", "suffix", "prefix", "insetLabel", "placeholder", "triggerRender", "arrowIcon", "clearIcon", "borderless"]);
      let {
        selections: O,
        isOpen: _,
        keyboardEventSet: E,
        inputValue: C,
        isHovering: w,
        isFocus: I,
        showInput: x,
        focusIndex: T
      } = this.state;
      let M = typeof g == "function";
      let P = !!s;
      let j = M ? d(l) : d(eo, l, {
        [`${eo}-borderless`]: y,
        [`${eo}-open`]: _,
        [`${eo}-focus`]: I,
        [`${eo}-disabled`]: t,
        [`${eo}-single`]: !n,
        [`${eo}-multiple`]: n,
        [`${eo}-filterable`]: P,
        [`${eo}-small`]: r === "small",
        [`${eo}-large`]: r === "large",
        [`${eo}-error`]: a === "error",
        [`${eo}-warning`]: a === "warning",
        [`${eo}-no-arrow`]: !p,
        [`${eo}-with-prefix`]: u || f,
        [`${eo}-with-suffix`]: h
      });
      let $ = this.props.showClear && (O.size || C) && !t && (w || _);
      let R = p ? reactCoreLibraryReexport.createElement("div", {
        className: `${eo}-arrow`,
        "x-semi-prop": "arrowIcon"
      }, b) : reactCoreLibraryReexport.createElement("div", {
        className: `${eo}-arrow-empty`
      });
      let k = v || reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, null);
      let N = M ? reactCoreLibraryReexport.createElement(triggerRenderWrapper.TriggerRenderWrapper, {
        value: Array.from(O.values()),
        inputValue: C,
        onChange: this.handleInputChange,
        onSearch: this.handleInputChange,
        onRemove: e => this.foundation.removeTag(e),
        onClear: this.onClear,
        disabled: t,
        triggerRender: g,
        placeholder: m,
        componentName: "Select",
        componentProps: Object.assign({}, this.props)
      }) : [reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
        key: "prefix"
      }, u || f ? this.renderPrefix() : null), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
        key: "selection"
      }, reactCoreLibraryReexport.createElement("div", {
        className: d(`${eo}-selection`)
      }, n ? this.renderMultipleSelection(O, P) : this.renderSingleSelection(O, P))), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
        key: "clearicon"
      }, $ ? reactCoreLibraryReexport.createElement("div", {
        className: d(`${eo}-clear`),
        onClick: this.onClear
      }, k) : R), reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
        key: "suffix"
      }, h ? this.renderSuffix() : null)];
      let Z = t || P && x || P && n ? -1 : 0;
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        role: "combobox",
        "aria-disabled": t,
        "aria-expanded": _,
        "aria-controls": `${eo}-${this.selectOptionListID}`,
        "aria-haspopup": "listbox",
        "aria-label": O.size ? "selected" : "",
        "aria-invalid": this.props["aria-invalid"],
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        "aria-required": this.props["aria-required"],
        className: j,
        ref: e => this.triggerRef.current = e,
        onClick: e => this.foundation.handleClick(e),
        style: i,
        id: this.selectID,
        tabIndex: Z,
        "aria-activedescendant": T !== -1 ? `${this.selectID}-option-${T}` : "",
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onFocus: e => this.foundation.handleTriggerFocus(e),
        onBlur: e => this.foundation.handleTriggerBlur(e),
        onKeyPress: this.onKeyPress
      }, E, this.getDataAttr(S)), N);
    }
    render() {
      let {
        direction: e
      } = this.context;
      let {
        children: t,
        position: n = e === "rtl" ? "bottomRight" : "bottomLeft",
        zIndex: s,
        getPopupContainer: i,
        motion: o,
        autoAdjustOverflow: r,
        mouseLeaveDelay: l,
        mouseEnterDelay: a,
        spacing: p,
        stopPropagation: h,
        dropdownMargin: d
      } = this.props;
      let {
        isOpen: u,
        optionKey: f
      } = this.state;
      let m = this.renderOptions(t);
      let g = this.renderSelection();
      return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, {
        getPopupContainer: i,
        motion: o,
        margin: d,
        autoAdjustOverflow: r,
        mouseLeaveDelay: l,
        mouseEnterDelay: a,
        zIndex: s,
        ref: this.optionsRef,
        content: m,
        visible: u,
        trigger: "custom",
        rePosKey: f,
        position: n,
        spacing: p,
        stopPropagation: h,
        disableArrowKeyDown: true,
        onVisibleChange: e => this.handlePopoverVisibleChange(e),
        afterClose: () => this.foundation.handlePopoverClose()
      }, g);
    }
  }
  er.contextType = createContextProvider.context;
  er.Option = X;
  er.OptGroup = J;
  er.propTypes = {
    "aria-describedby": f.string,
    "aria-errormessage": f.string,
    "aria-invalid": f.bool,
    "aria-labelledby": f.string,
    "aria-required": f.bool,
    autoFocus: f.bool,
    autoClearSearchValue: f.bool,
    borderless: f.bool,
    children: f.node,
    clearIcon: f.node,
    defaultValue: f.oneOfType([f.string, f.number, f.array, f.object]),
    ellipsisTrigger: f.bool,
    value: f.oneOfType([f.string, f.number, f.array, f.object]),
    placeholder: f.node,
    onChange: f.func,
    multiple: f.bool,
    filter: f.oneOfType([f.func, f.bool]),
    max: f.number,
    maxTagCount: f.number,
    maxHeight: f.oneOfType([f.string, f.number]),
    style: f.object,
    className: f.string,
    size: f.oneOf(M.SIZE_SET),
    disabled: f.bool,
    emptyContent: f.node,
    expandRestTagsOnClick: f.bool,
    onDropdownVisibleChange: f.func,
    zIndex: f.number,
    position: f.oneOf(M.POSITION_SET),
    onSearch: f.func,
    getPopupContainer: f.func,
    dropdownClassName: f.string,
    dropdownStyle: f.object,
    dropdownMargin: f.oneOfType([f.number, f.object]),
    outerTopSlot: f.node,
    innerTopSlot: f.node,
    inputProps: f.object,
    outerBottomSlot: f.node,
    innerBottomSlot: f.node,
    optionList: f.array,
    dropdownMatchSelectWidth: f.bool,
    loading: f.bool,
    defaultOpen: f.bool,
    validateStatus: f.oneOf(M.STATUS),
    defaultActiveFirstOption: f.bool,
    triggerRender: f.func,
    stopPropagation: f.bool,
    motion: f.bool,
    onChangeWithObject: f.bool,
    suffix: f.node,
    prefix: f.node,
    insetLabel: f.node,
    insetLabelId: f.string,
    showClear: f.bool,
    showArrow: f.bool,
    renderSelectedItem: f.func,
    allowCreate: f.bool,
    renderCreateItem: f.func,
    onMouseEnter: f.func,
    onMouseLeave: f.func,
    clickToHide: f.bool,
    onExceed: f.func,
    onCreate: f.func,
    remote: f.bool,
    onDeselect: f.func,
    onSelect: f.func,
    autoAdjustOverflow: f.bool,
    mouseEnterDelay: f.number,
    mouseLeaveDelay: f.number,
    spacing: f.oneOfType([f.number, f.object]),
    onBlur: f.func,
    onFocus: f.func,
    onClear: f.func,
    virtualize: f.object,
    renderOptionItem: f.func,
    onListScroll: f.func,
    arrowIcon: f.node,
    preventScroll: f.bool
  };
  er.__SemiComponentName__ = "Select";
  er.defaultProps = commonFrontendUtils.configProxyHandler(er.__SemiComponentName__, {
    stopPropagation: true,
    motion: true,
    borderless: false,
    zIndex: tooltipPopoverConstants.tooltipLayout.DEFAULT_Z_INDEX,
    filter: false,
    multiple: false,
    disabled: false,
    defaultOpen: false,
    allowCreate: false,
    placeholder: "",
    onDropdownVisibleChange: emptyExportFunction.emptyFunction,
    onChangeWithObject: false,
    onChange: emptyExportFunction.emptyFunction,
    onSearch: emptyExportFunction.emptyFunction,
    onMouseEnter: emptyExportFunction.emptyFunction,
    onMouseLeave: emptyExportFunction.emptyFunction,
    onDeselect: emptyExportFunction.emptyFunction,
    onSelect: emptyExportFunction.emptyFunction,
    onCreate: emptyExportFunction.emptyFunction,
    onExceed: emptyExportFunction.emptyFunction,
    onFocus: emptyExportFunction.emptyFunction,
    onBlur: emptyExportFunction.emptyFunction,
    onClear: emptyExportFunction.emptyFunction,
    onListScroll: emptyExportFunction.emptyFunction,
    maxHeight: P.LIST_HEIGHT,
    dropdownMatchSelectWidth: true,
    defaultActiveFirstOption: true,
    showArrow: true,
    showClear: false,
    remote: false,
    autoAdjustOverflow: true,
    autoClearSearchValue: true,
    arrowIcon: reactCoreLibraryReexport.createElement(chevronDownIcon.ChevronDownIcon, {
      "aria-label": ""
    }),
    showRestTagsPopover: false,
    restTagsPopoverProps: {},
    expandRestTagsOnClick: false,
    ellipsisTrigger: false
  });
  var el = er;
  require.d(exports, {
    Select: function () {
      return el;
    }
  });
}