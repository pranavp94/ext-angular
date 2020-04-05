import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtTooltipComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtTooltipComponent, [null, { optional: true; host: true; skipSelf: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtTooltipComponent, "ExtTooltip", never, { "aMe": "aMe"; "header": "header"; "renderer": "renderer"; "label": "label"; "fitToParent": "fitToParent"; "tab": "tab"; "config": "config"; "platformConfig": "platformConfig"; "extname": "extname"; "viewport": "viewport"; "align": "align"; "plugins": "plugins"; "responsiveConfig": "responsiveConfig"; "responsiveFormulas": "responsiveFormulas"; "activeChildTabIndex": "activeChildTabIndex"; "activeItem": "activeItem"; "alignDelegate": "alignDelegate"; "alignSelf": "alignSelf"; "allowFocusingDisabledChildren": "allowFocusingDisabledChildren"; "allowOver": "allowOver"; "alwaysOnTop": "alwaysOnTop"; "anchor": "anchor"; "anchorPosition": "anchorPosition"; "anchorToTarget": "anchorToTarget"; "ariaAttributes": "ariaAttributes"; "ariaDescribedBy": "ariaDescribedBy"; "ariaLabel": "ariaLabel"; "ariaLabelledBy": "ariaLabelledBy"; "autoDestroy": "autoDestroy"; "autoHide": "autoHide"; "autoSize": "autoSize"; "axisLock": "axisLock"; "bbar": "bbar"; "bind": "bind"; "bodyBorder": "bodyBorder"; "bodyCls": "bodyCls"; "bodyPadding": "bodyPadding"; "bodyStyle": "bodyStyle"; "border": "border"; "bottom": "bottom"; "buttonAlign": "buttonAlign"; "buttons": "buttons"; "buttonToolbar": "buttonToolbar"; "cardSwitchAnimation": "cardSwitchAnimation"; "centered": "centered"; "closable": "closable"; "closeAction": "closeAction"; "closeToolText": "closeToolText"; "cls": "cls"; "collapsed": "collapsed"; "collapsible": "collapsible"; "constrainAlign": "constrainAlign"; "contentEl": "contentEl"; "control": "control"; "controller": "controller"; "data": "data"; "defaultFocus": "defaultFocus"; "defaultListenerScope": "defaultListenerScope"; "defaults": "defaults"; "defaultToolWeights": "defaultToolWeights"; "defaultType": "defaultType"; "delegate": "delegate"; "disabled": "disabled"; "dismissDelay": "dismissDelay"; "displayed": "displayed"; "docked": "docked"; "draggable": "draggable"; "undefined": "undefined"; "flex": "flex"; "floated": "floated"; "focusableContainer": "focusableContainer"; "focusCls": "focusCls"; "fullscreen": "fullscreen"; "headerPosition": "headerPosition"; "height": "height"; "hidden": "hidden"; "hideAnimation": "hideAnimation"; "hideDelay": "hideDelay"; "hideMode": "hideMode"; "hideOnMaskTap": "hideOnMaskTap"; "html": "html"; "icon": "icon"; "iconAlign": "iconAlign"; "iconCls": "iconCls"; "id": "id"; "inactiveChildTabIndex": "inactiveChildTabIndex"; "innerCls": "innerCls"; "instanceCls": "instanceCls"; "itemId": "itemId"; "items": "items"; "keyMap": "keyMap"; "keyMapEnabled": "keyMapEnabled"; "keyMapTarget": "keyMapTarget"; "layout": "layout"; "lbar": "lbar"; "left": "left"; "listeners": "listeners"; "manageBorders": "manageBorders"; "margin": "margin"; "masked": "masked"; "maxHeight": "maxHeight"; "maxWidth": "maxWidth"; "minButtonWidth": "minButtonWidth"; "minHeight": "minHeight"; "minWidth": "minWidth"; "modal": "modal"; "modelValidation": "modelValidation"; "mouseOffset": "mouseOffset"; "name": "name"; "nameable": "nameable"; "nameHolder": "nameHolder"; "padding": "padding"; "publishes": "publishes"; "quickShowInterval": "quickShowInterval"; "rbar": "rbar"; "record": "record"; "reference": "reference"; "referenceHolder": "referenceHolder"; "relative": "relative"; "renderTo": "renderTo"; "resetFocusPosition": "resetFocusPosition"; "resizable": "resizable"; "right": "right"; "ripple": "ripple"; "scrollable": "scrollable"; "session": "session"; "shadow": "shadow"; "shareableName": "shareableName"; "shim": "shim"; "showAnimation": "showAnimation"; "showDelay": "showDelay"; "showOnTap": "showOnTap"; "standardButtons": "standardButtons"; "stateful": "stateful"; "statefulDefaults": "statefulDefaults"; "stateId": "stateId"; "style": "style"; "tabIndex": "tabIndex"; "target": "target"; "tbar": "tbar"; "title": "title"; "titleAlign": "titleAlign"; "titleCollapse": "titleCollapse"; "toFrontOnShow": "toFrontOnShow"; "toolDefaults": "toolDefaults"; "tools": "tools"; "tooltip": "tooltip"; "top": "top"; "touchAction": "touchAction"; "tpl": "tpl"; "tplWriteMode": "tplWriteMode"; "trackMouse": "trackMouse"; "translatable": "translatable"; "twoWayBindable": "twoWayBindable"; "ui": "ui"; "userCls": "userCls"; "userSelectable": "userSelectable"; "viewModel": "viewModel"; "weight": "weight"; "weighted": "weighted"; "width": "width"; "x": "x"; "xtype": "xtype"; "y": "y"; "zIndex": "zIndex"; }, { "ready": "ready"; "created": "created"; "activate": "activate"; "activeItemchange": "activeItemchange"; "add": "add"; "added": "added"; "beforeactiveItemchange": "beforeactiveItemchange"; "beforebottomchange": "beforebottomchange"; "beforecenteredchange": "beforecenteredchange"; "beforecollapse": "beforecollapse"; "beforedisabledchange": "beforedisabledchange"; "beforedockedchange": "beforedockedchange"; "beforeexpand": "beforeexpand"; "beforeheightchange": "beforeheightchange"; "beforehiddenchange": "beforehiddenchange"; "beforehide": "beforehide"; "beforeleftchange": "beforeleftchange"; "beforemaxHeightchange": "beforemaxHeightchange"; "beforemaxWidthchange": "beforemaxWidthchange"; "beforeminHeightchange": "beforeminHeightchange"; "beforeminWidthchange": "beforeminWidthchange"; "beforeorientationchange": "beforeorientationchange"; "beforeresizedragstart": "beforeresizedragstart"; "beforerightchange": "beforerightchange"; "beforescrollablechange": "beforescrollablechange"; "beforeshow": "beforeshow"; "beforetofront": "beforetofront"; "beforetopchange": "beforetopchange"; "beforewidthchange": "beforewidthchange"; "blur": "blur"; "bottomchange": "bottomchange"; "centeredchange": "centeredchange"; "collapse": "collapse"; "deactivate": "deactivate"; "destroy": "destroy"; "disabledchange": "disabledchange"; "dockedchange": "dockedchange"; "drawerhide": "drawerhide"; "drawershow": "drawershow"; "erased": "erased"; "expand": "expand"; "floatingchange": "floatingchange"; "focus": "focus"; "focusenter": "focusenter"; "focusleave": "focusleave"; "fullscreen": "fullscreen"; "heightchange": "heightchange"; "hiddenchange": "hiddenchange"; "hide": "hide"; "initialize": "initialize"; "leftchange": "leftchange"; "maxHeightchange": "maxHeightchange"; "maxWidthchange": "maxWidthchange"; "minHeightchange": "minHeightchange"; "minWidthchange": "minWidthchange"; "move": "move"; "moved": "moved"; "orientationchange": "orientationchange"; "painted": "painted"; "positionedchange": "positionedchange"; "remove": "remove"; "removed": "removed"; "renderedchange": "renderedchange"; "resize": "resize"; "resizedrag": "resizedrag"; "resizedragcancel": "resizedragcancel"; "resizedragend": "resizedragend"; "resizedragstart": "resizedragstart"; "rightchange": "rightchange"; "scrollablechange": "scrollablechange"; "show": "show"; "tofront": "tofront"; "topchange": "topchange"; "updatedata": "updatedata"; "widthchange": "widthchange"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VG9vbHRpcC5kLnRzIiwic291cmNlcyI6WyJFeHRUb29sdGlwLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vY29tbW9uL2FuZ3VsYXJiYXNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dFRvb2x0aXBDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOiBFbGVtZW50UmVmLCBob3N0Q29tcG9uZW50OiBFbmdCYXNlLCB2YzogVmlld0NvbnRhaW5lclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=