// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'a' to 'chatInputPopoverHook'
// - Resolved require(493792) to 'chat-input-popover-hook'
// - Renamed variable 'o' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'rS' to 'engineTemplateHook' (module 232752)
// - Updated imported property 'x' to 'createPopoverController' (module 493792)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-engine-infra.27de6beb.js
         * chunkId: 63727
         * moduleId: 79648
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatInputPopoverHook = require("chat-input-popover-hook") /*id: 493792*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      chatId: t,
      chatType: n,
      skill: u,
      popoverRef: l,
      containerRef: c
    } = e;
    let {
      plugin: d,
      loading: f
    } = chatPluginIocManager.engineTemplateHook(u == null ? undefined : u.skill_type);
    let p = !f && (d == null ? undefined : d.Content) ? reactJsxRuntimeCoreReexport.jsx(d.Content, {
      chatId: t,
      chatType: n,
      skill: u,
      trackParams: {}
    }) : null;
    let {
      expandBtnStatus: h,
      showPopover: m,
      hidePopover: g,
      element: v
    } = chatInputPopoverHook.createPopoverController({
      containerRef: c,
      popoverContent: p,
      defaultOpenPopover: false,
      onPopoverVisibleChange: emptyExportFunction.emptyFunction
    });
    reactCoreLibraryReexport.useImperativeHandle(l, () => ({
      hidePopover: g,
      showPopover: m,
      expandBtnStatus: h
    }));
    if (f) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: v
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    InputEngineTemplatePluginFoundation: function () {
      return u;
    }
  });
}