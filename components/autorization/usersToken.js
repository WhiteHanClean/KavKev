import axios from "axios"

export async function loginUser(data) {
    try {
        await axios
            .post("http://kavkev.kg:8080/api/login/", data)
            .then((userToken) => localStorage.setItem("userToken", userToken.data.token))
    }
    catch (e) {
        return alert("Вы неправильно ввели логин или пароль")
    }
}