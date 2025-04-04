
'use client'
import { useEffect, useState } from "react";
import { getFavoriteWorkspaces } from "@/app/service/workspace.service";

const FavoriteComponent = () => {
  const [favoriteWorkspaces, setFavoriteWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomColor = () => {
    const colors = ["#F96666", "#4379F2", "#009990", "#B771E5", "#E5A771"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // useEffect(() => {
  //   const fetchFavorites = async () => {
  //     try {
  //       setLoading(true);
  //       const favData = await getFavoriteWorkspaces();
  //       // if (!favData?.payload) {
  //       //   throw new Error("Invalid response structure");
  //       // }

  //       setFavoriteWorkspaces(
  //         favData.map(workspace => ({
  //           ...workspace,
  //           color: getRandomColor(),
  //         }))
  //       );
  //     } catch (err) {
  //       setError("Failed to fetch favorite workspaces");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchFavorites();
  // }, []);

  
  // if (loading) return <div className="px-15 mt-20">Loading favorites...</div>;
  // if (error) return <div className="px-15 mt-20 text-red-500">{error}</div>;

  return (
    <div className="px-15 mt-20">
      
      <div className="flex justify-between">
        <h2 className="text-[#94A3B8] font-bold text-3xl">Favorite</h2>
        <img src="/star.svg" alt="star" className="mt-4" />
      </div>

      {favoriteWorkspaces.length > 0 ? (
        favoriteWorkspaces.map((workspace) => (
          <div key={workspace.id} className="flex justify-between mt-5 gap-4 hover:active:border-l-amber-800">
            <div className="flex items-center gap-4">
              <div
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: workspace.color }}
              >
                <span className="text-white font-bold text-lg">
                  {workspace.name?.charAt(0) || 'W'}
                </span>
              </div>
              <h3 className="text-xl">{workspace.name}</h3>
            </div>
            <img src="/more.svg" alt="more" className="mt-4" />
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-5">No favorite workspaces found.</p>
      )}
    </div>
  );
};

export default FavoriteComponent;