import React from "react";
import "../styles/cover.css";
import { FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cover({ audioRef }) {
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [isOpening, setIsOpening] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to") || "Tamu Undangan";

    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  const handleOpen = () => {
    setIsOpening(true);

    if (audioRef?.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    setTimeout(() => {
      const encodedName = encodeURIComponent(guestName);
      navigate(`/detailundangan?to=${encodedName}`);
    }, 800);
  };
  return (
    <div className={`cover ${isOpening ? "fade-out" : ""}`}>
      <div className="cover-title">
        <h2 className="wedding-title">The Wedding Of</h2>
        <h1 className="couple-names">Indina & Bynsar</h1>
      </div>
      <div>
        <p className="greeting">
          Kepada Yth.
          <br />
          Bapak/Ibu/Saudara/i
        </p>
        <h3 className="guest-name">{guestName}</h3>
        <p className="note">
          *Mohon maaf jika ada kesalahan dalam penulisan nama & gelar*
        </p>

        <button className="open-btn" onClick={handleOpen}>
          <FaEnvelope className="icon" />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
