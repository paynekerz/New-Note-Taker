const note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <a
          onClick={() => handleDeleteNote(id)}
          className="delete-button"
          size="1.3em"
        >Delete</a>
      </div>
    </div>
  );
};

export default note;
