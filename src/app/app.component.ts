import {Component, OnInit} from '@angular/core';
import {SequenceViewer} from 'sequence-viewer-typescript/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sequence-viewer-documentation';

  public openPage(pageName) {
    let i;
    let tabcontent;
    let tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }
    document.getElementById(pageName).style.display = 'block';
  }

  public openPage2(pageName) {
    let i;
    let tabcontent;
    let tablinks;
    tabcontent = document.getElementsByClassName('tabcontent2');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablink2');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }
    document.getElementById(pageName).style.display = 'block';
  }

  ngOnInit(): void {
    document.getElementById('defaultOpen').click();
    document.getElementById('defaultOpen2').click();

    const s0 = new SequenceViewer('sqv0');
    const seqs = [
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 11, label: 'pip5human', startIndex: 30},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 11, label: 'pip5human', startIndex: 30}];
    s0.draw(seqs);
  }




}
