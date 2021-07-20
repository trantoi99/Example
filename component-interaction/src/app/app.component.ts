import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-interaction';
  public isMarried: boolean = false;
  public age: number = 18;

  public txtEmail: string;

  public village: string = 'Ly Nhan';

  public users: any[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      national: 'Viet Nam',
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      national: 'Viet Nam',
    },
    {
      id: 3,
      name: 'Nguyễn Văn C',
      national: 'Viet Nam',
    },
    {
      id: 4,
      name: 'Nguyễn Văn D',
      national: 'Viet Nam',
    },
    {
      id: 5,
      name: 'Nguyễn Văn F',
      national: 'Viet Nam',
    },
  ];
  onGetEmail(value) {
    this.txtEmail = value;
  }
}
