import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../commonutil/apivisitor.service';
import { Config } from '../interfaces/config'
import { Payment } from '../interfaces/payment'

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [ ConfigService ]
})

export class Comp1Component implements OnInit {

  config: Config | undefined;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

  showConfig() {
    console.debug("Button click!")
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }

}
