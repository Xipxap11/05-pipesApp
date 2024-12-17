import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = "david";
  public nameUpper: string = "DAVID";
  public fullName: string = "dAvId PlAnA";

  public customDate: Date = new Date;

}
