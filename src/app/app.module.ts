import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import {RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { TodoComponent } from './day2/todo/todo.component';
import { FamilyComponent } from './family/family/family.component';
import { SortPipePipe } from './my-pipes/sort-pipe.pipe';
import { TemplateformComponent } from './forms/template/templateform/templateform.component';
import { ModelformComponent } from './forms/template/modelform/modelform.component';
import { AutoSearchComponent } from './search/auto-search/auto-search.component';
import { SearchFilterPipe } from './my-pipes/search-filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConsumeLocalServiceComponent } from './consume/consume-local-service/consume-local-service.component';
import { LocalserviceService } from './myservices/localservice.service';
import { ConsumeLocalService2Component } from './consume/consume-local-service2/consume-local-service2.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsumeRemoteServiceComponent } from './consume/consume-remote-service/consume-remote-service.component'
import { RemoteserviceService } from './myservices/remoteservice.service';
import { BasicanimationComponent } from './animation/basicanimation/basicanimation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { InbuiltdirectiveComponent } from './directive/inbuiltdirective/inbuiltdirective.component';
import { SetbgDirective } from './custom-directive/setbg.directive';
import { UseDirectiveComponent } from './custom-directive/use-directive/use-directive.component'
import { myRoutes } from './myroutes/routes.module';
import { AssignmentComponent } from './assignment/assignment/assignment.component';
import { AddProductComponent } from './assignment/add-product/add-product.component';
import { UpdateProductComponent } from './assignment/update-product/update-product.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    TodoComponent,
    FamilyComponent,
    SortPipePipe,
    TemplateformComponent,
    ModelformComponent,
    AutoSearchComponent,
    SearchFilterPipe,
    ConsumeLocalServiceComponent,
    ConsumeLocalService2Component,
    ConsumeRemoteServiceComponent,
    BasicanimationComponent,
    ParentComponent,
    ChildComponent,
    NotFoundComponent,
    InbuiltdirectiveComponent,
    SetbgDirective, 
    UseDirectiveComponent, AssignmentComponent, AddProductComponent, UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [LocalserviceService,RemoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
