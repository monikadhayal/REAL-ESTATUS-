export default function SignInModal({ onClose, onLoginSuccess }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      localStorage.setItem("currentUser", JSON.stringify(userFound));
      alert("Login successful!");
      onLoginSuccess(); 
      onClose();
    } else {
      alert("User not found. Please sign up first.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            required
          />

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-red-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
