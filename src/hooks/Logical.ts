import { useState, useRef } from "react";
import { DataTables } from "../interface/DatasTable";

export const useTimeTracking = () => {
  const [time, setTime] = useState<{
    minutes: number;
    seconds: number;
    centiseconds: number;
    milliseconds: number;
  }>({
    minutes: 0,
    seconds: 0,
    centiseconds: 0,
    milliseconds: 0,
  });
  const intervalRef = useRef<number | null>(null);
  const [saveTime, setSaveTime] = useState(false);
  const [dataTimeList, setDataTimeList] = useState<Array<DataTables>>([]);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const startTime = Date.now();
    const intervalID = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const centiseconds = Math.floor((elapsedTime % 1000) / 10);
      const milliseconds = elapsedTime % 10;

      setTime({ minutes, seconds, centiseconds, milliseconds });
    }, 10);
    intervalRef.current = intervalID;
  };

  const stopTimer = () => {
    if (time.minutes === 0 && time.seconds === 0) return;

    clearInterval(intervalRef.current!);
    setSaveTime(true);
  };

  const restartTimer = () => {
    if (time.minutes === 0 && time.seconds === 0) return;

    setTime({ minutes: 0, seconds: 0, centiseconds: 0, milliseconds: 0 });
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

    setTime({ minutes: 0, seconds: 0, centiseconds: 0, milliseconds: 0 });
    setSaveTime(false);
  };

  const restartSettings = () => {
    setTime({ minutes: 0, seconds: 0, centiseconds: 0, milliseconds: 0 });
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
