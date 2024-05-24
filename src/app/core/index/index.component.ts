
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../service/ropa.service';
import { NavbarComponent } from '../../componets/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent,  FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  prendas: any = [
  ];

  name: string = ""
  password: string = ""
   
  constructor(public RopaService: RopaService) {}

  ngOnInit() {
    this.getprenda();
  }

  getprenda() {
    this.RopaService.getCatalago().subscribe((res: any) => {
      console.log(res);
      this.prendas = res;
    });
  }

  createprenda() {
    let obj = {
      name: this.name, 
      price: this.password
    };

    this.RopaService.createCatalago(obj).subscribe((res: any) => {
      this.getprenda();
    });
  }

  deleteprenda(id: string) {
    this.RopaService.deleteCatalago(id).subscribe((res: any) => {
      this.getprenda();
    });
  }
}


