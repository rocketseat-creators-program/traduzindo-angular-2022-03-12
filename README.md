<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/7e437bcd6981fc525476e7bace27c4de4a5608547d700124ef5a806261f53cb5/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f657870657274732d636c75622f636170612d6769746875622e737667"><img src="https://camo.githubusercontent.com/7e437bcd6981fc525476e7bace27c4de4a5608547d700124ef5a806261f53cb5/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f657870657274732d636c75622f636170612d6769746875622e737667" data-canonical-src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" style="max-width: 100%;"></a>

# Transformando meu site Angular em Multi-Idiomas
Desenvolvemos Sistemas, Sites, Apps, etc... Que ficam disponíveis na Internet e pessoas do Mundo Todo podem acessar nossa entrega, sem restrições de país. Por isso não seria melhor facilitar para que usuários que não estejam no Brasil ou não falem português como idioma Nativo possam usar nossos sistemas? Será que chegou a hora, de romper as barreiras do idioma na sua aplicação? 

Por isso nesse vídeo, vou mostrar como transformar seu site, feito no Brasil por brasileiros em um site Multi-idiomas que pode ser utilizado por pessoas que não conheçam o seu idioma. Mas ainda possam usar seu Site ou Sistema, sem ficar tentando adivinhar o que está escrito ou ficar traduzindo tudo o que não entender.

# Agora vamos ao passo a passo para seguir o Vídeo
## Vou deixar para vocês os mesmos comandos que usarei no Vídeo.

### 1 - Baixando o Código
```github
git clone https://github.com/rocketseat-experts-club/traduzindo-angular-2022-03-12.git
```
Verifique que você está na Branch main

### 2 - Executando o projeto que será traduzido
```node
npm install
ng s
```
Depois de executar os 2 comandos, acesso o caminho gerado pelo Angular. Normalmente é esse: 
```html
http://localhost:4200/
```
### 3 - Criando a lista de Idiomas
Vamos agora criar a lista de Idiomas, que será usada para traduzir o sistema. Aqui vou usar HTML simples, para diferenciar do Bootstrap e facilitar para vocês a inclusão ou alteração de idiomas mesmo que vocês não conheçam Bootstrap.

No arquivo app.component.html incluir o código abaixo:
```html
<label><b>Escolha o Idioma do Site:</b>&nbsp;</label>
<select  #listaIdiomas (change)="traduzirSite(listaIdiomas.value)" title="ListaIdiomas">
  <option value="pt" selected="selected">Português do Brasil</option>
  <option value="en">Inglês</option>  
</select>
```

No arquivo app.component.ts incluir o código abaixo:
```typescript
traduzirSite(language: string): void {
    alert(language);
  }
```

### 4 - Instalando e configurando o pacote de Tradução
Esses são os códigos usados no vídeo, para instalar e configurar a aplicação:

```node
npm install @ngx-translate/core@13.0.0
```

No arquivo src/app/app.module.ts incluir o código abaixo:
```typescript
  import { TranslateModule } from '@ngx-translate/core';
  
	imports
		TranslateModule.forRoot()
  }
```

```node
npm install @ngx-translate/http-loader@6.0.0
```

No arquivo src/app/app.module.ts incluir o código abaixo:
```typescript
  import { HttpClientModule, HttpClient } from '@angular/common/http';
	import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
	import { TranslateHttpLoader } from '@ngx-translate/http-loader';
	
	// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
```

No arquivo src/app/app.component.ts incluir o código abaixo:
```typescript
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
  }
  
  traduzirSite(language: string): void {
    this.translate.use(language);
  }
```
