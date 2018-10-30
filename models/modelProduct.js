/**
 * Model: Product
 */
const mongoose = require('mongoose');

// Product Schema.
const productSchema = new mongoose.Schema({
    product_name: { type: String, trim: true },
    product_description: { type: String, trim: true },
    sku: { type: String, trim: true },
    category: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
    updated_at: { type: Date, default: Date.Now }
});


// Export the model.
module.exports = mongoose.model('Product', productSchema);