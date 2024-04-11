import { Component, OnInit} from '@angular/core';
import { NgFlowchartStepComponent, NgFlowchart } from '@joelwenzel/ng-flowchart';

@Component({
  selector: 'app-process-step',
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.css']
})
export class ProcessStepComponent extends NgFlowchartStepComponent implements OnInit {

  override ngOnInit(): void {
    
  }


  override canDrop(dropEvent: NgFlowchart.DropTarget): boolean {
    return true;
  }

  delete(): void {
    //recursively delete
    this.destroy(false);
  }

  showModal = false
  showChat = false

  openModal(): void {
    this.showModal = true
  }

  closeModal(): void {
    this.showModal = false
    // console.log(this.parent)
  }

  openChat(): void {
    this.showChat = true
  }

  closeChat(): void {
    this.showChat = false
  }

}
