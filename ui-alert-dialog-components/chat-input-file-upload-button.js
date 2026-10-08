// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'ChatInputFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 333699
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var dbxPopoverComponents = require("dbx-popover-components") /*id: 457187*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var u = {
    "chat-input-icon": "chat-input-icon-zg1MF3",
    "chat-input-icon__disabled": "chat-input-icon__disabled-cWp9o1",
    "chat-input-icon-area": "chat-input-icon-area-a915k9",
    popover: "popover-E6ILCO"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      disabled: t = false,
      onClick: n,
      popoverContent: i,
      toolTip: o,
      disableFocusListener: f = false,
      renderIcon: _,
      className: h,
      popoverProps: m,
      renderCustomButton: g
    } = e;
    let b = typeof g == "function";
    let {
      run: v
    } = useDebouncedCallbackHook_1.useDebouncedCallback(n ?? emptyExportFunction.emptyFunction, {
      wait: 500,
      leading: true,
      trailing: false
    });
    let x = reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      onClick: t || b ? emptyExportFunction.emptyFunction : v,
      color: "grey-outline",
      size: "md",
      className: a("size-36 !rounded-full p-9 !outline-transparent [&_svg:not([class*=\"size-\"])]:size-[18px]", h),
      children: _()
    });
    if (b) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: g({
          onClick: v,
          originButton: x
        })
      });
    } else if (i) {
      return reactJsxRuntimeCoreReexport.jsx(dbxPopoverComponents.DbxPopover, {
        className: u.popover,
        clickToHide: true,
        content: i,
        trigger: "click",
        position: "topLeft",
        ...m,
        children: x
      });
    } else if (o && !t) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        content: o,
        position: "bottom",
        disableFocusListener: f,
        children: x
      });
    } else {
      return x;
    }
  };
  var chatInputButtonContext = require("chat-input-button-context") /*id: 414026*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  let g = e => {
    let {
      disabled: t = false,
      onClick: n,
      popoverContent: i,
      toolTip: o,
      isOverflow: r,
      isToolButtonSmall: s,
      borderlessTheme: c = true,
      disableFocusListener: d = false,
      renderIcon: f,
      className: g,
      popoverProps: b,
      renderCustomButton: v
    } = e;
    let x = typeof v == "function";
    let w = c ? reactJsxRuntimeCoreReexport.jsx("div", {
      className: a(u["chat-input-icon"], {
        [u["chat-input-icon__disabled"]]: t
      }, g),
      onClick: t || x ? emptyExportFunction.emptyFunction : n,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": "upload_file_button",
        className: u["chat-input-icon-area"],
        children: f()
      })
    }) : reactJsxRuntimeCoreReexport.jsx(chatInputButtonContext.ChatInputButton, {
      isOverflow: r,
      small: s,
      renderIcon: f,
      buttonProps: {
        disabled: t,
        "data-testid": "upload_file_button"
      },
      onMouseUp: t || x ? emptyExportFunction.emptyFunction : n
    });
    if (x) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: v({
          onClick: n,
          originButton: w
        })
      });
    } else if (i) {
      return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        className: u.popover,
        clickToHide: true,
        content: i,
        trigger: "click",
        position: "topLeft",
        ...b,
        children: w
      });
    } else if (o && !t) {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: o,
        position: "top",
        disableFocusListener: d,
        children: w
      });
    } else {
      return w;
    }
  };
  let b = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      accept: n = "",
      multiple: l = false,
      onFileChange: o,
      onOpenFileDialogInterceptor: a,
      useV3: r,
      ...s
    } = e;
    let {
      popoverContent: c,
      onClick: d
    } = s;
    let u = reactCoreLibraryReexport.useRef(null);
    let _ = async e => {
      if ((await (a == null ? undefined : a())) !== false && u.current) {
        if (d != null) {
          d(e);
        }
        u.current.value = "";
        u.current.click();
      }
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      click: () => _()
    }));
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(r ? f : g, {
        ...s,
        onClick: e => {
          if (!c) {
            _();
            if (e != null) {
              e.stopPropagation();
            }
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        ref: u,
        "data-testid": "upload-file-input",
        className: "hidden",
        multiple: l,
        type: "file",
        accept: n,
        onChange: o
      })]
    });
  });
  require.d(exports, {
    ChatInputFileUpload: function () {
      return b;
    }
  });
}