export type Room = {
	id: string
	title: string
	subtitle: string
	price: number
	beds: string
	area: string
	img: string[]
	descriptionKeys: string[]
	wifi: boolean
	tv: boolean
	refrigerator: boolean
	safe: boolean
	mini_bar: boolean
	coffee_maker: boolean
	teapot: boolean
	kitchenette: boolean
}

export const rooms: Room[] = [
	{
		id: 'standard',
		title: 'Standard',
		subtitle: 'Затишний номер з усіма зручностями',
		price: 70,
		beds: '1 Queen',
		area: '20 m²',
		wifi: true,
		tv: true,
		refrigerator: true,
		safe: true,
		mini_bar: false,
		coffee_maker: false,
		teapot: false,
		kitchenette: false,
		img: [
			'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757326300/ftwdtn_11_2880x1870_hrofeg.jpg',
			'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757327243/1-rooms-63c717dd9ca2e_wx0zro.jpg',
		],
		descriptionKeys: [
			'standard_desc1',
			'standard_desc2',
			'standard_desc3',
			'standard_desc4',
			'standard_desc5',
		],
	},
	{
		id: 'deluxe',
		title: 'Deluxe',
		subtitle: 'Просторий номер с видом',
		price: 120,
		beds: '1 King',
		area: '35 m²',
		wifi: true,
		tv: true,
		refrigerator: true,
		safe: true,
		mini_bar: true,
		coffee_maker: true,
		teapot: false,
		kitchenette: false,
		img: [
			'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251549/deluxe_bteqqi.jpg',
			'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757329087/Screenshot_1_rwd3ol.jpg',
		],
		descriptionKeys: [
			'deluxe_desc1',
			'deluxe_desc2',
			'deluxe_desc3',
			'deluxe_desc4',
			'deluxe_desc5',
		],
	},
	{
		id: 'suite',
		title: 'Suite',
		subtitle: 'Люкс класу з окремою вітальнею',
		price: 200,
		beds: '2 King',
		area: '60 m²',
		wifi: true,
		tv: true,
		refrigerator: true,
		safe: true,
		mini_bar: true,
		coffee_maker: true,
		teapot: true,
		kitchenette: true,
		img: [
			'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251665/photo-1560448204-e02f11c3d0e2_ofgqq9.jpg',
			'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757329417/515308467_ipuzky.jpg',
		],
		descriptionKeys: [
			'suite_desc1',
			'suite_desc2',
			'suite_desc3',
			'suite_desc4',
			'suite_desc5',
			'suite_desc6',
		],
	},
]
