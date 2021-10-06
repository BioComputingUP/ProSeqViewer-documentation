import {Component, OnInit} from '@angular/core';
import {ProSeqViewer} from 'proseqviewer/dist';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-demo',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {
    title = 'ProSeqViewer-demo';
    interactive;
    isSubmitted = false;

    ngOnInit(): void {


    }

    /*########### Template Driven Form ###########*/
    submitForm(form: NgForm) {
        this.isSubmitted = true;
        const textarea = (document.getElementById('msa') as HTMLInputElement).value;

        const value = form.value;
        console.log(value);

        const proseqviewer = new ProSeqViewer('interactiveProSeq');

        const sequences = textarea.split('>').slice(1);

        const proSeqSequences = [];
        const seqInteractive = [];
        let count = 0;
        for (const sequence of sequences) {
            const sequenceLabel = sequence.split('\n\n')[0];
            const sequenceChars = sequence.split('\n\n')[1];
            count += 1;
            const proSeqSequence = {sequence: sequenceChars, id: count, label: sequenceLabel};
            proSeqSequences.push(proSeqSequence);
            seqInteractive.push(proSeqSequence);
        }


        const optionsUser = {};
        const optionsInteractive = {};
        let regionsUser;
        let regionsInteractive;
        let iconUser;
        let iconInteractive;
        const indexesLocation = 'indexesLocation';
        const consensusColorIdentity = 'consensusColorIdentity';
        const consensusColorMapping = 'consensusColorMapping';

        const start = form.value.region.split('-')[0];
        const end = form.value.region.split('-')[1];
        regionsUser = [{sequenceId: 1, start, end, backgroundColor: form.value.color}];
        regionsInteractive = [{sequenceId: 1, start, end, backgroundColor: form.value.color}];

        iconUser = [{sequenceId: 1, start, end, icon: form.value.icon}];
        iconInteractive = [{sequenceId: 1, start, end, icon: form.value.icon}];


        optionsUser[indexesLocation] = form.value.indexes;
        optionsInteractive[indexesLocation] = form.value.indexes;

        if (form.value.indexes === 'identity') {
            optionsUser[consensusColorIdentity] = form.value.indexes;
            optionsInteractive[consensusColorIdentity] = form.value.indexes;
        } else {
            optionsUser[consensusColorMapping] = form.value.indexes;
            optionsInteractive[consensusColorMapping] = form.value.indexes;
        }

        this.interactive = {sequences: seqInteractive, options: optionsInteractive, regions: regionsInteractive, icons: iconInteractive};
        const proSeqData = {sequences: proSeqSequences, options: optionsUser, regions: regionsUser, icons: iconUser};

        proseqviewer.draw(proSeqData);
        const proSeq = (document.getElementById('interactiveProSeq') as HTMLInputElement);
        proSeq.classList.add('sqvDemo');


    }

}
