// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(65525) to 'ondemand-dropdown'
// - Resolved require.bind(510298) to 'input-tool-menu-dropdown-wrapper'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-guidance-input.f8202b74.js
         * chunkId: 48684
         * moduleId: 806712
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {};
  let a = new Promise(e => {
    l = e;
  });
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    await a;
    let {
      InputToolMenuDropdownWrapper: e
    } = await require.e("ondemand-dropdown") /*id: 65525*/.then(require.bind(require, "input-tool-menu-dropdown-wrapper") /*id: 510298*/);
    return {
      default: e
    };
  }), e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      onMouseOver: () => l(true),
      children: t
    });
  });
  let u = e => {
    let {
      children: t,
      ...n
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      setTimeout(() => {
        l(true);
      }, 10000);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(s, {
      ...n,
      children: t
    });
  };
  require.r(exports);
  require.d(exports, {
    InputToolMenuDropdownFoundation: function () {
      return u;
    }
  });
}