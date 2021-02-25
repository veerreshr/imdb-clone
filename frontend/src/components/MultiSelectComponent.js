import React, { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";

function MultiSelectComponent({ options, selectedData, handleChange }) {
  options = options.map((d) => {
    return { label: d, value: d };
  });

  selectedData = selectedData
    ? selectedData.map((d) => {
        return { label: d, value: d };
      })
    : [];

  // const [selected, setSelected] = useState([...selectedData]);

  return (
    <MultiSelect
      options={options}
      value={selectedData}
      onChange={handleChange}
      labelledBy={"Select"}
    />
  );
}

export default MultiSelectComponent;
