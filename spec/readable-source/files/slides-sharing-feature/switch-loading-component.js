// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'LoadingSwitch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 403106
         */
module.exports = function (module, exports, require) {
  var classVariantBuilderUtil = require("class-variant-builder-util") /*id: 885479*/;
  var switchPrimitiveComponents = require("switch-primitive-components") /*id: 490544*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = classVariantBuilderUtil.createVariantClassNames(`
    flex shrink-0 cursor-pointer items-center rounded-full transition-all
    outline-none
    disabled:cursor-not-allowed
    data-[state=checked]:bg-dbx-text-highlight
    data-[disabled]:data-[state=checked]:bg-dbx-text-highlight-disable
    data-[state=unchecked]:bg-dbx-neutral-1000-10
    data-[disabled]:data-[state=unchecked]:bg-dbx-neutral-1000-5
  `, {
    variants: {
      size: {
        sm: "h-[16px] w-[25px] p-[1.5px]",
        md: "h-[22px] w-[36px] p-[2px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  });
  let d = classVariantBuilderUtil.createVariantClassNames(`
    pointer-events-none flex items-center justify-center rounded-full
    bg-dbx-static-white transition-transform
    data-[disabled]:bg-dbx-static-white-60
    data-[state=checked]:[transform:translateX(calc(100%-4px))]
    data-[state=unchecked]:[transform:translateX(0px)]
  `, {
    variants: {
      size: {
        sm: "size-[13px]",
        md: "size-[18px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  });
  let c = e => {
    let {
      className: t,
      ...a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(switchPrimitiveComponents.Switch, {
      "data-slot": "switch",
      className: classNamesMergeUtil.mergeClassNames(l({
        size: a.size
      }), t),
      disabled: a.disabled || a.loading,
      ...a,
      children: reactJsxRuntimeCoreReexport.jsx(switchPrimitiveComponents.SwitchThumb, {
        "data-slot": "switch-thumb",
        className: classNamesMergeUtil.mergeClassNames("group", d({
          size: a.size
        })),
        children: a.loading ? reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
          size: a.size === "sm" ? 10 : 14,
          className: `
              group-data-[state=checked]:text-dbx-text-highlight-disable
              group-data-[state=unchecked]:text-dbx-text-disable
            `
        }) : null
      })
    });
  };
  require.d(exports, {
    LoadingSwitch: function () {
      return c;
    }
  });
}