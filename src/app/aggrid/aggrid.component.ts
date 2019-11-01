import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.scss']
})
export class AggridComponent implements OnInit {
  @ViewChild('agModal', {static:false}) agModal
  @ViewChild('agConfirm', {static:false}) agConfirm

  gridParams
  selectedRowData
  modify: boolean = true
  modalRef: BsModalRef;
  message: string;

  colDefs = [
    { headerName: 'Tên', field: 'name' },
    { headerName: 'Tuổi', field: 'age' },
    { headerName: 'Địa chỉ', field: 'location' }
  ]

  rowData = [
    { name: 'Nguyen Van A', age: '15', location: 'HN' },
    { name: 'Nguyen Van B', age: '12', location: 'HP' },
    { name: 'Nguyen Van C', age: '18', location: 'BN' },
    { name: 'Nguyen Van D', age: '22', location: 'DN' },
    { name: 'Nguyen Van E', age: '10', location: 'HCM' },
  ]

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  onSelectionChanged(params) {
    this.gridParams = params;
    this.getSelectedRow();
  }


getSelectedRow() {
  const selectData = this.gridParams.api.getSelectedRows();
  if (selectData) {
    this.selectedRowData = selectData[0]
  }
}

  doubleClick() {
    this.agModal.open(this.selectedRowData)
  }

  add() {
    if (this.selectedRowData) {
      this.agModal.open(this.selectedRowData, this.modify);
    } 
  }

  update() {
    if (this.selectedRowData) {
      this.agModal.open(this.selectedRowData, !this.modify);
    } 
  }

  del() {
    if (this.selectedRowData) {
      this.agConfirm.open(this.selectedRowData);
    } 
  }
}
