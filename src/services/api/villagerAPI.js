import { API_KEY, API_URL } from "@/constant"

const getVillagers = async function() {
    const response = await fetch(`${API_URL}/villagers?${API_KEY}`)
    if (response.status == 200)
        return await response.json()
    else
        new Error(response.statusText)
}

const getAVillager = async function(name) {
    const response = await fetch(`${API_URL}/villagers?name=${name}&${API_KEY}`)
    if (response.status == 200)
        return await response.json()
    else
        new Error(response.statusText)
}

export { getVillagers, getAVillager }       