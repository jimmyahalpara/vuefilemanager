const routesUser = [
	{
		name: 'User',
		path: '/user',
		component: () =>
			import(/* webpackChunkName: "chunks/settings" */ '../views/Profile'),
		meta: {
			requiresAuth: true
		},
		children: [
			{
				name: 'Profile',
				path: '/user/profile',
				component: () =>
					import(/* webpackChunkName: "chunks/profile" */ '../views/User/Settings'),
				meta: {
					requiresAuth: true,
					title: 'routes_title.profile'
				},
			},
			{
				name: 'Password',
				path: '/user/settings/password',
				component: () =>
					import(/* webpackChunkName: "chunks/settings-password" */ '../views/User/Password'),
				meta: {
					requiresAuth: true,
					title: 'routes_title.settings_password'
				},
			},
			{
				name: 'Storage',
				path: '/user/settings/storage',
				component: () =>
					import(/* webpackChunkName: "chunks/settings-storage" */ '../views/User/Storage'),
				meta: {
					requiresAuth: true,
					title: 'routes_title.settings_storage'
				},
			},
			{
				name: 'Subscription',
				path: '/user/settings/subscription',
				component: () =>
					import(/* webpackChunkName: "chunks/settings-subscription" */ '../views/User/Subscription'),
				meta: {
					requiresAuth: true,
					title: 'routes_title.subscription'
				},
			},
			{
				name: 'MeteredSubscription',
				path: '/user/settings/billing',
				component: () =>
					import(/* webpackChunkName: "chunks/settings-subscription" */ '../views/User/MeteredSubscription'),
				meta: {
					requiresAuth: true,
					title: 'routes_title.subscription'
				},
			},
			{
				name: 'PaymentMethods',
				path: '/user/settings/payment-methods',
				component: () =>
					import(/* webpackChunkName: "chunks/settings-payment-methods" */ '../views/User/PaymentMethods'),
				meta: {
					requiresAuth: true,
					title: 'routes_title.payment_methods'
				},
			},
			{
				name: 'CreatePaymentMethod',
				path: '/user/settings/create-payment-method',
				component: () =>
					import(/* webpackChunkName: "chunks/settings-create-payment-methods" */ '../views/User/CreatePaymentMethod'),
				meta: {
					requiresAuth: true,
					title: 'Create Payment Method'
				},
			},
		]
	},
	{
		name: 'UpgradePlan',
		path: '/user/upgrade/plan',
		component: () =>
			import(/* webpackChunkName: "chunks/upgrade-plan" */ '../views/Upgrade/UpgradePlan'),
		meta: {
			requiresAuth: true,
			title: 'routes_title.upgrade_plan'
		},
	},
	{
		name: 'UpgradeBilling',
		path: '/user/upgrade/billing',
		component: () =>
			import(/* webpackChunkName: "chunks/upgrade-billing" */ '../views/Upgrade/UpgradeBilling'),
		meta: {
			requiresAuth: true,
			title: 'routes_title.upgrade_billing'
		},
	},
]

export default routesUser