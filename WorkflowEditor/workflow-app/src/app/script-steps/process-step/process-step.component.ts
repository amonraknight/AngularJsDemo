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
    //console.log(this.parent)
  }

  openChat(): void {
    this.showChat = true
  }

  closeChat(): void {
    this.showChat = false
  }

  renewScript(script: string): void {
    this.data.pythonCode = script;
  }

  //traverse the upstream parents to get the scripts
  getPredecessorScripts(step: number): string[] {
    let scripts: string[] = [];

    let eachParent = this.parent;
    for(let i=0; eachParent && i<step; i++) {
      scripts.push(eachParent.data.pythonCode);
      eachParent = eachParent.parent;
    } 
    return scripts;
  }

}
