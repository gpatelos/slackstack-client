import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StackpostService } from './service/stackpost.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StackpostComponent } from './stackpost/stackpost.component';
import { StackpostDetailComponent } from './stackpost-detail/stackpost-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StackpostComponent,
    StackpostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StackpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
