import { cn } from "@/lib/utils";
import { useState } from "react";
import { RangeInput, useRange } from "react-instantsearch";
import { Slider } from "./slider";
import { Input } from "./input";

interface RangeSliderProps {
  attribute: string;
  id: string;
}

export default function RangeSlider(props: RangeSliderProps) {
  const { start, range, refine } = useRange(props);
  const { min, max } = range;
  const [value, setValue] = useState<[number, number]>(
    () => [min, max] as [number, number]
  );

  const handleChange = (newValue: [number, number]) => {
    setValue(newValue);
    refine(value);
  };

  if (!min || !max || !start[0] || !start[1]) {
    return <RangeInput {...props} />;
  }

  const from =
    value[0] || Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
  const to =
    value[1] || Math.min(max, Number.isFinite(start[1]) ? start[1] : max);

  return (
    <>
      <Slider
        value={[from, to]}
        min={min}
        max={max}
        step={1}
        onValueChange={handleChange}
        className={cn("w-full")}
      />
      <div className="flex flex-wrap justify-between mt-2">
        <div className="flex items-center gap-2">
          <label htmlFor="min">from</label>
          <Input
            id="min"
            className="w-20 h-8 shadow-none"
            type="number"
            value={from}
            step={1}
            min={min}
            max={max}
            onChange={(e) => handleChange([Number(e.target.value), to])}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="max">to</label>
          <Input
            id="max"
            className="w-20 h-8 shadow-none"
            type="number"
            value={to}
            step={1}
            min={min}
            max={max}
            onChange={(e) => handleChange([from, Number(e.target.value)])}
          />
        </div>
      </div>
    </>
  );
}
