"use client";
import { FaFilter } from "react-icons/fa";
import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import useSidebarStore from "@/lib/zuustand-store";
import { Menu } from "lucide-react";
const MenuIcon: React.FC = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const { width } = useWindowSize();

  return (
    <div className="bg-red-500 " onClick={toggleSidebar}>
      Menu
    </div>
  );
};

export default MenuIcon;
