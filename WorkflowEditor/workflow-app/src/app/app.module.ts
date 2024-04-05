import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorCanvasComponent } from './editor-canvas/editor-canvas.component';
import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';

@NgModule({
  declarations: [
    AppComponent,
    EditorCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFlowchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
