import React, { useState } from 'react';
import { useAdmin, PromoCard, Testimonial, Package } from '../context/AdminContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TabType = 'promo' | 'testimonials' | 'packages' | 'settings';

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
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#2E2D2F' }}>
        <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center font-bebas tracking-wide" style={{ color: '#FE7028' }}>
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 font-matter"
              style={{ color: '#2E2D2F' }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 font-matter"
              style={{ color: '#2E2D2F' }}
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg font-medium transition-colors font-matter hover:opacity-90"
              style={{ backgroundColor: '#FE7028' }}
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
    { id: 'packages', label: 'Packages' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12" style={{ backgroundColor: '#2E2D2F' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white font-bebas tracking-wide">
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
                  ? 'text-white font-semibold'
                  : 'text-white/70 hover:bg-white/10'
              }`}
              style={{
                backgroundColor: activeTab === tab.id ? '#FE7028' : 'rgba(255,255,255,0.05)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="rounded-2xl p-6 border" style={{ backgroundColor: '#3A3939', borderColor: 'rgba(255,255,255,0.1)' }}>
          {activeTab === 'promo' && <PromoManager />}
          {activeTab === 'testimonials' && <TestimonialManager />}
          {activeTab === 'packages' && <PackageManager />}
          {activeTab === 'settings' && <SettingsManager />}
        </div>
      </div>
      
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

// Promo Cards Manager
const PromoManager: React.FC = () => {
  const { data, updatePromoCards } = useAdmin();
  const [editingCard, setEditingCard] = useState<PromoCard | null>(null);

  const handleAdd = () => {
    if (!data) return;
    const newCard: PromoCard = {
      id: Date.now().toString(),
      title: 'New Card',
      image: '/numerology-report.jpeg',
      mobileImage: '/mobile-numerology-report.jpg',
      description: 'Card description',
    };
    updatePromoCards([...data.promoCards, newCard]);
    toast.success('✅ Promo card added successfully!');
  };

  const handleUpdate = (card: PromoCard) => {
    if (!data) return;
    updatePromoCards(data.promoCards.map(c => c.id === card.id ? card : c));
    setEditingCard(null);
    toast.success('✅ Promo card updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (!data) return;
    if (window.confirm('Are you sure you want to delete this card?')) {
      updatePromoCards(data.promoCards.filter(c => c.id !== id));
      toast.success('✅ Promo card deleted successfully!');
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
        <h2 className="text-xl font-bold text-white font-bebas">Promo Cards</h2>
        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-matter text-sm"
        >
          + Add Card
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.promoCards.map((card) => (
          <div key={card.id} className="rounded-xl p-4 border" style={{ backgroundColor: '#2E2D2F', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <p className="text-white/60 text-xs mb-1">Desktop</p>
                <img src={card.image} alt={card.title} className="w-full h-24 object-cover rounded-lg" />
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">Mobile</p>
                <img src={card.mobileImage} alt={card.title} className="w-full h-24 object-cover rounded-lg" />
              </div>
            </div>
            
            {editingCard?.id === card.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editingCard.title}
                  onChange={(e) => setEditingCard({ ...editingCard, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-white border font-matter text-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                  placeholder="Title"
                />
                <textarea
                  value={editingCard.description}
                  onChange={(e) => setEditingCard({ ...editingCard, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-white border font-matter text-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                  placeholder="Description"
                  rows={2}
                />
                <div>
                  <p className="text-white/60 text-xs mb-1">Desktop Image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, editingCard, 'desktop')}
                    className="w-full text-white text-sm"
                  />
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Mobile Image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, editingCard, 'mobile')}
                    className="w-full text-white text-sm"
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
                <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                <p className="text-white/70 text-sm mb-4">{card.description}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingCard(card)}
                    className="flex-1 text-white py-2 rounded-lg text-sm"
                    style={{ backgroundColor: '#FE7028' }}
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
    if (!data) return;
    const newItem: Testimonial = {
      id: Date.now().toString(),
      name: 'New Client',
      location: 'City',
      quote: 'Testimonial quote...',
      rating: 5,
      isVideoTestimonial: false,
    };
    updateTestimonials([...data.testimonials, newItem]);
    toast.success('✅ Testimonial added successfully!');
  };

  const handleUpdate = (item: Testimonial) => {
    if (!data) return;
    updateTestimonials(data.testimonials.map(t => t.id === item.id ? item : t));
    setEditingItem(null);
    toast.success('✅ Testimonial updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (!data) return;
    if (window.confirm('Delete this testimonial?')) {
      updateTestimonials(data.testimonials.filter(t => t.id !== id));
      toast.success('✅ Testimonial deleted successfully!');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, item: Testimonial, type: 'video' | 'avatar') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'video') {
          handleUpdate({ ...item, video: reader.result as string });
        } else {
          handleUpdate({ ...item, avatar: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white font-bebas">Testimonials</h2>
        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-matter text-sm">
          + Add Testimonial
        </button>
      </div>

      <div className="space-y-4">
        {data?.testimonials.map((item) => (
          <div key={item.id} className="rounded-xl p-4 border" style={{ backgroundColor: '#2E2D2F', borderColor: 'rgba(255,255,255,0.1)' }}>
            {editingItem?.id === item.id ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="px-3 py-2 rounded-lg text-white border font-matter text-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={editingItem.location}
                    onChange={(e) => setEditingItem({ ...editingItem, location: e.target.value })}
                    className="px-3 py-2 rounded-lg text-white border font-matter text-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                    placeholder="Location/Role"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center text-white text-sm">
                    <input
                      type="checkbox"
                      checked={editingItem.isVideoTestimonial}
                      onChange={(e) => setEditingItem({ ...editingItem, isVideoTestimonial: e.target.checked })}
                      className="mr-2"
                    />
                    Video Testimonial
                  </label>
                </div>
                {editingItem.isVideoTestimonial ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-white/60 text-xs mb-1">Video File</p>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleImageUpload(e, editingItem, 'video')}
                        className="w-full text-white text-sm"
                      />
                      {editingItem.video && <p className="text-white/60 text-xs mt-1">Current: {editingItem.video.substring(0, 30)}...</p>}
                    </div>
                    <div>
                      <p className="text-white/60 text-xs mb-1">Avatar Image</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, editingItem, 'avatar')}
                        className="w-full text-white text-sm"
                      />
                      {editingItem.avatar && <img src={editingItem.avatar} alt="avatar" className="w-12 h-12 rounded-full mt-1" />}
                    </div>
                  </div>
                ) : (
                  <textarea
                    value={editingItem.quote || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, quote: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-white border font-matter text-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                    placeholder="Testimonial quote"
                    rows={3}
                  />
                )}
                <div className="flex space-x-2">
                  <button onClick={() => handleUpdate(editingItem)} className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm">Save</button>
                  <button onClick={() => setEditingItem(null)} className="flex-1 bg-gray-500 text-white py-2 rounded-lg text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-white/60 text-sm">{item.location}</p>
                    {item.isVideoTestimonial && <span className="text-xs px-2 py-1 rounded mt-1 inline-block" style={{ backgroundColor: '#FE7028', color: 'white' }}>Video</span>}
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => setEditingItem(item)} className="text-white px-3 py-1 rounded text-sm" style={{ backgroundColor: '#FE7028' }}>Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
                  </div>
                </div>
                {item.isVideoTestimonial ? (
                  <div className="flex items-center gap-3 mt-2">
                    {item.avatar && <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full" />}
                    {item.video && <p className="text-white/70 text-xs">Video: {item.video.substring(0, 40)}...</p>}
                  </div>
                ) : (
                  <p className="text-white/80 text-sm italic">"{item.quote}"</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Package Manager
const PackageManager: React.FC = () => {
  const { data, updatePackages } = useAdmin();
  const [editingItem, setEditingItem] = useState<Package | null>(null);
  const [editingIncludes, setEditingIncludes] = useState<string[]>([]);

  const handleAdd = () => {
    if (!data) return;
    const newItem: Package = {
      id: Date.now().toString(),
      name: 'New Package',
      price: '₹0',
      image: '/Sapphire.png',
      minimal: ['Feature 1'],
      detailed: ['Feature 1'],
      benefits: ['Benefit 1'],
      idealFor: ['Everyone'],
      formUrl: '#',
    };
    updatePackages([...data.packages, newItem]);
    toast.success('✅ Package added successfully!');
  };

  const handleUpdate = (item: Package) => {
    if (!data) return;
    updatePackages(data.packages.map(p => p.id === item.id ? item : p));
    setEditingItem(null);
    toast.success('✅ Package updated successfully!');
  };

  const handleDelete = (id: string) => {
    if (!data) return;
    if (window.confirm('Delete this package?')) {
      updatePackages(data.packages.filter(p => p.id !== id));
      toast.success('✅ Package deleted successfully!');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, item: Package) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleUpdate({ ...item, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const startEditing = (item: Package) => {
    setEditingItem(item);
    setEditingIncludes([...item.minimal]);
  };

  const addInclude = () => {
    setEditingIncludes([...editingIncludes, 'New feature']);
  };

  const removeInclude = (index: number) => {
    setEditingIncludes(editingIncludes.filter((_, i) => i !== index));
  };

  const savePackage = () => {
    if (editingItem) {
      handleUpdate({ ...editingItem, minimal: editingIncludes });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white font-bebas">Packages</h2>
        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-matter text-sm">
          + Add Package
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.packages.map((item) => (
          <div key={item.id} className="rounded-xl p-4 border" style={{ backgroundColor: '#2E2D2F', borderColor: 'rgba(255,255,255,0.1)' }}>
            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mx-auto mb-4" />
            
            {editingItem?.id === item.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-white border font-matter text-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                  placeholder="Package Name"
                />
                <input
                  type="text"
                  value={editingItem.price}
                  onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg text-white border font-matter text-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                  placeholder="Price (e.g., ₹24,000)"
                />
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, editingItem)} className="w-full text-white text-sm" />
                
                <div>
                  <label className="text-white/80 text-xs block mb-1">Google Form URL:</label>
                  <input
                    type="url"
                    value={editingItem.formUrl}
                    onChange={(e) => setEditingItem({ ...editingItem, formUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-white border font-matter text-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                    placeholder="https://forms.gle/..."
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-white/80 text-xs">Features:</p>
                    <button onClick={addInclude} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#FE7028', color: 'white' }}>+ Add</button>
                  </div>
                  {editingIncludes.map((inc: string, idx: number) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={inc}
                        onChange={(e) => {
                          const updated = [...editingIncludes];
                          updated[idx] = e.target.value;
                          setEditingIncludes(updated);
                        }}
                        className="flex-1 px-2 py-1 rounded text-white border font-matter text-xs"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                      />
                      <button onClick={() => removeInclude(idx)} className="text-red-500 text-xs px-2 py-1">✕</button>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button onClick={savePackage} className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm">Save</button>
                  <button onClick={() => setEditingItem(null)} className="flex-1 bg-gray-500 text-white py-2 rounded-lg text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-white font-semibold text-center mb-2">{item.name}</h3>
                <div className="text-xs text-white/70 mb-4 space-y-0.5">
                  {item.minimal.map((inc: string, idx: number) => (
                    <p key={idx}>{inc}</p>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => startEditing(item)} className="flex-1 text-white py-2 rounded-lg text-sm" style={{ backgroundColor: '#FE7028' }}>Edit</button>
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
  const [marquee, setMarquee] = useState(data?.marqueeText || '');

  const handleSave = () => {
    updateMarqueeText(marquee);
    toast.success('✅ Marquee text updated successfully!');
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-white font-bebas mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-white mb-2 font-matter">Marquee Text</label>
          <input
            type="text"
            value={marquee}
            onChange={(e) => setMarquee(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-white border font-matter"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
          />
        </div>
        
        <button
          onClick={handleSave}
          className="text-white px-6 py-3 rounded-lg font-matter hover:opacity-90"
          style={{ backgroundColor: '#FE7028' }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Admin;
