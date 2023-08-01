const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Бізнес', amount: 0, color: incomeColors[0] },
  { type: 'Інвестиції', amount: 0, color: incomeColors[1] },
  { type: 'Додатковий дохід', amount: 0, color: incomeColors[2] },
  { type: 'Депозити', amount: 0, color: incomeColors[3] },
  { type: 'Лотереї', amount: 0, color: incomeColors[4] },
  { type: 'Подарунки', amount: 0, color: incomeColors[5] },
  { type: 'Заробітна плата', amount: 0, color: incomeColors[6] },
  { type: 'Заощадження', amount: 0, color: incomeColors[7] },
  { type: 'Дохід від здачі в оренду', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Рахунки', amount: 0, color: expenseColors[0] },
  { type: 'Автомобіль', amount: 0, color: expenseColors[1] },
  { type: 'Одяг', amount: 0, color: expenseColors[2] },
  { type: 'Подорожжі', amount: 0, color: expenseColors[3] },
  { type: 'Їжа', amount: 0, color: expenseColors[4] },
  { type: 'Покупки', amount: 0, color: expenseColors[5] },
  { type: 'Будинок', amount: 0, color: expenseColors[6] },
  { type: 'Розваги', amount: 0, color: expenseColors[7] },
  { type: 'Телефон', amount: 0, color: expenseColors[8] },
  { type: 'Домашні тварини', amount: 0, color: expenseColors[9] },
  { type: 'Інше', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
