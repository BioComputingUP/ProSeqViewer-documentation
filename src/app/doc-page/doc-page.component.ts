import {Component, OnInit} from '@angular/core';
import {ProSeqViewer} from 'proseqviewer/dist';

@Component({
    selector: 'app-doc',
    templateUrl: './doc-page.component.html',
    styleUrls: ['./doc-page.component.scss']
})
export class DocPageComponent implements OnInit {
    title = 'ProSeqViewer-doc';
    selectedChar;
    positionX;
    positionY;
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
