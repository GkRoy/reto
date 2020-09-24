import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menu: any[];
  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        icon: "../assets/icon1.png",
        text: "Reserva de salas",
        visible: true,
      },
      {
        icon: "../assets/icon2.png",
        text: "Reporte de problemas",
        visible: true,
      },
      {
        icon: "../assets/icon3.png",
        text: "Mi equipo",
        visible: true,
      },
      {
        icon: "../assets/icon4.png",
        text: "Comunicados",
        visible: true,
      },
      {
        icon: "../assets/icon5.png",
        text: "Ficha de sintomatología",
        visible: true,
      }
    ]
  }

  showMessage(msg: string) {
    alert(msg)
  }

}
