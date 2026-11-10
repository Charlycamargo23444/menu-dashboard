import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  imports: [Header, Footer],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
