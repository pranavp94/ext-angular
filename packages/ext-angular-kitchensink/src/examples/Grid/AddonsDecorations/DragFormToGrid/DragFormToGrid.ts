declare var Ext: any;
import { Component } from '@angular/core';
import { patientData, hospitalData } from './data';

Ext.require([
    'Ext.plugin.dd.DragZone',
    'Ext.plugin.dd.DropZone'
]);

@Component({
  	selector: 'dragformtogrid-component',
  	templateUrl: './DragFormToGrid.html',
  	styleUrls: [`./FormToGrid.css`]
})

export class DragFormToGridComponent {
	formDataView: any;
	formDataPanel: any;
	parentPanel: any;
	hospitalGrid: any;

	ngAfterViewInit() {
        this.registerDragZone();
        this.registerDropZone();
	}

	parentPanelReady= (parentPanelEle: any) => {
		this.parentPanel = parentPanelEle.ext;
	}
	
	dataViewReady = (dataViewEle: any) => {
		this.formDataView = dataViewEle.ext;
	}

	dataPanelReady = (dataPanelEle: any) => {
		this.formDataPanel = dataPanelEle.ext;
	}

	hospitalGridReady= (hospitalGridEle: any) => {
		this.hospitalGrid = hospitalGridEle.ext;
	}

	registerDragZone = () => {
        let me = this.formDataPanel;
        let patientView = this.formDataView;
        let touchEvents = Ext.supports.Touch && Ext.supports.TouchEvents;

        me.dragZone = Ext.create('Ext.plugin.dd.DragZone', {
            element: patientView.bodyElement,
            handle: '.patient-source',
            view: patientView,  
            $configStrict: false,
            activateOnLongPress: touchEvents ? true : false,
            proxy: {
                cls: 'x-proxy-drag-el patient-proxy-el'
            },

            getDragText: function(info: any) {
                var selector = '.x-dataview-item',
                    el = Ext.fly(info.eventTarget).up(selector);

                return el.dom.innerHTML;
            },

            getDragData: function(e: any) {
                return {
                    patientData: this.view.mapToRecord(e)
                };
            }
        });
    };

    registerDropZone = () => {
        let mainContext = this;
        let me = this.parentPanel;
        let hospitalView =this.hospitalGrid;

        me.dropZone = Ext.create('Ext.plugin.dd.DropZone', {
            element: hospitalView.bodyElement,
            view: hospitalView,
            $configStrict: false,
            prepareNameString: me.prepareNameString,

            onDragMove: function(info: any) {
                let me = this;
                let ddManager = Ext.dd.Manager;
                let targetEl = ddManager.getTargetEl(info);
                let rowBody = Ext.fly(targetEl);
                let isRowBody = rowBody.hasCls('hospital-target');
                let hospital: any;
                let patients: any;
                let name: any;

                if (!isRowBody) {
                    rowBody = Ext.fly(targetEl).parent('.x-rowbody');

                    if (rowBody) {
                        isRowBody = rowBody.hasCls('hospital-target');
                    }
                }

                me.toggleDropMarker(info, false);

                if (!isRowBody) {
                    return;
                }

                hospital = rowBody.component.getRecord();
                patients = hospital.get('patients');
                name = info.data.dragData.patientData.get('name');

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                me.ddEl = rowBody;
                me.toggleDropMarker(info, true);
            },

            onDrop: function(info: any) {
                let me = this;
                let hospital: any;
                let patients: any;
                let name: any;
                let component: any;

                if (!me.ddEl) {
                    return;
                }

                component = me.ddEl.component;
                hospital = component.getRecord();
                patients = hospital.get('patients');
                name = info.data.dragData.patientData.get('name');

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                if (!patients) {
                    patients = [];
                    hospital.set('patients', patients);
                }

                patients.push(name);
                component.contentElement.update(mainContext.prepareNameString(patients));
                me.toggleDropMarker(info, false);
            },

            toggleDropMarker: function(info: any, state: any) {
                let me = this;
                let ddManager: any;

                if (!me.ddEl) {
                    return;
                }

                ddManager = Ext.dd.Manager;
                ddManager.toggleTargetNodeCls(me.ddEl, 'hospital-target-hover', state);
                ddManager.toggleProxyCls(info, me.validDropCls, state);

                if (!state) {
                    me.ddEl = null;
                }
            }
        });
    };

    prepareNameString = (values: any) => {
        let str = '';
        let i = 0;
        let ln = values.length;

        for (; i < ln; i++) {
            str += [
                '<div class="name-tag x-tooltiptool">',
                '<span>', values[i], '</span>',
                '<span index="', i,
                '" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span></div>'
            ].join('');
        }

        return (str || 'Drop patients here');
    };

    onRemoveTapped = (e: any, target: any) => {
        let mainContext = this;
        let me = this;
        let patientIndex = +target.getAttribute('index');
        let rowBody = Ext.Component.from(target);
        let record = rowBody.getRecord();
        let patients = record.get('patients');

        if (patientIndex === -1) {
            return;
        }

        patients = Ext.Array.removeAt(patients, patientIndex, 0);
        rowBody.contentElement.update(mainContext.prepareNameString(patients));

        if (!patients.length) {
            record.set('patients', null);
        }
    };

    destroy = function() {
        let me = this;

        me.dragZone = me.dropZone = Ext.destroy(me.dragZone, me.dragZone);
        me.callParent();
    };

	patientStore = Ext.create('Ext.data.Store', {
        fields: ['name', 'address', 'telephone'],
        data: patientData
    });

	hospitalStore = Ext.create('Ext.data.Store', {
		fields: ['name', 'address', 'telephone', 'patients'],
		data: hospitalData
	});

	patientTpl = ` <tpl for=".">
		<div class="patient-source">
			<table>
				<tbody>
					<tr><td class="patient-label">Name</td><td class="patient-name">{name}</td></tr>
					<tr><td class="patient-label">Address</td><td class="patient-name">{address}</td></tr>
					<tr><td class="patient-label">Telephone</td><td class="patient-name">{telephone}</td></tr>
				</tbody>
			</table>
		</div>
	</tpl>`;

	hospitalTpl = `<tpl if="patients">
        <tpl for="patients">
            <div class="name-tag x-tooltiptool">
	            <span>{[values]}</span>
	            <span index="{[xindex - 1]}" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span>
            </div>
        </tpl>
        <tpl else>
        	<div class="empty-txt">Drop patients here</div>
    </tpl>`;
}