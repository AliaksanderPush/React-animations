import { nanoid } from 'nanoid';
import { createRef } from 'react';

export const images = [
	'https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_960_720.jpg',
	'https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_960_720.jpg',
	'https://cdn.pixabay.com/photo/2020/03/04/08/59/sports-4901000_960_720.jpg',
	'https://cdn.pixabay.com/photo/2020/02/28/10/44/shoes-4887100_960_720.jpg',
	'https://cdn.pixabay.com/photo/2020/02/24/06/00/sports-4875288_960_720.jpg',
];

export const pictures = [
	'http://fe.it-academy.by/Sites/0000007/sax.jpg',
	'http://fe.it-academy.by/Sites/0000007/Yin_and_Yang.png',
	'http://fe.it-academy.by/Sites/0000007/Man-and-woman.png',
	'http://fe.it-academy.by/Sites/0000007/No_smoking.png',
];

export const list = [
	{
		id: nanoid(),
		text: 'Buy eggs',
		nodeRef: createRef(null),
	},
	{
		id: nanoid(),
		text: 'Pay bills',
		nodeRef: createRef(null),
	},
	{
		id: nanoid(),
		text: 'Invite friends over',
		nodeRef: createRef(null),
	},
	{
		id: nanoid(),
		text: 'Fix the TV',
		nodeRef: createRef(null),
	},
];

export const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur maxime repudiandae
similique aperiam reiciendis voluptate iure ipsa consectetur aspernatur quisquam laboriosam,
maiores aut quaerat cumque tenetur animi. Maxime, provident?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Provident inventore error aspernatur sit, cumque atque
tempora! Unde deserunt aperiam tempore? Magnam nulla velit, reprehenderit incidunt similique
omnis magni earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem
sapiente nam optio nisi velit qui cumque, et sit deleniti architecto voluptates illum, sunt
beatae quam inventore eos earum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Illo, quia qui. Dolor eveniet harum exercitationem inventore voluptates ullam quasi possimus
minima omnis, laudantium accusantium, aperiam iste dolorem recusandae sit Lorem ipsum dolor
sit amet consectetur, adipisicing elit. Unde, quas. Obcaecati, minima itaque quisquam fugit
eius sapiente illum quaerat culpa sequi magni vitae, qui similique! Eveniet unde aliquam
deserunt
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur maxime repudiandae
similique aperiam reiciendis voluptate iure ipsa consectetur aspernatur quisquam laboriosam,
maiores aut quaerat cumque tenetur animi. Maxime, provident?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Provident inventore error aspernatur sit, cumque atque
tempora! Unde deserunt aperiam tempore? Magnam nulla velit, reprehenderit incidunt similique
omnis magni earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem
sapiente nam optio nisi velit qui cumque, et sit deleniti architecto voluptates illum, sunt
beatae quam inventore eos earum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
Illo, quia qui. Dolor eveniet harum exercitationem inventore voluptates ullam quasi possimus
minima omnis, laudantium accusantium, aperiam iste dolorem recusandae sit Lorem ipsum dolor
sit amet consectetur, adipisicing elit. Unde, quas. Obcaecati, minima itaque quisquam fugit
eius sapiente illum quaerat culpa sequi magni vitae, qui similique! Eveniet unde aliquam
deserunt
`;
