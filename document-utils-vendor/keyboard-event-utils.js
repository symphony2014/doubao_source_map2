// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VD' to 'KeyCode'
// - Renamed export 'qT' to 'isModKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 623958
         */
module.exports = function (module, exports, require) {
  require("user-agent-parser_1") /*id: 757289*/;
  var n;
  var i;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  function a(e) {
    if (userAgentDetect.userAgentInfo.isMac || userAgentDetect.userAgentInfo.isSafari) {
      return e.metaKey && !e.altKey;
    } else {
      return e.ctrlKey && !e.altKey;
    }
  }
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  (i = n ||= {})[i.BackSpace = 8] = "BackSpace";
  i[i.Tab = 9] = "Tab";
  i[i.Clear = 12] = "Clear";
  i[i.Enter = 13] = "Enter";
  i[i.Shift = 16] = "Shift";
  i[i.Ctrl = 17] = "Ctrl";
  i[i.Alt = 18] = "Alt";
  i[i.Esc = 27] = "Esc";
  i[i.Space = 32] = "Space";
  i[i.PageUp = 33] = "PageUp";
  i[i.PageDown = 34] = "PageDown";
  i[i.End = 35] = "End";
  i[i.Home = 36] = "Home";
  i[i.Left = 37] = "Left";
  i[i.Up = 38] = "Up";
  i[i.Right = 39] = "Right";
  i[i.Down = 40] = "Down";
  i[i.Delete = 46] = "Delete";
  i[i.Digit0 = 48] = "Digit0";
  i[i.Digit9 = 57] = "Digit9";
  i[i.A = 65] = "A";
  i[i.B = 66] = "B";
  i[i.C = 67] = "C";
  i[i.D = 68] = "D";
  i[i.E = 69] = "E";
  i[i.F = 70] = "F";
  i[i.G = 71] = "G";
  i[i.H = 72] = "H";
  i[i.I = 73] = "I";
  i[i.J = 74] = "J";
  i[i.K = 75] = "K";
  i[i.L = 76] = "L";
  i[i.M = 77] = "M";
  i[i.N = 78] = "N";
  i[i.O = 79] = "O";
  i[i.P = 80] = "P";
  i[i.Q = 81] = "Q";
  i[i.R = 82] = "R";
  i[i.S = 83] = "S";
  i[i.T = 84] = "T";
  i[i.U = 85] = "U";
  i[i.V = 86] = "V";
  i[i.W = 87] = "W";
  i[i.X = 88] = "X";
  i[i.Y = 89] = "Y";
  i[i.Z = 90] = "Z";
  i[i.Meta = 91] = "Meta";
  i[i.RightMeta = 92] = "RightMeta";
  i[i.Caret = 94] = "Caret";
  i[i.Numpad0 = 96] = "Numpad0";
  i[i.Numpad9 = 105] = "Numpad9";
  i[i.NumpadDot = 110] = "NumpadDot";
  i[i.F6 = 117] = "F6";
  i[i.F11 = 122] = "F11";
  i[i.Semicolon = 186] = "Semicolon";
  i[i.Plus = 187] = "Plus";
  i[i.Minus = 189] = "Minus";
  i[i.Dot = 190] = "Dot";
  i[i.Grave = 192] = "Grave";
  i[i.Bracket = 219] = "Bracket";
  i[i.Quot = 222] = "Quot";
  i[i.Asterisk = 106] = "Asterisk";
  i[i.Slash = 111] = "Slash";
  i[i["/"] = 191] = "/";
  i[i["\\"] = 220] = "\\";
  i[i.Ime = 229] = "Ime";
  n.Up;
  n.Down;
  n.Left;
  n.Right;
  n.C;
  n.V;
  n.X;
  require.d(exports, {
    KeyCode: function () {
      return n;
    },
    isModKey: function () {
      return a;
    }
  });
}