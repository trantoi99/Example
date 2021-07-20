import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../app/server-http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'covid19';
  public globalData: any[] = [];

  constructor(private serverHttp: ServerHttpService) {}

  ngOnInit(): void {
    this.serverHttp.getSummary().subscribe((data) => {
      console.log(data);
      this.globalData = data.Global;
    });
  }
}
