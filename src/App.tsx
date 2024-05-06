import "./App.css";
import Button from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { ContainerComponent } from "./components/Container/Container";
import Table from "./components/Table/Table";
import { useTimeTracking } from "./hooks/Logical";

function App() {
  const {
    time,
    saveTime,
    isContinue,
    continueCount,
    notContinueCount,
    dataTimeList,
    startTimer,
    stopTimer,
    restartTimer,
    saveDataList,
    restartSettings,
  } = useTimeTracking();

  return (
    <>
      <ContainerComponent>
        <Header time={time} />

        <Button action={startTimer} title="Start" bgColor="#228B22" />
        <Button action={stopTimer} title="Stop" bgColor="#fbb000" />
        <Button action={restartTimer} title="Restart" bgColor="#FF0000" />

        {saveTime && (
          <div>
            <p>Desejar continuar a contagem?</p>
            <Button action={continueCount} title="Sim" bgColor="#228B22" />
            <Button action={notContinueCount} title="Não" bgColor="#FF0000" />
          </div>
        )}

        {isContinue && (
          <div>
            <p>Desejar Salvar dados ?</p>
            <Button action={saveDataList} title="Sim" bgColor="#228B22" />
            <Button action={restartSettings} title="Não" bgColor="#FF0000" />
          </div>
        )}

        {dataTimeList && dataTimeList.length > 0 && (
          <Table dataTableList={dataTimeList} />
        )}
      </ContainerComponent>
    </>
  );
}

export default App;
