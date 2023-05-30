import bp from "@/styles/breakpoints"

export default function Projects(params) {
  return (
    <div css={bp({ margin: "11px" })}>
      {/* Main desc */}
      <div css={bp({ margin: 11, padding: 22, backgroundColor: "#D3DFE6" })}>
        <h3>Сосновая площадь</h3>
        <p>
          Большой ТЦ в новом районе в поселке Горелово. Это будет целый кластер объектов с классной
          парковой территорией, детскими площадками, ресторанами и кафе. Запуск запланирован на 2024
          год. Вокруг строится жилье объемом 20000 человек, так что Сосновая площадь станет
          локальным местом притяжения. Проект доступен для инвестиций.{" "}
        </p>
      </div>
      {/* Main Image */}
      <div css={bp({ margin: "22px 11px", height: 600, backgroundColor: "#F7F8F7" })}></div>
      {/* Two more projects */}
      <div css={bp({ display: "flex" })}>
        <div
          css={bp({
            margin: "0 11px",
            flexBasis: "50%",
            padding: 22,
            backgroundColor: "#D3DFE6",
          })}>
          <h3>Янино Square</h3>
        </div>
        <div
          css={bp({
            margin: "0 11px",
            flexBasis: "50%",
            padding: 22,
            backgroundColor: "#D3DFE6",
          })}>
          <h3>Новый дом на Новой улице</h3>
        </div>
      </div>
    </div>
  )
}
