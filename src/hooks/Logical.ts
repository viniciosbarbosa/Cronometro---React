import { useState, useRef } from "react";
import { DataTables } from "../interface/DatasTable";

export const useTimeTracking = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [saveTime, setSaveTime] = useState(false);
  const [dataTimeList, setDataTimeList] = useState<Array<DataTables>>([]);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const intervalID = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    intervalRef.current = intervalID;
  };

  const stopTimer = () => {
    if (time === 0) return;

    clearInterval(intervalRef.current!);
    setSaveTime(true);
  };

  const restartTimer = () => {
    if (time === 0) return;

    setTime(0);
    startTimer();
  };

  const saveDataList = () => {
    setDataTimeList([
      ...dataTimeList,
      {
        data: new Date().toLocaleString("pt-BR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        time: time,
      },
    ]);

    setTime(0);
    setSaveTime(false);
  };

  const restartSettings = () => {
    setTime(0);
    setSaveTime(false);
    clearInterval(intervalRef.current!);
  };

  return {
    time,
    saveTime,
    dataTimeList,
    startTimer,
    stopTimer,
    restartTimer,
    saveDataList,
    restartSettings,
  };
};
