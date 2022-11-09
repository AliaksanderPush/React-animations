import { nanoid } from 'nanoid';
import { createRef } from 'react';

export const list = [
	{
		id: nanoid(),
		text: 'Примерка до 3 пар',
		nodeRef: createRef(null),
	},
	{
		id: nanoid(),
		text: 'Доставка курьером',
		nodeRef: createRef(null),
	},
	{
		id: nanoid(),
		text: 'Бонусная программа',
		nodeRef: createRef(null),
	},
	{
		id: nanoid(),
		text: 'Бронирование',
		nodeRef: createRef(null),
	},
];

export const text = `
В нашем интернет-магазине ShOEs вы найдете только оригинальные модели  обуви. Это значит, что вы заказываете товары с гарантией производителя. Мы всегда тщательно выбираем надежных поставщиков, проверяем качество работы сотрудников на всех этапах коммуникации с покупателями.
`;

export const text2 =
	'Стиль - комфорт - красота! Все это сочетается в новой коллекции осень-зима 20022/23.';
export const text3 = 'Сделайте заказ и убедитесь сами!';
