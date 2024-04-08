import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorCanvasComponent } from './editor-canvas/editor-canvas.component';
import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';
import { CustomStepComponent } from './custom-step/custom-step.component';
import { FormStepComponent } from './form-step/form-step.component';
import { NestedFlowComponent } from './nested-flow/nested-flow.component';
import { RouteStepComponent } from './custom-step/route-step/route-step.component';
import { ProcessStepComponent } from './script-steps/process-step/process-step.component';
import { ConditionalRedirectStepComponent } from './script-steps/conditional-redirect-step/conditional-redirect-step.component';
import { RepeatStepComponent } from './script-steps/repeat-step/repeat-step.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import 'node_modules/codemirror/mode/python/python'


@NgModule({
  declarations: [
    AppComponent,
    EditorCanvasComponent,
    CustomStepComponent,
    FormStepComponent,
    NestedFlowComponent,
    RouteStepComponent,
    ProcessStepComponent,
    ConditionalRedirectStepComponent,
    RepeatStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFlowchartModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
