import { Component } from '@angular/core';
import { ClimaService } from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clima';

  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';

  query = false;
  mostrarError = false;
  loading = false;

  urlImage = 'https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/Weather+Targeting';

  constructor(private climaService: ClimaService){}

  obtenerClima(){
    this.query = false;
    this.loading = true;
    this.climaService.getClima(this.ciudad).subscribe(data => {
      this.query = true;
      this.loading = false;
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    }, error => {
      this.loading = false;
      this.error();
    })
    
    
  }

  error(){
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }
}
