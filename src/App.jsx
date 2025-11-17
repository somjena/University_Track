import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-800 via-slate-900 to-black">
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition"
      >
        Open Form
      </button>

      {/* Popup Background */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center backdrop-blur-sm">
          {/* Popup Box */}
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-md animate-scaleIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Student Project Form
            </h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Reg No */}
              <div>
                <label className="block mb-1 font-medium">Registration No</label>
                <input
                  type="text"
                  placeholder="Enter Registration No"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Project Name */}
              <div>
                <label className="block mb-1 font-medium">Project Name</label>
                <input
                  type="text"
                  placeholder="Enter Project Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
