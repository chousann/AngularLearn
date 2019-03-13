import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './component/game/game.component';
import { PartentComponent } from './component/partent/partent.component';
import { ValueaccessorComponent } from './component/valueaccessor/valueaccessor.component';
import { HelloComponent } from './component/hello/hello.component';
import { DynamicComponent } from './component/dynamic/dynamic.component';
import { MultioutletsComponent } from './component/multioutlets/multioutlets.component';
import { ChildrouterComponent } from './component/childrouter/childrouter.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'valueaccessor', component: ValueaccessorComponent },
  { path: 'partent', component: PartentComponent },
  { path: 'dynamic', component: DynamicComponent },
  {
    path: 'childrouter', component: ChildrouterComponent,
    children: [
      {
        path: 'child',
        component: HelloComponent
      }
    ]
  },
  { path: 'game', component: GameComponent },
  {
    path: 'multioutlets', component: MultioutletsComponent,
    children: [
      {
        path: '', outlet: 'let1',
        component: HelloComponent
      },
      {
        path: '', outlet: 'let2',
        component: GameComponent
      },
      {
        path: 'let', outlet: 'let1',
        component: GameComponent
      },
      {
        path: 'let', outlet: 'let2',
        component: HelloComponent
      }
    ]
  },
  { path: 'lazy', loadChildren: './lazyload-module/lazyload-module.module#LazyloadModuleModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
