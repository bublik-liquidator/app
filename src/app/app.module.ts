import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KontaktiComponent } from './components/kontakti/kontakti.component';
import { HeaderComponent } from './components//header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocalFailComponent } from './components/local-fail/local-fail.component';

import { CookieService } from 'ngx-cookie-service';
import { VhodComponent } from './components/vhod/vhod.component';
import { AdminComponent } from './components/admin/admin.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './components/SharedService';
import { PopUpComponent } from './components/pop-up/pop-up.component';


const appRoutes: Routes = [
  {path:'',component:CarComponent},
  {path:'about',component:KontaktiComponent},
  {path:'admin',component:AdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KontaktiComponent,
    HeaderComponent,
    FooterComponent,
    LocalFailComponent,
    VhodComponent,
    AdminComponent,
    PopUpComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // forRoot какие юрд адреса отслеживаем
    MatDialogModule,
    BrowserAnimationsModule   
    
    
  ],
  providers: [CookieService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  }
