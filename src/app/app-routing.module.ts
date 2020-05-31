import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'doble-click',
    loadChildren: () => import('./pages/doble-click/doble-click.module').then( m => m.DobleClickPageModule)
  },
  {
    path: 'on-pressed',
    loadChildren: () => import('./pages/on-pressed/on-pressed.module').then( m => m.OnPressedPageModule)
  },
  {
    path: 'swipe',
    loadChildren: () => import('./pages/swipe/swipe.module').then( m => m.SwipePageModule)
  },
  {
    path: 'slide-drawer',
    loadChildren: () => import('./pages/slide-drawer/slide-drawer.module').then( m => m.SlideDrawerPageModule)
  },
  {
    path: 'pinch',
    loadChildren: () => import('./pages/pinch/pinch.module').then( m => m.PinchPageModule)
  },
  {
    path: 'drag-drop',
    loadChildren: () => import('./pages/drag-drop/drag-drop.module').then( m => m.DragDropPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
