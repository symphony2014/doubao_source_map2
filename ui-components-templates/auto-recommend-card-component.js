// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'AutoRecommendCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 541404
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var sparkleIcon = require("sparkle-icon") /*id: 152694*/;
  var r = require.p + "static/image/auto-recommend-card.ba9c3ce9.png";
  var s = {
    cardItem: "cardItem-cdQEvY",
    card: "card-NYCTnC",
    activeImg: "activeImg-aYwxkp",
    activeTxt: "activeTxt-bwBItj",
    animCard: "animCard-JofG8n",
    normalImg: "normalImg-p79wya"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      active: t,
      onClick: l,
      item: n,
      onCardInView: d
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (d != null) {
        d();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      onClick: l,
      className: o(e.className, s.cardItem, `
          h-full
          flex cursor-pointer flex-col overflow-x-hidden
          transition-all
          bg-dbx-bg-body-overlay items-center
          text-dbx-text-secondary
        `),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        draggable: "false",
        className: o("w-full rounded-12 object-cover", s.card, t ? s.activeImg : s.normalImg),
        style: {
          aspectRatio: "16/9",
          backgroundSize: "cover",
          backgroundImage: `url(${r})`
        },
        children: reactJsxRuntimeCoreReexport.jsx(sparkleIcon.SparkleIcon, {
          className: "text-dbx-text-highlight"
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(s.titleTxt, `
          mx-14 my-10 mt-8 line-clamp-2 flex items-center justify-center overflow-hidden
          [font-size:14px]
          leading-22
          [font-weight:400]
          whitespace-nowrap overflow-ellipsis
        `, t ? s.activeTxt : ""),
        children: n.title
      })]
    });
  };
  require.d(exports, {
    AutoRecommendCard: function () {
      return d;
    }
  });
}