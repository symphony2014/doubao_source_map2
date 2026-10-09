// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(537388) to 'width-format-resolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 564885
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = undefined;
  var r = a(require("width-format-resolver") /*id: 537388*/);
  var i = {
    date: r.default({
      formats: {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
      },
      defaultWidth: "full"
    }),
    time: r.default({
      formats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      defaultWidth: "full"
    }),
    dateTime: r.default({
      formats: {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  };
  exports.default = i;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}