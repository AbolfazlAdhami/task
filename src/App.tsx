import React from "react";
import CoustomButton from "./components/Button";
import SelectBox from "./components/SelectBox";
function App() {
  return (
    <section className="min-w-screen min-h-screen p-5   bg-slate-100">
      <h1 className="text-3xl font-mono font-light ">Domains</h1>
      <div className="flex items-center  my-8 justify-between">
        <CoustomButton type="primary" size="large" onClick={() => console.log(123)}>
          Add Domain
        </CoustomButton>
        <>
          <SelectBox options={[{ value: "sample", label: <span>sample</span> }]} />
          
        </>
      </div>
    </section>
  );
}

export default App;
