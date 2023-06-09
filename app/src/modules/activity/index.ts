import { defineModule } from '@directus/utils';
import ActivityNavigation from './components/navigation.vue';
import ActivityCollection from './routes/collection.vue';
import ActivityItem from './routes/item.vue';

export default defineModule({
	id: 'activity',
	hidden: true,
	name: '$t:activity',
	icon: 'notifications',
	routes: [
		{
			name: 'activity-collection',
			path: '',
			components: {
				default: ActivityCollection,
				navigation: ActivityNavigation,
			},
			meta: {
				view: 'private',
			},
			children: [
				{
					name: 'activity-item',
					path: ':primaryKey',
					components: {
						detail: ActivityItem,
					},
				},
			],
		},
	],
});
