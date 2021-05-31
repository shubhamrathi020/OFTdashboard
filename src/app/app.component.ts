import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'OFTDashboard';

  max1 = 300000;
  min1 = 100000;
  max2 = 100000;
  min2 = 10000;
  step = 1;
  value1 = 0;
  value2 = 0;
  
  months: any[] = [
    {value: '3 Months', viewValue: '3 Months'},
    {value: '6 Months', viewValue: '6 Months'},
    {value: '9 Months', viewValue: '9 Months'}
  ];
}
