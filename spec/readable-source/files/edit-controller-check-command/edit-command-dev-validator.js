// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'R' to 'dialogConfirmComponent'
// - Resolved require(103822) to 'dialog-confirm-component'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'O' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'A' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: edit-controller-check-command.1852d57e.js
         * chunkId: 4132
         * moduleId: 873633
         */
module.exports = function (module, exports, require) {
  var E;
  var dialogConfirmComponent = require("dialog-confirm-component") /*id: 103822*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  (E = {}).ADD_DIVIDER = "ADD_DIVIDER";
  E.ADD_REMINDER = "ADD_REMINDER";
  E.ADD_TABLE = "ADD_TABLE";
  E.ADVANCED_SEARCH = "ADVANCED_SEARCH";
  E.ALT_SHIFT_ARROW_DOWN = "ALT_SHIFT_ARROW_DOWN";
  E.ALT_SHIFT_ARROW_LEFT = "ALT_SHIFT_ARROW_LEFT";
  E.ALT_SHIFT_ARROW_RIGHT = "ALT_SHIFT_ARROW_RIGHT";
  E.ALT_SHIFT_ARROW_UP = "ALT_SHIFT_ARROW_UP";
  E.BACKSPACE_WORD = "BACKSPACE_WORD";
  E.BOLD = "BOLD";
  E.COMMAND_BACKSPACE = "COMMAND_BACKSPACE";
  E.COMMAND_DELETE = "COMMAND_DELETE";
  E.COMMAND_ENTER = "COMMAND_ENTER";
  E.COMMAND_FIND = "COMMAND_FIND";
  E.COMMAND_REPLACE = "COMMAND_REPLACE";
  E.COMMAND_SAVE = "COMMAND_SAVE";
  E.COMMAND_TAB = "COMMAND_TAB";
  E.COMMENT = "COMMENT";
  E.COPY = "COPY";
  E.CTRL_DOWN = "CTRL_DOWN";
  E.CTRL_LEFT = "CTRL_LEFT";
  E.CTRL_RIGHT = "CTRL_RIGHT";
  E.CTRL_UP = "CTRL_UP";
  E.CURSOR_DOWN = "CURSOR_DOWN";
  E.CURSOR_LEFT = "CURSOR_LEFT";
  E.CURSOR_RIGHT = "CURSOR_RIGHT";
  E.CURSOR_UP = "CURSOR_UP";
  E.CUT = "CUT";
  E.DELETE_WORD = "DELETE_WORD";
  E.EXIT = "EXIT";
  E.INLINE_CODE = "INLINE_CODE";
  E.ITALIC = "ITALIC";
  E.LINK = "LINK";
  E.LOCATE_TO_END = "LOCATE_TO_END";
  E.LOCATE_TO_START = "LOCATE_TO_START";
  E.META_ENTER = "META_ENTER";
  E.META_SHIFT_ENTER = "META_SHIFT_ENTER";
  E.MINUS = "MINUS";
  E.NEW_PAGE = "NEW_PAGE";
  E.PRESENTATION_MODE = "PRESENTATION_MODE";
  E.PRINT = "PRINT";
  E.SELECT_ALL = "SELECT_ALL";
  E.SHIFT_ARROW_DOWN = "SHIFT_ARROW_DOWN";
  E.SHIFT_ARROW_LEFT = "SHIFT_ARROW_LEFT";
  E.SHIFT_ARROW_RIGHT = "SHIFT_ARROW_RIGHT";
  E.SHIFT_ARROW_UP = "SHIFT_ARROW_UP";
  E.SHIFT_CMD_DOWN = "SHIFT_CMD_DOWN";
  E.SHIFT_CMD_UP = "SHIFT_CMD_UP";
  E.SHIFT_CTRL_DOWN = "SHIFT_CTRL_DOWN";
  E.SHIFT_CTRL_UP = "SHIFT_CTRL_UP";
  E.SHIFT_ENTER = "SHIFT_ENTER";
  E.STRIKETHROUGH = "STRIKETHROUGH";
  E.SWITCH_HELP_SLIDE_BAR = "SWITCH_HELP_SLIDE_BAR";
  E.SWITCH_TO_EDIT_MODE = "SWITCH_TO_EDIT_MODE";
  E.SWITCH_TO_READ_MODE = "SWITCH_TO_READ_MODE";
  E.SWITCH_TO_REVISION_MODE = "SWITCH_TO_REVISION_MODE";
  E.TEXT_ALIGN_CENTER = "TEXT_ALIGN_CENTER";
  E.TEXT_ALIGN_LEFT = "TEXT_ALIGN_LEFT";
  E.TEXT_ALIGN_RIGHT = "TEXT_ALIGN_RIGHT";
  E.TEXT_HIGHLIGHT = "TEXT_HIGHLIGHT";
  E.TOGGLE_TASK = "TOGGLE_TASK";
  E.TURN_INTO_BULLET = "TURN_INTO-bullet";
  E.TURN_INTO_CODE = "TURN_INTO-code";
  E.TURN_INTO_H1 = "TURN_INTO-heading1";
  E.TURN_INTO_H2 = "TURN_INTO-heading2";
  E.TURN_INTO_H3 = "TURN_INTO-heading3";
  E.TURN_INTO_H4 = "TURN_INTO-heading4";
  E.TURN_INTO_H5 = "TURN_INTO-heading5";
  E.TURN_INTO_H6 = "TURN_INTO-heading6";
  E.TURN_INTO_H7 = "TURN_INTO-heading7";
  E.TURN_INTO_H8 = "TURN_INTO-heading8";
  E.TURN_INTO_H9 = "TURN_INTO-heading9";
  E.TURN_INTO_ORDERED = "TURN_INTO-ordered";
  E.TURN_INTO_QUOTE_CONTAINER = "TURN_INTO-quote_container";
  E.TURN_INTO_CALLOUT = "TURN_INTO-callout";
  E.TURN_INTO_TASK = "TURN_INTO-task";
  E.TURN_INTO_SYNCED_SOURCE = "TURN_INTO-synced_source";
  E.MODELS_TURN_INTO_COMMAND = "MODELS_TURN_INTO_COMMAND";
  E.TURN_INTO_TEXT = "TURN_INTO-text";
  E.TURN_INTO_TODO = "TURN_INTO-todo";
  E.UNDERLINE = "UNDERLINE";
  E.UN_TAB = "UN_TAB";
  E.WHITEBOARD_COMMENT = "WHITEBOARD_COMMENT";
  E.EXPAND = "EXPAND";
  E.COLLAPSE = "COLLAPSE";
  E.CREATE_MEEGO_WORKITEM = "CREATE_MEEGO_WORKITEM";
  let I = E;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = Object.values(I);
  let D = function () {
    let T;
    let _ = function () {
      if (!T) {
        T = document.createElement("div");
        document.body.appendChild(T);
      }
      return T;
    };
    _.clearContainer = function () {
      T = undefined;
    };
    return _;
  }();
  function L() {
    let T = D();
    if (T) {
      reactDomEntryWrapper.unmountComponentAtNode(T);
      if (T.parentNode) {
        T.parentNode.removeChild(T);
        D.clearContainer();
      }
    }
  }
  let e = T => {
    let {
      commandName: _
    } = T;
    return reactJsxRuntimeCoreReexport.jsxs(dialogConfirmComponent.Dialog, {
      visible: true,
      centered: true,
      title: `\u{6CE8}\u{518C}\u{4E86}\u{672A}\u{53D7}\u{63A7}\u{7684}\u{6307}\u{4EE4}\u{540D}\u{FF1A}'${_}'`,
      onOk: L,
      destroyOnClose: true,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        children: ["本报错仅在", reactJsxRuntimeCoreReexport.jsx("span", {
          style: {
            color: "red"
          },
          children: "开发阶段"
        }), "出现，线上不会遇到本报错"]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        children: ["遇到本报错说明项目中注册了未受控的指令： ", reactJsxRuntimeCoreReexport.jsx("strong", {
          children: _
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        children: ["如果该指令是你添加的，请及时找 CCM 性能负责 editController 相关的同学咨询处理，否则在你代码合入后，", reactJsxRuntimeCoreReexport.jsx("span", {
          style: {
            color: "red"
          },
          children: "每一位"
        }), "开发同学都可能在开发时出现此弹窗"]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: "如果指令不是你添加的，可以在控制台通过 trace 找到相关注册模块，帮忙找到相关同学处理"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: "手动在 `edit-controller/command-white-list-map.ts` 文件中添加对应的指令名可让阻止此弹窗继续弹出，但在 CI 阶段还是需要找性能同学 CR，所以及时找性能同学确认影响面，才是效率最高的做法～"
      })]
    });
  };
  function S(T) {
    if (!C.includes(T)) {
      reactDomEntryWrapper.render(reactJsxRuntimeCoreReexport.jsx(e, {
        commandName: T
      }), D());
    }
  }
  require.r(exports);
  require.d(exports, {
    checkCommandInDev: function () {
      return S;
    }
  });
}