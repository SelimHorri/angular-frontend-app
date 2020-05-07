import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { EditPersonsComponent } from './edit-persons/edit-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListPersonsComponent,
    MenuComponent,
    FooterComponent,
    EditPersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	
}




