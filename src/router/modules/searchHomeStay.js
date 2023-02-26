export default [
    {
        path: '/homeStayList', name: 'homeStay', component: () => import('../../views/homeStay/homeStayList.vue'),
    },
    {
        path: '/homeStayDetials', name: 'homeStayDetials', component: () => import('../../views/homeStay/homeStayDetials.vue'),
    }

]