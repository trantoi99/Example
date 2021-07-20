import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// output va eventemiitter de gui du lieu tu conponent con sang cha
// input de nhan du lieu tu cha sang con
@Component({
  selector: 'children',
  templateUrl: './clild-component.component.html',
  styleUrls: ['./clild-component.component.css'],
})
export class ClildComponentComponent implements OnInit {
  constructor() {}

  public txtEmail: string = '';
  // private _name: string;
  ngOnInit(): void {}

  // khai bao input
  @Input('married') isMarried: boolean = false;
  @Input('age') age: number;
  @Input('village') village: string;

  // @Input() set name(name: string) {
  //   this._name = name;
  // }

  // get name() {
  //   return this._name;
  // }

  @Output('txtEmail')
  onHandleEmail = new EventEmitter<any>();

  onSubmitForm() {
    // emit dung de gui du lieu ra ngoai
    this.onHandleEmail.emit(this.txtEmail);
  }
}
