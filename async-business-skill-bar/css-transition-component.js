// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CssTransition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 160074
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var classInheritanceHelper_1 = require("class-inheritance-helper_1") /*id: 298550*/;
  function s(e, t) {
    return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var getScrollTop = require("get-scroll-top") /*id: 770381*/;
  function f(e, t) {
    return e && t && t.split(" ").forEach(function (t) {
      if (e.classList) {
        e.classList.remove(t);
      } else if (typeof e.className == "string") {
        e.className = s(e.className, t);
      } else {
        e.setAttribute("class", s(e.className && e.className.baseVal || "", t));
      }
    });
  }
  var l = function (e) {
    function t() {
      var t;
      var n = arguments.length;
      var r = Array(n);
      var i = 0;
      for (; i < n; i++) {
        r[i] = arguments[i];
      }
      (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
        appear: {},
        enter: {},
        exit: {}
      };
      t.onEnter = function (e, n) {
        var r = t.resolveArguments(e, n);
        var i = r[0];
        var o = r[1];
        t.removeClasses(i, "exit");
        t.addClass(i, o ? "appear" : "enter", "base");
        if (t.props.onEnter) {
          t.props.onEnter(e, n);
        }
      };
      t.onEntering = function (e, n) {
        var r = t.resolveArguments(e, n);
        var i = r[0];
        var o = r[1];
        t.addClass(i, o ? "appear" : "enter", "active");
        if (t.props.onEntering) {
          t.props.onEntering(e, n);
        }
      };
      t.onEntered = function (e, n) {
        var r = t.resolveArguments(e, n);
        var i = r[0];
        var o = r[1] ? "appear" : "enter";
        t.removeClasses(i, o);
        t.addClass(i, o, "done");
        if (t.props.onEntered) {
          t.props.onEntered(e, n);
        }
      };
      t.onExit = function (e) {
        var n = t.resolveArguments(e)[0];
        t.removeClasses(n, "appear");
        t.removeClasses(n, "enter");
        t.addClass(n, "exit", "base");
        if (t.props.onExit) {
          t.props.onExit(e);
        }
      };
      t.onExiting = function (e) {
        var n = t.resolveArguments(e)[0];
        t.addClass(n, "exit", "active");
        if (t.props.onExiting) {
          t.props.onExiting(e);
        }
      };
      t.onExited = function (e) {
        var n = t.resolveArguments(e)[0];
        t.removeClasses(n, "exit");
        t.addClass(n, "exit", "done");
        if (t.props.onExited) {
          t.props.onExited(e);
        }
      };
      t.resolveArguments = function (e, n) {
        if (t.props.nodeRef) {
          return [t.props.nodeRef.current, e];
        } else {
          return [e, n];
        }
      };
      t.getClassNames = function (e) {
        var n = t.props.classNames;
        var r = typeof n == "string";
        var i = r && n ? n + "-" : "";
        var o = r ? "" + i + e : n[e];
        var s = r ? o + "-active" : n[e + "Active"];
        var c = r ? o + "-done" : n[e + "Done"];
        return {
          baseClassName: o,
          activeClassName: s,
          doneClassName: c
        };
      };
      return t;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    var n = t.prototype;
    n.addClass = function (e, t, n) {
      var r;
      var i = this.getClassNames(t)[n + "ClassName"];
      var o = this.getClassNames("enter").doneClassName;
      if (t === "appear" && n === "done" && o) {
        i += " " + o;
      }
      if (n === "active" && e) {
        getScrollTop.getScrollTop(e);
      }
      if (i) {
        this.appliedClasses[t][n] = i;
        r = i;
        if (e && r) {
          r.split(" ").forEach(function (t) {
            return function (e, t) {
              if (e.classList) {
                e.classList.add(t);
              } else if (e.classList ? !t || !e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") === -1) {
                if (typeof e.className == "string") {
                  e.className = e.className + " " + t;
                } else {
                  e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t);
                }
              }
            }(e, t);
          });
        }
      }
    };
    n.removeClasses = function (e, t) {
      var n = this.appliedClasses[t];
      var r = n.base;
      var i = n.active;
      var o = n.done;
      this.appliedClasses[t] = {};
      if (r) {
        f(e, r);
      }
      if (i) {
        f(e, i);
      }
      if (o) {
        f(e, o);
      }
    };
    n.render = function () {
      var e = this.props;
      e.classNames;
      var t = objectOmitUtil_3.omitKeys(e, ["classNames"]);
      return reactCoreLibraryReexport.createElement(reactTransitionComponent.Transition, objectAssignUtil.objectAssign({}, t, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  l.defaultProps = {
    classNames: ""
  };
  l.propTypes = {};
  var d = l;
  require.d(exports, {
    CssTransition: function () {
      return d;
    }
  });
}