import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import { convertBase64 } from "../services/convertBase64";
import { useRouter } from "next/router";

const AddMenu = () => {
  const router = useRouter();
  const [state, setState] = useState({
    name: "",
    type: "",
    timeToBeTaken: "",
    timeTakenToCook: "",
    ingredients: [],
    steps: [],
  });
  const [ingredient, setIngredient] = useState("");
  const [step, setStep] = useState("");
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addIngredient = () => {
    setState({ ...state, ingredients: [...state.ingredients, ingredient] });
    setIngredient("");
  };

  const addStep = () => {
    setState({ ...state, steps: [...state.steps, step] });
    setStep("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...state,
      imageUrl: baseImage,
    };
    await axios.post("/api/menus", data);
    router.push("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-10 shadow-2xl bg-white">
      <h3>Add A Menu</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <fieldset className="border border-solid border-gray-300 rounded-lg p-5">
          <legend className="text-teal-700 text-2xl italic">Menu</legend>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-700 mb-2"
              >
                Name Of Food
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-sm border border-slate-400 w-full text-xl p-1 text-gray-600 outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="type"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Type
                </label>
                <select
                  name="type"
                  id="type"
                  onChange={handleChange}
                  className="rounded-sm border border-slate-400 w-full text-xl p-1 text-gray-600 outline-none"
                >
                  <option value="">Select type of food</option>
                  <option value="local">Local</option>
                  <option value="continental">Continental</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeToBeTaken"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Time of the day to be taken
                </label>
                <select
                  name="timeToBeTaken"
                  id="timeToBeTaken"
                  onChange={handleChange}
                  className="rounded-sm border border-slate-400 w-full text-xl p-1 text-gray-600 outline-none"
                >
                  <option value="">Select time of the day</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="supper">Supper</option>
                </select>
              </div>
            </div>
            <div>
              <label
                className="block text-lg text-gray-700 mb-2"
                for="user_avatar"
              >
                Menu Image
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                onChange={(e) => uploadImage(e)}
              ></input>
            </div>
          </div>
        </fieldset>
        <fieldset className="border border-solid border-gray-300 rounded-lg p-5">
          <legend className="text-teal-700 text-2xl italic">Recipe</legend>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="timeTakenToCook"
                className="block text-lg text-gray-700 mb-2"
              >
                Time taken to cook
              </label>
              <input
                type="number"
                name="timeTakenToCook"
                id="timeTakenToCook"
                className="rounded-sm border border-slate-400 text-xl p-1 text-gray-600 outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <h3 className="block text-lg text-gray-700 mb-2">Ingredient</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="ingredient"
                    id="ingredient"
                    placeholder="Add ingredients..."
                    className="rounded-sm border border-slate-400 w-10/12 text-xl p-1 text-gray-600 outline-none"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                  />
                  <CheckCircleIcon
                    className="w-8 cursor-pointer text-teal-700"
                    onClick={addIngredient}
                  />
                </div>
                <div>
                  <ul className="list-disc">
                    {state.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-lg">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="block text-lg text-gray-700 mb-2">
                Steps to cook
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="step"
                    id="step"
                    placeholder="Add Step..."
                    className="rounded-sm border border-slate-400 w-10/12 text-xl p-1 text-gray-600 outline-none"
                    value={step}
                    onChange={(e) => setStep(e.target.value)}
                  />
                  <CheckCircleIcon
                    className="w-8 cursor-pointer text-teal-700"
                    onClick={addStep}
                  />
                </div>
                <div>
                  <ul className="list-disc">
                    {state.steps.map((ingredient, index) => (
                      <li key={index} className="text-lg">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="flex justify-end">
          <button type="submit" className="bg-teal-700 py-2 px-4 text-white">
            Create Menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
