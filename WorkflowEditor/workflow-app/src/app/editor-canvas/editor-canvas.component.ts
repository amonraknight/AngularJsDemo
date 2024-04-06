import { AfterViewInit, Component, TemplateRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgFlowchart, NgFlowchartStepRegistry, NgFlowchartCanvasDirective } from '@joelwenzel/ng-flowchart';
import { CustomStepComponent } from '../custom-step/custom-step.component';
import { RouteStepComponent } from '../custom-step/route-step/route-step.component';
import { FormStepComponent } from '../form-step/form-step.component';
import { NestedFlowComponent } from '../nested-flow/nested-flow.component';

@Component({
  selector: 'app-editor-canvas',
  templateUrl: './editor-canvas.component.html',
  styleUrls: ['./editor-canvas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditorCanvasComponent implements AfterViewInit {
  
  callbacks: NgFlowchart.Callbacks = {};
  options: NgFlowchart.Options = {
    stepGap: 40,
    rootPosition: 'TOP_CENTER',
    zoom: {
      mode: 'WHEEL',
      skipRender: true,
    },
    dragScroll: ['RIGHT', 'MIDDLE'],
    orientation: 'VERTICAL',
    manualConnectors: true,
  };

  @ViewChild('normalStep')
  normalStepTemplate!: TemplateRef<any>;

  sampleJson = '{"root":{"id":"s1674421266194","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[{"id":"s1674421267975","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[{"id":"s1674421269738","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[]}]},{"id":"s1674421268826","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[]}]},"connectors":[{"startStepId":"s1674421269738","endStepId":"s1674421268826"}]}';

  items = [
    {
      name: 'Logger',
      type: 'log',
      data: {
        name: 'Log',
        icon: { name: 'log-icon', color: 'blue' },
        config: {
          message: null,
          severity: null,
        },
      },
    },
  ];

  customOps = [
    {
      paletteName: 'Router',
      step: {
        template: CustomStepComponent,
        type: 'router',
        data: {
          name: 'Routing Block',
        },
      },
    },
    {
      paletteName: 'Form Step',
      step: {
        template: FormStepComponent,
        type: 'form-step',
        data: '123',
      },
    },
    {
      paletteName: 'Nested Flow',
      step: {
        template: NestedFlowComponent,
        type: 'nested-flow',
        data: {
          name: 'Nested Flow',
        },
      },
    },
  ];

  @ViewChild(NgFlowchartCanvasDirective)
  canvas: NgFlowchartCanvasDirective | undefined;

  disabled = false;

  ngAfterViewInit() {
    // this.stepRegistry.registerStep('rest-get', this.normalStepTemplate);
    this.stepRegistry.registerStep('log', this.normalStepTemplate);
    this.stepRegistry.registerStep('router', CustomStepComponent);
    this.stepRegistry.registerStep('nested-flow', NestedFlowComponent);
    this.stepRegistry.registerStep('form-step', FormStepComponent);
    this.stepRegistry.registerStep('route-step', RouteStepComponent);
    this.showUpload();
  }

  constructor(private stepRegistry: NgFlowchartStepRegistry) {
    this.callbacks.onDropError = this.onDropError;
    this.callbacks.onMoveError = this.onMoveError;
    this.callbacks.afterDeleteStep = this.afterDeleteStep;
    this.callbacks.beforeDeleteStep = this.beforeDeleteStep;
    this.callbacks.onLinkConnector = this.onLinkConnector;
    this.callbacks.afterDeleteConnector = this.afterDeleteConnector;
    this.callbacks.afterScale = this.afterScale.bind(this);
  }

  onDropError(error: NgFlowchart.DropError): void {
    console.log(error);
  }

  onMoveError(error: NgFlowchart.MoveError): void {
    console.log(error);
  }

  beforeDeleteStep(step: any): void {
    console.log(JSON.stringify(step.children));
  }

  afterDeleteStep(step: any): void {
    console.log(JSON.stringify(step.children));
  }

  onLinkConnector(conn: any): void {
    console.log(conn);
  }

  afterDeleteConnector(conn: any): void {
    console.log(conn);
  }

  afterScale(scale: number): void {
    if (this.canvas) {
      //realistically you want to recursively get all steps in canvas
      const firstSetOfChildren = this.canvas.getFlow().getRoot().children;
      firstSetOfChildren.forEach(step => {
        if (step instanceof NestedFlowComponent) {
          step.nestedCanvas?.setNestedScale(scale);
        }
      });
    }
    
  }

  showUpload(): void {
    this.canvas?.getFlow().upload(this.sampleJson);
  }

  showFlowData(): void {
    let json = this.canvas?.getFlow().toJSON(4);

    var x = window.open();
    x?.document.open();
    x?.document.write(
      '<html><head><title>Flowchart Json</title></head><body><pre>' +
        json +
        '</pre></body></html>'
    );
    x?.document.close();
  }

  clearData(): void {
    this.canvas?.getFlow().clear();
  }

  onGapChanged(selectValue: string): void {
    this.options = {
      ...this.canvas?.options,
      stepGap: parseInt(selectValue),
    };
  }

  onSequentialChange(inputValue: boolean): void {
    this.options = {
      ...this.canvas?.options,
      isSequential: inputValue
    };
  }

  onOrientationChange(inputValue: boolean): void{
    this.canvas?.setOrientation(
      inputValue ? 'HORIZONTAL' : 'VERTICAL'
    );
  }

  onDelete(id: any) {
    this.canvas?.getFlow().getStep(id).destroy(true);
  }
  onGrow(): void {
    this.canvas?.scaleUp();
  }
  onShrink(): void  {
    this.canvas?.scaleDown();
  }
  onReset(): void {
    this.canvas?.setScale(1);
  }
}


