import { __decorate, __extends, __param } from "tslib";
//import EWCChart from '../dist/ext-chart.component.js';
//inputs: (new EWCChart()).properties,
//import EWCChart from '@sencha/ext-web-components-classic/dist/ext-chart.component.js';
import { EWCChart } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
var ExtChartComponent = /** @class */ (function (_super) {
    __extends(ExtChartComponent, _super);
    function ExtChartComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'animation', 'animCollapse', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'axes', 'background', 'baseCls', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bubbleEvents', 'buttonAlign', 'buttons', 'captions', 'childEls', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsedCls', 'collapseDirection', 'collapseFirst', 'collapseMode', 'collapseToolText', 'collapsible', 'colors', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constrainHeader', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButton', 'defaultButtonTarget', 'defaultDockWeights', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'dockedItems', 'downloadServerUrl', 'draggable', 'engine', 'expandToolText', 'fbar', 'fixed', 'flex', 'flipXY', 'floatable', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'frameHeader', 'glyph', 'gradients', 'header', 'headerOverCls', 'headerPosition', 'height', 'hidden', 'hideCollapseTool', 'hideMode', 'highlightItem', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerPadding', 'insetPadding', 'interactions', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'legend', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'mainRect', 'maintainTitlePosition', 'manageHeight', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'overlapHeader', 'padding', 'placeholder', 'placeholderCollapseHideMode', 'plugins', 'undefined', 'previewAltText', 'previewTitleText', 'publishes', 'rbar', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandler', 'resizeHandles', 'saveDelay', 'scrollable', 'series', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'shrinkWrapDock', 'simpleDrag', 'sprites', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'surfaceZIndexes', 'suspendLayout', 'tabGuard', 'tabIndex', 'tbar', 'theme', 'title', 'titleAlign', 'titleCollapse', 'titlePosition', 'titleRotation', 'toFrontOnShow', 'tools', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',], (new EWCChart()).events, ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforeclose', 'beforecollapse', 'beforedeactivate', 'beforedestroy', 'beforeexpand', 'beforehide', 'beforerefresh', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'bodyresize', 'boxready', 'childmove', 'close', 'collapse', 'deactivate', 'destroy', 'disable', 'dockedadd', 'dockedremove', 'enable', 'expand', 'float', 'focus', 'focusenter', 'focusleave', 'glyphchange', 'hide', 'iconalignchange', 'iconchange', 'iconclschange', 'itemclick', 'itemdblclick', 'itemhighlight', 'itemhighlightchange', 'itemmousedown', 'itemmousemove', 'itemmouseout', 'itemmouseover', 'itemmouseup', 'itemtap', 'layout', 'move', 'redraw', 'refresh', 'remove', 'removed', 'render', 'resize', 'show', 'spriteclick', 'spritedblclick', 'spritemousedown', 'spritemousemove', 'spritemouseout', 'spritemouseover', 'spritemouseup', 'spritetap', 'staterestore', 'statesave', 'storechange', 'titlealignchange', 'titlechange', 'titlepositionchange', 'titlerotationchange', 'unfloat',], vc) || this;
        _this.xtype = 'chart';
        return _this;
    }
    ExtChartComponent_1 = ExtChartComponent;
    ExtChartComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtChartComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtChartComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtChartComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtChartComponent_1;
    ExtChartComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtChartComponent = ExtChartComponent_1 = __decorate([
        Component({
            selector: 'ExtChart',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'animation', 'animCollapse', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'axes', 'background', 'baseCls', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bubbleEvents', 'buttonAlign', 'buttons', 'captions', 'childEls', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsedCls', 'collapseDirection', 'collapseFirst', 'collapseMode', 'collapseToolText', 'collapsible', 'colors', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constrainHeader', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButton', 'defaultButtonTarget', 'defaultDockWeights', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'dockedItems', 'downloadServerUrl', 'draggable', 'engine', 'expandToolText', 'fbar', 'fixed', 'flex', 'flipXY', 'floatable', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'frameHeader', 'glyph', 'gradients', 'header', 'headerOverCls', 'headerPosition', 'height', 'hidden', 'hideCollapseTool', 'hideMode', 'highlightItem', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerPadding', 'insetPadding', 'interactions', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'legend', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'mainRect', 'maintainTitlePosition', 'manageHeight', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'overlapHeader', 'padding', 'placeholder', 'placeholderCollapseHideMode', 'plugins', 'undefined', 'previewAltText', 'previewTitleText', 'publishes', 'rbar', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandler', 'resizeHandles', 'saveDelay', 'scrollable', 'series', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'shrinkWrapDock', 'simpleDrag', 'sprites', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'surfaceZIndexes', 'suspendLayout', 'tabGuard', 'tabIndex', 'tbar', 'theme', 'title', 'titleAlign', 'titleCollapse', 'titlePosition', 'titleRotation', 'toFrontOnShow', 'tools', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforeclose', 'beforecollapse', 'beforedeactivate', 'beforedestroy', 'beforeexpand', 'beforehide', 'beforerefresh', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'bodyresize', 'boxready', 'childmove', 'close', 'collapse', 'deactivate', 'destroy', 'disable', 'dockedadd', 'dockedremove', 'enable', 'expand', 'float', 'focus', 'focusenter', 'focusleave', 'glyphchange', 'hide', 'iconalignchange', 'iconchange', 'iconclschange', 'itemclick', 'itemdblclick', 'itemhighlight', 'itemhighlightchange', 'itemmousedown', 'itemmousemove', 'itemmouseout', 'itemmouseover', 'itemmouseup', 'itemtap', 'layout', 'move', 'redraw', 'refresh', 'remove', 'removed', 'render', 'resize', 'show', 'spriteclick', 'spritedblclick', 'spritemousedown', 'spritemousemove', 'spritemouseout', 'spritemouseover', 'spritemouseup', 'spritetap', 'staterestore', 'statesave', 'storechange', 'titlealignchange', 'titlechange', 'titlepositionchange', 'titlerotationchange', 'unfloat',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtChartComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtChartComponent);
    return ExtChartComponent;
}(EngBase));
export { ExtChartComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCChart()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvRXh0Q2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdEQUF3RDtBQUN4RCxzQ0FBc0M7QUFDdEMsd0ZBQXdGO0FBQ3hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVNoRDtJQUF1QyxxQ0FBTztJQUMxQywyQkFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUh4QixZQUtJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsK0JBQStCLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxZQUFZLEVB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Q2pGLFFBQVEsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQztRQUlPLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQUgxQixpQkFBaUIsQ0FnQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhDRCxDQUF1QyxPQUFPLEdBZ0M3QztTQWhDWSxpQkFBaUI7QUFtQzlCLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsMkNBQTJDO0FBQzNDLHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDQ2hhcnQgZnJvbSAnLi4vZGlzdC9leHQtY2hhcnQuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0NoYXJ0KCkpLnByb3BlcnRpZXMsXG4vL2ltcG9ydCBFV0NDaGFydCBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LWNoYXJ0LmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NDaGFydCB9IGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLWNsYXNzaWMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vcnVudGltZS9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0Q2hhcnQnLFxuICAgIGlucHV0czogWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3Rpb25zJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVJdGVtJywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclNpemUnLCdhbmltYXRlU2hhZG93JywnYW5pbWF0aW9uJywnYW5pbUNvbGxhcHNlJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYXhlcycsJ2JhY2tncm91bmQnLCdiYXNlQ2xzJywnYmJhcicsJ2JpbmQnLCdib2R5Qm9yZGVyJywnYm9keUNscycsJ2JvZHlQYWRkaW5nJywnYm9keVN0eWxlJywnYm9yZGVyJywnYnViYmxlRXZlbnRzJywnYnV0dG9uQWxpZ24nLCdidXR0b25zJywnY2FwdGlvbnMnLCdjaGlsZEVscycsJ2Nsb3NhYmxlJywnY2xvc2VBY3Rpb24nLCdjbG9zZVRvb2xUZXh0JywnY2xzJywnY29sbGFwc2VkJywnY29sbGFwc2VkQ2xzJywnY29sbGFwc2VEaXJlY3Rpb24nLCdjb2xsYXBzZUZpcnN0JywnY29sbGFwc2VNb2RlJywnY29sbGFwc2VUb29sVGV4dCcsJ2NvbGxhcHNpYmxlJywnY29sb3JzJywnY29sdW1uV2lkdGgnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW5IZWFkZXInLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRCdXR0b24nLCdkZWZhdWx0QnV0dG9uVGFyZ2V0JywnZGVmYXVsdERvY2tXZWlnaHRzJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGV0YWNoT25SZW1vdmUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZG9jaycsJ2RvY2tlZEl0ZW1zJywnZG93bmxvYWRTZXJ2ZXJVcmwnLCdkcmFnZ2FibGUnLCdlbmdpbmUnLCdleHBhbmRUb29sVGV4dCcsJ2ZiYXInLCdmaXhlZCcsJ2ZsZXgnLCdmbGlwWFknLCdmbG9hdGFibGUnLCdmbG9hdGluZycsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtQmluZCcsJ2ZyYW1lJywnZnJhbWVIZWFkZXInLCdnbHlwaCcsJ2dyYWRpZW50cycsJ2hlYWRlcicsJ2hlYWRlck92ZXJDbHMnLCdoZWFkZXJQb3NpdGlvbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVDb2xsYXBzZVRvb2wnLCdoaWRlTW9kZScsJ2hpZ2hsaWdodEl0ZW0nLCdodG1sJywnaWNvbicsJ2ljb25BbGlnbicsJ2ljb25DbHMnLCdpZCcsJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2lubmVyUGFkZGluZycsJ2luc2V0UGFkZGluZycsJ2ludGVyYWN0aW9ucycsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xiYXInLCdsZWdlbmQnLCdsaXF1aWRMYXlvdXQnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ21haW5SZWN0JywnbWFpbnRhaW5UaXRsZVBvc2l0aW9uJywnbWFuYWdlSGVpZ2h0JywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21pbkJ1dHRvbldpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdvdmVybGFwSGVhZGVyJywncGFkZGluZycsJ3BsYWNlaG9sZGVyJywncGxhY2Vob2xkZXJDb2xsYXBzZUhpZGVNb2RlJywncGx1Z2lucycsJ3VuZGVmaW5lZCcsJ3ByZXZpZXdBbHRUZXh0JywncHJldmlld1RpdGxlVGV4dCcsJ3B1Ymxpc2hlcycsJ3JiYXInLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVyJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njcm9sbGFibGUnLCdzZXJpZXMnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhZG93T2Zmc2V0Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaHJpbmtXcmFwJywnc2hyaW5rV3JhcERvY2snLCdzaW1wbGVEcmFnJywnc3ByaXRlcycsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHlsZScsJ3N1cmZhY2VaSW5kZXhlcycsJ3N1c3BlbmRMYXlvdXQnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndGJhcicsJ3RoZW1lJywndGl0bGUnLCd0aXRsZUFsaWduJywndGl0bGVDb2xsYXBzZScsJ3RpdGxlUG9zaXRpb24nLCd0aXRsZVJvdGF0aW9uJywndG9Gcm9udE9uU2hvdycsJ3Rvb2xzJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnY3JlYXRlZCcsJ2FjdGl2YXRlJywnYWRkJywnYWRkZWQnLCdhZnRlcmxheW91dCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWFkZCcsJ2JlZm9yZWNsb3NlJywnYmVmb3JlY29sbGFwc2UnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWV4cGFuZCcsJ2JlZm9yZWhpZGUnLCdiZWZvcmVyZWZyZXNoJywnYmVmb3JlcmVtb3ZlJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib2R5cmVzaXplJywnYm94cmVhZHknLCdjaGlsZG1vdmUnLCdjbG9zZScsJ2NvbGxhcHNlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZG9ja2VkYWRkJywnZG9ja2VkcmVtb3ZlJywnZW5hYmxlJywnZXhwYW5kJywnZmxvYXQnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZ2x5cGhjaGFuZ2UnLCdoaWRlJywnaWNvbmFsaWduY2hhbmdlJywnaWNvbmNoYW5nZScsJ2ljb25jbHNjaGFuZ2UnLCdpdGVtY2xpY2snLCdpdGVtZGJsY2xpY2snLCdpdGVtaGlnaGxpZ2h0JywnaXRlbWhpZ2hsaWdodGNoYW5nZScsJ2l0ZW1tb3VzZWRvd24nLCdpdGVtbW91c2Vtb3ZlJywnaXRlbW1vdXNlb3V0JywnaXRlbW1vdXNlb3ZlcicsJ2l0ZW1tb3VzZXVwJywnaXRlbXRhcCcsJ2xheW91dCcsJ21vdmUnLCdyZWRyYXcnLCdyZWZyZXNoJywncmVtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3Nob3cnLCdzcHJpdGVjbGljaycsJ3Nwcml0ZWRibGNsaWNrJywnc3ByaXRlbW91c2Vkb3duJywnc3ByaXRlbW91c2Vtb3ZlJywnc3ByaXRlbW91c2VvdXQnLCdzcHJpdGVtb3VzZW92ZXInLCdzcHJpdGVtb3VzZXVwJywnc3ByaXRldGFwJywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywnc3RvcmVjaGFuZ2UnLCd0aXRsZWFsaWduY2hhbmdlJywndGl0bGVjaGFuZ2UnLCd0aXRsZXBvc2l0aW9uY2hhbmdlJywndGl0bGVyb3RhdGlvbmNoYW5nZScsJ3VuZmxvYXQnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENoYXJ0Q29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aW9ucycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVDb3VudGVyJywnYWN0aXZlSXRlbScsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmNob3JTaXplJywnYW5pbWF0ZVNoYWRvdycsJ2FuaW1hdGlvbicsJ2FuaW1Db2xsYXBzZScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9FbCcsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2F4ZXMnLCdiYWNrZ3JvdW5kJywnYmFzZUNscycsJ2JiYXInLCdiaW5kJywnYm9keUJvcmRlcicsJ2JvZHlDbHMnLCdib2R5UGFkZGluZycsJ2JvZHlTdHlsZScsJ2JvcmRlcicsJ2J1YmJsZUV2ZW50cycsJ2J1dHRvbkFsaWduJywnYnV0dG9ucycsJ2NhcHRpb25zJywnY2hpbGRFbHMnLCdjbG9zYWJsZScsJ2Nsb3NlQWN0aW9uJywnY2xvc2VUb29sVGV4dCcsJ2NscycsJ2NvbGxhcHNlZCcsJ2NvbGxhcHNlZENscycsJ2NvbGxhcHNlRGlyZWN0aW9uJywnY29sbGFwc2VGaXJzdCcsJ2NvbGxhcHNlTW9kZScsJ2NvbGxhcHNlVG9vbFRleHQnLCdjb2xsYXBzaWJsZScsJ2NvbG9ycycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWluSGVhZGVyJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0QnV0dG9uJywnZGVmYXVsdEJ1dHRvblRhcmdldCcsJ2RlZmF1bHREb2NrV2VpZ2h0cycsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VHlwZScsJ2RldGFjaE9uUmVtb3ZlJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2RvY2snLCdkb2NrZWRJdGVtcycsJ2Rvd25sb2FkU2VydmVyVXJsJywnZHJhZ2dhYmxlJywnZW5naW5lJywnZXhwYW5kVG9vbFRleHQnLCdmYmFyJywnZml4ZWQnLCdmbGV4JywnZmxpcFhZJywnZmxvYXRhYmxlJywnZmxvYXRpbmcnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybUJpbmQnLCdmcmFtZScsJ2ZyYW1lSGVhZGVyJywnZ2x5cGgnLCdncmFkaWVudHMnLCdoZWFkZXInLCdoZWFkZXJPdmVyQ2xzJywnaGVhZGVyUG9zaXRpb24nLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlQ29sbGFwc2VUb29sJywnaGlkZU1vZGUnLCdoaWdobGlnaHRJdGVtJywnaHRtbCcsJ2ljb24nLCdpY29uQWxpZ24nLCdpY29uQ2xzJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbm5lclBhZGRpbmcnLCdpbnNldFBhZGRpbmcnLCdpbnRlcmFjdGlvbnMnLCdpdGVtSWQnLCdpdGVtcycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsYmFyJywnbGVnZW5kJywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYWluUmVjdCcsJ21haW50YWluVGl0bGVQb3NpdGlvbicsJ21hbmFnZUhlaWdodCcsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5CdXR0b25XaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lYWJsZScsJ25hbWVIb2xkZXInLCdvdmVyQ2xzJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnb3ZlcmxhcEhlYWRlcicsJ3BhZGRpbmcnLCdwbGFjZWhvbGRlcicsJ3BsYWNlaG9sZGVyQ29sbGFwc2VIaWRlTW9kZScsJ3BsdWdpbnMnLCd1bmRlZmluZWQnLCdwcmV2aWV3QWx0VGV4dCcsJ3ByZXZpZXdUaXRsZVRleHQnLCdwdWJsaXNoZXMnLCdyYmFyJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcicsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2VyaWVzJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3Nocmlua1dyYXBEb2NrJywnc2ltcGxlRHJhZycsJ3Nwcml0ZXMnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0b3JlJywnc3R5bGUnLCdzdXJmYWNlWkluZGV4ZXMnLCdzdXNwZW5kTGF5b3V0JywndGFiR3VhcmQnLCd0YWJJbmRleCcsJ3RiYXInLCd0aGVtZScsJ3RpdGxlJywndGl0bGVBbGlnbicsJ3RpdGxlQ29sbGFwc2UnLCd0aXRsZVBvc2l0aW9uJywndGl0bGVSb3RhdGlvbicsJ3RvRnJvbnRPblNob3cnLCd0b29scycsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXNlckNscycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0NoYXJ0KCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdjcmVhdGVkJywnYWN0aXZhdGUnLCdhZGQnLCdhZGRlZCcsJ2FmdGVybGF5b3V0JywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlYWRkJywnYmVmb3JlY2xvc2UnLCdiZWZvcmVjb2xsYXBzZScsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlZXhwYW5kJywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlZnJlc2gnLCdiZWZvcmVyZW1vdmUnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JvZHlyZXNpemUnLCdib3hyZWFkeScsJ2NoaWxkbW92ZScsJ2Nsb3NlJywnY29sbGFwc2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGUnLCdkb2NrZWRhZGQnLCdkb2NrZWRyZW1vdmUnLCdlbmFibGUnLCdleHBhbmQnLCdmbG9hdCcsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdnbHlwaGNoYW5nZScsJ2hpZGUnLCdpY29uYWxpZ25jaGFuZ2UnLCdpY29uY2hhbmdlJywnaWNvbmNsc2NoYW5nZScsJ2l0ZW1jbGljaycsJ2l0ZW1kYmxjbGljaycsJ2l0ZW1oaWdobGlnaHQnLCdpdGVtaGlnaGxpZ2h0Y2hhbmdlJywnaXRlbW1vdXNlZG93bicsJ2l0ZW1tb3VzZW1vdmUnLCdpdGVtbW91c2VvdXQnLCdpdGVtbW91c2VvdmVyJywnaXRlbW1vdXNldXAnLCdpdGVtdGFwJywnbGF5b3V0JywnbW92ZScsJ3JlZHJhdycsJ3JlZnJlc2gnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3Nwcml0ZWNsaWNrJywnc3ByaXRlZGJsY2xpY2snLCdzcHJpdGVtb3VzZWRvd24nLCdzcHJpdGVtb3VzZW1vdmUnLCdzcHJpdGVtb3VzZW91dCcsJ3Nwcml0ZW1vdXNlb3ZlcicsJ3Nwcml0ZW1vdXNldXAnLCdzcHJpdGV0YXAnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCdzdG9yZWNoYW5nZScsJ3RpdGxlYWxpZ25jaGFuZ2UnLCd0aXRsZWNoYW5nZScsJ3RpdGxlcG9zaXRpb25jaGFuZ2UnLCd0aXRsZXJvdGF0aW9uY2hhbmdlJywndW5mbG9hdCcsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjaGFydCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDQ2hhcnQoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==