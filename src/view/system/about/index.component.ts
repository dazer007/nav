// Copyright @ 2018-2022 dazer007. All rights reserved. MIT license.
// See https://github.com/dazer007/nav

import { Component } from '@angular/core'
import { $t } from 'src/locale'

@Component({
  selector: 'system-about',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export default class SystemAboutComponent {
  $t = $t

  constructor (
  ) {}

  ngOnInit () {
  }
}
