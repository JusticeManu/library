import { useState, useEffect } from "react";

// import jwtService from "../api/jwt.service";

// export const dispatchAuth = (data, isVerified, dispatch) => {
//   const user = data.user;
//   const { id, email, contact, role, tokenData, name } = user;

//   const userObj = JSON.stringify({
//     id,
//     email,
//     contact,
//     role,
//     name,
//     isVerified,
//   });
//   jwtService.storeItem(userObj, "user");
//   jwtService.storeItem(tokenData.token, "token");

//   dispatch({ type: "AUTH" });
//   dispatch({
//     type: "LOAD_USER",
//     user: { id, email, contact, role },
//   });
//   dispatch({ type: "VERIFY_EMAIL", isEmailVerified: isVerified });
// };

export const extractKeysAsHeaders = (object, excludes) => {
  const keys = Object.keys(object);
  return !excludes ? keys : keys.filter((key) => !excludes.includes(key));
};

export const extractValuesAsRows = (object, includeId) => {
  const values = Object.values(object).map((value) => {
    return { cell: value };
  });
  return !includeId ? values.filter((_, i) => i != 0) : values;
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const MAX_LOAD_MORE_SIZE = 16;

export const range = (num) => Array.from(Array(num), (_, i) => i + 1);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
  }).format(number);
};

export const generateRandomRGBA = () => {
  return (
    "rgba(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    0.65 +
    ")"
  );
};
