import * as dummyData from "./dummyDataAPI";

const DataDemo = () => {
  return (
    <>
      <h2>All entries</h2>
      {dummyData.getListView().map((entry) => (
        <div>
          {Object.entries(entry).map(([k, v]) => (
            <div>
              {k}: {v}
            </div>
          ))}
          —
        </div>
      ))}
      <hr />

      <h2>Entries filtered: "finska"</h2>
      {dummyData.getListView({ languages: ["finska"] }).map((entry) => (
        <div>
          {Object.entries(entry).map(([k, v]) => (
            <div>
              {k}: {v}
            </div>
          ))}
          —
        </div>
      ))}
      <hr />

      <h2>Entries filtered: "engelska" "depression"</h2>
      {dummyData
        .getListView({ languages: ["engelska"], areas: ["depression"] })
        .map((entry) => (
          <div>
            {Object.entries(entry).map(([k, v]) => (
              <div>
                {k}: {v}
              </div>
            ))}
            —
          </div>
        ))}
      <hr />

      <h2>Entries filtered: free text "staffan"</h2>
      {dummyData
        .getListView({
          languages: ["engelska"],
          areas: ["javascript"],
          freeText: "staffan",
        })
        .map((entry) => (
          <div>
            {Object.entries(entry).map(([k, v]) => (
              <div>
                {k}: {v}
              </div>
            ))}
            —
          </div>
        ))}
      <hr />

      <h2>All languages</h2>
      <ul>
        {dummyData.getAllUniqueLanguages().map((v) => (
          <li>{v}</li>
        ))}
      </ul>
      <hr />
      <h2>All areas</h2>
      <ul>
        {dummyData.getAllUniqueAreas().map((v) => (
          <li>{v}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

export default DataDemo;
