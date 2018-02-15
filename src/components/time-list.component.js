import _ from 'lodash';
import store from '../store';

export default {
    template: `
        <div>
            <input type="text"
                   class="form-control"
                   autofocus
                   v-model="filter">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-for="coluna in colunas">
                        <a href="#"
                           @click.prevent="sortBy(coluna)">{{ coluna | ucwords }}</a>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(time, index) in timesFiltered" :class="{'bg-success': index < 3, 'bg-warning': index > 2 && index < 6, 'bg-danger': index > 15}">
                    <td>
                        <img :src="time.escudo"
                             height="30px"
                             width="30px">
                        <strong>{{ time.nome }}</strong>
                    </td>
                    <td>{{ time.pontos }}</td>
                    <td>{{ time.gm }}</td>
                    <td>{{ time.gs }}</td>
                    <td>{{ time | saldo }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    `,
    created() {
        store.dispatch('load-times');
    },
    data() {
        return {
            order: {
                keys: ['pontos', 'gm', 'gs'],
                sort: ['desc', 'desc', 'asc']
            },
            filter: '',
            colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
        }
    },
    methods: {
        sortBy(coluna) {
            this.order.keys = coluna;
            this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc';
        }
    },
    computed: {
        timesFiltered() {
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

            return _.filter(colecao, item => {
                this.filter = this.filter.toLowerCase();

                return item.nome.toLowerCase().indexOf(this.filter) >= 0
            })
        },
        times() {
            return store.state.times;
        }
    },
};