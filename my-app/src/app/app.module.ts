import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './component/game/game.component';
import { MylibModule } from 'mylib';
import { ChildComponent } from './component/child/child.component';
import { PartentComponent } from './component/partent/partent.component';
import { ValueaccessorComponent } from './component/valueaccessor/valueaccessor.component';
import { HelloComponent } from './component/hello/hello.component';
import { DynamicComponent } from './component/dynamic/dynamic.component';
import { MultioutletsComponent } from './component/multioutlets/multioutlets.component';
import { ChildrouterComponent } from './component/childrouter/childrouter.component';
import { HttpServiceImpl } from './service/httpimpl.sevice';
import { HttpService } from './service/http.service';
import { HttpComponent } from './component/http/http.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ChildComponent,
    PartentComponent,
    ValueaccessorComponent,
    HelloComponent,
    DynamicComponent,
    MultioutletsComponent,
    ChildrouterComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MylibModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HttpService, useClass: HttpServiceImpl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
