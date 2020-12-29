import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegisterComponent } from './register/register.component';
import {MatNativeDateModule} from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { RegAfterComponent } from './reg-after/reg-after.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from "@angular/common/http";
import { RegComponent } from './reg/reg.component';
import { ProfileComponent } from './profile/profile.component'
import {MatExpansionModule} from '@angular/material/expansion';
import { PrefencesComponent } from './prefences/prefences.component';
import { PartnerComponent } from './partner/partner.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { PinfoComponent } from './pinfo/pinfo.component';
import { AstroUpdateComponent } from './astro-update/astro-update.component';
import { FbackgroundComponent } from './fbackground/fbackground.component';
import { SearchComponent } from './search/search.component';
import { TermsComponent } from './terms/terms.component';
import { ServicesComponent } from './services/services.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MatchesComponent } from './matches/matches.component';
import { PremiumComponent } from './premium/premium.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RegAfterComponent,
    RegComponent,
    ProfileComponent,
    PrefencesComponent,
    PartnerComponent,
    ProfileUpdateComponent,
    PinfoComponent,
    AstroUpdateComponent,
    FbackgroundComponent,
    SearchComponent,
    TermsComponent,
    ServicesComponent,
    PrivacyComponent,
    FaqComponent,
    ContactusComponent,
    AboutusComponent,
    MatchesComponent,
    PremiumComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatFormFieldModule,
    MatExpansionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
