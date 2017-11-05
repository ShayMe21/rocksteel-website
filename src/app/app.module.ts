import { SendMailService } from './send-mail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule, AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { CONST_ROUTING } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery.service';
import { FilterGalleryPipe } from './filter-gallery.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    GalleryComponent,
    FilterGalleryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    //CONST_ROUTING,
    CollapseModule,
    [AlertModule.forRoot()]
  ],
  providers: [GalleryService, FilterGalleryPipe, SendMailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
