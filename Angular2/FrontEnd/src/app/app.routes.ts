import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
const appRoutes: Routes = [
    {path: 'listagem', component: LivrosComponent},
    {path: 'livro', component: LivrosComponent},
    { path: 'livro/:id', component: LivrosComponent },
    {path: '**', redirectTo: ''}
]

export const routing = RouterModule.forRoot(appRoutes);