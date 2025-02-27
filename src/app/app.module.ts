import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductPageComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
