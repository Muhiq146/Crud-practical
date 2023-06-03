/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components Imports
import { useAuth } from "../../../app/modules/auth";
import { Keyword } from "../../../Helper/Languages/Languages";
import { toAbsoluteUrl } from "../../helpers";
import {
  SetLanguageAuthData,
  SetLanguageData,
} from "../../../Redux/Action/LanguageAction/LanguageAction";
import Api from "../../../Api/Api";

const Languages = () => {
  // useEffect
  useEffect(() => {
    if (localStorage.getItem("current_language")) {
      setcurrentLanguage(
        languages.find(
          (x) => x.name === JSON.parse(localStorage.getItem("current_language")).selectedLang
        )
      );
    } else {
      setcurrentLanguage(languages.find((x) => x.lang === "en"));
    }
  }, []);

  // Languages
  const languages = [
    {
      lang: "en",
      name: "English",
      label: Keyword("ENGLISH"),
      flag: toAbsoluteUrl("/media/flags/united-states.svg"),
    },
    {
      lang: "es",
      name: "Spanish",
      label: Keyword("SPANISH"),
      flag: toAbsoluteUrl("/media/flags/spain.svg"),
    },
    {
      lang: "fr",
      name: "French",
      label: Keyword("FRENCH"),
      flag: toAbsoluteUrl("/media/flags/france.svg"),
    },
  ];

  // Other
  const { setlanguage } = useAuth();
  const dispatch = useDispatch();

  // States
  const [currentLanguage, setcurrentLanguage] = useState("");
  const languageData = useSelector((state) => state.LanguageReducer.languageData);
  const languageAuthData = useSelector((state) => state.LanguageReducer.languageAuthData);

  // useEffect
  useEffect(() => {
    setlanguage(currentLanguage);
  }, [languageData, languageAuthData]);

  // Set language
  const setLanguage = async (lang) => {
    const response = await Api(`language?language=${lang.name}`, "GET");
    const responseAuth = await Api(
      `master/get/translated-words?column=${lang.name}`,
      "GET",
      "",
      "",
      "",
      true
    );
    if (response?.data.code && responseAuth?.data.status) {
      localStorage.setItem(
        "current_language",
        JSON.stringify({ selectedLang: lang.name, lang: lang.lang })
      );
      dispatch(SetLanguageData(response.data.data));
      dispatch(SetLanguageAuthData(responseAuth.data.data));
      let current = languages.find(
        (x) => x.name === JSON.parse(localStorage.getItem("current_language")).selectedLang
      );
      current.label = response.data?.data[current?.name?.toUpperCase()];
      setcurrentLanguage(current);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 200);
    }
  };

  return (
    <div
      className="menu-item px-5"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="left-start"
      data-kt-menu-flip="bottom"
    >
      <a href="#" className="menu-link px-5">
        <span className="menu-title position-relative">
          {Keyword("LANGUAGE")}
          <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
            {currentLanguage?.label}
            <img
              className="w-15px h-15px rounded-1 ms-2"
              src={currentLanguage?.flag}
              alt="metronic"
            />
          </span>
        </span>
      </a>

      <div className="menu-sub menu-sub-dropdown w-175px py-4">
        {languages.map((l) => (
          <div
            className="menu-item px-3"
            key={l.lang}
            onClick={() => {
              setLanguage(l);
            }}
          >
            <a
              className={`menu-link d-flex px-5${l.lang === currentLanguage.lang ? " active" : ""}`}
            >
              <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src={l.flag} alt="metronic" />
              </span>
              {l.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export { Languages };
