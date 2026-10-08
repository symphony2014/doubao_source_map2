// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'alignLeft'
// - Renamed export 'B' to 'bold'
// - Renamed export 'H' to 'heading1'
// - Renamed export 'I' to 'italic'
// - Renamed export 'J' to 'matchShortcut'
// - Renamed export 'U' to 'underline'
// - Renamed export 'b' to 'heading2'
// - Renamed export 'c' to 'heading3'
// - Renamed export 'f' to 'alignCenter'
// - Renamed export 'g' to 'alignRight'
// - Renamed export 'i' to 'insertOrderedList'
// - Renamed export 'j' to 'insertUnorderedList'
// - Renamed export 'k' to 'insertCodeList'
// - Renamed export 'l' to 'blockquote'
// - Renamed export 'n' to 'checkbox'
// - Renamed export 'r' to 'backColor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 80260
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var o;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var keyboardEventUtils = require("keyboard-event-utils") /*id: 623958*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  (n = o ||= {}).FIND = "find";
  n.REPLACE = "replace";
  var f = "h1";
  var A = "h2";
  var g = "h3";
  var p = "bold";
  var m = "italic";
  var y = "underline";
  var v = "alignleft";
  var b = "aligncenter";
  var w = "alignright";
  var C = "insertorderedlist";
  var E = "insertunorderedlist";
  var I = "insertcodelist";
  var B = "blockquote";
  var x = "checkbox";
  var D = "backcolor";
  var S = o.FIND;
  var k = o.REPLACE;
  (i = {}).GLOBAL_SEARCH = {
    mac: {
      metaKey: true,
      shiftKey: true,
      keyCode: 70
    },
    windows: {
      ctrlKey: true,
      shiftKey: true,
      keyCode: 70
    }
  };
  i.CREATE_DOC = {
    mac: {
      metaKey: true,
      altKey: true,
      code: "KeyN"
    },
    windows: {
      altKey: true,
      ctrlKey: true,
      keyCode: 78
    }
  };
  i.CREATE_SHEET = {
    mac: {
      metaKey: true,
      altKey: true,
      shiftKey: true,
      keyCode: 78
    },
    windows: {
      altKey: true,
      shiftKey: true,
      ctrlKey: true,
      keyCode: 78
    }
  };
  i.SHORTCUTS = {
    mac: {
      metaKey: true,
      keyCode: 191
    },
    windows: {
      ctrlKey: true,
      keyCode: 191
    }
  };
  i[f] = {
    mindmapDocsEnable: false,
    windows: {
      altKey: true,
      ctrlKey: true,
      keyCode: 49
    },
    mac: {
      altKey: true,
      metaKey: true,
      keyCode: 49
    }
  };
  i[D] = {
    windows: {
      keyCode: 72,
      ctrlKey: true,
      altKey: true
    },
    mac: {
      keyCode: 72,
      metaKey: true,
      altKey: true
    }
  };
  i[A] = {
    mindmapDocsEnable: false,
    windows: {
      altKey: true,
      ctrlKey: true,
      keyCode: 50
    },
    mac: {
      altKey: true,
      metaKey: true,
      keyCode: 50
    }
  };
  i[g] = {
    mindmapDocsEnable: false,
    windows: {
      altKey: true,
      ctrlKey: true,
      keyCode: 51
    },
    mac: {
      altKey: true,
      metaKey: true,
      keyCode: 51
    }
  };
  i.heading = {
    titleEnable: false
  };
  i[p] = {
    windows: {
      key: "b",
      ctrlKey: true
    },
    mac: {
      metaKey: true,
      key: "b"
    }
  };
  i[m] = {
    windows: {
      key: "i",
      ctrlKey: true
    },
    mac: {
      key: "i",
      metaKey: true
    }
  };
  i[y] = {
    windows: {
      key: "u",
      ctrlKey: true
    },
    mac: {
      key: "u",
      metaKey: true
    }
  };
  i.strikethrough = {
    windows: {
      key: "x",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "x",
      metaKey: true,
      shiftKey: true
    }
  };
  i[v] = {
    imageEnable: true,
    titleEnable: true,
    mentionEnable: true,
    windows: {
      key: "l",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "l",
      metaKey: true,
      shiftKey: true
    }
  };
  i[b] = {
    imageEnable: true,
    titleEnable: true,
    mentionEnable: true,
    windows: {
      key: "e",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "e",
      metaKey: true,
      shiftKey: true
    }
  };
  i[w] = {
    imageEnable: true,
    titleEnable: true,
    mentionEnable: true,
    windows: {
      key: "r",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "r",
      metaKey: true,
      shiftKey: true
    }
  };
  i.alignfull = {
    listEnable: false,
    windows: {
      ctrlKey: true,
      which: "f",
      shiftKey: true
    },
    mac: {
      metaKey: true,
      which: "f",
      shiftKey: true
    }
  };
  i[C] = [{
    imageEnable: false,
    windows: {
      key: "7",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "7",
      metaKey: true,
      shiftKey: true
    }
  }, {
    imageEnable: false,
    windows: {
      key: "&",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "&",
      metaKey: true,
      shiftKey: true
    }
  }];
  i[E] = [{
    imageEnable: false,
    windows: {
      key: "8",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "8",
      metaKey: true,
      shiftKey: true
    }
  }, {
    imageEnable: false,
    windows: {
      key: "*",
      ctrlKey: true,
      shiftKey: true
    },
    mac: {
      key: "*",
      metaKey: true,
      shiftKey: true
    }
  }];
  i[I] = {
    imageEnable: false,
    windows: {
      altKey: true,
      ctrlKey: true,
      which: "c"
    },
    mac: {
      metaKey: true,
      altKey: true,
      which: "c"
    }
  };
  i[B] = {
    windows: {
      keyCode: 190,
      shiftKey: true,
      ctrlKey: true
    },
    mac: {
      keyCode: 190,
      shiftKey: true,
      metaKey: true
    }
  };
  i.insertseparator = {
    windows: {
      ctrlKey: true,
      which: "s",
      altKey: true
    },
    mac: {
      metaKey: true,
      which: "s",
      altKey: true
    }
  };
  i.link = {
    titleEnable: true,
    windows: {
      ctrlKey: true,
      key: "k"
    },
    mac: {
      metaKey: true,
      key: "k"
    }
  };
  i[x] = {
    imageEnable: false,
    windows: {
      ctrlKey: true,
      which: "t",
      altKey: true
    },
    mac: {
      metaKey: true,
      which: "t",
      altKey: true
    }
  };
  i.insertimage = {
    listEnable: false,
    windows: {
      ctrlKey: true,
      which: "u",
      shiftKey: true
    },
    mac: {
      metaKey: true,
      which: "u",
      shiftKey: true
    }
  };
  i.imagefullscreen = {
    listEnable: false,
    windows: {
      ctrlKey: true,
      which: "f",
      shiftKey: true
    },
    mac: {
      metaKey: true,
      which: "f",
      shiftKey: true
    }
  };
  i.undo = {
    titleEnable: true,
    mentionEnable: true,
    driveEnable: true,
    windows: {
      ctrlKey: true,
      which: "z"
    },
    mac: {
      metaKey: true,
      which: "z"
    }
  };
  i.redo = [{
    titleEnable: true,
    mentionEnable: true,
    driveEnable: true,
    windows: {
      ctrlKey: true,
      which: "z",
      shiftKey: true
    },
    mac: {
      metaKey: true,
      which: "z",
      shiftKey: true
    }
  }, {
    titleEnable: true,
    driveEnable: true,
    windows: {
      ctrlKey: true,
      which: "y"
    }
  }];
  i.sheet = {
    windows: {},
    mac: {},
    imageEnable: false
  };
  i.ppt = {
    windows: {
      keyCode: 116
    },
    mac: {
      metaKey: true,
      shiftKey: true,
      keyCode: 80
    }
  };
  i.mindmap = {
    window: {
      keyCode: keyboardEventUtils.KeyCode.F6
    },
    mac: {
      metaKey: true,
      shiftKey: true,
      keyCode: keyboardEventUtils.KeyCode.J
    }
  };
  i.print = {
    windows: {
      ctrlKey: true,
      which: "p"
    },
    mac: {
      metaKey: true,
      which: "p"
    }
  };
  i.inlinecode = {
    windows: {
      ctrlKey: true,
      which: "c",
      shiftKey: true
    },
    mac: {
      ctrlKey: true,
      which: "c",
      metaKey: true
    }
  };
  i.doInsertTable = {
    windows: {
      altKey: true,
      ctrlKey: true,
      keyCode: keyboardEventUtils.KeyCode.A
    },
    mac: {
      metaKey: true,
      altKey: true,
      keyCode: keyboardEventUtils.KeyCode.A
    }
  };
  i[S] = {
    windows: {
      ctrlKey: true,
      keyCode: keyboardEventUtils.KeyCode.F
    },
    mac: {
      metaKey: true,
      keyCode: keyboardEventUtils.KeyCode.F
    }
  };
  i[k] = {
    windows: {
      ctrlKey: true,
      keyCode: keyboardEventUtils.KeyCode.H
    },
    mac: {
      metaKey: true,
      shiftKey: true,
      keyCode: keyboardEventUtils.KeyCode.H
    }
  };
  var _ = i;
  function T(e) {
    var t;
    var r;
    var n = "";
    var i = 0;
    var o = "";
    if (userAgentDetect.userAgentInfo.isMac) {
      n = "mac";
    } else {
      if (!userAgentDetect.userAgentInfo.isWindows) {
        return "";
      }
      n = "windows";
    }
    function s(t) {
      var r = _[t];
      var a = r;
      if (!arrayIsArrayUtil.isArray(r)) {
        a = [r];
      }
      arrayObjectForeach.arrayObjectForeach(a, function (r) {
        var a = r[n] || r.windows;
        var s = getOwnKeys.getOwnKeys(a);
        var l = throttledPathFilterStringify.throttledPathStr(e, s);
        if (l.which !== undefined) {
          l.which = String.fromCharCode(l.which).toLowerCase();
        }
        l.key &&= l.key.toLowerCase();
        if (JSON.stringify(a) === JSON.stringify(l) && s.length > i) {
          o = t;
          i = s.length;
        }
      });
    }
    try {
      var f = typescriptHelpers_1.getValues(Object.keys(_));
      var A = f.next();
      for (; !A.done; A = f.next()) {
        var g = A.value;
        s(g);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        if (A && !A.done && (r = f.return)) {
          r.call(f);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return o;
  }
  require.d(exports, {
    alignLeft: function () {
      return v;
    },
    bold: function () {
      return p;
    },
    heading1: function () {
      return f;
    },
    italic: function () {
      return m;
    },
    matchShortcut: function () {
      return T;
    },
    underline: function () {
      return y;
    },
    heading2: function () {
      return A;
    },
    heading3: function () {
      return g;
    },
    alignCenter: function () {
      return b;
    },
    alignRight: function () {
      return w;
    },
    insertOrderedList: function () {
      return C;
    },
    insertUnorderedList: function () {
      return E;
    },
    insertCodeList: function () {
      return I;
    },
    blockquote: function () {
      return B;
    },
    checkbox: function () {
      return x;
    },
    backColor: function () {
      return D;
    }
  });
}