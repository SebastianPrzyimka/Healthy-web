import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const menu = [
	{
		id: 1,
		name: 'Pepperoni Pizza',
		price: 10.99,
		description: 'A delicious pepperoni pizza with cheese and sauce',
		picture: 'https://example.com/pepperoni.jpg',
	},
	{
		id: 2,
		name: 'Cheese Pizza',
		price: 8.99,
		description: 'Classic cheese pizza with mozzarella',
		picture: 'https://example.com/cheese.jpg',
	},
];

app.get('/api/menu', (req, res) => {
	res.json({ data: menu });
});

app.get('/api/menu/:id', (req, res) => {
	const { id } = req.params;
	const product = menu.find(p => p.id == id);
	if (product) {
		res.json({ data: product });
	} else {
		res.status(404).json({ message: 'Product not found' });
	}
});

app.use((req, res) => {
	res.status(404).json({ message: 'Route not found' });
});

// This line is needed for Render
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
