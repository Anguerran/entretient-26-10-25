import { useHomePage } from "../hooks/useHomePage";
export const HomePage = () => {
  const { states, actions } = useHomePage();
  console.log('states,actions', states,actions)
  return <div>HomePage</div>;
};
