import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtLegendComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtLegendComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtLegendComponent, "ExtLegend", never, {
    "aMe": "aMe";
    "header": "header";
    "renderer": "renderer";
    "label": "label";
    "fitToParent": "fitToParent";
    "tab": "tab";
    "config": "config";
    "platformConfig": "platformConfig";
    "extname": "extname";
    "viewport": "viewport";
    "align": "align";
    "plugins": "plugins";
    "responsiveConfig": "responsiveConfig";
    "responsiveFormulas": "responsiveFormulas";
    "activeChildTabIndex": "activeChildTabIndex";
    "activeItem": "activeItem";
    "alignSelf": "alignSelf";
    "allowFocusingDisabledChildren": "allowFocusingDisabledChildren";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "associatedData": "associatedData";
    "autoDestroy": "autoDestroy";
    "autoSize": "autoSize";
    "axisLock": "axisLock";
    "bind": "bind";
    "bodyCls": "bodyCls";
    "border": "border";
    "bottom": "bottom";
    "cardSwitchAnimation": "cardSwitchAnimation";
    "centered": "centered";
    "cls": "cls";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "control": "control";
    "controller": "controller";
    "data": "data";
    "defaultFocus": "defaultFocus";
    "defaultListenerScope": "defaultListenerScope";
    "defaults": "defaults";
    "defaultType": "defaultType";
    "deferEmptyText": "deferEmptyText";
    "deselectOnContainerClick": "deselectOnContainerClick";
    "disabled": "disabled";
    "disableSelection": "disableSelection";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "emptyItemText": "emptyItemText";
    "emptyState": "emptyState";
    "emptyText": "emptyText";
    "emptyTextDefaults": "emptyTextDefaults";
    "emptyTextProperty": "emptyTextProperty";
    "undefined": "undefined";
    "flex": "flex";
    "floated": "floated";
    "focusableContainer": "focusableContainer";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "html": "html";
    "id": "id";
    "inactiveChildTabIndex": "inactiveChildTabIndex";
    "inline": "inline";
    "innerCls": "innerCls";
    "instanceCls": "instanceCls";
    "itemButtonMode": "itemButtonMode";
    "itemCls": "itemCls";
    "itemId": "itemId";
    "itemRipple": "itemRipple";
    "items": "items";
    "itemsFocusable": "itemsFocusable";
    "itemTpl": "itemTpl";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "lastSelected": "lastSelected";
    "layout": "layout";
    "left": "left";
    "listeners": "listeners";
    "loadingHeight": "loadingHeight";
    "loadingText": "loadingText";
    "manageBorders": "manageBorders";
    "margin": "margin";
    "markDirty": "markDirty";
    "masked": "masked";
    "maxHeight": "maxHeight";
    "maxWidth": "maxWidth";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "nameHolder": "nameHolder";
    "padding": "padding";
    "pressedDelay": "pressedDelay";
    "publishes": "publishes";
    "record": "record";
    "rect": "rect";
    "reference": "reference";
    "referenceHolder": "referenceHolder";
    "relative": "relative";
    "renderTo": "renderTo";
    "resetFocusPosition": "resetFocusPosition";
    "right": "right";
    "ripple": "ripple";
    "scrollable": "scrollable";
    "scrollDock": "scrollDock";
    "scrollToTopOnRefresh": "scrollToTopOnRefresh";
    "selectable": "selectable";
    "selected": "selected";
    "selection": "selection";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "store": "store";
    "style": "style";
    "tabIndex": "tabIndex";
    "toFrontOnShow": "toFrontOnShow";
    "toggleable": "toggleable";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "triggerCtEvent": "triggerCtEvent";
    "triggerEvent": "triggerEvent";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "viewModel": "viewModel";
    "weight": "weight";
    "weighted": "weighted";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "created": "created";
    "activate": "activate";
    "activeItemchange": "activeItemchange";
    "add": "add";
    "added": "added";
    "beforeactiveItemchange": "beforeactiveItemchange";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforestorechange": "beforestorechange";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "childdoubletap": "childdoubletap";
    "childlongpress": "childlongpress";
    "childmouseenter": "childmouseenter";
    "childmouseleave": "childmouseleave";
    "childsingletap": "childsingletap";
    "childtap": "childtap";
    "childtaphold": "childtaphold";
    "childtouchcancel": "childtouchcancel";
    "childtouchend": "childtouchend";
    "childtouchmove": "childtouchmove";
    "childtouchstart": "childtouchstart";
    "deactivate": "deactivate";
    "deselect": "deselect";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "itemdoubletap": "itemdoubletap";
    "itemlongpress": "itemlongpress";
    "itemmouseenter": "itemmouseenter";
    "itemmouseleave": "itemmouseleave";
    "itemsingletap": "itemsingletap";
    "itemswipe": "itemswipe";
    "itemtap": "itemtap";
    "itemtaphold": "itemtaphold";
    "itemtouchcancel": "itemtouchcancel";
    "itemtouchend": "itemtouchend";
    "itemtouchmove": "itemtouchmove";
    "itemtouchstart": "itemtouchstart";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "move": "move";
    "moved": "moved";
    "navigate": "navigate";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "refresh": "refresh";
    "remove": "remove";
    "removed": "removed";
    "renderedchange": "renderedchange";
    "resize": "resize";
    "rightchange": "rightchange";
    "rowselection": "rowselection";
    "scrollablechange": "scrollablechange";
    "select": "select";
    "selectionchange": "selectionchange";
    "show": "show";
    "storechange": "storechange";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0TGVnZW5kLmQudHMiLCJzb3VyY2VzIjpbIkV4dExlZ2VuZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL3J1bnRpbWUvYW5ndWxhcmJhc2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXh0TGVnZW5kQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoZVJlZjogRWxlbWVudFJlZiwgaG9zdENvbXBvbmVudDogRW5nQmFzZSwgdmM6IFZpZXdDb250YWluZXJSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19