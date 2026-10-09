// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'componentPropUtils'
// - Resolved require(457587) to 'component-prop-utils'
// - Resolved require(497836) to 'css-vendor-prefix-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 910087
         */
module.exports = function (module, exports, require) {
  exports.addClassName = u;
  exports.addEvent = function (e, t, n, r) {
    if (!e) {
      return;
    }
    let i = {
      capture: true,
      ...r
    };
    if (e.addEventListener) {
      e.addEventListener(t, n, i);
    } else if (e.attachEvent) {
      e.attachEvent("on" + t, n);
    } else {
      e["on" + t] = n;
    }
  };
  exports.addUserSelectStyles = function (e) {
    if (!e) {
      return;
    }
    let t = e.getElementById("react-draggable-style-el");
    if (!t) {
      (t = e.createElement("style")).type = "text/css";
      t.id = "react-draggable-style-el";
      t.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
      t.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
      e.getElementsByTagName("head")[0].appendChild(t);
    }
    if (e.body) {
      u(e.body, "react-draggable-transparent-selection");
    }
  };
  exports.createCSSTransform = function (e, t) {
    let n = l(e, t, "px");
    return {
      [i.browserPrefixToKey("transform", i.default)]: n
    };
  };
  exports.createSVGTransform = function (e, t) {
    return l(e, t, "");
  };
  exports.getTouch = function (e, t) {
    return e.targetTouches && componentPropUtils.findInArray(e.targetTouches, e => t === e.identifier) || e.changedTouches && componentPropUtils.findInArray(e.changedTouches, e => t === e.identifier);
  };
  exports.getTouchIdentifier = function (e) {
    if (e.targetTouches && e.targetTouches[0]) {
      return e.targetTouches[0].identifier;
    } else if (e.changedTouches && e.changedTouches[0]) {
      return e.changedTouches[0].identifier;
    } else {
      return undefined;
    }
  };
  exports.getTranslation = l;
  exports.innerHeight = function (e) {
    let t = e.clientHeight;
    let n = e.ownerDocument.defaultView.getComputedStyle(e);
    t -= componentPropUtils.int(n.paddingTop);
    return t -= componentPropUtils.int(n.paddingBottom);
  };
  exports.innerWidth = function (e) {
    let t = e.clientWidth;
    let n = e.ownerDocument.defaultView.getComputedStyle(e);
    t -= componentPropUtils.int(n.paddingLeft);
    return t -= componentPropUtils.int(n.paddingRight);
  };
  exports.matchesSelector = s;
  exports.matchesSelectorAndParentsTo = function (e, t, n) {
    let r = e;
    do {
      if (s(r, t)) {
        return true;
      }
      if (r === n) {
        break;
      }
      r = r.parentNode;
    } while (r);
    return false;
  };
  exports.offsetXYFromParent = function (e, t, n) {
    let r = t === t.ownerDocument.body ? {
      left: 0,
      top: 0
    } : t.getBoundingClientRect();
    return {
      x: (e.clientX + t.scrollLeft - r.left) / n,
      y: (e.clientY + t.scrollTop - r.top) / n
    };
  };
  exports.outerHeight = function (e) {
    let t = e.clientHeight;
    let n = e.ownerDocument.defaultView.getComputedStyle(e);
    t += componentPropUtils.int(n.borderTopWidth);
    return t += componentPropUtils.int(n.borderBottomWidth);
  };
  exports.outerWidth = function (e) {
    let t = e.clientWidth;
    let n = e.ownerDocument.defaultView.getComputedStyle(e);
    t += componentPropUtils.int(n.borderLeftWidth);
    return t += componentPropUtils.int(n.borderRightWidth);
  };
  exports.removeClassName = c;
  exports.removeEvent = function (e, t, n, r) {
    if (!e) {
      return;
    }
    let i = {
      capture: true,
      ...r
    };
    if (e.removeEventListener) {
      e.removeEventListener(t, n, i);
    } else if (e.detachEvent) {
      e.detachEvent("on" + t, n);
    } else {
      e["on" + t] = null;
    }
  };
  exports.removeUserSelectStyles = function (e) {
    if (e) {
      try {
        if (e.body) {
          c(e.body, "react-draggable-transparent-selection");
        }
        if (e.selection) {
          e.selection.empty();
        } else {
          let t = (e.defaultView || window).getSelection();
          if (t && t.type !== "Caret") {
            t.removeAllRanges();
          }
        }
      } catch (e) {}
    }
  };
  var componentPropUtils = require("component-prop-utils") /*id: 457587*/;
  var i = function (e, t) {
    if (e && e.__esModule) {
      return e;
    }
    if (e === null || typeof e != "object" && typeof e != "function") {
      return {
        default: e
      };
    }
    var n = a(t);
    if (n && n.has(e)) {
      return n.get(e);
    }
    var r = {};
    var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e) {
      if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
        var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
        if (s && (s.get || s.set)) {
          Object.defineProperty(r, o, s);
        } else {
          r[o] = e[o];
        }
      }
    }
    r.default = e;
    if (n) {
      n.set(e, r);
    }
    return r;
  }(require("css-vendor-prefix-util") /*id: 497836*/);
  function a(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var n = new WeakMap();
    return (a = function (e) {
      if (e) {
        return n;
      } else {
        return t;
      }
    })(e);
  }
  let o = "";
  function s(e, t) {
    o ||= componentPropUtils.findInArray(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (t) {
      return componentPropUtils.isFunction(e[t]);
    });
    return !!componentPropUtils.isFunction(e[o]) && e[o](t);
  }
  function l(e, t, n) {
    let {
      x: r,
      y: i
    } = e;
    let a = `translate(${r}${n},${i}${n})`;
    if (t) {
      let e = `${typeof t.x == "string" ? t.x : t.x + n}`;
      let r = `${typeof t.y == "string" ? t.y : t.y + n}`;
      a = `translate(${e}, ${r})${a}`;
    }
    return a;
  }
  function u(e, t) {
    if (e.classList) {
      e.classList.add(t);
    } else if (!e.className.match(new RegExp(`(?:^|\\s)${t}(?!\\S)`))) {
      e.className += ` ${t}`;
    }
  }
  function c(e, t) {
    if (e.classList) {
      e.classList.remove(t);
    } else {
      e.className = e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`, "g"), "");
    }
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}