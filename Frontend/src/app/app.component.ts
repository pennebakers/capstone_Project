import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Funding Force';
  
  faCoffee = faCoffee;
  


  submitted : any;
  f: any;
  loading: any;

onSubmit() {
throw new Error('Method not implemented.');
}
 

}
