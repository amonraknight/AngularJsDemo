import { Component, OnInit} from '@angular/core';
import { NgFlowchartStepComponent, NgFlowchart } from '@joelwenzel/ng-flowchart';

@Component({
  selector: 'app-process-step',
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.css']
})
export class ProcessStepComponent extends NgFlowchartStepComponent implements OnInit {

  showModal = false;
  showChat = false;
  stepClass = "process-step";
  stepClassNoFocus = "process-step";
  stepClassFocused = "process-step-focused";


  override ngOnInit(): void {
    
  }


  override canDrop(dropEvent: NgFlowchart.DropTarget): boolean {
    return true;
  }

  delete(): void {
    //recursively delete
    this.destroy(false);
  }

  

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

  setFocus(): void {
    this._removeAllFocus();
    this.data.focused = !this.data.focused
    
  }
  //Remove all focus before setting the focus
  _removeAllFocus(): void {
    //console.log(this.canvas);

    let currentStep = this.canvas.flow.rootStep;
    this._removeFocusCascade(currentStep);

  }

  _removeFocusCascade(currentStep: NgFlowchartStepComponent): void {
    currentStep.data.focused = false;
    if(currentStep.children) {
      currentStep.children.map(eachChild => {
        this._removeFocusCascade(eachChild);
      });
      
    }
    
  }

}
