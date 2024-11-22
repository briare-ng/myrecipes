import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, resetRecipe } from "../features/recipesSlice";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import useToggle from "../custom/useToggle";
import Modal from "./Modal";

function Planning() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.value);
  const [openModal, setOpenModal] = useToggle(false);
  const [selectedmeal, setSelectedMeal] = useState({});
  console.log(selectedmeal);

  const mealsPlan = recipes.map((meal, i) => {
    return (
      <h3 className="py-1 font-medium" key={meal.id + "_" + i}>
        {meal.strMeal} for {meal.date}
      </h3>
    );
  });

  const planningObjects = recipes.map((meal) => {
    return { title: meal.strMeal, date: meal.date };
  });

  const showEvent = (e) => {
    // console.log(e.event.title); //meal name
    // console.log(e.event.startStr); // planned date
    setSelectedMeal({ strMeal: e.event.title, date: e.event.startStr });
    setOpenModal();
  };

  const handleDelete = () => {
    console.log("deleteHandler");
    dispatch(deleteRecipe(selectedmeal));
    setOpenModal();
  };

  const handleClear = () => {
    dispatch(resetRecipe());
  };

  return (
    <>
      <div className="mt-5">{mealsPlan}</div>
      {recipes.length > 0 ? (
        <button
          className=" border border-red-700 p-1 rounded-lg hover:bg-red-400 hover:text-white"
          onClick={handleClear}
        >
          vider le planning
        </button>
      ) : (
        <p>Nothing planned for now...</p>
      )}
      <div className="m-4 p-2 bg-slate-100 shadow-xl shadow-blue-300">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={planningObjects}
          eventClick={showEvent}
          headerToolbar={{
            left: "title",
            center: "",
            right: "prev,next today",
          }}
          selectable={true}
          editable={true}
          height="auto"
        />
      </div>
      {openModal && (
        <Modal onClose={setOpenModal}>
          <p className="font-semibold">
            Delete {selectedmeal.title} planned on {selectedmeal.date} ?
          </p>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
            onClick={handleDelete}
          >
            Delete
          </button>
        </Modal>
      )}
    </>
  );
}

export default Planning;
