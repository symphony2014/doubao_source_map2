// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11049.b9a4593e.js
         * chunkId: 11049
         * moduleId: 422908
         */
module.exports = function (module, exports, require) {
  exports.BLANK_URL = exports.relativeFirstCharacters = exports.whitespaceEscapeCharsRegex = exports.urlSchemeRegex = exports.ctrlCharactersRegex = exports.htmlCtrlEntityRegex = exports.htmlEntitiesRegex = exports.invalidProtocolRegex = undefined;
  exports.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
  exports.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
  exports.htmlCtrlEntityRegex = /&(newline|tab);/gi;
  exports.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
  exports.urlSchemeRegex = /^.+(:|&colon;)/gim;
  exports.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
  exports.relativeFirstCharacters = [".", "/"];
  exports.BLANK_URL = "about:blank";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}