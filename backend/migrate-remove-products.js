const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/numerologist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  console.log('✅ Connected to MongoDB');

  try {
    // Get the AdminData collection
    const AdminData = db.collection('admindatas');

    // Update all documents to remove the products field
    const result = await AdminData.updateMany(
      {},
      { $unset: { products: "" } }
    );

    console.log(`✅ Migration complete! Updated ${result.modifiedCount} document(s)`);
    console.log('Products field has been removed from all AdminData documents');

    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
});
