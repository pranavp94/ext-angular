import { __decorate, __extends, __param } from "tslib";
//import EWCTriggerfield from '../dist/ext-triggerfield.component.js';
//inputs: (new EWCTriggerfield()).properties,
//import EWCTriggerfield from '@sencha/ext-web-components-classic/dist/ext-triggerfield.component.js';
import { EWCTriggerfield } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
var ExtTriggerfieldComponent = /** @class */ (function (_super) {
    __extends(ExtTriggerfieldComponent, _super);
    function ExtTriggerfieldComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'undefined', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'maxHeight', 'maxLength', 'maxLengthText', 'maxWidth', 'minHeight', 'minLength', 'minLengthText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'preventMark', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectOnFocus', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'stateEvents', 'stateful', 'stateId', 'stripCharsRe', 'style', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'triggerCls', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',], (new EWCTriggerfield()).events, ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',], vc) || this;
        _this.xtype = 'triggerfield';
        return _this;
    }
    ExtTriggerfieldComponent_1 = ExtTriggerfieldComponent;
    ExtTriggerfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTriggerfieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTriggerfieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTriggerfieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTriggerfieldComponent_1;
    ExtTriggerfieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtTriggerfieldComponent = ExtTriggerfieldComponent_1 = __decorate([
        Component({
            selector: 'ExtTriggerfield',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoRender', 'undefined', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'undefined', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'maxHeight', 'maxLength', 'maxLengthText', 'maxWidth', 'minHeight', 'minLength', 'minLengthText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'preventMark', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectOnFocus', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'undefined', 'stateEvents', 'stateful', 'stateId', 'stripCharsRe', 'style', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'triggerCls', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'created', 'activate', 'added', 'afterlayoutanimation', 'afterrender', 'autosize', 'beforeactivate', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'change', 'deactivate', 'destroy', 'dirtychange', 'disable', 'enable', 'errorchange', 'focus', 'focusenter', 'focusleave', 'hide', 'keydown', 'keypress', 'keyup', 'move', 'paste', 'removed', 'render', 'resize', 'show', 'specialkey', 'staterestore', 'statesave', 'validitychange', 'writeablechange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTriggerfieldComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtTriggerfieldComponent);
    return ExtTriggerfieldComponent;
}(EngBase));
export { ExtTriggerfieldComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCTriggerfield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VHJpZ2dlcmZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dFRyaWdnZXJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0VBQXNFO0FBQ3RFLDZDQUE2QztBQUM3QyxzR0FBc0c7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUy9DO0lBQThDLDRDQUFPO0lBQ2pELGtDQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxxQkFBcUIsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFD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QVcsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsb0JBQW9CLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsb0JBQW9CLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUU7WUFDM25GLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxvQkFBb0IsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUU7WUFDeGdCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwwQkFBd0IsRUFBeEIsQ0FBd0IsQ0FBQyxFQUFDLENBQUM7WUFDeEYsUUFBUSxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDO1FBSU8sV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO09BSDFCLHdCQUF3QixDQWdDcEM7SUFBRCwrQkFBQztDQUFBLEFBaENELENBQThDLE9BQU8sR0FnQ3BEO1NBaENZLHdCQUF3QjtBQW1DckMsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6QyxrREFBa0Q7QUFDbEQseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NUcmlnZ2VyZmllbGQgZnJvbSAnLi4vZGlzdC9leHQtdHJpZ2dlcmZpZWxkLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NUcmlnZ2VyZmllbGQoKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ1RyaWdnZXJmaWVsZCBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LXRyaWdnZXJmaWVsZC5jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRVdDVHJpZ2dlcmZpZWxkIH0gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9jb21tb24vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dFRyaWdnZXJmaWVsZCcsXG4gICAgaW5wdXRzOiBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVFcnJvcicsJ2FjdGl2ZUVycm9yc1RwbCcsJ2FmdGVyQm9keUVsJywnYWZ0ZXJMYWJlbFRleHRUcGwnLCdhZnRlckxhYmVsVHBsJywnYWZ0ZXJTdWJUcGwnLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbGxvd0JsYW5rJywnYWxsb3dPbmx5V2hpdGVzcGFjZScsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUVycm9yVGV4dCcsJ2FyaWFIZWxwJywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRWwnLCdhdXRvRml0RXJyb3JzJywnYXV0b0hpZGVJbnB1dE1hc2snLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQm9keUNscycsJ2Jhc2VDbHMnLCdiZWZvcmVCb2R5RWwnLCdiZWZvcmVMYWJlbFRleHRUcGwnLCdiZWZvcmVMYWJlbFRwbCcsJ2JlZm9yZVN1YlRwbCcsJ2JpbmQnLCdibGFua1RleHQnLCdib3JkZXInLCdjaGVja0NoYW5nZUJ1ZmZlcicsJ2NoZWNrQ2hhbmdlRXZlbnRzJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkaXJ0eUNscycsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkaXNhYmxlS2V5RmlsdGVyJywnZG9jaycsJ2RyYWdnYWJsZScsJ2VkaXRhYmxlJywnZW1wdHlDbHMnLCdlbXB0eVRleHQnLCdlbmFibGVLZXlFdmVudHMnLCdlbmZvcmNlTWF4TGVuZ3RoJywnZXJyb3JNc2dDbHMnLCdmaWVsZEJvZHlDbHMnLCdmaWVsZENscycsJ2ZpZWxkTGFiZWwnLCdmaWVsZFN0eWxlJywnZmllbGRTdWJUcGwnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCd1bmRlZmluZWQnLCdmb3JtQmluZCcsJ2Zvcm1JdGVtQ2xzJywnZnJhbWUnLCdncm93JywnZ3Jvd01heCcsJ2dyb3dNaW4nLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlRW1wdHlMYWJlbCcsJ2hpZGVMYWJlbCcsJ2hpZGVNb2RlJywnaGlkZVRyaWdnZXInLCdodG1sJywnaWQnLCdpbnB1dEF0dHJUcGwnLCdpbnB1dElkJywnaW5wdXRNYXNrJywnaW5wdXRUeXBlJywnaW5wdXRXcmFwQ2xzJywnaW52YWxpZENscycsJ2ludmFsaWRUZXh0JywnaXNUZXh0SW5wdXQnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGFiZWxhYmxlUmVuZGVyVHBsJywnbGFiZWxBbGlnbicsJ2xhYmVsQXR0clRwbCcsJ2xhYmVsQ2xzJywnbGFiZWxDbHNFeHRyYScsJ2xhYmVsUGFkJywnbGFiZWxTZXBhcmF0b3InLCdsYWJlbFN0eWxlJywnbGFiZWxXaWR0aCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXNrUmUnLCdtYXhIZWlnaHQnLCdtYXhMZW5ndGgnLCdtYXhMZW5ndGhUZXh0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5MZW5ndGgnLCdtaW5MZW5ndGhUZXh0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ21zZ1RhcmdldCcsJ25hbWUnLCduYW1lYWJsZScsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGx1Z2lucycsJ3ByZXZlbnRNYXJrJywncHVibGlzaGVzJywncmVhZE9ubHknLCdyZWFkT25seUNscycsJ3JlZmVyZW5jZScsJ3JlZ2V4JywncmVnZXhUZXh0JywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVwZWF0VHJpZ2dlckNsaWNrJywncmVxdWlyZWRDbHMnLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2Nyb2xsYWJsZScsJ3NlbGVjdE9uRm9jdXMnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhZG93T2Zmc2V0Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaHJpbmtXcmFwJywndW5kZWZpbmVkJywnc3RhdGVFdmVudHMnLCdzdGF0ZWZ1bCcsJ3N0YXRlSWQnLCdzdHJpcENoYXJzUmUnLCdzdHlsZScsJ3N1Ym1pdFZhbHVlJywndGFiSW5kZXgnLCd0b0Zyb250T25TaG93JywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmlnZ2VyQ2xzJywndHJpZ2dlcnMnLCd0cmlnZ2VyV3JhcENscycsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VzZXJDbHMnLCd2YWxpZGF0ZUJsYW5rJywndmFsaWRhdGVPbkJsdXInLCd2YWxpZGF0ZU9uQ2hhbmdlJywndmFsaWRhdGVPbkZvY3VzTGVhdmUnLCd2YWxpZGF0aW9uJywndmFsaWRhdGlvbkZpZWxkJywndmFsaWRhdG9yJywndmFsdWUnLCd2YWx1ZVB1Ymxpc2hFdmVudCcsJ3ZpZXdNb2RlbCcsJ3Z0eXBlJywndnR5cGVUZXh0Jywnd2VpZ2h0Jywnd2lkdGgnLCd4dHlwZScsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnY3JlYXRlZCcsJ2FjdGl2YXRlJywnYWRkZWQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYXV0b3NpemUnLCdiZWZvcmVhY3RpdmF0ZScsJ2JlZm9yZWRlYWN0aXZhdGUnLCdiZWZvcmVkZXN0cm95JywnYmVmb3JlaGlkZScsJ2JlZm9yZXJlbmRlcicsJ2JlZm9yZXNob3cnLCdiZWZvcmVzdGF0ZXJlc3RvcmUnLCdiZWZvcmVzdGF0ZXNhdmUnLCdibHVyJywnYm94cmVhZHknLCdjaGFuZ2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2RpcnR5Y2hhbmdlJywnZGlzYWJsZScsJ2VuYWJsZScsJ2Vycm9yY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdrZXlkb3duJywna2V5cHJlc3MnLCdrZXl1cCcsJ21vdmUnLCdwYXN0ZScsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzaG93Jywnc3BlY2lhbGtleScsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsJ3ZhbGlkaXR5Y2hhbmdlJywnd3JpdGVhYmxlY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRUcmlnZ2VyZmllbGRDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRUcmlnZ2VyZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUVycm9yJywnYWN0aXZlRXJyb3JzVHBsJywnYWZ0ZXJCb2R5RWwnLCdhZnRlckxhYmVsVGV4dFRwbCcsJ2FmdGVyTGFiZWxUcGwnLCdhZnRlclN1YlRwbCcsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93QmxhbmsnLCdhbGxvd09ubHlXaGl0ZXNwYWNlJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhRXJyb3JUZXh0JywnYXJpYUhlbHAnLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9FbCcsJ2F1dG9GaXRFcnJvcnMnLCdhdXRvSGlkZUlucHV0TWFzaycsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VCb2R5Q2xzJywnYmFzZUNscycsJ2JlZm9yZUJvZHlFbCcsJ2JlZm9yZUxhYmVsVGV4dFRwbCcsJ2JlZm9yZUxhYmVsVHBsJywnYmVmb3JlU3ViVHBsJywnYmluZCcsJ2JsYW5rVGV4dCcsJ2JvcmRlcicsJ2NoZWNrQ2hhbmdlQnVmZmVyJywnY2hlY2tDaGFuZ2VFdmVudHMnLCdjaGlsZEVscycsJ2NscycsJ2NvbHVtbldpZHRoJywnY29tcG9uZW50Q2xzJywnY29tcG9uZW50TGF5b3V0JywnY29uc3RyYWluJywnY29uc3RyYWludEluc2V0cycsJ2NvbnN0cmFpblRvJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0QWxpZ24nLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RpcnR5Q2xzJywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2Rpc2FibGVLZXlGaWx0ZXInLCdkb2NrJywnZHJhZ2dhYmxlJywnZWRpdGFibGUnLCdlbXB0eUNscycsJ2VtcHR5VGV4dCcsJ2VuYWJsZUtleUV2ZW50cycsJ2VuZm9yY2VNYXhMZW5ndGgnLCdlcnJvck1zZ0NscycsJ2ZpZWxkQm9keUNscycsJ2ZpZWxkQ2xzJywnZmllbGRMYWJlbCcsJ2ZpZWxkU3R5bGUnLCdmaWVsZFN1YlRwbCcsJ2ZpeGVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ3VuZGVmaW5lZCcsJ2Zvcm1CaW5kJywnZm9ybUl0ZW1DbHMnLCdmcmFtZScsJ2dyb3cnLCdncm93TWF4JywnZ3Jvd01pbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVFbXB0eUxhYmVsJywnaGlkZUxhYmVsJywnaGlkZU1vZGUnLCdoaWRlVHJpZ2dlcicsJ2h0bWwnLCdpZCcsJ2lucHV0QXR0clRwbCcsJ2lucHV0SWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFdyYXBDbHMnLCdpbnZhbGlkQ2xzJywnaW52YWxpZFRleHQnLCdpc1RleHRJbnB1dCcsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYWJlbGFibGVSZW5kZXJUcGwnLCdsYWJlbEFsaWduJywnbGFiZWxBdHRyVHBsJywnbGFiZWxDbHMnLCdsYWJlbENsc0V4dHJhJywnbGFiZWxQYWQnLCdsYWJlbFNlcGFyYXRvcicsJ2xhYmVsU3R5bGUnLCdsYWJlbFdpZHRoJywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21hc2tSZScsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heExlbmd0aFRleHQnLCdtYXhXaWR0aCcsJ21pbkhlaWdodCcsJ21pbkxlbmd0aCcsJ21pbkxlbmd0aFRleHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXNnVGFyZ2V0JywnbmFtZScsJ25hbWVhYmxlJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJldmVudE1hcmsnLCdwdWJsaXNoZXMnLCdyZWFkT25seScsJ3JlYWRPbmx5Q2xzJywncmVmZXJlbmNlJywncmVnZXgnLCdyZWdleFRleHQnLCdyZWdpb24nLCdyZW5kZXJDb25maWcnLCdyZW5kZXJEYXRhJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXBlYXRUcmlnZ2VyQ2xpY2snLCdyZXF1aXJlZENscycsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2VsZWN0T25Gb2N1cycsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCd1bmRlZmluZWQnLCdzdGF0ZUV2ZW50cycsJ3N0YXRlZnVsJywnc3RhdGVJZCcsJ3N0cmlwQ2hhcnNSZScsJ3N0eWxlJywnc3VibWl0VmFsdWUnLCd0YWJJbmRleCcsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyaWdnZXJDbHMnLCd0cmlnZ2VycycsJ3RyaWdnZXJXcmFwQ2xzJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXNlckNscycsJ3ZhbGlkYXRlQmxhbmsnLCd2YWxpZGF0ZU9uQmx1cicsJ3ZhbGlkYXRlT25DaGFuZ2UnLCd2YWxpZGF0ZU9uRm9jdXNMZWF2ZScsJ3ZhbGlkYXRpb24nLCd2YWxpZGF0aW9uRmllbGQnLCd2YWxpZGF0b3InLCd2YWx1ZScsJ3ZhbHVlUHVibGlzaEV2ZW50Jywndmlld01vZGVsJywndnR5cGUnLCd2dHlwZVRleHQnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NUcmlnZ2VyZmllbGQoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FkZGVkJywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2F1dG9zaXplJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY2hhbmdlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGUnLCdlbmFibGUnLCdlcnJvcmNoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywna2V5ZG93bicsJ2tleXByZXNzJywna2V5dXAnLCdtb3ZlJywncGFzdGUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3NwZWNpYWxrZXknLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLCd2YWxpZGl0eWNoYW5nZScsJ3dyaXRlYWJsZWNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICd0cmlnZ2VyZmllbGQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1RyaWdnZXJmaWVsZCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19