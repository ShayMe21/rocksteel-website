import { SendMailService } from './send-mail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule, AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FilterGalleryPipe } from './filter-gallery.pipe';
import '../../node_modules/hammerjs';
import '../../node_modules/mousetrap';
import { ModalGalleryModule } from '../../node_modules/angular-modal-gallery';

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
    CollapseModule,
    [AlertModule.forRoot()],
    [ModalGalleryModule.forRoot()]
  ],
  providers: [FilterGalleryPipe, SendMailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
