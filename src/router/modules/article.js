import StrategyList from '@/views/article/StrategyList'
import StrategyDetial from '@/views/article/StrategyDetial'
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
    }
]


