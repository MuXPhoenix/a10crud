import { Component, OnInit } from '@angular/core';
import { IWarehouseAPI, IWarehouseElement, State } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor(private warehouseService : WarehouseService) { }
    public stateEnum = State
    public istate = this.stateEnum.wxf
    warehouseAPI: IWarehouseAPI = {
    errcode: 1,
    errmsg: '',
    warehouse: [{
      id: 1,
      date: '',
      name: '',
      state: this.istate
    }]

  };



  warehouse: IWarehouseElement[] = this.warehouseAPI.warehouse
  ngOnInit(): void {
    this.getWarehouseAll();
  }
  getWarehouseAll(): void {
    this.warehouseService.getWarehouseAll()
      .subscribe(x => { this.warehouseAPI = x;
        this.warehouse = this.warehouseAPI.warehouse;
        console.log(this.warehouse[0])});
  }


}
