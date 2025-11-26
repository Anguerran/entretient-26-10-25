import { useHomePage } from "../hooks/useHomePage";
export const HomePage = () => {
  const { states, actions } = useHomePage();
  console.log("states,actions", states, actions);
  return (
    <div className="w-full ">
      <h3>Statistique</h3>
      <hr className="my-2" />
      <div className="flex w-full justify-between ">
        <div className="h-[120px]  w-[200px] flex justify-center items-center text-4xl font-bold rounded bg-blue-primary text-white flex-col">
          <p>User</p>
          <h1>10</h1>
        </div>
        <div className="h-[120px]  w-[200px] flex justify-center items-center text-4xl font-bold rounded bg-blue-primary text-white flex-col">
          <p>User</p>
          <h1>10</h1>
        </div>
        <div className="h-[120px]  w-[200px] flex justify-center items-center text-4xl font-bold rounded bg-blue-primary text-white flex-col">
          <p>User</p>
          <h1>10</h1>
        </div>
      </div>
      <div className="pt-4">
        <h4 className="p-2 shadow-sm rounded">Liste des clients</h4>
        <div className="flex w-full flex-col gap-y-1">
          <div className="h-12 hover:bg-gray-500 hover:text-white duration-300 border font-semibold shadow flex justify-between items-center px-2 rounded-lg ">
            <p>Client</p>
            <p className="text-xs italic ">12/02/2025</p>
          </div>
          <div className="h-12 hover:bg-gray-500 hover:text-white duration-300 border font-semibold shadow flex justify-between items-center px-2 rounded-lg ">
            <p>Client</p>
            <p className="text-xs italic ">12/02/2025</p>
          </div>
          <div className="h-12 hover:bg-gray-500 hover:text-white duration-300 border font-semibold shadow flex justify-between items-center px-2 rounded-lg ">
            <p>Client</p>
            <p className="text-xs italic ">12/02/2025</p>
          </div>
          <div className="h-12 hover:bg-gray-500 hover:text-white duration-300 border font-semibold shadow flex justify-between items-center px-2 rounded-lg ">
            <p>Client</p>
            <p className="text-xs italic ">12/02/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};
