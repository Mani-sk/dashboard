// const WidgetCard = ({ name, text, onRemove }) => (
//   <div style={{
//     border: '1px solid #ccc',
//     padding: '10px',
//     width: '200px',
//     position: 'relative'
//   }}>
//     <strong>{name}</strong>
//     <p>{text}</p>
//     <button
//       style={{ position: 'absolute', top: 5, right: 5 }}
//       onClick={onRemove}
//     >❌</button>
//   </div>
// );
// const WidgetCard = ({ name, text, onRemove }) => (
//   <div className="widget-card">
//     <strong>{name.length > 12 ? name.slice(0, 12) + '…' : name}</strong>
//     <p>{text.length > 25 ? text.slice(0, 25) + '…' : text}</p>
//     <button onClick={onRemove}>❌</button>
//   </div>
// );
// const categoryColors = {
//   "CSPM Executive Dashboard": "#4f46e5", // Indigo
//   "CWPP Dashboard": "#10b981",           // Green
//   "Registry Scan": "#ec4899",            // Pink
//   // Add more categories here if needed
// };

// const WidgetCard = ({ name, text, category, onRemove }) => {
//   const color = categoryColors[category] || "#6b7280"; // default: gray

//   return (
//     <div
//       className="widget-card"
//       style={{ borderColor: color, color: color }}
//     >
//       <strong>{name.length > 12 ? name.slice(0, 12) + '…' : name}</strong>
//       <p>{text.length > 25 ? text.slice(0, 25) + '…' : text}</p>
//       <button onClick={onRemove}>❌</button>
//     </div>
//   );
// };




// export default WidgetCard;
const categoryStyles = {
  "CSPM Executive Dashboard": {
    gradient: "linear-gradient(135deg, #6366f1, #a78bfa)", // Indigo-violet
    borderColor: "#4f46e5"
  },
  "CWPP Dashboard": {
    gradient: "linear-gradient(135deg, #34d399, #10b981)", // Green
    borderColor: "#10b981"
  },
  "Registry Scan": {
    gradient: "linear-gradient(135deg, #f472b6, #ec4899)", // Pink
    borderColor: "#ec4899"
  }
};

const WidgetCard = ({ name, text, category, onRemove }) => {
  const style = categoryStyles[category] || {
    gradient: "linear-gradient(135deg, #d1d5db, #9ca3af)", // gray fallback
    borderColor: "#6b7280"
  };

  return (
    <div
      className="widget-card"
      style={{
        background: style.gradient,
        borderColor: style.borderColor
      }}
    >
      <strong>{name.length > 12 ? name.slice(0, 12) + '…' : name}</strong>
      <p>{text.length > 25 ? text.slice(0, 25) + '…' : text}</p>
      <button onClick={onRemove}>❌</button>
    </div>
  );
};

export default WidgetCard;

