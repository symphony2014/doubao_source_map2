// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'SkillMessageDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 314703
         */
module.exports = function (module, exports, require) {
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      title: t,
      desc: n,
      onClose: a,
      onOK: s,
      okText: l,
      cancelBtn: c,
      onCancel: u,
      cancelText: d,
      ...p
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "wrapper-WJSQFV",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "content-SHQfrK",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "logo-zZIDJ8",
          children: reactJsxRuntimeCoreReexport.jsx(p.customLogoIcon, {
            className: `
              size-16
              ${p.logoClassName || ""}
            `
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "info-Mu7NHL",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "title-DrzoiL",
            children: t
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "desc-Jn8Fx1",
            children: n
          })]
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          onClick: a,
          size: "md",
          variant: "icon",
          className: "self-start",
          children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {
            className: "size-14 text-dbx-text-tertiary"
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "operator-aliBF3",
        children: [c && reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "rectangle",
          color: "grey-filled",
          size: "md",
          onClick: u,
          className: "flex-1",
          children: d
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "rectangle",
          color: "brand-filled",
          size: "md",
          onClick: s,
          className: "flex-1",
          children: l
        })]
      })]
    });
  };
  require.d(exports, {
    SkillMessageDialog: function () {
      return a;
    }
  });
}