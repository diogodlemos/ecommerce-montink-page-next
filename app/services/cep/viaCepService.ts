import axios from "axios"

const findCepToValidation = async (cep: string) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(response);
        return response;
    } catch (error) {
        console.log("error", error)
    }
}

export default findCepToValidation;