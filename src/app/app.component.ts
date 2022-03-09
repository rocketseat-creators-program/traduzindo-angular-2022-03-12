import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traduzindo-angular';

  public TraduzirBrasil() {
    alert('Aqui é Brasil');
  }

  public TraduzirUSA() {
    alert('New York');
  }


}
