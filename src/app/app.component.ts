import {Component, OnInit} from '@angular/core';
import {SequenceViewer} from 'sequence-viewer-typescript/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sequence-viewer-documentation';


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
      {sequence: 'MKTTRRSFLKLVGVSVVGLSLGQLGFDLEDAQAYAVKLKIEGAKEVGTVCPFCSVCCQVIAYVRNGKLVSTEGDPDFPVNEGALCAKGAALFSMYTNPHRLTKPLYRAPHSDKWVEKDWDWTLNQIARRVKDARDKDMILKNDKGQTVNRLESIFMMGTSHASNEECAVIHQAMRGLGVVHMDHQARVUHSPTVAALAESFGRGAMTNHWIDIKNTDAVLIIGSNAAEHHPVAFKWIMRARDNGAVLMHVDPKFSRTSARCDFHVPLRSGTDIAFLGGMVNHIIAKDLYFKDYVANYTNAAFVVGKDYAFEDGIFSGYDPKTRTYDRSKWEFEKGPDGGPVMDPTLKNERCVFNLMKKHYERYTLKNVSDVTGVSEENLLRVYDAFCATGRPDKAGTILYALGWTQHTVGVQNIRTSTLIQLLLGNIGVAGGGINALRGEPNVQGSTDHALLYHILPGYNAMPVAQWQTLADYNKANTPVTTLKNSANWWSNRPKYVASLLKGWFGDAATPENDFCYEYLPKLEKGEDYSYMYVMDRMYHGKLKGGFIFGVNPMNSFPNTNKMRAALDKLDWLVCSELHNSETTDNWKRPGVDPKACKTEVFLLPSAHRVEKAGTISNSGRWLQWFDKAVEPGQARNFADIFVPLVNKIRALYKAEGGTLPDPVLKLHWTDKFDPEEWTRRINGFFWADTKVGDKEYKRGQLVPAFGQLKDDGSTSSLNWLYTGSYTEEDGNKSKRRDARQTPMQANIGLFPNWSWCWPVNRRILYNRASVDVNGKPWNPKKAVIEWDGAKWVGDVPDGPWPPMADKEKGKLPFIMNKDGFAQFYGTGRMDGPFPEHYEPAETPLDSHPFSKQLSSPVYKFHTSDMDQIAKAADPKYPIVLTTYSLTEHWCGGGETRNVPNLLETEPQLYIEMSPELAEEKGIKNGDGVIVESIRGRAEAIAMVTVRIRPFTVMGKTVHLVGMPFAYGWTTPKCGDSTNRLTVGAYDPNTTIPESKACLVNVRKADKLTEIA', id: 1}
    ];
    const singleReg = [
      {sequenceId: 1, start: 311, end: 340, backgroundColor: '#78A1BB', color: '#FFFFFF'},
      {sequenceId: 1, start: 371, end: 390, backgroundColor: '#78A1BB', color: '#FFFFFF'},
      {sequenceId: 1, start: 411, end: 430, backgroundColor: '#ED254E', color: '#FFFFFF'},
      {sequenceId: 1, start: 481, end: 500, backgroundColor: '#ED254E', color: '#FFFFFF'},
      {sequenceId: 1, start: 521, end: 540, backgroundColor: '#283044', color: '#FFFFFF'},
      {sequenceId: 1, start: 521, end: 540, backgroundColor: '#283044', color: '#FFFFFF'},
      {sequenceId: 1, start: 521, end: 540, backgroundColor: '#A60067', color: '#FFFFFF'},
      {sequenceId: 1, start: 571, end: 590, backgroundColor: '#A60067', color: '#FFFFFF'},
      {sequenceId: 1, start: 611, end: 630, backgroundColor: '#393C93', color: '#FFFFFF'},
      {sequenceId: 1, start: 691, end: 710, backgroundColor: '#393C93', color: '#FFFFFF'},
      {sequenceId: 1, start: 781, end: 800, backgroundColor: '#7E1173', color: '#FFFFFF'},
      {sequenceId: 1, start: 891, end: 910, backgroundColor: '#7E1173', color: '#FFFFFF'},
    ];
    const singleIco = [
      {sequenceId: 1, start: 1, end: 10, icon: 'turn'},
      {sequenceId: 1, start: 21, end: 24, icon: 'noSecondary'},
      {sequenceId: 1, start: 25, end: 29, icon: 'strand'},
      {sequenceId: 1, start: 30, end: 30, icon: 'arrowRight'},
      {sequenceId: 1, start: 51, end: 60, icon: 'helix'},
      {sequenceId: 1, start: 111, end: 116, icon: 'noSecondary'},
      {sequenceId: 1, start: 117, end: 119, icon: 'strand'},
      {sequenceId: 1, start: 120, end: 120, icon: 'arrowRight'},
      {sequenceId: 1, start: 161, end: 190, icon: 'helix'},
      {sequenceId: 1, start: 231, end: 240, icon: 'lollipop'},
      {sequenceId: 1, start: 251, end: 260, icon: 'helix'},
      {sequenceId: 1, start: 271, end: 290, icon: 'turn'}
    ];

    const singleOpt = {chunkSize: 0};

    seqSingle.draw(seq, singleReg, singleIco, singleOpt);

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
    const ico3 = [
      {sequenceId: 1, start: 1, end: 5, icon: 'turn'},
      {sequenceId: 1, start: 6, end: 15, icon: 'noSecondary'},
      {sequenceId: 1, start: 15, end: 19, icon: 'strand'},
      {sequenceId: 1, start: 20, end: 20, icon: 'arrowRight'},
      {sequenceId: 1, start: 21, end: 25, icon: 'helix'},
      {sequenceId: 1, start: 26, end: 30, icon: 'noSecondary'},
      {sequenceId: 1, start: 31, end: 35, icon: 'strand'},
      {sequenceId: 1, start: 36, end: 36, icon: 'arrowRight'},
      {sequenceId: 1, start: 37, end: 46, icon: 'helix'},
      {sequenceId: 1, start: 47, end: 47, icon: 'noSecondary'},
      {sequenceId: 1, start: 47, end: 49, icon: 'lollipop', display: 'center'},
      {sequenceId: 1, start: 49, end: 54, icon: 'noSecondary'},
      {sequenceId: 1, start: 55, end: 60, icon: 'turn'},
    ];
    const opt3 = {chunkSize: 60}; // sequence length
    s3.draw(seqs, ico3, opt3);

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




}
