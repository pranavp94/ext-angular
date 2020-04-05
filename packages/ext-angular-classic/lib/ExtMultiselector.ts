//import EWCMultiselector from '../dist/ext-multiselector.component.js';
//inputs: (new EWCMultiselector()).properties,
//import EWCMultiselector from '@sencha/ext-web-components-classic/dist/ext-multiselector.component.js';
import { EWCMultiselector } from '@sencha/ext-web-components-classic';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './common/angularbase';

@Component({
    selector: 'ExtMultiselector',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','addToolText','alignOnScroll','alignTarget','allowDeselect','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoLoad','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','bufferedRenderer','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnLines','columns','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','deferRowRender','detachOnRemove','disabled','disabledCls','disableSelection','dock','dockedItems','draggable','emptyText','enableColumnHide','enableColumnMove','enableColumnResize','enableLocking','expandToolText','fbar','features','fieldName','fieldTitle','fixed','flex','floatable','floating','focusableContainer','focusCls','focused','focusOnToFront','forceFit','formBind','frame','frameHeader','glyph','header','headerBorders','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideHeaders','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','leadingBufferZone','liquidLayout','listeners','liveDrag','loader','lockedGridConfig','lockedViewConfig','lockText','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','multiColumnSort','undefined','nameable','nameHolder','normalGridConfig','normalViewConfig','numFromEdge','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','preciseHeight','undefined','publishes','rbar','reference','referenceHolder','region','removeRowText','removeRowTip','renderConfig','renderData','undefined','renderTo','renderTpl','reserveScrollbar','resetFocusPosition','resizable','resizeHandles','rowLines','rowViewModel','saveDelay','undefined','scrollable','sealedColumns','search','selection','selModel','undefined','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','undefined','sortableColumns','split','stateEvents','stateful','stateId','store','style','subGridXType','suspendLayout','syncRowHeight','tabGuard','tabIndex','tbar','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','trailingBufferZone','twoWayBindable','ui','uiCls','unlockText','userCls','undefined','view','viewConfig','viewModel','viewType','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforecellclick','beforecellcontextmenu','beforecelldblclick','beforecellkeydown','beforecellmousedown','beforecellmouseup','beforeclose','beforecollapse','beforecontainerclick','beforecontainercontextmenu','beforecontainerdblclick','beforecontainerkeydown','beforecontainerkeypress','beforecontainerkeyup','beforecontainermousedown','beforecontainermouseout','beforecontainermouseover','beforecontainermouseup','beforedeactivate','beforedeselect','beforedestroy','beforeexpand','beforehide','beforeitemclick','beforeitemcontextmenu','beforeitemdblclick','beforeitemkeydown','beforeitemkeypress','beforeitemkeyup','beforeitemlongpress','beforeitemmousedown','beforeitemmouseenter','beforeitemmouseleave','beforeitemmouseup','beforeload','beforereconfigure','beforeremove','beforerender','beforerowbodyclick','beforerowbodycontextmenu','beforerowbodydblclick','beforerowbodykeydown','beforerowbodykeypress','beforerowbodykeyup','beforerowbodylongpress','beforerowbodymousedown','beforerowbodymouseup','beforerowexit','beforeselect','beforeselectionextend','beforeshow','beforestaterestore','beforestatesave','blur','boxready','cellclick','cellcontextmenu','celldblclick','cellkeydown','cellmousedown','cellmouseup','childmove','close','collapse','columnhide','columnmove','columnresize','columnschanged','columnshow','containerclick','containercontextmenu','containerdblclick','containerkeydown','containerkeypress','containerkeyup','containermousedown','containermouseout','containermouseover','containermouseup','deactivate','deselect','destroy','disable','dockedadd','dockedremove','enable','expand','filteractivate','filterchange','filterdeactivate','float','focus','focusenter','focusleave','glyphchange','groupchange','headerclick','headercontextmenu','headermenucreate','headertriggerclick','hide','iconalignchange','iconchange','iconclschange','itemclick','itemcontextmenu','itemdblclick','itemkeydown','itemkeypress','itemkeyup','itemlongpress','itemmousedown','itemmouseenter','itemmouseleave','itemmouseup','load','lockcolumn','move','processcolumns','reconfigure','remove','removed','render','resize','rowbodyclick','rowbodycontextmenu','rowbodydblclick','rowbodykeydown','rowbodykeypress','rowbodykeyup','rowbodylongpress','rowbodymousedown','rowbodymouseup','rowclick','rowcontextmenu','rowdblclick','rowkeydown','rowmousedown','rowmouseup','select','selectionchange','selectionextenderdrag','show','sortchange','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat','unlockcolumn','viewready',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMultiselectorComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtMultiselectorComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','addToolText','alignOnScroll','alignTarget','allowDeselect','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoLoad','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','bufferedRenderer','buttonAlign','buttons','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnLines','columns','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultFocus','defaultListenerScope','defaults','defaultType','deferRowRender','detachOnRemove','disabled','disabledCls','disableSelection','dock','dockedItems','draggable','emptyText','enableColumnHide','enableColumnMove','enableColumnResize','enableLocking','expandToolText','fbar','features','fieldName','fieldTitle','fixed','flex','floatable','floating','focusableContainer','focusCls','focused','focusOnToFront','forceFit','formBind','frame','frameHeader','glyph','header','headerBorders','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideHeaders','hideMode','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','leadingBufferZone','liquidLayout','listeners','liveDrag','loader','lockedGridConfig','lockedViewConfig','lockText','maintainTitlePosition','manageHeight','margin','maskDefaults','maskElement','maxHeight','maxWidth','minButtonWidth','minHeight','minWidth','modal','modelValidation','multiColumnSort','undefined','nameable','nameHolder','normalGridConfig','normalViewConfig','numFromEdge','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plugins','preciseHeight','undefined','publishes','rbar','reference','referenceHolder','region','removeRowText','removeRowTip','renderConfig','renderData','undefined','renderTo','renderTpl','reserveScrollbar','resetFocusPosition','resizable','resizeHandles','rowLines','rowViewModel','saveDelay','undefined','scrollable','sealedColumns','search','selection','selModel','undefined','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','undefined','sortableColumns','split','stateEvents','stateful','stateId','store','style','subGridXType','suspendLayout','syncRowHeight','tabGuard','tabIndex','tbar','title','titleAlign','titleCollapse','titlePosition','titleRotation','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','trailingBufferZone','twoWayBindable','ui','uiCls','unlockText','userCls','undefined','view','viewConfig','viewModel','viewType','weight','width','xtype',],
            (new EWCMultiselector()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforecellclick','beforecellcontextmenu','beforecelldblclick','beforecellkeydown','beforecellmousedown','beforecellmouseup','beforeclose','beforecollapse','beforecontainerclick','beforecontainercontextmenu','beforecontainerdblclick','beforecontainerkeydown','beforecontainerkeypress','beforecontainerkeyup','beforecontainermousedown','beforecontainermouseout','beforecontainermouseover','beforecontainermouseup','beforedeactivate','beforedeselect','beforedestroy','beforeexpand','beforehide','beforeitemclick','beforeitemcontextmenu','beforeitemdblclick','beforeitemkeydown','beforeitemkeypress','beforeitemkeyup','beforeitemlongpress','beforeitemmousedown','beforeitemmouseenter','beforeitemmouseleave','beforeitemmouseup','beforeload','beforereconfigure','beforeremove','beforerender','beforerowbodyclick','beforerowbodycontextmenu','beforerowbodydblclick','beforerowbodykeydown','beforerowbodykeypress','beforerowbodykeyup','beforerowbodylongpress','beforerowbodymousedown','beforerowbodymouseup','beforerowexit','beforeselect','beforeselectionextend','beforeshow','beforestaterestore','beforestatesave','blur','boxready','cellclick','cellcontextmenu','celldblclick','cellkeydown','cellmousedown','cellmouseup','childmove','close','collapse','columnhide','columnmove','columnresize','columnschanged','columnshow','containerclick','containercontextmenu','containerdblclick','containerkeydown','containerkeypress','containerkeyup','containermousedown','containermouseout','containermouseover','containermouseup','deactivate','deselect','destroy','disable','dockedadd','dockedremove','enable','expand','filteractivate','filterchange','filterdeactivate','float','focus','focusenter','focusleave','glyphchange','groupchange','headerclick','headercontextmenu','headermenucreate','headertriggerclick','hide','iconalignchange','iconchange','iconclschange','itemclick','itemcontextmenu','itemdblclick','itemkeydown','itemkeypress','itemkeyup','itemlongpress','itemmousedown','itemmouseenter','itemmouseleave','itemmouseup','load','lockcolumn','move','processcolumns','reconfigure','remove','removed','render','resize','rowbodyclick','rowbodycontextmenu','rowbodydblclick','rowbodykeydown','rowbodykeypress','rowbodykeyup','rowbodylongpress','rowbodymousedown','rowbodymouseup','rowclick','rowcontextmenu','rowdblclick','rowkeydown','rowmousedown','rowmouseup','select','selectionchange','selectionextenderdrag','show','sortchange','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat','unlockcolumn','viewready',],
            vc
        )
        this.xtype = 'multiselector'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCMultiselector()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
