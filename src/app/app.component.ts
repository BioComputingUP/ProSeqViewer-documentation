import {Component, OnInit} from '@angular/core';
import {ProSeqViewer} from 'proseqviewer/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProSeqViewer-documentation';
  selectedChar;
  positionX;
  positionY;
  latindexoptions;
  topindexoptions;
  wrapoptionsnr;
  icons;
  regions;
  patterns;
  msa;
  clustaloptions;
  blosumdefaultoptions;
  // blosumcustomoptions;
  consensusidentity;
  consensusphysical;
  input;

  ngOnInit(): void {

      // GENERAL EXAMPLE: multiple sequence
      const s0 = new ProSeqViewer('sqv0');
      const msa = [
          {
              sequence: 'GTREVPADAYYGVHTLRAIENFYISNNKISDIPEFVRGMVMVKKAAAMANKELQTIPKSV' +
                  'ANAIIAACDEVLNNGKCMDQFPVDVYQGGAGTSVNMNTNEVLANIGLELMGHQKGEYQYLNPNDHVNKCQSTNDAYPTGFRIAV',
              id: 1, label: 'ASPA_ECOLI/13-157'
          },
          {
              sequence: 'GEKQIEADVYYGIQTLRASENFPITGYKIHEE..MINALAIVKKAAALANMDVKRLYEGIGQAIVQAADEILE.GKWHDQFIVDPIQGGA' +
                  'GTSMNMNANEVIGNRALEIMGHKKGDYIHLSPNTHVNMSQSTNDVFPTAIHIST',
              id: 2, label: 'ASPA_BACSU/16-157'
          },
          {
              sequence: 'MKYTDTAPKLFMNTGTKFPRRIIWS.............MGVLKKSCAKVNADLGLLDKKIADSIIKASDDLID.GKLDDKIVLDVFQTGSGTGLNMNVNEV' +
                  'IAEVASSYSN......LKVHPNDHVNFGQSSNDTVPTAIRIAA',
              id: 3, label: 'FUMC_SACS2/1-126'
          },
          {
              sequence: 'GRFTQAADQRFKQFNDSLRFDYRLAEQDIV.......GSVAWSKALVTVGVLT....AEEQAQLEEALNVLLEDVRARPQQILESDAEDIHSWVEGKL' +
                  'IDKVG.................QLGKKLHTGRSRNDQVATDLKLWC',
              id: 4, label: 'ARLY_ECOLI/6-122'
          },
          {
              sequence: 'GRFVGAVDPIMEKFNASIAYDRHLWEVDVQ.......GSKAYSRGLEKAGLLT....KAE' +
                  'MDQILHGLDKVAEEWAQG.TFKLNSNDEDIHTANERRLKELIG.................ATAGKLHTGRSRNDQVVTD' +
                  'LRLWM',
              id: 5, label: 'ARLY_HUMAN/11-127'
          },
          {
              sequence: 'GGRFSGATDPLMAEFNKSIYSGKEMCEEDVI.......GSMAYAKALCQKNVIS....EEELNSILKGLEQIQREWNSG.QFVLEPSDEDVHTANERRLTEI' +
                  'IG.................DVAGKLHTGRSRNDQVTTDLRLW',
              id: 6, label: 'ARLY_SCHPO/12-128'
          },
          {
              sequence: 'GRFTGATDPLMDLYNASLPYDKVMYDADLT.......GTKVYTQGLNKLGLIT....TEELHLIHQGLEQIRQEWHDN.KFIIKAGDEDIHTANERRLG' +
                  'EIIG................KNISGKVHTGRSRNDQVATDMRIFV',
              id: 7, label: 'Q59R31_CANAL/14-130'
          },
          {
              sequence: 'GRFTGKTDPLMEKFNESLPFDKRLWAEDIK.......GSQAYAKALAKAGILT....HVE' +
                  'AASIVDGLSKVAEEWQSG.VFVVKPGDEDIHTANERRLTELIG.................' +
                  'AVGGKLHTGRSRNDQVATDYRLWL',
              id: 8, label: 'A0A125YZR4_VOLCA/23-139'
          },
          {
              sequence: 'ERYS..RPEMSAIWTDENRFQAWLE............VEILACEAWAELGVIP.......' +
                  '.KEDVKVMRENAS.FDINRILEIEKDTRHDVVAFTRAVSESLG.................' +
                  'EERKWVHYGLTSTDVVDTALSYLL',
              id: 9, label: 'PUR8_BACSU/3-108'
          },
          {
              sequence: 'GRYGDKVSALRGIFSEYGLLKFRVQVEVR........WLQKLAAHAAIKEVPA......F' +
                  'AADAIGYLDAIVASFSEEDAARIKTIERTTNHDVKA.VEYFLK....EKVAE...IPELH' +
                  'AVSEFIHFACTSEDINNLSHALML',
              id: 10, label: 'PUR8_ECOLI/14-137'
          }];
      this.msa = [
          {
              sequence: 'GTREVPADAYYGVHTLRAIENFYISNNKISDIPEFVRGMVMVKKAAAMANKELQTIPKSV' +
                  'ANAIIAACDEVLNNGKCMDQFPVDVYQGGAGTSVNMNTNEVLANIGLELMGHQKGEYQYLNPNDHVNKCQSTNDAYPTGFRIAV',
              id: 1, label: 'ASPA_ECOLI/13-157'
          },
          {
              sequence: 'GEKQIEADVYYGIQTLRASENFPITGYKIHEE..MINALAIVKKAAALANMDVKRLYEGIGQAIVQAADEILE.GKWHDQFIVDPIQGGA' +
                  'GTSMNMNANEVIGNRALEIMGHKKGDYIHLSPNTHVNMSQSTNDVFPTAIHIST',
              id: 2, label: 'ASPA_BACSU/16-157'
          },
          {
              sequence: 'MKYTDTAPKLFMNTGTKFPRRIIWS.............MGVLKKSCAKVNADLGLLDKKIADSIIKASDDLID.GKLDDKIVLDVFQTGSGTGLNMNVNEV' +
                  'IAEVASSYSN......LKVHPNDHVNFGQSSNDTVPTAIRIAA',
              id: 3, label: 'FUMC_SACS2/1-126'
          }];

      const opt = {indexesLocation: 'top'};
      s0.draw({sequences: msa, options: opt});

      // GENERAL EXAMPLE: single sequence
      const seqSingle = new ProSeqViewer('sqvSingle');
      const seq = [
          {
              sequence: 'MASESGKLWGGRFVGAVDPIMEKFNASIAYDRHLWEVDVQGSKAYSRGLEKAGLLTKAEMDQILHGLDKVAEEWAQGTFKLNSNDEDIHTANERRLKELIGATAGKLHTGRSRNDQVVTDLRLWMRQTCSTLSGLLWELIRTMVDRAEAERDVLFPGYTHLQRAQPIRWSHWILSHAVALTRDSERLLEVRKRINVLPLGSGAIAGNPLGVDRELLRAELNFGAITLNSMDATSERDFVAEFLFWASLCMTHLSRMAEDLILYCTKEFSFVQLSDAYSTGSSLMPQKKNPDSLELIRSKAGRVFGRCAGLLMTLKGLPSTYNKDLQEDKEAVFEVSDTMSAVLQVATGVISTLQIHQENMGQALSPDMLATDLAYYLVRKGMPFRQAHEASGKAVFMAETKGVALNQLSLQELQTISPLFSGDVICVWDYGHSVEQYGALGGTARSSVDWQIRQVRALLQAQQA',
              id: 1
          }
      ];

      const singleIco = [
          {sequenceId: 1, start: 1, end: 12, icon: 'noSecondary'},
          {sequenceId: 1, start: 13, end: 18, icon: 'noSecondary'},
          {sequenceId: 1, start: 19, end: 25, icon: 'helix'},
          {sequenceId: 1, start: 26, end: 27, icon: 'noSecondary'},
          {sequenceId: 1, start: 28, end: 51, icon: 'helix'},
          {sequenceId: 1, start: 52, end: 56, icon: 'noSecondary'},
          {sequenceId: 1, start: 57, end: 76, icon: 'helix'},
          {sequenceId: 1, start: 77, end: 87, icon: 'noSecondary'},
          {sequenceId: 1, start: 88, end: 106, icon: 'helix'},
          {sequenceId: 1, start: 107, end: 110, icon: 'turn'},
          {sequenceId: 1, start: 111, end: 112, icon: 'noSecondary'},
          {sequenceId: 1, start: 113, end: 149, icon: 'strand'},
          {sequenceId: 1, start: 150, end: 150, icon: 'arrowRight'},
          {sequenceId: 1, start: 151, end: 153, icon: 'noSecondary'},
          {sequenceId: 1, start: 154, end: 158, icon: 'strand'},
          {sequenceId: 1, start: 159, end: 159, icon: 'arrowRight'},
          {sequenceId: 1, start: 160, end: 161, icon: 'noSecondary'},
          {sequenceId: 1, start: 162, end: 194, icon: 'helix'},
          {sequenceId: 1, start: 195, end: 196, icon: 'strand'},
          {sequenceId: 1, start: 197, end: 197, icon: 'arrowRight'},
          {sequenceId: 1, start: 198, end: 201, icon: 'noSecondary'},
          {sequenceId: 1, start: 202, end: 205, icon: 'turn'},
          {sequenceId: 1, start: 206, end: 212, icon: 'noSecondary'},
          {sequenceId: 1, start: 213, end: 222, icon: 'helix'},
          {sequenceId: 1, start: 223, end: 224, icon: 'strand'},
          {sequenceId: 1, start: 225, end: 225, icon: 'arrowRight'},
          {sequenceId: 1, start: 226, end: 236, icon: 'noSecondary'},
          {sequenceId: 1, start: 237, end: 264, icon: 'helix'},
          {sequenceId: 1, start: 265, end: 265, icon: 'noSecondary'},
          {sequenceId: 1, start: 266, end: 268, icon: 'turn'},
          {sequenceId: 1, start: 269, end: 286, icon: 'noSecondary'},
          {sequenceId: 1, start: 287, end: 290, icon: 'noSecondary'},
          {sequenceId: 1, start: 291, end: 314, icon: 'helix'},
          {sequenceId: 1, start: 315, end: 321, icon: 'noSecondary'},
          {sequenceId: 1, start: 322, end: 352, icon: 'helix'},
          {sequenceId: 1, start: 353, end: 356, icon: 'noSecondary'},
          {sequenceId: 1, start: 357, end: 379, icon: 'helix'},
          {sequenceId: 1, start: 380, end: 383, icon: 'noSecondary'},
          {sequenceId: 1, start: 384, end: 390, icon: 'helix'},
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
          {sequenceId: 1, start: 444, end: 445, icon: 'arrowRight'}
      ];

      this.icons = [
          {sequenceId: 1, start: 19, end: 25, icon: 'helix'},
      ];

      const singleOpt = {chunkSize: 0};

      seqSingle.draw({sequences: seq, icons: singleIco, options: singleOpt});

      // REGIONS EXAMPLE
      const s2 = new ProSeqViewer('sqv2');
      const seqs = [
          {
              sequence: 'MVAVEQSEASRLGPVFDSCRANNRAALIGYLPTGYPDVPASVAAMTALVE' +
                  'SGCDIIEVGVPYSDPGMDGPTIARATEAALRGGVRVRDTLAAVEAISIAGGRAVVMT' +
                  'YWNPVLRYGVDAFARDLAAAGGLGLITPDLIPDEAQQWLAASEEHRLDRIFLVAPSS' +
                  'TPERLAATVEASRGFVYAASTMGVTGARDAVSQAAPELVGRVKAVSDIPVGVGLGVR' +
                  'SRAQAAQIAQYADGVIVGSALVTALTEGLPRLRALTGELAAGVRLGMSAHHHHHH',
              id: 1
          }
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
      this.regions = [
          {sequenceId: 1, start: 25, end: 53, backgroundColor: '#2f6690', color: '#FFFFFF'}
      ];
      s2.draw({sequences: seqs, regions: reg1});

      // icons EXAMPLE

      const s3 = new ProSeqViewer('sqv3');
      const seq3 = [
          {
              sequence: 'MASESGKLWGGRFVGAVDPIMEKFNASIAYDRHLWEVDVQGSKAYSRGLEKAGLLTKAEMDQILHGLDKVAEEWAQGTFKLNSNDEDIHTANERRLKELIGATAGKLHTGRSRNDQVVTDLRLWMRQTCSTLSGLLWELIRTMVDRAEAERDVLFPGYTHLQRAQPIRWSHWILSHAVALTRDSERLLEVRKRINVLPLGSGAIAGNPLGVDRELLRAELNFGAITLNSMDATSERDFVAEFLFWASLCMTHLSRMAEDL ILYCTKEFSFVQLSDAYSTGSSLMPQKKNPDSLELIRSKAGRVFGRCAGLLMTLKGLPSTYNKDLQEDKEAVFEVSDTMSAVLQVATGVISTLQIHQENMGQALSPDMLATDLAYYLVRKGMPFRQAHEASGKAVFMAETKGVALNQLSLQELQTISPLFSGDVICVWDYGHSVEQYGALGGTARSSVDWQIRQVRALLQAQQA',
              id: 1,
              label: 'P04424 | Homo sapiens'
          }
      ];

      const opt3 = {chunkSize: 0};

      s3.draw({sequences: seq3, icons: singleIco, options: opt3});

      // patterns EXAMPLE
      const s4 = new ProSeqViewer('sqv4');
      const pat4 = [
          {sequenceId: 1, pattern: /AA/g, backgroundColor: '#D72638'},
          {sequenceId: 1, pattern: /PD/g, backgroundColor: '#FF570A'},
          {sequenceId: 1, pattern: /GV/g, backgroundColor: '#FFBC42'},
      ];

      this.patterns = [
          {sequenceId: 1, pattern: /AA/g, backgroundColor: '#D72638'}
      ];

      s4.draw({patterns: pat4, sequences: seqs});

      // sequenceColor EXAMPLE
      const s6 = new ProSeqViewer('sqv6');
      const opt6 = {sequenceColor: 'clustal'};
      this.clustaloptions = {sequenceColor: 'clustal'};
      s6.draw({sequences: msa, options: opt6});

      // blosum62
      const sBlos = new ProSeqViewer('sqvBlosum');
      const optBlos = {sequenceColorMatrix: 'blosum62'};
      this.blosumdefaultoptions = {sequenceColorMatrix: 'blosum62'};
      const seqsBlos = [
          {
              sequence: 'GTREVPADAYYGVHTLRAIENFYISNNKISDIPEFVRGMVMVKKAAAMANKELQTIPKSV' +
                  'ANAIIAACDEVLNNGKCMDQFPVDVYQGGAGTSVNMNTNEVLANIGLELMGHQKGEYQYLNPNDHVNKCQSTNDAYPTGFRIAV',
              id: 1, label: 'ASPA_ECOLI/13-157'
          },
          {
              sequence: 'GEKQIEADVYYGIQTLRASENFPITGYKIHEE..MINALAIVKKAAALANMDVKRLYEGIGQAIVQAADEILE.GKWHDQFIVDPIQGGA' +
                  'GTSMNMNANEVIGNRALEIMGHKKGDYIHLSPNTHVNMSQSTNDVFPTAIHIST',
              id: 2, label: 'ASPA_BACSU/16-157'
          },
          {
              sequence: 'MKYTDTAPKLFMNTGTKFPRRIIWS.............MGVLKKSCAKVNADLGLLDKKIADSIIKASDDLID.GKLDDKIVLDVFQTGSGTGLNMNVNEV' +
                  'IAEVASSYSN......LKVHPNDHVNFGQSSNDTVPTAIRIAA',
              id: 3, label: 'FUMC_SACS2/1-126'
          },
          {
              sequence: 'GRFTQAADQRFKQFNDSLRFDYRLAEQDIV.......GSVAWSKALVTVGVLT....AEEQAQLEEALNVLLEDVRARPQQILESDAEDIHSWVEGKL' +
                  'IDKVG.................QLGKKLHTGRSRNDQVATDLKLWC',
              id: 4, label: 'ARLY_ECOLI/6-122'
          },
          {
              sequence: 'GRFVGAVDPIMEKFNASIAYDRHLWEVDVQ.......GSKAYSRGLEKAGLLT....KAE' +
                  'MDQILHGLDKVAEEWAQG.TFKLNSNDEDIHTANERRLKELIG.................ATAGKLHTGRSRNDQVVTD' +
                  'LRLWM',
              id: 5, label: 'ARLY_HUMAN/11-127'
          },
          {
              sequence: 'GGRFSGATDPLMAEFNKSIYSGKEMCEEDVI.......GSMAYAKALCQKNVIS....EEELNSILKGLEQIQREWNSG.QFVLEPSDEDVHTANERRLTEI' +
                  'IG.................DVAGKLHTGRSRNDQVTTDLRLW',
              id: 6, label: 'ARLY_SCHPO/12-128'
          },
          {
              sequence: 'GRFTGATDPLMDLYNASLPYDKVMYDADLT.......GTKVYTQGLNKLGLIT....TEELHLIHQGLEQIRQEWHDN.KFIIKAGDEDIHTANERRLG' +
                  'EIIG................KNISGKVHTGRSRNDQVATDMRIFV',
              id: 7, label: 'Q59R31_CANAL/14-130'
          },
          {
              sequence: 'GRFTGKTDPLMEKFNESLPFDKRLWAEDIK.......GSQAYAKALAKAGILT....HVE' +
                  'AASIVDGLSKVAEEWQSG.VFVVKPGDEDIHTANERRLTELIG.................' +
                  'AVGGKLHTGRSRNDQVATDYRLWL',
              id: 8, label: 'A0A125YZR4_VOLCA/23-139'
          },
          {
              sequence: 'ERYS..RPEMSAIWTDENRFQAWLE............VEILACEAWAELGVIP.......' +
                  '.KEDVKVMRENAS.FDINRILEIEKDTRHDVVAFTRAVSESLG.................' +
                  'EERKWVHYGLTSTDVVDTALSYLL',
              id: 9, label: 'PUR8_BACSU/3-108'
          },
          {
              sequence: 'GRYGDKVSALRGIFSEYGLLKFRVQVEVR........WLQKLAAHAAIKEVPA......F' +
                  'AADAIGYLDAIVASFSEEDAARIKTIERTTNHDVKA.VEYFLK....EKVAE...IPELH' +
                  'AVSEFIHFACTSEDINNLSHALML',
              id: 10, label: 'PUR8_ECOLI/14-137'
          }
      ];
      sBlos.draw({sequences: seqsBlos, options: optBlos});

      // indexes EXAMPLE
      // lateral
      const s5 = new ProSeqViewer('sqv5');
      const seqs5 = [
          {
              sequence: 'MSNNIRIEEDLLGTREVPADAYYGVHTLRAIENFYISNNKISDIPEFVRGMVMVKKAAAMANKELQTIPKSVANAIIA' +
                  'ACDEVLNNGKCMDQFPVDVYQGGAGTSVNMNTNEVLANIGLELMGHQKGEYQYLNPNDHVNKCQSTNDAYPTGFRIAVYSSLIKLVD' +
                  'AINQLREGFERKAVEFQDILKMGRTQLQDAVPMT', id: 1, startIndex: 50
          }
      ];
      this.latindexoptions = {indexesLocation: 'lateral'};
      s5.draw({sequences: seqs5, options: this.latindexoptions});
      // top
      const s10 = new ProSeqViewer('sqv10');
      this.topindexoptions = {indexesLocation: 'top'};
      s10.draw({sequences: seqs5, options: this.topindexoptions});

      // consensus EXAMPLE
      const s7 = new ProSeqViewer('sqv7');
      const seqs7 = [
          {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'CRAB_HUMAN'},
          {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'CRAB_ANAPL'},
          {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'CRAB_CHICK'}
      ];
      const opt7 = {consensusColorIdentity: 'identity', consensusDotThreshold: 80};
      this.consensusidentity = {consensusColorIdentity: 'identity', consensusDotThreshold: 80};
      s7.draw({sequences: seqs7, options: opt7});

      const sPhysical = new ProSeqViewer('sqvPhysical');
      const seqsPhysical = [
          {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'CRAB_HUMAN'},
          {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'CRAB_ANAPL'},
          {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'CRAB_CHICK'}
      ];
      const optPhysical = {consensusColorMapping: 'physical'};
      this.consensusphysical = {consensusColorMapping: 'physical'};
      sPhysical.draw({sequences: seqsPhysical, options: optPhysical});


      // wrapline EXAMPLE, responsive
      const s13 = new ProSeqViewer('sqv13');
      s13.draw({sequences: seqs5});

      // wrapline EXAMPLE, non-responsive
      const s8 = new ProSeqViewer('sqv8');
      this.wrapoptionsnr = {wrapLine: false, chunkSize: 20};
      s8.draw({sequences: seqs5, options: this.wrapoptionsnr});

      // selections EXAMPLE
      const s9 = new ProSeqViewer('sqv9');
      const seqs9 = [
          {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'CRAB_HUMAN'},
          {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'CRAB_ANAPL'},
          {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'CRAB_CHICK'}
      ];
      s9.draw({sequences: seqs9});


      window.addEventListener('onRegionSelected', (e) => {
          console.log('character selected', e['detail'].char);
          this.selectedChar = e['detail'].char;
          this.positionX = e['detail'].x;
          this.positionY = e['detail'].y;
      });
  }


}
