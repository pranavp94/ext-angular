var ExtLegendComponent_1;
import { __decorate, __param } from "tslib";
//import EWCLegend from '../dist/ext-legend.component.js';
//inputs: (new EWCLegend()).properties,
//import EWCLegend from '@sencha/ext-web-components-classic/dist/ext-legend.component.js';
import { EWCLegend } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
let ExtLegendComponent = ExtLegendComponent_1 = class ExtLegendComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'docked', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'rect', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'toggleable', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',], (new EWCLegend()).events, ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',], vc);
        this.xtype = 'legend';
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
ExtLegendComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtLegendComponent = ExtLegendComponent_1 = __decorate([
    Component({
        selector: 'ExtLegend',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'docked', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'undefined', 'nameable', 'navigationModel', 'overCls', 'undefined', 'undefined', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'rect', 'reference', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'toggleable', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype',],
        outputs: ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforecontainerclick', 'beforecontainercontextmenu', 'beforecontainerdblclick', 'beforecontainerkeydown', 'beforecontainerkeypress', 'beforecontainerkeyup', 'beforecontainermousedown', 'beforecontainermouseout', 'beforecontainermouseover', 'beforecontainermouseup', 'beforedeactivate', 'beforedeselect', 'beforedestroy', 'beforehide', 'beforeitemclick', 'beforeitemcontextmenu', 'beforeitemdblclick', 'beforeitemkeydown', 'beforeitemkeypress', 'beforeitemkeyup', 'beforeitemlongpress', 'beforeitemmousedown', 'beforeitemmouseenter', 'beforeitemmouseleave', 'beforeitemmouseup', 'beforerefresh', 'beforerender', 'beforeselect', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'containerclick', 'containercontextmenu', 'containerdblclick', 'containerkeydown', 'containerkeypress', 'containerkeyup', 'containermousedown', 'containermouseout', 'containermouseover', 'containermouseup', 'deactivate', 'deselect', 'destroy', 'disable', 'enable', 'focus', 'focuschange', 'focusenter', 'focusleave', 'hide', 'highlightitem', 'itemadd', 'itemclick', 'itemcontextmenu', 'itemdblclick', 'itemkeydown', 'itemkeypress', 'itemkeyup', 'itemlongpress', 'itemmousedown', 'itemmouseenter', 'itemmouseleave', 'itemmouseup', 'itemremove', 'itemupdate', 'move', 'refresh', 'removed', 'render', 'resize', 'select', 'selectionchange', 'show', 'staterestore', 'statesave', 'unhighlightitem', 'viewready',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtLegendComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtLegendComponent);
export { ExtLegendComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCLegend()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0TGVnZW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dExlZ2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsMEZBQTBGO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVMvQyxJQUFhLGtCQUFrQiwwQkFBL0IsTUFBYSxrQkFBbUIsU0FBUSxPQUFPO0lBQzNDLFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEVB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Q0FBNEM7QUFDNUMseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NMZWdlbmQgZnJvbSAnLi4vZGlzdC9leHQtbGVnZW5kLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NMZWdlbmQoKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ0xlZ2VuZCBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LWxlZ2VuZC5jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRVdDTGVnZW5kIH0gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9jb21tb24vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dExlZ2VuZCcsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNvdW50ZXInLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuaW1hdGVTaGFkb3cnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYmFzZUNscycsJ2JpbmQnLCdibG9ja1JlZnJlc2gnLCdib3JkZXInLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmVyRW1wdHlUZXh0JywnZGVmZXJJbml0aWFsUmVmcmVzaCcsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkaXNhYmxlU2VsZWN0aW9uJywnZG9jaycsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ2VtcHR5VGV4dCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1CaW5kJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2l0ZW1DbHMnLCdpdGVtSWQnLCdpdGVtU2VsZWN0b3InLCdpdGVtVHBsJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbG9hZGluZ0NscycsJ2xvYWRpbmdIZWlnaHQnLCdsb2FkaW5nVGV4dCcsJ2xvYWRpbmdVc2VNc2cnLCdsb2FkTWFzaycsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywndW5kZWZpbmVkJywnbmFtZWFibGUnLCduYXZpZ2F0aW9uTW9kZWwnLCdvdmVyQ2xzJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnb3Zlckl0ZW1DbHMnLCdwYWRkaW5nJywncGx1Z2lucycsJ3ByZXNlcnZlU2Nyb2xsT25SZWZyZXNoJywncHJlc2VydmVTY3JvbGxPblJlbG9hZCcsJ3B1Ymxpc2hlcycsJ3JlY3QnLCdyZWZlcmVuY2UnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3NlbGVjdGVkSXRlbUNscycsJ3NlbGVjdGlvbicsJ3NlbGVjdGlvbk1vZGVsJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3VuZGVmaW5lZCcsJ3NpbmdsZVNlbGVjdCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHlsZScsJ3RhYkluZGV4JywndGhyb3R0bGVkVXBkYXRlJywndG9Gcm9udE9uU2hvdycsJ3RvZ2dsZWFibGUnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrT3ZlcicsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdjcmVhdGVkJywnYWN0aXZhdGUnLCdhZGRlZCcsJ2FmdGVybGF5b3V0YW5pbWF0aW9uJywnYWZ0ZXJyZW5kZXInLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWNvbnRhaW5lcmNsaWNrJywnYmVmb3JlY29udGFpbmVyY29udGV4dG1lbnUnLCdiZWZvcmVjb250YWluZXJkYmxjbGljaycsJ2JlZm9yZWNvbnRhaW5lcmtleWRvd24nLCdiZWZvcmVjb250YWluZXJrZXlwcmVzcycsJ2JlZm9yZWNvbnRhaW5lcmtleXVwJywnYmVmb3JlY29udGFpbmVybW91c2Vkb3duJywnYmVmb3JlY29udGFpbmVybW91c2VvdXQnLCdiZWZvcmVjb250YWluZXJtb3VzZW92ZXInLCdiZWZvcmVjb250YWluZXJtb3VzZXVwJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc2VsZWN0JywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVpdGVtY2xpY2snLCdiZWZvcmVpdGVtY29udGV4dG1lbnUnLCdiZWZvcmVpdGVtZGJsY2xpY2snLCdiZWZvcmVpdGVta2V5ZG93bicsJ2JlZm9yZWl0ZW1rZXlwcmVzcycsJ2JlZm9yZWl0ZW1rZXl1cCcsJ2JlZm9yZWl0ZW1sb25ncHJlc3MnLCdiZWZvcmVpdGVtbW91c2Vkb3duJywnYmVmb3JlaXRlbW1vdXNlZW50ZXInLCdiZWZvcmVpdGVtbW91c2VsZWF2ZScsJ2JlZm9yZWl0ZW1tb3VzZXVwJywnYmVmb3JlcmVmcmVzaCcsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNlbGVjdCcsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjb250YWluZXJjbGljaycsJ2NvbnRhaW5lcmNvbnRleHRtZW51JywnY29udGFpbmVyZGJsY2xpY2snLCdjb250YWluZXJrZXlkb3duJywnY29udGFpbmVya2V5cHJlc3MnLCdjb250YWluZXJrZXl1cCcsJ2NvbnRhaW5lcm1vdXNlZG93bicsJ2NvbnRhaW5lcm1vdXNlb3V0JywnY29udGFpbmVybW91c2VvdmVyJywnY29udGFpbmVybW91c2V1cCcsJ2RlYWN0aXZhdGUnLCdkZXNlbGVjdCcsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2NoYW5nZScsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGlkZScsJ2hpZ2hsaWdodGl0ZW0nLCdpdGVtYWRkJywnaXRlbWNsaWNrJywnaXRlbWNvbnRleHRtZW51JywnaXRlbWRibGNsaWNrJywnaXRlbWtleWRvd24nLCdpdGVta2V5cHJlc3MnLCdpdGVta2V5dXAnLCdpdGVtbG9uZ3ByZXNzJywnaXRlbW1vdXNlZG93bicsJ2l0ZW1tb3VzZWVudGVyJywnaXRlbW1vdXNlbGVhdmUnLCdpdGVtbW91c2V1cCcsJ2l0ZW1yZW1vdmUnLCdpdGVtdXBkYXRlJywnbW92ZScsJ3JlZnJlc2gnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2VsZWN0Jywnc2VsZWN0aW9uY2hhbmdlJywnc2hvdycsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3VuaGlnaGxpZ2h0aXRlbScsJ3ZpZXdyZWFkeScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0TGVnZW5kQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0TGVnZW5kQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNvdW50ZXInLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuaW1hdGVTaGFkb3cnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYmFzZUNscycsJ2JpbmQnLCdibG9ja1JlZnJlc2gnLCdib3JkZXInLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmVyRW1wdHlUZXh0JywnZGVmZXJJbml0aWFsUmVmcmVzaCcsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkaXNhYmxlU2VsZWN0aW9uJywnZG9jaycsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ2VtcHR5VGV4dCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1CaW5kJywnZnJhbWUnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2l0ZW1DbHMnLCdpdGVtSWQnLCdpdGVtU2VsZWN0b3InLCdpdGVtVHBsJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbG9hZGluZ0NscycsJ2xvYWRpbmdIZWlnaHQnLCdsb2FkaW5nVGV4dCcsJ2xvYWRpbmdVc2VNc2cnLCdsb2FkTWFzaycsJ21hcmdpbicsJ21hc2tEZWZhdWx0cycsJ21hc2tFbGVtZW50JywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywndW5kZWZpbmVkJywnbmFtZWFibGUnLCduYXZpZ2F0aW9uTW9kZWwnLCdvdmVyQ2xzJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnb3Zlckl0ZW1DbHMnLCdwYWRkaW5nJywncGx1Z2lucycsJ3ByZXNlcnZlU2Nyb2xsT25SZWZyZXNoJywncHJlc2VydmVTY3JvbGxPblJlbG9hZCcsJ3B1Ymxpc2hlcycsJ3JlY3QnLCdyZWZlcmVuY2UnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3NlbGVjdGVkSXRlbUNscycsJ3NlbGVjdGlvbicsJ3NlbGVjdGlvbk1vZGVsJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3VuZGVmaW5lZCcsJ3NpbmdsZVNlbGVjdCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RvcmUnLCdzdHlsZScsJ3RhYkluZGV4JywndGhyb3R0bGVkVXBkYXRlJywndG9Gcm9udE9uU2hvdycsJ3RvZ2dsZWFibGUnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrT3ZlcicsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NMZWdlbmQoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlY29udGFpbmVyY2xpY2snLCdiZWZvcmVjb250YWluZXJjb250ZXh0bWVudScsJ2JlZm9yZWNvbnRhaW5lcmRibGNsaWNrJywnYmVmb3JlY29udGFpbmVya2V5ZG93bicsJ2JlZm9yZWNvbnRhaW5lcmtleXByZXNzJywnYmVmb3JlY29udGFpbmVya2V5dXAnLCdiZWZvcmVjb250YWluZXJtb3VzZWRvd24nLCdiZWZvcmVjb250YWluZXJtb3VzZW91dCcsJ2JlZm9yZWNvbnRhaW5lcm1vdXNlb3ZlcicsJ2JlZm9yZWNvbnRhaW5lcm1vdXNldXAnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzZWxlY3QnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZWl0ZW1jbGljaycsJ2JlZm9yZWl0ZW1jb250ZXh0bWVudScsJ2JlZm9yZWl0ZW1kYmxjbGljaycsJ2JlZm9yZWl0ZW1rZXlkb3duJywnYmVmb3JlaXRlbWtleXByZXNzJywnYmVmb3JlaXRlbWtleXVwJywnYmVmb3JlaXRlbWxvbmdwcmVzcycsJ2JlZm9yZWl0ZW1tb3VzZWRvd24nLCdiZWZvcmVpdGVtbW91c2VlbnRlcicsJ2JlZm9yZWl0ZW1tb3VzZWxlYXZlJywnYmVmb3JlaXRlbW1vdXNldXAnLCdiZWZvcmVyZWZyZXNoJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2VsZWN0JywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NvbnRhaW5lcmNsaWNrJywnY29udGFpbmVyY29udGV4dG1lbnUnLCdjb250YWluZXJkYmxjbGljaycsJ2NvbnRhaW5lcmtleWRvd24nLCdjb250YWluZXJrZXlwcmVzcycsJ2NvbnRhaW5lcmtleXVwJywnY29udGFpbmVybW91c2Vkb3duJywnY29udGFpbmVybW91c2VvdXQnLCdjb250YWluZXJtb3VzZW92ZXInLCdjb250YWluZXJtb3VzZXVwJywnZGVhY3RpdmF0ZScsJ2Rlc2VsZWN0JywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzY2hhbmdlJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywnaGlnaGxpZ2h0aXRlbScsJ2l0ZW1hZGQnLCdpdGVtY2xpY2snLCdpdGVtY29udGV4dG1lbnUnLCdpdGVtZGJsY2xpY2snLCdpdGVta2V5ZG93bicsJ2l0ZW1rZXlwcmVzcycsJ2l0ZW1rZXl1cCcsJ2l0ZW1sb25ncHJlc3MnLCdpdGVtbW91c2Vkb3duJywnaXRlbW1vdXNlZW50ZXInLCdpdGVtbW91c2VsZWF2ZScsJ2l0ZW1tb3VzZXVwJywnaXRlbXJlbW92ZScsJ2l0ZW11cGRhdGUnLCdtb3ZlJywncmVmcmVzaCcsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzZWxlY3QnLCdzZWxlY3Rpb25jaGFuZ2UnLCdzaG93Jywnc3RhdGVyZXN0b3JlJywnc3RhdGVzYXZlJywndW5oaWdobGlnaHRpdGVtJywndmlld3JlYWR5JyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2xlZ2VuZCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDTGVnZW5kKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=