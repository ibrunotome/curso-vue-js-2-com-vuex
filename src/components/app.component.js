import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';
import TimeZonaComponent from './time-zona.component';
import store from '../store';

export default {
    components: {
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent,
        'time-zona': TimeZonaComponent,
    },
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>Campeonato brasileiro série A - 2016</h3>
                <div v-show="view == 'tabela'">
                    <time-list></time-list>
                </div>
                <div v-show="view == 'novoJogo'">
                   <time-jogo></time-jogo>
                </div>
                <div v-show="view == 'zona'">
                   <time-zona></time-zona>
                </div>
            </div>
        </div>
    </div>
    `,
    computed: {
        view() {
            return store.state.view;
        }
    },
};