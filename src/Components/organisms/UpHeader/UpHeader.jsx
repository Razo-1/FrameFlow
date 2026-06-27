import { useSelector } from "react-redux";
import { BasicSwitches } from "../../molecules";
import "./UpHeader.css";
import { useEffect, useState, useRef } from "react";

function UpHeader() {
  let { isDay } = useSelector((state) => state.nightMode);
  const lastScroll = useRef(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isDay ? "night" : ""} logo-menu ${show ? "show" : "hide"}`}
    >
      <h1 className="logo">
        <span>Frame</span>Flow
      </h1>
      <BasicSwitches />
    </div>
  );
}

export { UpHeader };
