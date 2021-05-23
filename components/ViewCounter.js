import format from "comma-number";
import { useEffect, useState } from "react";

import loadDb from "../lib/db";

const ViewCounter = ({ id }) => {
  const [views, setViews] = useState("");

  useEffect(() => {
    const onViews = (newViews) => setViews(newViews.val());
    let db;

    const fetchData = async () => {
      db = await loadDb();
      db.ref("views").child(id).on("value", onViews);
    };

    fetchData();

    return () => {
      if (db) {
        db.ref("views").child(id).off("value", onViews);
      }
    };
  }, [id]);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/increment-views?id=${encodeURIComponent(id)}`);

    registerView();
  }, [id]);

  return `${views ? format(views) : "–––"} views`;
};

export default ViewCounter;
