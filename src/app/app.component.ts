import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { TechSpreadComponent } from "./tech-spread/tech-spread.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroBannerComponent, TechSpreadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
