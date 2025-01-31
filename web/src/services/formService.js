const submitFormData = async (datos) => {
    const api_url = import.meta.env.VITE_API_BASE_URL
  try {
    const response = await fetch(api_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      throw new Error("Error al registrar los datos");
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};

export default submitFormData;
