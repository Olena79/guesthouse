import React from 'react'
import { Grid, CardMedia } from '@mui/material'

const images = [
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251559/standart_kcyhvu.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757251549/deluxe_bteqqi.jpg',
	'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757263329/photo-1496412705862-e0088f16f791_jwqxz7.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757263491/409201_1_nkf2lh.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757263550/images_j5r26a.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757264503/Atoll-Ari-Beach-4_jz5fiz.jpg',
	'https://res.cloudinary.com/dsgqhwqr7/image/upload/v1757306839/3-cleaning-tips-to-keep-your-reception-area-spick-and-span_fqmkqo.webp',
]

export default function Gallery() {
	return (
		<Grid container spacing={2}>
			{images.map((src, i) => (
				<Grid item xs={12} md={6} key={i}>
					<CardMedia
						component='img'
						image={src}
						sx={{ height: 400, objectFit: 'cover' }}
					/>
				</Grid>
			))}
		</Grid>
	)
}
