function MapGoogle() {
  return (
    <div className="mapa">
      <div className="borderT"></div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.083057234764!2d-64.181348!3d-31.434212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2f54d372bf1%3A0xf1d83ddc363cda16!2sFacultad%20de%20Ciencias%20Exactas%2C%20F%C3%ADsicas%20y%20Naturales!5e0!3m2!1ses-419!2sar!4v1731029204729!5m2!1ses-419!2sar"
          width={"100%"}
          height={600}
          style={{ border: 0 }}
          allowFullScreen={""}
          loading={"lazy"}
          referrerPolicy={"no-referrer-when-downgrade"}
        ></iframe>
      </div>
      <div className="borderB"></div>
    </div>
  );
}

export default MapGoogle;
