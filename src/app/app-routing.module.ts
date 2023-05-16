import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsignupComponent } from './newsignup/newsignup.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [{ path: '', component: NewloginComponent,},
                        { path: 'newsignup', component: NewsignupComponent },
                        { path: 'home', component: HomeComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 