import {Component, OnInit} from '@angular/core';
import {SequenceViewer} from 'sequence-viewer-typescript/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProSeqViewer-documentation';
  // multisequence
  angularMsa = false;
  javascriptMsa = true;
  // singlesequence
  angularSin = false;
  javascriptSin = true;
  // regions
  angularReg = false;
  javascriptReg = true;
  // icons
  angularIc = false;
  javascriptIc = true;
  // patterns
  angularPat = false;
  javascriptPat = true;
  // colorscheme clustal
  angularCol = false;
  javascriptCol = true;
  // blosum
  angularBlo = false;
  javascriptBlo = true;
  // lateral
  angularLat = false;
  javascriptLat = true;
  // consensus identity
  angularCon = false;
  javascriptCon = true;
  // consensus physical
  angularPhy = false;
  javascriptPhy = true;
  // one line
  angularOne = false;
  javascriptOne = true;

  ngOnInit(): void {

    // GENERAL EXAMPLE: multi sequence
    const s0 = new SequenceViewer('sqv0');
    const seqs0 = [
      // tslint:disable-next-line:max-line-length
      {sequence: '--------DFEYLQLVLTWPASFCYANH--CE------RIAPNNFTIHGLWPDNVKT-RLHNCKPKPTYSY-FTGKMLNDLDKHWMQLKFEQDY--GRTEQPSWKYQYIK', id: 1, label: '1iooA'},
      // tslint:disable-next-line:max-line-length
      {sequence: 'DKRLRDNHEWKKLIMVQHWPETVCEKIQNDCR-------DPPDYWTIHGLWPDKSEG-----CNRSWPFNLEEIKDLLPEMRAYWPDVIHSFPN-----RSRFWKHEWEK', id: 2, label: '1iqqA'},
      // tslint:disable-next-line:max-line-length
      {sequence: '-----GHKEFDYFTLALTWSGTECLSVKDSCPTNACSRSEVETGFTIKGLWPDYDDGTWPSCCE-GAKYDQNEISILSNDLSKYWPSYSCPSSSACGSFDASDLAYEWAK', id: 3, label: '1iybA'},
      // tslint:disable-next-line:max-line-length
      {sequence: '---------YDYFQFTQQYQLAVCNSNRTLCK------DPPDKLFTVHGLWPSNMVGPDPSKCP-IKNIRK-REKLLEHQLEIIWPNVFDRTK------NNLFWDKEWMK', id: 4, label: '1jy5A'},
      // tslint:disable-next-line:max-line-length
      {sequence: '--YVEFAQDFDFFYFVQQWPGSYCDTKQSCCYPK---TGKPASDFGIHGLWPNNNDGSYPSNCDSNSPYDQSQVSDLISRMQQNWPTLACPSGT-----GSAFWSHEWEK', id: 5, label: '1ucdA'},
      // tslint:disable-next-line:max-line-length
      {sequence: '---------FDSFWFVQQWPPAVCSFQKSGSCP-----GSGLRTFTIHGLWPQQ-SGTSLTNCP-GSPFDITKISHLQSQLNTLWPNVLRAN-------NQQFWSHEWTK', id: 7, label: '3t0oA'}
    ];


    const opt = { topIndexes: true, colorScheme: 'blosum62'};
    s0.draw(seqs0, opt);

    // GENERAL EXAMPLE: single sequence
    const seqSingle = new SequenceViewer('sqvSingle');
    const seq = [
      {sequence: 'MASESGKLWGGRFVGAVDPIMEKFNASIAYDRHLWEVDVQGSKAYSRGLEKAGLLTKAEMDQILHGLDKVAEEWAQGTFKLNSNDEDIHTANERRLKELIGATAGKLHTGRSRNDQVVTDLRLWMRQTCSTLSGLLWELIRTMVDRAEAERDVLFPGYTHLQRAQPIRWSHWILSHAVALTRDSERLLEVRKRINVLPLGSGAIAGNPLGVDRELLRAELNFGAITLNSMDATSERDFVAEFLFWASLCMTHLSRMAEDLILYCTKEFSFVQLSDAYSTGSSLMPQKKNPDSLELIRSKAGRVFGRCAGLLMTLKGLPSTYNKDLQEDKEAVFEVSDTMSAVLQVATGVISTLQIHQENMGQALSPDMLATDLAYYLVRKGMPFRQAHEASGKAVFMAETKGVALNQLSLQELQTISPLFSGDVICVWDYGHSVEQYGALGGTARSSVDWQIRQVRALLQAQQA', id: 1, label: 'P04424 | Homo sapiens'}
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
      {sequenceId: 1, start: 107, end: 110, icon: 'turn'},
      {sequenceId: 1, start: 111, end: 112, icon: 'noSecondary'},
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
      {sequenceId: 1, start: 198, end: 201, icon: 'noSecondary'},
      {sequenceId: 1, start: 202, end: 205, icon: 'turn'},
      {sequenceId: 1, start: 206, end: 212, icon: 'noSecondary'},
      {sequenceId: 1, start: 213, end: 219, icon: 'helix'},
      {sequenceId: 1, start: 220, end: 222, icon: 'helix'},
      {sequenceId: 1, start: 223, end: 224, icon: 'strand'},
      {sequenceId: 1, start: 225, end: 225, icon: 'arrowRight'},
      {sequenceId: 1, start: 226, end: 236, icon: 'noSecondary'},
      {sequenceId: 1, start: 237, end: 264, icon: 'helix'},
      {sequenceId: 1, start: 265, end: 265, icon: 'noSecondary'},
      {sequenceId: 1, start: 266, end: 268, icon: 'turn'},
      {sequenceId: 1, start: 269, end: 285, icon: 'noSecondary'},
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
      {sequence: 'MVAVEQSEASRLGPVFDSCRANNRAALIGYLPTGYPDVPASVAAMTALVE' +
          'SGCDIIEVGVPYSDPGMDGPTIARATEAALRGGVRVRDTLAAVEAISIAGGRAVVMT' +
          'YWNPVLRYGVDAFARDLAAAGGLGLITPDLIPDEAQQWLAASEEHRLDRIFLVAPSS' +
          'TPERLAATVEASRGFVYAASTMGVTGARDAVSQAAPELVGRVKAVSDIPVGVGLGVR' +
          'SRAQAAQIAQYADGVIVGSALVTALTEGLPRLRALTGELAAGVRLGMSAHHHHHH',
        id: 1, label: '6ub9A | Mycobacterium tuberculosis'}
    ];
    const reg1 = [
      {sequenceId: 1, start: 25, end: 53, backgroundColor: '#2f6690', color: '#FFFFFF'},
      {sequenceId: 1, start: 54, end: 63, backgroundColor: '#FF6978', color: '#FFFFFF'},
      {sequenceId: 1, start: 64, end: 84, backgroundColor: '#FAC05E', color: '#FFFFFF'},
      {sequenceId: 1, start: 85, end: 100, backgroundColor: '#FF6978', color: '#FFFFFF'},
      {sequenceId: 1, start: 101, end: 127, backgroundColor: '#2f6690', color: '#FFFFFF'},
      {sequenceId: 1, start: 128, end: 152, backgroundColor: '#FF6978', color: '#FFFFFF'},
      {sequenceId: 1, start: 153, end: 177, backgroundColor: '#2f6690', color: '#FFFFFF'},
      {sequenceId: 1, start: 178, end: 210, backgroundColor: '#FF6978', color: '#FFFFFF'},
      {sequenceId: 1, start: 211, end: 232, backgroundColor: '#2f6690', color: '#FFFFFF'},
      {sequenceId: 1, start: 233, end: 238, backgroundColor: '#FF6978', color: '#FFFFFF'},
      {sequenceId: 1, start: 239, end: 249, backgroundColor: '#FAC05E', color: '#FFFFFF'},
      {sequenceId: 1, start: 250, end: 267, backgroundColor: '#FF6978', color: '#FFFFFF'},
    ];
    s2.draw(seqs, reg1);

    // icons EXAMPLE

    const s3 = new SequenceViewer('sqv3');
    const seq3 = [
      {sequence: 'MASESGKLWGGRFVGAVDPIMEKFNASIAYDRHLWEVDVQGSKAYSRGLEKAGLLTKAEMDQILHGLDKVAEEWAQGTFKLNSNDEDIHTANERRLKELIGATAGKLHTGRSRNDQVVTDLRLWMRQTCSTLSGLLWELIRTMVDRAEAERDVLFPGYTHLQRAQPIRWSHWILSHAVALTRDSERLLEVRKRINVLPLGSGAIAGNPLGVDRELLRAELNFGAITLNSMDATSERDFVAEFLFWASLCMTHLSRMAEDL ILYCTKEFSFVQLSDAYSTGSSLMPQKKNPDSLELIRSKAGRVFGRCAGLLMTLKGLPSTYNKDLQEDKEAVFEVSDTMSAVLQVATGVISTLQIHQENMGQALSPDMLATDLAYYLVRKGMPFRQAHEASGKAVFMAETKGVALNQLSLQELQTISPLFSGDVICVWDYGHSVEQYGALGGTARSSVDWQIRQVRALLQAQQA', id: 1,  label: 'P04424 | Homo sapiens'}
    ];

    const opt3 = {chunkSize: 0};

    s3.draw(seq3, singleIco, opt3);

    // patterns EXAMPLE
    const s4 = new SequenceViewer('sqv4');
    const pat4 = [
      {sequenceId: 1, pattern: /RRP/g, backgroundColor: '#D72638'},
      {sequenceId: 2, pattern: /RRP/g, backgroundColor: '#D72638'},
      {sequenceId: 3, pattern: /RRP/g, backgroundColor: '#D72638'},
      {sequenceId: 1, pattern: /FGE/g, backgroundColor: '#FF570A'},
      {sequenceId: 2, pattern: /FGE/g, backgroundColor: '#FF570A'},
      {sequenceId: 3, pattern: /FGE/g, backgroundColor: '#FF570A'},
      {sequenceId: 1, pattern: /LSP/g, backgroundColor: '#FFBC42'},
      {sequenceId: 2, pattern: /LSP/g, backgroundColor: '#FFBC42'},
      {sequenceId: 3, pattern: /LSP/g, backgroundColor: '#FFBC42'}
    ];



    const patseq = [
      {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPASTSLSPFYLRPPSFLRAPSW', id: 1, label: 'sp|P69905|CRAB_HUMAN'},
      {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'sp|P01942|CRAB_ANAPL'},
      {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'sp|P13786|CRAB_CHICK'}
    ];
    s4.draw(pat4, patseq);

    // colorscheme EXAMPLE
    const s6 = new SequenceViewer('sqv6');
    const opt6 = { colorScheme: 'clustal'};
    const seqs6 = [
      {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'sp|P69905|CRAB_HUMAN'},
      {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'sp|P01942|CRAB_ANAPL'},
      {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'sp|P13786|CRAB_CHICK'}
    ];
    s6.draw(seqs6, opt6);

    // blosum62
    const sBlos = new SequenceViewer('sqvBlosum');
    const optBlos = { colorScheme: 'blosum62'};
    const seqsBlos = [
      {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'sp|P69905|CRAB_HUMAN'},
      {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'sp|P01942|CRAB_ANAPL'},
      {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'sp|P13786|CRAB_CHICK'}
    ];
    sBlos.draw(seqsBlos, optBlos);

    // indexes EXAMPLE
    const s5 = new SequenceViewer('sqv5');
    const seqs5 = [
      {sequence: 'MVLSPADKTNVKAA-----EYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG', id: 1, label: 'sp|P69905|CRAB_HUMAN', startIndex: 2}
    ];
    const opt5 = { lateralIndexesGap: true};
    s5.draw(seqs5, opt5);



    // consensus EXAMPLE
    const s7 = new SequenceViewer('sqv7');
    const seqs7 = [
      {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'sp|P69905|CRAB_HUMAN'},
      {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'sp|P01942|CRAB_ANAPL'},
      {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'sp|P13786|CRAB_CHICK'}
    ];
    const opt7 = { consensusType: 'identity', consensusThreshold: 80};
    s7.draw(seqs7, opt7);

    const sPhysical = new SequenceViewer('sqvPhysical');
    const seqsPhysical = [
      {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'sp|P69905|CRAB_HUMAN'},
      {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'sp|P01942|CRAB_ANAPL'},
      {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'sp|P13786|CRAB_CHICK'}
    ];
    const optPhysical = { consensusType: 'physical'};
    sPhysical.draw(seqsPhysical, optPhysical);

    // oneLineSetting EXAMPLE
    const s8 = new SequenceViewer('sqv8');
    const seqs8 = [
      {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'sp|P69905|CRAB_HUMAN'},
      {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'sp|P01942|CRAB_ANAPL'},
      {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'sp|P13786|CRAB_CHICK'}
    ];
    const opt8 = { oneLineSetting: true, oneLineWidth: '350px'};
    s8.draw(seqs8, opt8);

    // selections EXAMPLE
    const s9 = new SequenceViewer('sqv9');
    const seqs9 = [
      {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'sp|P69905|CRAB_HUMAN'},
      {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'sp|P01942|CRAB_ANAPL'},
      {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'sp|P13786|CRAB_CHICK'}
    ];
    s9.draw(seqs9);
  }


  showtabjs(id) {
    switch (id) {
      case 'msa': {
        if (!this.javascriptMsa) {
          this.angularMsa = (!this.angularMsa);
          this.javascriptMsa = (!this.javascriptMsa);
        }
        break;
      }
      case 'sin': {
        if (!this.javascriptSin) {
          this.angularSin = (!this.angularSin);
          this.javascriptSin = (!this.javascriptSin);
        }
        break;
      }
      case 'reg': {
        if (!this.javascriptReg) {
          this.angularReg = (!this.angularReg);
          this.javascriptReg = (!this.javascriptReg);
        }
        break;
      }
      case 'pat': {
        if (!this.javascriptPat) {
          this.angularPat = (!this.angularPat);
          this.javascriptPat = (!this.javascriptPat);
        }
        break;
      }
      case 'col': {
        if (!this.javascriptCol) {
          this.angularCol = (!this.angularCol);
          this.javascriptCol = (!this.javascriptCol);
        }
        break;
      }
      case 'blo': {
        if (!this.javascriptBlo) {
          this.angularBlo = (!this.angularBlo);
          this.javascriptBlo = (!this.javascriptBlo);
        }
        break;
      }
      case 'lat': {
        if (!this.javascriptLat) {
          this.angularLat = (!this.angularLat);
          this.javascriptLat = (!this.javascriptLat);
        }
        break;
      }
      case 'con': {
        if (!this.javascriptCon) {
          this.angularCon = (!this.angularCon);
          this.javascriptCon = (!this.javascriptCon);
        }
        break;
      }
      case 'phy': {
        if (!this.javascriptPhy) {
          this.angularPhy = (!this.angularPhy);
          this.javascriptPhy = (!this.javascriptPhy);
        }
        break;
      }
      case 'one': {
        if (!this.javascriptOne) {
          this.angularOne = (!this.angularOne);
          this.javascriptOne = (!this.javascriptOne);
        }
        break;
      }
      case 'ic': {
        if (!this.javascriptIc) {
          this.angularIc = (!this.angularIc);
          this.javascriptIc = (!this.javascriptIc);
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
        }
        break;
      }
      case 'sin': {
        if (!this.angularSin) {
          this.angularSin = (!this.angularSin);
          this.javascriptSin = (!this.javascriptSin);
        }
        break;
      }
      case 'reg': {
        if (!this.angularReg) {
          this.angularReg = (!this.angularReg);
          this.javascriptReg = (!this.javascriptReg);
        }
        break;
      }
      case 'pat': {
        if (!this.angularPat) {
          this.angularPat = (!this.angularPat);
          this.javascriptPat = (!this.javascriptPat);
        }
        break;
      }
      case 'col': {
        if (!this.angularCol) {
          this.angularCol = (!this.angularCol);
          this.javascriptCol = (!this.javascriptCol);
        }
        break;
      }
      case 'blo': {
        if (!this.angularBlo) {
          this.angularBlo = (!this.angularBlo);
          this.javascriptBlo = (!this.javascriptBlo);
        }
        break;
      }
      case 'lat': {
        if (!this.angularLat) {
          this.angularLat = (!this.angularLat);
          this.javascriptLat = (!this.javascriptLat);
        }
        break;
      }
      case 'con': {
        if (!this.angularCon) {
          this.angularCon = (!this.angularCon);
          this.javascriptCon = (!this.javascriptCon);
        }
        break;
      }
      case 'phy': {
        if (!this.angularPhy) {
          this.angularPhy = (!this.angularPhy);
          this.javascriptPhy = (!this.javascriptPhy);
        }
        break;
      }
      case 'one': {
        if (!this.angularOne) {
          this.angularOne = (!this.angularOne);
          this.javascriptOne = (!this.javascriptOne);
        }
        break;
      }
      case 'ic': {
        if (!this.angularIc) {
          this.angularIc = (!this.angularIc);
          this.javascriptIc = (!this.javascriptIc);
        }
        break;
      }
    }

  }
}
