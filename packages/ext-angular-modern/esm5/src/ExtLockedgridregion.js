import { __decorate, __extends, __param } from "tslib";
//import EWCLockedgridregion from '../dist/ext-lockedgridregion.component.js';
//inputs: (new EWCLockedgridregion()).properties,
//import EWCLockedgridregion from '@sencha/ext-web-components-modern/dist/ext-lockedgridregion.component.js';
import { EWCLockedgridregion } from '@sencha/ext-web-components-modern';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
var ExtLockedgridregionComponent = /** @class */ (function (_super) {
    __extends(ExtLockedgridregionComponent, _super);
    function ExtLockedgridregionComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'displayed', 'docked', 'draggable', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grid', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menuItem', 'undefined', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'regionKey', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCLockedgridregion()).events, ['ready', 'created', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecollapse', 'beforedisabledchange', 'beforedockedchange', 'beforeexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforeresizedragstart', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'collapse', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'drawerhide', 'drawershow', 'erased', 'expand', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'resizedrag', 'resizedragcancel', 'resizedragend', 'resizedragstart', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc) || this;
        _this.xtype = 'lockedgridregion';
        return _this;
    }
    ExtLockedgridregionComponent_1 = ExtLockedgridregionComponent;
    ExtLockedgridregionComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtLockedgridregionComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtLockedgridregionComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtLockedgridregionComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtLockedgridregionComponent_1;
    ExtLockedgridregionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtLockedgridregionComponent = ExtLockedgridregionComponent_1 = __decorate([
        Component({
            selector: 'ExtLockedgridregion',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'displayed', 'docked', 'draggable', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grid', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menuItem', 'undefined', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'regionKey', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
            outputs: ['ready', 'created', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecollapse', 'beforedisabledchange', 'beforedockedchange', 'beforeexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforeresizedragstart', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'collapse', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'drawerhide', 'drawershow', 'erased', 'expand', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'resizedrag', 'resizedragcancel', 'resizedragend', 'resizedragstart', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtLockedgridregionComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtLockedgridregionComponent);
    return ExtLockedgridregionComponent;
}(EngBase));
export { ExtLockedgridregionComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCLockedgridregion()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0TG9ja2VkZ3JpZHJlZ2lvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsic3JjL0V4dExvY2tlZGdyaWRyZWdpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhFQUE4RTtBQUM5RSxpREFBaUQ7QUFDakQsNkdBQTZHO0FBQzdHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBU2hEO0lBQWtELGdEQUFPO0lBQ3JELHNDQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLHFC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NkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6QyxzREFBc0Q7QUFDdEQseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NMb2NrZWRncmlkcmVnaW9uIGZyb20gJy4uL2Rpc3QvZXh0LWxvY2tlZGdyaWRyZWdpb24uY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0xvY2tlZGdyaWRyZWdpb24oKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ0xvY2tlZGdyaWRyZWdpb24gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtbW9kZXJuL2Rpc3QvZXh0LWxvY2tlZGdyaWRyZWdpb24uY29tcG9uZW50LmpzJztcbmltcG9ydCB7IEVXQ0xvY2tlZGdyaWRyZWdpb24gfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1tb2Rlcm4nO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vcnVudGltZS9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0TG9ja2VkZ3JpZHJlZ2lvbicsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLCdhY3RpdmVJdGVtJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclBvc2l0aW9uJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2JiYXInLCdiaW5kJywnYm9keUJvcmRlcicsJ2JvZHlDbHMnLCdib2R5UGFkZGluZycsJ2JvZHlTdHlsZScsJ2JvcmRlcicsJ2JvdHRvbScsJ2J1dHRvbkFsaWduJywnYnV0dG9ucycsJ2J1dHRvblRvb2xiYXInLCdjYXJkU3dpdGNoQW5pbWF0aW9uJywnY2VudGVyZWQnLCdjbG9zYWJsZScsJ2Nsb3NlQWN0aW9uJywnY2xvc2VUb29sVGV4dCcsJ2NscycsJ2NvbGxhcHNlZCcsJ2NvbGxhcHNpYmxlJywnY29uc3RyYWluQWxpZ24nLCdjb250ZW50RWwnLCdjb250cm9sJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0Rm9jdXMnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmF1bHRzJywnZGVmYXVsdFRvb2xXZWlnaHRzJywnZGVmYXVsdFR5cGUnLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNhYmxlQ29udGFpbmVyJywnZm9jdXNDbHMnLCdmdWxsc2NyZWVuJywnZ3JpZCcsJ2hlYWRlcicsJ2hlYWRlclBvc2l0aW9uJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZUFuaW1hdGlvbicsJ2hpZGVNb2RlJywnaGlkZU9uTWFza1RhcCcsJ2h0bWwnLCdpY29uJywnaWNvbkFsaWduJywnaWNvbkNscycsJ2lkJywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaW5uZXJDbHMnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xiYXInLCdsZWZ0JywnbGlzdGVuZXJzJywnbG9ja2VkJywnbWFuYWdlQm9yZGVycycsJ21hcmdpbicsJ21hc2tlZCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWVudUl0ZW0nLCd1bmRlZmluZWQnLCdtaW5CdXR0b25XaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywncGFkZGluZycsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyYmFyJywncmVjb3JkJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVnaW9uS2V5JywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3JpZ2h0JywncmlwcGxlJywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nob3dBbmltYXRpb24nLCdzdGFuZGFyZEJ1dHRvbnMnLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RiYXInLCd0aXRsZScsJ3RpdGxlQWxpZ24nLCd0aXRsZUNvbGxhcHNlJywndG9Gcm9udE9uU2hvdycsJ3Rvb2xEZWZhdWx0cycsJ3Rvb2xzJywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNsYXRhYmxlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd1c2VyU2VsZWN0YWJsZScsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdjcmVhdGVkJywnYWN0aXZhdGUnLCdhY3RpdmVJdGVtY2hhbmdlJywnYWRkJywnYWRkZWQnLCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJywnYmVmb3JlYm90dG9tY2hhbmdlJywnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLCdiZWZvcmVjb2xsYXBzZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlZXhwYW5kJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyZXNpemVkcmFnc3RhcnQnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnY29sbGFwc2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZHJhd2VyaGlkZScsJ2RyYXdlcnNob3cnLCdlcmFzZWQnLCdleHBhbmQnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyZXNpemVkcmFnJywncmVzaXplZHJhZ2NhbmNlbCcsJ3Jlc2l6ZWRyYWdlbmQnLCdyZXNpemVkcmFnc3RhcnQnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzaG93JywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd3aWR0aGNoYW5nZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0TG9ja2VkZ3JpZHJlZ2lvbkNvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dExvY2tlZGdyaWRyZWdpb25Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUl0ZW0nLCdhbGlnblNlbGYnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5jaG9yUG9zaXRpb24nLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0Rlc3Ryb3knLCdhdXRvU2l6ZScsJ2F4aXNMb2NrJywnYmJhcicsJ2JpbmQnLCdib2R5Qm9yZGVyJywnYm9keUNscycsJ2JvZHlQYWRkaW5nJywnYm9keVN0eWxlJywnYm9yZGVyJywnYm90dG9tJywnYnV0dG9uQWxpZ24nLCdidXR0b25zJywnYnV0dG9uVG9vbGJhcicsJ2NhcmRTd2l0Y2hBbmltYXRpb24nLCdjZW50ZXJlZCcsJ2Nsb3NhYmxlJywnY2xvc2VBY3Rpb24nLCdjbG9zZVRvb2xUZXh0JywnY2xzJywnY29sbGFwc2VkJywnY29sbGFwc2libGUnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2wnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkZWZhdWx0VHlwZScsJ2Rpc2FibGVkJywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdncmlkJywnaGVhZGVyJywnaGVhZGVyUG9zaXRpb24nLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlQW5pbWF0aW9uJywnaGlkZU1vZGUnLCdoaWRlT25NYXNrVGFwJywnaHRtbCcsJ2ljb24nLCdpY29uQWxpZ24nLCdpY29uQ2xzJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbm5lckNscycsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGJhcicsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdsb2NrZWQnLCdtYW5hZ2VCb3JkZXJzJywnbWFyZ2luJywnbWFza2VkJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtZW51SXRlbScsJ3VuZGVmaW5lZCcsJ21pbkJ1dHRvbldpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWUnLCduYW1lYWJsZScsJ25hbWVIb2xkZXInLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JiYXInLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWdpb25LZXknLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmVzaXphYmxlJywncmlnaHQnLCdyaXBwbGUnLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3N0YW5kYXJkQnV0dG9ucycsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdHlsZScsJ3RhYkluZGV4JywndGJhcicsJ3RpdGxlJywndGl0bGVBbGlnbicsJ3RpdGxlQ29sbGFwc2UnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmlld01vZGVsJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0xvY2tlZGdyaWRyZWdpb24oKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FjdGl2ZUl0ZW1jaGFuZ2UnLCdhZGQnLCdhZGRlZCcsJ2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWNvbGxhcHNlJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVkb2NrZWRjaGFuZ2UnLCdiZWZvcmVleHBhbmQnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmVoaWRlJywnYmVmb3JlbGVmdGNoYW5nZScsJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsJ2JlZm9yZW1heFdpZHRoY2hhbmdlJywnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsJ2JlZm9yZXJlc2l6ZWRyYWdzdGFydCcsJ2JlZm9yZXJpZ2h0Y2hhbmdlJywnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsJ2JlZm9yZXNob3cnLCdiZWZvcmV0b2Zyb250JywnYmVmb3JldG9wY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnYm90dG9tY2hhbmdlJywnY2VudGVyZWRjaGFuZ2UnLCdjb2xsYXBzZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdkcmF3ZXJoaWRlJywnZHJhd2Vyc2hvdycsJ2VyYXNlZCcsJ2V4cGFuZCcsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW92ZScsJ21vdmVkJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlbW92ZScsJ3JlbW92ZWQnLCdyZW5kZXJlZGNoYW5nZScsJ3Jlc2l6ZScsJ3Jlc2l6ZWRyYWcnLCdyZXNpemVkcmFnY2FuY2VsJywncmVzaXplZHJhZ2VuZCcsJ3Jlc2l6ZWRyYWdzdGFydCcsJ3JpZ2h0Y2hhbmdlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2xvY2tlZGdyaWRyZWdpb24nXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0xvY2tlZGdyaWRyZWdpb24oKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==