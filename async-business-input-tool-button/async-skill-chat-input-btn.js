// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'SkillChatInputBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-more.7a82db53.js
         * chunkId: 21867
         * moduleId: 159621
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var asyncSkillChatContext = require("async-skill-chat-context") /*id: 844074*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      disabled: n,
      className: r,
      children: a,
      isOverflow: p,
      tip: v,
      disableTip: m,
      leadingIcon: h,
      active: x,
      small: g,
      scene: b,
      ...w
    } = e;
    let y = asyncSkillChatContext.useChatInput();
    let {
      skillToolUIV2: M
    } = chatLauncherConfigHooks.useSkillToolLayout(y ?? b);
    let j = i(x && M ? " !text-dbx-text-highlight " : "", x && !M ? " !text-[var(--s-color-brand-primary-default)] " : "");
    let C = i(x && M ? " hover:!bg-dbx-fill-highlight-trans-10 [&:where([data-state=\"open\"]_*)]:!bg-dbx-fill-highlight-trans-10" : "", x && !M ? " !bg-[var(--s-color-system-info-lighten)] !border-[var(--s-color-brand-primary-transparent-3)] " : "");
    let E = `${j} ${C}`;
    let D = p ? reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
      disabled: n,
      onClick: objectPathGetDefault.getObjectPathDefault({
        restProps: w
      }, "restProps.onClick"),
      onMouseUp: objectPathGetDefault.getObjectPathDefault({
        restProps: w
      }, "restProps.onMouseUp"),
      onMouseDown: objectPathGetDefault.getObjectPathDefault({
        restProps: w
      }, "restProps.onMouseDown"),
      className: r,
      classNames: {
        wrapper: `${E}`,
        iconWrapper: `${j}`,
        middleWrapper: `${E}`
      },
      icon: h,
      children: a
    }) : reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      ...(M ? {
        variant: "text",
        size: "lg"
      } : {
        variant: "rectangle",
        size: g ? "sm" : "md"
      }),
      "data-checked": x,
      leadingIcon: h,
      disabled: n,
      ...w,
      ref: t,
      className: i("flex box-border", {
        "rounded-xl px-7 py-5 !text-[14px] !leading-22 h-32": M,
        "font-medium bg-transparent border-1 border-[var(--s-color-border-tertiary)]": !M,
        "rounded-(--s-radius-xxss) py-5 px-8 h-28": !M && g,
        "rounded-(--s-radius-xs) py-7 px-12 h-36": !M && !g
      }, E, r),
      children: a
    });
    if (n && m) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        position: "bottom",
        content: m,
        className: "z-1",
        children: D
      });
    } else if (v) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        content: v,
        position: "bottom",
        className: "z-1",
        children: D
      });
    } else {
      return D;
    }
  });
  require.d(exports, {
    SkillChatInputBtn: function () {
      return p;
    }
  });
}