import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagPostsComponent } from './tag-posts/tag-posts.component';

const routes: Routes = [
  { path: 'tagPosts', component: TagPostsComponent },
  { path: '',   redirectTo: '/tagPosts', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

}
