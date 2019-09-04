import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from '../rooms.service';
import { rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  romm: rooms[];

  constructor(private service: RoomsService) { }

  ngOnInit() {
    this.service.list().subscribe(console.log);
  }
  
}
