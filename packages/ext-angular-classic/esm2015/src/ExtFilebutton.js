var ExtFilebuttonComponent_1;
import { __decorate, __param } from "tslib";
//import EWCFilebutton from '../dist/ext-filebutton.component.js';
//inputs: (new EWCFilebutton()).properties,
//import EWCFilebutton from '@sencha/ext-web-components-classic/dist/ext-filebutton.component.js';
import { EWCFilebutton } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
let ExtFilebuttonComponent = ExtFilebuttonComponent_1 = class ExtFilebuttonComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'allowDepress', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrowAlign', 'arrowCls', 'arrowVisible', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'baseParams', 'bind', 'border', 'childEls', 'clickEvent', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'destroyMenu', 'disabled', 'disabledCls', 'dock', 'draggable', 'enableToggle', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'glyph', 'handleMouseEvents', 'handler', 'height', 'hidden', 'hideMode', 'href', 'hrefTarget', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'overflowText', 'undefined', 'undefined', 'padding', 'params', 'plugins', 'pressed', 'preventDefault', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeat', 'resizable', 'resizeHandles', 'saveDelay', 'scale', 'scope', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showEmptyMenu', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleGroup', 'toggleHandler', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype',], (new EWCFilebutton()).events, ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'beforetoggle', 'blur', 'boxready', 'click', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'glyphchange', 'hide', 'iconchange', 'menuhide', 'menushow', 'menutriggerout', 'menutriggerover', 'mouseout', 'mouseover', 'move', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave', 'textchange', 'toggle',], vc);
        this.xtype = 'filebutton';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtFilebuttonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtFilebuttonComponent = ExtFilebuttonComponent_1 = __decorate([
    Component({
        selector: 'ExtFilebutton',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'allowDepress', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrowAlign', 'arrowCls', 'arrowVisible', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'baseParams', 'bind', 'border', 'childEls', 'clickEvent', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'destroyMenu', 'disabled', 'disabledCls', 'dock', 'draggable', 'enableToggle', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'glyph', 'handleMouseEvents', 'handler', 'height', 'hidden', 'hideMode', 'href', 'hrefTarget', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'overflowText', 'undefined', 'undefined', 'padding', 'params', 'plugins', 'pressed', 'preventDefault', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeat', 'resizable', 'resizeHandles', 'saveDelay', 'scale', 'scope', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showEmptyMenu', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleGroup', 'toggleHandler', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'beforetoggle', 'blur', 'boxready', 'click', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'glyphchange', 'hide', 'iconchange', 'menuhide', 'menushow', 'menutriggerout', 'menutriggerover', 'mouseout', 'mouseover', 'move', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave', 'textchange', 'toggle',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtFilebuttonComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtFilebuttonComponent);
export { ExtFilebuttonComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCFilebutton()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RmlsZWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbInNyYy9FeHRGaWxlYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQWtFO0FBQ2xFLDJDQUEyQztBQUMzQyxrR0FBa0c7QUFDbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25FLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBU2hELElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLE9BQU87SUFDL0MsWUFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUVwQixLQUFLLENBQ0QsSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGtCQUFrQixFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsc0JBQXNCLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFD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LDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NGaWxlYnV0dG9uIGZyb20gJy4uL2Rpc3QvZXh0LWZpbGVidXR0b24uY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0ZpbGVidXR0b24oKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ0ZpbGVidXR0b24gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1maWxlYnV0dG9uLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NGaWxlYnV0dG9uIH0gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9ydW50aW1lL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRGaWxlYnV0dG9uJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93RGVwcmVzcycsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhcnJvd0FsaWduJywnYXJyb3dDbHMnLCdhcnJvd1Zpc2libGUnLCdhdXRvRWwnLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQ2xzJywnYmFzZVBhcmFtcycsJ2JpbmQnLCdib3JkZXInLCdjaGlsZEVscycsJ2NsaWNrRXZlbnQnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZXN0cm95TWVudScsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkb2NrJywnZHJhZ2dhYmxlJywnZW5hYmxlVG9nZ2xlJywnZml4ZWQnLCdmbGV4JywnZmxvYXRpbmcnLCdmb2N1c0NscycsJ2ZvY3VzT25Ub0Zyb250JywnZm9ybUJpbmQnLCdmcmFtZScsJ2dseXBoJywnaGFuZGxlTW91c2VFdmVudHMnLCdoYW5kbGVyJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdocmVmJywnaHJlZlRhcmdldCcsJ2h0bWwnLCdpY29uJywnaWNvbkFsaWduJywnaWNvbkNscycsJ2lkJywnaXRlbUlkJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21lbnUnLCdtZW51QWxpZ24nLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZWFibGUnLCdvdmVyQ2xzJywnb3ZlcmZsb3dUZXh0JywndW5kZWZpbmVkJywndW5kZWZpbmVkJywncGFkZGluZycsJ3BhcmFtcycsJ3BsdWdpbnMnLCdwcmVzc2VkJywncHJldmVudERlZmF1bHQnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXBlYXQnLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2NhbGUnLCdzY29wZScsJ3Njcm9sbGFibGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhZG93T2Zmc2V0Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93RW1wdHlNZW51Jywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RleHQnLCd0ZXh0QWxpZ24nLCd0b0Zyb250T25TaG93JywndG9nZ2xlR3JvdXAnLCd0b2dnbGVIYW5kbGVyJywndG9vbHRpcCcsJ3Rvb2x0aXBUeXBlJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdjcmVhdGVkJywnYWN0aXZhdGUnLCdhZGRlZCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdiZWZvcmV0b2dnbGUnLCdibHVyJywnYm94cmVhZHknLCdjbGljaycsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlzYWJsZScsJ2VuYWJsZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdnbHlwaGNoYW5nZScsJ2hpZGUnLCdpY29uY2hhbmdlJywnbWVudWhpZGUnLCdtZW51c2hvdycsJ21lbnV0cmlnZ2Vyb3V0JywnbWVudXRyaWdnZXJvdmVyJywnbW91c2VvdXQnLCdtb3VzZW92ZXInLCdtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3Nob3cnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCd0ZXh0Y2hhbmdlJywndG9nZ2xlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRGaWxlYnV0dG9uQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RmlsZWJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDb3VudGVyJywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWxsb3dEZXByZXNzJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2Fycm93QWxpZ24nLCdhcnJvd0NscycsJ2Fycm93VmlzaWJsZScsJ2F1dG9FbCcsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VDbHMnLCdiYXNlUGFyYW1zJywnYmluZCcsJ2JvcmRlcicsJ2NoaWxkRWxzJywnY2xpY2tFdmVudCcsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2Rlc3Ryb3lNZW51JywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2RvY2snLCdkcmFnZ2FibGUnLCdlbmFibGVUb2dnbGUnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtQmluZCcsJ2ZyYW1lJywnZ2x5cGgnLCdoYW5kbGVNb3VzZUV2ZW50cycsJ2hhbmRsZXInLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2hyZWYnLCdocmVmVGFyZ2V0JywnaHRtbCcsJ2ljb24nLCdpY29uQWxpZ24nLCdpY29uQ2xzJywnaWQnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWVudScsJ21lbnVBbGlnbicsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lYWJsZScsJ292ZXJDbHMnLCdvdmVyZmxvd1RleHQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGFyYW1zJywncGx1Z2lucycsJ3ByZXNzZWQnLCdwcmV2ZW50RGVmYXVsdCcsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3JlcGVhdCcsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY2FsZScsJ3Njb3BlJywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nob3dFbXB0eU1lbnUnLCdzaHJpbmtXcmFwJywnc3RhdGVFdmVudHMnLCdzdGF0ZWZ1bCcsJ3N0YXRlSWQnLCdzdHlsZScsJ3RhYkluZGV4JywndGV4dCcsJ3RleHRBbGlnbicsJ3RvRnJvbnRPblNob3cnLCd0b2dnbGVHcm91cCcsJ3RvZ2dsZUhhbmRsZXInLCd0b29sdGlwJywndG9vbHRpcFR5cGUnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2YWx1ZScsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0ZpbGVidXR0b24oKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JlZm9yZXRvZ2dsZScsJ2JsdXInLCdib3hyZWFkeScsJ2NsaWNrJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2dseXBoY2hhbmdlJywnaGlkZScsJ2ljb25jaGFuZ2UnLCdtZW51aGlkZScsJ21lbnVzaG93JywnbWVudXRyaWdnZXJvdXQnLCdtZW51dHJpZ2dlcm92ZXInLCdtb3VzZW91dCcsJ21vdXNlb3ZlcicsJ21vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3RleHRjaGFuZ2UnLCd0b2dnbGUnLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnZmlsZWJ1dHRvbidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDRmlsZWJ1dHRvbigpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19