import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-doc',
    templateUrl: './doc-page.component.html',
    styleUrls: ['./doc-page.component.scss']
})
export class DocPageComponent implements OnInit {
    title = 'ProSeqViewer-doc';
    selectedChar;
    positionX;
    positionY;
    ngOnInit(): void {

        const detail = 'detail';

        window.addEventListener('onRegionSelected', (e) => {
            console.log('character selected', e[detail].char);
            this.selectedChar = e[detail].char;
            this.positionX = e[detail].x;
            this.positionY = e[detail].y;
        });
    }

}
