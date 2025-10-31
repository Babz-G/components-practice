function StatusBadge({ statusText, isOnline }) {
  const statusClass = isOnline ? "status-online" : "status-offline";
  const statusLabel = isOnline ? "Active" : "Away";

  return (
    <div className={`simple-badge ${statusClass}`}>
      <span className="dot"></span>
      <p>
        {statusText} is **{statusLabel}**
      </p>
    </div>
  );
}

export default StatusBadge;
