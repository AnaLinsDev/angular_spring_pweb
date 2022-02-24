import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/Usuario';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  usuario : Usuario;
  
  constructor() {

    
    
  }

  ngOnInit(): void {
    
  }

}
