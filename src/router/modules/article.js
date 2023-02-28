import StrategyList from '@/views/article/StrategyList'
import StrategyDetial from '@/views/article/StrategyDetial'
import StrategyAdd from '@/views/article/StrategyAdd'
export default [
    {
        path: '/article/strategy/list/:category',
        name: 'StrategyList',
        component: StrategyList,
    },
    {
        path: '/article/strategy/detial/:id',
        name: 'StrategyDetial',
        component: StrategyDetial,
    },
    {
        path: '/article/strategy/add',
        name: 'StrategyAdd',
        component: StrategyAdd,
    }
]


