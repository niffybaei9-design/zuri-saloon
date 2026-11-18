const values = [
  { title: 'Our mission', text: 'To make every client feel looked after, from the first hello to the last mirror check.' },
  { title: 'Our vision', text: 'To be the Lagos studio people recommend first for healthy hair, skin and nails.' },
  { title: 'Our promise', text: 'Clean tools, honest prices and no rushing, even on busy Saturdays.' },
]

function InfoBlock({ title, text }) {
  return (
    <div className="info-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function About() {
  return (
    <div className="container section">
      <h1>About Zuri</h1>
      <div className="about-top">
        <img src="/images/about.svg" alt="Illustration representing the studio" />
        <div>
          <p>
            Zuri Hair &amp; Beauty Studio started in 2016 as a two-chair room in Surulere. Our founder,
            Zuri Bello, trained as a braider and wanted a place where the work was neat, the space was
            calm and clients were never kept waiting for hours.
          </p>
          <p>
            Today we are a team of twelve stylists, nail technicians, makeup artists and barbers in
            Lekki. We still work the same way: one client at a time, with products we would use ourselves.
          </p>
        </div>
      </div>
      <div className="grid">
        {values.map((v) => (
          <InfoBlock key={v.title} title={v.title} text={v.text} />
        ))}
      </div>
    </div>
  )
}
