// Generated by https://quicktype.io

export interface IWarehouseAPI {
    errcode:   number;
    errmsg:    string;
    warehouse: IWarehouseElement[];
}

export interface IWarehouseElement {
    id:    number;
    date:  string;
    name:  string;
    state: State;
}

export enum State {
    yxf = "已下发",
    wxf = "未下发",
}