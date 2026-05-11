import { getProperties } from "@/services/property2.service";
import React from "react";


type PropertyTypeCount = {
  type: string;
  count: number;
};

export default async function PopularPropertyTypes() {
  const properties = await getProperties();

  // group by propertyType
  const grouped = properties.reduce<Record<string, number>>(
    (acc, property) => {
      const type = property.propertyType;

      if (!type) return acc;

      acc[type] = (acc[type] || 0) + 1;

      return acc;
    },
    {}
  );

  const typeList: PropertyTypeCount[] = Object.entries(grouped).map(
    ([type, count]) => ({
      type,
      count,
    })
  );

  return (
    <div className="w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-5">

      {typeList.length > 0 ? (
        typeList.slice(0, 3).map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">
              {item.type}
            </h3>

            <p className="text-muted-foreground mt-2">
              {item.count} Properties
            </p>
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center text-muted-foreground">
          No property types found
        </p>
      )}

    </div>
  );
}