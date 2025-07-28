export default function SignUpModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target[0].value;
            const email = e.target[1].value;
            const password = e.target[2].value;
            const role = e.target[3].value;

            const newUser = { name, email, password, role };

            const existingUsers =
              JSON.parse(localStorage.getItem("users")) || [];

            existingUsers.push(newUser);

            localStorage.setItem("users", JSON.stringify(existingUsers));

            alert("Sign up successful!");
            onClose();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
            required
          />
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

          <select className="w-full border p-2 rounded" required>
            <option value=""> Select Role </option>
            <option value="seller"> Seller</option>
            <option value="buyer"> Buyer</option>
          </select>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
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
