import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';

export default {
    components: {
        'time-list': TimeListComponent,
        'time-jogo': TimeJogoComponent,
    },
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>Campeonato brasileiro série A - 2016</h3>
                <div v-if="view == 'tabela'">
                    <time-list></time-list>
                </div>
                <div v-else>
                   <time-jogo></time-jogo>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            view: 'novo-jogo'
        }
    },
    methods: {
        showView(view) {
            this.view = view
        },
    }
};