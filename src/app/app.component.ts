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

  public openPage1(pageName) {
    let i;
    let tabcontent;
    let tablinks;
    tabcontent = document.getElementsByClassName('tabcontent1');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks1');
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
    tablinks = document.getElementsByClassName('tablinks2');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }
    document.getElementById(pageName).style.display = 'block';
  }

  ngOnInit(): void {
    document.getElementById('defaultOpen').click();
    document.getElementById('defaultOpen1').click();
    document.getElementById('defaultOpen2').click();


    const s0 = new SequenceViewer('sqv0');
    const seqs = [
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 1, label: 'Human'},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 2, label: 'Mice'}];
    s0.draw(seqs);


    const s1 = new SequenceViewer('sqv1');
    const seqs1 = [
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 1, label: 'Human'},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------RR', id: 2, label: 'Mice'}];
    const reg1 = [{sequenceId: 1, start: 10, end: 15, backgroundImage: 'linear-gradient(red, yellow)'},
      {sequenceId: 1, start: 1, end: 6, backgroundColor: '(180, 180, 180)', color: '#F7F06D'},
      {sequenceId: 2, start: 10, end: 15},
      {sequenceId: 2, start: 18, end: 25, backgroundColor: '(210, 100, 180)'},
      {sequenceId: 2, start: 30, end: 35}
    ];
    s1.draw(seqs1, reg1);
  }




}
