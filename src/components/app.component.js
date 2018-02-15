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
                <span v-if="view != 'novoJogo'">
                    <a href="#"
                   class="btn btn-primary"
                   @click.prevent="showNovoJogo">Novo jogo</a>
                </span>
                <span v-if="view != 'zona'">
                   <a href="#"
                   class="btn btn-primary"
                   @click.prevent="showZona">Times zona</a>
                </span>
                <span v-if="view != 'tabela'">
                   <a href="#"
                   class="btn btn-primary"
                   @click.prevent="showTimeList">Tabela completa</a>
                </span>
                <br><br>
                <div v-if="view == 'tabela'">
                    <time-list></time-list>
                </div>
                <div v-if="view == 'novoJogo'">
                   <time-jogo></time-jogo>
                </div>
                <div v-if="view == 'zona'">
                   <time-zona></time-zona>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        showNovoJogo() {
            store.commit('show-time-novojogo')
        },
        showZona() {
            store.commit('show-time-zona')
        },
        showTimeList() {
            store.commit('show-time-list')
        },
    },
    computed: {
        view() {
            return store.state.view;
        }
    },
};