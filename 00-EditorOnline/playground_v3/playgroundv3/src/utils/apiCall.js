

// Realiza una solicitud GET a la API para obtener una lista de Usuarios
export async function getUsers() {
    try {
        const response = await fetch('/api/usuarios');
        if (!response.ok) {
            throw new Error(`Error al obtener los usuarios: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;  // Vuelve a lanzar el error para manejarlo externamente si es necesario
    }
}

//Realiza una solicitud GET a la API para obtener solo un Usuario recibe el ID por parametro 
export async function getUserById(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/usuarios/${id}`);
        if (!response.ok) {
            throw new Error(`Error al obtener el usuario: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;  // Vuelve a lanzar el error para manejarlo externamente si es necesario
    }
}

// Realiza una solicitud GET a la API para obtener un Usuario por correo electrónico
export async function getUserByEmail(email) {
    try {
        const response = await fetch(`http://localhost:3000/api/usuarios?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
            throw new Error(`Error al obtener el usuario por email: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;  // Vuelve a lanzar el error para manejarlo externamente si es necesario
    }
}



export async function createUser({username, email, password}) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        passwordHash: password
      })
    };
  
      const response = await fetch('http://localhost:3000/api/usuarios', options);
      const data = await response.json();
      console.log(data);
      return data;
    
  }
  

  
// Realiza una solicitud POST a la API para crear una nueva página
export async function createPage(pageData) {
    try {
        const response = await fetch('/api/pages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pageData),
        });
        if (!response.ok) {
            throw new Error(`Error al crear la página: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Realiza una solicitud PUT a la API para actualizar una página existente
export async function updatePage(pageId, pageData) {
    try {
        const response = await fetch(`/api/pages/${pageId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pageData),
        });
        if (!response.ok) {
            throw new Error(`Error al actualizar la página: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Realiza una solicitud DELETE a la API para eliminar una página
export async function deletePage(pageId) {
    try {
        const response = await fetch(`/api/pages/${pageId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Error al eliminar la página: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
