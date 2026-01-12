import { useState } from "react";
import { useAdmin } from "../context/AdminContext";

const PromoMarquee = () => {
  const [open, setOpen] = useState(false);
  const { data } = useAdmin();

  const marqueeText = data?.marqueeText ?? "Special Offer ✦ Book Now";

  return (
    <>
      {/* Marquee */}
      <div
        className="h-16 w-full overflow-hidden flex items-center"
        style={{ backgroundColor: "#FE7028" }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setOpen(true)}
              className="mx-8 text-sm font-semibold flex items-center gap-2 cursor-pointer"
              style={{ color: "#FFFFFF" }}
              type="button"
            >
              <span aria-hidden="true">✦</span>
              {marqueeText}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-[90%] max-w-md rounded-xl bg-white p-6">
            <h2 className="mb-2 text-xl font-bold">Book Now</h2>

            <p className="mb-4 text-sm text-gray-600">
              Get 25% OFF on your numerology report 
            </p>

            <button
              className="w-full rounded-lg py-2 font-semibold text-white"
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
    </>
  );
};

export default PromoMarquee;  