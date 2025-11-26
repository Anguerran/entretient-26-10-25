import { useManagerPage } from "../hooks/useManagerPage";

export const ManagerPage = () => {
  const { states, actions } = useManagerPage();

  console.log(states, actions);

  return (
    <div>
      <div className="flex w-full ">
        <div className="w-[79%] h-[200px] bg-blue-primary text-white rounded-xl"></div>
        <div></div>
      </div>
    </div>
  );
};
