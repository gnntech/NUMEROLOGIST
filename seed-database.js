const fs = require('fs');

// Read the seed data
const seedData = JSON.parse(fs.readFileSync('./seed-data.json', 'utf8'));

// Make API call to update the database
fetch('http://localhost:5000/api/admin/data/testimonials', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ testimonials: seedData.testimonials }),
})
  .then(res => res.json())
  .then(() => console.log('✅ Testimonials seeded'))
  .catch(err => console.error('❌ Error seeding testimonials:', err));

fetch('http://localhost:5000/api/admin/data/products', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ products: seedData.products }),
})
  .then(res => res.json())
  .then(() => console.log('✅ Products seeded'))
  .catch(err => console.error('❌ Error seeding products:', err));

fetch('http://localhost:5000/api/admin/data/packages', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ packages: seedData.packages }),
})
  .then(res => res.json())
  .then(() => console.log('✅ Packages seeded'))
  .catch(err => console.error('❌ Error seeding packages:', err));
