// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'translateServiceEnum'
// - Renamed export 'I' to 'TranslateServiceSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 512967
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var huoshanIconComponent = require("huoshan-icon-component") /*id: 591545*/;
  var microsoftLogoIcon = require("microsoft-logo-icon") /*id: 780129*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var d = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#1E37FC",
      d: "M4.147 10.095c.098-2.126 1.062-3.4 1.437-3.819C3.746 7.442 2.525 9.483 2 10.984v.634h.001c0 1.739 1.536 3.148 3.432 3.148.437 0 .855-.076 1.24-.213q.298-.102.586-.214a7.3 7.3 0 0 0 1.265-1.695c-2.75 1.377-4.496.04-4.377-2.55"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#37E1BE",
      d: "M13.878 6.994c-.683-.51-2.316-1.362-4.17-1.587.167 2.149.052 4.967-1.184 7.238a7.3 7.3 0 0 1-1.265 1.695c2.122-.821 3.803-1.959 4.846-2.957 1.59-1.52 1.89-2.934 1.895-3.774a1.6 1.6 0 0 0-.122-.615"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#A569FF",
      d: "M9.218 2.225a4.2 4.2 0 0 0-2.77-1.058c-1.048 0-1.977.383-2.731 1.024C2.728 3.03 2.072 4.316 2 5.77v5.214c.525-1.502 1.746-3.542 3.584-4.708q.42-.269.885-.47c1.062-.453 2.186-.527 3.24-.4a21 21 0 0 0-.491-3.182"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#1E37FC",
      d: "m10.91 3.974-.61-.62q-.171-.18-.33-.353c-.454-.47-.752-.781-.752-.781.085.349.365 1.578.49 3.183 1.854.224 3.487 1.075 4.17 1.586-.737-.721-1.96-1.975-2.968-3.015"
    })]
  }), {}));
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  (n = {}).HUOSHAN = "0";
  n.LLM = "1";
  n.MICROSOFT = "3";
  let m = n;
  let v = e => {
    let {
      defaultValue: a,
      onVisibleChange: n,
      onChange: s
    } = e;
    let v = translationContextProvider.useTranslation();
    let [h, _] = reactCoreLibraryReexport.useState(false);
    let [g, f] = reactCoreLibraryReexport.useState(a || m.LLM);
    let w = [{
      label: v("translate_huoshan"),
      value: m.HUOSHAN,
      icon: reactJsxRuntimeCoreReexport.jsx(huoshanIconComponent.HuoshanIcon, {})
    }, {
      label: v("translate_microsoft"),
      value: m.MICROSOFT,
      icon: reactJsxRuntimeCoreReexport.jsx(microsoftLogoIcon.MicrosoftLogoIcon, {})
    }, {
      label: v("translate_doubao"),
      value: m.LLM,
      icon: reactJsxRuntimeCoreReexport.jsx(d, {})
    }];
    reactCoreLibraryReexport.useEffect(() => {
      if (n != null) {
        n(h);
      }
    }, [h]);
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      value: g,
      defaultValue: g,
      onChange: e => {
        f(e);
        if (s != null) {
          s(e);
        }
      },
      options: w,
      visible: h,
      onVisibleChange: _,
      position: "rightTop",
      spacing: 12,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center s-font-small",
        onClick: () => _(true),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-s-color-text-primary flex-none mr-8",
          children: v("translate_service_label")
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "cursor-pointer flex-auto flex items-center text-s-color-text-tertiary overflow-hidden",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "truncate flex-auto text-right",
            children: w.find(e => e.value === g)?.label
          }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
            className: "!text-14 p-2"
          })]
        })]
      })
    });
  };
  require.d(exports, {
    translateServiceEnum: function () {
      return m;
    },
    TranslateServiceSelector: function () {
      return v;
    }
  });
}