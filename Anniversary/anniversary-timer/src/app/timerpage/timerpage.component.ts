import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { Subscription, interval, Observable } from 'rxjs'

@Component({
  selector: 'app-timerpage',
  templateUrl: './timerpage.component.html',
  styleUrls: ['./timerpage.component.css']
})
export class TimerpageComponent implements OnInit {

  constructor() { }
  today: number | undefined;
  startingDate: number | undefined;
  differenceYear: number | undefined;
  differenceMonth: number | undefined;
  differenceDay: number | undefined;
  differenceHours: number | undefined;
  differenceMinutes: number | undefined;
  differenceSeconds: number | undefined;

  private updateSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.updateSubscription = interval(1000).subscribe(
      (val) => {this.renewcount()}
    )
    
  }

  renewcount(): void {
    this.today = Date.now();
    this.startingDate = Date.parse('2017-12-26 20:00:00');
    this.differenceYear = moment(this.today).diff(moment(this.startingDate), 'years');
    this.differenceMonth = moment(this.today).subtract(this.differenceYear, 'years').diff(moment(this.startingDate), 'months');
    this.differenceDay = moment(this.today).subtract(this.differenceYear, 'years').subtract(this.differenceMonth, 'months').diff(moment(this.startingDate), 'days');
    this.differenceHours = moment(this.today).subtract(this.differenceYear, 'years').subtract(this.differenceMonth, 'months').subtract(this.differenceDay, 'days').diff(moment(this.startingDate), 'hours');
    this.differenceMinutes = moment(this.today).subtract(this.differenceYear, 'years').subtract(this.differenceMonth, 'months').subtract(this.differenceDay, 'days').subtract(this.differenceHours, 'hours').diff(moment(this.startingDate), 'minutes');
    this.differenceSeconds = moment(this.today).subtract(this.differenceYear, 'years').subtract(this.differenceMonth, 'months').subtract(this.differenceDay, 'days').subtract(this.differenceHours, 'hours').subtract(this.differenceMinutes, 'minutes').diff(moment(this.startingDate), 'seconds');
  }

  
  
  
}
