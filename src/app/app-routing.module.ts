import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PagesComponent } from './pages/pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EndpageComponent } from './endpage/endpage.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BlogPagesComponent } from './blog-pages/blog-pages.component';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WeatherFeaturesComponent } from './weather-features/weather-features.component';
import { SeasonalMaintanenceComponent } from './seasonal-maintanence/seasonal-maintanence.component';
import { GardenersComponent } from './gardeners/gardeners.component';
import { IrrigationSystemsComponent } from './irrigation-systems/irrigation-systems.component';
import { LawnCareComponent } from './lawn-care/lawn-care.component';
import { ArticlesComponent } from './articles/articles.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  { path: '', component: StartingPageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'mypage', component: PagesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'blogpage', component: BlogComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'endpage', component: EndpageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'blog-pages', component: BlogPagesComponent },
  { path: 'pop-up', component: PopUpComponent },
  { path: 'navbar', component: NavbarComponent },
  {path:'weather-features', component:WeatherFeaturesComponent},
  {path:'seasonal-maintanence', component:SeasonalMaintanenceComponent},
  {path:'gardeners', component:GardenersComponent},
  {path:'irrigation-systems', component:IrrigationSystemsComponent},
  {path: 'lawn-care', component:LawnCareComponent},
  {path:'articles', component:ArticlesComponent}

];

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    NgxSpinnerModule,
  ],
})
export class AppRoutingModule {}
