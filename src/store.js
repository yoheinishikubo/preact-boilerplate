import { useState, useEffect } from "preact/hooks";
import { createContainer } from "unstated-next";
import texts from "./texts.json";
import errors from "./components/errors";
import * as Comlink from "comlink";
import Worker from "worker-loader!./worker.js";
const worker = Comlink.wrap(new Worker());

const localTexts = () => {
  const short = navigator.language.split(/\-/g)[0];
  const code = short === "zh" ? navigator.language : short;
  return texts[code] || texts["en"];
};

const postJson = (url, params) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          reject(json);
        } else {
          resolve(json);
        }
      })
      .catch(reject);
  });

export const useStore = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const fetchValue= async ()=>{
      await worker.fetchValue();
      setProgress(await worker.value);
  }

  return {
      progress,
      setProgress,
      error
  };
};
export const StoreContainer = createContainer(useStore);