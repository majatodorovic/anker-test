"use client";
import { useState, useEffect } from "react";
import classes from "./Filter.module.css";
import Link from "next/link";
import Slider from "@mui/material/Slider";

const FilterIn = ({ filter, onChange = () => {}, selected }) => {
  const checkedChanged = ({ target }) => {
    if (target.checked) {
      if (!selected.includes(target.value)) {
        const tmp = [...selected, target.value];

        onChange({
          column: filter?.params?.use_field
            ? filter[filter?.params?.use_field]
            : filter.key,
          value: { selected: tmp },
        });
      }
    } else {
      const tmp = [...selected];
      var index = tmp.indexOf(target.value);
      if (index !== -1) {
        tmp.splice(index, 1);
      }

      onChange({
        column: filter.key,
        value: { selected: tmp },
      });
    }
  };
  return (
    <>
      {(filter?.params?.items ?? []).map((item) => (
        <div key={item.id}>
          <div className="mt-2 flex flex-row items-center gap-2 pl-4">
            <input
              type="checkbox"
              className="h-5 w-5 border-black bg-white text-primary focus:ring-0"
              name={item.label}
              checked={selected.includes(
                filter?.params?.use_field
                  ? item[filter?.params?.use_field]
                  : item.key,
              )}
              onChange={checkedChanged}
              value={
                filter?.params?.use_field
                  ? item[filter?.params?.use_field]
                  : item.key
              }
              id={"chbx-" + item.id}
            />
            <label className="font-light" htmlFor={"chbx-" + item.id}>
              {item.label}
            </label>
          </div>
        </div>
      ))}
    </>
  );
};

const FilterRange = ({ filter, onChange, selected }) => {
  const [selectedValue, setSelectedValue] = useState(
    selected.length === 2
      ? selected
      : [Number(filter.params.min), Number(filter.params.max)],
  );
  const onRangeChange = (data, value) => {
    onChange({
      column: filter?.params?.use_field
        ? filter[filter?.params?.use_field]
        : filter.key,
      value: { selected: value },
    });
  };

  useEffect(() => {
    if (selected.length !== 2)
      setSelectedValue([Number(filter.params.min), Number(filter.params.max)]);
  }, [selected, filter.params]);

  return (
    <>
      <div className={classes.slidecontainer}>
        <Slider
          sx={{
            width: "100%",
            "& .MuiSlider-thumb": {
              color: "#00A7E1",
            },
            "& .MuiSlider-track": {
              color: "#00A7E1",
            },
            "& .MuiSlider-rail": {
              color: "black",
            },
            "& .MuiSlider-active": {
              color: "#00A7E1",
            },
          }}
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
          onChangeCommitted={onRangeChange}
          valueLabelDisplay="auto"
          min={Number(filter.params.min)}
          max={Number(filter.params.max)}
        />
      </div>
      <div className={classes.valueHolder}>
        <span className={`font-light max-md:text-[1rem] md:text-[1rem]`}>
          od: {selectedValue[0]}
        </span>
        <span className={`font-light max-md:text-[1rem] md:text-[1rem]`}>
          {" "}
          do: {selectedValue[1]}
        </span>
      </div>
    </>
  );
};

const FilterWithinTree = ({ filter }) => {
  return (
    <>
      {(filter?.params?.items ?? [])?.map((item) => (
        <div key={item.id}>
          <div className="mt-2 flex flex-row items-center gap-2 pl-4">
            <Link
              className="font-light hover:text-primary"
              htmlFor={"chbx-" + item.id}
              href={`${item?.slug_path}`}
            >
              {item.label}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const Filter = ({
  filter,
  selectedFilters,
  setSelectedFilters,
  setTempSelectedFilters,
  setLastSelectedFilterKey,
  setChangeFilters,
  setPage,
}) => {
  const changeHandler = (data) => {
    let tmp = [...selectedFilters];
    const filtered = tmp.filter((item) => item.column === data.column);
    if (data.value.selected.length === 0) {
      if (filtered.length > 0) {
        const index = tmp.indexOf(filtered[0]);
        tmp.splice(index, 1);
      }
    } else {
      if (filtered.length > 0) {
        tmp = tmp.map((item) => (item.column === data.column ? data : item));
      } else {
        tmp.push(data);
      }
    }
    setPage(1);
    setSelectedFilters([...tmp]);
    setTempSelectedFilters([...tmp]);
    setLastSelectedFilterKey(data.column);
    setChangeFilters(true);
  };

  let selected = selectedFilters.filter(
    (item) => item.column === filter.key,
  )[0];
  selected = selected ? selected.value.selected : [];

  switch (filter.type) {
    case "range":
      return (
        <FilterRange
          filter={filter}
          onChange={changeHandler}
          selected={selected}
        />
      );
    case "in":
      return (
        <FilterIn
          filter={filter}
          onChange={changeHandler}
          selected={selected}
        />
      );
    case "within_tree":
      return <FilterWithinTree filter={filter} />;
  }
};

export default Filter;
