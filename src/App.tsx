import "./App.css";
import Autocomplete from "./components/Autocomplete/Autocomplete";

const LIST = [
  {
    _id: "aacd6256-711b-4477-a484-383df19d6a58",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg",
    fullName: "Dhyanesh Khanna",
    email: "Dhyanesh41@gmail.com",
  },
  {
    _id: "adca2bc6-25ad-4d00-9d1e-1fc26d6c0a64",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/185.jpg",
    fullName: "Gandharv Patil",
    email: "Gandharv_Patil82@yahoo.com",
  },
  {
    _id: "ff667bda-cdc0-4840-9247-a4c8abd52da9",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/647.jpg",
    fullName: "Amish Abbott",
    email: "Amish.Abbott@yahoo.com",
  },
  {
    _id: "ea1a5770-e902-40e9-8fc9-74a195956104",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1048.jpg",
    fullName: "Mahesh Guha-Nair",
    email: "Mahesh_Guha-Nair34@hotmail.com",
  },
  {
    _id: "7119e79a-4aa6-4c2d-ad7f-b7e408517de5",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/781.jpg",
    fullName: "Nikita Rana",
    email: "Nikita.Rana@gmail.com",
  },
  {
    _id: "36c70129-e89e-4401-81c5-2ec832d57c76",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/398.jpg",
    fullName: "Bhadra Jha",
    email: "Bhadra_Jha@hotmail.com",
  },
  {
    _id: "4b8b5164-f43d-4851-af8a-5d3cc24d13ad",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/729.jpg",
    fullName: "Achalesvara Devar",
    email: "Achalesvara.Devar@gmail.com",
  },
  {
    _id: "c2542388-797e-4a73-8787-44edb9893499",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1040.jpg",
    fullName: "Eekalabya Bhat",
    email: "Eekalabya_Bhat57@yahoo.com",
  },
  {
    _id: "c60526c8-45e3-445b-ad2c-6a90c9a9559a",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/847.jpg",
    fullName: "Udai Kaur",
    email: "Udai_Kaur49@yahoo.com",
  },
];

function App() {
  return <Autocomplete defaultList={LIST} />;
}

export default App;
