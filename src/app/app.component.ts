import {Component, OnInit} from '@angular/core';
import {SequenceViewer} from 'sequence-viewer-typescript/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sequence-viewer-documentation';

  public openPage(pageName, n) {
    let i;
    let tabcontent;
    let tablinks;
    tabcontent = document.getElementsByClassName('tabcontent' + n);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablink' + n);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }
    console.log(pageName)
    document.getElementById(pageName + n).style.display = 'block';
  }

  ngOnInit(): void {
    document.getElementById('defaultOpen').click();
    document.getElementById('defaultOpen1').click();
    document.getElementById('defaultOpen2').click();
    document.getElementById('defaultOpen3').click();

    // SIMPLE EXAMPLE
    const s1 = new SequenceViewer('sqv1');
    const seqs = [
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 1, label: 'Human'},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 2, label: 'Mice'}];
    s1.draw(seqs);

    // REGIONS EXAMPLE
    const s2 = new SequenceViewer('sqv2');
    const reg1 = [{sequenceId: 1, start: 1, end: 10, backgroundImage: 'linear-gradient(red, yellow)'},
      {sequenceId: 1, start: 31, end: 40, backgroundColor: '#FF715B', color: '#F7F06D'},
      {sequenceId: 1, start: 41, end: 50, backgroundColor: '(255, 173, 10)'}
    ];
    s2.draw(seqs, reg1);


    // icons EXAMPLE
    const s3 = new SequenceViewer('sqv3');
    const ico2 = [{sequenceId: 1, start: 1, end: 10 },
      {sequenceId: 1, start: 11, end: 21, icon: 'turn'},
      {sequenceId: 1, start: 21, end: 30, icon: 'helix'},
      {sequenceId: 1, start: 31, end: 40, icon: 'lollipop'},
      {sequenceId: 1, start: 41, end: 41, icon: 'arrowLeft'},
      {sequenceId: 1, start: 42, end: 50, icon: 'strand'},
      {sequenceId: 1, start: 48, end: 50, icon: 'noSecondary'}
    ];
    s3.draw(seqs, ico2);

  }




}
