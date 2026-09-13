import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";
import LoadingSpinner from "./LoadingSpinner";

function TechnologySection() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }

        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong while loading technologies.");
        setLoading(false);
      });
  }, []);

  const handleAdd = (technology) => {
    const alreadyAdded = selectedTech.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("Technology already added to your stack");
      return;
    }

    setSelectedTech([...selectedTech, technology]);

    toast.success(`${technology.name} added to your stack`);
  };

  const handleRemove = (id) => {
    const removedTechnology = selectedTech.find(
      (item) => item.id === id
    );

    const remainingTech = selectedTech.filter(
      (item) => item.id !== id
    );

    setSelectedTech(remainingTech);

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);
    toast.info("All technologies removed from your stack");
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <p className="py-20 text-center text-sm text-red-500">
        {error}
      </p>
    );
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-[1280px] px-4 py-20 md:px-8"
    >
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
          Explore the{" "}
          <span className="gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-base text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[3fr_1fr]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => {
            const isAdded = selectedTech.some(
              (item) => item.id === technology.id
            );

            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                handleAdd={handleAdd}
                isAdded={isAdded}
              />
            );
          })}
        </div>

        <StackPanel
          selectedTech={selectedTech}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
}

export default TechnologySection;