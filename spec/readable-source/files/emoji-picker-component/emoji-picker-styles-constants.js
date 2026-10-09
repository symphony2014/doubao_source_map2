// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mv' to 'iconTypeMap'
// - Renamed export 'eq' to 'emojiSearchStyles'
// - Renamed export 'gn' to 'iconTypeConstants'
// - Renamed export 'jX' to 'emojiPickerStyles'
// - Renamed export 'ss' to 'emojiCategories'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24087.f79c4f85.js
         * chunkId: 24087
         * moduleId: 492426
         */
module.exports = function (module, exports, require) {
  var a;
  var f;
  var iconAssetConstants = require("icon-asset-constants") /*id: 443476*/;
  var uiConstantsEmojiConfig = require("ui-constants-emoji-config") /*id: 592082*/;
  (a = f ||= {}).EMOJI = "emoji";
  a.ICON = "icon";
  let t = {
    [uiConstantsEmojiConfig.iconTypes.EMOJI]: f.EMOJI,
    [uiConstantsEmojiConfig.iconTypes.ICON]: f.ICON
  };
  let r = ["frequent", "people", "nature", "foods", "activity", "places", "objects", "symbols"];
  let d = `
#root {
  --padding: ${iconAssetConstants.sizeSmallAlt}px;
  background-color: var(--bg-float);
  width: ${iconAssetConstants.imageHeight}px !important;
  padding-top: 4px;
  padding-right: 2px;
}

#root>.scroll{
  margin-top: 8px;
}

#root>.padding-lr+.scroll{
  margin-top: 6px;
  padding-left: 15px;
}


.scroll>div {
  width: ${iconAssetConstants.imageHeight - iconAssetConstants.sizeSmallAlt * 2}px !important;
}

.scroll::-webkit-scrollbar {
  height: 7px;
  width: 7px;
}

.scroll::-webkit-scrollbar-thumb {
  height: 96px;
  border-radius: 7px;
  border: none;
}


@media screen and (max-height: ${iconAssetConstants.maxSize}px) {
  .scroll::-webkit-scrollbar-thumb {
    height: 57px;
  }
}

.scroll::-webkit-scrollbar-thumb,
.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--N900-30);
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--N900-60) !important;
}

.category>div:first-child {
  color: var(--text-caption);
  font-weight: 400;
  font-size: 12px;
}

.category .sticky {
  background-color: rgba(var(--bg-float-raw), .8);
  backdrop-filter: none;
}

.category .relative {
  margin: 0 9px;
}

.category>div:not(.relative)>.flex {
  gap: 2px;
  margin: 0 9px;
}

.category button {
  min-width: 36px;
}

.category button .background {
  border-radius: 4px !important;
  transition: none;
}

.emoji-mart-emoji>span {
  font-family: ${uiConstantsEmojiConfig.emojiFontStack}px !important;
}


.search {
  margin: 0 8px;
}

.search input[type='search'] {
  height: 36px;
  background-color: var(--bg-float);
  border: 1px solid var(--line-border-component);
  border-radius: 6px;
  font-size: 16px;
  color: var(--text-title);
  padding-left: 40px;
  padding-right: 44px;
}

.search input[type='search']:focus {
  background-color: var(--bg-float);
  border-color: var(--text-link-hover);
  box-shadow: none;
}

.search .loupe {
  left: 12px;
  color: var(--icon-n2);
}

.search .loupe svg {
  width: 15px;
  height: 15px;
}

.search .delete {
  padding: 5px;
  right: 17px;
  border-radius: 4px;
}

.search .delete:hover {
  background-color: var(--fill-hover);
}

.search .delete svg {
  width: 14px;
  height: 14px;
  color: var(--icon-n3);
}


#nav {
  background: var(--bg-body);
  padding: 16px 24px;
}

#nav .flex {
  gap: 23.7px;
}

#nav .bar {
  display: none;
}

#nav button {
  color: var(--icon-n2);
  padding: 6px;
  cursor: pointer;
}

#nav button:hover {
  color: var(--icon-n2);
  background: var(--fill-hover);
  border-radius: 4px;
}

#nav button[aria-selected] {
  color: var(--primary-pri-500);
}

`;
  let u = `
  #root .search {
    margin-right: 51px;
  }
  #root .search .delete {
    right: 6px;
  }
`;
  require.d(exports, {
    iconTypeMap: function () {
      return t;
    },
    emojiSearchStyles: function () {
      return u;
    },
    iconTypeConstants: function () {
      return f;
    },
    emojiPickerStyles: function () {
      return d;
    },
    emojiCategories: function () {
      return r;
    }
  });
}