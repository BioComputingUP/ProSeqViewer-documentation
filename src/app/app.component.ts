import {Component} from '@angular/core';
import { version } from '../../node_modules/proseqviewer/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ProSeqViewer';

  constructor() {
  }

}
