import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from'@angular/material/sidenav'
import { MatList } from'@angular/material/list'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatToolbarModule, FooterComponent, MatSidenavModule, NavComponent , MatList],
  templateUrl: 'app.component.html'
})
export class AppComponent {
 
}
