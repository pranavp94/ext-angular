import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class gridMetaData {
  public static XTYPE: string = 'grid';
  public static PROPERTIES: string[] = [
    'activeChildTabIndex',
    'activeItem',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'bufferSize',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'columnLines',
    'columnMenu',
    'columnResize',
    'columns',
    'columnsMenuItem',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'disclosureProperty',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'enableTextSelection',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'grouped',
    'groupFooter',
    'groupHeader',
    'height',
    'hidden',
    'hideAnimation',
    'hideHeaders',
    'hideMode',
    'hideOnMaskTap',
    'hideScrollbar',
    'horizontalOverflow',
    'html',
    'id',
    'inactiveChildTabIndex',
    'indexBar',
    'infinite',
    'inline',
    'innerCls',
    'innerCtHeight',
    'innerWidth',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemConfig',
    'itemContentCls',
    'itemDataMap',
    'itemId',
    'itemInnerCls',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'maintainChildNodes',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxItemCache',
    'maxWidth',
    'minHeight',
    'minimumBufferDistance',
    'minWidth',
    'modal',
    'modelValidation',
    'multiColumnSort',
    'name',
    'nameable',
    'nameHolder',
    'onItemDisclosure',
    'padding',
    'pinFooters',
    'pinHeaders',
    'pinnedFooter',
    'pinnedFooterHeight',
    'pinnedHeader',
    'pinnedHeaderHeight',
    'plugins',
    'pressedDelay',
    'preventSelectionOnDisclose',
    'preventSelectionOnTool',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'reserveScrollbar',
    'resetFocusPosition',
    'right',
    'ripple',
    'rowLines',
    'rowNumbers',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selection',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sortable',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'striped',
    'style',
    'tabIndex',
    'title',
    'titleBar',
    'toFrontOnShow',
    'tooltip',
    'top',
    'topRenderedIndex',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'useSimpleItems',
    'variableHeights',
    'verticalOverflow',
    'viewModel',
    'visibleHeight',
    'visibleLeft',
    'visibleTop',
    'visibleWidth',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'newActiveItem,grid,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:''},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeselectionextend',parameters:'grid,An,extension'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforetofront',parameters:'grid'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'grid,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'cellselection',parameters:'grid,selection'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'childdoubletap',parameters:'grid,location'},
		{name:'childlongpress',parameters:'grid,location'},
		{name:'childmouseenter',parameters:'grid,location'},
		{name:'childmouseleave',parameters:'grid,location'},
		{name:'childsingletap',parameters:'grid,location'},
		{name:'childtap',parameters:'grid,location'},
		{name:'childtaphold',parameters:'grid,location'},
		{name:'childtouchcancel',parameters:'grid,location'},
		{name:'childtouchend',parameters:'grid,location'},
		{name:'childtouchmove',parameters:'grid,location'},
		{name:'childtouchstart',parameters:'grid,location'},
		{name:'columnadd',parameters:'grid,column,index'},
		{name:'columnhide',parameters:'grid,column'},
		{name:'columnmenucreated',parameters:'grid,column,menu'},
		{name:'columnmove',parameters:'grid,column,fromIndex,toIndex'},
		{name:'columnremove',parameters:'grid,column'},
		{name:'columnresize',parameters:'grid,column,width'},
		{name:'columnselection',parameters:'grid,selection'},
		{name:'columnshow',parameters:'grid,column'},
		{name:'columnsort',parameters:'grid,column,direction'},
		{name:'deactivate',parameters:'oldActiveItem,grid,newActiveItem'},
		{name:'deselect',parameters:'grid,records'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'disclose',parameters:'list,record,target,index,event'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'grid,event'},
		{name:'focusenter',parameters:'grid,event'},
		{name:'focusleave',parameters:'grid,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'itemaction',parameters:'grid,index,record,action'},
		{name:'itemdoubletap',parameters:'grid,index,target,record,e'},
		{name:'itemlongpress',parameters:'grid,index,target,record,e'},
		{name:'itemmouseenter',parameters:'grid,index,target,record,e'},
		{name:'itemmouseleave',parameters:'grid,index,target,record,e'},
		{name:'itemsingletap',parameters:'grid,index,target,record,e'},
		{name:'itemswipe',parameters:'grid,index,target,record,e'},
		{name:'itemtap',parameters:'grid,index,target,record,e'},
		{name:'itemtaphold',parameters:'grid,index,target,record,e'},
		{name:'itemtouchcancel',parameters:'grid,index,target,record,e'},
		{name:'itemtouchend',parameters:'grid,index,target,record,e'},
		{name:'itemtouchmove',parameters:'grid,index,target,record,e'},
		{name:'itemtouchstart',parameters:'grid,index,target,record,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'navigate',parameters:'grid,to,from'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'refresh',parameters:'grid'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'sender,container,index'},
		{name:'renderedchange',parameters:'grid,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'grid,selected'},
		{name:'selectionextenderdrag',parameters:'grid,An,extension'},
		{name:'show',parameters:'sender'},
		{name:'storechange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'grid'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeselectionextend',
		'beforeshow',
		'beforestorechange',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'cellselection',
		'centeredchange',
		'childdoubletap',
		'childlongpress',
		'childmouseenter',
		'childmouseleave',
		'childsingletap',
		'childtap',
		'childtaphold',
		'childtouchcancel',
		'childtouchend',
		'childtouchmove',
		'childtouchstart',
		'columnadd',
		'columnhide',
		'columnmenucreated',
		'columnmove',
		'columnremove',
		'columnresize',
		'columnselection',
		'columnshow',
		'columnsort',
		'deactivate',
		'deselect',
		'destroy',
		'disabledchange',
		'disclose',
		'dockedchange',
		'erased',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'itemaction',
		'itemdoubletap',
		'itemlongpress',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchcancel',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'navigate',
		'orientationchange',
		'painted',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'rightchange',
		'scrollablechange',
		'select',
		'selectionextenderdrag',
		'show',
		'storechange',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'grid', 
  inputs: gridMetaData.PROPERTIES,
  outputs: gridMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtGridComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,gridMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(gridMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}