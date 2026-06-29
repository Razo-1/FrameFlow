import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { BasicSwitches, LogOut } from "../../molecules";
import "./UpHeader.css";

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
    <div className={`${isDay ? "night" : ""} logo-menu ${show ? "show" : "hide"}`}>
      <h1 className="logo">
        <span>Frame</span>Flow
      </h1>
      <div className="panel">
        <BasicSwitches />
        <LogOut/>
      </div>
    </div>
  );
}

export { UpHeader };
