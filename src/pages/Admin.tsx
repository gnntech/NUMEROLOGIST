import React, { useState } from 'react';
import { useAdmin, PromoCard, Testimonial, Product } from '../context/AdminContext';

type TabType = 'promo' | 'testimonials' | 'products' | 'settings';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('promo');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-amber-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <h1 className="text-2xl font-bold text-amber-900 mb-6 text-center font-bebas tracking-wide">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-matter"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-matter"
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 rounded-lg font-medium transition-colors font-matter"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs: { id: TabType; label: string }[] = [
    { id: 'promo', label: 'Promo Cards' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'products', label: 'Products' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-amber-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-orange-100 font-bebas tracking-wide">
            Admin Dashboard
          </h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-matter text-sm"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-matter text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-200 text-amber-900 font-semibold'
                  : 'bg-white/10 text-orange-100 hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/30">
          {activeTab === 'promo' && <PromoManager />}
          {activeTab === 'testimonials' && <TestimonialManager />}
          {activeTab === 'products' && <ProductManager />}
          {activeTab === 'settings' && <SettingsManager />}
        </div>
      </div>
    </div>
  );
};

// Promo Cards Manager
const PromoManager: React.FC = () => {
  const { data, updatePromoCards } = useAdmin();
  const [editingCard, setEditingCard] = useState<PromoCard | null>(null);

  const handleAdd = () => {
    const newCard: PromoCard = {
      id: Date.now().toString(),
      title: 'New Card',
      image: '/numerology-report.jpeg',
      mobileImage: '/mobile-numerology-report.jpg',
      description: 'Card description',
    };
    updatePromoCards([...data.promoCards, newCard]);
  };

  const handleUpdate = (card: PromoCard) => {
    updatePromoCards(data.promoCards.map(c => c.id === card.id ? card : c));
    setEditingCard(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      updatePromoCards(data.promoCards.filter(c => c.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, card: PromoCard, type: 'desktop' | 'mobile') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'desktop') {
          handleUpdate({ ...card, image: reader.result as string });
        } else {
          handleUpdate({ ...card, mobileImage: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-orange-100 font-bebas">Promo Cards</h2>
        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-matter text-sm"
        >
          + Add Card
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.promoCards.map((card) => (
          <div key={card.id} className="bg-white/10 rounded-xl p-4 border border-orange-200/20">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <p className="text-orange-100/60 text-xs mb-1">Desktop</p>
                <img src={card.image} alt={card.title} className="w-full h-24 object-cover rounded-lg" />
              </div>
              <div>
                <p className="text-orange-100/60 text-xs mb-1">Mobile</p>
                <img src={card.mobileImage} alt={card.title} className="w-full h-24 object-cover rounded-lg" />
              </div>
            </div>
            
            {editingCard?.id === card.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editingCard.title}
                  onChange={(e) => setEditingCard({ ...editingCard, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                  placeholder="Title"
                />
                <textarea
                  value={editingCard.description}
                  onChange={(e) => setEditingCard({ ...editingCard, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                  placeholder="Description"
                  rows={2}
                />
                <div>
                  <p className="text-orange-100/60 text-xs mb-1">Desktop Image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, editingCard, 'desktop')}
                    className="w-full text-orange-100 text-sm"
                  />
                </div>
                <div>
                  <p className="text-orange-100/60 text-xs mb-1">Mobile Image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, editingCard, 'mobile')}
                    className="w-full text-orange-100 text-sm"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(editingCard)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingCard(null)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-orange-100 font-semibold mb-1">{card.title}</h3>
                <p className="text-orange-100/70 text-sm mb-4">{card.description}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingCard(card)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(card.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Testimonial Manager
const TestimonialManager: React.FC = () => {
  const { data, updateTestimonials } = useAdmin();
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);

  const handleAdd = () => {
    const newItem: Testimonial = {
      id: Date.now().toString(),
      name: 'New Client',
      location: 'City',
      quote: 'Testimonial quote...',
      rating: 5,
    };
    updateTestimonials([...data.testimonials, newItem]);
  };

  const handleUpdate = (item: Testimonial) => {
    updateTestimonials(data.testimonials.map(t => t.id === item.id ? item : t));
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this testimonial?')) {
      updateTestimonials(data.testimonials.filter(t => t.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-orange-100 font-bebas">Testimonials</h2>
        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-matter text-sm">
          + Add Testimonial
        </button>
      </div>

      <div className="space-y-4">
        {data.testimonials.map((item) => (
          <div key={item.id} className="bg-white/10 rounded-xl p-4 border border-orange-200/20">
            {editingItem?.id === item.id ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={editingItem.location}
                    onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                    className="px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                    placeholder="Location"
                  />
                </div>
                <textarea
                  value={editingItem.quote}
                  onChange={(e) => setEditingItem({ ...editingItem, quote: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <button onClick={() => handleUpdate(editingItem)} className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm">Save</button>
                  <button onClick={() => setEditingItem(null)} className="flex-1 bg-gray-500 text-white py-2 rounded-lg text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-orange-100 font-semibold">{item.name}</h3>
                    <p className="text-orange-100/60 text-sm">{item.location}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => setEditingItem(item)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
                  </div>
                </div>
                <p className="text-orange-100/80 text-sm italic">"{item.quote}"</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Product Manager
const ProductManager: React.FC = () => {
  const { data, updateProducts } = useAdmin();
  const [editingItem, setEditingItem] = useState<Product | null>(null);

  const handleAdd = () => {
    const newItem: Product = {
      id: Date.now().toString(),
      name: 'New Product',
      image: '/Shop1.png',
      price: '₹999',
      description: 'Product description',
    };
    updateProducts([...data.products, newItem]);
  };

  const handleUpdate = (item: Product) => {
    updateProducts(data.products.map(p => p.id === item.id ? item : p));
    setEditingItem(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this product?')) {
      updateProducts(data.products.filter(p => p.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, item: Product) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleUpdate({ ...item, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-orange-100 font-bebas">Products</h2>
        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-matter text-sm">
          + Add Product
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.products.map((item) => (
          <div key={item.id} className="bg-white/10 rounded-xl p-4 border border-orange-200/20">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            
            {editingItem?.id === item.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={editingItem.price}
                  onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                  placeholder="Price"
                />
                <textarea
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter text-sm"
                  rows={2}
                />
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, editingItem)} className="w-full text-orange-100 text-sm" />
                <div className="flex space-x-2">
                  <button onClick={() => handleUpdate(editingItem)} className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm">Save</button>
                  <button onClick={() => setEditingItem(null)} className="flex-1 bg-gray-500 text-white py-2 rounded-lg text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-orange-100 font-semibold">{item.name}</h3>
                <p className="text-orange-200 font-bold mb-1">{item.price}</p>
                <p className="text-orange-100/70 text-sm mb-4">{item.description}</p>
                <div className="flex space-x-2">
                  <button onClick={() => setEditingItem(item)} className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm">Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Settings Manager
const SettingsManager: React.FC = () => {
  const { data, updateMarqueeText } = useAdmin();
  const [marquee, setMarquee] = useState(data.marqueeText);

  const handleSave = () => {
    updateMarqueeText(marquee);
    alert('Settings saved!');
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-orange-100 font-bebas mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-orange-100 mb-2 font-matter">Marquee Text</label>
          <input
            type="text"
            value={marquee}
            onChange={(e) => setMarquee(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-orange-100 border border-orange-200/30 font-matter"
          />
        </div>
        
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-matter"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Admin;
