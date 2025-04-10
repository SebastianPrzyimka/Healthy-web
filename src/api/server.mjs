import express from 'express';
const API_URL = `https://healthy-web-eedo.onrender.com`;
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for the menu
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
	// Add other products here
];

// Route to get the menu
app.get('/api/menu', (req, res) => {
	res.json({ data: menu }); // Returning menu wrapped in data (this is fine)
});

// Route to get a specific product by id
app.get('/api/menu/:id', (req, res) => {
	const { id } = req.params;
	const product = menu.find(p => p.id == id);
	if (product) {
		res.json({ data: product }); // Returning specific product wrapped in data
	} else {
		res.status(404).json({ message: 'Product not found' });
	}
});

// Catch-all route for undefined routes
app.use((req, res) => {
	res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
