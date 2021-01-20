import React from "react";
import Button from "@material-ui/core/Button";

interface Func {
  onHandleSort: (val: number) => void;
}

export default function SortBox({ onHandleSort }: Func) {
  return (
    <div>
      <Button variant="contained" onClick={() => onHandleSort(1)}>
        ascending
      </Button>
      <Button variant="contained" onClick={() => onHandleSort(-1)}>
        descending
      </Button>
    </div>
  );
}
