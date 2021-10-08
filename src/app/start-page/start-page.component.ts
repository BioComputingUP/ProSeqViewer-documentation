import {Component, OnInit} from '@angular/core';
import {ProSeqViewer} from 'proseqviewer/dist';

@Component({
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
    title = 'ProSeqViewer';
    latindexoptions;
    topindexoptions;
    wrapoptionsnr1;
    wrapoptionsnr2;
    icons;
    regions;
    patterns;
    msa;
    clustaloptions;
    blosumdefaultoptions;
    blosumcustomoptions;
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
        this.msa = { sequences: [
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
                }]};

        const opt = {indexesLocation: 'top'};
        s0.draw({sequences: msa, options: opt});

        // GENERAL EXAMPLE: single sequence
        const seqSingle = new ProSeqViewer('sqvSingle');
        const seq = [
            {
                sequence: 'MASESGKLWGGRFVGAVDPIMEKFNASIAYDRHLWEVDVQGSKAYSRGLEKAGLLTKAEMDQILHGLDKVAEEWAQGTFKLNSNDEDIHTANERRLKELIGATAGKLHTGRSRNDQVVTDLRLWMRQTCSTLSGLLWELIRTMVDRAEAERDVLFPGYTHLQRAQPIRWSHWILSHAVALTRDSERLLEVRKRINVLPLGSGAIAGNPLGVDRELLRAELNFGAITLNSMDATSERDFVAEFLFWASLCMTHLSRMAEDLILYCTKEFSFVQLSDAYSTGSSLMPQKKNPDSLELIRSKAGRVFGRCAGLLMTLKGLPSTYNKDLQEDKEAVFEVSDTMSAVLQVATGVISTLQIHQENMGQALSPDMLATDLAYYLVRKGMPFRQAHEASGKAVFMAETKGVALNQLSLQELQTISPLFSGDVICVWDYGHSVEQYGALG',
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
            {sequenceId: 1, start: 435, end: 441, icon: 'noSecondary'}
        ];

        this.icons = { icons: [
                {sequenceId: 1, start: 19, end: 25, icon: 'helix'},
            ]};

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
        this.regions = {regions: [
                {sequenceId: 1, start: 25, end: 53, backgroundColor: '#2f6690', color: '#FFFFFF'}
            ]};
        s2.draw({sequences: seqs, regions: reg1});


        // patterns EXAMPLE
        const s4 = new ProSeqViewer('sqv4');
        const pat4 = [
            {sequenceId: 1, pattern: 'AA', backgroundColor: '#D72638'}, // todo:change to string when publish new package
            {sequenceId: 1, pattern: 'PD', backgroundColor: '#FF570A'},
            {sequenceId: 1, pattern: 'GV', backgroundColor: '#FFBC42'},
        ];

        const txt = 'AA' ;
        this.patterns = {patterns: [
                {sequenceId: 1, pattern: txt, backgroundColor: '#D72638'}
            ]};

        s4.draw({patterns: pat4, sequences: seqs});

        // sequenceColor EXAMPLE
        const s6 = new ProSeqViewer('sqv6');
        const opt6 = {sequenceColor: 'clustal'};
        this.clustaloptions = {options: {sequenceColor: 'clustal'}};
        s6.draw({sequences: msa, options: opt6});

        // blosum62 default
        const sBlos = new ProSeqViewer('sqvBlosum');
        const optBlos = {sequenceColorMatrix: 'blosum62'};
        this.blosumdefaultoptions = {options: {sequenceColorMatrix: 'blosum62'}};
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

        // blosum62 default
        const sBlos2 = new ProSeqViewer('sqvBlosumCustom');

        const substitutionMatrixBlosum = { WF: [ '#FFB3AD', '#000000'], QQ: [ '#FFB3AD', '#000000'],
            HH: [ '#FF928B', '#000000'], YY: [ '#FF7A70', '#000000'], ZZ: [ '#FF7A70', '#000000'],
            CC: [ '#FF7A70', '#000000'], PP: [ '#FF7A70', '#000000'], VI: [ '#FFB3AD', '#000000'],
            VM: [ '#FFB3AD', '#000000'], KK: [ '#FFB3AD', '#000000'], ZK: [ '#CFDBF2', '#000000'],
            DN: [ '#FFB3AD', '#000000'], SS: [ '#FF928B', '#000000'], QR: [ '#FF928B', '#000000'],
            NN: [ '#FF7A70', '#000000'], YF: [ '#FFB3AD', '#000000'], VL: [ '#FFB3AD', '#000000'],
            KR: [ '#FFB3AD', '#000000'], ED: [ '#FFB3AD', '#000000'], VV: [ '#FFB3AD', '#000000'],
            MI: [ '#FFB3AD', '#000000'], MM: [ '#FFB3AD', '#000000'], ZD: [ '#FFB3AD', '#000000'],
            FF: [ '#FF928B', '#000000'], BD: [ '#FFB3AD', '#000000'], HN: [ '#FFB3AD', '#000000'],
            TT: [ '#FF928B', '#000000'], SN: [ '#FFD9D6', '#000000'], LL: [ '#FFB3AD', '#000000'],
            EQ: [ '#FFB3AD', '#000000'], YW: [ '#FFD9D6', '#000000'], EE: [ '#FFB3AD', '#000000'],
            KQ: [ '#FFB3AD', '#000000'], WW: [ '#FF7A70', '#000000'], ML: [ '#FF7A70', '#000000'],
            KE: [ '#FFB3AD', '#000000'], ZE: [ '#FFD9D6', '#000000'], ZQ: [ '#FF928B', '#000000'],
            BE: [ '#FFB3AD', '#000000'], DD: [ '#FFB3AD', '#000000'], SA: [ '#FF928B', '#000000'],
            YH: [ '#FFB3AD', '#000000'], GG: [ '#FFB3AD', '#000000'], AA: [ '#FF928B', '#000000'],
            II: [ '#FF928B', '#000000'], TS: [ '#FFD9D6', '#000000'], RR: [ '#FFB3AD', '#000000'],
            LI: [ '#FFB3AD', '#000000'], ZB: [ '#FFD9D6', '#000000'], BN: [ '#FFB3AD', '#000000'],
            BB: [ '#FF928B', '#000000']
        };
        const substitutionMatrix = {
            WF: {backgroundColor: '#FFB3AD'}, QQ: {backgroundColor: '#FFB3AD'},
        };
        this.blosumcustomoptions = {options: {sequenceColorMatrix: substitutionMatrix}};

        sBlos2.draw({sequences: seqsBlos, options: {sequenceColorMatrix: substitutionMatrixBlosum}});

        //
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
        this.latindexoptions = {options: {indexesLocation: 'lateral'}};
        const latindexoptions = {indexesLocation: 'lateral'};
        s5.draw({sequences: seqs5, options: latindexoptions});
        // top
        const s10 = new ProSeqViewer('sqv10');
        this.topindexoptions =  {options: {indexesLocation: 'top'}};
        const topindexoptions = {indexesLocation: 'top'};
        s10.draw({sequences: seqs5, options: topindexoptions});

        // consensus EXAMPLE
        const s7 = new ProSeqViewer('sqv7');
        const seqs7 = [
            {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'CRAB_HUMAN'},
            {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'CRAB_ANAPL'},
            {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'CRAB_CHICK'}
        ];
        const opt7 = {consensusColorIdentity: 'identity', consensusDotThreshold: 80};
        this.consensusidentity = {options: {consensusColorIdentity: 'identity', consensusDotThreshold: 80}};
        s7.draw({sequences: seqs7, options: opt7});

        const sPhysical = new ProSeqViewer('sqvPhysical');
        const seqsPhysical = [
            {sequence: 'MDIAIHHPWIRRPFFPFHSPSRLFDQFFGEHLLESDLFPTSTSLSPFYLRPPSFLRAPSW', id: 1, label: 'CRAB_HUMAN'},
            {sequence: 'MDITIHNPLIRRPLFSWLAPSRIFDQIFGEHLQESELLPASPSLSPFLMRSPI-FRMPSW', id: 2, label: 'CRAB_ANAPL'},
            {sequence: 'MDITIHNPLVRRPLFSWLTPSRIFDQIFGEHLQESELLPTSPSLSPFLMRSPF-FRMPSW', id: 3, label: 'CRAB_CHICK'}
        ];
        const optPhysical = {consensusColorMapping: 'physical'};
        this.consensusphysical = {options: {consensusColorMapping: 'physical'}};
        sPhysical.draw({sequences: seqsPhysical, options: optPhysical});

        //
        // wrapline EXAMPLE, responsive
        const s13 = new ProSeqViewer('sqv13');
        const wrapoptionsnr1 = {wrapLine: false, chunkSize: 20, viewerWidth: '350px'};
        this.wrapoptionsnr1 = { options: {wrapLine: false, viewerWidth: '350px', chunkSize: 20}};

        s13.draw({sequences: seqs5, options: wrapoptionsnr1});

        // wrapline EXAMPLE, non-responsive
        const s8 = new ProSeqViewer('sqv8');
        this.wrapoptionsnr2 = { options: {wrapLine: true, chunkSize: 20}};
        const wrapoptionsnr2 = {wrapLine: true, chunkSize: 20};
        s8.draw({sequences: seqs5, options: wrapoptionsnr2});

        // selections EXAMPLE
        const s9 = new ProSeqViewer('sqv9');
        const seqs9 = [
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
        s9.draw({sequences: seqs9});
    }

}
