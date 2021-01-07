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
    document.getElementById(pageName + n).style.display = 'block';
  }

  ngOnInit(): void {
    document.getElementById('defaultOpen').click();
    document.getElementById('defaultOpen1').click();
    document.getElementById('defaultOpen2').click();
    document.getElementById('defaultOpen3').click();
    document.getElementById('defaultOpen4').click();
    document.getElementById('defaultOpen5').click();
    document.getElementById('defaultOpen6').click();

    // GENERAL EXAMPLE
    const s0 = new SequenceViewer('sqv0');
    const seqs0 = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTPAVHASLDKFLASVSTVLTSKYR', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHGKKVADALASAAGHLDDLPGALSALSDLHAHKLRVDPVNFKLLSHCLLVTLASHHPADFTPAVHASLDKFLASVSTVLTSKYR', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHGSKVVAAVGDAVKSIDNVTSALSKLSELHAYVLRVDPVNFKFLSHCLLVTLASHFPADFTADAHAAWDKFLSIVSGVLTEKYR', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    const ico3 = [
      {sequenceId: 1, start: 11, end: 20, icon: 'turn'},
      {sequenceId: 1, start: 21, end: 30, icon: 'helix'},
      {sequenceId: 1, start: 31, end: 40, icon: 'lollipop'},
      {sequenceId: 1, start: 41, end: 41, icon: 'arrowLeft'},
      {sequenceId: 1, start: 42, end: 50, icon: 'strand'},
      {sequenceId: 1, start: 48, end: 50, icon: 'noSecondary'}
    ];

    const opt = { topIndexes: true, colorScheme: 'blosum62', consensusType: 'identity'};
    const reg = [
      {sequenceId: 2, start: 1, end: 10, backgroundColor: '#D72638', color: '#FFFFFF'}
    ];
    s0.draw(seqs0, reg, opt);


    // SIMPLE EXAMPLE
    const s1 = new SequenceViewer('sqv1');

    const seqs1 = [
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------R', id: 1, label: 'Homo Sapiens'},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------R', id: 2, label: 'Bos Taurus', colorScheme: 'clustal'},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------R', id: 3, label: 'Mus musculus'}
    ];
    s1.draw(seqs1);

    // REGIONS EXAMPLE
    const s2 = new SequenceViewer('sqv2');
    const seqs = [
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------R', id: 1, label: 'Homo Sapiens'},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------R', id: 2, label: 'Bos Taurus'},
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------R', id: 3, label: 'Mus musculus'}
    ];
    const reg1 = [
      {sequenceId: 2, start: 1, end: 10, backgroundColor: '#D72638', color: '#FFFFFF'},
      {sequenceId: 2, start: 11, end: 20, backgroundColor: '#FF570A', color: '#FFFFFF'},
      {sequenceId: 2, start: 21, end: 30, backgroundColor: '#FFBC42', color: '#FFFFFF'},
      {sequenceId: 2, start: 31, end: 40, backgroundColor: '#44885B', color: '#FFFFFF'},
      {sequenceId: 2, start: 41, end: 50, backgroundColor: '#393C93', color: '#FFFFFF'},
      {sequenceId: 2, start: 51, end: 60, backgroundColor: '#7E1173', color: '#FFFFFF'},
    ];
    s2.draw(seqs, reg1);


    // icons EXAMPLE
    const s3 = new SequenceViewer('sqv3');
    s3.draw(seqs, ico3);

    // patterns EXAMPLE
    const s4 = new SequenceViewer('sqv4');
    const pat4 = [
      {sequenceId: 1, pattern: /LYR/g, backgroundColor: '#D72638'},
      {sequenceId: 2, pattern: /LE/g, backgroundColor: '#FF570A'},
      {sequenceId: 3, pattern: /AA/g, backgroundColor: '#FFBC42'}
    ];
    s4.draw(seqs, pat4);

    // indexes EXAMPLE
    const s5 = new SequenceViewer('sqv5');
    const seqs5 = [
      {sequence: 'DFRLELERELYRLELEAA------------AAARAAAAAELYRLELER---F-------R', id: 1, label: 'Homo Sapiens', startIndex: 2}
    ];
    const opt5 = { lateralIndexesGap: true};
    s5.draw(seqs5, opt5);

    // colorscheme EXAMPLE
    const s6 = new SequenceViewer('sqv6');
    const opt6 = { colorScheme: 'clustal'};
    s6.draw(seqs, opt6);

  }




}
