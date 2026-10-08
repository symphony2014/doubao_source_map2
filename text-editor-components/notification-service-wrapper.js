// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'notificationService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 630603
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var notificationComponentWrapper = require("notification-component-wrapper") /*id: 830647*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var c = {
    container: "container-J6eTeW",
    icon: "icon-nD93eP",
    content: "content-QxbNe3",
    title: "title-QJRYEx",
    desc: "desc-WX4eKW",
    right: "right-sA2ugM",
    close: "close-jHaUCS",
    "notice-wrapper": "notice-wrapper-vTVGsw"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      className: n,
      style: o,
      icon: i,
      title: l,
      desc: u,
      right: m,
      closable: p = true,
      onClose: _
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(c.container, n),
      style: o,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: c.icon,
        children: i
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: c.content,
        children: [l && reactJsxRuntimeCoreReexport.jsx("div", {
          className: c.title,
          children: l
        }), u && reactJsxRuntimeCoreReexport.jsx("div", {
          className: c.desc,
          children: u
        })]
      }), m && reactJsxRuntimeCoreReexport.jsx("div", {
        className: c.right,
        children: m
      }), p && reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        className: c.close,
        size: "tiny",
        newIcon: true,
        onClick: _,
        children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {})
      })]
    });
  };
  let m = {
    open(e) {
      let {
        className: n,
        style: o,
        onClose: i,
        duration: a = 5,
        ...s
      } = e;
      notificationComponentWrapper.Notification.config({
        top: 64,
        right: 20,
        zIndex: 98
      });
      let m = notificationComponentWrapper.Notification.open({
        className: r(c["notice-wrapper"], n),
        style: o,
        content: reactJsxRuntimeCoreReexport.jsx(u, {
          ...s,
          onClose: () => {
            if (i != null) {
              i();
            }
            notificationComponentWrapper.Notification.close(m);
          }
        }),
        duration: a,
        position: "topRight",
        showClose: false
      });
      return m;
    },
    close(e) {
      notificationComponentWrapper.Notification.close(e);
    }
  };
  require.d(exports, {
    notificationService: function () {
      return m;
    }
  });
}