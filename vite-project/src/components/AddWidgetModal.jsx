import { useState } from 'react';

const AddWidgetModal = ({ categories, onAdd, onClose }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!category || !name || !text) return;
    onAdd(category, { name, text });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', top: '30%', left: '30%', background: 'white',
      padding: '20px', border: '1px solid #000', zIndex: 999
    }}>
      <h3>Add Widget</h3>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select><br /><br />
      <input placeholder="Widget Name" onChange={(e) => setName(e.target.value)} /><br /><br />
      <input placeholder="Widget Text" onChange={(e) => setText(e.target.value)} /><br /><br />
      <button onClick={handleAdd}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddWidgetModal;
