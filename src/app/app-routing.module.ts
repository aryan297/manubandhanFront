import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegAfterComponent } from './reg-after/reg-after.component';
import { ProfileComponent } from './profile/profile.component';
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
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MatchesComponent } from './matches/matches.component';
import { InboxComponent } from './inbox/inbox.component';
import { PremiumComponent } from './premium/premium.component';


const routes: Routes = [{path:'',component:HomeComponent},{
  path:"register",component:RegisterComponent
},{path:"login",component:LoginComponent},
{path:"regafter",component:RegAfterComponent},
{path:'profile',component:ProfileComponent},{
path:'prefence',component:PrefencesComponent},
{path:'Pupdate',component:PartnerComponent},
{path:'userUpdate',component:ProfileUpdateComponent},
{path:'pinfo',component:PinfoComponent},
{path:'astro',component:AstroUpdateComponent},
{path:'family',component:FbackgroundComponent},
{path:"search",component:SearchComponent},
{path:'terms',component:TermsComponent},
{path:'services',component:ServicesComponent},
{path:'privacy',component:PrivacyComponent},
{path:'faq',component:FaqComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'matches',component:MatchesComponent},
{path:'inbox',component:InboxComponent},
{path:'premium',component:PremiumComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
