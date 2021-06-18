import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'teacher',
    loadChildren: () => import('./pages/teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'mis-clases',
    loadChildren: () => import('./pages/mis-clases/mis-clases.module').then( m => m.MisClasesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
    
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'pop1',
    loadChildren: () => import('./components/pop1/pop1.module').then( m => m.Pop1PageModule)
  },
  {
    path: 'pop2',
    loadChildren: () => import('./components/pop2/pop2.module').then( m => m.Pop2PageModule)
  },
  {
    path: 'pop3',
    loadChildren: () => import('./components/pop3/pop3.module').then( m => m.Pop3PageModule)
  },
  {
    path: 'pop4',
    loadChildren: () => import('./components/pop4/pop4.module').then( m => m.Pop4PageModule)
  },
  {
    path: 'pop5',
    loadChildren: () => import('./components/pop5/pop5.module').then( m => m.Pop5PageModule)
  },
  {
    path: 'pop6',
    loadChildren: () => import('./components/pop6/pop6.module').then( m => m.Pop6PageModule)
  },
  {
    path: 'pop7',
    loadChildren: () => import('./components/pop7/pop7.module').then( m => m.Pop7PageModule)
  },
  {
    path: 'pop8',
    loadChildren: () => import('./components/pop8/pop8.module').then( m => m.Pop8PageModule)
  },
  {
    path: 'pop9',
    loadChildren: () => import('./components/pop9/pop9.module').then( m => m.Pop9PageModule)
  },
  {
    path: 'pop10',
    loadChildren: () => import('./components/pop10/pop10.module').then( m => m.Pop10PageModule)
  },
  {
    path: 'pop11',
    loadChildren: () => import('./components/pop11/pop11.module').then( m => m.Pop11PageModule)
  },
  {
    path: 'pop12',
    loadChildren: () => import('./components/pop12/pop12.module').then( m => m.Pop12PageModule)
  },
  {
    path: 'pop13',
    loadChildren: () => import('./components/pop13/pop13.module').then( m => m.Pop13PageModule)
  },
  {
    path: 'pop14',
    loadChildren: () => import('./components/pop14/pop14.module').then( m => m.Pop14PageModule)
  },
  {
    path: 'pop15',
    loadChildren: () => import('./components/pop15/pop15.module').then( m => m.Pop15PageModule)
  },
  {
    path: 'pop16',
    loadChildren: () => import('./components/pop16/pop16.module').then( m => m.Pop16PageModule)
  },
  {
    path: 'pop17',
    loadChildren: () => import('./components/pop17/pop17.module').then( m => m.Pop17PageModule)
  },
  {
    path: 'pop18',
    loadChildren: () => import('./components/pop18/pop18.module').then( m => m.Pop18PageModule)
  },
  {
    path: 'filtro-profe',
    loadChildren: () => import('./pages/filtro-profe/filtro-profe.module').then( m => m.FiltroProfePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./pages/resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  { //cualquier otra ruta me lleva al home
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
