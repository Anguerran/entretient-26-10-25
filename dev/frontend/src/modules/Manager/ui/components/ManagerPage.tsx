import { useManagerPage } from "../hooks/useManagerPage";

export const ManagerPage = () => {
  const { states, actions } = useManagerPage();

  console.log(states, actions);

  return (
    <div>
      <div className="flex w-full gap-x-[2%] ">
        <div className="w-[78%] h-[150px] bg-blue-primary text-white rounded-xl justify-between p-3">
          <div className="bg-white text-blue-primary p-2 text-3xl font-bold flex justify-center items-center self-end max-w-20 h-20 shadow rounded-md">
            20
          </div>
          <div className="bg-white mt-4 self-end  text-blue-primary p-2  font-bold flex justify-center items-center  max-w-20  shadow rounded-md">
            <h4>Nouveau</h4>
          </div>
        </div>
        <div className="w-[20%] h-[150px] flex justify-center flex-col items-center gap-y-3 bg-red-500/80 text-white rounded-xl ">
          <h3>Actif</h3>
          <h2>10</h2>
        </div>

      </div>
      <div className="h-full w-full bg-gray-primary/50">
      </div>
    </div>
  );
};
