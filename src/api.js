var url = 'http://localhost:3000/'
const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

async function getUsers() {
    try {
        const res = await fetch(`${url}users`, {
            mode: "cors",
            method: "GET",
        })
        if(!res.ok) {
            const error = await res.json()
            throw error
        }
        const res_1 = await res.json()
        return {data: res_1.data}
    } catch (error) {
        return {error: error}
    }
}

async function getDraftUsers() {
    try {
        const res = await fetch(`${url}users/draft`, {
            mode: "cors",
            method: "GET",
        })
        if(!res.ok) {
            const error = await res.json()
            throw error
        }
        const res_1 = await res.json()
        return {data: res_1.data}
    } catch (error) {
        return {error: error}
    }
}

async function saveDraftUser(document_id, name, last_name) {
    try {
        const res = await fetch(`${url}users/draft`, {
            mode: "cors",
            method: "POST",
            body: JSON.stringify({
                document_id,
                name,
                last_name
            }),
            headers: headers
        })
        if(!res.ok) {
            const error = await res.json()
            throw error
        }
        const res_1 = await res.json()
        return {data: res_1.data}
    } catch (error) {
        return {error: error}
    }
}

async function getDraftUser(id) {
    try {
        const res = await fetch(`${url}users/draft/${id}`, {
            mode: "cors",
            method: "GET",
            headers: headers
        })
        if(!res.ok) {
            const error = await res.json()
            throw error
        }
        const res_1 = await res.json()
        return {data: res_1.data}
    } catch (error) {
        return {error: error}
    }
}

async function updateDraftUser(id, document_id, name, last_name) {
    try {
        const res = await fetch(`${url}users/draft/${id}`, {
            mode: "cors",
            method: "PATCH",
            body: JSON.stringify({
                document_id,
                name,
                last_name
            }),
            headers: headers
        })
        if(!res.ok) {
            const error = await res.json()
            throw error
        }
        const res_1 = await res.json()
        return {data: res_1.data}
    } catch (error) {
        return {error: error}
    }
}

async function deleteDraftUser(id) {
    try {
        const res = await fetch(`${url}users/draft/${id}`, {
            mode: "cors",
            method: "DELETE",
            headers: headers
        })
        if(!res.ok) {
            const error = await res.json()
            throw error
        }
        const res_1 = await res.json()
        return {data: res_1.data}
    } catch (error) {
        return {error: error}
    }
}

async function syncDraftTable() {
    try {
        const res = await fetch(`${url}users/draft/publish`, {
            mode: "cors",
            method: "POST",
        })
        if(!res.ok) {
            const error = await res.json()
            throw error
        }
        const res_1 = await res.json()
        return {data: res_1.data}
    } catch (error) {
        return {error: error}
    }
}

export default {
    getDraftUsers, getUsers, saveDraftUser, getDraftUser, updateDraftUser, deleteDraftUser, syncDraftTable
}