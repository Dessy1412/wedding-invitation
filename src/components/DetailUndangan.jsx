import { useEffect, useState } from "react";
import {
  FaMusic,
  FaPause,
  FaInstagram,
  FaClock,
  FaMapMarkerAlt,
  FaGift,
  FaCopy,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import "../styles/detailundangan.css";
import { addRSVP, listenRSVP } from "../services/rsvpService";
import { motion, AnimatePresence } from "framer-motion";

export default function DetailUndangan({ audioRef }) {
  const [guestName, setGuestName] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showGift, setShowGift] = useState(false);
  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [status, setStatus] = useState("");
  const [wishes, setWishes] = useState([]);
  const [copied, setCopied] = useState("");
  const [hideBtn, setHideBtn] = useState(false);
  const [sent, setSent] = useState(false);

  const format = (num) => String(num).padStart(2, "0");
  const toggleMusic = () => {
    if (!audioRef?.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const handleShowGift = () => {
    setHideBtn(true);
    setTimeout(() => {
      setShowGift(true);
    }, 300);
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");

    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);
  useEffect(() => {
    const targetDate = new Date(2026, 3, 30, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRSVP({ nama, ucapan, status });

      setSent(true);

      setNama("");
      setUcapan("");
      setStatus("");

      setTimeout(() => {
        setSent(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const unsubscribe = listenRSVP((data) => {
      setWishes(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* music */}
      <button onClick={toggleMusic} className="music-btn">
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>

      {/* Section Cover */}
      <div className="wrapper ">
        <div className="section-cover reveal">
          <img src="/cover.png" alt="cover" className="img" />

          <div className="overlay-text">
            <h2 className="title">The Wedding Of</h2>
            <div className="title-couple">
              <h1>INDINA</h1>
              <h1>&</h1>
              <h1>BYNSAR</h1>
            </div>

            <p className="title-date">Kamis, 30 April 2026</p>
          </div>
        </div>
      </div>

      {/* Section Ayat  */}
      <div className="wrapper">
        <div className="section-ayat reveal">
          <img src="/poto3.png" className="section-img" />
          <div className="text-ayat">
            <motion.p
              className="desc-ayat"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang."
            </motion.p>
            <motion.h3
              className="title-ayat"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Q.S Ar-Rum : 21
            </motion.h3>
          </div>
        </div>
      </div>

      {/* Section bride */}
      <div className="wrapper bride ">
        <div className="bride-section reveal">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bride & Groom
          </motion.h2>
          <motion.p
            className="mini-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </motion.p>
          <motion.p
            className="desc"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
            pernikahan kami.
          </motion.p>
          <div className="profiles">
            <div className="profile">
              <img
                src="/potowanita.png"
                alt="Indina"
                className="profile-img img"
              />
              <h3>Indina Agustina</h3>
              <p>
                Putri Pertama dari <br />
                Bapak Pujo Wirasmo dan Ibu Popon Maharani
              </p>
              <a
                href="https://www.instagram.com/indina_agustina/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaInstagram className="icon" />
                indina_agustina
              </a>
            </div>
            <p className="section-title-mini">&</p>
            <div className="profile">
              <img src="/potopria.png" alt="Bynsar" className="profile-img" />
              <h3>Bynsar Limbong S. ST. Pel</h3>
              <p>
                Putra Pertama dari <br /> Bapak Heppy Rampean dan Ibu Selni
                Palabiran
              </p>
              <a
                href="https://www.instagram.com/l_byn33/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaInstagram className="ig-icon" />
                l_byn33
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section savedate */}
      <div className="wrapper">
        <div className="savedate-section reveal">
          {/* SAVE THE DATE */}
          <div className="save-card reveal">
            <img src="/poto4.png" className="save-img" />
            <div className="save-overlay">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                Save The Date
              </motion.h2>
              <div className="countdown">
                {[
                  { label: "HARI", value: format(timeLeft.days) },
                  { label: "JAM", value: format(timeLeft.hours) },
                  { label: "MNT", value: format(timeLeft.minutes) },
                  { label: "DTK", value: format(timeLeft.seconds) },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                  >
                    <span>{item.value}</span>
                    <p>{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* AKAD RESEPSI */}
          <div className="event-card reveal">
            <h3 className="event-title">AKAD & RESEPSI</h3>
            <div className="event-date">
              <p className="day">Kamis</p>
              <h1 className="date">30</h1>
              <p className="month">APRIL 2026</p>
              <p className="info-item">
                <FaClock className="icon" />
                15.30 - 19.00
              </p>
            </div>
            <div className="location">
              <p>Lokasi Acara</p>
              <p className="info-item">Klapamanis Bandar Kemayoran</p>
              <p className="city">
                Jl. Angsana Blok D5, Pademangan Timur, Pademangan, North Jakarta
                City, Jakarta 14410
              </p>
            </div>
            <a
              href="https://maps.google.com?q=Klapamanis Bandar Kemayoran Jakarta Utara"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaMapMarkerAlt className="icon" /> Buka Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Section moments */}
      <div className="wrapper">
        <div className="section">
          <div className="moments-section reveal">
            <h2 className="section-title">Our Moments</h2>

            <div className="moments-grid">
              <img src="/poto4.png" alt="moment1" />
              <img src="/poto6.png" alt="moment2" />
              <img src="/poto1.png" alt="moment3" />
              <img src="/poto7.png" alt="moment4" />
              <img src="/poto3.png" alt="moment5" />
              <img src="/poto5.png" alt="moment6" />
              <img src="/poto2.png" alt="moment7" />
            </div>
          </div>
        </div>
      </div>

      {/* Section Gift */}
      <div className="wrapper">
        <div className="gift-section reveal">
          <h2 className="section-title">Wedding Gift</h2>
          <p className="desc">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi
            kado secara cashless.
          </p>
          <button
            className={`btn gift-btn ${hideBtn ? "fade-out" : ""}`}
            onClick={handleShowGift}
          >
            <FaMoneyCheckAlt className="icon" />
            Klik Disini
          </button>
          {showGift && (
            <div className="gift-list">
              <div className="gift-card">
                <div className="gift-top">
                  <div className="gift-left">
                    <p className="bank-name">BCA</p>
                    <p className="rekening">1940485645</p>
                    <p className="atas-nama">a.n. Indina Agustina</p>
                  </div>
                  <div className="gift-right">
                    <img src="/logo.png" alt="bank" className="bank-logo" />
                  </div>
                </div>
                <button
                  className="btn full"
                  onClick={() => copyText("1940485645")}
                >
                  <FaCopy className="icon" />
                  Salin Rekening
                </button>
              </div>
              <div className="gift-card">
                <div className="gift-top">
                  <div className="gift-left">
                    <p className="bank-name">BCA</p>
                    <p className="rekening">0070904896</p>
                    <p className="atas-nama">a.n. Bynsar Limbong</p>
                  </div>
                  <div className="gift-right">
                    <img src="/logo.png" alt="bank" className="bank-logo" />
                  </div>
                </div>
                <button
                  className="btn full"
                  onClick={() => copyText("0070904896")}
                >
                  <FaCopy className="icon" />
                  Salin Rekening
                </button>
              </div>
              <div className="gift-card gift-physical">
                <div className="gift-top">
                  <div className="gift-left">
                    <p className="bank-name">Kirim Kado</p>
                    <p className="atas-nama">a.n. Indina Agustina</p>
                    <p className="info-text">(081234567890)</p>
                    <p className="alamat">
                      Jl . Ampera VI no.10 RT.8/RW.9 (Mari laundry) , Pademangan
                      Barat,Jakarta utara.
                    </p>
                  </div>
                  <div className="gift-right">
                    <FaGift className="gift-icon" />
                  </div>
                </div>
                <button
                  className="btn full"
                  onClick={() =>
                    copyText(`Jl . Ampera VI no.10 RT.8/RW.9 (Mari laundry), Pademangan
Barat, Jakarta Utara`)
                  }
                >
                  <FaCopy className="icon" />
                  Salin Alamat
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section Wishes  */}
      <div className="wrapper bride">
        <div className="wishes-container reveal">
          <h2 className="section-title">Wishes</h2>
          <p className="desc">Berikan doa dan ucapan terbaik untuk kami.</p>

          <form className="wishes-form" onSubmit={handleSubmit}>
            {/* Nama */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>

            {/* Ucapan */}
            <div className="form-group">
              <textarea
                placeholder="Bagikan ucapan terbaik Anda..."
                className="textarea"
                value={ucapan}
                onChange={(e) => setUcapan(e.target.value)}
              />
            </div>

            {/* Kehadiran */}
            <div className="form-group attendance">
              <p className="mini-title">Konfirmasi Kehadiran</p>

              <div className="radio-group">
                <button
                  type="button"
                  className={`btn-radio ${status === "Hadir" ? "active hadir" : ""}`}
                  onClick={() => setStatus("Hadir")}
                >
                  Hadir
                </button>

                <button
                  type="button"
                  className={`btn-radio ${status === "Tidak Hadir" ? "active tidak-hadir" : ""}`}
                  onClick={() => setStatus("Tidak Hadir")}
                >
                  Tidak Hadir
                </button>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Kirim Ucapan
            </button>
          </form>
        </div>
      </div>
      <div>
        {wishes.length > 0 && (
          <ul className="wishes-list">
            {wishes.map((wish, index) => (
              <li key={index} className="wish-card">
                <div className="wish-left">
                  <strong className="wish-name">{wish.nama}</strong>
                  <p className="wish-message">{wish.ucapan}</p>
                </div>
                <div className="wish-right">
                  <span
                    className={`wish-status ${
                      wish.status === "Hadir" ? "status-yes" : "status-no"
                    }`}
                  >
                    {wish.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Secstion last */}
      <div className="wrapper">
        <section className="section-last reveal">
          <div className="section-img-wrapper">
            <img src="/poto2.png" alt="couple" className="section-img" />
          </div>
          <div className="last-box">
            <h2 className="section-title">Terima Kasih</h2>
            <p className="desc">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
              kami.
            </p>
            <p className="mini-title">
              Wassalamu’alaikum warahmatullahi wabarakatuh
            </p>
          </div>
          <motion.div
            className="closing-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="closing-text">Kami yang berbahagia</p>

            <motion.h2
              className="couple-name"
              initial={{ opacity: 0, letterSpacing: "10px" }}
              whileInView={{ opacity: 1, letterSpacing: "2px" }}
              transition={{ duration: 1 }}
            >
              Indina & Bynsar
            </motion.h2>
          </motion.div>
        </section>
      </div>

      <div className="credit-section">
        <p>Specially made by Dessy Fitriyani Dewi</p>
      </div>
    </div>
  );
}
