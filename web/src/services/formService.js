const submitFormData = async (datos) => {
    try {
        const response = await fetch("http://localhost:3000/form", {
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