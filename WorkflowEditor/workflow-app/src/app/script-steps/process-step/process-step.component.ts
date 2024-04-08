import { Component, OnInit } from '@angular/core';
import { NgFlowchartStepComponent, NgFlowchart } from '@joelwenzel/ng-flowchart';

@Component({
  selector: 'app-process-step',
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.css']
})
export class ProcessStepComponent extends NgFlowchartStepComponent implements OnInit {
  override ngOnInit(): void {}

  override canDrop(dropEvent: NgFlowchart.DropTarget): boolean {
    return true;
  }

  delete() {
    //recursively delete
    this.destroy(false);
  }

}
