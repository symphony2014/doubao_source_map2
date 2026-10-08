// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FN' to 'defaultToast'
// - Renamed export 'pJ' to 'toastInstance'
// - Renamed export 'N2' to 'setToastInstance'
// - Renamed export 'Gu' to 'customToastFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 697541
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var rtlTimerIconComponent = require("rtl-timer-icon-component") /*id: 325670*/;
  var checkCircleIconComponent = require("check-circle-icon-component") /*id: 50771*/;
  var rtlWarningIcon = require("rtl-warning-icon") /*id: 317332*/;
  var rtlInfoOutlinedIcon = require("rtl-info-outlined-icon") /*id: 918336*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    p = e;
  };
  function h(e) {
    [{
      method: "info",
      icon: reactJsxRuntimeCoreReexport.jsx(rtlTimerIconComponent.RtlTimerIcon, {
        className: "text-18"
      })
    }, {
      method: "success",
      icon: reactJsxRuntimeCoreReexport.jsx(checkCircleIconComponent.CheckCircleIcon, {
        className: "text-18"
      })
    }, {
      method: "warning",
      icon: reactJsxRuntimeCoreReexport.jsx(rtlWarningIcon.WarningOutlinedIcon, {
        className: "text-18"
      })
    }, {
      method: "error",
      icon: reactJsxRuntimeCoreReexport.jsx(rtlInfoOutlinedIcon.InfoOutlinedIcon, {
        className: "text-18"
      })
    }].forEach(t => {
      let {
        method: n,
        icon: i
      } = t;
      let a = e[n];
      e[n] = t => {
        let n = t;
        if (typeof t == "string") {
          n = {
            content: t
          };
        }
        return a.call(e, Object.assign({
          showClose: false,
          icon: i
        }, n, {
          className: o("samantha-toast", n.className || "")
        }, {
          theme: "light"
        }));
      };
    });
    return e;
  }
  let p = h(semiToastNotification.ToastFactory.create({
    zIndex: 5000
  }));
  let v = {
    create: e => h(semiToastNotification.ToastFactory.create(e))
  };
  require.d(exports, {
    defaultToast: function () {
      return p;
    },
    toastInstance: function () {
      return p;
    },
    setToastInstance: function () {
      return u;
    },
    customToastFactory: function () {
      return v;
    }
  });
}