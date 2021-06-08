import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  id:string|null=null;

  constructor(private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
  }

  /** navegar(hola:number)
  {
    this.router.navigate(['crearproducto',hola]);
  }
  */
}
