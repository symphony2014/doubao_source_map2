// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TransitionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 281556
         */
module.exports = function (module, exports, require) {
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var classInheritanceHelper_1 = require("class-inheritance-helper_1") /*id: 298550*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextDefinition_4 = require("react-context-definition_4") /*id: 208719*/;
  var transitionGroupChildUtils = require("transition-group-child-utils") /*id: 661201*/;
  var d = Object.values || function (e) {
    return Object.keys(e).map(function (t) {
      return e[t];
    });
  };
  var u = function (e) {
    function t(t, n) {
      var i;
      var r = (i = e.call(this, t, n) || this).handleExited.bind(assertThisInitialized.assertThisInit(i));
      i.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: r,
        firstRender: true
      };
      return i;
    }
    classInheritanceHelper_1.setupInheritance(t, e);
    var n = t.prototype;
    n.componentDidMount = function () {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
    n.componentWillUnmount = function () {
      this.mounted = false;
    };
    t.getDerivedStateFromProps = function (e, t) {
      var n = t.children;
      var i = t.handleExited;
      return {
        children: t.firstRender ? transitionGroupChildUtils.cloneTransitionItems(e, i) : transitionGroupChildUtils.mergeTransitionMaps(e, n, i),
        firstRender: false
      };
    };
    n.handleExited = function (e, t) {
      var n = transitionGroupChildUtils.indexChildrenByKey(this.props.children);
      if (!(e.key in n)) {
        if (e.props.onExited) {
          e.props.onExited(t);
        }
        if (this.mounted) {
          this.setState(function (t) {
            var n = objectAssignUtil.objectAssign({}, t.children);
            delete n[e.key];
            return {
              children: n
            };
          });
        }
      }
    };
    n.render = function () {
      var e = this.props;
      var t = e.component;
      var n = e.childFactory;
      var r = objectOmitUtil_3.omitKeys(e, ["component", "childFactory"]);
      var o = this.state.contextValue;
      var a = d(this.state.children).map(n);
      delete r.appear;
      delete r.enter;
      delete r.exit;
      if (t === null) {
        return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
          value: o
        }, a);
      } else {
        return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
          value: o
        }, reactCoreLibraryReexport.createElement(t, r, a));
      }
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  u.propTypes = {};
  u.defaultProps = {
    component: "div",
    childFactory: function (e) {
      return e;
    }
  };
  exports.TransitionContext = u;
}