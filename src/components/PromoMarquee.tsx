import { useState } from "react";
import { useAdmin } from "../context/AdminContext";

const PromoMarquee = () => {
  const [open, setOpen] = useState(false);
  const { data } = useAdmin();

  return (
    <>
      {/* Marquee */}
      <div className="h-16 w-full overflow-hidden flex items-center" style={{ backgroundColor: '#2E2D2F' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <button
              key={i}
              onClick={() => setOpen(true)}
              className="mx-8 text-sm font-semibold hover:underline cursor-pointer flex items-center gap-2"
              style={{ color: '#FE7028' }}
            >
              <span style={{ color: '#FE7028' }}>✦</span>
              {data.marqueeText}
            </button>
          ))}
        </div>
      </div>

      {/* Book Now Card (Modal) */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-2">Book Now</h2>
            <p className="text-sm text-gray-600 mb-4">
              Get 25% OFF on your numerology report ✨
            </p>

            <button
              className="w-full py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#FE7028' }}
            >
              Proceed to Booking
            </button>

            <button
              onClick={() => setOpen(false)}
              className="w-full mt-3 text-sm text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoMarquee;