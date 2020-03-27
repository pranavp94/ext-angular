import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtPivotgridComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtPivotgridComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtPivotgridComponent, "ExtPivotgrid", never, {
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
    "bufferSize": "bufferSize";
    "cardSwitchAnimation": "cardSwitchAnimation";
    "centered": "centered";
    "cls": "cls";
    "clsGrandTotal": "clsGrandTotal";
    "clsGroupTotal": "clsGroupTotal";
    "collapseDefaults": "collapseDefaults";
    "collapsible": "collapsible";
    "columnLines": "columnLines";
    "columnMenu": "columnMenu";
    "columnResize": "columnResize";
    "columns": "columns";
    "columnsMenuItem": "columnsMenuItem";
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
    "disclosureProperty": "disclosureProperty";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "emptyItemText": "emptyItemText";
    "emptyState": "emptyState";
    "emptyText": "emptyText";
    "emptyTextDefaults": "emptyTextDefaults";
    "emptyTextProperty": "emptyTextProperty";
    "enableColumnMove": "enableColumnMove";
    "enableColumnSort": "enableColumnSort";
    "enableLoadMask": "enableLoadMask";
    "undefined": "undefined";
    "flex": "flex";
    "floated": "floated";
    "focusableContainer": "focusableContainer";
    "focusCls": "focusCls";
    "fullscreen": "fullscreen";
    "grouped": "grouped";
    "groupFooter": "groupFooter";
    "groupHeader": "groupHeader";
    "grouping": "grouping";
    "groupPlaceholder": "groupPlaceholder";
    "height": "height";
    "hidden": "hidden";
    "hideAnimation": "hideAnimation";
    "hideHeaders": "hideHeaders";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "hideScrollbar": "hideScrollbar";
    "horizontalOverflow": "horizontalOverflow";
    "html": "html";
    "id": "id";
    "inactiveChildTabIndex": "inactiveChildTabIndex";
    "indexBar": "indexBar";
    "infinite": "infinite";
    "inline": "inline";
    "innerCls": "innerCls";
    "innerCtHeight": "innerCtHeight";
    "innerWidth": "innerWidth";
    "instanceCls": "instanceCls";
    "itemButtonMode": "itemButtonMode";
    "itemCls": "itemCls";
    "itemConfig": "itemConfig";
    "itemContentCls": "itemContentCls";
    "itemDataMap": "itemDataMap";
    "itemId": "itemId";
    "itemInnerCls": "itemInnerCls";
    "itemRipple": "itemRipple";
    "items": "items";
    "itemsFocusable": "itemsFocusable";
    "itemTpl": "itemTpl";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "layout": "layout";
    "left": "left";
    "leftAxisCellConfig": "leftAxisCellConfig";
    "listeners": "listeners";
    "loadingHeight": "loadingHeight";
    "loadingText": "loadingText";
    "maintainChildNodes": "maintainChildNodes";
    "manageBorders": "manageBorders";
    "margin": "margin";
    "markDirty": "markDirty";
    "masked": "masked";
    "matrix": "matrix";
    "maxHeight": "maxHeight";
    "maxItemCache": "maxItemCache";
    "maxWidth": "maxWidth";
    "minHeight": "minHeight";
    "minimumBufferDistance": "minimumBufferDistance";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "multiColumnSort": "multiColumnSort";
    "name": "name";
    "nameable": "nameable";
    "nameHolder": "nameHolder";
    "onItemDisclosure": "onItemDisclosure";
    "padding": "padding";
    "pinFooters": "pinFooters";
    "pinHeaders": "pinHeaders";
    "pinnedFooter": "pinnedFooter";
    "pinnedFooterHeight": "pinnedFooterHeight";
    "pinnedHeader": "pinnedHeader";
    "pinnedHeaderHeight": "pinnedHeaderHeight";
    "pressedDelay": "pressedDelay";
    "preventSelectionOnDisclose": "preventSelectionOnDisclose";
    "preventSelectionOnTool": "preventSelectionOnTool";
    "publishes": "publishes";
    "record": "record";
    "reference": "reference";
    "referenceHolder": "referenceHolder";
    "relative": "relative";
    "renderTo": "renderTo";
    "reserveScrollbar": "reserveScrollbar";
    "resetFocusPosition": "resetFocusPosition";
    "right": "right";
    "ripple": "ripple";
    "rowLines": "rowLines";
    "rowNumbers": "rowNumbers";
    "scrollable": "scrollable";
    "scrollDock": "scrollDock";
    "scrollToTopOnRefresh": "scrollToTopOnRefresh";
    "selectable": "selectable";
    "selection": "selection";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "sortable": "sortable";
    "startColGroupsCollapsed": "startColGroupsCollapsed";
    "startRowGroupsCollapsed": "startRowGroupsCollapsed";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "store": "store";
    "striped": "striped";
    "style": "style";
    "tabIndex": "tabIndex";
    "title": "title";
    "titleBar": "titleBar";
    "toFrontOnShow": "toFrontOnShow";
    "tooltip": "tooltip";
    "top": "top";
    "topAxisCellConfig": "topAxisCellConfig";
    "topRenderedIndex": "topRenderedIndex";
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
    "variableHeights": "variableHeights";
    "verticalOverflow": "verticalOverflow";
    "viewModel": "viewModel";
    "visibleHeight": "visibleHeight";
    "visibleLeft": "visibleLeft";
    "visibleTop": "visibleTop";
    "visibleWidth": "visibleWidth";
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
    "beforecomplete": "beforecomplete";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeedit": "beforeedit";
    "beforegroupcollapse": "beforegroupcollapse";
    "beforegroupexpand": "beforegroupexpand";
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
    "beforeselectionextend": "beforeselectionextend";
    "beforeshow": "beforeshow";
    "beforestartedit": "beforestartedit";
    "beforestorechange": "beforestorechange";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "canceledit": "canceledit";
    "cellselection": "cellselection";
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
    "columnadd": "columnadd";
    "columnhide": "columnhide";
    "columnmenucreated": "columnmenucreated";
    "columnmove": "columnmove";
    "columnremove": "columnremove";
    "columnresize": "columnresize";
    "columnselection": "columnselection";
    "columnshow": "columnshow";
    "columnsort": "columnsort";
    "complete": "complete";
    "deactivate": "deactivate";
    "deselect": "deselect";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "disclose": "disclose";
    "dockedchange": "dockedchange";
    "edit": "edit";
    "erased": "erased";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "groupcollapse": "groupcollapse";
    "groupexpand": "groupexpand";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "itemaction": "itemaction";
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
    "pivotbeforereconfigure": "pivotbeforereconfigure";
    "pivotbeforerequest": "pivotbeforerequest";
    "pivotbuildtotals": "pivotbuildtotals";
    "pivotcolumnsbuilt": "pivotcolumnsbuilt";
    "pivotdone": "pivotdone";
    "pivotgroupcelldoubletap": "pivotgroupcelldoubletap";
    "pivotgroupcelltap": "pivotgroupcelltap";
    "pivotgroupcelltaphold": "pivotgroupcelltaphold";
    "pivotgroupcollapse": "pivotgroupcollapse";
    "pivotgroupdoubletap": "pivotgroupdoubletap";
    "pivotgroupexpand": "pivotgroupexpand";
    "pivotgrouptap": "pivotgrouptap";
    "pivotgrouptaphold": "pivotgrouptaphold";
    "pivotitemcelldoubletap": "pivotitemcelldoubletap";
    "pivotitemcelltap": "pivotitemcelltap";
    "pivotitemcelltaphold": "pivotitemcelltaphold";
    "pivotitemdoubletap": "pivotitemdoubletap";
    "pivotitemtap": "pivotitemtap";
    "pivotitemtaphold": "pivotitemtaphold";
    "pivotmodelbuilt": "pivotmodelbuilt";
    "pivotprogress": "pivotprogress";
    "pivotreconfigure": "pivotreconfigure";
    "pivotrecordbuilt": "pivotrecordbuilt";
    "pivotrequestexception": "pivotrequestexception";
    "pivotstart": "pivotstart";
    "pivotstorebuilt": "pivotstorebuilt";
    "pivottotalcelldoubletap": "pivottotalcelldoubletap";
    "pivottotalcelltap": "pivottotalcelltap";
    "pivottotalcelltaphold": "pivottotalcelltaphold";
    "pivottotaldoubletap": "pivottotaldoubletap";
    "pivottotaltap": "pivottotaltap";
    "pivottotaltaphold": "pivottotaltaphold";
    "positionedchange": "positionedchange";
    "refresh": "refresh";
    "remove": "remove";
    "removed": "removed";
    "renderedchange": "renderedchange";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "select": "select";
    "selectionextenderdrag": "selectionextenderdrag";
    "show": "show";
    "specialkey": "specialkey";
    "startedit": "startedit";
    "storechange": "storechange";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "validateedit": "validateedit";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0UGl2b3RncmlkLmQudHMiLCJzb3VyY2VzIjpbIkV4dFBpdm90Z3JpZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9ydW50aW1lL2FuZ3VsYXJiYXNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dFBpdm90Z3JpZENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6IEVsZW1lbnRSZWYsIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsIHZjOiBWaWV3Q29udGFpbmVyUmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==