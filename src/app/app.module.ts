import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { PagesComponent } from './pages/pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';

import { PricingComponent } from './pricing/pricing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EndpageComponent } from './endpage/endpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderPageComponent } from './loader-page/loader-page.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BlogPagesComponent } from './blog-pages/blog-pages.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { WeatherFeaturesComponent } from './weather-features/weather-features.component';
import { SeasonalMaintanenceComponent } from './seasonal-maintanence/seasonal-maintanence.component';
import { GardenersComponent } from './gardeners/gardeners.component';
import { IrrigationSystemsComponent } from './irrigation-systems/irrigation-systems.component';
import { LawnCareComponent } from './lawn-care/lawn-care.component';
import { ArticlesComponent } from './articles/articles.component';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PagesComponent,
    BlogComponent,
    FooterComponent,
    PopUpComponent,
    PricingComponent,
    LoaderPageComponent,
    EndpageComponent,
    StartingPageComponent,
    ErrorPageComponent,
    PopUpComponent,
    NavbarComponent,
    BlogPagesComponent,
    AboutUsComponent,
    WeatherFeaturesComponent,
    SeasonalMaintanenceComponent,
    GardenersComponent,
    IrrigationSystemsComponent,
    LawnCareComponent,
    ArticlesComponent,
    OurServicesComponent,
  ],

  imports: [
    RouterModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HomepageComponent],
})
export class AppModule {}
