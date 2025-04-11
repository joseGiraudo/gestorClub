import { Routes } from '@angular/router';
import { ArticleComponent } from './articles/article/article.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'news', component: ArticleComponent}
];
