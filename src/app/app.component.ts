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

  ngOnInit(): void {
    document.getElementById('defaultOpen').click();

    // GENERAL EXAMPLE: multisequence
    const s0 = new SequenceViewer('sqv0');
    const seqs0 = [
      {sequence: '---------DFEYLQLVLTWPASFCYANH---CE------------RIAPNNFTIHGLWPDNVKT-RLHN----------CKPKPTYSY-FT----------GKMLNDLDKHWMQLKFEQDY--GRTEQPSWKYQYIKHGSCCQKR--Y-NQNTYFGLALRLKD--KFDLLRTLQTHRIIP-GS-SYTFQDIFDAIKT-VSQEN----PDIKCAEVTKG--TPELYEIGICFTP------ -NADSMFRCPQS-D----------------------TCDKTAKV-L-F-----RR----', id: 1, label: '1iooA'},
      {sequence: '----------YDYFQFTQQYQLAVCNSNRT-LCK------------DPPDKLFTVHGLWPSNMVGPDPSK----------CP-IKNIRK-RE----------KLLEHQLEIIWPNVFDRT-K-----NNLFWDKEWMKHGSCGYPT--IDNENHYFETVIKMYISKKQNVSRILSKAKIEPDGK-KRALLDIENAIRNGADNKK----PKLKCQKKGT---TTELVEITLCSDK-------SGEHFIDCPHP-FEPISP----------------HYCPTNNI--KY------------', id: 2, label: '1iqqA'},
      {sequence: 'YVE---FAQDFDFFYFVQQWPGSYCDTKQS-CCYPK---------TGKPASDFGIHGLWPNNNDGSYPSN----------CDSNSPYDQSQV----------SDLISRMQQNWPTLACPSGT-----GSAFWSHEWEKHGTCAENV--F-DQHGYFKKALDLKN--QINLLEILQGAGIHPDGG-FYSLNSIKNAIRS-AIGYA----PGIECNVDESG--NSQLYQIYICVDG------ -SGSNLIECPIFPR---------------------GKCGSSIEF-P-T-----F-----', id: 3, label: '1iybA'},
      {sequence: '------GHKEFDYFTLALTWSGTECLSVKD-SCPTN--ACS----RSEVETGFTIKGLWPDYDDGTWPSC----------CE-GAKYDQNEI----------SILSNDLSKYWPSYSCPSSSACGSFDASDLAYEWAKHGTCSSPV--LGNQYEYFSTTLMLYF--KYNISEILSESGYLPSNTAEYKVEGIMSAIQS-ALRVT----PVVKCKSD-------AVEQVQICFDK------ -T-LQLQECPST-A---------------------STCPSLVSL-P-IKNTIKP-----', id: 4, label: '1jy5A'},
      {sequence: '----------FDSFWFVQQWPPAVCSFQKSGSCP------------GSGLRTFTIHGLWPQQS-GTSLTN----------CP-GSPFDITKI----------SHLQSQLNTLWPNVLRAN-------NQQFWSHEWTKHGTCSEST--F-NQAAYFKLAVDMRN--NYDIIGALRPHAAGPNGR-TKSRQAIKGFLKA-KFGKF----PGLRCRTDPQT-KVSYLVQVVACFAQ------ -DGSTLIDCTR------------------------DTCGANFI----------F-----', id: 5, label: '1ucdA'},
      {sequence: 'LALQAKQYGDFDRYVLALSWQTGFCQSQHD-RNRNERDECRLQTETTNKADFLTVHGLWPGLPKSVAARGVDERRWMRFGCATRPIPNLPEARASRMCSSPETGLSLETAAKLSEVMPGAGG-----RSCLERYEYAKHGACFG----F-DPDAYFGTMVRLNQ--EIKESEAGKF-LADNYGK-TVSRRDFDAAFAK-SWGKENVKAVKLTCQGNP-----AYLTEIQISIKADAINAPLSANSFLPQPHP-----------------------GNCGKTFVI-D-K-----AGY---', id: 6, label: '2pqxA'},
      {sequence: 'DKR-LRDNHEWKKLIMVQHWPETVCEKIQN-DCR------------D-PPDYWTIHGLWPDKSEG---------------CNRSWPFNLEEI----------KDLLPEMRAYWPDVIHSFPN-----RSRFWKHEWEKHGTCAAQVDALNSQKKYFGRSLELYR--ELDLNSVLLKLGIKPSIN-YYQVADFKDALAR-VYGVI----PKIQCLPPSQDEEVQTIGQIELCLTK-------QDQQLQNCTEP-GEQPSPKQEVWLANGAAESRGLRVCEDGPVFYPPPKKTKHHHHHHH', id: 7, label: '3t0oA'}
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

    // GENERAL EXAMPLE: multisequence
    const seqSingle = new SequenceViewer('sqvSingle');
    const seq = [
      {sequence: '---------DFEYLQLVLTWPASFCYANH---CE------------RIAPNNFTIHGLWPDNVKT-RLHN----------CKPKPTYSY-FT----------GKMLNDLDKHWMQLKFEQDY--GRTEQPSWKYQYIKHGSCCQKR--Y-NQNTYFGLALRLKD--KFDLLRTLQTHRIIP-GS-SYTFQDIFDAIKT-VSQEN----PDIKCAEVTKG--TPELYEIGICFTP------ -NADSMFRCPQS-D----------------------TCDKTAKV-L-F-----RR----', id: 1, label: '1iooA'}
    ];

    seqSingle.draw(seq);


    // SIMPLE EXAMPLE
    const s1 = new SequenceViewer('sqv1');

    const seqs1 = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE', colorScheme: 'clustal'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    s1.draw(seqs1);

    // REGIONS EXAMPLE
    const s2 = new SequenceViewer('sqv2');
    const seqs = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
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
      {sequenceId: 1, pattern: /MVL/g, backgroundColor: '#D72638'},
      {sequenceId: 1, pattern: /GA/g, backgroundColor: '#D72638'},
      {sequenceId: 2, pattern: /LE/g, backgroundColor: '#FF570A'},
      {sequenceId: 2, pattern: /TT/g, backgroundColor: '#FF570A'},
      {sequenceId: 3, pattern: /QA/g, backgroundColor: '#FFBC42'}
    ];
    s4.draw(seqs, pat4);

    // colorscheme EXAMPLE
    const s6 = new SequenceViewer('sqv6');
    const opt6 = { colorScheme: 'clustal'};
    const seqs6 = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    s6.draw(seqs6, opt6);

    // indexes EXAMPLE
    const s5 = new SequenceViewer('sqv5');
    const seqs5 = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN', startIndex: 2}
    ];
    const opt5 = { lateralIndexesGap: true};
    s5.draw(seqs5, opt5);



    // consensus EXAMPLE
    const s7 = new SequenceViewer('sqv7');
    const seqs7 = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    const opt7 = { consensusType: 'identity', consensusThreshold: 80};
    s7.draw(seqs7, opt7);

    // oneLineSetting EXAMPLE
    const s8 = new SequenceViewer('sqv8');
    const seqs8 = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    const opt8 = { oneLineSetting: true, oneLineWidth: '350px'};
    s8.draw(seqs8, opt8);

    // selections EXAMPLE
    const s9 = new SequenceViewer('sqv9');
    const seqs9 = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    s9.draw(seqs9);
  }




}
