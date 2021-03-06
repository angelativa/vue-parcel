/**
 * @file 用于打包模块
 * @author musicode
 */
define(function (require, exports, module) {

    'use strict';

    require('./form/Box');
    require('./form/BoxGroup');
    require('./form/Date');
    require('./form/DateRange');
    require('./form/Number');
    require('./form/Select');
    require('./form/Text');
    require('./form/Validator');

    require('./function/allPromises');
    require('./function/around');
    require('./function/autoScrollDown');
    require('./function/autoScrollUp');
    require('./function/conditionalTask');
    require('./function/contains');
    require('./function/createEvent');
    require('./function/createGroup');
    require('./function/createPromise');
    require('./function/createTimer');
    require('./function/debounce');
    require('./function/decimalLength');
    require('./function/decodeHTML');
    require('./function/disableSelection');
    require('./function/divide');
    require('./function/dragGlobal');
    require('./function/enableSelection');
    require('./function/encodeHTML');
    require('./function/eventOffset');
    require('./function/eventPage');
    require('./function/extend');
    require('./function/firstDateInMonth');
    require('./function/firstDateInWeek');
    require('./function/fixNumber');
    require('./function/float2Int');
    require('./function/guid');
    require('./function/imageDimension');
    require('./function/innerOffset');
    require('./function/isActiveElement');
    require('./function/isHidden');
    require('./function/isValidDate');
    require('./function/keys');
    require('./function/lastDateInMonth');
    require('./function/lastDateInWeek');
    require('./function/lpad');
    require('./function/minus');
    require('./function/multiply');
    require('./function/nextTick');
    require('./function/offsetDate');
    require('./function/offsetHour');
    require('./function/offsetMinute');
    require('./function/offsetMonth');
    require('./function/offsetParent');
    require('./function/offsetSecond');
    require('./function/offsetWeek');
    require('./function/outerOffset');
    require('./function/page');
    require('./function/pageHeight');
    require('./function/pageScrollLeft');
    require('./function/pageScrollTop');
    require('./function/pageWidth');
    require('./function/parseDate');
    require('./function/parsePercent');
    require('./function/parseTime');
    require('./function/pin');
    require('./function/pinGlobal');
    require('./function/plus');
    require('./function/position');
    require('./function/ratio');
    require('./function/render');
    require('./function/replaceWith');
    require('./function/restrain');
    require('./function/scrollBottom');
    require('./function/simplifyDate');
    require('./function/simplifySecond');
    require('./function/simplifyTime');
    require('./function/split');
    require('./function/stringifyDate');
    require('./function/stringifyTime');
    require('./function/supportCanvas');
    require('./function/supportFlash');
    require('./function/supportInput');
    require('./function/supportLocalStorage');
    require('./function/supportPlaceholder');
    require('./function/supportWebp');
    require('./function/supportWebSocket');
    require('./function/testTarget');
    require('./function/toBoolean');
    require('./function/toNumber');
    require('./function/toString');
    require('./function/toTimestamp');
    require('./function/ucFirst');
    require('./function/viewport');
    require('./function/viewportHeight');
    require('./function/viewportWidth');
    require('./function/waitPromises');

    require('./helper/AjaxUploader');
    require('./helper/KeyboardIterator');
    require('./helper/Draggable');
    require('./helper/FlashUploader');
    require('./helper/Input');
    require('./helper/Iterator');
    require('./helper/Keyboard');
    require('./helper/Placeholder');
    require('./helper/Popup');
    require('./helper/Switchable');

    require('./ui/AutoComplete');
    require('./ui/Calendar');
    require('./ui/Carousel');
    require('./ui/ComboBox');
    require('./ui/ContextMenu');
    require('./ui/Dialog');
    require('./ui/Pager');
    require('./ui/Rater');
    require('./ui/ScrollBar');
    require('./ui/Slider');
    require('./ui/SpinBox');
    require('./ui/Tab');
    require('./ui/Tooltip');
    require('./ui/Tree');
    require('./ui/Uploader');
    require('./ui/Zoom');

    require('./util/browser');
    require('./util/cookie');
    require('./util/etpl');
    require('./util/event');
    require('./util/FiniteArray');
    require('./util/fullScreen');
    require('./util/Image');
    require('./util/input');
    require('./util/instance');
    require('./util/json');
    require('./util/keyboard');
    require('./util/lazyLoader');
    require('./util/life');
    require('./util/localStorage');
    require('./util/Media');
    require('./util/mimeType');
    require('./util/newTab');
    require('./util/orientation');
    require('./util/os');
    require('./util/position');
    require('./util/Queue');
    require('./util/Range');
    require('./util/rect');
    require('./util/string');
    require('./util/support');
    require('./util/swipe');
    require('./util/Timer');
    require('./util/touch');
    require('./util/trigger');
    require('./util/url');
    require('./util/validator');
    require('./util/Value');
    require('./util/visibility');
    require('./util/wheel');

    require('./util/supload/supload');

});