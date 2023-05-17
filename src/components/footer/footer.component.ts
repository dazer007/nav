// Copyright @ 2018-2022 dazer007. All rights reserved. MIT license.
// See https://github.com/dazer007/nav

import { Component, Input } from '@angular/core'
import { totalWeb } from '../../utils'
import { settings } from 'src/store'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerContent: string = settings.footerContent.replace('${total}', String(totalWeb()));

  @Input() className: string
}
