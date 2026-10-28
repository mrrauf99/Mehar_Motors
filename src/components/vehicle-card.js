"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { createInquiryMessage, createWhatsAppUrl, formatDailyRate, whatsAppNumber } from "@/lib/site";

export function VehicleCard({ vehicle, headingLevel = 3 }) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryRendered, setInquiryRendered] = useState(false);
  const [minimumDate, setMinimumDate] = useState("");
  const closeTimer = useRef(null);
  const VehicleHeading = headingLevel === 4 ? "h4" : "h3";

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function toggleInquiry() {
    window.clearTimeout(closeTimer.current);
    if (inquiryOpen) {
      setInquiryOpen(false);
      const closeDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 150;
      closeTimer.current = window.setTimeout(() => setInquiryRendered(false), closeDelay);
      return;
    }

    const today = new Date();
    setMinimumDate(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`);
    setInquiryRendered(true);
    setInquiryOpen(true);
  }

  function handleInquiry(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const date = formData.get("startDate");
    const duration = Number(formData.get("duration"));
    const inquiryUrl = createWhatsAppUrl(
      whatsAppNumber,
      createInquiryMessage({
        vehicle: vehicle.name,
        date,
        duration: `${duration} ${duration === 1 ? "day" : "days"}`
      })
    );

    if (inquiryUrl) window.open(inquiryUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <article className="vehicle-card" id={vehicle.id} data-reveal>
      <div className="vehicle-image-wrap">
        <Image
          className="vehicle-image"
          src={vehicle.image}
          alt={vehicle.alt}
          fill
          loading={vehicle.id === "mercedes-maybach-s-class" || vehicle.id === "range-rover" ? "eager" : "lazy"}
          sizes="(max-width: 700px) 70vw, (max-width: 1100px) 50vw, 45vw"
          quality={75}
        />
      </div>
      <div className="vehicle-meta">
        <div className="vehicle-copy">
          <VehicleHeading>{vehicle.name}</VehicleHeading>
          <p className="vehicle-category">{vehicle.category}</p>
          <p className="vehicle-rate-label">Price per day <span>Example</span></p>
          <p className="vehicle-rate">{formatDailyRate(vehicle.sampleDailyRatePKR)} <span>/ day</span></p>
          {whatsAppNumber && (
            <>
              <button
                className="vehicle-inquiry-link"
                type="button"
                aria-expanded={inquiryOpen}
                aria-controls={`${vehicle.id}-inquiry`}
                onClick={toggleInquiry}
              >
                {inquiryOpen ? "Close" : "Ask about this car"}<ArrowIcon direction={inquiryOpen ? "up" : "down"} />
              </button>
              {inquiryRendered && (
                <form
                  className={`vehicle-inquiry-form${inquiryOpen ? " is-open" : " is-closing"}`}
                  id={`${vehicle.id}-inquiry`}
                  onSubmit={handleInquiry}
                  aria-hidden={!inquiryOpen}
                  inert={!inquiryOpen}
                >
                  <label htmlFor={`${vehicle.id}-start-date`}>When do you need it?
                    <input id={`${vehicle.id}-start-date`} name="startDate" type="date" min={minimumDate} required />
                  </label>
                  <label htmlFor={`${vehicle.id}-duration`}>How many days?
                    <input id={`${vehicle.id}-duration`} name="duration" type="number" min="1" max="365" step="1" inputMode="numeric" required />
                  </label>
                  <button className="vehicle-inquiry-submit" type="submit">Send on WhatsApp <ArrowIcon /></button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
