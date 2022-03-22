import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownAcessarSiteComponent } from './traduzir/dropdown-acessar-site/dropdown-acessar-site.component';
import { ComboIdiomaNativoComponent } from './traduzir/combo-idioma-nativo/combo-idioma-nativo.component';
import { TextoNomeComponent } from './traduzir/texto-nome/texto-nome.component';
import { TextoSobrenomeComponent } from './traduzir/texto-sobrenome/texto-sobrenome.component';
import { PaginacaoComponent } from './traduzir/paginacao/paginacao.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BotoesComponent } from './traduzir/botoes/botoes.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AcordeonComponent } from './traduzir/acordeon/acordeon.component';
import { AlertaComponent } from './traduzir/alerta/alerta.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarroselComponent } from './traduzir/carrosel/carrosel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsComponent } from './traduzir/tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipComponent } from './traduzir/tooltip/tooltip.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DropdownAcessarSiteComponent,
    ComboIdiomaNativoComponent,
    TextoNomeComponent,
    TextoSobrenomeComponent,
    PaginacaoComponent,
    BotoesComponent,
    AcordeonComponent,
    AlertaComponent,
    CarroselComponent,
    TabsComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    PaginationModule,
    AccordionModule,
    AlertModule,
    CarouselModule,
    TabsModule,
    TooltipModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
