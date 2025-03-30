"use client";
import Button from "@/component/ui/button";
import Checkbox from "@/component/ui/select";
import { useState } from "react";

interface CheckboxItem {
  id: string;
  label: string;
  checked: boolean;
}

export default function CheckboxList() {
  const [items, setItems] = useState<CheckboxItem[]>([
    { id: "all", label: "All pages", checked: false },
    { id: "page1", label: "Page 1", checked: false },
    { id: "page2", label: "Page 2", checked: false },
    { id: "page3", label: "Page 3", checked: false },
    { id: "page4", label: "Page 4", checked: false },
  ]);

  const handleCheckboxChange = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        id === "all"
          ? {
              ...item,
              checked: !prevItems.find((i) => i.id === "all")?.checked,
            }
          : item.id === id
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  };

  return (
    <div className="w-96 p-4 border rounded shadow-md bg-white">
      <div className="space-y-4">
        {/* All pages option with distinct styling */}
        <div className="pb-4 border-b border-gray-200">
          <Checkbox
            label={items[0].label}
            checked={items[0].checked}
            onChange={() => handleCheckboxChange("all")}
            className="font-medium"
          />
        </div>
        
        {/* Other pages with consistent spacing */}
        <div className="space-y-3">
          {items.slice(1).map((item) => (
            <div key={item.id}>
              <Checkbox
                label={item.label}
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-200 my-4"/>
      <Button className="w-full">
        Done
      </Button>
    </div>
  );
}
