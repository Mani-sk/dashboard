import { useState } from 'react';
import WidgetCard from './Widgetcard';
import AddWidgetModal from './AddWidgetModal';

// Initial hardcoded data (can be imported from a JSON file)
const initialWidgets = {
  "CSPM Executive Dashboard": [
    { name: "Cloud Accounts", text: "Widget for Cloud Accounts" },
    { name: "Cloud Account Risk Assessment", text: "Widget for Risk Assessment" }
  ],
  "CWPP Dashboard": [
    {
      "name": "Container Status",
      "text": "Runtime container threat detection"
    },
    {
      "name": "Host Vulnerability Summary",
      "text": "Scan results for hosts and workloads"
    }
  ],
  "Registry Scan": [
     {
      "name": "Scan Results",
      "text": "Summary of image vulnerabilities"
    },
    {
      "name": "Vulnerable Images",
      "text": "Images with critical CVEs"
    }
  ]
};

const Dashboard = () => {
  const [widgets, setWidgets] = useState(initialWidgets);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const addWidget = (category, widget) => {
    setWidgets((prev) => ({
      ...prev,
      [category]: [...prev[category], widget]
    }));
  };

  


  const removeWidget = (category, name) => {
    setWidgets((prev) => ({
      ...prev,
      [category]: prev[category].filter(w => w.name !== name)
    }));
  };

  return (
    <div>
      <h2>CNAPP Dashboard</h2>
      <button onClick={() => setShowModal(true)}>+ Add Widget</button>
      <input
        type="text"
        placeholder="Search widgets..."
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />

      {Object.entries(widgets).map(([category, widgetList]) => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {widgetList
              .filter(w => w.name.toLowerCase().includes(searchTerm))
              .map(widget => (
                <WidgetCard
  key={widget.name}
  name={widget.name}
  text={widget.text}
  category={category}  // ✅ Pass category
  onRemove={() => removeWidget(category, widget.name)}
/>
              ))}
          </div>
        </div>
      ))}

      {showModal && (
        <AddWidgetModal
          categories={Object.keys(widgets)}
          onClose={() => setShowModal(false)}
          onAdd={addWidget}
        />
      )}
    </div>
  );
};

export default Dashboard;
