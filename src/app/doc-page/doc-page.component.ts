import {Component, OnInit} from '@angular/core';
import {ProSeqViewer} from 'proseqviewer/dist';


@Component({
    selector: 'app-doc',
    templateUrl: './doc-page.component.html',
    styleUrls: ['./doc-page.component.scss', '../start-page/start-page.component.scss']
})
export class DocPageComponent implements OnInit {
    title = 'ProSeqViewer-doc';
    selectedChar;
    positionX;
    positionY;


    code0 = `<head>
    <link rel="stylesheet" type="text/css" href="sqv.css">
    <script src="sqv-bundle.js"></script>
</head>`;

    code1 = `<head>
    <link rel="stylesheet" type="text/css" href="https://rawgithub.com/BioComputingUP/ProSeqViewer/master/dist/assets/proseqviewer.css">
    <script src="https://rawgithub.com/BioComputingUP/ProSeqViewer/master/dist/sqv-bundle.js"></script>
</head>`;

    code2 = `<body>
    <div id="psv"></div>
</body>`;

  code3 = `<head>
    <!--Put this block at the end of your head section-->
    <script>
        const sequences = [
            {sequence: 'TLRAIENFYISNNKISDIPEFVR', id: 1, label: 'ASPA_ECOLI/13-156'},
            {sequence: 'TLRASENFPITGYKIHEE..MIN', id: 2, label: 'ASPA_BACSU/16-156'},
            {sequence: 'GTKFPRRIIWS............', id: 3, label: 'FUMC_SACS2/1-124'}
        ]

        // Input icons
        const icons = [
            {sequenceId: 1, start: 2, end: 2, icon: 'lollipop'},
            {sequenceId: 1, start: 13, end: 13, icon: 'lollipop'}
        ]

        // Options and configuration
        const options = {
            chunkSize: 0,
            sequenceColor: 'clustal',
            lateralIndexes: false
        };

        // Initialize the viewer
        const psv = new ProSeqViewer('psv');

        // Generate the HTML
        psv.draw({sequences, options, icons});
    </script>
</head>`;

  code4 = `npm install proseqviewer`;

  code5 = `{
  styles: ["./node_modules/proseqviewer/dist/assets/proseqviewer.css"]
}`;

  code6 = `import {ProSeqViewer} from 'proseqviewer/dist';`;

  code7 = ` <div id="psv"></div>`;

  code8 = `// Input sequences
const sequences = [
    {sequence: 'TLRAIENFYISNNKISDIPEFVR', id: 1, label: 'ASPA_ECOLI/13-156'},
    {sequence: 'TLRASENFPITGYKIHEE..MIN', id: 2, label: 'ASPA_BACSU/16-156'},
    {sequence: 'GTKFPRRIIWS............', id: 3, label: 'FUMC_SACS2/1-124'}
]

// Input icons
const icons = [
    {sequenceId: 1, start: 2, end: 2, icon: 'lollipop'},
    {sequenceId: 1, start: 13, end: 13, icon: 'lollipop'}
]

// Options and configuration
const options = {
    chunkSize: 0,
    sequenceColor: 'clustal',
    lateralIndexes: false
};

// Initialize the viewer
const psv = new ProSeqViewer('psv');

// Generate the HTML
psv.draw({sequences, options, icons});`;

  code9 = `<span class="tooltipText" style="background-color: blue;">Tooltip text</span>`;

  code10 = `window.addEventListener('onHighlightSelection', (e) =>   {
  console.log('event type', e['detail'].eventType);
  console.log('text area', e['detail'].text);
});`;

  code11 = `window.addEventListener('onRegionSelected', (e) =>   {
  console.log('character selected', e['detail'].char);
  console.log('position x', e['detail'].x);
  console.log('position y', e['detail'].y);
});`;

  codeType = `sequences: Array<Sequences>;
regions?: Array<Regions>;
patterns?: Array<Patterns>;
icons?: Array<Icons>;
consensus?: Consensus;
options?: Options;
...
psv.draw({sequences, regions, patterns, icons, consensus, options});`;

    scroll(el: HTMLElement) {
      el.scrollIntoView({block: 'center'});
    }

  ngOnInit(): void {

        const detail = 'detail';



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

        window.addEventListener('onRegionSelected', (e) => {
            console.log('character selected', e[detail].char);
            this.selectedChar = e[detail].char;
            this.positionX = e[detail].x;
            this.positionY = e[detail].y;
        });
    }

}
