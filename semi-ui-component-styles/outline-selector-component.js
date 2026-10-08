// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'OutlineType'
// - Renamed export 'r' to 'OutlineSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 46185
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var rtlDocumentIcon = require("rtl-document-icon") /*id: 5821*/;
  var rtlChevronIcon = require("rtl-chevron-icon") /*id: 90045*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var m = {
    container: "container-U54Ych",
    disabled: "disabled-jZv6Fd",
    icon: "icon-pNvCN2",
    title: "title-OoCR_8",
    arrow: "arrow-mfgClx",
    reverse: "reverse-nMW2z1"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (n = {})[n.Hidden = 0] = "Hidden";
  n[n.Page = 1] = "Page";
  n[n.TextOutline = 2] = "TextOutline";
  n[n.ImageOutline = 3] = "ImageOutline";
  let h = n;
  let _ = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      disabled: n,
      disabledOption: i,
      loadingOption: _,
      defaultValue: g = h.Hidden,
      value: f,
      onChange: w
    } = e;
    let k = translationContextProvider.useTranslation();
    let b = reactContextProviderHook.useContextValue();
    let [x, C] = reactCoreLibraryReexport.useState(false);
    let [y, S] = useControlledStateHook.useControlledState({
      defaultValue: g,
      value: f,
      onChange: w,
      allowUndefined: true
    });
    let A = [{
      label: k("outline_hidden"),
      value: h.Hidden
    }, {
      label: k("outline_page_title"),
      subLabel: k("outline_page_desc"),
      value: h.Page
    }, {
      label: k("outline_text_title"),
      subLabel: k("outline_text_desc"),
      value: h.TextOutline
    }, {
      label: k("outline_image_title"),
      subLabel: k("outline_image_desc"),
      value: h.ImageOutline
    }];
    let E = A.find(e => e.value === y)?.label;
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      options: A.filter(e => !(i == null ? undefined : i.includes(e.value))).map(e => ({
        ...e,
        loading: _ == null ? undefined : _.includes(e.value)
      })),
      visible: x,
      onVisibleChange: C,
      defaultValue: g,
      value: y,
      onChange: e => {
        var t;
        var a;
        var n;
        var r;
        S(e);
        if (e === h.Hidden) {
          if ((t = b.onHideSideBar) !== null && t !== undefined) {
            t.call(b);
          }
        } else if (e === h.ImageOutline) {
          if ((a = b.onSwitchToImageOutline) !== null && a !== undefined) {
            a.call(b);
          }
        } else if (e === h.Page) {
          if ((n = b.onSwitchToPageOutline) !== null && n !== undefined) {
            n.call(b);
          }
        } else if (e === h.TextOutline) {
          if ((r = b.onSwitchToTextOutline) !== null && r !== undefined) {
            r.call(b);
          }
        }
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: t,
        className: l(m.container, {
          [m.disabled]: n
        }),
        onClick: () => {
          if (!n) {
            C(!x);
          }
        },
        children: [reactJsxRuntimeCoreReexport.jsx(rtlDocumentIcon.RtlDocumentIcon, {
          className: m.icon
        }), y !== h.Hidden && E && reactJsxRuntimeCoreReexport.jsx("div", {
          className: m.title,
          children: E
        }), reactJsxRuntimeCoreReexport.jsx(rtlChevronIcon.RtlChevronIcon, {
          className: l(m.arrow, {
            [m.reverse]: x
          })
        })]
      })
    });
  });
  require.d(exports, {
    OutlineType: function () {
      return h;
    },
    OutlineSelector: function () {
      return _;
    }
  });
}