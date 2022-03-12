<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/7e437bcd6981fc525476e7bace27c4de4a5608547d700124ef5a806261f53cb5/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f657870657274732d636c75622f636170612d6769746875622e737667"><img src="https://camo.githubusercontent.com/7e437bcd6981fc525476e7bace27c4de4a5608547d700124ef5a806261f53cb5/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f657870657274732d636c75622f636170612d6769746875622e737667" data-canonical-src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" style="max-width: 100%;"></a>

# Transformando meu site Angular em Multi-Idiomas
Desenvolvemos Sistemas, Sites, Apps, etc... Que ficam disponíveis na Internet e pessoas do Mundo Todo podem acessar nossa entrega, sem restrições de país. Por isso não seria melhor facilitar para que usuários que não estejam no Brasil ou não falem português como idioma Nativo possam usar nossos sistemas? Será que chegou a hora, de romper as barreiras do idioma na sua aplicação? 

Por isso nesse vídeo, vou mostrar como transformar seu site, feito no Brasil por brasileiros em um site Multi-idiomas que pode ser utilizado por pessoas que não conheçam o seu idioma. Mas ainda possam usar seu Site ou Sistema, sem ficar tentando adivinhar o que está escrito ou ficar traduzindo tudo o que não entender.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
