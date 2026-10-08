// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'SlidesSharePasswordPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 109592
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessInputField = require("business-input-field") /*id: 324730*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var reactCheckCircleIcon = require("react-check-circle-icon") /*id: 610937*/;
  var closeCircleIcon = require("close-circle-icon") /*id: 948124*/;
  var refreshIconSvgComponent = require("refresh-icon-svg-component") /*id: 485130*/;
  var documentShareConstants = require("document-share-constants") /*id: 271884*/;
  let u = () => {
    let e = Math.floor(Math.random() * 11) + 8;
    let t = ["0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", "!@#$%^&*()_+-=[]{};:'\",.<>/?|`~"];
    let a = [];
    while (a.length < 2) {
      let e = t[Math.floor(Math.random() * t.length)];
      if (!a.includes(e)) {
        a.push(e);
      }
    }
    if (Math.random() < 0.33) {
      let e = t.find(e => !a.includes(e));
      if (e) {
        a.push(e);
      }
    }
    let r = a.join("");
    let n = "";
    a.forEach(e => {
      n += e[Math.floor(Math.random() * e.length)];
    });
    for (let t = n.length; t < e; t++) {
      n += r[Math.floor(Math.random() * r.length)];
    }
    return n.split("").sort(() => Math.random() - 0.5).join("");
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      password: t,
      setPassword: a,
      setPanelType: p
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let [g, m] = reactCoreLibraryReexport.useState(t || "");
    let x = [{
      label: f("slides_share_password_length"),
      regex: /^.{8,18}$/
    }, {
      label: f("slides_share_password_includeType"),
      regex: /^(?:(?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])|(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]))[^ ]+$/
    }];
    let v = reactCoreLibraryReexport.useMemo(() => x.every(e => e.regex.test(g)), [x, g]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "pr-16 pb-20 pl-16",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-nowrap gap-8",
        children: [reactJsxRuntimeCoreReexport.jsx(businessInputField.BusinessInput, {
          value: g,
          onChange: e => m(e),
          showClear: true,
          autoFocus: true
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          color: "grey-outline",
          onClick: () => m(u()),
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(refreshIconSvgComponent.RefreshIcon, {}),
          children: f("slides_share_password_auto")
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mt-16",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            flex-column flex items-start gap-6 rounded-s-radius-m
            bg-[var(--token-bg-body-overlay,#F5F6F7)] p-12
          `,
          children: x.map((e, t) => {
            let {
              label: a,
              regex: r
            } = e;
            let n = r.test(g) ? reactCheckCircleIcon.CheckCircleIcon : closeCircleIcon.CloseCircleIcon;
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex items-center gap-6",
              children: [reactJsxRuntimeCoreReexport.jsx(n, {
                className: "size-16"
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: `
                    text-12 leading-20 font-normal text-dbx-text-primary
                  `,
                children: a
              })]
            }, t);
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            mt-12 align-middle text-12 leading-20 font-normal
            text-dbx-text-secondary
          `,
          children: f("slides_share_password_reuseCaution")
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mt-16 flex justify-end gap-8",
        children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          color: "grey-outline",
          onClick: () => p(documentShareConstants.ShareSectionTypes.Home),
          children: f("cancel")
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          color: "brand-filled",
          disabled: !v,
          onClick: () => {
            if (a != null) {
              a(g);
            }
            p(documentShareConstants.ShareSectionTypes.Home);
          },
          children: f("slides_share_QRCode_btn_save")
        })]
      })]
    });
  };
  require.d(exports, {
    SlidesSharePasswordPanel: function () {
      return p;
    }
  });
}