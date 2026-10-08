// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SamanthaDropdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 686264
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var dropdownComponent = require("dropdown-component") /*id: 748649*/;
  var dropdownMenuFoundation = require("dropdown-menu-foundation") /*id: 761864*/;
  var dropdownItemComponent = require("dropdown-item-component") /*id: 325984*/;
  var dropdownDivider = require("dropdown-divider") /*id: 10735*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var p = {
    "samantha-dropdown": "samantha-dropdown-sBBDZ9",
    "icon-tick": "icon-tick-k4ah2S",
    active: "active-xe4Ufj"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactJsxRuntimeCoreReexport.jsx(dropdownComponent.Dropdown, {
      ...e,
      type: "primary",
      ref: t,
      className: r(p["samantha-dropdown"], e.className),
      children: e.children
    });
  });
  m.Menu = dropdownMenuFoundation.DropdownMenu;
  i = dropdownItemComponent.DropdownItem;
  o = e => {
    if (!reactCoreLibraryReexport.isValidElement(e)) {
      return e;
    }
    if (e.props.role === "menuitem" && e.props.className.indexOf("semi-dropdown-item-withTick") !== -1) {
      let t = e.props.className.indexOf("semi-dropdown-item-active") !== -1;
      return reactCoreLibraryReexport.cloneElement(e, {
        ...e.props,
        children: [...e.props.children.slice(1), reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
          className: r(p["icon-tick"], {
            [p.active]: t
          })
        })]
      });
    }
    return e;
  };
  m.Item = class extends i {
    render() {
      return function e(t, n) {
        return reactCoreLibraryReexport.Children.map(t, t => reactCoreLibraryReexport.isValidElement(t) ? (t.props.children && (t = reactCoreLibraryReexport.cloneElement(t, {
          ...t.props,
          children: e(t.props.children, n)
        })), n(t)) : t);
      }(super.render(), o);
    }
  };
  m.Divider = dropdownDivider.DropdownDivider;
  m.Title = dropdownComponent.Dropdown.Title;
  require.d(exports, {
    SamanthaDropdown: function () {
      return m;
    }
  });
}