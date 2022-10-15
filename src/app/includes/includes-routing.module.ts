import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AccessRoutingModule} from '../access/access-routing.module'
const routes: Routes = [
  {
    path:'new-user',
    loadChildren:()=>
      import('../access/access-routing.module').then((m)=>m.AccessRoutingModule)
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncludesRoutingModule { }
