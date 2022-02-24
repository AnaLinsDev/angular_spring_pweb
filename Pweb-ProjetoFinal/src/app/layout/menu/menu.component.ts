import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  usuario : Usuario;
  show : boolean
  
  constructor(private route: ActivatedRoute, private router : Router ){
    
  }

  ngOnInit(): void {
    this.show = true;

    console.log(this.route.snapshot.params.usuid)
  }
}
