"use client";
const ClientButton = () => {
  return (
    <div>
      <button
        className="bg-purple-500 p-4 border-spacing-4 rounded-md"
        onClick={console.log("cli")}
      >
        Click
      </button>
    </div>
  );
};

export default ClientButton;
