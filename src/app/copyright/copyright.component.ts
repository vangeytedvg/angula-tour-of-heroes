import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css'],
})
export class CopyrightComponent implements OnInit {
  cpright = '(c) 2021 - Danny Van Geyte';

  constructor() {}

  ngOnInit(): void {}
}
