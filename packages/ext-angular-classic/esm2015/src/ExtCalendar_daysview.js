var ExtCalendar_daysviewComponent_1;
import { __decorate, __param } from "tslib";
//import EWCCalendar_daysview from '../dist/ext-calendar-daysview.component.js';
//inputs: (new EWCCalendar_daysview()).properties,
//import EWCCalendar_daysview from '@sencha/ext-web-components-classic/dist/ext-calendar-daysview.component.js';
import { EWCCalendar_daysview } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
let ExtCalendar_daysviewComponent = ExtCalendar_daysviewComponent_1 = class ExtCalendar_daysviewComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'addForm', 'allowSelection', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'compact', 'compactOptions', 'controller', 'controlStoreRange', 'defaultListenerScope', 'disabled', 'displayOverlap', 'draggable', 'droppable', 'editForm', 'endTime', 'eventDefaults', 'undefined', 'focusCls', 'gestureNavigation', 'header', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'resizeEvents', 'ripple', 'session', 'shareableName', 'showNowMarker', 'startTime', 'store', 'style', 'timeFormat', 'timeRenderer', 'timezoneOffset', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'visibleDays', 'width',], (new EWCCalendar_daysview()).events, ['ready', 'created', 'beforedisabledchange', 'beforeeventadd', 'beforeeventdragstart', 'beforeeventedit', 'beforeeventresizestart', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'eventadd', 'eventdrop', 'eventedit', 'eventresize', 'eventtap', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'validateeventadd', 'validateeventdrop', 'validateeventedit', 'validateeventresize', 'valuechange', 'widthchange',], vc);
        this.xtype = 'calendar-daysview';
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
ExtCalendar_daysviewComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtCalendar_daysviewComponent = ExtCalendar_daysviewComponent_1 = __decorate([
    Component({
        selector: 'ExtCalendar_daysview',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'addForm', 'allowSelection', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'compact', 'compactOptions', 'controller', 'controlStoreRange', 'defaultListenerScope', 'disabled', 'displayOverlap', 'draggable', 'droppable', 'editForm', 'endTime', 'eventDefaults', 'undefined', 'focusCls', 'gestureNavigation', 'header', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'resizeEvents', 'ripple', 'session', 'shareableName', 'showNowMarker', 'startTime', 'store', 'style', 'timeFormat', 'timeRenderer', 'timezoneOffset', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'visibleDays', 'width',],
        outputs: ['ready', 'created', 'beforedisabledchange', 'beforeeventadd', 'beforeeventdragstart', 'beforeeventedit', 'beforeeventresizestart', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'eventadd', 'eventdrop', 'eventedit', 'eventresize', 'eventtap', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'validateeventadd', 'validateeventdrop', 'validateeventedit', 'validateeventresize', 'valuechange', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtCalendar_daysviewComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtCalendar_daysviewComponent);
export { ExtCalendar_daysviewComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCCalendar_daysview()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2FsZW5kYXJfZGF5c3ZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvRXh0Q2FsZW5kYXJfZGF5c3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBZ0Y7QUFDaEYsa0RBQWtEO0FBQ2xELGdIQUFnSDtBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVNoRCxJQUFhLDZCQUE2QixxQ0FBMUMsTUFBYSw2QkFBOEIsU0FBUSxPQUFPO0lBQ3RELFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxtQkFBbUIsRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxXQUFXLEVB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QUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0NhbGVuZGFyX2RheXN2aWV3IGZyb20gJy4uL2Rpc3QvZXh0LWNhbGVuZGFyLWRheXN2aWV3LmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NDYWxlbmRhcl9kYXlzdmlldygpKS5wcm9wZXJ0aWVzLFxuLy9pbXBvcnQgRVdDQ2FsZW5kYXJfZGF5c3ZpZXcgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1jYWxlbmRhci1kYXlzdmlldy5jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRVdDQ2FsZW5kYXJfZGF5c3ZpZXcgfSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL3J1bnRpbWUvYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dENhbGVuZGFyX2RheXN2aWV3JyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWRkRm9ybScsJ2FsbG93U2VsZWN0aW9uJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2JpbmQnLCdib3JkZXInLCdjbHMnLCdjb21wYWN0JywnY29tcGFjdE9wdGlvbnMnLCdjb250cm9sbGVyJywnY29udHJvbFN0b3JlUmFuZ2UnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2Rpc2FibGVkJywnZGlzcGxheU92ZXJsYXAnLCdkcmFnZ2FibGUnLCdkcm9wcGFibGUnLCdlZGl0Rm9ybScsJ2VuZFRpbWUnLCdldmVudERlZmF1bHRzJywndW5kZWZpbmVkJywnZm9jdXNDbHMnLCdnZXN0dXJlTmF2aWdhdGlvbicsJ2hlYWRlcicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaW5zdGFuY2VDbHMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbmFtZScsJ25hbWVhYmxlJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbmRlclRvJywncmVzaXplRXZlbnRzJywncmlwcGxlJywnc2Vzc2lvbicsJ3NoYXJlYWJsZU5hbWUnLCdzaG93Tm93TWFya2VyJywnc3RhcnRUaW1lJywnc3RvcmUnLCdzdHlsZScsJ3RpbWVGb3JtYXQnLCd0aW1lUmVuZGVyZXInLCd0aW1lem9uZU9mZnNldCcsJ3RvdWNoQWN0aW9uJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd2YWx1ZScsJ3ZpZXdNb2RlbCcsJ3Zpc2libGVEYXlzJywnd2lkdGgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2NyZWF0ZWQnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWV2ZW50YWRkJywnYmVmb3JlZXZlbnRkcmFnc3RhcnQnLCdiZWZvcmVldmVudGVkaXQnLCdiZWZvcmVldmVudHJlc2l6ZXN0YXJ0JywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnZGlzYWJsZWRjaGFuZ2UnLCdldmVudGFkZCcsJ2V2ZW50ZHJvcCcsJ2V2ZW50ZWRpdCcsJ2V2ZW50cmVzaXplJywnZXZlbnR0YXAnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywndmFsaWRhdGVldmVudGFkZCcsJ3ZhbGlkYXRlZXZlbnRkcm9wJywndmFsaWRhdGVldmVudGVkaXQnLCd2YWxpZGF0ZWV2ZW50cmVzaXplJywndmFsdWVjaGFuZ2UnLCd3aWR0aGNoYW5nZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfZGF5c3ZpZXdDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9kYXlzdmlld0NvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhZGRGb3JtJywnYWxsb3dTZWxlY3Rpb24nLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYmluZCcsJ2JvcmRlcicsJ2NscycsJ2NvbXBhY3QnLCdjb21wYWN0T3B0aW9ucycsJ2NvbnRyb2xsZXInLCdjb250cm9sU3RvcmVSYW5nZScsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlzYWJsZWQnLCdkaXNwbGF5T3ZlcmxhcCcsJ2RyYWdnYWJsZScsJ2Ryb3BwYWJsZScsJ2VkaXRGb3JtJywnZW5kVGltZScsJ2V2ZW50RGVmYXVsdHMnLCd1bmRlZmluZWQnLCdmb2N1c0NscycsJ2dlc3R1cmVOYXZpZ2F0aW9uJywnaGVhZGVyJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdpbnN0YW5jZUNscycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsaXN0ZW5lcnMnLCdtYXJnaW4nLCduYW1lJywnbmFtZWFibGUnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVuZGVyVG8nLCdyZXNpemVFdmVudHMnLCdyaXBwbGUnLCdzZXNzaW9uJywnc2hhcmVhYmxlTmFtZScsJ3Nob3dOb3dNYXJrZXInLCdzdGFydFRpbWUnLCdzdG9yZScsJ3N0eWxlJywndGltZUZvcm1hdCcsJ3RpbWVSZW5kZXJlcicsJ3RpbWV6b25lT2Zmc2V0JywndG91Y2hBY3Rpb24nLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3ZhbHVlJywndmlld01vZGVsJywndmlzaWJsZURheXMnLCd3aWR0aCcsXSxcbiAgICAgICAgICAgIChuZXcgRVdDQ2FsZW5kYXJfZGF5c3ZpZXcoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWV2ZW50YWRkJywnYmVmb3JlZXZlbnRkcmFnc3RhcnQnLCdiZWZvcmVldmVudGVkaXQnLCdiZWZvcmVldmVudHJlc2l6ZXN0YXJ0JywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnZGlzYWJsZWRjaGFuZ2UnLCdldmVudGFkZCcsJ2V2ZW50ZHJvcCcsJ2V2ZW50ZWRpdCcsJ2V2ZW50cmVzaXplJywnZXZlbnR0YXAnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywndmFsaWRhdGVldmVudGFkZCcsJ3ZhbGlkYXRlZXZlbnRkcm9wJywndmFsaWRhdGVldmVudGVkaXQnLCd2YWxpZGF0ZWV2ZW50cmVzaXplJywndmFsdWVjaGFuZ2UnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci1kYXlzdmlldydcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDQ2FsZW5kYXJfZGF5c3ZpZXcoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==