// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd0' to 'ENTERING'
// - Renamed export 'ZP' to 'Transition'
// - Renamed export 'cn' to 'ENTERED'
// - Renamed export 'Ix' to 'EXITING'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 888866
         */
module.exports = function (module, exports, require) {
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var classInheritanceHelper_1 = require("class-inheritance-helper_1") /*id: 298550*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var a = {
    disabled: false
  };
  var reactContextDefinition_4 = require("react-context-definition_4") /*id: 208719*/;
  var getScrollTop = require("get-scroll-top") /*id: 770381*/;
  var d = "unmounted";
  var u = "exited";
  var p = "entering";
  var h = "entered";
  var m = "exiting";
  var f = function (e) {
    function t(t, n) {
      i = e.call(this, t, n) || this;
      var i;
      var r;
      var o = n && !n.isMounting ? t.enter : t.appear;
      i.appearStatus = null;
      if (t.in) {
        if (o) {
          r = u;
          i.appearStatus = p;
        } else {
          r = h;
        }
      } else {
        r = t.unmountOnExit || t.mountOnEnter ? d : u;
      }
      i.state = {
        status: r
      };
      i.nextCallback = null;
      return i;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    t.getDerivedStateFromProps = function (e, t) {
      if (e.in && t.status === d) {
        return {
          status: u
        };
      } else {
        return null;
      }
    };
    var n = t.prototype;
    n.componentDidMount = function () {
      this.updateStatus(true, this.appearStatus);
    };
    n.componentDidUpdate = function (e) {
      var t = null;
      if (e !== this.props) {
        var n = this.state.status;
        if (this.props.in) {
          if (n !== p && n !== h) {
            t = p;
          }
        } else if (n === p || n === h) {
          t = m;
        }
      }
      this.updateStatus(false, t);
    };
    n.componentWillUnmount = function () {
      this.cancelNextCallback();
    };
    n.getTimeouts = function () {
      var e;
      var t;
      var n;
      var i = this.props.timeout;
      e = t = n = i;
      if (i != null && typeof i != "number") {
        e = i.exit;
        t = i.enter;
        n = i.appear !== undefined ? i.appear : t;
      }
      return {
        exit: e,
        enter: t,
        appear: n
      };
    };
    n.updateStatus = function (e = false, t) {
      if (t !== null) {
        this.cancelNextCallback();
        if (t === p) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var n = this.props.nodeRef ? this.props.nodeRef.current : reactDomEntryWrapper.findDOMNode(this);
            if (n) {
              getScrollTop.getScrollTop(n);
            }
          }
          this.performEnter(e);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === u) {
        this.setState({
          status: d
        });
      }
    };
    n.performEnter = function (e) {
      var t = this;
      var n = this.props.enter;
      var i = this.context ? this.context.isMounting : e;
      var r = this.props.nodeRef ? [i] : [reactDomEntryWrapper.findDOMNode(this), i];
      var o = r[0];
      var s = r[1];
      var c = this.getTimeouts();
      var d = i ? c.appear : c.enter;
      if (!e && !n || a.disabled) {
        this.safeSetState({
          status: h
        }, function () {
          t.props.onEntered(o);
        });
        return;
      }
      this.props.onEnter(o, s);
      this.safeSetState({
        status: p
      }, function () {
        t.props.onEntering(o, s);
        t.onTransitionEnd(d, function () {
          t.safeSetState({
            status: h
          }, function () {
            t.props.onEntered(o, s);
          });
        });
      });
    };
    n.performExit = function () {
      var e = this;
      var t = this.props.exit;
      var n = this.getTimeouts();
      var i = this.props.nodeRef ? undefined : reactDomEntryWrapper.findDOMNode(this);
      if (!t || a.disabled) {
        this.safeSetState({
          status: u
        }, function () {
          e.props.onExited(i);
        });
        return;
      }
      this.props.onExit(i);
      this.safeSetState({
        status: m
      }, function () {
        e.props.onExiting(i);
        e.onTransitionEnd(n.exit, function () {
          e.safeSetState({
            status: u
          }, function () {
            e.props.onExited(i);
          });
        });
      });
    };
    n.cancelNextCallback = function () {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
    n.safeSetState = function (e, t) {
      t = this.setNextCallback(t);
      this.setState(e, t);
    };
    n.setNextCallback = function (e) {
      var t = this;
      var n = true;
      this.nextCallback = function (i) {
        if (n) {
          n = false;
          t.nextCallback = null;
          e(i);
        }
      };
      this.nextCallback.cancel = function () {
        n = false;
      };
      return this.nextCallback;
    };
    n.onTransitionEnd = function (e, t) {
      this.setNextCallback(t);
      var n = this.props.nodeRef ? this.props.nodeRef.current : reactDomEntryWrapper.findDOMNode(this);
      var i = e == null && !this.props.addEndListener;
      if (!n || i) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var r = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback];
        var o = r[0];
        var a = r[1];
        this.props.addEndListener(o, a);
      }
      if (e != null) {
        setTimeout(this.nextCallback, e);
      }
    };
    n.render = function () {
      var e = this.state.status;
      if (e === d) {
        return null;
      }
      var t = this.props;
      var n = t.children;
      t.in;
      t.mountOnEnter;
      t.unmountOnExit;
      t.appear;
      t.enter;
      t.exit;
      t.timeout;
      t.addEndListener;
      t.onEnter;
      t.onEntering;
      t.onEntered;
      t.onExit;
      t.onExiting;
      t.onExited;
      t.nodeRef;
      var r = objectOmitUtil_3.omitKeys(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
      return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
        value: null
      }, typeof n == "function" ? n(e, r) : reactCoreLibraryReexport.cloneElement(reactCoreLibraryReexport.Children.only(n), r));
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  function g() {}
  f.contextType = reactContextDefinition_4.reactContext;
  f.propTypes = {};
  f.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: g,
    onEntering: g,
    onEntered: g,
    onExit: g,
    onExiting: g,
    onExited: g
  };
  f.UNMOUNTED = d;
  f.EXITED = u;
  f.ENTERING = p;
  f.ENTERED = h;
  f.EXITING = m;
  var v = f;
  require.d(exports, {
    ENTERING: function () {
      return p;
    },
    Transition: function () {
      return v;
    },
    ENTERED: function () {
      return h;
    },
    EXITING: function () {
      return m;
    }
  });
}