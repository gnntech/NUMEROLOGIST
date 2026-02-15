import { useState } from "react";
import { useAdmin } from "../context/AdminContext";

const PromoMarquee = () => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { data } = useAdmin();

  const marqueeText = data?.marqueeText ?? "Book Now & Get 25% OFF — Slots are limited. Reserve yours now!!";
  const formUrl = data?.marqueeFormUrl ?? "#";

  const handleProceedToBooking = () => {
    if (formUrl && formUrl !== "#") {
      window.open(formUrl, "_blank");
      setOpen(false);
    }
  };

  return (
    <>
      <div
        className="h-16 w-full overflow-hidden flex items-center"
        style={{ backgroundColor: "#FE7028" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex whitespace-nowrap items-center"
          style={{
            animation: isHovered || open ? 'none' : 'marquee 30s linear infinite',
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4 mx-4">
              <span
                className="text-sm font-semibold"
                style={{ color: "#FFFFFF" }}
              >
                {marqueeText}
              </span>
              <button
                onClick={() => setOpen(true)}
                className="px-4 py-1.5 rounded font-semibold text-sm whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#FFFFFF", color: "#FE7028" }}
                type="button"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-[90%] max-w-md rounded-xl bg-white p-6">
            <h2 className="mb-2 text-xl font-bold">Book Now</h2>

            <p className="mb-4 text-sm text-gray-600">
              Get 25% OFF on your numerology consultation
            </p>

            <button
              onClick={handleProceedToBooking}
              className="w-full rounded-lg py-2 font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FE7028" }}
              type="button"
            >
              Proceed to Booking
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full text-sm text-gray-500 hover:underline"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default PromoMarquee;