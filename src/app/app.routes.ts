import { Routes } from '@angular/router';
import { ArticleComponent } from './articles/article/article.component';
import { AppComponent } from './app.component';
import { MemberFormComponent } from './members/member-form/member-form.component';

export const routes: Routes = [
    {path: 'news', component: ArticleComponent},
    {path: 'members', component: MemberFormComponent},
];
