import { Routes } from "@angular/router";
import { TodoComponent } from "../day2/todo/todo.component";
import { TemplateformComponent } from "../forms/template/templateform/templateform.component";
import { ModelformComponent } from "../forms/template/modelform/modelform.component";
import { AutoSearchComponent } from "../search/auto-search/auto-search.component";
import { ConsumeLocalServiceComponent } from "../consume/consume-local-service/consume-local-service.component";
import { ConsumeLocalService2Component } from "../consume/consume-local-service2/consume-local-service2.component";
import { ConsumeRemoteServiceComponent } from "../consume/consume-remote-service/consume-remote-service.component";
import { BasicanimationComponent } from "../animation/basicanimation/basicanimation.component";
import { FamilyComponent } from "../family/family/family.component";
import { FatherComponent } from "../family/father/father.component";
import { MotherComponent } from "../family/mother/mother.component";
import { DaughterComponent } from "../family/daughter/daughter.component";
import { SonComponent } from "../family/son/son.component";
import { InbuiltdirectiveComponent } from "../directive/inbuiltdirective/inbuiltdirective.component";
import { ParentComponent } from "../parent-child/parent/parent.component";
import { UseDirectiveComponent } from "../custom-directive/use-directive/use-directive.component";
import { NotFoundComponent } from "../not-found/not-found/not-found.component";
import { AssignmentComponent } from "../assignment/assignment/assignment.component";
import { AddProductComponent } from "../assignment/add-product/add-product.component";
import { UpdateProductComponent } from "../assignment/update-product/update-product.component";

export const myRoutes: Routes = [
  
    {
      path:'',
      redirectTo:'todo',
      pathMatch:'full'
    },
       {
         path:'todo',
         component:TodoComponent
         },
         {
           path:'template',
           component:TemplateformComponent
         },
         {
           path:'model',
           component:ModelformComponent
         },
         {
            path:'searchfilter',
            component:AutoSearchComponent 
         },
         {
           path:'services',
           component:ConsumeLocalServiceComponent
         },
         {
           path:'services2',
           component:ConsumeLocalService2Component
         },
         {
           path:'remoteService',
           component:ConsumeRemoteServiceComponent
         },
         {
           path:'animation',
           component:BasicanimationComponent
         },{
           path:'family',
           component:FamilyComponent,
           children: [
             { path: 'father', component: FatherComponent },
             { path: 'mother', component: MotherComponent },
             { path: 'daughter', component: DaughterComponent },
             { path: 'son', component: SonComponent }
           ]
         },
         {
           path:'directive',
           component:InbuiltdirectiveComponent
         },
         {
           path:'eventBinding',
           component:ParentComponent
         },
         {
           path:'customDirective',
           component:UseDirectiveComponent
         },
         {
           path:'assignment',
           component:AssignmentComponent
         },{
           path:'addProduct',
           component:AddProductComponent
         },{
           path:'updateProduct/:id',
           component:UpdateProductComponent
         }
         ,{
           path:'**',
           component:NotFoundComponent
         }
         
]