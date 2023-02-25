

export default [
    {
        path: '/personInfo', name: 'personInfo',
        component: () => import('../../views/personInfo/index.vue'),
        children: [
            {
                path: 'personalCenter',
                component: () => import('../../components/personInfo/myaccount/personalCenter.vue')
            },
            {

                path: 'personalInformation',
                component: () => import('../../components/personInfo/myaccount/personalInformation.vue')
            },


            {
                path: 'myPoints',
                component: () => import('../../components/personInfo/myaccount/myPoints.vue')
            },

            {
                path: 'frequentlyUsedInfos',
                component: () => import('../../components/personInfo/myaccount/frequentlyUsedInfos.vue')

            },

            {
                path: 'accountSetting',
                component: () => import('../../components/personInfo/myaccount/accountSettings.vue')

            },

            {
                path: 'myOrder',
                component: () => import('../../components/personInfo/transactionmanagement/myOrders.vue')

            },

            {

                path: 'myVouchers',
                component: () => import('../../components/personInfo/transactionmanagement/myVouchers.vue')

            },


            {
                path: 'myStrategys',
                component: () => import('../../components/personInfo/myposting/myStrategys.vue')

            },
            {

                path: 'myTravels',
                component: () => import('../../components/personInfo/myposting/myTravels.vue')

            },

            {
                path: 'myNotes',
                component: () => import('../../components/personInfo/myposting/myNotes.vue')
            },

            {
                path: 'myInterlocutions',
                component: () => import('../../components/personInfo/myposting/myInterlocutions.vue')

            },

            {
                path: 'favoHomestays',
                component: () => import('../../components/personInfo/myCollection/favoHomestays.vue')

            },

            {
                path: 'favoTravels',
                component: () => import('../../components/personInfo/myCollection/favoTravels.vue')

            },

            {
                path: 'favoNotes',
                component: () => import('../../components/personInfo/myCollection/favoNotes.vue')
            },
            {
                path: 'favoStrategys',
                component: () => import('../../components/personInfo/myCollection/favoStrategys.vue')

            }



        ]
    }
]