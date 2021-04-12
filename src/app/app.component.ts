import {Component, OnInit} from '@angular/core';
import {SequenceViewer} from 'sequence-viewer-typescript/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sequence-viewer-documentation';
  // multisequence
  angularMsa = false;
  javascriptMsa = true;
  componentMsa = false;
  templateMsa = false;

  // singlesequence
  angularSin = false;
  javascriptSin = true;
  componentSin = false;
  templateSin = false;


  // regions
  angularReg = false;
  javascriptReg = true;
  componentReg = false;
  templateReg = false;

  // icons
  angularIc = false;
  javascriptIc = true;
  componentIc = false;
  templateIc = false;

  // patterns
  angularPat = false;
  javascriptPat = true;
  componentPat = false;
  templatePat = false;

  // colorscheme clustal
  angularCol = false;
  javascriptCol = true;
  componentCol = false;
  templateCol = false;


  // blosum
  angularBlo = false;
  javascriptBlo = true;
  componentBlo = false;
  templateBlo = false;

  // lateral
  angularLat = false;
  javascriptLat = true;
  componentLat = false;
  templateLat = false;

  // consensus identity
  angularCon = false;
  javascriptCon = true;
  componentCon = false;
  templateCon = false;

  // consensus physical
  angularPhy = false;
  javascriptPhy = true;
  componentPhy = false;
  templatePhy = false;

  // one line
  angularOne = false;
  javascriptOne = true;
  componentOne = false;
  templateOne = false;


  ngOnInit(): void {

    // GENERAL EXAMPLE: multisequence
    const s0 = new SequenceViewer('sqv0');
    const seqs0 = [
      {sequence: '---------DFEYLQLVLTWPASFCYANH---CE------------RIAPNNFTIHGLWPDNVKT-RLHN----------CKPKPTYSY-FT----------GKMLNDLDKHWMQLKFEQDY--GRTEQPSWKYQYIKHGSCCQKR--Y-', id: 1, label: '1iooA'},
      {sequence: '----------YDYFQFTQQYQLAVCNSNRT-LCK------------DPPDKLFTVHGLWPSNMVGPDPSK----------CP-IKNIRK-RE----------KLLEHQLEIIWPNVFDRT-K-----NNLFWDKEWMKHGSCGYPT--ID', id: 2, label: '1iqqA'},
      {sequence: 'YVE---FAQDFDFFYFVQQWPGSYCDTKQS-CCYPK---------TGKPASDFGIHGLWPNNNDGSYPSN----------CDSNSPYDQSQV----------SDLISRMQQNWPTLACPSGT-----GSAFWSHEWEKHGTCAENV--F-', id: 3, label: '1iybA'},
      {sequence: '------GHKEFDYFTLALTWSGTECLSVKD-SCPTN--ACS----RSEVETGFTIKGLWPDYDDGTWPSC----------CE-GAKYDQNEI----------SILSNDLSKYWPSYSCPSSSACGSFDASDLAYEWAKHGTCSSPV--LG', id: 4, label: '1jy5A'},
      {sequence: '----------FDSFWFVQQWPPAVCSFQKSGSCP------------GSGLRTFTIHGLWPQQS-GTSLTN----------CP-GSPFDITKI----------SHLQSQLNTLWPNVLRAN-------NQQFWSHEWTKHGTCSEST--F-', id: 5, label: '1ucdA'},
      {sequence: 'LALQAKQYGDFDRYVLALSWQTGFCQSQHD-RNRNERDECRLQTETTNKADFLTVHGLWPGLPKSVAARGVDERRWMRFGCATRPIPNLPEARASRMCSSPETGLSLETAAKLSEVMPGAGG-----RSCLERYEYAKHGACFG----F-', id: 6, label: '2pqxA'},
      {sequence: 'DKR-LRDNHEWKKLIMVQHWPETVCEKIQN-DCR------------D-PPDYWTIHGLWPDKSEG---------------CNRSWPFNLEEI----------KDLLPEMRAYWPDVIHSFPN-----RSRFWKHEWEKHGTCAAQVDALN', id: 7, label: '3t0oA'}
    ];


    const opt = { topIndexes: true, colorScheme: 'blosum62'};
    s0.draw(seqs0, opt);

    // GENERAL EXAMPLE: single sequence
    const seqSingle = new SequenceViewer('sqvSingle');
    const seq = [
      {sequence: 'MASESGKLWGGRFVGAVDPIMEKFNASIAYDRHLWEVDVQGSKAYSRGLEKAGLLTKAEMDQILHGLDKVAEEWAQGTFKLNSNDEDIHTANERRLKELIGATAGKLHTGRSRNDQVVTDLRLWMRQTCSTLSGLLWELIRTMVDRAEAERDVLFPGYTHLQRAQPIRWSHWILSHAVALTRDSERLLEVRKRINVLPLGSGAIAGNPLGVDRELLRAELNFGAITLNSMDATSERDFVAEFLFWASLCMTHLSRMAEDL ILYCTKEFSFVQLSDAYSTGSSLMPQKKNPDSLELIRSKAGRVFGRCAGLLMTLKGLPSTYNKDLQEDKEAVFEVSDTMSAVLQVATGVISTLQIHQENMGQALSPDMLATDLAYYLVRKGMPFRQAHEASGKAVFMAETKGVALNQLSLQELQTISPLFSGDVICVWDYGHSVEQYGALGGTARSSVDWQIRQVRALLQAQQA', id: 1}
    ];

    const singleIco = [
      {sequenceId: 1, start: 1, end: 11, icon: 'noSecondary'},
      {sequenceId: 1, start: 12, end: 12, icon: 'lollipop'},
      {sequenceId: 1, start: 13, end: 18, icon: 'noSecondary'},
      {sequenceId: 1, start: 19, end: 25, icon: 'helix'},
      {sequenceId: 1, start: 26, end: 27, icon: 'noSecondary'},
      {sequenceId: 1, start: 28, end: 30, icon: 'helix'},
      {sequenceId: 1, start: 31, end: 31, icon: 'lollipop'},
      {sequenceId: 1, start: 32, end: 51, icon: 'helix'},
      {sequenceId: 1, start: 52, end: 56, icon: 'noSecondary'},
      {sequenceId: 1, start: 57, end: 76, icon: 'helix'},
      {sequenceId: 1, start: 77, end: 87, icon: 'noSecondary'},
      {sequenceId: 1, start: 88, end: 93, icon: 'helix'},
      {sequenceId: 1, start: 94, end: 94, icon: 'lollipop'},
      {sequenceId: 1, start: 95, end: 95, icon: 'helix'},
      {sequenceId: 1, start: 96, end: 99, icon: 'helix'},
      {sequenceId: 1, start: 100, end: 100, icon: 'lollipop'},
      {sequenceId: 1, start: 101, end: 106, icon: 'helix'},
      {sequenceId: 1, start: 107, end: 112, icon: 'noSecondary'},
      {sequenceId: 1, start: 113, end: 149, icon: 'strand'},
      {sequenceId: 1, start: 150, end: 150, icon: 'arrowRight'},
      {sequenceId: 1, start: 151, end: 153, icon: 'noSecondary'},
      {sequenceId: 1, start: 154, end: 158, icon: 'strand'},
      {sequenceId: 1, start: 159, end: 159, icon: 'arrowRight'},
      {sequenceId: 1, start: 160, end: 161, icon: 'noSecondary'},
      {sequenceId: 1, start: 162, end: 177, icon: 'helix'},
      {sequenceId: 1, start: 178, end: 178, icon: 'lollipop'},
      {sequenceId: 1, start: 179, end: 188, icon: 'helix'},
      {sequenceId: 1, start: 189, end: 189, icon: 'lollipop'},
      {sequenceId: 1, start: 190, end: 192, icon: 'helix'},
      {sequenceId: 1, start: 193, end: 193, icon: 'helix'},
      {sequenceId: 1, start: 194, end: 194, icon: 'helix'},
      {sequenceId: 1, start: 195, end: 196, icon: 'strand'},
      {sequenceId: 1, start: 197, end: 197, icon: 'arrowRight'},
      {sequenceId: 1, start: 198, end: 212, icon: 'noSecondary'},
      {sequenceId: 1, start: 213, end: 219, icon: 'helix'},
      {sequenceId: 1, start: 220, end: 222, icon: 'helix'},
      {sequenceId: 1, start: 223, end: 224, icon: 'strand'},
      {sequenceId: 1, start: 225, end: 225, icon: 'arrowRight'},
      {sequenceId: 1, start: 226, end: 236, icon: 'noSecondary'},
      {sequenceId: 1, start: 237, end: 264, icon: 'helix'},
      {sequenceId: 1, start: 265, end: 285, icon: 'noSecondary'},
      {sequenceId: 1, start: 286, end: 286, icon: 'lollipop'},
      {sequenceId: 1, start: 287, end: 290, icon: 'noSecondary'},
      {sequenceId: 1, start: 291, end: 314, icon: 'helix'},
      {sequenceId: 1, start: 315, end: 321, icon: 'noSecondary'},
      {sequenceId: 1, start: 322, end: 334, icon: 'helix'},
      {sequenceId: 1, start: 335, end: 335, icon: 'lollipop'},
      {sequenceId: 1, start: 336, end: 352, icon: 'helix'},
      {sequenceId: 1, start: 353, end: 356, icon: 'noSecondary'},
      {sequenceId: 1, start: 357, end: 378, icon: 'helix'},
      {sequenceId: 1, start: 379, end: 379, icon: 'lollipop'},
      {sequenceId: 1, start: 380, end: 383, icon: 'noSecondary'},
      {sequenceId: 1, start: 384, end: 384, icon: 'helix'},
      {sequenceId: 1, start: 385, end: 385, icon: 'lollipop'},
      {sequenceId: 1, start: 386, end: 390, icon: 'helix'},
      {sequenceId: 1, start: 391, end: 394, icon: 'noSecondary'},
      {sequenceId: 1, start: 395, end: 397, icon: 'helix'},
      {sequenceId: 1, start: 398, end: 399, icon: 'noSecondary'},
      {sequenceId: 1, start: 400, end: 405, icon: 'helix'},
      {sequenceId: 1, start: 406, end: 422, icon: 'noSecondary'},
      {sequenceId: 1, start: 423, end: 428, icon: 'helix'},
      {sequenceId: 1, start: 429, end: 429, icon: 'noSecondary'},
      {sequenceId: 1, start: 430, end: 434, icon: 'helix'},
      {sequenceId: 1, start: 435, end: 441, icon: 'noSecondary'},
      {sequenceId: 1, start: 442, end: 443, icon: 'strand'},
      {sequenceId: 1, start: 444, end: 444, icon: 'arrowRight'},
      {sequenceId: 1, start: 445, end: 445, icon: 'lollipop'},
      {sequenceId: 1, start: 446, end: 463, icon: 'helix'},
      {sequenceId: 1, start: 464, end: 464, icon: 'helix'}
    ];

    const singleOpt = {chunkSize: 0};

    seqSingle.draw(seq, singleIco, singleOpt);

    // REGIONS EXAMPLE
    const s2 = new SequenceViewer('sqv2');
    const seqs = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHGGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDVSSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
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
    const seq3 = [
      {sequence: 'MASESGKLWGGRFVGAVDPIMEKFNASIAYDRHLWEVDVQGSKAYSRGLEKAGLLTKAEMDQILHGLDKVAEEWAQGTFKLNSNDEDIHTANERRLKELIGATAGKLHTGRSRNDQVVTDLRLWMRQTCSTLSGLLWELIRTMVDRAEAERDVLFPGYTHLQRAQPIRWSHWILSHAVALTRDSERLLEVRKRINVLPLGSGAIAGNPLGVDRELLRAELNFGAITLNSMDATSERDFVAEFLFWASLCMTHLSRMAEDL ILYCTKEFSFVQLSDAYSTGSSLMPQKKNPDSLELIRSKAGRVFGRCAGLLMTLKGLPSTYNKDLQEDKEAVFEVSDTMSAVLQVATGVISTLQIHQENMGQALSPDMLATDLAYYLVRKGMPFRQAHEASGKAVFMAETKGVALNQLSLQELQTISPLFSGDVICVWDYGHSVEQYGALGGTARSSVDWQIRQVRALLQAQQA', id: 1}
    ];

    const ico = [
      {sequenceId: 1, start: 12, end: 12, icon: 'lollipop'},
      {sequenceId: 1, start: 19, end: 25, icon: 'helix'},
      {sequenceId: 1, start: 28, end: 30, icon: 'helix'},
      {sequenceId: 1, start: 31, end: 31, icon: 'lollipop'},
      {sequenceId: 1, start: 32, end: 51, icon: 'helix'},
      {sequenceId: 1, start: 57, end: 76, icon: 'helix'},
      {sequenceId: 1, start: 88, end: 94, icon: 'helix'},
      {sequenceId: 1, start: 95, end: 95, icon: 'helix'},
      {sequenceId: 1, start: 96, end: 99, icon: 'helix'},
      {sequenceId: 1, start: 100, end: 100, icon: 'lollipop'},
      {sequenceId: 1, start: 101, end: 106, icon: 'helix'},
      {sequenceId: 1, start: 113, end: 149, icon: 'strand'},
      {sequenceId: 1, start: 150, end: 150, icon: 'arrowRight'},
      {sequenceId: 1, start: 154, end: 158, icon: 'strand'},
      {sequenceId: 1, start: 159, end: 159, icon: 'arrowRight'},
      {sequenceId: 1, start: 162, end: 194, icon: 'helix'},
      {sequenceId: 1, start: 195, end: 196, icon: 'strand'},
      {sequenceId: 1, start: 197, end: 197, icon: 'arrowRight'},
      {sequenceId: 1, start: 213, end: 219, icon: 'helix'},
      {sequenceId: 1, start: 223, end: 224, icon: 'strand'},
      {sequenceId: 1, start: 225, end: 225, icon: 'arrowRight'},
      {sequenceId: 1, start: 237, end: 264, icon: 'helix'},
      {sequenceId: 1, start: 286, end: 286, icon: 'lollipop'},
      {sequenceId: 1, start: 291, end: 314, icon: 'helix'}
    ];

    const opt3 = {chunkSize: 0};

    s3.draw(seq3, ico, opt3);

    // patterns EXAMPLE
    const s4 = new SequenceViewer('sqv4');
    const pat4 = [
      {sequenceId: 1, pattern: /GA/g, backgroundColor: '#D72638'},
      {sequenceId: 2, pattern: /GA/g, backgroundColor: '#D72638'},
      {sequenceId: 1, pattern: /TT/g, backgroundColor: '#FF570A'},
      {sequenceId: 2, pattern: /TT/g, backgroundColor: '#FF570A'},
      {sequenceId: 2, pattern: /VS/g, backgroundColor: '#FFBC42'},
      {sequenceId: 3, pattern: /VS/g, backgroundColor: '#FFBC42'},
      {sequenceId: 2, pattern: /VS/g, backgroundColor: '#FFBC42'},
      {sequenceId: 3, pattern: /VS/g, backgroundColor: '#FFBC42'}
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

    // blosum62
    const sBlos = new SequenceViewer('sqvBlosum');
    const optBlos = { colorScheme: 'blosum62'};
    const seqsBlos = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    sBlos.draw(seqsBlos, optBlos);

    // indexes EXAMPLE
    const s5 = new SequenceViewer('sqv5');
    const seqs5 = [
      {sequence: 'MVLSPADKTNVKAA-----EYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN', startIndex: 2}
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

    const sPhysical = new SequenceViewer('sqvPhysical');
    const seqsPhysical = [
      {sequence: 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|HBA_HUMAN'},
      {sequence: 'MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKGHG', id: 2, label: 'sp|P01942|HBA_MOUSE'},
      {sequence: 'MSLTRTERTIILSLWSKISTQADVIGTETLERLFSCYPQAKTYFPHFDLHSGSAQLRAHG', id: 3, label: 'sp|P13786|HBAZ_CAPHI'}
    ];
    const optPhysical = { consensusType: 'physical'};
    sPhysical.draw(seqsPhysical, optPhysical);

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


  showtabjs(id) {
    switch (id) {
      case 'msa': {
        if (!this.javascriptMsa) {
          this.angularMsa = (!this.angularMsa);
          this.javascriptMsa = (!this.javascriptMsa);
          this.componentMsa = false;
          this.templateMsa = false;
        }
        break;
      }
      case 'sin': {
        if (!this.javascriptSin) {
          this.angularSin = (!this.angularSin);
          this.javascriptSin = (!this.javascriptSin);
          this.componentSin = false;
          this.templateSin = false;
        }
        break;
      }
      case 'reg': {
        if (!this.javascriptReg) {
          this.angularReg = (!this.angularReg);
          this.javascriptReg = (!this.javascriptReg);
          this.componentReg = false;
          this.templateReg = false;
        }
        break;
      }
      case 'pat': {
        if (!this.javascriptPat) {
          this.angularPat = (!this.angularPat);
          this.javascriptPat = (!this.javascriptPat);
          this.componentPat = false;
          this.templatePat = false;
        }
        break;
      }
      case 'col': {
        if (!this.javascriptCol) {
          this.angularCol = (!this.angularCol);
          this.javascriptCol = (!this.javascriptCol);
          this.componentCol = false;
          this.templateCol = false;
        }
        break;
      }
      case 'blo': {
        if (!this.javascriptBlo) {
          this.angularBlo = (!this.angularBlo);
          this.javascriptBlo = (!this.javascriptBlo);
          this.componentBlo = false;
          this.templateBlo = false;
        }
        break;
      }
      case 'lat': {
        if (!this.javascriptLat) {
          this.angularLat = (!this.angularLat);
          this.javascriptLat = (!this.javascriptLat);
          this.componentLat = false;
          this.templateLat = false;
        }
        break;
      }
      case 'con': {
        if (!this.javascriptCon) {
          this.angularCon = (!this.angularCon);
          this.javascriptCon = (!this.javascriptCon);
          this.componentCon = false;
          this.templateCon = false;
        }
        break;
      }
      case 'phy': {
        if (!this.javascriptPhy) {
          this.angularPhy = (!this.angularPhy);
          this.javascriptPhy = (!this.javascriptPhy);
          this.componentPhy = false;
          this.templatePhy = false;
        }
        break;
      }
      case 'one': {
        if (!this.javascriptOne) {
          this.angularOne = (!this.angularOne);
          this.javascriptOne = (!this.javascriptOne);
          this.componentOne = false;
          this.templateOne = false;
        }
        break;
      }
      case 'ic': {
        if (!this.javascriptIc) {
          this.angularIc = (!this.angularIc);
          this.javascriptIc = (!this.javascriptIc);
          this.componentIc = false;
          this.templateIc = false;
        }
        break;
      }
    }


  }

  showtaban(id) {
    switch (id) {
      case 'msa': {
        if (!this.angularMsa) {
          this.angularMsa = (!this.angularMsa);
          this.javascriptMsa = (!this.javascriptMsa);
          this.componentMsa = true;
          this.templateMsa = false;
        }
        break;
      }
      case 'sin': {
        if (!this.angularSin) {
          this.angularSin = (!this.angularSin);
          this.javascriptSin = (!this.javascriptSin);
          this.componentSin = true;
          this.templateSin = false;
        }
        break;
      }
      case 'reg': {
        if (!this.angularReg) {
          this.angularReg = (!this.angularReg);
          this.javascriptReg = (!this.javascriptReg);
          this.componentReg = true;
          this.templateReg = false;
        }
        break;
      }
      case 'pat': {
        if (!this.angularPat) {
          this.angularPat = (!this.angularPat);
          this.javascriptPat = (!this.javascriptPat);
          this.componentPat = true;
          this.templatePat = false;
        }
        break;
      }
      case 'col': {
        if (!this.angularCol) {
          this.angularCol = (!this.angularCol);
          this.javascriptCol = (!this.javascriptCol);
          this.componentCol = true;
          this.templateCol = false;
        }
        break;
      }
      case 'blo': {
        if (!this.angularBlo) {
          this.angularBlo = (!this.angularBlo);
          this.javascriptBlo = (!this.javascriptBlo);
          this.componentBlo = true;
          this.templateBlo = false;
        }
        break;
      }
      case 'lat': {
        if (!this.angularLat) {
          this.angularLat = (!this.angularLat);
          this.javascriptLat = (!this.javascriptLat);
          this.componentLat = true;
          this.templateLat = false;
        }
        break;
      }
      case 'con': {
        if (!this.angularCon) {
          this.angularCon = (!this.angularCon);
          this.javascriptCon = (!this.javascriptCon);
          this.componentCon = true;
          this.templateCon = false;
        }
        break;
      }
      case 'phy': {
        if (!this.angularPhy) {
          this.angularPhy = (!this.angularPhy);
          this.javascriptPhy = (!this.javascriptPhy);
          this.componentPhy = true;
          this.templatePhy = false;
        }
        break;
      }
      case 'one': {
        if (!this.angularOne) {
          this.angularOne = (!this.angularOne);
          this.javascriptOne = (!this.javascriptOne);
          this.componentOne = true;
          this.templateOne = false;
        }
        break;
      }
      case 'ic': {
        if (!this.angularIc) {
          this.angularIc = (!this.angularIc);
          this.javascriptIc = (!this.javascriptIc);
          this.componentIc = true;
          this.templateIc = false;
        }
        break;
      }
    }

  }

  showtabcom(id) {
    switch (id) {
      case 'msa': {
        if (!this.componentMsa) {
          this.componentMsa = (!this.componentMsa);
          this.templateMsa = (!this.templateMsa);
        }
        break;
      }
      case 'sin': {
        if (!this.componentSin) {
          this.componentSin = (!this.componentSin);
          this.templateSin = (!this.templateSin);
        }
        break;
      }
      case 'reg': {
        if (!this.componentReg) {
          this.componentReg = (!this.componentReg);
          this.templateReg = (!this.templateReg);
        }
        break;
      }
      case 'pat': {
        if (!this.componentPat) {
          this.componentPat = (!this.componentPat);
          this.templatePat = (!this.templatePat);
        }
        break;
      }
      case 'col': {
        if (!this.componentCol) {
          this.componentCol = (!this.componentCol);
          this.templateCol = (!this.templateCol);
        }
        break;
      }
      case 'blo': {
        if (!this.componentBlo) {
          this.componentBlo = (!this.componentBlo);
          this.templateBlo = (!this.templateBlo);
        }
        break;
      }
      case 'lat': {
        if (!this.componentLat) {
          this.componentLat = (!this.componentLat);
          this.templateLat = (!this.templateLat);
        }
        break;
      }
      case 'con': {
        if (!this.componentCon) {
          this.componentCon = (!this.componentCon);
          this.templateCon = (!this.templateCon);
        }
        break;
      }
      case 'phy': {
        if (!this.componentPhy) {
          this.componentPhy = (!this.componentPhy);
          this.templatePhy = (!this.templatePhy);
        }
        break;
      }
      case 'one': {
        if (!this.componentOne) {
          this.componentOne = (!this.componentOne);
          this.templateOne = (!this.templateOne);
        }
        break;
      }
      case 'ic': {
        if (!this.componentIc) {
          this.componentIc = (!this.componentIc);
          this.templateIc = (!this.templateIc);
        }
        break;
      }
    }

  }

  showtabtem(id) {
    switch (id) {
      case 'msa': {
        if (!this.templateMsa) {
          this.componentMsa = (!this.componentMsa);
          this.templateMsa = (!this.templateMsa);
        }
        break;
      }
      case 'sin': {
        if (!this.templateSin) {
          this.componentSin = (!this.componentSin);
          this.templateSin = (!this.templateSin);
        }
        break;
      }
      case 'reg': {
        if (!this.templateReg) {
          this.componentReg = (!this.componentReg);
          this.templateReg = (!this.templateReg);
        }
        break;
      }
      case 'pat': {
        if (!this.templatePat) {
          this.componentPat = (!this.componentPat);
          this.templatePat = (!this.templatePat);
        }
        break;
      }
      case 'col': {
        if (!this.templateCol) {
          this.componentCol = (!this.componentCol);
          this.templateCol = (!this.templateCol);
        }
        break;
      }
      case 'blo': {
        if (!this.templateBlo) {
          this.componentBlo = (!this.componentBlo);
          this.templateBlo = (!this.templateBlo);
        }
        break;
      }
      case 'lat': {
        if (!this.templateLat) {
          this.componentLat = (!this.componentLat);
          this.templateLat = (!this.templateLat);
        }
        break;
      }
      case 'con': {
        if (!this.templateCon) {
          this.componentCon = (!this.componentCon);
          this.templateCon = (!this.templateCon);
        }
        break;
      }
      case 'phy': {
        if (!this.templatePhy) {
          this.componentPhy = (!this.componentPhy);
          this.templatePhy = (!this.templatePhy);
        }
        break;
      }
      case 'one': {
        if (!this.templateOne) {
          this.componentOne = (!this.componentOne);
          this.templateOne = (!this.templateOne);
        }
        break;
      }
      case 'ic': {
        if (!this.templateIc) {
          this.componentIc = (!this.componentIc);
          this.templateIc = (!this.templateIc);
        }
        break;
      }
    }
  }
}
