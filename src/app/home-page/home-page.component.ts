import {Component, OnInit} from '@angular/core';

import { version } from '../../../node_modules/proseqviewer/package.json';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    title = 'ProSeqViewer';

    public version: string = version;

    ngOnInit(): void {

    }


}
